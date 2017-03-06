/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
module Rx {
    export interface Timestamp<T> {
        value: T;
        timestamp: number;
    }

    export interface Observable<T> {
        /**
        *  Records the timestamp for each value in an observable sequence.
        *
        * @example
        *  1 - res = source.timestamp(); // produces { value: x, timestamp: ts }
        *  2 - res = source.timestamp(Rx.Scheduler.default);
        *
        * @param {Scheduler} [scheduler]  Scheduler used to compute timestamps. If not specified, the default scheduler is used.
        * @returns {Observable} An observable sequence with timestamp information on values.
        */
        timestamp(scheduler?: IScheduler): Observable<Timestamp<T>>;
    }
}

(function () {
    var o : Rx.Observable<number>;
    var t : Rx.Observable<Rx.Timestamp<number>>;
    t = o.timestamp(Rx.Scheduler.async);
});
