/// <reference path="../../observable.ts"/>
module Rx {
    export interface Observable<T> {
        /**
        *  Returns elements from an observable sequence as long as a specified condition is true.
        *  The element's index is used in the logic of the predicate function.
        * @param {Function} predicate A function to test each element for a condition; the second parameter of the function represents the index of the source element.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence that contains the elements from the input sequence that occur before the element at which the test no longer passes.
        */
        takeWhile(predicate: _Predicate<T>, thisArg?: any): Observable<T>;
    }
}
