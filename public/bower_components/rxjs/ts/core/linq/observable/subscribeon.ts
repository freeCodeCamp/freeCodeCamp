/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
module Rx {
    export interface Observable<T> {
        /**
        *  Wraps the source sequence in order to run its subscription and unsubscription logic on the specified scheduler. This operation is not commonly used;
        *  see the remarks section for more information on the distinction between subscribeOn and observeOn.

        *  This only performs the side-effects of subscription and unsubscription on the specified scheduler. In order to invoke observer
        *  callbacks on a scheduler, use observeOn.

        *  @param {Scheduler} scheduler Scheduler to perform subscription and unsubscription actions on.
        *  @returns {Observable} The source sequence whose subscriptions and unsubscriptions happen on the specified scheduler.
        */
        subscribeOn(scheduler: IScheduler): Observable<T>;
    }
}



(function() {
    var o: Rx.Observable<number>;
    o = o.subscribeOn(Rx.Scheduler.async);
});
