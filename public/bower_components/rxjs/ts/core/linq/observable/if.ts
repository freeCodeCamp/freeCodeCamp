/// <reference path="../../observable.ts" />
/// <reference path="../../concurrency/scheduler.ts" />
module Rx {
    export interface ObservableStatic {
        /**
        *  Determines whether an observable collection contains values.
        *
        * @example
        *  1 - res = Rx.Observable.if(condition, obs1);
        *  2 - res = Rx.Observable.if(condition, obs1, obs2);
        *  3 - res = Rx.Observable.if(condition, obs1, scheduler);
        * @param {Function} condition The condition which determines if the thenSource or elseSource will be run.
        * @param {Observable} thenSource The observable sequence or Promise that will be run if the condition function returns true.
        * @param {Observable} [elseSource] The observable sequence or Promise that will be run if the condition function returns false. If this is not provided, it defaults to Rx.Observabe.Empty with the specified scheduler.
        * @returns {Observable} An observable sequence which is either the thenSource or elseSource.
        */
        if<T>(condition: () => boolean, thenSource: ObservableOrPromise<T>, elseSourceOrScheduler?: ObservableOrPromise<T> | IScheduler): Observable<T>;
    }
}

(function () {
    var o : Rx.Observable<string>;

    Rx.Observable.if(() => false, o);
    Rx.Observable.if(() => false, o, o);
    Rx.Observable.if(() => false, o, Rx.Scheduler.async);
})
