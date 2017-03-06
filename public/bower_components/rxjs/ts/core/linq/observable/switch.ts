/// <reference path="../../observable.ts"/>
module Rx {
    export interface Observable<T> {
        /**
        * Transforms an observable sequence of observable sequences into an observable sequence producing values only from the most recent observable sequence.
        * @returns {Observable} The observable sequence that at any point in time produces the elements of the most recent inner observable sequence that has been received.
        */
        switch(): T;
        /**
        * Transforms an observable sequence of observable sequences into an observable sequence producing values only from the most recent observable sequence.
        * @returns {Observable} The observable sequence that at any point in time produces the elements of the most recent inner observable sequence that has been received.
        */
        switchLatest(): T;
    }
}

(function() {
    var o: Rx.Observable<Rx.Observable<number>>;
    var or: Rx.Observable<number>;
    or = o.switch();
    or = o.switchLatest();
});
