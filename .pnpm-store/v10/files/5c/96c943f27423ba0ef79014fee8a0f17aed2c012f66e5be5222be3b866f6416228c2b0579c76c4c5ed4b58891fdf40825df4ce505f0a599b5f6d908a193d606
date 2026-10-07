"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.charsToStringMapper = charsToStringMapper;
exports.charsToStringUnmapper = charsToStringUnmapper;
const globals_1 = require("../../../utils/globals");
function charsToStringMapper(tab) {
    return (0, globals_1.safeJoin)(tab, '');
}
function charsToStringUnmapper(value) {
    if (typeof value !== 'string') {
        throw new Error('Cannot unmap the passed value');
    }
    return (0, globals_1.safeSplit)(value, '');
}
