/// <reference path="../../observable.ts" />
module Rx {
    export interface Observable<T> {
        /**
        * Returns the minimum element in an observable sequence according to the optional comparer else a default greater than less than check.
        * @example
        * var res = source.min();
        * var res = source.min(function (x, y) { return x.value - y.value; });
        * @param {Function} [comparer] Comparer used to compare elements.
        * @returns {Observable} An observable sequence containing a single element with the minimum element in the source sequence.
        */
        min(comparer?: _Comparer<T, number>): Observable<number>;
    }
}

(function () {
    var o : Rx.Observable<number>;
    var a : Rx.Observable<string>;
    o = o.min();
    o = a.min((x, y) => x.length - y.length);
});
