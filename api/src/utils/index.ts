import { randomBytes, createHash } from 'crypto';
import { pick } from 'lodash';

/**
 * Utility to encode a buffer to a base64 URI.
 *
 * @param buf The buffer to encode.
 * @returns The encoded string.
 */
export function base64URLEncode(buf: Buffer): string {
  return buf
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
}
export const verifier = base64URLEncode(randomBytes(32));

function sha256(buf: Buffer) {
  return createHash('sha256').update(buf).digest();
}
export const challenge = base64URLEncode(sha256(Buffer.from(verifier)));

/**
 *
 * @param obj This is the full challenge object.
 * @returns This is the challenge object with only the id and completedDate.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fixPartiallyCompletedChallengeItem = (obj: any) =>
  pick(obj, ['id', 'completedDate']);
