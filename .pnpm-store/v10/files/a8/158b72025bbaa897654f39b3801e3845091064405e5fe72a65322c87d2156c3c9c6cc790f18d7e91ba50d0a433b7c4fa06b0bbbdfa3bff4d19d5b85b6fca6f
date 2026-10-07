import { Observable } from '../Observable';
import { ObservableInput, ObservedValuesFromArray, ObservedValueOf, SubscribableOrPromise } from '../types';
import { isArray } from '../util/isArray';
import { map } from '../operators/map';
import { isObject } from '../util/isObject';
import { isObservable } from '../util/isObservable';
import { from } from './from';

/* tslint:disable:max-line-length */

// forkJoin(a$, b$, c$)
/** @deprecated Use the version that takes an array of Observables instead */
export function forkJoin<T>(v1: SubscribableOrPromise<T>): Observable<[T]>;
/** @deprecated Use the version that takes an array of Observables instead */
export function forkJoin<T, T2>(v1: ObservableInput<T>, v2: ObservableInput<T2>): Observable<[T, T2]>;
/** @deprecated Use the version that takes an array of Observables instead */
export function forkJoin<T, T2, T3>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>): Observable<[T, T2, T3]>;
/** @deprecated Use the version that takes an array of Observables instead */
export function forkJoin<T, T2, T3, T4>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>): Observable<[T, T2, T3, T4]>;
/** @deprecated Use the version that takes an array of Observables instead */
export function forkJoin<T, T2, T3, T4, T5>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>): Observable<[T, T2, T3, T4, T5]>;
/** @deprecated Use the version that takes an array of Observables instead */
export function forkJoin<T, T2, T3, T4, T5, T6>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, v6: ObservableInput<T6>): Observable<[T, T2, T3, T4, T5, T6]>;

// forkJoin([a$, b$, c$]);
// TODO(benlesh): Uncomment for TS 3.0
// export function forkJoin(sources: []): Observable<never>;
export function forkJoin<A>(sources: [ObservableInput<A>]): Observable<[A]>;
export function forkJoin<A, B>(sources: [ObservableInput<A>, ObservableInput<B>]): Observable<[A, B]>;
export function forkJoin<A, B, C>(sources: [ObservableInput<A>, ObservableInput<B>, ObservableInput<C>]): Observable<[A, B, C]>;
export function forkJoin<A, B, C, D>(sources: [ObservableInput<A>, ObservableInput<B>, ObservableInput<C>, ObservableInput<D>]): Observable<[A, B, C, D]>;
export function forkJoin<A, B, C, D, E>(sources: [ObservableInput<A>, ObservableInput<B>, ObservableInput<C>, ObservableInput<D>, ObservableInput<E>]): Observable<[A, B, C, D, E]>;
export function forkJoin<A, B, C, D, E, F>(sources: [ObservableInput<A>, ObservableInput<B>, ObservableInput<C>, ObservableInput<D>, ObservableInput<E>, ObservableInput<F>]): Observable<[A, B, C, D, E, F]>;
export function forkJoin<A extends ObservableInput<any>[]>(sources: A): Observable<ObservedValuesFromArray<A>[]>;

// forkJoin({})
export function forkJoin(sourcesObject: {}): Observable<never>;
export function forkJoin<T, K extends keyof T>(sourcesObject: T): Observable<{ [K in keyof T]: ObservedValueOf<T[K]> }>;

/** @deprecated resultSelector is deprecated, pipe to map instead */
export function forkJoin(...args: Array<ObservableInput<any>|Function>): Observable<any>;
/** @deprecated Use the version that takes an array of Observables instead */
export function forkJoin<T>(...sources: ObservableInput<T>[]): Observable<T[]>;
/* tslint:enable:max-line-length */

/**
 * Accepts an `Array` of {@link ObservableInput} or a dictionary `Object` of {@link ObservableInput} and returns
 * an {@link Observable} that emits either an array of values in the exact same order as the passed array,
 * or a dictionary of values in the same shape as the passed dictionary.
 *
 * <span class="informal">Wait for Observables to complete and then combine last values they emitted.</span>
 *
 * ![](forkJoin.png)
 *
 * `forkJoin` is an operator that takes any number of input observables which can be passed either as an array
 * or a dictionary of input observables. If no input observables are provided, resulting stream will complete
 * immediately.
 *
 * `forkJoin` will wait for all passed observables to complete and then it will emit an array or an object with last
 * values from corresponding observables.
 *
 * If you pass an array of `n` observables to the operator, resulting
 * array will have `n` values, where first value is the last thing emitted by the first observable,
 * second value is the last thing emitted by the second observable and so on.
 *
 * If you pass a dictionary of observables to the operator, resulting
 * objects will have the same keys as the dictionary passed, with their last values they've emitted
 * located at the corresponding key.
 *
 * That means `forkJoin` will not emit more than once and it will complete after that. If you need to emit combined
 * values not only at the end of lifecycle of passed observables, but also throughout it, try out {@link combineLatest}
 * or {@link zip} instead.
 *
 * In order for resulting array to have the same length as the number of input observables, whenever any of
 * that observables completes without emitting any value, `forkJoin` will complete at that moment as well
 * and it will not emit anything either, even if it already has some last values from other observables.
 * Conversely, if there is an observable that never completes, `forkJoin` will never complete as well,
 * unless at any point some other observable completes without emitting value, which brings us back to
 * the previous case. Overall, in order for `forkJoin` to emit a value, all observables passed as arguments
 * have to emit something at least once and complete.
 *
 * If any input observable errors at some point, `forkJoin` will error as well and all other observables
 * will be immediately unsubscribed.
 *
 * Optionally `forkJoin` accepts project function, that will be called with values which normally
 * would land in emitted array. Whatever is returned by project function, will appear in output
 * observable instead. This means that default project can be thought of as a function that takes
 * all its arguments and puts them into an array. Note that project function will be called only
 * when output observable is supposed to emit a result.
 *
 * ## Examples
 *
 * ### Use forkJoin with a dictionary of observable inputs
 * ```ts
 * import { forkJoin, of, timer } from 'rxjs';
 *
 * const observable = forkJoin({
 *   foo: of(1, 2, 3, 4),
 *   bar: Promise.resolve(8),
 *   baz: timer(4000),
 * });
 * observable.subscribe({
 *  next: value => console.log(value),
 *  complete: () => console.log('This is how it ends!'),
 * });
 *
 * // Logs:
 * // { foo: 4, bar: 8, baz: 0 } after 4 seconds
 * // "This is how it ends!" immediately after
 * ```
 *
 * ### Use forkJoin with an array of observable inputs
 * ```ts
 * import { forkJoin, of } from 'rxjs';
 *
 * const observable = forkJoin([
 *   of(1, 2, 3, 4),
 *   Promise.resolve(8),
 *   timer(4000),
 * ]);
 * observable.subscribe({
 *  next: value => console.log(value),
 *  complete: () => console.log('This is how it ends!'),
 * });
 *
 * // Logs:
 * // [4, 8, 0] after 4 seconds
 * // "This is how it ends!" immediately after
 * ```
 *
 * @see {@link combineLatest}
 * @see {@link zip}
 *
 * @param {...ObservableInput} sources Any number of Observables provided either as an array or as an arguments
 * passed directly to the operator.
 * @param {function} [project] Function that takes values emitted by input Observables and returns value
 * that will appear in resulting Observable instead of default array.
 * @return {Observable} Observable emitting either an array of last values emitted by passed Observables
 * or value from project function.
 */
export function forkJoin(
  ...sources: any[]
): Observable<any> {
  if (sources.length === 1) {
    const first = sources[0];
    if (isArray(first)) {
      return forkJoinInternal(first, null);
    }
    // TODO(benlesh): isObservable check will not be necessary when deprecated path is removed.
    if (isObject(first) && Object.getPrototypeOf(first) === Object.prototype) {
      const keys = Object.keys(first);
      return forkJoinInternal(keys.map(key => first[key]), keys);
    }
  }

  // DEPRECATED PATHS BELOW HERE
  if (typeof sources[sources.length - 1] === 'function') {
    const resultSelector = sources.pop() as Function;
    sources = (sources.length === 1 && isArray(sources[0])) ? sources[0] : sources;
    return forkJoinInternal(sources, null).pipe(
      map((args: any[]) => resultSelector(...args))
    );
  }

  return forkJoinInternal(sources, null);
}

function forkJoinInternal(sources: ObservableInput<any>[], keys: string[] | null): Observable<any> {
  return new Observable(subscriber => {
    const len = sources.length;
    if (len === 0) {
      subscriber.complete();
      return;
    }
    const values = new Array(len);
    let completed = 0;
    let emitted = 0;
    for (let i = 0; i < len; i++) {
      const source = from(sources[i]);
      let hasValue = false;
      subscriber.add(source.subscribe({
        next: value => {
          if (!hasValue) {
            hasValue = true;
            emitted++;
          }
          values[i] = value;
        },
        error: err => subscriber.error(err),
        complete: () => {
          completed++;
          if (completed === len || !hasValue) {
            if (emitted === len) {
              subscriber.next(keys ?
                keys.reduce((result, key, i) => (result[key] = values[i], result), {}) :
                values);
            }
            subscriber.complete();
          }
        }
      }));
    }
  });
}
