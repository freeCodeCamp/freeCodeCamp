"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bigInt = bigInt;
const globals_1 = require("../utils/globals");
const BigIntArbitrary_1 = require("./_internals/BigIntArbitrary");
function buildCompleteBigIntConstraints(constraints) {
    const DefaultPow = 256;
    const DefaultMin = (0, globals_1.BigInt)(-1) << (0, globals_1.BigInt)(DefaultPow - 1);
    const DefaultMax = ((0, globals_1.BigInt)(1) << (0, globals_1.BigInt)(DefaultPow - 1)) - (0, globals_1.BigInt)(1);
    const min = constraints.min;
    const max = constraints.max;
    return {
        min: min !== undefined ? min : DefaultMin - (max !== undefined && max < (0, globals_1.BigInt)(0) ? max * max : (0, globals_1.BigInt)(0)),
        max: max !== undefined ? max : DefaultMax + (min !== undefined && min > (0, globals_1.BigInt)(0) ? min * min : (0, globals_1.BigInt)(0)),
    };
}
function extractBigIntConstraints(args) {
    if (args[0] === undefined) {
        return {};
    }
    if (args[1] === undefined) {
        const constraints = args[0];
        return constraints;
    }
    return { min: args[0], max: args[1] };
}
function bigInt(...args) {
    const constraints = buildCompleteBigIntConstraints(extractBigIntConstraints(args));
    if (constraints.min > constraints.max) {
        throw new Error('fc.bigInt expects max to be greater than or equal to min');
    }
    return new BigIntArbitrary_1.BigIntArbitrary(constraints.min, constraints.max);
}
