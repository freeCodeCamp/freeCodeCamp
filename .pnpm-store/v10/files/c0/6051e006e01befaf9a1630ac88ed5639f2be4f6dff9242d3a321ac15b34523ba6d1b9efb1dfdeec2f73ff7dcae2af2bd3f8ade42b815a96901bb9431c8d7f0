"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nat = nat;
const IntegerArbitrary_1 = require("./_internals/IntegerArbitrary");
const safeNumberIsInteger = Number.isInteger;
function nat(arg) {
    const max = typeof arg === 'number' ? arg : arg && arg.max !== undefined ? arg.max : 0x7fffffff;
    if (max < 0) {
        throw new Error('fc.nat value should be greater than or equal to 0');
    }
    if (!safeNumberIsInteger(max)) {
        throw new Error('fc.nat maximum value should be an integer');
    }
    return new IntegerArbitrary_1.IntegerArbitrary(0, max);
}
