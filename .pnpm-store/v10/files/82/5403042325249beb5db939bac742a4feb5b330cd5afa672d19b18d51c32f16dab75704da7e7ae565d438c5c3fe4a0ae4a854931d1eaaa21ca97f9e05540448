import { Arbitrary } from '../../check/arbitrary/definition/Arbitrary.js';
import { Value } from '../../check/arbitrary/definition/Value.js';
import { Stream } from '../../stream/Stream.js';
import { integerLogLike, biasNumericRange } from './helpers/BiasNumericRange.js';
import { shrinkInteger } from './helpers/ShrinkInteger.js';
const safeMathSign = Math.sign;
const safeNumberIsInteger = Number.isInteger;
const safeObjectIs = Object.is;
export class IntegerArbitrary extends Arbitrary {
    constructor(min, max) {
        super();
        this.min = min;
        this.max = max;
    }
    generate(mrng, biasFactor) {
        const range = this.computeGenerateRange(mrng, biasFactor);
        return new Value(mrng.nextInt(range.min, range.max), undefined);
    }
    canShrinkWithoutContext(value) {
        return (typeof value === 'number' &&
            safeNumberIsInteger(value) &&
            !safeObjectIs(value, -0) &&
            this.min <= value &&
            value <= this.max);
    }
    shrink(current, context) {
        if (!IntegerArbitrary.isValidContext(current, context)) {
            const target = this.defaultTarget();
            return shrinkInteger(current, target, true);
        }
        if (this.isLastChanceTry(current, context)) {
            return Stream.of(new Value(context, undefined));
        }
        return shrinkInteger(current, context, false);
    }
    defaultTarget() {
        if (this.min <= 0 && this.max >= 0) {
            return 0;
        }
        return this.min < 0 ? this.max : this.min;
    }
    computeGenerateRange(mrng, biasFactor) {
        if (biasFactor === undefined || mrng.nextInt(1, biasFactor) !== 1) {
            return { min: this.min, max: this.max };
        }
        const ranges = biasNumericRange(this.min, this.max, integerLogLike);
        if (ranges.length === 1) {
            return ranges[0];
        }
        const id = mrng.nextInt(-2 * (ranges.length - 1), ranges.length - 2);
        return id < 0 ? ranges[0] : ranges[id + 1];
    }
    isLastChanceTry(current, context) {
        if (current > 0)
            return current === context + 1 && current > this.min;
        if (current < 0)
            return current === context - 1 && current < this.max;
        return false;
    }
    static isValidContext(current, context) {
        if (context === undefined) {
            return false;
        }
        if (typeof context !== 'number') {
            throw new Error(`Invalid context type passed to IntegerArbitrary (#1)`);
        }
        if (context !== 0 && safeMathSign(current) !== safeMathSign(context)) {
            throw new Error(`Invalid context value passed to IntegerArbitrary (#2)`);
        }
        return true;
    }
}
