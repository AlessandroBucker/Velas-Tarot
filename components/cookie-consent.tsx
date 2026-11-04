"use client";
import { useEffect, useState } from "react";
export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  useEffect(() => setVisible(!localStorage.getItem("lahris-consent")), []);
  if (!visible) return null;
  const save = (analytics: boolean) => { localStorage.setItem("lahris-consent", JSON.stringify({ necessary: true, analytics, at: new Date().toISOString() })); setVisible(false); };
  return <aside className="cookie"><strong>Sua privacidade importa.</strong><p>Usamos cookies essenciais e, com sua permissão, dados anônimos para melhorar a navegação.</p><div><button className="text-button" onClick={() => save(false)}>Somente essenciais</button><button className="button small" onClick={() => save(true)}>Aceitar todos</button></div></aside>;
}
