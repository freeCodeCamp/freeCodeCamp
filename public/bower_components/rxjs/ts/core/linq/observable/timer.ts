/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
module Rx {
    export interface ObservableStatic {
        /**
         *  Returns an observable sequence that produces a value after dueTime has elapsed and then after each period.
         * @param {Number} dueTime Absolute (specified as a Date object) or relative time (specified as an integer denoting milliseconds) at which to produce the first value.
         * @param {Mixed} [periodOrScheduler]  Period to produce subsequent values (specified as an integer denoting milliseconds), or the scheduler to run the timer on. If not specified, the resulting timer is not recurring.
         * @param {Scheduler} [scheduler]  Scheduler to run the timer on. If not specified, the timeout scheduler is used.
         * @returns {Observable} An observable sequence that produces a value after due time has elapsed and then each period.
         */
        timer(dueTime: number, period: number, scheduler?: IScheduler): Observable<number>;
        /**
         *  Returns an observable sequence that produces a value after dueTime has elapsed and then after each period.
         * @param {Number} dueTime Absolute (specified as a Date object) or relative time (specified as an integer denoting milliseconds) at which to produce the first value.
         * @param {Mixed} [periodOrScheduler]  Period to produce subsequent values (specified as an integer denoting milliseconds), or the scheduler to run the timer on. If not specified, the resulting timer is not recurring.
         * @param {Scheduler} [scheduler]  Scheduler to run the timer on. If not specified, the timeout scheduler is used.
         * @returns {Observable} An observable sequence that produces a value after due time has elapsed and then each period.
         */
        timer(dueTime: number, scheduler?: IScheduler): Observable<number>;
    }
}


(function () {
    var o : Rx.Observable<number>;
    o = Rx.Observable.timer(100);
    o = Rx.Observable.timer(100, 100);
    o = Rx.Observable.timer(100, 100, Rx.Scheduler.async);
});
