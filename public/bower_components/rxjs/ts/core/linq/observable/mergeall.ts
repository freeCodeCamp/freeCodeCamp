/// <reference path="../../observable.ts" />
module Rx {
    export interface Observable<T> {
        /**
        * Merges an observable sequence of observable sequences into an observable sequence.
        * @returns {Observable} The observable sequence that merges the elements of the inner sequences.
        */
        mergeAll(): T;
    }
}


(function() {
    var o: Rx.Observable<Rx.Observable<string>>;

    var oo : Rx.Observable<string> = o.mergeAll();
});
