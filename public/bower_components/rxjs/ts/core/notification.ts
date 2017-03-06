/// <reference path="./disposables/disposable.ts" />
/// <reference path="./concurrency/scheduler.ts" />
/// <reference path="./observable.ts" />
/// <reference path="./observer-lite.ts" />
module Rx {
    /**
     *  Represents a notification to an observer.
     */
    export interface Notification<T> {
        /**
         * Invokes the delegate corresponding to the notification or the observer's method corresponding to the notification and returns the produced result.
         *
         * @memberOf Notification
         * @param {Any} observerOrOnNext Delegate to invoke for an OnNext notification or Observer to invoke the notification on..
         * @param {Function} onError Delegate to invoke for an OnError notification.
         * @param {Function} onCompleted Delegate to invoke for an OnCompleted notification.
         * @returns {Any} Result produced by the observation.
         */
        accept(observer: IObserver<T>): void;
        /**
         * Invokes the delegate corresponding to the notification or the observer's method corresponding to the notification and returns the produced result.
         *
         * @memberOf Notification
         * @param {Any} observerOrOnNext Delegate to invoke for an OnNext notification or Observer to invoke the notification on..
         * @param {Function} onError Delegate to invoke for an OnError notification.
         * @param {Function} onCompleted Delegate to invoke for an OnCompleted notification.
         * @returns {Any} Result produced by the observation.
         */
        accept<TResult>(onNext: (value: T) => TResult, onError: (exception: any) => TResult, onCompleted: () => TResult): TResult;

        /**
         * Returns an observable sequence with a single notification.
         *
         * @memberOf Notifications
         * @param {Scheduler} [scheduler] Scheduler to send out the notification calls on.
         * @returns {Observable} The observable sequence that surfaces the behavior of the notification upon subscription.
         */
        toObservable(scheduler?: IScheduler): Observable<T>;

        hasValue: boolean;
        equals(other: Notification<T>): boolean;
        kind: string;
        value: T;
        error: any;
    }

    interface NotificationStatic {
        new <T>(kind: any, value: any, exception: any, accept: any, acceptObservable: any, toString: any) : Notification<T>;

        /**
        * Creates an object that represents an OnNext notification to an observer.
        * @param {Any} value The value contained in the notification.
        * @returns {Notification} The OnNext notification containing the value.
        */
        createOnNext<T>(value: T): Notification<T>;
        /**
        * Creates an object that represents an OnError notification to an observer.
        * @param {Any} error The exception contained in the notification.
        * @returns {Notification} The OnError notification containing the exception.
        */
        createOnError<T>(exception: any): Notification<T>;
        /**
        * Creates an object that represents an OnCompleted notification to an observer.
        * @returns {Notification} The OnCompleted notification.
        */
        createOnCompleted<T>(): Notification<T>;
    }

    export var Notification : NotificationStatic;
}


(function() {
    var notification: Rx.Notification<number> = new Rx.Notification<number>(undefined, undefined, undefined, undefined, undefined, undefined);

    var observer: Rx.IObserver<number>;
    notification.accept(observer);
    notification.accept((n) => n.toString(), (e) => e, () => false.toString());

    var observable: Rx.Observable<number> = notification.toObservable();
    var observable: Rx.Observable<number> = notification.toObservable(Rx.Scheduler.currentThread);

    Rx.Notification.createOnNext(() => true);
    Rx.Notification.createOnError(new Error('a'));
    Rx.Notification.createOnCompleted();
});
