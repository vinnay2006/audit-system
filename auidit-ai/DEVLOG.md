## Day 1 — 2026-05-09
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
## Day 2 — 2026-05-10
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