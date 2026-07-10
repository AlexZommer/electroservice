"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [enhanced, setEnhanced] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(max-width: 639px)").matches) return;
    setEnhanced(true);
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.12, rootMargin: "0px 0px -40px" });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className={`scroll-reveal ${enhanced ? visible ? "is-visible" : "is-pending" : ""} ${className}`}>{children}</div>;
}

const principles = [
  { value: "Официально", label: "Работаем по договору" },
  { value: "По нормам", label: "Соблюдаем ГОСТ и ПУЭ" },
  { value: "Надёжно", label: "Предоставляем гарантию" },
  { value: "Предсказуемо", label: "Фиксируем сроки и смету" },
];

export function PrincipleStats() {
  return <div className="stats-grid">{principles.map((item) => <div className="stat-card" key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}</div>;
}
