import { post } from './ajax';

const ACTIVITY_STORAGE_KEY = 'fcc:lastActivity';
const POLL_INTERVAL_MS = 5000;

let intervalId: ReturnType<typeof setInterval> | null = null;
let lastSentUrl: string | null = null;

function isLearnPage(url: string): boolean {
  return url.startsWith('/learn/');
}

function saveToLocalStorage(url: string): void {
  try {
    localStorage.setItem(
      ACTIVITY_STORAGE_KEY,
      JSON.stringify({ url, timestamp: Date.now() })
    );
  } catch {
    // localStorage may be unavailable (private browsing, storage full)
  }
}

async function checkAndSendActivity(): Promise<void> {
  if (typeof window === 'undefined') return;

  const currentUrl = window.location.pathname;

  if (!isLearnPage(currentUrl)) return;
  if (currentUrl === lastSentUrl) return;

  saveToLocalStorage(currentUrl);

  try {
    await post('/activity', { url: currentUrl });
    lastSentUrl = currentUrl;
  } catch {
    // Silently fail — activity tracking is non-critical
  }
}

export function startActivityTracking(): void {
  if (intervalId !== null) return;

  // Check immediately on start
  void checkAndSendActivity();

  intervalId = setInterval(() => {
    void checkAndSendActivity();
  }, POLL_INTERVAL_MS);
}

export function stopActivityTracking(): void {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }
  lastSentUrl = null;
}
