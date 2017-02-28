/// <reference path="../../observable.ts"/>
module Rx {
    export interface Observable<T> {
        /*
         * Converts an existing observable sequence to an ES6 Compatible Promise
         * @example
         * var promise = Rx.Observable.return(42).toPromise(RSVP.Promise);
         *
         * // With config
         * Rx.config.Promise = RSVP.Promise;
         * var promise = Rx.Observable.return(42).toPromise();
         * @param {Function} [promiseCtor] The constructor of the promise. If not provided, it looks for it in Rx.config.Promise.
         * @returns {Promise} An ES6 compatible promise with the last value from the observable sequence.
         */
        toPromise(promiseCtor?: { new (resolver: (resolvePromise: (value: T) => void, rejectPromise: (reason: any) => void) => void): IPromise<T>; }): IPromise<T>;
        /*
         * Converts an existing observable sequence to an ES6 Compatible Promise
         * @example
         * var promise = Rx.Observable.return(42).toPromise(RSVP.Promise);
         *
         * // With config
         * Rx.config.Promise = RSVP.Promise;
         * var promise = Rx.Observable.return(42).toPromise();
         * @param {Function} [promiseCtor] The constructor of the promise. If not provided, it looks for it in Rx.config.Promise.
         * @returns {Promise} An ES6 compatible promise with the last value from the observable sequence.
         */
        toPromise<TPromise extends IPromise<T>>(promiseCtor: { new (resolver: (resolvePromise: (value: T) => void, rejectPromise: (reason: any) => void) => void): TPromise; }): TPromise;
    }
}

(function () {
    var o : Rx.Observable<number>;
    var t : Rx.Promise<number>;
    t = o.toPromise();
});
