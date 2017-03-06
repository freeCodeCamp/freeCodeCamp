/// <reference path="../../observable.ts" />
module Rx {
    export interface Observable<T> {
        /**
        *  Projects each element of an observable sequence into zero or more buffers which are produced based on element count information.
        * @param {Number} count Length of each buffer.
        * @param {Number} [skip] Number of elements to skip between creation of consecutive buffers. If not provided, defaults to the count.
        * @returns {Observable} An observable sequence of buffers.
        */
        bufferWithCount(count: number, skip?: number): Observable<T[]>;
    }
}

(function() {
    var o : Rx.Observable<string>;

    var so : Rx.Observable<string[]> = o.bufferWithCount(100);
    so = o.bufferWithCount(100, 5);
});
