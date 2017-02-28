/// <reference path="../../observable.ts"/>
module Rx {
    export interface Observable<T> {
        /**
        * Projects each element of an observable sequence into a new form by incorporating the element's index.
        * @param {Function} selector A transform function to apply to each source element; the second parameter of the function represents the index of the source element.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the transform function on each element of source.
        */
        select<TResult>(selector: _Selector<T, TResult>, thisArg?: any): Observable<TResult>;
        /**
        * Projects each element of an observable sequence into a new form by incorporating the element's index.
        * @param {Function} selector A transform function to apply to each source element; the second parameter of the function represents the index of the source element.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the transform function on each element of source.
        */
        map<TResult>(selector: _Selector<T, TResult>, thisArg?: any): Observable<TResult>;
    }
}

(function () {
    var o : Rx.Observable<boolean>;
    o = o.map((x) => true);
    o = o.map((x) => true, {});
    o = o.select((x) => true);
    o = o.select((x) => true, {});
});
