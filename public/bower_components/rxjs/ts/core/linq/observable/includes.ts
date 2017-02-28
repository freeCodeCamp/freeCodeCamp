/// <reference path="../../observable.ts" />
module Rx {
    export interface Observable<T> {
        /**
        * Determines whether an observable sequence includes a specified element with an optional equality comparer.
        * @param searchElement The value to locate in the source sequence.
        * @param {Number} [fromIndex] An equality comparer to compare elements.
        * @returns {Observable} An observable sequence containing a single element determining whether the source sequence includes an element that has the specified value from the given index.
        */
        includes(value: T, comparer?: _Comparer<T, boolean>): Observable<boolean>;
    }
}

(function () {
    var o : Rx.Observable<string>;
    var b : Rx.Observable<boolean> = o.includes('a');
});
