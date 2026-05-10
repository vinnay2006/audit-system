// src/App.jsx
import { useState } from "react";
import SpendForm from "./components/SpendForm";

export default function App() {
  const [auditData, setAuditData] = useState(null);

  function handleSubmit(tools) {
    // for the audit engine
    //for now we are doing just logging in
    console.log("Audit data:", tools);
    setAuditData(tools);
  }

  return (
    <div>
      {!auditData ? (
        <SpendForm onSubmit={handleSubmit} />
      ) : (
        <div style={{ padding: "32px", textAlign: "center" }}>
          <h2>Audit submitted! (results page coming Day 2)</h2>
          <pre style={{ textAlign: "left", marginTop: "16px" }}>
            {JSON.stringify(auditData, null, 2)}
          </pre>
          <button onClick={() => setAuditData(null)}>Back to form</button>
        </div>
      )}
    </div>
  );
}