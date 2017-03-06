/// <reference path="../concurrency/scheduler.ts" />
module Rx {
    export interface Observable<T> {
        /**
         * Pauses the underlying observable sequence based upon the observable sequence which yields true/false.
         * @example
         * var pauser = new Rx.Subject();
         * var source = Rx.Observable.interval(100).pausable(pauser);
         * @param {Observable} pauser The observable sequence used to pause the underlying sequence.
         * @returns {Observable} The observable sequence which is paused based upon the pauser.
         */
        pausable(pauser?: Observable<boolean>): PausableObservable<T>;
    }

    export interface PausableObservable<T> extends Observable<T> {
        pause(): void;
        resume(): void;
    }
}

(function() {
    var o: Rx.Observable<string>;
    var b: Rx.Observable<boolean>;
    var c = o.pausable();
    var c = o.pausable(b);

    c.pause();
    c.resume();
})
