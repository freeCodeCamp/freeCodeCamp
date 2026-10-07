import type { Meter, SpanContext } from '@opentelemetry/api';
import { SamplingDecision } from './Sampler';
/**
 * Generates `otel.sdk.span.*` metrics.
 * https://opentelemetry.io/docs/specs/semconv/otel/sdk-metrics/#span-metrics
 */
export declare class TracerMetrics {
    private readonly startedSpans;
    private readonly liveSpans;
    constructor(meter: Meter);
    startSpan(parentSpanCtx: SpanContext | undefined, samplingDecision: SamplingDecision): () => void;
}
//# sourceMappingURL=TracerMetrics.d.ts.map