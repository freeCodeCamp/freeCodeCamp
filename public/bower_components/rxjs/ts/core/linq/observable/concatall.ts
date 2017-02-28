/// <reference path="../../observable.ts" />
module Rx {
    export interface Observable<T> {
        /**
          * Concatenates an observable sequence of observable sequences.
          * @returns {Observable} An observable sequence that contains the elements of each observed inner sequence, in sequential order.
          */
        concatAll(): T;
    }
}

(function() {
    var o: Rx.Observable<Rx.Observable<string>>;

    var oo : Rx.Observable<string> = o.concatAll();
});
