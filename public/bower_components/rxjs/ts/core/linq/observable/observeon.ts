/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
module Rx {
    export interface Observable<T> {
        /**
        *  Wraps the source sequence in order to run its observer callbacks on the specified scheduler.
        *
        *  This only invokes observer callbacks on a scheduler. In case the subscription and/or unsubscription actions have side-effects
        *  that require to be run on a scheduler, use subscribeOn.
        *
        *  @param {Scheduler} scheduler Scheduler to notify observers on.
        *  @returns {Observable} The source sequence whose observations happen on the specified scheduler.
        */
        observeOn(scheduler: IScheduler): Observable<T>;
    }
}

(function () {
    var o : Rx.Observable<string>;
    o = o.observeOn(Rx.Scheduler.async);
});
