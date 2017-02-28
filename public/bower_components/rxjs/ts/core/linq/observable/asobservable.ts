/// <reference path="../../observable.ts" />
module Rx {
    export interface Observable<T> {
        /**
       *  Hides the identity of an observable sequence.
       * @returns {Observable} An observable sequence that hides the identity of the source sequence.
       */
        asObservable(): Observable<T>;
    }
}

(function() {
    var s : Rx.Subject<boolean>;

    var o : Rx.Observable<boolean> = s.asObservable();
});
