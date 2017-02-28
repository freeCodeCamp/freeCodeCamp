/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
module Rx {
    export interface Observable<T> {
        /**
        *  Takes elements for the specified duration until the specified end time, using the specified scheduler to run timers.
        * @param {Number | Date} endTime Time to stop taking elements from the source sequence. If this value is less than or equal to new Date(), the result stream will complete immediately.
        * @param {Scheduler} [scheduler] Scheduler to run the timer on.
        * @returns {Observable} An observable sequence with the elements taken until the specified end time.
        */
        takeUntilWithTime(endTime: Date, scheduler?: IScheduler): Observable<T>;
        /**
        *  Takes elements for the specified duration until the specified end time, using the specified scheduler to run timers.
        * @param {Number | Date} endTime Time to stop taking elements from the source sequence. If this value is less than or equal to new Date(), the result stream will complete immediately.
        * @param {Scheduler} [scheduler] Scheduler to run the timer on.
        * @returns {Observable} An observable sequence with the elements taken until the specified end time.
        */
        takeUntilWithTime(duration: number, scheduler?: IScheduler): Observable<T>;
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
