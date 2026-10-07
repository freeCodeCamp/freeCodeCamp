import type { Context } from '@opentelemetry/api';
import type { ReadableSpan, Span, SpanProcessor as SpanProcessorInterface } from '@opentelemetry/sdk-trace-base';
/**
 * Converts OpenTelemetry Spans to Sentry Spans and sends them to Sentry via
 * the Sentry SDK.
 */
export declare class SentrySpanProcessor implements SpanProcessorInterface {
    private _exporter;
    constructor(options?: {
        timeout?: number;
    });
    /**
     * @inheritDoc
     */
    forceFlush(): Promise<void>;
    /**
     * @inheritDoc
     */
    shutdown(): Promise<void>;
    /**
     * @inheritDoc
     */
    onStart(span: Span, parentContext: Context): void;
    /** @inheritDoc */
    onEnd(span: Span & ReadableSpan): void;
}
//# sourceMappingURL=spanProcessor.d.ts.map