# CLAUDE.md

## What this is
Tufayel's personal portfolio + call booking site. Single-page, zero framework, deployed on Netlify free tier.

## Stack
- `index.html` — the ENTIRE site: HTML + CSS + JS in one file. No build step. No bundler. Keep it that way.
- GSAP 3.12 + ScrollTrigger via cdnjs (animations)
- Google Fonts: Anton (display), Archivo (body), JetBrains Mono (metrics/labels)
- Netlify Forms — the booking form (`name="booking"`, `data-netlify="true"`)
- `netlify/functions/submission-created.js` — auto-fires on every form submission, sends the client a confirmation email via Brevo API

## Design system (do not drift)
- Colors: ink `#0E1116`, ink-2 `#161B23`, bone `#E9E4D8`, signal `#FF4B26`, slate `#8B93A1` (CSS vars in `:root`)
- Display type: Anton, all caps. Body: Archivo. Data/labels: JetBrains Mono.
- Tone of copy: energetic, active, a bit funny. NEVER use em dashes (—) anywhere in copy. Use commas, colons or periods instead.
- Signature elements: gradient-flow hero name, typewriter line, metrics ticker, sticky stacking cards, custom magnetic cursor.

## Hard rules
1. NO em dashes in any copy. Ever.
2. Keep everything in one `index.html`. Do not split into multiple files or add a framework unless explicitly asked.
3. All animations must respect `prefers-reduced-motion` (existing pattern is in the file, follow it).
4. Custom cursor and typewriter must stay disabled on touch devices.
5. Booking form: never rename `name="booking"` or remove `data-netlify="true"` / the hidden `form-name` input, or Netlify Forms breaks.
6. The function MUST stay named `submission-created.js` — that exact name is what makes Netlify trigger it on form submissions.

## Env vars (set in Netlify dashboard, never commit)
- `BREVO_API_KEY` — Brevo API key
- `FROM_EMAIL` — verified Brevo sender
- `FROM_NAME` — "Tufayel"

## Local dev
```bash
npm i -g netlify-cli   # once
netlify dev            # serves site + functions at localhost:8888
```
Note: form submissions only persist on the real deployed site, not locally.

## Deploy
Push to `main` → Netlify auto-deploys (once repo is connected). That's it.

## Pending / placeholders
- Contact email is `hello@tufayel.com` (placeholder, swap when real)
- Social links are generic (LinkedIn/Instagram need real URLs)
- Testimonials are role-attributed placeholders, swap for real quotes
- Ticker metrics are illustrative, swap for real campaign numbers
