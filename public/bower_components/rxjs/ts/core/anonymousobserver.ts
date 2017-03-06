/// <reference path="./observer-lite.ts" />
module Rx {
    /**
     * Class to create an Observer instance from delegate-based implementations of the on* methods.
     */
    export interface AnonymousObserver<T> extends Observer<T> {
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

    interface AnonymousObserverStatic {
        /**
         * Creates an observer from the specified OnNext, OnError, and OnCompleted actions.
         * @param {Any} onNext Observer's OnNext action implementation.
         * @param {Any} onError Observer's OnError action implementation.
         * @param {Any} onCompleted Observer's OnCompleted action implementation.
         */
        new <T>(onNext?: (value: T) => void, onError?: (exception: any) => void, onCompleted?: () => void): AnonymousObserver<T>;
    }

    export var AnonymousObserver : AnonymousObserverStatic;
}


(function() {
    var iObserver: Rx.IObserver<number>;
    var anonymousObserver: Rx.AnonymousObserver<number>;

    iObserver = anonymousObserver;
});
