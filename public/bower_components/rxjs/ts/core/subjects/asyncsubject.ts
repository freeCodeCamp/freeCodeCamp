/// <reference path="./subject.ts" />

module Rx {
    export interface AsyncSubject<T> extends Subject<T> { }

    interface AsyncSubjectStatic {
        /**
         * Creates a subject that can only receive one value and that value is cached for all future observations.
         * @constructor
         */
        new <T>(): AsyncSubject<T>;
    }

    /**
     *  Represents the result of an asynchronous operation.
     *  The last value before the OnCompleted notification, or the error received through OnError, is sent to all subscribed observers.
     */
    export var AsyncSubject: AsyncSubjectStatic;
}

(function() {
    var s : Rx.AsyncSubject<boolean> = new Rx.AsyncSubject<boolean>();
});
