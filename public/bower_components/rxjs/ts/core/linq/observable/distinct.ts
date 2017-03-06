/// <reference path="../../observable.ts" />
module Rx {
    export interface Observable<T> {
        /**
        *  Returns an observable sequence that contains only distinct elements according to the keySelector and the comparer.
        *  Usage of this operator should be considered carefully due to the maintenance of an internal lookup structure which can grow large.
        *
        * @example
        *  var res = obs = xs.distinct();
        *  2 - obs = xs.distinct(function (x) { return x.id; });
        *  2 - obs = xs.distinct(function (x) { return x.id; }, function (a,b) { return a === b; });
        * @param {Function} [keySelector]  A function to compute the comparison key for each element.
        * @param {Function} [comparer]  Used to compare items in the collection.
        * @returns {Observable} An observable sequence only containing the distinct elements, based on a computed key value, from the source sequence.
        */
        distinct<TKey>(keySelector?: (value: T) => TKey, keySerializer?: (key: TKey) => string): Observable<T>;
    }
}

(function () {
    var o : Rx.Observable<string>;
    o = o.distinct();
    o = o.distinct(x => x.length);
    o = o.distinct(x => x.length, x => x.toString() + '' + x);
});
