/// <reference path="../../observable.ts" />
module Rx {
    export interface Observable<T> {
        /**
        *  Returns an observable sequence that contains only distinct contiguous elements according to the keySelector and the comparer.
        *
        *  var obs = observable.distinctUntilChanged();
        *  var obs = observable.distinctUntilChanged(function (x) { return x.id; });
        *  var obs = observable.distinctUntilChanged(function (x) { return x.id; }, function (x, y) { return x === y; });
        *
        * @param {Function} [keySelector] A function to compute the comparison key for each element. If not provided, it projects the value.
        * @param {Function} [comparer] Equality comparer for computed key values. If not provided, defaults to an equality comparer function.
        * @returns {Observable} An observable sequence only containing the distinct contiguous elements, based on a computed key value, from the source sequence.
        */
        distinctUntilChanged<TValue>(keySelector?: (value: T) => TValue, comparer?: _Comparer<TValue, boolean>): Observable<T>;
    }
}

(function () {
    var o : Rx.Observable<string>;
    o = o.distinctUntilChanged();
    o = o.distinctUntilChanged(x => x.length);
    o = o.distinctUntilChanged(x => x.length, (x, y) => true);
});
