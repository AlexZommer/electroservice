import { json, PagesContext, setupAllowed, telegramRequest, TelegramEnv } from "../_telegram";

export async function onRequestPost({ env }: PagesContext<TelegramEnv>): Promise<Response> {
  if (!setupAllowed(env)) return json({ error: "Тестирование отключено. Добавьте TELEGRAM_SETUP_ENABLED=true." }, 403);
  if (!env.TELEGRAM_BOT_TOKEN) return json({ error: "Не задан TELEGRAM_BOT_TOKEN." }, 503);
  if (!env.TELEGRAM_CHAT_ID) {
    return json({
      error: "TELEGRAM_CHAT_ID не найден. Напишите боту /start, получите chat_id в ответном сообщении и добавьте его в Cloudflare Variables and Secrets.",
      chatIdFound: false,
    }, 503);
  }

  try {
    await telegramRequest(env.TELEGRAM_BOT_TOKEN, "sendMessage", {
      chat_id: env.TELEGRAM_CHAT_ID,
      text: "✅ Telegram подключен успешно.",
    });
    return json({ ok: true, testPassed: true, message: "Тестовое сообщение отправлено." });
  } catch (error) {
    return json({ error: error instanceof Error ? error.message : "Тестовая отправка не удалась.", testPassed: false }, 502);
  }
}
