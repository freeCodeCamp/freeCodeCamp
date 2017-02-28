/// <reference path="../../observable.ts" />
module Rx {
    export interface Observable<T> {
        /**
        * Returns the maximum value in an observable sequence according to the specified comparer.
        * @example
        * var res = source.max();
        * var res = source.max(function (x, y) { return x.value - y.value; });
        * @param {Function} [comparer] Comparer used to compare elements.
        * @returns {Observable} An observable sequence containing a single element with the maximum element in the source sequence.
        */
        max(comparer?: _Comparer<T, number>): Observable<number>;
    }
}

(function () {
    var o : Rx.Observable<number>;
    var a : Rx.Observable<string>;
    o = o.max();
    o = a.max((x, y) => x.length - y.length);
});
