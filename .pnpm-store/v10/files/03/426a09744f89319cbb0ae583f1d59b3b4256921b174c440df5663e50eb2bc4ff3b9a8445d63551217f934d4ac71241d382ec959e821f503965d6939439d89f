import { Subject } from '../Subject';
import { Subscriber } from '../Subscriber';
import { Subscription } from '../Subscription';
import { Scheduler } from '../Scheduler';
import { TestMessage } from './TestMessage';
import { SubscriptionLog } from './SubscriptionLog';
import { SubscriptionLoggable } from './SubscriptionLoggable';
import { applyMixins } from '../util/applyMixins';

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
export class HotObservable<T> extends Subject<T> implements SubscriptionLoggable {
  public subscriptions: SubscriptionLog[] = [];
  scheduler: Scheduler;
  logSubscribedFrame: () => number;
  logUnsubscribedFrame: (index: number) => void;

  constructor(public messages: TestMessage[],
              scheduler: Scheduler) {
    super();
    this.scheduler = scheduler;
  }

  /** @deprecated This is an internal implementation detail, do not use. */
  _subscribe(subscriber: Subscriber<any>): Subscription {
    const subject: HotObservable<T> = this;
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
    /* tslint:disable:no-var-keyword */
    for (var i = 0; i < messagesLength; i++) {
      (() => {
        var message = subject.messages[i];
   /* tslint:enable */
        subject.scheduler.schedule(
          () => { message.notification.observe(subject); },
          message.frame
        );
      })();
    }
  }
}
applyMixins(HotObservable, [SubscriptionLoggable]);
