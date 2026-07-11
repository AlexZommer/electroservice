import { Icon } from "./icons";
import styles from "./mobile-hero.module.css";

const MAX_URL = "https://max.ru/u/f9LHodD0cOL6rJKnS_PQeiK5NAEgGEWFWq3oWksH2F6wIWKAT8I6ZAUQAmk";
const TELEGRAM_URL = "https://t.me/+79537719911";

export function MobileHero() {
  return (
    <div className={styles.hero}>
      <div className={styles.engineeringGraphic} aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className={styles.intro}>
        <div className={styles.eyebrow}>
          <span className={styles.dot} />
          Инженерные решения для частных и коммерческих пространств
        </div>

        <h1 className={styles.title}>
          Монтаж электрики <span>любой сложности</span>
        </h1>

        <p className={styles.description}>
          Проектируем и выполняем электромонтаж для квартир, домов и коммерческих помещений — точно, аккуратно и по договору.
        </p>
      </div>

      <div className={styles.actions}>
        <a className={styles.primary} href="#contact">
          Получить расчёт <Icon name="arrow" />
        </a>
        <div className={styles.contactActions}>
          <a className={styles.secondary} href="tel:+79537719911">
            <Icon name="phone" /> Позвонить
          </a>
          <a className={styles.secondary} href={MAX_URL} target="_blank" rel="noopener noreferrer">
            <Icon name="max" /> Написать в MAX
          </a>
        </div>
        <a className={styles.telegramLink} href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
          Также мы в Telegram →
        </a>
      </div>

      <div className={styles.assurance}>
        <span className={styles.dot} />
        Берём на себя весь электромонтаж — от замера до сдачи
      </div>
    </div>
  );
}
