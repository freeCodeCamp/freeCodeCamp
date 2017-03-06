/// <reference path="../../observable.ts"/>
module Rx {
    export interface Observable<T> {
        /**
        *  Bypasses a specified number of elements at the end of an observable sequence.
        * @description
        *  This operator accumulates a queue with a length enough to store the first `count` elements. As more elements are
        *  received, elements are taken from the front of the queue and produced on the result sequence. This causes elements to be delayed.
        * @param count Number of elements to bypass at the end of the source sequence.
        * @returns {Observable} An observable sequence containing the source sequence elements except for the bypassed ones at the end.
        */
        skipLast(count: number): Observable<T>;
    }
}


(function() {
    var o: Rx.Observable<number>;
    o = o.skipLast(1);
});
