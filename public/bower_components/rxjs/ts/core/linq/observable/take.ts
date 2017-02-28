/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
module Rx {
    export interface Observable<T> {
        /**
        *  Returns a specified number of contiguous elements from the start of an observable sequence, using the specified scheduler for the edge case of take(0).
        *
        *  var res = source.take(5);
        *  var res = source.take(0, Rx.Scheduler.timeout);
        * @param {Number} count The number of elements to return.
        * @param {Scheduler} [scheduler] Scheduler used to produce an OnCompleted message in case <paramref name="count count</paramref> is set to 0.
        * @returns {Observable} An observable sequence that contains the specified number of elements from the start of the input sequence.
        */
        take(count: number, scheduler?: IScheduler): Observable<T>;
    }
}


(function() {
    var o: Rx.Observable<number>;
    o = o.take(1, Rx.Scheduler.async);
});
