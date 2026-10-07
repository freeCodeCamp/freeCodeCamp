import { ObservableInput, OperatorFunction } from '../types';
import { switchMap } from './switchMap';

/* tslint:disable:max-line-length */
export function switchMapTo<R>(observable: ObservableInput<R>): OperatorFunction<any, R>;
/** @deprecated resultSelector is no longer supported. Switch to using switchMap with an inner map */
export function switchMapTo<T, R>(observable: ObservableInput<R>, resultSelector: undefined): OperatorFunction<T, R>;
/** @deprecated resultSelector is no longer supported. Switch to using switchMap with an inner map */
export function switchMapTo<T, I, R>(observable: ObservableInput<I>, resultSelector: (outerValue: T, innerValue: I, outerIndex: number, innerIndex: number) => R): OperatorFunction<T, R>;
/* tslint:enable:max-line-length */

/**
 * Projects each source value to the same Observable which is flattened multiple
 * times with {@link switchMap} in the output Observable.
 *
 * <span class="informal">It's like {@link switchMap}, but maps each value
 * always to the same inner Observable.</span>
 *
 * ![](switchMapTo.png)
 *
 * Maps each source value to the given Observable `innerObservable` regardless
 * of the source value, and then flattens those resulting Observables into one
 * single Observable, which is the output Observable. The output Observables
 * emits values only from the most recently emitted instance of
 * `innerObservable`.
 *
 * ## Example
 * Rerun an interval Observable on every click event
 * ```ts
 * import { fromEvent, interval } from 'rxjs';
 * import { switchMapTo } from 'rxjs/operators';
 *
 * const clicks = fromEvent(document, 'click');
 * const result = clicks.pipe(switchMapTo(interval(1000)));
 * result.subscribe(x => console.log(x));
 * ```
 *
 * @see {@link concatMapTo}
 * @see {@link switchAll}
 * @see {@link switchMap}
 * @see {@link mergeMapTo}
 *
 * @param {ObservableInput} innerObservable An Observable to replace each value from
 * the source Observable.
 * @return {Observable} An Observable that emits items from the given
 * `innerObservable` (and optionally transformed through the deprecated `resultSelector`)
 * every time a value is emitted on the source Observable, and taking only the values
 * from the most recently projected inner Observable.
 * @method switchMapTo
 * @owner Observable
 */
export function switchMapTo<T, I, R>(
  innerObservable: ObservableInput<I>,
  resultSelector?: (outerValue: T, innerValue: I, outerIndex: number, innerIndex: number) => R
): OperatorFunction<T, I|R> {
  return resultSelector ? switchMap(() => innerObservable, resultSelector) : switchMap(() => innerObservable);
}
