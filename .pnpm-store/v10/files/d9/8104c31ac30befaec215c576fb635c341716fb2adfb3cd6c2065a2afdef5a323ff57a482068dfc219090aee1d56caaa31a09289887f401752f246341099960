/**
 * SpanContext represents Span state that must propagate to descendant Spans
 * and across process boundaries.
 *
 * SpanContext is logically divided into two pieces: the user-level "Baggage"
 * (see setBaggageItem and getBaggageItem) that propagates across Span
 * boundaries and any Tracer-implementation-specific fields that are needed to
 * identify or otherwise contextualize the associated Span instance (e.g., a
 * <trace_id, span_id, sampled> tuple).
 */
export class SpanContext {
    // The SpanContext is entirely implementation dependent

    /**
     * Returns a string representation of the implementation internal trace ID.
     *
     * @returns {string}
     */
    toTraceId(): string {
        return '';
    }

    /**
     * Returns a string representation of the implementation internal span ID.
     *
     * @returns {string}
     */
    toSpanId(): string {
        return '';
    }
}

export default SpanContext;
