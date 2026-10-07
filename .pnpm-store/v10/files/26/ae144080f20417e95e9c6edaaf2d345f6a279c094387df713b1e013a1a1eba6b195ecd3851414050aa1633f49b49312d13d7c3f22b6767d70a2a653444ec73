"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bigIntN = bigIntN;
const globals_1 = require("../utils/globals");
const BigIntArbitrary_1 = require("./_internals/BigIntArbitrary");
function bigIntN(n) {
    if (n < 1) {
        throw new Error('fc.bigIntN expects requested number of bits to be superior or equal to 1');
    }
    const min = (0, globals_1.BigInt)(-1) << (0, globals_1.BigInt)(n - 1);
    const max = ((0, globals_1.BigInt)(1) << (0, globals_1.BigInt)(n - 1)) - (0, globals_1.BigInt)(1);
    return new BigIntArbitrary_1.BigIntArbitrary(min, max);
}
