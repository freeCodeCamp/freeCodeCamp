import {OperatorFunction, ObservableInput} from '../types';
import { switchMap } from './switchMap';
import { identity } from '../util/identity';

export function switchAll<T>(): OperatorFunction<ObservableInput<T>, T>;
export function switchAll<R>(): OperatorFunction<any, R>;

/**
 * Converts a higher-order Observable into a first-order Observable
 * producing values only from the most recent observable sequence
 *
 * <span class="informal">Flattens an Observable-of-Observables.</span>
 *
 * ![](switchAll.png)
 *
 * `switchAll` subscribes to a source that is an observable of observables, also known as a
 * "higher-order observable" (or `Observable<Observable<T>>`). It subscribes to the most recently
 * provided "inner observable" emitted by the source, unsubscribing from any previously subscribed
 * to inner observable, such that only the most recent inner observable may be subscribed to at
 * any point in time. The resulting observable returned by `switchAll` will only complete if the
 * source observable completes, *and* any currently subscribed to inner observable also has completed,
 * if there are any.
 *
 * ## Examples
 * Spawn a new interval observable for each click event, but for every new
 * click, cancel the previous interval and subscribe to the new one.
 *
 * ```ts
 * import { fromEvent, interval } from 'rxjs';
 * import { switchAll, map, tap } from 'rxjs/operators';
 *
 * const clicks = fromEvent(document, 'click').pipe(tap(() => console.log('click')));
 * const source = clicks.pipe(map((ev) => interval(1000)));
 *
 * source.pipe(
 *   switchAll()
 * ).subscribe(x => console.log(x));
 *
 * // Output
 * // click
 * // 1
 * // 2
 * // 3
 * // 4
 * // ...
 * // click
 * // 1
 * // 2
 * // 3
 * // ...
 * // click
 * // ...
 * ```
 *
 * @see {@link combineAll}
 * @see {@link concatAll}
 * @see {@link exhaust}
 * @see {@link switchMap}
 * @see {@link switchMapTo}
 * @see {@link mergeAll}
 */

export function switchAll<T>(): OperatorFunction<ObservableInput<T>, T> {
  return switchMap(identity);
}
