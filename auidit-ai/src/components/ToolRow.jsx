
import { TOOLS, USE_CASES } from "../utils/toolsData";

const DEFAULT_TOOL = TOOLS?.[0];;

export default function ToolRow({ tool, index, onChange, onRemove }) {
  const selectedTool = TOOLS.find((t) => t.name === tool.name) || DEFAULT_TOOL;

  function handle(field, value) {
    onChange(index, { ...tool, [field]: value });
  }

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "2fr 1.5fr 1fr 1fr 1fr 2fr auto",
      gap: "8px",
      alignItems: "center",
      padding: "12px",
      border: "1px solid var(--color-border-tertiary)",
      borderRadius: "8px",
      marginBottom: "8px",
    }}>

      {/* Tool names are given like different names  */}
      <div>
        <label style={{ fontSize: "11px", color: "var(--color-text-secondary)", display: "block", marginBottom: "4px" }}>
          Tool
        </label>
        <select
          value={tool.name}
          onChange={(e) => handle("name", e.target.value)}
          style={inputStyle}
        >
          {TOOLS.map((t) => (
            <option key={t.name} value={t.name}>{t.name}</option>
          ))}
        </select>
      </div>

      {/* it contains all the plan infortmation that the usser has taken subscription for  */}
      <div>
        <label style={{ fontSize: "11px", color: "var(--color-text-secondary)", display: "block", marginBottom: "4px" }}>
          Plan
        </label>
        <select
          value={tool.plan}
          onChange={(e) => handle("plan", e.target.value)}
          style={inputStyle}
        >
          {selectedTool.plans.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
      </div>

      {/* here we are knowing for each ai tool Monthly spends */}
      <div>
        <label style={{ fontSize: "11px", color: "var(--color-text-secondary)", display: "block", marginBottom: "4px" }}>
          $/month
        </label>
        <input
          type="number"
          min="0"
          value={tool.spend}
          onChange={(e) => handle("spend", e.target.value)}
          placeholder="0"
          style={inputStyle}
        />
      </div>

      {/* here i am knowing from user Seats */}
      <div>
        <label style={{ fontSize: "11px", color: "var(--color-text-secondary)", display: "block", marginBottom: "4px" }}>
          Seats
        </label>
        <input
          type="number"
          min="1"
          value={tool.seats}
          onChange={(e) => handle("seats", e.target.value)}
          placeholder="1"
          style={inputStyle}
        />
      </div>

      {/* here we rae concerned about the Team size of the plan  */}
      <div>
        <label style={{ fontSize: "11px", color: "var(--color-text-secondary)", display: "block", marginBottom: "4px" }}>
          Team size
        </label>
        <input
          type="number"
          min="1"
          value={tool.teamSize}
          onChange={(e) => handle("teamSize", e.target.value)}
          placeholder="1"
          style={inputStyle}
        />
      </div>

      {/*here we are wanting to know the  Use case of the ai tool */}
      <div>
        <label style={{ fontSize: "11px", color: "var(--color-text-secondary)", display: "block", marginBottom: "4px" }}>
          Primary use case
        </label>
        <select
          value={tool.useCase}
          onChange={(e) => handle("useCase", e.target.value)}
          style={inputStyle}
        >
          {USE_CASES.map((u) => (
            <option key={u} value={u}>{u}</option>
          ))}
        </select>
      </div>

      <button
        onClick={() => onRemove(index)}
        style={{
          background: "none",
          border: "1px solid var(--color-border-secondary)",
          borderRadius: "6px",
          padding: "6px 10px",
          cursor: "pointer",
          color: "var(--color-text-danger)",
          marginTop: "16px",
        }}
      >
        ✕
      </button>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "6px 8px",
  border: "1px solid var(--color-border-secondary)",
  borderRadius: "6px",
  background: "var(--color-background-primary)",
  color: "var(--color-text-primary)",
  fontSize: "13px",
};