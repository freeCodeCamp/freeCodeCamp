import { Stream } from '../../stream/Stream.js';
import { Arbitrary } from '../../check/arbitrary/definition/Arbitrary.js';
import { Value } from '../../check/arbitrary/definition/Value.js';
import { cloneMethod, hasCloneMethod } from '../../check/symbols.js';
import { Set, safeHas } from '../../utils/globals.js';
const safeObjectIs = Object.is;
export class ConstantArbitrary extends Arbitrary {
    constructor(values) {
        super();
        this.values = values;
    }
    generate(mrng, _biasFactor) {
        const idx = this.values.length === 1 ? 0 : mrng.nextInt(0, this.values.length - 1);
        const value = this.values[idx];
        if (!hasCloneMethod(value)) {
            return new Value(value, idx);
        }
        return new Value(value, idx, () => value[cloneMethod]());
    }
    canShrinkWithoutContext(value) {
        if (this.values.length === 1) {
            return safeObjectIs(this.values[0], value);
        }
        if (this.fastValues === undefined) {
            this.fastValues = new FastConstantValuesLookup(this.values);
        }
        return this.fastValues.has(value);
    }
    shrink(value, context) {
        if (context === 0 || safeObjectIs(value, this.values[0])) {
            return Stream.nil();
        }
        return Stream.of(new Value(this.values[0], 0));
    }
}
class FastConstantValuesLookup {
    constructor(values) {
        this.values = values;
        this.fastValues = new Set(this.values);
        let hasMinusZero = false;
        let hasPlusZero = false;
        if (safeHas(this.fastValues, 0)) {
            for (let idx = 0; idx !== this.values.length; ++idx) {
                const value = this.values[idx];
                hasMinusZero = hasMinusZero || safeObjectIs(value, -0);
                hasPlusZero = hasPlusZero || safeObjectIs(value, 0);
            }
        }
        this.hasMinusZero = hasMinusZero;
        this.hasPlusZero = hasPlusZero;
    }
    has(value) {
        if (value === 0) {
            if (safeObjectIs(value, 0)) {
                return this.hasPlusZero;
            }
            return this.hasMinusZero;
        }
        return safeHas(this.fastValues, value);
    }
}
