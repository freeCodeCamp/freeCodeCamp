/// <reference path="../../observable.ts"/>
module Rx {
    export interface Observable<T> {
        /**
        * Projects each notification of an observable sequence to an observable sequence and merges the resulting observable sequences into one observable sequence.
        * @param {Function} onNext A transform function to apply to each element; the second parameter of the function represents the index of the source element.
        * @param {Function} onError A transform function to apply when an error occurs in the source sequence.
        * @param {Function} onCompleted A transform function to apply when the end of the source sequence is reached.
        * @param {Any} [thisArg] An optional "this" to use to invoke each transform.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the one-to-many transform function corresponding to each notification in the input sequence.
        */
        selectManyObserver<T2, T3, T4>(onNext: (value: T, index: number) => Observable<T2>, onError: (exception: any) => Observable<T3>, onCompleted: () => Observable<T4>, thisArg?: any): Observable<T2 | T3 | T4>;
        /**
        * Projects each notification of an observable sequence to an observable sequence and merges the resulting observable sequences into one observable sequence.
        * @param {Function} onNext A transform function to apply to each element; the second parameter of the function represents the index of the source element.
        * @param {Function} onError A transform function to apply when an error occurs in the source sequence.
        * @param {Function} onCompleted A transform function to apply when the end of the source sequence is reached.
        * @param {Any} [thisArg] An optional "this" to use to invoke each transform.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the one-to-many transform function corresponding to each notification in the input sequence.
        */
        flatMapObserver<T2, T3, T4>(onNext: (value: T, index: number) => Observable<T2>, onError: (exception: any) => Observable<T3>, onCompleted: () => Observable<T4>, thisArg?: any): Observable<T2 | T3 | T4>;
    }
}


(function() {
    var os: Rx.Observable<string>;
    var on: Rx.Observable<number>;

    os.flatMapObserver((v, i) => Rx.Observable.just(i), (e) => Rx.Observable.just(e), () => Rx.Observable.empty());
    os.selectManyObserver((v, i) => Rx.Observable.just(i), (e) => Rx.Observable.just(e), () => Rx.Observable.empty());

    os.flatMapObserver((v, i) => Rx.Observable.just(i), (e) => Rx.Observable.just(e), () => Rx.Observable.empty(), {});
    os.selectManyObserver((v, i) => Rx.Observable.just(i), (e) => Rx.Observable.just(e), () => Rx.Observable.empty(), {});
});
