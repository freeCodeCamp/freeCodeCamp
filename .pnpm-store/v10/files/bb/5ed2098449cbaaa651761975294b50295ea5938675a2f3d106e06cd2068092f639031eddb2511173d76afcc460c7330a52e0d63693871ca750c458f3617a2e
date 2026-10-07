import { unsafeUniformIntDistributionInternal } from './UnsafeUniformIntDistributionInternal.js';
export function unsafeUniformArrayIntDistributionInternal(out, rangeSize, rng) {
    var rangeLength = rangeSize.length;
    while (true) {
        for (var index = 0; index !== rangeLength; ++index) {
            var indexRangeSize = index === 0 ? rangeSize[0] + 1 : 0x100000000;
            var g = unsafeUniformIntDistributionInternal(indexRangeSize, rng);
            out[index] = g;
        }
        for (var index = 0; index !== rangeLength; ++index) {
            var current = out[index];
            var currentInRange = rangeSize[index];
            if (current < currentInRange) {
                return out;
            }
            else if (current > currentInRange) {
                break;
            }
        }
    }
}
