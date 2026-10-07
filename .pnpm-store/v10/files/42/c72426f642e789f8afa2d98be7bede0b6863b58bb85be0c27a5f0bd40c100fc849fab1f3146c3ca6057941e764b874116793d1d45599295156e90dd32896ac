import Reference from './reference';
import Span from './span';
import SpanContext from './span_context';
export interface SpanOptions {
    /**
     * a parent SpanContext (or Span, for convenience) that the newly-started
     * span will be the child of (per REFERENCE_CHILD_OF). If specified,
     * `references` must be unspecified.
     */
    childOf?: Span | SpanContext;
    /**
     * an array of Reference instances, each pointing to a causal parent
     * SpanContext. If specified, `fields.childOf` must be unspecified.
     */
    references?: Reference[];
    /**
     * set of key-value pairs which will be set as tags on the newly created
     * Span. Ownership of the object is passed to the created span for
     * efficiency reasons (the caller should not modify this object after
     * calling startSpan).
     */
    tags?: {
        [key: string]: any;
    };
    /**
     * a manually specified start time for the created Span object. The time
     * should be specified in milliseconds as Unix timestamp. Decimal value are
     * supported to represent time values with sub-millisecond accuracy.
     */
    startTime?: number;
}
/**
 * Tracer is the entry-point between the instrumentation API and the tracing
 * implementation.
 *
 * The default object acts as a no-op implementation.
 *
 * Note to implementators: derived classes can choose to directly implement the
 * methods in the "OpenTracing API methods" section, or optionally the subset of
 * underscore-prefixed methods to pick up the argument checking and handling
 * automatically from the base class.
 */
export declare class Tracer {
    /**
     * Starts and returns a new Span representing a logical unit of work.
     *
     * For example:
     *
     *     // Start a new (parentless) root Span:
     *     var parent = Tracer.startSpan('DoWork');
     *
     *     // Start a new (child) Span:
     *     var child = Tracer.startSpan('load-from-db', {
     *         childOf: parent.context(),
     *     });
     *
     *     // Start a new async (FollowsFrom) Span:
     *     var child = Tracer.startSpan('async-cache-write', {
     *         references: [
     *             opentracing.followsFrom(parent.context())
     *         ],
     *     });
     *
     * @param {string} name - the name of the operation (REQUIRED).
     * @param {SpanOptions} [options] - options for the newly created span.
     * @return {Span} - a new Span object.
     */
    startSpan(name: string, options?: SpanOptions): Span;
    /**
     * Injects the given SpanContext instance for cross-process propagation
     * within `carrier`. The expected type of `carrier` depends on the value of
     * `format.
     *
     * OpenTracing defines a common set of `format` values (see
     * FORMAT_TEXT_MAP, FORMAT_HTTP_HEADERS, and FORMAT_BINARY), and each has
     * an expected carrier type.
     *
     * Consider this pseudocode example:
     *
     *     var clientSpan = ...;
     *     ...
     *     // Inject clientSpan into a text carrier.
     *     var headersCarrier = {};
     *     Tracer.inject(clientSpan.context(), Tracer.FORMAT_HTTP_HEADERS, headersCarrier);
     *     // Incorporate the textCarrier into the outbound HTTP request header
     *     // map.
     *     Object.assign(outboundHTTPReq.headers, headersCarrier);
     *     // ... send the httpReq
     *
     * @param  {SpanContext} spanContext - the SpanContext to inject into the
     *         carrier object. As a convenience, a Span instance may be passed
     *         in instead (in which case its .context() is used for the
     *         inject()).
     * @param  {string} format - the format of the carrier.
     * @param  {any} carrier - see the documentation for the chosen `format`
     *         for a description of the carrier object.
     */
    inject(spanContext: SpanContext | Span, format: string, carrier: any): void;
    /**
     * Returns a SpanContext instance extracted from `carrier` in the given
     * `format`.
     *
     * OpenTracing defines a common set of `format` values (see
     * FORMAT_TEXT_MAP, FORMAT_HTTP_HEADERS, and FORMAT_BINARY), and each has
     * an expected carrier type.
     *
     * Consider this pseudocode example:
     *
     *     // Use the inbound HTTP request's headers as a text map carrier.
     *     var headersCarrier = inboundHTTPReq.headers;
     *     var wireCtx = Tracer.extract(Tracer.FORMAT_HTTP_HEADERS, headersCarrier);
     *     var serverSpan = Tracer.startSpan('...', { childOf : wireCtx });
     *
     * @param  {string} format - the format of the carrier.
     * @param  {any} carrier - the type of the carrier object is determined by
     *         the format.
     * @return {SpanContext}
     *         The extracted SpanContext, or null if no such SpanContext could
     *         be found in `carrier`
     */
    extract(format: string, carrier: any): SpanContext | null;
    protected _startSpan(name: string, fields: SpanOptions): Span;
    protected _inject(spanContext: SpanContext, format: string, carrier: any): void;
    protected _extract(format: string, carrier: any): SpanContext | null;
}
export default Tracer;
//# sourceMappingURL=tracer.d.ts.map