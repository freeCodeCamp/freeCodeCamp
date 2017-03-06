/// <reference path="./disposables/disposable.ts" />
/// <reference path="./observer-lite.ts" />
module Rx {
    export module internals {
        /**
        * Abstract base class for implementations of the Observer class.
        * This base class enforces the grammar of observers where OnError and OnCompleted are terminal messages.
        */
        export interface AbstractObserver<T> extends Rx.IObserver<T>, Rx.IDisposable {
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

            isStopped: boolean;

            /**
            * Disposes the observer, causing it to transition to the stopped state.
            */
            dispose(): void;

            fail(e: any): boolean;

            // Must be implemented by other observers
            next(value: T): void;
            error(error: any): void;
            completed(): void;
        }

        interface AbstractObserverStatic {
            new <T>(): AbstractObserver<T>;
        }

        export var AbstractObserver: AbstractObserverStatic
    }
}

(function() {
    var iObserver: Rx.IObserver<number>;
    var abstractObserver: Rx.internals.AbstractObserver<number>;

    iObserver = abstractObserver;
});
