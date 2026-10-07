import { Operator } from '../Operator';
import { Subscriber } from '../Subscriber';
import { Observable } from '../Observable';
import { OperatorFunction } from '../types';

/**
 * Applies a given `project` function to each value emitted by the source
 * Observable, and emits the resulting values as an Observable.
 *
 * <span class="informal">Like [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map),
 * it passes each source value through a transformation function to get
 * corresponding output values.</span>
 *
 * ![](map.png)
 *
 * Similar to the well known `Array.prototype.map` function, this operator
 * applies a projection to each value and emits that projection in the output
 * Observable.
 *
 * ## Example
 * Map every click to the clientX position of that click
 * ```ts
 * import { fromEvent } from 'rxjs';
 * import { map } from 'rxjs/operators';
 *
 * const clicks = fromEvent(document, 'click');
 * const positions = clicks.pipe(map(ev => ev.clientX));
 * positions.subscribe(x => console.log(x));
 * ```
 *
 * @see {@link mapTo}
 * @see {@link pluck}
 *
 * @param {function(value: T, index: number): R} project The function to apply
 * to each `value` emitted by the source Observable. The `index` parameter is
 * the number `i` for the i-th emission that has happened since the
 * subscription, starting from the number `0`.
 * @param {any} [thisArg] An optional argument to define what `this` is in the
 * `project` function.
 * @return {Observable<R>} An Observable that emits the values from the source
 * Observable transformed by the given `project` function.
 * @method map
 * @owner Observable
 */
export function map<T, R>(project: (value: T, index: number) => R, thisArg?: any): OperatorFunction<T, R> {
  return function mapOperation(source: Observable<T>): Observable<R> {
    if (typeof project !== 'function') {
      throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
    }
    return source.lift(new MapOperator(project, thisArg));
  };
}

export class MapOperator<T, R> implements Operator<T, R> {
  constructor(private project: (value: T, index: number) => R, private thisArg: any) {
  }

  call(subscriber: Subscriber<R>, source: any): any {
    return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
  }
}

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
class MapSubscriber<T, R> extends Subscriber<T> {
  count: number = 0;
  private thisArg: any;

  constructor(destination: Subscriber<R>,
              private project: (value: T, index: number) => R,
              thisArg: any) {
    super(destination);
    this.thisArg = thisArg || this;
  }

  // NOTE: This looks unoptimized, but it's actually purposefully NOT
  // using try/catch optimizations.
  protected _next(value: T) {
    let result: R;
    try {
      result = this.project.call(this.thisArg, value, this.count++);
    } catch (err) {
      this.destination.error(err);
      return;
    }
    this.destination.next(result);
  }
}
