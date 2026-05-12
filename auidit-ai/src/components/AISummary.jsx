
import { useEffect, useState } from "react";

export default function AISummary({ auditData }) {
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    generateSummary();
  }, []);

  async function generateSummary() {
    const { results, totalCurrentSpend, totalSaving } = auditData;

    const prompt = `
You are an AI spend advisor. A startup has completed an AI tool audit.
Here is their data:
- Total monthly spend: $${totalCurrentSpend}
- Total potential savings: $${totalSaving}/mo ($${totalSaving * 12}/year)
- Tools audited: ${results.map(r => `${r.name} (${r.plan}) — $${r.currentSpend}/mo — ${r.recommendation}`).join(", ")}

Write a concise 100 word personalized summary of their audit results.
Be specific with numbers. Mention the biggest saving opportunity.
Sound like a helpful advisor, not a robot. No bullet points, just a paragraph.
    `;

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": import.meta.env.VITE_ANTHROPIC_API_KEY,
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
          model: "claude-opus-4-20250514",
          max_tokens: 200,
          messages: [{ role: "user", content: prompt }],
        }),
      });

      const data = await response.json();
      setSummary(data.content[0].text);
    } catch (err) {
      // fallback if API fails
      setSummary(
        `Your team spends $${totalCurrentSpend}/month on AI tools. 
         Based on your usage patterns we found $${totalSaving}/month 
         in potential savings — that's $${totalSaving * 12} back per year. 
         ${totalSaving > 0 
           ? "The biggest opportunity is adjusting your seat count and plan tiers." 
           : "You're already on the right plans for your team size."}`
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{
      border: "1px solid #e5e5e5",
      borderRadius: "10px",
      padding: "20px",
      marginBottom: "24px",
      background: "#fafafa",
    }}>
      <p style={{ fontSize: "13px", color: "#888", marginBottom: "8px" }}>
        AI summary
      </p>
      {loading ? (
        <p style={{ color: "#888", fontSize: "14px" }}>Generating your summary...</p>
      ) : (
        <p style={{ fontSize: "15px", lineHeight: "1.7", margin: 0 }}>
          {summary}
        </p>
      )}
    </div>
  );
}