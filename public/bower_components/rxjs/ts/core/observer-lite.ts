/// <reference path="./disposables/disposable.ts" />
/// <reference path="./checkedobserver.ts" />
module Rx {
    /**
    * Supports push-style iteration over an observable sequence.
    */
    export interface IObserver<T> {
        /**
        * Notifies the observer of a new element in the sequence.
        * @param {Any} value Next element in the sequence.
        */
        onNext(value: T): void;
        /**
        * Notifies the observer that an exception has occurred.
        * @param {Any} error The error that has occurred.
        */
        onError(exception: any): void;
        /**
        * Notifies the observer of the end of the sequence.
        */
        onCompleted(): void;
    }
    
    export interface Observer<T> {
        /**
        * Notifies the observer of a new element in the sequence.
        * @param {Any} value Next element in the sequence.
        */
        onNext(value: T): void;
        /**
        * Notifies the observer that an exception has occurred.
        * @param {Any} error The error that has occurred.
        */
        onError(exception: any): void;
        /**
        * Notifies the observer of the end of the sequence.
        */
        onCompleted(): void;
    }

    export interface ObserverStatic {
        /**
        *  Creates an observer from the specified OnNext, along with optional OnError, and OnCompleted actions.
        * @param {Function} [onNext] Observer's OnNext action implementation.
        * @param {Function} [onError] Observer's OnError action implementation.
        * @param {Function} [onCompleted] Observer's OnCompleted action implementation.
        * @returns {Observer} The observer object implemented using the given actions.
        */
        create<T>(onNext?: (value: T) => void, onError?: (exception: any) => void, onCompleted?: () => void): Observer<T>;
    }

    /**
    * Supports push-style iteration over an observable sequence.
    */
    export var Observer: ObserverStatic;
}


(function() {
    var iobserver: Rx.IObserver<boolean>;
    var observer: Rx.Observer<boolean>;

    iobserver.onNext(false);
    iobserver.onError(new Error('a'));
    iobserver.onCompleted();

    observer.onNext(false);
    observer.onError(new Error('a'));
    observer.onCompleted();

    var so: Rx.Observer<number> = Rx.Observer.create((v) => 1);
    so = Rx.Observer.create((v) => 1, (e) => { });
    so = Rx.Observer.create((v) => 1, (e) => { }, () => { });
});
