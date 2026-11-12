# SCREENERS.CA deployment

This repository builds a static bilingual website for WHC.ca Pro shared hosting. Creating a successful build does not publish it. Production hosting, document root, DNS ownership and mail delivery must be verified in the actual account before claiming launch.

## Reproduce the candidate

Use Node.js 22 or newer (the candidate was built with Node.js 24). No production Node runtime, database or package installation is required for the static pages.

```sh
npm run build
npm run check
npm test
npm run check:syntax
```

The `dist/` directory is the website document root. Upload its **contents**, including hidden `.htaccess` if present; do not upload the repository, research documents, source files, local environment files or private mail configuration. Keep the local release archive and its source commit together for rollback.

The verification script checks generated links and assets, one H1 per localized page, unique metadata, language declarations, production canonicals, reciprocal English/French alternatives, JSON-LD syntax, sitemap membership and quote-form labels/consent. It cannot verify that a mail server delivers messages or that production Apache applies the expected rewrite rules.

## Confirm the WHC account

1. Confirm that `screeners.ca` is added to the intended WHC account and identify its exact cPanel document root. Do not assume that `public_html/` belongs exclusively to this domain.
2. Confirm that the root is backed up and contains no unrelated site. Download a dated copy of the current files and preserve any existing `.htaccess` before replacing anything.
3. Confirm Apache `.htaccess` support, SSL/AutoSSL status and the PHP version if the optional quote endpoint will be used. Static pages do not require PHP. Use a maintained PHP release for the endpoint and verify its enabled functions with WHC support if necessary.
4. Review any current DNS records before changes, including MX/TXT email records. Keep the existing mail records unless the mail administrator explicitly changes them. The account-specific A/AAAA/CNAME targets must come from WHC; no targets are assumed here.

Never put cPanel passwords, SSH keys, SMTP secrets, API keys or private account screenshots into the repository or chat. Connect an approved authenticated deployment channel or perform the upload inside the hosting account.

## Quote delivery

The owner has confirmed that `info@screeners.ca` is ready to receive enquiries. Website-to-mailbox delivery has not been tested. Confirm that the chosen server transport is authorized and that a real submitted enquiry arrives with a working Reply-To address before enabling direct submissions.

The default build uses an email draft: the visitor reviews the enquiry in their email application and sends it themselves. It does not claim that a web form has sent the message. This works without a server integration, but the visitor needs an email application; the visible email address and phone remain alternative channels.

For direct server submission, configure the optional PHP endpoint and test it on WHC before selecting endpoint mode:

| Setting | Purpose / default |
| --- | --- |
| `QUOTE_ENABLED` | Explicit activation; disabled by default. |
| `QUOTE_TO` | Destination mailbox; approved address is `info@screeners.ca`. Confirm receipt before activation. |
| `QUOTE_FROM` | Host-authorized sender, such as `no-reply@screeners.ca`; confirm mailbox/domain authorization with WHC. |
| `QUOTE_CONFIG_FILE` | Optional absolute path to a private PHP configuration file outside the web root. Default: `screeners-quote-config.php` in the document root's parent. Read the endpoint source for the exact configuration format. |
| `QUOTE_TRANSPORT=endpoint` | Build setting that selects direct endpoint submission after hosting integration is verified. |
| `QUOTE_ENDPOINT` | Build-time same-origin absolute endpoint path; default `/api/quote.php`. External form providers require an intentional integration change. |

Keep private configuration outside the web document root or use host-provided environment settings. Do not place secrets in static JavaScript. The optional endpoint accepts the quote fields as same-origin JSON or form POST, validates the request on the server and checks the `website` anti-spam field. A PHP `mail()` acceptance means that the server accepted a delivery attempt; it does not prove inbox delivery. Until endpoint activation and delivery testing are complete, retain the email-draft mode and visible direct email/telephone alternatives.

A private configuration file returns a PHP array. Create it in the verified document root's parent, or set `QUOTE_CONFIG_FILE` to another absolute private path. Enable it only during controlled integration testing or after the transport has been verified:

```php
<?php
return [
    'QUOTE_ENABLED' => 'true',
    'QUOTE_TO' => 'info@screeners.ca',
    'QUOTE_FROM' => 'no-reply@screeners.ca',
];
```

The endpoint accepts the exact production origin `https://screeners.ca`; an unrelated staging hostname will be rejected. Test static content on staging, then perform the controlled endpoint test under the production origin. Do not weaken the origin check for a convenient preview.

To build the verified endpoint configuration:

```sh
QUOTE_TRANSPORT=endpoint npm run build
npm run check
npm test
```

On the real host, test an English and French request, missing consent, an invalid email, the anti-spam field, a transport failure and a successful message. Verify that error feedback retains entered values and is exposed to assistive technology. Verify that the default email-draft mode produces correctly localized subject/body text without claiming transmission. Never use real customer information in smoke tests. Clear test messages according to the mailbox policy.

## Publish and verify

1. Run the production build and static checks on the exact release commit.
2. Upload `dist/` into a temporary staging directory on the same hosting account if available. Verify HTTPS, content paths and optional PHP behavior there before replacing production.
3. Upload the release to the verified production document root. Preserve any host-managed certificate/validation directories and private configuration. Merge `.htaccess` directives with existing host rules if required.
4. In the hosting control panel, enable a permanent HTTP-to-HTTPS redirect and choose the canonical apex hostname `screeners.ca`. Check for redirect loops behind the host proxy. Root requests should resolve to the English landing page; `/en/` and `/fr/` must remain directly accessible.
5. Check the homepage, every main menu destination, both quote routes, a nested equipment page, an unknown URL, `robots.txt` and `sitemap.xml` over production HTTPS.
6. At mobile, tablet and wide desktop sizes, inspect hero text legibility, menu layout, EN/FR switching, form controls and horizontal overflow. Use keyboard-only navigation, visible focus, reduced motion and a screen-reader spot check. Browser QA remains unverified until these checks are performed.
7. Confirm that the French switch on an inner page opens its corresponding French content, and that the reciprocal switch returns to the same English subject.
8. Submit and receive a real test enquiry through the selected transport. Verify sender authentication/delivery, not merely the HTTP response.
9. Record the deployment time, source commit, installed host configuration and test results. Report the public URL only after it is observed live.

Search Console and Bing Webmaster Tools verification/submission are separate account actions. Neither is assumed to have happened. Submit `https://screeners.ca/sitemap.xml` only after the intended pages are accessible and indexable.

## Rollback

Restore the previous document-root backup and its matching `.htaccess` rules using the same authenticated hosting channel. Preserve current mailbox/DNS configuration unless it caused the incident and the account owner authorizes a specific reversal. Verify HTTPS, the homepage, main menu and enquiry route after restoration. Keep failed-release files and diagnostic details outside the public root for investigation.

## Current verification limit

No WHC upload, DNS change, mailbox delivery test or production smoke test is recorded by this document. The managed environment has no supported `cua_repl.js` browser tool, so the Sites skill prohibits starting a substitute preview/browser path. Static checks are automated; visual responsiveness and browser interactions require a supported preview or real-host review.

The optional PHP source has been reviewed for bounded input, same-origin checks, explicit enablement, server-side validation, private configuration placement, header injection prevention and per-IP rate limiting. PHP is not installed in the build environment; PHP syntax/runtime behavior and the host mail transport remain unverified. JavaScript syntax checks are separate from TypeScript type checking; this dependency-free JavaScript project does not use TypeScript or a lint framework.

The release build normalizes public directories to `755` and files to `644`; the static checker verifies those modes before packaging. Preserve those permissions when extracting the release on WHC.
