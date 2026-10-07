import { Observable } from '../Observable';
import { Subscription } from '../Subscription';
import { Scheduler } from '../Scheduler';
import { TestMessage } from './TestMessage';
import { SubscriptionLog } from './SubscriptionLog';
import { SubscriptionLoggable } from './SubscriptionLoggable';
import { applyMixins } from '../util/applyMixins';
import { Subscriber } from '../Subscriber';

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
export class ColdObservable<T> extends Observable<T> implements SubscriptionLoggable {
  public subscriptions: SubscriptionLog[] = [];
  scheduler: Scheduler;
  logSubscribedFrame: () => number;
  logUnsubscribedFrame: (index: number) => void;

  constructor(public messages: TestMessage[],
              scheduler: Scheduler) {
    super(function (this: Observable<T>, subscriber: Subscriber<any>) {
      const observable: ColdObservable<T> = this as any;
      const index = observable.logSubscribedFrame();
      const subscription = new Subscription();
      subscription.add(new Subscription(() => {
        observable.logUnsubscribedFrame(index);
      }));
      observable.scheduleMessages(subscriber);
      return subscription;
    });
    this.scheduler = scheduler;
  }

  scheduleMessages(subscriber: Subscriber<any>) {
    const messagesLength = this.messages.length;
    for (let i = 0; i < messagesLength; i++) {
      const message = this.messages[i];
      subscriber.add(
        this.scheduler.schedule(({ message, subscriber }) => { message.notification.observe(subscriber); },
          message.frame,
          { message, subscriber })
      );
    }
  }
}
applyMixins(ColdObservable, [SubscriptionLoggable]);
