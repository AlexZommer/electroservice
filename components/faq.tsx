"use client";

import { useState } from "react";
import { Reveal } from "./animated-content";

const items = [
  ["Сколько занимает расчёт?", "Предварительный расчёт подготовим после короткого брифа. Для точной сметы может потребоваться выезд и изучение проектной документации."],
  ["Работаете ли с юридическими лицами?", "Да. Работаем с компаниями и коммерческими объектами, предоставляем договор и необходимые закрывающие документы."],
  ["Даёте ли гарантию?", "Даём гарантию на выполненные работы. Конкретный срок зависит от состава проекта и фиксируется в договоре."],
  ["Можно ли выполнить работы по дизайн-проекту?", "Да. Работаем совместно с дизайнерами и архитекторами, соблюдаем привязки оборудования, световые сценарии и требования проекта."],
  ["Работаете ли по договору?", "Да. До начала работ согласовываем смету, сроки и объём, после чего фиксируем договорённости в договоре."],
];

export function FAQ() {
  const [active, setActive] = useState(0);
  return <section className="section" id="faq"><Reveal className="mx-auto max-w-[1440px]"><div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr]"><div><div className="section-tag">FAQ</div><h2 className="section-title mt-6">Важное<br /><span className="text-white/35">до старта.</span></h2></div><div className="border-t border-white/10">{items.map(([q, a], i) => <div className="border-b border-white/10" key={q}><button className="flex w-full items-center justify-between gap-4 py-7 text-left text-base sm:text-lg" onClick={() => setActive(active === i ? -1 : i)} aria-expanded={active === i}><span>{q}</span><span className={`faq-plus ${active === i ? "active" : ""}`} aria-hidden="true">+</span></button><div className={`faq-answer ${active === i ? "open" : ""}`}><p>{a}</p></div></div>)}</div></div></Reveal></section>;
}
