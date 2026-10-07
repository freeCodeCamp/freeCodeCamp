import { safeToUpperCase, safeToLowerCase, BigInt, Error } from '../utils/globals.js';
import { MixedCaseArbitrary } from './_internals/MixedCaseArbitrary.js';
function defaultToggleCase(rawChar) {
    const upper = safeToUpperCase(rawChar);
    if (upper !== rawChar)
        return upper;
    return safeToLowerCase(rawChar);
}
export function mixedCase(stringArb, constraints) {
    if (typeof BigInt === 'undefined') {
        throw new Error(`mixedCase requires BigInt support`);
    }
    const toggleCase = (constraints && constraints.toggleCase) || defaultToggleCase;
    const untoggleAll = constraints && constraints.untoggleAll;
    return new MixedCaseArbitrary(stringArb, toggleCase, untoggleAll);
}
