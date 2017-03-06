/// <reference path="./multicast.ts" />
module Rx {
    export interface Observable<T> {
        /**
        * Returns an observable sequence that is the result of invoking the selector on a connectable observable sequence that shares a single subscription to the underlying sequence and starts with initialValue.
        * This operator is a specialization of Multicast using a BehaviorSubject.
        *
        * @example
        * var res = source.publishValue(42);
        * var res = source.publishValue(function (x) { return x.select(function (y) { return y * y; }) }, 42);
        *
        * @param {Function} [selector] Optional selector function which can use the multicasted source sequence as many times as needed, without causing multiple subscriptions to the source sequence. Subscribers to the given source will receive immediately receive the initial value, followed by all notifications of the source from the time of the subscription on.
        * @param {Mixed} initialValue Initial value received by observers upon subscription.
        * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence within a selector function.
        */
        publishValue(initialValue: T): ConnectableObservable<T>;
        /**
        * Returns an observable sequence that is the result of invoking the selector on a connectable observable sequence that shares a single subscription to the underlying sequence and starts with initialValue.
        * This operator is a specialization of Multicast using a BehaviorSubject.
        *
        * @example
        * var res = source.publishValue(42);
        * var res = source.publishValue(function (x) { return x.select(function (y) { return y * y; }) }, 42);
        *
        * @param {Function} [selector] Optional selector function which can use the multicasted source sequence as many times as needed, without causing multiple subscriptions to the source sequence. Subscribers to the given source will receive immediately receive the initial value, followed by all notifications of the source from the time of the subscription on.
        * @param {Mixed} initialValue Initial value received by observers upon subscription.
        * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence within a selector function.
        */
        publishValue<TResult>(selector: (source: ConnectableObservable<T>) => Observable<TResult>, initialValue: T): Observable<TResult>;
    }
}

(function() {
    var o: Rx.Observable<number>;
    var oc: Rx.ConnectableObservable<number>;
    var is: Rx.ISubject<number>;
    var s: Rx.Subject<number>;
    var a: Rx.Observable<string>;

    oc = o.publishValue(12);
    o = o.publishValue(a => a.asObservable(), 12);
});
