"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.double = double;
const ArrayInt64_1 = require("./_internals/helpers/ArrayInt64");
const ArrayInt64Arbitrary_1 = require("./_internals/ArrayInt64Arbitrary");
const DoubleHelpers_1 = require("./_internals/helpers/DoubleHelpers");
const DoubleOnlyHelpers_1 = require("./_internals/helpers/DoubleOnlyHelpers");
const safeNumberIsInteger = Number.isInteger;
const safeNumberIsNaN = Number.isNaN;
const safeNegativeInfinity = Number.NEGATIVE_INFINITY;
const safePositiveInfinity = Number.POSITIVE_INFINITY;
const safeMaxValue = Number.MAX_VALUE;
const safeNaN = Number.NaN;
function safeDoubleToIndex(d, constraintsLabel) {
    if (safeNumberIsNaN(d)) {
        throw new Error('fc.double constraints.' + constraintsLabel + ' must be a 64-bit float');
    }
    return (0, DoubleHelpers_1.doubleToIndex)(d);
}
function unmapperDoubleToIndex(value) {
    if (typeof value !== 'number')
        throw new Error('Unsupported type');
    return (0, DoubleHelpers_1.doubleToIndex)(value);
}
function numberIsNotInteger(value) {
    return !safeNumberIsInteger(value);
}
function anyDouble(constraints) {
    const { noDefaultInfinity = false, noNaN = false, minExcluded = false, maxExcluded = false, min = noDefaultInfinity ? -safeMaxValue : safeNegativeInfinity, max = noDefaultInfinity ? safeMaxValue : safePositiveInfinity, } = constraints;
    const minIndexRaw = safeDoubleToIndex(min, 'min');
    const minIndex = minExcluded ? (0, ArrayInt64_1.add64)(minIndexRaw, ArrayInt64_1.Unit64) : minIndexRaw;
    const maxIndexRaw = safeDoubleToIndex(max, 'max');
    const maxIndex = maxExcluded ? (0, ArrayInt64_1.substract64)(maxIndexRaw, ArrayInt64_1.Unit64) : maxIndexRaw;
    if ((0, ArrayInt64_1.isStrictlySmaller64)(maxIndex, minIndex)) {
        throw new Error('fc.double constraints.min must be smaller or equal to constraints.max');
    }
    if (noNaN) {
        return (0, ArrayInt64Arbitrary_1.arrayInt64)(minIndex, maxIndex).map(DoubleHelpers_1.indexToDouble, unmapperDoubleToIndex);
    }
    const positiveMaxIdx = (0, ArrayInt64_1.isStrictlyPositive64)(maxIndex);
    const minIndexWithNaN = positiveMaxIdx ? minIndex : (0, ArrayInt64_1.substract64)(minIndex, ArrayInt64_1.Unit64);
    const maxIndexWithNaN = positiveMaxIdx ? (0, ArrayInt64_1.add64)(maxIndex, ArrayInt64_1.Unit64) : maxIndex;
    return (0, ArrayInt64Arbitrary_1.arrayInt64)(minIndexWithNaN, maxIndexWithNaN).map((index) => {
        if ((0, ArrayInt64_1.isStrictlySmaller64)(maxIndex, index) || (0, ArrayInt64_1.isStrictlySmaller64)(index, minIndex))
            return safeNaN;
        else
            return (0, DoubleHelpers_1.indexToDouble)(index);
    }, (value) => {
        if (typeof value !== 'number')
            throw new Error('Unsupported type');
        if (safeNumberIsNaN(value))
            return !(0, ArrayInt64_1.isEqual64)(maxIndex, maxIndexWithNaN) ? maxIndexWithNaN : minIndexWithNaN;
        return (0, DoubleHelpers_1.doubleToIndex)(value);
    });
}
function double(constraints = {}) {
    if (!constraints.noInteger) {
        return anyDouble(constraints);
    }
    return anyDouble((0, DoubleOnlyHelpers_1.refineConstraintsForDoubleOnly)(constraints))
        .map(DoubleOnlyHelpers_1.doubleOnlyMapper, DoubleOnlyHelpers_1.doubleOnlyUnmapper)
        .filter(numberIsNotInteger);
}
