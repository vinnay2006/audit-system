
import { useState } from "react";
import SpendForm from "./components/SpendForm";
import AuditResults from "./components/AuditResults";
import { runAudit } from "./utils/auditEngine";

export default function App() {
  const [auditData, setAuditData] = useState(null);

  function handleSubmit(tools) {
    console.log("Audit data:", tools);

    const results = runAudit(tools);

    setAuditData(results);
  }

  return (
    <div style={appStyle}>
      
      {/* background glow effects */}
      <div style={blurOne}></div>
      <div style={blurTwo}></div>

      <div style={containerStyle}>
        {/* top branding */}
        <div style={headerStyle}>
          <h1 style={titleStyle}>Credex AI Audit</h1>
          <p style={subtitleStyle}>
            Analyze your AI stack and discover hidden savings opportunities.
          </p>
        </div>

        {/* main card */}
        <div style={cardStyle}>
          {!auditData ? (
            <SpendForm onSubmit={handleSubmit} />
          ) : (
            <AuditResults
              data={auditData}
              onBack={() => setAuditData(null)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

const appStyle = {
  minHeight: "100vh",
  background:
    "linear-gradient(135deg, #0f172a 0%, #111827 50%, #020617 100%)",
  position: "relative",
  overflow: "hidden",
  padding: "40px 20px",
  fontFamily: "Inter, sans-serif",
};

const containerStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  position: "relative",
  zIndex: 2,
};

const headerStyle = {
  textAlign: "center",
  marginBottom: "32px",
};

const titleStyle = {
  fontSize: "48px",
  fontWeight: "700",
  color: "#ffffff",
  marginBottom: "12px",
  letterSpacing: "-1px",
};

const subtitleStyle = {
  fontSize: "18px",
  color: "#cbd5e1",
  maxWidth: "700px",
  margin: "0 auto",
  lineHeight: "1.6",
};

const cardStyle = {
  background: "rgba(255,255,255,0.08)",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "24px",
  padding: "12px",
  boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
};

const blurOne = {
  position: "absolute",
  width: "400px",
  height: "400px",
  borderRadius: "50%",
  background: "#2563eb",
  filter: "blur(140px)",
  top: "-120px",
  left: "-120px",
  opacity: 0.25,
};

const blurTwo = {
  position: "absolute",
  width: "350px",
  height: "350px",
  borderRadius: "50%",
  background: "#7c3aed",
  filter: "blur(140px)",
  bottom: "-100px",
  right: "-100px",
  opacity: 0.22,
};
