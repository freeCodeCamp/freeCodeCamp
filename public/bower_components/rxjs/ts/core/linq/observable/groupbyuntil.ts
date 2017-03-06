/// <reference path="../../observable.ts" />
/// <reference path="../groupedobservable.ts" />
module Rx {
    export interface Observable<T> {
        /**
        *  Groups the elements of an observable sequence according to a specified key selector function.
        *  A duration selector function is used to control the lifetime of groups. When a group expires, it receives an OnCompleted notification. When a new element with the same
        *  key value as a reclaimed group occurs, the group will be reborn with a new lifetime request.
        *
        * @example
        *  var res = observable.groupByUntil(function (x) { return x.id; }, null,  function () { return Rx.Observable.never(); });
        *  2 - observable.groupBy(function (x) { return x.id; }), function (x) { return x.name; },  function () { return Rx.Observable.never(); });
        *  3 - observable.groupBy(function (x) { return x.id; }), function (x) { return x.name; },  function () { return Rx.Observable.never(); }, function (x) { return x.toString(); });
        * @param {Function} keySelector A function to extract the key for each element.
        * @param {Function} durationSelector A function to signal the expiration of a group.
        * @returns {Observable}
        *  A sequence of observable groups, each of which corresponds to a unique key value, containing all elements that share that same key value.
        *  If a group's lifetime expires, a new group with the same key value can be created once an element with such a key value is encoutered.
        *
        */
        groupByUntil<TKey, TDuration>(keySelector: (value: T) => TKey, skipElementSelector: boolean, durationSelector: (group: GroupedObservable<TKey, T>) => Observable<TDuration>, keySerializer?: (key: TKey) => string): Observable<GroupedObservable<TKey, T>>;

        /**
        *  Groups the elements of an observable sequence according to a specified key selector function.
        *  A duration selector function is used to control the lifetime of groups. When a group expires, it receives an OnCompleted notification. When a new element with the same
        *  key value as a reclaimed group occurs, the group will be reborn with a new lifetime request.
        *
        * @example
        *  var res = observable.groupByUntil(function (x) { return x.id; }, null,  function () { return Rx.Observable.never(); });
        *  2 - observable.groupBy(function (x) { return x.id; }), function (x) { return x.name; },  function () { return Rx.Observable.never(); });
        *  3 - observable.groupBy(function (x) { return x.id; }), function (x) { return x.name; },  function () { return Rx.Observable.never(); }, function (x) { return x.toString(); });
        * @param {Function} keySelector A function to extract the key for each element.
        * @param {Function} durationSelector A function to signal the expiration of a group.
        * @returns {Observable}
        *  A sequence of observable groups, each of which corresponds to a unique key value, containing all elements that share that same key value.
        *  If a group's lifetime expires, a new group with the same key value can be created once an element with such a key value is encoutered.
        *
        */
        groupByUntil<TKey, TElement, TDuration>(keySelector: (value: T) => TKey, elementSelector: (value: T) => TElement, durationSelector: (group: GroupedObservable<TKey, TElement>) => Observable<TDuration>, keySerializer?: (key: TKey) => string): Observable<GroupedObservable<TKey, TElement>>;
    }
}
