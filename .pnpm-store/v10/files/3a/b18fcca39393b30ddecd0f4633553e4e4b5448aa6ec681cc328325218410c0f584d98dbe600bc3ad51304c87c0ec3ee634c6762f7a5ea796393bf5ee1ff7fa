import { Subject } from './Subject';
import { Subscriber } from './Subscriber';
import { Subscription } from './Subscription';

/**
 * A variant of Subject that only emits a value when it completes. It will emit
 * its latest value to all its observers on completion.
 *
 * @class AsyncSubject<T>
 */
export class AsyncSubject<T> extends Subject<T> {
  private value: T = null;
  private hasNext: boolean = false;
  private hasCompleted: boolean = false;

  /** @deprecated This is an internal implementation detail, do not use. */
  _subscribe(subscriber: Subscriber<any>): Subscription {
    if (this.hasError) {
      subscriber.error(this.thrownError);
      return Subscription.EMPTY;
    } else if (this.hasCompleted && this.hasNext) {
      subscriber.next(this.value);
      subscriber.complete();
      return Subscription.EMPTY;
    }
    return super._subscribe(subscriber);
  }

  next(value: T): void {
    if (!this.hasCompleted) {
      this.value = value;
      this.hasNext = true;
    }
  }

  error(error: any): void {
    if (!this.hasCompleted) {
      super.error(error);
    }
  }

  complete(): void {
    this.hasCompleted = true;
    if (this.hasNext) {
      super.next(this.value);
    }
    super.complete();
  }
}
