/// <reference path="../../observable.ts" />
module Rx {
    export interface Observable<T> {
        /**
        *  Projects each element of an observable sequence into a new sequence of observable sequences by incorporating the element's index and then
        *  transforms an observable sequence of observable sequences into an observable sequence producing values only from the most recent observable sequence.
        * @param {Function} selector A transform function to apply to each source element; the second parameter of the function represents the index of the source element.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the transform function on each element of source producing an Observable of Observable sequences
        *  and that at any point in time produces the elements of the most recent inner observable sequence that has been received.
        */
        selectSwitch<TResult>(selector: _ValueOrSelector<T, ObservableOrPromise<TResult>>): Observable<TResult>;
        /**
        *  Projects each element of an observable sequence into a new sequence of observable sequences by incorporating the element's index and then
        *  transforms an observable sequence of observable sequences into an observable sequence producing values only from the most recent observable sequence.
        * @param {Function} selector A transform function to apply to each source element; the second parameter of the function represents the index of the source element.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the transform function on each element of source producing an Observable of Observable sequences
        *  and that at any point in time produces the elements of the most recent inner observable sequence that has been received.
        */
        selectSwitch<TResult>(selector: _ValueOrSelector<T, ArrayOrIterable<TResult>>): Observable<TResult>;
        /**
        *  Projects each element of an observable sequence into a new sequence of observable sequences by incorporating the element's index and then
        *  transforms an observable sequence of observable sequences into an observable sequence producing values only from the most recent observable sequence.
        * @param {Function} selector A transform function to apply to each source element; the second parameter of the function represents the index of the source element.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the transform function on each element of source producing an Observable of Observable sequences
        *  and that at any point in time produces the elements of the most recent inner observable sequence that has been received.
        */
        selectSwitch<TOther, TResult>(selector: _ValueOrSelector<T, ObservableOrPromise<TOther>>, resultSelector: special._FlatMapResultSelector<T, TOther, TResult>, thisArg?: any): Observable<TResult>;
        /**
        *  Projects each element of an observable sequence into a new sequence of observable sequences by incorporating the element's index and then
        *  transforms an observable sequence of observable sequences into an observable sequence producing values only from the most recent observable sequence.
        * @param {Function} selector A transform function to apply to each source element; the second parameter of the function represents the index of the source element.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the transform function on each element of source producing an Observable of Observable sequences
        *  and that at any point in time produces the elements of the most recent inner observable sequence that has been received.
        */
        selectSwitch<TOther, TResult>(selector: _ValueOrSelector<T, ArrayOrIterable<TOther>>, resultSelector: special._FlatMapResultSelector<T, TOther, TResult>, thisArg?: any): Observable<TResult>;
        /**
        *  Projects each element of an observable sequence into a new sequence of observable sequences by incorporating the element's index and then
        *  transforms an observable sequence of observable sequences into an observable sequence producing values only from the most recent observable sequence.
        * @param {Function} selector A transform function to apply to each source element; the second parameter of the function represents the index of the source element.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the transform function on each element of source producing an Observable of Observable sequences
        *  and that at any point in time produces the elements of the most recent inner observable sequence that has been received.
        */
        flatMapLatest<TResult>(selector: _ValueOrSelector<T, ObservableOrPromise<TResult>>): Observable<TResult>;
        /**
        *  Projects each element of an observable sequence into a new sequence of observable sequences by incorporating the element's index and then
        *  transforms an observable sequence of observable sequences into an observable sequence producing values only from the most recent observable sequence.
        * @param {Function} selector A transform function to apply to each source element; the second parameter of the function represents the index of the source element.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the transform function on each element of source producing an Observable of Observable sequences
        *  and that at any point in time produces the elements of the most recent inner observable sequence that has been received.
        */
        flatMapLatest<TResult>(selector: _ValueOrSelector<T, ArrayOrIterable<TResult>>): Observable<TResult>;
        /**
        *  Projects each element of an observable sequence into a new sequence of observable sequences by incorporating the element's index and then
        *  transforms an observable sequence of observable sequences into an observable sequence producing values only from the most recent observable sequence.
        * @param {Function} selector A transform function to apply to each source element; the second parameter of the function represents the index of the source element.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the transform function on each element of source producing an Observable of Observable sequences
        *  and that at any point in time produces the elements of the most recent inner observable sequence that has been received.
        */
        flatMapLatest<TOther, TResult>(selector: _ValueOrSelector<T, ObservableOrPromise<TOther>>, resultSelector: special._FlatMapResultSelector<T, TOther, TResult>, thisArg?: any): Observable<TResult>;
        /**
        *  Projects each element of an observable sequence into a new sequence of observable sequences by incorporating the element's index and then
        *  transforms an observable sequence of observable sequences into an observable sequence producing values only from the most recent observable sequence.
        * @param {Function} selector A transform function to apply to each source element; the second parameter of the function represents the index of the source element.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the transform function on each element of source producing an Observable of Observable sequences
        *  and that at any point in time produces the elements of the most recent inner observable sequence that has been received.
        */
        flatMapLatest<TOther, TResult>(selector: _ValueOrSelector<T, ArrayOrIterable<TOther>>, resultSelector: special._FlatMapResultSelector<T, TOther, TResult>, thisArg?: any): Observable<TResult>;
    }
}


(function() {
    var o: Rx.Observable<string>;
    var n: Rx.Observable<number>;
    n = o.flatMapLatest(x => Rx.Observable.from([1, 2, 3]));
    n = o.flatMapLatest(x => Rx.Observable.from([1, 2, 3]).toPromise());
    n = o.flatMapLatest(x => [1, 2, 3]);
    n = o.flatMapLatest(x => Rx.Observable.from([1, 2, 3]), (x, y) => y);
    n = o.flatMapLatest(x => Rx.Observable.from([1, 2, 3]).toPromise(), (x, y) => y);
    n = o.flatMapLatest(x => [1, 2, 3], (x, y) => y);
    n = o.flatMapLatest(Rx.Observable.from([1, 2, 3]));
    n = o.flatMapLatest(Rx.Observable.from([1, 2, 3]).toPromise());
    n = o.flatMapLatest([1, 2, 3]);
    n = o.flatMapLatest(Rx.Observable.from([1, 2, 3]), (x, y) => y);
    n = o.flatMapLatest(Rx.Observable.from([1, 2, 3]).toPromise(), (x, y) => y);
    n = o.flatMapLatest([1, 2, 3], (x, y) => y);

    n = o.selectSwitch(x => Rx.Observable.from([1, 2, 3]));
    n = o.selectSwitch(x => Rx.Observable.from([1, 2, 3]).toPromise());
    n = o.selectSwitch(x => [1, 2, 3]);
    n = o.selectSwitch(x => Rx.Observable.from([1, 2, 3]), (x, y) => y);
    n = o.selectSwitch(x => Rx.Observable.from([1, 2, 3]).toPromise(), (x, y) => y);
    n = o.selectSwitch(x => [1, 2, 3], (x, y) => y);
    n = o.selectSwitch(Rx.Observable.from([1, 2, 3]));
    n = o.selectSwitch(Rx.Observable.from([1, 2, 3]).toPromise());
    n = o.selectSwitch([1, 2, 3]);
    n = o.selectSwitch(Rx.Observable.from([1, 2, 3]), (x, y) => y);
    n = o.selectSwitch(Rx.Observable.from([1, 2, 3]).toPromise(), (x, y) => y);
    n = o.selectSwitch([1, 2, 3], (x, y) => y);
});
