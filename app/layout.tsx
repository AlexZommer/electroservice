import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://electroservice.ru"),
  title: { default: "ЭлектроСервис — Электромонтаж под ключ", template: "%s | ЭлектроСервис" },
  description: "Проектирование и монтаж электросистем для домов и бизнеса. Чистая работа, прозрачная смета и гарантия до 5 лет.",
  keywords: ["электромонтаж", "электрик", "умный дом", "электрощит", "электромонтажные работы"],
  openGraph: {
    title: "ЭлектроСервис — Монтаж электрики любой сложности",
    description: "Премиальный электромонтаж для домов и бизнеса.",
    type: "website",
    locale: "ru_RU",
    siteName: "ЭлектроСервис",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className="bg-ink font-sans text-white antialiased">{children}</body>
    </html>
  );
}
