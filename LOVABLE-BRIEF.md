# OR&R — Lovable Build Brief

## Project overview
OR&R (oranr.com) is a peptide research-compound store. This is a MEDICAL rebrand —
think clinical lab, not smoke shop. The reference brand is OR Reset (orreset.com):
clean, minimal, honest, understated. Every design decision should ask:
"would this look at home in a doctor's office?"

## Brand
- **Name:** OR&R — the ampersand is part of the logo, always rendered as OR&R (never ORR, never OR R)
- **Tagline:** Research Compounds
- **Logo:** clinical wordmark — "OR&R" in bold charcoal (#1e293b), ampersand in clinical teal (#0e7c8a), small hexagonal molecule mark to the left. Clean, flat, no glow, no neon, works on white.

## Design system
- **Backgrounds:** white (#ffffff), soft gray (#fafafa)
- **Text:** charcoal (#1e293b), muted gray (#5c6167)
- **Primary brand color:** clinical teal (#0e7c8a) — buttons, links, CTAs, accents
- **Secondary:** deep navy (#1e293b) for headings
- **Red (#c8102e) reserved ONLY for:** sale badges, alerts, compliance warnings — never as a brand color
- **Typography:** headings in **Sora** (600/700/800 — technical, lab-grade, premium); body/UI in **Inter** (400/500/600). Buttons in Sora 600, pill-shaped (999px radius) with hover lift + shine-sweep effect + press-down active state. Body 16px, generous line-height (1.65)
- **Corners:** subtle rounding (6-10px). Soft shadows, never harsh
- **Imagery:** lab science — scientists with beakers, molecules bonding, vials, microscopes. Clean, bright, professional photography. No dark moody backgrounds, no neon

## Site structure
1. **Age gate (21+)** — full-screen on entry, remembers choice
2. **Header** — OR&R logo, nav: Shop All, Nasal Sprays, Injectables, Blends & Stacks, Brands (dropdown, 21 brands), Quality, Research Blog, Contact
3. **Hero** — TALL canvas (720px desktop, ~94vh mobile) with 3-slide rotating banner (6s each): lab imagery + clinical headlines. **Responsive images:** desktop gets the wide horizontal crop; mobile gets a longer portrait crop of the same image (swap via a mobile image override). **Text must melt into the image:** layered gradient scrim (soft full-image darkening + left-side deepening + bottom lift), frosted-glass eyebrow pill, soft deep text-shadows — no hard-edged text bands. **SEO headings:** exactly ONE h1 on the page (slide 1: "High-Purity Research Peptides, Third-Party Tested"); slides 2–3 use h2 styled identically. Target non-brand keywords: "research peptides," "third-party tested," compound names. **Ad-platform compliance:** research-use framing only — no "buy" language in headlines, no human-use implications, no disease/treatment claims, no efficacy promises. "For laboratory research use only" pinned in the hero.
4. **Trust badges** — third-party tested, COA available, secure checkout, fast shipping
5. **Featured products** — product cards with clean pricing
6. **Quality / assays section** — lab reports, purity standards, testing process
7. **Brand directory** — 21 brands with dropdown nav
8. **Research blog** — SEO articles
9. **Newsletter signup**
10. **Footer** — full compliance: "For research use only. Not for human consumption." + disclaimers

## Copy tone
Clinical, precise, honest. No hype, no exclamation marks, no bro-science.
Good: "Third-party tested for purity. Certificate of analysis available for every batch."
Bad: "INSANE purity!! Strongest peptides on the market!!!"
Compliance is non-negotiable: "research use only" language must appear on product pages, cart, and footer.

## What to avoid
- Neon, glow effects, dark smoke-shop aesthetics
- Hype copy, exaggerated claims
- Anything that looks like a head shop or supplement bro brand
- Medical claims about treating/curing anything (compliance!)

---

## COPY-PASTE PROMPTS FOR LOVABLE

### Prompt 1 — Full site build
```
Build a complete e-commerce website for OR&R (oranr.com), a peptide research-compound store.

DESIGN: Strictly MEDICAL/CLINICAL aesthetic — think pharmaceutical lab, not smoke shop. White backgrounds (#ffffff), charcoal text (#1e293b), clinical teal (#0e7c8a) as the primary brand color for buttons and CTAs. Clean system sans-serif typography. No neon, no glow, no dark moody sections. Reference the clean minimalism of orreset.com.

LOGO: Text wordmark "OR&R" (ampersand always included) in bold charcoal with the & in teal, small hexagonal molecule icon to the left, tagline "RESEARCH COMPOUNDS" in letterspaced small caps below.

PAGES/SECTIONS:
1. 21+ age gate on entry (full-screen, remembers choice)
2. Header with logo + nav: Shop All, Nasal Sprays, Injectables, Blends & Stacks, Brands dropdown, Quality, Research Blog, Contact
3. Hero: 3-slide rotating banner (6 sec each) with lab-science imagery (scientists, molecules, vials) and clinical headlines
4. Trust badge row (third-party tested, COA available, secure checkout)
5. Featured products grid with clean product cards
6. Quality & assays section (lab testing, purity standards)
7. Brand directory (21 brands)
8. Research blog section
9. Newsletter signup
10. Footer with full "research use only" compliance disclaimers

COPY TONE: Clinical, precise, honest. No hype. Every product page must include "For research use only. Not for human consumption."
```

### Prompt 2 — Product page
```
Build a product detail page for OR&R matching the clinical design system (white, charcoal #1e293b, teal #0e7c8a).

Include: product image gallery, product title, price, variant selector (size/quantity), quantity picker, add-to-cart button (teal), trust badges (third-party tested, COA available), tabs for Description / Lab Results / Shipping, related products.

MUST include prominently: "For research use only. Not for human consumption." near the add-to-cart button and in the footer of the page.

Tone: clinical and factual. No health claims, no hype.
```

### Prompt 3 — Refinement pass
```
Review the entire OR&R site and tighten it toward a more medical/pharmaceutical feel:

1. Remove anything that feels like a smoke shop or hype supplement brand — no neon, no aggressive colors, no exaggerated copy
2. Make sure the OR&R logo renders with the ampersand (&) in teal on every page
3. Check that "research use only" compliance language appears on all product pages, cart, and footer
4. Tighten headlines to be clinical and trust-building (e.g. "Third-party tested. Every batch.")
5. Ensure mobile layout is clean — header, hero, and product grids must work on phones
```
