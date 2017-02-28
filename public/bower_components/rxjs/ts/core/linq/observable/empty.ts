/// <reference path="../../observable.ts" />
/// <reference path="../../concurrency/scheduler.ts" />
module Rx {
    export interface ObservableStatic {
        /**
  *  Returns an empty observable sequence, using the specified scheduler to send out the single OnCompleted message.
  *
  * @example
  *  var res = Rx.Observable.empty();
  *  var res = Rx.Observable.empty(Rx.Scheduler.timeout);
  * @param {Scheduler} [scheduler] Scheduler to send the termination call on.
  * @returns {Observable} An observable sequence with no elements.
  */
        empty<T>(scheduler?: IScheduler): Observable<T>;
    }
}

(function () {
    var o : Rx.Observable<string>;
    o = Rx.Observable.empty<string>();
    o = Rx.Observable.empty<string>(Rx.Scheduler.async);
});
