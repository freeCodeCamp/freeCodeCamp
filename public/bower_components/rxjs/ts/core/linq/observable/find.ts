/// <reference path="../../observable.ts" />
module Rx {
    export interface Observable<T> {
        /**
        * Searches for an element that matches the conditions defined by the specified predicate, and returns the first occurrence within the entire Observable sequence.
        * @param {Function} predicate The predicate that defines the conditions of the element to search for.
        * @param {Any} [thisArg] Object to use as `this` when executing the predicate.
        * @returns {Observable} An Observable sequence with the first element that matches the conditions defined by the specified predicate, if found; otherwise, undefined.
        */
        find(predicate: _Predicate<T>, thisArg?: any): Observable<T>;
    }
}

(function () {
    var o : Rx.Observable<number>;
    o = o.find((x) => true);
    o = o.find((x) => true, {});
});
