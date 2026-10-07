/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { SamplingDecision } from '../Sampler';
/** Sampler that samples all traces. */
export class AlwaysOnSampler {
    shouldSample() {
        return {
            decision: SamplingDecision.RECORD_AND_SAMPLED,
        };
    }
    toString() {
        return 'AlwaysOnSampler';
    }
}
//# sourceMappingURL=AlwaysOnSampler.js.map