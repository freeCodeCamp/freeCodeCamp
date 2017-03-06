/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
module Rx {
    export interface Observable<T> {
        /**
        *  Projects each element of an observable sequence into zero or more windows which are produced based on timing information.
        * @param {Number} timeSpan Length of each window (specified as an integer denoting milliseconds).
        * @param {Mixed} [timeShiftOrScheduler]  Interval between creation of consecutive windows (specified as an integer denoting milliseconds), or an optional scheduler parameter. If not specified, the time shift corresponds to the timeSpan parameter, resulting in non-overlapping adjacent windows.
        * @param {Scheduler} [scheduler]  Scheduler to run windowing timers on. If not specified, the timeout scheduler is used.
        * @returns {Observable} An observable sequence of windows.
        */
        windowWithTime(timeSpan: number, timeShift: number, scheduler?: IScheduler): Observable<Observable<T>>;
        /**
        *  Projects each element of an observable sequence into zero or more windows which are produced based on timing information.
        * @param {Number} timeSpan Length of each window (specified as an integer denoting milliseconds).
        * @param {Mixed} [timeShiftOrScheduler]  Interval between creation of consecutive windows (specified as an integer denoting milliseconds), or an optional scheduler parameter. If not specified, the time shift corresponds to the timeSpan parameter, resulting in non-overlapping adjacent windows.
        * @param {Scheduler} [scheduler]  Scheduler to run windowing timers on. If not specified, the timeout scheduler is used.
        * @returns {Observable} An observable sequence of windows.
        */
        windowWithTime(timeSpan: number, scheduler?: IScheduler): Observable<Observable<T>>;
    }
}

(function() {
    var o: Rx.Observable<string>;

    var so: Rx.Observable<Rx.Observable<string>> = o.windowWithTime(100);
    so = o.windowWithTime(100, 5);
    var so: Rx.Observable<Rx.Observable<string>> = o.windowWithTime(100, Rx.Scheduler.async);
    so = o.windowWithTime(100, 5, Rx.Scheduler.async);
});
