import { filterHelper, flatMapHelper, joinHelper, mapHelper, nilHelper, takeNHelper, takeWhileHelper, } from './StreamHelpers.js';
const safeSymbolIterator = Symbol.iterator;
export class Stream {
    static nil() {
        return new Stream(nilHelper());
    }
    static of(...elements) {
        return new Stream(elements[safeSymbolIterator]());
    }
    constructor(g) {
        this.g = g;
    }
    next() {
        return this.g.next();
    }
    [Symbol.iterator]() {
        return this.g;
    }
    map(f) {
        return new Stream(mapHelper(this.g, f));
    }
    flatMap(f) {
        return new Stream(flatMapHelper(this.g, f));
    }
    dropWhile(f) {
        let foundEligible = false;
        function* helper(v) {
            if (foundEligible || !f(v)) {
                foundEligible = true;
                yield v;
            }
        }
        return this.flatMap(helper);
    }
    drop(n) {
        if (n <= 0) {
            return this;
        }
        let idx = 0;
        function helper() {
            return idx++ < n;
        }
        return this.dropWhile(helper);
    }
    takeWhile(f) {
        return new Stream(takeWhileHelper(this.g, f));
    }
    take(n) {
        return new Stream(takeNHelper(this.g, n));
    }
    filter(f) {
        return new Stream(filterHelper(this.g, f));
    }
    every(f) {
        for (const v of this.g) {
            if (!f(v)) {
                return false;
            }
        }
        return true;
    }
    has(f) {
        for (const v of this.g) {
            if (f(v)) {
                return [true, v];
            }
        }
        return [false, null];
    }
    join(...others) {
        return new Stream(joinHelper(this.g, others));
    }
    getNthOrLast(nth) {
        let remaining = nth;
        let last = null;
        for (const v of this.g) {
            if (remaining-- === 0)
                return v;
            last = v;
        }
        return last;
    }
}
export function stream(g) {
    return new Stream(g);
}
