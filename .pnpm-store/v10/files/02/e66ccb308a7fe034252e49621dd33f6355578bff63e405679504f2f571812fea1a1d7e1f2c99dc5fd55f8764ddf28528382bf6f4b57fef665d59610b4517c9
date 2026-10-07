"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapSpanContext = exports.isSpanContextValid = exports.isValidSpanId = exports.isValidTraceId = void 0;
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
const invalid_span_constants_1 = require("./invalid-span-constants");
const NonRecordingSpan_1 = require("./NonRecordingSpan");
// Valid characters (0-9, a-f, A-F) are marked as 1.
const isHex = new Uint8Array([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1,
]);
function isValidHex(id, length) {
    // As of 1.9.0 the id was allowed to be a non-string value,
    // even though it was not possible in the types.
    if (typeof id !== 'string' || id.length !== length)
        return false;
    let r = 0;
    for (let i = 0; i < id.length; i += 4) {
        r +=
            (isHex[id.charCodeAt(i)] | 0) +
                (isHex[id.charCodeAt(i + 1)] | 0) +
                (isHex[id.charCodeAt(i + 2)] | 0) +
                (isHex[id.charCodeAt(i + 3)] | 0);
    }
    return r === length;
}
/**
 * @since 1.0.0
 */
function isValidTraceId(traceId) {
    return isValidHex(traceId, 32) && traceId !== invalid_span_constants_1.INVALID_TRACEID;
}
exports.isValidTraceId = isValidTraceId;
/**
 * @since 1.0.0
 */
function isValidSpanId(spanId) {
    return isValidHex(spanId, 16) && spanId !== invalid_span_constants_1.INVALID_SPANID;
}
exports.isValidSpanId = isValidSpanId;
/**
 * Returns true if this {@link SpanContext} is valid.
 * @return true if this {@link SpanContext} is valid.
 *
 * @since 1.0.0
 */
function isSpanContextValid(spanContext) {
    return (isValidTraceId(spanContext.traceId) && isValidSpanId(spanContext.spanId));
}
exports.isSpanContextValid = isSpanContextValid;
/**
 * Wrap the given {@link SpanContext} in a new non-recording {@link Span}
 *
 * @param spanContext span context to be wrapped
 * @returns a new non-recording {@link Span} with the provided context
 */
function wrapSpanContext(spanContext) {
    return new NonRecordingSpan_1.NonRecordingSpan(spanContext);
}
exports.wrapSpanContext = wrapSpanContext;
//# sourceMappingURL=spancontext-utils.js.map