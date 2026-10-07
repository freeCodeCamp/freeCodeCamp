import { IntegerArbitrary } from './_internals/IntegerArbitrary.js';
const safeNumberIsInteger = Number.isInteger;
function nat(arg) {
    const max = typeof arg === 'number' ? arg : arg && arg.max !== undefined ? arg.max : 0x7fffffff;
    if (max < 0) {
        throw new Error('fc.nat value should be greater than or equal to 0');
    }
    if (!safeNumberIsInteger(max)) {
        throw new Error('fc.nat maximum value should be an integer');
    }
    return new IntegerArbitrary(0, max);
}
export { nat };
