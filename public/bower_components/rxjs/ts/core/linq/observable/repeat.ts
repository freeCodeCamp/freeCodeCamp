/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
module Rx {
    export interface ObservableStatic {
        /**
         *  Generates an observable sequence that repeats the given element the specified number of times, using the specified scheduler to send out observer messages.
         *
         * @example
         *  var res = Rx.Observable.repeat(42);
         *  var res = Rx.Observable.repeat(42, 4);
         *  3 - res = Rx.Observable.repeat(42, 4, Rx.Scheduler.timeout);
         *  4 - res = Rx.Observable.repeat(42, null, Rx.Scheduler.timeout);
         * @param {Mixed} value Element to repeat.
         * @param {Number} repeatCount [Optiona] Number of times to repeat the element. If not specified, repeats indefinitely.
         * @param {Scheduler} scheduler Scheduler to run the producer loop on. If not specified, defaults to Scheduler.immediate.
         * @returns {Observable} An observable sequence that repeats the given element the specified number of times.
         */
        repeat<T>(value: T, repeatCount?: number | void, scheduler?: IScheduler): Observable<T>;
    }
}

(function() {
    var o: Rx.Observable<number>;
    Rx.Observable.repeat(42, 4, Rx.Scheduler.async);
    Rx.Observable.repeat(42, null, Rx.Scheduler.async);
    Rx.Observable.repeat(42);
});
