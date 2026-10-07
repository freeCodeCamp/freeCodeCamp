"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uniqueArray = uniqueArray;
const ArrayArbitrary_1 = require("./_internals/ArrayArbitrary");
const MaxLengthFromMinLength_1 = require("./_internals/helpers/MaxLengthFromMinLength");
const CustomEqualSet_1 = require("./_internals/helpers/CustomEqualSet");
const StrictlyEqualSet_1 = require("./_internals/helpers/StrictlyEqualSet");
const SameValueSet_1 = require("./_internals/helpers/SameValueSet");
const SameValueZeroSet_1 = require("./_internals/helpers/SameValueZeroSet");
function buildUniqueArraySetBuilder(constraints) {
    if (typeof constraints.comparator === 'function') {
        if (constraints.selector === undefined) {
            const comparator = constraints.comparator;
            const isEqualForBuilder = (nextA, nextB) => comparator(nextA.value_, nextB.value_);
            return () => new CustomEqualSet_1.CustomEqualSet(isEqualForBuilder);
        }
        const comparator = constraints.comparator;
        const selector = constraints.selector;
        const refinedSelector = (next) => selector(next.value_);
        const isEqualForBuilder = (nextA, nextB) => comparator(refinedSelector(nextA), refinedSelector(nextB));
        return () => new CustomEqualSet_1.CustomEqualSet(isEqualForBuilder);
    }
    const selector = constraints.selector || ((v) => v);
    const refinedSelector = (next) => selector(next.value_);
    switch (constraints.comparator) {
        case 'IsStrictlyEqual':
            return () => new StrictlyEqualSet_1.StrictlyEqualSet(refinedSelector);
        case 'SameValueZero':
            return () => new SameValueZeroSet_1.SameValueZeroSet(refinedSelector);
        case 'SameValue':
        case undefined:
            return () => new SameValueSet_1.SameValueSet(refinedSelector);
    }
}
function uniqueArray(arb, constraints = {}) {
    const minLength = constraints.minLength !== undefined ? constraints.minLength : 0;
    const maxLength = constraints.maxLength !== undefined ? constraints.maxLength : MaxLengthFromMinLength_1.MaxLengthUpperBound;
    const maxGeneratedLength = (0, MaxLengthFromMinLength_1.maxGeneratedLengthFromSizeForArbitrary)(constraints.size, minLength, maxLength, constraints.maxLength !== undefined);
    const depthIdentifier = constraints.depthIdentifier;
    const setBuilder = buildUniqueArraySetBuilder(constraints);
    const arrayArb = new ArrayArbitrary_1.ArrayArbitrary(arb, minLength, maxGeneratedLength, maxLength, depthIdentifier, setBuilder, []);
    if (minLength === 0)
        return arrayArb;
    return arrayArb.filter((tab) => tab.length >= minLength);
}
