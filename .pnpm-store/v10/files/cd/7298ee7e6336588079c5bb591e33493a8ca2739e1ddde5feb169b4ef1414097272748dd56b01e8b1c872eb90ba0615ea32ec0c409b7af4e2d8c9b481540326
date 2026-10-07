import { integer } from './integer.js';
import { floatToIndex, indexToFloat, MAX_VALUE_32 } from './_internals/helpers/FloatHelpers.js';
import { floatOnlyMapper, floatOnlyUnmapper, refineConstraintsForFloatOnly, } from './_internals/helpers/FloatOnlyHelpers.js';
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
    return floatToIndex(f);
}
function unmapperFloatToIndex(value) {
    if (typeof value !== 'number')
        throw new Error('Unsupported type');
    return floatToIndex(value);
}
function numberIsNotInteger(value) {
    return !safeNumberIsInteger(value);
}
function anyFloat(constraints) {
    const { noDefaultInfinity = false, noNaN = false, minExcluded = false, maxExcluded = false, min = noDefaultInfinity ? -MAX_VALUE_32 : safeNegativeInfinity, max = noDefaultInfinity ? MAX_VALUE_32 : safePositiveInfinity, } = constraints;
    const minIndexRaw = safeFloatToIndex(min, 'min');
    const minIndex = minExcluded ? minIndexRaw + 1 : minIndexRaw;
    const maxIndexRaw = safeFloatToIndex(max, 'max');
    const maxIndex = maxExcluded ? maxIndexRaw - 1 : maxIndexRaw;
    if (minIndex > maxIndex) {
        throw new Error('fc.float constraints.min must be smaller or equal to constraints.max');
    }
    if (noNaN) {
        return integer({ min: minIndex, max: maxIndex }).map(indexToFloat, unmapperFloatToIndex);
    }
    const minIndexWithNaN = maxIndex > 0 ? minIndex : minIndex - 1;
    const maxIndexWithNaN = maxIndex > 0 ? maxIndex + 1 : maxIndex;
    return integer({ min: minIndexWithNaN, max: maxIndexWithNaN }).map((index) => {
        if (index > maxIndex || index < minIndex)
            return safeNaN;
        else
            return indexToFloat(index);
    }, (value) => {
        if (typeof value !== 'number')
            throw new Error('Unsupported type');
        if (safeNumberIsNaN(value))
            return maxIndex !== maxIndexWithNaN ? maxIndexWithNaN : minIndexWithNaN;
        return floatToIndex(value);
    });
}
export function float(constraints = {}) {
    if (!constraints.noInteger) {
        return anyFloat(constraints);
    }
    return anyFloat(refineConstraintsForFloatOnly(constraints))
        .map(floatOnlyMapper, floatOnlyUnmapper)
        .filter(numberIsNotInteger);
}
