import { unboxedToBoxedMapper, unboxedToBoxedUnmapper } from '../mappers/UnboxedToBoxed.js';
export function boxedArbitraryBuilder(arb) {
    return arb.map(unboxedToBoxedMapper, unboxedToBoxedUnmapper);
}
