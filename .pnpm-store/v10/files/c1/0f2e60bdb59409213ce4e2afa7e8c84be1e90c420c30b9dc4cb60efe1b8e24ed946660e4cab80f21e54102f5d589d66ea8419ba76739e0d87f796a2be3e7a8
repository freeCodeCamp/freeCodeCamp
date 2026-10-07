"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unboxedToBoxedMapper = unboxedToBoxedMapper;
exports.unboxedToBoxedUnmapper = unboxedToBoxedUnmapper;
const globals_1 = require("../../../utils/globals");
function unboxedToBoxedMapper(value) {
    switch (typeof value) {
        case 'boolean':
            return new globals_1.Boolean(value);
        case 'number':
            return new globals_1.Number(value);
        case 'string':
            return new globals_1.String(value);
        default:
            return value;
    }
}
function unboxedToBoxedUnmapper(value) {
    if (typeof value !== 'object' || value === null || !('constructor' in value)) {
        return value;
    }
    return value.constructor === globals_1.Boolean || value.constructor === globals_1.Number || value.constructor === globals_1.String
        ? value.valueOf()
        : value;
}
