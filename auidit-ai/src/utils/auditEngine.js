// src/utils/auditEngine.js

const pricingData = {
  Cursor: {
    Hobby: 0,
    Pro: 20,
    Business: 40,
  },
  "GitHub Copilot": {
    Individual: 10,
    Business: 19,
    Enterprise: 39,
  },
  Claude: {
    Free: 0,
    Pro: 20,
    Max: 100,
    Team: 30,
    Enterprise: 60,
    "API direct": null,
  },
  ChatGPT: {
    Plus: 20,
    Team: 30,
    Enterprise: 60,
    "API direct": null,
  },
  "Anthropic API direct": {
    "API direct": null,
  },
  "OpenAI API direct": {
    "API direct": null,
  },
  Gemini: {
    Pro: 20,
    Ultra: 300,
    API: null,
  },
  Windsurf: {
    Free: 0,
    Pro: 15,
    Team: 35,
  },
};

// we are suggesting cheaper alternatives for the same usagecase
const alternatives = {
  Cursor: { alt: "Windsurf", altPlan: "Pro", altPrice: 15 },
  "GitHub Copilot": { alt: "Cursor", altPlan: "Pro", altPrice: 20 },
  ChatGPT: { alt: "Claude", altPlan: "Pro", altPrice: 20 },
  Gemini: { alt: "Claude", altPlan: "Pro", altPrice: 20 },
};

export function runAudit(tools) {
  const results = tools.map((tool) => {
    const { name, plan, spend, seats, teamSize, useCase } = tool;

    const currentSpend = Number(spend) || 0;
    const result = {
      name,
      plan,
      currentSpend,
      seats: Number(seats),
      teamSize: Number(teamSize),
      useCase,
      recommendation: null,
      saving: 0,
      reason: null,
    };

    const toolPlans = pricingData[name];
    if (!toolPlans) return result;

    const planKeys = Object.keys(toolPlans);
    const currentPlanIndex = planKeys.indexOf(plan);

    // check 1 — firstlyt we will check whether the user is using ahigher paln then needed

    if (Number(seats) === 1 && currentPlanIndex > 0) {
      const lowerPlan = planKeys[currentPlanIndex - 1];
      const lowerPrice = toolPlans[lowerPlan];
      if (lowerPrice !== null && lowerPrice < currentSpend) {
        result.recommendation = `Downgrade to ${lowerPlan}`;
        result.saving = currentSpend - lowerPrice;
        result.reason = `Only 1 seat — ${lowerPlan} plan is enough`;
        return result;
      }
    }

    // check 2 —are we be doing money wastage by spending moner for a larger team instead of paying for  the real  actual team size 
    if (Number(seats) > Number(teamSize)) {
      const overpay = (Number(seats) - Number(teamSize)) * (currentSpend / Number(seats));
      if (overpay > 0) {
        result.recommendation = `Reduce seats to ${teamSize}`;
        result.saving = Math.round(overpay);
        result.reason = `You have ${seats} seats but only ${teamSize} people`;
        return result;
      }
    }

    // check 3 — we will check for the cheaper alternatives for the same purpose
    if (alternatives[name]) {
      const { alt, altPlan, altPrice } = alternatives[name];
      const totalAltCost = altPrice * Number(seats);
      if (totalAltCost < currentSpend) {
        result.recommendation = `Switch to ${alt} ${altPlan}`;
        result.saving = currentSpend - totalAltCost;
        result.reason = `${alt} covers ${useCase} at lower cost`;
        return result;
      }
    }


    result.recommendation = "You're on the right plan";
    result.reason = "No better option found for your usage";
    return result;
  });

  const totalCurrentSpend = results.reduce((s, r) => s + r.currentSpend, 0);
  const totalSaving = results.reduce((s, r) => s + r.saving, 0);

  return { results, totalCurrentSpend, totalSaving };
}