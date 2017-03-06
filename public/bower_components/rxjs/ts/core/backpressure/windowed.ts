/// <reference path="./controlled.ts" />
module Rx {
    export interface ControlledObservable<T> {
        /**
         * Creates a sliding windowed observable based upon the window size.
         * @param {Number} windowSize The number of items in the window
         * @returns {Observable} A windowed observable based upon the window size.
         */
        windowed(windowSize: number): Observable<T>;
    }
}

(function() {
    var observer: Rx.Observable<boolean>;
    var controlledObserver: Rx.ControlledObservable<boolean>;
	observer = controlledObserver.windowed(1);
})
