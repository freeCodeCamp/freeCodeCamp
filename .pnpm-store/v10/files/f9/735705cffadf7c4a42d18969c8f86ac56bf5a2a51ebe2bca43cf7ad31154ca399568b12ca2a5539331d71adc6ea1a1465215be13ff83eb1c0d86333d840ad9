import { Observable } from '../Observable';
import { Scheduler } from '../Scheduler';
import { TestMessage } from './TestMessage';
import { SubscriptionLog } from './SubscriptionLog';
import { SubscriptionLoggable } from './SubscriptionLoggable';
import { Subscriber } from '../Subscriber';
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
export declare class ColdObservable<T> extends Observable<T> implements SubscriptionLoggable {
    messages: TestMessage[];
    subscriptions: SubscriptionLog[];
    scheduler: Scheduler;
    logSubscribedFrame: () => number;
    logUnsubscribedFrame: (index: number) => void;
    constructor(messages: TestMessage[], scheduler: Scheduler);
    scheduleMessages(subscriber: Subscriber<any>): void;
}
