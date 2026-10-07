import { Subscriber } from '../Subscriber';
import { rxSubscriber as rxSubscriberSymbol } from '../symbol/rxSubscriber';
import { empty as emptyObserver } from '../Observer';
export function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriberSymbol]) {
            return nextOrObserver[rxSubscriberSymbol]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber(emptyObserver);
    }
    return new Subscriber(nextOrObserver, error, complete);
}
//# sourceMappingURL=toSubscriber.js.map