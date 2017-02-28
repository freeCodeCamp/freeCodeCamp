/// <reference path="../../observable.ts" />
/// <reference path="../../concurrency/scheduler.ts" />
module Rx {
    export interface Observable<T> {
        /**
        *  Expands an observable sequence by recursively invoking selector.
        *
        * @param {Function} selector Selector function to invoke for each produced element, resulting in another sequence to which the selector will be invoked recursively again.
        * @param {Scheduler} [scheduler] Scheduler on which to perform the expansion. If not provided, this defaults to the current thread scheduler.
        * @returns {Observable} An observable sequence containing all the elements produced by the recursive expansion.
        */
        expand(selector: (item: T) => Observable<T>, scheduler?: IScheduler): Observable<T>;
    }
}

(function () {
    var o : Rx.Observable<number>;
    o = o.expand(i => Rx.Observable.return(i + 1));
    o = o.expand(i => Rx.Observable.return(i + 1), Rx.Scheduler.async);
});
