<?php
declare(strict_types=1);

// Optional WHC/PHP 8+ transport. Disabled until configured outside the web root.
ini_set('display_errors', '0');
header('Content-Type: application/json; charset=UTF-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

function respond(int $status, array $payload): void {
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(405, ['ok' => false, 'error' => 'method_not_allowed']);
}
if ((int)($_SERVER['CONTENT_LENGTH'] ?? 0) > 32768) {
    respond(413, ['ok' => false, 'error' => 'request_too_large']);
}
$siteOrigin = 'https://screeners.ca';
$origin = rtrim((string)($_SERVER['HTTP_ORIGIN'] ?? ''), '/');
$referer = (string)($_SERVER['HTTP_REFERER'] ?? '');
$refererOrigin = '';
if ($referer !== '') {
    $parsed = parse_url($referer);
    if (is_array($parsed) && isset($parsed['scheme'], $parsed['host'])) {
        $refererOrigin = $parsed['scheme'] . '://' . $parsed['host'] . (isset($parsed['port']) ? ':' . $parsed['port'] : '');
    }
}
if (($origin !== '' && $origin !== $siteOrigin) || ($origin === '' && $refererOrigin !== $siteOrigin) || ($_SERVER['HTTP_SEC_FETCH_SITE'] ?? '') === 'cross-site') {
    respond(403, ['ok' => false, 'error' => 'origin_not_allowed']);
}
$raw = file_get_contents('php://input', false, null, 0, 32769);
if ($raw === false || strlen($raw) > 32768) {
    respond(413, ['ok' => false, 'error' => 'request_too_large']);
}
$contentType = strtolower(explode(';', $_SERVER['CONTENT_TYPE'] ?? '')[0]);
if ($contentType === 'application/json') {
    $input = json_decode($raw, true);
    if (!is_array($input) || json_last_error() !== JSON_ERROR_NONE) {
        respond(400, ['ok' => false, 'error' => 'invalid_json']);
    }
} elseif ($contentType === 'application/x-www-form-urlencoded') {
    $input = $_POST;
} else {
    respond(415, ['ok' => false, 'error' => 'unsupported_content_type']);
}
$required = ['name','company','email','phone','province','city','inquiry_type','equipment_type','material','timeline','delivery_location','description','consent'];
$data = [];
$errors = [];
foreach (array_merge($required, ['throughput','website','lang']) as $key) {
    $value = isset($input[$key]) && is_string($input[$key]) ? trim($input[$key]) : '';
    $data[$key] = $value;
    if (in_array($key, $required, true) && $value === '') $errors[] = $key;
    if (preg_match('//u', $value) !== 1) $errors[] = $key;
    if (preg_match('/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/', $value)) $errors[] = $key;
    // UTF-8 is at most four bytes per character; body size is bounded above too.
    if (preg_match_all('/./us', $value) > ($key === 'description' ? 5000 : 300)) $errors[] = $key;
}
if ($data['website'] !== '') respond(400, ['ok' => false, 'error' => 'invalid_request']);
if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL) || preg_match('/[\r\n]/', $data['email'])) $errors[] = 'email';
$digits = preg_replace('/\D/', '', $data['phone']);
if (strlen($digits) < 7 || strlen($digits) > 20) $errors[] = 'phone';
if (!in_array($data['province'], ['AB','BC','MB','NB','NL','NS','NT','NU','ON','PE','QC','SK','YT'], true)) $errors[] = 'province';
if (!in_array($data['inquiry_type'], ['buy','rent','parts','service','on-site'], true)) $errors[] = 'inquiry_type';
if (!in_array($data['equipment_type'], ['mobile-screeners','trommel-screeners','vibrating-screeners','scalping-screeners','compact-screeners','stationary-screening-plants','screening-conveyors','unsure'], true)) $errors[] = 'equipment_type';
if ($data['consent'] !== 'yes') $errors[] = 'consent';
if (!in_array($data['lang'], ['en','fr'], true)) $errors[] = 'lang';
if ($errors) respond(422, ['ok' => false, 'error' => 'validation_failed', 'fields' => array_values(array_unique($errors))]);

$documentRoot = realpath($_SERVER['DOCUMENT_ROOT'] ?? dirname(__DIR__));
if ($documentRoot === false) respond(503, ['ok' => false, 'error' => 'not_configured']);
$configPath = getenv('QUOTE_CONFIG_FILE') ?: dirname($documentRoot) . '/screeners-quote-config.php';
$configReal = realpath($configPath);
$config = [];
if ($configReal !== false) {
    if ($configReal === $documentRoot || str_starts_with($configReal, $documentRoot . DIRECTORY_SEPARATOR)) {
        respond(503, ['ok' => false, 'error' => 'unsafe_configuration']);
    }
    $loaded = require $configReal;
    if (is_array($loaded)) $config = $loaded;
}
$setting = static function (string $name, string $default = '') use ($config): string {
    $environment = getenv($name);
    return $environment !== false ? (string)$environment : (string)($config[$name] ?? $default);
};
if (!filter_var($setting('QUOTE_ENABLED', 'false'), FILTER_VALIDATE_BOOLEAN)) {
    respond(503, ['ok' => false, 'error' => 'not_configured']);
}
$to = $setting('QUOTE_TO', 'info@screeners.ca');
$from = $setting('QUOTE_FROM', 'no-reply@screeners.ca');
if (!filter_var($to, FILTER_VALIDATE_EMAIL) || !filter_var($from, FILTER_VALIDATE_EMAIL) || preg_match('/[\r\n]/', $to . $from)) {
    respond(503, ['ok' => false, 'error' => 'not_configured']);
}

// Per-IP throttle uses a private, locked file and expires entries after 15 min.
$rateRoot = sys_get_temp_dir() . '/screeners-quote-' . substr(hash('sha256', $documentRoot), 0, 16);
if (!is_dir($rateRoot) && !@mkdir($rateRoot, 0700, true) && !is_dir($rateRoot)) {
    respond(503, ['ok' => false, 'error' => 'temporarily_unavailable']);
}
$rateFile = $rateRoot . '/' . hash('sha256', (string)($_SERVER['REMOTE_ADDR'] ?? 'unknown')) . '.json';
$handle = @fopen($rateFile, 'c+');
if ($handle === false || !flock($handle, LOCK_EX)) {
    if (is_resource($handle)) fclose($handle);
    respond(503, ['ok' => false, 'error' => 'temporarily_unavailable']);
}
@chmod($rateFile, 0600);
$history = json_decode(stream_get_contents($handle), true);
$now = time();
$history = array_values(array_filter(is_array($history) ? $history : [], static fn($stamp) => is_int($stamp) && $stamp > $now - 900));
if (count($history) >= 5) {
    flock($handle, LOCK_UN);
    fclose($handle);
    header('Retry-After: 900');
    respond(429, ['ok' => false, 'error' => 'rate_limited']);
}
$history[] = $now;
rewind($handle);
ftruncate($handle, 0);
fwrite($handle, json_encode($history));
fflush($handle);
flock($handle, LOCK_UN);
fclose($handle);

$body = "SCREENERS.CA enquiry\nLanguage: " . $data['lang'] . "\n\n";
foreach ($required as $key) {
    if ($key !== 'consent') $body .= $key . ': ' . $data[$key] . "\n\n";
}
$body .= 'throughput: ' . ($data['throughput'] ?: 'not specified') . "\n\nConsent to assess and respond: yes\n";
$headers = ['From: SCREENERS.CA <' . $from . '>', 'Reply-To: ' . $data['email'], 'MIME-Version: 1.0', 'Content-Type: text/plain; charset=UTF-8'];
try {
    $accepted = function_exists('mail') && @mail($to, 'SCREENERS.CA project enquiry', $body, implode("\r\n", $headers));
} catch (Throwable $exception) {
    $accepted = false;
}
if (!$accepted) {
    respond(502, ['ok' => false, 'error' => 'transport_failed']);
}
respond(200, ['ok' => true, 'status' => 'accepted_by_mail_transport']);
