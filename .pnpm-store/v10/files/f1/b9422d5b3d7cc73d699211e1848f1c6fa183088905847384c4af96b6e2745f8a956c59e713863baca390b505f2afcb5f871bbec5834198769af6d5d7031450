"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refineConstraintsForFloatingOnly = refineConstraintsForFloatingOnly;
const safeNumberIsInteger = Number.isInteger;
const safeObjectIs = Object.is;
const safeNegativeInfinity = Number.NEGATIVE_INFINITY;
const safePositiveInfinity = Number.POSITIVE_INFINITY;
function refineConstraintsForFloatingOnly(constraints, maxValue, maxNonIntegerValue, onlyIntegersAfterThisValue) {
    const { noDefaultInfinity = false, minExcluded = false, maxExcluded = false, min = noDefaultInfinity ? -maxValue : safeNegativeInfinity, max = noDefaultInfinity ? maxValue : safePositiveInfinity, } = constraints;
    const effectiveMin = minExcluded
        ? min < -maxNonIntegerValue
            ? -onlyIntegersAfterThisValue
            : Math.max(min, -maxNonIntegerValue)
        : min === safeNegativeInfinity
            ? Math.max(min, -onlyIntegersAfterThisValue)
            : Math.max(min, -maxNonIntegerValue);
    const effectiveMax = maxExcluded
        ? max > maxNonIntegerValue
            ? onlyIntegersAfterThisValue
            : Math.min(max, maxNonIntegerValue)
        : max === safePositiveInfinity
            ? Math.min(max, onlyIntegersAfterThisValue)
            : Math.min(max, maxNonIntegerValue);
    const fullConstraints = {
        noDefaultInfinity: false,
        minExcluded: minExcluded || ((min !== safeNegativeInfinity || minExcluded) && safeNumberIsInteger(effectiveMin)),
        maxExcluded: maxExcluded || ((max !== safePositiveInfinity || maxExcluded) && safeNumberIsInteger(effectiveMax)),
        min: safeObjectIs(effectiveMin, -0) ? 0 : effectiveMin,
        max: safeObjectIs(effectiveMax, 0) ? -0 : effectiveMax,
        noNaN: constraints.noNaN || false,
    };
    return fullConstraints;
}
