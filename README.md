# AI Spend Audit

A free tool that audits your team's AI tool subscriptions 
and finds where you're overspending.

Built as part of assignment.

## What it does
- Input all AI tools your team pays for
- Instant audit showing overspend and recommendations
- AI generated personalized summary
- Email capture with report delivery
- Saves state across page reloads

## Screenshots


## Quick start
npm install
npm run dev

## Deploy
Hosted on Vercel: https://audit-syst-indol.vercel.app

## Decisions
1. localStorage over sessionStorage — survives refresh
2. Hardcoded audit logic over AI — defensible, finance-readable
3. Email captured after results — value before gate
4. Supabase over Firebase — simpler setup, free tier generous
5. Fallback summary when API unavailable — graceful degradation
