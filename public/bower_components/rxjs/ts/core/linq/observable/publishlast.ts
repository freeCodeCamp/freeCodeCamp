/// <reference path="./multicast.ts" />
module Rx {
    export interface Observable<T> {
        /**
        * Returns an observable sequence that is the result of invoking the selector on a connectable observable sequence that shares a single subscription to the underlying sequence containing only the last notification.
        * This operator is a specialization of Multicast using a AsyncSubject.
        *
        * @example
        * var res = source.publishLast();
        * var res = source.publishLast(function (x) { return x; });
        *
        * @param selector [Optional] Selector function which can use the multicasted source sequence as many times as needed, without causing multiple subscriptions to the source sequence. Subscribers to the given source will only receive the last notification of the source.
        * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence within a selector function.
        */
        publishLast(): ConnectableObservable<T>;
        /**
        * Returns an observable sequence that is the result of invoking the selector on a connectable observable sequence that shares a single subscription to the underlying sequence containing only the last notification.
        * This operator is a specialization of Multicast using a AsyncSubject.
        *
        * @example
        * var res = source.publishLast();
        * var res = source.publishLast(function (x) { return x; });
        *
        * @param selector [Optional] Selector function which can use the multicasted source sequence as many times as needed, without causing multiple subscriptions to the source sequence. Subscribers to the given source will only receive the last notification of the source.
        * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence within a selector function.
        */
        publishLast<TResult>(selector: (source: ConnectableObservable<T>) => Observable<TResult>): Observable<TResult>;
    }
}


(function() {
    var o: Rx.Observable<number>;
    var oc: Rx.ConnectableObservable<number>;
    var is: Rx.ISubject<number>;
    var s: Rx.Subject<number>;
    var a: Rx.Observable<string>;

    oc = o.publishLast();
    o = o.publishLast(a => a.asObservable());
});
