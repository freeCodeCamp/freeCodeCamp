/// <reference path="../../observable.ts" />
/// <reference path="../../concurrency/scheduler.ts" />
module Rx {
    export interface ObservableStatic {
        /**
        * Returns a non-terminating observable sequence, which can be used to denote an infinite duration (e.g. when using reactive joins).
        * @returns {Observable} An observable sequence whose observers will never get called.
        */
        never<T>(): Observable<T>;
    }
}

(function () {
    var o : Rx.Observable<string>;
    o = Rx.Observable.never<string>();
});
