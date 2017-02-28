/// <reference path="../../observable.ts"/>
module Rx {
    export interface Observable<T> {
        /**
        *  Determines whether two sequences are equal by comparing the elements pairwise using a specified equality comparer.
        *
        * @example
        * var res = res = source.sequenceEqual([1,2,3]);
        * var res = res = source.sequenceEqual([{ value: 42 }], function (x, y) { return x.value === y.value; });
        * 3 - res = source.sequenceEqual(Rx.Observable.returnValue(42));
        * 4 - res = source.sequenceEqual(Rx.Observable.returnValue({ value: 42 }), function (x, y) { return x.value === y.value; });
        * @param {Observable} second Second observable sequence or array to compare.
        * @param {Function} [comparer] Comparer used to compare elements of both sequences.
        * @returns {Observable} An observable sequence that contains a single element which indicates whether both sequences are of equal length and their corresponding elements are equal according to the specified equality comparer.
        */
        sequenceEqual(second: ObservableOrPromise<T> | ArrayOrIterable<T>, comparer?: _Comparer<T, boolean>): Observable<boolean>;
        /**
        *  Determines whether two sequences are equal by comparing the elements pairwise using a specified equality comparer.
        *
        * @example
        * var res = res = source.sequenceEqual([1,2,3]);
        * var res = res = source.sequenceEqual([{ value: 42 }], function (x, y) { return x.value === y.value; });
        * 3 - res = source.sequenceEqual(Rx.Observable.returnValue(42));
        * 4 - res = source.sequenceEqual(Rx.Observable.returnValue({ value: 42 }), function (x, y) { return x.value === y.value; });
        * @param {Observable} second Second observable sequence or array to compare.
        * @param {Function} [comparer] Comparer used to compare elements of both sequences.
        * @returns {Observable} An observable sequence that contains a single element which indicates whether both sequences are of equal length and their corresponding elements are equal according to the specified equality comparer.
        */
        sequenceEqual<TOther>(second: ObservableOrPromise<T> | ArrayOrIterable<T>, comparer: _Comparer<T | TOther, boolean>): Observable<boolean>;
    }
}

(function () {
    var o : Rx.Observable<string>;
    var o2 : Rx.Observable<string>;
    var b : Rx.Observable<boolean>;
    b = o.sequenceEqual(o2);
});
