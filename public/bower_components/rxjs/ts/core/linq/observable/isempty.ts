/// <reference path="../../observable.ts" />
module Rx {
    export interface Observable<T> {
        /**
         * Determines whether an observable sequence is empty.
         * @returns {Observable} An observable sequence containing a single element determining whether the source sequence is empty.
         */
        isEmpty(): Observable<boolean>;
    }
}

(function () {
    var o : Rx.Observable<number>;
    var b : Rx.Observable<boolean> =  o.isEmpty();
});
