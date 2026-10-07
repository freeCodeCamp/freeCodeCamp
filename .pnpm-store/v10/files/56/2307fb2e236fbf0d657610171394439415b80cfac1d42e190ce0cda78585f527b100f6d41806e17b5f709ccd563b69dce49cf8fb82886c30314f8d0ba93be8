/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { INVALID_SPANID, INVALID_TRACEID } from './invalid-span-constants';
import { NonRecordingSpan } from './NonRecordingSpan';
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
export function isValidTraceId(traceId) {
    return isValidHex(traceId, 32) && traceId !== INVALID_TRACEID;
}
/**
 * @since 1.0.0
 */
export function isValidSpanId(spanId) {
    return isValidHex(spanId, 16) && spanId !== INVALID_SPANID;
}
/**
 * Returns true if this {@link SpanContext} is valid.
 * @return true if this {@link SpanContext} is valid.
 *
 * @since 1.0.0
 */
export function isSpanContextValid(spanContext) {
    return (isValidTraceId(spanContext.traceId) && isValidSpanId(spanContext.spanId));
}
/**
 * Wrap the given {@link SpanContext} in a new non-recording {@link Span}
 *
 * @param spanContext span context to be wrapped
 * @returns a new non-recording {@link Span} with the provided context
 */
export function wrapSpanContext(spanContext) {
    return new NonRecordingSpan(spanContext);
}
//# sourceMappingURL=spancontext-utils.js.map