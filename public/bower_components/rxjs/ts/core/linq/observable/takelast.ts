/// <reference path="../../disposables/disposable.ts" />
/// <reference path="../../observable.ts"/>
module Rx {
    export interface Observable<T> {
        /**
        *  Returns a specified number of contiguous elements from the end of an observable sequence.
        * @description
        *  This operator accumulates a buffer with a length enough to store elements count elements. Upon completion of
        *  the source sequence, this buffer is drained on the result sequence. This causes the elements to be delayed.
        * @param {Number} count Number of elements to take from the end of the source sequence.
        * @returns {Observable} An observable sequence containing the specified number of elements from the end of the source sequence.
        */
        takeLast(count: number): Observable<T>;
    }
}


(function() {
    var o: Rx.Observable<number>;
    o = o.takeLast(1);
});
