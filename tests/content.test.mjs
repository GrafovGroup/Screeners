import test from 'node:test';
import assert from 'node:assert/strict';
import core from '../data/core.mjs';
import equipment from '../data/equipment.mjs';
import industries from '../data/industries.mjs';

const subjects = [...equipment, ...industries];
const pages = [...core, ...subjects];
const requiredCore = ['home', 'equipment', 'services', 'industries', 'locations', 'about', 'contact', 'request-quote', 'privacy', 'terms'];
const requiredEquipment = [
  'mobile-screeners', 'trommel-screeners', 'vibrating-screeners',
  'scalping-screeners', 'compact-screeners', 'stationary-screening-plants'
];
const requiredServices = [
  'rentals', 'parts', 'repairs-and-maintenance', 'on-site-screening', 'equipment-sourcing'
];
const requiredIndustries = [
  'aggregates', 'construction', 'mining', 'recycling',
  'landscaping-and-topsoil', 'agriculture-and-compost', 'manufacturing'
];

test('all specified equipment, services and buyer segments have real bilingual pages', () => {
  const ids = pages.map(page => page.id);
  assert.equal(new Set(ids).size, ids.length, 'page IDs must not collide');
  for (const id of [...requiredCore, ...requiredEquipment, ...requiredServices, ...requiredIndustries]) {
    assert.ok(ids.includes(id), `Missing required subject ${id}`);
  }
  assert.equal(equipment.filter(page => page.group === 'equipment').length, 7, 'research-validated conveyors complete the equipment taxonomy');
  for (const language of ['en', 'fr']) {
    const routes = pages.map(page => page[language].slug);
    assert.equal(new Set(routes).size, routes.length, `${language}: route collision`);
    for (const page of pages) {
      const translation = page[language];
      assert.ok(translation && typeof translation === 'object', `${page.id}: missing ${language}`);
      assert.ok((page.id === 'home' && translation.slug === '') || /^[a-z0-9]+(?:[\/-][a-z0-9]+)*$/.test(translation.slug), `${page.id}: invalid localized route ${translation.slug}`);
      assert.ok(translation.title.length > 5, `${page.id}: missing localized title`);
      assert.ok(translation.description.length >= 60 && translation.description.length <= 220, `${page.id}: SEO description should be useful and concise`);
      assert.ok(translation.intro.length >= 70, `${page.id}: introduction should explain the buyer's context`);
      if (subjects.includes(page)) {
        assert.ok(translation.sections.length >= 2, `${page.id}: too little useful topic content`);
        assert.ok(translation.faq.length >= 2, `${page.id}: buyer questions missing`);
      }
      for (const section of translation.sections ?? []) {
        assert.ok(section.title?.trim(), `${page.id}: section heading missing`);
        assert.ok(section.body?.length >= 35, `${page.id}: section body missing`);
      }
      for (const entry of translation.faq ?? []) {
        assert.ok(entry.q?.endsWith('?'), `${page.id}: FAQ must state a question`);
        assert.ok(entry.a?.length >= 30, `${page.id}: FAQ answer missing`);
      }
    }
  }
});

test('regional pages contain distinct regional content rather than duplicated city templates', () => {
  const regions = industries.filter(page => page.group === 'locations');
  assert.ok(regions.length >= 3, 'Expected Ontario, Québec and British Columbia guides');
  for (const language of ['en', 'fr']) {
    const introductions = regions.map(page => page[language].intro);
    const sections = regions.map(page => page[language].sections.map(section => section.body).join(' '));
    assert.equal(new Set(introductions).size, regions.length, `${language}: repeated regional introduction`);
    assert.equal(new Set(sections).size, regions.length, `${language}: repeated regional body`);
  }
});

test('editorial content avoids unsupported commercial guarantees and invented machine specifications', () => {
  const unsupported = [
    /\bguaranteed (?:stock|availability|delivery|response)\b/i,
    /\b(?:our|owned) (?:rental )?fleet\b/i,
    /\b(?:we are|we're|your|our)\s+(?:an?\s+)?(?:authorized|authorised) (?:dealer|distributor)\b/i,
    /\b(?:same[- ]day|24[- ]hour) (?:delivery|response|service)\b/i,
    /\b\d+[,.]?\d*\s*(?:tonnes?|tons?)\s*(?:per hour|\/h)\b/i,
    /\b\d+[,.]?\d*\s*(?:hp|horsepower|kW)\b/i
  ];
  for (const page of pages) {
    for (const language of ['en', 'fr']) {
      const copy = JSON.stringify(page[language]);
      for (const pattern of unsupported) assert.ok(!pattern.test(copy), `${page.id}/${language}: unsupported promise or machine specification`);
    }
  }
});
