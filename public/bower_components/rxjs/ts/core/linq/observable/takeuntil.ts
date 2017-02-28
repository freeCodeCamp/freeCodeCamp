/// <reference path="../../observable.ts"/>
module Rx {
    export interface Observable<T> {
        /**
        * Returns the values from the source observable sequence until the other observable sequence produces a value.
        * @param {Observable | Promise} other Observable sequence or Promise that terminates propagation of elements of the source sequence.
        * @returns {Observable} An observable sequence containing the elements of the source sequence up to the point the other sequence interrupted further propagation.
        */
        takeUntil<T2>(other: ObservableOrPromise<T2>): Observable<T>;
    }
}


(function() {
    var o: Rx.Observable<number>;
    var o2: Rx.Observable<number>;

    o = o.skipUntil(o2);
});
