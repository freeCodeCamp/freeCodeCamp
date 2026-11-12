import { postActivity } from './ajax';

export type ClientActivityResult = {
  recorded: boolean;
};

/** Records a successful challenge submission while online. */
export async function recordClientActivity(
  subjectId: string,
  url: string
): Promise<ClientActivityResult | undefined> {
  if (typeof navigator === 'undefined' || !navigator.onLine) return;

  try {
    const { response } = await postActivity({
      eventId: crypto.randomUUID(),
      eventType: 'challenge_submit',
      subjectId,
      url
    });

    return { recorded: response.ok };
  } catch {
    return;
  }
}
