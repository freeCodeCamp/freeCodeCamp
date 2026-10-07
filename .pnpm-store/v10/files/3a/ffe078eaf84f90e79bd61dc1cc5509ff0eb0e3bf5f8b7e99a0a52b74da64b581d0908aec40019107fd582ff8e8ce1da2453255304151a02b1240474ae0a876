import type { Scope } from '../scope';
import type { Span } from '../types/span';
import type { StartSpanOptions } from '../types/startSpanOptions';
import { propagationContextFromHeaders } from '../utils/tracing';
export declare const SUPPRESS_TRACING_KEY = "__SENTRY_SUPPRESS_TRACING__";
/**
 * Wraps a function with a transaction/span and finishes the span after the function is done.
 * The created span is the active span and will be used as parent by other spans created inside the function
 * and can be accessed via `Sentry.getActiveSpan()`, as long as the function is executed while the scope is active.
 *
 * If you want to create a span that is not set as active, use {@link startInactiveSpan}.
 *
 * You'll always get a span passed to the callback,
 * it may just be a non-recording span if the span is not sampled or if tracing is disabled.
 */
export declare function startSpan<T>(options: StartSpanOptions, callback: (span: Span) => T): T;
/**
 * Similar to `Sentry.startSpan`. Wraps a function with a transaction/span, but does not finish the span
 * after the function is done automatically. Use `span.end()` to end the span.
 *
 * The created span is the active span and will be used as parent by other spans created inside the function
 * and can be accessed via `Sentry.getActiveSpan()`, as long as the function is executed while the scope is active.
 *
 * You'll always get a span passed to the callback,
 * it may just be a non-recording span if the span is not sampled or if tracing is disabled.
 */
export declare function startSpanManual<T>(options: StartSpanOptions, callback: (span: Span, finish: () => void) => T): T;
/**
 * Creates a span. This span is not set as active, so will not get automatic instrumentation spans
 * as children or be able to be accessed via `Sentry.getActiveSpan()`.
 *
 * If you want to create a span that is set as active, use {@link startSpan}.
 *
 * This function will always return a span,
 * it may just be a non-recording span if the span is not sampled or if tracing is disabled.
 */
export declare function startInactiveSpan(options: StartSpanOptions): Span;
/**
 * Continue a trace from `sentry-trace` and `baggage` values.
 * These values can be obtained from incoming request headers, or in the browser from `<meta name="sentry-trace">`
 * and `<meta name="baggage">` HTML tags.
 *
 * Spans started with `startSpan`, `startSpanManual` and `startInactiveSpan`, within the callback will automatically
 * be attached to the incoming trace.
 */
export declare const continueTrace: <V>(options: {
    sentryTrace: Parameters<typeof propagationContextFromHeaders>[0];
    baggage: Parameters<typeof propagationContextFromHeaders>[1];
}, callback: () => V) => V;
/**
 * Forks the current scope and sets the provided span as active span in the context of the provided callback. Can be
 * passed `null` to start an entirely new span tree.
 *
 * @param span Spans started in the context of the provided callback will be children of this span. If `null` is passed,
 * spans started within the callback will not be attached to a parent span.
 * @param callback Execution context in which the provided span will be active. Is passed the newly forked scope.
 * @returns the value returned from the provided callback function.
 */
export declare function withActiveSpan<T>(span: Span | null, callback: (scope: Scope) => T): T;
/** Suppress tracing in the given callback, ensuring no spans are generated inside of it. */
export declare function suppressTracing<T>(callback: () => T): T;
/**
 * Starts a new trace for the duration of the provided callback. Spans started within the
 * callback will be part of the new trace instead of a potentially previously started trace.
 *
 * Important: Only use this function if you want to override the default trace lifetime and
 * propagation mechanism of the SDK for the duration and scope of the provided callback.
 * The newly created trace will also be the root of a new distributed trace, for example if
 * you make http requests within the callback.
 * This function might be useful if the operation you want to instrument should not be part
 * of a potentially ongoing trace.
 *
 * Default behavior:
 * - Server-side: A new trace is started for each incoming request.
 * - Browser: A new trace is started for each page our route. Navigating to a new route
 *            or page will automatically create a new trace.
 */
export declare function startNewTrace<T>(callback: () => T): T;
//# sourceMappingURL=trace.d.ts.map