# Launch status and remaining inputs

This is a release candidate. It has not been uploaded to WHC or verified as live.

## Needed to finish publication

- **Hosting access:** the GitHub repository is connected, but the WHC/cPanel account, authenticated upload channel and exact `screeners.ca` document root have not been supplied. The domain currently serves WHC's registrar parking page. Obtain hosting-specific targets before any DNS changes; preserve existing email records.
- **Logo signoff:** the selected S-with-screening-dots direction has been refined into SVG assets and a visual review sheet. The master brief requires presenting refinements for approval before treating them as final. Review `assets/brand/preview.html` or the supplied raster review sheet.
- **Production checks:** validate HTTPS/redirects, EN/FR deep links, responsive/browser and keyboard behaviour, server configuration and the enquiry route on the actual host. The managed environment has no supported browser-control tool; browser QA has not been performed.
- **Operational/legal review:** the operator must confirm the privacy notice, contracting identity and terms against actual enquiry handling. French content is complete; a final operator/native-language review remains appropriate before public launch.

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
