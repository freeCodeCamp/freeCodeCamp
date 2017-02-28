/// <reference path="../../observable.ts" />
module Rx {
    export interface Observable<T> {
        /**
        * Returns the last element of an observable sequence that satisfies the condition in the predicate if specified, else the last element.
        * @returns {Observable} Sequence containing the last element in the observable sequence that satisfies the condition in the predicate.
        */
        last(predicate?: _Predicate<T>, thisArg?: any): Observable<T>;
    }
}

(function () {
    var o : Rx.Observable<number>;
    o = o.last((x) => true);
    o = o.last((x) => true, {});
});
