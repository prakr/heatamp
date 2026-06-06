# HeatAmp Website — Design Spec

**Date:** 2026-06-06
**Owner:** Prakash (building on behalf of Magnus Ekblad, CEO of HeatAmp Sweden AB)
**Status:** Approved — ready for implementation planning

---

## 1. Purpose

Replace the current Wix-hosted HeatAmp site (`heatamp.com`) with a proper, credible company website. The site exists to corroborate the pitch deck shared by HeatAmp's investor-distribution partner — visitors are predominantly institutional investors who have already received the deck and are checking whether HeatAmp looks like a real, credible company.

The site is **not** an investor pitch in website form. It is a company website, designed to project credibility. Fundraising is deliberately not mentioned.

## 2. Audience and goals

**Primary audience:** investors who have received the pre-read deck and clicked through to verify the company looks legitimate.

**Secondary audience:** OEM manufacturers and energy-industry partners discovering HeatAmp through industry channels.

**Tertiary audience:** future employees and press.

**Success criteria:**
- A visitor lands on the site, in under 30 seconds understands what HeatAmp does, who's behind it, and that it's backed by serious institutions.
- The site reinforces (not duplicates) the claims in the deck.
- It does not look like a pitch deck, a slide show, or a fundraising landing page.
- It loads fast, works on mobile, and looks professional on a laptop.

## 3. Constraints and non-goals

**In scope (v1):**
- Single-page scrolling site with eight sections plus a footer.
- Static HTML / CSS / JS — no frameworks, no build pipeline.
- Mobile-first responsive design.
- Inline SVG diagrams for the two most important technical visuals.
- Mailto contact (no form processing required).
- Deployment to Vercel from a GitHub repo, mirroring the wedding-project flow.

**Explicitly out of scope (v1):**
- Multi-page architecture or CMS.
- Contact form with backend processing (Formspree deferred indefinitely).
- Custom-drawn isometric house illustration (the friend's "HeatAmp in a home" idea is parked for v2 — possibly used in the Solution section later).
- Diagrams beyond sorption and the market funnel (system flow, business strategy, TRL roadmap, cost/robustness/performance triangle).
- Analytics, cookie banner, tracking of any kind.
- Blog, news, press, or careers pages.
- Any messaging about fundraising, valuation, burn rate, or "looking for investors."
- Multilingual support.

## 4. Information architecture

Single page, eight scrollable sections plus footer. Top nav anchor-links to each section.

| # | Section | Eyebrow | Headline |
|---|---------|---------|----------|
| 1 | Hero | PATENTED · FIELD-READY · 120% UEF | Powering the future of water heating. |
| 2 | The Challenge | THE PROBLEM | 95% of America's gas water heaters run at minimum efficiency. |
| 3 | Our Solution | THE SOLUTION | A drop-in replacement. Twice as efficient. |
| 4 | How It Works | TECHNOLOGY | Heat-driven sorption. No moving parts. |
| 5 | Market Opportunity | MARKET | A $2.7B replacement market — looking for a winner. |
| 6 | Team | TEAM | Built by veterans of sorption, heat pumps, and gas appliances. |
| 7 | Backed By | BACKED BY | Developed with support from leading energy institutions. |
| 8 | Contact | GET IN TOUCH | Building something here. Want to talk? |
| - | Footer | — | Logo · © 2026 HeatAmp Sweden AB · Stockholm, Sweden · LinkedIn |

### 4.1 Section content

**1. Hero**
- Subhead: "A gas-driven heat pump water heater that drops into the place of any conventional unit — and cuts gas consumption in half."
- Primary CTA: `Get in touch` → mailto link to magnus.ekblad@heatamp.com
- Secondary CTA: `How it works ↓` → anchor to How It Works section
- Visual: HeatAmp product render, right-aligned on desktop, below text on mobile

**2. The Challenge**
- Body: "4 million residential gas water heaters are sold in North America every year. Most operate at a Uniform Energy Factor of just 62–64%. As emissions targets tighten and gas prices climb, this is the largest untapped efficiency opportunity in residential heating."
- Three stat callouts: `4M units/yr` · `62–64% UEF` · `12,500 kWh gas → 8,000 kWh hot water`

**3. Our Solution**
- Body: "HeatAmp's gas heat pump water heater delivers 120% UEF — nearly double the industry standard — in the same footprint as a conventional unit. Patented in six jurisdictions."
- Three stat callouts: `120% UEF` · `Up to 50% gas savings` · `1.0–1.8 tons CO₂ avoided / home / yr`
- Patents strip: "Patented in the US, UK, EU, China, India, and Japan."

**4. How It Works**
- Body: "HeatAmp uses chemisorption — a thermal compressor that stores energy in a salt matrix and releases it as heat on demand. No electrical upgrade. No compressor maintenance. Hermetically sealed for the long haul."
- Visual: Custom inline-SVG diagram showing two-phase sorption (desorption ↔ absorption)
- Sub-callout: "Hermetically sealed heat pump module. No moving parts."

**5. Market Opportunity**
- Body: "4 million gas water heaters are replaced annually in North America. The high-efficiency segment is just 5% today — but tightening regulation is projected to grow it to 40%. HeatAmp is positioned to claim the cost-effective end of that growth."
- Visual: Custom inline-SVG three-tier funnel — TAM $32.2B (global) → SAM $2.7B (NA gas WH / yr) → SOM $1.08B (NA high-efficiency segment)

**6. Team**
- Three founder cards (photo, name, role, one-line credential, LinkedIn icon):
  - **Magnus Ekblad — CEO.** Ex-CPO SaltX. Heat and energy entrepreneur.
  - **Ingemar Hallin — CTO.** Ex-Electrolux, Dometic. Inventor of HeatAmp's core patent.
  - **Corey Blackman — Sorption Lead.** PhD, 18 years in sustainable energy. Ex-CTO SaltX and Stella Futura.
- Below: "Supported by Martin Nilsson (Development Engineer) and Mattias Persson (Controls Engineer)."

**7. Backed By**
- Logo wall, grayscale: DOE · ORNL · GTI Energy · SoCalGas · NW Natural · NEEA · APGA Research Foundation · ICF · UTD · Municipal Gas Authority of Georgia.
- Layout: 5 columns on desktop, 2 columns on mobile.
- One-line below: "Over $1.4M in non-dilutive support from the US Department of Energy and partner utilities."

**8. Contact**
- Body: "For partnership inquiries, technology questions, or to learn more about HeatAmp, reach out directly."
- Visual: Large styled button with `magnus.ekblad@heatamp.com` as label, `href="mailto:magnus.ekblad@heatamp.com"`.
- Below: "HeatAmp Sweden AB · Stockholm, Sweden"

**Footer**
- Compact HeatAmp logo
- "© 2026 HeatAmp Sweden AB · Stockholm, Sweden"
- LinkedIn link: `https://www.linkedin.com/company/heatamp/`

## 5. Visual design

**Direction:** Industrial Cleantech (option A from brainstorm). Mirrors SaltX's aesthetic — reinforces Magnus's pedigree subliminally.

**Palette**
- Background: `#ffffff` (primary), `#f8fafc` (secondary section backgrounds)
- Text: `#0f172a` (primary), `#475569` (secondary), `#64748b` (muted)
- Accent: `#c8102e` (HeatAmp red — matches the logo flame)
- Borders / dividers: `#e2e8f0`

**Typography**
- Sans-serif throughout: **Inter** via Google Fonts (weights 400, 500, 600, 700, 800).
- Display headlines: 800 weight, `letter-spacing: -0.02em`, fluid sizing via `clamp()`.
- Body: 400 weight, 16 px base, 1.55 line-height.
- Eyebrows: 600 weight, 11 px, 2 px letter-spacing, uppercase, red accent color.

**Layout**
- Max content width: 1200 px, centered.
- Section vertical padding: ~96 px desktop, ~64 px mobile.
- Mobile-first; breakpoints at 640 px (tablet) and 1024 px (desktop).
- Nav: simple horizontal links on desktop, hamburger toggle on mobile.

**Motion**
- Smooth scroll for anchor navigation.
- No scroll-triggered animations in v1 (deferred to v2 if Magnus wants polish later).

## 6. Asset strategy

**Project structure**

```
heatamp/
├── index.html
├── style.css
├── main.js
├── README.md
└── assets/
    ├── heatamp-logo.svg
    ├── favicon.svg
    ├── images/
    │   ├── product.png            (extracted from deck page 2)
    │   ├── team-magnus.jpg
    │   ├── team-ingemar.jpg
    │   ├── team-corey.jpg
    │   └── og-image.png           (1200x630 social share preview)
    ├── logos/
    │   ├── doe.svg
    │   ├── ornl.svg
    │   ├── socalgas.svg
    │   ├── nw-natural.svg
    │   ├── gti-energy.svg
    │   ├── neea.svg
    │   ├── apga.svg
    │   ├── icf.svg
    │   ├── utd.svg
    │   └── municipal-gas-ga.svg
    └── diagrams/
        ├── sorption.svg           (custom-built, inline in index.html)
        └── market-funnel.svg      (custom-built, inline in index.html)
```

**Extraction plan**
- Product render + team headshots: extract from `HeatAmp Pre-Read - Lynam.pdf` using `pdfimages` or page-screenshot + crop.
- Partner logos: download high-res versions from each organization's brand kit / press page where available. For any that aren't downloadable, recreate as simple SVG wordmarks for visual consistency. All displayed grayscale.
- HeatAmp wordmark + flame: re-trace as a clean SVG (~30 min) so it renders sharply at any size.
- Favicon: red flame only, no wordmark.

**Custom diagrams (inline SVG)**
- **Sorption process** (How It Works): two-panel side-by-side showing desorption and absorption phases. Minimal, slate + red. Replaces the dated deck version on page 7.
- **Market funnel** (Market): inverted three-tier trapezoid with TAM/SAM/SOM labels and dollar values. Slate gradient, red highlight on SOM. Replaces deck page 6 version.

Other deck diagrams (gas heat pump system flow, business strategy, TRL roadmap, cost/robustness/performance triangle, prototype evolution row) are deliberately not rebuilt in v1.

## 7. Technical implementation

- **Stack:** vanilla HTML5, CSS3, plain JS. No npm, no build step, no dependencies.
- **CSS approach:** custom properties for palette and type scale; flexbox and grid for layout; `clamp()` for fluid typography and spacing.
- **JS responsibilities (`main.js`):**
  1. Hamburger toggle on mobile nav.
  2. Smooth scroll for anchor links.
  3. Optional: hide nav background until scrolled past hero (small polish, not required for v1).
- **HTML:** semantic landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`). One `<h1>` for the hero headline; section headings are `<h2>`; sub-headings are `<h3>`.
- **Inter loaded via Google Fonts** with `display=swap` and subset to Latin only to keep it light.
- **Local preview:** open `index.html` directly in a browser, or `python3 -m http.server 8000` from the project root.

## 8. SEO, accessibility, performance

**SEO**
- `<title>`: "HeatAmp — Powering the Future of Water Heating"
- Meta description: one tight sentence summarizing the company.
- Open Graph tags (`og:title`, `og:description`, `og:image` pointing to `og-image.png`, `og:url`).
- Twitter card tags (`summary_large_image`).
- Canonical link to `https://heatamp.com/`.

**Accessibility**
- All images have descriptive `alt` text.
- Color contrast meets WCAG AA on all foreground/background pairs.
- Visible focus states on all interactive elements.
- Mobile nav uses an accessible disclosure pattern with `aria-expanded`.
- Heading hierarchy is clean and linear.

**Performance targets**
- Total page weight under 500 KB (raster images optimized, SVG inlined).
- Lighthouse: Performance 95+, Accessibility 100, Best Practices 100, SEO 100.
- Loads instantly on a 4G connection.

**No analytics, no cookies, no third-party scripts** in v1.

## 9. Deployment and domain migration

**Initial deploy (this build cycle)**
1. Commit the project to a GitHub repo under Prakash's account.
2. Connect the repo to Vercel — same flow as the wedding project.
3. Vercel produces a preview URL (e.g. `heatamp-xxx.vercel.app`).
4. Share the preview URL with Magnus for review. Wix and `heatamp.com` are untouched.

**Domain switch (separate task, after Magnus approves)**
1. In Vercel project settings, add `heatamp.com` as a custom domain. Vercel displays the required DNS records (typically `A` record `76.76.21.21` for apex; `CNAME` for `www` pointing to `cname.vercel-dns.com`).
2. Determine where DNS for `heatamp.com` is controlled. Use `whois heatamp.com | grep -i registrar` to identify the registrar.
   - **If the registrar is Wix:** Magnus logs into Wix → Domains → DNS records → updates the A and CNAME records to Vercel's values. The Wix-hosted site stops resolving at `heatamp.com` once DNS propagates; the Wix account remains until Magnus cancels.
   - **If the registrar is external (GoDaddy, Namecheap, etc.):** Magnus updates DNS at that registrar, not Wix.
3. DNS propagation takes 5 minutes to 24 hours, usually under an hour. Verify in Vercel's domains panel.
4. After confirmed live, Magnus may cancel the Wix plan to stop paying for it.

Vercel does not error when the custom domain is added while DNS still points elsewhere — it shows "pending DNS configuration" until propagation completes.

## 10. Open items, deferred to later

These are intentionally not blocking v1 but worth flagging:

1. **Magnus's headshot quality** — the PDF crop is acceptable for v1; if he later supplies a higher-resolution version, swap it in.
2. **Higher-quality team photos generally** — same as above.
3. **House-in-context illustration** — parked for v2; possible home is the Solution section or as a band between sections.
4. **Additional diagrams** — system flow, business strategy, TRL roadmap, etc. can be added in subsequent iterations if Magnus requests more depth.
5. **Cookie / privacy banner** — none planned (no tracking); could be added later if Sweden/GDPR posture demands it.
6. **Analytics** — easy to add later if HeatAmp wants traffic visibility.

## 11. Iteration plan

This spec covers v1 only. The agreed model is iterative (Approach C from brainstorm):

- **v1 (this cycle):** ship the Lean MVP described above.
- **v2 (after Magnus feedback):** additional diagrams, optional house illustration, scroll animations, anything Magnus calls out.
- **v3+:** ongoing tweaks as needed.

Each round goes through its own brief design check before implementation.
