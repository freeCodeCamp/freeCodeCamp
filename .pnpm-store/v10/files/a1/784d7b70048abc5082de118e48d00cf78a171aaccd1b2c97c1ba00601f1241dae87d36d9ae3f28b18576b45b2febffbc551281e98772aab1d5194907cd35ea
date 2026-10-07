"use strict";
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlwaysOnSampler = void 0;
const Sampler_1 = require("../Sampler");
/** Sampler that samples all traces. */
class AlwaysOnSampler {
    shouldSample() {
        return {
            decision: Sampler_1.SamplingDecision.RECORD_AND_SAMPLED,
        };
    }
    toString() {
        return 'AlwaysOnSampler';
    }
}
exports.AlwaysOnSampler = AlwaysOnSampler;
//# sourceMappingURL=AlwaysOnSampler.js.map