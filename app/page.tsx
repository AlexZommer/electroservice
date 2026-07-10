import { ContactForm } from "@/components/contact-form";
import { FAQ } from "@/components/faq";
import { Header } from "@/components/header";
import { Icon } from "@/components/icons";
import Image from "next/image";
import { PrincipleStats, Reveal } from "@/components/animated-content";

const services = [
  { icon: "bolt", n: "01", title: "Электромонтаж под ключ", text: "Проектирование, комплектация и монтаж электрики в квартире, доме или коммерческом помещении." },
  { icon: "cable", n: "02", title: "Замена проводки", text: "Диагностика старой сети, безопасный демонтаж и прокладка новой проводки без лишних работ." },
  { icon: "grid", n: "03", title: "Сборка электрощитов", text: "Расчёт нагрузок, подбор защиты, маркировка линий и аккуратная сборка щита под ваш объект." },
  { icon: "sun", n: "04", title: "Освещение и трековые системы", text: "Монтаж основного, декоративного и трекового освещения с удобными сценариями управления." },
  { icon: "home", n: "05", title: "Умный дом", text: "Автоматизация света, климата, штор и безопасности с управлением со смартфона." },
  { icon: "building", n: "06", title: "Коммерческие объекты", text: "Электромонтаж для офисов, магазинов, кафе и других помещений с учётом требований бизнеса." },
];

const steps = [
  ["01", "Заявка", "Вы оставляете контакты и коротко описываете задачу."],
  ["02", "Бесплатная консультация", "Уточняем детали, отвечаем на вопросы и при необходимости выезжаем на объект."],
  ["03", "Расчёт стоимости", "Готовим прозрачную смету, согласовываем материалы и сроки."],
  ["04", "Выполнение работ", "Работаем по проекту, соблюдая технические нормы и порядок на объекте."],
  ["05", "Сдача и гарантия", "Проверяем систему, передаём документацию и гарантийные обязательства."],
];

const advantages = [
  ["contract", "Работаем по договору", "Фиксируем объём, стоимость и ответственность сторон до начала монтажа."],
  ["standard", "Соблюдаем ГОСТ и ПУЭ", "Проектные решения и монтаж соответствуют действующим требованиям."],
  ["shield", "Гарантия на работы", "Остаёмся на связи после сдачи и отвечаем за качество результата."],
  ["clock", "Соблюдаем сроки", "Планируем этапы заранее и придерживаемся согласованного графика."],
  ["clean", "Чистый монтаж", "Поддерживаем порядок и не оставляем после себя лишний строительный мусор."],
  ["consult", "Бесплатный расчёт", "Разберём задачу, предложим решение и подготовим предварительную стоимость."],
];

const gallery = [
  { src: "/images/electrical-panel.jpg", title: "Современный электрощит", text: "Точная сборка и понятная маркировка каждой линии." },
  { src: "/images/electrical-wiring.jpg", title: "Аккуратная разводка", text: "Продуманные трассы и порядок на каждом этапе монтажа." },
  { src: "/images/track-lighting.jpg", title: "Сценарии освещения", text: "Функциональный свет, интегрированный в архитектуру." },
  { src: "/images/finished-interior.jpg", title: "Готовый интерьер", text: "Инженерные решения, которые не нарушают эстетику пространства." },
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />

      <section className="hero-grid relative min-h-screen px-5 pt-32 sm:px-8 lg:px-12" id="top">
        <div className="hero-glow" />
        <div className="hero-aurora" aria-hidden="true" />
        <div className="hero-circuit" aria-hidden="true" />
        <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-[1440px] flex-col justify-between">
          <div className="relative z-10 max-w-6xl pt-[7vh]">
            <div className="eyebrow reveal"><span className="status-dot" /> Инженерные решения для частных и коммерческих пространств</div>
            <h1 className="mt-8 max-w-6xl text-[clamp(3.25rem,7.6vw,8rem)] font-medium leading-[.91] tracking-[-.065em]">
              Электрика,<br /><span className="text-gradient">которая работает</span><br />на архитектуру
            </h1>
            <p className="reveal reveal-delay-2 mt-8 max-w-2xl text-lg leading-relaxed text-white/55 sm:text-xl">
              ЭлектроСервис — инженерная команда полного цикла. Проектируем и выполняем электромонтаж для квартир, домов и коммерческих пространств, где важны точность, эстетика и надёжность.
            </p>
            <div className="reveal reveal-delay-3 mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a className="button-primary hero-primary" href="#estimate">Получить расчёт <Icon name="arrow" /></a>
              <a className="button-secondary" href="tel:+79964140502"><Icon name="phone" /> Позвонить</a>
              <a className="button-secondary telegram-button" href="https://t.me/+79964140502" target="_blank" rel="noreferrer"><Icon name="telegram" /> Написать в Telegram</a>
            </div>
          </div>
          <div className="relative z-10 flex items-center gap-3 border-t border-white/10 py-7 text-xs uppercase tracking-[.16em] text-white/35">
            <span className="status-dot" /> Берём на себя весь электромонтаж — от замера до сдачи
          </div>
        </div>
      </section>

      <section className="estimate-section px-5 py-20 sm:px-8 sm:py-24 lg:px-12" id="estimate">
        <Reveal className="mx-auto max-w-[1440px]"><div className="estimate-shell grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div>
            <div className="section-tag">Предварительный расчёт</div>
            <h2 className="mt-6 text-[clamp(2.5rem,4.8vw,4.8rem)] font-medium leading-[1.02] tracking-[-.055em]">Получите расчёт стоимости <span className="text-gradient">за 15 минут</span></h2>
            <p className="mt-7 max-w-lg text-base leading-7 text-white/50 sm:text-lg">Ответим в Telegram, уточним детали и бесплатно рассчитаем стоимость.</p>
            <div className="mt-9 flex items-center gap-3 text-sm text-white/40"><span className="status-dot" /> Без обязательств и скрытых условий</div>
          </div>
          <ContactForm />
        </div></Reveal>
      </section>

      <section className="section" id="services">
        <Reveal><SectionIntro tag="Услуги" title={<>Вся электрика.<br /><span className="text-white/35">В одних руках.</span></>} aside="Подберём решение под объект, задачи и бюджет. До начала работ вы будете понимать состав, сроки и стоимость." />
        <div className="mx-auto mt-16 grid max-w-[1440px] border-l border-t border-white/10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => <article className="service-card" key={service.title}><div className="flex items-start justify-between"><Icon name={service.icon} /><span className="text-xs text-white/25">{service.n}</span></div><h3 className="mt-16 text-2xl tracking-tight">{service.title}</h3><p className="mt-4 text-sm leading-7 text-white/45">{service.text}</p><a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm text-electric">Рассчитать стоимость <Icon name="arrow" /></a></article>)}
        </div></Reveal>
      </section>

      <section className="section relative why-section" id="about">
        <div className="orb orb-left" />
        <div className="mx-auto max-w-[1440px]">
          <Reveal><SectionIntro tag="Почему выбирают нас" title={<>Спокойствие<br /><span className="text-white/35">на каждом этапе.</span></>} aside="Инженерный подход, прозрачные договорённости и внимание к тому, что обычно остаётся незаметным." /></Reveal>
          <div className="advantages-grid mt-16">{advantages.map(([icon, title, text], index) => <Reveal key={title} className={`reveal-stagger-${(index % 3) + 1}`}><article className="advantage-card"><div className="advantage-icon"><Icon name={icon} /></div><h3>{title}</h3><p>{text}</p></article></Reveal>)}</div>
        </div>
      </section>

      <section className="stats-section px-5 sm:px-8 lg:px-12"><Reveal className="mx-auto max-w-[1440px]"><PrincipleStats /></Reveal></section>

      <section className="section" id="work">
        <Reveal><SectionIntro tag="Примеры решений" title={<>Качество,<br /><span className="text-white/35">которое видно.</span></>} aside="Временная подборка демонстрирует структуру будущего портфолио. Изображения легко заменить реальными фотографиями объектов." /></Reveal>
        <div className="gallery-grid mx-auto mt-16 max-w-[1440px]">
          {gallery.map((item, index) => <Reveal key={item.src} className={`reveal-stagger-${(index % 2) + 1}`}><figure className={`gallery-card gallery-card-${index + 1}`}><Image src={item.src} alt={item.title} width={1600} height={1200} loading="lazy" sizes="(max-width: 767px) 100vw, 50vw" /><span className="gallery-placeholder">Временное изображение</span><figcaption><h3>{item.title}</h3><p>{item.text}</p></figcaption></figure></Reveal>)}
        </div>
      </section>

      <section className="section" id="process">
        <Reveal><SectionIntro tag="Как мы работаем" title={<>От первого звонка<br /><span className="text-white/35">до готового объекта.</span></>} /></Reveal>
        <div className="process-timeline mx-auto mt-20 max-w-[1440px]">
          {steps.map(([n, title, text], index) => <Reveal key={n} className={`reveal-stagger-${(index % 3) + 1}`}><article className="process-step"><div className="step-number">{n}</div><h3>{title}</h3><p>{text}</p></article></Reveal>)}
        </div>
      </section>

      <section className="cta-strip px-5 py-20 sm:px-8 lg:px-12"><Reveal className="mx-auto max-w-[1440px]"><div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between"><div><p className="section-tag">Начать просто</p><h2 className="mt-5 text-3xl font-medium tracking-tight sm:text-5xl">Узнайте стоимость работ<br className="hidden sm:block" /> для вашего объекта</h2></div><a href="#contact" className="button-primary shrink-0">Получить расчёт <Icon name="arrow" /></a></div></Reveal></section>

      <FAQ />

      <section className="section relative" id="contact">
        <div className="orb orb-right" />
        <Reveal className="mx-auto max-w-[1440px]"><div className="grid gap-14 lg:grid-cols-2">
          <div><div className="section-tag">Расчёт стоимости</div><h2 className="section-title mt-6">Бесплатно рассчитаем<br /><span className="text-gradient">стоимость работ.</span></h2><p className="mt-8 max-w-lg text-lg leading-relaxed text-white/50">Оставьте заявку или свяжитесь удобным способом. Уточним задачу и согласуем время бесплатного выезда на замер.</p><a className="contact-phone" href="tel:+79964140502">+7 (996) 414-05-02</a><div className="contact-actions"><a className="contact-action" href="tel:+79964140502"><Icon name="phone" /> Позвонить</a><a className="contact-action telegram-button" href="https://t.me/+79964140502" target="_blank" rel="noreferrer"><Icon name="telegram" /> Telegram</a></div><div className="mt-10 border-l border-electric pl-5 text-sm leading-6 text-white/45">Ответим на вопросы и подготовим предварительный расчёт.</div></div>
          <ContactForm />
        </div></Reveal>
      </section>

      <footer className="border-t border-white/10 px-5 py-10 sm:px-8 lg:px-12"><div className="mx-auto flex max-w-[1440px] flex-col gap-6 text-sm text-white/35 sm:flex-row sm:items-center sm:justify-between"><a href="#top" className="logo text-white"><span className="logo-mark"><Icon name="bolt" /></span>Электро<span>Сервис</span></a><a href="tel:+79964140502" className="text-white/60 hover:text-white">+7 (996) 414-05-02</a><a href="#top" className="text-white/60 hover:text-white">Наверх ↑</a></div></footer>
    </main>
  );
}

function SectionIntro({ tag, title, aside }: { tag: string; title: React.ReactNode; aside?: string }) { return <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-8 lg:flex-row lg:items-end"><div><div className="section-tag">{tag}</div><h2 className="section-title mt-6">{title}</h2></div>{aside && <p className="max-w-sm text-sm leading-7 text-white/45">{aside}</p>}</div>; }
