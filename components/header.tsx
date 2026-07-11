"use client";

import { useState } from "react";
import { Icon } from "./icons";

const links = [["Услуги", "#services"], ["Примеры работ", "#work"], ["Преимущества", "#about"], ["Контакты", "#contact"]];
const TELEGRAM_URL = "https://t.me/+79537719911";

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[.07] bg-ink/75 px-5 backdrop-blur-xl sm:px-8 lg:px-12">
    <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between">
      <a href="#top" className="logo"><span className="logo-mark"><Icon name="bolt" /></span>Электро<span>Сервис</span></a>
      <nav className="hidden items-center gap-8 lg:flex">{links.map(([label, href]) => <a className="nav-link" href={href} key={href}>{label}</a>)}</nav>
      <div className="ml-auto flex items-center gap-3 lg:ml-0">
        <a className="header-phone" href="tel:+79537719911" aria-label="Позвонить: +7 953 771-99-11"><Icon name="phone" />+7 (953) 771-99-11</a>
        <a className="header-social-link" href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Написать в Telegram"><Icon name="telegram" /></a>
      </div>
      <button className="grid h-10 w-10 place-items-center lg:hidden" onClick={() => setOpen(!open)} aria-label="Открыть меню" aria-expanded={open}><span className={`menu-icon ${open ? "open" : ""}`} /></button>
    </div>
    {open && <nav className="flex flex-col border-t border-white/10 py-5 lg:hidden">{links.map(([label, href]) => <a className="py-3 text-lg text-white/70" href={href} key={href} onClick={() => setOpen(false)}>{label}</a>)}<a href="tel:+79537719911" className="mt-3 text-lg text-electric">Позвонить: +7 (953) 771-99-11</a></nav>}
  </header>;
}
