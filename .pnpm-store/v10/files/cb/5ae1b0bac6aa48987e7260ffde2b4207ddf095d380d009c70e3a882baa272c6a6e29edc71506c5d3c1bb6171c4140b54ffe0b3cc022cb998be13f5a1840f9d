import { Subscriber } from './Subscriber';
import { InnerSubscriber } from './InnerSubscriber';

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
export class OuterSubscriber<T, R> extends Subscriber<T> {
  notifyNext(outerValue: T, innerValue: R,
             outerIndex: number, innerIndex: number,
             innerSub: InnerSubscriber<T, R>): void {
    this.destination.next(innerValue);
  }

  notifyError(error: any, innerSub: InnerSubscriber<T, R>): void {
    this.destination.error(error);
  }

  notifyComplete(innerSub: InnerSubscriber<T, R>): void {
    this.destination.complete();
  }
}
