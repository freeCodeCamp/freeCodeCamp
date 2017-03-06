/// <reference path="../../observable.ts"/>
module Rx {
    export interface Observable<T> {
        /**
        *  Bypasses elements in an observable sequence as long as a specified condition is true and then returns the remaining elements.
        *  The element's index is used in the logic of the predicate function.
        *
        *  var res = source.skipWhile(function (value) { return value < 10; });
        *  var res = source.skipWhile(function (value, index) { return value < 10 || index < 10; });
        * @param {Function} predicate A function to test each element for a condition; the second parameter of the function represents the index of the source element.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence that contains the elements from the input sequence starting at the first element in the linear series that does not pass the test specified by predicate.
        */
        skipWhile(predicate: _Predicate<T>, thisArg?: any): Observable<T>;
    }
}
