/// <reference path="./multicast.ts" />
module Rx {
    export interface Observable<T> {
        /**
        * Returns an observable sequence that shares a single subscription to the underlying sequence replaying notifications subject to a maximum time length for the replay buffer.
        * This operator is a specialization of replay which creates a subscription when the number of observers goes from zero to one, then shares that subscription with all subsequent observers until the number of observers returns to zero, at which point the subscription is disposed.
        *
        * @example
        * var res = source.shareReplay(3);
        * var res = source.shareReplay(3, 500);
        * var res = source.shareReplay(3, 500, scheduler);
        *

        * @param bufferSize [Optional] Maximum element count of the replay buffer.
        * @param window [Optional] Maximum time length of the replay buffer.
        * @param scheduler [Optional] Scheduler where connected observers within the selector function will be invoked on.
        * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence.
        */
        shareReplay(bufferSize?: number, window?: number, scheduler?: IScheduler): Observable<T>;
    }
}

(function() {
    var o: Rx.Observable<number>;
    var oc: Rx.ConnectableObservable<number>;
    var is: Rx.ISubject<number>;
    var s: Rx.Subject<number>;
    var a: Rx.Observable<string>;

    o = o.shareReplay();
    o = o.shareReplay(1);
    o = o.shareReplay(1,2);
    o = o.shareReplay(1,2, Rx.Scheduler.default);
});
