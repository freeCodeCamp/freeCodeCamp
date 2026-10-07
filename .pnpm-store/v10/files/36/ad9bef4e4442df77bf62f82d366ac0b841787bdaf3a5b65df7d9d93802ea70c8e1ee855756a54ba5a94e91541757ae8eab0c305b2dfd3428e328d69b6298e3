"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.float64Array = float64Array;
const double_1 = require("./double");
const array_1 = require("./array");
const globals_1 = require("../utils/globals");
function toTypedMapper(data) {
    return globals_1.Float64Array.from(data);
}
function fromTypedUnmapper(value) {
    if (!(value instanceof globals_1.Float64Array))
        throw new Error('Unexpected type');
    return [...value];
}
function float64Array(constraints = {}) {
    return (0, array_1.array)((0, double_1.double)(constraints), constraints).map(toTypedMapper, fromTypedUnmapper);
}
