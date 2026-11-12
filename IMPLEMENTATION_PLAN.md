# SCREENERS.CA — implementation and release plan

Prepared November 11, 2026 (America/Toronto) against `CODEX_MASTER_PROMPT.md`, `CODEX_PHASES.md` and the primary-source review in `RESEARCH.md`.

## Delivery approach

Build a dependency-free Node static generator producing complete HTML documents for both languages. Shared render functions supply the utility bar, universal navigation, footer, breadcrumbs, calls to action and SEO metadata. The production output must run from ordinary Apache/cPanel shared hosting without Node, SSR or a database. Node is a build-time requirement only.

Use the repository's approved identity and contact details. Create original SVG brand/diagram assets and original generated or licensed machinery imagery. Keep asset provenance documented. Treat visual machinery scenes as category illustrations; never label them as actual inventory, a customer project or an identifiable manufacturer's machine.

## Phase A — evidence and identity

- Complete `RESEARCH.md` with ten Canadian-market suppliers, source URLs/retrieval date, category validation, cautious partner candidates and unverified claims.
- Create a refined charcoal/orange S-and-screening-dots mark and integrated SCREENERS.CA wordmark in horizontal, stacked, icon, dark/light and monochrome variations.
- Write `BRAND_GUIDE.md` with colour/contrast rules, scale, clear space, typography and appropriate variants. Preserve the required visual signoff item until the user approves final assets.
- Build reusable typography, spacing, container, responsive layout, button and focus styles. Use the industrial visual direction without repeating decorative branding across every section.

## Phase B — structure and bilingual content

- Write `SITE_MAP.md` as the exact route inventory and cross-language mapping used by the generator.
- Generate mirrored, fully translated EN/FR routes for home, equipment index and seven equipment categories, rentals, parts, services, repairs/maintenance, on-site screening, equipment sourcing, industries index and seven industry pages, locations, about, contact, request quote, privacy and terms.
- Keep EN/FR switching in the top utility bar on desktop and mobile; link to the corresponding page whenever available.
- Use EQUIPMENT, RENTALS, PARTS, SERVICES, INDUSTRIES, LOCATIONS and CONTACT in primary navigation; place ABOUT in the footer.
- Start with useful national coverage guidance and any genuinely distinct province content. Do not generate near-duplicate city pages, invented addresses or local-office claims to inflate route count.
- Write category-specific purposes, selection questions, material considerations and related links. Explain general technical concepts without invented machine specifications.
- Include only qualified commercial wording: availability, equipment, rental and service scope are confirmed for the actual project. Do not present research candidates as partners.

## Phase C — enquiry experience

The shared quote component captures name, company, email, telephone, province, city, enquiry type, equipment type, material, optional throughput, timeline, delivery location, description and consent. Add accessible labels, required-field errors, client validation and a honeypot. Do not implement analytics events before privacy/consent review.

Support an optional configurable PHP endpoint for a suitable WHC/cPanel runtime. Validate fields server-side, restrict field lengths/types, reject header injection and spam, and return explicit machine-readable success/error responses. Configure routing through server environment/configuration; never commit secrets. Keep recipients fixed by server configuration rather than accepting an arbitrary recipient from the visitor. Confirm host mail capabilities and recipient delivery with a controlled test before treating the endpoint as live.

If the live endpoint cannot be configured or verified, use an explicit alternative such as preparing an email in the visitor's mail application and say that it still needs to be sent. Provide telephone and direct email links. Never silently discard form data or display a submission confirmation for a draft. A public form must make its actual action understandable.

## Phase D — SEO, accessibility and resilience

- Generate one H1 per content page, unique titles/descriptions, canonical URLs, reciprocal `en-CA`/`fr-CA` alternate links and appropriate `x-default` behavior.
- Emit XML sitemap, robots rules, OG metadata and original share imagery. Use Organization/WebSite schema with verified facts; breadcrumbs on interior pages. Omit unverified address, price, inventory, aggregate rating and manufacturer-affiliation schema.
- Include a useful 404 page and root language routing. Keep assets root-relative and test nested directory URLs.
- Use semantic landmarks, skip navigation, keyboard-operable mobile navigation, visible focus, sufficient contrast and descriptive alternatives. Respect reduced motion.
- Optimize hero and supporting imagery, set dimensions/aspect ratios, lazy-load below-fold images and keep browser JavaScript small. Do not add unnecessary external font, tracking or UI dependencies.

## Phase E — validation and package

Run the generator and production build. Validate generated route count/parity, internal links, referenced assets, contact links, unique metadata, canonicals/hreflang, JSON-LD and sitemap membership. Check for unsupported claims and public implementation credits. Check browser behavior at mobile, tablet and wide desktop widths when browser infrastructure is available; document exact verification limits otherwise.

Test the real enquiry path and PHP endpoint separately where enabled, including invalid inputs, consent, honeypot, success/error handling and actual message delivery. PHP syntax/static checks do not establish inbox delivery. Record build and validation results in release documentation, together with a reproducible cPanel upload and rollback procedure. Produce a ZIP of the deployable output and keep the source repository current with logical commits.

## Phase F — authorized publication

The user's current request is to publish SCREENERS.CA. Complete all possible build/review work before requesting any genuinely missing external input. The repository's target is WHC.ca Pro: confirm the actual account, domain/document root, supported PHP runtime, TLS and deployment mechanism before publishing there. Preserve any existing site/backups and keep mail-related DNS records intact.

No verified live WHC access, document root, DNS control or tested form-delivery configuration has been established at the time this plan is written. A local build, a source commit or an alternative preview URL does not prove that `https://screeners.ca` is live. Document the actual published URL and verification outcome only after deployment succeeds. Search Console/Bing submission remains a separate task requiring the appropriate verified accounts.

## Release acceptance

| Area | Required result |
| --- | --- |
| Content and identity | Approved contact details; coherent original brand candidate; no fabricated stock, credentials, partners, addresses or testimonials. |
| Routing | Every published navigation/CTA/footer link works; EN/FR counterpart links preserve context. |
| Enquiries | Actual send mechanism is explicit; no silent loss or untested delivery claims; live routing checked if enabled. |
| Quality | Static build succeeds; structural/link/metadata checks pass; browser and form tests reported accurately. |
| Hosting | Reproducible static package; WHC/domain/TLS verified before claiming custom-domain publication. |
| Documentation | Research, brand, sitemap, implementation plan, deployment guidance and remaining launch blockers reflect delivered work. |
