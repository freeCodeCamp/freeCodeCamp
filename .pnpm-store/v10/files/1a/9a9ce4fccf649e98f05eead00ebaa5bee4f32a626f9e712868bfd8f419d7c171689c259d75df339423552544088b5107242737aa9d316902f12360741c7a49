"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.segmentsToPathMapper = segmentsToPathMapper;
exports.segmentsToPathUnmapper = segmentsToPathUnmapper;
const globals_1 = require("../../../utils/globals");
function segmentsToPathMapper(segments) {
    return (0, globals_1.safeJoin)((0, globals_1.safeMap)(segments, (v) => `/${v}`), '');
}
function segmentsToPathUnmapper(value) {
    if (typeof value !== 'string') {
        throw new Error('Incompatible value received: type');
    }
    if (value.length !== 0 && value[0] !== '/') {
        throw new Error('Incompatible value received: start');
    }
    return (0, globals_1.safeSplice)((0, globals_1.safeSplit)(value, '/'), 1);
}
