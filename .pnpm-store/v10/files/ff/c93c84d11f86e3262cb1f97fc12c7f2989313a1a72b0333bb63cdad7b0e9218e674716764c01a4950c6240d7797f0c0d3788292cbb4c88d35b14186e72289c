import { Subscriber } from './Subscriber';
import { Observable } from './Observable';
import { subscribeTo } from './util/subscribeTo';
export class SimpleInnerSubscriber extends Subscriber {
    constructor(parent) {
        super();
        this.parent = parent;
    }
    _next(value) {
        this.parent.notifyNext(value);
    }
    _error(error) {
        this.parent.notifyError(error);
        this.unsubscribe();
    }
    _complete() {
        this.parent.notifyComplete();
        this.unsubscribe();
    }
}
export class ComplexInnerSubscriber extends Subscriber {
    constructor(parent, outerValue, outerIndex) {
        super();
        this.parent = parent;
        this.outerValue = outerValue;
        this.outerIndex = outerIndex;
    }
    _next(value) {
        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this);
    }
    _error(error) {
        this.parent.notifyError(error);
        this.unsubscribe();
    }
    _complete() {
        this.parent.notifyComplete(this);
        this.unsubscribe();
    }
}
export class SimpleOuterSubscriber extends Subscriber {
    notifyNext(innerValue) {
        this.destination.next(innerValue);
    }
    notifyError(err) {
        this.destination.error(err);
    }
    notifyComplete() {
        this.destination.complete();
    }
}
export class ComplexOuterSubscriber extends Subscriber {
    notifyNext(_outerValue, innerValue, _outerIndex, _innerSub) {
        this.destination.next(innerValue);
    }
    notifyError(error) {
        this.destination.error(error);
    }
    notifyComplete(_innerSub) {
        this.destination.complete();
    }
}
export function innerSubscribe(result, innerSubscriber) {
    if (innerSubscriber.closed) {
        return undefined;
    }
    if (result instanceof Observable) {
        return result.subscribe(innerSubscriber);
    }
    let subscription;
    try {
        subscription = subscribeTo(result)(innerSubscriber);
    }
    catch (error) {
        innerSubscriber.error(error);
    }
    return subscription;
}
//# sourceMappingURL=innerSubscribe.js.map