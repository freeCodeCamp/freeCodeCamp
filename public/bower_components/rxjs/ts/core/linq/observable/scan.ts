/// <reference path="../../observable.ts"/>
module Rx {
    export interface Observable<T> {
        /**
        *  Applies an accumulator function over an observable sequence and returns each intermediate result. The optional seed value is used as the initial accumulator value.
        *  For aggregation behavior with no intermediate results, see Observable.aggregate.
        * @example
        *  var res = source.scan(function (acc, x) { return acc + x; });
        *  var res = source.scan(function (acc, x) { return acc + x; }, 0);
        * @param {Function} accumulator An accumulator function to be invoked on each element.
        * @param {Mixed} [seed] The initial accumulator value.
        * @returns {Observable} An observable sequence containing the accumulated values.
        */
        scan<TAcc>(accumulator: _Accumulator<T, TAcc>, seed?: TAcc): Observable<TAcc>;
        /**
        *  Applies an accumulator function over an observable sequence and returns each intermediate result. The optional seed value is used as the initial accumulator value.
        *  For aggregation behavior with no intermediate results, see Observable.aggregate.
        * @example
        *  var res = source.scan(function (acc, x) { return acc + x; });
        *  var res = source.scan(function (acc, x) { return acc + x; }, 0);
        * @param {Function} accumulator An accumulator function to be invoked on each element.
        * @param {Mixed} [seed] The initial accumulator value.
        * @returns {Observable} An observable sequence containing the accumulated values.
        */
        scan(accumulator: _Accumulator<T, T>, seed?: T): Observable<T>;
    }
}


(function() {
    var o: Rx.Observable<number>;

    o = o.scan<number>((a, x) => a * x);
    o = o.scan((a, x) => a * x, 1);
});
