import type { RawAttributes } from '../../attributes';
import type { Client } from '../../client';
import type { SerializedStreamedSpan, Span, StreamedSpanJSON } from '../../types/span';
export type SerializedStreamedSpanWithSegmentSpan = SerializedStreamedSpan & {
    _segmentSpan: Span;
};
/**
 * Captures a span and returns a JSON representation to be enqueued for sending.
 *
 * IMPORTANT: This function converts the span to JSON immediately to avoid writing
 * to an already-ended OTel span instance (which is blocked by the OTel Span class).
 *
 * @returns the final serialized span with a reference to its segment span. This reference
 * is needed later on to compute the DSC for the span envelope.
 */
export declare function captureSpan(span: Span, client: Client): SerializedStreamedSpanWithSegmentSpan;
/**
 * Safely set attributes on a span JSON.
 * If an attribute already exists, it will not be overwritten.
 */
export declare function safeSetSpanJSONAttributes(spanJSON: StreamedSpanJSON, newAttributes: RawAttributes<Record<string, unknown>>): void;
/**
 * Apply a user-provided beforeSendSpan callback to a span JSON.
 */
export declare function applyBeforeSendSpanCallback(span: StreamedSpanJSON, beforeSendSpan: (span: StreamedSpanJSON) => StreamedSpanJSON): StreamedSpanJSON;
/**
 * Infer and backfill span data from OTel semantic conventions.
 * This mirrors what the `SentrySpanExporter` does for non-streamed spans via `getSpanData`/`inferSpanData`.
 * Streamed spans skip the exporter, so we do the inference here during capture.
 *
 * Backfills: `sentry.op`, `sentry.source`, and `name` (description).
 * Uses `safeSetSpanJSONAttributes` so explicitly set attributes are never overwritten.
 */
/** Exported only for tests. */
export declare function inferSpanDataFromOtelAttributes(spanJSON: StreamedSpanJSON, spanKind?: number): void;
//# sourceMappingURL=captureSpan.d.ts.map