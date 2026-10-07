import { SimpleOuterSubscriber, SimpleInnerSubscriber, innerSubscribe } from '../innerSubscribe';
export function mergeScan(accumulator, seed, concurrent = Number.POSITIVE_INFINITY) {
    return (source) => source.lift(new MergeScanOperator(accumulator, seed, concurrent));
}
export class MergeScanOperator {
    constructor(accumulator, seed, concurrent) {
        this.accumulator = accumulator;
        this.seed = seed;
        this.concurrent = concurrent;
    }
    call(subscriber, source) {
        return source.subscribe(new MergeScanSubscriber(subscriber, this.accumulator, this.seed, this.concurrent));
    }
}
export class MergeScanSubscriber extends SimpleOuterSubscriber {
    constructor(destination, accumulator, acc, concurrent) {
        super(destination);
        this.accumulator = accumulator;
        this.acc = acc;
        this.concurrent = concurrent;
        this.hasValue = false;
        this.hasCompleted = false;
        this.buffer = [];
        this.active = 0;
        this.index = 0;
    }
    _next(value) {
        if (this.active < this.concurrent) {
            const index = this.index++;
            const destination = this.destination;
            let ish;
            try {
                const { accumulator } = this;
                ish = accumulator(this.acc, value, index);
            }
            catch (e) {
                return destination.error(e);
            }
            this.active++;
            this._innerSub(ish);
        }
        else {
            this.buffer.push(value);
        }
    }
    _innerSub(ish) {
        const innerSubscriber = new SimpleInnerSubscriber(this);
        const destination = this.destination;
        destination.add(innerSubscriber);
        const innerSubscription = innerSubscribe(ish, innerSubscriber);
        if (innerSubscription !== innerSubscriber) {
            destination.add(innerSubscription);
        }
    }
    _complete() {
        this.hasCompleted = true;
        if (this.active === 0 && this.buffer.length === 0) {
            if (this.hasValue === false) {
                this.destination.next(this.acc);
            }
            this.destination.complete();
        }
        this.unsubscribe();
    }
    notifyNext(innerValue) {
        const { destination } = this;
        this.acc = innerValue;
        this.hasValue = true;
        destination.next(innerValue);
    }
    notifyComplete() {
        const buffer = this.buffer;
        this.active--;
        if (buffer.length > 0) {
            this._next(buffer.shift());
        }
        else if (this.active === 0 && this.hasCompleted) {
            if (this.hasValue === false) {
                this.destination.next(this.acc);
            }
            this.destination.complete();
        }
    }
}
//# sourceMappingURL=mergeScan.js.map