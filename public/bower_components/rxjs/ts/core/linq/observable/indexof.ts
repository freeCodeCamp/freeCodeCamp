/// <reference path="../../observable.ts" />
module Rx {
    export interface Observable<T> {
        /**
        * Returns the first index at which a given element can be found in the observable sequence, or -1 if it is not present.
        * @param {Any} searchElement Element to locate in the array.
        * @param {Number} [fromIndex] The index to start the search.  If not specified, defaults to 0.
        * @returns {Observable} And observable sequence containing the first index at which a given element can be found in the observable sequence, or -1 if it is not present.
        */
        indexOf(element: T, fromIndex?: number): Observable<number>;
    }
}

(function () {
    var o : Rx.Observable<string>;
    var b : Rx.Observable<number> = o.indexOf('a');
    var b : Rx.Observable<number> = o.indexOf('a', 1);
});
