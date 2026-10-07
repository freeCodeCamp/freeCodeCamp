"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloneArbitrary = void 0;
const Arbitrary_1 = require("../../check/arbitrary/definition/Arbitrary");
const Value_1 = require("../../check/arbitrary/definition/Value");
const symbols_1 = require("../../check/symbols");
const Stream_1 = require("../../stream/Stream");
const globals_1 = require("../../utils/globals");
const safeSymbolIterator = Symbol.iterator;
const safeIsArray = Array.isArray;
const safeObjectIs = Object.is;
class CloneArbitrary extends Arbitrary_1.Arbitrary {
    constructor(arb, numValues) {
        super();
        this.arb = arb;
        this.numValues = numValues;
    }
    generate(mrng, biasFactor) {
        const items = [];
        if (this.numValues <= 0) {
            return this.wrapper(items);
        }
        for (let idx = 0; idx !== this.numValues - 1; ++idx) {
            (0, globals_1.safePush)(items, this.arb.generate(mrng.clone(), biasFactor));
        }
        (0, globals_1.safePush)(items, this.arb.generate(mrng, biasFactor));
        return this.wrapper(items);
    }
    canShrinkWithoutContext(value) {
        if (!safeIsArray(value) || value.length !== this.numValues) {
            return false;
        }
        if (value.length === 0) {
            return true;
        }
        for (let index = 1; index < value.length; ++index) {
            if (!safeObjectIs(value[0], value[index])) {
                return false;
            }
        }
        return this.arb.canShrinkWithoutContext(value[0]);
    }
    shrink(value, context) {
        if (value.length === 0) {
            return Stream_1.Stream.nil();
        }
        return new Stream_1.Stream(this.shrinkImpl(value, context !== undefined ? context : [])).map((v) => this.wrapper(v));
    }
    *shrinkImpl(value, contexts) {
        const its = (0, globals_1.safeMap)(value, (v, idx) => this.arb.shrink(v, contexts[idx])[safeSymbolIterator]());
        let cur = (0, globals_1.safeMap)(its, (it) => it.next());
        while (!cur[0].done) {
            yield (0, globals_1.safeMap)(cur, (c) => c.value);
            cur = (0, globals_1.safeMap)(its, (it) => it.next());
        }
    }
    static makeItCloneable(vs, shrinkables) {
        vs[symbols_1.cloneMethod] = () => {
            const cloned = [];
            for (let idx = 0; idx !== shrinkables.length; ++idx) {
                (0, globals_1.safePush)(cloned, shrinkables[idx].value);
            }
            this.makeItCloneable(cloned, shrinkables);
            return cloned;
        };
        return vs;
    }
    wrapper(items) {
        let cloneable = false;
        const vs = [];
        const contexts = [];
        for (let idx = 0; idx !== items.length; ++idx) {
            const s = items[idx];
            cloneable = cloneable || s.hasToBeCloned;
            (0, globals_1.safePush)(vs, s.value);
            (0, globals_1.safePush)(contexts, s.context);
        }
        if (cloneable) {
            CloneArbitrary.makeItCloneable(vs, items);
        }
        return new Value_1.Value(vs, contexts);
    }
}
exports.CloneArbitrary = CloneArbitrary;
