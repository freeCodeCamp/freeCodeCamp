/// <reference path="../../observable.ts" />
/// <reference path="../../concurrency/scheduler.ts" />
module Rx {
    export interface ObservableStatic {
        /**
         * This method creates a new Observable sequence from an array-like or iterable object.
         * @param {Any} arrayLike An array-like or iterable object to convert to an Observable sequence.
         * @param {Function} [mapFn] Map function to call on every element of the array.
         * @param {Any} [thisArg] The context to use calling the mapFn if provided.
         * @param {Scheduler} [scheduler] Optional scheduler to use for scheduling.  If not provided, defaults to Scheduler.currentThread.
         */
        from<T>(array: ArrayOrIterable<T>): Observable<T>;
        /**
         * This method creates a new Observable sequence from an array-like or iterable object.
         * @param {Any} arrayLike An array-like or iterable object to convert to an Observable sequence.
         * @param {Function} [mapFn] Map function to call on every element of the array.
         * @param {Any} [thisArg] The context to use calling the mapFn if provided.
         * @param {Scheduler} [scheduler] Optional scheduler to use for scheduling.  If not provided, defaults to Scheduler.currentThread.
         */
        from<T, TResult>(array: ArrayOrIterable<T>, mapFn: (value: T, index: number) => TResult, thisArg?: any, scheduler?: IScheduler): Observable<TResult>;
    }
}

(function () {
    var a : Rx.Observable<string>;
    var b : Rx.Promise<string>;
    Rx.Observable.from([1,2,3]);
    Rx.Observable.from([1,2,3], x => x + 1);
    Rx.Observable.from([1,2,3], x => x + 1, {});
    Rx.Observable.from([1,2,3], x => x + 1, {}, Rx.Scheduler.async);
});
