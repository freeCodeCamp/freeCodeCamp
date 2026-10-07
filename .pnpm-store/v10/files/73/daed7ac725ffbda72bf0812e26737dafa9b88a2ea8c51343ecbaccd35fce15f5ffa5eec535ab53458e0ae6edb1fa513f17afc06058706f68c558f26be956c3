import { Client } from '../../client';
import { SerializedStreamedSpanWithSegmentSpan } from './captureSpan';
export interface SpanBufferOptions {
    /**
     * Max spans per trace before auto-flush
     * Must not exceed 1000.
     *
     * @default 1_000
     */
    maxSpanLimit?: number;
    /**
     * Per-trace flush timeout in ms. A timeout is started when a trace bucket is first created
     * and fires flush() for that specific trace when it expires.
     * Must be greater than 0.
     *
     * @default 5_000
     */
    flushInterval?: number;
    /**
     * Max accumulated byte weight of spans per trace before auto-flush.
     * Size is estimated, not exact. Uses 2 bytes per character for strings (UTF-16).
     *
     * @default 5_000_000 (5 MB)
     */
    maxTraceWeightInBytes?: number;
}
/**
 * A buffer for serialized streamed span JSON objects that flushes them to Sentry in Span v2 envelopes.
 * Handles per-trace timeout-based flushing, size thresholds, and graceful shutdown.
 * Also handles computation of the Dynamic Sampling Context (DSC) for the trace, if it wasn't yet
 * frozen onto the segment span.
 *
 * For this, we need the reference to the segment span instance, from
 * which we compute the DSC. Doing this in the buffer ensures that we compute the DSC as late as possible,
 * allowing span name and data updates up to this point. Worth noting here that the segment span is likely
 * still active and modifyable when child spans are added to the buffer.
 */
export declare class SpanBuffer {
    private _traceBuckets;
    private _client;
    private _maxSpanLimit;
    private _flushInterval;
    private _maxTraceWeight;
    constructor(client: Client, options?: SpanBufferOptions);
    /**
     * Add a span to the buffer.
     */
    add(spanJSON: SerializedStreamedSpanWithSegmentSpan): void;
    /**
     * Drain and flush all buffered traces.
     */
    drain(): void;
    /**
     * Flush spans of a specific trace.
     * In contrast to {@link SpanBuffer.drain}, this method does not flush all traces, but only the one with the given traceId.
     */
    flush(traceId: string): void;
    private _removeTrace;
}
//# sourceMappingURL=spanBuffer.d.ts.map
