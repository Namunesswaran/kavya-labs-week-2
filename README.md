# Kavya Labs — Weeks 1 & 2

Next.js 14 (App Router) + Tailwind CSS + NextAuth (Google OAuth).

## Setup

```bash
npm install
cp .env.local.example .env.local
```

Fill in `.env.local`:
- `NEXTAUTH_SECRET` — generate with `openssl rand -base64 32`
- `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` — from [Google Cloud Console → Credentials](https://console.cloud.google.com/apis/credentials).
  Create an OAuth Client ID (type: Web application) and add
  `http://localhost:3000/api/auth/callback/google` as an authorized redirect URI.

Then:
```bash
npm run dev
```
Open http://localhost:3000.

## What's here

**Week 1 — Landing page**
```
app/page.jsx         — assembles Header, Hero, Features, contact section, Footer
components/Header.jsx — nav + mobile hamburger menu + auth button
components/Hero.jsx   — headline, CTAs, SVG illustration
components/Features.jsx — auto-triage / playbook memory / live reporting
components/ContactForm.jsx — working form → POST /api/contact (logs to console;
                              swap in Resend/SendGrid when ready)
components/Footer.jsx
```

**Week 2 — Auth (NextAuth + Google OAuth)**
```
app/api/auth/[...nextauth]/route.js — NextAuth config, Google provider, JWT sessions
app/providers.jsx      — SessionProvider wrapper (client component)
app/signin/page.jsx     — custom sign-in screen, matches the site's design tokens
components/Header.jsx   — shows "Sign in" or "Sign out" + avatar depending on session
```

`session.user` (name, email, image, id) is available anywhere via `useSession()` —
that's what Week 3's dashboard will read to gate access and show who's logged in.

## Known issue

`npm audit` flags Next.js/PostCSS advisories concerning self-hosted server deployments
(Image Optimizer, Server Actions, custom servers). Not relevant to a static Vercel
deployment of this site, but worth an `npm audit fix` pass before any real production use.

## Assumption

The brief didn't specify what Kavya Labs' product does. Copy is written around an
AI ops-triage copilot. Swap `components/Hero.jsx` and `components/Features.jsx` copy
if the real product differs.
