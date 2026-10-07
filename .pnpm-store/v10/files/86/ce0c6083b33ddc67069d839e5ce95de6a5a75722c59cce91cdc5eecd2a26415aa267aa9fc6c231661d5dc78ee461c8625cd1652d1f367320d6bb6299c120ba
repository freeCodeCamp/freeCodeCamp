import type { SugaredSpanOptions } from './SugaredOptions';
import type { Context, Span, Tracer } from '../../';
/**
 * return a new SugaredTracer created from the supplied one
 * @param tracer
 */
export declare function wrapTracer(tracer: Tracer): SugaredTracer;
export declare class SugaredTracer implements Tracer {
    private readonly _tracer;
    constructor(tracer: Tracer);
    startActiveSpan: Tracer['startActiveSpan'];
    startSpan: Tracer['startSpan'];
    /**
     * Starts a new {@link Span} and calls the given function passing it the
     * created span as first argument.
     * Additionally, the new span gets set in context and this context is activated
     * for the duration of the function call.
     * The span will be closed after the function has executed.
     * If an exception occurs, it is recorded, the status is set to ERROR and the exception is rethrown.
     *
     * @param name The name of the span
     * @param [options] SugaredSpanOptions used for span creation
     * @param [context] Context to use to extract parent
     * @param fn function called in the context of the span and receives the newly created span as an argument
     * @returns return value of fn
     * @example
     *     const something = tracer.withActiveSpan('op', span => {
     *      // do some work
     *     });
     * @example
     *     const something = await tracer.withActiveSpan('op', span => {
     *      // do some async work
     *     });
     */
    withActiveSpan<F extends (span: Span) => ReturnType<F>>(name: string, fn: F): ReturnType<F>;
    withActiveSpan<F extends (span: Span) => ReturnType<F>>(name: string, options: SugaredSpanOptions, fn: F): ReturnType<F>;
    withActiveSpan<F extends (span: Span) => ReturnType<F>>(name: string, options: SugaredSpanOptions, context: Context, fn: F): ReturnType<F>;
    /**
     * Starts a new {@link Span} and ends it after execution of fn without setting it on context.
     * The span will be closed after the function has executed.
     * If an exception occurs, it is recorded, the status is et to ERROR and rethrown.
     *
     * This method does NOT modify the current Context.
     *
     * @param name The name of the span
     * @param [options] SugaredSpanOptions used for span creation
     * @param [context] Context to use to extract parent
     * @param fn function called in the context of the span and receives the newly created span as an argument
     * @returns Span The newly created span
     * @example
     *     const something = tracer.withSpan('op', span => {
     *      // do some work
     *     });
     * @example
     *     const something = await tracer.withSpan('op', span => {
     *      // do some async work
     *     });
     */
    withSpan<F extends (span: Span) => ReturnType<F>>(name: string, fn: F): ReturnType<F>;
    withSpan<F extends (span: Span) => ReturnType<F>>(name: string, options: SugaredSpanOptions, fn: F): ReturnType<F>;
    withSpan<F extends (span: Span) => ReturnType<F>>(name: string, options: SugaredSpanOptions, context: Context, fn: F): ReturnType<F>;
    withSpan<F extends (span: Span) => ReturnType<F>>(name: string, options: SugaredSpanOptions, context: Context, fn: F): ReturnType<F>;
}
//# sourceMappingURL=SugaredTracer.d.ts.map