"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bigUint = bigUint;
const globals_1 = require("../utils/globals");
const BigIntArbitrary_1 = require("./_internals/BigIntArbitrary");
function computeDefaultMax() {
    return ((0, globals_1.BigInt)(1) << (0, globals_1.BigInt)(256)) - (0, globals_1.BigInt)(1);
}
function bigUint(constraints) {
    const requestedMax = typeof constraints === 'object' ? constraints.max : constraints;
    const max = requestedMax !== undefined ? requestedMax : computeDefaultMax();
    if (max < 0) {
        throw new Error('fc.bigUint expects max to be greater than or equal to zero');
    }
    return new BigIntArbitrary_1.BigIntArbitrary((0, globals_1.BigInt)(0), max);
}
