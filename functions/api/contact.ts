interface Env {
  TELEGRAM_BOT_TOKEN?: string;
  TELEGRAM_CHAT_ID?: string;
}

interface ContactPayload {
  name?: unknown;
  phone?: unknown;
  message?: unknown;
  website?: unknown;
  startedAt?: unknown;
}

interface PagesContext {
  request: Request;
  env: Env;
}

const recentRequests = new Map<string, number>();
const RATE_LIMIT_MS = 10 * 60 * 1000;

function json(body: object, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}

export async function onRequestPost({ request, env }: PagesContext): Promise<Response> {
  if (!env.TELEGRAM_BOT_TOKEN || !env.TELEGRAM_CHAT_ID) {
    return json({ error: "Форма временно недоступна: не настроены переменные Telegram." }, 503);
  }

  let payload: ContactPayload;
  try {
    payload = await request.json() as ContactPayload;
  } catch {
    return json({ error: "Некорректные данные формы." }, 400);
  }

  if (payload.website) return json({ ok: true });

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const phone = typeof payload.phone === "string" ? payload.phone.trim() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";
  const startedAt = typeof payload.startedAt === "number" ? payload.startedAt : 0;

  if (Date.now() - startedAt < 2500) return json({ error: "Форма отправлена слишком быстро. Попробуйте ещё раз." }, 429);
  if (name.length < 2 || name.length > 80) return json({ error: "Укажите корректное имя." }, 400);
  if (!/^[+\d\s()\-]{7,30}$/.test(phone)) return json({ error: "Укажите корректный телефон." }, 400);
  if (message.length < 10 || message.length > 1200) return json({ error: "Опишите задачу чуть подробнее." }, 400);

  const ip = request.headers.get("CF-Connecting-IP") || "unknown";
  const requestKey = `${ip}:${phone.replace(/\D/g, "")}`;
  const previousRequest = recentRequests.get(requestKey);
  if (previousRequest && Date.now() - previousRequest < RATE_LIMIT_MS) {
    return json({ error: "Заявка уже отправлена. Мы скоро свяжемся с вами." }, 429);
  }

  const telegramResponse = await fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: env.TELEGRAM_CHAT_ID,
      text: `Новая заявка с сайта ЭлектроСервис\n\nИмя: ${name}\nТелефон: ${phone}\n\nЧто необходимо сделать:\n${message}`,
    }),
  });

  if (!telegramResponse.ok) {
    return json({ error: "Не удалось отправить заявку. Позвоните нам или попробуйте позднее." }, 502);
  }

  recentRequests.set(requestKey, Date.now());
  return json({ ok: true });
}

export function onRequest(): Response {
  return json({ error: "Метод не поддерживается." }, 405);
}
