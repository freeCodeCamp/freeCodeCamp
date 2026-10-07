import { Subject } from '../Subject';
import { Subscription } from '../Subscription';
import { SubscriptionLoggable } from './SubscriptionLoggable';
import { applyMixins } from '../util/applyMixins';
export class HotObservable extends Subject {
    constructor(messages, scheduler) {
        super();
        this.messages = messages;
        this.subscriptions = [];
        this.scheduler = scheduler;
    }
    _subscribe(subscriber) {
        const subject = this;
        const index = subject.logSubscribedFrame();
        const subscription = new Subscription();
        subscription.add(new Subscription(() => {
            subject.logUnsubscribedFrame(index);
        }));
        subscription.add(super._subscribe(subscriber));
        return subscription;
    }
    setup() {
        const subject = this;
        const messagesLength = subject.messages.length;
        for (var i = 0; i < messagesLength; i++) {
            (() => {
                var message = subject.messages[i];
                subject.scheduler.schedule(() => { message.notification.observe(subject); }, message.frame);
            })();
        }
    }
}
applyMixins(HotObservable, [SubscriptionLoggable]);
//# sourceMappingURL=HotObservable.js.map