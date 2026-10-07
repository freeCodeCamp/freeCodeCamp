import type { RawAttributes } from '../attributes';
import type { TraceContext } from '../types/context';
import type { SpanLink, SpanLinkJSON } from '../types/link';
import type { SerializedStreamedSpan, Span, SpanAttributes, SpanJSON, SpanTimeInput, StreamedSpanJSON } from '../types/span';
import type { SpanStatus } from '../types/spanStatus';
export declare const TRACE_FLAG_NONE = 0;
export declare const TRACE_FLAG_SAMPLED = 1;
/**
 * Convert a span to a trace context, which can be sent as the `trace` context in an event.
 * By default, this will only include trace_id, span_id & parent_span_id.
 * If `includeAllData` is true, it will also include data, op, status & origin.
 */
export declare function spanToTransactionTraceContext(span: Span): TraceContext;
/**
 * Convert a span to a trace context, which can be sent as the `trace` context in a non-transaction event.
 */
export declare function spanToTraceContext(span: Span): TraceContext;
/**
 * Convert a Span to a Sentry trace header.
 */
export declare function spanToTraceHeader(span: Span): string;
/**
 * Convert a Span to a W3C traceparent header.
 */
export declare function spanToTraceparentHeader(span: Span): string;
/**
 *  Converts the span links array to a flattened version to be sent within an envelope.
 *
 *  If the links array is empty, it returns `undefined` so the empty value can be dropped before it's sent.
 */
export declare function convertSpanLinksForEnvelope(links?: SpanLink[]): SpanLinkJSON[] | undefined;
/**
 * Converts the span links array to a flattened version with serialized attributes for V2 spans.
 *
 * If the links array is empty, it returns `undefined` so the empty value can be dropped before it's sent.
 */
export declare function getStreamedSpanLinks(links?: SpanLink[]): SpanLinkJSON<RawAttributes<Record<string, unknown>>>[] | undefined;
/**
 * Convert a span time input into a timestamp in seconds.
 */
export declare function spanTimeInputToSeconds(input: SpanTimeInput | undefined): number;
/**
 * Convert a span to a JSON representation.
 */
export declare function spanToJSON(span: Span): SpanJSON;
/**
 * Convert a span to the intermediate {@link StreamedSpanJSON} representation.
 */
export declare function spanToStreamedSpanJSON(span: Span): StreamedSpanJSON;
/**
 * Converts a {@link StreamedSpanJSON} to a {@link SerializedSpan}.
 * This is the final serialized span format that is sent to Sentry.
 * The returned serilaized spans must not be consumed by users or SDK integrations.
 */
export declare function streamedSpanJsonToSerializedSpan(spanJson: StreamedSpanJSON): SerializedStreamedSpan;
/** Exported only for tests. */
export interface OpenTelemetrySdkTraceBaseSpan extends Span {
    attributes: SpanAttributes;
    startTime: SpanTimeInput;
    name: string;
    status: SpanStatus;
    endTime: SpanTimeInput;
    parentSpanId?: string;
    links?: SpanLink[];
}
/**
 * Returns true if a span is sampled.
 * In most cases, you should just use `span.isRecording()` instead.
 * However, this has a slightly different semantic, as it also returns false if the span is finished.
 * So in the case where this distinction is important, use this method.
 */
export declare function spanIsSampled(span: Span): boolean;
/** Get the status message to use for a JSON representation of a span. */
export declare function getStatusMessage(status: SpanStatus | undefined): string | undefined;
/**
 * Convert the various statuses to the simple ones expected by Sentry for streamed spans ('ok' is default).
 */
export declare function getSimpleStatusMessage(status: SpanStatus | undefined): 'ok' | 'error';
declare const CHILD_SPANS_FIELD = "_sentryChildSpans";
declare const ROOT_SPAN_FIELD = "_sentryRootSpan";
type SpanWithPotentialChildren = Span & {
    [CHILD_SPANS_FIELD]?: Set<Span>;
    [ROOT_SPAN_FIELD]?: Span;
};
/**
 * Adds an opaque child span reference to a span.
 */
export declare function addChildSpanToSpan(span: SpanWithPotentialChildren, childSpan: Span): void;
/** This is only used internally by Idle Spans. */
export declare function removeChildSpanFromSpan(span: SpanWithPotentialChildren, childSpan: Span): void;
/**
 * Returns an array of the given span and all of its descendants.
 */
export declare function getSpanDescendants(span: SpanWithPotentialChildren): Span[];
/**
 * Returns the root span of a given span.
 */
export declare const getRootSpan: typeof INTERNAL_getSegmentSpan;
/**
 * Returns the segment span of a given span.
 */
export declare function INTERNAL_getSegmentSpan(span: SpanWithPotentialChildren): Span;
/**
 * Returns the currently active span.
 */
export declare function getActiveSpan(): Span | undefined;
/**
 * Logs a warning once if `beforeSendSpan` is used to drop spans.
 */
export declare function showSpanDropWarning(): void;
/**
 * Updates the name of the given span and ensures that the span name is not
 * overwritten by the Sentry SDK.
 *
 * Use this function instead of `span.updateName()` if you want to make sure that
 * your name is kept. For some spans, for example root `http.server` spans the
 * Sentry SDK would otherwise overwrite the span name with a high-quality name
 * it infers when the span ends.
 *
 * Use this function in server code or when your span is started on the server
 * and on the client (browser). If you only update a span name on the client,
 * you can also use `span.updateName()` the SDK does not overwrite the name.
 *
 * @param span - The span to update the name of.
 * @param name - The name to set on the span.
 */
export declare function updateSpanName(span: Span, name: string): void;
export {};
//# sourceMappingURL=spanUtils.d.ts.map