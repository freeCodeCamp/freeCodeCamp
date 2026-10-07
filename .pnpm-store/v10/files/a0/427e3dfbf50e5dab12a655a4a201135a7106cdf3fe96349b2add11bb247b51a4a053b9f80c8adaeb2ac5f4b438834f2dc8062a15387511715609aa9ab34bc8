import { Operator } from '../Operator';
import { Subscriber } from '../Subscriber';
import { Subscription } from '../Subscription';
import { MonoTypeOperatorFunction, TeardownLogic } from '../types';
import { ConnectableObservable } from '../observable/ConnectableObservable';
import { Observable } from '../Observable';

/**
 * Make a {@link ConnectableObservable} behave like a ordinary observable and automates the way
 * you can connect to it.
 *
 * Internally it counts the subscriptions to the observable and subscribes (only once) to the source if
 * the number of subscriptions is larger than 0. If the number of subscriptions is smaller than 1, it
 * unsubscribes from the source. This way you can make sure that everything before the *published*
 * refCount has only a single subscription independently of the number of subscribers to the target
 * observable.
 *
 * Note that using the {@link share} operator is exactly the same as using the *publish* operator
 * (making the observable hot) and the *refCount* operator in a sequence.
 *
 * ![](refCount.png)
 *
 * ## Example
 *
 * In the following example there are two intervals turned into connectable observables
 * by using the *publish* operator. The first one uses the *refCount* operator, the
 * second one does not use it. You will notice that a connectable observable does nothing
 * until you call its connect function.
 *
 * ```ts
 * import { interval } from 'rxjs';
 * import { tap, publish, refCount } from 'rxjs/operators';
 *
 * // Turn the interval observable into a ConnectableObservable (hot)
 * const refCountInterval = interval(400).pipe(
 *   tap((num) => console.log(`refCount ${num}`)),
 *   publish(),
 *   refCount()
 * );
 *
 * const publishedInterval = interval(400).pipe(
 *   tap((num) => console.log(`publish ${num}`)),
 *   publish()
 * );
 *
 * refCountInterval.subscribe();
 * refCountInterval.subscribe();
 * // 'refCount 0' -----> 'refCount 1' -----> etc
 * // All subscriptions will receive the same value and the tap (and
 * // every other operator) before the publish operator will be executed
 * // only once per event independently of the number of subscriptions.
 *
 * publishedInterval.subscribe();
 * // Nothing happens until you call .connect() on the observable.
 * ```
 *
 * @see {@link ConnectableObservable}
 * @see {@link share}
 * @see {@link publish}
 */
export function refCount<T>(): MonoTypeOperatorFunction<T> {
  return function refCountOperatorFunction(source: ConnectableObservable<T>): Observable<T> {
    return source.lift(new RefCountOperator(source));
  } as MonoTypeOperatorFunction<T>;
}

class RefCountOperator<T> implements Operator<T, T> {
  constructor(private connectable: ConnectableObservable<T>) {
  }
  call(subscriber: Subscriber<T>, source: any): TeardownLogic {

    const { connectable } = this;
    (<any> connectable)._refCount++;

    const refCounter = new RefCountSubscriber(subscriber, connectable);
    const subscription = source.subscribe(refCounter);

    if (!refCounter.closed) {
      (<any> refCounter).connection = connectable.connect();
    }

    return subscription;
  }
}

class RefCountSubscriber<T> extends Subscriber<T> {

  private connection: Subscription;

  constructor(destination: Subscriber<T>,
              private connectable: ConnectableObservable<T>) {
    super(destination);
  }

  protected _unsubscribe() {

    const { connectable } = this;
    if (!connectable) {
      this.connection = null;
      return;
    }

    this.connectable = null;
    const refCount = (<any> connectable)._refCount;
    if (refCount <= 0) {
      this.connection = null;
      return;
    }

    (<any> connectable)._refCount = refCount - 1;
    if (refCount > 1) {
      this.connection = null;
      return;
    }

    ///
    // Compare the local RefCountSubscriber's connection Subscription to the
    // connection Subscription on the shared ConnectableObservable. In cases
    // where the ConnectableObservable source synchronously emits values, and
    // the RefCountSubscriber's downstream Observers synchronously unsubscribe,
    // execution continues to here before the RefCountOperator has a chance to
    // supply the RefCountSubscriber with the shared connection Subscription.
    // For example:
    // ```
    // range(0, 10).pipe(
    //   publish(),
    //   refCount(),
    //   take(5),
    // )
    // .subscribe();
    // ```
    // In order to account for this case, RefCountSubscriber should only dispose
    // the ConnectableObservable's shared connection Subscription if the
    // connection Subscription exists, *and* either:
    //   a. RefCountSubscriber doesn't have a reference to the shared connection
    //      Subscription yet, or,
    //   b. RefCountSubscriber's connection Subscription reference is identical
    //      to the shared connection Subscription
    ///
    const { connection } = this;
    const sharedConnection = (<any> connectable)._connection;
    this.connection = null;

    if (sharedConnection && (!connection || sharedConnection === connection)) {
      sharedConnection.unsubscribe();
    }
  }
}
