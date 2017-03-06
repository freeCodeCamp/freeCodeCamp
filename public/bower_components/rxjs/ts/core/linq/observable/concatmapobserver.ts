/// <reference path="../../observable.ts" />
module Rx {
    export interface Observable<T> {
        /**
        * Projects each notification of an observable sequence to an observable sequence and concats the resulting observable sequences into one observable sequence.
        * @param {Function} onNext A transform function to apply to each element; the second parameter of the function represents the index of the source element.
        * @param {Function} onError A transform function to apply when an error occurs in the source sequence.
        * @param {Function} onCompleted A transform function to apply when the end of the source sequence is reached.
        * @param {Any} [thisArg] An optional "this" to use to invoke each transform.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the one-to-many transform function corresponding to each notification in the input sequence.
        */
        concatMapObserver<T, TResult>(onNext: (value: T, i: number) => ObservableOrPromise<TResult>, onError: (error: any) => ObservableOrPromise<any>, onCompleted: () => ObservableOrPromise<any>, thisArg?: any): Observable<TResult>;
        /**
        * Projects each notification of an observable sequence to an observable sequence and concats the resulting observable sequences into one observable sequence.
        * @param {Function} onNext A transform function to apply to each element; the second parameter of the function represents the index of the source element.
        * @param {Function} onError A transform function to apply when an error occurs in the source sequence.
        * @param {Function} onCompleted A transform function to apply when the end of the source sequence is reached.
        * @param {Any} [thisArg] An optional "this" to use to invoke each transform.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the one-to-many transform function corresponding to each notification in the input sequence.
        */
        selectConcatObserver<T, TResult>(onNext: (value: T, i: number) => ObservableOrPromise<TResult>, onError: (error: any) => ObservableOrPromise<any>, onCompleted: () => ObservableOrPromise<any>, thisArg?: any): Observable<TResult>;
    }
}


(function() {
    var os: Rx.Observable<string>;
    var on: Rx.Observable<number>;

    os.concatMapObserver((v, i) => Rx.Observable.just(i), (e) => Rx.Observable.just(e), () => Rx.Observable.empty());
    os.selectConcatObserver((v, i) => Rx.Observable.just(i), (e) => Rx.Observable.just(e), () => Rx.Observable.empty());

    os.concatMapObserver((v, i) => Rx.Observable.just(i), (e) => Rx.Observable.just(e), () => Rx.Observable.empty(), {});
    os.selectConcatObserver((v, i) => Rx.Observable.just(i), (e) => Rx.Observable.just(e), () => Rx.Observable.empty(), {});
});
