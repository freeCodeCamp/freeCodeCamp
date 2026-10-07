"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TracerMetrics = void 0;
const Sampler_1 = require("./Sampler");
const semconv_1 = require("./semconv");
/**
 * Generates `otel.sdk.span.*` metrics.
 * https://opentelemetry.io/docs/specs/semconv/otel/sdk-metrics/#span-metrics
 */
class TracerMetrics {
    startedSpans;
    liveSpans;
    constructor(meter) {
        this.startedSpans = meter.createCounter(semconv_1.METRIC_OTEL_SDK_SPAN_STARTED, {
            unit: '{span}',
            description: 'The number of created spans.',
        });
        this.liveSpans = meter.createUpDownCounter(semconv_1.METRIC_OTEL_SDK_SPAN_LIVE, {
            unit: '{span}',
            description: 'The number of currently live spans.',
        });
    }
    startSpan(parentSpanCtx, samplingDecision) {
        const samplingDecisionStr = samplingDecisionToString(samplingDecision);
        this.startedSpans.add(1, {
            [semconv_1.ATTR_OTEL_SPAN_PARENT_ORIGIN]: parentOrigin(parentSpanCtx),
            [semconv_1.ATTR_OTEL_SPAN_SAMPLING_RESULT]: samplingDecisionStr,
        });
        if (samplingDecision === Sampler_1.SamplingDecision.NOT_RECORD) {
            return () => { };
        }
        const liveSpanAttributes = {
            [semconv_1.ATTR_OTEL_SPAN_SAMPLING_RESULT]: samplingDecisionStr,
        };
        this.liveSpans.add(1, liveSpanAttributes);
        return () => {
            this.liveSpans.add(-1, liveSpanAttributes);
        };
    }
}
exports.TracerMetrics = TracerMetrics;
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
        case Sampler_1.SamplingDecision.RECORD_AND_SAMPLED:
            return 'RECORD_AND_SAMPLE';
        case Sampler_1.SamplingDecision.RECORD:
            return 'RECORD_ONLY';
        case Sampler_1.SamplingDecision.NOT_RECORD:
            return 'DROP';
    }
}
//# sourceMappingURL=TracerMetrics.js.map