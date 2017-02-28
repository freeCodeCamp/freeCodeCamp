/// <reference path="../../observable.ts" />
/// <reference path="../../observer-lite.ts" />
module Rx {
    export interface ObservableStatic {
        /**
        *  Creates an observable sequence from a specified subscribe method implementation.
        * @example
        *  var res = Rx.Observable.create(function (observer) { return function () { } );
        *  var res = Rx.Observable.create(function (observer) { return Rx.Disposable.empty; } );
        *  var res = Rx.Observable.create(function (observer) { } );
        * @param {Function} subscribe Implementation of the resulting observable sequence's subscribe method, returning a function that will be wrapped in a Disposable.
        * @returns {Observable} The observable sequence with the specified implementation for the Subscribe method.
        */
        create<T>(subscribe: (observer: Observer<T>) => IDisposable | Function | void): Observable<T>;
    }
}

(function () {
    var o : Rx.Observable<string>;
    o = Rx.Observable.create<string>(o => {});
    o = Rx.Observable.create<string>(o => Rx.Disposable.empty);
    o = Rx.Observable.create<string>(o => () => {});
});
