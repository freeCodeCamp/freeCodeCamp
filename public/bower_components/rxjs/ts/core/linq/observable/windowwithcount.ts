/// <reference path="../../observable.ts"/>
module Rx {
    export interface Observable<T> {
        /**
        *  Projects each element of an observable sequence into zero or more windows which are produced based on element count information.
        *
        *  var res = xs.windowWithCount(10);
        *  var res = xs.windowWithCount(10, 1);
        * @param {Number} count Length of each window.
        * @param {Number} [skip] Number of elements to skip between creation of consecutive windows. If not specified, defaults to the count.
        * @returns {Observable} An observable sequence of windows.
        */
        windowWithCount(count: number, skip?: number): Observable<Observable<T>>;
    }
}

(function() {
    var o : Rx.Observable<string>;

    var so : Rx.Observable<Rx.Observable<string>> = o.windowWithTime(100);
    so = o.windowWithCount(100, 5);
});
