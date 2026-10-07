"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.float32Array = float32Array;
const float_1 = require("./float");
const array_1 = require("./array");
const globals_1 = require("../utils/globals");
function toTypedMapper(data) {
    return globals_1.Float32Array.from(data);
}
function fromTypedUnmapper(value) {
    if (!(value instanceof globals_1.Float32Array))
        throw new Error('Unexpected type');
    return [...value];
}
function float32Array(constraints = {}) {
    return (0, array_1.array)((0, float_1.float)(constraints), constraints).map(toTypedMapper, fromTypedUnmapper);
}
