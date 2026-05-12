
import { useState } from "react";
import { supabase } from "../lib/supabase";
export default function EmailGate({ totalSaving, onSubmit }) {
  const [email, setEmail] = useState("");
  const [company, setcompany] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

 async function handleSubmit() {
    if (!email.includes("@")) {
      setError("Please enter a valid email.");
      return;
    }
    setError("");
    
   const { error } = await supabase
  .from("Leads")
  .insert([
    {
      email,
      company,
    },
  ]);

if (error) {
  console.log(error);
  setError(error.message);
  return;
}
    setSubmitted(true);
    onSubmit({ email, company });
  }

  if (submitted) {
    return (
      <div style={{
        border: "1px solid #d1fae5",
        borderRadius: "10px",
        padding: "20px",
        background: "#f0fdf4",
        marginBottom: "24px",
        textAlign: "center",
      }}>
        <p style={{ color: "#16a34a", fontWeight: 500, margin: "0 0 4px" }}>
          ✓ Report sent to {email}
        </p>
        <p style={{ color: "#555", fontSize: "14px", margin: 0 }}>
          {totalSaving > 500
            ? "A Credex advisor will reach out to help you capture these savings."
            : "We'll notify you when new savings opportunities appear."}
        </p>
      </div>
    );
  }

  return (
    <div style={{
      border: "1px solid #e5e5e5",
      borderRadius: "10px",
      padding: "24px",
      marginBottom: "24px",
    }}>
      <p style={{ fontWeight: 500, fontSize: "16px", margin: "0 0 4px" }}>
        {totalSaving > 500 ? "Want help capturing these savings?" : "Get your full report"}
      </p>
      <p style={{ color: "#666", fontSize: "14px", margin: "0 0 16px" }}>
        {totalSaving > 500
          ? `You have $${totalSaving}/mo in savings. A Credex advisor can unlock discounted credits for your stack.`
          : "We'll email this report and notify you when better options appear for your tools."}
      </p>

      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="company name (optional)"
          value={company}
          onChange={(e) => setcompany(e.target.value)}
          style={inputStyle}
        />
        <button onClick={handleSubmit} style={btnStyle}>
          Send report →
        </button>
      </div>
      {error && (
        <p style={{ color: "red", fontSize: "13px", marginTop: "8px" }}>
          {error}
        </p>
      )}
    </div>
  );
}

const inputStyle = {
  padding: "10px 14px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  fontSize: "14px",
  flex: 1,
  minWidth: "180px",
  background: "#fff",
  color: "#1a1a1a",
};

const btnStyle = {
  padding: "10px 20px",
  background: "#1a1a1a",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  fontSize: "14px",
  cursor: "pointer",
  whiteSpace: "nowrap",
};