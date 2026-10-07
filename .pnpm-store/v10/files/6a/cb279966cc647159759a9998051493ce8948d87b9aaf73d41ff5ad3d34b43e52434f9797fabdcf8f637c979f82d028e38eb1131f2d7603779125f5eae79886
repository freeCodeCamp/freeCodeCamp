"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countToggledBits = countToggledBits;
exports.computeNextFlags = computeNextFlags;
exports.computeTogglePositions = computeTogglePositions;
exports.computeFlagsFromChars = computeFlagsFromChars;
exports.applyFlagsOnChars = applyFlagsOnChars;
const globals_1 = require("../../../utils/globals");
function countToggledBits(n) {
    let count = 0;
    while (n > (0, globals_1.BigInt)(0)) {
        if (n & (0, globals_1.BigInt)(1))
            ++count;
        n >>= (0, globals_1.BigInt)(1);
    }
    return count;
}
function computeNextFlags(flags, nextSize) {
    const allowedMask = ((0, globals_1.BigInt)(1) << (0, globals_1.BigInt)(nextSize)) - (0, globals_1.BigInt)(1);
    const preservedFlags = flags & allowedMask;
    let numMissingFlags = countToggledBits(flags - preservedFlags);
    let nFlags = preservedFlags;
    for (let mask = (0, globals_1.BigInt)(1); mask <= allowedMask && numMissingFlags !== 0; mask <<= (0, globals_1.BigInt)(1)) {
        if (!(nFlags & mask)) {
            nFlags |= mask;
            --numMissingFlags;
        }
    }
    return nFlags;
}
function computeTogglePositions(chars, toggleCase) {
    const positions = [];
    for (let idx = chars.length - 1; idx !== -1; --idx) {
        if (toggleCase(chars[idx]) !== chars[idx])
            (0, globals_1.safePush)(positions, idx);
    }
    return positions;
}
function computeFlagsFromChars(untoggledChars, toggledChars, togglePositions) {
    let flags = (0, globals_1.BigInt)(0);
    for (let idx = 0, mask = (0, globals_1.BigInt)(1); idx !== togglePositions.length; ++idx, mask <<= (0, globals_1.BigInt)(1)) {
        if (untoggledChars[togglePositions[idx]] !== toggledChars[togglePositions[idx]]) {
            flags |= mask;
        }
    }
    return flags;
}
function applyFlagsOnChars(chars, flags, togglePositions, toggleCase) {
    for (let idx = 0, mask = (0, globals_1.BigInt)(1); idx !== togglePositions.length; ++idx, mask <<= (0, globals_1.BigInt)(1)) {
        if (flags & mask)
            chars[togglePositions[idx]] = toggleCase(chars[togglePositions[idx]]);
    }
}
