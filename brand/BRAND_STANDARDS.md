# MetricMine Brand Standards

Revision 3. Dated 2026-09-05. Owner: Justin Goff. Steward: MetricMine Architect.
Status: FINAL system of record (Markdown master). Supersedes Rev 2 (2026-08-19), Rev 1 (2026-08-18), and the Rev 0.1 draft. Asset staging (B-06) closed at the website repository's first pull request on 2026-08-20. Rev 3 adds the Tier 3 web crops the site serves (B-09), the self-hosted web font rule (B-08), the hero composition rule, and the Mermaid 11 font note.

This Markdown file is the normative specification. The vector masters and SVG masters are the visual sources of truth, and the Word and PowerPoint records are the Office renderings. On any conflict, this document and its computed values govern. The full artifact registry and distribution plan are in Section 8.

Every color value below was extracted programmatically, confirmed against the vector masters on 2026-08-19, and every contrast ratio was computed against WCAG 2.1.

---

## 1. Brand core

| Item | Value |
|---|---|
| Name | MetricMine. One word, capital M twice. Never Metric Mine or Metricmine. |
| Org | metricminellc (GitHub), MetricMine LLC (legal) |
| Domain | metricmine.ai |
| Contact | github@metricmine.ai (GitHub and repo-facing) |
| Tagline (lockup art) | DATA MINED & REFINED |
| Thesis line (written copy) | Agents propose. Humans approve. |
| Thesis line, extended | Agents propose. Humans approve. Deterministic code executes. |
| Positioning | Contract-driven medallion pipeline, reference implementation |

Positioning guardrail: no throughput claims, no production SLA language, no scale claims, on any surface this document governs.

Tagline vs thesis line: the tagline is baked into the logo art and stays there. The thesis line is the written headline for heroes, READMEs, and decks. Do not stack both in the same visual tier.

---

## 2. Logo system

### 2.1 Asset inventory, three tiers

**Tier 1: vector masters (source of truth for all logo art).** Nine artworks, each as SVG plus EPS, all buffered (clear space built in), received 2026-08-19. Master formats for all graphic design and regeneration needs.

| Source file (MM_*_Buffer_Transparent_*) | Contents | Canonical name (brand/vector/) |
|---|---|---|
| FullLogo Tall black | Stacked symbol, wordmark, tagline, ink | lockup-stacked-tagline-ink.svg/.eps |
| FullLogo Tall white | Stacked, white wordmark, dark-adapted symbol | lockup-stacked-tagline-white.svg/.eps |
| FullLogo Long black | Horizontal with tagline, ink | lockup-horizontal-tagline-ink.svg/.eps |
| FullLogo Long white | Horizontal with tagline, white, dark-adapted symbol | lockup-horizontal-tagline-white.svg/.eps |
| NameLogo Long black | Horizontal symbol plus wordmark, no tagline, ink | lockup-horizontal-ink.svg/.eps |
| NameOnly black | Wordmark only, ink | wordmark-ink.svg/.eps |
| NameOnly white | Wordmark only, white | wordmark-white.svg/.eps |
| SymbolLogo black | Symbol only, standard color treatment | symbol-color.svg/.eps |
| SymbolLogo white | Symbol only, dark-background treatment | symbol-dark.svg/.eps |

Known kit gaps (vector does not exist; raster only): horizontal no-tagline in white, the grayscale set, and all unbuffered tight crops. The dark site header uses lockup-horizontal-tagline-white until a no-tagline white vector exists.

**Tier 2: raster outputs (legacy exports, brand/raster/).** The pre-existing PNGs from prior design work. Retained as convenience exports; regenerable from Tier 1 on demand except the grayscale file, which has no vector master and remains the mono canon.

| Canonical name | Contents | Note |
|---|---|---|
| lockup-horizontal-ink.png | Site header lockup, tight crop | Regenerable from vector |
| lockup-horizontal-ink-padded.png | Same, padded | Regenerable |
| lockup-tagline-ink.png | Horizontal with tagline, ink | Regenerable |
| lockup-tagline-white.png | Horizontal with tagline, white | Regenerable |
| lockup-stacked-color.png | Stacked with tagline, color | Regenerable; two duplicate uploads removed at staging |
| lockup-square-white-bg.jpg | Square on white, JPG | Platform-specific export |
| lockup-horizontal-mono.png | Grayscale horizontal | Mono canon, no vector exists |
| symbol-color.png, symbol-color-padded.png | Color symbol crops | Regenerable |

**Tier 3: generated from vector (2026-08-19, brand/ and site root).** favicon.ico (16, 32, 48 embedded), favicon-16.png, favicon-32.png, apple-touch-icon-180.png (white backing), icon-512.png, symbol-color_1024.png, symbol-dark_1024.png. The earlier symbol-dark crop derived from the white lockup PNG is deprecated; the vector-generated master replaces it.

**Tier 3, web crops (2026-09-05, brand/web/, B-09).** Four SVG files the website serves: symbol-color.svg, symbol-dark.svg, lockup-horizontal-tagline-ink.svg, lockup-horizontal-tagline-white.svg. Each is its Tier 1 master with only the root element's width, height, and viewBox rewritten to a window on the artwork (the symbol as a centered square with a 5 percent margin; the lockups as tight crops with an 8-unit margin, the same treatment the Tier 2 header rasters carry). Every path, transform, and color inside is byte-identical to the master. Generated by `scripts/brand_web_crops.py` in the website repository from the artwork bounds it records; regenerate, never hand-edit. The page layout supplies the clear space (Section 2.3).

### 2.2 Variant selection rules

1. Light background: ink lockups (horizontal for headers, stacked for heroes).
2. Dark background: the white lockups. Their symbol is deliberately rebuilt with Slate Mid and mint; this is the approved dark treatment, and symbol-dark is its standalone master for symbol-only placements on dark fields.
3. Single color only: the grayscale lockup. Never desaturate the color files ad hoc.
4. Square container required: the square JPG.
5. Wordmark-only files serve constrained horizontal spaces and co-brand rows; prefer full lockups elsewhere.
6. Symbol alone is permitted once the brand is established in context (favicons, avatars, slide and diagram corners, footers). Symbol alone never introduces the brand on a first-touch surface.
7. On the website, logo art is served from the Tier 3 web crops (brand/web/), never from the rasters: the header lockups, the hero symbol, the footer symbol, and any symbol referenced inside a site diagram. A diagram references the crop; it never redraws the mark.

### 2.3 Clear space and minimum sizes

1. Clear space: one cube height on all sides. All Tier 1 masters carry it built in; preserve it when cropping.
2. Minimum sizes: symbol 24 px. Horizontal lockup 140 px wide on screen, 32 mm in print. Tagline lockups 220 px wide minimum; below that, switch to the no-tagline lockup.

### 2.4 Don'ts

No recoloring. No stretching or rotating. No drop shadows, glows, or outlines. No placing color lockups on mid-tone or busy backgrounds. No rebuilding the wordmark in a live font. No editing logo files to normalize the generator variance documented in 3.1.

### 2.5 Vector originals (RESOLVED, B-05)

Closed 2026-08-19. Nine vector artworks received as SVG and EPS pairs and adopted as Tier 1 masters.

---

## 3. Color

### 3.1 Core palette (extracted, vector-confirmed)

| Name | Hex | Vector source | Role |
|---|---|---|---|
| Ink | #04041C | All black variants, exact | Primary text, dark theme background |
| Slate | #25444C | Symbol and stacked masters | Headings accent, table headers |
| Brand Green | #5CAC94 | Symbol and stacked masters | Brand accent, dark theme accent |
| Mint | #B4DACC | Symbol and stacked masters | Tints, fills, dark theme emphasis text |
| Slate Mid | #38626D | All white-variant symbols, exact | Info accents, secondary UI |
| White | #FFFFFF | Reversed wordmark | Light theme background, text on ink |

Canon confirmation and variance (B-01, closed 2026-08-19): the symbol is the atomic mark, and the symbol and stacked masters carry canon exactly. The horizontal (Long) masters carry a logo-generator variance of 3 to 8 per channel: #25404A, #5FAC94, #ACD8CC, and #B7DCCD mint in the white symbol and stacked-white files. This variance is acceptable inside logo art only. Tokens, UI, documents, and diagrams always use canon. Never edit logo files to normalize it.

Mono ramp from the grayscale raster: #070707, #3D3D3D, #9E9E9E, #CFCFCF. Single-color contexts only.

### 3.2 Extended green ramp (computed)

Contrast is against white unless noted.

| Token | Hex | On white | On ink | Approved use |
|---|---|---|---|---|
| green-50 | #EEF6F4 | 1.10 | 18.40 | Tinted section backgrounds |
| green-100 | #DDEEE9 | 1.20 | 16.82 | Callout fills, table stripes |
| green-200 | #BBDDD3 | 1.46 | 13.85 | Borders on tinted fills |
| green-300 | #9ACBBC | 1.80 | 11.20 | Decorative, charts |
| green-400 | #78BAA6 | 2.24 | 9.02 | Dark theme links, dark diagram arrows |
| green-500 | #5CAC94 | 2.70 | 7.49 | Brand accent, dark theme accent |
| green-600 | #4C957F | 3.55 | 5.69 | Large text accents on light, focus rings |
| green-700 | #3E7A68 | 5.01 | 4.03 | Light theme links, buttons |
| green-800 | #305F51 | 7.29 | 2.77 | High-contrast accents |
| green-900 | #22443A | 10.74 | 1.88 | Deep fills, footers |

### 3.3 Cool neutral ramp (computed, slate hue at 10 percent saturation)

| Token | Hex | On white | Approved use |
|---|---|---|---|
| gray-50 | #F8F9F9 | 1.05 | Page tint, code background |
| gray-100 | #F0F2F2 | 1.12 | Cards, wells |
| gray-200 | #DDE2E3 | 1.31 | Borders, dividers |
| gray-300 | #C1CACD | 1.67 | Disabled fills, dark theme secondary text (12.12 on ink) |
| gray-400 | #94A4A8 | 2.58 | Placeholder icons |
| gray-500 | #6C7F84 | 4.19 | Large secondary text only |
| gray-600 | #536165 | 6.43 | Secondary body text |
| gray-700 | #3E494C | 9.28 | Strong secondary text |
| gray-800 | #293132 | 13.29 | Near-ink alternative |
| gray-900 | #191E1F | 16.84 | Reserved |

### 3.4 Semantic colors

| State | Color | Tint fill | On white | Rule |
|---|---|---|---|---|
| Success | #3E7A68 (green-700) | #E2EFEA | 5.01 | Text-safe standalone |
| Warning | #B4762A | #F4E9DA | 3.77 | Fills and large text only, pair with ink text |
| Error | #C0453F | #F6E0DF | 5.04 | Text-safe standalone |
| Info | #38626D (Slate Mid) | #DFE8EA | 6.70 | Text-safe standalone |

Default pattern in documents and web: tinted fill, ink label, colored left border or icon. In slide contexts, replace the left border with a leading color dot; edge stripes on slides are prohibited under the B-07 family rule.

### 3.5 Medallion accents for diagrams

| Layer | Hex | Ink text on fill |
|---|---|---|
| Bronze | #B0805B | 5.85 |
| Silver | #AEB6BC | 9.83 |
| Gold | #D9A441 | 8.98 |

Approved (B-04). Node fills with ink text in diagrams, card fills in decks, and the strata motif.

### 3.6 Accessibility rules (computed, binding)

1. Brand Green #5CAC94 never carries body text on white (2.70, fail). Decorative or large display only on light backgrounds.
2. Light theme links and interactive text use green-700 #3E7A68 (5.01, AA).
3. Dark theme: green-500 passes AAA on ink (7.49); links may use green-400 for headroom (9.02).
4. Mint never carries text on white (1.52). On ink it is AAA (13.32) and approved for emphasis text in dark theme.
5. Secondary text on white starts at gray-600 (6.43). gray-500 is large-text only.
6. White text on green-700 buttons passes AA (5.01). Green-500 buttons take ink text (7.49).

### 3.7 Theme tokens

Default theme: LIGHT (approved, B-02). Dark is fully specified and offered via toggle plus prefers-color-scheme.

| Token | Light | Dark |
|---|---|---|
| bg | #FFFFFF | #04041C |
| bg-raised | #F8F9F9 | #0B1226 |
| bg-inset | #F0F2F2 | #121A33 |
| text | #04041C | #FFFFFF |
| text-secondary | #536165 | #C1CACD |
| text-brand-emphasis | #25444C | #B4DACC |
| link | #3E7A68 | #78BAA6 |
| accent | #5CAC94 | #5CAC94 |
| border | #DDE2E3 | #26304A |
| code-bg | #F8F9F9 | #0B1226 |
| focus-ring | #4C957F | #78BAA6 |

```css
:root {
  --mm-bg: #FFFFFF; --mm-bg-raised: #F8F9F9; --mm-bg-inset: #F0F2F2;
  --mm-text: #04041C; --mm-text-2: #536165; --mm-emph: #25444C;
  --mm-link: #3E7A68; --mm-accent: #5CAC94; --mm-border: #DDE2E3;
  --mm-code-bg: #F8F9F9; --mm-focus: #4C957F;
}
@media (prefers-color-scheme: dark) {
  :root {
    --mm-bg: #04041C; --mm-bg-raised: #0B1226; --mm-bg-inset: #121A33;
    --mm-text: #FFFFFF; --mm-text-2: #C1CACD; --mm-emph: #B4DACC;
    --mm-link: #78BAA6; --mm-accent: #5CAC94; --mm-border: #26304A;
    --mm-code-bg: #0B1226; --mm-focus: #78BAA6;
  }
}
```

---

## 4. Typography

### 4.1 Canonical stack (free, approved B-03)

| Role | Face | Weights | License |
|---|---|---|---|
| Display and headings | Manrope | 600, 700, 800 | OFL, Google Fonts |
| Body and UI | Inter | 400, 500, 600 | OFL, Google Fonts |
| Code and data | JetBrains Mono | 400, 500 | OFL, Google Fonts |

Manrope bridges the wordmark geometry and the legacy Avenir document style. Inter is the screen-legibility standard for developer tools. JetBrains Mono is purpose-built for code. All three are OFL: free forever, embeddable anywhere, installable by any collaborator, safe in a public repo.

Web, self-hosted (B-08, Rev 3). The website serves the three faces from its own origin: the latin-subset variable woff2 builds (the Fontsource builds of the OFL originals, one file per family, the weight axis intact) under `src/assets/fonts/` with their license texts beside them, declared through Astro's Fonts API with `font-display: swap`, the two above-the-fold faces preloaded, and the metric-matched Arial fallbacks the API generates. No third-party font request. The site's source stays inside the latin subset (ASCII, Latin-1, general punctuation); icons are inline SVG, never text glyphs, and a glyph gate enforces it.

Web embed for surfaces that cannot self-host (an external document, a deck, a third-party page), unchanged:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

Office install: install the static TTF builds locally, not the variable files. OFL permits embedding fonts in shared decks (PowerPoint: File, Options, Save, Embed fonts).

### 4.2 Premium comparison (recorded, closed)

Avenir Next remains acceptable for PDF-only exports Justin produces personally. Anything committed, shared, or CI-rendered uses the free canon. A purchased premium display face is rejected at this stage. Fallback chains: Manrope, Avenir Next, Aptos, Arial for headings; Inter, Avenir Next, Aptos, Arial for body.

### 4.3 Web type scale

| Token | Face and weight | Size | Notes |
|---|---|---|---|
| display | Manrope 800 | clamp(2.25rem, 5vw, 3.5rem) | Hero only, leading 1.1 |
| h1 | Manrope 800 | 2rem | |
| h2 | Manrope 700 | 1.5rem | |
| h3 | Manrope 700 | 1.25rem | |
| body | Inter 400 | 1rem at 1.6 line height | 16 px base |
| small | Inter 400 | 0.875rem | gray-600 |
| eyebrow | Manrope 600, uppercase | 0.8125rem, letter-spacing 0.14em | Signature element |
| code | JetBrains Mono 400 | 0.9em | |

Signature element: the eyebrow label. Small uppercase Manrope with 0.14em tracking in green-700 (mint on dark), placed above section headings, echoing the tagline treatment in the lockup.

### 4.4 Word document specification

| Style | Face | Size | Weight | Color |
|---|---|---|---|---|
| Title | Manrope | 24 pt | ExtraBold | Ink |
| Subtitle | Inter | 12 pt | Regular | gray-600 |
| Heading 1 | Manrope | 16 pt | Bold | Slate |
| Heading 2 | Manrope | 13 pt | SemiBold | Slate |
| Heading 3 | Manrope | 11.5 pt | SemiBold | Ink |
| Body | Inter | 11 pt | Regular | Ink |
| Caption | Inter | 9 pt | Regular | gray-600 |
| Code block | JetBrains Mono | 9.5 pt | Regular | Ink on gray-50, gray-200 border |
| Hyperlink | Inter | 11 pt | Regular | green-700, underlined |
| Table header | Manrope | 10.5 pt | SemiBold | White on Slate |

Table body rows stripe with gray-50. Color swatch cells use the target hex as cell shading. Page footer: document name, revision, date, page number, Inter 8 pt gray-500. Existing Avenir documents are not retrofitted. The Rev 1 sample document doubles as the template seed.

### 4.5 PowerPoint specification (amended per B-07)

1. Content slides: white background, ink titles, hierarchy carried by size and whitespace. No rules, underlines, accent bars, or edge stripes under or around titles (B-07).
2. Title and section slides: ink background with the white tagline lockup. Deck title 40 pt Manrope ExtraBold white.
3. Content slide titles: 32 pt Manrope ExtraBold ink. Body 14 to 18 pt Inter. Footer 9 pt Inter gray-600 with the symbol at 24 px equivalent and page number, carried on the slide master.
4. Chart series order: green-500, Slate, Mint, Slate Mid, Gold, Bronze, gray-400. Gridlines gray-200, category gridlines off, labels and axis text gray-600 Inter. No 3D, no shadows.
5. Semantic chips on slides use the leading-dot pattern from Section 3.4.
6. The sample deck and the standards deck double as template seeds; both carry masters for light and dark slides.

---

## 5. Voice

1. Short declarative sentences. Active voice. Personal ownership language.
2. No em dashes anywhere. Use commas, periods, colons, or parentheses.
3. Sentence case for UI labels and buttons. Buttons name the action: View on GitHub, Read the docs.
4. Honest positioning always: reference implementation, local-first by design. No hype adjectives, no unearned plurals until they exist.
5. The thesis line is the standing headline. New taglines are proposed through this document.

---

## 6. Applications

### 6.1 Website

Hero: light theme, ink display text on white, thesis line as headline, install command block in JetBrains Mono on gray-50, primary button green-700 with white text, secondary button ink outline. Dark theme mirrors with the white lockup and a green-500 button carrying ink text. Focus rings use the focus token at 2 px minimum. The stacked color lockup or the symbol is the only logo art the hero needs; the hero may compose a diagram around the symbol (sources in, an answer out) as long as the symbol itself is the untouched web crop and the composition follows Section 6.4 (one geometry, theme tokens for every fill and stroke). A chip row under the buttons carries the release tag, the license, and the live star count (spec 7.4.4 chips). Favicon set from Tier 3.

Inner pages open with the eyebrow, a title, and a lede on the hero wash, and close with a call-to-action band on the raised surface. Numbers on any page link to the document or test that holds them.

### 6.2 GitHub and README

Theme-aware logo:

```html
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="brand/raster/lockup-tagline-white.png">
  <img alt="MetricMine" src="brand/raster/lockup-horizontal-ink.png" width="420">
</picture>
```

Badges: keep to the relevant few; custom color badges use 5CAC94. OG and social card: 1200 x 630, ink background, white tagline lockup left, thesis line in Manrope 700 white, a 6 px mint bar along the bottom edge. Export as PNG under 1 MB.

### 6.3 Demo GIF (VHS) theme

Background #04041C, foreground #F0F2F2, prompt and highlights #5CAC94, cursor #B4DACC, JetBrains Mono at 16 px minimum, 30 seconds maximum. The tape file is committed; the GIF is an artifact of it.

### 6.4 Diagrams

Two tiers, both governed.

**Working diagrams (Mermaid).** For .mmd flows in the repo and quick illustrations:

```
%%{init: {'theme':'base','fontFamily':'Manrope, Inter, sans-serif',
  'themeVariables':{
  'primaryColor':'#B4DACC','primaryTextColor':'#04041C',
  'primaryBorderColor':'#25444C','lineColor':'#38626D',
  'secondaryColor':'#DDEEE9','tertiaryColor':'#F8F9F9',
  'fontFamily':'Manrope, Inter, sans-serif'}}}%%
classDef bronze fill:#B0805B,stroke:#25444C,color:#04041C;
classDef silver fill:#AEB6BC,stroke:#25444C,color:#04041C;
classDef gold   fill:#D9A441,stroke:#25444C,color:#04041C;
```

Mermaid 11 applies the top-level `fontFamily` key of the init directive to the rendered SVG and ignores `themeVariables.fontFamily`; the block carries both so the font lands (measured with Mermaid 11.17.2 on 2026-08-29). A bare `%%` comment line breaks the erDiagram parser; a comment line with text after it parses.

**Published diagrams (SVG standard).** For README, site, and deck diagrams:

1. One geometry, two token sets. Light and dark are the same drawing with theme variables swapped, never two hand-made diagrams.
2. SVG is the source of truth; PNG is an export at 2x.
3. Fonts are subsetted to used glyphs and embedded as woff2 data URIs (roughly 7 KB per face). Plain font-family references silently fall back to generic sans in GitHub READMEs because external fonts never load inside an image; embedding fixes it.
4. Explicit background per theme (white or ink). Never transparent.
5. Arrows and connectors: Slate Mid on light, green-400 on dark. Gate and annotation labels in JetBrains Mono. Section eyebrow tracked Manrope. Caption line and symbol per the masters.
6. Pair light and dark in the README with the same picture-tag pattern as the logo.
7. On the website, a diagram is an inline SVG component whose fills and strokes are the Section 3.7 tokens, so one drawing renders light and dark; the site's fonts apply to it, so nothing is embedded. Logo art inside it is the referenced web crop (Section 2.2, rule 7). A wide diagram scrolls inside its own frame on small screens instead of shrinking below legibility.

### 6.5 Documents and decks

All new Word and PowerPoint deliverables follow Sections 4.4 and 4.5 and the naming convention (Justin_Goff_MetricMine_Name_MMDDYYYY_RevN).

---

## 7. Style vocabulary (adopted from the Style Patterns master)

### 7.1 Backgrounds

| Name | Spec | Use |
|---|---|---|
| Base light | #FFFFFF | Default light surface |
| Raised light | #F8F9F9 | Cards, wells, alternating sections |
| Mint wash | radial green-50 to white | Light hero and section washes |
| Base dark | #04041C | Default dark surface |
| Depth gradient | #04041C to #0B1226 vertical | Dark heroes |
| Green glow | green-500 at 18 percent to 0, top left radial | Dark hero atmosphere, sparingly |

### 7.2 Patterns

| Name | Spec | Use |
|---|---|---|
| Iso lattice, light | mint 1 px at 50 percent, 44 px tile | Section texture on light |
| Iso lattice, dark | slate-mid 1 px at 60 percent, 44 px tile | Section texture on dark |
| Dot grid, light | green-300, r 1.6 at 80 percent, 26 px | Quiet texture on light |
| Dot grid, dark | slate-mid, r 1.6 at 90 percent, 26 px | Quiet texture on dark |
| Contours | mint (light) or slate-mid (dark), 1.5 px | Hero art only |

Patterns derive from the mark's isometric cube geometry and the mining metaphor. Never place body text directly over a pattern without a solid or heavily washed backing.

### 7.3 Strata motif

Bronze, silver, and gold as translucent wavy layers over ink (opacities roughly 0.5 to 0.6). Hero art only. Never as slide divider stripes or card edge decoration (B-07 family rule).

### 7.4 Accent devices

1. **Eyebrow**: per Section 4.3. The standing section-label device.
2. **Cube bullets**: the mark reduced to a three-face isometric glyph (mint top, green left, slate right) as list bullets in web and slide contexts. Word documents keep standard bullets.
3. **Links and focus**: green-700 underlined on light, green-400 on dark; focus ring 3 px green-600 (green-400 dark) with 4 px offset.
4. **Badges**: outline chip (gray-300 border, ink mono text), tinted chip (#E2EFEA fill, green-800 text), ink chip (mint mono text).
5. **Callout**: green-100 family fill, ink text, green-700 left border in documents and web; leading dot variant on slides.
6. **Dark raised card**: #0B1226 fill, #26304A border, radius 12.

---

## 8. Systems of record, registry, and distribution

### 8.1 Artifact registry

| Artifact | File | Role |
|---|---|---|
| Markdown master | brand/BRAND_STANDARDS.md (Rev 3; the project copy is MetricMine_Brand_Standards_09052026_Rev3.md) | Normative specification (this file) |
| Vector masters | 9 artworks, SVG + EPS pairs (Section 2.1 Tier 1) | Logo source of truth |
| Word record | Justin_Goff_MetricMine_Brand_Standards_08192026_Rev2.docx | Office rendering, Word template seed |
| Deck record | Justin_Goff_MetricMine_Brand_Standards_Deck_08192026_Rev2.pptx | Office rendering, deck template seed |
| Board master | claude_MetricMine_Brand_Board_Master_08182026.svg (+ PNG) | Visual source of truth, full system |
| Style patterns master | claude_MetricMine_Style_Patterns_08182026.svg (+ PNG) | Visual source of truth, Section 7 |
| Diagram standard | claude_MetricMine_Diagram_Standard_Light/Dark_08182026.svg (+ PNGs) | Visual source of truth, Section 6.4 |
| Favicon set | claude_MetricMine_Favicon_Set_08192026.zip | Tier 3 generated assets |
| Web crops | brand/web/ (4 SVG) and scripts/brand_web_crops.py in the website repository | Tier 3 generated assets the site serves (B-09) |
| Web fonts | src/assets/fonts/ in the website repository (3 woff2, 3 OFL texts) | The self-hosted faces (B-08) |
| Styled samples | Justin_Goff_MetricMine_Brand_Sample_Doc/Deck_08182026_Rev1 | Template demos; superseded as records by the Rev 2 Office records |

Deprecated: the 08182026 experimental PNG-only board (superseded by the Board Master), the Rev 0.1, Rev 1, and Rev 2 markdown cuts, the Rev 1 Office records, and the crop-derived symbol-dark PNG. The Rev 2 Office records stand until a Rev 3 rendering is produced.

Precedence on conflict: this Markdown, then the vector and SVG masters, then the Office records.

### 8.2 Distribution and consumption surfaces

This standard serves three surfaces: this Claude Project (planning), Claude Code in metricminellc/website (site build), and Claude Code in metricminellc/metricmine (diagrams and README).

**Single-source rule.** The Markdown master lives in the website repo at `brand/BRAND_STANDARDS.md` and is the one maintained copy. This Claude Project holds the same revision in project knowledge. The metricmine repo carries a pointer, not a copy.

**Website repo layout** (staged in the Session 1 or a dedicated brand PR, which also closes B-06):

```
brand/
  BRAND_STANDARDS.md
  vector/    (9 SVG + 9 EPS, canonical names per 2.1)
  raster/    (Tier 2 PNGs, canonical names, dupes dropped)
  masters/   (board, patterns, diagram SVG masters + PNG exports)
  favicons/  (the Tier 3 favicon record set)
  web/       (the Tier 3 web crops the site serves, generated)
public/      (favicon.ico, favicon-16/32, apple-touch-icon-180, icon-512)
```

**CLAUDE.md block for metricminellc/website** (apply verbatim):

```markdown
## Brand standards
- The normative spec is brand/BRAND_STANDARDS.md. Follow it for all color, type, spacing, and copy decisions.
- Fonts: Manrope (headings), Inter (body), JetBrains Mono (code), self-hosted per spec Section 4.1 (Rev 3) through Astro's Fonts API; pages reference them only through the --font-* variables. Theme tokens are in spec Section 3.7; use the CSS custom properties as written.
- Copy rules: short declarative sentences, no em dashes, no performance or service-level claims. Thesis line: "Agents propose. Humans approve."
- Logos: use files under brand/ only. The site serves brand/web/; never recolor, rebuild, or normalize logo art, and never redraw the symbol inside a diagram.
- Published diagrams follow spec Section 6.4: on the site, inline SVG components driven by the theme tokens; as standalone files, SVG source, paired light and dark, embedded subset fonts.
```

**CLAUDE.md block for metricminellc/metricmine** (apply at the next CLAUDE.md touch):

```markdown
## Brand standards
- Diagrams, README visuals, and any published imagery follow the MetricMine brand standard: https://github.com/metricminellc/website/blob/main/brand/BRAND_STANDARDS.md
- Mermaid diagrams use the theme block in spec Section 6.4. Published diagrams ship as paired light and dark SVGs with PNG exports.
- Copy rules: short declarative sentences, no em dashes, no throughput or SLA claims.
```

---

## 9. Decision register

| ID | Decision | Status |
|---|---|---|
| B-01 | Canonical green #5CAC94, confirmed exactly in the symbol and stacked vector masters; Long-family generator variance documented in 3.1, logo art only | Closed 2026-08-19 |
| B-02 | Light default theme, dark via toggle and prefers-color-scheme | Approved 2026-08-18 |
| B-03 | Free font canon: Manrope, Inter, JetBrains Mono | Approved 2026-08-18 |
| B-04 | Medallion accents #B0805B, #AEB6BC, #D9A441 | Approved 2026-08-18 |
| B-05 | Vector masters received: 9 artworks as SVG + EPS pairs | Closed 2026-08-19 |
| B-06 | Asset staging: canonical renames, dedupe, brand directory per 8.2 | Closed 2026-08-20, website PR #1 |
| B-07 | No rules, bars, or edge stripes on slides | Adopted 2026-08-18 |
| B-08 | The website self-hosts the three faces as latin-subset variable woff2 files; the Google Fonts embed stays for surfaces that cannot self-host (W-12) | Adopted 2026-09-05 |
| B-09 | Tier 3 web crops under brand/web/, generated from the vector masters by script, are the logo art the site serves (W-13) | Adopted 2026-09-05 |

Revision history:
Rev 0.1, 2026-08-18. Initial draft from extracted logo values, computed contrast, and font research.
Rev 1, 2026-08-18. Reconciled against all built artifacts: B-07 amendment, published-diagram SVG standard, style vocabulary, semantic tints, registry, decision statuses.
Rev 2, 2026-08-19. FINAL. Vector masters integrated as Tier 1 with canonical mapping; B-01 closed with canon confirmed and generator variance documented; B-05 closed; favicon set generated from vector; distribution plan and CLAUDE.md blocks added; deprecations recorded.
Rev 3, 2026-09-05. FINAL. B-06 recorded closed; B-08 self-hosted web fonts and the glyph rule; B-09 the Tier 3 web crops and the rule that the site serves them; the hero composition rule and the inner-page opener in 6.1; the site diagram rule in 6.4; the Mermaid 11 top-level fontFamily note and the bare-comment note; the registry and the layout updated; the website CLAUDE.md block refreshed.
