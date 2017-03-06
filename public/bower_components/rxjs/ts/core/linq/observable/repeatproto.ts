/// <reference path="../../observable.ts"/>
module Rx {
    export interface Observable<T> {
        /**
         *  Repeats the observable sequence a specified number of times. If the repeat count is not specified, the sequence repeats indefinitely.
         * @param {Number} [repeatCount]  Number of times to repeat the sequence. If not provided, repeats the sequence indefinitely.
         * @returns {Observable} The observable sequence producing the elements of the given sequence repeatedly.
         */
        repeat(repeatCount?: number): Observable<T>;
    }
}


(function() {
    var o: Rx.Observable<number>;
    o.repeat();
    o.repeat(42);
});
