"use strict";
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TraceIdRatioBasedSampler = void 0;
const api_1 = require("@opentelemetry/api");
const Sampler_1 = require("../Sampler");
/** Sampler that samples a given fraction of traces based of trace id deterministically. */
class TraceIdRatioBasedSampler {
    _ratio;
    _upperBound;
    constructor(ratio = 0) {
        this._ratio = this._normalize(ratio);
        this._upperBound = Math.floor(this._ratio * 0xffffffff);
    }
    shouldSample(context, traceId) {
        return {
            decision: (0, api_1.isValidTraceId)(traceId) && this._accumulate(traceId) < this._upperBound
                ? Sampler_1.SamplingDecision.RECORD_AND_SAMPLED
                : Sampler_1.SamplingDecision.NOT_RECORD,
        };
    }
    toString() {
        return `TraceIdRatioBased{${this._ratio}}`;
    }
    _normalize(ratio) {
        if (typeof ratio !== 'number' || isNaN(ratio))
            return 0;
        return ratio >= 1 ? 1 : ratio <= 0 ? 0 : ratio;
    }
    _accumulate(traceId) {
        let accumulation = 0;
        for (let i = 0; i < 32; i += 8) {
            let part = 0;
            for (let j = 0; j < 8; j++) {
                const c = traceId.charCodeAt(i + j);
                // Convert hex char code to value: '0'-'9' -> 0-9, 'a'-'f' -> 10-15, 'A'-'F' -> 10-15
                const v = c < 58 ? c - 48 : c < 71 ? c - 55 : c - 87;
                part = (part << 4) | v;
            }
            accumulation = (accumulation ^ part) >>> 0;
        }
        return accumulation;
    }
}
exports.TraceIdRatioBasedSampler = TraceIdRatioBasedSampler;
//# sourceMappingURL=TraceIdRatioBasedSampler.js.map