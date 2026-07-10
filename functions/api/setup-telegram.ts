import { json, PagesContext, setupAllowed, telegramRequest, TelegramEnv, WebhookInfo, webhookSecret } from "../_telegram";

async function setup({ request, env }: PagesContext<TelegramEnv>): Promise<Response> {
  if (!setupAllowed(env)) {
    return json({ error: "Настройка отключена. Добавьте TELEGRAM_SETUP_ENABLED=true только на время разработки." }, 403);
  }
  if (!env.TELEGRAM_BOT_TOKEN) {
    return json({ error: "Не задан TELEGRAM_BOT_TOKEN. Добавьте токен бота в Variables and Secrets проекта Cloudflare Pages." }, 503);
  }

  try {
    const bot = await telegramRequest<{ username: string; first_name: string }>(env.TELEGRAM_BOT_TOKEN, "getMe");
    const webhook = await telegramRequest<WebhookInfo>(env.TELEGRAM_BOT_TOKEN, "getWebhookInfo");
    const expectedUrl = `${new URL(request.url).origin}/api/telegram-webhook`;
    let installedNow = false;

    if (!webhook.result?.url) {
      await telegramRequest(env.TELEGRAM_BOT_TOKEN, "setWebhook", {
        url: expectedUrl,
        secret_token: await webhookSecret(env.TELEGRAM_BOT_TOKEN),
        allowed_updates: ["message"],
        drop_pending_updates: false,
      });
      installedNow = true;
    }

    const currentWebhook = installedNow
      ? await telegramRequest<WebhookInfo>(env.TELEGRAM_BOT_TOKEN, "getWebhookInfo")
      : webhook;
    const chatIdFound = Boolean(env.TELEGRAM_CHAT_ID);

    return json({
      apiOk: true,
      bot: bot.result ? `@${bot.result.username}` : "Подключён",
      webhookInstalled: Boolean(currentWebhook.result?.url),
      webhookUrl: currentWebhook.result?.url || "",
      webhookMatchesSite: currentWebhook.result?.url === expectedUrl,
      installedNow,
      pendingUpdates: currentWebhook.result?.pending_update_count || 0,
      webhookError: currentWebhook.result?.last_error_message || null,
      chatIdFound,
      chatIdInstruction: chatIdFound
        ? null
        : "Напишите боту /start. Webhook ответит сообщением с вашим chat_id. Затем добавьте его в Cloudflare как TELEGRAM_CHAT_ID и запустите новый deployment.",
    });
  } catch (error) {
    return json({
      apiOk: false,
      webhookInstalled: false,
      chatIdFound: Boolean(env.TELEGRAM_CHAT_ID),
      error: error instanceof Error ? error.message : "Не удалось проверить Telegram API.",
    }, 502);
  }
}

export const onRequestGet = setup;
export const onRequestPost = setup;
