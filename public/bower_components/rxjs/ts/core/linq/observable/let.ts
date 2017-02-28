/// <reference path="../../observable.ts" />
module Rx {
    export interface Observable<T> {
        /**
        *  Returns an observable sequence that is the result of invoking the selector on the source sequence, without sharing subscriptions.
        *  This operator allows for a fluent style of writing queries that use the same sequence multiple times.
        *
        * @param {Function} selector Selector function which can use the source sequence as many times as needed, without sharing subscriptions to the source sequence.
        * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence within a selector function.
        */
        let<TResult>(selector: (source: Observable<T>) => Observable<TResult>): Observable<TResult>;
    }
}

(function () {
    var a : Rx.Observable<string>;
    var b : Rx.Observable<number>;
    a.let(x => x.concat(Rx.Observable.just('a')));
});
