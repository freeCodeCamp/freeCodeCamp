import { Observable } from '../Observable';
import { ObservableInput, ObservedValuesFromArray, ObservedValueOf, SubscribableOrPromise } from '../types';
/** @deprecated Use the version that takes an array of Observables instead */
export declare function forkJoin<T>(v1: SubscribableOrPromise<T>): Observable<[T]>;
/** @deprecated Use the version that takes an array of Observables instead */
export declare function forkJoin<T, T2>(v1: ObservableInput<T>, v2: ObservableInput<T2>): Observable<[T, T2]>;
/** @deprecated Use the version that takes an array of Observables instead */
export declare function forkJoin<T, T2, T3>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>): Observable<[T, T2, T3]>;
/** @deprecated Use the version that takes an array of Observables instead */
export declare function forkJoin<T, T2, T3, T4>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>): Observable<[T, T2, T3, T4]>;
/** @deprecated Use the version that takes an array of Observables instead */
export declare function forkJoin<T, T2, T3, T4, T5>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>): Observable<[T, T2, T3, T4, T5]>;
/** @deprecated Use the version that takes an array of Observables instead */
export declare function forkJoin<T, T2, T3, T4, T5, T6>(v1: ObservableInput<T>, v2: ObservableInput<T2>, v3: ObservableInput<T3>, v4: ObservableInput<T4>, v5: ObservableInput<T5>, v6: ObservableInput<T6>): Observable<[T, T2, T3, T4, T5, T6]>;
export declare function forkJoin<A>(sources: [ObservableInput<A>]): Observable<[A]>;
export declare function forkJoin<A, B>(sources: [ObservableInput<A>, ObservableInput<B>]): Observable<[A, B]>;
export declare function forkJoin<A, B, C>(sources: [ObservableInput<A>, ObservableInput<B>, ObservableInput<C>]): Observable<[A, B, C]>;
export declare function forkJoin<A, B, C, D>(sources: [ObservableInput<A>, ObservableInput<B>, ObservableInput<C>, ObservableInput<D>]): Observable<[A, B, C, D]>;
export declare function forkJoin<A, B, C, D, E>(sources: [ObservableInput<A>, ObservableInput<B>, ObservableInput<C>, ObservableInput<D>, ObservableInput<E>]): Observable<[A, B, C, D, E]>;
export declare function forkJoin<A, B, C, D, E, F>(sources: [ObservableInput<A>, ObservableInput<B>, ObservableInput<C>, ObservableInput<D>, ObservableInput<E>, ObservableInput<F>]): Observable<[A, B, C, D, E, F]>;
export declare function forkJoin<A extends ObservableInput<any>[]>(sources: A): Observable<ObservedValuesFromArray<A>[]>;
export declare function forkJoin(sourcesObject: {}): Observable<never>;
export declare function forkJoin<T, K extends keyof T>(sourcesObject: T): Observable<{
    [K in keyof T]: ObservedValueOf<T[K]>;
}>;
/** @deprecated resultSelector is deprecated, pipe to map instead */
export declare function forkJoin(...args: Array<ObservableInput<any> | Function>): Observable<any>;
/** @deprecated Use the version that takes an array of Observables instead */
export declare function forkJoin<T>(...sources: ObservableInput<T>[]): Observable<T[]>;
