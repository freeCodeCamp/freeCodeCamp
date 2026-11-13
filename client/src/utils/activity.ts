import { postActivity } from './ajax';

export type ClientActivityResult = {
  recorded: boolean;
};

export type ClientActivityEventType = Parameters<
  typeof postActivity
>[0]['eventType'];

type MeaningfulActivityListener = () => void;

const meaningfulClientActivityEventTypes = new Set<ClientActivityEventType>([
  'challenge_work',
  'test_run',
  'daily_challenge_attempted',
  'module_completed'
]);
const meaningfulActivityListeners = new Set<MeaningfulActivityListener>();

type PendingActivity = {
  body: Parameters<typeof postActivity>[0];
  resolve: (result: ClientActivityResult | undefined) => void;
};

type InFlightActivity = {
  activity: PendingActivity;
  controller: AbortController;
  timeout: ReturnType<typeof setTimeout>;
};

const MAX_PENDING_ACTIVITIES = 100;
const REQUEST_TIMEOUT_MS = 10_000;
const pendingActivities: PendingActivity[] = [];
let inFlightActivity: InFlightActivity | undefined;

/**
 * Queues an online activity in memory, starting delivery immediately when idle.
 * The returned promise acknowledges delivery, not just admission to the queue.
 * Callers must keep this work detached from camper-facing challenge workflows.
 */
export function recordClientActivity(
  eventType: ClientActivityEventType,
  details: { subjectId?: string; url?: string } = {}
): Promise<ClientActivityResult | undefined> {
  if (typeof navigator === 'undefined' || !navigator.onLine) {
    clearClientActivityQueue();
    return Promise.resolve(undefined);
  }

  // Drop new events rather than grow memory indefinitely during an outage.
  if (pendingActivities.length >= MAX_PENDING_ACTIVITIES) {
    return Promise.resolve(undefined);
  }

  return new Promise(resolve => {
    pendingActivities.push({
      body: { eventId: crypto.randomUUID(), eventType, ...details },
      resolve
    });
    processActivityQueue();
  });
}

/** Discards unsent events and cancels delivery on disconnect or account change. */
export function clearClientActivityQueue(): void {
  for (const activity of pendingActivities.splice(0))
    activity.resolve(undefined);

  const request = inFlightActivity;
  if (!request) return;
  inFlightActivity = undefined;
  clearTimeout(request.timeout);
  request.controller.abort();
  request.activity.resolve(undefined);
}

function processActivityQueue(): void {
  if (inFlightActivity) return;
  if (typeof navigator === 'undefined' || !navigator.onLine) {
    clearClientActivityQueue();
    return;
  }

  const activity = pendingActivities.shift();
  if (!activity) return;

  const request: InFlightActivity = {
    activity,
    controller: new AbortController(),
    timeout: setTimeout(() => {
      request.controller.abort();
      finishActivity(request);
    }, REQUEST_TIMEOUT_MS)
  };
  inFlightActivity = request;
  void deliverActivity(request);
}

async function deliverActivity(request: InFlightActivity): Promise<void> {
  let result: ClientActivityResult | undefined;
  try {
    const { response } = await postActivity(
      request.activity.body,
      request.controller.signal
    );
    // An old account's response must not update the new account's timer/resume.
    if (inFlightActivity !== request) return;
    result = { recorded: response.ok };

    if (
      response.ok &&
      meaningfulClientActivityEventTypes.has(request.activity.body.eventType)
    ) {
      signalMeaningfulActivity();
    }
  } catch {
    // Best effort only: failed events are discarded, never retried or persisted.
  } finally {
    finishActivity(request, result);
  }
}

function finishActivity(
  request: InFlightActivity,
  result?: ClientActivityResult
): void {
  if (inFlightActivity !== request) return;
  clearTimeout(request.timeout);
  inFlightActivity = undefined;
  request.activity.resolve(result);
  processActivityQueue();
}

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
