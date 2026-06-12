# CLAUDE.md

## What this is
Tufayel's personal portfolio + call booking site. Single-page, zero framework, deployed on Netlify free tier.

## Stack
- `index.html` — the ENTIRE site: HTML + CSS + JS in one file. No build step. No bundler. Keep it that way.
- GSAP 3.12 + ScrollTrigger via cdnjs (animations)
- Google Fonts: Anton (display), Archivo (body), JetBrains Mono (metrics/labels)
- Calendly inline embed for booking (handles scheduling, confirmations, and reminders)

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
5. Booking: the Calendly embed URL is `https://calendly.com/tufayelhossain20/30min`. Do not remove the `?hide_gdpr_banner=1&background_color=...` query params that match our design system.

## Local dev
```bash
npm i -g netlify-cli   # once
netlify dev            # serves site at localhost:8888
```

## Deploy
Push to `main` → Netlify auto-deploys (once repo is connected). That's it.

## Pending / placeholders
- Contact email is `hello@tufayel.com` (placeholder, swap when real)
- Social links are generic (LinkedIn/Instagram need real URLs)
- Testimonials are role-attributed placeholders, swap for real quotes
- Ticker metrics are illustrative, swap for real campaign numbers
