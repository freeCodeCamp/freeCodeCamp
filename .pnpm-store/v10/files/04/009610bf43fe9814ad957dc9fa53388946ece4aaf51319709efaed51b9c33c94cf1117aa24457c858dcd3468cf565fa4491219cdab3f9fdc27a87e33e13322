import { Observable } from '../Observable';
import { OperatorFunction, ObservedValueOf } from '../../internal/types';
import { mergeMap } from './mergeMap';
import { ObservableInput } from '../types';

/* tslint:disable:max-line-length */
export function mergeMapTo<T, O extends ObservableInput<any>>(innerObservable: O, concurrent?: number): OperatorFunction<any, ObservedValueOf<O>>;
/** @deprecated */
export function mergeMapTo<T, R, O extends ObservableInput<any>>(innerObservable: O, resultSelector: (outerValue: T, innerValue: ObservedValueOf<O>, outerIndex: number, innerIndex: number) => R, concurrent?: number): OperatorFunction<T, R>;
/* tslint:enable:max-line-length */

/**
 * Projects each source value to the same Observable which is merged multiple
 * times in the output Observable.
 *
 * <span class="informal">It's like {@link mergeMap}, but maps each value always
 * to the same inner Observable.</span>
 *
 * ![](mergeMapTo.png)
 *
 * Maps each source value to the given Observable `innerObservable` regardless
 * of the source value, and then merges those resulting Observables into one
 * single Observable, which is the output Observable.
 *
 * ## Example
 * For each click event, start an interval Observable ticking every 1 second
 * ```ts
 * import { fromEvent, interval } from 'rxjs';
 * import { mergeMapTo } from 'rxjs/operators';
 *
 * const clicks = fromEvent(document, 'click');
 * const result = clicks.pipe(mergeMapTo(interval(1000)));
 * result.subscribe(x => console.log(x));
 * ```
 *
 * @see {@link concatMapTo}
 * @see {@link merge}
 * @see {@link mergeAll}
 * @see {@link mergeMap}
 * @see {@link mergeScan}
 * @see {@link switchMapTo}
 *
 * @param {ObservableInput} innerObservable An Observable to replace each value from
 * the source Observable.
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
 * Observables being subscribed to concurrently.
 * @return {Observable} An Observable that emits items from the given
 * `innerObservable`
 * @method mergeMapTo
 * @owner Observable
 */
export function mergeMapTo<T, R, O extends ObservableInput<any>>(
  innerObservable: O,
  resultSelector?: ((outerValue: T, innerValue: ObservedValueOf<O>, outerIndex: number, innerIndex: number) => R) | number,
  concurrent: number = Number.POSITIVE_INFINITY
): OperatorFunction<T, ObservedValueOf<O>|R> {
  if (typeof resultSelector === 'function') {
    return mergeMap(() => innerObservable, resultSelector, concurrent);
  }
  if (typeof resultSelector === 'number') {
    concurrent = resultSelector;
  }
  return mergeMap(() => innerObservable, concurrent);
}
