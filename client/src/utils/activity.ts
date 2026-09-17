import { postActivity } from './ajax';

export type ClientActivityEventType = Parameters<
  typeof postActivity
>[0]['eventType'];

export type ClientActivityResult = {
  recorded: boolean;
};

type MeaningfulActivityListener = () => void;

const meaningfulClientActivityEventTypes = new Set<ClientActivityEventType>([
  'challenge_work',
  'test_run',
  'daily_challenge_attempted',
  'module_completed'
]);
const meaningfulActivityListeners = new Set<MeaningfulActivityListener>();

/**
 * Records a client activity event while online. Events are neither suppressed
 * nor queued, so each successful call represents one raw activity fact.
 */
export async function recordClientActivity(
  eventType: ClientActivityEventType,
  details: { subjectId?: string; url?: string } = {}
): Promise<ClientActivityResult | undefined> {
  if (typeof navigator === 'undefined' || !navigator.onLine) return;

  try {
    const { response } = await postActivity({
      eventId: crypto.randomUUID(),
      eventType,
      ...details
    });
    if (!response.ok) return { recorded: false };

    if (meaningfulClientActivityEventTypes.has(eventType)) {
      signalMeaningfulActivity();
    }
    return { recorded: true };
  } catch {
    return;
  }
}

/** Signals that a server-verified or client-recorded meaningful action occurred. */
export function signalMeaningfulActivity(): void {
  for (const listener of meaningfulActivityListeners) listener();
}

/** Subscribes the session timer to successfully recorded meaningful actions. */
export function subscribeToMeaningfulActivity(
  listener: MeaningfulActivityListener
): () => void {
  meaningfulActivityListeners.add(listener);
  return () => meaningfulActivityListeners.delete(listener);
}
