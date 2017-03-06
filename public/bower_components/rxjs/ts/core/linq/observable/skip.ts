/// <reference path="../../observable.ts"/>
module Rx {
    export interface Observable<T> {
        /**
        * Bypasses a specified number of elements in an observable sequence and then returns the remaining elements.
        * @param {Number} count The number of elements to skip before returning the remaining elements.
        * @returns {Observable} An observable sequence that contains the elements that occur after the specified index in the input sequence.
        */
        skip(count: number): Observable<T>;
    }
}

(function() {
    var o: Rx.Observable<number>;
    o = o.skip(1);
});
