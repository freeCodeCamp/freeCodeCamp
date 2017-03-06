/// <reference path="./controlled.ts" />
module Rx {
    export interface ControlledObservable<T> {
        /**
         * Attaches a stop and wait observable to the current observable.
         * @returns {Observable} A stop and wait observable.
         */
        stopAndWait(): Observable<T>;
    }
}

(function() {
    var observer: Rx.Observable<boolean>;
    var controlledObserver: Rx.ControlledObservable<boolean>;
	observer = controlledObserver.stopAndWait();
})
