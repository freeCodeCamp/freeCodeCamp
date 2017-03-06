/// <reference path="../../observable.ts" />
module Rx {
    export interface ObservableStatic {
        /**
        * Concatenates all the observable sequences.
        * @param {Array | Arguments} args Arguments or an array to concat to the observable sequence.
        * @returns {Observable} An observable sequence that contains the elements of each given sequence, in sequential order.
        */
        concat<T>(...sources: ObservableOrPromise<T>[]): Observable<T>;
        /**
        * Concatenates all the observable sequences.
        * @param {Array | Arguments} args Arguments or an array to concat to the observable sequence.
        * @returns {Observable} An observable sequence that contains the elements of each given sequence, in sequential order.
        */
        concat<T>(sources: ObservableOrPromise<T>[]): Observable<T>;
    }
}

(function() {

    var o: Rx.Observable<string>;
    var io: Rx.IObservable<string>;
    var so: Rx.Subject<string>;
    var p: Rx.Promise<string>;

    var o: Rx.Observable<string> = Rx.Observable.concat(o, io, so, p);
    var o: Rx.Observable<string> = Rx.Observable.concat([o, io, so, p]);
});
