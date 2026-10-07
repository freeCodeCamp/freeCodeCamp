import * as api from '@opentelemetry/api';
import type { InstrumentationScope } from '@opentelemetry/core';
import type { GeneralLimits, SpanLimits, TracerConfig } from './types';
import type { SpanProcessor } from './SpanProcessor';
import type { Resource } from '@opentelemetry/resources';
import type { InspectFn, InspectStylizeOptions } from './inspect';
import { inspectCustom } from './inspect';
/**
 * This class represents a basic tracer.
 */
export declare class Tracer implements api.Tracer {
    private readonly _sampler;
    private readonly _generalLimits;
    private readonly _spanLimits;
    private readonly _idGenerator;
    readonly instrumentationScope: InstrumentationScope;
    private readonly _resource;
    private readonly _spanProcessor;
    private readonly _tracerMetrics;
    /**
     * Constructs a new Tracer instance.
     */
    constructor(instrumentationScope: InstrumentationScope, config: TracerConfig, resource: Resource, spanProcessor: SpanProcessor);
    /**
     * Starts a new Span or returns the default NoopSpan based on the sampling
     * decision.
     */
    startSpan(name: string, options?: api.SpanOptions, context?: api.Context): api.Span;
    /**
     * Starts a new {@link Span} and calls the given function passing it the
     * created span as first argument.
     * Additionally the new span gets set in context and this context is activated
     * for the duration of the function call.
     *
     * **Important**: The callback function is responsible for calling `span.end()`
     * to finish the span. Unlike some other OpenTelemetry implementations, the span
     * is NOT automatically ended when the callback returns. If `span.end()` is not
     * called, the span will never be exported and will be silently lost.
     *
     * @param name The name of the span
     * @param [options] SpanOptions used for span creation
     * @param [context] Context to use to extract parent
     * @param fn function called in the context of the span and receives the newly created span as an argument
     * @returns return value of fn
     * @example
     *   const something = tracer.startActiveSpan('op', span => {
     *     try {
     *       do some work
     *       span.setStatus({code: SpanStatusCode.OK});
     *       return something;
     *     } catch (err) {
     *       span.setStatus({
     *         code: SpanStatusCode.ERROR,
     *         message: err.message,
     *       });
     *       throw err;
     *     } finally {
     *       span.end();
     *     }
     *   });
     * @example
     *   const span = tracer.startActiveSpan('op', span => {
     *     try {
     *       do some work
     *       return span;
     *     } catch (err) {
     *       span.setStatus({
     *         code: SpanStatusCode.ERROR,
     *         message: err.message,
     *       });
     *       throw err;
     *     }
     *   });
     *   do some more work
     *   span.end();
     */
    startActiveSpan<F extends (span: api.Span) => ReturnType<F>>(name: string, fn: F): ReturnType<F>;
    startActiveSpan<F extends (span: api.Span) => ReturnType<F>>(name: string, opts: api.SpanOptions, fn: F): ReturnType<F>;
    startActiveSpan<F extends (span: api.Span) => ReturnType<F>>(name: string, opts: api.SpanOptions, ctx: api.Context, fn: F): ReturnType<F>;
    /** Returns the active {@link GeneralLimits}. */
    getGeneralLimits(): GeneralLimits;
    /** Returns the active {@link SpanLimits}. */
    getSpanLimits(): SpanLimits;
    [inspectCustom](depth: number, options: InspectStylizeOptions | undefined, inspect: InspectFn | undefined): unknown;
}
//# sourceMappingURL=Tracer.d.ts.map