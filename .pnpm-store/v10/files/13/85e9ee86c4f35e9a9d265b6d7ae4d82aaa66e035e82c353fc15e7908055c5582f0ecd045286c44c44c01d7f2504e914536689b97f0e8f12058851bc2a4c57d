import type { ExportResult } from '@opentelemetry/core';
import type { ReadableSpan } from './ReadableSpan';
/**
 * An interface that allows different tracing services to export recorded data
 * for sampled spans in their own format.
 *
 * To export data this MUST be register to the Tracer SDK using a optional
 * config.
 */
export interface SpanExporter {
    /**
     * Called to export sampled {@link ReadableSpan}s.
     * @param spans the list of sampled Spans to be exported.
     */
    export(spans: ReadableSpan[], resultCallback: (result: ExportResult) => void): void;
    /** Stops the exporter. */
    shutdown(): Promise<void>;
    /** Immediately export all spans */
    forceFlush?(): Promise<void>;
}
//# sourceMappingURL=SpanExporter.d.ts.map