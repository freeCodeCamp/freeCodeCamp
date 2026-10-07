import { SpanLink } from '../types/link';
import { SentrySpanArguments, Span, SpanAttributes, SpanAttributeValue, SpanContextData, SpanJSON, SpanTimeInput, StreamedSpanJSON } from '../types/span';
import { SpanStatus } from '../types/spanStatus';
import { TimedEvent } from '../types/timedEvent';
/**
 * Span contains all data about a span
 */
export declare class SentrySpan implements Span {
    protected _traceId: string;
    protected _spanId: string;
    protected _parentSpanId?: string | undefined;
    protected _sampled: boolean | undefined;
    protected _name?: string | undefined;
    protected _attributes: SpanAttributes;
    protected _links?: SpanLink[];
    /** Epoch timestamp in seconds when the span started. */
    protected _startTime: number;
    /** Epoch timestamp in seconds when the span ended. */
    protected _endTime?: number | undefined;
    /** Internal keeper of the status */
    protected _status?: SpanStatus;
    /** The timed events added to this span. */
    protected _events: TimedEvent[];
    /** if true, treat span as a standalone span (not part of a transaction) */
    private _isStandaloneSpan?;
    /**
     * You should never call the constructor manually, always use `Sentry.startSpan()`
     * or other span methods.
     * @internal
     * @hideconstructor
     * @hidden
     */
    constructor(spanContext?: SentrySpanArguments);
    /** @inheritDoc */
    addLink(link: SpanLink): this;
    /** @inheritDoc */
    addLinks(links: SpanLink[]): this;
    /**
     * This should generally not be used,
     * but it is needed for being compliant with the OTEL Span interface.
     *
     * @hidden
     * @internal
     */
    recordException(_exception: unknown, _time?: number | undefined): void;
    /** @inheritdoc */
    spanContext(): SpanContextData;
    /** @inheritdoc */
    setAttribute(key: string, value: SpanAttributeValue | undefined): this;
    /** @inheritdoc */
    setAttributes(attributes: SpanAttributes): this;
    /**
     * This should generally not be used,
     * but we need it for browser tracing where we want to adjust the start time afterwards.
     * USE THIS WITH CAUTION!
     *
     * @hidden
     * @internal
     */
    updateStartTime(timeInput: SpanTimeInput): void;
    /**
     * @inheritDoc
     */
    setStatus(value: SpanStatus): this;
    /**
     * @inheritDoc
     */
    updateName(name: string): this;
    /** @inheritdoc */
    end(endTimestamp?: SpanTimeInput): void;
    /**
     * Get JSON representation of this span.
     *
     * @hidden
     * @internal This method is purely for internal purposes and should not be used outside
     * of SDK code. If you need to get a JSON representation of a span,
     * use `spanToJSON(span)` instead.
     */
    getSpanJSON(): SpanJSON;
    /**
     * Get {@link StreamedSpanJSON} representation of this span.
     *
     * @hidden
     * @internal This method is purely for internal purposes and should not be used outside
     * of SDK code. If you need to get a JSON representation of a span,
     * use `spanToStreamedSpanJSON(span)` instead.
     */
    getStreamedSpanJSON(): StreamedSpanJSON;
    /** @inheritdoc */
    isRecording(): boolean;
    /**
     * @inheritdoc
     */
    addEvent(name: string, attributesOrStartTime?: SpanAttributes | SpanTimeInput, startTime?: SpanTimeInput): this;
    /**
     * This method should generally not be used,
     * but for now we need a way to publicly check if the `_isStandaloneSpan` flag is set.
     * USE THIS WITH CAUTION!
     * @internal
     * @hidden
     * @experimental
     */
    isStandaloneSpan(): boolean;
    /** Emit `spanEnd` when the span is ended. */
    private _onSpanEnded;
    /**
     * Finish the transaction & prepare the event to send to Sentry.
     */
    private _convertSpanToTransaction;
}
//# sourceMappingURL=sentrySpan.d.ts.map
