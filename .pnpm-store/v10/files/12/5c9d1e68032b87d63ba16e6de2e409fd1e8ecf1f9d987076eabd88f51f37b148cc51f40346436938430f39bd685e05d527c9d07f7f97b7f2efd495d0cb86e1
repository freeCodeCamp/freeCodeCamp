import { SubarrayArbitrary } from './_internals/SubarrayArbitrary.js';
export function shuffledSubarray(originalArray, constraints = {}) {
    const { minLength = 0, maxLength = originalArray.length } = constraints;
    return new SubarrayArbitrary(originalArray, false, minLength, maxLength);
}
