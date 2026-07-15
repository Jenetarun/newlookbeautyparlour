# New Look Beauty — Sanity Studio

This is the content management studio for **New Look Beauty Parlour**.

## Live URLs

- **Website:** https://luxe-beauty-parlour-4.emergent.host
- **Studio (embedded):** https://luxe-beauty-parlour-4.emergent.host/studio  (after running `yarn build:embed`)
- **Sanity Project:** https://www.sanity.io/manage/project/8ekm5mh7

## One-time setup (already done on this pod)

```bash
cd /app/studio
yarn install --ignore-engines
```

## Two ways to run the Studio

### 1. Embedded at /studio on your website  (recommended)

```bash
cd /app/studio
yarn build:embed        # builds studio into ../frontend/public/studio/
```

The Studio is now served at `https://<your-domain>/studio/`.
Log in with the email you used to create the Sanity project.

Re-run `yarn build:embed` whenever you change schemas.

### 2. Sanity Cloud (studio.sanity.build subdomain)

```bash
cd /app/studio
npx sanity login
npx sanity deploy       # deploys to https://<name>.sanity.studio
```

## CORS

Add the following origins in
[Sanity Manage → API → CORS Origins](https://www.sanity.io/manage/project/8ekm5mh7/api):

- `https://luxe-beauty-parlour-4.emergent.host`
- `https://luxe-beauty-parlour-4.preview.emergentagent.com`
- `http://localhost:3000` (for local dev)

*(No credentials needed — public read is enough for this site.)*

## Content Model

| Document        | Fields                                                                     |
| --------------- | -------------------------------------------------------------------------- |
| Hero Section    | eyebrow, headingLine1, headingLine2, description, chapter label, bg image  |
| Contact Info    | brand, tagline, beautician, phones, address, socials, maps, hours          |
| Services        | name, category, description, order                                         |
| Gallery         | label, image, tall (2×2 spot), order                                       |
| Offers          | tag, title, price line, description, validity, featured, order             |
| Customer Reviews| name, role, quote, rating, featured, order                                 |
| Site Images     | key + image (asset library used by the site)                               |

The frontend gracefully falls back to hard-coded content whenever a Sanity
document is missing, so you can publish gradually.
