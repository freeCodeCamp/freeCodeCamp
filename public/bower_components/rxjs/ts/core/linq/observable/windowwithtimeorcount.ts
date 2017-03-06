/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
module Rx {
    export interface Observable<T> {
        /**
        *  Projects each element of an observable sequence into a window that is completed when either it's full or a given amount of time has elapsed.
        * @param {Number} timeSpan Maximum time length of a window.
        * @param {Number} count Maximum element count of a window.
        * @param {Scheduler} [scheduler]  Scheduler to run windowing timers on. If not specified, the timeout scheduler is used.
        * @returns {Observable} An observable sequence of windows.
        */
        windowWithTimeOrCount(timeSpan: number, count: number, scheduler?: IScheduler): Observable<Observable<T>>;
    }
}

(function() {
    var o: Rx.Observable<string>;
    var so: Rx.Observable<Rx.Observable<string>> = o.windowWithTimeOrCount(100, 200);
    var so: Rx.Observable<Rx.Observable<string>> = o.windowWithTimeOrCount(100, 200, Rx.Scheduler.default);
});
