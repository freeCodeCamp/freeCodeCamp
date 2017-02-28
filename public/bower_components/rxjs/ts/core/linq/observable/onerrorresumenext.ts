/// <reference path="../../observable.ts" />
module Rx {
    export interface ObservableStatic {
        /**
        * Continues an observable sequence that is terminated normally or by an exception with the next observable sequence.
        *
        * @example
        * 1 - res = Rx.Observable.onErrorResumeNext(xs, ys, zs);
        * 1 - res = Rx.Observable.onErrorResumeNext([xs, ys, zs]);
        * @returns {Observable} An observable sequence that concatenates the source sequences, even if a sequence terminates exceptionally.
        */
        onErrorResumeNext<T>(...sources: ObservableOrPromise<T>[]): Observable<T>;
        /**
        * Continues an observable sequence that is terminated normally or by an exception with the next observable sequence.
        *
        * @example
        * 1 - res = Rx.Observable.onErrorResumeNext(xs, ys, zs);
        * 1 - res = Rx.Observable.onErrorResumeNext([xs, ys, zs]);
        * @returns {Observable} An observable sequence that concatenates the source sequences, even if a sequence terminates exceptionally.
        */
        onErrorResumeNext<T>(sources: ObservableOrPromise<T>[]): Observable<T>;
    }
}

(function() {
    var o: Rx.Observable<number>;
    var p: Rx.Promise<number>;
    o = Rx.Observable.onErrorResumeNext(o, p, o, p);
    o = Rx.Observable.onErrorResumeNext([o, p, o, p]);
});
