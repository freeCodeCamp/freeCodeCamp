/// <reference path="../../observable.ts" />
module Rx {
    export interface Observable<T> {
        /**
         * Returns a new observable that triggers on the second and subsequent triggerings of the input observable.
         * The Nth triggering of the input observable passes the arguments from the N-1th and Nth triggering as a pair.
         * The argument passed to the N-1th triggering is held in hidden internal state until the Nth triggering occurs.
         * @returns {Observable} An observable that triggers on successive pairs of observations from the input observable as an array.
         */
        pairwise(): Observable<[T, T]>;
    }
}


(function () {
    var o : Rx.Observable<number>;
    var r : Rx.Observable<[number, number]>;

    r = o.pairwise();
});
