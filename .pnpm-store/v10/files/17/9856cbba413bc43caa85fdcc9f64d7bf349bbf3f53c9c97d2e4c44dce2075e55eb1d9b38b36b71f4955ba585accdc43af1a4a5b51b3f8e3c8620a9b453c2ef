import { add64, isEqual64, isStrictlyPositive64, isStrictlySmaller64, substract64, Unit64, } from './_internals/helpers/ArrayInt64.js';
import { arrayInt64 } from './_internals/ArrayInt64Arbitrary.js';
import { doubleToIndex, indexToDouble } from './_internals/helpers/DoubleHelpers.js';
import { doubleOnlyMapper, doubleOnlyUnmapper, refineConstraintsForDoubleOnly, } from './_internals/helpers/DoubleOnlyHelpers.js';
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
    return doubleToIndex(d);
}
function unmapperDoubleToIndex(value) {
    if (typeof value !== 'number')
        throw new Error('Unsupported type');
    return doubleToIndex(value);
}
function numberIsNotInteger(value) {
    return !safeNumberIsInteger(value);
}
function anyDouble(constraints) {
    const { noDefaultInfinity = false, noNaN = false, minExcluded = false, maxExcluded = false, min = noDefaultInfinity ? -safeMaxValue : safeNegativeInfinity, max = noDefaultInfinity ? safeMaxValue : safePositiveInfinity, } = constraints;
    const minIndexRaw = safeDoubleToIndex(min, 'min');
    const minIndex = minExcluded ? add64(minIndexRaw, Unit64) : minIndexRaw;
    const maxIndexRaw = safeDoubleToIndex(max, 'max');
    const maxIndex = maxExcluded ? substract64(maxIndexRaw, Unit64) : maxIndexRaw;
    if (isStrictlySmaller64(maxIndex, minIndex)) {
        throw new Error('fc.double constraints.min must be smaller or equal to constraints.max');
    }
    if (noNaN) {
        return arrayInt64(minIndex, maxIndex).map(indexToDouble, unmapperDoubleToIndex);
    }
    const positiveMaxIdx = isStrictlyPositive64(maxIndex);
    const minIndexWithNaN = positiveMaxIdx ? minIndex : substract64(minIndex, Unit64);
    const maxIndexWithNaN = positiveMaxIdx ? add64(maxIndex, Unit64) : maxIndex;
    return arrayInt64(minIndexWithNaN, maxIndexWithNaN).map((index) => {
        if (isStrictlySmaller64(maxIndex, index) || isStrictlySmaller64(index, minIndex))
            return safeNaN;
        else
            return indexToDouble(index);
    }, (value) => {
        if (typeof value !== 'number')
            throw new Error('Unsupported type');
        if (safeNumberIsNaN(value))
            return !isEqual64(maxIndex, maxIndexWithNaN) ? maxIndexWithNaN : minIndexWithNaN;
        return doubleToIndex(value);
    });
}
export function double(constraints = {}) {
    if (!constraints.noInteger) {
        return anyDouble(constraints);
    }
    return anyDouble(refineConstraintsForDoubleOnly(constraints))
        .map(doubleOnlyMapper, doubleOnlyUnmapper)
        .filter(numberIsNotInteger);
}
