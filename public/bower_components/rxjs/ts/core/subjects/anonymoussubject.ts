/// <reference path="./subject.ts" />
module Rx {
    export interface AnonymousSubject<T> extends Subject<T> { }

    interface AnonymousSubjectStatic {
        /**
         * Creates a subject that can only receive one value and that value is cached for all future observations.
         * @constructor
         */
        new <T>(): AnonymousSubject<T>;
    }

    /**
     *  Represents the result of an asynchronous operation.
     *  The last value before the OnCompleted notification, or the error received through OnError, is sent to all subscribed observers.
     */
    export var AnonymousSubject: AnonymousSubjectStatic;
}

(function() {
    var s : Rx.AnonymousSubject<boolean> = new Rx.AnonymousSubject<boolean>();
});
