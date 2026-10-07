import { Client } from '../client';
import { Scope } from '../scope';
import { DynamicSamplingContext } from '../types/envelope';
import { Span } from '../types/span';
/**
 * Freeze the given DSC on the given span.
 */
export declare function freezeDscOnSpan(span: Span, dsc: Partial<DynamicSamplingContext>): void;
/**
 * Creates a dynamic sampling context from a client.
 *
 * Dispatches the `createDsc` lifecycle hook as a side effect.
 */
export declare function getDynamicSamplingContextFromClient(trace_id: string, client: Client): DynamicSamplingContext;
/**
 * Get the dynamic sampling context for the currently active scopes.
 */
export declare function getDynamicSamplingContextFromScope(client: Client, scope: Scope): Partial<DynamicSamplingContext>;
/**
 * Creates a dynamic sampling context from a span (and client and scope)
 *
 * @param span the span from which a few values like the root span name and sample rate are extracted.
 *
 * @returns a dynamic sampling context
 */
export declare function getDynamicSamplingContextFromSpan(span: Span): Readonly<Partial<DynamicSamplingContext>>;
/**
 * Convert a Span to a baggage header.
 */
export declare function spanToBaggageHeader(span: Span): string | undefined;
//# sourceMappingURL=dynamicSamplingContext.d.ts.map
