/// <reference path="../../observable.ts"/>
module Rx {
    export interface Observable<T> {
        /**
        *  Prepends a sequence of values to an observable sequence with an optional scheduler and an argument list of values to prepend.
        *  @example
        *  var res = source.startWith(1, 2, 3);
        *  var res = source.startWith(Rx.Scheduler.timeout, 1, 2, 3);
        * @param {Arguments} args The specified values to prepend to the observable sequence
        * @returns {Observable} The source sequence prepended with the specified values.
        */
        startWith(...values: T[]): Observable<T>;
        /**
        *  Prepends a sequence of values to an observable sequence with an optional scheduler and an argument list of values to prepend.
        *  @example
        *  var res = source.startWith(1, 2, 3);
        *  var res = source.startWith(Rx.Scheduler.timeout, 1, 2, 3);
        * @param {Arguments} args The specified values to prepend to the observable sequence
        * @returns {Observable} The source sequence prepended with the specified values.
        */
        startWith(scheduler: IScheduler, ...values: T[]): Observable<T>;
    }
}


(function() {
    var o: Rx.Observable<number>;
    o = o.startWith(1, 2, 3, 4, 5);
    o = o.startWith(Rx.Scheduler.async, 1, 2, 3, 4, 5);
});
