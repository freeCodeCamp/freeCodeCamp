/**
 * @module @opentelemetry/api
 */
export type { BaggageEntry, BaggageEntryMetadata, Baggage, } from './baggage/types';
export { baggageEntryMetadataFromString } from './baggage/utils';
export type { Exception } from './common/Exception';
export type { HrTime, TimeInput } from './common/Time';
export type { Attributes, AttributeValue } from './common/Attributes';
export { createContextKey, ROOT_CONTEXT } from './context/context';
export type { Context, ContextManager } from './context/types';
export type { ContextAPI } from './api/context';
export { DiagConsoleLogger } from './diag/consoleLogger';
export { DiagLogLevel } from './diag/types';
export type { DiagLogFunction, DiagLogger, ComponentLoggerOptions, DiagLoggerOptions, } from './diag/types';
export type { DiagAPI } from './api/diag';
export { createNoopMeter } from './metrics/NoopMeter';
export type { MeterOptions, Meter } from './metrics/Meter';
export type { MeterProvider } from './metrics/MeterProvider';
export { ValueType } from './metrics/Metric';
export type { Counter, Gauge, Histogram, MetricOptions, UpDownCounter, MetricAdvice, MetricAttributes, MetricAttributeValue, Observable, ObservableCounter, ObservableGauge, ObservableUpDownCounter, BatchObservableCallback, ObservableCallback, BatchObservableResult, ObservableResult, } from './metrics/Metric';
export type { MetricsAPI } from './api/metrics';
export { defaultTextMapGetter, defaultTextMapSetter, } from './propagation/TextMapPropagator';
export type { TextMapPropagator, TextMapSetter, TextMapGetter, } from './propagation/TextMapPropagator';
export type { PropagationAPI } from './api/propagation';
export type { SpanAttributes, SpanAttributeValue } from './trace/attributes';
export type { Link } from './trace/link';
export { ProxyTracer, type TracerDelegator } from './trace/ProxyTracer';
export { ProxyTracerProvider } from './trace/ProxyTracerProvider';
export type { Sampler } from './trace/Sampler';
export { SamplingDecision, type SamplingResult } from './trace/SamplingResult';
export type { SpanContext } from './trace/span_context';
export { SpanKind } from './trace/span_kind';
export type { Span } from './trace/span';
export type { SpanOptions } from './trace/SpanOptions';
export { type SpanStatus, SpanStatusCode } from './trace/status';
export { TraceFlags } from './trace/trace_flags';
export type { TraceState } from './trace/trace_state';
export { createTraceState } from './trace/internal/utils';
export type { TracerProvider } from './trace/tracer_provider';
export type { Tracer } from './trace/tracer';
export type { TracerOptions } from './trace/tracer_options';
export { isSpanContextValid, isValidTraceId, isValidSpanId, } from './trace/spancontext-utils';
export { INVALID_SPANID, INVALID_TRACEID, INVALID_SPAN_CONTEXT, } from './trace/invalid-span-constants';
export type { TraceAPI } from './api/trace';
import { context } from './context-api';
import { diag } from './diag-api';
import { metrics } from './metrics-api';
import { propagation } from './propagation-api';
import { trace } from './trace-api';
export { context, diag, metrics, propagation, trace };
declare const _default: {
    context: import("./api/context").ContextAPI;
    diag: import("./api/diag").DiagAPI;
    metrics: import("./api/metrics").MetricsAPI;
    propagation: import("./api/propagation").PropagationAPI;
    trace: import("./api/trace").TraceAPI;
};
export default _default;
//# sourceMappingURL=index.d.ts.map