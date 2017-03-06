/// <reference path="../concurrency/virtualtimescheduler.ts" />
/// <reference path="../observable.ts" />
/// <reference path="./recorded.ts" />
/// <reference path="./mockobserver.ts" />
module Rx {

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

(function() {
    var ts : Rx.TestScheduler = new Rx.TestScheduler();

    var o : Rx.Observable<string> = ts.createColdObservable<string>(new Rx.Recorded(100, '5'));
    var o : Rx.Observable<string> = ts.createHotObservable<string>(new Rx.Recorded(100, '5'));
    var ob : Rx.MockObserver<boolean> = ts.createObserver<boolean>();

    var p : Rx.Promise<boolean> = ts.createResolvedPromise<boolean>(100, false);
    var p : Rx.Promise<boolean> = ts.createRejectedPromise<boolean>(100, false);

    var ob = ts.startWithTiming<boolean>(() => Rx.Observable.create<boolean>(<any>null), 100, 200, 300);
    var ob = ts.startWithDispose<boolean>(() => Rx.Observable.create<boolean>(<any>null), 300);
    var ob = ts.startWithCreate<boolean>(() => Rx.Observable.create<boolean>(<any>null));
});
