# New Look Beauty Parlour — PRD

## Original Problem Statement
Premium luxury, modern, fully responsive website for beauty salon "New Look Beauty Parlour" in Akividu, W. Godavari. Black/Gold/White/Rose Gold palette, Apple + Dior + L'Oréal aesthetic. Beautician: Lakshmi Eswari. Phone: 9505648133.

## Architecture
- Frontend: React + Tailwind + Framer Motion + Lenis (smooth scroll)
- Backend: FastAPI + MongoDB (appointments)
- Design: award-worthy editorial, dark-default with light-mode toggle, glassmorphism, kinetic hero with masked line reveal, numbered manifesto chapters, editorial marquee, parallax hero, spinning gold seal, grain overlay.

## User Personas
- Bride / bride's family in Akividu
- Regular skin/hair client
- Party/reception guest
- Home-service request

## Implemented (2025-12)
- Cinematic kinetic hero with parallax bridal image + masked line reveal + gold seal
- Numbered manifesto chapters (Atelier + Why Choose Us — 8 chapters)
- Editorial marquee
- Services list (25 services) with category filter + Home Service / Products callouts
- Instagram-style masonry gallery (12 items) linking to actual Instagram
- Testimonials (5 with 5-star ratings, editorial bento layout)
- Appointment form → POST /api/appointments + WhatsApp redirect
- Contact grid (Call / WhatsApp / Maps / Instagram) + working hours
- Footer with quick links
- Floating WhatsApp + Call CTAs
- Dark / Light mode toggle (auto with dark default)
- Framer-motion scroll reveals + Lenis smooth momentum scrolling
- SEO meta tags, Open Graph tags, custom title
- data-testid on all interactive elements

## Backlog / Next
- P1: Admin panel to view appointments
- P1: Real Instagram feed via IG API (needs business account setup)
- P2: Multi-language (Telugu)
- P2: WhatsApp booking analytics
- P2: Custom real photos to replace stock imagery

## Sanity CMS Integration (2025-12)
- Project ID: 8ekm5mh7, dataset: production
- Studio embedded at /studio/ (built from /app/studio, output copied into /app/frontend/public/studio/)
- Rebuild studio: `cd /app/studio && yarn build:embed && cp -r dist/* ../frontend/public/studio/ && cd ../frontend/public/studio && sed -i 's|"/static/|"/studio/static/|g; s|=/static/|=/studio/static/|g; s|(/static/|(/studio/static/|g' *.html static/*.js *.webmanifest`
- Frontend uses @sanity/client (CDN, published perspective) with graceful fallback to hard-coded constants
- Content-driven sections: Hero, Contact, Services, Gallery, Offers, Reviews, Site Images
- CORS: user must add origins in Sanity Manage → API → CORS Origins:
  - https://luxe-beauty-parlour-4.emergent.host
  - https://luxe-beauty-parlour-4.preview.emergentagent.com
  - http://localhost:3000
