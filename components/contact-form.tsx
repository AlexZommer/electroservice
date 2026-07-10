"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) { e.preventDefault(); setSent(true); }
  if (sent) return <div className="contact-form flex min-h-[470px] flex-col items-center justify-center text-center"><div className="mb-6 grid h-16 w-16 place-items-center rounded-full bg-electric text-2xl">✓</div><h3 className="text-2xl">Заявка отправлена</h3><p className="mt-3 text-white/45">Спасибо! Свяжемся с вами в течение рабочего дня.</p></div>;
  return <form className="contact-form" onSubmit={submit}><label>Имя<input required name="name" autoComplete="name" placeholder="Как к вам обращаться" /></label><label>Телефон<input required name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="+7 (___) ___-__-__" /></label><label>Комментарий<textarea name="message" rows={4} placeholder="Квартира, дом или коммерческое помещение — коротко опишите задачу" /></label><button className="button-primary w-full justify-center" type="submit">Получить расчёт <span aria-hidden="true">→</span></button><p className="text-center text-[11px] leading-5 text-white/25">Нажимая кнопку, вы соглашаетесь на обработку персональных данных</p></form>;
}
