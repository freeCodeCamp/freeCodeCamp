import { SimpleOuterSubscriber, SimpleInnerSubscriber, innerSubscribe } from '../innerSubscribe';
export function catchError(selector) {
    return function catchErrorOperatorFunction(source) {
        const operator = new CatchOperator(selector);
        const caught = source.lift(operator);
        return (operator.caught = caught);
    };
}
class CatchOperator {
    constructor(selector) {
        this.selector = selector;
    }
    call(subscriber, source) {
        return source.subscribe(new CatchSubscriber(subscriber, this.selector, this.caught));
    }
}
class CatchSubscriber extends SimpleOuterSubscriber {
    constructor(destination, selector, caught) {
        super(destination);
        this.selector = selector;
        this.caught = caught;
    }
    error(err) {
        if (!this.isStopped) {
            let result;
            try {
                result = this.selector(err, this.caught);
            }
            catch (err2) {
                super.error(err2);
                return;
            }
            this._unsubscribeAndRecycle();
            const innerSubscriber = new SimpleInnerSubscriber(this);
            this.add(innerSubscriber);
            const innerSubscription = innerSubscribe(result, innerSubscriber);
            if (innerSubscription !== innerSubscriber) {
                this.add(innerSubscription);
            }
        }
    }
}
//# sourceMappingURL=catchError.js.map