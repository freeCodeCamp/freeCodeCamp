"use strict";
exports.__esModule = true;
exports.xoroshiro128plus = void 0;
var XoroShiro128Plus = (function () {
    function XoroShiro128Plus(s01, s00, s11, s10) {
        this.s01 = s01;
        this.s00 = s00;
        this.s11 = s11;
        this.s10 = s10;
    }
    XoroShiro128Plus.prototype.clone = function () {
        return new XoroShiro128Plus(this.s01, this.s00, this.s11, this.s10);
    };
    XoroShiro128Plus.prototype.next = function () {
        var nextRng = new XoroShiro128Plus(this.s01, this.s00, this.s11, this.s10);
        var out = nextRng.unsafeNext();
        return [out, nextRng];
    };
    XoroShiro128Plus.prototype.unsafeNext = function () {
        var out = (this.s00 + this.s10) | 0;
        var a0 = this.s10 ^ this.s00;
        var a1 = this.s11 ^ this.s01;
        var s00 = this.s00;
        var s01 = this.s01;
        this.s00 = (s00 << 24) ^ (s01 >>> 8) ^ a0 ^ (a0 << 16);
        this.s01 = (s01 << 24) ^ (s00 >>> 8) ^ a1 ^ ((a1 << 16) | (a0 >>> 16));
        this.s10 = (a1 << 5) ^ (a0 >>> 27);
        this.s11 = (a0 << 5) ^ (a1 >>> 27);
        return out;
    };
    XoroShiro128Plus.prototype.jump = function () {
        var nextRng = new XoroShiro128Plus(this.s01, this.s00, this.s11, this.s10);
        nextRng.unsafeJump();
        return nextRng;
    };
    XoroShiro128Plus.prototype.unsafeJump = function () {
        var ns01 = 0;
        var ns00 = 0;
        var ns11 = 0;
        var ns10 = 0;
        var jump = [0xd8f554a5, 0xdf900294, 0x4b3201fc, 0x170865df];
        for (var i = 0; i !== 4; ++i) {
            for (var mask = 1; mask; mask <<= 1) {
                if (jump[i] & mask) {
                    ns01 ^= this.s01;
                    ns00 ^= this.s00;
                    ns11 ^= this.s11;
                    ns10 ^= this.s10;
                }
                this.unsafeNext();
            }
        }
        this.s01 = ns01;
        this.s00 = ns00;
        this.s11 = ns11;
        this.s10 = ns10;
    };
    XoroShiro128Plus.prototype.getState = function () {
        return [this.s01, this.s00, this.s11, this.s10];
    };
    return XoroShiro128Plus;
}());
function fromState(state) {
    var valid = state.length === 4;
    if (!valid) {
        throw new Error('The state must have been produced by a xoroshiro128plus RandomGenerator');
    }
    return new XoroShiro128Plus(state[0], state[1], state[2], state[3]);
}
exports.xoroshiro128plus = Object.assign(function (seed) {
    return new XoroShiro128Plus(-1, ~seed, seed | 0, 0);
}, { fromState: fromState });
