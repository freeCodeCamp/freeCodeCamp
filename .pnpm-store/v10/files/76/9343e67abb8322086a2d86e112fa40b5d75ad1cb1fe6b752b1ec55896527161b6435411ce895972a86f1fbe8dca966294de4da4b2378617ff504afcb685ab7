import type { Context, Exception, HrTime, Link, Span as APISpan, SpanOptions as APISpanOptions, Attributes, AttributeValue, SpanContext, SpanKind, SpanStatus, TimeInput } from '@opentelemetry/api';
import type { InstrumentationScope } from '@opentelemetry/core';
import type { Resource } from '@opentelemetry/resources';
import type { ReadableSpan } from './export/ReadableSpan';
import type { SpanProcessor } from './SpanProcessor';
import type { TimedEvent } from './TimedEvent';
import type { SpanLimits } from './types';
import type { InspectFn, InspectStylizeOptions } from './inspect';
import { inspectCustom } from './inspect';
/**
 * This type provides the properties of @link{ReadableSpan} at the same time
 * of the Span API
 */
export type Span = APISpan & ReadableSpan;
type SpanOptions = Omit<APISpanOptions, 'root'> & {
    resource: Resource;
    scope: InstrumentationScope;
    context: Context;
    spanContext: SpanContext;
    name: string;
    kind: SpanKind;
    parentSpanContext?: SpanContext;
    spanLimits: SpanLimits;
    spanProcessor: SpanProcessor;
    recordEndMetrics?: () => void;
};
/**
 * This class represents a span.
 */
export declare class SpanImpl implements Span {
    private readonly _spanContext;
    readonly kind: SpanKind;
    readonly parentSpanContext?: SpanContext;
    readonly attributes: Attributes;
    readonly links: Link[];
    readonly events: TimedEvent[];
    readonly startTime: HrTime;
    readonly resource: Resource;
    readonly instrumentationScope: InstrumentationScope;
    private _droppedAttributesCount;
    private _droppedEventsCount;
    private _droppedLinksCount;
    private _attributesCount;
    name: string;
    status: SpanStatus;
    endTime: HrTime;
    private _ended;
    private _duration;
    private readonly _spanProcessor;
    private readonly _spanLimits;
    private readonly _attributeValueLengthLimit;
    private readonly _recordEndMetrics?;
    private readonly _performanceStartTime;
    private readonly _performanceOffset;
    private readonly _startTimeProvided;
    /**
     * Constructs a new SpanImpl instance.
     */
    constructor(opts: SpanOptions);
    spanContext(): SpanContext;
    setAttribute(key: string, value?: AttributeValue): this;
    setAttributes(attributes: Attributes): this;
    /**
     *
     * @param name Span Name
     * @param [attributesOrStartTime] Span attributes or start time
     *     if type is {@type TimeInput} and 3rd param is undefined
     * @param [timeStamp] Specified time stamp for the event
     */
    addEvent(name: string, attributesOrStartTime?: Attributes | TimeInput, timeStamp?: TimeInput): this;
    addLink(link: Link): this;
    addLinks(links: Link[]): this;
    setStatus(status: SpanStatus): this;
    updateName(name: string): this;
    end(endTime?: TimeInput): void;
    private _getTime;
    isRecording(): boolean;
    recordException(exception: Exception, time?: TimeInput): void;
    get duration(): HrTime;
    get ended(): boolean;
    get droppedAttributesCount(): number;
    get droppedEventsCount(): number;
    get droppedLinksCount(): number;
    private _isSpanEnded;
    private _truncateToLimitUtil;
    /**
     * If the given attribute value is of type string and has more characters than given {@code attributeValueLengthLimit} then
     * return string with truncated to {@code attributeValueLengthLimit} characters
     *
     * If the given attribute value is array of strings then
     * return new array of strings with each element truncated to {@code attributeValueLengthLimit} characters
     *
     * Otherwise return same Attribute {@code value}
     *
     * @param value Attribute value
     * @returns truncated attribute value if required, otherwise same value
     */
    private _truncateToSize;
    [inspectCustom](depth: number, options: InspectStylizeOptions | undefined, inspect: InspectFn | undefined): unknown;
}
export {};
//# sourceMappingURL=Span.d.ts.map