"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mixedCase = mixedCase;
const globals_1 = require("../utils/globals");
const MixedCaseArbitrary_1 = require("./_internals/MixedCaseArbitrary");
function defaultToggleCase(rawChar) {
    const upper = (0, globals_1.safeToUpperCase)(rawChar);
    if (upper !== rawChar)
        return upper;
    return (0, globals_1.safeToLowerCase)(rawChar);
}
function mixedCase(stringArb, constraints) {
    if (typeof globals_1.BigInt === 'undefined') {
        throw new globals_1.Error(`mixedCase requires BigInt support`);
    }
    const toggleCase = (constraints && constraints.toggleCase) || defaultToggleCase;
    const untoggleAll = constraints && constraints.untoggleAll;
    return new MixedCaseArbitrary_1.MixedCaseArbitrary(stringArb, toggleCase, untoggleAll);
}
