/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { SamplingDecision } from '../Sampler';
/** Sampler that samples no traces. */
export class AlwaysOffSampler {
    shouldSample() {
        return {
            decision: SamplingDecision.NOT_RECORD,
        };
    }
    toString() {
        return 'AlwaysOffSampler';
    }
}
//# sourceMappingURL=AlwaysOffSampler.js.map