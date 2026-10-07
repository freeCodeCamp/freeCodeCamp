import type { Context } from '@opentelemetry/api';
import type { Span } from '../Span';
import type { SpanProcessor } from '../SpanProcessor';
import type { BufferConfig } from '../types';
import type { ReadableSpan } from './ReadableSpan';
import type { SpanExporter } from './SpanExporter';
/**
 * Implementation of the {@link SpanProcessor} that batches spans exported by
 * the SDK then pushes them to the exporter pipeline.
 */
export declare abstract class BatchSpanProcessorBase<T extends BufferConfig> implements SpanProcessor {
    private readonly _maxExportBatchSize;
    private readonly _maxQueueSize;
    private readonly _scheduledDelayMillis;
    private readonly _exportTimeoutMillis;
    private readonly _exporter;
    private _isExporting;
    private _finishedSpans;
    private _timer;
    private _shutdownOnce;
    private _droppedSpansCount;
    constructor(exporter: SpanExporter, config?: T);
    forceFlush(): Promise<void>;
    onStart(_span: Span, _parentContext: Context): void;
    onEnd(span: ReadableSpan): void;
    shutdown(): Promise<void>;
    private _shutdown;
    /** Add a span in the buffer. */
    private _addToBuffer;
    /**
     * Send all spans to the exporter respecting the batch size limit
     * This function is used only on forceFlush or shutdown,
     * for all other cases _flush should be used
     * */
    private _flushAll;
    private _flushOneBatch;
    private _maybeStartTimer;
    private _clearTimer;
    protected abstract onShutdown(): void;
}
//# sourceMappingURL=BatchSpanProcessorBase.d.ts.map