"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stream = void 0;
exports.stream = stream;
const StreamHelpers_1 = require("./StreamHelpers");
const safeSymbolIterator = Symbol.iterator;
class Stream {
    static nil() {
        return new Stream((0, StreamHelpers_1.nilHelper)());
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
        return new Stream((0, StreamHelpers_1.mapHelper)(this.g, f));
    }
    flatMap(f) {
        return new Stream((0, StreamHelpers_1.flatMapHelper)(this.g, f));
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
        return new Stream((0, StreamHelpers_1.takeWhileHelper)(this.g, f));
    }
    take(n) {
        return new Stream((0, StreamHelpers_1.takeNHelper)(this.g, n));
    }
    filter(f) {
        return new Stream((0, StreamHelpers_1.filterHelper)(this.g, f));
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
        return new Stream((0, StreamHelpers_1.joinHelper)(this.g, others));
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
exports.Stream = Stream;
function stream(g) {
    return new Stream(g);
}
