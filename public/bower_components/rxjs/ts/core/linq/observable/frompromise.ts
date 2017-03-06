/// <reference path="../../observable.ts" />
module Rx {
    export interface ObservableStatic {
        /**
        * Converts a Promise to an Observable sequence
        * @param {Promise} An ES6 Compliant promise.
        * @returns {Observable} An Observable sequence which wraps the existing promise success and failure.
        */
 		fromPromise<T>(promise: Promise<T>): Observable<T>;
    }
}

(function () {
    var p : Rx.Promise<string>;
    var o : Rx.Observable<string> = Rx.Observable.fromPromise(p);
})
