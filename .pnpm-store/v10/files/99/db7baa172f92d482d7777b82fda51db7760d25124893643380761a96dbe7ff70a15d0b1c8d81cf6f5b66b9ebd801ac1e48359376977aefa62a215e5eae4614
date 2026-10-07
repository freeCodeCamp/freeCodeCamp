/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
export { baggageEntryMetadataFromString } from './baggage/utils';
// Context APIs
export { createContextKey, ROOT_CONTEXT } from './context/context';
// Diag APIs
export { DiagConsoleLogger } from './diag/consoleLogger';
export { DiagLogLevel } from './diag/types';
// Metrics APIs
export { createNoopMeter } from './metrics/NoopMeter';
export { ValueType } from './metrics/Metric';
// Propagation APIs
export { defaultTextMapGetter, defaultTextMapSetter, } from './propagation/TextMapPropagator';
export { ProxyTracer } from './trace/ProxyTracer';
// TODO: Remove ProxyTracerProvider export in the next major version.
export { ProxyTracerProvider } from './trace/ProxyTracerProvider';
export { SamplingDecision } from './trace/SamplingResult';
export { SpanKind } from './trace/span_kind';
export { SpanStatusCode } from './trace/status';
export { TraceFlags } from './trace/trace_flags';
export { createTraceState } from './trace/internal/utils';
export { isSpanContextValid, isValidTraceId, isValidSpanId, } from './trace/spancontext-utils';
export { INVALID_SPANID, INVALID_TRACEID, INVALID_SPAN_CONTEXT, } from './trace/invalid-span-constants';
// Split module-level variable definition into separate files to allow
// tree-shaking on each api instance.
import { context } from './context-api';
import { diag } from './diag-api';
import { metrics } from './metrics-api';
import { propagation } from './propagation-api';
import { trace } from './trace-api';
// Named export.
export { context, diag, metrics, propagation, trace };
// Default export.
export default {
    context,
    diag,
    metrics,
    propagation,
    trace,
};
//# sourceMappingURL=index.js.map