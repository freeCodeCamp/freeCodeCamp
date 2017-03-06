/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
module Rx {
    export interface Observable<T> {
        /**
        *  Skips elements for the specified duration from the end of the observable source sequence, using the specified scheduler to run timers.
        *
        *  1 - res = source.skipLastWithTime(5000);
        *  2 - res = source.skipLastWithTime(5000, scheduler);
        *
        * @description
        *  This operator accumulates a queue with a length enough to store elements received during the initial duration window.
        *  As more elements are received, elements older than the specified duration are taken from the queue and produced on the
        *  result sequence. This causes elements to be delayed with duration.
        * @param {Number} duration Duration for skipping elements from the end of the sequence.
        * @param {Scheduler} [scheduler]  Scheduler to run the timer on. If not specified, defaults to Rx.Scheduler.timeout
        * @returns {Observable} An observable sequence with the elements skipped during the specified duration from the end of the source sequence.
        */
        skipLastWithTime(duration: number, scheduler?: IScheduler): Observable<T>;
    }
}


(function() {
    var o: Rx.Observable<number>;
    o = o.skipLastWithTime(1);
    o = o.skipLastWithTime(1, Rx.Scheduler.async);
});
