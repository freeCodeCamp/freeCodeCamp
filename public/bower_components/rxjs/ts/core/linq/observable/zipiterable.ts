/// <reference path="../../observable.ts"/>
module Rx {
    export interface ObservableStatic {
        /**
        * Merges the specified observable sequences into one observable sequence by emitting a list with the elements of the observable sequences at corresponding indexes.
        * @param arguments Observable sources.
        * @returns {Observable} An observable sequence containing lists of elements at corresponding indexes.
        */
        zipIterable<T>(...sources: Observable<T>[]): Observable<T[]>;
        /**
        * Merges the specified observable sequences into one observable sequence by emitting a list with the elements of the observable sequences at corresponding indexes.
        * @param arguments Observable sources.
        * @returns {Observable} An observable sequence containing lists of elements at corresponding indexes.
        */
        zipIterable<T>(sources: Observable<T>[]): Observable<T[]>;
    }
}
