/// <reference path="../../observable.ts"/>
module Rx {
    export interface ObservableStatic {
        /**
        * Invokes the asynchronous function, surfacing the result through an observable sequence.
        * @param {Function} functionAsync Asynchronous function which returns a Promise to run.
        * @returns {Observable} An observable sequence exposing the function's result value, or an exception.
        */
        startAsync<T>(functionAsync: () => IPromise<T>): Observable<T>;
    }
}


(function () {
    var o : Rx.Observable<string> = Rx.Observable.startAsync(() => Rx.Observable.just('a').toPromise());
});
