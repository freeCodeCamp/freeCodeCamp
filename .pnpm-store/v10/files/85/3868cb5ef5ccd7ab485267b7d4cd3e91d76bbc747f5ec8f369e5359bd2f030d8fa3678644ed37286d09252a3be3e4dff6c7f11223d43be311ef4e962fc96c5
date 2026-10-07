import { Observable } from '../Observable';
import { ObservableInput, SchedulerLike, ObservedValueOf } from '../types';
import { Subscriber } from '../Subscriber';
import { OuterSubscriber } from '../OuterSubscriber';
import { Operator } from '../Operator';
/** @deprecated resultSelector no longer supported, pipe to map instead */
export declare function combineLatest<O1 extends ObservableInput<any>, R>(sources: [O1], resultSelector: (v1: ObservedValueOf<O1>) => R, scheduler?: SchedulerLike): Observable<R>;
/** @deprecated resultSelector no longer supported, pipe to map instead */
export declare function combineLatest<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>, R>(sources: [O1, O2], resultSelector: (v1: ObservedValueOf<O1>, v2: ObservedValueOf<O2>) => R, scheduler?: SchedulerLike): Observable<R>;
/** @deprecated resultSelector no longer supported, pipe to map instead */
export declare function combineLatest<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>, O3 extends ObservableInput<any>, R>(sources: [O1, O2, O3], resultSelector: (v1: ObservedValueOf<O1>, v2: ObservedValueOf<O2>, v3: ObservedValueOf<O3>) => R, scheduler?: SchedulerLike): Observable<R>;
/** @deprecated resultSelector no longer supported, pipe to map instead */
export declare function combineLatest<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>, O3 extends ObservableInput<any>, O4 extends ObservableInput<any>, R>(sources: [O1, O2, O3, O4], resultSelector: (v1: ObservedValueOf<O1>, v2: ObservedValueOf<O2>, v3: ObservedValueOf<O3>, v4: ObservedValueOf<O4>) => R, scheduler?: SchedulerLike): Observable<R>;
/** @deprecated resultSelector no longer supported, pipe to map instead */
export declare function combineLatest<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>, O3 extends ObservableInput<any>, O4 extends ObservableInput<any>, O5 extends ObservableInput<any>, R>(sources: [O1, O2, O3, O4, O5], resultSelector: (v1: ObservedValueOf<O1>, v2: ObservedValueOf<O2>, v3: ObservedValueOf<O3>, v4: ObservedValueOf<O4>, v5: ObservedValueOf<O5>) => R, scheduler?: SchedulerLike): Observable<R>;
/** @deprecated resultSelector no longer supported, pipe to map instead */
export declare function combineLatest<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>, O3 extends ObservableInput<any>, O4 extends ObservableInput<any>, O5 extends ObservableInput<any>, O6 extends ObservableInput<any>, R>(sources: [O1, O2, O3, O4, O5, O6], resultSelector: (v1: ObservedValueOf<O1>, v2: ObservedValueOf<O2>, v3: ObservedValueOf<O3>, v4: ObservedValueOf<O4>, v5: ObservedValueOf<O5>, v6: ObservedValueOf<O6>) => R, scheduler?: SchedulerLike): Observable<R>;
/** @deprecated resultSelector no longer supported, pipe to map instead */
export declare function combineLatest<O extends ObservableInput<any>, R>(sources: O[], resultSelector: (...args: ObservedValueOf<O>[]) => R, scheduler?: SchedulerLike): Observable<R>;
/** @deprecated resultSelector no longer supported, pipe to map instead */
export declare function combineLatest<O1 extends ObservableInput<any>, R>(v1: O1, resultSelector: (v1: ObservedValueOf<O1>) => R, scheduler?: SchedulerLike): Observable<R>;
/** @deprecated resultSelector no longer supported, pipe to map instead */
export declare function combineLatest<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>, R>(v1: O1, v2: O2, resultSelector: (v1: ObservedValueOf<O1>, v2: ObservedValueOf<O2>) => R, scheduler?: SchedulerLike): Observable<R>;
/** @deprecated resultSelector no longer supported, pipe to map instead */
export declare function combineLatest<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>, O3 extends ObservableInput<any>, R>(v1: O1, v2: O2, v3: O3, resultSelector: (v1: ObservedValueOf<O1>, v2: ObservedValueOf<O2>, v3: ObservedValueOf<O3>) => R, scheduler?: SchedulerLike): Observable<R>;
/** @deprecated resultSelector no longer supported, pipe to map instead */
export declare function combineLatest<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>, O3 extends ObservableInput<any>, O4 extends ObservableInput<any>, R>(v1: O1, v2: O2, v3: O3, v4: O4, resultSelector: (v1: ObservedValueOf<O1>, v2: ObservedValueOf<O2>, v3: ObservedValueOf<O3>, v4: ObservedValueOf<O4>) => R, scheduler?: SchedulerLike): Observable<R>;
/** @deprecated resultSelector no longer supported, pipe to map instead */
export declare function combineLatest<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>, O3 extends ObservableInput<any>, O4 extends ObservableInput<any>, O5 extends ObservableInput<any>, R>(v1: O1, v2: O2, v3: O3, v4: O4, v5: O5, resultSelector: (v1: ObservedValueOf<O1>, v2: ObservedValueOf<O2>, v3: ObservedValueOf<O3>, v4: ObservedValueOf<O4>, v5: ObservedValueOf<O5>) => R, scheduler?: SchedulerLike): Observable<R>;
/** @deprecated resultSelector no longer supported, pipe to map instead */
export declare function combineLatest<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>, O3 extends ObservableInput<any>, O4 extends ObservableInput<any>, O5 extends ObservableInput<any>, O6 extends ObservableInput<any>, R>(v1: O1, v2: O2, v3: O3, v4: O4, v5: O5, v6: O6, resultSelector: (v1: ObservedValueOf<O1>, v2: ObservedValueOf<O2>, v3: ObservedValueOf<O3>, v4: ObservedValueOf<O4>, v5: ObservedValueOf<O5>, v6: ObservedValueOf<O6>) => R, scheduler?: SchedulerLike): Observable<R>;
/** @deprecated Passing a scheduler here is deprecated, use {@link subscribeOn} and/or {@link observeOn} instead */
export declare function combineLatest<O1 extends ObservableInput<any>>(sources: [O1], scheduler: SchedulerLike): Observable<[ObservedValueOf<O1>]>;
/** @deprecated Passing a scheduler here is deprecated, use {@link subscribeOn} and/or {@link observeOn} instead */
export declare function combineLatest<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>>(sources: [O1, O2], scheduler: SchedulerLike): Observable<[ObservedValueOf<O1>, ObservedValueOf<O2>]>;
/** @deprecated Passing a scheduler here is deprecated, use {@link subscribeOn} and/or {@link observeOn} instead */
export declare function combineLatest<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>, O3 extends ObservableInput<any>>(sources: [O1, O2, O3], scheduler: SchedulerLike): Observable<[ObservedValueOf<O1>, ObservedValueOf<O2>, ObservedValueOf<O3>]>;
/** @deprecated Passing a scheduler here is deprecated, use {@link subscribeOn} and/or {@link observeOn} instead */
export declare function combineLatest<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>, O3 extends ObservableInput<any>, O4 extends ObservableInput<any>>(sources: [O1, O2, O3, O4], scheduler: SchedulerLike): Observable<[ObservedValueOf<O1>, ObservedValueOf<O2>, ObservedValueOf<O3>, ObservedValueOf<O4>]>;
/** @deprecated Passing a scheduler here is deprecated, use {@link subscribeOn} and/or {@link observeOn} instead */
export declare function combineLatest<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>, O3 extends ObservableInput<any>, O4 extends ObservableInput<any>, O5 extends ObservableInput<any>>(sources: [O1, O2, O3, O4, O5], scheduler: SchedulerLike): Observable<[ObservedValueOf<O1>, ObservedValueOf<O2>, ObservedValueOf<O3>, ObservedValueOf<O4>, ObservedValueOf<O5>]>;
/** @deprecated Passing a scheduler here is deprecated, use {@link subscribeOn} and/or {@link observeOn} instead */
export declare function combineLatest<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>, O3 extends ObservableInput<any>, O4 extends ObservableInput<any>, O5 extends ObservableInput<any>, O6 extends ObservableInput<any>>(sources: [O1, O2, O3, O4, O5, O6], scheduler: SchedulerLike): Observable<[ObservedValueOf<O1>, ObservedValueOf<O2>, ObservedValueOf<O3>, ObservedValueOf<O4>, ObservedValueOf<O5>, ObservedValueOf<O6>]>;
/** @deprecated Passing a scheduler here is deprecated, use {@link subscribeOn} and/or {@link observeOn} instead */
export declare function combineLatest<O extends ObservableInput<any>>(sources: O[], scheduler: SchedulerLike): Observable<ObservedValueOf<O>[]>;
export declare function combineLatest<O1 extends ObservableInput<any>>(sources: [O1]): Observable<[ObservedValueOf<O1>]>;
export declare function combineLatest<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>>(sources: [O1, O2]): Observable<[ObservedValueOf<O1>, ObservedValueOf<O2>]>;
export declare function combineLatest<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>, O3 extends ObservableInput<any>>(sources: [O1, O2, O3]): Observable<[ObservedValueOf<O1>, ObservedValueOf<O2>, ObservedValueOf<O3>]>;
export declare function combineLatest<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>, O3 extends ObservableInput<any>, O4 extends ObservableInput<any>>(sources: [O1, O2, O3, O4]): Observable<[ObservedValueOf<O1>, ObservedValueOf<O2>, ObservedValueOf<O3>, ObservedValueOf<O4>]>;
export declare function combineLatest<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>, O3 extends ObservableInput<any>, O4 extends ObservableInput<any>, O5 extends ObservableInput<any>>(sources: [O1, O2, O3, O4, O5]): Observable<[ObservedValueOf<O1>, ObservedValueOf<O2>, ObservedValueOf<O3>, ObservedValueOf<O4>, ObservedValueOf<O5>]>;
export declare function combineLatest<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>, O3 extends ObservableInput<any>, O4 extends ObservableInput<any>, O5 extends ObservableInput<any>, O6 extends ObservableInput<any>>(sources: [O1, O2, O3, O4, O5, O6]): Observable<[ObservedValueOf<O1>, ObservedValueOf<O2>, ObservedValueOf<O3>, ObservedValueOf<O4>, ObservedValueOf<O5>, ObservedValueOf<O6>]>;
export declare function combineLatest<O extends ObservableInput<any>>(sources: O[]): Observable<ObservedValueOf<O>[]>;
/** @deprecated Pass arguments in a single array instead `combineLatest([a, b, c])` */
export declare function combineLatest<O1 extends ObservableInput<any>>(v1: O1, scheduler?: SchedulerLike): Observable<[ObservedValueOf<O1>]>;
/** @deprecated Pass arguments in a single array instead `combineLatest([a, b, c])` */
export declare function combineLatest<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>>(v1: O1, v2: O2, scheduler?: SchedulerLike): Observable<[ObservedValueOf<O1>, ObservedValueOf<O2>]>;
/** @deprecated Pass arguments in a single array instead `combineLatest([a, b, c])` */
export declare function combineLatest<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>, O3 extends ObservableInput<any>>(v1: O1, v2: O2, v3: O3, scheduler?: SchedulerLike): Observable<[ObservedValueOf<O1>, ObservedValueOf<O2>, ObservedValueOf<O3>]>;
/** @deprecated Pass arguments in a single array instead `combineLatest([a, b, c])` */
export declare function combineLatest<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>, O3 extends ObservableInput<any>, O4 extends ObservableInput<any>>(v1: O1, v2: O2, v3: O3, v4: O4, scheduler?: SchedulerLike): Observable<[ObservedValueOf<O1>, ObservedValueOf<O2>, ObservedValueOf<O3>, ObservedValueOf<O4>]>;
/** @deprecated Pass arguments in a single array instead `combineLatest([a, b, c])` */
export declare function combineLatest<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>, O3 extends ObservableInput<any>, O4 extends ObservableInput<any>, O5 extends ObservableInput<any>>(v1: O1, v2: O2, v3: O3, v4: O4, v5: O5, scheduler?: SchedulerLike): Observable<[ObservedValueOf<O1>, ObservedValueOf<O2>, ObservedValueOf<O3>, ObservedValueOf<O4>, ObservedValueOf<O5>]>;
/** @deprecated Pass arguments in a single array instead `combineLatest([a, b, c])` */
export declare function combineLatest<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>, O3 extends ObservableInput<any>, O4 extends ObservableInput<any>, O5 extends ObservableInput<any>, O6 extends ObservableInput<any>>(v1: O1, v2: O2, v3: O3, v4: O4, v5: O5, v6: O6, scheduler?: SchedulerLike): Observable<[ObservedValueOf<O1>, ObservedValueOf<O2>, ObservedValueOf<O3>, ObservedValueOf<O4>, ObservedValueOf<O5>, ObservedValueOf<O6>]>;
/** @deprecated Pass arguments in a single array instead `combineLatest([a, b, c])` */
export declare function combineLatest<O extends ObservableInput<any>>(...observables: O[]): Observable<any[]>;
/** @deprecated Pass arguments in a single array instead `combineLatest([a, b, c])` */
export declare function combineLatest<O extends ObservableInput<any>, R>(...observables: Array<ObservableInput<any> | ((...values: Array<any>) => R)>): Observable<R>;
/** @deprecated resultSelector no longer supported, pipe to map instead */
export declare function combineLatest<O extends ObservableInput<any>, R>(array: O[], resultSelector: (...values: ObservedValueOf<O>[]) => R, scheduler?: SchedulerLike): Observable<R>;
/** @deprecated Passing a scheduler here is deprecated, use {@link subscribeOn} and/or {@link observeOn} instead */
export declare function combineLatest<O extends ObservableInput<any>>(...observables: Array<O | SchedulerLike>): Observable<any[]>;
/** @deprecated Passing a scheduler here is deprecated, use {@link subscribeOn} and/or {@link observeOn} instead */
export declare function combineLatest<O extends ObservableInput<any>, R>(...observables: Array<O | ((...values: ObservedValueOf<O>[]) => R) | SchedulerLike>): Observable<R>;
/** @deprecated Passing a scheduler here is deprecated, use {@link subscribeOn} and/or {@link observeOn} instead */
export declare function combineLatest<R>(...observables: Array<ObservableInput<any> | ((...values: Array<any>) => R) | SchedulerLike>): Observable<R>;
export declare class CombineLatestOperator<T, R> implements Operator<T, R> {
    private resultSelector?;
    constructor(resultSelector?: (...values: Array<any>) => R);
    call(subscriber: Subscriber<R>, source: any): any;
}
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
export declare class CombineLatestSubscriber<T, R> extends OuterSubscriber<T, R> {
    private resultSelector?;
    private active;
    private values;
    private observables;
    private toRespond?;
    constructor(destination: Subscriber<R>, resultSelector?: (...values: Array<any>) => R);
    protected _next(observable: any): void;
    protected _complete(): void;
    notifyComplete(unused: Subscriber<R>): void;
    notifyNext(_outerValue: T, innerValue: R, outerIndex: number): void;
    private _tryResultSelector;
}
