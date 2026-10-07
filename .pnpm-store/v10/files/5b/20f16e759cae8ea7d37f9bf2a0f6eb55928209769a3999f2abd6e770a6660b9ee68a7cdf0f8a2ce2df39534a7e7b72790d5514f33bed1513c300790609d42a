import { Subject } from '../Subject';
import { SimpleOuterSubscriber, innerSubscribe, SimpleInnerSubscriber } from '../innerSubscribe';
export function repeatWhen(notifier) {
    return (source) => source.lift(new RepeatWhenOperator(notifier));
}
class RepeatWhenOperator {
    constructor(notifier) {
        this.notifier = notifier;
    }
    call(subscriber, source) {
        return source.subscribe(new RepeatWhenSubscriber(subscriber, this.notifier, source));
    }
}
class RepeatWhenSubscriber extends SimpleOuterSubscriber {
    constructor(destination, notifier, source) {
        super(destination);
        this.notifier = notifier;
        this.source = source;
        this.sourceIsBeingSubscribedTo = true;
    }
    notifyNext() {
        this.sourceIsBeingSubscribedTo = true;
        this.source.subscribe(this);
    }
    notifyComplete() {
        if (this.sourceIsBeingSubscribedTo === false) {
            return super.complete();
        }
    }
    complete() {
        this.sourceIsBeingSubscribedTo = false;
        if (!this.isStopped) {
            if (!this.retries) {
                this.subscribeToRetries();
            }
            if (!this.retriesSubscription || this.retriesSubscription.closed) {
                return super.complete();
            }
            this._unsubscribeAndRecycle();
            this.notifications.next(undefined);
        }
    }
    _unsubscribe() {
        const { notifications, retriesSubscription } = this;
        if (notifications) {
            notifications.unsubscribe();
            this.notifications = undefined;
        }
        if (retriesSubscription) {
            retriesSubscription.unsubscribe();
            this.retriesSubscription = undefined;
        }
        this.retries = undefined;
    }
    _unsubscribeAndRecycle() {
        const { _unsubscribe } = this;
        this._unsubscribe = null;
        super._unsubscribeAndRecycle();
        this._unsubscribe = _unsubscribe;
        return this;
    }
    subscribeToRetries() {
        this.notifications = new Subject();
        let retries;
        try {
            const { notifier } = this;
            retries = notifier(this.notifications);
        }
        catch (e) {
            return super.complete();
        }
        this.retries = retries;
        this.retriesSubscription = innerSubscribe(retries, new SimpleInnerSubscriber(this));
    }
}
//# sourceMappingURL=repeatWhen.js.map