# HeatAmp — Company website

Static single-page site for [HeatAmp Sweden AB](https://heatamp.com).
Vanilla HTML / CSS / JS. No framework. No build step.

## Preview locally

Open `index.html` directly in a browser, or run a tiny server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy

1. Push this repo to GitHub.
2. Import the repo in Vercel (same flow as the wedding project).
3. Vercel auto-deploys. You'll get a preview URL like `heatamp-xxxxx.vercel.app`.
4. Share the preview URL with Magnus for review before the domain switch.

## Domain switch (heatamp.com → Vercel)

Currently `heatamp.com` is on Wix. To switch:

1. In the Vercel project, **Settings → Domains → Add `heatamp.com`**. Vercel shows the required DNS records (an `A` record `76.76.21.21` and a `CNAME` for `www`).
2. Find where `heatamp.com` DNS is controlled:
   ```bash
   whois heatamp.com | grep -i registrar
   ```
3. If the registrar is **Wix**: log into Wix → Domains → DNS records → update the A and CNAME records to Vercel's values.
4. If the registrar is **external** (GoDaddy, Namecheap, etc.): update DNS at that registrar.
5. DNS propagation: 5 min to 24 hours, usually under an hour.
6. Verify in Vercel's domain panel. Then Magnus can cancel the Wix plan if he wants to.

Vercel does NOT error if you add the domain while DNS still points to Wix — it shows "pending DNS configuration" until propagation completes.

## File structure

```
index.html          single page, all 8 sections
style.css           palette, layout, typography
main.js             mobile nav toggle + scroll-aware header
assets/
  heatamp-logo.png  (and @2x for retina)
  favicon.svg
  flame.png         (smaller flame mark, also available as @2x)
  images/
    product.png     (and @2x)
    team-magnus.jpg (and @2x)
    team-ingemar.jpg (and @2x)
    team-corey.jpg  (and @2x)
  logos/
    doe.png · ornl.png · gti-energy.png · socalgas.png · nw-natural.png
    neea.png · apga.png · icf.png · utd.png · municipal-gas-ga.png
    (each also has @2x)
  diagrams/         (reserved — diagrams are currently inline SVG in index.html)
```

## Editing content

- **Contact email** lives in `index.html`. Search for `magnus.ekblad@heatamp.com` — appears in two places (hero CTA + contact section).
- **Team bios** are in `index.html` under the `<!-- ===== TEAM ===== -->` section.
- **Partner logos**: drop new PNGs into `assets/logos/` and add a `<li>` in the `.logo-wall` list.
- **Stats and headlines**: search for the headline text in `index.html` — everything is plain HTML and easy to find.

## Swapping out team photos

The current team photos were extracted from the investor pre-read PDF and are a bit small. When Magnus provides higher-resolution shots:

1. Save the new file as `assets/images/team-magnus.jpg` (and `@2x.jpg` at 2× the size).
2. No HTML changes needed — the file paths are stable.
3. Same for `team-ingemar.*` and `team-corey.*`.

## Diagrams

The sorption process diagram (Technology section) and TAM/SAM/SOM funnel (Market section) are **inline SVG** inside `index.html`. To edit, find the `<svg class="sorption-diagram">` or `<svg class="funnel-diagram">` blocks and adjust shapes, labels, or colors. Both are easy to recolor — most fills use the palette colors from `style.css`.

## Palette

Defined as CSS custom properties at the top of `style.css`:

| Token | Color | Use |
|---|---|---|
| `--ink` | `#0f172a` | Primary text |
| `--ink-mid` | `#475569` | Body / secondary text |
| `--ink-muted` | `#64748b` | Captions, footer |
| `--accent` | `#c8102e` | HeatAmp red — buttons, eyebrows, stat highlights |
| `--bg` | `#ffffff` | Primary background |
| `--bg-alt` | `#f8fafc` | Alternating sections |
| `--bg-deep` | `#0f172a` | Contact section background |

Change a value once at the top of `style.css` and it propagates everywhere.

## Versioning notes

**v1 (this build)** — the lean MVP. Single-page scroll, two custom inline diagrams, mailto contact, static deploy.

**v2 (when Magnus has feedback)** — likely additions: more diagrams (gas heat pump system flow, prototype timeline), isometric "house with HeatAmp inside" illustration, scroll-triggered animations.

The design spec is at `docs/superpowers/specs/2026-06-06-heatamp-website-design.md`.
