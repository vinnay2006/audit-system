const KEY = "credex_audit_tools";

export function saveTools(tools) {
  try {
    localStorage.setItem(KEY, JSON.stringify(tools));
  } catch (e) {
    console.error("Failed to save tools:", e);
  }
}

export function loadTools() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}