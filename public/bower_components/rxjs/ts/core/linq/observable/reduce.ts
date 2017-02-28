/// <reference path="../../observable.ts"/>
module Rx {
    export interface Observable<T> {
        /**
         * Applies an accumulator function over an observable sequence, returning the result of the aggregation as a single element in the result sequence. The specified seed value is used as the initial accumulator value.
         * For aggregation behavior with incremental intermediate results, see Observable.scan.
         * @param {Function} accumulator An accumulator function to be invoked on each element.
         * @param {Any} [seed] The initial accumulator value.
         * @returns {Observable} An observable sequence containing a single element with the final accumulator value.
         */
        reduce<TAcc>(accumulator: _Accumulator<T, TAcc>, seed?: TAcc): Observable<TAcc>;
        /**
         * Applies an accumulator function over an observable sequence, returning the result of the aggregation as a single element in the result sequence. The specified seed value is used as the initial accumulator value.
         * For aggregation behavior with incremental intermediate results, see Observable.scan.
         * @param {Function} accumulator An accumulator function to be invoked on each element.
         * @param {Any} [seed] The initial accumulator value.
         * @returns {Observable} An observable sequence containing a single element with the final accumulator value.
         */
        reduce(accumulator: _Accumulator<T, T>, seed?: T): Observable<T>;
    }
}

(function() {
    var o: Rx.Observable<number>;

    o = o.reduce<number>((a, x) => a * x);
    o = o.reduce((a, x) => a * x, 1);
});
