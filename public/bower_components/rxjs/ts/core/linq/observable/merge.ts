/// <reference path="../../observable.ts" />
/// <reference path="../../concurrency/scheduler.ts" />
module Rx {
    export interface ObservableStatic {
        /**
        * Merges all the observable sequences into a single observable sequence.
        * The scheduler is optional and if not specified, the immediate scheduler is used.
        * @returns {Observable} The observable sequence that merges the elements of the observable sequences.
        */
        merge<T>(...sources: ObservableOrPromise<T>[]): Observable<T>;
        /**
        * Merges all the observable sequences into a single observable sequence.
        * The scheduler is optional and if not specified, the immediate scheduler is used.
        * @returns {Observable} The observable sequence that merges the elements of the observable sequences.
        */
        merge<T>(sources: ObservableOrPromise<T>[]): Observable<T>;
        /**
        * Merges all the observable sequences into a single observable sequence.
        * The scheduler is optional and if not specified, the immediate scheduler is used.
        * @returns {Observable} The observable sequence that merges the elements of the observable sequences.
        */
        merge<T>(scheduler: IScheduler, ...sources: ObservableOrPromise<T>[]): Observable<T>;
        /**
        * Merges all the observable sequences into a single observable sequence.
        * The scheduler is optional and if not specified, the immediate scheduler is used.
        * @returns {Observable} The observable sequence that merges the elements of the observable sequences.
        */
        merge<T>(scheduler: IScheduler, sources: ObservableOrPromise<T>[]): Observable<T>;
    }
}

(function() {
    var o: Rx.Observable<string>;
    var p: Rx.Promise<string>;

    o = Rx.Observable.merge(o, p, o, p);
    o = Rx.Observable.merge([o, p, o, p]);
    o = Rx.Observable.merge(Rx.Scheduler.async, o, p, o, p);
    o = Rx.Observable.merge(Rx.Scheduler.async, [o, p, o, p]);
});
