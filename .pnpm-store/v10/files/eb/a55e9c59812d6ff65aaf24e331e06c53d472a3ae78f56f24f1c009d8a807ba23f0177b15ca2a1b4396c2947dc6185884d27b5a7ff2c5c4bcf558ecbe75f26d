import type { Context } from '../context/types';
import type { Span } from './span';
import type { SpanContext } from './span_context';
/**
 * Return the span if one exists
 *
 * @param context context to get span from
 */
export declare function getSpan(context: Context): Span | undefined;
/**
 * Gets the span from the current context, if one exists.
 */
export declare function getActiveSpan(): Span | undefined;
/**
 * Set the span on a context
 *
 * @param context context to use as parent
 * @param span span to set active
 */
export declare function setSpan(context: Context, span: Span): Context;
/**
 * Remove current span stored in the context
 *
 * @param context context to delete span from
 */
export declare function deleteSpan(context: Context): Context;
/**
 * Wrap span context in a NoopSpan and set as span in a new
 * context
 *
 * @param context context to set active span on
 * @param spanContext span context to be wrapped
 */
export declare function setSpanContext(context: Context, spanContext: SpanContext): Context;
/**
 * Get the span context of the span if it exists.
 *
 * @param context context to get values from
 */
export declare function getSpanContext(context: Context): SpanContext | undefined;
//# sourceMappingURL=context-utils.d.ts.map