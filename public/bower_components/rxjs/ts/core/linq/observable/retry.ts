/// <reference path="../../observable.ts"/>
module Rx {
    export interface Observable<T> {
        /**
        *  Repeats the source observable sequence the specified number of times or until it successfully terminates. If the retry count is not specified, it retries indefinitely.
        *  Note if you encounter an error and want it to retry once, then you must use .retry(2);
        *
        * @example
        *  var res = retried = retry.repeat();
        *  var res = retried = retry.repeat(2);
        * @param {Number} [retryCount]  Number of times to retry the sequence. If not provided, retry the sequence indefinitely.
        * @returns {Observable} An observable sequence producing the elements of the given sequence repeatedly until it terminates successfully.
        */
        retry(retryCount?: number): Observable<T>;
    }
}

(function() {
    var o: Rx.Observable<number>;
    o.retry();
    o.retry(42);
});
