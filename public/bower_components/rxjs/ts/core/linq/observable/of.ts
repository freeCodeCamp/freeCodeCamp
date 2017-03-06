/// <reference path="../../observable.ts" />
/// <reference path="../../concurrency/scheduler.ts" />
module Rx {
    export interface ObservableStatic {
        /**
        *  This method creates a new Observable instance with a variable number of arguments, regardless of number or type of the arguments.
        * @returns {Observable} The observable sequence whose elements are pulled from the given arguments.
        */
        of<T>(...values: T[]): Observable<T>;

        /**
        *  This method creates a new Observable instance with a variable number of arguments, regardless of number or type of the arguments.
        * @param {Scheduler} scheduler A scheduler to use for scheduling the arguments.
        * @returns {Observable} The observable sequence whose elements are pulled from the given arguments.
        */
        ofWithScheduler<T>(scheduler?: IScheduler, ...values: T[]): Observable<T>;
    }
}

(function() {
    var o: Rx.Observable<number>;
    o = Rx.Observable.of(1, 2, 3, 4, 5);
    o = Rx.Observable.ofWithScheduler(Rx.Scheduler.async, 1, 2, 3, 4, 5);
});
