import { BigInt } from '../utils/globals.js';
import { BigIntArbitrary } from './_internals/BigIntArbitrary.js';
export function bigIntN(n) {
    if (n < 1) {
        throw new Error('fc.bigIntN expects requested number of bits to be superior or equal to 1');
    }
    const min = BigInt(-1) << BigInt(n - 1);
    const max = (BigInt(1) << BigInt(n - 1)) - BigInt(1);
    return new BigIntArbitrary(min, max);
}
