/// <reference path="../../observable.ts" />
module Rx {
    export interface Observable<T> {
        /**
        *  Ignores all elements in an observable sequence leaving only the termination messages.
        * @returns {Observable} An empty observable sequence that signals termination, successful or exceptional, of the source sequence.
        */
        ignoreElements(): Observable<T>;
    }
}

(function () {
    var o : Rx.Observable<string>;
    o.ignoreElements();
});
