/// <reference path="../../observable.ts"/>
module Rx {
    export interface Observable<T> {
        /**
        * Returns the values from the source observable sequence only after the other observable sequence produces a value.
        * @param {Observable | Promise} other The observable sequence or Promise that triggers propagation of elements of the source sequence.
        * @returns {Observable} An observable sequence containing the elements of the source sequence starting from the point the other sequence triggered propagation.
        */
        skipUntil<T2>(other: ObservableOrPromise<T2>): Observable<T>;
    }
}

(function() {
    var o: Rx.Observable<number>;
    var o2: Rx.Observable<number>;

    o = o.skipUntil(o2);
});
