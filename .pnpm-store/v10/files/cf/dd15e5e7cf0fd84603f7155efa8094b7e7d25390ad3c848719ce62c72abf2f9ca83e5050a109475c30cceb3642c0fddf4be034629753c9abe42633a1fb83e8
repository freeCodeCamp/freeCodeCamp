import { Subscriber } from '../Subscriber';
import { noop } from '../util/noop';
import { isFunction } from '../util/isFunction';
export function tap(nextOrObserver, error, complete) {
    return function tapOperatorFunction(source) {
        return source.lift(new DoOperator(nextOrObserver, error, complete));
    };
}
class DoOperator {
    constructor(nextOrObserver, error, complete) {
        this.nextOrObserver = nextOrObserver;
        this.error = error;
        this.complete = complete;
    }
    call(subscriber, source) {
        return source.subscribe(new TapSubscriber(subscriber, this.nextOrObserver, this.error, this.complete));
    }
}
class TapSubscriber extends Subscriber {
    constructor(destination, observerOrNext, error, complete) {
        super(destination);
        this._tapNext = noop;
        this._tapError = noop;
        this._tapComplete = noop;
        this._tapError = error || noop;
        this._tapComplete = complete || noop;
        if (isFunction(observerOrNext)) {
            this._context = this;
            this._tapNext = observerOrNext;
        }
        else if (observerOrNext) {
            this._context = observerOrNext;
            this._tapNext = observerOrNext.next || noop;
            this._tapError = observerOrNext.error || noop;
            this._tapComplete = observerOrNext.complete || noop;
        }
    }
    _next(value) {
        try {
            this._tapNext.call(this._context, value);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(value);
    }
    _error(err) {
        try {
            this._tapError.call(this._context, err);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.error(err);
    }
    _complete() {
        try {
            this._tapComplete.call(this._context);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        return this.destination.complete();
    }
}
//# sourceMappingURL=tap.js.map