/// <reference path="../../observable.ts" />
/// <reference path="../../concurrency/scheduler.ts" />
module Rx {
    export interface Observable<T> {
        /**
        *  Projects each element of an observable sequence into a buffer that is completed when either it's full or a given amount of time has elapsed.
        * @param {Number} timeSpan Maximum time length of a buffer.
        * @param {Number} count Maximum element count of a buffer.
        * @param {Scheduler} [scheduler]  Scheduler to run bufferin timers on. If not specified, the timeout scheduler is used.
        * @returns {Observable} An observable sequence of buffers.
        */
        bufferWithTimeOrCount(timeSpan: number, count: number, scheduler?: IScheduler): Observable<T[]>;
    }
}

(function() {
    var o: Rx.Observable<string>;
    var so: Rx.Observable<string[]> = o.bufferWithTimeOrCount(100, 200);
    var so: Rx.Observable<string[]> = o.bufferWithTimeOrCount(100, 200, Rx.Scheduler.default);
})
