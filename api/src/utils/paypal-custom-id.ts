// PayPal gives a subscription one custom_id, and it is shared with anything
// else that reads our subscriptions, so it carries a versioned payload rather
// than a bare user id.
const CUSTOM_ID_VERSION = 1;

/**
 * Encodes the donor a PayPal subscription belongs to.
 * @param userId The donor's user id.
 * @returns The value to send to PayPal as custom_id.
 */
export const encodeCustomId = (userId: string) =>
  Buffer.from(
    JSON.stringify({
      v: CUSTOM_ID_VERSION,
      u: userId
    })
  ).toString('base64url');

/**
 * Reads the donor out of a PayPal custom_id.
 *
 * Anything that is not one of our own payloads - a custom_id written by
 * another app, or a malformed one - has no donor.
 *
 * @param customId The custom_id as PayPal reports it.
 * @returns The donor's user id, or null.
 */
export const decodeCustomId = (customId: unknown) => {
  if (typeof customId !== 'string') return null;

  try {
    const payload = JSON.parse(
      Buffer.from(customId, 'base64url').toString('utf-8')
    ) as { u?: unknown; v?: unknown };

    if (payload.v !== CUSTOM_ID_VERSION) return null;

    return typeof payload.u === 'string' ? payload.u : null;
  } catch {
    return null;
  }
};
