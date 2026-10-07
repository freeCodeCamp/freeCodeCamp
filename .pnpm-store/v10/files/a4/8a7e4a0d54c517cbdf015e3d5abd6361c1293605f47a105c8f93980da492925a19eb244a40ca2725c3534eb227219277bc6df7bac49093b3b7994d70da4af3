import { Observable } from '../Observable';
import { ObservableInput, SchedulerLike, ObservedValueOf } from '../types';
import { isScheduler } from '../util/isScheduler';
import { of } from './of';
import { from } from './from';
import { concatAll } from '../operators/concatAll';

/* tslint:disable:max-line-length */
/** @deprecated Use {@link scheduled} and {@link concatAll} (e.g. `scheduled([o1, o2, o3], scheduler).pipe(concatAll())`) */
export function concat<O1 extends ObservableInput<any>>(v1: O1, scheduler: SchedulerLike): Observable<ObservedValueOf<O1>>;
/** @deprecated Use {@link scheduled} and {@link concatAll} (e.g. `scheduled([o1, o2, o3], scheduler).pipe(concatAll())`) */
export function concat<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>>(v1: O1, v2: O2, scheduler: SchedulerLike): Observable<ObservedValueOf<O1> | ObservedValueOf<O2>>;
/** @deprecated Use {@link scheduled} and {@link concatAll} (e.g. `scheduled([o1, o2, o3], scheduler).pipe(concatAll())`) */
export function concat<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>, O3 extends ObservableInput<any>>(v1: O1, v2: O2, v3: O3, scheduler: SchedulerLike): Observable<ObservedValueOf<O1> | ObservedValueOf<O2> | ObservedValueOf<O3>>;
/** @deprecated Use {@link scheduled} and {@link concatAll} (e.g. `scheduled([o1, o2, o3], scheduler).pipe(concatAll())`) */
export function concat<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>, O3 extends ObservableInput<any>, O4 extends ObservableInput<any>>(v1: O1, v2: O2, v3: O3, v4: O4, scheduler: SchedulerLike): Observable<ObservedValueOf<O1> | ObservedValueOf<O2> | ObservedValueOf<O3> | ObservedValueOf<O4>>;
/** @deprecated Use {@link scheduled} and {@link concatAll} (e.g. `scheduled([o1, o2, o3], scheduler).pipe(concatAll())`) */
export function concat<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>, O3 extends ObservableInput<any>, O4 extends ObservableInput<any>, O5 extends ObservableInput<any>>(v1: O1, v2: O2, v3: O3, v4: O4, v5: O5, scheduler: SchedulerLike): Observable<ObservedValueOf<O1> | ObservedValueOf<O2> | ObservedValueOf<O3> | ObservedValueOf<O4> | ObservedValueOf<O5>>;
/** @deprecated Use {@link scheduled} and {@link concatAll} (e.g. `scheduled([o1, o2, o3], scheduler).pipe(concatAll())`) */
export function concat<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>, O3 extends ObservableInput<any>, O4 extends ObservableInput<any>, O5 extends ObservableInput<any>, O6 extends ObservableInput<any>>(v1: O1, v2: O2, v3: O3, v4: O4, v5: O5, v6: O6, scheduler: SchedulerLike): Observable<ObservedValueOf<O1> | ObservedValueOf<O2> | ObservedValueOf<O3> | ObservedValueOf<O4> | ObservedValueOf<O5> | ObservedValueOf<O6>>;

export function concat<O1 extends ObservableInput<any>>(v1: O1): Observable<ObservedValueOf<O1>>;
export function concat<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>>(v1: O1, v2: O2): Observable<ObservedValueOf<O1> | ObservedValueOf<O2>>;
export function concat<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>, O3 extends ObservableInput<any>>(v1: O1, v2: O2, v3: O3): Observable<ObservedValueOf<O1> | ObservedValueOf<O2> | ObservedValueOf<O3>>;
export function concat<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>, O3 extends ObservableInput<any>, O4 extends ObservableInput<any>>(v1: O1, v2: O2, v3: O3, v4: O4): Observable<ObservedValueOf<O1> | ObservedValueOf<O2> | ObservedValueOf<O3> | ObservedValueOf<O4>>;
export function concat<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>, O3 extends ObservableInput<any>, O4 extends ObservableInput<any>, O5 extends ObservableInput<any>>(v1: O1, v2: O2, v3: O3, v4: O4, v5: O5): Observable<ObservedValueOf<O1> | ObservedValueOf<O2> | ObservedValueOf<O3> | ObservedValueOf<O4> | ObservedValueOf<O5>>;
export function concat<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>, O3 extends ObservableInput<any>, O4 extends ObservableInput<any>, O5 extends ObservableInput<any>, O6 extends ObservableInput<any>>(v1: O1, v2: O2, v3: O3, v4: O4, v5: O5, v6: O6): Observable<ObservedValueOf<O1> | ObservedValueOf<O2> | ObservedValueOf<O3> | ObservedValueOf<O4> | ObservedValueOf<O5> | ObservedValueOf<O6>>;
export function concat<O extends ObservableInput<any>>(...observables: O[]): Observable<ObservedValueOf<O>>;
/** @deprecated Use {@link scheduled} and {@link concatAll} (e.g. `scheduled([o1, o2, o3], scheduler).pipe(concatAll())`) */
export function concat<O extends ObservableInput<any>>(...observables: (O | SchedulerLike)[]): Observable<ObservedValueOf<O>>;
export function concat<R>(...observables: ObservableInput<any>[]): Observable<R>;
/** @deprecated Use {@link scheduled} and {@link concatAll} (e.g. `scheduled([o1, o2, o3], scheduler).pipe(concatAll())`) */
export function concat<R>(...observables: (ObservableInput<any> | SchedulerLike)[]): Observable<R>;
/* tslint:enable:max-line-length */
/**
 * Creates an output Observable which sequentially emits all values from given
 * Observable and then moves on to the next.
 *
 * <span class="informal">Concatenates multiple Observables together by
 * sequentially emitting their values, one Observable after the other.</span>
 *
 * ![](concat.png)
 *
 * `concat` joins multiple Observables together, by subscribing to them one at a time and
 * merging their results into the output Observable. You can pass either an array of
 * Observables, or put them directly as arguments. Passing an empty array will result
 * in Observable that completes immediately.
 *
 * `concat` will subscribe to first input Observable and emit all its values, without
 * changing or affecting them in any way. When that Observable completes, it will
 * subscribe to then next Observable passed and, again, emit its values. This will be
 * repeated, until the operator runs out of Observables. When last input Observable completes,
 * `concat` will complete as well. At any given moment only one Observable passed to operator
 * emits values. If you would like to emit values from passed Observables concurrently, check out
 * {@link merge} instead, especially with optional `concurrent` parameter. As a matter of fact,
 * `concat` is an equivalent of `merge` operator with `concurrent` parameter set to `1`.
 *
 * Note that if some input Observable never completes, `concat` will also never complete
 * and Observables following the one that did not complete will never be subscribed. On the other
 * hand, if some Observable simply completes immediately after it is subscribed, it will be
 * invisible for `concat`, which will just move on to the next Observable.
 *
 * If any Observable in chain errors, instead of passing control to the next Observable,
 * `concat` will error immediately as well. Observables that would be subscribed after
 * the one that emitted error, never will.
 *
 * If you pass to `concat` the same Observable many times, its stream of values
 * will be "replayed" on every subscription, which means you can repeat given Observable
 * as many times as you like. If passing the same Observable to `concat` 1000 times becomes tedious,
 * you can always use {@link repeat}.
 *
 * ## Examples
 * ### Concatenate a timer counting from 0 to 3 with a synchronous sequence from 1 to 10
 * ```ts
 * import { concat, interval, range } from 'rxjs';
 * import { take } from 'rxjs/operators';
 *
 * const timer = interval(1000).pipe(take(4));
 * const sequence = range(1, 10);
 * const result = concat(timer, sequence);
 * result.subscribe(x => console.log(x));
 *
 * // results in:
 * // 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3 -immediate-> 1 ... 10
 * ```
 *
 * ### Concatenate 3 Observables
 * ```ts
 * import { concat, interval } from 'rxjs';
 * import { take } from 'rxjs/operators';
 *
 * const timer1 = interval(1000).pipe(take(10));
 * const timer2 = interval(2000).pipe(take(6));
 * const timer3 = interval(500).pipe(take(10));
 *
 * const result = concat(timer1, timer2, timer3);
 * result.subscribe(x => console.log(x));
 *
 * // results in the following:
 * // (Prints to console sequentially)
 * // -1000ms-> 0 -1000ms-> 1 -1000ms-> ... 9
 * // -2000ms-> 0 -2000ms-> 1 -2000ms-> ... 5
 * // -500ms-> 0 -500ms-> 1 -500ms-> ... 9
 * ```
 *
 * ### Concatenate the same Observable to repeat it
 * ```ts
 * import { concat, interval } from 'rxjs';
 * import { take } from 'rxjs/operators';
 *
 * const timer = interval(1000).pipe(take(2));
 *
 * concat(timer, timer) // concatenating the same Observable!
 * .subscribe(
 *   value => console.log(value),
 *   err => {},
 *   () => console.log('...and it is done!')
 * );
 *
 * // Logs:
 * // 0 after 1s
 * // 1 after 2s
 * // 0 after 3s
 * // 1 after 4s
 * // "...and it is done!" also after 4s
 * ```
 *
 * @see {@link concatAll}
 * @see {@link concatMap}
 * @see {@link concatMapTo}
 * @see {@link startWith}
 * @see {@link endWith}
 *
 * @param {ObservableInput} input1 An input Observable to concatenate with others.
 * @param {ObservableInput} input2 An input Observable to concatenate with others.
 * More than one input Observables may be given as argument.
 * @param {SchedulerLike} [scheduler=null] An optional {@link SchedulerLike} to schedule each
 * Observable subscription on.
 * @return {Observable} All values of each passed Observable merged into a
 * single Observable, in order, in serial fashion.
 * @static true
 * @name concat
 * @owner Observable
 */
export function concat<O extends ObservableInput<any>, R>(...observables: Array<O | SchedulerLike>): Observable<ObservedValueOf<O> | R> {
  return concatAll<R>()(of(...observables));
}
