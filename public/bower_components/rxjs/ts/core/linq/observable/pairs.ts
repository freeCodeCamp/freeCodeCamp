/// <reference path="../../observable.ts" />
/// <reference path="../../concurrency/scheduler.ts" />
module Rx {
    export interface ObservableStatic {
        /**
        * Convert an object into an observable sequence of [key, value] pairs.
        * @param {Object} obj The object to inspect.
        * @param {Scheduler} [scheduler] Scheduler to run the enumeration of the input sequence on.
        * @returns {Observable} An observable sequence of [key, value] pairs from the object.
        */
        pairs<T>(obj: { [key: string]: T }, scheduler?: IScheduler): Observable<[string, T]>;
        /**
        * Convert an object into an observable sequence of [key, value] pairs.
        * @param {Object} obj The object to inspect.
        * @param {Scheduler} [scheduler] Scheduler to run the enumeration of the input sequence on.
        * @returns {Observable} An observable sequence of [key, value] pairs from the object.
        */
        pairs<T>(obj: { [key: number]: T }, scheduler?: IScheduler): Observable<[number, T]>;
    }
}

(function() {
    var n: Rx.Observable<[number, string]>;
    var s: Rx.Observable<[string, number]>;

    s = Rx.Observable.pairs(<{ [key: string]: number }>{});
    s = Rx.Observable.pairs(<{ [key: string]: number }>{}, Rx.Scheduler.default);
    n = Rx.Observable.pairs(<{ [key: number]: string }>{});
    n = Rx.Observable.pairs(<{ [key: number]: string }>{}, Rx.Scheduler.default);
});
