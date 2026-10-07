import { assertIsArbitrary } from '../arbitrary/definition/Arbitrary.js';
import { tuple } from '../../arbitrary/tuple.js';
import { AsyncProperty } from './AsyncProperty.generic.js';
import { AlwaysShrinkableArbitrary } from '../../arbitrary/_internals/AlwaysShrinkableArbitrary.js';
import { safeForEach, safeMap, safeSlice } from '../../utils/globals.js';
function asyncProperty(...args) {
    if (args.length < 2) {
        throw new Error('asyncProperty expects at least two parameters');
    }
    const arbs = safeSlice(args, 0, args.length - 1);
    const p = args[args.length - 1];
    safeForEach(arbs, assertIsArbitrary);
    const mappedArbs = safeMap(arbs, (arb) => new AlwaysShrinkableArbitrary(arb));
    return new AsyncProperty(tuple(...mappedArbs), (t) => p(...t));
}
export { asyncProperty };
