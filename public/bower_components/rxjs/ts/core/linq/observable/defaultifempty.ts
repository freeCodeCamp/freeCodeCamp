/// <reference path="../../observable.ts" />
module Rx {
    export interface Observable<T> {
        /**
        *  Returns the elements of the specified sequence or the specified value in a singleton sequence if the sequence is empty.
        *
        *  var res = obs = xs.defaultIfEmpty();
        *  2 - obs = xs.defaultIfEmpty(false);
        *
        * @memberOf Observable#
        * @param defaultValue The value to return if the sequence is empty. If not provided, this defaults to null.
        * @returns {Observable} An observable sequence that contains the specified default value if the source is empty; otherwise, the elements of the source itself.
        */
        defaultIfEmpty(defaultValue?: T): Observable<T>;
    }
}


(function () {
    var o: Rx.Observable<string>;
    o.defaultIfEmpty();
    o.defaultIfEmpty('default');
});
