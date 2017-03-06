/// <reference path="./groupbyuntil.ts" />
module Rx {
    export interface Observable<T> {
        /**
         *  Groups the elements of an observable sequence according to a specified key selector function and comparer and selects the resulting elements by using a specified function.
         *
         * @example
         *  var res = observable.groupBy(function (x) { return x.id; });
         *  2 - observable.groupBy(function (x) { return x.id; }), function (x) { return x.name; });
         *  3 - observable.groupBy(function (x) { return x.id; }), function (x) { return x.name; }, function (x) { return x.toString(); });
         * @param {Function} keySelector A function to extract the key for each element.
         * @param {Function} [elementSelector]  A function to map each source element to an element in an observable group.
         * @returns {Observable} A sequence of observable groups, each of which corresponds to a unique key value, containing all elements that share that same key value.
         */
        groupBy<TKey, TElement>(keySelector: (value: T) => TKey, skipElementSelector?: boolean, keySerializer?: (key: TKey) => string): Observable<GroupedObservable<TKey, T>>;
        /**
         *  Groups the elements of an observable sequence according to a specified key selector function and comparer and selects the resulting elements by using a specified function.
         *
         * @example
         *  var res = observable.groupBy(function (x) { return x.id; });
         *  2 - observable.groupBy(function (x) { return x.id; }), function (x) { return x.name; });
         *  3 - observable.groupBy(function (x) { return x.id; }), function (x) { return x.name; }, function (x) { return x.toString(); });
         * @param {Function} keySelector A function to extract the key for each element.
         * @param {Function} [elementSelector]  A function to map each source element to an element in an observable group.
         * @returns {Observable} A sequence of observable groups, each of which corresponds to a unique key value, containing all elements that share that same key value.
         */
        groupBy<TKey, TElement>(keySelector: (value: T) => TKey, elementSelector: (value: T) => TElement, keySerializer?: (key: TKey) => string): Observable<GroupedObservable<TKey, TElement>>;
    }
}
