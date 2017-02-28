/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
module Rx {
    export interface Observable<T> {
        /**
        * Returns an Observable that emits only the first item emitted by the source Observable during sequential time windows of a specified duration.
        * @param {Number} windowDuration time to wait before emitting another item after emitting the last item
        * @param {Scheduler} [scheduler] the Scheduler to use internally to manage the timers that handle timeout for each item. If not provided, defaults to Scheduler.timeout.
        * @returns {Observable} An Observable that performs the throttle operation.
        */
        throttle(windowDuration: number, scheduler?: IScheduler): Observable<T>;
    }
}


(function () {
    var o: Rx.Observable<string>;
    o.throttle(100);
    o.throttle(100, Rx.Scheduler.async);
});
