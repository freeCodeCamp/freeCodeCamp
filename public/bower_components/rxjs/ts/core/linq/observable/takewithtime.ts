/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
module Rx {
    export interface Observable<T> {
        /**
        *  Takes elements for the specified duration from the start of the observable source sequence, using the specified scheduler to run timers.
        *
        * @example
        *  1 - res = source.takeWithTime(5000,  [optional scheduler]);
        * @description
        *  This operator accumulates a queue with a length enough to store elements received during the initial duration window.
        *  As more elements are received, elements older than the specified duration are taken from the queue and produced on the
        *  result sequence. This causes elements to be delayed with duration.
        * @param {Number} duration Duration for taking elements from the start of the sequence.
        * @param {Scheduler} scheduler Scheduler to run the timer on. If not specified, defaults to Rx.Scheduler.timeout.
        * @returns {Observable} An observable sequence with the elements taken during the specified duration from the start of the source sequence.
        */
        takeWithTime(duration: number, scheduler?: IScheduler): Observable<T>;
    }
}


(function() {
    var o: Rx.Observable<number>;
    o = o.takeWithTime(1);
    o = o.takeWithTime(100, Rx.Scheduler.default);
});
