/// <reference path="../../observable.ts" />
/// <reference path="../../concurrency/scheduler.ts" />
module Rx {
    export interface Observable<T> {
        /**
        *  Projects each element of an observable sequence into zero or more buffers which are produced based on timing information.
        * @param {Number} timeSpan Length of each buffer (specified as an integer denoting milliseconds).
        * @param {Mixed} [timeShiftOrScheduler]  Interval between creation of consecutive buffers (specified as an integer denoting milliseconds), or an optional scheduler parameter. If not specified, the time shift corresponds to the timeSpan parameter, resulting in non-overlapping adjacent buffers.
        * @param {Scheduler} [scheduler]  Scheduler to run buffer timers on. If not specified, the timeout scheduler is used.
        * @returns {Observable} An observable sequence of buffers.
        */
        bufferWithTime(timeSpan: number, timeShift: number, scheduler?: IScheduler): Observable<T[]>;
        /**
        *  Projects each element of an observable sequence into zero or more buffers which are produced based on timing information.
        * @param {Number} timeSpan Length of each buffer (specified as an integer denoting milliseconds).
        * @param {Mixed} [timeShiftOrScheduler]  Interval between creation of consecutive buffers (specified as an integer denoting milliseconds), or an optional scheduler parameter. If not specified, the time shift corresponds to the timeSpan parameter, resulting in non-overlapping adjacent buffers.
        * @param {Scheduler} [scheduler]  Scheduler to run buffer timers on. If not specified, the timeout scheduler is used.
        * @returns {Observable} An observable sequence of buffers.
        */
        bufferWithTime(timeSpan: number, scheduler?: IScheduler): Observable<T[]>;
    }
}

(function() {
    var o: Rx.Observable<string>;

    var so: Rx.Observable<string[]> = o.bufferWithTime(100);
    so = o.bufferWithTime(100, 5);
    var so: Rx.Observable<string[]> = o.bufferWithTime(100, Rx.Scheduler.async);
    so = o.bufferWithTime(100, 5, Rx.Scheduler.async);
});
