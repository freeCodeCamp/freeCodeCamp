/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
module Rx {
	export interface TimeInterval<T> {
		value: T;
		interval: number;
	}

    export interface Observable<T> {
        /**
        *  Records the time interval between consecutive values in an observable sequence.
        *
        * @example
        *  1 - res = source.timeInterval();
        *  2 - res = source.timeInterval(Rx.Scheduler.timeout);
        *
        * @param [scheduler]  Scheduler used to compute time intervals. If not specified, the timeout scheduler is used.
        * @returns {Observable} An observable sequence with time interval information on values.
        */
        timeInterval(scheduler?: IScheduler): Observable<TimeInterval<T>>;
    }
}

(function () {
	var o : Rx.Observable<string>;
	var t : Rx.Observable<Rx.TimeInterval<string>>;

	t = o.timeInterval(Rx.Scheduler.async);
});
