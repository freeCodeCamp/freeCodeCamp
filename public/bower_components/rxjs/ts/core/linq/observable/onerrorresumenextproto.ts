/// <reference path="../../observable.ts" />
module Rx {
    export interface Observable<T> {
        /**
        * Continues an observable sequence that is terminated normally or by an exception with the next observable sequence.
        * @param {Observable} second Second observable sequence used to produce results after the first sequence terminates.
        * @returns {Observable} An observable sequence that concatenates the first and second sequence, even if the first sequence terminates exceptionally.
        */
        onErrorResumeNext(second: ObservableOrPromise<T>): Observable<T>;
    }
}

(function() {
    var o: Rx.Observable<number>;
    var p: Rx.Promise<number>;
    o = o.onErrorResumeNext(p);
    o = o.onErrorResumeNext(o);
});
