/// <reference path="./multicast.ts" />
module Rx {
    export interface Observable<T> {
        /**
        * Returns an observable sequence that shares a single subscription to the underlying sequence and starts with an initialValue.
        * This operator is a specialization of publishValue which creates a subscription when the number of observers goes from zero to one, then shares that subscription with all subsequent observers until the number of observers returns to zero, at which point the subscription is disposed.
        * @param {Mixed} initialValue Initial value received by observers upon subscription.
        * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence.
        */
        shareValue(initialValue: T): Observable<T>;
    }
}


(function() {
    var o: Rx.Observable<number>;
    var oc: Rx.ConnectableObservable<number>;
    var is: Rx.ISubject<number>;
    var s: Rx.Subject<number>;
    var a: Rx.Observable<string>;

    o = o.shareValue(12);
});
