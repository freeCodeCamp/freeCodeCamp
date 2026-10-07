"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberToPaddedEightMapper = numberToPaddedEightMapper;
exports.numberToPaddedEightUnmapper = numberToPaddedEightUnmapper;
const globals_1 = require("../../../utils/globals");
function numberToPaddedEightMapper(n) {
    return (0, globals_1.safePadStart)((0, globals_1.safeNumberToString)(n, 16), 8, '0');
}
function numberToPaddedEightUnmapper(value) {
    if (typeof value !== 'string') {
        throw new Error('Unsupported type');
    }
    if (value.length !== 8) {
        throw new Error('Unsupported value: invalid length');
    }
    const n = parseInt(value, 16);
    if (value !== numberToPaddedEightMapper(n)) {
        throw new Error('Unsupported value: invalid content');
    }
    return n;
}
