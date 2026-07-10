"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";
const SUBMITTED_KEY = "electroservice-contact-submitted";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");
  const startedAt = useRef(Date.now());

  useEffect(() => {
    if (sessionStorage.getItem(SUBMITTED_KEY)) setStatus("success");
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading" || status === "success") return;

    setStatus("loading");
    setError("");
    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          message: data.get("message"),
          website: data.get("website"),
          startedAt: startedAt.current,
        }),
      });
      const result = await response.json() as { error?: string };
      if (!response.ok) throw new Error(result.error || "Не удалось отправить заявку.");

      sessionStorage.setItem(SUBMITTED_KEY, "true");
      setStatus("success");
      form.reset();
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Не удалось отправить заявку.");
      setStatus("error");
    }
  }

  if (status === "success") return (
    <div className="contact-form contact-success" role="status">
      <div className="success-mark">✓</div>
      <h3>Спасибо!</h3>
      <p>Мы получили заявку и скоро свяжемся.</p>
    </div>
  );

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-grid">
        <label>Имя<input required name="name" autoComplete="name" minLength={2} maxLength={80} placeholder="Как к вам обращаться" /></label>
        <label>Телефон<input required name="phone" type="tel" inputMode="tel" autoComplete="tel" minLength={7} maxLength={30} placeholder="+7 (___) ___-__-__" /></label>
      </div>
      <label>Что необходимо сделать<textarea required name="message" rows={4} minLength={10} maxLength={1200} placeholder="Коротко опишите объект и необходимые работы" /></label>
      <label className="honeypot" aria-hidden="true">Ваш сайт<input name="website" tabIndex={-1} autoComplete="off" /></label>
      <button className="button-primary w-full justify-center" type="submit" disabled={status === "loading"}>
        {status === "loading" ? <><span className="button-spinner" /> Отправляем…</> : <>Получить расчёт <span aria-hidden="true">→</span></>}
      </button>
      {error && <p className="form-error" role="alert">{error}</p>}
      <p className="text-center text-[11px] leading-5 text-white/25">Нажимая кнопку, вы соглашаетесь на обработку персональных данных</p>
    </form>
  );
}
