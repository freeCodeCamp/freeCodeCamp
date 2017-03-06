/// <reference path="../../observable.ts" />
module Rx {
    export interface Observable<T> {
        /**
        *  Runs two observable sequences in parallel and combines their last elemenets.
        *
        * @param {Observable} second Second observable sequence.
        * @param {Function} resultSelector Result selector function to invoke with the last elements of both sequences.
        * @returns {Observable} An observable sequence with the result of calling the selector function with the last elements of both input sequences.
        */
        forkJoin<TSecond, TResult>(second: ObservableOrPromise<TSecond>, resultSelector: (left: T, right: TSecond) => TResult): Observable<TResult>;
    }
}

(function () {
    var a : Rx.Observable<string>;
    var b : Rx.Observable<number>;
    a = a.forkJoin(b, (a, b) => a);
    b = a.forkJoin(b, (a, b) => b);
});
