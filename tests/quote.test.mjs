import test from 'node:test';
import assert from 'node:assert/strict';
import {
  requiredFields, normalizeQuote, validateQuote, formatQuote,
  equipmentTypes, inquiryTypes, provinces
} from '../assets/quote.mjs';
import equipment from '../data/equipment.mjs';

function validQuote(overrides = {}) {
  return {
    name: 'Test Contact', company: 'Example Construction', email: 'contact@example.com',
    phone: '+1 (416) 555-0100', province: 'ON', city: 'Toronto', inquiry_type: 'rent',
    equipment_type: 'mobile-screeners', material: 'Topsoil with roots', throughput: '',
    timeline: 'Next spring, four weeks', delivery_location: 'Site access details available',
    description: 'Separate reusable topsoil; confirm feed and target sizes during assessment.',
    consent: 'yes', lang: 'en', website: '', ...overrides
  };
}

test('a valid English or French enquiry passes without an optional throughput value', () => {
  assert.equal(validateQuote(validQuote()).valid, true);
  assert.equal(validateQuote(validQuote({ lang: 'fr', province: 'QC', city: 'Québec', material: 'Terre végétale humide', description: 'Besoin de séparer les matières organiques avant la réutilisation.' })).valid, true);
});

test('the client accepts every researched equipment category and all Canadian provinces/territories', () => {
  for (const page of equipment.filter(item => item.group === 'equipment')) {
    assert.ok(equipmentTypes.includes(page.id), `Form is missing researched equipment ${page.id}`);
  }
  assert.equal(provinces.length, 13);
  for (const province of provinces) assert.equal(validateQuote(validQuote({ province })).valid, true);
  for (const inquiry_type of inquiryTypes) assert.equal(validateQuote(validQuote({ inquiry_type })).valid, true);
  for (const equipment_type of equipmentTypes) assert.equal(validateQuote(validQuote({ equipment_type })).valid, true);
});

test('each mandatory field is validated, including deliberate consent', () => {
  for (const key of requiredFields) {
    const checked = validateQuote(validQuote({ [key]: '   ' }));
    assert.equal(checked.valid, false, `${key}: empty mandatory value accepted`);
    assert.ok(checked.errors[key], `${key}: missing field-specific feedback`);
  }
  for (const consent of ['on', 'true', 'no', true, 1]) {
    assert.equal(validateQuote(validQuote({ consent })).valid, false, 'Consent must be the deliberate accepted checkbox value');
  }
});

test('invalid email, phone, language and forged menu options are rejected', () => {
  for (const email of ['invalid', 'a@b', 'a@b.com\r\nBcc: other@example.com', 'a b@example.com']) {
    assert.ok(validateQuote(validQuote({ email })).errors.email, `Accepted invalid email ${JSON.stringify(email)}`);
  }
  for (const phone of ['123', 'no digits', '1'.repeat(21)]) {
    assert.ok(validateQuote(validQuote({ phone })).errors.phone);
  }
  for (const [field, value] of [['province', 'CA'], ['inquiry_type', 'lease-to-own'], ['equipment_type', 'unlisted-machine'], ['lang', 'de']]) {
    assert.equal(validateQuote(validQuote({ [field]: value })).errors[field], 'option');
  }
});

test('spam and oversized input are rejected before email-draft generation or a network request', () => {
  assert.equal(validateQuote(validQuote({ website: 'https://spam.example' })).errors.website, 'spam');
  assert.equal(validateQuote(validQuote({ name: 'x'.repeat(301) })).errors.name, 'too_long');
  assert.equal(validateQuote(validQuote({ description: 'x'.repeat(5001) })).errors.description, 'too_long');
  assert.equal(validateQuote(validQuote({ description: 'x'.repeat(5000) })).valid, true);
});

test('embedded control characters cannot reach email drafts or the server mail transport', () => {
  for (const control of ['\u0000', '\u0007', '\u001b', '\u007f']) {
    for (const field of ['name', 'company', 'material', 'description', 'throughput']) {
      const checked = validateQuote(validQuote({ [field]: `before${control}after` }));
      assert.equal(checked.valid, false, `${field}: accepted control character ${control.codePointAt(0)}`);
      assert.equal(checked.errors[field], 'invalid_text');
    }
  }
  assert.equal(validateQuote(validQuote({ description: 'First material stream\nSecond material stream\twith notes\r\nSite access to confirm.' })).valid, true, 'Normal multiline project details must remain valid');
});

test('normalization trims strings, rejects non-string field values and preserves the input', () => {
  const raw = validQuote({ name: '  Élise  ', description: ['unexpected array'], website: '   ', unexpected: 'discard me' });
  const before = structuredClone(raw);
  const normalized = normalizeQuote(raw);
  assert.equal(normalized.name, 'Élise');
  assert.equal(normalized.description, '');
  assert.equal(normalized.website, '');
  assert.equal('unexpected' in normalized, false);
  assert.deepEqual(raw, before);
  assert.equal(validateQuote(raw).errors.description, 'required');
});

test('email-draft formatting retains project details and localizes consent without implying delivery', () => {
  const en = formatQuote(validQuote(), { name: 'Name', material: 'Material' });
  assert.ok(en.startsWith('SCREENERS.CA enquiry'));
  assert.ok(en.includes('Material: Topsoil with roots'));
  assert.ok(en.includes('Next spring, four weeks'));
  assert.ok(en.includes('Consent:'));
  assert.ok(!/successfully (?:sent|delivered)|submission received/i.test(en));
  const fr = formatQuote(validQuote({ lang: 'fr' }), { name: 'Nom' });
  assert.ok(fr.startsWith('Demande SCREENERS.CA'));
  assert.ok(fr.includes('Consentement :'));
  assert.ok(fr.includes('Nom: Test Contact'));
});
