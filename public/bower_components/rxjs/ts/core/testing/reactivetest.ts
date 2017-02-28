/// <reference path="./subscription.ts" />
/// <reference path="./recorded.ts" />

module Rx {
    export var ReactiveTest: {
        /** Default virtual time used for creation of observable sequences in unit tests. */
        created: number;
        /** Default virtual time used to subscribe to observable sequences in unit tests. */
        subscribed: number;
        /** Default virtual time used to dispose subscriptions in unit tests. */
        disposed: number;

        /**
         * Factory method for an OnNext notification record at a given time with a given value or a predicate function.
         *
         * 1 - ReactiveTest.onNext(200, 42);
         * 2 - ReactiveTest.onNext(200, function (x) { return x.length == 2; });
         *
         * @param ticks Recorded virtual time the OnNext notification occurs.
         * @param value Recorded value stored in the OnNext notification or a predicate.
         * @return Recorded OnNext notification.
         */
        onNext(ticks: number, value: any): Recorded;
        /**
         * Factory method for an OnNext notification record at a given time with a given value or a predicate function.
         *
         * 1 - ReactiveTest.onNext(200, 42);
         * 2 - ReactiveTest.onNext(200, function (x) { return x.length == 2; });
         *
         * @param ticks Recorded virtual time the OnNext notification occurs.
         * @param value Recorded value stored in the OnNext notification or a predicate.
         * @return Recorded OnNext notification.
         */
        onNext(ticks: number, predicate: (value: any) => boolean): Recorded;
        /**
         * Factory method for an OnError notification record at a given time with a given error.
         *
         * 1 - ReactiveTest.onNext(200, new Error('error'));
         * 2 - ReactiveTest.onNext(200, function (e) { return e.message === 'error'; });
         *
         * @param ticks Recorded virtual time the OnError notification occurs.
         * @param exception Recorded exception stored in the OnError notification.
         * @return Recorded OnError notification.
         */
        onError(ticks: number, exception: any): Recorded;
        /**
         * Factory method for an OnError notification record at a given time with a given error.
         *
         * 1 - ReactiveTest.onNext(200, new Error('error'));
         * 2 - ReactiveTest.onNext(200, function (e) { return e.message === 'error'; });
         *
         * @param ticks Recorded virtual time the OnError notification occurs.
         * @param exception Recorded exception stored in the OnError notification.
         * @return Recorded OnError notification.
         */
        onError(ticks: number, predicate: (exception: any) => boolean): Recorded;
        /**
         * Factory method for an OnCompleted notification record at a given time.
         *
         * @param ticks Recorded virtual time the OnCompleted notification occurs.
         * @return Recorded OnCompleted notification.
         */
        onCompleted(ticks: number): Recorded;

        /**
         * Factory method for a subscription record based on a given subscription and disposal time.
         *
         * @param start Virtual time indicating when the subscription was created.
         * @param end Virtual time indicating when the subscription was disposed.
         * @return Subscription object.
         */
        subscribe(subscribeAt: number, unsubscribeAt?: number): Subscription;
    }
}

(function() {
    var n : number = Rx.ReactiveTest.created;
    var n : number = Rx.ReactiveTest.subscribed;
    var n : number = Rx.ReactiveTest.disposed;

    var r : Rx.Recorded = Rx.ReactiveTest.onNext(100, 'abc');
    var r : Rx.Recorded = Rx.ReactiveTest.onNext(100, (v: any) => false);
    var r : Rx.Recorded = Rx.ReactiveTest.onError(100, new Error('abc'));
    var r : Rx.Recorded = Rx.ReactiveTest.onError(100, (v: any) => true);
    var r : Rx.Recorded = Rx.ReactiveTest.onCompleted(100);

    var s : Rx.Subscription = Rx.ReactiveTest.subscribe(100);
    var s : Rx.Subscription = Rx.ReactiveTest.subscribe(100, 200);
});
