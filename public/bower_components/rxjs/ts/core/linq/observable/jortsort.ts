/// <reference path="../../observable.ts" />
module Rx {
    export interface Observable<T> {
        /**
        * jortSort checks if your inputs are sorted.  Note that this is only for a sequence with an end.
        * See http://jort.technology/ for full details.
        * @returns {Observable} An observable which has a single value of true if sorted, else false.
        */
        jortSort(): Observable<boolean>;
    }
}

(function () {
    var o : Rx.Observable<number>;
    var b : Rx.Observable<boolean> =  o.jortSort();
});
