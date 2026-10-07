"use strict";
exports.__esModule = true;
exports.unsafeUniformBigIntDistribution = void 0;
var SBigInt = typeof BigInt !== 'undefined' ? BigInt : undefined;
function unsafeUniformBigIntDistribution(from, to, rng) {
    var diff = to - from + SBigInt(1);
    var MinRng = SBigInt(-0x80000000);
    var NumValues = SBigInt(0x100000000);
    var FinalNumValues = NumValues;
    var NumIterations = 1;
    while (FinalNumValues < diff) {
        FinalNumValues *= NumValues;
        ++NumIterations;
    }
    var MaxAcceptedRandom = FinalNumValues - (FinalNumValues % diff);
    while (true) {
        var value = SBigInt(0);
        for (var num = 0; num !== NumIterations; ++num) {
            var out = rng.unsafeNext();
            value = NumValues * value + (SBigInt(out) - MinRng);
        }
        if (value < MaxAcceptedRandom) {
            var inDiff = value % diff;
            return inDiff + from;
        }
    }
}
exports.unsafeUniformBigIntDistribution = unsafeUniformBigIntDistribution;
