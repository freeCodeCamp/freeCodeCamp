/// <reference path="../../observable.ts"/>
module Rx {
    export interface Observable<T> {
        /**
        * Determines whether any element of an observable sequence satisfies a condition if present, else if any items are in the sequence.
        * @param {Function} [predicate] A function to test each element for a condition.
        * @returns {Observable} An observable sequence containing a single element determining whether any elements in the source sequence pass the test in the specified predicate if given, else if any items are in the sequence.
        */
        some(predicate?: _Predicate<T>, thisArg?: any): Observable<boolean>;	// alias for any
    }
}


(function () {
    var os : Rx.Observable<string>;
    var on : Rx.Observable<number>;

    on.some();
    os.some((v, i, s) => true);
    os.some((v, i, s) => true, {});
});
