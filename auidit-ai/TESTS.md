\# Tests



\## How to run

npm start



\## Test list



\### 1. auditEngine — correct plan recommendation

File: src/utils/auditEngine.test.js

Input: Cursor Business, 1 seat, $40/mo

Expected: recommend downgrade to Pro, saving $20



\### 2. auditEngine — seat overage detection

File: src/utils/auditEngine.test.js

Input: GitHub Copilot Business, 5 seats, team size 3

Expected: recommend reduce to 3 seats



\### 3. auditEngine — cheaper alternative

File: src/utils/auditEngine.test.js

Input: ChatGPT Plus, 1 seat, $20/mo, coding use case

Expected: recommend Claude Pro as alternative



\### 4. auditEngine — already optimal

File: src/utils/auditEngine.test.js

Input: Windsurf Free, 1 seat, $0/mo

Expected: no recommendation, saving 0



\### 5. storage — save and load round trip

File: src/utils/storage.test.js

Input: save tools array to localStorage

Expected: loadTools() returns identical array

