/// <reference path="../../observable.ts" />
module Rx {
    export interface Observable<T> {
        /**
        * Computes the average of an observable sequence of values that are in the sequence or obtained by invoking a transform function on each element of the input sequence if present.
        * @param {Function} [selector] A transform function to apply to each element.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence containing a single element with the average of the sequence of values.
        */
        average(keySelector?: _Selector<T, number>, thisArg?: any): Observable<number>;
    }
}

(function () {
    var os : Rx.Observable<string>;
    var on : Rx.Observable<number>;

    on.average();
    os.average((v, i, s) => v.length + i);
    os.average((v, i, s) => v.length + i, {});
});
