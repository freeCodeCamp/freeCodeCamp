"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bigUintN = bigUintN;
const globals_1 = require("../utils/globals");
const BigIntArbitrary_1 = require("./_internals/BigIntArbitrary");
function bigUintN(n) {
    if (n < 0) {
        throw new Error('fc.bigUintN expects requested number of bits to be superior or equal to 0');
    }
    const min = (0, globals_1.BigInt)(0);
    const max = ((0, globals_1.BigInt)(1) << (0, globals_1.BigInt)(n)) - (0, globals_1.BigInt)(1);
    return new BigIntArbitrary_1.BigIntArbitrary(min, max);
}
