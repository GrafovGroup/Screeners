# SCREENERS.CA brand system

Status: proposed production refinement of the approved Modern Industrial #2 direction. The original S emblem, particle pattern and integrated wordmark are implemented as scalable SVG. Final visual signoff remains open; these files are reviewable candidates, not a record of approval.

## Identity

Write **SCREENERS.CA** as one name. Keep `.CA` on the same baseline and in the same wordmark. The emblem combines an angular S with a cluster of screened particles; it may appear alone for a favicon or compact icon. The brand line is **Industrial Screening Solutions**. It is separate supporting copy and is deliberately absent from the core lockups.

The emblem is original vector artwork. Wordmark lettering is outlined from DejaVu Sans Bold, so rendering does not depend on installed fonts or remote requests. Its applicable open font license is retained in `assets/brand/FONT_LICENSE.txt`. No third-party machinery logos are included.

## Assets

| File in `assets/brand/` | SVG viewBox | Use |
| --- | --- | --- |
| `logo-horizontal.svg` | 760 × 112 | Main wordmark on white or very light backgrounds |
| `logo-horizontal-light.svg` | 760 × 112 | White wordmark/orange accent on charcoal |
| `logo-horizontal-mono.svg` | 760 × 112 | One-colour charcoal reproduction |
| `logo-horizontal-mono-light.svg` | 760 × 112 | One-colour white reproduction |
| `logo-stacked.svg` | 560 × 250 | Taller light-background placements |
| `logo-stacked-light.svg` | 560 × 250 | Taller charcoal-background placements |
| `logo-stacked-mono.svg` | 560 × 250 | One-colour stacked reproduction |
| `icon.svg` | 112 × 112 | Original S and particle mark on light backgrounds |
| `icon-light.svg` | 112 × 112 | Orange S/white particles on dark backgrounds |
| `icon-mono.svg` | 112 × 112 | One-colour icon |
| `favicon.svg` | 112 × 112 | Browser/site icon with dark rounded background |
| `social-card.svg` | 1200 × 630 | Social-image source; rasterize to PNG/WebP for services that do not accept SVG |
| `preview.html` | Responsive | Review sheet showing light, dark and monochrome treatments |

Use supplied `width` and `height` ratios. The white and charcoal SVG variants have transparent backgrounds. The favicon and social card include a background.

## Spacing and scale

Keep clear space at least **24 units** around the horizontal lockup in its 760 × 112 coordinate system, approximately one quarter of the emblem's height. Keep the same proportional space around other lockups. Increase that margin near busy photography.

Minimum recommended rendered width: horizontal **220 CSS px**; stacked **200 CSS px**. Use the icon below those widths. The full icon remains useful at **24 CSS px**; the favicon uses a dark background and is intended for browser rendering down to 16 px. Do not insert a slogan inside any logo file.

## Colour

| Token | Value | Role |
| --- | --- | --- |
| Charcoal | `#222A30` | Core wordmark, headings and text |
| Orange | `#F36B16` | Emblem, accent surfaces and primary CTA fill |
| Near-black | `#111820` | Dark sections and utility bar |
| Off-white | `#F7F8F8` | Page/section backgrounds |
| Steel grey | `#77838D` | Decorative dividers and large secondary graphics; do not assume normal-text contrast |
| Text orange | `#B54300` | Small accent text on white |
| White | `#FFFFFF` | Light surfaces and dark-section copy |

Calculated WCAG contrast ratios, rounded to two decimals:

- Charcoal on white: **14.56:1**.
- White on near-black: **17.87:1**.
- Charcoal on orange: **4.80:1**, suitable for normal-size AA button text.
- Orange on white: **3.03:1**, suitable only for large text and relevant non-text contrast requirements. Use text orange for ordinary-size links.
- Text orange on white: **5.57:1**, suitable for normal-size AA text.

Do not use white normal-size button labels on the bright orange fill: that pair does not meet 4.5:1. These ratios describe the listed solid colours; re-check overlays, gradients, opacity, and photo backgrounds in their final context.

## Typography and controls

Use a locally available system sans stack: `Arial, Helvetica, sans-serif` or `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`. Set headings bold with compact line height and body copy at a readable 16–18 px with approximately 1.5–1.7 line height. Avoid ultra-condensed body text. Navigation labels are uppercase; longer French labels need flexible space.

Use rounded primary buttons with orange fill and charcoal/near-black labels, generous padding and a minimum 44 × 44 px activation area. Secondary buttons use a clear border with a high-contrast label. Keep keyboard focus visible; a 3 px orange outline works on dark sections, while a charcoal outline works on orange or white surfaces. Do not rely on colour alone for error or current-page states.

## Correct use

- Preserve the S geometry, dot arrangement, wordmark spelling, proportions and integrated `.CA`.
- Use the light variant on a sufficiently dark, calm background.
- Reserve monochrome variants for one-colour applications.
- Keep sales and availability language factual; the visual system does not imply a manufacturer affiliation, verified inventory or operating history.

Do not stretch, skew, outline, blur, add shadows to, rotate, recolour arbitrarily, separate `.CA`, alter dot positions, append a manufacturer symbol, or place the mark across a visually busy machine photograph without a contrasting field. Never remove the dot cluster from a full-size primary emblem.
