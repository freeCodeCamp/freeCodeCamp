import { Subject } from './Subject';
import { Subscriber } from './Subscriber';
import { Subscription } from './Subscription';
import { SubscriptionLike } from './types';
import { ObjectUnsubscribedError } from './util/ObjectUnsubscribedError';

/**
 * A variant of Subject that requires an initial value and emits its current
 * value whenever it is subscribed to.
 *
 * @class BehaviorSubject<T>
 */
export class BehaviorSubject<T> extends Subject<T> {

  constructor(private _value: T) {
    super();
  }

  get value(): T {
    return this.getValue();
  }

  /** @deprecated This is an internal implementation detail, do not use. */
  _subscribe(subscriber: Subscriber<T>): Subscription {
    const subscription = super._subscribe(subscriber);
    if (subscription && !(<SubscriptionLike>subscription).closed) {
      subscriber.next(this._value);
    }
    return subscription;
  }

  getValue(): T {
    if (this.hasError) {
      throw this.thrownError;
    } else if (this.closed) {
      throw new ObjectUnsubscribedError();
    } else {
      return this._value;
    }
  }

  next(value: T): void {
    super.next(this._value = value);
  }
}
