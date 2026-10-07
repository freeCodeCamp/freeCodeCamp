import { Operator } from '../Operator';
import { Subscriber } from '../Subscriber';
import { ArgumentOutOfRangeError } from '../util/ArgumentOutOfRangeError';
import { empty } from '../observable/empty';
import { Observable } from '../Observable';
import { MonoTypeOperatorFunction, TeardownLogic } from '../types';

/**
 * Emits only the first `count` values emitted by the source Observable.
 *
 * <span class="informal">Takes the first `count` values from the source, then
 * completes.</span>
 *
 * ![](take.png)
 *
 * `take` returns an Observable that emits only the first `count` values emitted
 * by the source Observable. If the source emits fewer than `count` values then
 * all of its values are emitted. After that, it completes, regardless if the
 * source completes.
 *
 * ## Example
 * Take the first 5 seconds of an infinite 1-second interval Observable
 * ```ts
 * import { interval } from 'rxjs';
 * import { take } from 'rxjs/operators';
 *
 * const intervalCount = interval(1000);
 * const takeFive = intervalCount.pipe(take(5));
 * takeFive.subscribe(x => console.log(x));
 *
 * // Logs:
 * // 0
 * // 1
 * // 2
 * // 3
 * // 4
 * ```
 *
 * @see {@link takeLast}
 * @see {@link takeUntil}
 * @see {@link takeWhile}
 * @see {@link skip}
 *
 * @throws {ArgumentOutOfRangeError} When using `take(i)`, it delivers an
 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
 *
 * @param {number} count The maximum number of `next` values to emit.
 * @return {Observable<T>} An Observable that emits only the first `count`
 * values emitted by the source Observable, or all of the values from the source
 * if the source emits fewer than `count` values.
 * @method take
 * @owner Observable
 */
export function take<T>(count: number): MonoTypeOperatorFunction<T> {
  return (source: Observable<T>) => {
    if (count === 0) {
      return empty();
    } else {
      return source.lift(new TakeOperator(count));
    }
  };
}

class TakeOperator<T> implements Operator<T, T> {
  constructor(private total: number) {
    if (this.total < 0) {
      throw new ArgumentOutOfRangeError;
    }
  }

  call(subscriber: Subscriber<T>, source: any): TeardownLogic {
    return source.subscribe(new TakeSubscriber(subscriber, this.total));
  }
}

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
class TakeSubscriber<T> extends Subscriber<T> {
  private count: number = 0;

  constructor(destination: Subscriber<T>, private total: number) {
    super(destination);
  }

  protected _next(value: T): void {
    const total = this.total;
    const count = ++this.count;
    if (count <= total) {
      this.destination.next(value);
      if (count === total) {
        this.destination.complete();
        this.unsubscribe();
      }
    }
  }
}
