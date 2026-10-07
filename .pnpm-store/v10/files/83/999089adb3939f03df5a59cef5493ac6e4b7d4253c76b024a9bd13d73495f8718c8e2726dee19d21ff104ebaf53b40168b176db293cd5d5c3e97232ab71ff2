/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
const TRACE_ID_BYTES = 16;
const SPAN_ID_BYTES = 8;
const TRACE_BUFFER = new Uint8Array(TRACE_ID_BYTES);
const SPAN_BUFFER = new Uint8Array(SPAN_ID_BYTES);
// Byte-to-hex lookup is faster than toString(16) in browsers
const HEX = Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, '0'));
/**
 * Fills buffer with random bytes, ensuring at least one is non-zero
 * per W3C Trace Context spec.
 */
function randomFill(buf) {
    for (let i = 0; i < buf.length; i++) {
        buf[i] = (Math.random() * 256) >>> 0;
    }
    // Ensure non-zero
    for (let i = 0; i < buf.length; i++) {
        if (buf[i] > 0)
            return;
    }
    buf[buf.length - 1] = 1;
}
function toHex(buf) {
    let hex = '';
    for (let i = 0; i < buf.length; i++) {
        hex += HEX[buf[i]];
    }
    return hex;
}
export class RandomIdGenerator {
    /**
     * Returns a random 16-byte trace ID formatted/encoded as a 32 lowercase hex
     * characters corresponding to 128 bits.
     */
    generateTraceId() {
        randomFill(TRACE_BUFFER);
        return toHex(TRACE_BUFFER);
    }
    /**
     * Returns a random 8-byte span ID formatted/encoded as a 16 lowercase hex
     * characters corresponding to 64 bits.
     */
    generateSpanId() {
        randomFill(SPAN_BUFFER);
        return toHex(SPAN_BUFFER);
    }
}
//# sourceMappingURL=RandomIdGenerator.js.map