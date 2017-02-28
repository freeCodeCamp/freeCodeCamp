/// <reference path="../../observable.ts" />
module Rx {
    export interface Observable<T> {
        /**
        * Propagates the observable sequence or Promise that reacts first.
        * @param {Observable} rightSource Second observable sequence or Promise.
        * @returns {Observable} {Observable} An observable sequence that surfaces either of the given sequences, whichever reacted first.
        */
        amb(observable: ObservableOrPromise<T>): Observable<T>;
    }
}

(function() {
    var r : Rx.Observable<string>;
    var o : Rx.Observable<string>;
    var io : Rx.IObservable<string>;
    var p : Rx.Promise<string>;

    r = r.amb(o);
    r = r.amb(io);
    r = r.amb(p);
});
