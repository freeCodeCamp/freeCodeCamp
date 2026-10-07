import { Stream } from '../../stream/Stream.js';
import { cloneIfNeeded, cloneMethod } from '../../check/symbols.js';
import { Arbitrary } from '../../check/arbitrary/definition/Arbitrary.js';
import { Value } from '../../check/arbitrary/definition/Value.js';
import { safeMap, safePush, safeSlice } from '../../utils/globals.js';
import { makeLazy } from '../../stream/LazyIterableIterator.js';
const safeArrayIsArray = Array.isArray;
const safeObjectDefineProperty = Object.defineProperty;
function tupleMakeItCloneable(vs, values) {
    return safeObjectDefineProperty(vs, cloneMethod, {
        value: () => {
            const cloned = [];
            for (let idx = 0; idx !== values.length; ++idx) {
                safePush(cloned, values[idx].value);
            }
            tupleMakeItCloneable(cloned, values);
            return cloned;
        },
    });
}
function tupleWrapper(values) {
    let cloneable = false;
    const vs = [];
    const ctxs = [];
    for (let idx = 0; idx !== values.length; ++idx) {
        const v = values[idx];
        cloneable = cloneable || v.hasToBeCloned;
        safePush(vs, v.value);
        safePush(ctxs, v.context);
    }
    if (cloneable) {
        tupleMakeItCloneable(vs, values);
    }
    return new Value(vs, ctxs);
}
export function tupleShrink(arbs, value, context) {
    const shrinks = [];
    const safeContext = safeArrayIsArray(context) ? context : [];
    for (let idx = 0; idx !== arbs.length; ++idx) {
        safePush(shrinks, makeLazy(() => arbs[idx]
            .shrink(value[idx], safeContext[idx])
            .map((v) => {
            const nextValues = safeMap(value, (v, idx) => new Value(cloneIfNeeded(v), safeContext[idx]));
            return [...safeSlice(nextValues, 0, idx), v, ...safeSlice(nextValues, idx + 1)];
        })
            .map(tupleWrapper)));
    }
    return Stream.nil().join(...shrinks);
}
export class TupleArbitrary extends Arbitrary {
    constructor(arbs) {
        super();
        this.arbs = arbs;
        for (let idx = 0; idx !== arbs.length; ++idx) {
            const arb = arbs[idx];
            if (arb == null || arb.generate == null)
                throw new Error(`Invalid parameter encountered at index ${idx}: expecting an Arbitrary`);
        }
    }
    generate(mrng, biasFactor) {
        const mapped = [];
        for (let idx = 0; idx !== this.arbs.length; ++idx) {
            safePush(mapped, this.arbs[idx].generate(mrng, biasFactor));
        }
        return tupleWrapper(mapped);
    }
    canShrinkWithoutContext(value) {
        if (!safeArrayIsArray(value) || value.length !== this.arbs.length) {
            return false;
        }
        for (let index = 0; index !== this.arbs.length; ++index) {
            if (!this.arbs[index].canShrinkWithoutContext(value[index])) {
                return false;
            }
        }
        return true;
    }
    shrink(value, context) {
        return tupleShrink(this.arbs, value, context);
    }
}
