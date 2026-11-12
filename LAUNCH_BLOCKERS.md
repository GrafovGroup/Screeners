# Launch status and remaining inputs

The owner approved the logo and release on November 12, 2026, and chose to upload the deployment ZIP using cPanel File Manager. Upload and production verification are still pending.

## Needed to finish publication

- **cPanel upload:** the owner will upload the deployment ZIP to the document root shown in cPanel → Domains → screeners.ca. Follow `docs/CPANEL_UPLOAD.md`. The last domain check returned WHC's registrar parking page. DNS targets must come from the actual hosting account; preserve existing email records.
- **Production checks:** validate HTTPS/redirects, EN/FR deep links, responsive/browser and keyboard behaviour, server configuration and the enquiry route on the actual host. The managed environment has no supported browser-control tool; browser QA has not been performed.
- **Operational maintenance:** keep the approved privacy/terms and French content aligned with actual enquiry handling and any future service changes.

## Quote workflow

- The owner confirmed `info@screeners.ca` as the intended, ready mailbox.
- Default release mode is **email preparation**. The visitor reviews and sends the prepared message in their own mail application; a copyable plain-text fallback is provided. The site never claims that preparing a draft sends it.
- Direct web submission is implemented as optional `public/api/quote.php`, disabled by default. It needs verified PHP 8+, private configuration and an end-to-end mail test on WHC before `QUOTE_TRANSPORT=endpoint` is used. PHP runtime and delivery have not been tested here.

## Completed in source

- Ten-supplier Canadian research with primary-source URLs and a clearly unverified partner shortlist.
- Original responsive brand variants, favicon, social card and an accurately labelled application illustration.
- 32 subjects in each language: core routes, seven equipment families, five service/enquiry categories, seven industries and three distinct province guides.
- Shared uppercase navigation, top-utility EN/FR switching and approved telephone/email details.
- Metadata, production canonicals, reciprocal hreflang, structured data, XML sitemap, robots and 404.
- Client validation, consent, honeypot, explicit email-draft state; optional server validation, origin checks, body limits and rate limiting.
- Reproducible static build, automated checks, source tests, CI artifact and WHC upload/rollback instructions.

## Limits on public claims

No verified supplier authorization, stocked inventory, rental fleet, warranty, pricing, certifications, response time, local offices or completed projects is claimed. Any future claim requires evidence. Search Console and Bing Webmaster Tools verification/submission have not been performed.
