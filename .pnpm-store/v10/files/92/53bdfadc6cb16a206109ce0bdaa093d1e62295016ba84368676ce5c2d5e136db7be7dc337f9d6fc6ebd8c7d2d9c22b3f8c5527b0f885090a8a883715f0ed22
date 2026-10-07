import { BigInt } from '../utils/globals.js';
import { BigIntArbitrary } from './_internals/BigIntArbitrary.js';
export function bigUintN(n) {
    if (n < 0) {
        throw new Error('fc.bigUintN expects requested number of bits to be superior or equal to 0');
    }
    const min = BigInt(0);
    const max = (BigInt(1) << BigInt(n)) - BigInt(1);
    return new BigIntArbitrary(min, max);
}
