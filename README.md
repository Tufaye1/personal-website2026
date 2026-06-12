# Tufayel.com — Portfolio + Booking

Single-file portfolio with a built-in call booking system. 100% free stack.

## The free stack (total cost: $0/month)

| Piece | Service | Free limit | Enough? |
|---|---|---|---|
| Hosting + SSL | Netlify | 100GB bandwidth/mo | Yes, by miles |
| Booking form | Netlify Forms | 100 submissions/mo | Yes (that's 100 calls/mo) |
| Auto-email to client | Netlify Functions + Brevo | 125k function runs, 300 emails/day | Yes |
| Notifications to you | Netlify form notifications | Unlimited | Yes |
| Code hosting + CI | GitHub | Unlimited public/private repos | Yes |

## One-time setup (15 minutes)

### 1. GitHub
```bash
cd tufayel-site
git init
git add .
git commit -m "init: portfolio + booking"
gh repo create tufayel-site --private --source=. --push
# (or create the repo on github.com and: git remote add origin <url> && git push -u origin main)
```

### 2. Netlify
1. app.netlify.com → Add new site → **Import an existing project** → GitHub → pick `tufayel-site`
2. Build settings: leave build command EMPTY, publish directory `.` (netlify.toml handles it)
3. Deploy. You get a live `*.netlify.app` URL immediately.

### 3. Your booking notifications
Netlify → Site configuration → Notifications → **Form submission notifications** → Add → Email → your address.
Every booking now hits your inbox + lives in the Forms tab.

### 4. Client auto-confirmation email
1. Free account at brevo.com
2. Brevo → Settings → Senders → add + verify your email
3. Brevo → SMTP & API → create API key
4. Netlify → Site configuration → Environment variables:
   - `BREVO_API_KEY` = the key
   - `FROM_EMAIL` = your verified sender
   - `FROM_NAME` = Tufayel
5. Trigger a redeploy (Deploys → Trigger deploy)

### 5. Custom domain (optional, the only thing that can cost money)
Netlify → Domain management → add your domain → point DNS. SSL is free and automatic.

## Daily workflow with Claude Code
```bash
cd tufayel-site
claude
```
Then just talk:
- "make the hero typewriter faster"
- "add a new card to track record for project X"
- "change the booking time slots to my new availability"
- "write a funnier testimonial section"

Then:
```bash
git add . && git commit -m "update" && git push
```
Push = live in ~20 seconds. No build step, nothing to break.

## Testing the booking flow end to end
1. Open the live site, book a fake call with your own email
2. Check: Netlify → Forms (entry there?), your inbox (notification?), the fake-client inbox (confirmation?)
3. Function logs live at Netlify → Logs → Functions → `submission-created`
