/// <reference path="../../observable.ts" />
module Rx {
    export interface Observable<T> {
        /**
        *  Repeats source as long as condition holds emulating a do while loop.
        *
        * @param {Function} condition The condition which determines if the source will be repeated.
        * @param {Observable} source The observable sequence that will be run if the condition function returns true.
        * @returns {Observable} An observable sequence which is repeated as long as the condition holds.
        */
        doWhile(condition: () => boolean): Observable<T>;
    }
}

(function () {
    var o : Rx.Observable<string>;
    o = o.doWhile(() => false);
});
