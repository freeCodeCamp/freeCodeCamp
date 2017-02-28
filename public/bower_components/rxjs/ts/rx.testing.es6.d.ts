declare module Rx {

    export interface Subscription {
        /**
         * Checks whether the given subscription is equal to the current instance.
         * @param other Subscription object to check for equality.
         * @returns {Boolean} true if both objects are equal; false otherwise.
         */
        equals(other: Subscription): boolean;
        /**
         * Returns a string representation of the current Subscription value.
         * @returns {String} String representation of the current Subscription value.
         */
        toString(): string;
    }

    interface SubscriptionStatic {
        /**
         * Creates a new subscription object with the given virtual subscription and unsubscription time.
         *
         * @constructor
         * @param {Number} subscribe Virtual time at which the subscription occurred.
         * @param {Number} unsubscribe Virtual time at which the unsubscription occurred.
         */
        new (subscribeAt: number, unsubscribeAt?: number): Subscription;
    }

    export var Subscription: SubscriptionStatic;

    export interface Recorded {
        /**
         * Checks whether the given recorded object is equal to the current instance.
         *
         * @param {Recorded} other Recorded object to check for equality.
         * @returns {Boolean} true if both objects are equal; false otherwise.
         */
        equals(other: Recorded): boolean;
        /**
         * Returns a string representation of the current Recorded value.
         *
         * @returns {String} String representation of the current Recorded value.
         */
        toString(): string;
        time: number;
        value: any;
    }

    interface RecordedStatic {
        /**
         * Creates a new object recording the production of the specified value at the given virtual time.
         *
         * @constructor
         * @param {Number} time Virtual time the value was produced on.
         * @param {Mixed} value Value that was produced.
         * @param {Function} comparer An optional comparer.
         */
        new (time: number, value: any, equalityComparer?: _Comparer<any, boolean>): Recorded;
    }

    export var Recorded: RecordedStatic;

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

    export interface MockObserver<T> extends Observer<T> {
        messages: Recorded[];
    }

    interface MockObserverStatic extends ObserverStatic {
        new <T>(scheduler: IScheduler): MockObserver<T>;
    }

    export var MockObserver: MockObserverStatic;


    export interface TestScheduler extends VirtualTimeScheduler<number, number> {
        /**
         * Creates a cold observable using the specified timestamped notification messages either as an array or arguments.
         * @param messages Notifications to surface through the created sequence at their specified virtual time offsets from the sequence subscription time.
         * @return Cold observable sequence that can be used to assert the timing of subscriptions and notifications.
         */
        createColdObservable<T>(...records: Recorded[]): Observable<T>;
        /**
         * Creates a hot observable using the specified timestamped notification messages either as an array or arguments.
         * @param messages Notifications to surface through the created sequence at their specified absolute virtual times.
         * @return Hot observable sequence that can be used to assert the timing of subscriptions and notifications.
         */
        createHotObservable<T>(...records: Recorded[]): Observable<T>;
        /**
         * Creates an observer that records received notification messages and timestamps those.
         * @return Observer that can be used to assert the timing of received notifications.
         */
        createObserver<T>(): MockObserver<T>;

        /**
         * Creates a resolved promise with the given value and ticks
         * @param {Number} ticks The absolute time of the resolution.
         * @param {Any} value The value to yield at the given tick.
         * @returns {MockPromise} A mock Promise which fulfills with the given value.
         */
        createResolvedPromise<T>(ticks: number, value: T): IPromise<T>;
        /**
         * Creates a rejected promise with the given reason and ticks
         * @param {Number} ticks The absolute time of the resolution.
         * @param {Any} reason The reason for rejection to yield at the given tick.
         * @returns {MockPromise} A mock Promise which rejects with the given reason.
         */
        createRejectedPromise<T>(ticks: number, value: T): IPromise<T>;

        /**
         * Starts the test scheduler and uses the specified virtual times to invoke the factory function, subscribe to the resulting sequence, and dispose the subscription.
         *
         * @param create Factory method to create an observable sequence.
         * @param created Virtual time at which to invoke the factory to create an observable sequence.
         * @param subscribed Virtual time at which to subscribe to the created observable sequence.
         * @param disposed Virtual time at which to dispose the subscription.
         * @return Observer with timestamped recordings of notification messages that were received during the virtual time window when the subscription to the source sequence was active.
         */
        startWithTiming<T>(create: () => Observable<T>, createdAt: number, subscribedAt: number, disposedAt: number): MockObserver<T>;
        /**
         * Starts the test scheduler and uses the specified virtual time to dispose the subscription to the sequence obtained through the factory function.
         * Default virtual times are used for factory invocation and sequence subscription.
         *
         * @param create Factory method to create an observable sequence.
         * @param disposed Virtual time at which to dispose the subscription.
         * @return Observer with timestamped recordings of notification messages that were received during the virtual time window when the subscription to the source sequence was active.
         */
        startWithDispose<T>(create: () => Observable<T>, disposedAt: number): MockObserver<T>;
        /**
         * Starts the test scheduler and uses default virtual times to invoke the factory function, to subscribe to the resulting sequence, and to dispose the subscription.
         *
         * @param create Factory method to create an observable sequence.
         * @return Observer with timestamped recordings of notification messages that were received during the virtual time window when the subscription to the source sequence was active.
         */
        startWithCreate<T>(create: () => Observable<T>): MockObserver<T>;
    }

    export var TestScheduler: {
        new (): TestScheduler;
    }

}
declare module "rx.testing" { export = Rx; }
