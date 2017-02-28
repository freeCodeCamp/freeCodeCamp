/// <reference path="../../observable.ts"/>
module Rx {
    export interface Observable<T> {
        /**
        * Computes the sum of a sequence of values that are obtained by invoking an optional transform function on each element of the input sequence, else if not specified computes the sum on each item in the sequence.
        * @param {Function} [selector] A transform function to apply to each element.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence containing a single element with the sum of the values in the source sequence.
        */
        sum(keySelector?: _Selector<T, number>, thisArg?: any): Observable<number>;
    }
}


(function () {
    var os : Rx.Observable<string>;
    var on : Rx.Observable<number>;

    on.sum();
    os.sum((v, i, s) => v.length + i);
    os.sum((v, i, s) => v.length + i, {});
});
