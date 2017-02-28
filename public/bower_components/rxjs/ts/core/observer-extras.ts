/// <reference path="./disposables/disposable.ts" />
/// <reference path="./checkedobserver.ts" />
/// <reference path="./notification.ts" />
module Rx {
	export interface Observer<T> {
        /**
        *  Creates a notification callback from an observer.
        * @returns The action that forwards its input notification to the underlying observer.
        */
		toNotifier(): (notification: Notification<T>) => void;

        /**
        *  Hides the identity of an observer.
        * @returns An observer that hides the identity of the specified observer.
        */
		asObserver(): Observer<T>;

        /**
        *  Checks access to the observer for grammar violations. This includes checking for multiple OnError or OnCompleted calls, as well as reentrancy in any of the observer methods.
        *  If a violation is detected, an Error is thrown from the offending observer method call.
        * @returns An observer that checks callbacks invocations against the observer grammar and, if the checks pass, forwards those to the specified observer.
        */
        checked(): CheckedObserver<T>;

        /**
        * Schedules the invocation of observer methods on the given scheduler.
        * @param {Scheduler} scheduler Scheduler to schedule observer messages on.
        * @returns {Observer} Observer whose messages are scheduled on the given scheduler.
        */
        notifyOn(scheduler: IScheduler): Observer<T>;
	}

	export interface ObserverStatic {
        /**
        *  Creates an observer from a notification callback.
        *
        * @static
        * @memberOf Observer
        * @param {Function} handler Action that handles a notification.
        * @returns The observer object that invokes the specified handler using a notification corresponding to each message it receives.
        */
		fromNotifier<T>(handler: (notification: Notification<T>, thisArg?: any) => void): Observer<T>;
	}
}


(function() {
    var observer: Rx.Observer<boolean>;
    var n: (notification: Rx.Notification<boolean>) => void = observer.toNotifier();

    var o: Rx.Observer<boolean> = observer.asObserver();

    var c: Rx.CheckedObserver<boolean> = observer.checked();

    o = observer.notifyOn(Rx.Scheduler.immediate);

    var so : Rx.Observer<number> = Rx.Observer.fromNotifier<number>((n) => {
        // Handle next calls
        if (n.kind === 'N') {
            console.log('Next: ' + n.value);
        }

        // Handle error calls
        if (n.kind === 'E') {
            console.log('Error: ' + n.exception);
        }

        // Handle completed
        if (n.kind === 'C') {
            console.log('Completed')
        }
    });
});
