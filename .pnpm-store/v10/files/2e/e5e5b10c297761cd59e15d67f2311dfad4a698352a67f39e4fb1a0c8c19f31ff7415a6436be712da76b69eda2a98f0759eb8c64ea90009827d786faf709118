import { Operator } from '../Operator';
import { Subscriber } from '../Subscriber';
import { Observable } from '../Observable';
import { MonoTypeOperatorFunction, TeardownLogic, ObservableInput } from '../types';
import { Subscription } from '../Subscription';
import { SimpleOuterSubscriber, SimpleInnerSubscriber, innerSubscribe } from '../innerSubscribe';

/**
 * Returns an Observable that skips items emitted by the source Observable until a second Observable emits an item.
 *
 * The `skipUntil` operator causes the observable stream to skip the emission of values ​​until the passed in observable emits the first value.
 * This can be particularly useful in combination with user interactions, responses of http requests or waiting for specific times to pass by.
 *
 * ![](skipUntil.png)
 *
 * Internally the `skipUntil` operator subscribes to the passed in observable (in the following called *notifier*) in order to recognize the emission
 * of its first value. When this happens, the operator unsubscribes from the *notifier* and starts emitting the values of the *source*
 * observable. It will never let the *source* observable emit any values if the *notifier* completes or throws an error without emitting
 * a value before.
 *
 * ## Example
 *
 * In the following example, all emitted values ​​of the interval observable are skipped until the user clicks anywhere within the page.
 *
 * ```ts
 * import { interval, fromEvent } from 'rxjs';
 * import { skipUntil } from 'rxjs/operators';
 *
 * const intervalObservable = interval(1000);
 * const click = fromEvent(document, 'click');
 *
 * const emitAfterClick = intervalObservable.pipe(
 *   skipUntil(click)
 * );
 * // clicked at 4.6s. output: 5...6...7...8........ or
 * // clicked at 7.3s. output: 8...9...10..11.......
 * const subscribe = emitAfterClick.subscribe(value => console.log(value));
 * ```
 *
 * @param {Observable} notifier - The second Observable that has to emit an item before the source Observable's elements begin to
 * be mirrored by the resulting Observable.
 * @return {Observable<T>} An Observable that skips items from the source Observable until the second Observable emits
 * an item, then emits the remaining items.
 * @method skipUntil
 * @owner Observable
 */
export function skipUntil<T>(notifier: Observable<any>): MonoTypeOperatorFunction<T> {
  return (source: Observable<T>) => source.lift(new SkipUntilOperator(notifier));
}

class SkipUntilOperator<T> implements Operator<T, T> {
  constructor(private notifier: Observable<any>) {
  }

  call(destination: Subscriber<T>, source: any): TeardownLogic {
    return source.subscribe(new SkipUntilSubscriber(destination, this.notifier));
  }
}

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
class SkipUntilSubscriber<T, R> extends SimpleOuterSubscriber<T, R> {

  private hasValue: boolean = false;
  private innerSubscription?: Subscription;

  constructor(destination: Subscriber<R>, notifier: ObservableInput<any>) {
    super(destination);
    const innerSubscriber = new SimpleInnerSubscriber(this);
    this.add(innerSubscriber);
    this.innerSubscription = innerSubscriber;
    const innerSubscription = innerSubscribe(notifier, innerSubscriber);
    // The returned subscription will usually be the subscriber that was
    // passed. However, interop subscribers will be wrapped and for
    // unsubscriptions to chain correctly, the wrapper needs to be added, too.
    if (innerSubscription !== innerSubscriber) {
      this.add(innerSubscription);
      this.innerSubscription = innerSubscription;
    }
  }

  protected _next(value: T) {
    if (this.hasValue) {
      super._next(value);
    }
  }

  notifyNext(): void {
    this.hasValue = true;
    if (this.innerSubscription) {
      this.innerSubscription.unsubscribe();
    }
  }

  notifyComplete() {
    /* do nothing */
  }
}
