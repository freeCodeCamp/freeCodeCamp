import { SchedulerLike } from '../types';
import { isScheduler } from '../util/isScheduler';
import { fromArray } from './fromArray';
import { Observable } from '../Observable';
import { scheduleArray } from '../scheduled/scheduleArray';

/* tslint:disable:max-line-length */
/** @deprecated use {@link scheduled} instead `scheduled([a, b, c], scheduler)` */
export function of<T>(a: T, scheduler: SchedulerLike): Observable<T>;
/** @deprecated use {@link scheduled} instead `scheduled([a, b, c], scheduler)` */
export function of<T, T2>(a: T, b: T2, scheduler: SchedulerLike): Observable<T | T2>;
/** @deprecated use {@link scheduled} instead `scheduled([a, b, c], scheduler)` */
export function of<T, T2, T3>(a: T, b: T2, c: T3, scheduler: SchedulerLike): Observable<T | T2 | T3>;
/** @deprecated use {@link scheduled} instead `scheduled([a, b, c], scheduler)` */
export function of<T, T2, T3, T4>(a: T, b: T2, c: T3, d: T4, scheduler: SchedulerLike): Observable<T | T2 | T3 | T4>;
/** @deprecated use {@link scheduled} instead `scheduled([a, b, c], scheduler)` */
export function of<T, T2, T3, T4, T5>(a: T, b: T2, c: T3, d: T4, e: T5, scheduler: SchedulerLike): Observable<T | T2 | T3 | T4 | T5>;
/** @deprecated use {@link scheduled} instead `scheduled([a, b, c], scheduler)` */
export function of<T, T2, T3, T4, T5, T6>(a: T, b: T2, c: T3, d: T4, e: T5, f: T6, scheduler: SchedulerLike): Observable<T | T2 | T3 | T4 | T5 | T6>;
/** @deprecated use {@link scheduled} instead `scheduled([a, b, c], scheduler)` */
export function of<T, T2, T3, T4, T5, T6, T7>(a: T, b: T2, c: T3, d: T4, e: T5, f: T6, g: T7, scheduler: SchedulerLike):
  Observable<T | T2 | T3 | T4 | T5 | T6 | T7>;
/** @deprecated use {@link scheduled} instead `scheduled([a, b, c], scheduler)` */
export function of<T, T2, T3, T4, T5, T6, T7, T8>(a: T, b: T2, c: T3, d: T4, e: T5, f: T6, g: T7, h: T8, scheduler: SchedulerLike):
  Observable<T | T2 | T3 | T4 | T5 | T6 | T7 | T8>;
/** @deprecated use {@link scheduled} instead `scheduled([a, b, c], scheduler)` */
export function of<T, T2, T3, T4, T5, T6, T7, T8, T9>(a: T, b: T2, c: T3, d: T4, e: T5, f: T6, g: T7, h: T8, i: T9, scheduler: SchedulerLike):
  Observable<T | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9>;
export function of<T>(...args: (T | SchedulerLike)[]): Observable<T>;

// TODO(benlesh): Update the typings for this when we can switch to TS 3.x
export function of<T>(a: T): Observable<T>;
export function of<T, T2>(a: T, b: T2): Observable<T | T2>;
export function of<T, T2, T3>(a: T, b: T2, c: T3): Observable<T | T2 | T3>;
export function of<T, T2, T3, T4>(a: T, b: T2, c: T3, d: T4): Observable<T | T2 | T3 | T4>;
export function of<T, T2, T3, T4, T5>(a: T, b: T2, c: T3, d: T4, e: T5): Observable<T | T2 | T3 | T4 | T5>;
export function of<T, T2, T3, T4, T5, T6>(a: T, b: T2, c: T3, d: T4, e: T5, f: T6): Observable<T | T2 | T3 | T4 | T5 | T6>;
export function of<T, T2, T3, T4, T5, T6, T7>(a: T, b: T2, c: T3, d: T4, e: T5, f: T6, g: T7):
  Observable<T | T2 | T3 | T4 | T5 | T6 | T7>;
export function of<T, T2, T3, T4, T5, T6, T7, T8>(a: T, b: T2, c: T3, d: T4, e: T5, f: T6, g: T7, h: T8):
  Observable<T | T2 | T3 | T4 | T5 | T6 | T7 | T8>;
export function of<T, T2, T3, T4, T5, T6, T7, T8, T9>(a: T, b: T2, c: T3, d: T4, e: T5, f: T6, g: T7, h: T8, i: T9):
  Observable<T | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9>;
export function of<T>(...args: T[]): Observable<T>;
/* tslint:enable:max-line-length */

/**
 * Converts the arguments to an observable sequence.
 *
 * <span class="informal">Each argument becomes a `next` notification.</span>
 *
 * ![](of.png)
 *
 * Unlike {@link from}, it does not do any flattening and emits each argument in whole
 * as a separate `next` notification.
 *
 * ## Examples
 *
 * Emit the values `10, 20, 30`
 *
 * ```ts
 * import { of } from 'rxjs';
 *
 * of(10, 20, 30)
 * .subscribe(
 *   next => console.log('next:', next),
 *   err => console.log('error:', err),
 *   () => console.log('the end'),
 * );
 * // result:
 * // 'next: 10'
 * // 'next: 20'
 * // 'next: 30'
 *
 * ```
 *
 * Emit the array `[1,2,3]`
 *
 * ```ts
 * import { of } from 'rxjs';
 *
 * of([1,2,3])
 * .subscribe(
 *   next => console.log('next:', next),
 *   err => console.log('error:', err),
 *   () => console.log('the end'),
 * );
 * // result:
 * // 'next: [1,2,3]'
 * ```
 *
 * @see {@link from}
 * @see {@link range}
 *
 * @param {...T} values A comma separated list of arguments you want to be emitted
 * @return {Observable} An Observable that emits the arguments
 * described above and then completes.
 * @method of
 * @owner Observable
 */

export function of<T>(...args: Array<T | SchedulerLike>): Observable<T> {
  let scheduler = args[args.length - 1] as SchedulerLike;
  if (isScheduler(scheduler)) {
    args.pop();
    return scheduleArray(args as T[], scheduler);
  } else {
    return fromArray(args as T[]);
  }
}
