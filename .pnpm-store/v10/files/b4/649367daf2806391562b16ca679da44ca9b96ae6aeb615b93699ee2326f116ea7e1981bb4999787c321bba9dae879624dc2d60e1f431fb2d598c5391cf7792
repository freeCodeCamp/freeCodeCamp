import { Observable } from '../Observable';
import { ObservableInput, SchedulerLike} from '../types';
import { isScheduler } from '../util/isScheduler';
import { mergeAll } from '../operators/mergeAll';
import { fromArray } from './fromArray';

/* tslint:disable:max-line-length */
/** @deprecated use {@link scheduled} and {@link mergeAll} (e.g. `scheduled([ob1, ob2, ob3], scheduled).pipe(mergeAll())*/
export function merge<T>(v1: ObservableInput<T>, scheduler: SchedulerLike): Observable<T>;
/** @deprecated use {@link scheduled} and {@link mergeAll} (e.g. `scheduled([ob1, ob2, ob3], scheduled).pipe(mergeAll())*/
export function merge<T>(v1: ObservableInput<T>, concurrent: number, scheduler: SchedulerLike): Observable<T>;
/** @deprecated use {@link scheduled} and {@link mergeAll} (e.g. `scheduled([ob1, ob2, ob3], scheduled).pipe(mergeAll())*/
export function merge<T, T2>(v1: ObservableInput<T>, v2: ObservableInput<T2>, scheduler: SchedulerLike): Observable<T | T2>;
/** @deprecated use {@link scheduled} and {@link mergeAll} (e.g. `scheduled([ob1, ob2, ob3], scheduled).pipe(mergeAll())*/
export function merge<T, T2>(v1: ObservableInput<T>, v2: ObservableInput<T2>, concurrent: number, scheduler: SchedulerLike): Observable<T | T2>;
/** @deprecated use {@link scheduled} and {@link mergeAll} (e.g. `scheduled([ob1, ob2, ob3], scheduled).pipe(mergeAll())*/
export function merge<T, T2, T3>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, scheduler: SchedulerLike): Observable<T | T2 | T3>;
/** @deprecated use {@link scheduled} and {@link mergeAll} (e.g. `scheduled([ob1, ob2, ob3], scheduled).pipe(mergeAll())*/
export function merge<T, T2, T3>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, concurrent: number, scheduler: SchedulerLike): Observable<T | T2 | T3>;
/** @deprecated use {@link scheduled} and {@link mergeAll} (e.g. `scheduled([ob1, ob2, ob3], scheduled).pipe(mergeAll())*/
export function merge<T, T2, T3, T4>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, scheduler: SchedulerLike): Observable<T | T2 | T3 | T4>;
/** @deprecated use {@link scheduled} and {@link mergeAll} (e.g. `scheduled([ob1, ob2, ob3], scheduled).pipe(mergeAll())*/
export function merge<T, T2, T3, T4>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, concurrent: number, scheduler: SchedulerLike): Observable<T | T2 | T3 | T4>;
/** @deprecated use {@link scheduled} and {@link mergeAll} (e.g. `scheduled([ob1, ob2, ob3], scheduled).pipe(mergeAll())*/
export function merge<T, T2, T3, T4, T5>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, scheduler: SchedulerLike): Observable<T | T2 | T3 | T4 | T5>;
/** @deprecated use {@link scheduled} and {@link mergeAll} (e.g. `scheduled([ob1, ob2, ob3], scheduled).pipe(mergeAll())*/
export function merge<T, T2, T3, T4, T5>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, concurrent: number, scheduler: SchedulerLike): Observable<T | T2 | T3 | T4 | T5>;
/** @deprecated use {@link scheduled} and {@link mergeAll} (e.g. `scheduled([ob1, ob2, ob3], scheduled).pipe(mergeAll())*/
export function merge<T, T2, T3, T4, T5, T6>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, v6: ObservableInput<T6>, scheduler: SchedulerLike): Observable<T | T2 | T3 | T4 | T5 | T6>;
/** @deprecated use {@link scheduled} and {@link mergeAll} (e.g. `scheduled([ob1, ob2, ob3], scheduled).pipe(mergeAll())*/
export function merge<T, T2, T3, T4, T5, T6>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, v6: ObservableInput<T6>, concurrent: number, scheduler: SchedulerLike): Observable<T | T2 | T3 | T4 | T5 | T6>;

export function merge<T>(v1: ObservableInput<T>): Observable<T>;
export function merge<T>(v1: ObservableInput<T>, concurrent?: number): Observable<T>;
export function merge<T, T2>(v1: ObservableInput<T>, v2: ObservableInput<T2>): Observable<T | T2>;
export function merge<T, T2>(v1: ObservableInput<T>, v2: ObservableInput<T2>, concurrent?: number): Observable<T | T2>;
export function merge<T, T2, T3>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>): Observable<T | T2 | T3>;
export function merge<T, T2, T3>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, concurrent?: number): Observable<T | T2 | T3>;
export function merge<T, T2, T3, T4>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>): Observable<T | T2 | T3 | T4>;
export function merge<T, T2, T3, T4>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, concurrent?: number): Observable<T | T2 | T3 | T4>;
export function merge<T, T2, T3, T4, T5>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>): Observable<T | T2 | T3 | T4 | T5>;
export function merge<T, T2, T3, T4, T5>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, concurrent?: number): Observable<T | T2 | T3 | T4 | T5>;
export function merge<T, T2, T3, T4, T5, T6>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, v6: ObservableInput<T6>): Observable<T | T2 | T3 | T4 | T5 | T6>;
export function merge<T, T2, T3, T4, T5, T6>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, v6: ObservableInput<T6>, concurrent?: number): Observable<T | T2 | T3 | T4 | T5 | T6>;
export function merge<T>(...observables: (ObservableInput<T> | number)[]): Observable<T>;
/** @deprecated use {@link scheduled} and {@link mergeAll} (e.g. `scheduled([ob1, ob2, ob3], scheduled).pipe(mergeAll())*/
export function merge<T>(...observables: (ObservableInput<T> | SchedulerLike | number)[]): Observable<T>;
export function merge<T, R>(...observables: (ObservableInput<any> | number)[]): Observable<R>;
/** @deprecated use {@link scheduled} and {@link mergeAll} (e.g. `scheduled([ob1, ob2, ob3], scheduled).pipe(mergeAll())*/
export function merge<T, R>(...observables: (ObservableInput<any> | SchedulerLike | number)[]): Observable<R>;
/* tslint:enable:max-line-length */
/**
 * Creates an output Observable which concurrently emits all values from every
 * given input Observable.
 *
 * <span class="informal">Flattens multiple Observables together by blending
 * their values into one Observable.</span>
 *
 * ![](merge.png)
 *
 * `merge` subscribes to each given input Observable (as arguments), and simply
 * forwards (without doing any transformation) all the values from all the input
 * Observables to the output Observable. The output Observable only completes
 * once all input Observables have completed. Any error delivered by an input
 * Observable will be immediately emitted on the output Observable.
 *
 * ## Examples
 * ### Merge together two Observables: 1s interval and clicks
 * ```ts
 * import { merge, fromEvent, interval } from 'rxjs';
 *
 * const clicks = fromEvent(document, 'click');
 * const timer = interval(1000);
 * const clicksOrTimer = merge(clicks, timer);
 * clicksOrTimer.subscribe(x => console.log(x));
 *
 * // Results in the following:
 * // timer will emit ascending values, one every second(1000ms) to console
 * // clicks logs MouseEvents to console everytime the "document" is clicked
 * // Since the two streams are merged you see these happening
 * // as they occur.
 * ```
 *
 * ### Merge together 3 Observables, but only 2 run concurrently
 * ```ts
 * import { merge, interval } from 'rxjs';
 * import { take } from 'rxjs/operators';
 *
 * const timer1 = interval(1000).pipe(take(10));
 * const timer2 = interval(2000).pipe(take(6));
 * const timer3 = interval(500).pipe(take(10));
 * const concurrent = 2; // the argument
 * const merged = merge(timer1, timer2, timer3, concurrent);
 * merged.subscribe(x => console.log(x));
 *
 * // Results in the following:
 * // - First timer1 and timer2 will run concurrently
 * // - timer1 will emit a value every 1000ms for 10 iterations
 * // - timer2 will emit a value every 2000ms for 6 iterations
 * // - after timer1 hits its max iteration, timer2 will
 * //   continue, and timer3 will start to run concurrently with timer2
 * // - when timer2 hits its max iteration it terminates, and
 * //   timer3 will continue to emit a value every 500ms until it is complete
 * ```
 *
 * @see {@link mergeAll}
 * @see {@link mergeMap}
 * @see {@link mergeMapTo}
 * @see {@link mergeScan}
 *
 * @param {...ObservableInput} observables Input Observables to merge together.
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
 * Observables being subscribed to concurrently.
 * @param {SchedulerLike} [scheduler=null] The {@link SchedulerLike} to use for managing
 * concurrency of input Observables.
 * @return {Observable} an Observable that emits items that are the result of
 * every input Observable.
 * @static true
 * @name merge
 * @owner Observable
 */
export function merge<T, R>(...observables: Array<ObservableInput<any> | SchedulerLike | number>): Observable<R> {
 let concurrent = Number.POSITIVE_INFINITY;
 let scheduler: SchedulerLike = null;
  let last: any = observables[observables.length - 1];
  if (isScheduler(last)) {
    scheduler = <SchedulerLike>observables.pop();
    if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
      concurrent = <number>observables.pop();
    }
  } else if (typeof last === 'number') {
    concurrent = <number>observables.pop();
  }

  if (scheduler === null && observables.length === 1 && observables[0] instanceof Observable) {
    return <Observable<R>>observables[0];
  }

  return mergeAll<R>(concurrent)(fromArray<any>(observables, scheduler));
}
