export interface TelegramEnv {
  TELEGRAM_BOT_TOKEN?: string;
  TELEGRAM_CHAT_ID?: string;
  TELEGRAM_SETUP_ENABLED?: string;
}

export interface PagesContext<T extends TelegramEnv = TelegramEnv> {
  request: Request;
  env: T;
}

export interface TelegramResult<T = unknown> {
  ok: boolean;
  result?: T;
  description?: string;
}

export interface WebhookInfo {
  url: string;
  pending_update_count: number;
  last_error_message?: string;
}

export function json(body: object, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

export function setupAllowed(env: TelegramEnv): boolean {
  return env.TELEGRAM_SETUP_ENABLED === "true";
}

export async function telegramRequest<T>(token: string, method: string, payload?: object): Promise<TelegramResult<T>> {
  const response = await fetch(`https://api.telegram.org/bot${token}/${method}`, {
    method: payload ? "POST" : "GET",
    headers: payload ? { "Content-Type": "application/json" } : undefined,
    body: payload ? JSON.stringify(payload) : undefined,
  });
  const result = await response.json() as TelegramResult<T>;
  if (!response.ok || !result.ok) throw new Error(result.description || `Telegram API: ${response.status}`);
  return result;
}

export async function webhookSecret(token: string): Promise<string> {
  const data = new TextEncoder().encode(`electroservice:${token}`);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash)).map((byte) => byte.toString(16).padStart(2, "0")).join("").slice(0, 64);
}
