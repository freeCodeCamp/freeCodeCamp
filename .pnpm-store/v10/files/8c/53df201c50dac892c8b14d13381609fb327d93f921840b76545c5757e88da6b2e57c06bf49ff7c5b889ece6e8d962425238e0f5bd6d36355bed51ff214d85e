import { stream, Stream } from '../../stream/Stream.js';
import { Arbitrary } from '../../check/arbitrary/definition/Arbitrary.js';
import { Value } from '../../check/arbitrary/definition/Value.js';
import { add64, halve64, isEqual64, isStrictlyNegative64, isStrictlyPositive64, isStrictlySmaller64, isZero64, logLike64, substract64, Unit64, Zero64, } from './helpers/ArrayInt64.js';
class ArrayInt64Arbitrary extends Arbitrary {
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
        return new Value(uncheckedValue, undefined);
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
            ((isStrictlySmaller64(this.min, unsafeValue) && isStrictlySmaller64(unsafeValue, this.max)) ||
                isEqual64(this.min, unsafeValue) ||
                isEqual64(this.max, unsafeValue)));
    }
    shrinkArrayInt64(value, target, tryTargetAsap) {
        const realGap = substract64(value, target);
        function* shrinkGen() {
            let previous = tryTargetAsap ? undefined : target;
            const gap = tryTargetAsap ? realGap : halve64(realGap);
            for (let toremove = gap; !isZero64(toremove); toremove = halve64(toremove)) {
                const next = substract64(value, toremove);
                yield new Value(next, previous);
                previous = next;
            }
        }
        return stream(shrinkGen());
    }
    shrink(current, context) {
        if (!ArrayInt64Arbitrary.isValidContext(current, context)) {
            const target = this.defaultTarget();
            return this.shrinkArrayInt64(current, target, true);
        }
        if (this.isLastChanceTry(current, context)) {
            return Stream.of(new Value(context, undefined));
        }
        return this.shrinkArrayInt64(current, context, false);
    }
    defaultTarget() {
        if (!isStrictlyPositive64(this.min) && !isStrictlyNegative64(this.max)) {
            return Zero64;
        }
        return isStrictlyNegative64(this.min) ? this.max : this.min;
    }
    isLastChanceTry(current, context) {
        if (isZero64(current)) {
            return false;
        }
        if (current.sign === 1) {
            return isEqual64(current, add64(context, Unit64)) && isStrictlyPositive64(substract64(current, this.min));
        }
        else {
            return isEqual64(current, substract64(context, Unit64)) && isStrictlyNegative64(substract64(current, this.max));
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
        if (isEqual64(this.min, this.max)) {
            this.biasedRanges = [{ min: this.min, max: this.max }];
            return this.biasedRanges;
        }
        const minStrictlySmallerZero = isStrictlyNegative64(this.min);
        const maxStrictlyGreaterZero = isStrictlyPositive64(this.max);
        if (minStrictlySmallerZero && maxStrictlyGreaterZero) {
            const logMin = logLike64(this.min);
            const logMax = logLike64(this.max);
            this.biasedRanges = [
                { min: logMin, max: logMax },
                { min: substract64(this.max, logMax), max: this.max },
                { min: this.min, max: substract64(this.min, logMin) },
            ];
        }
        else {
            const logGap = logLike64(substract64(this.max, this.min));
            const arbCloseToMin = { min: this.min, max: add64(this.min, logGap) };
            const arbCloseToMax = { min: substract64(this.max, logGap), max: this.max };
            this.biasedRanges = minStrictlySmallerZero
                ? [arbCloseToMax, arbCloseToMin]
                : [arbCloseToMin, arbCloseToMax];
        }
        return this.biasedRanges;
    }
}
export function arrayInt64(min, max) {
    const arb = new ArrayInt64Arbitrary(min, max);
    return arb;
}
