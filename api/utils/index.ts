import { randomBytes, createHash } from 'crypto';

export function base64URLEncode(buf: Buffer) {
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

// This is used for Fastify middleware, but is not exported from Fastify itself.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type NextFunction = (err?: any) => void;
