import type { Exception } from '../common/Exception';
import type { TimeInput } from '../common/Time';
import type { SpanAttributes, SpanAttributeValue } from './attributes';
import type { SpanContext } from './span_context';
import type { SpanStatus } from './status';
import type { Link } from './link';
/**
 * An interface that represents a span. A span represents a single operation
 * within a trace. Examples of span might include remote procedure calls or a
 * in-process function calls to sub-components. A Trace has a single, top-level
 * "root" Span that in turn may have zero or more child Spans, which in turn
 * may have children.
 *
 * Spans are created by the {@link Tracer.startSpan} method.
 *
 * @since 1.0.0
 */
export interface Span {
    /**
     * Returns the {@link SpanContext} object associated with this Span.
     *
     * Get an immutable, serializable identifier for this span that can be used
     * to create new child spans. Returned SpanContext is usable even after the
     * span ends.
     *
     * @returns the SpanContext object associated with this Span.
     */
    spanContext(): SpanContext;
    /**
     * Sets an attribute to the span.
     *
     * Sets a single Attribute with the key and value passed as arguments.
     *
     * @param key the key for this attribute.
     * @param value the value for this attribute. Setting a value null or
     *              undefined is invalid and will result in undefined behavior.
     */
    setAttribute(key: string, value: SpanAttributeValue): this;
    /**
     * Sets attributes to the span.
     *
     * @param attributes the attributes that will be added.
     *                   null or undefined attribute values
     *                   are invalid and will result in undefined behavior.
     */
    setAttributes(attributes: SpanAttributes): this;
    /**
     * Adds an event to the Span.
     *
     * @param name the name of the event.
     * @param [attributesOrStartTime] the attributes that will be added; these are
     *     associated with this event. Can be also a start time
     *     if type is {@type TimeInput} and 3rd param is undefined
     * @param [startTime] start time of the event.
     */
    addEvent(name: string, attributesOrStartTime?: SpanAttributes | TimeInput, startTime?: TimeInput): this;
    /**
     * Adds a single link to the span.
     *
     * Links added after the creation will not affect the sampling decision.
     * It is preferred span links be added at span creation.
     *
     * @param link the link to add.
     */
    addLink(link: Link): this;
    /**
     * Adds multiple links to the span.
     *
     * Links added after the creation will not affect the sampling decision.
     * It is preferred span links be added at span creation.
     *
     * @param links the links to add.
     */
    addLinks(links: Link[]): this;
    /**
     * Sets the status of the span.
     *
     * By default, a span has status {@link SpanStatusCode.UNSET}.
     * Calling this method overrides that default.
     *
     * The status codes have a total order: `OK > ERROR > UNSET`.
     *
     * - Once {@link SpanStatusCode.OK} is set, any further attempts to change
     *   the status are ignored.
     * - Any attempt to set {@link SpanStatusCode.UNSET} is always ignored.
     *
     * The `message` field is only used when {@link SpanStatusCode.ERROR} is set.
     * For all other status codes, `message` is ignored.
     *
     * @param status The {@link SpanStatus} to set.
     */
    setStatus(status: SpanStatus): this;
    /**
     * Updates the Span name.
     *
     * This will override the name provided via {@link Tracer.startSpan}.
     *
     * Upon this update, any sampling behavior based on Span name will depend on
     * the implementation.
     *
     * @param name the Span name.
     */
    updateName(name: string): this;
    /**
     * Marks the end of Span execution.
     *
     * Call to End of a Span MUST not have any effects on child spans. Those may
     * still be running and can be ended later.
     *
     * Do not return `this`. The Span generally should not be used after it
     * is ended so chaining is not desired in this context.
     *
     * @param [endTime] the time to set as Span's end time. If not provided,
     *     use the current time as the span's end time.
     */
    end(endTime?: TimeInput): void;
    /**
     * Returns the flag whether this span will be recorded.
     *
     * @returns true if this Span is active and recording information like events
     *     with the `AddEvent` operation and attributes using `setAttributes`.
     */
    isRecording(): boolean;
    /**
     * Sets exception as a span event
     * @param exception the exception the only accepted values are string or Error
     * @param [time] the time to set as Span's event time. If not provided,
     *     use the current time.
     */
    recordException(exception: Exception, time?: TimeInput): void;
}
//# sourceMappingURL=span.d.ts.map