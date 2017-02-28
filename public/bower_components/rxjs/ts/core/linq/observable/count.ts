/// <reference path="../../observable.ts" />
module Rx {
    export interface Observable<T> {
        /**
        * Returns an observable sequence containing a value that represents how many elements in the specified observable sequence satisfy a condition if provided, else the count of items.
        * @example
        * res = source.count();
        * res = source.count(function (x) { return x > 3; });
        * @param {Function} [predicate]A function to test each element for a condition.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence containing a single element with a number that represents how many elements in the input sequence satisfy the condition in the predicate function if provided, else the count of items in the sequence.
        */
        count(predicate?: _Predicate<T>, thisArg?: any): Observable<number>;
    }
}


(function () {
    var os : Rx.Observable<string>;
    var on : Rx.Observable<number>;

    on.count();
    os.count((v, i, s) => false);
    os.count((v, i, s) => true, {});
});
