# Bilingual route and internal-link map

32 paired subjects produce 64 localized pages. Each route has a reciprocal top-utility language link, its own title/description/canonical and a sitemap entry. Root redirects to /en/; unknown routes use /404.html.

## Navigation and shared links

Primary: EQUIPMENT, RENTALS, PARTS, SERVICES, INDUSTRIES, LOCATIONS, CONTACT. ABOUT appears in the footer. Every page links to the quote workflow, telephone, email, privacy and terms. The universal header/footer use matching French labels and destinations.

## Routes

| Subject | English | Français |
| --- | --- | --- |
| home | /en/ | /fr/ |
| equipment | /en/equipment/ | /fr/equipements/ |
| services | /en/services/ | /fr/services/ |
| industries | /en/industries/ | /fr/industries/ |
| locations | /en/locations/ | /fr/regions/ |
| about | /en/about/ | /fr/a-propos/ |
| contact | /en/contact/ | /fr/contact/ |
| request-quote | /en/request-quote/ | /fr/demander-une-soumission/ |
| privacy | /en/privacy/ | /fr/confidentialite/ |
| terms | /en/terms/ | /fr/conditions/ |
| mobile-screeners | /en/equipment/mobile-screeners/ | /fr/equipements/cribles-mobiles/ |
| trommel-screeners | /en/equipment/trommel-screeners/ | /fr/equipements/cribles-a-tambour/ |
| vibrating-screeners | /en/equipment/vibrating-screeners/ | /fr/equipements/cribles-vibrants/ |
| scalping-screeners | /en/equipment/scalping-screeners/ | /fr/equipements/cribles-de-scalpage/ |
| compact-screeners | /en/equipment/compact-screeners/ | /fr/equipements/cribles-compacts/ |
| stationary-screening-plants | /en/equipment/stationary-screening-plants/ | /fr/equipements/installations-fixes-de-criblage/ |
| screening-conveyors | /en/equipment/screening-conveyors/ | /fr/equipements/convoyeurs-et-equipements-auxiliaires/ |
| rentals | /en/rentals/ | /fr/location/ |
| parts | /en/parts/ | /fr/pieces/ |
| repairs-and-maintenance | /en/services/repairs-and-maintenance/ | /fr/services/reparation-et-entretien/ |
| on-site-screening | /en/services/on-site-screening/ | /fr/services/criblage-sur-site/ |
| equipment-sourcing | /en/services/equipment-sourcing/ | /fr/services/recherche-equipement/ |
| aggregates | /en/industries/aggregates/ | /fr/industries/granulats/ |
| construction | /en/industries/construction/ | /fr/industries/construction/ |
| mining | /en/industries/mining/ | /fr/industries/exploitation-miniere/ |
| recycling | /en/industries/recycling/ | /fr/industries/recyclage/ |
| landscaping-and-topsoil | /en/industries/landscaping-and-topsoil/ | /fr/industries/amenagement-paysager-et-terre-vegetale/ |
| agriculture-and-compost | /en/industries/agriculture-and-compost/ | /fr/industries/agriculture-et-compost/ |
| manufacturing | /en/industries/manufacturing/ | /fr/industries/fabrication-industrielle/ |
| ontario | /en/locations/ontario/ | /fr/regions/ontario/ |
| quebec | /en/locations/quebec/ | /fr/regions/quebec/ |
| british-columbia | /en/locations/british-columbia/ | /fr/regions/colombie-britannique/ |

## Internal-link structure

- Home links to equipment families, all seven industries, services and three province guides.
- Equipment, services, industries and locations indexes link to every page in their group.
- Subject pages link back through breadcrumbs and to up to three related subjects in the same group.
- Every subject has a quote CTA and direct contact alternative. Quote consent links to the corresponding privacy notice.
- Location pages offer distinct regional planning information for Ontario, Quebec and British Columbia. Additional provinces/territories are invited to enquire nationally; no repeated city doorway pages or local offices are claimed.

## Data ownership

Core routes: data/core.mjs. Equipment and service routes: data/equipment.mjs. Industry and province routes: data/industries.mjs. scripts/build.mjs renders both languages from each shared page identity, so language switching preserves the subject.
