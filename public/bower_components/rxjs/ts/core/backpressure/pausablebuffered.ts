/// <reference path="./pausable.ts" />
module Rx {
    export interface Observable<T> {
        /**
         * Pauses the underlying observable sequence based upon the observable sequence which yields true/false,
         * and yields the values that were buffered while paused.
         * @example
         * var pauser = new Rx.Subject();
         * var source = Rx.Observable.interval(100).pausableBuffered(pauser);
         * @param {Observable} pauser The observable sequence used to pause the underlying sequence.
         * @returns {Observable} The observable sequence which is paused based upon the pauser.
         */
        pausableBuffered(pauser?: Observable<boolean>): PausableObservable<T>;
    }
}

(function() {
    var o: Rx.Observable<string>;
    var b: Rx.Observable<boolean>;
    var c = o.pausableBuffered();
    var c = o.pausableBuffered(b);
})
