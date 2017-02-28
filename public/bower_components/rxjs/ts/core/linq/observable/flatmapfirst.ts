/// <reference path="../../observable.ts" />
module Rx {
    export interface Observable<T> {
        /**
        *  Projects each element of an observable sequence into a new sequence of observable sequences by incorporating the element's index and then
        *  transforms an observable sequence of observable sequences into an observable sequence which performs a exclusive waiting for the first to finish before subscribing to another observable.
        * @param {Function} selector A transform function to apply to each source element; the second parameter of the function represents the index of the source element.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the transform function on each element of source producing an Observable of Observable sequences
        *  and that at any point in time performs a exclusive waiting for the first to finish before subscribing to another observable.
        */
        selectSwitchFirst<TResult>(selector: _ValueOrSelector<T, ObservableOrPromise<TResult>>): Observable<TResult>;
        /**
        *  Projects each element of an observable sequence into a new sequence of observable sequences by incorporating the element's index and then
        *  transforms an observable sequence of observable sequences into an observable sequence which performs a exclusive waiting for the first to finish before subscribing to another observable.
        * @param {Function} selector A transform function to apply to each source element; the second parameter of the function represents the index of the source element.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the transform function on each element of source producing an Observable of Observable sequences
        *  and that at any point in time performs a exclusive waiting for the first to finish before subscribing to another observable.
        */
        selectSwitchFirst<TResult>(selector: _ValueOrSelector<T, ArrayOrIterable<TResult>>): Observable<TResult>;
        /**
        *  Projects each element of an observable sequence into a new sequence of observable sequences by incorporating the element's index and then
        *  transforms an observable sequence of observable sequences into an observable sequence which performs a exclusive waiting for the first to finish before subscribing to another observable.
        * @param {Function} selector A transform function to apply to each source element; the second parameter of the function represents the index of the source element.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the transform function on each element of source producing an Observable of Observable sequences
        *  and that at any point in time performs a exclusive waiting for the first to finish before subscribing to another observable.
        */
        selectSwitchFirst<TOther, TResult>(selector: _ValueOrSelector<T, ObservableOrPromise<TOther>>, resultSelector: special._FlatMapResultSelector<T, TOther, TResult>, thisArg?: any): Observable<TResult>;
        /**
        *  Projects each element of an observable sequence into a new sequence of observable sequences by incorporating the element's index and then
        *  transforms an observable sequence of observable sequences into an observable sequence which performs a exclusive waiting for the first to finish before subscribing to another observable.
        * @param {Function} selector A transform function to apply to each source element; the second parameter of the function represents the index of the source element.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the transform function on each element of source producing an Observable of Observable sequences
        *  and that at any point in time performs a exclusive waiting for the first to finish before subscribing to another observable.
        */
        selectSwitchFirst<TOther, TResult>(selector: _ValueOrSelector<T, ArrayOrIterable<TOther>>, resultSelector: special._FlatMapResultSelector<T, TOther, TResult>, thisArg?: any): Observable<TResult>;

        /**
        *  Projects each element of an observable sequence into a new sequence of observable sequences by incorporating the element's index and then
        *  transforms an observable sequence of observable sequences into an observable sequence which performs a exclusive waiting for the first to finish before subscribing to another observable.
        * @param {Function} selector A transform function to apply to each source element; the second parameter of the function represents the index of the source element.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the transform function on each element of source producing an Observable of Observable sequences
        *  and that at any point in time performs a exclusive waiting for the first to finish before subscribing to another observable.
        */
        flatMapFirst<TResult>(selector: _ValueOrSelector<T, ObservableOrPromise<TResult>>): Observable<TResult>;

        /**
        *  Projects each element of an observable sequence into a new sequence of observable sequences by incorporating the element's index and then
        *  transforms an observable sequence of observable sequences into an observable sequence which performs a exclusive waiting for the first to finish before subscribing to another observable.
        * @param {Function} selector A transform function to apply to each source element; the second parameter of the function represents the index of the source element.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the transform function on each element of source producing an Observable of Observable sequences
        *  and that at any point in time performs a exclusive waiting for the first to finish before subscribing to another observable.
        */
        flatMapFirst<TResult>(selector: _ValueOrSelector<T, ArrayOrIterable<TResult>>): Observable<TResult>;
        /**
        *  Projects each element of an observable sequence into a new sequence of observable sequences by incorporating the element's index and then
        *  transforms an observable sequence of observable sequences into an observable sequence which performs a exclusive waiting for the first to finish before subscribing to another observable.
        * @param {Function} selector A transform function to apply to each source element; the second parameter of the function represents the index of the source element.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the transform function on each element of source producing an Observable of Observable sequences
        *  and that at any point in time performs a exclusive waiting for the first to finish before subscribing to another observable.
        */
        flatMapFirst<TOther, TResult>(selector: _ValueOrSelector<T, ObservableOrPromise<TOther>>, resultSelector: special._FlatMapResultSelector<T, TOther, TResult>, thisArg?: any): Observable<TResult>;
        /**
        *  Projects each element of an observable sequence into a new sequence of observable sequences by incorporating the element's index and then
        *  transforms an observable sequence of observable sequences into an observable sequence which performs a exclusive waiting for the first to finish before subscribing to another observable.
        * @param {Function} selector A transform function to apply to each source element; the second parameter of the function represents the index of the source element.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the transform function on each element of source producing an Observable of Observable sequences
        *  and that at any point in time performs a exclusive waiting for the first to finish before subscribing to another observable.
        */
        flatMapFirst<TOther, TResult>(selector: _ValueOrSelector<T, ArrayOrIterable<TOther>>, resultSelector: special._FlatMapResultSelector<T, TOther, TResult>, thisArg?: any): Observable<TResult>;
    }
}

(function() {
    var o: Rx.Observable<string>;
    var n: Rx.Observable<number>;
    n = o.flatMapFirst(x => Rx.Observable.from([1, 2, 3]));
    n = o.flatMapFirst(x => Rx.Observable.from([1, 2, 3]).toPromise());
    n = o.flatMapFirst(x => [1, 2, 3]);
    n = o.flatMapFirst(x => Rx.Observable.from([1, 2, 3]), (x, y) => y);
    n = o.flatMapFirst(x => Rx.Observable.from([1, 2, 3]).toPromise(), (x, y) => y);
    n = o.flatMapFirst(x => [1, 2, 3], (x, y) => y);
    n = o.flatMapFirst(Rx.Observable.from([1, 2, 3]));
    n = o.flatMapFirst(Rx.Observable.from([1, 2, 3]).toPromise());
    n = o.flatMapFirst([1, 2, 3]);
    n = o.flatMapFirst(Rx.Observable.from([1, 2, 3]), (x, y) => y);
    n = o.flatMapFirst(Rx.Observable.from([1, 2, 3]).toPromise(), (x, y) => y);
    n = o.flatMapFirst([1, 2, 3], (x, y) => y);

    n = o.selectSwitchFirst(x => Rx.Observable.from([1, 2, 3]));
    n = o.selectSwitchFirst(x => Rx.Observable.from([1, 2, 3]).toPromise());
    n = o.selectSwitchFirst(x => [1, 2, 3]);
    n = o.selectSwitchFirst(x => Rx.Observable.from([1, 2, 3]), (x, y) => y);
    n = o.selectSwitchFirst(x => Rx.Observable.from([1, 2, 3]).toPromise(), (x, y) => y);
    n = o.selectSwitchFirst(x => [1, 2, 3], (x, y) => y);
    n = o.selectSwitchFirst(Rx.Observable.from([1, 2, 3]));
    n = o.selectSwitchFirst(Rx.Observable.from([1, 2, 3]).toPromise());
    n = o.selectSwitchFirst([1, 2, 3]);
    n = o.selectSwitchFirst(Rx.Observable.from([1, 2, 3]), (x, y) => y);
    n = o.selectSwitchFirst(Rx.Observable.from([1, 2, 3]).toPromise(), (x, y) => y);
    n = o.selectSwitchFirst([1, 2, 3], (x, y) => y);
});
