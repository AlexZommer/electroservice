import { Header } from "@/components/header";
import { Icon } from "@/components/icons";
import Image from "next/image";
import { Reveal } from "@/components/animated-content";
import { MobileHero } from "@/components/mobile-hero";

const PHONE_HREF = "tel:+79537719911";
const PHONE_LABEL = "+7 (953) 771-99-11";
const MAX_URL = "https://max.ru/u/f9LHodD0cOL6rJKnS_PQeiK5NAEgGEWFWq3oWksH2F6wIWKAT8I6ZAUQAmk";
const TELEGRAM_URL = "https://t.me/+79537719911";

const services = [
  { icon: "bolt", n: "01", title: "Электромонтаж под ключ", text: "Проектирование, комплектация и монтаж электрики в квартире, доме или коммерческом помещении." },
  { icon: "cable", n: "02", title: "Замена проводки", text: "Диагностика старой сети, безопасный демонтаж и прокладка новой проводки без лишних работ." },
  { icon: "grid", n: "03", title: "Сборка электрощитов", text: "Расчёт нагрузок, подбор защиты, маркировка линий и аккуратная сборка щита под ваш объект." },
  { icon: "sun", n: "04", title: "Освещение и трековые системы", text: "Монтаж основного, декоративного и трекового освещения с удобными сценариями управления." },
  { icon: "home", n: "05", title: "Умный дом", text: "Автоматизация света, климата, штор и безопасности с управлением со смартфона." },
  { icon: "building", n: "06", title: "Коммерческие объекты", text: "Электромонтаж для офисов, магазинов, кафе и других помещений с учётом требований бизнеса." },
];

const benefits = [
  ["contract", "Работа по договору", "Фиксируем объём работ и ответственность сторон."],
  ["document", "Понятная смета", "Заранее согласовываем работы и материалы."],
  ["clock", "Соблюдение сроков", "Работаем по согласованному графику."],
  ["shield", "Гарантия на выполненные работы", "Условия гарантии закрепляем в договоре."],
];

const gallery = [
  { src: "/images/electrical-panel.jpg", alt: "Собранный электрощит с маркировкой линий", title: "Современный электрощит", text: "Точная сборка и понятная маркировка каждой линии." },
  { src: "/images/electrical-wiring.jpg", alt: "Аккуратная разводка электрических кабелей на объекте", title: "Аккуратная разводка", text: "Продуманные трассы и порядок на каждом этапе монтажа." },
  { src: "/images/track-lighting.jpg", alt: "Смонтированная трековая система освещения в интерьере", title: "Сценарии освещения", text: "Функциональный свет, интегрированный в архитектуру." },
  { src: "/images/finished-interior.jpg", alt: "Готовый интерьер после выполнения электромонтажа", title: "Готовый интерьер", text: "Инженерные решения, которые не нарушают эстетику пространства." },
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <section className="hero-grid relative sm:min-h-screen sm:px-8 sm:pt-32 lg:px-12" id="top">
        <div className="hero-glow" /><div className="hero-aurora" aria-hidden="true" /><div className="hero-circuit" aria-hidden="true" />
        <MobileHero />
        <div className="mx-auto hidden min-h-[calc(100vh-8rem)] max-w-[1440px] flex-col justify-between sm:flex">
          <div className="hero-content relative z-10 max-w-6xl pt-[7vh]">
            <div className="eyebrow reveal"><span className="status-dot" /> Инженерные решения для частных и коммерческих пространств</div>
            <h1 className="hero-title mt-8 max-w-6xl text-[clamp(2.75rem,6.45vw,6.8rem)] font-medium leading-[.91] tracking-[-.065em]">Монтаж электрики<br /><span className="text-gradient">любой сложности</span></h1>
            <p className="hero-description reveal reveal-delay-2 mt-8 max-w-2xl text-lg leading-relaxed text-white/55 sm:text-xl">ЭлектроСервис — инженерная команда полного цикла. Проектируем и выполняем электромонтаж для квартир, домов и коммерческих пространств, где важны точность, эстетика и надёжность.</p>
            <div className="hero-actions reveal reveal-delay-3 mt-10">
              <div className="hero-contact-options">
                <a className="button-primary hero-primary" href={PHONE_HREF}><Icon name="phone" /> Позвонить</a>
                <div className="hero-contact-buttons">
                  <a className="button-secondary" href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer"><Icon name="telegram" /> Написать в Telegram</a>
                  <a className="button-secondary" href={MAX_URL} target="_blank" rel="noopener noreferrer"><Icon name="max" /> Написать в MAX</a>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-footer relative z-10 flex items-center gap-3 border-t border-white/10 py-7 text-xs uppercase tracking-[.16em] text-white/35"><span className="status-dot" /> Берём на себя весь электромонтаж — от замера до сдачи</div>
        </div>
      </section>

      <section className="section" id="services">
        <Reveal><SectionIntro tag="Услуги" title={<>Вся электрика.<br /><span className="text-white/35">В одних руках.</span></>} aside="Подберём решение под объект, задачи и бюджет. До начала работ согласуем состав, сроки и стоимость." />
        <div className="mx-auto mt-12 grid max-w-[1440px] border-l border-t border-white/10 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {services.map((service) => <article className="service-card" key={service.title}><div className="flex items-start justify-between"><Icon name={service.icon} /><span className="text-xs text-white/25">{service.n}</span></div><h3 className="mt-10 text-2xl tracking-tight sm:mt-16">{service.title}</h3><p className="mt-4 text-sm leading-7 text-white/45">{service.text}</p><a href="#contact" className="mt-7 inline-flex items-center gap-2 text-sm text-electric">Рассчитать стоимость <Icon name="arrow" /></a></article>)}
        </div></Reveal>
      </section>

      <section className="section" id="work">
        <Reveal><SectionIntro tag="Примеры работ" title={<>Качество,<br /><span className="text-white/35">которое видно.</span></>} /></Reveal>
        <div className="gallery-grid mx-auto mt-12 max-w-[1440px] sm:mt-16">
          {gallery.map((item, index) => <Reveal key={item.src} className={`reveal-stagger-${(index % 2) + 1}`}><figure className="gallery-card"><Image src={item.src} alt={item.alt} width={1200} height={900} loading="lazy" sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1536px) 50vw, 720px" /><figcaption><h3>{item.title}</h3><p>{item.text}</p></figcaption></figure></Reveal>)}
        </div>
      </section>

      <section className="benefits-section px-5 py-16 sm:px-8 sm:py-20 lg:px-12" id="about">
        <Reveal className="mx-auto max-w-[1440px]"><div className="compact-benefits">
          {benefits.map(([icon, title, text]) => <article className="compact-benefit" key={title}><div className="advantage-icon"><Icon name={icon} /></div><div><h3>{title}</h3><p>{text}</p></div></article>)}
        </div></Reveal>
      </section>

      <section className="contact-section relative px-5 py-20 sm:px-8 sm:py-28 lg:px-12" id="contact">
        <div className="orb orb-right" />
        <Reveal className="mx-auto max-w-[980px] text-center"><div className="section-tag justify-center">Связаться с нами</div><h2 className="section-title mt-6">Рассчитаем стоимость<br className="hidden sm:block" /> <span className="text-gradient">электромонтажа</span></h2><p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">Расскажите о задаче — уточним детали, сроки и подготовим предварительный расчёт.</p><a className="contact-phone whitespace-nowrap" href={PHONE_HREF}>{PHONE_LABEL}</a><div className="contact-actions justify-center"><a className="contact-action" href={PHONE_HREF}><Icon name="phone" /> Позвонить</a><a className="contact-action" href={MAX_URL} target="_blank" rel="noopener noreferrer"><Icon name="max" /> Написать в MAX</a><a className="contact-action" href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer"><Icon name="telegram" /> Написать в Telegram</a></div></Reveal>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 sm:px-8 lg:px-12"><div className="mx-auto flex max-w-[1440px] flex-col gap-5 text-sm text-white/35 sm:flex-row sm:items-center sm:justify-between"><a href="#top" className="logo text-white"><span className="logo-mark"><Icon name="bolt" /></span>Электро<span>Сервис</span></a><div className="footer-contacts"><a href={PHONE_HREF} className="whitespace-nowrap text-white/60 hover:text-white">{PHONE_LABEL}</a><a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">Telegram</a><a href={MAX_URL} target="_blank" rel="noopener noreferrer">MAX</a></div><a href="#top" className="text-white/60 hover:text-white">Наверх ↑</a></div></footer>
    </main>
  );
}

function SectionIntro({ tag, title, aside }: { tag: string; title: React.ReactNode; aside?: string }) { return <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-7 lg:flex-row lg:items-end"><div><div className="section-tag">{tag}</div><h2 className="section-title mt-5 sm:mt-6">{title}</h2></div>{aside && <p className="max-w-sm text-sm leading-7 text-white/45">{aside}</p>}</div>; }
