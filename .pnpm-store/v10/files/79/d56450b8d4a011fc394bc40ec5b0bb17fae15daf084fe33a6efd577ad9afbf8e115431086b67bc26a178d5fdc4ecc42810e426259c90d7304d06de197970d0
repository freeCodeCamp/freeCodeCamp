"use strict";
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.W3CTraceContextPropagator = exports.parseTraceParent = exports.TRACE_STATE_HEADER = exports.TRACE_PARENT_HEADER = void 0;
const api_1 = require("@opentelemetry/api");
const suppress_tracing_1 = require("./suppress-tracing");
const TraceState_1 = require("./TraceState");
exports.TRACE_PARENT_HEADER = 'traceparent';
exports.TRACE_STATE_HEADER = 'tracestate';
const VERSION = '00';
const VERSION_PART = '(?!ff)[\\da-f]{2}';
const TRACE_ID_PART = '(?![0]{32})[\\da-f]{32}';
const PARENT_ID_PART = '(?![0]{16})[\\da-f]{16}';
const FLAGS_PART = '[\\da-f]{2}';
const TRACE_PARENT_REGEX = new RegExp(`^\\s?(${VERSION_PART})-(${TRACE_ID_PART})-(${PARENT_ID_PART})-(${FLAGS_PART})(-.*)?\\s?$`);
/**
 * Parses information from the [traceparent] span tag and converts it into {@link SpanContext}
 * @param traceParent - A meta property that comes from server.
 *     It should be dynamically generated server side to have the server's request trace Id,
 *     a parent span Id that was set on the server's request span,
 *     and the trace flags to indicate the server's sampling decision
 *     (01 = sampled, 00 = not sampled).
 *     for example: '{version}-{traceId}-{spanId}-{sampleDecision}'
 *     For more information see {@link https://www.w3.org/TR/trace-context/}
 */
function parseTraceParent(traceParent) {
    const match = TRACE_PARENT_REGEX.exec(traceParent);
    if (!match)
        return null;
    // According to the specification the implementation should be compatible
    // with future versions. If there are more parts, we only reject it if it's using version 00
    // See https://www.w3.org/TR/trace-context/#versioning-of-traceparent
    if (match[1] === '00' && match[5])
        return null;
    return {
        traceId: match[2],
        spanId: match[3],
        traceFlags: parseInt(match[4], 16),
    };
}
exports.parseTraceParent = parseTraceParent;
/**
 * Propagates {@link SpanContext} through Trace Context format propagation.
 *
 * Based on the Trace Context specification:
 * https://www.w3.org/TR/trace-context/
 */
class W3CTraceContextPropagator {
    inject(context, carrier, setter) {
        const spanContext = api_1.trace.getSpanContext(context);
        if (!spanContext ||
            (0, suppress_tracing_1.isTracingSuppressed)(context) ||
            !(0, api_1.isSpanContextValid)(spanContext))
            return;
        const traceParent = `${VERSION}-${spanContext.traceId}-${spanContext.spanId}-0${Number(spanContext.traceFlags || api_1.TraceFlags.NONE).toString(16)}`;
        setter.set(carrier, exports.TRACE_PARENT_HEADER, traceParent);
        if (spanContext.traceState) {
            setter.set(carrier, exports.TRACE_STATE_HEADER, spanContext.traceState.serialize());
        }
    }
    extract(context, carrier, getter) {
        const traceParentHeader = getter.get(carrier, exports.TRACE_PARENT_HEADER);
        if (!traceParentHeader)
            return context;
        const traceParent = Array.isArray(traceParentHeader)
            ? traceParentHeader[0]
            : traceParentHeader;
        if (typeof traceParent !== 'string')
            return context;
        const spanContext = parseTraceParent(traceParent);
        if (!spanContext)
            return context;
        spanContext.isRemote = true;
        const traceStateHeader = getter.get(carrier, exports.TRACE_STATE_HEADER);
        if (traceStateHeader) {
            // If more than one `tracestate` header is found, we merge them into a
            // single header.
            const state = Array.isArray(traceStateHeader)
                ? traceStateHeader.join(',')
                : traceStateHeader;
            spanContext.traceState = new TraceState_1.TraceState(typeof state === 'string' ? state : undefined);
        }
        return api_1.trace.setSpanContext(context, spanContext);
    }
    fields() {
        return [exports.TRACE_PARENT_HEADER, exports.TRACE_STATE_HEADER];
    }
}
exports.W3CTraceContextPropagator = W3CTraceContextPropagator;
//# sourceMappingURL=W3CTraceContextPropagator.js.map