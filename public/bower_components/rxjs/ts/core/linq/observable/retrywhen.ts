/// <reference path="../../observable.ts"/>
module Rx {
    export interface Observable<T> {
        /**
         *  Repeats the source observable sequence upon error each time the notifier emits or until it successfully terminates.
         *  if the notifier completes, the observable sequence completes.
         *
         * @example
         *  var timer = Observable.timer(500);
         *  var source = observable.retryWhen(timer);
         * @param {Observable} [notifier] An observable that triggers the retries or completes the observable with onNext or onCompleted respectively.
         * @returns {Observable} An observable sequence producing the elements of the given sequence repeatedly until it terminates successfully.
         */
        retryWhen(notifier: (errors: Observable<any>) => Observable<any>): Observable<T>;
    }
}


(function() {
    var o: Rx.Observable<number>;
    o.retryWhen(() => Rx.Observable.of(1));
});
