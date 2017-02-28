/// <reference path="../../observable.ts" />
module Rx {
    export interface ObservableStatic {
        /**
          *  Returns an observable sequence that invokes the specified factory function whenever a new observer subscribes.
          *
          * @example
          *  var res = Rx.Observable.defer(function () { return Rx.Observable.fromArray([1,2,3]); });
          * @param {Function} observableFactory Observable factory function to invoke for each observer that subscribes to the resulting sequence or Promise.
          * @returns {Observable} An observable sequence whose observers trigger an invocation of the given observable factory function.
          */
        defer<T>(observableFactory: () => ObservableOrPromise<T>): Observable<T>;
    }
}

(function () {
    var o: Rx.Observable<string>;
    Rx.Observable.defer(() => o);
    Rx.Observable.defer(() => o.toPromise());
});
