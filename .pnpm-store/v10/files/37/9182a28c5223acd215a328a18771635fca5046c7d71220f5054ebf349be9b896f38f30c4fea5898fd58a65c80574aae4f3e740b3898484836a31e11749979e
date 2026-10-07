"use strict";
exports.__esModule = true;
exports.unsafeUniformIntDistributionInternal = void 0;
function unsafeUniformIntDistributionInternal(rangeSize, rng) {
    var MaxAllowed = rangeSize > 2 ? ~~(0x100000000 / rangeSize) * rangeSize : 0x100000000;
    var deltaV = rng.unsafeNext() + 0x80000000;
    while (deltaV >= MaxAllowed) {
        deltaV = rng.unsafeNext() + 0x80000000;
    }
    return deltaV % rangeSize;
}
exports.unsafeUniformIntDistributionInternal = unsafeUniformIntDistributionInternal;
