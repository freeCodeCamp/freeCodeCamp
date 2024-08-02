import { randomBytes, createHash } from 'crypto';
import { type TypeBoxTypeProvider } from '@fastify/type-provider-typebox';
import {
  type FastifyRequest,
  type FastifySchema,
  type RawRequestDefaultExpression,
  type RawServerDefault,
  type RouteGenericInterface
} from 'fastify';

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

export type UpdateReqType<Schema extends FastifySchema> = FastifyRequest<
  RouteGenericInterface,
  RawServerDefault,
  RawRequestDefaultExpression<RawServerDefault>,
  Schema,
  TypeBoxTypeProvider
>;
