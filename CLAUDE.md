# CLAUDE.md — Absyon Digital Website Build

This file gives context for building the Absyon Digital marketing website. Read `BRAND-IDENTITY.md` in this same folder first — it has the full brand rationale. This file focuses on what to actually build.

## Project

Build the public website for **Absyon Digital**, an AI-forward digital studio (small team, not solo) offering web/app development, branding, and AI automation/chat/voice agent services. Domain: `absyondigital.com`. Contact: `info@absyondigital.com`.

Tagline: **"We build what's next."**

## Tech stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- Deploy target: assume Vercel-style static/SSR hosting unless told otherwise.
- Keep components typed (TypeScript) and organized under `app/` + `components/`.

## Brand assets

Logo files are in `brand-assets/`:
- `AbsyonDigitalLogo.png` (full quality, transparent-safe on black)
- `AbsyonDigitalLogoCompressed.jpg`

Use the PNG for anywhere quality matters (header, hero, favicon source); the icon alone (the circular network/star mark) should also be extracted/used standalone for favicon, loading states, and small UI accents.

## Visual identity — must follow

**Colors** (dark theme, minimal palette — do not add purple/indigo/other hues):

```
--bg-primary: #000000        (or #050505 for large surfaces)
--accent-blue: #1EA3FD        (bright glow — buttons, highlights, hover states)
--accent-blue-deep: #0A8AD8   (secondary accent, borders, less prominent uses)
--text-primary: #F2FFFF
--text-muted: #9CA8A8
```

**Typography:**
- Headings: `Space Grotesk` (bold weights, 600–700)
- Body: `Inter`
- Load both via next/font (Google Fonts) — don't self-host unless asked.

**Motion & feel:** Precise, confident, techy — subtle blue glow on hover/focus states, network-node-style micro-animations echoing the logo's connected-dots motif, scroll-triggered reveals. Avoid soft/bouncy easing, pastel illustrations, or generic corporate stock imagery.

**Do not** deviate from black/blue/white. Do not make the site feel like a generic SaaS template — the bold/edgy, futuristic personality should be visible in typography scale (large confident headings), motion, and copy tone, not just color.

## Voice for copywriting

Confident and direct. Short, punchy statements. No filler, no "passionate team of creatives" style agency-speak. State what was built and what it does rather than vague adjectives. Structural inspiration (not visual copying) from:
- bamlab.ch — one-voice confidence, numbered/indexed project list, work-first layout.
- digitz.fr — dark theme, numbered section system (01, 02, 03...), methodology section, "AI as a layer" positioning.

Consider using a numbered section system (01 Services, 02 Work, 03 Approach, etc.) as a structural device site-wide.

## Site structure

Build as a full agency site with these sections/pages:

1. **Home** — hero with tagline + one-line positioning, services overview, featured work (2–3 projects), brief "why us" / approach teaser, contact CTA.
2. **Services** — the 7 services below, each with a short, concrete description (not generic).
3. **Portfolio / Work** — real case studies (see below). Each project gets its own card/page: what it is, who it's for, what was built, link to live site where applicable.
4. **About / Team** — small team framing ("we," not "I"). Studio story: AI-forward digital studio that actually ships for real businesses.
5. **Contact / Booking** — contact form + `info@absyondigital.com`. Consider a simple project-inquiry form (name, email, project type, budget range, message) rather than just a mailto link.

## Services copy (use as basis, sharpen further)

1. Web design & development
2. App / software development
3. Branding & graphic design
4. AI automation solutions
5. AI chat agents
6. AI voice agents
7. Menu design

Positioning: lead with AI/automation/chat/voice as the differentiator; web/app/branding as the execution layer that makes the AI work actually usable and shippable.

## Portfolio content — real projects, use as case studies (not placeholders)

Source repos live under the `absyondigital-eng` GitHub org. Screenshots/assets for each are in their own project folders under `Website Building/` (sibling to this project) — check each project's `brand_assets` / `temporary screenshots` / `images` folder for real imagery to use, don't invent stock photos for these.

1. **Biskits** — Coffee, brunch & sizzlers café/diner. 478 Wilmslow Road, Withington, Manchester. Halal. "Manchester's Most Instagrammable Brunch."
2. **Cluckin' Hot** — Halal chicken & smash burgers, Eccles, Manchester. "Manchester's favourite spicy burger."
3. **House of Serenity Funeral Services** — Independent, Black-owned funeral directors, Brockley & Camberwell, South East London. Serving African, Caribbean, and Rastafarian families since 2008. Led by Marilyn Carty Dip.FD. (Note: tone for this case study should stay respectful/dignified even within the bold brand system — don't force neon/edgy styling into the case study imagery itself.)
4. **Mango Paradise** — Fresh smoothies, Soho, London.
5. **Midnight Munch** — Late-night takeaway (burgers, wings, munch boxes), Whitechapel, London. Open until 3AM.
6. **Park N Munch** — "Park & eat" takeaway, Unit 5-10 Choir St, Salford M7 1ZD. Order from your car. **Paired with a custom-built Android app (ParkNMunchPrinter)** for automatic order printing — call this out specifically, it's proof Absyon builds real software, not just websites.
7. **Tee Auto Care** — Custom printed/personalised seat covers, UK-based ecommerce/personalization brand.

When writing case study copy: lead with the business problem, then what Absyon built, then the result/why it matters. Keep it factual and concrete per the brand voice.

## Things to double check before considering the build "done"

- Favicon generated from the logo icon (not the full lockup).
- Color contrast: blue-on-black text must stay legible (use `--text-primary` / `--text-muted` for body copy, reserve pure `--accent-blue` for short emphasis/interactive elements only).
- Mobile responsiveness — the numbered-section/dark-neon aesthetic must degrade gracefully on small screens.
- Contact form actually submits somewhere (ask the user for form backend preference — e.g. Formspree, Resend, a serverless function — if not already decided).
- No leftover placeholder/Lorem Ipsum text once real project descriptions above are available.
