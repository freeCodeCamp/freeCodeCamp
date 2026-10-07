import { unsafeUniformArrayIntDistribution, unsafeUniformBigIntDistribution, unsafeUniformIntDistribution, } from 'pure-rand';
export class Random {
    constructor(sourceRng) {
        this.internalRng = sourceRng.clone();
    }
    clone() {
        return new Random(this.internalRng);
    }
    next(bits) {
        return unsafeUniformIntDistribution(0, (1 << bits) - 1, this.internalRng);
    }
    nextBoolean() {
        return unsafeUniformIntDistribution(0, 1, this.internalRng) == 1;
    }
    nextInt(min, max) {
        return unsafeUniformIntDistribution(min == null ? Random.MIN_INT : min, max == null ? Random.MAX_INT : max, this.internalRng);
    }
    nextBigInt(min, max) {
        return unsafeUniformBigIntDistribution(min, max, this.internalRng);
    }
    nextArrayInt(min, max) {
        return unsafeUniformArrayIntDistribution(min, max, this.internalRng);
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
Random.MIN_INT = 0x80000000 | 0;
Random.MAX_INT = 0x7fffffff | 0;
Random.DBL_FACTOR = Math.pow(2, 27);
Random.DBL_DIVISOR = Math.pow(2, -53);
