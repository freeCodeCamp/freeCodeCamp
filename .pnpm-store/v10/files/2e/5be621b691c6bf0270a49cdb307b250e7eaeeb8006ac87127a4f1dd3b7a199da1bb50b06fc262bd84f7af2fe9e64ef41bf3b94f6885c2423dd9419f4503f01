import type { SpanAttributes } from './attributes';
import type { TraceState } from './trace_state';
/**
 * @deprecated use the one declared in @opentelemetry/sdk-trace-base instead.
 * A sampling decision that determines how a {@link Span} will be recorded
 * and collected.
 *
 * @since 1.0.0
 */
export declare enum SamplingDecision {
    /**
     * `Span.isRecording() === false`, span will not be recorded and all events
     * and attributes will be dropped.
     */
    NOT_RECORD = 0,
    /**
     * `Span.isRecording() === true`, but `Sampled` flag in {@link TraceFlags}
     * MUST NOT be set.
     */
    RECORD = 1,
    /**
     * `Span.isRecording() === true` AND `Sampled` flag in {@link TraceFlags}
     * MUST be set.
     */
    RECORD_AND_SAMPLED = 2
}
/**
 * @deprecated use the one declared in @opentelemetry/sdk-trace-base instead.
 * A sampling result contains a decision for a {@link Span} and additional
 * attributes the sampler would like to added to the Span.
 *
 * @since 1.0.0
 */
export interface SamplingResult {
    /**
     * A sampling decision, refer to {@link SamplingDecision} for details.
     */
    decision: SamplingDecision;
    /**
     * The list of attributes returned by SamplingResult MUST be immutable.
     * Caller may call {@link Sampler}.shouldSample any number of times and
     * can safely cache the returned value.
     */
    attributes?: Readonly<SpanAttributes>;
    /**
     * A {@link TraceState} that will be associated with the {@link Span} through
     * the new {@link SpanContext}. Samplers SHOULD return the TraceState from
     * the passed-in {@link Context} if they do not intend to change it. Leaving
     * the value undefined will also leave the TraceState unchanged.
     */
    traceState?: TraceState;
}
//# sourceMappingURL=SamplingResult.d.ts.map