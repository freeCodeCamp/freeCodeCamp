/// <reference path="../../observable.ts"/>
module Rx {
    export interface Observable<T> {
        /**
        * Performs a exclusive waiting for the first to finish before subscribing to another observable.
        * Observables that come in between subscriptions will be dropped on the floor.
        * @returns {Observable} A exclusive observable with only the results that happen when subscribed.
        */
        switchFirst(): T;
    }
}


(function() {
    var o: Rx.Observable<Rx.Observable<number>>;
    var or: Rx.Observable<number>;
    or = o.switchFirst();
});
