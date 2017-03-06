/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
module Rx {
    export interface Observable<T> {
        /**
        *  Skips elements from the observable source sequence until the specified start time, using the specified scheduler to run timers.
        *  Errors produced by the source sequence are always forwarded to the result sequence, even if the error occurs before the start time.
        *
        * @examples
        *  1 - res = source.skipUntilWithTime(new Date(), [scheduler]);
        *  2 - res = source.skipUntilWithTime(5000, [scheduler]);
        * @param {Date|Number} startTime Time to start taking elements from the source sequence. If this value is less than or equal to Date(), no elements will be skipped.
        * @param {Scheduler} [scheduler] Scheduler to run the timer on. If not specified, defaults to Rx.Scheduler.timeout.
        * @returns {Observable} An observable sequence with the elements skipped until the specified start time.
        */
        skipUntilWithTime(startTime: Date, scheduler?: IScheduler): Observable<T>;
        /**
        *  Skips elements from the observable source sequence until the specified start time, using the specified scheduler to run timers.
        *  Errors produced by the source sequence are always forwarded to the result sequence, even if the error occurs before the start time.
        *
        * @examples
        *  1 - res = source.skipUntilWithTime(new Date(), [scheduler]);
        *  2 - res = source.skipUntilWithTime(5000, [scheduler]);
        * @param {Date|Number} startTime Time to start taking elements from the source sequence. If this value is less than or equal to Date(), no elements will be skipped.
        * @param {Scheduler} [scheduler] Scheduler to run the timer on. If not specified, defaults to Rx.Scheduler.timeout.
        * @returns {Observable} An observable sequence with the elements skipped until the specified start time.
        */
        skipUntilWithTime(duration: number, scheduler?: IScheduler): Observable<T>;
    }
}


(function() {
    var o: Rx.Observable<number>;
    var o2: Rx.Observable<number>;

    o = o.skipUntilWithTime(new Date());
    o = o.skipUntilWithTime(new Date(), Rx.Scheduler.default);
    o = o.skipUntilWithTime(1000);
    o = o.skipUntilWithTime(1000, Rx.Scheduler.default);
});
