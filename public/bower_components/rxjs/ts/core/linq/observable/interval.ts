/// <reference path="../../observable.ts" />
module Rx {
    export interface ObservableStatic {
        /**
         *  Returns an observable sequence that produces a value after each period.
         *
         * @example
         *  1 - res = Rx.Observable.interval(1000);
         *  2 - res = Rx.Observable.interval(1000, Rx.Scheduler.timeout);
         *
         * @param {Number} period Period for producing the values in the resulting sequence (specified as an integer denoting milliseconds).
         * @param {Scheduler} [scheduler] Scheduler to run the timer on. If not specified, Rx.Scheduler.timeout is used.
         * @returns {Observable} An observable sequence that produces a value after each period.
         */
        interval(period: number, scheduler?: IScheduler): Observable<number>;
    }
}

(function () {
    var o : Rx.Observable<number>;
    o = Rx.Observable.interval(100);
    o = Rx.Observable.interval(100, Rx.Scheduler.async);
});
