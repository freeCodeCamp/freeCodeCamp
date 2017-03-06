/// <reference path="../../observable.ts" />
module Rx {
    export interface Observable<T> {
        /**
        * Dematerializes the explicit notification values of an observable sequence as implicit notifications.
        * @returns {Observable} An observable sequence exhibiting the behavior corresponding to the source sequence's notification values.
        */
        dematerialize<TOrigin>(): Observable<TOrigin>;
    }
}

(function () {
    var o : Rx.Observable<any>;
    o.dematerialize();
});
