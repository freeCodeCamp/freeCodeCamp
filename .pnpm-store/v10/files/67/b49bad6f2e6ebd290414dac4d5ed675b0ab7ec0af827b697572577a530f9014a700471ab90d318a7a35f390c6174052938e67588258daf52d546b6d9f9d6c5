"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BigIntArbitrary = void 0;
const Stream_1 = require("../../stream/Stream");
const Arbitrary_1 = require("../../check/arbitrary/definition/Arbitrary");
const Value_1 = require("../../check/arbitrary/definition/Value");
const BiasNumericRange_1 = require("./helpers/BiasNumericRange");
const ShrinkBigInt_1 = require("./helpers/ShrinkBigInt");
const globals_1 = require("../../utils/globals");
class BigIntArbitrary extends Arbitrary_1.Arbitrary {
    constructor(min, max) {
        super();
        this.min = min;
        this.max = max;
    }
    generate(mrng, biasFactor) {
        const range = this.computeGenerateRange(mrng, biasFactor);
        return new Value_1.Value(mrng.nextBigInt(range.min, range.max), undefined);
    }
    computeGenerateRange(mrng, biasFactor) {
        if (biasFactor === undefined || mrng.nextInt(1, biasFactor) !== 1) {
            return { min: this.min, max: this.max };
        }
        const ranges = (0, BiasNumericRange_1.biasNumericRange)(this.min, this.max, BiasNumericRange_1.bigIntLogLike);
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
            return (0, ShrinkBigInt_1.shrinkBigInt)(current, target, true);
        }
        if (this.isLastChanceTry(current, context)) {
            return Stream_1.Stream.of(new Value_1.Value(context, undefined));
        }
        return (0, ShrinkBigInt_1.shrinkBigInt)(current, context, false);
    }
    defaultTarget() {
        if (this.min <= 0 && this.max >= 0) {
            return (0, globals_1.BigInt)(0);
        }
        return this.min < 0 ? this.max : this.min;
    }
    isLastChanceTry(current, context) {
        if (current > 0)
            return current === context + (0, globals_1.BigInt)(1) && current > this.min;
        if (current < 0)
            return current === context - (0, globals_1.BigInt)(1) && current < this.max;
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
        if (context !== (0, globals_1.BigInt)(0) && differentSigns) {
            throw new Error(`Invalid context value passed to BigIntArbitrary (#2)`);
        }
        return true;
    }
}
exports.BigIntArbitrary = BigIntArbitrary;
