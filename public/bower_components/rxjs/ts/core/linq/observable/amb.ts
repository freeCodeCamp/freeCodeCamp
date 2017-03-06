/// <reference path="../../observable.ts" />
module Rx {
    export interface ObservableStatic {
        /**
        * Propagates the observable sequence or Promise that reacts first.
        * @returns {Observable} An observable sequence that surfaces any of the given sequences, whichever reacted first.
        */
        amb<T>(observables: ObservableOrPromise<T>[]): Observable<T>;
        /**
        * Propagates the observable sequence or Promise that reacts first.
        * @returns {Observable} An observable sequence that surfaces any of the given sequences, whichever reacted first.
        */
        amb<T>(...observables: ObservableOrPromise<T>[]): Observable<T>;
    }
}

(function() {
    var p : Rx.Promise<boolean>;
    var o : Rx.Observable<boolean>;
    var io : Rx.IObservable<boolean>;

    var any: Rx.Observable<boolean> = Rx.Observable.amb(p, o, io, p, o, io);
    var any: Rx.Observable<boolean> = Rx.Observable.amb(p, p);
    var any: Rx.Observable<boolean> = Rx.Observable.amb(o, o);
    var any: Rx.Observable<boolean> = Rx.Observable.amb(io, io);
});
