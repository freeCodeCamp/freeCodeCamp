/// <reference path="../../observable.ts" />
module Rx {
    export interface Observable<T> {
        /**
        * Returns the first element of an observable sequence that satisfies the condition in the predicate if present else the first item in the sequence.
        * @returns {Observable} Sequence containing the first element in the observable sequence that satisfies the condition in the predicate if provided, else the first item in the sequence.
        */
        first(predicate?: _Predicate<T>, thisArg?: any): Observable<T>;
    }
}

(function () {
    var o : Rx.Observable<number>;
    o = o.first((x) => true);
    o = o.first((x) => true, {});
});
