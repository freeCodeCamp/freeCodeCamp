import type { Client } from '../client';
import type { PropagationContext } from '../types/tracing';
import type { TraceparentData } from '../types/transaction';
export declare const TRACEPARENT_REGEXP: RegExp;
/**
 * Extract transaction context data from a `sentry-trace` header.
 *
 * This is terrible naming but the function has nothing to do with the W3C traceparent header.
 * It can only parse the `sentry-trace` header and extract the "trace parent" data.
 *
 * @param traceparent Traceparent string
 *
 * @returns Object containing data from the header, or undefined if traceparent string is malformed
 */
export declare function extractTraceparentData(traceparent?: string): TraceparentData | undefined;
/**
 * Create a propagation context from incoming headers or
 * creates a minimal new one if the headers are undefined.
 */
export declare function propagationContextFromHeaders(sentryTrace: string | undefined, baggage: string | number | boolean | string[] | null | undefined): PropagationContext;
/**
 * Create sentry-trace header from span context values.
 */
export declare function generateSentryTraceHeader(traceId?: string | undefined, spanId?: string | undefined, sampled?: boolean): string;
/**
 * Creates a W3C traceparent header from the given trace and span ids.
 */
export declare function generateTraceparentHeader(traceId?: string | undefined, spanId?: string | undefined, sampled?: boolean): string;
/**
 * Determines whether a new trace should be continued based on the provided baggage org ID and the client's `strictTraceContinuation` option.
 * If the trace should not be continued, a new trace will be started.
 *
 * The result is dependent on the `strictTraceContinuation` option in the client.
 * See https://develop.sentry.dev/sdk/telemetry/traces/#stricttracecontinuation
 */
export declare function shouldContinueTrace(client: Client, baggageOrgId?: string): boolean;
//# sourceMappingURL=tracing.d.ts.map