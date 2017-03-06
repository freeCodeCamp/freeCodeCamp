/// <reference path="../../observable.ts" />
module Rx {
    export interface Observable<T> {
        /**
        *  Materializes the implicit notifications of an observable sequence as explicit notification values.
        * @returns {Observable} An observable sequence containing the materialized notification values from the source sequence.
        */
        materialize(): Observable<T>;
    }
}

(function () {
    var o : Rx.Observable<boolean>;
    o = o.materialize();
});
