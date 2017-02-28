/// <reference path="../../observable.ts" />
/// <reference path="../../concurrency/scheduler.ts" />
module Rx {
    export interface ObservableStatic {
        /**
         *  Converts an array to an observable sequence, using an optional scheduler to enumerate the array.
         * @deprecated use Observable.from or Observable.of
         * @param {Scheduler} [scheduler] Scheduler to run the enumeration of the input sequence on.
         * @returns {Observable} The observable sequence whose elements are pulled from the given enumerable sequence.
         */
        fromArray<T>(array: ArrayLike<T>, scheduler?: IScheduler): Observable<T>;
    }
}

(function () {
    Rx.Observable.fromArray([1,2,3]);
    Rx.Observable.fromArray([1,2,3], Rx.Scheduler.async);
});
