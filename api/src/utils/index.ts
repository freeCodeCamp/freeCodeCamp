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

/* eslint-disable jsdoc/require-description-complete-sentence */
/**
 * Wrapper around a promise to catch errors and return them as part of the promise.
 *
 * This is most useful to prevent callback / try...catch hell.
 *
 * ## Example:
 *
 * ```ts
 * const maybeWhatIWant = await mapErr(
 *   this.prisma.whatIWantCollection.create({
 *     data: {}
 *   })
 * );
 *
 * if (maybeWhatIWant.error !== null) {
 *   void reply.code(500);
 *   return reply.send('Unable to generate exam, due to: ' +
 *     JSON.stringify(maybeWhatIWant.error)
 *   );
 * }
 *
 * const whatIWant = maybeWhatIWant.data;
 * ```
 *
 * @param promise - any promise to be tried.
 * @returns a promise with either the data or the caught error
 */
export async function mapErr<T>(promise: Promise<T>): Promise<Result<T>> {
  try {
    return { error: null, data: await promise };
  } catch (e) {
    assertNotNull(e);
    return { error: e, data: null };
  }
}

/**
 * Wrapper around a synchronise function to catch throws and return them as part of the value.
 *
 * This is most useful to prevent try...catch hell.
 *
 * ## Example:
 *
 * ```ts
 * const maybeWhatIWant = await syncMapErr(
 *   () => chai.assert.deepEqual({}, {})
 * );
 *
 * if (maybeWhatIWant.error !== null) {
 *   void reply.code(500);
 *   return reply.send('Unable to generate exam, due to: ' +
 *     JSON.stringify(maybeWhatIWant.error)
 *   );
 * }
 *
 * const whatIWant = maybeWhatIWant.data;
 * ```
 *
 * @param fn - any function to be tried.
 * @returns the data or the caught error
 */
export function syncMapErr<T>(fn: () => T): Result<T> {
  try {
    return { error: null, data: fn() };
  } catch (e) {
    assertNotNull(e);
    return { error: e, data: null };
  }
}

export type Result<T> =
  | { error: null; data: T }
  | { error: NonNullable<unknown>; data: null };

/**
 * Asserts the given value is not null or undefined.
 *
 * @param value - The value to assert.
 */
function assertNotNull<T>(value: T): asserts value is NonNullable<T> {
  if (value === null || value === undefined) {
    throw new Error('Unreachable. Value should not be null or undefined.');
  }
}
