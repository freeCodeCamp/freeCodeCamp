"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.natToStringifiedNatMapper = natToStringifiedNatMapper;
exports.tryParseStringifiedNat = tryParseStringifiedNat;
exports.natToStringifiedNatUnmapper = natToStringifiedNatUnmapper;
const globals_1 = require("../../../utils/globals");
const safeNumberParseInt = Number.parseInt;
function natToStringifiedNatMapper(options) {
    const [style, v] = options;
    switch (style) {
        case 'oct':
            return `0${(0, globals_1.safeNumberToString)(v, 8)}`;
        case 'hex':
            return `0x${(0, globals_1.safeNumberToString)(v, 16)}`;
        case 'dec':
        default:
            return `${v}`;
    }
}
function tryParseStringifiedNat(stringValue, radix) {
    const parsedNat = safeNumberParseInt(stringValue, radix);
    if ((0, globals_1.safeNumberToString)(parsedNat, radix) !== stringValue) {
        throw new Error('Invalid value');
    }
    return parsedNat;
}
function natToStringifiedNatUnmapper(value) {
    if (typeof value !== 'string') {
        throw new Error('Invalid type');
    }
    if (value.length >= 2 && value[0] === '0') {
        if (value[1] === 'x') {
            return ['hex', tryParseStringifiedNat((0, globals_1.safeSubstring)(value, 2), 16)];
        }
        return ['oct', tryParseStringifiedNat((0, globals_1.safeSubstring)(value, 1), 8)];
    }
    return ['dec', tryParseStringifiedNat(value, 10)];
}
