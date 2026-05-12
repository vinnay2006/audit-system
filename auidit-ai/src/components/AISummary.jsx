
import { useEffect, useState } from "react";

export default function AISummary({ auditData }) {
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(true);
  const [usedFallback, setUsedFallback] = useState(false);

useEffect(() => {
  generateSummary();

 
}, []);

  async function generateSummary() {
    const { results, totalCurrentSpend, totalSaving } = auditData;

    const prompt = `
You are an AI spend advisor for a startup.
Here is their audit data:
- Total monthly spend: $${totalCurrentSpend}
- Total potential savings: $${totalSaving}/mo
- Tools: ${results.map(r =>
  `${r.name} (${r.plan}) $${r.currentSpend}/mo — ${r.recommendation}`
).join(", ")}

Write a 100 word personalized summary of their audit.
Be specific with numbers. Mention the biggest saving opportunity.
Sound like a helpful advisor. One paragraph only, no bullet points.
    `;

    try {
      const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY;

      if (!apiKey) throw new Error("No API key");

      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 200,
          messages: [{ role: "user", content: prompt }],
        }),
      });

      const data = await response.json();

      if (data.error) throw new Error(data.error.message);

      setSummary(data.content[0].text);

    } catch (err) {
      // fallback summary — runs as long as the api key is missing so in my case it will run in all cases becoz i lag  free credits 
      setUsedFallback(true);
      setSummary(generateFallback(auditData));
    } finally {
      setLoading(false);
    }
  }

  function generateFallback({ results, totalCurrentSpend, totalSaving }) {
    const biggestSaving = results.reduce((max, r) =>
      r.saving > max.saving ? r : max, results[0]
    );

    if (totalSaving === 0) {
      return `Your team is spending $${totalCurrentSpend}/month across 
${results.length} AI tools. Based on your current seat count, team size, 
and usage patterns, you're already on the right plans. There are no 
significant savings available right now. We'll notify you when pricing 
changes or better options become available for your stack.`;
    }

    return `Your team is currently spending $${totalCurrentSpend}/month on 
AI tools. After reviewing your plans, seat counts, and usage patterns, 
we found $${totalSaving}/month in potential savings — that's $${totalSaving * 12} 
back per year. Your biggest opportunity is ${biggestSaving.name}: 
${biggestSaving.recommendation}, which alone saves $${biggestSaving.saving}/month. 
${results.filter(r => r.saving > 0).length > 1
  ? "There are additional smaller savings across your other tools as well."
  : "Your other tools look well optimised for your team size."}`;
  }

  return (
    <div style={{
      border: "1px solid #e5e5e5",
      borderRadius: "10px",
      padding: "20px",
      marginBottom: "24px",
      background: "#fafafa",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
        <p style={{ fontSize: "13px", color: "#888", margin: 0 }}>
          AI summary
        </p>
        {usedFallback && (
          <span style={{ fontSize: "11px", color: "#bbb" }}>
            template
          </span>
        )}
      </div>

      {loading ? (
        <p style={{ color: "#888", fontSize: "14px", margin: 0 }}>
          Generating your summary...
        </p>
      ) : (
        <p style={{ fontSize: "15px", lineHeight: "1.8", margin: 0, color: "#333" }}>
          {summary}
        </p>
      )}
    </div>
  );
}