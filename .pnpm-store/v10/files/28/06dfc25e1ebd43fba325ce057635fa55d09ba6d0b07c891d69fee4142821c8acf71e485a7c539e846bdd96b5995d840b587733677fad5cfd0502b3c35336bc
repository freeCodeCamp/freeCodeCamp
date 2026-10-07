import { Operator } from '../Operator';
import { Subscriber } from '../Subscriber';
import { Observable } from '../Observable';
import { Subscription } from '../Subscription';
import { OuterSubscriber } from '../OuterSubscriber';
import { InnerSubscriber } from '../InnerSubscriber';
import { subscribeToResult } from '../util/subscribeToResult';
import { MonoTypeOperatorFunction, TeardownLogic } from '../types';

/* tslint:disable:max-line-length */
/** @deprecated In future versions, empty notifiers will no longer re-emit the source value on the output observable. */
export function delayWhen<T>(delayDurationSelector: (value: T, index: number) => Observable<never>, subscriptionDelay?: Observable<any>): MonoTypeOperatorFunction<T>;
export function delayWhen<T>(delayDurationSelector: (value: T, index: number) => Observable<any>, subscriptionDelay?: Observable<any>): MonoTypeOperatorFunction<T>;
/* tslint:disable:max-line-length */

/**
 * Delays the emission of items from the source Observable by a given time span
 * determined by the emissions of another Observable.
 *
 * <span class="informal">It's like {@link delay}, but the time span of the
 * delay duration is determined by a second Observable.</span>
 *
 * ![](delayWhen.png)
 *
 * `delayWhen` time shifts each emitted value from the source Observable by a
 * time span determined by another Observable. When the source emits a value,
 * the `delayDurationSelector` function is called with the source value as
 * argument, and should return an Observable, called the "duration" Observable.
 * The source value is emitted on the output Observable only when the duration
 * Observable emits a value or completes.
 * The completion of the notifier triggering the emission of the source value
 * is deprecated behavior and will be removed in future versions.
 *
 * Optionally, `delayWhen` takes a second argument, `subscriptionDelay`, which
 * is an Observable. When `subscriptionDelay` emits its first value or
 * completes, the source Observable is subscribed to and starts behaving like
 * described in the previous paragraph. If `subscriptionDelay` is not provided,
 * `delayWhen` will subscribe to the source Observable as soon as the output
 * Observable is subscribed.
 *
 * ## Example
 * Delay each click by a random amount of time, between 0 and 5 seconds
 * ```ts
 * import { fromEvent, interval } from 'rxjs';
 * import { delayWhen } from 'rxjs/operators';
 *
 * const clicks = fromEvent(document, 'click');
 * const delayedClicks = clicks.pipe(
 *   delayWhen(event => interval(Math.random() * 5000)),
 * );
 * delayedClicks.subscribe(x => console.log(x));
 * ```
 *
 * @see {@link delay}
 * @see {@link throttle}
 * @see {@link throttleTime}
 * @see {@link debounce}
 * @see {@link debounceTime}
 * @see {@link sample}
 * @see {@link sampleTime}
 * @see {@link audit}
 * @see {@link auditTime}
 *
 * @param {function(value: T, index: number): Observable} delayDurationSelector A function that
 * returns an Observable for each value emitted by the source Observable, which
 * is then used to delay the emission of that item on the output Observable
 * until the Observable returned from this function emits a value.
 * @param {Observable} subscriptionDelay An Observable that triggers the
 * subscription to the source Observable once it emits any value.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by an amount of time specified by the Observable returned by
 * `delayDurationSelector`.
 * @method delayWhen
 * @owner Observable
 */
export function delayWhen<T>(delayDurationSelector: (value: T, index: number) => Observable<any>,
                             subscriptionDelay?: Observable<any>): MonoTypeOperatorFunction<T> {
  if (subscriptionDelay) {
    return (source: Observable<T>) =>
      new SubscriptionDelayObservable(source, subscriptionDelay)
        .lift(new DelayWhenOperator(delayDurationSelector));
  }
  return (source: Observable<T>) => source.lift(new DelayWhenOperator(delayDurationSelector));
}

class DelayWhenOperator<T> implements Operator<T, T> {
  constructor(private delayDurationSelector: (value: T, index: number) => Observable<any>) {
  }

  call(subscriber: Subscriber<T>, source: any): TeardownLogic {
    return source.subscribe(new DelayWhenSubscriber(subscriber, this.delayDurationSelector));
  }
}

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
class DelayWhenSubscriber<T, R> extends OuterSubscriber<T, R> {
  private completed: boolean = false;
  private delayNotifierSubscriptions: Array<Subscription> = [];
  private index: number = 0;

  constructor(destination: Subscriber<T>,
              private delayDurationSelector: (value: T, index: number) => Observable<any>) {
    super(destination);
  }

  notifyNext(outerValue: T, _innerValue: any,
             _outerIndex: number, _innerIndex: number,
             innerSub: InnerSubscriber<T, R>): void {
    this.destination.next!(outerValue);
    this.removeSubscription(innerSub);
    this.tryComplete();
  }

  notifyError(error: any, innerSub: InnerSubscriber<T, R>): void {
    this._error(error);
  }

  notifyComplete(innerSub: InnerSubscriber<T, R>): void {
    const value = this.removeSubscription(innerSub);
    if (value) {
      this.destination.next!(value);
    }
    this.tryComplete();
  }

  protected _next(value: T): void {
    const index = this.index++;
    try {
      const delayNotifier = this.delayDurationSelector(value, index);
      if (delayNotifier) {
        this.tryDelay(delayNotifier, value);
      }
    } catch (err) {
      this.destination.error!(err);
    }
  }

  protected _complete(): void {
    this.completed = true;
    this.tryComplete();
    this.unsubscribe();
  }

  private removeSubscription(subscription: InnerSubscriber<T, R>): T {
    subscription.unsubscribe();

    const subscriptionIdx = this.delayNotifierSubscriptions.indexOf(subscription);
    if (subscriptionIdx !== -1) {
      this.delayNotifierSubscriptions.splice(subscriptionIdx, 1);
    }

    return subscription.outerValue;
  }

  private tryDelay(delayNotifier: Observable<any>, value: T): void {
    const notifierSubscription = subscribeToResult(this, delayNotifier, value);

    if (notifierSubscription && !notifierSubscription.closed) {
      const destination = this.destination as Subscription;
      destination.add(notifierSubscription);
      this.delayNotifierSubscriptions.push(notifierSubscription);
    }
  }

  private tryComplete(): void {
    if (this.completed && this.delayNotifierSubscriptions.length === 0) {
      this.destination.complete!();
    }
  }
}

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
class SubscriptionDelayObservable<T> extends Observable<T> {
  constructor(public source: Observable<T>, private subscriptionDelay: Observable<any>) {
    super();
  }

  /** @deprecated This is an internal implementation detail, do not use. */
  _subscribe(subscriber: Subscriber<T>) {
    this.subscriptionDelay.subscribe(new SubscriptionDelaySubscriber(subscriber, this.source));
  }
}

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
class SubscriptionDelaySubscriber<T> extends Subscriber<T> {
  private sourceSubscribed: boolean = false;

  constructor(private parent: Subscriber<T>, private source: Observable<T>) {
    super();
  }

  protected _next(unused: any) {
    this.subscribeToSource();
  }

  protected _error(err: any) {
    this.unsubscribe();
    this.parent.error(err);
  }

  protected _complete() {
    this.unsubscribe();
    this.subscribeToSource();
  }

  private subscribeToSource(): void {
    if (!this.sourceSubscribed) {
      this.sourceSubscribed = true;
      this.unsubscribe();
      this.source.subscribe(this.parent);
    }
  }
}
