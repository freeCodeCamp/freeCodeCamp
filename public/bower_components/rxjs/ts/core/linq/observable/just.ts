/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
module Rx {
    export interface ObservableStatic {
        /**
        *  Returns an observable sequence that contains a single element, using the specified scheduler to send out observer messages.
        *  There is an alias called 'just' or browsers <IE9.
        * @param {Mixed} value Single element in the resulting observable sequence.
        * @param {Scheduler} scheduler Scheduler to send the single element on. If not specified, defaults to Scheduler.immediate.
        * @returns {Observable} An observable sequence containing the single specified element.
        */
        return<T>(value: T, scheduler?: IScheduler): Observable<T>;
        /**
        *  Returns an observable sequence that contains a single element, using the specified scheduler to send out observer messages.
        *  There is an alias called 'just' or browsers <IE9.
        * @param {Mixed} value Single element in the resulting observable sequence.
        * @param {Scheduler} scheduler Scheduler to send the single element on. If not specified, defaults to Scheduler.immediate.
        * @returns {Observable} An observable sequence containing the single specified element.
        */
        just<T>(value: T, scheduler?: IScheduler): Observable<T>;
    }
}

(function () {
    var a : Rx.Observable<string>;
    var b : Rx.Observable<number>;
    b = Rx.Observable.return(1);
    a = Rx.Observable.return('a', Rx.Scheduler.async);
    b = Rx.Observable.just(1);
    a = Rx.Observable.just('a', Rx.Scheduler.async);
});
