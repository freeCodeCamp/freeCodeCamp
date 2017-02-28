/// <reference path="../../observable.ts" />
/// <reference path="../../concurrency/scheduler.ts" />
module Rx {
    export interface Observable<T> {
        /**
        * Comonadic bind operator.
        * @param {Function} selector A transform function to apply to each element.
        * @param {Object} scheduler Scheduler used to execute the operation. If not specified, defaults to the ImmediateScheduler.
        * @returns {Observable} An observable sequence which results from the comonadic bind operation.
        */
        manySelect<TResult>(selector: _Selector<Observable<T>, TResult>, scheduler?: IScheduler): Observable<TResult>;
        /**
        * Comonadic bind operator.
        * @param {Function} selector A transform function to apply to each element.
        * @param {Object} scheduler Scheduler used to execute the operation. If not specified, defaults to the ImmediateScheduler.
        * @returns {Observable} An observable sequence which results from the comonadic bind operation.
        */
        extend<TResult>(selector: _Selector<Observable<T>, TResult>, scheduler?: IScheduler): Observable<TResult>;
    }
}

(function() {
    var o: Rx.Observable<string>;

    var oo: Rx.Observable<Rx.Observable<string>> = o.extend(x => x.first());
    var oo: Rx.Observable<Rx.Observable<string>> = o.manySelect(x => x.first());
});
