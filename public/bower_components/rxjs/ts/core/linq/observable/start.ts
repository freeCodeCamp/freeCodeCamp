/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
module Rx {
    export interface ObservableStatic {
        /**
        * Invokes the specified function asynchronously on the specified scheduler, surfacing the result through an observable sequence.
        *
        * @example
        * var res = Rx.Observable.start(function () { console.log('hello'); });
        * var res = Rx.Observable.start(function () { console.log('hello'); }, Rx.Scheduler.timeout);
        * var res = Rx.Observable.start(function () { this.log('hello'); }, Rx.Scheduler.timeout, console);
        *
        * @param {Function} func Function to run asynchronously.
        * @param {Scheduler} [scheduler]  Scheduler to run the function on. If not specified, defaults to Scheduler.timeout.
        * @param [context]  The context for the func parameter to be executed.  If not specified, defaults to undefined.
        * @returns {Observable} An observable sequence exposing the function's result value, or an exception.
        *
        * Remarks
        * * The function is called immediately, not during the subscription of the resulting sequence.
        * * Multiple subscriptions to the resulting sequence can observe the function's result.
        */
        start<T>(func: () => T, scheduler?: IScheduler, context?: any): Observable<T>;
    }
}

(function () {
    var o : Rx.Observable<string> = Rx.Observable.start(() => 'abc');
    var o : Rx.Observable<string> = Rx.Observable.start(() => 'abc', Rx.Scheduler.default);
    var o : Rx.Observable<string> = Rx.Observable.start(() => 'abc', Rx.Scheduler.default, {});
});
