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
export function makeLazy(producer) {
    return new LazyIterableIterator(producer);
}
