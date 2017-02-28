/// <reference path="../../observable.ts" />
/// <reference path="../../concurrency/scheduler.ts" />
module Rx {
    export interface ObservableStatic {
        /**
        *  Generates an observable sequence of integral numbers within a specified range, using the specified scheduler to send out observer messages.
        *
        * @example
        *  var res = Rx.Observable.range(0, 10);
        *  var res = Rx.Observable.range(0, 10, Rx.Scheduler.timeout);
        * @param {Number} start The value of the first integer in the sequence.
        * @param {Number} count The number of sequential integers to generate.
        * @param {Scheduler} [scheduler] Scheduler to run the generator loop on. If not specified, defaults to Scheduler.currentThread.
        * @returns {Observable} An observable sequence that contains a range of sequential integral numbers.
        */
        range(start: number, count: number, scheduler?: IScheduler): Observable<number>;
    }
}

(function() {
    var o: Rx.Observable<number> = Rx.Observable.range(1, 2);
    o = Rx.Observable.range(1, 2, Rx.Scheduler.async);
});
