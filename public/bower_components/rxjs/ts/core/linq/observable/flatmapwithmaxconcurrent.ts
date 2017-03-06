/// <reference path="../../observable.ts" />
module Rx {
    export interface Observable<T> {
        /**
        *  One of the Following:
        *  Projects each element of an observable sequence to an observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        * @example
        *  var res = source.flatMapWithMaxConcurrent(5, function (x) { return Rx.Observable.range(0, x); });
        *  Or:
        *  Projects each element of an observable sequence to an observable sequence, invokes the result selector for the source element and each of the corresponding inner sequence's elements, and merges the results into one observable sequence.
        *
        *  var res = source.flatMapWithMaxConcurrent(5, function (x) { return Rx.Observable.range(0, x); }, function (x, y) { return x + y; });
        *  Or:
        *  Projects each element of the source observable sequence to the other observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        *  var res = source.flatMapWithMaxConcurrent(5, Rx.Observable.fromArray([1,2,3]));
        * @param selector A transform function to apply to each element or an observable sequence to project each element from the
        * source sequence onto which could be either an observable or Promise.
        * @param {Function} [resultSelector]  A transform function to apply to each element of the intermediate sequence.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the one-to-many transform function collectionSelector on each element of the input sequence and then mapping each of those sequence elements and their corresponding source element to a result element.
        */
        selectManyWithMaxConcurrent<TResult>(maxConcurrent: number, selector: _ValueOrSelector<T, ObservableOrPromise<TResult>>): Observable<TResult>;
        /**
        *  One of the Following:
        *  Projects each element of an observable sequence to an observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        * @example
        *  var res = source.flatMapWithMaxConcurrent(5, function (x) { return Rx.Observable.range(0, x); });
        *  Or:
        *  Projects each element of an observable sequence to an observable sequence, invokes the result selector for the source element and each of the corresponding inner sequence's elements, and merges the results into one observable sequence.
        *
        *  var res = source.flatMapWithMaxConcurrent(5, function (x) { return Rx.Observable.range(0, x); }, function (x, y) { return x + y; });
        *  Or:
        *  Projects each element of the source observable sequence to the other observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        *  var res = source.flatMapWithMaxConcurrent(5, Rx.Observable.fromArray([1,2,3]));
        * @param selector A transform function to apply to each element or an observable sequence to project each element from the
        * source sequence onto which could be either an observable or Promise.
        * @param {Function} [resultSelector]  A transform function to apply to each element of the intermediate sequence.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the one-to-many transform function collectionSelector on each element of the input sequence and then mapping each of those sequence elements and their corresponding source element to a result element.
        */
        selectManyWithMaxConcurrent<TResult>(maxConcurrent: number, selector: _ValueOrSelector<T, ArrayOrIterable<TResult>>): Observable<TResult>;
        /**
        *  One of the Following:
        *  Projects each element of an observable sequence to an observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        * @example
        *  var res = source.flatMapWithMaxConcurrent(5, function (x) { return Rx.Observable.range(0, x); });
        *  Or:
        *  Projects each element of an observable sequence to an observable sequence, invokes the result selector for the source element and each of the corresponding inner sequence's elements, and merges the results into one observable sequence.
        *
        *  var res = source.flatMapWithMaxConcurrent(5, function (x) { return Rx.Observable.range(0, x); }, function (x, y) { return x + y; });
        *  Or:
        *  Projects each element of the source observable sequence to the other observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        *  var res = source.flatMapWithMaxConcurrent(5, Rx.Observable.fromArray([1,2,3]));
        * @param selector A transform function to apply to each element or an observable sequence to project each element from the
        * source sequence onto which could be either an observable or Promise.
        * @param {Function} [resultSelector]  A transform function to apply to each element of the intermediate sequence.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the one-to-many transform function collectionSelector on each element of the input sequence and then mapping each of those sequence elements and their corresponding source element to a result element.
        */
        selectManyWithMaxConcurrent<TOther, TResult>(maxConcurrent: number, selector: _ValueOrSelector<T, ObservableOrPromise<TOther>>, resultSelector: special._FlatMapResultSelector<T, TOther, TResult>, thisArg?: any): Observable<TResult>;
        /**
        *  One of the Following:
        *  Projects each element of an observable sequence to an observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        * @example
        *  var res = source.flatMapWithMaxConcurrent(5, function (x) { return Rx.Observable.range(0, x); });
        *  Or:
        *  Projects each element of an observable sequence to an observable sequence, invokes the result selector for the source element and each of the corresponding inner sequence's elements, and merges the results into one observable sequence.
        *
        *  var res = source.flatMapWithMaxConcurrent(5, function (x) { return Rx.Observable.range(0, x); }, function (x, y) { return x + y; });
        *  Or:
        *  Projects each element of the source observable sequence to the other observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        *  var res = source.flatMapWithMaxConcurrent(5, Rx.Observable.fromArray([1,2,3]));
        * @param selector A transform function to apply to each element or an observable sequence to project each element from the
        * source sequence onto which could be either an observable or Promise.
        * @param {Function} [resultSelector]  A transform function to apply to each element of the intermediate sequence.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the one-to-many transform function collectionSelector on each element of the input sequence and then mapping each of those sequence elements and their corresponding source element to a result element.
        */
        selectManyWithMaxConcurrent<TOther, TResult>(maxConcurrent: number, selector: _ValueOrSelector<T, ArrayOrIterable<TOther>>, resultSelector: special._FlatMapResultSelector<T, TOther, TResult>, thisArg?: any): Observable<TResult>;

        /**
        *  One of the Following:
        *  Projects each element of an observable sequence to an observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        * @example
        *  var res = source.flatMapWithMaxConcurrent(5, function (x) { return Rx.Observable.range(0, x); });
        *  Or:
        *  Projects each element of an observable sequence to an observable sequence, invokes the result selector for the source element and each of the corresponding inner sequence's elements, and merges the results into one observable sequence.
        *
        *  var res = source.flatMapWithMaxConcurrent(5, function (x) { return Rx.Observable.range(0, x); }, function (x, y) { return x + y; });
        *  Or:
        *  Projects each element of the source observable sequence to the other observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        *  var res = source.flatMapWithMaxConcurrent(5, Rx.Observable.fromArray([1,2,3]));
        * @param selector A transform function to apply to each element or an observable sequence to project each element from the
        * source sequence onto which could be either an observable or Promise.
        * @param {Function} [resultSelector]  A transform function to apply to each element of the intermediate sequence.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the one-to-many transform function collectionSelector on each element of the input sequence and then mapping each of those sequence elements and their corresponding source element to a result element.
        */
        flatMapWithMaxConcurrent<TResult>(maxConcurrent: number, selector: _ValueOrSelector<T, ObservableOrPromise<TResult>>): Observable<TResult>;

        /**
        *  One of the Following:
        *  Projects each element of an observable sequence to an observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        * @example
        *  var res = source.flatMapWithMaxConcurrent(5, function (x) { return Rx.Observable.range(0, x); });
        *  Or:
        *  Projects each element of an observable sequence to an observable sequence, invokes the result selector for the source element and each of the corresponding inner sequence's elements, and merges the results into one observable sequence.
        *
        *  var res = source.flatMapWithMaxConcurrent(5, function (x) { return Rx.Observable.range(0, x); }, function (x, y) { return x + y; });
        *  Or:
        *  Projects each element of the source observable sequence to the other observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        *  var res = source.flatMapWithMaxConcurrent(5, Rx.Observable.fromArray([1,2,3]));
        * @param selector A transform function to apply to each element or an observable sequence to project each element from the
        * source sequence onto which could be either an observable or Promise.
        * @param {Function} [resultSelector]  A transform function to apply to each element of the intermediate sequence.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the one-to-many transform function collectionSelector on each element of the input sequence and then mapping each of those sequence elements and their corresponding source element to a result element.
        */
        flatMapWithMaxConcurrent<TResult>(maxConcurrent: number, selector: _ValueOrSelector<T, ArrayOrIterable<TResult>>): Observable<TResult>;
        /**
        *  One of the Following:
        *  Projects each element of an observable sequence to an observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        * @example
        *  var res = source.flatMapWithMaxConcurrent(5, function (x) { return Rx.Observable.range(0, x); });
        *  Or:
        *  Projects each element of an observable sequence to an observable sequence, invokes the result selector for the source element and each of the corresponding inner sequence's elements, and merges the results into one observable sequence.
        *
        *  var res = source.flatMapWithMaxConcurrent(5, function (x) { return Rx.Observable.range(0, x); }, function (x, y) { return x + y; });
        *  Or:
        *  Projects each element of the source observable sequence to the other observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        *  var res = source.flatMapWithMaxConcurrent(5, Rx.Observable.fromArray([1,2,3]));
        * @param selector A transform function to apply to each element or an observable sequence to project each element from the
        * source sequence onto which could be either an observable or Promise.
        * @param {Function} [resultSelector]  A transform function to apply to each element of the intermediate sequence.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the one-to-many transform function collectionSelector on each element of the input sequence and then mapping each of those sequence elements and their corresponding source element to a result element.
        */
        flatMapWithMaxConcurrent<TOther, TResult>(maxConcurrent: number, selector: _ValueOrSelector<T, ObservableOrPromise<TOther>>, resultSelector: special._FlatMapResultSelector<T, TOther, TResult>, thisArg?: any): Observable<TResult>;
        /**
        *  One of the Following:
        *  Projects each element of an observable sequence to an observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        * @example
        *  var res = source.flatMapWithMaxConcurrent(5, function (x) { return Rx.Observable.range(0, x); });
        *  Or:
        *  Projects each element of an observable sequence to an observable sequence, invokes the result selector for the source element and each of the corresponding inner sequence's elements, and merges the results into one observable sequence.
        *
        *  var res = source.flatMapWithMaxConcurrent(5, function (x) { return Rx.Observable.range(0, x); }, function (x, y) { return x + y; });
        *  Or:
        *  Projects each element of the source observable sequence to the other observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        *  var res = source.flatMapWithMaxConcurrent(5, Rx.Observable.fromArray([1,2,3]));
        * @param selector A transform function to apply to each element or an observable sequence to project each element from the
        * source sequence onto which could be either an observable or Promise.
        * @param {Function} [resultSelector]  A transform function to apply to each element of the intermediate sequence.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the one-to-many transform function collectionSelector on each element of the input sequence and then mapping each of those sequence elements and their corresponding source element to a result element.
        */
        flatMapWithMaxConcurrent<TOther, TResult>(maxConcurrent: number, selector: _ValueOrSelector<T, ArrayOrIterable<TOther>>, resultSelector: special._FlatMapResultSelector<T, TOther, TResult>, thisArg?: any): Observable<TResult>;
    }
}

(function() {
    var o: Rx.Observable<string>;
    var n: Rx.Observable<number>;
    n = o.flatMapWithMaxConcurrent(1, x => Rx.Observable.from([1, 2, 3]));
    n = o.flatMapWithMaxConcurrent(1, x => Rx.Observable.from([1, 2, 3]).toPromise());
    n = o.flatMapWithMaxConcurrent(1, x => [1, 2, 3]);
    n = o.flatMapWithMaxConcurrent(1, x => Rx.Observable.from([1, 2, 3]), (x, y) => y);
    n = o.flatMapWithMaxConcurrent(1, x => Rx.Observable.from([1, 2, 3]).toPromise(), (x, y) => y);
    n = o.flatMapWithMaxConcurrent(1, x => [1, 2, 3], (x, y) => y);
    n = o.flatMapWithMaxConcurrent(1, Rx.Observable.from([1, 2, 3]));
    n = o.flatMapWithMaxConcurrent(1, Rx.Observable.from([1, 2, 3]).toPromise());
    n = o.flatMapWithMaxConcurrent(1, [1, 2, 3]);
    n = o.flatMapWithMaxConcurrent(1, Rx.Observable.from([1, 2, 3]), (x, y) => y);
    n = o.flatMapWithMaxConcurrent(1, Rx.Observable.from([1, 2, 3]).toPromise(), (x, y) => y);
    n = o.flatMapWithMaxConcurrent(1, [1, 2, 3], (x, y) => y);

    n = o.selectManyWithMaxConcurrent(1, x => Rx.Observable.from([1, 2, 3]));
    n = o.selectManyWithMaxConcurrent(1, x => Rx.Observable.from([1, 2, 3]).toPromise());
    n = o.selectManyWithMaxConcurrent(1, x => [1, 2, 3]);
    n = o.selectManyWithMaxConcurrent(1, x => Rx.Observable.from([1, 2, 3]), (x, y) => y);
    n = o.selectManyWithMaxConcurrent(1, x => Rx.Observable.from([1, 2, 3]).toPromise(), (x, y) => y);
    n = o.selectManyWithMaxConcurrent(1, x => [1, 2, 3], (x, y) => y);
    n = o.selectManyWithMaxConcurrent(1, Rx.Observable.from([1, 2, 3]));
    n = o.selectManyWithMaxConcurrent(1, Rx.Observable.from([1, 2, 3]).toPromise());
    n = o.selectManyWithMaxConcurrent(1, [1, 2, 3]);
    n = o.selectManyWithMaxConcurrent(1, Rx.Observable.from([1, 2, 3]), (x, y) => y);
    n = o.selectManyWithMaxConcurrent(1, Rx.Observable.from([1, 2, 3]).toPromise(), (x, y) => y);
    n = o.selectManyWithMaxConcurrent(1, [1, 2, 3], (x, y) => y);
});
