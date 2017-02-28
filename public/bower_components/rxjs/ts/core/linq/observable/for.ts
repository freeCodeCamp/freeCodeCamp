/// <reference path="../../observable.ts" />
module Rx {
    export interface ObservableStatic {
        /**
        *  Concatenates the observable sequences obtained by running the specified result selector for each element in source.
        * There is an alias for this method called 'forIn' for browsers <IE9
        * @param {Array} sources An array of values to turn into an observable sequence.
        * @param {Function} resultSelector A function to apply to each item in the sources array to turn it into an observable sequence.
        * @returns {Observable} An observable sequence from the concatenated observable sequences.
        */
        for<T, TResult>(sources: T[], resultSelector: _Selector<T, TResult>, thisArg?: any): Observable<TResult>;
        /**
        *  Concatenates the observable sequences obtained by running the specified result selector for each element in source.
        * There is an alias for this method called 'forIn' for browsers <IE9
        * @param {Array} sources An array of values to turn into an observable sequence.
        * @param {Function} resultSelector A function to apply to each item in the sources array to turn it into an observable sequence.
        * @returns {Observable} An observable sequence from the concatenated observable sequences.
        */
        forIn<T, TResult>(sources: T[], resultSelector: _Selector<T, TResult>, thisArg?: any): Observable<TResult>;
    }
}

(function() {
    Rx.Observable.for(['a'], x => x);
    Rx.Observable.forIn(['a'], x => x);

});
