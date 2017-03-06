/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
module Rx {
    export interface Observable<T> {
        /**
        *  Returns an array with the elements within the specified duration from the end of the observable source sequence, using the specified scheduler to run timers.
        * @description
        *  This operator accumulates a queue with a length enough to store elements received during the initial duration window.
        *  As more elements are received, elements older than the specified duration are taken from the queue and produced on the
        *  result sequence. This causes elements to be delayed with duration.
        * @param {Number} duration Duration for taking elements from the end of the sequence.
        * @param {Scheduler} scheduler Scheduler to run the timer on. If not specified, defaults to Rx.Scheduler.timeout.
        * @returns {Observable} An observable sequence containing a single array with the elements taken during the specified duration from the end of the source sequence.
        */
        takeLastBufferWithTime(duration: number, scheduler?: IScheduler): Observable<T[]>;
    }
}


(function() {
    var o: Rx.Observable<number>;
    var o2: Rx.Observable<number[]>;
    o2 = o.takeLastBufferWithTime(1);
    o2 = o.takeLastBufferWithTime(1, Rx.Scheduler.async);
});
