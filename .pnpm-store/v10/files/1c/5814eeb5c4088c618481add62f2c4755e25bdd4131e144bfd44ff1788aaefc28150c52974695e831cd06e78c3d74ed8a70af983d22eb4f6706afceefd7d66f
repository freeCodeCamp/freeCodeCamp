import { Observable } from '../Observable';
import { Subscription } from '../Subscription';
import { SubscriptionLoggable } from './SubscriptionLoggable';
import { applyMixins } from '../util/applyMixins';
export class ColdObservable extends Observable {
    constructor(messages, scheduler) {
        super(function (subscriber) {
            const observable = this;
            const index = observable.logSubscribedFrame();
            const subscription = new Subscription();
            subscription.add(new Subscription(() => {
                observable.logUnsubscribedFrame(index);
            }));
            observable.scheduleMessages(subscriber);
            return subscription;
        });
        this.messages = messages;
        this.subscriptions = [];
        this.scheduler = scheduler;
    }
    scheduleMessages(subscriber) {
        const messagesLength = this.messages.length;
        for (let i = 0; i < messagesLength; i++) {
            const message = this.messages[i];
            subscriber.add(this.scheduler.schedule(({ message, subscriber }) => { message.notification.observe(subscriber); }, message.frame, { message, subscriber }));
        }
    }
}
applyMixins(ColdObservable, [SubscriptionLoggable]);
//# sourceMappingURL=ColdObservable.js.map