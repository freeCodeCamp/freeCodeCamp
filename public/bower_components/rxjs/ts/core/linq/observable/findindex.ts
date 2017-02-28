/// <reference path="../../observable.ts" />
module Rx {
    export interface Observable<T> {
        /**
          * Searches for an element that matches the conditions defined by the specified predicate, and returns
          * an Observable sequence with the zero-based index of the first occurrence within the entire Observable sequence.
          * @param {Function} predicate The predicate that defines the conditions of the element to search for.
          * @param {Any} [thisArg] Object to use as `this` when executing the predicate.
          * @returns {Observable} An Observable sequence with the zero-based index of the first occurrence of an element that matches the conditions defined by match, if found; otherwise, –1.
        */
        findIndex(predicate: _Predicate<T>, thisArg?: any): Observable<number>;
    }
}

(function () {
    var o : Rx.Observable<number>;
    o = o.findIndex((x) => true);
    o = o.findIndex((x) => true, {});
});
