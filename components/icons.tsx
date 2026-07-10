export function Icon({ name }: { name: string }) {
  const common = { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  if (name === "arrow") return <svg {...common} width="18" height="18"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
  if (name === "bolt") return <svg {...common}><path d="m13 2-9 12h8l-1 8 9-12h-8l1-8Z" /></svg>;
  if (name === "grid") return <svg {...common}><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>;
  if (name === "home") return <svg {...common}><path d="m3 11 9-8 9 8v9a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1v-9Z"/></svg>;
  if (name === "telegram") return <svg {...common}><path d="m21 3-7.5 18-4.2-7.1L3 10.5 21 3Z"/><path d="m9.3 13.9 5-4.5"/></svg>;
  if (name === "phone") return <svg {...common}><path d="M6.6 3h3l1.5 4.2-2 1.4a15 15 0 0 0 6.3 6.3l1.4-2 4.2 1.5v3c0 2-1.6 3.6-3.6 3.5A15.5 15.5 0 0 1 3.1 6.6C3 4.6 4.6 3 6.6 3Z"/></svg>;
  if (name === "contract") return <svg {...common}><path d="M6 3h9l3 3v15H6z"/><path d="M14 3v4h4M9 12h6M9 16h4"/></svg>;
  if (name === "shield") return <svg {...common}><path d="M12 3 4.5 6v5.5c0 4.6 3.2 7.8 7.5 9.5 4.3-1.7 7.5-4.9 7.5-9.5V6L12 3Z"/><path d="m9 12 2 2 4-5"/></svg>;
  if (name === "measure") return <svg {...common}><path d="m4 16 12-12 4 4L8 20H4v-4Z"/><path d="m13 7 4 4M10 10l2 2M7 13l2 2"/></svg>;
  if (name === "document") return <svg {...common}><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>;
  if (name === "check") return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/></svg>;
  if (name === "cable") return <svg {...common}><path d="M7 3v6a5 5 0 0 0 10 0V3M4 3h6M14 3h6M12 14v7"/></svg>;
  if (name === "building") return <svg {...common}><path d="M4 21V3h11v18M15 9h5v12M8 7h3M8 11h3M8 15h3M18 13v4"/></svg>;
  if (name === "standard") return <svg {...common}><path d="M5 3h14v18H5zM8 7h8M8 11h8M8 15h5"/><path d="m15 16 1.5 1.5L20 14"/></svg>;
  if (name === "clock") return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>;
  if (name === "clean") return <svg {...common}><path d="m14 3 7 7-5 5-7-7 5-5Z"/><path d="m9 8-6 12h9l4-5M5 16h8"/></svg>;
  if (name === "consult") return <svg {...common}><path d="M21 12a8 8 0 0 1-9 8 9 9 0 0 1-4 1l1-3a8 8 0 1 1 12-6Z"/><path d="M8 12h.01M12 12h.01M16 12h.01"/></svg>;
  return <svg {...common}><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41"/></svg>;
}
