import { Stream } from '../../stream/Stream.js';
import { Arbitrary } from '../../check/arbitrary/definition/Arbitrary.js';
import { Value } from '../../check/arbitrary/definition/Value.js';
import { biasNumericRange, bigIntLogLike } from './helpers/BiasNumericRange.js';
import { shrinkBigInt } from './helpers/ShrinkBigInt.js';
import { BigInt } from '../../utils/globals.js';
export class BigIntArbitrary extends Arbitrary {
    constructor(min, max) {
        super();
        this.min = min;
        this.max = max;
    }
    generate(mrng, biasFactor) {
        const range = this.computeGenerateRange(mrng, biasFactor);
        return new Value(mrng.nextBigInt(range.min, range.max), undefined);
    }
    computeGenerateRange(mrng, biasFactor) {
        if (biasFactor === undefined || mrng.nextInt(1, biasFactor) !== 1) {
            return { min: this.min, max: this.max };
        }
        const ranges = biasNumericRange(this.min, this.max, bigIntLogLike);
        if (ranges.length === 1) {
            return ranges[0];
        }
        const id = mrng.nextInt(-2 * (ranges.length - 1), ranges.length - 2);
        return id < 0 ? ranges[0] : ranges[id + 1];
    }
    canShrinkWithoutContext(value) {
        return typeof value === 'bigint' && this.min <= value && value <= this.max;
    }
    shrink(current, context) {
        if (!BigIntArbitrary.isValidContext(current, context)) {
            const target = this.defaultTarget();
            return shrinkBigInt(current, target, true);
        }
        if (this.isLastChanceTry(current, context)) {
            return Stream.of(new Value(context, undefined));
        }
        return shrinkBigInt(current, context, false);
    }
    defaultTarget() {
        if (this.min <= 0 && this.max >= 0) {
            return BigInt(0);
        }
        return this.min < 0 ? this.max : this.min;
    }
    isLastChanceTry(current, context) {
        if (current > 0)
            return current === context + BigInt(1) && current > this.min;
        if (current < 0)
            return current === context - BigInt(1) && current < this.max;
        return false;
    }
    static isValidContext(current, context) {
        if (context === undefined) {
            return false;
        }
        if (typeof context !== 'bigint') {
            throw new Error(`Invalid context type passed to BigIntArbitrary (#1)`);
        }
        const differentSigns = (current > 0 && context < 0) || (current < 0 && context > 0);
        if (context !== BigInt(0) && differentSigns) {
            throw new Error(`Invalid context value passed to BigIntArbitrary (#2)`);
        }
        return true;
    }
}
