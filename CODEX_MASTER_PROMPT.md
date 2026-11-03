# SCREENERS.CA — CODEX MASTER EXECUTION PROMPT v1.0
Date: 2026-11-03
Repository: GrafovGroup/Screeners
Production domain: https://screeners.ca
Status: development specification; do not claim production launch.

## Role and objective
Act as senior Canadian B2B industrial-market researcher, brand director, UX designer, technical SEO specialist, accessibility engineer and full-stack developer. Build a premium, fast, bilingual national website for SCREENERS.CA, a direct commercial supplier of industrial screening equipment and related services. Execute in phases, documenting work and verifying acceptance criteria. Do not stop after making a plan: implement, test, and commit deliverables. Do not deploy or change DNS without explicit authorization.

## Non-negotiable approved facts
- Display brand exactly as SCREENERS.CA with .CA integrated into the same wordmark.
- Approved logo direction #2: modern charcoal/orange stylized S with screening particle dots. Recreate clean scalable SVG and responsive lockups inspired by the approved concept, not an unlicensed font or raster tracing. Present refined assets for approval before treating as final.
- Brand line: Industrial Screening Solutions.
- Telephone: (833) 696-9996, href tel:+18336969996.
- Email: info@screeners.ca, href mailto:info@screeners.ca.
- Coverage: Canada-wide from launch, without pretending to have local offices.
- EN/FR fully translated from day one; natural Canadian/Quebec French, language toggle in TOP UTILITY BAR on desktop and mobile.
- Target hosting: WHC.ca Pro shared hosting; favor static export / lightweight architecture compatible with cPanel. Confirm supported runtime before selecting SSR, databases or server functions.
- No public references to Grafov Group, Codex, AI-generated copy, design credits or fake endorsements.

## Business model and positioning
Direct provider offering: equipment sales, rentals, sourcing, replacement parts, maintenance/repairs through qualified partners, and on-site screening services where available. Primary buyer segments: construction contractors, aggregate/quarry operators, mining, recycling, waste processing, landscaping/topsoil, compost/agriculture, industrial manufacturing. Do not assert actual stocked inventory, rental fleet, service technicians, nationwide response times, prices, manufacturer authorization, warranties, certifications, financing or completed projects without evidence. Use 'request availability' and 'request a quote' for unverified offers.

## Phase 0 — research and evidence
Research and document 8–12 relevant Canadian competitors/suppliers, their actual product/service categories, buyer segments, geographic coverage, positioning, quote UX and visible differentiators. Research relevant manufacturers and potential distribution/rental/service partners. Cite URLs and retrieval dates in RESEARCH.md. Identify category gaps and practical partnership-first launch strategy. Do not copy competitor copy, images or brand assets. Flag all unverified claims and commercial assumptions.

## Phase 1A — brand system
Create brand assets: primary horizontal SCREENERS.CA wordmark, stacked lockup, icon-only S with screening dots, white/dark variants, monochrome variants, SVG source and favicon. Suggested tokens (provisional): charcoal #222A30, orange #F36B16, near-black #111820, off-white #F7F8F8, steel grey #77838D. Ensure orange contrast is accessible when used for text. Create a concise BRAND_GUIDE.md with clear space, minimum sizes, typography, colours, CTA treatments and prohibited logo alterations. Do not add slogans to every lockup.

## Phase 1B — information architecture
Primary uppercase navigation: EQUIPMENT, RENTALS, PARTS, SERVICES, INDUSTRIES, LOCATIONS, CONTACT. ABOUT belongs in footer, not top navigation. One universal menu and footer across routes and languages. Global top bar with phone, email and EN/FR language switch. Use rounded buttons, spacious wide containers (max-width ~1440px), restrained motion, no gratuitous arrow decorations.
Required core routes, mirrored and translated under /en/ and /fr/:
- home
- equipment index
- mobile screeners, trommel screeners, vibrating screeners, scalping screeners, compact screeners, stationary screening plants, screening conveyors/ancillary systems (only if research validates relevance)
- rentals, parts, repairs-and-maintenance, on-site-screening, equipment-sourcing
- industries: aggregates, construction, mining, recycling, landscaping-and-topsoil, agriculture-and-compost, manufacturing
- locations index and priority Canadian province/city pages based on research; launch meaningful unique pages only, not templated doorway pages
- about, contact, request-quote, privacy, terms
Create sitemap and internal-link map. Product details must distinguish technical specifications from general category explanations; no invented machine specs.

## Phase 2 — homepage UX
Hero: original, high-quality industrial screening machinery scene with strong legibility, clear contrast and real operational context. Headline concept EN: 'Industrial Screening Equipment Across Canada'; FR: 'Équipements de criblage industriel partout au Canada'. Subhead should explain sales, rentals, parts and services without unverifiable claims. Primary CTA REQUEST A QUOTE / DEMANDER UNE SOUMISSION; secondary EXPLORE EQUIPMENT / VOIR LES ÉQUIPEMENTS. Below hero: equipment categories, buyer industries, how sourcing/rental works, service capabilities, geographic coverage, FAQ, final CTA. Avoid generic stock-looking repeated scenes. All equipment imagery must be accurately labelled and licensed or originally generated, with no fabricated identifiable manufacturer logos.

## Phase 3 — quote conversion
Build EN/FR quote forms with fields: name, company, email, phone, province, city, inquiry type (buy/rent/parts/service/on-site), equipment type, material, throughput requirement (optional), project timeline, delivery location, description, consent checkbox. Validate client and server-side where possible; anti-spam honeypot; accessible error states; success confirmation; do not claim emails are delivered until integration tested. Configure endpoint via environment variable; never commit API keys. If Formspree or other provider not supplied, build a clearly documented integration placeholder and never silently drop submissions. Track CTA and form events only after privacy/consent review.

## Phase 4 — bilingual SEO/AEO
Unique page titles, descriptions, one H1 per page, semantically useful headings, FAQ content grounded in actual operations, descriptive image alt text, breadcrumb structured data where applicable, Organization and WebSite schema with only verified facts, valid canonical and reciprocal hreflang en-CA/fr-CA, localized routes, XML sitemap, robots.txt, OG images, and 404 page. No fabricated reviews, ratings, prices, inventory, addresses or service claims. City/province pages need genuine localized relevance and distinct information. Validate metadata and indexability. Plan Google Search Console and Bing Webmaster Tools submission; never claim submitted until actually done.

## Phase 5 — build quality and deployment
Use accessible semantic HTML, responsive desktop/tablet/mobile design, keyboard navigation, visible focus, proper form labels, WCAG 2.2 AA goals, image optimization (WebP/AVIF where supported), lazy loading below fold, minimal JS, Core Web Vitals optimization and reduced-motion support. Confirm WHC/cPanel deployment approach, build commands, asset paths, HTTPS, redirect rules, EN/FR routing and contact integration. Keep secrets out of repo. Run lint, typecheck, tests and production build; document any untested steps honestly.

## Execution protocol
1. Inspect repository and avoid overwriting user work.
2. Research, then write RESEARCH.md, BRAND_GUIDE.md, SITE_MAP.md and IMPLEMENTATION_PLAN.md.
3. Implement phase 1A brand assets and foundational design tokens.
4. Implement full bilingual site with reusable components, unique service/industry imagery, all core pages and quote UX.
5. Validate, document deployment and produce a final checklist with passed/blocked items.
6. Commit in logical increments with descriptive messages.
7. Ask for approval only for genuine external blockers (domain/hosting credentials, live form endpoint, logo signoff, third-party assets, DNS changes). Continue independently on unblocked work.

## Definition of done
- Every major page and navigation link works in EN and FR.
- Universal header/footer, FR utility-bar toggle, integrated SCREENERS.CA brand, correct phone/email.
- No broken assets, placeholder lorem ipsum, AI credits, fake testimonials or misleading capabilities.
- Responsive design checked at mobile, tablet and wide desktop sizes.
- SEO metadata, canonical/hreflang, sitemap, structured data and accessible forms validated.
- Production build succeeds; deployment instructions are reproducible.
- Unverified claims and missing integration inputs are listed in LAUNCH_BLOCKERS.md.
