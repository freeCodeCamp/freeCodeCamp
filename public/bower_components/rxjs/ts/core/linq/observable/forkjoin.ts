/// <reference path="../../observable.ts" />
module Rx {
    export interface ObservableStatic {
        /**
        *  Runs all observable sequences in parallel and collect their last elements.
        *
        * @example
        *  1 - res = Rx.Observable.forkJoin([obs1, obs2]);
        *  1 - res = Rx.Observable.forkJoin(obs1, obs2, ...);
        * @returns {Observable} An observable sequence with an array collecting the last elements of all the input sequences.
        */
        forkJoin<T>(sources: ObservableOrPromise<T>[]): Observable<T[]>;

        /**
        *  Runs all observable sequences in parallel and collect their last elements.
        *
        * @example
        *  1 - res = Rx.Observable.forkJoin([obs1, obs2]);
        *  1 - res = Rx.Observable.forkJoin(obs1, obs2, ...);
        * @returns {Observable} An observable sequence with an array collecting the last elements of all the input sequences.
        */
        forkJoin<T>(...args: ObservableOrPromise<T>[]): Observable<T[]>;
    }
}

(function () {
    var a : Rx.Observable<string>;
    var b : Rx.Promise<string>;
    Rx.Observable.forkJoin(a, b);
    Rx.Observable.forkJoin([a, b]);
});
