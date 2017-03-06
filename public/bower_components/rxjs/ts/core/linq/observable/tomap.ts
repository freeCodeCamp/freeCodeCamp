/// <reference path="../../observable.ts" />
module Rx {
    export interface Observable<T> {
        /**
        * Converts the observable sequence to a Map if it exists.
        * @param {Function} keySelector A function which produces the key for the Map.
        * @param {Function} [elementSelector] An optional function which produces the element for the Map. If not present, defaults to the value from the observable sequence.
        * @returns {Observable} An observable sequence with a single value of a Map containing the values from the observable sequence.
        */
        toMap<TKey>(keySelector: (value: T) => TKey): Observable<Map<TKey, T>>;
        /**
        * Converts the observable sequence to a Map if it exists.
        * @param {Function} keySelector A function which produces the key for the Map.
        * @param {Function} [elementSelector] An optional function which produces the element for the Map. If not present, defaults to the value from the observable sequence.
        * @returns {Observable} An observable sequence with a single value of a Map containing the values from the observable sequence.
        */
        toMap<TKey, TElement>(keySelector: (value: T) => TKey, elementSelector: (value: T) => TElement): Observable<Map<TKey, TElement>>;
    }
}
