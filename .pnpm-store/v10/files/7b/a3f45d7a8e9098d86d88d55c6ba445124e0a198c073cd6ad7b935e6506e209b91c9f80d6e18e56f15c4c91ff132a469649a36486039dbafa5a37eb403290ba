"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paddedEightsToUuidMapper = paddedEightsToUuidMapper;
exports.paddedEightsToUuidUnmapper = paddedEightsToUuidUnmapper;
const globals_1 = require("../../../utils/globals");
function paddedEightsToUuidMapper(t) {
    return `${t[0]}-${(0, globals_1.safeSubstring)(t[1], 4)}-${(0, globals_1.safeSubstring)(t[1], 0, 4)}-${(0, globals_1.safeSubstring)(t[2], 0, 4)}-${(0, globals_1.safeSubstring)(t[2], 4)}${t[3]}`;
}
const UuidRegex = /^([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})$/;
function paddedEightsToUuidUnmapper(value) {
    if (typeof value !== 'string') {
        throw new Error('Unsupported type');
    }
    const m = UuidRegex.exec(value);
    if (m === null) {
        throw new Error('Unsupported type');
    }
    return [m[1], m[3] + m[2], m[4] + (0, globals_1.safeSubstring)(m[5], 0, 4), (0, globals_1.safeSubstring)(m[5], 4)];
}
