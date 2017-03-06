/// <reference path="./multicast.ts" />
module Rx {
    export interface Observable<T> {
        /**
        * Returns an observable sequence that is the result of invoking the selector on a connectable observable sequence that shares a single subscription to the underlying sequence.
        * This operator is a specialization of Multicast using a regular Subject.
        *
        * @example
        * var resres = source.publish();
        * var res = source.publish(function (x) { return x; });
        *
        * @param {Function} [selector] Selector function which can use the multicasted source sequence as many times as needed, without causing multiple subscriptions to the source sequence. Subscribers to the given source will receive all notifications of the source from the time of the subscription on.
        * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence within a selector function.
        */
        publish(): ConnectableObservable<T>;
        /**
        * Returns an observable sequence that is the result of invoking the selector on a connectable observable sequence that shares a single subscription to the underlying sequence.
        * This operator is a specialization of Multicast using a regular Subject.
        *
        * @example
        * var resres = source.publish();
        * var res = source.publish(function (x) { return x; });
        *
        * @param {Function} [selector] Selector function which can use the multicasted source sequence as many times as needed, without causing multiple subscriptions to the source sequence. Subscribers to the given source will receive all notifications of the source from the time of the subscription on.
        * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence within a selector function.
        */
        publish<TResult>(selector: (source: ConnectableObservable<T>) => Observable<TResult>): Observable<TResult>;
    }
}

(function() {
    var o: Rx.Observable<number>;
    var oc: Rx.ConnectableObservable<number>;
    var is: Rx.ISubject<number>;
    var s: Rx.Subject<number>;
    var a: Rx.Observable<string>;

    oc = o.publish();
    o = o.publish(a => a.asObservable());
});
