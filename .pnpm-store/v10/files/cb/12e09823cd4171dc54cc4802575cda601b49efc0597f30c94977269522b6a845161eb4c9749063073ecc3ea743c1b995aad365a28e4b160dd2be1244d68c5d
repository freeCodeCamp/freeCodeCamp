import type { Span, SpanOptions } from '../../';
/**
 * Options needed for span creation
 */
export interface SugaredSpanOptions extends SpanOptions {
    /**
     * function to overwrite default exception behavior to record the exception. No exceptions should be thrown in the function.
     * @param e Error which triggered this exception
     * @param span current span from context
     */
    onException?: (e: Error, span: Span) => void;
}
//# sourceMappingURL=SugaredOptions.d.ts.map