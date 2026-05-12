

export default function AuditResults({ data, onBack }) {
  const { results, totalCurrentSpend, totalSaving } = data;

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "32px 16px" }}>

     
      <div style={{
        background: totalSaving > 0 ? "#f0faf4" : "#f9f9f9",
        border: "1px solid #e0e0e0",
        borderRadius: "12px",
        padding: "28px",
        marginBottom: "32px",
        textAlign: "center",
      }}>
        <p style={{ color: "#666", fontSize: "14px", marginBottom: "8px" }}>
          You're currently spending
        </p>
        <h1 style={{ fontSize: "36px", fontWeight: 600, margin: "0 0 4px" }}>
          ${totalCurrentSpend}/mo
        </h1>
        {totalSaving > 0 ? (
          <>
            <p style={{ color: "#16a34a", fontSize: "20px", fontWeight: 500, margin: "12px 0 4px" }}>
              You could save ${totalSaving}/mo
            </p>
            <p style={{ color: "#666", fontSize: "14px" }}>
              That's ${totalSaving * 12}/year
            </p>
          </>
        ) : (
          <p style={{ color: "#16a34a", fontSize: "18px", marginTop: "12px" }}>
            You're spending well. No major savings found.
          </p>
        )}
      </div>

      {/* per tool breakdown */}
      <h2 style={{ fontSize: "18px", fontWeight: 500, marginBottom: "16px" }}>
        Breakdown
      </h2>

      {results.map((r, i) => (
        <div key={i} style={{
          border: "1px solid #e5e5e5",
          borderRadius: "10px",
          padding: "20px",
          marginBottom: "12px",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <p style={{ fontWeight: 500, fontSize: "16px", margin: "0 0 4px" }}>
                {r.name}
                <span style={{ fontWeight: 400, color: "#888", fontSize: "13px", marginLeft: "8px" }}>
                  {r.plan}
                </span>
              </p>
              <p style={{ color: "#555", fontSize: "14px", margin: "0 0 8px" }}>
                {r.recommendation}
              </p>
              <p style={{ color: "#888", fontSize: "13px", margin: 0 }}>
                {r.reason}
              </p>
            </div>
            <div style={{ textAlign: "right", minWidth: "100px" }}>
              <p style={{ fontSize: "15px", fontWeight: 500, margin: "0 0 4px" }}>
                ${r.currentSpend}/mo
              </p>
              {r.saving > 0 && (
                <p style={{ color: "#16a34a", fontSize: "13px", margin: 0 }}>
                  save ${r.saving}/mo
                </p>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* back button code writen*/}
      <button
        onClick={onBack}
        style={{
          marginTop: "24px",
          background: "none",
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "10px 20px",
          cursor: "pointer",
          fontSize: "14px",
        }}
      >
        ← Edit tools
      </button>
    </div>
  );
}