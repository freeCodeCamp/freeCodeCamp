/// <reference path="../../observable.ts" />
/// <reference path="../../concurrency/scheduler.ts" />
module Rx {
    export interface Observable<T> {
        /**
        *  Time shifts the observable sequence by delaying the subscription with the specified relative time duration, using the specified scheduler to run timers.
        *
        * @example
        *  1 - res = source.delaySubscription(5000); // 5s
        *  2 - res = source.delaySubscription(5000, Rx.Scheduler.default); // 5 seconds
        *
        * @param {Number} dueTime Relative or absolute time shift of the subscription.
        * @param {Scheduler} [scheduler]  Scheduler to run the subscription delay timer on. If not specified, the timeout scheduler is used.
        * @returns {Observable} Time-shifted sequence.
        */
        delaySubscription(dueTime: number, scheduler?: IScheduler): Observable<T>;
    }
}

(function () {
    var o: Rx.Observable<string>;
    o.delaySubscription(1000);
    o.delaySubscription(1000, Rx.Scheduler.async);
});
