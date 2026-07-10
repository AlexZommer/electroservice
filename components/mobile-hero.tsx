import Image from "next/image";
import { Icon } from "./icons";
import styles from "./mobile-hero.module.css";

export function MobileHero() {
  return (
    <div className={styles.hero}>
      <div className={styles.intro}>
        <div className={styles.eyebrow}>
          <span className={styles.dot} />
          Инженерные решения для частных и коммерческих пространств
        </div>

        <h1 className={styles.title}>
          Монтаж электрики <span>любой сложности</span>
        </h1>

        <p className={styles.description}>
          ЭлектроСервис — инженерная команда полного цикла. Проектируем и выполняем электромонтаж для квартир, домов и коммерческих пространств, где важны точность, эстетика и надёжность.
        </p>
      </div>

      <figure className={styles.visual}>
        <Image
          src="/images/electrical-wiring.jpg"
          alt="Аккуратный монтаж электропроводки в современном помещении"
          fill
          sizes="(max-width: 639px) calc(100vw - 40px), 1px"
        />
        <div className={styles.visualShade} />
        <figcaption className={styles.visualCaption}>
          <span>Полный цикл работ</span>
          <strong>От проекта до сдачи</strong>
        </figcaption>
      </figure>

      <div className={styles.actions}>
        <a className={styles.primary} href="#estimate">
          Получить расчёт <Icon name="arrow" />
        </a>
        <div className={styles.contactActions}>
          <a className={styles.secondary} href="tel:+79964140502">
            <Icon name="phone" /> Позвонить
          </a>
          <a className={styles.secondary} href="https://t.me/+79964140502" target="_blank" rel="noreferrer">
            <Icon name="telegram" /> Telegram
          </a>
        </div>
      </div>

      <div className={styles.assurance}>
        <span className={styles.dot} />
        Берём на себя весь электромонтаж — от замера до сдачи
      </div>
    </div>
  );
}
