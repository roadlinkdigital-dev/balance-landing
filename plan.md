# Aura landing page — approved implementation plan

## Scope
Build a single-page, responsive landing page for **Aura**, an AI-native email client. The implementation follows the supplied specification and the confirmed blueprint: React 18, TypeScript, Vite, Tailwind CSS, Motion v12 (`motion/react`), Lucide, and `@supabase/supabase-js` as a declared dependency. It is a static frontend with no server, authentication, database, or external form submission requirement.

## Implementation approach
- Create a Vite React TypeScript application with Tailwind utilities for layout, spacing, typography, and responsive behavior.
- Use a componentized page: reusable brand marks, Apple-style CTA, eyebrow, inbox mockup, triage card, testimonials, pricing plans, and final CTA.
- Use CSS only where it is intrinsic to the supplied art direction: global noise/shiny effects, the liquid-glass border mask, and the `c3-*` cinematic pricing system.
- Use Motion for the requested initial fades, directional entrances, staggered navigation/logo transitions, and card polish; respect reduced-motion preferences.
- Serve one public route, `/`, plus `/manus-routes.json`.
- Implement local functional interactions: anchor-scroll navigation, mobile navigation disclosure, annual pricing toggle updating paid-plan price labels, safe download feedback, and `mailto:hello@aura.email` for sales.

## Design direction
- **Design movement:** cinematic neo-skeuomorphic glassmorphism with macOS precision and restrained AI futurism.
- **Core principles:** deep spatial atmosphere; tactile frosted surfaces; confident, sparse typography; product UI used as proof rather than decoration.
- **Color philosophy:** near-black #0c0c0c creates a theater-like stage; white establishes clarity and hierarchy; electric cyan/ice-blue accents signal Aura’s AI intelligence without overwhelming the page.
- **Layout paradigm:** a centered editorial journey cut across by a desktop container-frame and a continuous video field, alternating expansive statements with close-up product proof.
- **Signature elements:** a fixed atmospheric video; the shimmering, noise-filtered "Revitalized" wordmark; luminous liquid-glass edges and translucent panels.
- **Interaction philosophy:** motion is brief, soft, and directional; controls give crisp feedback while the content remains calm and readable.
- **Animation:** preserve requested hero/nav/inbox entrance sequencing; use 6-second linear shiny gradient; hover elevates cards subtly; reduce or disable nonessential animations for reduced-motion users.
- **Typography system:** Inter 400–900 throughout. Display headlines use tight, bold tracking; UI labels use compact medium-weight text; body copy is comfortable and low-contrast but readable.
- **Brand essence:** Aura turns a noisy inbox into a calm, AI-organized operating surface for ambitious teams. **Personality:** lucid, exacting, quietly powerful.
- **Brand voice:** clear, decisive, and not overpromising. Examples: “Your email. Revitalized.” and “Close the tabs. Open your day.”
- **Wordmark & logo:** a white four-quadrant curved Aura mark anchors the navigation; the product identity is expressed through the brand mark and the recurring ice-blue revitalize treatment.
- **Signature brand color:** Aurora Cyan `#00d2ff`.

## Page composition
1. Fixed video backdrop, desktop guide rails, global SVG noise filter, and transparent navigation.
2. Hero with exact headline, supporting copy, Apple CTA, and platform download note.
3. macOS menu bar and a detailed email client product mockup.
4. Triage explanation paired with a four-tier AI inbox visualization.
5. Customer logo cloud and three testimonial cards.
6. Cinematic pricing watermark, three plans, responsive scroll-snap cards, and a working annual toggle.
7. Final glass CTA.

## Project structure
| Path | Responsibility |
|---|---|
| `src/main.tsx` | React entry point |
| `src/App.tsx` | Landing page composition, content data, interactive pricing and mobile navigation state |
| `src/components/` | Reusable marks, buttons, section primitives, and section components when appropriate |
| `src/index.css` | Tailwind imports, global rules, liquid-glass, effects, pricing system, responsiveness |
| `public/manus-routes.json` | Static route manifest for the page |
| `public/favicon.svg` | Aura brand favicon |
| `app.config.ts` | Project logo metadata using a durable uploaded HTTPS icon URL |
| `vite.config.ts`, `tailwind.config.ts` | Build and Tailwind configuration |

## Material constraints
The only media asset is the user-supplied CloudFront background video. No new decorative images are needed because the central visual proof is the handcrafted inbox interface. All calls to action are intentionally safe and local; no account, download, purchase, or form submission is implied.
