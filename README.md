# OranR Shopify Theme — v1.0 (Preview)

Converted from the static mockup at `~/workspace/oranr/mockup/` (v4, neon-sign logo + brand system).
Same CSS, same layout, same compliance architecture — now powered by Liquid.

## Install

1. Zip the `shopify-theme/` folder contents (or push via Shopify CLI / GitHub integration).
2. In Shopify admin: **Online Store → Themes → Add theme → Upload zip file**.
3. **Customize** to set colors / announcement text, then **Publish** when ready.

## Before going live — required setup in Shopify admin

1. **Products** — Create products with the SKUs from the mockup BUILD-NOTES.md
   (e.g. `ORN-BPC5` → handle `bpc-157`). Titles, prices, compare-at prices map 1:1.
   Upload real product photography (replaces the CSS vial placeholders automatically
   when a `featured_image` exists).
2. **Collections** — Create an `all` collection (or set the Featured products
   section to your preferred collection). Tag products for the catalog filters:
   delivery → `injectables`, `nasal`, `oral`, `blends`, `stacks`;
   research focus → `recovery`, `cognitive`, `metabolic`, `ghaxis`, `skin`.
3. **Brand pages** — Create two pages:
   - Page with template suffix `brands` (URL `/pages/brands`) → brand grid.
   - Page with template suffix `brand` (URL `/pages/brand`) → single-brand view,
     driven by `?b=<brand-id>` (e.g. `/pages/brand?b=recura`).
4. **Blog** — Create a blog with handle `news` (`/blogs/news`) and publish articles.
   The article template expects the standard article object.
5. **Product metafields** (namespace `oranr`) for the Chemical Data table:
   `cas`, `formula`, `molar_mass`, `sequence`, `form`. Define these as product
   metafields in **Settings → Custom data**; rows render only when filled.
6. **COAs** — Upload batch PDFs to **Content → Files**, then link them in each
   product's description or a metafield where the `.coa-placeholder` sits.
7. **Company/compliance pages** — The footer links `#about`, `#shipping`, `#faq`,
   `#wholesale`, `#guarantee`, `#research-use`, `#terms`, `#privacy`, `#age` are
   placeholder anchors. Create real pages and update `sections/footer.liquid`.
8. **Navigation menus** — The header/drawer use hardcoded links (faithful to the
   mockup). Optionally rebuild them as Shopify menus later.
9. **Age gate (recommended)** — Add a 21+ entry gate app or custom snippet.

## Design compromises vs. the mockup

- **Homepage "Best sellers"**: the mockup hardcodes 8 specific products. The theme
  loops a configurable collection instead (defaults to `collections.all`), with
  elegant CSS-vial placeholders while the catalog is empty.
- **Brand product links**: mapped from the SKU→URL table in BUILD-NOTES.md.
  12 injectable SKUs resolve to real `/products/<handle>` URLs; all others
  (nasal/blends/stacks) fall back to `/collections/all` until products exist.
- **Article links in header/footer** (`article.html`): mapped to
  `/blogs/news/how-to-read-a-coa` as a best-effort default; update when real
  articles are published.
- **Newsletter forms**: kept as the mockup's visual-only JS confirmation.
  Wire to Shopify Email / Klaviyo before launch.
- **Variant pills**: the mockup's quantity-discount pills were visual-only.
  The theme renders real `product.variants` as pills; single-variant products
  skip the picker. If quantity-break pricing is wanted, use a quantity-breaks app.
- **Theme settings**: colors (accent/ink) and announcement text are editable in
  the customizer and override the CSS `:root` tokens. Deeper token changes still
  live in `assets/styles.css`.

## What needs real product data to work

- Product cards/prices (Liquid `product` objects — empty catalog shows placeholders)
- Product photography (CSS vials show until `featured_image` is set)
- Chemical data table (metafields `oranr.*`)
- COA documents (Shopify Files links)
- Blog articles (`/blogs/news`)
- Footer company/compliance page URLs
