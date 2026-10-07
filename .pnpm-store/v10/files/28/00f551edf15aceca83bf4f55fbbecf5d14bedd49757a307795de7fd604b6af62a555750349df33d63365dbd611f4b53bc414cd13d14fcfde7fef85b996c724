import { Operator } from '../Operator';
import { Subscriber } from '../Subscriber';
import { Observable } from '../Observable';
import { OperatorFunction, MonoTypeOperatorFunction, TeardownLogic } from '../types';

/* tslint:disable:max-line-length */
export function filter<T, S extends T>(predicate: (value: T, index: number) => value is S,
                                       thisArg?: any): OperatorFunction<T, S>;
export function filter<T>(predicate: (value: T, index: number) => boolean,
                          thisArg?: any): MonoTypeOperatorFunction<T>;
/* tslint:enable:max-line-length */

/**
 * Filter items emitted by the source Observable by only emitting those that
 * satisfy a specified predicate.
 *
 * <span class="informal">Like
 * [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter),
 * it only emits a value from the source if it passes a criterion function.</span>
 *
 * ![](filter.png)
 *
 * Similar to the well-known `Array.prototype.filter` method, this operator
 * takes values from the source Observable, passes them through a `predicate`
 * function and only emits those values that yielded `true`.
 *
 * ## Example
 * Emit only click events whose target was a DIV element
 * ```ts
 * import { fromEvent } from 'rxjs';
 * import { filter } from 'rxjs/operators';
 *
 * const clicks = fromEvent(document, 'click');
 * const clicksOnDivs = clicks.pipe(filter(ev => ev.target.tagName === 'DIV'));
 * clicksOnDivs.subscribe(x => console.log(x));
 * ```
 *
 * @see {@link distinct}
 * @see {@link distinctUntilChanged}
 * @see {@link distinctUntilKeyChanged}
 * @see {@link ignoreElements}
 * @see {@link partition}
 * @see {@link skip}
 *
 * @param {function(value: T, index: number): boolean} predicate A function that
 * evaluates each value emitted by the source Observable. If it returns `true`,
 * the value is emitted, if `false` the value is not passed to the output
 * Observable. The `index` parameter is the number `i` for the i-th source
 * emission that has happened since the subscription, starting from the number
 * `0`.
 * @param {any} [thisArg] An optional argument to determine the value of `this`
 * in the `predicate` function.
 * @return {Observable} An Observable of values from the source that were
 * allowed by the `predicate` function.
 * @method filter
 * @owner Observable
 */
export function filter<T>(predicate: (value: T, index: number) => boolean,
                          thisArg?: any): MonoTypeOperatorFunction<T> {
  return function filterOperatorFunction(source: Observable<T>): Observable<T> {
    return source.lift(new FilterOperator(predicate, thisArg));
  };
}

class FilterOperator<T> implements Operator<T, T> {
  constructor(private predicate: (value: T, index: number) => boolean,
              private thisArg?: any) {
  }

  call(subscriber: Subscriber<T>, source: any): TeardownLogic {
    return source.subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
  }
}

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
class FilterSubscriber<T> extends Subscriber<T> {

  count: number = 0;

  constructor(destination: Subscriber<T>,
              private predicate: (value: T, index: number) => boolean,
              private thisArg: any) {
    super(destination);
  }

  // the try catch block below is left specifically for
  // optimization and perf reasons. a tryCatcher is not necessary here.
  protected _next(value: T) {
    let result: any;
    try {
      result = this.predicate.call(this.thisArg, value, this.count++);
    } catch (err) {
      this.destination.error(err);
      return;
    }
    if (result) {
      this.destination.next(value);
    }
  }
}
