import { SimpleOuterSubscriber, innerSubscribe, SimpleInnerSubscriber } from '../innerSubscribe';
export function distinct(keySelector, flushes) {
    return (source) => source.lift(new DistinctOperator(keySelector, flushes));
}
class DistinctOperator {
    constructor(keySelector, flushes) {
        this.keySelector = keySelector;
        this.flushes = flushes;
    }
    call(subscriber, source) {
        return source.subscribe(new DistinctSubscriber(subscriber, this.keySelector, this.flushes));
    }
}
export class DistinctSubscriber extends SimpleOuterSubscriber {
    constructor(destination, keySelector, flushes) {
        super(destination);
        this.keySelector = keySelector;
        this.values = new Set();
        if (flushes) {
            this.add(innerSubscribe(flushes, new SimpleInnerSubscriber(this)));
        }
    }
    notifyNext() {
        this.values.clear();
    }
    notifyError(error) {
        this._error(error);
    }
    _next(value) {
        if (this.keySelector) {
            this._useKeySelector(value);
        }
        else {
            this._finalizeNext(value, value);
        }
    }
    _useKeySelector(value) {
        let key;
        const { destination } = this;
        try {
            key = this.keySelector(value);
        }
        catch (err) {
            destination.error(err);
            return;
        }
        this._finalizeNext(key, value);
    }
    _finalizeNext(key, value) {
        const { values } = this;
        if (!values.has(key)) {
            values.add(key);
            this.destination.next(value);
        }
    }
}
//# sourceMappingURL=distinct.js.map