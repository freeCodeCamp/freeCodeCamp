/// <reference path="../../observable.ts" />
module Rx {
    export interface Observable<T> {
        /**
        * Returns the elements in an observable sequence with the minimum key value according to the specified comparer.
        * @example
        * var res = source.minBy(function (x) { return x.value; });
        * var res = source.minBy(function (x) { return x.value; }, function (x, y) { return x - y; });
        * @param {Function} keySelector Key selector function.
        * @param {Function} [comparer] Comparer used to compare key values.
        * @returns {Observable} An observable sequence containing a list of zero or more elements that have a minimum key value.
        */
        minBy<TKey>(keySelector: (item: T) => TKey, comparer: _Comparer<TKey, number>): Observable<T>;
        /**
        * Returns the elements in an observable sequence with the minimum key value according to the specified comparer.
        * @example
        * var res = source.minBy(function (x) { return x.value; });
        * var res = source.minBy(function (x) { return x.value; }, function (x, y) { return x - y; });
        * @param {Function} keySelector Key selector function.
        * @param {Function} [comparer] Comparer used to compare key values.
        * @returns {Observable} An observable sequence containing a list of zero or more elements that have a minimum key value.
        */
        minBy(keySelector: (item: T) => number): Observable<T>;
    }
}

(function () {
    var o : Rx.Observable<{value:number}>;
    var a : Rx.Observable<{value: string}>;
    o = o.minBy(x => x.value);
    a = a.minBy(x => x.value, (x, y) => x.length - y.length);
});
