/// <reference path="./subject.ts" />

module Rx {
    export interface BehaviorSubject<T> extends Subject<T> {
        /**
         * Gets the current value or throws an exception.
         * Value is frozen after onCompleted is called.
         * After onError is called always throws the specified exception.
         * An exception is always thrown after dispose is called.
         * @returns {Mixed} The initial value passed to the constructor until onNext is called; after which, the last value passed to onNext.
         */
        getValue(): T;
    }

    interface BehaviorSubjectStatic {
        /**
         *  Initializes a new instance of the BehaviorSubject class which creates a subject that caches its last value and starts with the specified value.
         *  @param {Mixed} value Initial value sent to observers when no other value has been received by the subject yet.
         */
        new <T>(initialValue: T): BehaviorSubject<T>;
    }

    /**
     *  Represents a value that changes over time.
     *  Observers can subscribe to the subject to receive the last (or initial) value and all subsequent notifications.
     */
    export var BehaviorSubject: BehaviorSubjectStatic;
}

(function() {
    var s : Rx.BehaviorSubject<boolean> = new Rx.BehaviorSubject(false);
    var b : boolean = s.getValue();
});
