import { Operator } from '../Operator';
import { Subscriber } from '../Subscriber';
import { ArgumentOutOfRangeError } from '../util/ArgumentOutOfRangeError';
import { Observable } from '../Observable';
import { MonoTypeOperatorFunction, TeardownLogic } from '../types';
import { filter } from './filter';
import { throwIfEmpty } from './throwIfEmpty';
import { defaultIfEmpty } from './defaultIfEmpty';
import { take } from './take';

/**
 * Emits the single value at the specified `index` in a sequence of emissions
 * from the source Observable.
 *
 * <span class="informal">Emits only the i-th value, then completes.</span>
 *
 * ![](elementAt.png)
 *
 * `elementAt` returns an Observable that emits the item at the specified
 * `index` in the source Observable, or a default value if that `index` is out
 * of range and the `default` argument is provided. If the `default` argument is
 * not given and the `index` is out of range, the output Observable will emit an
 * `ArgumentOutOfRangeError` error.
 *
 * ## Example
 * Emit only the third click event
 * ```ts
 * import { fromEvent } from 'rxjs';
 * import { elementAt } from 'rxjs/operators';
 *
 * const clicks = fromEvent(document, 'click');
 * const result = clicks.pipe(elementAt(2));
 * result.subscribe(x => console.log(x));
 *
 * // Results in:
 * // click 1 = nothing
 * // click 2 = nothing
 * // click 3 = MouseEvent object logged to console
 * ```
 *
 * @see {@link first}
 * @see {@link last}
 * @see {@link skip}
 * @see {@link single}
 * @see {@link take}
 *
 * @throws {ArgumentOutOfRangeError} When using `elementAt(i)`, it delivers an
 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0` or the
 * Observable has completed before emitting the i-th `next` notification.
 *
 * @param {number} index Is the number `i` for the i-th source emission that has
 * happened since the subscription, starting from the number `0`.
 * @param {T} [defaultValue] The default value returned for missing indices.
 * @return {Observable} An Observable that emits a single item, if it is found.
 * Otherwise, will emit the default value if given. If not, then emits an error.
 * @method elementAt
 * @owner Observable
 */
export function elementAt<T>(index: number, defaultValue?: T): MonoTypeOperatorFunction<T> {
  if (index < 0) { throw new ArgumentOutOfRangeError(); }
  const hasDefaultValue = arguments.length >= 2;
  return (source: Observable<T>) => source.pipe(
    filter((v, i) => i === index),
    take(1),
    hasDefaultValue
      ? defaultIfEmpty(defaultValue)
      : throwIfEmpty(() => new ArgumentOutOfRangeError()),
  );
}
