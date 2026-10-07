import type { Context } from '../context/types';
import type { Span } from './span';
import type { SpanOptions } from './SpanOptions';
/**
 * Tracer provides an interface for creating {@link Span}s.
 *
 * @since 1.0.0
 */
export interface Tracer {
    /**
     * Starts a new {@link Span}. Start the span without setting it on context.
     *
     * This method do NOT modify the current Context.
     *
     * @param name The name of the span
     * @param [options] SpanOptions used for span creation
     * @param [context] Context to use to extract parent
     * @returns Span The newly created span
     * @example
     *     const span = tracer.startSpan('op');
     *     span.setAttribute('key', 'value');
     *     span.end();
     */
    startSpan(name: string, options?: SpanOptions, context?: Context): Span;
    /**
     * Starts a new {@link Span} and calls the given function passing it the
     * created span as first argument.
     * Additionally the new span gets set in context and this context is activated
     * for the duration of the function call.
     *
     * @param name The name of the span
     * @param [options] SpanOptions used for span creation
     * @param [context] Context to use to extract parent
     * @param fn function called in the context of the span and receives the newly created span as an argument
     * @returns return value of fn
     * @example
     *     const something = tracer.startActiveSpan('op', span => {
     *       try {
     *         do some work
     *         span.setStatus({code: SpanStatusCode.OK});
     *         return something;
     *       } catch (err) {
     *         span.setStatus({
     *           code: SpanStatusCode.ERROR,
     *           message: err.message,
     *         });
     *         throw err;
     *       } finally {
     *         span.end();
     *       }
     *     });
     *
     * @example
     *     const span = tracer.startActiveSpan('op', span => {
     *       try {
     *         do some work
     *         return span;
     *       } catch (err) {
     *         span.setStatus({
     *           code: SpanStatusCode.ERROR,
     *           message: err.message,
     *         });
     *         throw err;
     *       }
     *     });
     *     do some more work
     *     span.end();
     */
    startActiveSpan<F extends (span: Span) => unknown>(name: string, fn: F): ReturnType<F>;
    startActiveSpan<F extends (span: Span) => unknown>(name: string, options: SpanOptions, fn: F): ReturnType<F>;
    startActiveSpan<F extends (span: Span) => unknown>(name: string, options: SpanOptions, context: Context, fn: F): ReturnType<F>;
}
//# sourceMappingURL=tracer.d.ts.map