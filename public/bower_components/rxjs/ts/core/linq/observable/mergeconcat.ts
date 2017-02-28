/// <reference path="../../observable.ts" />
module Rx {
    export interface Observable<T> {
        /**
        * Merges an observable sequence of observable sequences into an observable sequence, limiting the number of concurrent subscriptions to inner sequences.
        * Or merges two observable sequences into a single observable sequence.
        *
        * @example
        * 1 - merged = sources.merge(1);
        * 2 - merged = source.merge(otherSource);
        * @param {Mixed} [maxConcurrentOrOther] Maximum number of inner observable sequences being subscribed to concurrently or the second observable sequence.
        * @returns {Observable} The observable sequence that merges the elements of the inner sequences.
        */
        merge(maxConcurrent: number): T;
        /**
        * Merges an observable sequence of observable sequences into an observable sequence, limiting the number of concurrent subscriptions to inner sequences.
        * Or merges two observable sequences into a single observable sequence.
        *
        * @example
        * 1 - merged = sources.merge(1);
        * 2 - merged = source.merge(otherSource);
        * @param {Mixed} [maxConcurrentOrOther] Maximum number of inner observable sequences being subscribed to concurrently or the second observable sequence.
        * @returns {Observable} The observable sequence that merges the elements of the inner sequences.
        */
        merge(other: ObservableOrPromise<T>): Observable<T>;
    }
}

(function() {
    var o: Rx.Observable<string>;
    var oo: Rx.Observable<Rx.Observable<string>>;
    var p: Rx.Promise<string>;

    o = oo.merge(1);
    o = o.merge(p);
    o = o.merge(o);
});
