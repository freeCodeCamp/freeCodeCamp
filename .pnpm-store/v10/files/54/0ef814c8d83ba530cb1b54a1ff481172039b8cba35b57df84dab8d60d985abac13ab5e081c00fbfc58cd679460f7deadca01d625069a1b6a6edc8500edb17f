"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.float = float;
const integer_1 = require("./integer");
const FloatHelpers_1 = require("./_internals/helpers/FloatHelpers");
const FloatOnlyHelpers_1 = require("./_internals/helpers/FloatOnlyHelpers");
const safeNumberIsInteger = Number.isInteger;
const safeNumberIsNaN = Number.isNaN;
const safeMathFround = Math.fround;
const safeNegativeInfinity = Number.NEGATIVE_INFINITY;
const safePositiveInfinity = Number.POSITIVE_INFINITY;
const safeNaN = Number.NaN;
function safeFloatToIndex(f, constraintsLabel) {
    const conversionTrick = 'you can convert any double to a 32-bit float by using `Math.fround(myDouble)`';
    const errorMessage = 'fc.float constraints.' + constraintsLabel + ' must be a 32-bit float - ' + conversionTrick;
    if (safeNumberIsNaN(f) || safeMathFround(f) !== f) {
        throw new Error(errorMessage);
    }
    return (0, FloatHelpers_1.floatToIndex)(f);
}
function unmapperFloatToIndex(value) {
    if (typeof value !== 'number')
        throw new Error('Unsupported type');
    return (0, FloatHelpers_1.floatToIndex)(value);
}
function numberIsNotInteger(value) {
    return !safeNumberIsInteger(value);
}
function anyFloat(constraints) {
    const { noDefaultInfinity = false, noNaN = false, minExcluded = false, maxExcluded = false, min = noDefaultInfinity ? -FloatHelpers_1.MAX_VALUE_32 : safeNegativeInfinity, max = noDefaultInfinity ? FloatHelpers_1.MAX_VALUE_32 : safePositiveInfinity, } = constraints;
    const minIndexRaw = safeFloatToIndex(min, 'min');
    const minIndex = minExcluded ? minIndexRaw + 1 : minIndexRaw;
    const maxIndexRaw = safeFloatToIndex(max, 'max');
    const maxIndex = maxExcluded ? maxIndexRaw - 1 : maxIndexRaw;
    if (minIndex > maxIndex) {
        throw new Error('fc.float constraints.min must be smaller or equal to constraints.max');
    }
    if (noNaN) {
        return (0, integer_1.integer)({ min: minIndex, max: maxIndex }).map(FloatHelpers_1.indexToFloat, unmapperFloatToIndex);
    }
    const minIndexWithNaN = maxIndex > 0 ? minIndex : minIndex - 1;
    const maxIndexWithNaN = maxIndex > 0 ? maxIndex + 1 : maxIndex;
    return (0, integer_1.integer)({ min: minIndexWithNaN, max: maxIndexWithNaN }).map((index) => {
        if (index > maxIndex || index < minIndex)
            return safeNaN;
        else
            return (0, FloatHelpers_1.indexToFloat)(index);
    }, (value) => {
        if (typeof value !== 'number')
            throw new Error('Unsupported type');
        if (safeNumberIsNaN(value))
            return maxIndex !== maxIndexWithNaN ? maxIndexWithNaN : minIndexWithNaN;
        return (0, FloatHelpers_1.floatToIndex)(value);
    });
}
function float(constraints = {}) {
    if (!constraints.noInteger) {
        return anyFloat(constraints);
    }
    return anyFloat((0, FloatOnlyHelpers_1.refineConstraintsForFloatOnly)(constraints))
        .map(FloatOnlyHelpers_1.floatOnlyMapper, FloatOnlyHelpers_1.floatOnlyUnmapper)
        .filter(numberIsNotInteger);
}
