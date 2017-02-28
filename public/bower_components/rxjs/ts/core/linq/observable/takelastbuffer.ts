/// <reference path="../../observable.ts"/>
module Rx {
    export interface Observable<T> {
        /**
        *  Returns an array with the specified number of contiguous elements from the end of an observable sequence.
        *
        * @description
        *  This operator accumulates a buffer with a length enough to store count elements. Upon completion of the
        *  source sequence, this buffer is produced on the result sequence.
        * @param {Number} count Number of elements to take from the end of the source sequence.
        * @returns {Observable} An observable sequence containing a single array with the specified number of elements from the end of the source sequence.
        */
        takeLastBuffer(count: number): Observable<T[]>;
    }
}


(function() {
    var o: Rx.Observable<number>;
    var o2: Rx.Observable<number[]>;
    o2 = o.takeLastBuffer(1);
});
