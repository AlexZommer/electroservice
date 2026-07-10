"use client";

import { useState } from "react";

const items = [
  ["Сколько стоит электромонтаж?", "Стоимость зависит от площади, сложности проекта и выбранного оборудования. После короткого брифа и выезда инженера мы готовим подробную фиксированную смету."],
  ["Как долго идут работы?", "Квартира обычно занимает 2–4 недели, частный дом — от 4 недель. Точные сроки фиксируем в договоре до начала работ."],
  ["Вы помогаете с проектированием?", "Да. Разрабатываем полный электропроект: от расчёта нагрузок и групп до схем освещения, слаботочных систем и автоматизации."],
  ["Какие гарантии вы предоставляете?", "Даём гарантию до 5 лет на выполненные работы и сохраняем всю проектную документацию для дальнейшего обслуживания."],
  ["Работаете ли вы с дизайнерами и архитекторами?", "Да, регулярно интегрируем инженерные решения в дизайн-проекты и работаем в связке с архитекторами, прорабами и другими подрядчиками."],
];

export function FAQ() {
  const [active, setActive] = useState(0);
  return <section className="section" id="faq"><div className="mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-[.8fr_1.2fr]"><div><div className="section-tag">FAQ</div><h2 className="section-title mt-6">Важное<br /><span className="text-white/35">до старта.</span></h2></div><div className="border-t border-white/10">{items.map(([q, a], i) => <div className="border-b border-white/10" key={q}><button className="flex w-full items-center justify-between gap-4 py-7 text-left text-base sm:text-lg" onClick={() => setActive(active === i ? -1 : i)} aria-expanded={active === i}><span>{q}</span><span className={`faq-plus ${active === i ? "active" : ""}`}>+</span></button><div className={`faq-answer ${active === i ? "open" : ""}`}><p>{a}</p></div></div>)}</div></div></section>;
}
