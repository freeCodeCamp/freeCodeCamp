import { Observable } from '../Observable';
import { concat } from '../observable/concat';
import { of } from '../observable/of';
import { MonoTypeOperatorFunction, SchedulerLike, OperatorFunction } from '../types';

/* tslint:disable:max-line-length */
/** @deprecated use {@link scheduled} and {@link concatAll} (e.g. `scheduled([source, [a, b, c]], scheduler).pipe(concatAll())`) */
export function endWith<T>(scheduler: SchedulerLike): MonoTypeOperatorFunction<T>;
/** @deprecated use {@link scheduled} and {@link concatAll} (e.g. `scheduled([source, [a, b, c]], scheduler).pipe(concatAll())`) */
export function endWith<T, A>(v1: A, scheduler: SchedulerLike): OperatorFunction<T, T | A>;
/** @deprecated use {@link scheduled} and {@link concatAll} (e.g. `scheduled([source, [a, b, c]], scheduler).pipe(concatAll())`) */
export function endWith<T, A, B>(v1: A, v2: B, scheduler: SchedulerLike): OperatorFunction<T, T | A | B>;
/** @deprecated use {@link scheduled} and {@link concatAll} (e.g. `scheduled([source, [a, b, c]], scheduler).pipe(concatAll())`) */
export function endWith<T, A, B, C>(v1: A, v2: B, v3: C, scheduler: SchedulerLike): OperatorFunction<T, T | A | B | C>;
/** @deprecated use {@link scheduled} and {@link concatAll} (e.g. `scheduled([source, [a, b, c]], scheduler).pipe(concatAll())`) */
export function endWith<T, A, B, C, D>(v1: A, v2: B, v3: C, v4: D, scheduler: SchedulerLike): OperatorFunction<T, T | A | B | C | D>;
/** @deprecated use {@link scheduled} and {@link concatAll} (e.g. `scheduled([source, [a, b, c]], scheduler).pipe(concatAll())`) */
export function endWith<T, A, B, C, D, E>(v1: A, v2: B, v3: C, v4: D, v5: E, scheduler: SchedulerLike): OperatorFunction<T, T | A | B | C | D | E>;
/** @deprecated use {@link scheduled} and {@link concatAll} (e.g. `scheduled([source, [a, b, c]], scheduler).pipe(concatAll())`) */
export function endWith<T, A, B, C, D, E, F>(v1: A, v2: B, v3: C, v4: D, v5: E, v6: F, scheduler: SchedulerLike): OperatorFunction<T, T | A | B | C | D | E | F>;

export function endWith<T, A>(v1: A): OperatorFunction<T, T | A>;
export function endWith<T, A, B>(v1: A, v2: B): OperatorFunction<T, T | A | B>;
export function endWith<T, A, B, C>(v1: A, v2: B, v3: C): OperatorFunction<T, T | A | B | C>;
export function endWith<T, A, B, C, D>(v1: A, v2: B, v3: C, v4: D): OperatorFunction<T, T | A | B | C | D>;
export function endWith<T, A, B, C, D, E>(v1: A, v2: B, v3: C, v4: D, v5: E): OperatorFunction<T, T | A | B | C | D | E>;
export function endWith<T, A, B, C, D, E, F>(v1: A, v2: B, v3: C, v4: D, v5: E, v6: F): OperatorFunction<T, T | A | B | C | D | E | F>;
export function endWith<T, Z = T>(...array: Z[]): OperatorFunction<T, T | Z>;
/** @deprecated use {@link scheduled} and {@link concatAll} (e.g. `scheduled([source, [a, b, c]], scheduler).pipe(concatAll())`) */
export function endWith<T, Z = T>(...array: Array<Z | SchedulerLike>): OperatorFunction<T, T | Z>;
/* tslint:enable:max-line-length */

/**
 * Returns an Observable that emits the items you specify as arguments after it finishes emitting
 * items emitted by the source Observable.
 *
 * ![](endWith.png)
 *
 * ## Example
 * ### After the source observable completes, appends an emission and then completes too.
 *
 * ```ts
 * import { of } from 'rxjs';
 * import { endWith } from 'rxjs/operators';
 *
 * of('hi', 'how are you?', 'sorry, I have to go now').pipe(
 *   endWith('goodbye!'),
 * )
 * .subscribe(word => console.log(word));
 * // result:
 * // 'hi'
 * // 'how are you?'
 * // 'sorry, I have to go now'
 * // 'goodbye!'
 * ```
 *
 * @param {...T} values - Items you want the modified Observable to emit last.
 * @param {SchedulerLike} [scheduler] - A {@link SchedulerLike} to use for scheduling
 * the emissions of the `next` notifications.
 * @return {Observable} An Observable that emits the items emitted by the source Observable
 *  and then emits the items in the specified Iterable.
 * @method endWith
 * @owner Observable
 */
export function endWith<T>(...array: Array<T | SchedulerLike>): MonoTypeOperatorFunction<T> {
  return (source: Observable<T>) => concat(source, of(...array)) as Observable<T>;
}
