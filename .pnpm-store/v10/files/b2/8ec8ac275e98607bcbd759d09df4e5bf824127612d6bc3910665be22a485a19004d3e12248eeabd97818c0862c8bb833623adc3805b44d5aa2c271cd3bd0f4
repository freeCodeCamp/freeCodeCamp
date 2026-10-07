import { SamplingDecision } from './Sampler';
import { ATTR_OTEL_SPAN_PARENT_ORIGIN, ATTR_OTEL_SPAN_SAMPLING_RESULT, METRIC_OTEL_SDK_SPAN_LIVE, METRIC_OTEL_SDK_SPAN_STARTED, } from './semconv';
/**
 * Generates `otel.sdk.span.*` metrics.
 * https://opentelemetry.io/docs/specs/semconv/otel/sdk-metrics/#span-metrics
 */
export class TracerMetrics {
    startedSpans;
    liveSpans;
    constructor(meter) {
        this.startedSpans = meter.createCounter(METRIC_OTEL_SDK_SPAN_STARTED, {
            unit: '{span}',
            description: 'The number of created spans.',
        });
        this.liveSpans = meter.createUpDownCounter(METRIC_OTEL_SDK_SPAN_LIVE, {
            unit: '{span}',
            description: 'The number of currently live spans.',
        });
    }
    startSpan(parentSpanCtx, samplingDecision) {
        const samplingDecisionStr = samplingDecisionToString(samplingDecision);
        this.startedSpans.add(1, {
            [ATTR_OTEL_SPAN_PARENT_ORIGIN]: parentOrigin(parentSpanCtx),
            [ATTR_OTEL_SPAN_SAMPLING_RESULT]: samplingDecisionStr,
        });
        if (samplingDecision === SamplingDecision.NOT_RECORD) {
            return () => { };
        }
        const liveSpanAttributes = {
            [ATTR_OTEL_SPAN_SAMPLING_RESULT]: samplingDecisionStr,
        };
        this.liveSpans.add(1, liveSpanAttributes);
        return () => {
            this.liveSpans.add(-1, liveSpanAttributes);
        };
    }
}
function parentOrigin(parentSpanContext) {
    if (!parentSpanContext) {
        return 'none';
    }
    if (parentSpanContext.isRemote) {
        return 'remote';
    }
    return 'local';
}
function samplingDecisionToString(decision) {
    switch (decision) {
        case SamplingDecision.RECORD_AND_SAMPLED:
            return 'RECORD_AND_SAMPLE';
        case SamplingDecision.RECORD:
            return 'RECORD_ONLY';
        case SamplingDecision.NOT_RECORD:
            return 'DROP';
    }
}
//# sourceMappingURL=TracerMetrics.js.map