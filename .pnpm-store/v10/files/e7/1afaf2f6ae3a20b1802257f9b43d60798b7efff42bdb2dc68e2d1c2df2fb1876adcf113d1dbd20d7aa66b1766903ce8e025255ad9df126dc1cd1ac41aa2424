import { Operator } from '../Operator';
import { Subscriber } from '../Subscriber';
import { ArgumentOutOfRangeError } from '../util/ArgumentOutOfRangeError';
import { Observable } from '../Observable';
import { MonoTypeOperatorFunction, TeardownLogic } from '../types';

/**
 * Skip the last `count` values emitted by the source Observable.
 *
 * ![](skipLast.png)
 *
 * `skipLast` returns an Observable that accumulates a queue with a length
 * enough to store the first `count` values. As more values are received,
 * values are taken from the front of the queue and produced on the result
 * sequence. This causes values to be delayed.
 *
 * ## Example
 * Skip the last 2 values of an Observable with many values
 * ```ts
 * import { range } from 'rxjs';
 * import { skipLast } from 'rxjs/operators';
 *
 * const many = range(1, 5);
 * const skipLastTwo = many.pipe(skipLast(2));
 * skipLastTwo.subscribe(x => console.log(x));
 *
 * // Results in:
 * // 1 2 3
 * ```
 *
 * @see {@link skip}
 * @see {@link skipUntil}
 * @see {@link skipWhile}
 * @see {@link take}
 *
 * @throws {ArgumentOutOfRangeError} When using `skipLast(i)`, it throws
 * ArgumentOutOrRangeError if `i < 0`.
 *
 * @param {number} count Number of elements to skip from the end of the source Observable.
 * @returns {Observable<T>} An Observable that skips the last count values
 * emitted by the source Observable.
 * @method skipLast
 * @owner Observable
 */
export function skipLast<T>(count: number): MonoTypeOperatorFunction<T> {
  return (source: Observable<T>) => source.lift(new SkipLastOperator(count));
}

class SkipLastOperator<T> implements Operator<T, T> {
  constructor(private _skipCount: number) {
    if (this._skipCount < 0) {
      throw new ArgumentOutOfRangeError;
    }
  }

  call(subscriber: Subscriber<T>, source: any): TeardownLogic {
    if (this._skipCount === 0) {
      // If we don't want to skip any values then just subscribe
      // to Subscriber without any further logic.
      return source.subscribe(new Subscriber(subscriber));
    } else {
      return source.subscribe(new SkipLastSubscriber(subscriber, this._skipCount));
    }
  }
}

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
class SkipLastSubscriber<T> extends Subscriber<T> {
  private _ring: T[];
  private _count: number = 0;

  constructor(destination: Subscriber<T>, private _skipCount: number) {
    super(destination);
    this._ring = new Array<T>(_skipCount);
  }

  protected _next(value: T): void {
    const skipCount = this._skipCount;
    const count = this._count++;

    if (count < skipCount) {
      this._ring[count] = value;
    } else {
      const currentIndex = count % skipCount;
      const ring = this._ring;
      const oldValue = ring[currentIndex];

      ring[currentIndex] = value;
      this.destination.next(oldValue);
    }
  }
}
