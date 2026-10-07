import { Operator } from '../Operator';
import { Observable } from '../Observable';
import { Subscriber } from '../Subscriber';
import { OperatorFunction, MonoTypeOperatorFunction } from '../types';

/* tslint:disable:max-line-length */
export function scan<T, R>(accumulator: (acc: R, value: T, index: number) => R, seed: R): OperatorFunction<T, R>;
export function scan<T>(accumulator: (acc: T, value: T, index: number) => T, seed?: T): MonoTypeOperatorFunction<T>;
export function scan<T, R>(accumulator: (acc: R, value: T, index: number) => R): OperatorFunction<T, R>;
/* tslint:enable:max-line-length */

/**
 * Applies an accumulator function over the source Observable, and returns each
 * intermediate result, with an optional seed value.
 *
 * <span class="informal">It's like {@link reduce}, but emits the current
 * accumulation whenever the source emits a value.</span>
 *
 * ![](scan.png)
 *
 * Combines together all values emitted on the source, using an accumulator
 * function that knows how to join a new source value into the accumulation from
 * the past. Is similar to {@link reduce}, but emits the intermediate
 * accumulations.
 *
 * Returns an Observable that applies a specified `accumulator` function to each
 * item emitted by the source Observable. If a `seed` value is specified, then
 * that value will be used as the initial value for the accumulator. If no seed
 * value is specified, the first item of the source is used as the seed.
 *
 * ## Example
 * Count the number of click events
 * ```ts
 * import { fromEvent } from 'rxjs';
 * import { scan, mapTo } from 'rxjs/operators';
 *
 * const clicks = fromEvent(document, 'click');
 * const ones = clicks.pipe(mapTo(1));
 * const seed = 0;
 * const count = ones.pipe(scan((acc, one) => acc + one, seed));
 * count.subscribe(x => console.log(x));
 * ```
 *
 * @see {@link expand}
 * @see {@link mergeScan}
 * @see {@link reduce}
 *
 * @param {function(acc: R, value: T, index: number): R} accumulator
 * The accumulator function called on each source value.
 * @param {T|R} [seed] The initial accumulation value.
 * @return {Observable<R>} An observable of the accumulated values.
 * @method scan
 * @owner Observable
 */
export function scan<T, R>(accumulator: (acc: R, value: T, index: number) => R, seed?: T | R): OperatorFunction<T, R> {
  let hasSeed = false;
  // providing a seed of `undefined` *should* be valid and trigger
  // hasSeed! so don't use `seed !== undefined` checks!
  // For this reason, we have to check it here at the original call site
  // otherwise inside Operator/Subscriber we won't know if `undefined`
  // means they didn't provide anything or if they literally provided `undefined`
  if (arguments.length >= 2) {
    hasSeed = true;
  }

  return function scanOperatorFunction(source: Observable<T>): Observable<R> {
    return source.lift(new ScanOperator(accumulator, seed, hasSeed));
  };
}

class ScanOperator<T, R> implements Operator<T, R> {
  constructor(private accumulator: (acc: R, value: T, index: number) => R, private seed?: T | R, private hasSeed: boolean = false) {}

  call(subscriber: Subscriber<R>, source: any): any {
    return source.subscribe(new ScanSubscriber(subscriber, this.accumulator, this.seed, this.hasSeed));
  }
}

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
class ScanSubscriber<T, R> extends Subscriber<T> {
  private index: number = 0;

  get seed(): T | R {
    return this._seed;
  }

  set seed(value: T | R) {
    this.hasSeed = true;
    this._seed = value;
  }

  constructor(destination: Subscriber<R>, private accumulator: (acc: R, value: T, index: number) => R, private _seed: T | R,
              private hasSeed: boolean) {
    super(destination);
  }

  protected _next(value: T): void {
    if (!this.hasSeed) {
      this.seed = value;
      this.destination.next(value);
    } else {
      return this._tryNext(value);
    }
  }

  private _tryNext(value: T): void {
    const index = this.index++;
    let result: any;
    try {
      result = this.accumulator(<R>this.seed, value, index);
    } catch (err) {
      this.destination.error(err);
    }
    this.seed = result;
    this.destination.next(result);
  }
}
