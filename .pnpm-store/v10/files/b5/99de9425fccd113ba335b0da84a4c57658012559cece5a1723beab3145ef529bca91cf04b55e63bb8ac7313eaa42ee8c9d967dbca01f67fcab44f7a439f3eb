import { innerSubscribe, SimpleInnerSubscriber, SimpleOuterSubscriber } from '../innerSubscribe';
export function takeUntil(notifier) {
    return (source) => source.lift(new TakeUntilOperator(notifier));
}
class TakeUntilOperator {
    constructor(notifier) {
        this.notifier = notifier;
    }
    call(subscriber, source) {
        const takeUntilSubscriber = new TakeUntilSubscriber(subscriber);
        const notifierSubscription = innerSubscribe(this.notifier, new SimpleInnerSubscriber(takeUntilSubscriber));
        if (notifierSubscription && !takeUntilSubscriber.seenValue) {
            takeUntilSubscriber.add(notifierSubscription);
            return source.subscribe(takeUntilSubscriber);
        }
        return takeUntilSubscriber;
    }
}
class TakeUntilSubscriber extends SimpleOuterSubscriber {
    constructor(destination) {
        super(destination);
        this.seenValue = false;
    }
    notifyNext() {
        this.seenValue = true;
        this.complete();
    }
    notifyComplete() {
    }
}
//# sourceMappingURL=takeUntil.js.map