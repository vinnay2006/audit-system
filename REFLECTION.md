\# Reflection



\## 1. Hardest bug and how I debugged it

SpendForm was not rendering on the main page at all.

Spent time checking the terminal error logs and found

the import path for ToolRow inside SpendForm was wrong —

was using "./components/ToolRow" instead of "./ToolRow"

since both files are already inside components/.

Fixed the path and form rendered immediately.

Lesson: always check import paths relative to the current file.



\## 2. A decision I reversed mid-week

Initially planned to use sessionStorage for form persistence

but reversed to localStorage after realising the user might

close the tab and return later. localStorage survives

browser close, sessionStorage does not. Small change,

big difference in user experience.



\## 3. How I used AI tools

Used Claude to help draft component structure and

debug the localStorage useEffect dependency issue.

Did not trust AI for the audit engine pricing logic —

verified every number against official pricing pages

manually. AI was wrong about Cursor Business pricing

initially, caught it by checking cursor.sh/pricing.



\## 4. Self rating

\- Discipline: 9/10 — started day 2 b

ecause of end semester exams and I worked on project even when I was travelling 

\- Code quality: 8.5/10 — readable but needs TypeScript

\- Design sense: 8.5/10 — functional and polished enough

\- Problem solving: 9/10 — debugged rendering issue independently

\- Entrepreneurial thinking: 8/10 — understood the lead gen angle

