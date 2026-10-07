import { Operator } from '../Operator';
import { Subscriber } from '../Subscriber';
import { ArgumentOutOfRangeError } from '../util/ArgumentOutOfRangeError';
import { empty } from '../observable/empty';
import { Observable } from '../Observable';
import { MonoTypeOperatorFunction, TeardownLogic } from '../types';

/**
 * Emits only the last `count` values emitted by the source Observable.
 *
 * <span class="informal">Remembers the latest `count` values, then emits those
 * only when the source completes.</span>
 *
 * ![](takeLast.png)
 *
 * `takeLast` returns an Observable that emits at most the last `count` values
 * emitted by the source Observable. If the source emits fewer than `count`
 * values then all of its values are emitted. This operator must wait until the
 * `complete` notification emission from the source in order to emit the `next`
 * values on the output Observable, because otherwise it is impossible to know
 * whether or not more values will be emitted on the source. For this reason,
 * all values are emitted synchronously, followed by the complete notification.
 *
 * ## Example
 * Take the last 3 values of an Observable with many values
 * ```ts
 * import { range } from 'rxjs';
 * import { takeLast } from 'rxjs/operators';
 *
 * const many = range(1, 100);
 * const lastThree = many.pipe(takeLast(3));
 * lastThree.subscribe(x => console.log(x));
 * ```
 *
 * @see {@link take}
 * @see {@link takeUntil}
 * @see {@link takeWhile}
 * @see {@link skip}
 *
 * @throws {ArgumentOutOfRangeError} When using `takeLast(i)`, it delivers an
 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
 *
 * @param {number} count The maximum number of values to emit from the end of
 * the sequence of values emitted by the source Observable.
 * @return {Observable<T>} An Observable that emits at most the last count
 * values emitted by the source Observable.
 * @method takeLast
 * @owner Observable
 */
export function takeLast<T>(count: number): MonoTypeOperatorFunction<T> {
  return function takeLastOperatorFunction(source: Observable<T>): Observable<T> {
    if (count === 0) {
      return empty();
    } else {
      return source.lift(new TakeLastOperator(count));
    }
  };
}

class TakeLastOperator<T> implements Operator<T, T> {
  constructor(private total: number) {
    if (this.total < 0) {
      throw new ArgumentOutOfRangeError;
    }
  }

  call(subscriber: Subscriber<T>, source: any): TeardownLogic {
    return source.subscribe(new TakeLastSubscriber(subscriber, this.total));
  }
}

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
class TakeLastSubscriber<T> extends Subscriber<T> {
  private ring: Array<T> = new Array();
  private count: number = 0;

  constructor(destination: Subscriber<T>, private total: number) {
    super(destination);
  }

  protected _next(value: T): void {
    const ring = this.ring;
    const total = this.total;
    const count = this.count++;

    if (ring.length < total) {
      ring.push(value);
    } else {
      const index = count % total;
      ring[index] = value;
    }
  }

  protected _complete(): void {
    const destination = this.destination;
    let count = this.count;

    if (count > 0) {
      const total = this.count >= this.total ? this.total : this.count;
      const ring  = this.ring;

      for (let i = 0; i < total; i++) {
        const idx = (count++) % total;
        destination.next(ring[idx]);
      }
    }

    destination.complete();
  }
}
