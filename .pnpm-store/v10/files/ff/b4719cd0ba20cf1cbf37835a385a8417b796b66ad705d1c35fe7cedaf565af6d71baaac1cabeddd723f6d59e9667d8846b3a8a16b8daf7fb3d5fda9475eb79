import { Arbitrary } from '../../check/arbitrary/definition/Arbitrary.js';
import { Value } from '../../check/arbitrary/definition/Value.js';
import { cloneMethod } from '../../check/symbols.js';
import { Stream } from '../../stream/Stream.js';
import { safeJoin, safePush } from '../../utils/globals.js';
import { asyncStringify, asyncToStringMethod, stringify, toStringMethod } from '../../utils/stringify.js';
const safeObjectDefineProperties = Object.defineProperties;
function prettyPrint(seenValuesStrings) {
    return `Stream(${safeJoin(seenValuesStrings, ',')}…)`;
}
export class StreamArbitrary extends Arbitrary {
    constructor(arb) {
        super();
        this.arb = arb;
    }
    generate(mrng, biasFactor) {
        const appliedBiasFactor = biasFactor !== undefined && mrng.nextInt(1, biasFactor) === 1 ? biasFactor : undefined;
        const enrichedProducer = () => {
            const seenValues = [];
            const g = function* (arb, clonedMrng) {
                while (true) {
                    const value = arb.generate(clonedMrng, appliedBiasFactor).value;
                    safePush(seenValues, value);
                    yield value;
                }
            };
            const s = new Stream(g(this.arb, mrng.clone()));
            return safeObjectDefineProperties(s, {
                toString: { value: () => prettyPrint(seenValues.map(stringify)) },
                [toStringMethod]: { value: () => prettyPrint(seenValues.map(stringify)) },
                [asyncToStringMethod]: { value: async () => prettyPrint(await Promise.all(seenValues.map(asyncStringify))) },
                [cloneMethod]: { value: enrichedProducer, enumerable: true },
            });
        };
        return new Value(enrichedProducer(), undefined);
    }
    canShrinkWithoutContext(value) {
        return false;
    }
    shrink(_value, _context) {
        return Stream.nil();
    }
}
