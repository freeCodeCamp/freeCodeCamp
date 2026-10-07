import { Observable } from '../Observable';
import { concat } from '../observable/concat';
import { isScheduler } from '../util/isScheduler';
import { MonoTypeOperatorFunction, OperatorFunction, SchedulerLike } from '../types';

/* tslint:disable:max-line-length */
/** @deprecated use {@link scheduled} and {@link concatAll} (e.g. `scheduled([[a, b, c], source], scheduler).pipe(concatAll())`) */
export function startWith<T>(scheduler: SchedulerLike): MonoTypeOperatorFunction<T>;
/** @deprecated use {@link scheduled} and {@link concatAll} (e.g. `scheduled([[a, b, c], source], scheduler).pipe(concatAll())`) */
export function startWith<T, D>(v1: D, scheduler: SchedulerLike): OperatorFunction<T, T | D>;
/** @deprecated use {@link scheduled} and {@link concatAll} (e.g. `scheduled([[a, b, c], source], scheduler).pipe(concatAll())`) */
export function startWith<T, D, E>(v1: D, v2: E, scheduler: SchedulerLike): OperatorFunction<T, T | D | E>;
/** @deprecated use {@link scheduled} and {@link concatAll} (e.g. `scheduled([[a, b, c], source], scheduler).pipe(concatAll())`) */
export function startWith<T, D, E, F>(v1: D, v2: E, v3: F, scheduler: SchedulerLike): OperatorFunction<T, T | D | E | F>;
/** @deprecated use {@link scheduled} and {@link concatAll} (e.g. `scheduled([[a, b, c], source], scheduler).pipe(concatAll())`) */
export function startWith<T, D, E, F, G>(v1: D, v2:  E, v3: F, v4: G, scheduler: SchedulerLike): OperatorFunction<T, T | D | E | F | G>;
/** @deprecated use {@link scheduled} and {@link concatAll} (e.g. `scheduled([[a, b, c], source], scheduler).pipe(concatAll())`) */
export function startWith<T, D, E, F, G, H>(v1: D, v2: E, v3: F, v4: G, v5: H, scheduler: SchedulerLike): OperatorFunction<T, T | D | E | F | G | H>;
/** @deprecated use {@link scheduled} and {@link concatAll} (e.g. `scheduled([[a, b, c], source], scheduler).pipe(concatAll())`) */
export function startWith<T, D, E, F, G, H, I>(v1: D, v2: E, v3: F, v4: G, v5: H, v6: I, scheduler: SchedulerLike): OperatorFunction<T, T | D | E | F | G | H | I>;

export function startWith<T, D>(v1: D): OperatorFunction<T, T | D>;
export function startWith<T, D, E>(v1: D, v2: E): OperatorFunction<T, T | D | E>;
export function startWith<T, D, E, F>(v1: D, v2: E, v3: F): OperatorFunction<T, T | D | E | F>;
export function startWith<T, D, E, F, G>(v1: D, v2:  E, v3: F, v4: G): OperatorFunction<T, T | D | E | F | G>;
export function startWith<T, D, E, F, G, H>(v1: D, v2: E, v3: F, v4: G, v5: H): OperatorFunction<T, T | D | E | F | G | H>;
export function startWith<T, D, E, F, G, H, I>(v1: D, v2: E, v3: F, v4: G, v5: H, v6: I): OperatorFunction<T, T | D | E | F | G | H | I>;
export function startWith<T, D = T>(...array: D[]): OperatorFunction<T, T | D>;
/** @deprecated use {@link scheduled} and {@link concatAll} (e.g. `scheduled([[a, b, c], source], scheduler).pipe(concatAll())`) */
export function startWith<T, D = T>(...array: Array<D | SchedulerLike>): OperatorFunction<T, T | D>;
/* tslint:enable:max-line-length */

/**
 * Returns an Observable that emits the items you specify as arguments before it begins to emit
 * items emitted by the source Observable.
 *
 * <span class="informal">First emits its arguments in order, and then any
 * emissions from the source.</span>
 *
 * ![](startWith.png)
 *
 * ## Examples
 *
 * Start the chain of emissions with `"first"`, `"second"`
 *
 * ```ts
 * import { of } from 'rxjs';
 * import { startWith } from 'rxjs/operators';
 *
 * of("from source")
 *   .pipe(startWith("first", "second"))
 *   .subscribe(x => console.log(x));
 *
 * // results:
 * //   "first"
 * //   "second"
 * //   "from source"
 * ```
 *
 * @param {...T} values - Items you want the modified Observable to emit first.
 * @param {SchedulerLike} [scheduler] - A {@link SchedulerLike} to use for scheduling
 * the emissions of the `next` notifications.
 * @return {Observable} An Observable that emits the items in the specified Iterable and then emits the items
 * emitted by the source Observable.
 * @method startWith
 * @owner Observable
 */
export function startWith<T, D>(...array: Array<T | SchedulerLike>): OperatorFunction<T, T | D> {
  const scheduler = array[array.length - 1] as SchedulerLike;
  if (isScheduler(scheduler)) {
    // deprecated path
    array.pop();
    return (source: Observable<T>) => concat(array as T[], source, scheduler);
  } else {
    return (source: Observable<T>) => concat(array as T[], source);
  }
}
