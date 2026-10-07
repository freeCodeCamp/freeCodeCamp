"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayInt64 = arrayInt64;
const Stream_1 = require("../../stream/Stream");
const Arbitrary_1 = require("../../check/arbitrary/definition/Arbitrary");
const Value_1 = require("../../check/arbitrary/definition/Value");
const ArrayInt64_1 = require("./helpers/ArrayInt64");
class ArrayInt64Arbitrary extends Arbitrary_1.Arbitrary {
    constructor(min, max) {
        super();
        this.min = min;
        this.max = max;
        this.biasedRanges = null;
    }
    generate(mrng, biasFactor) {
        const range = this.computeGenerateRange(mrng, biasFactor);
        const uncheckedValue = mrng.nextArrayInt(range.min, range.max);
        if (uncheckedValue.data.length === 1) {
            uncheckedValue.data.unshift(0);
        }
        return new Value_1.Value(uncheckedValue, undefined);
    }
    computeGenerateRange(mrng, biasFactor) {
        if (biasFactor === undefined || mrng.nextInt(1, biasFactor) !== 1) {
            return { min: this.min, max: this.max };
        }
        const ranges = this.retrieveBiasedRanges();
        if (ranges.length === 1) {
            return ranges[0];
        }
        const id = mrng.nextInt(-2 * (ranges.length - 1), ranges.length - 2);
        return id < 0 ? ranges[0] : ranges[id + 1];
    }
    canShrinkWithoutContext(value) {
        const unsafeValue = value;
        return (typeof value === 'object' &&
            value !== null &&
            (unsafeValue.sign === -1 || unsafeValue.sign === 1) &&
            Array.isArray(unsafeValue.data) &&
            unsafeValue.data.length === 2 &&
            (((0, ArrayInt64_1.isStrictlySmaller64)(this.min, unsafeValue) && (0, ArrayInt64_1.isStrictlySmaller64)(unsafeValue, this.max)) ||
                (0, ArrayInt64_1.isEqual64)(this.min, unsafeValue) ||
                (0, ArrayInt64_1.isEqual64)(this.max, unsafeValue)));
    }
    shrinkArrayInt64(value, target, tryTargetAsap) {
        const realGap = (0, ArrayInt64_1.substract64)(value, target);
        function* shrinkGen() {
            let previous = tryTargetAsap ? undefined : target;
            const gap = tryTargetAsap ? realGap : (0, ArrayInt64_1.halve64)(realGap);
            for (let toremove = gap; !(0, ArrayInt64_1.isZero64)(toremove); toremove = (0, ArrayInt64_1.halve64)(toremove)) {
                const next = (0, ArrayInt64_1.substract64)(value, toremove);
                yield new Value_1.Value(next, previous);
                previous = next;
            }
        }
        return (0, Stream_1.stream)(shrinkGen());
    }
    shrink(current, context) {
        if (!ArrayInt64Arbitrary.isValidContext(current, context)) {
            const target = this.defaultTarget();
            return this.shrinkArrayInt64(current, target, true);
        }
        if (this.isLastChanceTry(current, context)) {
            return Stream_1.Stream.of(new Value_1.Value(context, undefined));
        }
        return this.shrinkArrayInt64(current, context, false);
    }
    defaultTarget() {
        if (!(0, ArrayInt64_1.isStrictlyPositive64)(this.min) && !(0, ArrayInt64_1.isStrictlyNegative64)(this.max)) {
            return ArrayInt64_1.Zero64;
        }
        return (0, ArrayInt64_1.isStrictlyNegative64)(this.min) ? this.max : this.min;
    }
    isLastChanceTry(current, context) {
        if ((0, ArrayInt64_1.isZero64)(current)) {
            return false;
        }
        if (current.sign === 1) {
            return (0, ArrayInt64_1.isEqual64)(current, (0, ArrayInt64_1.add64)(context, ArrayInt64_1.Unit64)) && (0, ArrayInt64_1.isStrictlyPositive64)((0, ArrayInt64_1.substract64)(current, this.min));
        }
        else {
            return (0, ArrayInt64_1.isEqual64)(current, (0, ArrayInt64_1.substract64)(context, ArrayInt64_1.Unit64)) && (0, ArrayInt64_1.isStrictlyNegative64)((0, ArrayInt64_1.substract64)(current, this.max));
        }
    }
    static isValidContext(_current, context) {
        if (context === undefined) {
            return false;
        }
        if (typeof context !== 'object' || context === null || !('sign' in context) || !('data' in context)) {
            throw new Error(`Invalid context type passed to ArrayInt64Arbitrary (#1)`);
        }
        return true;
    }
    retrieveBiasedRanges() {
        if (this.biasedRanges != null) {
            return this.biasedRanges;
        }
        if ((0, ArrayInt64_1.isEqual64)(this.min, this.max)) {
            this.biasedRanges = [{ min: this.min, max: this.max }];
            return this.biasedRanges;
        }
        const minStrictlySmallerZero = (0, ArrayInt64_1.isStrictlyNegative64)(this.min);
        const maxStrictlyGreaterZero = (0, ArrayInt64_1.isStrictlyPositive64)(this.max);
        if (minStrictlySmallerZero && maxStrictlyGreaterZero) {
            const logMin = (0, ArrayInt64_1.logLike64)(this.min);
            const logMax = (0, ArrayInt64_1.logLike64)(this.max);
            this.biasedRanges = [
                { min: logMin, max: logMax },
                { min: (0, ArrayInt64_1.substract64)(this.max, logMax), max: this.max },
                { min: this.min, max: (0, ArrayInt64_1.substract64)(this.min, logMin) },
            ];
        }
        else {
            const logGap = (0, ArrayInt64_1.logLike64)((0, ArrayInt64_1.substract64)(this.max, this.min));
            const arbCloseToMin = { min: this.min, max: (0, ArrayInt64_1.add64)(this.min, logGap) };
            const arbCloseToMax = { min: (0, ArrayInt64_1.substract64)(this.max, logGap), max: this.max };
            this.biasedRanges = minStrictlySmallerZero
                ? [arbCloseToMax, arbCloseToMin]
                : [arbCloseToMin, arbCloseToMax];
        }
        return this.biasedRanges;
    }
}
function arrayInt64(min, max) {
    const arb = new ArrayInt64Arbitrary(min, max);
    return arb;
}
