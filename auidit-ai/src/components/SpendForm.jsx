
import { useState, useEffect } from "react";
import ToolRow from "./ToolRow.jsx";
import { saveTools, loadTools } from "../utils/storage";
import { TOOLS, USE_CASES } from "../utils/toolsData";
//this form act as the parent manmager of the tool rows 
function createEmptyTool() {
  return {
    name: TOOLS[0].name,
    plan: TOOLS[0].plans[0],
    spend: "",
    seats: 1,
    teamSize: 1,
    useCase: USE_CASES[0],
  };
}

export default function SpendForm({ onSubmit }) {
  const [tools, setTools] = useState([createEmptyTool()]);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = loadTools();
    if (saved && saved.length > 0) setTools(saved);
  }, []);

  //this will help in saving details  to localStorage on every change in the form
  useEffect(() => {
    saveTools(tools);
  }, [tools]);

  function handleChange(index, updated) {
    const next = tools.map((t, i) => (i === index ? updated : t));
    setTools(next);
  }

  function handleAdd() {
    setTools([...tools, createEmptyTool()]);
  }

  function handleRemove(index) {
    if (tools.length === 1) return; // keep at least one row
    setTools(tools.filter((_, i) => i !== index));
  }

  function handleSubmit() {
    const valid = tools.filter((t) => t.spend !== "" && Number(t.spend) >= 0);
    if (valid.length === 0) {
      alert("Please enter at least one tool with a monthly spend.");
      return;
    }
    onSubmit(valid);
  }

  const total = tools.reduce((sum, t) => sum + (Number(t.spend) || 0), 0);

  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "32px 16px" }}>
      <h1 style={{ fontSize: "24px", fontWeight: 500, marginBottom: "8px" }}>
        AI spend audit
      </h1>
      <p style={{ color: "var(--color-text-secondary)", marginBottom: "32px" }}>
        Add the AI tools your team pays for. We'll find where you're overspending.
      </p>

      {tools.map((tool, i) => (
        <ToolRow
          key={i}
          tool={tool}
          index={i}
          onChange={handleChange}
          onRemove={handleRemove}
        />
      ))}

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "16px" }}>
        <button onClick={handleAdd} style={secondaryBtn}>
          + Add another tool
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <span style={{ color: "var(--color-text-secondary)", fontSize: "14px" }}>
            Total: <strong style={{ color: "var(--color-text-primary)" }}>${total}/mo</strong>
          </span>
          <button onClick={handleSubmit} style={primaryBtn}>
            Run audit →
          </button>
        </div>
      </div>
    </div>
  );
}

const primaryBtn = {
  background: "#1a1a1a",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  padding: "12px 24px",
  fontSize: "15px",
  cursor: "pointer",
  fontWeight: 500,
};

const secondaryBtn = {
  background: "none",
  border: "1px solid var(--color-border-secondary)",
  borderRadius: "8px",
  padding: "10px 18px",
  fontSize: "14px",
  cursor: "pointer",
  color: "var(--color-text-primary)",
};