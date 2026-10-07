import { Observable } from '../Observable';
import { Operator } from '../Operator';
import { ObservableInput, ObservedValueOf } from '../types';
import { Subscriber } from '../Subscriber';
/** @deprecated resultSelector is no longer supported, pipe to map instead */
export declare function zip<O1 extends ObservableInput<any>, R>(v1: O1, resultSelector: (v1: ObservedValueOf<O1>) => R): Observable<R>;
/** @deprecated resultSelector is no longer supported, pipe to map instead */
export declare function zip<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>, R>(v1: O1, v2: O2, resultSelector: (v1: ObservedValueOf<O1>, v2: ObservedValueOf<O2>) => R): Observable<R>;
/** @deprecated resultSelector is no longer supported, pipe to map instead */
export declare function zip<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>, O3 extends ObservableInput<any>, R>(v1: O1, v2: O2, v3: O3, resultSelector: (v1: ObservedValueOf<O1>, v2: ObservedValueOf<O2>, v3: ObservedValueOf<O3>) => R): Observable<R>;
/** @deprecated resultSelector is no longer supported, pipe to map instead */
export declare function zip<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>, O3 extends ObservableInput<any>, O4 extends ObservableInput<any>, R>(v1: O1, v2: O2, v3: O3, v4: O4, resultSelector: (v1: ObservedValueOf<O1>, v2: ObservedValueOf<O2>, v3: ObservedValueOf<O3>, v4: ObservedValueOf<O4>) => R): Observable<R>;
/** @deprecated resultSelector is no longer supported, pipe to map instead */
export declare function zip<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>, O3 extends ObservableInput<any>, O4 extends ObservableInput<any>, O5 extends ObservableInput<any>, R>(v1: O1, v2: O2, v3: O3, v4: O4, v5: O5, resultSelector: (v1: ObservedValueOf<O1>, v2: ObservedValueOf<O2>, v3: ObservedValueOf<O3>, v4: ObservedValueOf<O4>, v5: ObservedValueOf<O5>) => R): Observable<R>;
/** @deprecated resultSelector is no longer supported, pipe to map instead */
export declare function zip<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>, O3 extends ObservableInput<any>, O4 extends ObservableInput<any>, O5 extends ObservableInput<any>, O6 extends ObservableInput<any>, R>(v1: O1, v2: O2, v3: O3, v4: O4, v5: O5, v6: O6, resultSelector: (v1: ObservedValueOf<O1>, v2: ObservedValueOf<O2>, v3: ObservedValueOf<O3>, v4: ObservedValueOf<O4>, v5: ObservedValueOf<O5>, v6: ObservedValueOf<O6>) => R): Observable<R>;
export declare function zip<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>>(v1: O1, v2: O2): Observable<[ObservedValueOf<O1>, ObservedValueOf<O2>]>;
export declare function zip<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>, O3 extends ObservableInput<any>>(v1: O1, v2: O2, v3: O3): Observable<[ObservedValueOf<O1>, ObservedValueOf<O2>, ObservedValueOf<O3>]>;
export declare function zip<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>, O3 extends ObservableInput<any>, O4 extends ObservableInput<any>>(v1: O1, v2: O2, v3: O3, v4: O4): Observable<[ObservedValueOf<O1>, ObservedValueOf<O2>, ObservedValueOf<O3>, ObservedValueOf<O4>]>;
export declare function zip<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>, O3 extends ObservableInput<any>, O4 extends ObservableInput<any>, O5 extends ObservableInput<any>>(v1: O1, v2: O2, v3: O3, v4: O4, v5: O5): Observable<[ObservedValueOf<O1>, ObservedValueOf<O2>, ObservedValueOf<O3>, ObservedValueOf<O4>, ObservedValueOf<O5>]>;
export declare function zip<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>, O3 extends ObservableInput<any>, O4 extends ObservableInput<any>, O5 extends ObservableInput<any>, O6 extends ObservableInput<any>>(v1: O1, v2: O2, v3: O3, v4: O4, v5: O5, v6: O6): Observable<[ObservedValueOf<O1>, ObservedValueOf<O2>, ObservedValueOf<O3>, ObservedValueOf<O4>, ObservedValueOf<O5>, ObservedValueOf<O6>]>;
export declare function zip<O extends ObservableInput<any>>(array: O[]): Observable<ObservedValueOf<O>[]>;
export declare function zip<R>(array: ObservableInput<any>[]): Observable<R>;
/** @deprecated resultSelector is no longer supported, pipe to map instead */
export declare function zip<O extends ObservableInput<any>, R>(array: O[], resultSelector: (...values: ObservedValueOf<O>[]) => R): Observable<R>;
/** @deprecated resultSelector is no longer supported, pipe to map instead */
export declare function zip<R>(array: ObservableInput<any>[], resultSelector: (...values: any[]) => R): Observable<R>;
export declare function zip<O extends ObservableInput<any>>(...observables: O[]): Observable<ObservedValueOf<O>[]>;
export declare function zip<O extends ObservableInput<any>, R>(...observables: Array<O | ((...values: ObservedValueOf<O>[]) => R)>): Observable<R>;
export declare function zip<R>(...observables: Array<ObservableInput<any> | ((...values: Array<any>) => R)>): Observable<R>;
export declare class ZipOperator<T, R> implements Operator<T, R> {
    resultSelector?: (...values: Array<any>) => R;
    constructor(resultSelector?: (...values: Array<any>) => R);
    call(subscriber: Subscriber<R>, source: any): any;
}
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
export declare class ZipSubscriber<T, R> extends Subscriber<T> {
    private resultSelector?;
    private iterators;
    private active;
    constructor(destination: Subscriber<R>, resultSelector?: (...values: Array<any>) => R, values?: any);
    protected _next(value: any): void;
    protected _complete(): void;
    notifyInactive(): void;
    checkIterators(): void;
    protected _tryresultSelector(args: any[]): void;
}
