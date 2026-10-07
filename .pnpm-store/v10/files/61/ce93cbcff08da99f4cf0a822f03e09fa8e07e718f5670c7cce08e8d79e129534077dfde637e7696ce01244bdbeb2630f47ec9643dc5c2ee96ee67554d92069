import { Operator } from '../Operator';
import { Subscriber } from '../Subscriber';
import { Observable } from '../Observable';
import { empty } from '../observable/empty';
import { MonoTypeOperatorFunction, TeardownLogic } from '../types';

/**
 * Returns an Observable that will resubscribe to the source stream when the source stream completes, at most count times.
 *
 * <span class="informal">Repeats all values emitted on the source. It's like {@link retry}, but for non error cases.</span>
 *
 * ![](repeat.png)
 *
 * Similar to {@link retry}, this operator repeats the stream of items emitted by the source for non error cases.
 * Repeat can be useful for creating observables that are meant to have some repeated pattern or rhythm.
 *
 * Note: `repeat(0)` returns an empty observable and `repeat()` will repeat forever
 *
 * ## Example
 * Repeat a message stream
 * ```ts
 * import { of } from 'rxjs';
 * import { repeat, delay } from 'rxjs/operators';
 *
 * const source = of('Repeat message');
 * const example = source.pipe(repeat(3));
 * example.subscribe(x => console.log(x));
 *
 * // Results
 * // Repeat message
 * // Repeat message
 * // Repeat message
 * ```
 *
 * Repeat 3 values, 2 times
 * ```ts
 * import { interval } from 'rxjs';
 * import { repeat, take } from 'rxjs/operators';
 *
 * const source = interval(1000);
 * const example = source.pipe(take(3), repeat(2));
 * example.subscribe(x => console.log(x));
 *
 * // Results every second
 * // 0
 * // 1
 * // 2
 * // 0
 * // 1
 * // 2
 * ```
 *
 * @see {@link repeatWhen}
 * @see {@link retry}
 *
 * @param {number} [count] The number of times the source Observable items are repeated, a count of 0 will yield
 * an empty Observable.
 * @return {Observable} An Observable that will resubscribe to the source stream when the source stream completes
 * , at most count times.
 * @method repeat
 * @owner Observable
 */
export function repeat<T>(count: number = -1): MonoTypeOperatorFunction<T> {
  return (source: Observable<T>) => {
    if (count === 0) {
      return empty();
    } else if (count < 0) {
      return source.lift(new RepeatOperator(-1, source));
    } else {
      return source.lift(new RepeatOperator(count - 1, source));
    }
  };
}

class RepeatOperator<T> implements Operator<T, T> {
  constructor(private count: number,
              private source: Observable<T>) {
  }
  call(subscriber: Subscriber<T>, source: any): TeardownLogic {
    return source.subscribe(new RepeatSubscriber(subscriber, this.count, this.source));
  }
}

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
class RepeatSubscriber<T> extends Subscriber<T> {
  constructor(destination: Subscriber<any>,
              private count: number,
              private source: Observable<T>) {
    super(destination);
  }
  complete() {
    if (!this.isStopped) {
      const { source, count } = this;
      if (count === 0) {
        return super.complete();
      } else if (count > -1) {
        this.count = count - 1;
      }
      source.subscribe(this._unsubscribeAndRecycle());
    }
  }
}
