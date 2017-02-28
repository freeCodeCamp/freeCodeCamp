/// <reference path="../../observable.ts" />
/// <reference path="../../concurrency/scheduler.ts" />
module Rx {
    export interface ObservableStatic {
        /**
        *  Uses selector to determine which source in sources to use.
        * @param {Function} selector The function which extracts the value for to test in a case statement.
        * @param {Array} sources A object which has keys which correspond to the case statement labels.
        * @param {Observable} [elseSource] The observable sequence or Promise that will be run if the sources are not matched. If this is not provided, it defaults to Rx.Observabe.empty with the specified scheduler.
        *
        * @returns {Observable} An observable sequence which is determined by a case statement.
        */
        case<T>(selector: () => string, sources: { [key: string]: ObservableOrPromise<T>; }, schedulerOrElseSource?: IScheduler | ObservableOrPromise<T>): Observable<T>;
        /**
        *  Uses selector to determine which source in sources to use.
        * @param {Function} selector The function which extracts the value for to test in a case statement.
        * @param {Array} sources A object which has keys which correspond to the case statement labels.
        * @param {Observable} [elseSource] The observable sequence or Promise that will be run if the sources are not matched. If this is not provided, it defaults to Rx.Observabe.empty with the specified scheduler.
        *
        * @returns {Observable} An observable sequence which is determined by a case statement.
        */
        case<T>(selector: () => number, sources: { [key: number]: ObservableOrPromise<T>; }, schedulerOrElseSource?: IScheduler | ObservableOrPromise<T>): Observable<T>;
    }
}

(function() {
    var o: Rx.Observable<string>;
    var p: Rx.Promise<string>;
    var e: Rx.Observable<string>;
    var on: Rx.Observable<number>;
    var pn: Rx.Promise<number>;
    var en: Rx.Observable<number>;

    var so : { [key: string]: Rx.ObservableOrPromise<string>; } = {};
    so['abc'] = p;
    so['def'] = e;
    so['xyz'] = o;

    var no : { [key: number]: Rx.ObservableOrPromise<number>; } = {}
    no[1] = pn;
    no[2] = en;
    no[3] = on;

    o = Rx.Observable.case(() => 'abc', so)
    o = Rx.Observable.case(() => 'abc', so, e)
    o = Rx.Observable.case(() => 'abc', so, Rx.Scheduler.async);

    on = Rx.Observable.case(() => 1, no)
    on = Rx.Observable.case(() => 2, no, en);
    on = Rx.Observable.case(() => 3, no, Rx.Scheduler.async);
});
