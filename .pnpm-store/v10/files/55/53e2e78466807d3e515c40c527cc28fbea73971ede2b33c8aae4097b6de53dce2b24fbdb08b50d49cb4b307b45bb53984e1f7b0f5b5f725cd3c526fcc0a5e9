import type { SpanExporter } from './SpanExporter';
import type { ReadableSpan } from './ReadableSpan';
import type { ExportResult } from '@opentelemetry/core';
/**
 * This is implementation of {@link SpanExporter} that prints spans to the
 * console. This class can be used for diagnostic purposes.
 *
 * NOTE: This {@link SpanExporter} is intended for diagnostics use only, output rendered to the console may change at any time.
 */
export declare class ConsoleSpanExporter implements SpanExporter {
    /**
     * Export spans.
     * @param spans
     * @param resultCallback
     */
    export(spans: ReadableSpan[], resultCallback: (result: ExportResult) => void): void;
    /**
     * Shutdown the exporter.
     */
    shutdown(): Promise<void>;
    /**
     * Exports any pending spans in exporter
     */
    forceFlush(): Promise<void>;
    /**
     * converts span info into more readable format
     * @param span
     */
    private _exportInfo;
    /**
     * Showing spans in console
     * @param spans
     * @param done
     */
    private _sendSpans;
}
//# sourceMappingURL=ConsoleSpanExporter.d.ts.map