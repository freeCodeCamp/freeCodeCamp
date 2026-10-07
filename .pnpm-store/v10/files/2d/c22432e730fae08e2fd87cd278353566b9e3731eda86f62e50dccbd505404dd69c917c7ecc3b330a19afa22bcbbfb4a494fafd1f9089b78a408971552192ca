import { MAX_VALUE_32 } from './FloatHelpers.js';
import { refineConstraintsForFloatingOnly } from './FloatingOnlyHelpers.js';
const safeNegativeInfinity = Number.NEGATIVE_INFINITY;
const safePositiveInfinity = Number.POSITIVE_INFINITY;
const safeMaxValue = MAX_VALUE_32;
export const maxNonIntegerValue = 8388607.5;
export const onlyIntegersAfterThisValue = 8388608;
export function refineConstraintsForFloatOnly(constraints) {
    return refineConstraintsForFloatingOnly(constraints, safeMaxValue, maxNonIntegerValue, onlyIntegersAfterThisValue);
}
export function floatOnlyMapper(value) {
    return value === onlyIntegersAfterThisValue
        ? safePositiveInfinity
        : value === -onlyIntegersAfterThisValue
            ? safeNegativeInfinity
            : value;
}
export function floatOnlyUnmapper(value) {
    if (typeof value !== 'number')
        throw new Error('Unsupported type');
    return value === safePositiveInfinity
        ? onlyIntegersAfterThisValue
        : value === safeNegativeInfinity
            ? -onlyIntegersAfterThisValue
            : value;
}
