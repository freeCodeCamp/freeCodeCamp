/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
module Rx {
    export interface Observable<T> {
        /**
        *  Skips elements for the specified duration from the start of the observable source sequence, using the specified scheduler to run timers.
        *
        * @example
        *  1 - res = source.skipWithTime(5000, [optional scheduler]);
        *
        * @description
        *  Specifying a zero value for duration doesn't guarantee no elements will be dropped from the start of the source sequence.
        *  This is a side-effect of the asynchrony introduced by the scheduler, where the action that causes callbacks from the source sequence to be forwarded
        *  may not execute immediately, despite the zero due time.
        *
        *  Errors produced by the source sequence are always forwarded to the result sequence, even if the error occurs before the duration.
        * @param {Number} duration Duration for skipping elements from the start of the sequence.
        * @param {Scheduler} scheduler Scheduler to run the timer on. If not specified, defaults to Rx.Scheduler.timeout.
        * @returns {Observable} An observable sequence with the elements skipped during the specified duration from the start of the source sequence.
        */
        skipWithTime(duration: number, scheduler?: IScheduler): Observable<T>;
    }
}

(function() {
    var o: Rx.Observable<number>;
    o = o.skipWithTime(1);
    o = o.skipWithTime(100, Rx.Scheduler.default);
});
