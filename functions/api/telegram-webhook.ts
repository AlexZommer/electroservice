import { json, PagesContext, telegramRequest, TelegramEnv, webhookSecret } from "../_telegram";

interface TelegramUpdate {
  message?: {
    chat?: { id?: number; type?: string };
    from?: { first_name?: string };
    text?: string;
  };
}

export async function onRequestPost({ request, env }: PagesContext<TelegramEnv>): Promise<Response> {
  if (!env.TELEGRAM_BOT_TOKEN) return json({ error: "Bot token is not configured." }, 503);
  const receivedSecret = request.headers.get("X-Telegram-Bot-Api-Secret-Token");
  if (receivedSecret !== await webhookSecret(env.TELEGRAM_BOT_TOKEN)) return json({ error: "Forbidden" }, 403);

  let update: TelegramUpdate;
  try {
    update = await request.json() as TelegramUpdate;
  } catch {
    return json({ error: "Invalid update" }, 400);
  }

  const chatId = update.message?.chat?.id;
  if (!chatId) return json({ ok: true });

  if (!env.TELEGRAM_CHAT_ID) {
    await telegramRequest(env.TELEGRAM_BOT_TOKEN, "sendMessage", {
      chat_id: chatId,
      text: `Ваш TELEGRAM_CHAT_ID: ${chatId}\n\nДобавьте это значение в Cloudflare Pages → Settings → Variables and Secrets, затем запустите новый deployment.`,
    });
  }

  return json({ ok: true });
}
