import { ArrayArbitrary } from './_internals/ArrayArbitrary.js';
import { maxGeneratedLengthFromSizeForArbitrary, MaxLengthUpperBound, } from './_internals/helpers/MaxLengthFromMinLength.js';
import { CustomEqualSet } from './_internals/helpers/CustomEqualSet.js';
import { StrictlyEqualSet } from './_internals/helpers/StrictlyEqualSet.js';
import { SameValueSet } from './_internals/helpers/SameValueSet.js';
import { SameValueZeroSet } from './_internals/helpers/SameValueZeroSet.js';
function buildUniqueArraySetBuilder(constraints) {
    if (typeof constraints.comparator === 'function') {
        if (constraints.selector === undefined) {
            const comparator = constraints.comparator;
            const isEqualForBuilder = (nextA, nextB) => comparator(nextA.value_, nextB.value_);
            return () => new CustomEqualSet(isEqualForBuilder);
        }
        const comparator = constraints.comparator;
        const selector = constraints.selector;
        const refinedSelector = (next) => selector(next.value_);
        const isEqualForBuilder = (nextA, nextB) => comparator(refinedSelector(nextA), refinedSelector(nextB));
        return () => new CustomEqualSet(isEqualForBuilder);
    }
    const selector = constraints.selector || ((v) => v);
    const refinedSelector = (next) => selector(next.value_);
    switch (constraints.comparator) {
        case 'IsStrictlyEqual':
            return () => new StrictlyEqualSet(refinedSelector);
        case 'SameValueZero':
            return () => new SameValueZeroSet(refinedSelector);
        case 'SameValue':
        case undefined:
            return () => new SameValueSet(refinedSelector);
    }
}
export function uniqueArray(arb, constraints = {}) {
    const minLength = constraints.minLength !== undefined ? constraints.minLength : 0;
    const maxLength = constraints.maxLength !== undefined ? constraints.maxLength : MaxLengthUpperBound;
    const maxGeneratedLength = maxGeneratedLengthFromSizeForArbitrary(constraints.size, minLength, maxLength, constraints.maxLength !== undefined);
    const depthIdentifier = constraints.depthIdentifier;
    const setBuilder = buildUniqueArraySetBuilder(constraints);
    const arrayArb = new ArrayArbitrary(arb, minLength, maxGeneratedLength, maxLength, depthIdentifier, setBuilder, []);
    if (minLength === 0)
        return arrayArb;
    return arrayArb.filter((tab) => tab.length >= minLength);
}
