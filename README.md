# SCREENERS.CA
Bilingual industrial screening equipment website for Canada, built from the approved brief in `CODEX_MASTER_PROMPT.md`. Target: WHC.ca Pro shared hosting.

## Current status

The implementation is a **release candidate, not a verified production launch**. It contains 64 English/French pages, shared navigation and footer, original brand assets, equipment/service/application guidance, distinct Ontario/Quebec/BC planning pages, metadata, reciprocal hreflang, sitemap, 404 and a guided quote workflow.

The owner approved the logo and release on November 12, 2026, and selected cPanel File Manager for upload. Follow [the cPanel upload steps](docs/CPANEL_UPLOAD.md) with the deployment ZIP. Live verification follows the upload.

The owner confirmed `info@screeners.ca` as the ready enquiry mailbox. The default form prepares a reviewable email draft for the visitor to send; it does not claim to send from the website. An optional, guarded PHP transport is included and disabled pending live-host testing.

`https://screeners.ca` returned WHC's registrar parking page when inspected on November 11, 2026. No WHC upload, DNS change or production delivery test has been performed. See `LAUNCH_BLOCKERS.md`.

## Build and verify

Node.js 22+; no package installation or production Node server is needed.

```sh
npm run check:syntax
npm test
npm run build
npm run check
```

Upload only the contents of `dist/` to the verified domain document root, including `.htaccess`. Follow `DEPLOYMENT.md`; do not upload the repository or private configuration.

After committing the exact source and building/checking it, `npm run package` creates a WHC ZIP and SHA-256 file in `work/releases/`. `release.json` inside the archive records the source commit, quote mode and file hashes. The GitHub workflow validates source changes and produces a downloadable static artifact; it does not deploy production.

## Files

- `data/`: paired English/French page content.
- `scripts/build.mjs`: static generator and universal components.
- `assets/`: local CSS, JavaScript, illustrations and logo assets.
- `public/`: Apache configuration and optional PHP endpoint.
- `tests/` and `scripts/check.mjs`: quote/content and generated-site checks.
- `RESEARCH.md`, `BRAND_GUIDE.md`, `SITE_MAP.md`, `ASSETS.md`, `IMPLEMENTATION_PLAN.md`: evidence and implementation references.

## Verification limits

Automated static checks and JavaScript syntax/logic tests do not establish browser rendering, keyboard/screen-reader behaviour, Apache configuration, PHP execution or email delivery. Those live-host checks remain explicit in `DEPLOYMENT.md`. This plain JavaScript/static project has no TypeScript compiler or configured lint pipeline; syntax checks are reported as syntax checks.
