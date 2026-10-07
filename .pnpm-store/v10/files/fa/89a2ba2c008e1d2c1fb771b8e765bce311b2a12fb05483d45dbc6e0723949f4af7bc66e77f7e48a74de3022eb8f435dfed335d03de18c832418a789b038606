import type { ReadableSpan } from '@opentelemetry/sdk-trace-base';
import type { TransactionEvent } from '@sentry/core';
/**
 * A Sentry-specific exporter that converts OpenTelemetry Spans to Sentry Spans & Transactions.
 */
export declare class SentrySpanExporter {
    private _finishedSpanBuckets;
    private _finishedSpanBucketSize;
    private _spansToBucketEntry;
    private _lastCleanupTimestampInS;
    private _sentSpans;
    private _debouncedFlush;
    constructor(options?: {
        /** Lower bound of time in seconds until spans that are buffered but have not been sent as part of a transaction get cleared from memory. */
        timeout?: number;
    });
    /**
     * Export a single span.
     * This is called by the span processor whenever a span is ended.
     */
    export(span: ReadableSpan): void;
    /**
     * Try to flush any pending spans immediately.
     * This is called internally by the exporter (via _debouncedFlush),
     * but can also be triggered externally if we force-flush.
     */
    flush(): void;
    /**
     * Clear the exporter.
     * This is called when the span processor is shut down.
     */
    clear(): void;
    /**
     * Send the given spans, but only if they are part of a finished transaction.
     *
     * Returns the sent spans.
     * Spans remain unsent when their parent span is not yet finished.
     * This will happen regularly, as child spans are generally finished before their parents.
     * But it _could_ also happen because, for whatever reason, a parent span was lost.
     * In this case, we'll eventually need to clean this up.
     */
    private _maybeSend;
    /** Remove "expired" span id entries from the _sentSpans cache. */
    private _flushSentSpanCache;
    /** Check if a node is a completed root node or a node whose parent has already been sent */
    private _nodeIsCompletedRootNodeOrHasSentParent;
    /** Get all completed root nodes from a list of nodes */
    private _getCompletedRootNodes;
}
/** Exported only for tests. */
export declare function createTransactionForOtelSpan(span: ReadableSpan): TransactionEvent;
//# sourceMappingURL=spanExporter.d.ts.map