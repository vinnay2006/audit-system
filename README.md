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
<img width="1600" height="737" alt="image" src="https://github.com/user-attachments/assets/f4a57c40-018e-4aad-a2c3-f51654fba888" />
<img width="1920" height="1080" alt="Screenshot (535)" src="https://github.com/user-attachments/assets/ed94f80f-4e44-47f4-a58c-56c0f9da79b5" />
<img width="1920" height="1080" alt="Screenshot (534)" src="https://github.com/user-attachments/assets/926156c4-c79a-4ccc-b0a3-ce1aa5abec09" />




## Quick start
npm install
npm start

## Deploy
Hosted on Vercel: https://audit-syst-indol.vercel.app

## Decisions
1. localStorage over sessionStorage — survives refresh
2. Hardcoded audit logic over AI — defensible, finance-readable
3. Email captured after results — value before gate
4. Supabase over Firebase — simpler setup, free tier generous
5. Fallback summary when API unavailable — graceful degradation
