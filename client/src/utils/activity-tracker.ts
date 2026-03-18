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

function sendBeacon(url: string): void {
  if (typeof navigator === 'undefined' || !navigator.sendBeacon) return;
  const blob = new Blob([JSON.stringify({ url })], {
    type: 'application/json'
  });
  navigator.sendBeacon('/activity', blob);
}

function handleBeforeUnload(): void {
  if (typeof window === 'undefined') return;
  const currentUrl = window.location.pathname;
  if (!isLearnPage(currentUrl)) return;
  if (currentUrl === lastSentUrl) return;
  saveToLocalStorage(currentUrl);
  sendBeacon(currentUrl);
}

async function checkAndSendActivity(): Promise<void> {
  if (typeof window === 'undefined') return;

  const currentUrl = window.location.pathname;

  if (!isLearnPage(currentUrl)) return;
  if (currentUrl === lastSentUrl) return;

  try {
    await post('/activity', { url: currentUrl });
    lastSentUrl = currentUrl;
    saveToLocalStorage(currentUrl);
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

  if (typeof window !== 'undefined') {
    window.addEventListener('beforeunload', handleBeforeUnload);
  }
}

export function stopActivityTracking(): void {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }
  lastSentUrl = null;
  if (typeof window !== 'undefined') {
    window.removeEventListener('beforeunload', handleBeforeUnload);
  }
}
