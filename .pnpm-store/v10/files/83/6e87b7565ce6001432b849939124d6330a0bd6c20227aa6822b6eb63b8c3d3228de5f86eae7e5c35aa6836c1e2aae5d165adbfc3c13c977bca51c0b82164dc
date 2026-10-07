var XorShift128Plus = (function () {
    function XorShift128Plus(s01, s00, s11, s10) {
        this.s01 = s01;
        this.s00 = s00;
        this.s11 = s11;
        this.s10 = s10;
    }
    XorShift128Plus.prototype.clone = function () {
        return new XorShift128Plus(this.s01, this.s00, this.s11, this.s10);
    };
    XorShift128Plus.prototype.next = function () {
        var nextRng = new XorShift128Plus(this.s01, this.s00, this.s11, this.s10);
        var out = nextRng.unsafeNext();
        return [out, nextRng];
    };
    XorShift128Plus.prototype.unsafeNext = function () {
        var a0 = this.s00 ^ (this.s00 << 23);
        var a1 = this.s01 ^ ((this.s01 << 23) | (this.s00 >>> 9));
        var b0 = a0 ^ this.s10 ^ ((a0 >>> 18) | (a1 << 14)) ^ ((this.s10 >>> 5) | (this.s11 << 27));
        var b1 = a1 ^ this.s11 ^ (a1 >>> 18) ^ (this.s11 >>> 5);
        var out = (this.s00 + this.s10) | 0;
        this.s01 = this.s11;
        this.s00 = this.s10;
        this.s11 = b1;
        this.s10 = b0;
        return out;
    };
    XorShift128Plus.prototype.jump = function () {
        var nextRng = new XorShift128Plus(this.s01, this.s00, this.s11, this.s10);
        nextRng.unsafeJump();
        return nextRng;
    };
    XorShift128Plus.prototype.unsafeJump = function () {
        var ns01 = 0;
        var ns00 = 0;
        var ns11 = 0;
        var ns10 = 0;
        var jump = [0x635d2dff, 0x8a5cd789, 0x5c472f96, 0x121fd215];
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
    XorShift128Plus.prototype.getState = function () {
        return [this.s01, this.s00, this.s11, this.s10];
    };
    return XorShift128Plus;
}());
function fromState(state) {
    var valid = state.length === 4;
    if (!valid) {
        throw new Error('The state must have been produced by a xorshift128plus RandomGenerator');
    }
    return new XorShift128Plus(state[0], state[1], state[2], state[3]);
}
export var xorshift128plus = Object.assign(function (seed) {
    return new XorShift128Plus(-1, ~seed, seed | 0, 0);
}, { fromState: fromState });
