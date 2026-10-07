import { Value } from '../../../check/arbitrary/definition/Value.js';
import { cloneMethod } from '../../../check/symbols.js';
import { safeMap, safePush } from '../../../utils/globals.js';
import { stringify, toStringMethod } from '../../../utils/stringify.js';
const safeObjectAssign = Object.assign;
export function buildGeneratorValue(mrng, biasFactor, computePreBuiltValues, arbitraryCache) {
    const preBuiltValues = computePreBuiltValues();
    let localMrng = mrng.clone();
    const context = { mrng: mrng.clone(), biasFactor, history: [] };
    const valueFunction = (arb) => {
        const preBuiltValue = preBuiltValues[context.history.length];
        if (preBuiltValue !== undefined && preBuiltValue.arb === arb) {
            const value = preBuiltValue.value;
            safePush(context.history, { arb, value, context: preBuiltValue.context, mrng: preBuiltValue.mrng });
            localMrng = preBuiltValue.mrng.clone();
            return value;
        }
        const g = arb.generate(localMrng, biasFactor);
        safePush(context.history, { arb, value: g.value_, context: g.context, mrng: localMrng.clone() });
        return g.value;
    };
    const memoedValueFunction = (arb, ...args) => {
        return valueFunction(arbitraryCache(arb, args));
    };
    const valueMethods = {
        values() {
            return safeMap(context.history, (c) => c.value);
        },
        [cloneMethod]() {
            return buildGeneratorValue(mrng, biasFactor, computePreBuiltValues, arbitraryCache).value;
        },
        [toStringMethod]() {
            return stringify(safeMap(context.history, (c) => c.value));
        },
    };
    const value = safeObjectAssign(memoedValueFunction, valueMethods);
    return new Value(value, context);
}
