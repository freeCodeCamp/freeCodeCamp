/// <reference path="../../concurrency/scheduler.ts" />
module Rx {
    export interface Observable<T> {
        /**
        *  Filters the elements of an observable sequence based on a predicate by incorporating the element's index.
        *
        * @example
        *  var res = source.where(function (value) { return value < 10; });
        *  var res = source.where(function (value, index) { return value < 10 || index < 10; });
        * @param {Function} predicate A function to test each source element for a condition; the second parameter of the function represents the index of the source element.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence that contains elements from the input sequence that satisfy the condition.
        */
        where(predicate: _Predicate<T>, thisArg?: any): Observable<T>;
        /**
        *  Filters the elements of an observable sequence based on a predicate by incorporating the element's index.
        *
        * @example
        *  var res = source.where(function (value) { return value < 10; });
        *  var res = source.where(function (value, index) { return value < 10 || index < 10; });
        * @param {Function} predicate A function to test each source element for a condition; the second parameter of the function represents the index of the source element.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence that contains elements from the input sequence that satisfy the condition.
        */
        filter(predicate: _Predicate<T>, thisArg?: any): Observable<T>;
    }
}

(function () {
    var o : Rx.Observable<number>;
    o = o.where(i => true);
    o = o.where(i => true, {});
    o = o.filter(i => true);
    o = o.filter(i => true, {});

});
