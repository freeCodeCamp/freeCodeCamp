"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Random = void 0;
const pure_rand_1 = require("pure-rand");
class Random {
    constructor(sourceRng) {
        this.internalRng = sourceRng.clone();
    }
    clone() {
        return new Random(this.internalRng);
    }
    next(bits) {
        return (0, pure_rand_1.unsafeUniformIntDistribution)(0, (1 << bits) - 1, this.internalRng);
    }
    nextBoolean() {
        return (0, pure_rand_1.unsafeUniformIntDistribution)(0, 1, this.internalRng) == 1;
    }
    nextInt(min, max) {
        return (0, pure_rand_1.unsafeUniformIntDistribution)(min == null ? Random.MIN_INT : min, max == null ? Random.MAX_INT : max, this.internalRng);
    }
    nextBigInt(min, max) {
        return (0, pure_rand_1.unsafeUniformBigIntDistribution)(min, max, this.internalRng);
    }
    nextArrayInt(min, max) {
        return (0, pure_rand_1.unsafeUniformArrayIntDistribution)(min, max, this.internalRng);
    }
    nextDouble() {
        const a = this.next(26);
        const b = this.next(27);
        return (a * Random.DBL_FACTOR + b) * Random.DBL_DIVISOR;
    }
    getState() {
        if ('getState' in this.internalRng && typeof this.internalRng.getState === 'function') {
            return this.internalRng.getState();
        }
        return undefined;
    }
}
exports.Random = Random;
Random.MIN_INT = 0x80000000 | 0;
Random.MAX_INT = 0x7fffffff | 0;
Random.DBL_FACTOR = Math.pow(2, 27);
Random.DBL_DIVISOR = Math.pow(2, -53);
