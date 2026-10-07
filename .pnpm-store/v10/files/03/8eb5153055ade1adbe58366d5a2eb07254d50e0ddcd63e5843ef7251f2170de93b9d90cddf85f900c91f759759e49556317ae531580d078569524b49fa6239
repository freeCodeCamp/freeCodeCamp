import type { Context } from '@opentelemetry/api';
import type { ReadableSpan } from './export/ReadableSpan';
import type { Span } from './Span';
import type { SpanProcessor } from './SpanProcessor';
/**
 * Implementation of the {@link SpanProcessor} that simply forwards all
 * received events to a list of {@link SpanProcessor}s.
 */
export declare class MultiSpanProcessor implements SpanProcessor {
    private readonly _spanProcessors;
    constructor(spanProcessors: SpanProcessor[]);
    forceFlush(): Promise<void>;
    onStart(span: Span, context: Context): void;
    onEnding(span: Span): void;
    onEnd(span: ReadableSpan): void;
    shutdown(): Promise<void>;
}
//# sourceMappingURL=MultiSpanProcessor.d.ts.map