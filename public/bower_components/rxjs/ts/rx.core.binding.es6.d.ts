declare module Rx {

        export interface ConnectableObservable<T> extends Observable<T> {
    		connect(): IDisposable;
    		refCount(): Observable<T>;
        }

    export interface Observable<T> {
        /**
        * Multicasts the source sequence notifications through an instantiated subject into all uses of the sequence within a selector function. Each
        * subscription to the resulting sequence causes a separate multicast invocation, exposing the sequence resulting from the selector function's
        * invocation. For specializations with fixed subject types, see Publish, PublishLast, and Replay.
        *
        * @example
        * 1 - res = source.multicast(observable);
        * 2 - res = source.multicast(function () { return new Subject(); }, function (x) { return x; });
        *
        * @param {Function|Subject} subjectOrSubjectSelector
        * Factory function to create an intermediate subject through which the source sequence's elements will be multicast to the selector function.
        * Or:
        * Subject to push source elements into.
        *
        * @param {Function} [selector] Optional selector function which can use the multicasted source sequence subject to the policies enforced by the created subject. Specified only if <paramref name="subjectOrSubjectSelector" is a factory function.
        * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence within a selector function.
        */
        multicast(subject: ISubject<T> | (() => ISubject<T>)): ConnectableObservable<T>;
        /**
        * Multicasts the source sequence notifications through an instantiated subject into all uses of the sequence within a selector function. Each
        * subscription to the resulting sequence causes a separate multicast invocation, exposing the sequence resulting from the selector function's
        * invocation. For specializations with fixed subject types, see Publish, PublishLast, and Replay.
        *
        * @example
        * 1 - res = source.multicast(observable);
        * 2 - res = source.multicast(function () { return new Subject(); }, function (x) { return x; });
        *
        * @param {Function|Subject} subjectOrSubjectSelector
        * Factory function to create an intermediate subject through which the source sequence's elements will be multicast to the selector function.
        * Or:
        * Subject to push source elements into.
        *
        * @param {Function} [selector] Optional selector function which can use the multicasted source sequence subject to the policies enforced by the created subject. Specified only if <paramref name="subjectOrSubjectSelector" is a factory function.
        * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence within a selector function.
        */
        multicast<TResult>(subjectSelector: ISubject<T> | (() => ISubject<T>), selector: (source: ConnectableObservable<T>) => Observable<T>): Observable<T>;
    }

    export interface Observable<T> {
        /**
        * Returns an observable sequence that is the result of invoking the selector on a connectable observable sequence that shares a single subscription to the underlying sequence.
        * This operator is a specialization of Multicast using a regular Subject.
        *
        * @example
        * var resres = source.publish();
        * var res = source.publish(function (x) { return x; });
        *
        * @param {Function} [selector] Selector function which can use the multicasted source sequence as many times as needed, without causing multiple subscriptions to the source sequence. Subscribers to the given source will receive all notifications of the source from the time of the subscription on.
        * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence within a selector function.
        */
        publish(): ConnectableObservable<T>;
        /**
        * Returns an observable sequence that is the result of invoking the selector on a connectable observable sequence that shares a single subscription to the underlying sequence.
        * This operator is a specialization of Multicast using a regular Subject.
        *
        * @example
        * var resres = source.publish();
        * var res = source.publish(function (x) { return x; });
        *
        * @param {Function} [selector] Selector function which can use the multicasted source sequence as many times as needed, without causing multiple subscriptions to the source sequence. Subscribers to the given source will receive all notifications of the source from the time of the subscription on.
        * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence within a selector function.
        */
        publish<TResult>(selector: (source: ConnectableObservable<T>) => Observable<TResult>): Observable<TResult>;
    }

    export interface Observable<T> {
        /**
        * Returns an observable sequence that shares a single subscription to the underlying sequence.
        * This operator is a specialization of publish which creates a subscription when the number of observers goes from zero to one, then shares that subscription with all subsequent observers until the number of observers returns to zero, at which point the subscription is disposed.
        * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence.
        */
        share(): Observable<T>;
    }

    export interface Observable<T> {
        /**
        * Returns an observable sequence that is the result of invoking the selector on a connectable observable sequence that shares a single subscription to the underlying sequence containing only the last notification.
        * This operator is a specialization of Multicast using a AsyncSubject.
        *
        * @example
        * var res = source.publishLast();
        * var res = source.publishLast(function (x) { return x; });
        *
        * @param selector [Optional] Selector function which can use the multicasted source sequence as many times as needed, without causing multiple subscriptions to the source sequence. Subscribers to the given source will only receive the last notification of the source.
        * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence within a selector function.
        */
        publishLast(): ConnectableObservable<T>;
        /**
        * Returns an observable sequence that is the result of invoking the selector on a connectable observable sequence that shares a single subscription to the underlying sequence containing only the last notification.
        * This operator is a specialization of Multicast using a AsyncSubject.
        *
        * @example
        * var res = source.publishLast();
        * var res = source.publishLast(function (x) { return x; });
        *
        * @param selector [Optional] Selector function which can use the multicasted source sequence as many times as needed, without causing multiple subscriptions to the source sequence. Subscribers to the given source will only receive the last notification of the source.
        * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence within a selector function.
        */
        publishLast<TResult>(selector: (source: ConnectableObservable<T>) => Observable<TResult>): Observable<TResult>;
    }

    export interface Observable<T> {
        /**
        * Returns an observable sequence that is the result of invoking the selector on a connectable observable sequence that shares a single subscription to the underlying sequence and starts with initialValue.
        * This operator is a specialization of Multicast using a BehaviorSubject.
        *
        * @example
        * var res = source.publishValue(42);
        * var res = source.publishValue(function (x) { return x.select(function (y) { return y * y; }) }, 42);
        *
        * @param {Function} [selector] Optional selector function which can use the multicasted source sequence as many times as needed, without causing multiple subscriptions to the source sequence. Subscribers to the given source will receive immediately receive the initial value, followed by all notifications of the source from the time of the subscription on.
        * @param {Mixed} initialValue Initial value received by observers upon subscription.
        * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence within a selector function.
        */
        publishValue(initialValue: T): ConnectableObservable<T>;
        /**
        * Returns an observable sequence that is the result of invoking the selector on a connectable observable sequence that shares a single subscription to the underlying sequence and starts with initialValue.
        * This operator is a specialization of Multicast using a BehaviorSubject.
        *
        * @example
        * var res = source.publishValue(42);
        * var res = source.publishValue(function (x) { return x.select(function (y) { return y * y; }) }, 42);
        *
        * @param {Function} [selector] Optional selector function which can use the multicasted source sequence as many times as needed, without causing multiple subscriptions to the source sequence. Subscribers to the given source will receive immediately receive the initial value, followed by all notifications of the source from the time of the subscription on.
        * @param {Mixed} initialValue Initial value received by observers upon subscription.
        * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence within a selector function.
        */
        publishValue<TResult>(selector: (source: ConnectableObservable<T>) => Observable<TResult>, initialValue: T): Observable<TResult>;
    }

    export interface Observable<T> {
        /**
        * Returns an observable sequence that shares a single subscription to the underlying sequence and starts with an initialValue.
        * This operator is a specialization of publishValue which creates a subscription when the number of observers goes from zero to one, then shares that subscription with all subsequent observers until the number of observers returns to zero, at which point the subscription is disposed.
        * @param {Mixed} initialValue Initial value received by observers upon subscription.
        * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence.
        */
        shareValue(initialValue: T): Observable<T>;
    }

    export interface Observable<T> {
        /**
        * Returns an observable sequence that is the result of invoking the selector on a connectable observable sequence that shares a single subscription to the underlying sequence replaying notifications subject to a maximum time length for the replay buffer.
        * This operator is a specialization of Multicast using a ReplaySubject.
        *
        * @example
        * var res = source.replay(null, 3);
        * var res = source.replay(null, 3, 500);
        * var res = source.replay(null, 3, 500, scheduler);
        * var res = source.replay(function (x) { return x.take(6).repeat(); }, 3, 500, scheduler);
        *
        * @param selector [Optional] Selector function which can use the multicasted source sequence as many times as needed, without causing multiple subscriptions to the source sequence. Subscribers to the given source will receive all the notifications of the source subject to the specified replay buffer trimming policy.
        * @param bufferSize [Optional] Maximum element count of the replay buffer.
        * @param windowSize [Optional] Maximum time length of the replay buffer.
        * @param scheduler [Optional] Scheduler where connected observers within the selector function will be invoked on.
        * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence within a selector function.
        */
        replay(selector?: void, bufferSize?: number, window?: number, scheduler?: IScheduler): ConnectableObservable<T>;	// hack to catch first omitted parameter
        /**
        * Returns an observable sequence that is the result of invoking the selector on a connectable observable sequence that shares a single subscription to the underlying sequence replaying notifications subject to a maximum time length for the replay buffer.
        * This operator is a specialization of Multicast using a ReplaySubject.
        *
        * @example
        * var res = source.replay(null, 3);
        * var res = source.replay(null, 3, 500);
        * var res = source.replay(null, 3, 500, scheduler);
        * var res = source.replay(function (x) { return x.take(6).repeat(); }, 3, 500, scheduler);
        *
        * @param selector [Optional] Selector function which can use the multicasted source sequence as many times as needed, without causing multiple subscriptions to the source sequence. Subscribers to the given source will receive all the notifications of the source subject to the specified replay buffer trimming policy.
        * @param bufferSize [Optional] Maximum element count of the replay buffer.
        * @param windowSize [Optional] Maximum time length of the replay buffer.
        * @param scheduler [Optional] Scheduler where connected observers within the selector function will be invoked on.
        * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence within a selector function.
        */
        replay(selector: (source: ConnectableObservable<T>) => Observable<T>, bufferSize?: number, window?: number, scheduler?: IScheduler): Observable<T>;
    }

    export interface Observable<T> {
        /**
        * Returns an observable sequence that shares a single subscription to the underlying sequence replaying notifications subject to a maximum time length for the replay buffer.
        * This operator is a specialization of replay which creates a subscription when the number of observers goes from zero to one, then shares that subscription with all subsequent observers until the number of observers returns to zero, at which point the subscription is disposed.
        *
        * @example
        * var res = source.shareReplay(3);
        * var res = source.shareReplay(3, 500);
        * var res = source.shareReplay(3, 500, scheduler);
        *

        * @param bufferSize [Optional] Maximum element count of the replay buffer.
        * @param window [Optional] Maximum time length of the replay buffer.
        * @param scheduler [Optional] Scheduler where connected observers within the selector function will be invoked on.
        * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence.
        */
        shareReplay(bufferSize?: number, window?: number, scheduler?: IScheduler): Observable<T>;
    }

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

    export interface ReplaySubject<T> extends Subject<T> { }

    interface ReplaySubjectStatic {
        /**
         *  Initializes a new instance of the ReplaySubject class with the specified buffer size, window size and scheduler.
         *  @param {Number} [bufferSize] Maximum element count of the replay buffer.
         *  @param {Number} [windowSize] Maximum time length of the replay buffer.
         *  @param {Scheduler} [scheduler] Scheduler the observers are invoked on.
         */
        new <T>(bufferSize?: number, window?: number, scheduler?: IScheduler): ReplaySubject<T>;
    }

    /**
    * Represents an object that is both an observable sequence as well as an observer.
    * Each notification is broadcasted to all subscribed and future observers, subject to buffer trimming policies.
    */
    export var ReplaySubject: ReplaySubjectStatic;

}
declare module "rx.core.binding" { export = Rx; }
