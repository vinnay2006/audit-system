## Day 1 — 2026-05-07
**Hours worked:** 0

**What I did:**
No work done on the project today.
Had end term university examinations — full day of preparation
and revision. Could not allocate any time to the assignment.

**What I learned:**
—

**Blockers / what I'm stuck on:**
Examinations running parallel to internship assignment deadline.

**Plan for tomorrow:**
Complete remaining exam. Read through the full Credex
assignment document carefully and plan the week ahead.

-------------------------------------------------------------------------------------------------->

## Day 2 — 2026-05-08
**Hours worked:** 1.5

**What I did:**
Completed end term examination in the morning.
Read through the full Credex internship assignment
document carefully in the evening.
Understood the 6 MVP features required, the file
structure expected at repo root, and the evaluation
criteria. Made a rough day by day plan for the week.
Set up the React + Vite project locally.

**What I learned:**
The assignment is more entrepreneurial than technical —
evaluators care about GTM thinking, user interviews,
and economics as much as the code itself.
File naming and format is non negotiable as AI reads
submissions first before any human sees them.

**Blockers / what I'm stuck on:**
Late start due to exams — need to move fast
without compromising quality of required docs.

**Plan for tomorrow:**
Set up public GitHub repo. Build ToolRow.jsx,
toolsData.js, storage.js and start SpendForm.jsx.


----------------------------------------------------------------------------------------->
## Day 3 — 2026-05-09
*Hours worked:* 3

*What I did:*
Set up public GitHub repo. Built ToolRow.jsx, storage.js,
toolsData.js with all 8 tools. Started SpendForm.jsx with
add/remove logic and running total. Created skeleton
README.md and ARCHITECTURE.md.

*What I learned:*
Lifting state via index-based onChange. localStorage persistence
with useEffect deps. Spreading tool object on field update.

*Blockers / what I'm stuck on:*
Plan dropdown doesn't reset on tool name change.
SpendForm not yet wired into App.jsx.

*Plan for tomorrow:*
Finish SpendForm → wire App.jsx → build auditEngine.js
→ start results page.                                                                                                ```

--------------------------------------------------------------------------------->

## Day 4 — 2026-05-10
**Hours worked:** 2

**What I did:**
Completed SpendForm.jsx — wired up add/remove tool rows,
running total, localStorage sync, and form validation.
Updated App.jsx to render SpendForm and handle onSubmit,
passing tools array to stub results view.

**What I learned:**
How onSubmit flows from SpendForm up to App.jsx via props.
Conditional rendering between form view and results stub.

**Blockers / what I'm stuck on:**
auditEngine.js not started yet — results page shows raw JSON for now.

**Plan for tomorrow:**
Build auditEngine.js with pricing logic.
Start audit results page with per-tool breakdown.

```

---------------------------------------------------------------------------------------->
                                                                                                                 ## Day 5 — 2026-05-11
**Hours worked:** 3

**What I did:**
Built auditEngine.js in utils/ — handles 3 checks per tool:
wrong plan for seat count, more seats than team size,
and cheaper alternative tool available.
Returns results array with recommendation, saving, and reason
plus totalCurrentSpend and totalSaving.
Built AuditResults.jsx in components/ — shows hero savings number,
per tool breakdown with recommendation and reason,
and edit button to go back to form.
Updated App.js to import runAudit and AuditResults,
wired onSubmit to run audit and pass results to AuditResults.

**What I learned:**
How data flows from SpendForm up to App.js via onSubmit prop
then gets processed by auditEngine and passed down to AuditResults.
Studied why SpendForm was not rendering on main page —
likely cause is missing or wrong import path in App.js
or SpendForm not being returned properly in JSX.

**Blockers / what I'm stuck on:**
Form not showing on main page — still debugging.
Suspect issue is either import path or component not
being rendered in the return statement of App.js.

**Plan for tomorrow:**
Fix the form rendering issue first.
Then build AISummary.jsx using Anthropic API
and EmailGate.jsx for lead capture after results.


------------------------------------------------------------------------------------->
                                                                                                                                                                                              Day 6 — May 12, 2026

Hours Worked
~5.5 hours

Tasks Completed Today

- Fixed major React rendering/import issues in `SpendForm`
- Implemented localStorage persistence for tool data
- Built audit engine for:
  - downgrade suggestions
  - unused seat detection
  - cheaper alternatives
  - savings calculations
- Connected full flow:
  SpendForm → AuditResults
- Integrated Supabase backend
- Configured `.env` variables correctly
- Created `Leads` table and insert policy
- Successfully storing leads from EmailGate into Supabase
- Added modern SaaS-style UI/background styling

Current Status

Functional MVP completed with:
- AI spend audit
- savings recommendations
- results page
- lead capture
- Supabase integration

Plan for Tomorrow (Final Day)

- Final UI polish
- Add loading/error states
- Improve audit intelligence
- Deploy project
- Final cleanup and optimization  

--------------------------------------------------------------------->

## Day 6 — 2026-05-13
**Hours worked:** 5

**What I did:**
Deployed project to Vercel — ran into build errors.
Debugged and added Supabase credentials to Vercel
project settings. Fixed errors from unused imports
flagged by eslint in production build.
Got green deployment, verified live URL works.
Written all required markdown files — README, ARCHITECTURE,
REFLECTION, PRICING_DATA, TESTS, PROMPTS, GTM,
ECONOMICS, USER_INTERVIEWS and ci.yml for GitHub Actions.

**What I learned:**
Vercel does not read local .env — credentials must be
added manually in project settings.
Always run npm run build locally before pushing —
Vite is stricter in production than local dev server.

      