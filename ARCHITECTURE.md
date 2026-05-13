\# Architecture



\## Stack

\- Frontend: React 

\- Storage: localStorage for form state

\- Backend: Supabase for lead capture

\- AI: Anthropic API with templated fallback

\- Deploy: Vercel



\## System diagram

SpendForm → auditEngine.js → AuditResults

&nbsp;                                 ↓

&nbsp;                           AISummary (Anthropic API)

&nbsp;                                 ↓

&nbsp;                           EmailGate → Supabase leads table



\## Data flow

User fills SpendForm → saved to localStorage on every change

→ Submit → runAudit() processes tools array

→ Results + AI summary shown

→ Email captured → stored in Supabase



\## Why this stack

\- React: component model fits multi-tool form perfectly

\- Supabase: real backend with zero server setup

\- Vercel: one click deploy for React projects



\## What I'd change for 10k audits/day

\- Move audit logic to edge functions

\- Add Redis cache for repeated tool combinations

\- Rate limit by IP at edge level

