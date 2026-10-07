import type { Context } from '@opentelemetry/api';
import type { Span } from '../Span';
import type { SpanProcessor } from '../SpanProcessor';
import type { ReadableSpan } from './ReadableSpan';
import type { SpanExporter } from './SpanExporter';
/**
 * An implementation of the {@link SpanProcessor} that converts the {@link Span}
 * to {@link ReadableSpan} and passes it to the configured exporter.
 *
 * Only spans that are sampled are converted.
 *
 * NOTE: This {@link SpanProcessor} exports every ended span individually instead of batching spans together, which causes significant performance overhead with most exporters. For production use, please consider using the {@link BatchSpanProcessor} instead.
 */
export declare class SimpleSpanProcessor implements SpanProcessor {
    private readonly _exporter;
    private _shutdownOnce;
    private _pendingExports;
    constructor(exporter: SpanExporter);
    forceFlush(): Promise<void>;
    onStart(_span: Span, _parentContext: Context): void;
    onEnd(span: ReadableSpan): void;
    private _doExport;
    shutdown(): Promise<void>;
    private _shutdown;
}
//# sourceMappingURL=SimpleSpanProcessor.d.ts.map