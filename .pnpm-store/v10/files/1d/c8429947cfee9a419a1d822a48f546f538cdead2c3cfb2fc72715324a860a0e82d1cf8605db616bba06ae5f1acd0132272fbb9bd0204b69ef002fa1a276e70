"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TupleArbitrary = void 0;
exports.tupleShrink = tupleShrink;
const Stream_1 = require("../../stream/Stream");
const symbols_1 = require("../../check/symbols");
const Arbitrary_1 = require("../../check/arbitrary/definition/Arbitrary");
const Value_1 = require("../../check/arbitrary/definition/Value");
const globals_1 = require("../../utils/globals");
const LazyIterableIterator_1 = require("../../stream/LazyIterableIterator");
const safeArrayIsArray = Array.isArray;
const safeObjectDefineProperty = Object.defineProperty;
function tupleMakeItCloneable(vs, values) {
    return safeObjectDefineProperty(vs, symbols_1.cloneMethod, {
        value: () => {
            const cloned = [];
            for (let idx = 0; idx !== values.length; ++idx) {
                (0, globals_1.safePush)(cloned, values[idx].value);
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
        (0, globals_1.safePush)(vs, v.value);
        (0, globals_1.safePush)(ctxs, v.context);
    }
    if (cloneable) {
        tupleMakeItCloneable(vs, values);
    }
    return new Value_1.Value(vs, ctxs);
}
function tupleShrink(arbs, value, context) {
    const shrinks = [];
    const safeContext = safeArrayIsArray(context) ? context : [];
    for (let idx = 0; idx !== arbs.length; ++idx) {
        (0, globals_1.safePush)(shrinks, (0, LazyIterableIterator_1.makeLazy)(() => arbs[idx]
            .shrink(value[idx], safeContext[idx])
            .map((v) => {
            const nextValues = (0, globals_1.safeMap)(value, (v, idx) => new Value_1.Value((0, symbols_1.cloneIfNeeded)(v), safeContext[idx]));
            return [...(0, globals_1.safeSlice)(nextValues, 0, idx), v, ...(0, globals_1.safeSlice)(nextValues, idx + 1)];
        })
            .map(tupleWrapper)));
    }
    return Stream_1.Stream.nil().join(...shrinks);
}
class TupleArbitrary extends Arbitrary_1.Arbitrary {
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
            (0, globals_1.safePush)(mapped, this.arbs[idx].generate(mrng, biasFactor));
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
exports.TupleArbitrary = TupleArbitrary;
