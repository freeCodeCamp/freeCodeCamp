/// <reference path="../../observable.ts" />
module Rx {
    export interface ObservableStatic {
        /**
        * Flattens an Observable that emits Observables into one Observable, in a way that allows an Observer to
        * receive all successfully emitted items from all of the source Observables without being interrupted by
        * an error notification from one of them.
        *
        * This behaves like Observable.prototype.mergeAll except that if any of the merged Observables notify of an
        * error via the Observer's onError, mergeDelayError will refrain from propagating that
        * error notification until all of the merged Observables have finished emitting items.
        * @param {Array | Arguments} args Arguments or an array to merge.
        * @returns {Observable} an Observable that emits all of the items emitted by the Observables emitted by the Observable
        */
        mergeDelayError<T>(...sources: ObservableOrPromise<T>[]): Observable<T>;
        /**
        * Flattens an Observable that emits Observables into one Observable, in a way that allows an Observer to
        * receive all successfully emitted items from all of the source Observables without being interrupted by
        * an error notification from one of them.
        *
        * This behaves like Observable.prototype.mergeAll except that if any of the merged Observables notify of an
        * error via the Observer's onError, mergeDelayError will refrain from propagating that
        * error notification until all of the merged Observables have finished emitting items.
        * @param {Array | Arguments} args Arguments or an array to merge.
        * @returns {Observable} an Observable that emits all of the items emitted by the Observables emitted by the Observable
        */
        mergeDelayError<T>(sources: ObservableOrPromise<T>[]): Observable<T>;
    }
}

(function() {
    var o: Rx.Observable<string>;
    var p: Rx.Promise<string>;

    Rx.Observable.mergeDelayError(o, p, o, p);
    Rx.Observable.mergeDelayError([o, p, o, p]);
})
