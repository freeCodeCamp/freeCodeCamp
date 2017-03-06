/// <reference path="../../observable.ts" />
module Rx {
    export interface Observable<T> {
        /**
        * Determines whether all elements of an observable sequence satisfy a condition.
        * @param {Function} [predicate] A function to test each element for a condition.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence containing a single element determining whether all elements in the source sequence pass the test in the specified predicate.
        */
        every(predicate?: _Predicate<T>, thisArg?: any): Observable<boolean>;	// alias for all
    }
}

(function () {
    var o : Rx.Observable<string>;
    var b : Rx.Observable<boolean>;
    b = o.every();
    b = o.every(() => true);
    b = o.every(() => true, {});
});
