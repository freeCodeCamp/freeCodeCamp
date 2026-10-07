"use strict";
exports.__esModule = true;
exports.congruential32 = void 0;
var MULTIPLIER = 0x000343fd;
var INCREMENT = 0x00269ec3;
var MASK = 0xffffffff;
var MASK_2 = (1 << 31) - 1;
var computeNextSeed = function (seed) {
    return (seed * MULTIPLIER + INCREMENT) & MASK;
};
var computeValueFromNextSeed = function (nextseed) {
    return (nextseed & MASK_2) >> 16;
};
var LinearCongruential32 = (function () {
    function LinearCongruential32(seed) {
        this.seed = seed;
    }
    LinearCongruential32.prototype.clone = function () {
        return new LinearCongruential32(this.seed);
    };
    LinearCongruential32.prototype.next = function () {
        var nextRng = new LinearCongruential32(this.seed);
        var out = nextRng.unsafeNext();
        return [out, nextRng];
    };
    LinearCongruential32.prototype.unsafeNext = function () {
        var s1 = computeNextSeed(this.seed);
        var v1 = computeValueFromNextSeed(s1);
        var s2 = computeNextSeed(s1);
        var v2 = computeValueFromNextSeed(s2);
        this.seed = computeNextSeed(s2);
        var v3 = computeValueFromNextSeed(this.seed);
        var vnext = v3 + ((v2 + (v1 << 15)) << 15);
        return vnext | 0;
    };
    LinearCongruential32.prototype.getState = function () {
        return [this.seed];
    };
    return LinearCongruential32;
}());
function fromState(state) {
    var valid = state.length === 1;
    if (!valid) {
        throw new Error('The state must have been produced by a congruential32 RandomGenerator');
    }
    return new LinearCongruential32(state[0]);
}
exports.congruential32 = Object.assign(function (seed) {
    return new LinearCongruential32(seed);
}, { fromState: fromState });
