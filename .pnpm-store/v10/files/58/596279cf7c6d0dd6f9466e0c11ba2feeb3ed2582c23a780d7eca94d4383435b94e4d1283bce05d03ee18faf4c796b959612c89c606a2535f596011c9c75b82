"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLazy = makeLazy;
class LazyIterableIterator {
    constructor(producer) {
        this.producer = producer;
    }
    [Symbol.iterator]() {
        if (this.it === undefined) {
            this.it = this.producer();
        }
        return this.it;
    }
    next() {
        if (this.it === undefined) {
            this.it = this.producer();
        }
        return this.it.next();
    }
}
function makeLazy(producer) {
    return new LazyIterableIterator(producer);
}
