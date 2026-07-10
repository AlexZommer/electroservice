import { ContactForm } from "@/components/contact-form";
import { FAQ } from "@/components/faq";
import { Header } from "@/components/header";
import { Icon } from "@/components/icons";
import Image from "next/image";

const trust = [
  ["contract", "Работаем по договору"],
  ["shield", "Гарантия до 5 лет"],
  ["measure", "Бесплатный выезд на замер"],
  ["document", "Смета без скрытых платежей"],
  ["check", "Соблюдаем ПУЭ и ГОСТ"],
];

const services = [
  { icon: "bolt", n: "01", title: "Электромонтаж под ключ", text: "Проектирование, комплектация и монтаж электрики в квартире, доме или коммерческом помещении." },
  { icon: "cable", n: "02", title: "Замена проводки", text: "Диагностика старой сети, безопасный демонтаж и прокладка новой проводки без лишних работ." },
  { icon: "grid", n: "03", title: "Сборка электрощитов", text: "Расчёт нагрузок, подбор защиты, маркировка линий и аккуратная сборка щита под ваш объект." },
  { icon: "sun", n: "04", title: "Освещение и трековые системы", text: "Монтаж основного, декоративного и трекового освещения с удобными сценариями управления." },
  { icon: "home", n: "05", title: "Умный дом", text: "Автоматизация света, климата, штор и безопасности с управлением со смартфона." },
  { icon: "building", n: "06", title: "Коммерческие объекты", text: "Электромонтаж для офисов, магазинов, кафе и других помещений с учётом требований бизнеса." },
];

const steps = [
  ["01", "Заявка", "Вы оставляете контакты и коротко описываете задачу. Мы уточняем детали и договариваемся о встрече."],
  ["02", "Замер", "Инженер приезжает на объект, оценивает объём работ и фиксирует технические особенности."],
  ["03", "Смета и договор", "Готовим понятную смету, согласовываем сроки и материалы, закрепляем условия в договоре."],
  ["04", "Выполнение и сдача", "Выполняем монтаж, проверяем каждую линию и сдаём готовую систему с документацией."],
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
        <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-[1440px] flex-col justify-between">
          <div className="relative z-10 max-w-6xl pt-[7vh]">
            <div className="eyebrow reveal"><span className="status-dot" /> Инженерные решения для частных и коммерческих пространств</div>
            <h1 className="reveal reveal-delay mt-8 max-w-6xl text-[clamp(3.25rem,7.6vw,8rem)] font-medium leading-[.91] tracking-[-.065em]">
              Электрика, продуманная<br /><span className="text-gradient">до каждой детали</span>
            </h1>
            <p className="reveal reveal-delay-2 mt-8 max-w-2xl text-lg leading-relaxed text-white/55 sm:text-xl">
              Проектируем и выполняем электромонтаж под ключ для квартир, домов и коммерческих объектов. Фиксируем условия в договоре и отвечаем за результат гарантией.
            </p>
            <div className="reveal reveal-delay-3 mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a className="button-primary" href="#contact">Получить расчёт <Icon name="arrow" /></a>
              <a className="button-secondary" href="tel:+79964140502"><Icon name="phone" /> Позвонить</a>
              <a className="button-secondary telegram-button" href="https://t.me/+79964140502" target="_blank" rel="noreferrer"><Icon name="telegram" /> Написать в Telegram</a>
            </div>
          </div>
          <div className="relative z-10 flex items-center gap-3 border-t border-white/10 py-7 text-xs uppercase tracking-[.16em] text-white/35">
            <span className="status-dot" /> Берём на себя весь электромонтаж — от замера до сдачи
          </div>
        </div>
      </section>

      <section className="section pt-8" id="work">
        <SectionIntro tag="Качество в деталях" title={<>Работа, которую<br /><span className="text-white/35">видно сразу.</span></>} aside="От инженерной части до финишного света — аккуратность остаётся нашим стандартом на каждом этапе." />
        <div className="gallery-grid mx-auto mt-16 max-w-[1440px]">
          {gallery.map((item, index) => <figure className={`gallery-card gallery-card-${index + 1}`} key={item.src}><Image src={item.src} alt={item.title} width={1600} height={1200} priority={index === 0} sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 50vw" /><figcaption><h3>{item.title}</h3><p>{item.text}</p></figcaption></figure>)}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[.018] px-5 sm:px-8 lg:px-12" aria-label="Наши гарантии">
        <div className="mx-auto grid max-w-[1440px] sm:grid-cols-2 lg:grid-cols-5">
          {trust.map(([icon, label]) => <div className="trust-item" key={label}><Icon name={icon} /><span>{label}</span></div>)}
        </div>
      </section>

      <section className="section" id="services">
        <SectionIntro tag="Услуги" title={<>Вся электрика.<br /><span className="text-white/35">В одних руках.</span></>} aside="Подберём решение под объект, задачи и бюджет. До начала работ вы будете понимать состав, сроки и стоимость." />
        <div className="mx-auto mt-16 grid max-w-[1440px] border-l border-t border-white/10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => <article className="service-card" key={service.title}><div className="flex items-start justify-between"><Icon name={service.icon} /><span className="text-xs text-white/25">{service.n}</span></div><h3 className="mt-16 text-2xl tracking-tight">{service.title}</h3><p className="mt-4 text-sm leading-7 text-white/45">{service.text}</p><a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm text-electric">Рассчитать стоимость <Icon name="arrow" /></a></article>)}
        </div>
      </section>

      <section className="section relative" id="about">
        <div className="orb orb-left" />
        <div className="mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <div className="tech-visual" aria-hidden="true"><div className="tech-ring"><Icon name="bolt" /></div></div>
          <div><div className="section-tag">Почему ЭлектроСервис</div><h2 className="section-title mt-6">Сначала думаем.<br /><span className="text-white/35">Потом монтируем.</span></h2><p className="mt-8 max-w-xl text-base leading-8 text-white/50">Надёжная электрика начинается не со штробления, а с расчёта нагрузок и продуманной схемы. Поэтому мы заранее прорабатываем решения, согласовываем материалы и фиксируем объём работ.</p><div className="mt-10 grid gap-3 sm:grid-cols-2"><Proof text="Понятная смета до старта" /><Proof text="Согласованные сроки" /><Proof text="Проверка линий перед сдачей" /><Proof text="Документация по системе" /></div></div>
        </div>
      </section>

      <section className="section" id="process">
        <SectionIntro tag="Как мы работаем" title={<>Понятный путь<br /><span className="text-white/35">к готовой электрике.</span></>} />
        <div className="process-line mx-auto mt-20 grid max-w-[1440px] gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(([n, title, text]) => <article className="process-card" key={n}><div className="step-number">{n}</div><h3 className="mt-10 text-xl">{title}</h3><p className="mt-4 text-sm leading-7 text-white/45">{text}</p></article>)}
        </div>
      </section>

      <section className="cta-strip px-5 py-20 sm:px-8 lg:px-12"><div className="mx-auto flex max-w-[1440px] flex-col gap-8 lg:flex-row lg:items-center lg:justify-between"><div><p className="section-tag">Начать просто</p><h2 className="mt-5 text-3xl font-medium tracking-tight sm:text-5xl">Узнайте стоимость работ<br className="hidden sm:block" /> для вашего объекта</h2></div><a href="#contact" className="button-primary shrink-0">Получить расчёт <Icon name="arrow" /></a></div></section>

      <FAQ />

      <section className="section relative" id="contact">
        <div className="orb orb-right" />
        <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-2">
          <div><div className="section-tag">Расчёт стоимости</div><h2 className="section-title mt-6">Бесплатно рассчитаем<br /><span className="text-gradient">стоимость работ.</span></h2><p className="mt-8 max-w-lg text-lg leading-relaxed text-white/50">Оставьте заявку или свяжитесь удобным способом. Уточним задачу и согласуем время бесплатного выезда на замер.</p><a className="contact-phone" href="tel:+79964140502">+7 (996) 414-05-02</a><div className="contact-actions"><a className="contact-action" href="tel:+79964140502"><Icon name="phone" /> Позвонить</a><a className="contact-action telegram-button" href="https://t.me/+79964140502" target="_blank" rel="noreferrer"><Icon name="telegram" /> Telegram</a></div><div className="mt-10 border-l border-electric pl-5 text-sm leading-6 text-white/45">Ответим на вопросы и подготовим предварительный расчёт.</div></div>
          <ContactForm />
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-10 sm:px-8 lg:px-12"><div className="mx-auto flex max-w-[1440px] flex-col gap-6 text-sm text-white/35 sm:flex-row sm:items-center sm:justify-between"><a href="#top" className="logo text-white"><span className="logo-mark"><Icon name="bolt" /></span>Электро<span>Сервис</span></a><a href="tel:+79964140502" className="text-white/60 hover:text-white">+7 (996) 414-05-02</a><a href="#top" className="hover:text-white">Наверх ↑</a></div></footer>
    </main>
  );
}

function SectionIntro({ tag, title, aside }: { tag: string; title: React.ReactNode; aside?: string }) { return <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-8 lg:flex-row lg:items-end"><div><div className="section-tag">{tag}</div><h2 className="section-title mt-6">{title}</h2></div>{aside && <p className="max-w-sm text-sm leading-7 text-white/45">{aside}</p>}</div>; }
function Proof({ text }: { text: string }) { return <div className="flex items-center gap-3 border border-white/10 bg-white/[.02] p-4 text-sm text-white/65"><span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-electric/15 text-xs text-electric">✓</span>{text}</div>; }
