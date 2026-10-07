import { Span } from '@opentelemetry/api';
import { Client, continueTrace as baseContinueTrace, DynamicSamplingContext, Scope, TraceContext } from '@sentry/core';
import { OpenTelemetrySpanContext } from './types';
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
export declare function startSpan<T>(options: OpenTelemetrySpanContext, callback: (span: Span) => T): T;
/**
 * Similar to `Sentry.startSpan`. Wraps a function with a span, but does not finish the span
 * after the function is done automatically. You'll have to call `span.end()` or the `finish` function passed to the callback manually.
 *
 * The created span is the active span and will be used as parent by other spans created inside the function
 * and can be accessed via `Sentry.getActiveSpan()`, as long as the function is executed while the scope is active.
 *
 * You'll always get a span passed to the callback,
 * it may just be a non-recording span if the span is not sampled or if tracing is disabled.
 */
export declare function startSpanManual<T>(options: OpenTelemetrySpanContext, callback: (span: Span, finish: () => void) => T): T;
/**
 * Creates a span. This span is not set as active, so will not get automatic instrumentation spans
 * as children or be able to be accessed via `Sentry.getActiveSpan()`.
 *
 * If you want to create a span that is set as active, use {@link startSpan}.
 *
 * This function will always return a span,
 * it may just be a non-recording span if the span is not sampled or if tracing is disabled.
 */
export declare function startInactiveSpan(options: OpenTelemetrySpanContext): Span;
/**
 * Forks the current scope and sets the provided span as active span in the context of the provided callback. Can be
 * passed `null` to start an entirely new span tree.
 *
 * @param span Spans started in the context of the provided callback will be children of this span. If `null` is passed,
 * spans started within the callback will be root spans.
 * @param callback Execution context in which the provided span will be active. Is passed the newly forked scope.
 * @returns the value returned from the provided callback function.
 */
export declare function withActiveSpan<T>(span: Span | null, callback: (scope: Scope) => T): T;
/**
 * Continue a trace from `sentry-trace` and `baggage` values.
 * These values can be obtained from incoming request headers, or in the browser from `<meta name="sentry-trace">`
 * and `<meta name="baggage">` HTML tags.
 *
 * Spans started with `startSpan`, `startSpanManual` and `startInactiveSpan`, within the callback will automatically
 * be attached to the incoming trace.
 *
 * This is a custom version of `continueTrace` that is used in OTEL-powered environments.
 * It propagates the trace as a remote span, in addition to setting it on the propagation context.
 */
export declare function continueTrace<T>(options: Parameters<typeof baseContinueTrace>[0], callback: () => T): T;
/**
 * Start a new trace with a unique traceId, ensuring all spans created within the callback
 * share the same traceId.
 *
 * This is a custom version of `startNewTrace` for OTEL-powered environments.
 * It injects the new traceId as a remote span context into the OTEL context, so that
 * `startInactiveSpan` and `startSpan` pick it up correctly.
 */
export declare function startNewTrace<T>(callback: () => T): T;
/**
 * Get the trace context for a given scope.
 * We have a custom implementation here because we need an OTEL-specific way to get the span from a scope.
 */
export declare function getTraceContextForScope(client: Client, scope: Scope): [
    /*dynamicSamplingContext*/ Partial<DynamicSamplingContext>,
    /*traceContext*/ TraceContext
];
//# sourceMappingURL=trace.d.ts.map
