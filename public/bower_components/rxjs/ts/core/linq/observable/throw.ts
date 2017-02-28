/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
module Rx {
    export interface ObservableStatic {
        /**
        *  Returns an observable sequence that terminates with an exception, using the specified scheduler to send out the single onError message.
        * @param {Mixed} error An object used for the sequence's termination.
        * @param {Scheduler} scheduler Scheduler to send the exceptional termination call on. If not specified, defaults to Scheduler.immediate.
        * @returns {Observable} The observable sequence that terminates exceptionally with the specified exception object.
        */
        throw<T>(exception: Error, scheduler?: IScheduler): Observable<T>;
        /**
        *  Returns an observable sequence that terminates with an exception, using the specified scheduler to send out the single onError message.
        * @param {Mixed} error An object used for the sequence's termination.
        * @param {Scheduler} scheduler Scheduler to send the exceptional termination call on. If not specified, defaults to Scheduler.immediate.
        * @returns {Observable} The observable sequence that terminates exceptionally with the specified exception object.
        */
        throw<T>(exception: any, scheduler?: IScheduler): Observable<T>;
    }
}

(function () {
    var o : Rx.Observable<any>;
    o = Rx.Observable.throw(new Error());
    o = Rx.Observable.throw(new Error(), Rx.Scheduler.async);
    o = Rx.Observable.throw('abc');
    o = Rx.Observable.throw('abc', Rx.Scheduler.async);
});
