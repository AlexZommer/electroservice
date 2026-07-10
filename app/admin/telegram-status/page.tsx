"use client";

import { useEffect, useState } from "react";

interface TelegramStatus {
  apiOk?: boolean;
  bot?: string;
  webhookInstalled?: boolean;
  webhookUrl?: string;
  webhookMatchesSite?: boolean;
  installedNow?: boolean;
  chatIdFound?: boolean;
  chatIdInstruction?: string | null;
  webhookError?: string | null;
  testPassed?: boolean;
  message?: string;
  error?: string;
}

export default function TelegramStatusPage() {
  const [status, setStatus] = useState<TelegramStatus | null>(null);
  const [test, setTest] = useState<TelegramStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [testing, setTesting] = useState(false);

  async function refresh() {
    setLoading(true);
    try {
      const response = await fetch("/api/setup-telegram", { cache: "no-store" });
      setStatus(await response.json() as TelegramStatus);
    } catch {
      setStatus({ error: "API-маршрут недоступен. Локально запустите проект через Wrangler Pages Dev." });
    } finally {
      setLoading(false);
    }
  }

  async function runTest() {
    setTesting(true);
    setTest(null);
    try {
      const response = await fetch("/api/test-telegram", { method: "POST" });
      setTest(await response.json() as TelegramStatus);
    } catch {
      setTest({ testPassed: false, error: "Не удалось вызвать тестовый endpoint." });
    } finally {
      setTesting(false);
    }
  }

  useEffect(() => { void refresh(); }, []);

  return <main className="admin-page"><div className="admin-glow" /><section className="admin-shell"><div className="admin-heading"><a href="/" className="admin-back">← На сайт</a><p className="section-tag">Development console</p><h1>Telegram<br /><span className="text-gradient">Status</span></h1><p>Диагностика webhook, Telegram Bot API и тестовой отправки для формы сайта.</p></div><div className="admin-panel"><div className="admin-panel-top"><div><span className="admin-kicker">Состояние интеграции</span><strong>{status?.bot || "Telegram Bot"}</strong></div><button onClick={() => void refresh()} disabled={loading}>{loading ? "Проверяем…" : "Обновить"}</button></div><div className="status-list"><StatusRow label="Telegram API" value={status?.apiOk} loading={loading} /><StatusRow label="Webhook установлен" value={status?.webhookInstalled} loading={loading} /><StatusRow label="Webhook этого сайта" value={status?.webhookMatchesSite} loading={loading} /><StatusRow label="chat_id найден" value={status?.chatIdFound} loading={loading} /><StatusRow label="Тестовая отправка" value={test?.testPassed} loading={testing} /></div>{status?.webhookUrl && <div className="admin-detail"><span>Webhook URL</span><code>{status.webhookUrl}</code></div>}{(status?.error || status?.chatIdInstruction || status?.webhookError) && <div className="admin-notice">{status.error || status.chatIdInstruction || status.webhookError}</div>}{test && <div className={`admin-notice ${test.testPassed ? "success" : ""}`}>{test.message || test.error}</div>}<button className="button-primary admin-test" onClick={() => void runTest()} disabled={testing || loading}>{testing ? "Отправляем…" : "Отправить тестовое сообщение"}</button><p className="admin-warning">Служебная страница без авторизации. После настройки установите TELEGRAM_SETUP_ENABLED=false.</p></div></section></main>;
}

function StatusRow({ label, value, loading }: { label: string; value?: boolean; loading: boolean }) {
  return <div className="status-row"><span>{label}</span><span className={`status-pill ${loading ? "pending" : value ? "ok" : "fail"}`}><i />{loading ? "Проверка" : value ? "Работает" : "Не настроено"}</span></div>;
}
