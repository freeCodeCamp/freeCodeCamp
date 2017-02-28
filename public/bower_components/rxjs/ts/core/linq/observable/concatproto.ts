/// <reference path="../../observable.ts" />
module Rx {
    export interface Observable<T> {
        /**
        * Concatenates all the observable sequences.  This takes in either an array or variable arguments to concatenate.
        * @returns {Observable} An observable sequence that contains the elements of each given sequence, in sequential order.
        */
        concat(...sources: ObservableOrPromise<T>[]): Observable<T>;
    }
}

(function() {
    var o: Rx.Observable<string>;
    var io: Rx.IObservable<string>;
    var so: Rx.Subject<string>;
    var p: Rx.Promise<string>;

    var o: Rx.Observable<string> = o.concat(o, io, so, p);
});
