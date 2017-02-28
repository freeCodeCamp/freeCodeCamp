/// <reference path="../../observable.ts"/>
module Rx {
    export interface Observable<T> {
        /**
        * Creates an array from an observable sequence.
        * @returns {Observable} An observable sequence containing a single element with a list containing all the elements of the source sequence.
        */
        toArray(): Observable<T[]>;
    }
}

(function () {
    var o : Rx.Observable<number>;
    var t : Rx.Observable<number[]>;
    t = o.toArray();
});
