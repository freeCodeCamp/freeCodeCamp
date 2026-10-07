export class SourceValuesIterator {
    constructor(initialValues, maxInitialIterations, remainingSkips) {
        this.initialValues = initialValues;
        this.maxInitialIterations = maxInitialIterations;
        this.remainingSkips = remainingSkips;
    }
    [Symbol.iterator]() {
        return this;
    }
    next() {
        if (--this.maxInitialIterations !== -1 && this.remainingSkips >= 0) {
            const n = this.initialValues.next();
            if (!n.done)
                return { value: n.value, done: false };
        }
        return { value: undefined, done: true };
    }
    skippedOne() {
        --this.remainingSkips;
        ++this.maxInitialIterations;
    }
}
