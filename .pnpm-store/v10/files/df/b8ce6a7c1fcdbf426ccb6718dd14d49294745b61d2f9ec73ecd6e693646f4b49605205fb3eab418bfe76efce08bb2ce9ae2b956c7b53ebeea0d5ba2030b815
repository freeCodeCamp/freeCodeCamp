import { Operator } from '../Operator';
import { Observable } from '../Observable';
import { Subscriber } from '../Subscriber';
import { Subscription } from '../Subscription';

import { MonoTypeOperatorFunction, SubscribableOrPromise, TeardownLogic } from '../types';
import { SimpleOuterSubscriber, innerSubscribe, SimpleInnerSubscriber } from '../innerSubscribe';

export interface ThrottleConfig {
  leading?: boolean;
  trailing?: boolean;
}

export const defaultThrottleConfig: ThrottleConfig = {
  leading: true,
  trailing: false
};

/**
 * Emits a value from the source Observable, then ignores subsequent source
 * values for a duration determined by another Observable, then repeats this
 * process.
 *
 * <span class="informal">It's like {@link throttleTime}, but the silencing
 * duration is determined by a second Observable.</span>
 *
 * ![](throttle.png)
 *
 * `throttle` emits the source Observable values on the output Observable
 * when its internal timer is disabled, and ignores source values when the timer
 * is enabled. Initially, the timer is disabled. As soon as the first source
 * value arrives, it is forwarded to the output Observable, and then the timer
 * is enabled by calling the `durationSelector` function with the source value,
 * which returns the "duration" Observable. When the duration Observable emits a
 * value or completes, the timer is disabled, and this process repeats for the
 * next source value.
 *
 * ## Example
 * Emit clicks at a rate of at most one click per second
 * ```ts
 * import { fromEvent } from 'rxjs';
 * import { throttle } from 'rxjs/operators';
 *
 * const clicks = fromEvent(document, 'click');
 * const result = clicks.pipe(throttle(ev => interval(1000)));
 * result.subscribe(x => console.log(x));
 * ```
 *
 * @see {@link audit}
 * @see {@link debounce}
 * @see {@link delayWhen}
 * @see {@link sample}
 * @see {@link throttleTime}
 *
 * @param {function(value: T): SubscribableOrPromise} durationSelector A function
 * that receives a value from the source Observable, for computing the silencing
 * duration for each source value, returned as an Observable or a Promise.
 * @param {Object} config a configuration object to define `leading` and `trailing` behavior. Defaults
 * to `{ leading: true, trailing: false }`.
 * @return {Observable<T>} An Observable that performs the throttle operation to
 * limit the rate of emissions from the source.
 * @method throttle
 * @owner Observable
 */
export function throttle<T>(durationSelector: (value: T) => SubscribableOrPromise<any>,
                            config: ThrottleConfig = defaultThrottleConfig): MonoTypeOperatorFunction<T> {
  return (source: Observable<T>) => source.lift(new ThrottleOperator(durationSelector, !!config.leading, !!config.trailing));
}

class ThrottleOperator<T> implements Operator<T, T> {
  constructor(private durationSelector: (value: T) => SubscribableOrPromise<any>,
              private leading: boolean,
              private trailing: boolean) {
  }

  call(subscriber: Subscriber<T>, source: any): TeardownLogic {
    return source.subscribe(
      new ThrottleSubscriber(subscriber, this.durationSelector, this.leading, this.trailing)
    );
  }
}

/**
 * We need this JSDoc comment for affecting ESDoc
 * @ignore
 * @extends {Ignored}
 */
class ThrottleSubscriber<T, R> extends SimpleOuterSubscriber<T, R> {
  private _throttled?: Subscription;
  private _sendValue?: T;
  private _hasValue = false;

  constructor(protected destination: Subscriber<T>,
              private durationSelector: (value: T) => SubscribableOrPromise<number>,
              private _leading: boolean,
              private _trailing: boolean) {
    super(destination);
  }

  protected _next(value: T): void {
    this._hasValue = true;
    this._sendValue = value;

    if (!this._throttled) {
      if (this._leading) {
        this.send();
      } else {
        this.throttle(value);
      }
    }
  }

  private send() {
    const { _hasValue, _sendValue } = this;
    if (_hasValue) {
      this.destination.next(_sendValue);
      this.throttle(_sendValue!);
    }
    this._hasValue = false;
    this._sendValue = undefined;
  }

  private throttle(value: T): void {
    const duration = this.tryDurationSelector(value);
    if (!!duration) {
      this.add(this._throttled = innerSubscribe(duration, new SimpleInnerSubscriber(this)));
    }
  }

  private tryDurationSelector(value: T): SubscribableOrPromise<any> | null {
    try {
      return this.durationSelector(value);
    } catch (err) {
      this.destination.error(err);
      return null;
    }
  }

  private throttlingDone() {
    const { _throttled, _trailing } = this;
    if (_throttled) {
      _throttled.unsubscribe();
    }
    this._throttled = undefined;

    if (_trailing) {
      this.send();
    }
  }

  notifyNext(): void {
    this.throttlingDone();
  }

  notifyComplete(): void {
    this.throttlingDone();
  }
}
