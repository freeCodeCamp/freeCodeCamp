import { Arbitrary } from '../../check/arbitrary/definition/Arbitrary.js';
import { Value } from '../../check/arbitrary/definition/Value.js';
import { cloneMethod } from '../../check/symbols.js';
import { Stream } from '../../stream/Stream.js';
import { safeMap, safePush } from '../../utils/globals.js';
const safeSymbolIterator = Symbol.iterator;
const safeIsArray = Array.isArray;
const safeObjectIs = Object.is;
export class CloneArbitrary extends Arbitrary {
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
            safePush(items, this.arb.generate(mrng.clone(), biasFactor));
        }
        safePush(items, this.arb.generate(mrng, biasFactor));
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
            return Stream.nil();
        }
        return new Stream(this.shrinkImpl(value, context !== undefined ? context : [])).map((v) => this.wrapper(v));
    }
    *shrinkImpl(value, contexts) {
        const its = safeMap(value, (v, idx) => this.arb.shrink(v, contexts[idx])[safeSymbolIterator]());
        let cur = safeMap(its, (it) => it.next());
        while (!cur[0].done) {
            yield safeMap(cur, (c) => c.value);
            cur = safeMap(its, (it) => it.next());
        }
    }
    static makeItCloneable(vs, shrinkables) {
        vs[cloneMethod] = () => {
            const cloned = [];
            for (let idx = 0; idx !== shrinkables.length; ++idx) {
                safePush(cloned, shrinkables[idx].value);
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
            safePush(vs, s.value);
            safePush(contexts, s.context);
        }
        if (cloneable) {
            CloneArbitrary.makeItCloneable(vs, items);
        }
        return new Value(vs, contexts);
    }
}
