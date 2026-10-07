import type { EventDropReason } from '../types/clientreport';
import type { SentrySpanArguments, Span, SpanAttributes, SpanAttributeValue, SpanContextData, SpanTimeInput } from '../types/span';
import type { SpanStatus } from '../types/spanStatus';
interface SentryNonRecordingSpanArguments extends SentrySpanArguments {
    dropReason?: EventDropReason;
}
/**
 * A Sentry Span that is non-recording, meaning it will not be sent to Sentry.
 */
export declare class SentryNonRecordingSpan implements Span {
    private _traceId;
    private _spanId;
    /**
     * Reason why this span was dropped, if applicable ('ignored' or 'sample_rate').
     * Used to propagate the correct client report outcome to descendant spans
     * when span streaming is enabled.
     */
    dropReason?: EventDropReason;
    constructor(spanContext?: SentryNonRecordingSpanArguments);
    /** @inheritdoc */
    spanContext(): SpanContextData;
    /** @inheritdoc */
    end(_timestamp?: SpanTimeInput): void;
    /** @inheritdoc */
    setAttribute(_key: string, _value: SpanAttributeValue | undefined): this;
    /** @inheritdoc */
    setAttributes(_values: SpanAttributes): this;
    /** @inheritdoc */
    setStatus(_status: SpanStatus): this;
    /** @inheritdoc */
    updateName(_name: string): this;
    /** @inheritdoc */
    isRecording(): boolean;
    /** @inheritdoc */
    addEvent(_name: string, _attributesOrStartTime?: SpanAttributes | SpanTimeInput, _startTime?: SpanTimeInput): this;
    /** @inheritDoc */
    addLink(_link: unknown): this;
    /** @inheritDoc */
    addLinks(_links: unknown[]): this;
    /**
     * This should generally not be used,
     * but we need it for being compliant with the OTEL Span interface.
     *
     * @hidden
     * @internal
     */
    recordException(_exception: unknown, _time?: number | undefined): void;
}
export {};
//# sourceMappingURL=sentryNonRecordingSpan.d.ts.map