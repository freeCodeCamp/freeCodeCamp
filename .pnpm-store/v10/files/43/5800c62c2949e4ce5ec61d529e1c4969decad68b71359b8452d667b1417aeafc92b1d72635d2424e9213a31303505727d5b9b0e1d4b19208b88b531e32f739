import { Operator } from '../Operator';
import { Observable } from '../Observable';
import { Subscriber } from '../Subscriber';
import { Subscription } from '../Subscription';
import { MonoTypeOperatorFunction, SubscribableOrPromise, TeardownLogic } from '../types';
import { SimpleOuterSubscriber, innerSubscribe, SimpleInnerSubscriber } from '../innerSubscribe';

/**
 * Emits a value from the source Observable only after a particular time span
 * determined by another Observable has passed without another source emission.
 *
 * <span class="informal">It's like {@link debounceTime}, but the time span of
 * emission silence is determined by a second Observable.</span>
 *
 * ![](debounce.png)
 *
 * `debounce` delays values emitted by the source Observable, but drops previous
 * pending delayed emissions if a new value arrives on the source Observable.
 * This operator keeps track of the most recent value from the source
 * Observable, and spawns a duration Observable by calling the
 * `durationSelector` function. The value is emitted only when the duration
 * Observable emits a value or completes, and if no other value was emitted on
 * the source Observable since the duration Observable was spawned. If a new
 * value appears before the duration Observable emits, the previous value will
 * be dropped and will not be emitted on the output Observable.
 *
 * Like {@link debounceTime}, this is a rate-limiting operator, and also a
 * delay-like operator since output emissions do not necessarily occur at the
 * same time as they did on the source Observable.
 *
 * ## Example
 * Emit the most recent click after a burst of clicks
 * ```ts
 * import { fromEvent, interval } from 'rxjs';
 * import { debounce } from 'rxjs/operators';
 *
 * const clicks = fromEvent(document, 'click');
 * const result = clicks.pipe(debounce(() => interval(1000)));
 * result.subscribe(x => console.log(x));
 * ```
 *
 * @see {@link audit}
 * @see {@link debounceTime}
 * @see {@link delayWhen}
 * @see {@link throttle}
 *
 * @param {function(value: T): SubscribableOrPromise} durationSelector A function
 * that receives a value from the source Observable, for computing the timeout
 * duration for each source value, returned as an Observable or a Promise.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified duration Observable returned by
 * `durationSelector`, and may drop some values if they occur too frequently.
 * @method debounce
 * @owner Observable
 */
export function debounce<T>(durationSelector: (value: T) => SubscribableOrPromise<any>): MonoTypeOperatorFunction<T> {
  return (source: Observable<T>) => source.lift(new DebounceOperator(durationSelector));
}

class DebounceOperator<T> implements Operator<T, T> {
  constructor(private durationSelector: (value: T) => SubscribableOrPromise<any>) {
  }

  call(subscriber: Subscriber<T>, source: any): TeardownLogic {
    return source.subscribe(new DebounceSubscriber(subscriber, this.durationSelector));
  }
}

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
class DebounceSubscriber<T, R> extends SimpleOuterSubscriber<T, R> {
  private value?: T;
  private hasValue = false;
  private durationSubscription?: Subscription;

  constructor(destination: Subscriber<R>,
              private durationSelector: (value: T) => SubscribableOrPromise<any>) {
    super(destination);
  }

  protected _next(value: T): void {
    try {
      const result = this.durationSelector.call(this, value);

      if (result) {
        this._tryNext(value, result);
      }
    } catch (err) {
      this.destination.error!(err);
    }
  }

  protected _complete(): void {
    this.emitValue();
    this.destination.complete!();
  }

  private _tryNext(value: T, duration: SubscribableOrPromise<any>): void {
    let subscription = this.durationSubscription;
    this.value = value;
    this.hasValue = true;
    if (subscription) {
      subscription.unsubscribe();
      this.remove(subscription);
    }

    subscription = innerSubscribe(duration, new SimpleInnerSubscriber(this));
    if (subscription && !subscription.closed) {
      this.add(this.durationSubscription = subscription);
    }
  }

  notifyNext(): void {
    this.emitValue();
  }

  notifyComplete(): void {
    this.emitValue();
  }

  emitValue(): void {
    if (this.hasValue) {
      const value = this.value;
      const subscription = this.durationSubscription;
      if (subscription) {
        this.durationSubscription = undefined;
        subscription.unsubscribe();
        this.remove(subscription);
      }
      // This must be done *before* passing the value
      // along to the destination because it's possible for
      // the value to synchronously re-enter this operator
      // recursively if the duration selector Observable
      // emits synchronously
      this.value = undefined;
      this.hasValue = false;
      super._next(value!);
    }
  }
}
