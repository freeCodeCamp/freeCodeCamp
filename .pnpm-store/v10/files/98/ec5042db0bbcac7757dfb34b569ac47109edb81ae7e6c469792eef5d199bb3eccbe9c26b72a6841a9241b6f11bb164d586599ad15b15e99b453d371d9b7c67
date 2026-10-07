import { refineConstraintsForFloatingOnly } from './FloatingOnlyHelpers.js';
const safeNegativeInfinity = Number.NEGATIVE_INFINITY;
const safePositiveInfinity = Number.POSITIVE_INFINITY;
const safeMaxValue = Number.MAX_VALUE;
export const maxNonIntegerValue = 4503599627370495.5;
export const onlyIntegersAfterThisValue = 4503599627370496;
export function refineConstraintsForDoubleOnly(constraints) {
    return refineConstraintsForFloatingOnly(constraints, safeMaxValue, maxNonIntegerValue, onlyIntegersAfterThisValue);
}
export function doubleOnlyMapper(value) {
    return value === onlyIntegersAfterThisValue
        ? safePositiveInfinity
        : value === -onlyIntegersAfterThisValue
            ? safeNegativeInfinity
            : value;
}
export function doubleOnlyUnmapper(value) {
    if (typeof value !== 'number')
        throw new Error('Unsupported type');
    return value === safePositiveInfinity
        ? onlyIntegersAfterThisValue
        : value === safeNegativeInfinity
            ? -onlyIntegersAfterThisValue
            : value;
}
