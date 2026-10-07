import { unsafeUniformIntDistributionInternal } from './internals/UnsafeUniformIntDistributionInternal.js';
import { fromNumberToArrayInt64, substractArrayInt64 } from './internals/ArrayInt.js';
import { unsafeUniformArrayIntDistributionInternal } from './internals/UnsafeUniformArrayIntDistributionInternal.js';
var safeNumberMaxSafeInteger = Number.MAX_SAFE_INTEGER;
var sharedA = { sign: 1, data: [0, 0] };
var sharedB = { sign: 1, data: [0, 0] };
var sharedC = { sign: 1, data: [0, 0] };
var sharedData = [0, 0];
function uniformLargeIntInternal(from, to, rangeSize, rng) {
    var rangeSizeArrayIntValue = rangeSize <= safeNumberMaxSafeInteger
        ? fromNumberToArrayInt64(sharedC, rangeSize)
        : substractArrayInt64(sharedC, fromNumberToArrayInt64(sharedA, to), fromNumberToArrayInt64(sharedB, from));
    if (rangeSizeArrayIntValue.data[1] === 0xffffffff) {
        rangeSizeArrayIntValue.data[0] += 1;
        rangeSizeArrayIntValue.data[1] = 0;
    }
    else {
        rangeSizeArrayIntValue.data[1] += 1;
    }
    unsafeUniformArrayIntDistributionInternal(sharedData, rangeSizeArrayIntValue.data, rng);
    return sharedData[0] * 0x100000000 + sharedData[1] + from;
}
export function unsafeUniformIntDistribution(from, to, rng) {
    var rangeSize = to - from;
    if (rangeSize <= 0xffffffff) {
        var g = unsafeUniformIntDistributionInternal(rangeSize + 1, rng);
        return g + from;
    }
    return uniformLargeIntInternal(from, to, rangeSize, rng);
}
