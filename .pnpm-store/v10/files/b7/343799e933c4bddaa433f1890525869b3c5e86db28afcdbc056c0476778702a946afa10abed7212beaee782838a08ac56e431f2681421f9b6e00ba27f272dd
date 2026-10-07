import { Observable } from '../Observable';
import { ObservableInput } from '../types';
import { from } from './from';
import { isArray } from '../util/isArray';
import { EMPTY } from './empty';

/* tslint:disable:max-line-length */
export function onErrorResumeNext<R>(v: ObservableInput<R>): Observable<R>;
export function onErrorResumeNext<T2, T3, R>(v2: ObservableInput<T2>, v3: ObservableInput<T3>): Observable<R>;
export function onErrorResumeNext<T2, T3, T4, R>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>): Observable<R>;
export function onErrorResumeNext<T2, T3, T4, T5, R>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>): Observable<R>;
export function onErrorResumeNext<T2, T3, T4, T5, T6, R>(v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, v6: ObservableInput<T6>): Observable<R>;

export function onErrorResumeNext<R>(...observables: Array<ObservableInput<any> | ((...values: Array<any>) => R)>): Observable<R>;
export function onErrorResumeNext<R>(array: ObservableInput<any>[]): Observable<R>;
/* tslint:enable:max-line-length */

/**
 * When any of the provided Observable emits an complete or error notification, it immediately subscribes to the next one
 * that was passed.
 *
 * <span class="informal">Execute series of Observables no matter what, even if it means swallowing errors.</span>
 *
 * ![](onErrorResumeNext.png)
 *
 * `onErrorResumeNext` Will subscribe to each observable source it is provided, in order.
 * If the source it's subscribed to emits an error or completes, it will move to the next source
 * without error.
 *
 * If `onErrorResumeNext` is provided no arguments, or a single, empty array, it will return {@link index/EMPTY}.
 *
 * `onErrorResumeNext` is basically {@link concat}, only it will continue, even if one of its
 * sources emits an error.
 *
 * Note that there is no way to handle any errors thrown by sources via the result of
 * `onErrorResumeNext`. If you want to handle errors thrown in any given source, you can
 * always use the {@link catchError} operator on them before passing them into `onErrorResumeNext`.
 *
 * ## Example
 * Subscribe to the next Observable after map fails</caption>
 * ```ts
 * import { onErrorResumeNext, of } from 'rxjs';
 * import { map } from 'rxjs/operators';
 *
 * onErrorResumeNext(
 *  of(1, 2, 3, 0).pipe(
 *    map(x => {
 *      if (x === 0) throw Error();
 *      return 10 / x;
 *    })
 *  ),
 *  of(1, 2, 3),
 * )
 * .subscribe(
 *   val => console.log(val),
 *   err => console.log(err),          // Will never be called.
 *   () => console.log('done'),
 * );
 *
 * // Logs:
 * // 10
 * // 5
 * // 3.3333333333333335
 * // 1
 * // 2
 * // 3
 * // "done"
 * ```
 *
 * @see {@link concat}
 * @see {@link catchError}
 *
 * @param {...ObservableInput} sources Observables (or anything that *is* observable) passed either directly or as an array.
 * @return {Observable} An Observable that concatenates all sources, one after the other,
 * ignoring all errors, such that any error causes it to move on to the next source.
 */
export function onErrorResumeNext<T, R>(...sources: Array<ObservableInput<any> |
                                                              Array<ObservableInput<any>> |
                                                              ((...values: Array<any>) => R)>): Observable<R> {

  if (sources.length === 0) {
    return EMPTY;
  }

  const [ first, ...remainder ] = sources;

  if (sources.length === 1 && isArray(first)) {
    return onErrorResumeNext(...first);
  }

  return new Observable(subscriber => {
    const subNext = () => subscriber.add(
      onErrorResumeNext(...remainder).subscribe(subscriber)
    );

    return from(first).subscribe({
      next(value) { subscriber.next(value); },
      error: subNext,
      complete: subNext,
    });
  });
}
