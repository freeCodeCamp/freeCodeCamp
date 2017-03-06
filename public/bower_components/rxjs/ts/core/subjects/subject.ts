/// <reference path="../observable.ts" />
/// <reference path="../observer-lite.ts" />
/// <reference path="../disposables/disposable.ts"/>

module Rx {
    /**
     *  Represents an object that is both an observable sequence as well as an observer.
     *  Each notification is broadcasted to all subscribed observers.
     */
    export interface ISubject<T> extends IObservable<T>, IObserver<T>, IDisposable {
        hasObservers(): boolean;
    }

    export interface Subject<T> extends Observable<T>, Observer<T>, IDisposable {
        hasObservers(): boolean;
        /** Is this value disposed. */
        isDisposed: boolean;
    }

    interface SubjectStatic {
        /**
         * Creates a subject.
         */
        new <T>(): Subject<T>;

        /**
         * Creates a subject from the specified observer and observable.
         * @param {Observer} observer The observer used to send messages to the subject.
         * @param {Observable} observable The observable used to subscribe to messages sent from the subject.
         * @returns {Subject} Subject implemented using the given observer and observable.
         */
        create<T>(observer?: IObserver<T>, observable?: IObservable<T>): Subject<T>;
    }

    /**
     *  Represents an object that is both an observable sequence as well as an observer.
     *  Each notification is broadcasted to all subscribed observers.
     */
    export var Subject: SubjectStatic;
}

(function() {
    var is: Rx.ISubject<boolean> = new Rx.Subject<boolean>();
    var s : Rx.Subject<boolean> = new Rx.Subject<boolean>();

    is.hasObservers();
    s.hasObservers();

    s.isDisposed;

    var iob : Rx.IObserver<boolean> = s;
    var io : Rx.IObservable<boolean> = s;
    var ob : Rx.Observer<boolean> = s;
    var o : Rx.Observable<boolean> = s;
    var d : Rx.IDisposable = s;

    var ns : Rx.ISubject<boolean> = Rx.Subject.create(iob, io);
    var ns : Rx.ISubject<boolean> = Rx.Subject.create(ob, o);
});
