declare module Rx {

    // Type alias for observables and promises
    export type ObservableOrPromise<T> = IObservable<T> | Observable<T> | Promise<T>;

    export type ArrayLike<T> = Array<T> | { length: number;[index: number]: T; };

    // Type alias for arrays and array like objects
    export type ArrayOrIterable<T> = ArrayLike<T>;

    /**
     * Promise A+
     */
    export interface Promise<T> {
        then<R>(onFulfilled: (value: T) => R|Promise<R>, onRejected: (error: any) => Promise<R>): Promise<R>;
        then<R>(onFulfilled: (value: T) => R|Promise<R>, onRejected?: (error: any) => R): Promise<R>;
    }

    /**
     * Promise A+
     */
    export interface IPromise<T> extends Promise<T> { }

    /**
    * Represents a push-style collection.
    */
    export interface IObservable<T> { }

    /**
    * Represents a push-style collection.
    */
    export interface Observable<T> extends IObservable<T> { }

    export module internals {
        export interface EmptyError extends Error { message: string; }
        export interface EmptyErrorStatic { new (): EmptyError; }

        export interface ObjectDisposedError extends Error { message: string; }
        export interface ObjectDisposedErrorStatic { new (): ObjectDisposedError; }

        export interface ArgumentOutOfRangeError extends Error { message: string; }
        export interface ArgumentOutOfRangeErrorStatic { new (): ArgumentOutOfRangeError; }

        export interface NotSupportedError extends Error { message: string; }
        export interface NotSupportedErrorStatic { new (): NotSupportedError; }

        export interface NotImplementedError extends Error { message: string; }
        export interface NotImplementedErrorStatic { new (): NotImplementedError; }
    }

    export module helpers {
        export var notImplemented: () => internals.NotImplementedError;
        export var notSupported: () => internals.NotSupportedError;
    }

    export module internals {
        export var bindCallback: (func: Function, thisArg: any, argCount: number) => Function;
    }

    export module internals {
        export var isEqual : (left: any, right: any) => boolean;
    }

    export interface IDisposable {
        dispose(): void;
    }

    export interface Disposable extends IDisposable {
        /** Is this value disposed. */
        isDisposed?: boolean;
    }

    interface DisposableStatic {
        /**
         * Provides a set of static methods for creating Disposables.
         * @param {Function} dispose Action to run during the first call to dispose. The action is guaranteed to be run at most once.
         */
        new (action: () => void): Disposable;

        /**
         * Creates a disposable object that invokes the specified action when disposed.
         * @param {Function} dispose Action to run during the first call to dispose. The action is guaranteed to be run at most once.
         * @return {Disposable} The disposable object that runs the given action upon disposal.
         */
        create(action: () => void): Disposable;

        /**
         * Gets the disposable that does nothing when disposed.
         */
        empty: IDisposable;

        /**
         * Validates whether the given object is a disposable
         * @param {Object} Object to test whether it has a dispose method
         * @returns {Boolean} true if a disposable object, else false.
         */
        isDisposable(d: any): boolean;
    }

    /**
     * Provides a set of static methods for creating Disposables.
     * @param {Function} dispose Action to run during the first call to dispose. The action is guaranteed to be run at most once.
     */
    export var Disposable: DisposableStatic;

    export module config {
        export var Promise: { new <T>(resolver: (resolvePromise: (value: T) => void, rejectPromise: (reason: any) => void) => void): IPromise<T>; };
    }

    export module helpers {
        export var noop: () => void;
        export var notDefined: (value: any) => boolean;
        export var identity: <T>(value: T) => T;
        export var defaultNow: () => number;
        export var defaultComparer: (left: any, right: any) =>  boolean;
        export var defaultSubComparer: (left: any, right: any) =>  number;
        export var defaultKeySerializer: (key: any) =>  string;
        export var defaultError: (err: any) =>  void;
        export var isPromise: (p: any) =>  boolean;
        export var asArray: <T>(...args: T[]) =>  T[];
        export var not: (value: any) =>  boolean;
        export var isFunction: (value: any) =>  boolean;
    }

    export type _Selector<T, TResult> = (value: T, index: number, observable: Observable<T>) => TResult;
    export type _ValueOrSelector<T, TResult> = TResult | _Selector<T, TResult>;
    export type _Predicate<T> = _Selector<T, boolean>;
    export type _Comparer<T, TResult> = (value1: T, value2: T) => TResult;
    export type _Accumulator<T, TAcc> = (acc: TAcc, value: T) => TAcc;

    export module special {
        export type _FlatMapResultSelector<T1, T2, TResult> = (value: T1, selectorValue: T2, index: number, selectorOther: number) => TResult;
    }

    export interface IObservable<T> {
        /**
        *  Subscribes an o to the observable sequence.
        *  @param {Mixed} [oOrOnNext] The object that is to receive notifications or an action to invoke for each element in the observable sequence.
        *  @param {Function} [onError] Action to invoke upon exceptional termination of the observable sequence.
        *  @param {Function} [onCompleted] Action to invoke upon graceful termination of the observable sequence.
        *  @returns {Diposable} A disposable handling the subscriptions and unsubscriptions.
        */
        subscribe(observer: IObserver<T>): IDisposable;
        /**
        *  Subscribes an o to the observable sequence.
        *  @param {Mixed} [oOrOnNext] The object that is to receive notifications or an action to invoke for each element in the observable sequence.
        *  @param {Function} [onError] Action to invoke upon exceptional termination of the observable sequence.
        *  @param {Function} [onCompleted] Action to invoke upon graceful termination of the observable sequence.
        *  @returns {Diposable} A disposable handling the subscriptions and unsubscriptions.
        */
        subscribe(onNext?: (value: T) => void, onError?: (exception: any) => void, onCompleted?: () => void): IDisposable;
    }

    export interface Observable<T> {
        /**
        *  Subscribes an o to the observable sequence.
        *  @param {Mixed} [oOrOnNext] The object that is to receive notifications or an action to invoke for each element in the observable sequence.
        *  @param {Function} [onError] Action to invoke upon exceptional termination of the observable sequence.
        *  @param {Function} [onCompleted] Action to invoke upon graceful termination of the observable sequence.
        *  @returns {Diposable} A disposable handling the subscriptions and unsubscriptions.
        */
        subscribe(observer: IObserver<T>): IDisposable;
        /**
        *  Subscribes an o to the observable sequence.
        *  @param {Mixed} [oOrOnNext] The object that is to receive notifications or an action to invoke for each element in the observable sequence.
        *  @param {Function} [onError] Action to invoke upon exceptional termination of the observable sequence.
        *  @param {Function} [onCompleted] Action to invoke upon graceful termination of the observable sequence.
        *  @returns {Diposable} A disposable handling the subscriptions and unsubscriptions.
        */
        subscribe(onNext?: (value: T) => void, onError?: (exception: any) => void, onCompleted?: () => void): IDisposable;

        /**
        * Subscribes to the next value in the sequence with an optional "this" argument.
        * @param {Function} onNext The function to invoke on each element in the observable sequence.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Disposable} A disposable handling the subscriptions and unsubscriptions.
        */
        subscribeOnNext(onNext: (value: T) => void, thisArg?: any): IDisposable;
        /**
        * Subscribes to an exceptional condition in the sequence with an optional "this" argument.
        * @param {Function} onError The function to invoke upon exceptional termination of the observable sequence.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Disposable} A disposable handling the subscriptions and unsubscriptions.
        */
        subscribeOnError(onError: (exception: any) => void, thisArg?: any): IDisposable;
        /**
        * Subscribes to the next value in the sequence with an optional "this" argument.
        * @param {Function} onCompleted The function to invoke upon graceful termination of the observable sequence.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Disposable} A disposable handling the subscriptions and unsubscriptions.
        */
        subscribeOnCompleted(onCompleted: () => void, thisArg?: any): IDisposable;

        /**
        *  Subscribes an o to the observable sequence.
        *  @param {Mixed} [oOrOnNext] The object that is to receive notifications or an action to invoke for each element in the observable sequence.
        *  @param {Function} [onError] Action to invoke upon exceptional termination of the observable sequence.
        *  @param {Function} [onCompleted] Action to invoke upon graceful termination of the observable sequence.
        *  @returns {Diposable} A disposable handling the subscriptions and unsubscriptions.
        */
        forEach(observer: IObserver<T>): IDisposable;

        /**
        *  Subscribes an o to the observable sequence.
        *  @param {Mixed} [oOrOnNext] The object that is to receive notifications or an action to invoke for each element in the observable sequence.
        *  @param {Function} [onError] Action to invoke upon exceptional termination of the observable sequence.
        *  @param {Function} [onCompleted] Action to invoke upon graceful termination of the observable sequence.
        *  @returns {Diposable} A disposable handling the subscriptions and unsubscriptions.
        */
        forEach(onNext?: (value: T) => void, onError?: (exception: any) => void, onCompleted?: () => void): IDisposable;
    }

    export interface ObservableStatic {
        /**
        * Determines whether the given object is an Observable
        * @param {Any} An object to determine whether it is an Observable
        * @returns {Boolean} true if an Observable, else false.
        */
        isObservable(o: any): boolean;
    }

    export var Observable: ObservableStatic;

    export module internals {
        export var inherits: (child: any, parent: any) => void;
        export var addProperties: (obj: any, ...sources: any[]) => void;
        export var addRef: <T>(xs: Observable<T>, r: { getDisposable(): IDisposable; }) => Observable<T>;
    }

    export module internals {
        export interface ScheduledItem<TTime> {
            scheduler: IScheduler;
            state: TTime;
            action: (scheduler: IScheduler, state: any) => IDisposable;
            dueTime: TTime;
            comparer: (x: TTime, y: TTime) => number;
            disposable: SingleAssignmentDisposable;

            invoke(): void;
            compareTo(other: ScheduledItem<TTime>): number;
            isCancelled(): boolean;
            invokeCore(): IDisposable;
        }

        interface ScheduledItemStatic {
            new <TTime>(scheduler: IScheduler, state: any, action: (scheduler: IScheduler, state: any) => IDisposable, dueTime: TTime, comparer?: _Comparer<TTime, number>):ScheduledItem<TTime>;
        }

        export var ScheduledItem: ScheduledItemStatic
    }

    export module internals {
        // Priority Queue for Scheduling
        export interface PriorityQueue<TTime> {
            length: number;

            isHigherPriority(left: number, right: number): boolean;
            percolate(index: number): void;
            heapify(index: number): void;
            peek(): ScheduledItem<TTime>;
            removeAt(index: number): void;
            dequeue(): ScheduledItem<TTime>;
            enqueue(item: ScheduledItem<TTime>): void;
            remove(item: ScheduledItem<TTime>): boolean;
        }

        interface PriorityQueueStatic {
                new <T>(capacity: number) : PriorityQueue<T>;
                count: number;
        }

        export var PriorityQueue : PriorityQueueStatic;
    }

    /**
     * Represents a group of disposable resources that are disposed together.
     * @constructor
     */
    export interface CompositeDisposable extends Disposable {
        /**
         * Adds a disposable to the CompositeDisposable or disposes the disposable if the CompositeDisposable is disposed.
         * @param {Mixed} item Disposable to add.
         */
        add(item: IDisposable): void;

        /**
         * Removes and disposes the first occurrence of a disposable from the CompositeDisposable.
         * @param {Mixed} item Disposable to remove.
         * @returns {Boolean} true if found; false otherwise.
         */
        remove(item: IDisposable): void;
    }

    interface CompositeDisposableStatic {
        /**
         * Represents a group of disposable resources that are disposed together.
         * @constructor
         */
        new (...disposables: Rx.IDisposable[]): CompositeDisposable;
        /**
         * Represents a group of disposable resources that are disposed together.
         * @constructor
         */
        new(disposables: Rx.IDisposable[]): CompositeDisposable;
    }

    export var CompositeDisposable: CompositeDisposableStatic;

    export interface SingleAssignmentDisposable {
        /** Performs the task of cleaning up resources. */
        dispose(): void;

        /** Is this value disposed. */
        isDisposed: boolean;

        getDisposable(): IDisposable;

        setDisposable(value: IDisposable): void;
    }

    interface SingleAssignmentDisposableStatic {
        new() : SingleAssignmentDisposable;
    }

    export var SingleAssignmentDisposable : SingleAssignmentDisposableStatic;

    export interface SerialDisposable {
        /** Performs the task of cleaning up resources. */
        dispose(): void;

        /** Is this value disposed. */
        isDisposed: boolean;

        getDisposable(): IDisposable;

        setDisposable(value: IDisposable): void;
    }

    interface SerialDisposableStatic {
        new() : SerialDisposable;
    }

    export var SerialDisposable : SerialDisposableStatic;

    /**
     * Represents a disposable resource that only disposes its underlying disposable resource when all dependent disposable objects have been disposed.
     */
    export interface RefCountDisposable extends Disposable {

        /** Performs the task of cleaning up resources. */
        dispose(): void;

        /** Is this value disposed. */
        isDisposed: boolean;

        /**
         * Returns a dependent disposable that when disposed decreases the refcount on the underlying disposable.
         * @returns {Disposable} A dependent disposable contributing to the reference count that manages the underlying disposable's lifetime.
         */
        getDisposable(): IDisposable;
    }

    interface RefCountDisposableStatic {
        /**
         * Initializes a new instance of the RefCountDisposable with the specified disposable.
         * @constructor
         * @param {Disposable} disposable Underlying disposable.
         */
        new(disposable: IDisposable): RefCountDisposable;
    }

    export var RefCountDisposable : RefCountDisposableStatic;

    export interface IScheduler {
        /** Gets the current time according to the local machine's system clock. */
        now(): number;

        /**
          * Schedules an action to be executed.
          * @param state State passed to the action to be executed.
          * @param {Function} action Action to be executed.
          * @returns {Disposable} The disposable object used to cancel the scheduled action (best effort).
          */
        schedule<TState>(state: TState, action: (scheduler: IScheduler, state: TState) => IDisposable): IDisposable;

        /**
         * Schedules an action to be executed after dueTime.
         * @param state State passed to the action to be executed.
         * @param {Function} action Action to be executed.
         * @param {Number} dueTime Relative time after which to execute the action.
         * @returns {Disposable} The disposable object used to cancel the scheduled action (best effort).
         */
        scheduleFuture<TState>(state: TState, dueTime: number | Date, action: (scheduler: IScheduler, state: TState) => IDisposable): IDisposable;
    }

    export interface SchedulerStatic {
        /** Gets the current time according to the local machine's system clock. */
        now(): number;

        /**
         * Normalizes the specified TimeSpan value to a positive value.
         * @param {Number} timeSpan The time span value to normalize.
         * @returns {Number} The specified TimeSpan value if it is zero or positive; otherwise, 0
         */
        normalize(timeSpan: number): number;

        /** Determines whether the given object is a scheduler */
        isScheduler(s: any): boolean;
    }

    /** Provides a set of static properties to access commonly used schedulers. */
    export var Scheduler: SchedulerStatic;

    export interface IScheduler {
        /**
         * Schedules an action to be executed recursively.
         * @param {Mixed} state State passed to the action to be executed.
         * @param {Function} action Action to execute recursively. The last parameter passed to the action is used to trigger recursive scheduling of the action, passing in recursive invocation state.
         * @returns {Disposable} The disposable object used to cancel the scheduled action (best effort).
         */
        scheduleRecursive<TState>(state: TState, action: (state: TState, action: (state: TState) => void) => void): IDisposable;

        /**
         * Schedules an action to be executed recursively after a specified relative due time.
         * @param {Mixed} state State passed to the action to be executed.
         * @param {Function} action Action to execute recursively. The last parameter passed to the action is used to trigger recursive scheduling of the action, passing in the recursive due time and invocation state.
         * @param {Number}dueTime Relative time after which to execute the action for the first time.
         * @returns {Disposable} The disposable object used to cancel the scheduled action (best effort).
         */
        scheduleRecursiveFuture<TState, TTime extends number | Date>(state: TState, dueTime: TTime, action: (state: TState, action: (state: TState, dueTime: TTime) => void) => void): IDisposable;
    }

    export interface IScheduler {
        /**
         * Schedules a periodic piece of work by dynamically discovering the scheduler's capabilities. The periodic task will be scheduled using window.setInterval for the base implementation.
         * @param {Mixed} state Initial state passed to the action upon the first iteration.
         * @param {Number} period Period for running the work periodically.
         * @param {Function} action Action to be executed, potentially updating the state.
         * @returns {Disposable} The disposable object used to cancel the scheduled recurring action (best effort).
         */
        schedulePeriodic<TState>(state: TState, period: number, action: (state: TState) => TState): IDisposable;
    }

    export interface IScheduler {
        /**
         * Returns a scheduler that wraps the original scheduler, adding exception handling for scheduled actions.
         * @param {Function} handler Handler that's run if an exception is caught. The exception will be rethrown if the handler returns false.
         * @returns {Scheduler} Wrapper around the original scheduler, enforcing exception handling.
         */
        catch(handler: Function): IScheduler;
    }

    export module internals {
        export interface SchedulePeriodicRecursive {
            start(): IDisposable;
        }

        interface SchedulePeriodicRecursiveStatic {
            new (scheduler: any, state: any, period: any, action: any) : SchedulePeriodicRecursive;
        }

        export var SchedulePeriodicRecursive: SchedulePeriodicRecursiveStatic;
    }

    export interface SchedulerStatic {
        immediate: IScheduler;
    }

    export interface ICurrentThreadScheduler extends IScheduler {
        scheduleRequired(): boolean;
    }

    export interface SchedulerStatic {
        currentThread: ICurrentThreadScheduler;
    }

    export interface SchedulerStatic {
        default: IScheduler;
        async: IScheduler;
    }

    /**
    * Supports push-style iteration over an observable sequence.
    */
    export interface IObserver<T> {
        /**
        * Notifies the observer of a new element in the sequence.
        * @param {Any} value Next element in the sequence.
        */
        onNext(value: T): void;
        /**
        * Notifies the observer that an exception has occurred.
        * @param {Any} error The error that has occurred.
        */
        onError(exception: any): void;
        /**
        * Notifies the observer of the end of the sequence.
        */
        onCompleted(): void;
    }
    
    export interface Observer<T> {
        /**
        * Notifies the observer of a new element in the sequence.
        * @param {Any} value Next element in the sequence.
        */
        onNext(value: T): void;
        /**
        * Notifies the observer that an exception has occurred.
        * @param {Any} error The error that has occurred.
        */
        onError(exception: any): void;
        /**
        * Notifies the observer of the end of the sequence.
        */
        onCompleted(): void;
    }

    export interface ObserverStatic {
        /**
        *  Creates an observer from the specified OnNext, along with optional OnError, and OnCompleted actions.
        * @param {Function} [onNext] Observer's OnNext action implementation.
        * @param {Function} [onError] Observer's OnError action implementation.
        * @param {Function} [onCompleted] Observer's OnCompleted action implementation.
        * @returns {Observer} The observer object implemented using the given actions.
        */
        create<T>(onNext?: (value: T) => void, onError?: (exception: any) => void, onCompleted?: () => void): Observer<T>;
    }

    /**
    * Supports push-style iteration over an observable sequence.
    */
    export var Observer: ObserverStatic;

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

	export interface Observer<T> {
        makeSafe(disposable: IDisposable): Observer<T>;
	}

    export module internals {
        /**
        * Abstract base class for implementations of the Observer class.
        * This base class enforces the grammar of observers where OnError and OnCompleted are terminal messages.
        */
        export interface AbstractObserver<T> extends Rx.IObserver<T>, Rx.IDisposable {
            /**
            * Notifies the observer of a new element in the sequence.
            * @param {Any} value Next element in the sequence.
            */
            onNext(value: T): void;
            /**
            * Notifies the observer that an exception has occurred.
            * @param {Any} error The error that has occurred.
            */
            onError(exception: any): void;
            /**
            * Notifies the observer of the end of the sequence.
            */
            onCompleted(): void;

            isStopped: boolean;

            /**
            * Disposes the observer, causing it to transition to the stopped state.
            */
            dispose(): void;

            fail(e: any): boolean;

            // Must be implemented by other observers
            next(value: T): void;
            error(error: any): void;
            completed(): void;
        }

        interface AbstractObserverStatic {
            new <T>(): AbstractObserver<T>;
        }

        export var AbstractObserver: AbstractObserverStatic
    }

    /**
     * Class to create an Observer instance from delegate-based implementations of the on* methods.
     */
    export interface AnonymousObserver<T> extends Observer<T> {
        /**
        * Notifies the observer of a new element in the sequence.
        * @param {Any} value Next element in the sequence.
        */
        onNext(value: T): void;
        /**
        * Notifies the observer that an exception has occurred.
        * @param {Any} error The error that has occurred.
        */
        onError(exception: any): void;
        /**
        * Notifies the observer of the end of the sequence.
        */
        onCompleted(): void;
    }

    interface AnonymousObserverStatic {
        /**
         * Creates an observer from the specified OnNext, OnError, and OnCompleted actions.
         * @param {Any} onNext Observer's OnNext action implementation.
         * @param {Any} onError Observer's OnError action implementation.
         * @param {Any} onCompleted Observer's OnCompleted action implementation.
         */
        new <T>(onNext?: (value: T) => void, onError?: (exception: any) => void, onCompleted?: () => void): AnonymousObserver<T>;
    }

    export var AnonymousObserver : AnonymousObserverStatic;

    export interface CheckedObserver<T> extends Observer<T> {
        checkAccess(): void;
    }

    export module internals {
        export interface ScheduledObserver<T> extends Observer<T> {
            ensureActive(): void;
        }
    }

    export interface Observable<T> {
        /**
        *  Wraps the source sequence in order to run its observer callbacks on the specified scheduler.
        *
        *  This only invokes observer callbacks on a scheduler. In case the subscription and/or unsubscription actions have side-effects
        *  that require to be run on a scheduler, use subscribeOn.
        *
        *  @param {Scheduler} scheduler Scheduler to notify observers on.
        *  @returns {Observable} The source sequence whose observations happen on the specified scheduler.
        */
        observeOn(scheduler: IScheduler): Observable<T>;
    }

    export interface Observable<T> {
        /**
        *  Wraps the source sequence in order to run its subscription and unsubscription logic on the specified scheduler. This operation is not commonly used;
        *  see the remarks section for more information on the distinction between subscribeOn and observeOn.

        *  This only performs the side-effects of subscription and unsubscription on the specified scheduler. In order to invoke observer
        *  callbacks on a scheduler, use observeOn.

        *  @param {Scheduler} scheduler Scheduler to perform subscription and unsubscription actions on.
        *  @returns {Observable} The source sequence whose subscriptions and unsubscriptions happen on the specified scheduler.
        */
        subscribeOn(scheduler: IScheduler): Observable<T>;
    }

    export interface ObservableStatic {
        /**
        * Converts a Promise to an Observable sequence
        * @param {Promise} An ES6 Compliant promise.
        * @returns {Observable} An Observable sequence which wraps the existing promise success and failure.
        */
 		fromPromise<T>(promise: Promise<T>): Observable<T>;
    }

    export interface Observable<T> {
        /*
         * Converts an existing observable sequence to an ES6 Compatible Promise
         * @example
         * var promise = Rx.Observable.return(42).toPromise(RSVP.Promise);
         *
         * // With config
         * Rx.config.Promise = RSVP.Promise;
         * var promise = Rx.Observable.return(42).toPromise();
         * @param {Function} [promiseCtor] The constructor of the promise. If not provided, it looks for it in Rx.config.Promise.
         * @returns {Promise} An ES6 compatible promise with the last value from the observable sequence.
         */
        toPromise(promiseCtor?: { new (resolver: (resolvePromise: (value: T) => void, rejectPromise: (reason: any) => void) => void): IPromise<T>; }): IPromise<T>;
        /*
         * Converts an existing observable sequence to an ES6 Compatible Promise
         * @example
         * var promise = Rx.Observable.return(42).toPromise(RSVP.Promise);
         *
         * // With config
         * Rx.config.Promise = RSVP.Promise;
         * var promise = Rx.Observable.return(42).toPromise();
         * @param {Function} [promiseCtor] The constructor of the promise. If not provided, it looks for it in Rx.config.Promise.
         * @returns {Promise} An ES6 compatible promise with the last value from the observable sequence.
         */
        toPromise<TPromise extends IPromise<T>>(promiseCtor: { new (resolver: (resolvePromise: (value: T) => void, rejectPromise: (reason: any) => void) => void): TPromise; }): TPromise;
    }

    export interface Observable<T> {
        /**
        * Creates an array from an observable sequence.
        * @returns {Observable} An observable sequence containing a single element with a list containing all the elements of the source sequence.
        */
        toArray(): Observable<T[]>;
    }

    export interface ObservableStatic {
        /**
        *  Creates an observable sequence from a specified subscribe method implementation.
        * @example
        *  var res = Rx.Observable.create(function (observer) { return function () { } );
        *  var res = Rx.Observable.create(function (observer) { return Rx.Disposable.empty; } );
        *  var res = Rx.Observable.create(function (observer) { } );
        * @param {Function} subscribe Implementation of the resulting observable sequence's subscribe method, returning a function that will be wrapped in a Disposable.
        * @returns {Observable} The observable sequence with the specified implementation for the Subscribe method.
        */
        create<T>(subscribe: (observer: Observer<T>) => IDisposable | Function | void): Observable<T>;
    }

    export interface ObservableStatic {
        /**
          *  Returns an observable sequence that invokes the specified factory function whenever a new observer subscribes.
          *
          * @example
          *  var res = Rx.Observable.defer(function () { return Rx.Observable.fromArray([1,2,3]); });
          * @param {Function} observableFactory Observable factory function to invoke for each observer that subscribes to the resulting sequence or Promise.
          * @returns {Observable} An observable sequence whose observers trigger an invocation of the given observable factory function.
          */
        defer<T>(observableFactory: () => ObservableOrPromise<T>): Observable<T>;
    }

    export interface ObservableStatic {
        /**
  *  Returns an empty observable sequence, using the specified scheduler to send out the single OnCompleted message.
  *
  * @example
  *  var res = Rx.Observable.empty();
  *  var res = Rx.Observable.empty(Rx.Scheduler.timeout);
  * @param {Scheduler} [scheduler] Scheduler to send the termination call on.
  * @returns {Observable} An observable sequence with no elements.
  */
        empty<T>(scheduler?: IScheduler): Observable<T>;
    }

    export interface ObservableStatic {
        /**
         * This method creates a new Observable sequence from an array-like or iterable object.
         * @param {Any} arrayLike An array-like or iterable object to convert to an Observable sequence.
         * @param {Function} [mapFn] Map function to call on every element of the array.
         * @param {Any} [thisArg] The context to use calling the mapFn if provided.
         * @param {Scheduler} [scheduler] Optional scheduler to use for scheduling.  If not provided, defaults to Scheduler.currentThread.
         */
        from<T>(array: ArrayOrIterable<T>): Observable<T>;
        /**
         * This method creates a new Observable sequence from an array-like or iterable object.
         * @param {Any} arrayLike An array-like or iterable object to convert to an Observable sequence.
         * @param {Function} [mapFn] Map function to call on every element of the array.
         * @param {Any} [thisArg] The context to use calling the mapFn if provided.
         * @param {Scheduler} [scheduler] Optional scheduler to use for scheduling.  If not provided, defaults to Scheduler.currentThread.
         */
        from<T, TResult>(array: ArrayOrIterable<T>, mapFn: (value: T, index: number) => TResult, thisArg?: any, scheduler?: IScheduler): Observable<TResult>;
    }

    export interface ObservableStatic {
        /**
         *  Converts an array to an observable sequence, using an optional scheduler to enumerate the array.
         * @deprecated use Observable.from or Observable.of
         * @param {Scheduler} [scheduler] Scheduler to run the enumeration of the input sequence on.
         * @returns {Observable} The observable sequence whose elements are pulled from the given enumerable sequence.
         */
        fromArray<T>(array: ArrayLike<T>, scheduler?: IScheduler): Observable<T>;
    }

    export interface ObservableStatic {
        /**
         *  Generates an observable sequence by running a state-driven loop producing the sequence's elements, using the specified scheduler to send out observer messages.
         *
         * @example
         *  var res = Rx.Observable.generate(0, function (x) { return x < 10; }, function (x) { return x + 1; }, function (x) { return x; });
         *  var res = Rx.Observable.generate(0, function (x) { return x < 10; }, function (x) { return x + 1; }, function (x) { return x; }, Rx.Scheduler.timeout);
         * @param {Mixed} initialState Initial state.
         * @param {Function} condition Condition to terminate generation (upon returning false).
         * @param {Function} iterate Iteration step function.
         * @param {Function} resultSelector Selector function for results produced in the sequence.
         * @param {Scheduler} [scheduler] Scheduler on which to run the generator loop. If not provided, defaults to Scheduler.currentThread.
         * @returns {Observable} The generated sequence.
         */
        generate<TState, TResult>(initialState: TState, condition: (state: TState) => boolean, iterate: (state: TState) => TState, resultSelector: (state: TState) => TResult, scheduler?: IScheduler): Observable<TResult>;
    }

    export interface ObservableStatic {
        /**
        *  This method creates a new Observable instance with a variable number of arguments, regardless of number or type of the arguments.
        * @returns {Observable} The observable sequence whose elements are pulled from the given arguments.
        */
        of<T>(...values: T[]): Observable<T>;

        /**
        *  This method creates a new Observable instance with a variable number of arguments, regardless of number or type of the arguments.
        * @param {Scheduler} scheduler A scheduler to use for scheduling the arguments.
        * @returns {Observable} The observable sequence whose elements are pulled from the given arguments.
        */
        ofWithScheduler<T>(scheduler?: IScheduler, ...values: T[]): Observable<T>;
    }

    export interface ArrayObserveChange<T> {
        type: string;
        object: T[];
        name?: string;
        oldValue?: T;
        index?: number;
        removed?: T[];
        added?: number;
    }

    export interface ObservableStatic {
        /**
         * Creates an Observable sequence from changes to an array using Array.observe.
         * @param {Array} array An array to observe changes.
         * @returns {Observable} An observable sequence containing changes to an array from Array.observe.
         */
        ofArrayChanges<T>(obj: T[]): Observable<ArrayObserveChange<T>>;
    }

    export interface ObjectObserveChange<T> {
        type: string;
        object: T;
        name: string;
        oldValue?: any;
    }

    export interface ObservableStatic {
        /**
         * Creates an Observable sequence from changes to an object using Object.observe.
         * @param {Object} obj An object to observe changes.
         * @returns {Observable} An observable sequence containing changes to an object from Object.observe.
         */
        ofObjectChanges<T>(obj: T): Observable<ObjectObserveChange<T>>;
    }

    export interface ObservableStatic {
        /**
        * Returns a non-terminating observable sequence, which can be used to denote an infinite duration (e.g. when using reactive joins).
        * @returns {Observable} An observable sequence whose observers will never get called.
        */
        never<T>(): Observable<T>;
    }

    export interface ObservableStatic {
        /**
        * Convert an object into an observable sequence of [key, value] pairs.
        * @param {Object} obj The object to inspect.
        * @param {Scheduler} [scheduler] Scheduler to run the enumeration of the input sequence on.
        * @returns {Observable} An observable sequence of [key, value] pairs from the object.
        */
        pairs<T>(obj: { [key: string]: T }, scheduler?: IScheduler): Observable<[string, T]>;
        /**
        * Convert an object into an observable sequence of [key, value] pairs.
        * @param {Object} obj The object to inspect.
        * @param {Scheduler} [scheduler] Scheduler to run the enumeration of the input sequence on.
        * @returns {Observable} An observable sequence of [key, value] pairs from the object.
        */
        pairs<T>(obj: { [key: number]: T }, scheduler?: IScheduler): Observable<[number, T]>;
    }

    export interface ObservableStatic {
        /**
        *  Generates an observable sequence of integral numbers within a specified range, using the specified scheduler to send out observer messages.
        *
        * @example
        *  var res = Rx.Observable.range(0, 10);
        *  var res = Rx.Observable.range(0, 10, Rx.Scheduler.timeout);
        * @param {Number} start The value of the first integer in the sequence.
        * @param {Number} count The number of sequential integers to generate.
        * @param {Scheduler} [scheduler] Scheduler to run the generator loop on. If not specified, defaults to Scheduler.currentThread.
        * @returns {Observable} An observable sequence that contains a range of sequential integral numbers.
        */
        range(start: number, count: number, scheduler?: IScheduler): Observable<number>;
    }

    export interface ObservableStatic {
        /**
         *  Generates an observable sequence that repeats the given element the specified number of times, using the specified scheduler to send out observer messages.
         *
         * @example
         *  var res = Rx.Observable.repeat(42);
         *  var res = Rx.Observable.repeat(42, 4);
         *  3 - res = Rx.Observable.repeat(42, 4, Rx.Scheduler.timeout);
         *  4 - res = Rx.Observable.repeat(42, null, Rx.Scheduler.timeout);
         * @param {Mixed} value Element to repeat.
         * @param {Number} repeatCount [Optiona] Number of times to repeat the element. If not specified, repeats indefinitely.
         * @param {Scheduler} scheduler Scheduler to run the producer loop on. If not specified, defaults to Scheduler.immediate.
         * @returns {Observable} An observable sequence that repeats the given element the specified number of times.
         */
        repeat<T>(value: T, repeatCount?: number | void, scheduler?: IScheduler): Observable<T>;
    }

    export interface ObservableStatic {
        /**
        *  Returns an observable sequence that contains a single element, using the specified scheduler to send out observer messages.
        *  There is an alias called 'just' or browsers <IE9.
        * @param {Mixed} value Single element in the resulting observable sequence.
        * @param {Scheduler} scheduler Scheduler to send the single element on. If not specified, defaults to Scheduler.immediate.
        * @returns {Observable} An observable sequence containing the single specified element.
        */
        return<T>(value: T, scheduler?: IScheduler): Observable<T>;
        /**
        *  Returns an observable sequence that contains a single element, using the specified scheduler to send out observer messages.
        *  There is an alias called 'just' or browsers <IE9.
        * @param {Mixed} value Single element in the resulting observable sequence.
        * @param {Scheduler} scheduler Scheduler to send the single element on. If not specified, defaults to Scheduler.immediate.
        * @returns {Observable} An observable sequence containing the single specified element.
        */
        just<T>(value: T, scheduler?: IScheduler): Observable<T>;
    }

    export interface ObservableStatic {
        /**
        *  Returns an observable sequence that terminates with an exception, using the specified scheduler to send out the single onError message.
        * @param {Mixed} error An object used for the sequence's termination.
        * @param {Scheduler} scheduler Scheduler to send the exceptional termination call on. If not specified, defaults to Scheduler.immediate.
        * @returns {Observable} The observable sequence that terminates exceptionally with the specified exception object.
        */
        throw<T>(exception: Error, scheduler?: IScheduler): Observable<T>;
        /**
        *  Returns an observable sequence that terminates with an exception, using the specified scheduler to send out the single onError message.
        * @param {Mixed} error An object used for the sequence's termination.
        * @param {Scheduler} scheduler Scheduler to send the exceptional termination call on. If not specified, defaults to Scheduler.immediate.
        * @returns {Observable} The observable sequence that terminates exceptionally with the specified exception object.
        */
        throw<T>(exception: any, scheduler?: IScheduler): Observable<T>;
    }

    export interface ObservableStatic {
        /**
         * Constructs an observable sequence that depends on a resource object, whose lifetime is tied to the resulting observable sequence's lifetime.
         * @param {Function} resourceFactory Factory function to obtain a resource object.
         * @param {Function} observableFactory Factory function to obtain an observable sequence that depends on the obtained resource.
         * @returns {Observable} An observable sequence whose lifetime controls the lifetime of the dependent resource object.
         */
        using<TSource, TResource extends IDisposable>(resourceFactory: () => TResource, observableFactory: (resource: TResource) => Observable<TSource>): Observable<TSource>;
    }

    export interface Observable<T> {
        /**
        * Propagates the observable sequence or Promise that reacts first.
        * @param {Observable} rightSource Second observable sequence or Promise.
        * @returns {Observable} {Observable} An observable sequence that surfaces either of the given sequences, whichever reacted first.
        */
        amb(observable: ObservableOrPromise<T>): Observable<T>;
    }

    export interface ObservableStatic {
        /**
        * Propagates the observable sequence or Promise that reacts first.
        * @returns {Observable} An observable sequence that surfaces any of the given sequences, whichever reacted first.
        */
        amb<T>(observables: ObservableOrPromise<T>[]): Observable<T>;
        /**
        * Propagates the observable sequence or Promise that reacts first.
        * @returns {Observable} An observable sequence that surfaces any of the given sequences, whichever reacted first.
        */
        amb<T>(...observables: ObservableOrPromise<T>[]): Observable<T>;
    }

    export interface Observable<T> {
        /**
        * Continues an observable sequence that is terminated by an exception with the next observable sequence.
        * @param {Mixed} handlerOrSecond Exception handler function that returns an observable sequence given the error that occurred in the first sequence, or a second observable sequence used to produce results when an error occurred in the first sequence.
        * @returns {Observable} An observable sequence containing the first sequence's elements, followed by the elements of the handler sequence in case an exception occurred.
        */
        catch(handler: (exception: any) => ObservableOrPromise<T>): Observable<T>;
        /**
        * Continues an observable sequence that is terminated by an exception with the next observable sequence.
        * @param {Mixed} handlerOrSecond Exception handler function that returns an observable sequence given the error that occurred in the first sequence, or a second observable sequence used to produce results when an error occurred in the first sequence.
        * @returns {Observable} An observable sequence containing the first sequence's elements, followed by the elements of the handler sequence in case an exception occurred.
        */
        catch(second: ObservableOrPromise<T>): Observable<T>;
    }

    export interface ObservableStatic {
        /**
        * Continues an observable sequence that is terminated by an exception with the next observable sequence.
        * @param {Array | Arguments} args Arguments or an array to use as the next sequence if an error occurs.
        * @returns {Observable} An observable sequence containing elements from consecutive source sequences until a source sequence terminates successfully.
        */
        catch<T>(sources: ObservableOrPromise<T>[]): Observable<T>;
        /**
        * Continues an observable sequence that is terminated by an exception with the next observable sequence.
        * @param {Array | Arguments} args Arguments or an array to use as the next sequence if an error occurs.
        * @returns {Observable} An observable sequence containing elements from consecutive source sequences until a source sequence terminates successfully.
        */
        catch<T>(...sources: ObservableOrPromise<T>[]): Observable<T>;
    }

    export interface Observable<T> {
        /**
        * Merges the specified observable sequences into one observable sequence by using the selector function whenever any of the observable sequences or Promises produces an element.
        * This can be in the form of an argument list of observables or an array.
        *
        * @example
        * 1 - obs = observable.combineLatest(obs1, obs2, obs3, function (o1, o2, o3) { return o1 + o2 + o3; });
        * 2 - obs = observable.combineLatest([obs1, obs2, obs3], function (o1, o2, o3) { return o1 + o2 + o3; });
        * @returns {Observable} An observable sequence containing the result of combining elements of the sources using the specified result selector function.
        */
        combineLatest<T2, TResult>(second: ObservableOrPromise<T2>, resultSelector: (v1: T, v2: T2) => TResult): Observable<TResult>;
        /**
        * Merges the specified observable sequences into one observable sequence by using the selector function whenever any of the observable sequences or Promises produces an element.
        * This can be in the form of an argument list of observables or an array.
        *
        * @example
        * 1 - obs = observable.combineLatest(obs1, obs2, obs3, function (o1, o2, o3) { return o1 + o2 + o3; });
        * 2 - obs = observable.combineLatest([obs1, obs2, obs3], function (o1, o2, o3) { return o1 + o2 + o3; });
        * @returns {Observable} An observable sequence containing the result of combining elements of the sources using the specified result selector function.
        */
        combineLatest<T2, T3, TResult>(second: ObservableOrPromise<T2>, third: ObservableOrPromise<T3>, resultSelector: (v1: T, v2: T2, v3: T3) => TResult): Observable<TResult>;
        /**
        * Merges the specified observable sequences into one observable sequence by using the selector function whenever any of the observable sequences or Promises produces an element.
        * This can be in the form of an argument list of observables or an array.
        *
        * @example
        * 1 - obs = observable.combineLatest(obs1, obs2, obs3, function (o1, o2, o3) { return o1 + o2 + o3; });
        * 2 - obs = observable.combineLatest([obs1, obs2, obs3], function (o1, o2, o3) { return o1 + o2 + o3; });
        * @returns {Observable} An observable sequence containing the result of combining elements of the sources using the specified result selector function.
        */
        combineLatest<T2, T3, T4, TResult>(second: ObservableOrPromise<T2>, third: ObservableOrPromise<T3>, fourth: ObservableOrPromise<T4>, resultSelector: (v1: T, v2: T2, v3: T3, v4: T4) => TResult): Observable<TResult>;
        /**
        * Merges the specified observable sequences into one observable sequence by using the selector function whenever any of the observable sequences or Promises produces an element.
        * This can be in the form of an argument list of observables or an array.
        *
        * @example
        * 1 - obs = observable.combineLatest(obs1, obs2, obs3, function (o1, o2, o3) { return o1 + o2 + o3; });
        * 2 - obs = observable.combineLatest([obs1, obs2, obs3], function (o1, o2, o3) { return o1 + o2 + o3; });
        * @returns {Observable} An observable sequence containing the result of combining elements of the sources using the specified result selector function.
        */
        combineLatest<T2, T3, T4, T5, TResult>(second: ObservableOrPromise<T2>, third: ObservableOrPromise<T3>, fourth: ObservableOrPromise<T4>, fifth: ObservableOrPromise<T5>, resultSelector: (v1: T, v2: T2, v3: T3, v4: T4, v5: T5) => TResult): Observable<TResult>;
        /**
        * Merges the specified observable sequences into one observable sequence by using the selector function whenever any of the observable sequences or Promises produces an element.
        * This can be in the form of an argument list of observables or an array.
        *
        * @example
        * 1 - obs = observable.combineLatest(obs1, obs2, obs3, function (o1, o2, o3) { return o1 + o2 + o3; });
        * 2 - obs = observable.combineLatest([obs1, obs2, obs3], function (o1, o2, o3) { return o1 + o2 + o3; });
        * @returns {Observable} An observable sequence containing the result of combining elements of the sources using the specified result selector function.
        */
        combineLatest<T2, T3, T4, T5, T6, TResult>(second: ObservableOrPromise<T2>, third: ObservableOrPromise<T3>, fourth: ObservableOrPromise<T4>, fifth: ObservableOrPromise<T5>, sixth: ObservableOrPromise<T6>, resultSelector: (v1: T, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => TResult): Observable<TResult>;
        /**
        * Merges the specified observable sequences into one observable sequence by using the selector function whenever any of the observable sequences or Promises produces an element.
        * This can be in the form of an argument list of observables or an array.
        *
        * @example
        * 1 - obs = observable.combineLatest(obs1, obs2, obs3, function (o1, o2, o3) { return o1 + o2 + o3; });
        * 2 - obs = observable.combineLatest([obs1, obs2, obs3], function (o1, o2, o3) { return o1 + o2 + o3; });
        * @returns {Observable} An observable sequence containing the result of combining elements of the sources using the specified result selector function.
        */
        combineLatest<T2, T3, T4, T5, T6, T7, TResult>(second: ObservableOrPromise<T2>, third: ObservableOrPromise<T3>, fourth: ObservableOrPromise<T4>, fifth: ObservableOrPromise<T5>, sixth: ObservableOrPromise<T6>, seventh: ObservableOrPromise<T7>, resultSelector: (v1: T, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7) => TResult): Observable<TResult>;
        /**
        * Merges the specified observable sequences into one observable sequence by using the selector function whenever any of the observable sequences or Promises produces an element.
        * This can be in the form of an argument list of observables or an array.
        *
        * @example
        * 1 - obs = observable.combineLatest(obs1, obs2, obs3, function (o1, o2, o3) { return o1 + o2 + o3; });
        * 2 - obs = observable.combineLatest([obs1, obs2, obs3], function (o1, o2, o3) { return o1 + o2 + o3; });
        * @returns {Observable} An observable sequence containing the result of combining elements of the sources using the specified result selector function.
        */
        combineLatest<T2, T3, T4, T5, T6, T7, T8, TResult>(second: ObservableOrPromise<T2>, third: ObservableOrPromise<T3>, fourth: ObservableOrPromise<T4>, fifth: ObservableOrPromise<T5>, sixth: ObservableOrPromise<T6>, seventh: ObservableOrPromise<T7>, eighth: ObservableOrPromise<T8>, resultSelector: (v1: T, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7, v8: T8) => TResult): Observable<TResult>;
        /**
        * Merges the specified observable sequences into one observable sequence by using the selector function whenever any of the observable sequences or Promises produces an element.
        * This can be in the form of an argument list of observables or an array.
        *
        * @example
        * 1 - obs = observable.combineLatest(obs1, obs2, obs3, function (o1, o2, o3) { return o1 + o2 + o3; });
        * 2 - obs = observable.combineLatest([obs1, obs2, obs3], function (o1, o2, o3) { return o1 + o2 + o3; });
        * @returns {Observable} An observable sequence containing the result of combining elements of the sources using the specified result selector function.
        */
        combineLatest<T2, T3, T4, T5, T6, T7, T8, T9, TResult>(second: ObservableOrPromise<T2>, third: ObservableOrPromise<T3>, fourth: ObservableOrPromise<T4>, fifth: ObservableOrPromise<T5>, sixth: ObservableOrPromise<T6>, seventh: ObservableOrPromise<T7>, eighth: ObservableOrPromise<T8>, ninth: ObservableOrPromise<T9>, resultSelector: (v1: T, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7, v8: T8, v9: T9) => TResult): Observable<TResult>;
        /**
        * Merges the specified observable sequences into one observable sequence by using the selector function whenever any of the observable sequences or Promises produces an element.
        * This can be in the form of an argument list of observables or an array.
        *
        * @example
        * 1 - obs = observable.combineLatest(obs1, obs2, obs3, function (o1, o2, o3) { return o1 + o2 + o3; });
        * 2 - obs = observable.combineLatest([obs1, obs2, obs3], function (o1, o2, o3) { return o1 + o2 + o3; });
        * @returns {Observable} An observable sequence containing the result of combining elements of the sources using the specified result selector function.
        */
        combineLatest<TOther, TResult>(souces: ObservableOrPromise<TOther>[], resultSelector: (firstValue: T, ...otherValues: TOther[]) => TResult): Observable<TResult>;
    }

    export interface ObservableStatic {
        /**
        * Merges the specified observable sequences into one observable sequence by using the selector function whenever any of the observable sequences or Promises produces an element.
        *
        * @example
        * 1 - obs = Rx.Observable.combineLatest(obs1, obs2, obs3, function (o1, o2, o3) { return o1 + o2 + o3; });
        * 2 - obs = Rx.Observable.combineLatest([obs1, obs2, obs3], function (o1, o2, o3) { return o1 + o2 + o3; });
        * @returns {Observable} An observable sequence containing the result of combining elements of the sources using the specified result selector function.
        */
        combineLatest<T, T2, TResult>(first: ObservableOrPromise<T>, second: ObservableOrPromise<T2>, resultSelector: (v1: T, v2: T2) => TResult): Observable<TResult>;
        /**
        * Merges the specified observable sequences into one observable sequence by using the selector function whenever any of the observable sequences or Promises produces an element.
        *
        * @example
        * 1 - obs = Rx.Observable.combineLatest(obs1, obs2, obs3, function (o1, o2, o3) { return o1 + o2 + o3; });
        * 2 - obs = Rx.Observable.combineLatest([obs1, obs2, obs3], function (o1, o2, o3) { return o1 + o2 + o3; });
        * @returns {Observable} An observable sequence containing the result of combining elements of the sources using the specified result selector function.
        */
        combineLatest<T, T2, T3, TResult>(first: ObservableOrPromise<T>, second: ObservableOrPromise<T2>, third: ObservableOrPromise<T3>, resultSelector: (v1: T, v2: T2, v3: T3) => TResult): Observable<TResult>;
        /**
        * Merges the specified observable sequences into one observable sequence by using the selector function whenever any of the observable sequences or Promises produces an element.
        *
        * @example
        * 1 - obs = Rx.Observable.combineLatest(obs1, obs2, obs3, function (o1, o2, o3) { return o1 + o2 + o3; });
        * 2 - obs = Rx.Observable.combineLatest([obs1, obs2, obs3], function (o1, o2, o3) { return o1 + o2 + o3; });
        * @returns {Observable} An observable sequence containing the result of combining elements of the sources using the specified result selector function.
        */
        combineLatest<T, T2, T3, T4, TResult>(first: ObservableOrPromise<T>, second: ObservableOrPromise<T2>, third: ObservableOrPromise<T3>, fourth: ObservableOrPromise<T4>, resultSelector: (v1: T, v2: T2, v3: T3, v4: T4) => TResult): Observable<TResult>;
        /**
        * Merges the specified observable sequences into one observable sequence by using the selector function whenever any of the observable sequences or Promises produces an element.
        *
        * @example
        * 1 - obs = Rx.Observable.combineLatest(obs1, obs2, obs3, function (o1, o2, o3) { return o1 + o2 + o3; });
        * 2 - obs = Rx.Observable.combineLatest([obs1, obs2, obs3], function (o1, o2, o3) { return o1 + o2 + o3; });
        * @returns {Observable} An observable sequence containing the result of combining elements of the sources using the specified result selector function.
        */
        combineLatest<T, T2, T3, T4, T5, TResult>(first: ObservableOrPromise<T>, second: ObservableOrPromise<T2>, third: ObservableOrPromise<T3>, fourth: ObservableOrPromise<T4>, fifth: ObservableOrPromise<T5>, resultSelector: (v1: T, v2: T2, v3: T3, v4: T4, v5: T5) => TResult): Observable<TResult>;
        /**
        * Merges the specified observable sequences into one observable sequence by using the selector function whenever any of the observable sequences or Promises produces an element.
        *
        * @example
        * 1 - obs = Rx.Observable.combineLatest(obs1, obs2, obs3, function (o1, o2, o3) { return o1 + o2 + o3; });
        * 2 - obs = Rx.Observable.combineLatest([obs1, obs2, obs3], function (o1, o2, o3) { return o1 + o2 + o3; });
        * @returns {Observable} An observable sequence containing the result of combining elements of the sources using the specified result selector function.
        */
        combineLatest<T, T2, T3, T4, T5, T6, TResult>(first: ObservableOrPromise<T>, second: ObservableOrPromise<T2>, third: ObservableOrPromise<T3>, fourth: ObservableOrPromise<T4>, fifth: ObservableOrPromise<T5>, sixth: ObservableOrPromise<T6>, resultSelector: (v1: T, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => TResult): Observable<TResult>;
        /**
        * Merges the specified observable sequences into one observable sequence by using the selector function whenever any of the observable sequences or Promises produces an element.
        *
        * @example
        * 1 - obs = Rx.Observable.combineLatest(obs1, obs2, obs3, function (o1, o2, o3) { return o1 + o2 + o3; });
        * 2 - obs = Rx.Observable.combineLatest([obs1, obs2, obs3], function (o1, o2, o3) { return o1 + o2 + o3; });
        * @returns {Observable} An observable sequence containing the result of combining elements of the sources using the specified result selector function.
        */
        combineLatest<T, T2, T3, T4, T5, T6, T7, TResult>(first: ObservableOrPromise<T>, second: ObservableOrPromise<T2>, third: ObservableOrPromise<T3>, fourth: ObservableOrPromise<T4>, fifth: ObservableOrPromise<T5>, sixth: ObservableOrPromise<T6>, eventh: ObservableOrPromise<T7>, resultSelector: (v1: T, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7) => TResult): Observable<TResult>;
        /**
        * Merges the specified observable sequences into one observable sequence by using the selector function whenever any of the observable sequences or Promises produces an element.
        *
        * @example
        * 1 - obs = Rx.Observable.combineLatest(obs1, obs2, obs3, function (o1, o2, o3) { return o1 + o2 + o3; });
        * 2 - obs = Rx.Observable.combineLatest([obs1, obs2, obs3], function (o1, o2, o3) { return o1 + o2 + o3; });
        * @returns {Observable} An observable sequence containing the result of combining elements of the sources using the specified result selector function.
        */
        combineLatest<T, T2, T3, T4, T5, T6, T7, T8, TResult>(first: ObservableOrPromise<T>, second: ObservableOrPromise<T2>, third: ObservableOrPromise<T3>, fourth: ObservableOrPromise<T4>, fifth: ObservableOrPromise<T5>, sixth: ObservableOrPromise<T6>, seventh: ObservableOrPromise<T7>, eighth: ObservableOrPromise<T8>, resultSelector: (v1: T, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7, v8: T8) => TResult): Observable<TResult>;
        /**
        * Merges the specified observable sequences into one observable sequence by using the selector function whenever any of the observable sequences or Promises produces an element.
        *
        * @example
        * 1 - obs = Rx.Observable.combineLatest(obs1, obs2, obs3, function (o1, o2, o3) { return o1 + o2 + o3; });
        * 2 - obs = Rx.Observable.combineLatest([obs1, obs2, obs3], function (o1, o2, o3) { return o1 + o2 + o3; });
        * @returns {Observable} An observable sequence containing the result of combining elements of the sources using the specified result selector function.
        */
        combineLatest<T, T2, T3, T4, T5, T6, T7, T8, T9, TResult>(first: ObservableOrPromise<T>, second: ObservableOrPromise<T2>, third: ObservableOrPromise<T3>, fourth: ObservableOrPromise<T4>, fifth: ObservableOrPromise<T5>, sixth: ObservableOrPromise<T6>, seventh: ObservableOrPromise<T7>, eighth: ObservableOrPromise<T8>, ninth: ObservableOrPromise<T9>, resultSelector: (v1: T, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7, v8: T8, v9: T9) => TResult): Observable<TResult>;
        /**
        * Merges the specified observable sequences into one observable sequence by using the selector function whenever any of the observable sequences or Promises produces an element.
        *
        * @example
        * 1 - obs = Rx.Observable.combineLatest(obs1, obs2, obs3, function (o1, o2, o3) { return o1 + o2 + o3; });
        * 2 - obs = Rx.Observable.combineLatest([obs1, obs2, obs3], function (o1, o2, o3) { return o1 + o2 + o3; });
        * @returns {Observable} An observable sequence containing the result of combining elements of the sources using the specified result selector function.
        */
        combineLatest<TOther, TResult>(souces: ObservableOrPromise<TOther>[], resultSelector: (...otherValues: TOther[]) => TResult): Observable<TResult>;
    }

    export interface Observable<T> {
        /**
        * Concatenates all the observable sequences.  This takes in either an array or variable arguments to concatenate.
        * @returns {Observable} An observable sequence that contains the elements of each given sequence, in sequential order.
        */
        concat(...sources: ObservableOrPromise<T>[]): Observable<T>;
    }

    export interface ObservableStatic {
        /**
        * Concatenates all the observable sequences.
        * @param {Array | Arguments} args Arguments or an array to concat to the observable sequence.
        * @returns {Observable} An observable sequence that contains the elements of each given sequence, in sequential order.
        */
        concat<T>(...sources: ObservableOrPromise<T>[]): Observable<T>;
        /**
        * Concatenates all the observable sequences.
        * @param {Array | Arguments} args Arguments or an array to concat to the observable sequence.
        * @returns {Observable} An observable sequence that contains the elements of each given sequence, in sequential order.
        */
        concat<T>(sources: ObservableOrPromise<T>[]): Observable<T>;
    }

    export interface Observable<T> {
        /**
          * Concatenates an observable sequence of observable sequences.
          * @returns {Observable} An observable sequence that contains the elements of each observed inner sequence, in sequential order.
          */
        concatAll(): T;
    }

    export interface Observable<T> {
        /**
        * Merges an observable sequence of observable sequences into an observable sequence, limiting the number of concurrent subscriptions to inner sequences.
        * Or merges two observable sequences into a single observable sequence.
        *
        * @example
        * 1 - merged = sources.merge(1);
        * 2 - merged = source.merge(otherSource);
        * @param {Mixed} [maxConcurrentOrOther] Maximum number of inner observable sequences being subscribed to concurrently or the second observable sequence.
        * @returns {Observable} The observable sequence that merges the elements of the inner sequences.
        */
        merge(maxConcurrent: number): T;
        /**
        * Merges an observable sequence of observable sequences into an observable sequence, limiting the number of concurrent subscriptions to inner sequences.
        * Or merges two observable sequences into a single observable sequence.
        *
        * @example
        * 1 - merged = sources.merge(1);
        * 2 - merged = source.merge(otherSource);
        * @param {Mixed} [maxConcurrentOrOther] Maximum number of inner observable sequences being subscribed to concurrently or the second observable sequence.
        * @returns {Observable} The observable sequence that merges the elements of the inner sequences.
        */
        merge(other: ObservableOrPromise<T>): Observable<T>;
    }

    export interface ObservableStatic {
        /**
        * Merges all the observable sequences into a single observable sequence.
        * The scheduler is optional and if not specified, the immediate scheduler is used.
        * @returns {Observable} The observable sequence that merges the elements of the observable sequences.
        */
        merge<T>(...sources: ObservableOrPromise<T>[]): Observable<T>;
        /**
        * Merges all the observable sequences into a single observable sequence.
        * The scheduler is optional and if not specified, the immediate scheduler is used.
        * @returns {Observable} The observable sequence that merges the elements of the observable sequences.
        */
        merge<T>(sources: ObservableOrPromise<T>[]): Observable<T>;
        /**
        * Merges all the observable sequences into a single observable sequence.
        * The scheduler is optional and if not specified, the immediate scheduler is used.
        * @returns {Observable} The observable sequence that merges the elements of the observable sequences.
        */
        merge<T>(scheduler: IScheduler, ...sources: ObservableOrPromise<T>[]): Observable<T>;
        /**
        * Merges all the observable sequences into a single observable sequence.
        * The scheduler is optional and if not specified, the immediate scheduler is used.
        * @returns {Observable} The observable sequence that merges the elements of the observable sequences.
        */
        merge<T>(scheduler: IScheduler, sources: ObservableOrPromise<T>[]): Observable<T>;
    }

    export interface Observable<T> {
        /**
        * Merges an observable sequence of observable sequences into an observable sequence.
        * @returns {Observable} The observable sequence that merges the elements of the inner sequences.
        */
        mergeAll(): T;
    }

    export interface ObservableStatic {
        /**
        * Flattens an Observable that emits Observables into one Observable, in a way that allows an Observer to
        * receive all successfully emitted items from all of the source Observables without being interrupted by
        * an error notification from one of them.
        *
        * This behaves like Observable.prototype.mergeAll except that if any of the merged Observables notify of an
        * error via the Observer's onError, mergeDelayError will refrain from propagating that
        * error notification until all of the merged Observables have finished emitting items.
        * @param {Array | Arguments} args Arguments or an array to merge.
        * @returns {Observable} an Observable that emits all of the items emitted by the Observables emitted by the Observable
        */
        mergeDelayError<T>(...sources: ObservableOrPromise<T>[]): Observable<T>;
        /**
        * Flattens an Observable that emits Observables into one Observable, in a way that allows an Observer to
        * receive all successfully emitted items from all of the source Observables without being interrupted by
        * an error notification from one of them.
        *
        * This behaves like Observable.prototype.mergeAll except that if any of the merged Observables notify of an
        * error via the Observer's onError, mergeDelayError will refrain from propagating that
        * error notification until all of the merged Observables have finished emitting items.
        * @param {Array | Arguments} args Arguments or an array to merge.
        * @returns {Observable} an Observable that emits all of the items emitted by the Observables emitted by the Observable
        */
        mergeDelayError<T>(sources: ObservableOrPromise<T>[]): Observable<T>;
    }

    export interface Observable<T> {
        /**
        * Continues an observable sequence that is terminated normally or by an exception with the next observable sequence.
        * @param {Observable} second Second observable sequence used to produce results after the first sequence terminates.
        * @returns {Observable} An observable sequence that concatenates the first and second sequence, even if the first sequence terminates exceptionally.
        */
        onErrorResumeNext(second: ObservableOrPromise<T>): Observable<T>;
    }

    export interface ObservableStatic {
        /**
        * Continues an observable sequence that is terminated normally or by an exception with the next observable sequence.
        *
        * @example
        * 1 - res = Rx.Observable.onErrorResumeNext(xs, ys, zs);
        * 1 - res = Rx.Observable.onErrorResumeNext([xs, ys, zs]);
        * @returns {Observable} An observable sequence that concatenates the source sequences, even if a sequence terminates exceptionally.
        */
        onErrorResumeNext<T>(...sources: ObservableOrPromise<T>[]): Observable<T>;
        /**
        * Continues an observable sequence that is terminated normally or by an exception with the next observable sequence.
        *
        * @example
        * 1 - res = Rx.Observable.onErrorResumeNext(xs, ys, zs);
        * 1 - res = Rx.Observable.onErrorResumeNext([xs, ys, zs]);
        * @returns {Observable} An observable sequence that concatenates the source sequences, even if a sequence terminates exceptionally.
        */
        onErrorResumeNext<T>(sources: ObservableOrPromise<T>[]): Observable<T>;
    }

    export interface Observable<T> {
        /**
        * Returns the values from the source observable sequence only after the other observable sequence produces a value.
        * @param {Observable | Promise} other The observable sequence or Promise that triggers propagation of elements of the source sequence.
        * @returns {Observable} An observable sequence containing the elements of the source sequence starting from the point the other sequence triggered propagation.
        */
        skipUntil<T2>(other: ObservableOrPromise<T2>): Observable<T>;
    }

    export interface Observable<T> {
        /**
        * Transforms an observable sequence of observable sequences into an observable sequence producing values only from the most recent observable sequence.
        * @returns {Observable} The observable sequence that at any point in time produces the elements of the most recent inner observable sequence that has been received.
        */
        switch(): T;
        /**
        * Transforms an observable sequence of observable sequences into an observable sequence producing values only from the most recent observable sequence.
        * @returns {Observable} The observable sequence that at any point in time produces the elements of the most recent inner observable sequence that has been received.
        */
        switchLatest(): T;
    }

    export interface Observable<T> {
        /**
        * Returns the values from the source observable sequence until the other observable sequence produces a value.
        * @param {Observable | Promise} other Observable sequence or Promise that terminates propagation of elements of the source sequence.
        * @returns {Observable} An observable sequence containing the elements of the source sequence up to the point the other sequence interrupted further propagation.
        */
        takeUntil<T2>(other: ObservableOrPromise<T2>): Observable<T>;
    }

    export interface Observable<T> {
        /**
        * Merges the specified observable sequences into one observable sequence by using the selector function only when the (first) source observable sequence produces an element.
        * @returns {Observable} An observable sequence containing the result of combining elements of the sources using the specified result selector function.
        */
        withLatestFrom<T2, TResult>(second: ObservableOrPromise<T2>, resultSelector: (v1: T, v2: T2) => TResult): Observable<TResult>;
        /**
        * Merges the specified observable sequences into one observable sequence by using the selector function only when the (first) source observable sequence produces an element.
        * @returns {Observable} An observable sequence containing the result of combining elements of the sources using the specified result selector function.
        */
        withLatestFrom<T2, T3, TResult>(second: ObservableOrPromise<T2>, third: ObservableOrPromise<T3>, resultSelector: (v1: T, v2: T2, v3: T3) => TResult): Observable<TResult>;
        /**
        * Merges the specified observable sequences into one observable sequence by using the selector function only when the (first) source observable sequence produces an element.
        * @returns {Observable} An observable sequence containing the result of combining elements of the sources using the specified result selector function.
        */
        withLatestFrom<T2, T3, T4, TResult>(second: ObservableOrPromise<T2>, third: ObservableOrPromise<T3>, fourth: ObservableOrPromise<T4>, resultSelector: (v1: T, v2: T2, v3: T3, v4: T4) => TResult): Observable<TResult>;
        /**
        * Merges the specified observable sequences into one observable sequence by using the selector function only when the (first) source observable sequence produces an element.
        * @returns {Observable} An observable sequence containing the result of combining elements of the sources using the specified result selector function.
        */
        withLatestFrom<T2, T3, T4, T5, TResult>(second: ObservableOrPromise<T2>, third: ObservableOrPromise<T3>, fourth: ObservableOrPromise<T4>, fifth: ObservableOrPromise<T5>, resultSelector: (v1: T, v2: T2, v3: T3, v4: T4, v5: T5) => TResult): Observable<TResult>;
        /**
        * Merges the specified observable sequences into one observable sequence by using the selector function only when the (first) source observable sequence produces an element.
        * @returns {Observable} An observable sequence containing the result of combining elements of the sources using the specified result selector function.
        */
        withLatestFrom<T2, T3, T4, T5, T6, TResult>(second: ObservableOrPromise<T2>, third: ObservableOrPromise<T3>, fourth: ObservableOrPromise<T4>, fifth: ObservableOrPromise<T5>, sixth: ObservableOrPromise<T6>, resultSelector: (v1: T, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => TResult): Observable<TResult>;
        /**
        * Merges the specified observable sequences into one observable sequence by using the selector function only when the (first) source observable sequence produces an element.
        * @returns {Observable} An observable sequence containing the result of combining elements of the sources using the specified result selector function.
        */
        withLatestFrom<T2, T3, T4, T5, T6, T7, TResult>(second: ObservableOrPromise<T2>, third: ObservableOrPromise<T3>, fourth: ObservableOrPromise<T4>, fifth: ObservableOrPromise<T5>, sixth: ObservableOrPromise<T6>, seventh: ObservableOrPromise<T7>, resultSelector: (v1: T, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7) => TResult): Observable<TResult>;
        /**
        * Merges the specified observable sequences into one observable sequence by using the selector function only when the (first) source observable sequence produces an element.
        * @returns {Observable} An observable sequence containing the result of combining elements of the sources using the specified result selector function.
        */
        withLatestFrom<T2, T3, T4, T5, T6, T7, T8, TResult>(second: ObservableOrPromise<T2>, third: ObservableOrPromise<T3>, fourth: ObservableOrPromise<T4>, fifth: ObservableOrPromise<T5>, sixth: ObservableOrPromise<T6>, seventh: ObservableOrPromise<T7>, eighth: ObservableOrPromise<T8>, resultSelector: (v1: T, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7, v8: T8) => TResult): Observable<TResult>;
        /**
        * Merges the specified observable sequences into one observable sequence by using the selector function only when the (first) source observable sequence produces an element.
        * @returns {Observable} An observable sequence containing the result of combining elements of the sources using the specified result selector function.
        */
        withLatestFrom<T2, T3, T4, T5, T6, T7, T8, T9, TResult>(second: ObservableOrPromise<T2>, third: ObservableOrPromise<T3>, fourth: ObservableOrPromise<T4>, fifth: ObservableOrPromise<T5>, sixth: ObservableOrPromise<T6>, seventh: ObservableOrPromise<T7>, eighth: ObservableOrPromise<T8>, ninth: ObservableOrPromise<T9>, resultSelector: (v1: T, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7, v8: T8, v9: T9) => TResult): Observable<TResult>;
        /**
        * Merges the specified observable sequences into one observable sequence by using the selector function only when the (first) source observable sequence produces an element.
        * @returns {Observable} An observable sequence containing the result of combining elements of the sources using the specified result selector function.
        */
        withLatestFrom<TOther, TResult>(souces: ObservableOrPromise<TOther>[], resultSelector: (firstValue: T, ...otherValues: TOther[]) => TResult): Observable<TResult>;
    }

    export interface ObservableStatic {
        /**
        * Merges the specified observable sequences into one observable sequence by using the selector function whenever all of the observable sequences have produced an element at a corresponding index.
        * @param arguments Observable sources.
        * @param {Function} resultSelector Function to invoke for each series of elements at corresponding indexes in the sources.
        * @returns {Observable} An observable sequence containing the result of combining elements of the sources using the specified result selector function.
        */
        zip<T1, T2, TResult>(sources: ObservableOrPromise<T2>[], resultSelector?: (item1: T1, ...right: T2[]) => TResult): Observable<TResult>;
        /**
        * Merges the specified observable sequences into one observable sequence by using the selector function whenever all of the observable sequences have produced an element at a corresponding index.
        * @param arguments Observable sources.
        * @param {Function} resultSelector Function to invoke for each series of elements at corresponding indexes in the sources.
        * @returns {Observable} An observable sequence containing the result of combining elements of the sources using the specified result selector function.
        */
        zip<T1, T2, TResult>(source1: ObservableOrPromise<T1>, ObservableOrPromise: Observable<T2>, resultSelector?: (item1: T1, item2: T2) => TResult): Observable<TResult>;
        /**
        * Merges the specified observable sequences into one observable sequence by using the selector function whenever all of the observable sequences have produced an element at a corresponding index.
        * @param arguments Observable sources.
        * @param {Function} resultSelector Function to invoke for each series of elements at corresponding indexes in the sources.
        * @returns {Observable} An observable sequence containing the result of combining elements of the sources using the specified result selector function.
        */
        zip<T1, T2, T3, TResult>(source1: ObservableOrPromise<T1>, source2: ObservableOrPromise<T2>, source3: ObservableOrPromise<T3>, resultSelector?: (item1: T1, item2: T2, item3: T3) => TResult): Observable<TResult>;
        /**
        * Merges the specified observable sequences into one observable sequence by using the selector function whenever all of the observable sequences have produced an element at a corresponding index.
        * @param arguments Observable sources.
        * @param {Function} resultSelector Function to invoke for each series of elements at corresponding indexes in the sources.
        * @returns {Observable} An observable sequence containing the result of combining elements of the sources using the specified result selector function.
        */
        zip<T1, T2, T3, T4, TResult>(source1: Observable<T1>, source2: ObservableOrPromise<T2>, source3: ObservableOrPromise<T3>, source4: ObservableOrPromise<T4>, resultSelector?: (item1: T1, item2: T2, item3: T3, item4: T4) => TResult): Observable<TResult>;
        /**
        * Merges the specified observable sequences into one observable sequence by using the selector function whenever all of the observable sequences have produced an element at a corresponding index.
        * @param arguments Observable sources.
        * @param {Function} resultSelector Function to invoke for each series of elements at corresponding indexes in the sources.
        * @returns {Observable} An observable sequence containing the result of combining elements of the sources using the specified result selector function.
        */
        zip<T1, T2, T3, T4, T5, TResult>(source1: ObservableOrPromise<T1>, source2: ObservableOrPromise<T2>, source3: ObservableOrPromise<T3>, source4: ObservableOrPromise<T4>, source5: ObservableOrPromise<T5>, resultSelector?: (item1: T1, item2: T2, item3: T3, item4: T4, item5: T5) => TResult): Observable<TResult>;
        /**
        * Merges the specified observable sequences into one observable sequence by using the selector function whenever all of the observable sequences have produced an element at a corresponding index.
        * @param arguments Observable sources.
        * @param {Function} resultSelector Function to invoke for each series of elements at corresponding indexes in the sources.
        * @returns {Observable} An observable sequence containing the result of combining elements of the sources using the specified result selector function.
        */
        zip<T1, T2, T3, T4, T5, T6, TResult>(source1: ObservableOrPromise<T1>, source2: ObservableOrPromise<T2>, source3: ObservableOrPromise<T3>, source4: ObservableOrPromise<T4>, source5: ObservableOrPromise<T5>, source6: ObservableOrPromise<T6>, resultSelector?: (item1: T1, item2: T2, item3: T3, item4: T4, item5: T5, item6: T6) => TResult): Observable<TResult>;
        /**
        * Merges the specified observable sequences into one observable sequence by using the selector function whenever all of the observable sequences have produced an element at a corresponding index.
        * @param arguments Observable sources.
        * @param {Function} resultSelector Function to invoke for each series of elements at corresponding indexes in the sources.
        * @returns {Observable} An observable sequence containing the result of combining elements of the sources using the specified result selector function.
        */
        zip<T1, T2, T3, T4, T5, T6, T7, TResult>(source1: ObservableOrPromise<T1>, source2: ObservableOrPromise<T2>, source3: ObservableOrPromise<T3>, source4: ObservableOrPromise<T4>, source5: ObservableOrPromise<T5>, source6: ObservableOrPromise<T6>, source7: ObservableOrPromise<T7>, resultSelector?: (item1: T1, item2: T2, item3: T3, item4: T4, item5: T5, item6: T6, item7: T7) => TResult): Observable<TResult>;
        /**
        * Merges the specified observable sequences into one observable sequence by using the selector function whenever all of the observable sequences have produced an element at a corresponding index.
        * @param arguments Observable sources.
        * @param {Function} resultSelector Function to invoke for each series of elements at corresponding indexes in the sources.
        * @returns {Observable} An observable sequence containing the result of combining elements of the sources using the specified result selector function.
        */
        zip<T1, T2, T3, T4, T5, T6, T7, T8, TResult>(source1: ObservableOrPromise<T1>, source2: ObservableOrPromise<T2>, source3: ObservableOrPromise<T3>, source4: ObservableOrPromise<T4>, source5: ObservableOrPromise<T5>, source6: ObservableOrPromise<T6>, source7: ObservableOrPromise<T7>, source8: ObservableOrPromise<T8>, resultSelector?: (item1: T1, item2: T2, item3: T3, item4: T4, item5: T5, item6: T6, item7: T7, item8: T8) => TResult): Observable<TResult>;
        /**
        * Merges the specified observable sequences into one observable sequence by using the selector function whenever all of the observable sequences have produced an element at a corresponding index.
        * @param arguments Observable sources.
        * @param {Function} resultSelector Function to invoke for each series of elements at corresponding indexes in the sources.
        * @returns {Observable} An observable sequence containing the result of combining elements of the sources using the specified result selector function.
        */
        zip<T1, T2, T3, T4, T5, T6, T7, T8, T9, TResult>(source1: ObservableOrPromise<T1>, source2: ObservableOrPromise<T2>, source3: ObservableOrPromise<T3>, source4: ObservableOrPromise<T4>, source5: ObservableOrPromise<T5>, source6: ObservableOrPromise<T6>, source7: ObservableOrPromise<T7>, source8: ObservableOrPromise<T8>, source9: ObservableOrPromise<T9>, resultSelector?: (item1: T1, item2: T2, item3: T3, item4: T4, item5: T5, item6: T6, item7: T7, item8: T8, item9: T9) => TResult): Observable<TResult>;
    }

    export interface Observable<T> {
        /**
         * Merges the specified observable sequences into one observable sequence by using the selector function whenever all of the observable sequences or an array have produced an element at a corresponding index.
         * The last element in the arguments must be a function to invoke for each series of elements at corresponding indexes in the args.
         * @returns {Observable} An observable sequence containing the result of combining elements of the args using the specified result selector function.
         */
        zip<T2, TResult>(second: ObservableOrPromise<T2>, resultSelector?: (v1: T, v2: T2) => TResult): Observable<TResult>;
        /**
         * Merges the specified observable sequences into one observable sequence by using the selector function whenever all of the observable sequences or an array have produced an element at a corresponding index.
         * The last element in the arguments must be a function to invoke for each series of elements at corresponding indexes in the args.
         * @returns {Observable} An observable sequence containing the result of combining elements of the args using the specified result selector function.
         */
        zip<T2, T3, TResult>(second: ObservableOrPromise<T2>, third: ObservableOrPromise<T3>, resultSelector?: (v1: T, v2: T2, v3: T3) => TResult): Observable<TResult>;
        /**
         * Merges the specified observable sequences into one observable sequence by using the selector function whenever all of the observable sequences or an array have produced an element at a corresponding index.
         * The last element in the arguments must be a function to invoke for each series of elements at corresponding indexes in the args.
         * @returns {Observable} An observable sequence containing the result of combining elements of the args using the specified result selector function.
         */
        zip<T2, T3, T4, TResult>(second: ObservableOrPromise<T2>, third: ObservableOrPromise<T3>, fourth: ObservableOrPromise<T4>, resultSelector?: (v1: T, v2: T2, v3: T3, v4: T4) => TResult): Observable<TResult>;
        /**
         * Merges the specified observable sequences into one observable sequence by using the selector function whenever all of the observable sequences or an array have produced an element at a corresponding index.
         * The last element in the arguments must be a function to invoke for each series of elements at corresponding indexes in the args.
         * @returns {Observable} An observable sequence containing the result of combining elements of the args using the specified result selector function.
         */
        zip<T2, T3, T4, T5, TResult>(second: ObservableOrPromise<T2>, third: ObservableOrPromise<T3>, fourth: ObservableOrPromise<T4>, fifth: ObservableOrPromise<T5>, resultSelector?: (v1: T, v2: T2, v3: T3, v4: T4, v5: T5) => TResult): Observable<TResult>;
        /**
         * Merges the specified observable sequences into one observable sequence by using the selector function whenever all of the observable sequences or an array have produced an element at a corresponding index.
         * The last element in the arguments must be a function to invoke for each series of elements at corresponding indexes in the args.
         * @returns {Observable} An observable sequence containing the result of combining elements of the args using the specified result selector function.
         */
        zip<T2, T3, T4, T5, T6, TResult>(second: ObservableOrPromise<T2>, third: ObservableOrPromise<T3>, fourth: ObservableOrPromise<T4>, fifth: ObservableOrPromise<T5>, sixth: ObservableOrPromise<T6>, resultSelector?: (v1: T, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => TResult): Observable<TResult>;
        /**
         * Merges the specified observable sequences into one observable sequence by using the selector function whenever all of the observable sequences or an array have produced an element at a corresponding index.
         * The last element in the arguments must be a function to invoke for each series of elements at corresponding indexes in the args.
         * @returns {Observable} An observable sequence containing the result of combining elements of the args using the specified result selector function.
         */
        zip<T2, T3, T4, T5, T6, T7, TResult>(second: ObservableOrPromise<T2>, third: ObservableOrPromise<T3>, fourth: ObservableOrPromise<T4>, fifth: ObservableOrPromise<T5>, sixth: ObservableOrPromise<T6>, seventh: ObservableOrPromise<T7>, resultSelector?: (v1: T, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7) => TResult): Observable<TResult>;
        /**
         * Merges the specified observable sequences into one observable sequence by using the selector function whenever all of the observable sequences or an array have produced an element at a corresponding index.
         * The last element in the arguments must be a function to invoke for each series of elements at corresponding indexes in the args.
         * @returns {Observable} An observable sequence containing the result of combining elements of the args using the specified result selector function.
         */
        zip<T2, T3, T4, T5, T6, T7, T8, TResult>(second: ObservableOrPromise<T2>, third: ObservableOrPromise<T3>, fourth: ObservableOrPromise<T4>, fifth: ObservableOrPromise<T5>, sixth: ObservableOrPromise<T6>, seventh: ObservableOrPromise<T7>, eighth: ObservableOrPromise<T8>, resultSelector?: (v1: T, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7, v8: T8) => TResult): Observable<TResult>;
        /**
         * Merges the specified observable sequences into one observable sequence by using the selector function whenever all of the observable sequences or an array have produced an element at a corresponding index.
         * The last element in the arguments must be a function to invoke for each series of elements at corresponding indexes in the args.
         * @returns {Observable} An observable sequence containing the result of combining elements of the args using the specified result selector function.
         */
        zip<T2, T3, T4, T5, T6, T7, T8, T9, TResult>(second: ObservableOrPromise<T2>, third: ObservableOrPromise<T3>, fourth: ObservableOrPromise<T4>, fifth: ObservableOrPromise<T5>, sixth: ObservableOrPromise<T6>, seventh: ObservableOrPromise<T7>, eighth: ObservableOrPromise<T8>, ninth: ObservableOrPromise<T9>, resultSelector?: (v1: T, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7, v8: T8, v9: T9) => TResult): Observable<TResult>;
        /**
         * Merges the specified observable sequences into one observable sequence by using the selector function whenever all of the observable sequences or an array have produced an element at a corresponding index.
         * The last element in the arguments must be a function to invoke for each series of elements at corresponding indexes in the args.
         * @returns {Observable} An observable sequence containing the result of combining elements of the args using the specified result selector function.
         */
        zip<TOther, TResult>(souces: ObservableOrPromise<TOther>[], resultSelector?: (firstValue: T, ...otherValues: TOther[]) => TResult): Observable<TResult>;
    }

    export interface ObservableStatic {
        /**
        * Merges the specified observable sequences into one observable sequence by emitting a list with the elements of the observable sequences at corresponding indexes.
        * @param arguments Observable sources.
        * @returns {Observable} An observable sequence containing lists of elements at corresponding indexes.
        */
        zipIterable<T>(...sources: Observable<T>[]): Observable<T[]>;
        /**
        * Merges the specified observable sequences into one observable sequence by emitting a list with the elements of the observable sequences at corresponding indexes.
        * @param arguments Observable sources.
        * @returns {Observable} An observable sequence containing lists of elements at corresponding indexes.
        */
        zipIterable<T>(sources: Observable<T>[]): Observable<T[]>;
    }

    export interface Observable<T> {
        /**
       *  Hides the identity of an observable sequence.
       * @returns {Observable} An observable sequence that hides the identity of the source sequence.
       */
        asObservable(): Observable<T>;
    }

    export interface Observable<T> {
        /**
        *  Projects each element of an observable sequence into zero or more buffers which are produced based on element count information.
        * @param {Number} count Length of each buffer.
        * @param {Number} [skip] Number of elements to skip between creation of consecutive buffers. If not provided, defaults to the count.
        * @returns {Observable} An observable sequence of buffers.
        */
        bufferWithCount(count: number, skip?: number): Observable<T[]>;
    }

    export interface Observable<T> {
        /**
        * Dematerializes the explicit notification values of an observable sequence as implicit notifications.
        * @returns {Observable} An observable sequence exhibiting the behavior corresponding to the source sequence's notification values.
        */
        dematerialize<TOrigin>(): Observable<TOrigin>;
    }

    export interface Observable<T> {
        /**
        *  Returns an observable sequence that contains only distinct contiguous elements according to the keySelector and the comparer.
        *
        *  var obs = observable.distinctUntilChanged();
        *  var obs = observable.distinctUntilChanged(function (x) { return x.id; });
        *  var obs = observable.distinctUntilChanged(function (x) { return x.id; }, function (x, y) { return x === y; });
        *
        * @param {Function} [keySelector] A function to compute the comparison key for each element. If not provided, it projects the value.
        * @param {Function} [comparer] Equality comparer for computed key values. If not provided, defaults to an equality comparer function.
        * @returns {Observable} An observable sequence only containing the distinct contiguous elements, based on a computed key value, from the source sequence.
        */
        distinctUntilChanged<TValue>(keySelector?: (value: T) => TValue, comparer?: _Comparer<TValue, boolean>): Observable<T>;
    }

    export interface Observable<T> {
        /**
        *  Invokes an action for each element in the observable sequence and invokes an action upon graceful or exceptional termination of the observable sequence.
        *  This method can be used for debugging, logging, etc. of query behavior by intercepting the message stream to run arbitrary actions for messages on the pipeline.
        * @param {Function | Observer} observerOrOnNext Action to invoke for each element in the observable sequence or an observer.
        * @param {Function} [onError]  Action to invoke upon exceptional termination of the observable sequence. Used if only the observerOrOnNext parameter is also a function.
        * @param {Function} [onCompleted]  Action to invoke upon graceful termination of the observable sequence. Used if only the observerOrOnNext parameter is also a function.
        * @returns {Observable} The source sequence with the side-effecting behavior applied.
        */
        do(observer: Observer<T>): Observable<T>;
        /**
        *  Invokes an action for each element in the observable sequence and invokes an action upon graceful or exceptional termination of the observable sequence.
        *  This method can be used for debugging, logging, etc. of query behavior by intercepting the message stream to run arbitrary actions for messages on the pipeline.
        * @param {Function | Observer} observerOrOnNext Action to invoke for each element in the observable sequence or an observer.
        * @param {Function} [onError]  Action to invoke upon exceptional termination of the observable sequence. Used if only the observerOrOnNext parameter is also a function.
        * @param {Function} [onCompleted]  Action to invoke upon graceful termination of the observable sequence. Used if only the observerOrOnNext parameter is also a function.
        * @returns {Observable} The source sequence with the side-effecting behavior applied.
        */
        tap(observer: Observer<T>): Observable<T>;

        /**
        *  Invokes an action for each element in the observable sequence and invokes an action upon graceful or exceptional termination of the observable sequence.
        *  This method can be used for debugging, logging, etc. of query behavior by intercepting the message stream to run arbitrary actions for messages on the pipeline.
        * @param {Function | Observer} observerOrOnNext Action to invoke for each element in the observable sequence or an observer.
        * @param {Function} [onError]  Action to invoke upon exceptional termination of the observable sequence. Used if only the observerOrOnNext parameter is also a function.
        * @param {Function} [onCompleted]  Action to invoke upon graceful termination of the observable sequence. Used if only the observerOrOnNext parameter is also a function.
        * @returns {Observable} The source sequence with the side-effecting behavior applied.
        */
        do(onNext?: (value: T) => void, onError?: (exception: any) => void, onCompleted?: () => void): Observable<T>;
        /**
        *  Invokes an action for each element in the observable sequence and invokes an action upon graceful or exceptional termination of the observable sequence.
        *  This method can be used for debugging, logging, etc. of query behavior by intercepting the message stream to run arbitrary actions for messages on the pipeline.
        * @param {Function | Observer} observerOrOnNext Action to invoke for each element in the observable sequence or an observer.
        * @param {Function} [onError]  Action to invoke upon exceptional termination of the observable sequence. Used if only the observerOrOnNext parameter is also a function.
        * @param {Function} [onCompleted]  Action to invoke upon graceful termination of the observable sequence. Used if only the observerOrOnNext parameter is also a function.
        * @returns {Observable} The source sequence with the side-effecting behavior applied.
        */
        tap(onNext?: (value: T) => void, onError?: (exception: any) => void, onCompleted?: () => void): Observable<T>;

        /**
        *  Invokes an action for each element in the observable sequence.
        *  This method can be used for debugging, logging, etc. of query behavior by intercepting the message stream to run arbitrary actions for messages on the pipeline.
        * @param {Function} onNext Action to invoke for each element in the observable sequence.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} The source sequence with the side-effecting behavior applied.
        */
        doOnNext(onNext: (value: T) => void, thisArg?: any): Observable<T>;
        /**
        *  Invokes an action upon exceptional termination of the observable sequence.
        *  This method can be used for debugging, logging, etc. of query behavior by intercepting the message stream to run arbitrary actions for messages on the pipeline.
        * @param {Function} onError Action to invoke upon exceptional termination of the observable sequence.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} The source sequence with the side-effecting behavior applied.
        */
        doOnError(onError: (exception: any) => void, thisArg?: any): Observable<T>;
        /**
        *  Invokes an action upon graceful termination of the observable sequence.
        *  This method can be used for debugging, logging, etc. of query behavior by intercepting the message stream to run arbitrary actions for messages on the pipeline.
        * @param {Function} onCompleted Action to invoke upon graceful termination of the observable sequence.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} The source sequence with the side-effecting behavior applied.
        */
        doOnCompleted(onCompleted: () => void, thisArg?: any): Observable<T>;

        /**
        *  Invokes an action for each element in the observable sequence.
        *  This method can be used for debugging, logging, etc. of query behavior by intercepting the message stream to run arbitrary actions for messages on the pipeline.
        * @param {Function} onNext Action to invoke for each element in the observable sequence.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} The source sequence with the side-effecting behavior applied.
        */
        tapOnNext(onNext: (value: T) => void, thisArg?: any): Observable<T>;
        /**
        *  Invokes an action upon exceptional termination of the observable sequence.
        *  This method can be used for debugging, logging, etc. of query behavior by intercepting the message stream to run arbitrary actions for messages on the pipeline.
        * @param {Function} onError Action to invoke upon exceptional termination of the observable sequence.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} The source sequence with the side-effecting behavior applied.
        */
        tapOnError(onError: (exception: any) => void, thisArg?: any): Observable<T>;
        /**
        *  Invokes an action upon graceful termination of the observable sequence.
        *  This method can be used for debugging, logging, etc. of query behavior by intercepting the message stream to run arbitrary actions for messages on the pipeline.
        * @param {Function} onCompleted Action to invoke upon graceful termination of the observable sequence.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} The source sequence with the side-effecting behavior applied.
        */
        tapOnCompleted(onCompleted: () => void, thisArg?: any): Observable<T>;
    }

    export interface Observable<T> {
        /**
        *  Invokes a specified action after the source observable sequence terminates gracefully or exceptionally.
        * @param {Function} finallyAction Action to invoke after the source observable sequence terminates.
        * @returns {Observable} Source sequence with the action-invoking termination behavior applied.
        */
        finally(action: () => void): Observable<T>;

        /**
        *  Invokes a specified action after the source observable sequence terminates gracefully or exceptionally.
        * @param {Function} finallyAction Action to invoke after the source observable sequence terminates.
        * @returns {Observable} Source sequence with the action-invoking termination behavior applied.
        */
        ensure(action: () => void): Observable<T>;
    }

    export interface Observable<T> {
        /**
        *  Ignores all elements in an observable sequence leaving only the termination messages.
        * @returns {Observable} An empty observable sequence that signals termination, successful or exceptional, of the source sequence.
        */
        ignoreElements(): Observable<T>;
    }

    export interface Observable<T> {
        /**
        *  Materializes the implicit notifications of an observable sequence as explicit notification values.
        * @returns {Observable} An observable sequence containing the materialized notification values from the source sequence.
        */
        materialize(): Observable<T>;
    }

    export interface Observable<T> {
        /**
         *  Repeats the observable sequence a specified number of times. If the repeat count is not specified, the sequence repeats indefinitely.
         * @param {Number} [repeatCount]  Number of times to repeat the sequence. If not provided, repeats the sequence indefinitely.
         * @returns {Observable} The observable sequence producing the elements of the given sequence repeatedly.
         */
        repeat(repeatCount?: number): Observable<T>;
    }

    export interface Observable<T> {
        /**
        *  Repeats the source observable sequence the specified number of times or until it successfully terminates. If the retry count is not specified, it retries indefinitely.
        *  Note if you encounter an error and want it to retry once, then you must use .retry(2);
        *
        * @example
        *  var res = retried = retry.repeat();
        *  var res = retried = retry.repeat(2);
        * @param {Number} [retryCount]  Number of times to retry the sequence. If not provided, retry the sequence indefinitely.
        * @returns {Observable} An observable sequence producing the elements of the given sequence repeatedly until it terminates successfully.
        */
        retry(retryCount?: number): Observable<T>;
    }

    export interface Observable<T> {
        /**
         *  Repeats the source observable sequence upon error each time the notifier emits or until it successfully terminates.
         *  if the notifier completes, the observable sequence completes.
         *
         * @example
         *  var timer = Observable.timer(500);
         *  var source = observable.retryWhen(timer);
         * @param {Observable} [notifier] An observable that triggers the retries or completes the observable with onNext or onCompleted respectively.
         * @returns {Observable} An observable sequence producing the elements of the given sequence repeatedly until it terminates successfully.
         */
        retryWhen(notifier: (errors: Observable<any>) => Observable<any>): Observable<T>;
    }

    export interface Observable<T> {
        /**
        *  Applies an accumulator function over an observable sequence and returns each intermediate result. The optional seed value is used as the initial accumulator value.
        *  For aggregation behavior with no intermediate results, see Observable.aggregate.
        * @example
        *  var res = source.scan(function (acc, x) { return acc + x; });
        *  var res = source.scan(function (acc, x) { return acc + x; }, 0);
        * @param {Function} accumulator An accumulator function to be invoked on each element.
        * @param {Mixed} [seed] The initial accumulator value.
        * @returns {Observable} An observable sequence containing the accumulated values.
        */
        scan<TAcc>(accumulator: _Accumulator<T, TAcc>, seed?: TAcc): Observable<TAcc>;
        /**
        *  Applies an accumulator function over an observable sequence and returns each intermediate result. The optional seed value is used as the initial accumulator value.
        *  For aggregation behavior with no intermediate results, see Observable.aggregate.
        * @example
        *  var res = source.scan(function (acc, x) { return acc + x; });
        *  var res = source.scan(function (acc, x) { return acc + x; }, 0);
        * @param {Function} accumulator An accumulator function to be invoked on each element.
        * @param {Mixed} [seed] The initial accumulator value.
        * @returns {Observable} An observable sequence containing the accumulated values.
        */
        scan(accumulator: _Accumulator<T, T>, seed?: T): Observable<T>;
    }

    export interface Observable<T> {
        /**
        *  Bypasses a specified number of elements at the end of an observable sequence.
        * @description
        *  This operator accumulates a queue with a length enough to store the first `count` elements. As more elements are
        *  received, elements are taken from the front of the queue and produced on the result sequence. This causes elements to be delayed.
        * @param count Number of elements to bypass at the end of the source sequence.
        * @returns {Observable} An observable sequence containing the source sequence elements except for the bypassed ones at the end.
        */
        skipLast(count: number): Observable<T>;
    }

    export interface Observable<T> {
        /**
        *  Prepends a sequence of values to an observable sequence with an optional scheduler and an argument list of values to prepend.
        *  @example
        *  var res = source.startWith(1, 2, 3);
        *  var res = source.startWith(Rx.Scheduler.timeout, 1, 2, 3);
        * @param {Arguments} args The specified values to prepend to the observable sequence
        * @returns {Observable} The source sequence prepended with the specified values.
        */
        startWith(...values: T[]): Observable<T>;
        /**
        *  Prepends a sequence of values to an observable sequence with an optional scheduler and an argument list of values to prepend.
        *  @example
        *  var res = source.startWith(1, 2, 3);
        *  var res = source.startWith(Rx.Scheduler.timeout, 1, 2, 3);
        * @param {Arguments} args The specified values to prepend to the observable sequence
        * @returns {Observable} The source sequence prepended with the specified values.
        */
        startWith(scheduler: IScheduler, ...values: T[]): Observable<T>;
    }

    export interface Observable<T> {
        /**
        *  Returns a specified number of contiguous elements from the end of an observable sequence.
        * @description
        *  This operator accumulates a buffer with a length enough to store elements count elements. Upon completion of
        *  the source sequence, this buffer is drained on the result sequence. This causes the elements to be delayed.
        * @param {Number} count Number of elements to take from the end of the source sequence.
        * @returns {Observable} An observable sequence containing the specified number of elements from the end of the source sequence.
        */
        takeLast(count: number): Observable<T>;
    }

    export interface Observable<T> {
        /**
        *  Returns an array with the specified number of contiguous elements from the end of an observable sequence.
        *
        * @description
        *  This operator accumulates a buffer with a length enough to store count elements. Upon completion of the
        *  source sequence, this buffer is produced on the result sequence.
        * @param {Number} count Number of elements to take from the end of the source sequence.
        * @returns {Observable} An observable sequence containing a single array with the specified number of elements from the end of the source sequence.
        */
        takeLastBuffer(count: number): Observable<T[]>;
    }

    export interface Observable<T> {
        /**
        *  Projects each element of an observable sequence into zero or more windows which are produced based on element count information.
        *
        *  var res = xs.windowWithCount(10);
        *  var res = xs.windowWithCount(10, 1);
        * @param {Number} count Length of each window.
        * @param {Number} [skip] Number of elements to skip between creation of consecutive windows. If not specified, defaults to the count.
        * @returns {Observable} An observable sequence of windows.
        */
        windowWithCount(count: number, skip?: number): Observable<Observable<T>>;
    }

    export interface Observable<T> {
        /**
        *  One of the Following:
        *  Projects each element of an observable sequence to an observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        * @example
        *  var res = source.concatMap(function (x) { return Rx.Observable.range(0, x); });
        *  Or:
        *  Projects each element of an observable sequence to an observable sequence, invokes the result selector for the source element and each of the corresponding inner sequence's elements, and merges the results into one observable sequence.
        *
        *  var res = source.concatMap(function (x) { return Rx.Observable.range(0, x); }, function (x, y) { return x + y; });
        *  Or:
        *  Projects each element of the source observable sequence to the other observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        *  var res = source.concatMap(Rx.Observable.fromArray([1,2,3]));
        * @param {Function} selector A transform function to apply to each element or an observable sequence to project each element from the
        * source sequence onto which could be either an observable or Promise.
        * @param {Function} [resultSelector]  A transform function to apply to each element of the intermediate sequence.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the one-to-many transform function collectionSelector on each element of the input sequence and then mapping each of those sequence elements and their corresponding source element to a result element.
        */
        concatMap<TResult>(selector: _ValueOrSelector<T, ObservableOrPromise<TResult>>): Observable<TResult>;
        /**
        *  One of the Following:
        *  Projects each element of an observable sequence to an observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        * @example
        *  var res = source.concatMap(function (x) { return Rx.Observable.range(0, x); });
        *  Or:
        *  Projects each element of an observable sequence to an observable sequence, invokes the result selector for the source element and each of the corresponding inner sequence's elements, and merges the results into one observable sequence.
        *
        *  var res = source.concatMap(function (x) { return Rx.Observable.range(0, x); }, function (x, y) { return x + y; });
        *  Or:
        *  Projects each element of the source observable sequence to the other observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        *  var res = source.concatMap(Rx.Observable.fromArray([1,2,3]));
        * @param {Function} selector A transform function to apply to each element or an observable sequence to project each element from the
        * source sequence onto which could be either an observable or Promise.
        * @param {Function} [resultSelector]  A transform function to apply to each element of the intermediate sequence.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the one-to-many transform function collectionSelector on each element of the input sequence and then mapping each of those sequence elements and their corresponding source element to a result element.
        */
        concatMap<TResult>(selector: _ValueOrSelector<T, ArrayOrIterable<TResult>>): Observable<TResult>;
        /**
        *  One of the Following:
        *  Projects each element of an observable sequence to an observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        * @example
        *  var res = source.concatMap(function (x) { return Rx.Observable.range(0, x); });
        *  Or:
        *  Projects each element of an observable sequence to an observable sequence, invokes the result selector for the source element and each of the corresponding inner sequence's elements, and merges the results into one observable sequence.
        *
        *  var res = source.concatMap(function (x) { return Rx.Observable.range(0, x); }, function (x, y) { return x + y; });
        *  Or:
        *  Projects each element of the source observable sequence to the other observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        *  var res = source.concatMap(Rx.Observable.fromArray([1,2,3]));
        * @param {Function} selector A transform function to apply to each element or an observable sequence to project each element from the
        * source sequence onto which could be either an observable or Promise.
        * @param {Function} [resultSelector]  A transform function to apply to each element of the intermediate sequence.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the one-to-many transform function collectionSelector on each element of the input sequence and then mapping each of those sequence elements and their corresponding source element to a result element.
        */
        concatMap<TOther, TResult>(selector: _ValueOrSelector<T, ObservableOrPromise<TOther>>, resultSelector: special._FlatMapResultSelector<T, TOther, TResult>, thisArg?: any): Observable<TResult>;
        /**
        *  One of the Following:
        *  Projects each element of an observable sequence to an observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        * @example
        *  var res = source.concatMap(function (x) { return Rx.Observable.range(0, x); });
        *  Or:
        *  Projects each element of an observable sequence to an observable sequence, invokes the result selector for the source element and each of the corresponding inner sequence's elements, and merges the results into one observable sequence.
        *
        *  var res = source.concatMap(function (x) { return Rx.Observable.range(0, x); }, function (x, y) { return x + y; });
        *  Or:
        *  Projects each element of the source observable sequence to the other observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        *  var res = source.concatMap(Rx.Observable.fromArray([1,2,3]));
        * @param {Function} selector A transform function to apply to each element or an observable sequence to project each element from the
        * source sequence onto which could be either an observable or Promise.
        * @param {Function} [resultSelector]  A transform function to apply to each element of the intermediate sequence.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the one-to-many transform function collectionSelector on each element of the input sequence and then mapping each of those sequence elements and their corresponding source element to a result element.
        */
        concatMap<TOther, TResult>(selector: _ValueOrSelector<T, ArrayOrIterable<TOther>>, resultSelector: special._FlatMapResultSelector<T, TOther, TResult>, thisArg?: any): Observable<TResult>;
        /**
        *  One of the Following:
        *  Projects each element of an observable sequence to an observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        * @example
        *  var res = source.concatMap(function (x) { return Rx.Observable.range(0, x); });
        *  Or:
        *  Projects each element of an observable sequence to an observable sequence, invokes the result selector for the source element and each of the corresponding inner sequence's elements, and merges the results into one observable sequence.
        *
        *  var res = source.concatMap(function (x) { return Rx.Observable.range(0, x); }, function (x, y) { return x + y; });
        *  Or:
        *  Projects each element of the source observable sequence to the other observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        *  var res = source.concatMap(Rx.Observable.fromArray([1,2,3]));
        * @param {Function} selector A transform function to apply to each element or an observable sequence to project each element from the
        * source sequence onto which could be either an observable or Promise.
        * @param {Function} [resultSelector]  A transform function to apply to each element of the intermediate sequence.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the one-to-many transform function collectionSelector on each element of the input sequence and then mapping each of those sequence elements and their corresponding source element to a result element.
        */
        selectConcat<TResult>(selector: _ValueOrSelector<T, ObservableOrPromise<TResult>>): Observable<TResult>;
        /**
        *  One of the Following:
        *  Projects each element of an observable sequence to an observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        * @example
        *  var res = source.concatMap(function (x) { return Rx.Observable.range(0, x); });
        *  Or:
        *  Projects each element of an observable sequence to an observable sequence, invokes the result selector for the source element and each of the corresponding inner sequence's elements, and merges the results into one observable sequence.
        *
        *  var res = source.concatMap(function (x) { return Rx.Observable.range(0, x); }, function (x, y) { return x + y; });
        *  Or:
        *  Projects each element of the source observable sequence to the other observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        *  var res = source.concatMap(Rx.Observable.fromArray([1,2,3]));
        * @param {Function} selector A transform function to apply to each element or an observable sequence to project each element from the
        * source sequence onto which could be either an observable or Promise.
        * @param {Function} [resultSelector]  A transform function to apply to each element of the intermediate sequence.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the one-to-many transform function collectionSelector on each element of the input sequence and then mapping each of those sequence elements and their corresponding source element to a result element.
        */
        selectConcat<TResult>(selector: _ValueOrSelector<T, ArrayOrIterable<TResult>>): Observable<TResult>;
        /**
        *  One of the Following:
        *  Projects each element of an observable sequence to an observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        * @example
        *  var res = source.concatMap(function (x) { return Rx.Observable.range(0, x); });
        *  Or:
        *  Projects each element of an observable sequence to an observable sequence, invokes the result selector for the source element and each of the corresponding inner sequence's elements, and merges the results into one observable sequence.
        *
        *  var res = source.concatMap(function (x) { return Rx.Observable.range(0, x); }, function (x, y) { return x + y; });
        *  Or:
        *  Projects each element of the source observable sequence to the other observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        *  var res = source.concatMap(Rx.Observable.fromArray([1,2,3]));
        * @param {Function} selector A transform function to apply to each element or an observable sequence to project each element from the
        * source sequence onto which could be either an observable or Promise.
        * @param {Function} [resultSelector]  A transform function to apply to each element of the intermediate sequence.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the one-to-many transform function collectionSelector on each element of the input sequence and then mapping each of those sequence elements and their corresponding source element to a result element.
        */
        selectConcat<TOther, TResult>(selector: _ValueOrSelector<T, ObservableOrPromise<TOther>>, resultSelector: special._FlatMapResultSelector<T, TOther, TResult>, thisArg?: any): Observable<TResult>;
        /**
        *  One of the Following:
        *  Projects each element of an observable sequence to an observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        * @example
        *  var res = source.concatMap(function (x) { return Rx.Observable.range(0, x); });
        *  Or:
        *  Projects each element of an observable sequence to an observable sequence, invokes the result selector for the source element and each of the corresponding inner sequence's elements, and merges the results into one observable sequence.
        *
        *  var res = source.concatMap(function (x) { return Rx.Observable.range(0, x); }, function (x, y) { return x + y; });
        *  Or:
        *  Projects each element of the source observable sequence to the other observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        *  var res = source.concatMap(Rx.Observable.fromArray([1,2,3]));
        * @param {Function} selector A transform function to apply to each element or an observable sequence to project each element from the
        * source sequence onto which could be either an observable or Promise.
        * @param {Function} [resultSelector]  A transform function to apply to each element of the intermediate sequence.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the one-to-many transform function collectionSelector on each element of the input sequence and then mapping each of those sequence elements and their corresponding source element to a result element.
        */
        selectConcat<TOther, TResult>(selector: _ValueOrSelector<T, ArrayOrIterable<TOther>>, resultSelector: special._FlatMapResultSelector<T, TOther, TResult>, thisArg?: any): Observable<TResult>;
    }

    export interface Observable<T> {
        /**
        * Projects each notification of an observable sequence to an observable sequence and concats the resulting observable sequences into one observable sequence.
        * @param {Function} onNext A transform function to apply to each element; the second parameter of the function represents the index of the source element.
        * @param {Function} onError A transform function to apply when an error occurs in the source sequence.
        * @param {Function} onCompleted A transform function to apply when the end of the source sequence is reached.
        * @param {Any} [thisArg] An optional "this" to use to invoke each transform.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the one-to-many transform function corresponding to each notification in the input sequence.
        */
        concatMapObserver<T, TResult>(onNext: (value: T, i: number) => ObservableOrPromise<TResult>, onError: (error: any) => ObservableOrPromise<any>, onCompleted: () => ObservableOrPromise<any>, thisArg?: any): Observable<TResult>;
        /**
        * Projects each notification of an observable sequence to an observable sequence and concats the resulting observable sequences into one observable sequence.
        * @param {Function} onNext A transform function to apply to each element; the second parameter of the function represents the index of the source element.
        * @param {Function} onError A transform function to apply when an error occurs in the source sequence.
        * @param {Function} onCompleted A transform function to apply when the end of the source sequence is reached.
        * @param {Any} [thisArg] An optional "this" to use to invoke each transform.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the one-to-many transform function corresponding to each notification in the input sequence.
        */
        selectConcatObserver<T, TResult>(onNext: (value: T, i: number) => ObservableOrPromise<TResult>, onError: (error: any) => ObservableOrPromise<any>, onCompleted: () => ObservableOrPromise<any>, thisArg?: any): Observable<TResult>;
    }

    export interface Observable<T> {
        /**
        *  Returns the elements of the specified sequence or the specified value in a singleton sequence if the sequence is empty.
        *
        *  var res = obs = xs.defaultIfEmpty();
        *  2 - obs = xs.defaultIfEmpty(false);
        *
        * @memberOf Observable#
        * @param defaultValue The value to return if the sequence is empty. If not provided, this defaults to null.
        * @returns {Observable} An observable sequence that contains the specified default value if the source is empty; otherwise, the elements of the source itself.
        */
        defaultIfEmpty(defaultValue?: T): Observable<T>;
    }

    export interface Observable<T> {
        /**
        *  Returns an observable sequence that contains only distinct elements according to the keySelector and the comparer.
        *  Usage of this operator should be considered carefully due to the maintenance of an internal lookup structure which can grow large.
        *
        * @example
        *  var res = obs = xs.distinct();
        *  2 - obs = xs.distinct(function (x) { return x.id; });
        *  2 - obs = xs.distinct(function (x) { return x.id; }, function (a,b) { return a === b; });
        * @param {Function} [keySelector]  A function to compute the comparison key for each element.
        * @param {Function} [comparer]  Used to compare items in the collection.
        * @returns {Observable} An observable sequence only containing the distinct elements, based on a computed key value, from the source sequence.
        */
        distinct<TKey>(keySelector?: (value: T) => TKey, keySerializer?: (key: TKey) => string): Observable<T>;
    }

    export interface Observable<T> {
        /**
        *  Groups the elements of an observable sequence according to a specified key selector function.
        *  A duration selector function is used to control the lifetime of groups. When a group expires, it receives an OnCompleted notification. When a new element with the same
        *  key value as a reclaimed group occurs, the group will be reborn with a new lifetime request.
        *
        * @example
        *  var res = observable.groupByUntil(function (x) { return x.id; }, null,  function () { return Rx.Observable.never(); });
        *  2 - observable.groupBy(function (x) { return x.id; }), function (x) { return x.name; },  function () { return Rx.Observable.never(); });
        *  3 - observable.groupBy(function (x) { return x.id; }), function (x) { return x.name; },  function () { return Rx.Observable.never(); }, function (x) { return x.toString(); });
        * @param {Function} keySelector A function to extract the key for each element.
        * @param {Function} durationSelector A function to signal the expiration of a group.
        * @returns {Observable}
        *  A sequence of observable groups, each of which corresponds to a unique key value, containing all elements that share that same key value.
        *  If a group's lifetime expires, a new group with the same key value can be created once an element with such a key value is encoutered.
        *
        */
        groupByUntil<TKey, TDuration>(keySelector: (value: T) => TKey, skipElementSelector: boolean, durationSelector: (group: GroupedObservable<TKey, T>) => Observable<TDuration>, keySerializer?: (key: TKey) => string): Observable<GroupedObservable<TKey, T>>;

        /**
        *  Groups the elements of an observable sequence according to a specified key selector function.
        *  A duration selector function is used to control the lifetime of groups. When a group expires, it receives an OnCompleted notification. When a new element with the same
        *  key value as a reclaimed group occurs, the group will be reborn with a new lifetime request.
        *
        * @example
        *  var res = observable.groupByUntil(function (x) { return x.id; }, null,  function () { return Rx.Observable.never(); });
        *  2 - observable.groupBy(function (x) { return x.id; }), function (x) { return x.name; },  function () { return Rx.Observable.never(); });
        *  3 - observable.groupBy(function (x) { return x.id; }), function (x) { return x.name; },  function () { return Rx.Observable.never(); }, function (x) { return x.toString(); });
        * @param {Function} keySelector A function to extract the key for each element.
        * @param {Function} durationSelector A function to signal the expiration of a group.
        * @returns {Observable}
        *  A sequence of observable groups, each of which corresponds to a unique key value, containing all elements that share that same key value.
        *  If a group's lifetime expires, a new group with the same key value can be created once an element with such a key value is encoutered.
        *
        */
        groupByUntil<TKey, TElement, TDuration>(keySelector: (value: T) => TKey, elementSelector: (value: T) => TElement, durationSelector: (group: GroupedObservable<TKey, TElement>) => Observable<TDuration>, keySerializer?: (key: TKey) => string): Observable<GroupedObservable<TKey, TElement>>;
    }

    export interface Observable<T> {
        /**
         *  Groups the elements of an observable sequence according to a specified key selector function and comparer and selects the resulting elements by using a specified function.
         *
         * @example
         *  var res = observable.groupBy(function (x) { return x.id; });
         *  2 - observable.groupBy(function (x) { return x.id; }), function (x) { return x.name; });
         *  3 - observable.groupBy(function (x) { return x.id; }), function (x) { return x.name; }, function (x) { return x.toString(); });
         * @param {Function} keySelector A function to extract the key for each element.
         * @param {Function} [elementSelector]  A function to map each source element to an element in an observable group.
         * @returns {Observable} A sequence of observable groups, each of which corresponds to a unique key value, containing all elements that share that same key value.
         */
        groupBy<TKey, TElement>(keySelector: (value: T) => TKey, skipElementSelector?: boolean, keySerializer?: (key: TKey) => string): Observable<GroupedObservable<TKey, T>>;
        /**
         *  Groups the elements of an observable sequence according to a specified key selector function and comparer and selects the resulting elements by using a specified function.
         *
         * @example
         *  var res = observable.groupBy(function (x) { return x.id; });
         *  2 - observable.groupBy(function (x) { return x.id; }), function (x) { return x.name; });
         *  3 - observable.groupBy(function (x) { return x.id; }), function (x) { return x.name; }, function (x) { return x.toString(); });
         * @param {Function} keySelector A function to extract the key for each element.
         * @param {Function} [elementSelector]  A function to map each source element to an element in an observable group.
         * @returns {Observable} A sequence of observable groups, each of which corresponds to a unique key value, containing all elements that share that same key value.
         */
        groupBy<TKey, TElement>(keySelector: (value: T) => TKey, elementSelector: (value: T) => TElement, keySerializer?: (key: TKey) => string): Observable<GroupedObservable<TKey, TElement>>;
    }

    export interface Observable<T> {
        /**
        * Projects each element of an observable sequence into a new form by incorporating the element's index.
        * @param {Function} selector A transform function to apply to each source element; the second parameter of the function represents the index of the source element.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the transform function on each element of source.
        */
        select<TResult>(selector: _Selector<T, TResult>, thisArg?: any): Observable<TResult>;
        /**
        * Projects each element of an observable sequence into a new form by incorporating the element's index.
        * @param {Function} selector A transform function to apply to each source element; the second parameter of the function represents the index of the source element.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the transform function on each element of source.
        */
        map<TResult>(selector: _Selector<T, TResult>, thisArg?: any): Observable<TResult>;
    }

    export interface Observable<T> {
        /**
        * Retrieves the value of a specified nested property from all elements in
        * the Observable sequence.
        * @param {Arguments} arguments The nested properties to pluck.
        * @returns {Observable} Returns a new Observable sequence of property values.
        */
        pluck<TResult>(prop: string): Observable<TResult>;
    }


    export interface Observable<T> {
        /**
        *  One of the Following:
        *  Projects each element of an observable sequence to an observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        * @example
        *  var res = source.selectMany(function (x) { return Rx.Observable.range(0, x); });
        *  Or:
        *  Projects each element of an observable sequence to an observable sequence, invokes the result selector for the source element and each of the corresponding inner sequence's elements, and merges the results into one observable sequence.
        *
        *  var res = source.selectMany(function (x) { return Rx.Observable.range(0, x); }, function (x, y) { return x + y; });
        *  Or:
        *  Projects each element of the source observable sequence to the other observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        *  var res = source.selectMany(Rx.Observable.fromArray([1,2,3]));
        * @param {Function} selector A transform function to apply to each element or an observable sequence to project each element from the source sequence onto which could be either an observable or Promise.
        * @param {Function} [resultSelector]  A transform function to apply to each element of the intermediate sequence.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the one-to-many transform function collectionSelector on each element of the input sequence and then mapping each of those sequence elements and their corresponding source element to a result element.
        */
        flatMap<TResult>(selector: _ValueOrSelector<T, ObservableOrPromise<TResult>>): Observable<TResult>;
        /**
        *  One of the Following:
        *  Projects each element of an observable sequence to an observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        * @example
        *  var res = source.selectMany(function (x) { return Rx.Observable.range(0, x); });
        *  Or:
        *  Projects each element of an observable sequence to an observable sequence, invokes the result selector for the source element and each of the corresponding inner sequence's elements, and merges the results into one observable sequence.
        *
        *  var res = source.selectMany(function (x) { return Rx.Observable.range(0, x); }, function (x, y) { return x + y; });
        *  Or:
        *  Projects each element of the source observable sequence to the other observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        *  var res = source.selectMany(Rx.Observable.fromArray([1,2,3]));
        * @param {Function} selector A transform function to apply to each element or an observable sequence to project each element from the source sequence onto which could be either an observable or Promise.
        * @param {Function} [resultSelector]  A transform function to apply to each element of the intermediate sequence.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the one-to-many transform function collectionSelector on each element of the input sequence and then mapping each of those sequence elements and their corresponding source element to a result element.
        */
        flatMap<TResult>(selector: _ValueOrSelector<T, ArrayOrIterable<TResult>>): Observable<TResult>;
        /**
        *  One of the Following:
        *  Projects each element of an observable sequence to an observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        * @example
        *  var res = source.selectMany(function (x) { return Rx.Observable.range(0, x); });
        *  Or:
        *  Projects each element of an observable sequence to an observable sequence, invokes the result selector for the source element and each of the corresponding inner sequence's elements, and merges the results into one observable sequence.
        *
        *  var res = source.selectMany(function (x) { return Rx.Observable.range(0, x); }, function (x, y) { return x + y; });
        *  Or:
        *  Projects each element of the source observable sequence to the other observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        *  var res = source.selectMany(Rx.Observable.fromArray([1,2,3]));
        * @param {Function} selector A transform function to apply to each element or an observable sequence to project each element from the source sequence onto which could be either an observable or Promise.
        * @param {Function} [resultSelector]  A transform function to apply to each element of the intermediate sequence.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the one-to-many transform function collectionSelector on each element of the input sequence and then mapping each of those sequence elements and their corresponding source element to a result element.
        */
        flatMap<TOther, TResult>(selector: _ValueOrSelector<T, ObservableOrPromise<TOther>>, resultSelector: special._FlatMapResultSelector<T, TOther, TResult>, thisArg?: any): Observable<TResult>;
        /**
        *  One of the Following:
        *  Projects each element of an observable sequence to an observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        * @example
        *  var res = source.selectMany(function (x) { return Rx.Observable.range(0, x); });
        *  Or:
        *  Projects each element of an observable sequence to an observable sequence, invokes the result selector for the source element and each of the corresponding inner sequence's elements, and merges the results into one observable sequence.
        *
        *  var res = source.selectMany(function (x) { return Rx.Observable.range(0, x); }, function (x, y) { return x + y; });
        *  Or:
        *  Projects each element of the source observable sequence to the other observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        *  var res = source.selectMany(Rx.Observable.fromArray([1,2,3]));
        * @param {Function} selector A transform function to apply to each element or an observable sequence to project each element from the source sequence onto which could be either an observable or Promise.
        * @param {Function} [resultSelector]  A transform function to apply to each element of the intermediate sequence.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the one-to-many transform function collectionSelector on each element of the input sequence and then mapping each of those sequence elements and their corresponding source element to a result element.
        */
        flatMap<TOther, TResult>(selector: _ValueOrSelector<T, ArrayOrIterable<TOther>>, resultSelector: special._FlatMapResultSelector<T, TOther, TResult>, thisArg?: any): Observable<TResult>;
        /**
        *  One of the Following:
        *  Projects each element of an observable sequence to an observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        * @example
        *  var res = source.selectMany(function (x) { return Rx.Observable.range(0, x); });
        *  Or:
        *  Projects each element of an observable sequence to an observable sequence, invokes the result selector for the source element and each of the corresponding inner sequence's elements, and merges the results into one observable sequence.
        *
        *  var res = source.selectMany(function (x) { return Rx.Observable.range(0, x); }, function (x, y) { return x + y; });
        *  Or:
        *  Projects each element of the source observable sequence to the other observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        *  var res = source.selectMany(Rx.Observable.fromArray([1,2,3]));
        * @param {Function} selector A transform function to apply to each element or an observable sequence to project each element from the source sequence onto which could be either an observable or Promise.
        * @param {Function} [resultSelector]  A transform function to apply to each element of the intermediate sequence.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the one-to-many transform function collectionSelector on each element of the input sequence and then mapping each of those sequence elements and their corresponding source element to a result element.
        */
        selectMany<TResult>(selector: _ValueOrSelector<T, ObservableOrPromise<TResult>>): Observable<TResult>;
        /**
        *  One of the Following:
        *  Projects each element of an observable sequence to an observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        * @example
        *  var res = source.selectMany(function (x) { return Rx.Observable.range(0, x); });
        *  Or:
        *  Projects each element of an observable sequence to an observable sequence, invokes the result selector for the source element and each of the corresponding inner sequence's elements, and merges the results into one observable sequence.
        *
        *  var res = source.selectMany(function (x) { return Rx.Observable.range(0, x); }, function (x, y) { return x + y; });
        *  Or:
        *  Projects each element of the source observable sequence to the other observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        *  var res = source.selectMany(Rx.Observable.fromArray([1,2,3]));
        * @param {Function} selector A transform function to apply to each element or an observable sequence to project each element from the source sequence onto which could be either an observable or Promise.
        * @param {Function} [resultSelector]  A transform function to apply to each element of the intermediate sequence.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the one-to-many transform function collectionSelector on each element of the input sequence and then mapping each of those sequence elements and their corresponding source element to a result element.
        */
        selectMany<TResult>(selector: _ValueOrSelector<T, ArrayOrIterable<TResult>>): Observable<TResult>;
        /**
        *  One of the Following:
        *  Projects each element of an observable sequence to an observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        * @example
        *  var res = source.selectMany(function (x) { return Rx.Observable.range(0, x); });
        *  Or:
        *  Projects each element of an observable sequence to an observable sequence, invokes the result selector for the source element and each of the corresponding inner sequence's elements, and merges the results into one observable sequence.
        *
        *  var res = source.selectMany(function (x) { return Rx.Observable.range(0, x); }, function (x, y) { return x + y; });
        *  Or:
        *  Projects each element of the source observable sequence to the other observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        *  var res = source.selectMany(Rx.Observable.fromArray([1,2,3]));
        * @param {Function} selector A transform function to apply to each element or an observable sequence to project each element from the source sequence onto which could be either an observable or Promise.
        * @param {Function} [resultSelector]  A transform function to apply to each element of the intermediate sequence.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the one-to-many transform function collectionSelector on each element of the input sequence and then mapping each of those sequence elements and their corresponding source element to a result element.
        */
        selectMany<TOther, TResult>(selector: _ValueOrSelector<T, ObservableOrPromise<TOther>>, resultSelector: special._FlatMapResultSelector<T, TOther, TResult>, thisArg?: any): Observable<TResult>;
        /**
        *  One of the Following:
        *  Projects each element of an observable sequence to an observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        * @example
        *  var res = source.selectMany(function (x) { return Rx.Observable.range(0, x); });
        *  Or:
        *  Projects each element of an observable sequence to an observable sequence, invokes the result selector for the source element and each of the corresponding inner sequence's elements, and merges the results into one observable sequence.
        *
        *  var res = source.selectMany(function (x) { return Rx.Observable.range(0, x); }, function (x, y) { return x + y; });
        *  Or:
        *  Projects each element of the source observable sequence to the other observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        *  var res = source.selectMany(Rx.Observable.fromArray([1,2,3]));
        * @param {Function} selector A transform function to apply to each element or an observable sequence to project each element from the source sequence onto which could be either an observable or Promise.
        * @param {Function} [resultSelector]  A transform function to apply to each element of the intermediate sequence.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the one-to-many transform function collectionSelector on each element of the input sequence and then mapping each of those sequence elements and their corresponding source element to a result element.
        */
        selectMany<TOther, TResult>(selector: _ValueOrSelector<T, ArrayOrIterable<TOther>>, resultSelector: special._FlatMapResultSelector<T, TOther, TResult>, thisArg?: any): Observable<TResult>;
    }

    export interface Observable<T> {
        /**
        * Projects each notification of an observable sequence to an observable sequence and merges the resulting observable sequences into one observable sequence.
        * @param {Function} onNext A transform function to apply to each element; the second parameter of the function represents the index of the source element.
        * @param {Function} onError A transform function to apply when an error occurs in the source sequence.
        * @param {Function} onCompleted A transform function to apply when the end of the source sequence is reached.
        * @param {Any} [thisArg] An optional "this" to use to invoke each transform.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the one-to-many transform function corresponding to each notification in the input sequence.
        */
        selectManyObserver<T2, T3, T4>(onNext: (value: T, index: number) => Observable<T2>, onError: (exception: any) => Observable<T3>, onCompleted: () => Observable<T4>, thisArg?: any): Observable<T2 | T3 | T4>;
        /**
        * Projects each notification of an observable sequence to an observable sequence and merges the resulting observable sequences into one observable sequence.
        * @param {Function} onNext A transform function to apply to each element; the second parameter of the function represents the index of the source element.
        * @param {Function} onError A transform function to apply when an error occurs in the source sequence.
        * @param {Function} onCompleted A transform function to apply when the end of the source sequence is reached.
        * @param {Any} [thisArg] An optional "this" to use to invoke each transform.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the one-to-many transform function corresponding to each notification in the input sequence.
        */
        flatMapObserver<T2, T3, T4>(onNext: (value: T, index: number) => Observable<T2>, onError: (exception: any) => Observable<T3>, onCompleted: () => Observable<T4>, thisArg?: any): Observable<T2 | T3 | T4>;
    }

    export interface Observable<T> {
        /**
        *  Projects each element of an observable sequence into a new sequence of observable sequences by incorporating the element's index and then
        *  transforms an observable sequence of observable sequences into an observable sequence producing values only from the most recent observable sequence.
        * @param {Function} selector A transform function to apply to each source element; the second parameter of the function represents the index of the source element.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the transform function on each element of source producing an Observable of Observable sequences
        *  and that at any point in time produces the elements of the most recent inner observable sequence that has been received.
        */
        selectSwitch<TResult>(selector: _ValueOrSelector<T, ObservableOrPromise<TResult>>): Observable<TResult>;
        /**
        *  Projects each element of an observable sequence into a new sequence of observable sequences by incorporating the element's index and then
        *  transforms an observable sequence of observable sequences into an observable sequence producing values only from the most recent observable sequence.
        * @param {Function} selector A transform function to apply to each source element; the second parameter of the function represents the index of the source element.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the transform function on each element of source producing an Observable of Observable sequences
        *  and that at any point in time produces the elements of the most recent inner observable sequence that has been received.
        */
        selectSwitch<TResult>(selector: _ValueOrSelector<T, ArrayOrIterable<TResult>>): Observable<TResult>;
        /**
        *  Projects each element of an observable sequence into a new sequence of observable sequences by incorporating the element's index and then
        *  transforms an observable sequence of observable sequences into an observable sequence producing values only from the most recent observable sequence.
        * @param {Function} selector A transform function to apply to each source element; the second parameter of the function represents the index of the source element.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the transform function on each element of source producing an Observable of Observable sequences
        *  and that at any point in time produces the elements of the most recent inner observable sequence that has been received.
        */
        selectSwitch<TOther, TResult>(selector: _ValueOrSelector<T, ObservableOrPromise<TOther>>, resultSelector: special._FlatMapResultSelector<T, TOther, TResult>, thisArg?: any): Observable<TResult>;
        /**
        *  Projects each element of an observable sequence into a new sequence of observable sequences by incorporating the element's index and then
        *  transforms an observable sequence of observable sequences into an observable sequence producing values only from the most recent observable sequence.
        * @param {Function} selector A transform function to apply to each source element; the second parameter of the function represents the index of the source element.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the transform function on each element of source producing an Observable of Observable sequences
        *  and that at any point in time produces the elements of the most recent inner observable sequence that has been received.
        */
        selectSwitch<TOther, TResult>(selector: _ValueOrSelector<T, ArrayOrIterable<TOther>>, resultSelector: special._FlatMapResultSelector<T, TOther, TResult>, thisArg?: any): Observable<TResult>;
        /**
        *  Projects each element of an observable sequence into a new sequence of observable sequences by incorporating the element's index and then
        *  transforms an observable sequence of observable sequences into an observable sequence producing values only from the most recent observable sequence.
        * @param {Function} selector A transform function to apply to each source element; the second parameter of the function represents the index of the source element.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the transform function on each element of source producing an Observable of Observable sequences
        *  and that at any point in time produces the elements of the most recent inner observable sequence that has been received.
        */
        flatMapLatest<TResult>(selector: _ValueOrSelector<T, ObservableOrPromise<TResult>>): Observable<TResult>;
        /**
        *  Projects each element of an observable sequence into a new sequence of observable sequences by incorporating the element's index and then
        *  transforms an observable sequence of observable sequences into an observable sequence producing values only from the most recent observable sequence.
        * @param {Function} selector A transform function to apply to each source element; the second parameter of the function represents the index of the source element.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the transform function on each element of source producing an Observable of Observable sequences
        *  and that at any point in time produces the elements of the most recent inner observable sequence that has been received.
        */
        flatMapLatest<TResult>(selector: _ValueOrSelector<T, ArrayOrIterable<TResult>>): Observable<TResult>;
        /**
        *  Projects each element of an observable sequence into a new sequence of observable sequences by incorporating the element's index and then
        *  transforms an observable sequence of observable sequences into an observable sequence producing values only from the most recent observable sequence.
        * @param {Function} selector A transform function to apply to each source element; the second parameter of the function represents the index of the source element.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the transform function on each element of source producing an Observable of Observable sequences
        *  and that at any point in time produces the elements of the most recent inner observable sequence that has been received.
        */
        flatMapLatest<TOther, TResult>(selector: _ValueOrSelector<T, ObservableOrPromise<TOther>>, resultSelector: special._FlatMapResultSelector<T, TOther, TResult>, thisArg?: any): Observable<TResult>;
        /**
        *  Projects each element of an observable sequence into a new sequence of observable sequences by incorporating the element's index and then
        *  transforms an observable sequence of observable sequences into an observable sequence producing values only from the most recent observable sequence.
        * @param {Function} selector A transform function to apply to each source element; the second parameter of the function represents the index of the source element.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the transform function on each element of source producing an Observable of Observable sequences
        *  and that at any point in time produces the elements of the most recent inner observable sequence that has been received.
        */
        flatMapLatest<TOther, TResult>(selector: _ValueOrSelector<T, ArrayOrIterable<TOther>>, resultSelector: special._FlatMapResultSelector<T, TOther, TResult>, thisArg?: any): Observable<TResult>;
    }

    export interface Observable<T> {
        /**
        * Bypasses a specified number of elements in an observable sequence and then returns the remaining elements.
        * @param {Number} count The number of elements to skip before returning the remaining elements.
        * @returns {Observable} An observable sequence that contains the elements that occur after the specified index in the input sequence.
        */
        skip(count: number): Observable<T>;
    }

    export interface Observable<T> {
        /**
        *  Bypasses elements in an observable sequence as long as a specified condition is true and then returns the remaining elements.
        *  The element's index is used in the logic of the predicate function.
        *
        *  var res = source.skipWhile(function (value) { return value < 10; });
        *  var res = source.skipWhile(function (value, index) { return value < 10 || index < 10; });
        * @param {Function} predicate A function to test each element for a condition; the second parameter of the function represents the index of the source element.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence that contains the elements from the input sequence starting at the first element in the linear series that does not pass the test specified by predicate.
        */
        skipWhile(predicate: _Predicate<T>, thisArg?: any): Observable<T>;
    }

    export interface Observable<T> {
        /**
        *  Returns a specified number of contiguous elements from the start of an observable sequence, using the specified scheduler for the edge case of take(0).
        *
        *  var res = source.take(5);
        *  var res = source.take(0, Rx.Scheduler.timeout);
        * @param {Number} count The number of elements to return.
        * @param {Scheduler} [scheduler] Scheduler used to produce an OnCompleted message in case <paramref name="count count</paramref> is set to 0.
        * @returns {Observable} An observable sequence that contains the specified number of elements from the start of the input sequence.
        */
        take(count: number, scheduler?: IScheduler): Observable<T>;
    }

    export interface Observable<T> {
        /**
        *  Returns elements from an observable sequence as long as a specified condition is true.
        *  The element's index is used in the logic of the predicate function.
        * @param {Function} predicate A function to test each element for a condition; the second parameter of the function represents the index of the source element.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence that contains the elements from the input sequence that occur before the element at which the test no longer passes.
        */
        takeWhile(predicate: _Predicate<T>, thisArg?: any): Observable<T>;
    }

    export interface Observable<T> {
        /**
        *  Filters the elements of an observable sequence based on a predicate by incorporating the element's index.
        *
        * @example
        *  var res = source.where(function (value) { return value < 10; });
        *  var res = source.where(function (value, index) { return value < 10 || index < 10; });
        * @param {Function} predicate A function to test each source element for a condition; the second parameter of the function represents the index of the source element.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence that contains elements from the input sequence that satisfy the condition.
        */
        where(predicate: _Predicate<T>, thisArg?: any): Observable<T>;
        /**
        *  Filters the elements of an observable sequence based on a predicate by incorporating the element's index.
        *
        * @example
        *  var res = source.where(function (value) { return value < 10; });
        *  var res = source.where(function (value, index) { return value < 10 || index < 10; });
        * @param {Function} predicate A function to test each source element for a condition; the second parameter of the function represents the index of the source element.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence that contains elements from the input sequence that satisfy the condition.
        */
        filter(predicate: _Predicate<T>, thisArg?: any): Observable<T>;
    }

    export interface Observable<T> {
        /**
         * Applies an accumulator function over an observable sequence, returning the result of the aggregation as a single element in the result sequence. The specified seed value is used as the initial accumulator value.
         * For aggregation behavior with incremental intermediate results, see Observable.scan.
         * @param {Function} accumulator An accumulator function to be invoked on each element.
         * @param {Any} [seed] The initial accumulator value.
         * @returns {Observable} An observable sequence containing a single element with the final accumulator value.
         */
        reduce<TAcc>(accumulator: _Accumulator<T, TAcc>, seed?: TAcc): Observable<TAcc>;
        /**
         * Applies an accumulator function over an observable sequence, returning the result of the aggregation as a single element in the result sequence. The specified seed value is used as the initial accumulator value.
         * For aggregation behavior with incremental intermediate results, see Observable.scan.
         * @param {Function} accumulator An accumulator function to be invoked on each element.
         * @param {Any} [seed] The initial accumulator value.
         * @returns {Observable} An observable sequence containing a single element with the final accumulator value.
         */
        reduce(accumulator: _Accumulator<T, T>, seed?: T): Observable<T>;
    }

    export interface Observable<T> {
        /**
        * Determines whether any element of an observable sequence satisfies a condition if present, else if any items are in the sequence.
        * @param {Function} [predicate] A function to test each element for a condition.
        * @returns {Observable} An observable sequence containing a single element determining whether any elements in the source sequence pass the test in the specified predicate if given, else if any items are in the sequence.
        */
        some(predicate?: _Predicate<T>, thisArg?: any): Observable<boolean>;	// alias for any
    }

    export interface Observable<T> {
        /**
         * Determines whether an observable sequence is empty.
         * @returns {Observable} An observable sequence containing a single element determining whether the source sequence is empty.
         */
        isEmpty(): Observable<boolean>;
    }

    export interface Observable<T> {
        /**
        * Determines whether all elements of an observable sequence satisfy a condition.
        * @param {Function} [predicate] A function to test each element for a condition.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence containing a single element determining whether all elements in the source sequence pass the test in the specified predicate.
        */
        every(predicate?: _Predicate<T>, thisArg?: any): Observable<boolean>;	// alias for all
    }

    export interface Observable<T> {
        /**
        * Determines whether an observable sequence includes a specified element with an optional equality comparer.
        * @param searchElement The value to locate in the source sequence.
        * @param {Number} [fromIndex] An equality comparer to compare elements.
        * @returns {Observable} An observable sequence containing a single element determining whether the source sequence includes an element that has the specified value from the given index.
        */
        includes(value: T, comparer?: _Comparer<T, boolean>): Observable<boolean>;
    }

    export interface Observable<T> {
        /**
        * Returns an observable sequence containing a value that represents how many elements in the specified observable sequence satisfy a condition if provided, else the count of items.
        * @example
        * res = source.count();
        * res = source.count(function (x) { return x > 3; });
        * @param {Function} [predicate]A function to test each element for a condition.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence containing a single element with a number that represents how many elements in the input sequence satisfy the condition in the predicate function if provided, else the count of items in the sequence.
        */
        count(predicate?: _Predicate<T>, thisArg?: any): Observable<number>;
    }

    export interface Observable<T> {
        /**
        * Returns the first index at which a given element can be found in the observable sequence, or -1 if it is not present.
        * @param {Any} searchElement Element to locate in the array.
        * @param {Number} [fromIndex] The index to start the search.  If not specified, defaults to 0.
        * @returns {Observable} And observable sequence containing the first index at which a given element can be found in the observable sequence, or -1 if it is not present.
        */
        indexOf(element: T, fromIndex?: number): Observable<number>;
    }

    export interface Observable<T> {
        /**
        * Computes the sum of a sequence of values that are obtained by invoking an optional transform function on each element of the input sequence, else if not specified computes the sum on each item in the sequence.
        * @param {Function} [selector] A transform function to apply to each element.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence containing a single element with the sum of the values in the source sequence.
        */
        sum(keySelector?: _Selector<T, number>, thisArg?: any): Observable<number>;
    }

    export interface Observable<T> {
        /**
        * Returns the elements in an observable sequence with the minimum key value according to the specified comparer.
        * @example
        * var res = source.minBy(function (x) { return x.value; });
        * var res = source.minBy(function (x) { return x.value; }, function (x, y) { return x - y; });
        * @param {Function} keySelector Key selector function.
        * @param {Function} [comparer] Comparer used to compare key values.
        * @returns {Observable} An observable sequence containing a list of zero or more elements that have a minimum key value.
        */
        minBy<TKey>(keySelector: (item: T) => TKey, comparer: _Comparer<TKey, number>): Observable<T>;
        /**
        * Returns the elements in an observable sequence with the minimum key value according to the specified comparer.
        * @example
        * var res = source.minBy(function (x) { return x.value; });
        * var res = source.minBy(function (x) { return x.value; }, function (x, y) { return x - y; });
        * @param {Function} keySelector Key selector function.
        * @param {Function} [comparer] Comparer used to compare key values.
        * @returns {Observable} An observable sequence containing a list of zero or more elements that have a minimum key value.
        */
        minBy(keySelector: (item: T) => number): Observable<T>;
    }

    export interface Observable<T> {
        /**
        * Returns the minimum element in an observable sequence according to the optional comparer else a default greater than less than check.
        * @example
        * var res = source.min();
        * var res = source.min(function (x, y) { return x.value - y.value; });
        * @param {Function} [comparer] Comparer used to compare elements.
        * @returns {Observable} An observable sequence containing a single element with the minimum element in the source sequence.
        */
        min(comparer?: _Comparer<T, number>): Observable<number>;
    }

    export interface Observable<T> {
        /**
        * Returns the elements in an observable sequence with the maximum  key value according to the specified comparer.
        * @example
        * var res = source.maxBy(function (x) { return x.value; });
        * var res = source.maxBy(function (x) { return x.value; }, function (x, y) { return x - y;; });
        * @param {Function} keySelector Key selector function.
        * @param {Function} [comparer]  Comparer used to compare key values.
        * @returns {Observable} An observable sequence containing a list of zero or more elements that have a maximum key value.
        */
        maxBy<TKey>(keySelector: (item: T) => TKey, comparer: _Comparer<TKey, number>): Observable<T>;
        /**
        * Returns the elements in an observable sequence with the maximum  key value according to the specified comparer.
        * @example
        * var res = source.maxBy(function (x) { return x.value; });
        * var res = source.maxBy(function (x) { return x.value; }, function (x, y) { return x - y;; });
        * @param {Function} keySelector Key selector function.
        * @param {Function} [comparer]  Comparer used to compare key values.
        * @returns {Observable} An observable sequence containing a list of zero or more elements that have a maximum key value.
        */
        maxBy(keySelector: (item: T) => number): Observable<T>;
    }

    export interface Observable<T> {
        /**
        * Returns the maximum value in an observable sequence according to the specified comparer.
        * @example
        * var res = source.max();
        * var res = source.max(function (x, y) { return x.value - y.value; });
        * @param {Function} [comparer] Comparer used to compare elements.
        * @returns {Observable} An observable sequence containing a single element with the maximum element in the source sequence.
        */
        max(comparer?: _Comparer<T, number>): Observable<number>;
    }

    export interface Observable<T> {
        /**
        * Computes the average of an observable sequence of values that are in the sequence or obtained by invoking a transform function on each element of the input sequence if present.
        * @param {Function} [selector] A transform function to apply to each element.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence containing a single element with the average of the sequence of values.
        */
        average(keySelector?: _Selector<T, number>, thisArg?: any): Observable<number>;
    }

    export interface Observable<T> {
        /**
        *  Determines whether two sequences are equal by comparing the elements pairwise using a specified equality comparer.
        *
        * @example
        * var res = res = source.sequenceEqual([1,2,3]);
        * var res = res = source.sequenceEqual([{ value: 42 }], function (x, y) { return x.value === y.value; });
        * 3 - res = source.sequenceEqual(Rx.Observable.returnValue(42));
        * 4 - res = source.sequenceEqual(Rx.Observable.returnValue({ value: 42 }), function (x, y) { return x.value === y.value; });
        * @param {Observable} second Second observable sequence or array to compare.
        * @param {Function} [comparer] Comparer used to compare elements of both sequences.
        * @returns {Observable} An observable sequence that contains a single element which indicates whether both sequences are of equal length and their corresponding elements are equal according to the specified equality comparer.
        */
        sequenceEqual(second: ObservableOrPromise<T> | ArrayOrIterable<T>, comparer?: _Comparer<T, boolean>): Observable<boolean>;
        /**
        *  Determines whether two sequences are equal by comparing the elements pairwise using a specified equality comparer.
        *
        * @example
        * var res = res = source.sequenceEqual([1,2,3]);
        * var res = res = source.sequenceEqual([{ value: 42 }], function (x, y) { return x.value === y.value; });
        * 3 - res = source.sequenceEqual(Rx.Observable.returnValue(42));
        * 4 - res = source.sequenceEqual(Rx.Observable.returnValue({ value: 42 }), function (x, y) { return x.value === y.value; });
        * @param {Observable} second Second observable sequence or array to compare.
        * @param {Function} [comparer] Comparer used to compare elements of both sequences.
        * @returns {Observable} An observable sequence that contains a single element which indicates whether both sequences are of equal length and their corresponding elements are equal according to the specified equality comparer.
        */
        sequenceEqual<TOther>(second: ObservableOrPromise<T> | ArrayOrIterable<T>, comparer: _Comparer<T | TOther, boolean>): Observable<boolean>;
    }

    export interface Observable<T> {
        /**
        * Returns the element at a specified index in a sequence or default value if not found.
        * @param {Number} index The zero-based index of the element to retrieve.
        * @param {Any} [defaultValue] The default value to use if elementAt does not find a value.
        * @returns {Observable} An observable sequence that produces the element at the specified position in the source sequence.
        */
        elementAt(index: number): Observable<T>;
    }

    export interface Observable<T> {
        /**
        * Returns the only element of an observable sequence that satisfies the condition in the optional predicate, and reports an exception if there is not exactly one element in the observable sequence.
        * @param {Function} [predicate] A predicate function to evaluate for elements in the source sequence.
        * @param {Any} [thisArg] Object to use as `this` when executing the predicate.
        * @returns {Observable} Sequence containing the single element in the observable sequence that satisfies the condition in the predicate.
        */
        single(predicate?: _Predicate<T>, thisArg?: any): Observable<T>;
    }

    export interface Observable<T> {
        /**
        * Returns the first element of an observable sequence that satisfies the condition in the predicate if present else the first item in the sequence.
        * @returns {Observable} Sequence containing the first element in the observable sequence that satisfies the condition in the predicate if provided, else the first item in the sequence.
        */
        first(predicate?: _Predicate<T>, thisArg?: any): Observable<T>;
    }

    export interface Observable<T> {
        /**
        * Returns the last element of an observable sequence that satisfies the condition in the predicate if specified, else the last element.
        * @returns {Observable} Sequence containing the last element in the observable sequence that satisfies the condition in the predicate.
        */
        last(predicate?: _Predicate<T>, thisArg?: any): Observable<T>;
    }

    export interface Observable<T> {
        /**
        * Searches for an element that matches the conditions defined by the specified predicate, and returns the first occurrence within the entire Observable sequence.
        * @param {Function} predicate The predicate that defines the conditions of the element to search for.
        * @param {Any} [thisArg] Object to use as `this` when executing the predicate.
        * @returns {Observable} An Observable sequence with the first element that matches the conditions defined by the specified predicate, if found; otherwise, undefined.
        */
        find(predicate: _Predicate<T>, thisArg?: any): Observable<T>;
    }

    export interface Observable<T> {
        /**
          * Searches for an element that matches the conditions defined by the specified predicate, and returns
          * an Observable sequence with the zero-based index of the first occurrence within the entire Observable sequence.
          * @param {Function} predicate The predicate that defines the conditions of the element to search for.
          * @param {Any} [thisArg] Object to use as `this` when executing the predicate.
          * @returns {Observable} An Observable sequence with the zero-based index of the first occurrence of an element that matches the conditions defined by match, if found; otherwise, –1.
        */
        findIndex(predicate: _Predicate<T>, thisArg?: any): Observable<number>;
    }

    export interface ObservableStatic {
        wrap<T>(fn: Function): Observable<T>;
        spawn<T>(fn: Function): Observable<T>;
    }

    export interface ObservableStatic {
        /**
        * Invokes the specified function asynchronously on the specified scheduler, surfacing the result through an observable sequence.
        *
        * @example
        * var res = Rx.Observable.start(function () { console.log('hello'); });
        * var res = Rx.Observable.start(function () { console.log('hello'); }, Rx.Scheduler.timeout);
        * var res = Rx.Observable.start(function () { this.log('hello'); }, Rx.Scheduler.timeout, console);
        *
        * @param {Function} func Function to run asynchronously.
        * @param {Scheduler} [scheduler]  Scheduler to run the function on. If not specified, defaults to Scheduler.timeout.
        * @param [context]  The context for the func parameter to be executed.  If not specified, defaults to undefined.
        * @returns {Observable} An observable sequence exposing the function's result value, or an exception.
        *
        * Remarks
        * * The function is called immediately, not during the subscription of the resulting sequence.
        * * Multiple subscriptions to the resulting sequence can observe the function's result.
        */
        start<T>(func: () => T, scheduler?: IScheduler, context?: any): Observable<T>;
    }

    export interface ObservableStatic {
        /**
        * Converts the function into an asynchronous function. Each invocation of the resulting asynchronous function causes an invocation of the original synchronous function on the specified scheduler.
        * @param {Function} function Function to convert to an asynchronous function.
        * @param {Scheduler} [scheduler] Scheduler to run the function on. If not specified, defaults to Scheduler.timeout.
        * @param {Mixed} [context] The context for the func parameter to be executed.  If not specified, defaults to undefined.
        * @returns {Function} Asynchronous function.
        */
        toAsync<TResult>(func: () => TResult, context?: any, scheduler?: IScheduler): () => Observable<TResult>;
        /**
        * Converts the function into an asynchronous function. Each invocation of the resulting asynchronous function causes an invocation of the original synchronous function on the specified scheduler.
        * @param {Function} function Function to convert to an asynchronous function.
        * @param {Scheduler} [scheduler] Scheduler to run the function on. If not specified, defaults to Scheduler.timeout.
        * @param {Mixed} [context] The context for the func parameter to be executed.  If not specified, defaults to undefined.
        * @returns {Function} Asynchronous function.
        */
        toAsync<T1, TResult>(func: (arg1: T1) => TResult, context?: any, scheduler?: IScheduler): (arg1: T1) => Observable<TResult>;
        /**
        * Converts the function into an asynchronous function. Each invocation of the resulting asynchronous function causes an invocation of the original synchronous function on the specified scheduler.
        * @param {Function} function Function to convert to an asynchronous function.
        * @param {Scheduler} [scheduler] Scheduler to run the function on. If not specified, defaults to Scheduler.timeout.
        * @param {Mixed} [context] The context for the func parameter to be executed.  If not specified, defaults to undefined.
        * @returns {Function} Asynchronous function.
        */
        toAsync<T1, T2, TResult>(func: (arg1: T1, arg2: T2) => TResult, context?: any, scheduler?: IScheduler): (arg1: T1, arg2: T2) => Observable<TResult>;
        /**
        * Converts the function into an asynchronous function. Each invocation of the resulting asynchronous function causes an invocation of the original synchronous function on the specified scheduler.
        * @param {Function} function Function to convert to an asynchronous function.
        * @param {Scheduler} [scheduler] Scheduler to run the function on. If not specified, defaults to Scheduler.timeout.
        * @param {Mixed} [context] The context for the func parameter to be executed.  If not specified, defaults to undefined.
        * @returns {Function} Asynchronous function.
        */
        toAsync<T1, T2, T3, TResult>(func: (arg1: T1, arg2: T2, arg3: T3) => TResult, context?: any, scheduler?: IScheduler): (arg1: T1, arg2: T2, arg3: T3) => Observable<TResult>;
        /**
        * Converts the function into an asynchronous function. Each invocation of the resulting asynchronous function causes an invocation of the original synchronous function on the specified scheduler.
        * @param {Function} function Function to convert to an asynchronous function.
        * @param {Scheduler} [scheduler] Scheduler to run the function on. If not specified, defaults to Scheduler.timeout.
        * @param {Mixed} [context] The context for the func parameter to be executed.  If not specified, defaults to undefined.
        * @returns {Function} Asynchronous function.
        */
        toAsync<T1, T2, T3, T4, TResult>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => TResult, context?: any, scheduler?: IScheduler): (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Observable<TResult>;
    }

    export interface ObservableStatic {
        /**
         * Converts a callback function to an observable sequence.
         *
         * @param {Function} function Function with a callback as the last parameter to convert to an Observable sequence.
         * @param {Mixed} [context] The context for the func parameter to be executed.  If not specified, defaults to undefined.
         * @param {Function} [selector] A selector which takes the arguments from the callback to produce a single item to yield on next.
         * @returns {Function} A function, when executed with the required parameters minus the callback, produces an Observable sequence with a single value of the arguments to the callback as an array.
         */
        fromCallback<TResult>(func: Function, context: any, selector: Function): (...args: any[]) => Observable<TResult>;
        /**
         * Converts a callback function to an observable sequence.
         *
         * @param {Function} function Function with a callback as the last parameter to convert to an Observable sequence.
         * @param {Mixed} [context] The context for the func parameter to be executed.  If not specified, defaults to undefined.
         * @param {Function} [selector] A selector which takes the arguments from the callback to produce a single item to yield on next.
         * @returns {Function} A function, when executed with the required parameters minus the callback, produces an Observable sequence with a single value of the arguments to the callback as an array.
         */
        fromCallback<TResult, T1>(func: (arg1: T1, callback: (result: TResult) => any) => any, context?: any, selector?: Function): (arg1: T1) => Observable<TResult>;
        /**
         * Converts a callback function to an observable sequence.
         *
         * @param {Function} function Function with a callback as the last parameter to convert to an Observable sequence.
         * @param {Mixed} [context] The context for the func parameter to be executed.  If not specified, defaults to undefined.
         * @param {Function} [selector] A selector which takes the arguments from the callback to produce a single item to yield on next.
         * @returns {Function} A function, when executed with the required parameters minus the callback, produces an Observable sequence with a single value of the arguments to the callback as an array.
         */
        fromCallback<TResult, T1, T2>(func: (arg1: T1, arg2: T2, callback: (result: TResult) => any) => any, context?: any, selector?: Function): (arg1: T1, arg2: T2) => Observable<TResult>;
        /**
         * Converts a callback function to an observable sequence.
         *
         * @param {Function} function Function with a callback as the last parameter to convert to an Observable sequence.
         * @param {Mixed} [context] The context for the func parameter to be executed.  If not specified, defaults to undefined.
         * @param {Function} [selector] A selector which takes the arguments from the callback to produce a single item to yield on next.
         * @returns {Function} A function, when executed with the required parameters minus the callback, produces an Observable sequence with a single value of the arguments to the callback as an array.
         */
        fromCallback<TResult, T1, T2, T3>(func: (arg1: T1, arg2: T2, arg3: T3, callback: (result: TResult) => any) => any, context?: any, selector?: Function): (arg1: T1, arg2: T2, arg3: T3) => Observable<TResult>;
        /**
         * Converts a callback function to an observable sequence.
         *
         * @param {Function} function Function with a callback as the last parameter to convert to an Observable sequence.
         * @param {Mixed} [context] The context for the func parameter to be executed.  If not specified, defaults to undefined.
         * @param {Function} [selector] A selector which takes the arguments from the callback to produce a single item to yield on next.
         * @returns {Function} A function, when executed with the required parameters minus the callback, produces an Observable sequence with a single value of the arguments to the callback as an array.
         */
        fromCallback<TResult, T1, T2, T3, T4>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, callback: (result: TResult) => any) => any, context?: any, selector?: Function): (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Observable<TResult>;
        /**
         * Converts a callback function to an observable sequence.
         *
         * @param {Function} function Function with a callback as the last parameter to convert to an Observable sequence.
         * @param {Mixed} [context] The context for the func parameter to be executed.  If not specified, defaults to undefined.
         * @param {Function} [selector] A selector which takes the arguments from the callback to produce a single item to yield on next.
         * @returns {Function} A function, when executed with the required parameters minus the callback, produces an Observable sequence with a single value of the arguments to the callback as an array.
         */
        fromCallback<TResult, T1, T2, T3, T4, T5>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, callback: (result: TResult) => any) => any, context?: any, selector?: Function): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Observable<TResult>;
        /**
         * Converts a callback function to an observable sequence.
         *
         * @param {Function} function Function with a callback as the last parameter to convert to an Observable sequence.
         * @param {Mixed} [context] The context for the func parameter to be executed.  If not specified, defaults to undefined.
         * @param {Function} [selector] A selector which takes the arguments from the callback to produce a single item to yield on next.
         * @returns {Function} A function, when executed with the required parameters minus the callback, produces an Observable sequence with a single value of the arguments to the callback as an array.
         */
        fromCallback<TResult, T1, T2, T3, T4, T5, T6>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, callback: (result: TResult) => any) => any, context?: any, selector?: Function): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => Observable<TResult>;
        /**
         * Converts a callback function to an observable sequence.
         *
         * @param {Function} function Function with a callback as the last parameter to convert to an Observable sequence.
         * @param {Mixed} [context] The context for the func parameter to be executed.  If not specified, defaults to undefined.
         * @param {Function} [selector] A selector which takes the arguments from the callback to produce a single item to yield on next.
         * @returns {Function} A function, when executed with the required parameters minus the callback, produces an Observable sequence with a single value of the arguments to the callback as an array.
         */
        fromCallback<TResult, T1, T2, T3, T4, T5, T6, T7>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, callback: (result: TResult) => any) => any, context?: any, selector?: Function): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7) => Observable<TResult>;
        /**
         * Converts a callback function to an observable sequence.
         *
         * @param {Function} function Function with a callback as the last parameter to convert to an Observable sequence.
         * @param {Mixed} [context] The context for the func parameter to be executed.  If not specified, defaults to undefined.
         * @param {Function} [selector] A selector which takes the arguments from the callback to produce a single item to yield on next.
         * @returns {Function} A function, when executed with the required parameters minus the callback, produces an Observable sequence with a single value of the arguments to the callback as an array.
         */
        fromCallback<TResult, T1, T2, T3, T4, T5, T6, T7, T8>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, callback: (result: TResult) => any) => any, context?: any, selector?: Function): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8) => Observable<TResult>;
        /**
         * Converts a callback function to an observable sequence.
         *
         * @param {Function} function Function with a callback as the last parameter to convert to an Observable sequence.
         * @param {Mixed} [context] The context for the func parameter to be executed.  If not specified, defaults to undefined.
         * @param {Function} [selector] A selector which takes the arguments from the callback to produce a single item to yield on next.
         * @returns {Function} A function, when executed with the required parameters minus the callback, produces an Observable sequence with a single value of the arguments to the callback as an array.
         */
        fromCallback<TResult, T1, T2, T3, T4, T5, T6, T7, T8, T9>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, callback: (result: TResult) => any) => any, context?: any, selector?: Function): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9) => Observable<TResult>;
    }

    export interface ObservableStatic {
        /**
         * Converts a Node.js callback style function to an observable sequence.  This must be in function (err, ...) format.
         * @param {Function} func The function to call
         * @param {Mixed} [context] The context for the func parameter to be executed.  If not specified, defaults to undefined.
         * @param {Function} [selector] A selector which takes the arguments from the callback minus the error to produce a single item to yield on next.
         * @returns {Function} An async function which when applied, returns an observable sequence with the callback arguments as an array.
         */
        fromNodeCallback<TResult>(func: Function, context?: any, selector?: Function): (...args: any[]) => Observable<TResult>;
        /**
         * Converts a Node.js callback style function to an observable sequence.  This must be in function (err, ...) format.
         * @param {Function} func The function to call
         * @param {Mixed} [context] The context for the func parameter to be executed.  If not specified, defaults to undefined.
         * @param {Function} [selector] A selector which takes the arguments from the callback minus the error to produce a single item to yield on next.
         * @returns {Function} An async function which when applied, returns an observable sequence with the callback arguments as an array.
         */
        fromNodeCallback<TResult, T1>(func: (arg1: T1, callback: (err: any, result: TResult) => any) => any, context?: any, selector?: Function): (arg1: T1) => Observable<TResult>;
        /**
         * Converts a Node.js callback style function to an observable sequence.  This must be in function (err, ...) format.
         * @param {Function} func The function to call
         * @param {Mixed} [context] The context for the func parameter to be executed.  If not specified, defaults to undefined.
         * @param {Function} [selector] A selector which takes the arguments from the callback minus the error to produce a single item to yield on next.
         * @returns {Function} An async function which when applied, returns an observable sequence with the callback arguments as an array.
         */
        fromNodeCallback<TResult, T1, T2>(func: (arg1: T1, arg2: T2, callback: (err: any, result: TResult) => any) => any, context?: any, selector?: Function): (arg1: T1, arg2: T2) => Observable<TResult>;
        /**
         * Converts a Node.js callback style function to an observable sequence.  This must be in function (err, ...) format.
         * @param {Function} func The function to call
         * @param {Mixed} [context] The context for the func parameter to be executed.  If not specified, defaults to undefined.
         * @param {Function} [selector] A selector which takes the arguments from the callback minus the error to produce a single item to yield on next.
         * @returns {Function} An async function which when applied, returns an observable sequence with the callback arguments as an array.
         */
        fromNodeCallback<TResult, T1, T2, T3>(func: (arg1: T1, arg2: T2, arg3: T3, callback: (err: any, result: TResult) => any) => any, context?: any, selector?: Function): (arg1: T1, arg2: T2, arg3: T3) => Observable<TResult>;
        /**
         * Converts a Node.js callback style function to an observable sequence.  This must be in function (err, ...) format.
         * @param {Function} func The function to call
         * @param {Mixed} [context] The context for the func parameter to be executed.  If not specified, defaults to undefined.
         * @param {Function} [selector] A selector which takes the arguments from the callback minus the error to produce a single item to yield on next.
         * @returns {Function} An async function which when applied, returns an observable sequence with the callback arguments as an array.
         */
        fromNodeCallback<TResult, T1, T2, T3, T4>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, callback: (err: any, result: TResult) => any) => any, context?: any, selector?: Function): (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Observable<TResult>;
        /**
         * Converts a Node.js callback style function to an observable sequence.  This must be in function (err, ...) format.
         * @param {Function} func The function to call
         * @param {Mixed} [context] The context for the func parameter to be executed.  If not specified, defaults to undefined.
         * @param {Function} [selector] A selector which takes the arguments from the callback minus the error to produce a single item to yield on next.
         * @returns {Function} An async function which when applied, returns an observable sequence with the callback arguments as an array.
         */
        fromNodeCallback<TResult, T1, T2, T3, T4, T5>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, callback: (err: any, result: TResult) => any) => any, context?: any, selector?: Function): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Observable<TResult>;
        /**
         * Converts a Node.js callback style function to an observable sequence.  This must be in function (err, ...) format.
         * @param {Function} func The function to call
         * @param {Mixed} [context] The context for the func parameter to be executed.  If not specified, defaults to undefined.
         * @param {Function} [selector] A selector which takes the arguments from the callback minus the error to produce a single item to yield on next.
         * @returns {Function} An async function which when applied, returns an observable sequence with the callback arguments as an array.
         */
        fromNodeCallback<TResult, T1, T2, T3, T4, T5, T6>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, callback: (err: any, result: TResult) => any) => any, context?: any, selector?: Function): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => Observable<TResult>;
        /**
         * Converts a Node.js callback style function to an observable sequence.  This must be in function (err, ...) format.
         * @param {Function} func The function to call
         * @param {Mixed} [context] The context for the func parameter to be executed.  If not specified, defaults to undefined.
         * @param {Function} [selector] A selector which takes the arguments from the callback minus the error to produce a single item to yield on next.
         * @returns {Function} An async function which when applied, returns an observable sequence with the callback arguments as an array.
         */
        fromNodeCallback<TResult, T1, T2, T3, T4, T5, T6, T7>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, callback: (err: any, result: TResult) => any) => any, context?: any, selector?: Function): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7) => Observable<TResult>;
        /**
         * Converts a Node.js callback style function to an observable sequence.  This must be in function (err, ...) format.
         * @param {Function} func The function to call
         * @param {Mixed} [context] The context for the func parameter to be executed.  If not specified, defaults to undefined.
         * @param {Function} [selector] A selector which takes the arguments from the callback minus the error to produce a single item to yield on next.
         * @returns {Function} An async function which when applied, returns an observable sequence with the callback arguments as an array.
         */
        fromNodeCallback<TResult, T1, T2, T3, T4, T5, T6, T7, T8>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, callback: (err: any, result: TResult) => any) => any, context?: any, selector?: Function): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8) => Observable<TResult>;
        /**
         * Converts a Node.js callback style function to an observable sequence.  This must be in function (err, ...) format.
         * @param {Function} func The function to call
         * @param {Mixed} [context] The context for the func parameter to be executed.  If not specified, defaults to undefined.
         * @param {Function} [selector] A selector which takes the arguments from the callback minus the error to produce a single item to yield on next.
         * @returns {Function} An async function which when applied, returns an observable sequence with the callback arguments as an array.
         */
        fromNodeCallback<TResult, T1, T2, T3, T4, T5, T6, T7, T8, T9>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, callback: (err: any, result: TResult) => any) => any, context?: any, selector?: Function): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9) => Observable<TResult>;
    }

    export interface ObservableStatic {
        /**
         * Creates an observable sequence by adding an event listener to the matching DOMElement or each item in the NodeList.
         * @param {Object} element The DOMElement or NodeList to attach a listener.
         * @param {String} eventName The event name to attach the observable sequence.
         * @param {Function} [selector] A selector which takes the arguments from the event handler to produce a single item to yield on next.
         * @returns {Observable} An observable sequence of events from the specified element and the specified event.
         */
        fromEvent<T>(element: EventTarget, eventName: string, selector?: (arguments: any[]) => T): Observable<T>;
        /**
         * Creates an observable sequence by adding an event listener to the matching DOMElement or each item in the NodeList.
         * @param {Object} element The DOMElement or NodeList to attach a listener.
         * @param {String} eventName The event name to attach the observable sequence.
         * @param {Function} [selector] A selector which takes the arguments from the event handler to produce a single item to yield on next.
         * @returns {Observable} An observable sequence of events from the specified element and the specified event.
         */
        fromEvent<T>(element: { on: (name: string, cb: (e: any) => any) => void; off: (name: string, cb: (e: any) => any) => void }, eventName: string, selector?: (arguments: any[]) => T): Observable<T>;
    }

    export interface ObservableStatic {
        /**
        * Creates an observable sequence from an event emitter via an addHandler/removeHandler pair.
        * @param {Function} addHandler The function to add a handler to the emitter.
        * @param {Function} [removeHandler] The optional function to remove a handler from an emitter.
        * @param {Function} [selector] A selector which takes the arguments from the event handler to produce a single item to yield on next.
        * @returns {Observable} An observable sequence which wraps an event from an event emitter
        */
        fromEventPattern<T>(addHandler: (handler: Function) => void, removeHandler: (handler: Function) => void, selector?: (arguments: any[]) => T): Observable<T>;
    }

    export interface ObservableStatic {
        /**
        * Invokes the asynchronous function, surfacing the result through an observable sequence.
        * @param {Function} functionAsync Asynchronous function which returns a Promise to run.
        * @returns {Observable} An observable sequence exposing the function's result value, or an exception.
        */
        startAsync<T>(functionAsync: () => IPromise<T>): Observable<T>;
    }

    export interface Observable<T> {
        /**
         * Pauses the underlying observable sequence based upon the observable sequence which yields true/false.
         * @example
         * var pauser = new Rx.Subject();
         * var source = Rx.Observable.interval(100).pausable(pauser);
         * @param {Observable} pauser The observable sequence used to pause the underlying sequence.
         * @returns {Observable} The observable sequence which is paused based upon the pauser.
         */
        pausable(pauser?: Observable<boolean>): PausableObservable<T>;
    }

    export interface PausableObservable<T> extends Observable<T> {
        pause(): void;
        resume(): void;
    }

    export interface Observable<T> {
        /**
         * Pauses the underlying observable sequence based upon the observable sequence which yields true/false,
         * and yields the values that were buffered while paused.
         * @example
         * var pauser = new Rx.Subject();
         * var source = Rx.Observable.interval(100).pausableBuffered(pauser);
         * @param {Observable} pauser The observable sequence used to pause the underlying sequence.
         * @returns {Observable} The observable sequence which is paused based upon the pauser.
         */
        pausableBuffered(pauser?: Observable<boolean>): PausableObservable<T>;
    }

    export interface Observable<T> {
        /**
        * Attaches a controller to the observable sequence with the ability to queue.
        * @example
        * var source = Rx.Observable.interval(100).controlled();
        * source.request(3); // Reads 3 values
        * @param {bool} enableQueue truthy value to determine if values should be queued pending the next request
        * @param {Scheduler} scheduler determines how the requests will be scheduled
        * @returns {Observable} The observable sequence which only propagates values on request.
        */
        controlled(enableQueue?: boolean, scheduler?: IScheduler): ControlledObservable<T>;
    }

    export interface ControlledObservable<T> extends Observable<T> {
        request(numberOfItems?: number): IDisposable;
    }

    export interface ControlledObservable<T> {
        /**
         * Attaches a stop and wait observable to the current observable.
         * @returns {Observable} A stop and wait observable.
         */
        stopAndWait(): Observable<T>;
    }

    export interface ControlledObservable<T> {
        /**
         * Creates a sliding windowed observable based upon the window size.
         * @param {Number} windowSize The number of items in the window
         * @returns {Observable} A windowed observable based upon the window size.
         */
        windowed(windowSize: number): Observable<T>;
    }

    export interface Observable<T> {
        /**
        * Pipes the existing Observable sequence into a Node.js Stream.
        * @param {Stream} dest The destination Node.js stream.
        * @returns {Stream} The destination stream.
        */
        pipe<TDest>(dest: TDest): TDest;
        // TODO: Add link to node.d.ts some where
    }

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

    export interface Observable<T> {
        /**
        * Returns an observable sequence that shares a single subscription to the underlying sequence. This observable sequence
        * can be resubscribed to, even if all prior subscriptions have ended. (unlike `.publish().refCount()`)
        * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source.
        */
        singleInstance(): Observable<T>;
    }

    export interface Observable<T> {
        /**
        *  Correlates the elements of two sequences based on overlapping durations.
        *
        *  @param {Observable} right The right observable sequence to join elements for.
        *  @param {Function} leftDurationSelector A function to select the duration (expressed as an observable sequence) of each element of the left observable sequence, used to determine overlap.
        *  @param {Function} rightDurationSelector A function to select the duration (expressed as an observable sequence) of each element of the right observable sequence, used to determine overlap.
        *  @param {Function} resultSelector A function invoked to compute a result element for any two overlapping elements of the left and right observable sequences. The parameters passed to the function correspond with the elements from the left and right source sequences for which overlap occurs.
        *  @returns {Observable} An observable sequence that contains result elements computed from source elements that have an overlapping duration.
        */
        join<TRight, TDurationLeft, TDurationRight, TResult>(
            right: Observable<TRight>,
            leftDurationSelector: (leftItem: T) => Observable<TDurationLeft>,
            rightDurationSelector: (rightItem: TRight) => Observable<TDurationRight>,
            resultSelector: (leftItem: T, rightItem: TRight) => TResult): Observable<TResult>;
    }

    export interface Observable<T> {
        /**
        *  Correlates the elements of two sequences based on overlapping durations, and groups the results.
        *
        *  @param {Observable} right The right observable sequence to join elements for.
        *  @param {Function} leftDurationSelector A function to select the duration (expressed as an observable sequence) of each element of the left observable sequence, used to determine overlap.
        *  @param {Function} rightDurationSelector A function to select the duration (expressed as an observable sequence) of each element of the right observable sequence, used to determine overlap.
        *  @param {Function} resultSelector A function invoked to compute a result element for any element of the left sequence with overlapping elements from the right observable sequence. The first parameter passed to the function is an element of the left sequence. The second parameter passed to the function is an observable sequence with elements from the right sequence that overlap with the left sequence's element.
        *  @returns {Observable} An observable sequence that contains result elements computed from source elements that have an overlapping duration.
        */
        groupJoin<TRight, TDurationLeft, TDurationRight, TResult>(
            right: Observable<TRight>,
            leftDurationSelector: (leftItem: T) => Observable<TDurationLeft>,
            rightDurationSelector: (rightItem: TRight) => Observable<TDurationRight>,
            resultSelector: (leftItem: T, rightItem: Observable<TRight>) => TResult): Observable<TResult>;
    }

    export interface Observable<T> {
        /**
        *  Projects each element of an observable sequence into zero or more buffers.
        *  @param {Mixed} bufferOpeningsOrClosingSelector Observable sequence whose elements denote the creation of new windows, or, a function invoked to define the boundaries of the produced windows (a new window is started when the previous one is closed, resulting in non-overlapping windows).
        *  @param {Function} [bufferClosingSelector] A function invoked to define the closing of each produced window. If a closing selector function is specified for the first parameter, this parameter is ignored.
        *  @returns {Observable} An observable sequence of windows.
        */
        buffer<TBufferOpening>(bufferOpenings: Observable<TBufferOpening>): Observable<T[]>;
        /**
        *  Projects each element of an observable sequence into zero or more buffers.
        *  @param {Mixed} bufferOpeningsOrClosingSelector Observable sequence whose elements denote the creation of new windows, or, a function invoked to define the boundaries of the produced windows (a new window is started when the previous one is closed, resulting in non-overlapping windows).
        *  @param {Function} [bufferClosingSelector] A function invoked to define the closing of each produced window. If a closing selector function is specified for the first parameter, this parameter is ignored.
        *  @returns {Observable} An observable sequence of windows.
        */
        buffer<TBufferClosing>(bufferClosingSelector: () => Observable<TBufferClosing>): Observable<T[]>;
        /**
        *  Projects each element of an observable sequence into zero or more buffers.
        *  @param {Mixed} bufferOpeningsOrClosingSelector Observable sequence whose elements denote the creation of new windows, or, a function invoked to define the boundaries of the produced windows (a new window is started when the previous one is closed, resulting in non-overlapping windows).
        *  @param {Function} [bufferClosingSelector] A function invoked to define the closing of each produced window. If a closing selector function is specified for the first parameter, this parameter is ignored.
        *  @returns {Observable} An observable sequence of windows.
        */
        buffer<TBufferOpening, TBufferClosing>(bufferOpenings: Observable<TBufferOpening>, bufferClosingSelector: () => Observable<TBufferClosing>): Observable<T[]>;
    }

    export interface Observable<T> {
        /**
        *  Projects each element of an observable sequence into zero or more windows.
        *
        *  @param {Mixed} windowOpeningsOrClosingSelector Observable sequence whose elements denote the creation of new windows, or, a function invoked to define the boundaries of the produced windows (a new window is started when the previous one is closed, resulting in non-overlapping windows).
        *  @param {Function} [windowClosingSelector] A function invoked to define the closing of each produced window. If a closing selector function is specified for the first parameter, this parameter is ignored.
        *  @returns {Observable} An observable sequence of windows.
        */
        window<TWindowOpening>(windowOpenings: Observable<TWindowOpening>): Observable<Observable<T>>;
        /**
        *  Projects each element of an observable sequence into zero or more windows.
        *
        *  @param {Mixed} windowOpeningsOrClosingSelector Observable sequence whose elements denote the creation of new windows, or, a function invoked to define the boundaries of the produced windows (a new window is started when the previous one is closed, resulting in non-overlapping windows).
        *  @param {Function} [windowClosingSelector] A function invoked to define the closing of each produced window. If a closing selector function is specified for the first parameter, this parameter is ignored.
        *  @returns {Observable} An observable sequence of windows.
        */
        window<TWindowClosing>(windowClosingSelector: () => Observable<TWindowClosing>): Observable<Observable<T>>;
        /**
        *  Projects each element of an observable sequence into zero or more windows.
        *
        *  @param {Mixed} windowOpeningsOrClosingSelector Observable sequence whose elements denote the creation of new windows, or, a function invoked to define the boundaries of the produced windows (a new window is started when the previous one is closed, resulting in non-overlapping windows).
        *  @param {Function} [windowClosingSelector] A function invoked to define the closing of each produced window. If a closing selector function is specified for the first parameter, this parameter is ignored.
        *  @returns {Observable} An observable sequence of windows.
        */
        window<TWindowOpening, TWindowClosing>(windowOpenings: Observable<TWindowOpening>, windowClosingSelector: () => Observable<TWindowClosing>): Observable<Observable<T>>;
    }

    export interface Observable<T> {
        /**
         * Returns a new observable that triggers on the second and subsequent triggerings of the input observable.
         * The Nth triggering of the input observable passes the arguments from the N-1th and Nth triggering as a pair.
         * The argument passed to the N-1th triggering is held in hidden internal state until the Nth triggering occurs.
         * @returns {Observable} An observable that triggers on successive pairs of observations from the input observable as an array.
         */
        pairwise(): Observable<[T, T]>;
    }

    export interface Observable<T> {
        /**
         * Returns two observables which partition the observations of the source by the given function.
         * The first will trigger observations for those values for which the predicate returns true.
         * The second will trigger observations for those values where the predicate returns false.
         * The predicate is executed once for each subscribed observer.
         * Both also propagate all error observations arising from the source and each completes
         * when the source completes.
         * @param {Function} predicate
         *    The function to determine which output Observable will trigger a particular observation.
         * @returns {Array}
         *    An array of observables. The first triggers when the predicate returns true,
         *    and the second triggers when the predicate returns false.
        */
        partition(predicate: _Predicate<T>, thisArg?: any): [Observable<T>, Observable<T>];
    }

    export interface Observable<T> {
        /**
        *  Returns an observable sequence that is the result of invoking the selector on the source sequence, without sharing subscriptions.
        *  This operator allows for a fluent style of writing queries that use the same sequence multiple times.
        *
        * @param {Function} selector Selector function which can use the source sequence as many times as needed, without sharing subscriptions to the source sequence.
        * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence within a selector function.
        */
        let<TResult>(selector: (source: Observable<T>) => Observable<TResult>): Observable<TResult>;
    }

    export interface ObservableStatic {
        /**
        *  Determines whether an observable collection contains values.
        *
        * @example
        *  1 - res = Rx.Observable.if(condition, obs1);
        *  2 - res = Rx.Observable.if(condition, obs1, obs2);
        *  3 - res = Rx.Observable.if(condition, obs1, scheduler);
        * @param {Function} condition The condition which determines if the thenSource or elseSource will be run.
        * @param {Observable} thenSource The observable sequence or Promise that will be run if the condition function returns true.
        * @param {Observable} [elseSource] The observable sequence or Promise that will be run if the condition function returns false. If this is not provided, it defaults to Rx.Observabe.Empty with the specified scheduler.
        * @returns {Observable} An observable sequence which is either the thenSource or elseSource.
        */
        if<T>(condition: () => boolean, thenSource: ObservableOrPromise<T>, elseSourceOrScheduler?: ObservableOrPromise<T> | IScheduler): Observable<T>;
    }

    export interface ObservableStatic {
        /**
        *  Concatenates the observable sequences obtained by running the specified result selector for each element in source.
        * There is an alias for this method called 'forIn' for browsers <IE9
        * @param {Array} sources An array of values to turn into an observable sequence.
        * @param {Function} resultSelector A function to apply to each item in the sources array to turn it into an observable sequence.
        * @returns {Observable} An observable sequence from the concatenated observable sequences.
        */
        for<T, TResult>(sources: T[], resultSelector: _Selector<T, TResult>, thisArg?: any): Observable<TResult>;
        /**
        *  Concatenates the observable sequences obtained by running the specified result selector for each element in source.
        * There is an alias for this method called 'forIn' for browsers <IE9
        * @param {Array} sources An array of values to turn into an observable sequence.
        * @param {Function} resultSelector A function to apply to each item in the sources array to turn it into an observable sequence.
        * @returns {Observable} An observable sequence from the concatenated observable sequences.
        */
        forIn<T, TResult>(sources: T[], resultSelector: _Selector<T, TResult>, thisArg?: any): Observable<TResult>;
    }

    export interface ObservableStatic {
        /**
        *  Repeats source as long as condition holds emulating a while loop.
        * There is an alias for this method called 'whileDo' for browsers <IE9
        *
        * @param {Function} condition The condition which determines if the source will be repeated.
        * @param {Observable} source The observable sequence that will be run if the condition function returns true.
        * @returns {Observable} An observable sequence which is repeated as long as the condition holds.
        */
        while<T>(condition: () => boolean, source: ObservableOrPromise<T>): Observable<T>;
        /**
        *  Repeats source as long as condition holds emulating a while loop.
        * There is an alias for this method called 'whileDo' for browsers <IE9
        *
        * @param {Function} condition The condition which determines if the source will be repeated.
        * @param {Observable} source The observable sequence that will be run if the condition function returns true.
        * @returns {Observable} An observable sequence which is repeated as long as the condition holds.
        */
        whileDo<T>(condition: () => boolean, source: ObservableOrPromise<T>): Observable<T>;
    }

    export interface Observable<T> {
        /**
        *  Repeats source as long as condition holds emulating a do while loop.
        *
        * @param {Function} condition The condition which determines if the source will be repeated.
        * @param {Observable} source The observable sequence that will be run if the condition function returns true.
        * @returns {Observable} An observable sequence which is repeated as long as the condition holds.
        */
        doWhile(condition: () => boolean): Observable<T>;
    }

    export interface ObservableStatic {
        /**
        *  Uses selector to determine which source in sources to use.
        * @param {Function} selector The function which extracts the value for to test in a case statement.
        * @param {Array} sources A object which has keys which correspond to the case statement labels.
        * @param {Observable} [elseSource] The observable sequence or Promise that will be run if the sources are not matched. If this is not provided, it defaults to Rx.Observabe.empty with the specified scheduler.
        *
        * @returns {Observable} An observable sequence which is determined by a case statement.
        */
        case<T>(selector: () => string, sources: { [key: string]: ObservableOrPromise<T>; }, schedulerOrElseSource?: IScheduler | ObservableOrPromise<T>): Observable<T>;
        /**
        *  Uses selector to determine which source in sources to use.
        * @param {Function} selector The function which extracts the value for to test in a case statement.
        * @param {Array} sources A object which has keys which correspond to the case statement labels.
        * @param {Observable} [elseSource] The observable sequence or Promise that will be run if the sources are not matched. If this is not provided, it defaults to Rx.Observabe.empty with the specified scheduler.
        *
        * @returns {Observable} An observable sequence which is determined by a case statement.
        */
        case<T>(selector: () => number, sources: { [key: number]: ObservableOrPromise<T>; }, schedulerOrElseSource?: IScheduler | ObservableOrPromise<T>): Observable<T>;
    }

    export interface Observable<T> {
        /**
        *  Expands an observable sequence by recursively invoking selector.
        *
        * @param {Function} selector Selector function to invoke for each produced element, resulting in another sequence to which the selector will be invoked recursively again.
        * @param {Scheduler} [scheduler] Scheduler on which to perform the expansion. If not provided, this defaults to the current thread scheduler.
        * @returns {Observable} An observable sequence containing all the elements produced by the recursive expansion.
        */
        expand(selector: (item: T) => Observable<T>, scheduler?: IScheduler): Observable<T>;
    }

    export interface ObservableStatic {
        /**
        *  Runs all observable sequences in parallel and collect their last elements.
        *
        * @example
        *  1 - res = Rx.Observable.forkJoin([obs1, obs2]);
        *  1 - res = Rx.Observable.forkJoin(obs1, obs2, ...);
        * @returns {Observable} An observable sequence with an array collecting the last elements of all the input sequences.
        */
        forkJoin<T>(sources: ObservableOrPromise<T>[]): Observable<T[]>;

        /**
        *  Runs all observable sequences in parallel and collect their last elements.
        *
        * @example
        *  1 - res = Rx.Observable.forkJoin([obs1, obs2]);
        *  1 - res = Rx.Observable.forkJoin(obs1, obs2, ...);
        * @returns {Observable} An observable sequence with an array collecting the last elements of all the input sequences.
        */
        forkJoin<T>(...args: ObservableOrPromise<T>[]): Observable<T[]>;
    }

    export interface Observable<T> {
        /**
        *  Runs two observable sequences in parallel and combines their last elemenets.
        *
        * @param {Observable} second Second observable sequence.
        * @param {Function} resultSelector Result selector function to invoke with the last elements of both sequences.
        * @returns {Observable} An observable sequence with the result of calling the selector function with the last elements of both input sequences.
        */
        forkJoin<TSecond, TResult>(second: ObservableOrPromise<TSecond>, resultSelector: (left: T, right: TSecond) => TResult): Observable<TResult>;
    }

    export interface Observable<T> {
        /**
        * Comonadic bind operator.
        * @param {Function} selector A transform function to apply to each element.
        * @param {Object} scheduler Scheduler used to execute the operation. If not specified, defaults to the ImmediateScheduler.
        * @returns {Observable} An observable sequence which results from the comonadic bind operation.
        */
        manySelect<TResult>(selector: _Selector<Observable<T>, TResult>, scheduler?: IScheduler): Observable<TResult>;
        /**
        * Comonadic bind operator.
        * @param {Function} selector A transform function to apply to each element.
        * @param {Object} scheduler Scheduler used to execute the operation. If not specified, defaults to the ImmediateScheduler.
        * @returns {Observable} An observable sequence which results from the comonadic bind operation.
        */
        extend<TResult>(selector: _Selector<Observable<T>, TResult>, scheduler?: IScheduler): Observable<TResult>;
    }

    export class Plan<T> { }

    export interface Pattern2<T1, T2> {
        /**
        *  Creates a pattern that matches the current plan matches and when the specified observable sequences has an available value.
        *  @param other Observable sequence to match in addition to the current pattern.
        *  @return {Pattern} Pattern object that matches when all observable sequences in the pattern have an available value.
        */
        and<T3>(other: Observable<T3>): Pattern3<T1, T2, T3>;
        /**
        *  Matches when all observable sequences in the pattern (specified using a chain of and operators) have an available value and projects the values.
        *  @param {Function} selector Selector that will be invoked with available values from the source sequences, in the same order of the sequences in the pattern.
        *  @return {Plan} Plan that produces the projected values, to be fed (with other plans) to the when operator.
        */
        thenDo<TR>(selector: (item1: T1, item2: T2) => TR): Plan<TR>;
    }
    interface Pattern3<T1, T2, T3> {
        /**
        *  Creates a pattern that matches the current plan matches and when the specified observable sequences has an available value.
        *  @param other Observable sequence to match in addition to the current pattern.
        *  @return {Pattern} Pattern object that matches when all observable sequences in the pattern have an available value.
        */
        and<T4>(other: Observable<T4>): Pattern4<T1, T2, T3, T4>;
        /**
        *  Matches when all observable sequences in the pattern (specified using a chain of and operators) have an available value and projects the values.
        *  @param {Function} selector Selector that will be invoked with available values from the source sequences, in the same order of the sequences in the pattern.
        *  @return {Plan} Plan that produces the projected values, to be fed (with other plans) to the when operator.
        */
        thenDo<TR>(selector: (item1: T1, item2: T2, item3: T3) => TR): Plan<TR>;
    }
    interface Pattern4<T1, T2, T3, T4> {
        /**
        *  Creates a pattern that matches the current plan matches and when the specified observable sequences has an available value.
        *  @param other Observable sequence to match in addition to the current pattern.
        *  @return {Pattern} Pattern object that matches when all observable sequences in the pattern have an available value.
        */
        and<T5>(other: Observable<T5>): Pattern5<T1, T2, T3, T4, T5>;
        /**
        *  Matches when all observable sequences in the pattern (specified using a chain of and operators) have an available value and projects the values.
        *  @param {Function} selector Selector that will be invoked with available values from the source sequences, in the same order of the sequences in the pattern.
        *  @return {Plan} Plan that produces the projected values, to be fed (with other plans) to the when operator.
        */
        thenDo<TR>(selector: (item1: T1, item2: T2, item3: T3, item4: T4) => TR): Plan<TR>;
    }
    interface Pattern5<T1, T2, T3, T4, T5> {
        /**
        *  Creates a pattern that matches the current plan matches and when the specified observable sequences has an available value.
        *  @param other Observable sequence to match in addition to the current pattern.
        *  @return {Pattern} Pattern object that matches when all observable sequences in the pattern have an available value.
        */
        and<T6>(other: Observable<T6>): Pattern6<T1, T2, T3, T4, T5, T6>;
        /**
        *  Matches when all observable sequences in the pattern (specified using a chain of and operators) have an available value and projects the values.
        *  @param {Function} selector Selector that will be invoked with available values from the source sequences, in the same order of the sequences in the pattern.
        *  @return {Plan} Plan that produces the projected values, to be fed (with other plans) to the when operator.
        */
        thenDo<TR>(selector: (item1: T1, item2: T2, item3: T3, item4: T4, item5: T5) => TR): Plan<TR>;
    }
    interface Pattern6<T1, T2, T3, T4, T5, T6> {
        /**
        *  Creates a pattern that matches the current plan matches and when the specified observable sequences has an available value.
        *  @param other Observable sequence to match in addition to the current pattern.
        *  @return {Pattern} Pattern object that matches when all observable sequences in the pattern have an available value.
        */
        and<T7>(other: Observable<T7>): Pattern7<T1, T2, T3, T4, T5, T6, T7>;
        /**
        *  Matches when all observable sequences in the pattern (specified using a chain of and operators) have an available value and projects the values.
        *  @param {Function} selector Selector that will be invoked with available values from the source sequences, in the same order of the sequences in the pattern.
        *  @return {Plan} Plan that produces the projected values, to be fed (with other plans) to the when operator.
        */
        thenDo<TR>(selector: (item1: T1, item2: T2, item3: T3, item4: T4, item5: T5, item6: T6) => TR): Plan<TR>;
    }
    interface Pattern7<T1, T2, T3, T4, T5, T6, T7> {
        /**
        *  Creates a pattern that matches the current plan matches and when the specified observable sequences has an available value.
        *  @param other Observable sequence to match in addition to the current pattern.
        *  @return {Pattern} Pattern object that matches when all observable sequences in the pattern have an available value.
        */
        and<T8>(other: Observable<T8>): Pattern8<T1, T2, T3, T4, T5, T6, T7, T8>;
        /**
        *  Matches when all observable sequences in the pattern (specified using a chain of and operators) have an available value and projects the values.
        *  @param {Function} selector Selector that will be invoked with available values from the source sequences, in the same order of the sequences in the pattern.
        *  @return {Plan} Plan that produces the projected values, to be fed (with other plans) to the when operator.
        */
        thenDo<TR>(selector: (item1: T1, item2: T2, item3: T3, item4: T4, item5: T5, item6: T6, item7: T7) => TR): Plan<TR>;
    }
    interface Pattern8<T1, T2, T3, T4, T5, T6, T7, T8> {
        /**
        *  Creates a pattern that matches the current plan matches and when the specified observable sequences has an available value.
        *  @param other Observable sequence to match in addition to the current pattern.
        *  @return {Pattern} Pattern object that matches when all observable sequences in the pattern have an available value.
        */
        and<T9>(other: Observable<T9>): Pattern9<T1, T2, T3, T4, T5, T6, T7, T8, T9>;
        /**
        *  Matches when all observable sequences in the pattern (specified using a chain of and operators) have an available value and projects the values.
        *  @param {Function} selector Selector that will be invoked with available values from the source sequences, in the same order of the sequences in the pattern.
        *  @return {Plan} Plan that produces the projected values, to be fed (with other plans) to the when operator.
        */
        thenDo<TR>(selector: (item1: T1, item2: T2, item3: T3, item4: T4, item5: T5, item6: T6, item7: T7, item8: T8) => TR): Plan<TR>;
    }
    interface Pattern9<T1, T2, T3, T4, T5, T6, T7, T8, T9> {
        /**
        *  Matches when all observable sequences in the pattern (specified using a chain of and operators) have an available value and projects the values.
        *  @param {Function} selector Selector that will be invoked with available values from the source sequences, in the same order of the sequences in the pattern.
        *  @return {Plan} Plan that produces the projected values, to be fed (with other plans) to the when operator.
        */
        thenDo<TR>(selector: (item1: T1, item2: T2, item3: T3, item4: T4, item5: T5, item6: T6, item7: T7, item8: T8, item9: T9) => TR): Plan<TR>;
    }

    export interface Observable<T> {
        /**
        *  Creates a pattern that matches when both observable sequences have an available value.
        *
        *  @param right Observable sequence to match with the current sequence.
        *  @return {Pattern} Pattern object that matches when both observable sequences have an available value.
        */
        and<T2>(right: Observable<T2>): Pattern2<T, T2>;
    }

    export interface Observable<T> {
        /**
        *  Matches when the observable sequence has an available value and projects the value.
        *
        *  @param {Function} selector Selector that will be invoked for values in the source sequence.
        *  @returns {Plan} Plan that produces the projected values, to be fed (with other plans) to the when operator.
        */
        thenDo<TR>(selector: (item1: T) => TR): Plan<TR>;
    }

    export interface ObservableStatic {
        /**
        *  Joins together the results from several patterns.
        *
        *  @param plans A series of plans (specified as an Array of as a series of arguments) created by use of the Then operator on patterns.
        *  @returns {Observable} Observable sequence with the results form matching several patterns.
        */
        when<TR>(plan: Plan<TR>): Observable<TR>;
    }

    export interface ObservableStatic {
        /**
         *  Returns an observable sequence that produces a value after each period.
         *
         * @example
         *  1 - res = Rx.Observable.interval(1000);
         *  2 - res = Rx.Observable.interval(1000, Rx.Scheduler.timeout);
         *
         * @param {Number} period Period for producing the values in the resulting sequence (specified as an integer denoting milliseconds).
         * @param {Scheduler} [scheduler] Scheduler to run the timer on. If not specified, Rx.Scheduler.timeout is used.
         * @returns {Observable} An observable sequence that produces a value after each period.
         */
        interval(period: number, scheduler?: IScheduler): Observable<number>;
    }

    export interface ObservableStatic {
        /**
         *  Returns an observable sequence that produces a value after dueTime has elapsed and then after each period.
         * @param {Number} dueTime Absolute (specified as a Date object) or relative time (specified as an integer denoting milliseconds) at which to produce the first value.
         * @param {Mixed} [periodOrScheduler]  Period to produce subsequent values (specified as an integer denoting milliseconds), or the scheduler to run the timer on. If not specified, the resulting timer is not recurring.
         * @param {Scheduler} [scheduler]  Scheduler to run the timer on. If not specified, the timeout scheduler is used.
         * @returns {Observable} An observable sequence that produces a value after due time has elapsed and then each period.
         */
        timer(dueTime: number, period: number, scheduler?: IScheduler): Observable<number>;
        /**
         *  Returns an observable sequence that produces a value after dueTime has elapsed and then after each period.
         * @param {Number} dueTime Absolute (specified as a Date object) or relative time (specified as an integer denoting milliseconds) at which to produce the first value.
         * @param {Mixed} [periodOrScheduler]  Period to produce subsequent values (specified as an integer denoting milliseconds), or the scheduler to run the timer on. If not specified, the resulting timer is not recurring.
         * @param {Scheduler} [scheduler]  Scheduler to run the timer on. If not specified, the timeout scheduler is used.
         * @returns {Observable} An observable sequence that produces a value after due time has elapsed and then each period.
         */
        timer(dueTime: number, scheduler?: IScheduler): Observable<number>;
    }

    export interface Observable<T> {
        /**
        *  Time shifts the observable sequence by dueTime. The relative time intervals between the values are preserved.
        *
        * @example
        *  1 - res = Rx.Observable.delay(new Date());
        *  2 - res = Rx.Observable.delay(new Date(), Rx.Scheduler.timeout);
        *
        *  3 - res = Rx.Observable.delay(5000);
        *  4 - res = Rx.Observable.delay(5000, 1000, Rx.Scheduler.timeout);
        * @memberOf Observable#
        * @param {Number} dueTime Absolute (specified as a Date object) or relative time (specified as an integer denoting milliseconds) by which to shift the observable sequence.
        * @param {Scheduler} [scheduler] Scheduler to run the delay timers on. If not specified, the timeout scheduler is used.
        * @returns {Observable} Time-shifted sequence.
        */
        delay(dueTime: Date, scheduler?: IScheduler): Observable<T>;
        /**
        *  Time shifts the observable sequence by dueTime. The relative time intervals between the values are preserved.
        *
        * @example
        *  1 - res = Rx.Observable.delay(new Date());
        *  2 - res = Rx.Observable.delay(new Date(), Rx.Scheduler.timeout);
        *
        *  3 - res = Rx.Observable.delay(5000);
        *  4 - res = Rx.Observable.delay(5000, 1000, Rx.Scheduler.timeout);
        * @memberOf Observable#
        * @param {Number} dueTime Absolute (specified as a Date object) or relative time (specified as an integer denoting milliseconds) by which to shift the observable sequence.
        * @param {Scheduler} [scheduler] Scheduler to run the delay timers on. If not specified, the timeout scheduler is used.
        * @returns {Observable} Time-shifted sequence.
        */
        delay(dueTime: number, scheduler?: IScheduler): Observable<T>;

        /**
        *  Time shifts the observable sequence based on a subscription delay and a delay selector function for each element.
        *
        * @example
        *  1 - res = source.delayWithSelector(function (x) { return Rx.Scheduler.timer(5000); }); // with selector only
        *  1 - res = source.delayWithSelector(Rx.Observable.timer(2000), function (x) { return Rx.Observable.timer(x); }); // with delay and selector
        *
        * @param {Observable} [subscriptionDelay]  Sequence indicating the delay for the subscription to the source.
        * @param {Function} delayDurationSelector Selector function to retrieve a sequence indicating the delay for each given element.
        * @returns {Observable} Time-shifted sequence.
        */
        delay(delayDurationSelector: (item: T) => ObservableOrPromise<number>): Observable<T>;

        /**
        *  Time shifts the observable sequence based on a subscription delay and a delay selector function for each element.
        *
        * @example
        *  1 - res = source.delayWithSelector(function (x) { return Rx.Scheduler.timer(5000); }); // with selector only
        *  1 - res = source.delayWithSelector(Rx.Observable.timer(2000), function (x) { return Rx.Observable.timer(x); }); // with delay and selector
        *
        * @param {Observable} [subscriptionDelay]  Sequence indicating the delay for the subscription to the source.
        * @param {Function} delayDurationSelector Selector function to retrieve a sequence indicating the delay for each given element.
        * @returns {Observable} Time-shifted sequence.
        */
        delay(subscriptionDelay: Observable<number>, delayDurationSelector: (item: T) => ObservableOrPromise<number>): Observable<T>;
    }

    export interface Observable<T> {
        /**
        *  Ignores values from an observable sequence which are followed by another value before dueTime.
        * @param {Number} dueTime Duration of the debounce period for each value (specified as an integer denoting milliseconds).
        * @param {Scheduler} [scheduler]  Scheduler to run the debounce timers on. If not specified, the timeout scheduler is used.
        * @returns {Observable} The debounced sequence.
        */
        debounce(dueTime: number, scheduler?: IScheduler): Observable<T>;

        /**
        * Ignores values from an observable sequence which are followed by another value within a computed throttle duration.
        * @param {Function} durationSelector Selector function to retrieve a sequence indicating the throttle duration for each given element.
        * @returns {Observable} The debounced sequence.
        */
        debounce(debounceDurationSelector: (item: T) => ObservableOrPromise<any>): Observable<T>;
    }

    export interface Observable<T> {
        /**
        *  Projects each element of an observable sequence into zero or more windows which are produced based on timing information.
        * @param {Number} timeSpan Length of each window (specified as an integer denoting milliseconds).
        * @param {Mixed} [timeShiftOrScheduler]  Interval between creation of consecutive windows (specified as an integer denoting milliseconds), or an optional scheduler parameter. If not specified, the time shift corresponds to the timeSpan parameter, resulting in non-overlapping adjacent windows.
        * @param {Scheduler} [scheduler]  Scheduler to run windowing timers on. If not specified, the timeout scheduler is used.
        * @returns {Observable} An observable sequence of windows.
        */
        windowWithTime(timeSpan: number, timeShift: number, scheduler?: IScheduler): Observable<Observable<T>>;
        /**
        *  Projects each element of an observable sequence into zero or more windows which are produced based on timing information.
        * @param {Number} timeSpan Length of each window (specified as an integer denoting milliseconds).
        * @param {Mixed} [timeShiftOrScheduler]  Interval between creation of consecutive windows (specified as an integer denoting milliseconds), or an optional scheduler parameter. If not specified, the time shift corresponds to the timeSpan parameter, resulting in non-overlapping adjacent windows.
        * @param {Scheduler} [scheduler]  Scheduler to run windowing timers on. If not specified, the timeout scheduler is used.
        * @returns {Observable} An observable sequence of windows.
        */
        windowWithTime(timeSpan: number, scheduler?: IScheduler): Observable<Observable<T>>;
    }

    export interface Observable<T> {
        /**
        *  Projects each element of an observable sequence into a window that is completed when either it's full or a given amount of time has elapsed.
        * @param {Number} timeSpan Maximum time length of a window.
        * @param {Number} count Maximum element count of a window.
        * @param {Scheduler} [scheduler]  Scheduler to run windowing timers on. If not specified, the timeout scheduler is used.
        * @returns {Observable} An observable sequence of windows.
        */
        windowWithTimeOrCount(timeSpan: number, count: number, scheduler?: IScheduler): Observable<Observable<T>>;
    }

    export interface Observable<T> {
        /**
        *  Projects each element of an observable sequence into zero or more buffers which are produced based on timing information.
        * @param {Number} timeSpan Length of each buffer (specified as an integer denoting milliseconds).
        * @param {Mixed} [timeShiftOrScheduler]  Interval between creation of consecutive buffers (specified as an integer denoting milliseconds), or an optional scheduler parameter. If not specified, the time shift corresponds to the timeSpan parameter, resulting in non-overlapping adjacent buffers.
        * @param {Scheduler} [scheduler]  Scheduler to run buffer timers on. If not specified, the timeout scheduler is used.
        * @returns {Observable} An observable sequence of buffers.
        */
        bufferWithTime(timeSpan: number, timeShift: number, scheduler?: IScheduler): Observable<T[]>;
        /**
        *  Projects each element of an observable sequence into zero or more buffers which are produced based on timing information.
        * @param {Number} timeSpan Length of each buffer (specified as an integer denoting milliseconds).
        * @param {Mixed} [timeShiftOrScheduler]  Interval between creation of consecutive buffers (specified as an integer denoting milliseconds), or an optional scheduler parameter. If not specified, the time shift corresponds to the timeSpan parameter, resulting in non-overlapping adjacent buffers.
        * @param {Scheduler} [scheduler]  Scheduler to run buffer timers on. If not specified, the timeout scheduler is used.
        * @returns {Observable} An observable sequence of buffers.
        */
        bufferWithTime(timeSpan: number, scheduler?: IScheduler): Observable<T[]>;
    }

    export interface Observable<T> {
        /**
        *  Projects each element of an observable sequence into a buffer that is completed when either it's full or a given amount of time has elapsed.
        * @param {Number} timeSpan Maximum time length of a buffer.
        * @param {Number} count Maximum element count of a buffer.
        * @param {Scheduler} [scheduler]  Scheduler to run bufferin timers on. If not specified, the timeout scheduler is used.
        * @returns {Observable} An observable sequence of buffers.
        */
        bufferWithTimeOrCount(timeSpan: number, count: number, scheduler?: IScheduler): Observable<T[]>;
    }

	export interface TimeInterval<T> {
		value: T;
		interval: number;
	}

    export interface Observable<T> {
        /**
        *  Records the time interval between consecutive values in an observable sequence.
        *
        * @example
        *  1 - res = source.timeInterval();
        *  2 - res = source.timeInterval(Rx.Scheduler.timeout);
        *
        * @param [scheduler]  Scheduler used to compute time intervals. If not specified, the timeout scheduler is used.
        * @returns {Observable} An observable sequence with time interval information on values.
        */
        timeInterval(scheduler?: IScheduler): Observable<TimeInterval<T>>;
    }

    export interface Timestamp<T> {
        value: T;
        timestamp: number;
    }

    export interface Observable<T> {
        /**
        *  Records the timestamp for each value in an observable sequence.
        *
        * @example
        *  1 - res = source.timestamp(); // produces { value: x, timestamp: ts }
        *  2 - res = source.timestamp(Rx.Scheduler.default);
        *
        * @param {Scheduler} [scheduler]  Scheduler used to compute timestamps. If not specified, the default scheduler is used.
        * @returns {Observable} An observable sequence with timestamp information on values.
        */
        timestamp(scheduler?: IScheduler): Observable<Timestamp<T>>;
    }

    export interface Observable<T> {
        /**
        *  Samples the observable sequence at each interval.
        *
        * @example
        *  1 - res = source.sample(sampleObservable); // Sampler tick sequence
        *  2 - res = source.sample(5000); // 5 seconds
        *  2 - res = source.sample(5000, Rx.Scheduler.timeout); // 5 seconds
        *
        * @param {Mixed} intervalOrSampler Interval at which to sample (specified as an integer denoting milliseconds) or Sampler Observable.
        * @param {Scheduler} [scheduler]  Scheduler to run the sampling timer on. If not specified, the timeout scheduler is used.
        * @returns {Observable} Sampled observable sequence.
        */
        sample(intervalOrSampler: number, scheduler?: IScheduler): Observable<T>;
        /**
        *  Samples the observable sequence at each interval.
        *
        * @example
        *  1 - res = source.sample(sampleObservable); // Sampler tick sequence
        *  2 - res = source.sample(5000); // 5 seconds
        *  2 - res = source.sample(5000, Rx.Scheduler.timeout); // 5 seconds
        *
        * @param {Mixed} intervalOrSampler Interval at which to sample (specified as an integer denoting milliseconds) or Sampler Observable.
        * @param {Scheduler} [scheduler]  Scheduler to run the sampling timer on. If not specified, the timeout scheduler is used.
        * @returns {Observable} Sampled observable sequence.
        */
        sample<TSample>(sampler: Observable<TSample>, scheduler?: IScheduler): Observable<T>;
        /**
        *  Samples the observable sequence at each interval.
        *
        * @example
        *  1 - res = source.sample(sampleObservable); // Sampler tick sequence
        *  2 - res = source.sample(5000); // 5 seconds
        *  2 - res = source.sample(5000, Rx.Scheduler.timeout); // 5 seconds
        *
        * @param {Mixed} intervalOrSampler Interval at which to sample (specified as an integer denoting milliseconds) or Sampler Observable.
        * @param {Scheduler} [scheduler]  Scheduler to run the sampling timer on. If not specified, the timeout scheduler is used.
        * @returns {Observable} Sampled observable sequence.
        */
        throttleLatest(interval: number, scheduler?: IScheduler): Observable<T>;
        /**
        *  Samples the observable sequence at each interval.
        *
        * @example
        *  1 - res = source.sample(sampleObservable); // Sampler tick sequence
        *  2 - res = source.sample(5000); // 5 seconds
        *  2 - res = source.sample(5000, Rx.Scheduler.timeout); // 5 seconds
        *
        * @param {Mixed} intervalOrSampler Interval at which to sample (specified as an integer denoting milliseconds) or Sampler Observable.
        * @param {Scheduler} [scheduler]  Scheduler to run the sampling timer on. If not specified, the timeout scheduler is used.
        * @returns {Observable} Sampled observable sequence.
        */
        throttleLatest<TSample>(sampler: Observable<TSample>, scheduler?: IScheduler): Observable<T>;
    }

    export interface Observable<T> {
        /**
        *  Returns the source observable sequence or the other observable sequence if dueTime elapses.
        * @param {Number} dueTime Absolute (specified as a Date object) or relative time (specified as an integer denoting milliseconds) when a timeout occurs.
        * @param {Scheduler} [scheduler]  Scheduler to run the timeout timers on. If not specified, the timeout scheduler is used.
        * @returns {Observable} The source sequence switching to the other sequence in case of a timeout.
        */
        timeout(dueTime: Date, scheduler?: IScheduler): Observable<T>;

        /**
        *  Returns the source observable sequence or the other observable sequence if dueTime elapses.
        * @param {Number} dueTime Absolute (specified as a Date object) or relative time (specified as an integer denoting milliseconds) when a timeout occurs.
        * @param {Observable} [other]  Sequence to return in case of a timeout. If not specified, a timeout error throwing sequence will be used.
        * @param {Scheduler} [scheduler]  Scheduler to run the timeout timers on. If not specified, the timeout scheduler is used.
        * @returns {Observable} The source sequence switching to the other sequence in case of a timeout.
        */
        timeout(dueTime: Date, other?: Observable<T>, scheduler?: IScheduler): Observable<T>;
        /**
        *  Returns the source observable sequence or the other observable sequence if dueTime elapses.
        * @param {Number} dueTime Absolute (specified as a Date object) or relative time (specified as an integer denoting milliseconds) when a timeout occurs.
        * @param {Observable} [other]  Sequence to return in case of a timeout. If not specified, a timeout error throwing sequence will be used.
        * @param {Scheduler} [scheduler]  Scheduler to run the timeout timers on. If not specified, the timeout scheduler is used.
        * @returns {Observable} The source sequence switching to the other sequence in case of a timeout.
        */
        timeout(dueTime: number, scheduler?: IScheduler): Observable<T>;
        /**
        *  Returns the source observable sequence or the other observable sequence if dueTime elapses.
        * @param {Number} dueTime Absolute (specified as a Date object) or relative time (specified as an integer denoting milliseconds) when a timeout occurs.
        * @param {Observable} [other]  Sequence to return in case of a timeout. If not specified, a timeout error throwing sequence will be used.
        * @param {Scheduler} [scheduler]  Scheduler to run the timeout timers on. If not specified, the timeout scheduler is used.
        * @returns {Observable} The source sequence switching to the other sequence in case of a timeout.
        */
        timeout(dueTime: number, other?: Observable<T>, scheduler?: IScheduler): Observable<T>;

        /**
        *  Returns the source observable sequence, switching to the other observable sequence if a timeout is signaled.
        * @param {Function} timeoutDurationSelector Selector to retrieve an observable sequence that represents the timeout between the current element and the next element.
        * @returns {Observable} The source sequence switching to the other sequence in case of a timeout.
        */
        timeout<TTimeout>(timeoutdurationSelector: (item: T) => Observable<TTimeout>): Observable<T>;

        /**
        *  Returns the source observable sequence, switching to the other observable sequence if a timeout is signaled.
        * @param {Function} timeoutDurationSelector Selector to retrieve an observable sequence that represents the timeout between the current element and the next element.
        * @param {Observable} other  Sequence to return in case of a timeout. If not provided, this is set to Observable.throwException().
        * @returns {Observable} The source sequence switching to the other sequence in case of a timeout.
        */
        timeout<TTimeout>(timeoutdurationSelector: (item: T) => Observable<TTimeout>, other: Observable<T>): Observable<T>;

        /**
        *  Returns the source observable sequence, switching to the other observable sequence if a timeout is signaled.
        * @param {Observable} [firstTimeout]  Observable sequence that represents the timeout for the first element. If not provided, this defaults to Observable.never().
        * @param {Function} timeoutDurationSelector Selector to retrieve an observable sequence that represents the timeout between the current element and the next element.
        * @param {Observable} [other]  Sequence to return in case of a timeout. If not provided, this is set to Observable.throwException().
        * @returns {Observable} The source sequence switching to the other sequence in case of a timeout.
        */
        timeout<TTimeout>(firstTimeout: Observable<TTimeout>, timeoutdurationSelector: (item: T) => Observable<TTimeout>, other?: Observable<T>): Observable<T>;
    }

    export interface ObservableStatic {
        /**
         *  Generates an observable sequence by iterating a state from an initial state until the condition fails.
         *
         * @example
         *  res = source.generateWithAbsoluteTime(0,
         *      function (x) { return return true; },
         *      function (x) { return x + 1; },
         *      function (x) { return x; },
         *      function (x) { return new Date(); }
         *  });
         *
         * @param {Mixed} initialState Initial state.
         * @param {Function} condition Condition to terminate generation (upon returning false).
         * @param {Function} iterate Iteration step function.
         * @param {Function} resultSelector Selector function for results produced in the sequence.
         * @param {Function} timeSelector Time selector function to control the speed of values being produced each iteration, returning Date values.
         * @param {Scheduler} [scheduler]  Scheduler on which to run the generator loop. If not specified, the timeout scheduler is used.
         * @returns {Observable} The generated sequence.
         */
        generateWithAbsoluteTime<TState, TResult>(
            initialState: TState,
            condition: (state: TState) => boolean,
            iterate: (state: TState) => TState,
            resultSelector: (state: TState) => TResult,
            timeSelector: (state: TState) => Date,
            scheduler?: IScheduler): Observable<TResult>;
    }

    export interface ObservableStatic {
        /**
         *  Generates an observable sequence by iterating a state from an initial state until the condition fails.
         *
         * @example
         *  res = source.generateWithRelativeTime(0,
         *      function (x) { return return true; },
         *      function (x) { return x + 1; },
         *      function (x) { return x; },
         *      function (x) { return 500; }
         *  );
         *
         * @param {Mixed} initialState Initial state.
         * @param {Function} condition Condition to terminate generation (upon returning false).
         * @param {Function} iterate Iteration step function.
         * @param {Function} resultSelector Selector function for results produced in the sequence.
         * @param {Function} timeSelector Time selector function to control the speed of values being produced each iteration, returning integer values denoting milliseconds.
         * @param {Scheduler} [scheduler]  Scheduler on which to run the generator loop. If not specified, the timeout scheduler is used.
         * @returns {Observable} The generated sequence.
         */
        generateWithRelativeTime<TState, TResult>(
            initialState: TState,
            condition: (state: TState) => boolean,
            iterate: (state: TState) => TState,
            resultSelector: (state: TState) => TResult,
            timeSelector: (state: TState) => number,
            scheduler?: IScheduler): Observable<TResult>;
    }

    export interface Observable<T> {
        /**
        *  Time shifts the observable sequence by delaying the subscription with the specified relative time duration, using the specified scheduler to run timers.
        *
        * @example
        *  1 - res = source.delaySubscription(5000); // 5s
        *  2 - res = source.delaySubscription(5000, Rx.Scheduler.default); // 5 seconds
        *
        * @param {Number} dueTime Relative or absolute time shift of the subscription.
        * @param {Scheduler} [scheduler]  Scheduler to run the subscription delay timer on. If not specified, the timeout scheduler is used.
        * @returns {Observable} Time-shifted sequence.
        */
        delaySubscription(dueTime: number, scheduler?: IScheduler): Observable<T>;
    }

    export interface Observable<T> {
        /**
        *  Skips elements for the specified duration from the end of the observable source sequence, using the specified scheduler to run timers.
        *
        *  1 - res = source.skipLastWithTime(5000);
        *  2 - res = source.skipLastWithTime(5000, scheduler);
        *
        * @description
        *  This operator accumulates a queue with a length enough to store elements received during the initial duration window.
        *  As more elements are received, elements older than the specified duration are taken from the queue and produced on the
        *  result sequence. This causes elements to be delayed with duration.
        * @param {Number} duration Duration for skipping elements from the end of the sequence.
        * @param {Scheduler} [scheduler]  Scheduler to run the timer on. If not specified, defaults to Rx.Scheduler.timeout
        * @returns {Observable} An observable sequence with the elements skipped during the specified duration from the end of the source sequence.
        */
        skipLastWithTime(duration: number, scheduler?: IScheduler): Observable<T>;
    }

    export interface Observable<T> {
        /**
        *  Returns elements within the specified duration from the end of the observable source sequence, using the specified schedulers to run timers and to drain the collected elements.
        * @description
        *  This operator accumulates a queue with a length enough to store elements received during the initial duration window.
        *  As more elements are received, elements older than the specified duration are taken from the queue and produced on the
        *  result sequence. This causes elements to be delayed with duration.
        * @param {Number} duration Duration for taking elements from the end of the sequence.
        * @param {Scheduler} [scheduler]  Scheduler to run the timer on. If not specified, defaults to Rx.Scheduler.timeout.
        * @returns {Observable} An observable sequence with the elements taken during the specified duration from the end of the source sequence.
        */
        takeLastWithTime(duration: number, timerScheduler?: IScheduler, loopScheduler?: IScheduler): Observable<T>;
    }

    export interface Observable<T> {
        /**
        *  Returns an array with the elements within the specified duration from the end of the observable source sequence, using the specified scheduler to run timers.
        * @description
        *  This operator accumulates a queue with a length enough to store elements received during the initial duration window.
        *  As more elements are received, elements older than the specified duration are taken from the queue and produced on the
        *  result sequence. This causes elements to be delayed with duration.
        * @param {Number} duration Duration for taking elements from the end of the sequence.
        * @param {Scheduler} scheduler Scheduler to run the timer on. If not specified, defaults to Rx.Scheduler.timeout.
        * @returns {Observable} An observable sequence containing a single array with the elements taken during the specified duration from the end of the source sequence.
        */
        takeLastBufferWithTime(duration: number, scheduler?: IScheduler): Observable<T[]>;
    }

    export interface Observable<T> {
        /**
        *  Takes elements for the specified duration from the start of the observable source sequence, using the specified scheduler to run timers.
        *
        * @example
        *  1 - res = source.takeWithTime(5000,  [optional scheduler]);
        * @description
        *  This operator accumulates a queue with a length enough to store elements received during the initial duration window.
        *  As more elements are received, elements older than the specified duration are taken from the queue and produced on the
        *  result sequence. This causes elements to be delayed with duration.
        * @param {Number} duration Duration for taking elements from the start of the sequence.
        * @param {Scheduler} scheduler Scheduler to run the timer on. If not specified, defaults to Rx.Scheduler.timeout.
        * @returns {Observable} An observable sequence with the elements taken during the specified duration from the start of the source sequence.
        */
        takeWithTime(duration: number, scheduler?: IScheduler): Observable<T>;
    }

    export interface Observable<T> {
        /**
        *  Skips elements for the specified duration from the start of the observable source sequence, using the specified scheduler to run timers.
        *
        * @example
        *  1 - res = source.skipWithTime(5000, [optional scheduler]);
        *
        * @description
        *  Specifying a zero value for duration doesn't guarantee no elements will be dropped from the start of the source sequence.
        *  This is a side-effect of the asynchrony introduced by the scheduler, where the action that causes callbacks from the source sequence to be forwarded
        *  may not execute immediately, despite the zero due time.
        *
        *  Errors produced by the source sequence are always forwarded to the result sequence, even if the error occurs before the duration.
        * @param {Number} duration Duration for skipping elements from the start of the sequence.
        * @param {Scheduler} scheduler Scheduler to run the timer on. If not specified, defaults to Rx.Scheduler.timeout.
        * @returns {Observable} An observable sequence with the elements skipped during the specified duration from the start of the source sequence.
        */
        skipWithTime(duration: number, scheduler?: IScheduler): Observable<T>;
    }

    export interface Observable<T> {
        /**
        *  Skips elements from the observable source sequence until the specified start time, using the specified scheduler to run timers.
        *  Errors produced by the source sequence are always forwarded to the result sequence, even if the error occurs before the start time.
        *
        * @examples
        *  1 - res = source.skipUntilWithTime(new Date(), [scheduler]);
        *  2 - res = source.skipUntilWithTime(5000, [scheduler]);
        * @param {Date|Number} startTime Time to start taking elements from the source sequence. If this value is less than or equal to Date(), no elements will be skipped.
        * @param {Scheduler} [scheduler] Scheduler to run the timer on. If not specified, defaults to Rx.Scheduler.timeout.
        * @returns {Observable} An observable sequence with the elements skipped until the specified start time.
        */
        skipUntilWithTime(startTime: Date, scheduler?: IScheduler): Observable<T>;
        /**
        *  Skips elements from the observable source sequence until the specified start time, using the specified scheduler to run timers.
        *  Errors produced by the source sequence are always forwarded to the result sequence, even if the error occurs before the start time.
        *
        * @examples
        *  1 - res = source.skipUntilWithTime(new Date(), [scheduler]);
        *  2 - res = source.skipUntilWithTime(5000, [scheduler]);
        * @param {Date|Number} startTime Time to start taking elements from the source sequence. If this value is less than or equal to Date(), no elements will be skipped.
        * @param {Scheduler} [scheduler] Scheduler to run the timer on. If not specified, defaults to Rx.Scheduler.timeout.
        * @returns {Observable} An observable sequence with the elements skipped until the specified start time.
        */
        skipUntilWithTime(duration: number, scheduler?: IScheduler): Observable<T>;
    }

    export interface Observable<T> {
        /**
        *  Takes elements for the specified duration until the specified end time, using the specified scheduler to run timers.
        * @param {Number | Date} endTime Time to stop taking elements from the source sequence. If this value is less than or equal to new Date(), the result stream will complete immediately.
        * @param {Scheduler} [scheduler] Scheduler to run the timer on.
        * @returns {Observable} An observable sequence with the elements taken until the specified end time.
        */
        takeUntilWithTime(endTime: Date, scheduler?: IScheduler): Observable<T>;
        /**
        *  Takes elements for the specified duration until the specified end time, using the specified scheduler to run timers.
        * @param {Number | Date} endTime Time to stop taking elements from the source sequence. If this value is less than or equal to new Date(), the result stream will complete immediately.
        * @param {Scheduler} [scheduler] Scheduler to run the timer on.
        * @returns {Observable} An observable sequence with the elements taken until the specified end time.
        */
        takeUntilWithTime(duration: number, scheduler?: IScheduler): Observable<T>;
    }

    export interface Observable<T> {
        /**
        * Returns an Observable that emits only the first item emitted by the source Observable during sequential time windows of a specified duration.
        * @param {Number} windowDuration time to wait before emitting another item after emitting the last item
        * @param {Scheduler} [scheduler] the Scheduler to use internally to manage the timers that handle timeout for each item. If not provided, defaults to Scheduler.timeout.
        * @returns {Observable} An Observable that performs the throttle operation.
        */
        throttle(windowDuration: number, scheduler?: IScheduler): Observable<T>;
    }

    export interface Observable<T> {
        /**
         * Executes a transducer to transform the observable sequence
         * @param {Transducer} transducer A transducer to execute
         * @returns {Observable} An Observable sequence containing the results from the transducer.
         */
        transduce(transducer: any): any;
        //TODO: Setup transducer
    }

    export interface Observable<T> {
        /**
        * Performs a exclusive waiting for the first to finish before subscribing to another observable.
        * Observables that come in between subscriptions will be dropped on the floor.
        * @returns {Observable} A exclusive observable with only the results that happen when subscribed.
        */
        switchFirst(): T;
    }

    export interface Observable<T> {
        /**
        *  Projects each element of an observable sequence into a new sequence of observable sequences by incorporating the element's index and then
        *  transforms an observable sequence of observable sequences into an observable sequence which performs a exclusive waiting for the first to finish before subscribing to another observable.
        * @param {Function} selector A transform function to apply to each source element; the second parameter of the function represents the index of the source element.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the transform function on each element of source producing an Observable of Observable sequences
        *  and that at any point in time performs a exclusive waiting for the first to finish before subscribing to another observable.
        */
        selectSwitchFirst<TResult>(selector: _ValueOrSelector<T, ObservableOrPromise<TResult>>): Observable<TResult>;
        /**
        *  Projects each element of an observable sequence into a new sequence of observable sequences by incorporating the element's index and then
        *  transforms an observable sequence of observable sequences into an observable sequence which performs a exclusive waiting for the first to finish before subscribing to another observable.
        * @param {Function} selector A transform function to apply to each source element; the second parameter of the function represents the index of the source element.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the transform function on each element of source producing an Observable of Observable sequences
        *  and that at any point in time performs a exclusive waiting for the first to finish before subscribing to another observable.
        */
        selectSwitchFirst<TResult>(selector: _ValueOrSelector<T, ArrayOrIterable<TResult>>): Observable<TResult>;
        /**
        *  Projects each element of an observable sequence into a new sequence of observable sequences by incorporating the element's index and then
        *  transforms an observable sequence of observable sequences into an observable sequence which performs a exclusive waiting for the first to finish before subscribing to another observable.
        * @param {Function} selector A transform function to apply to each source element; the second parameter of the function represents the index of the source element.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the transform function on each element of source producing an Observable of Observable sequences
        *  and that at any point in time performs a exclusive waiting for the first to finish before subscribing to another observable.
        */
        selectSwitchFirst<TOther, TResult>(selector: _ValueOrSelector<T, ObservableOrPromise<TOther>>, resultSelector: special._FlatMapResultSelector<T, TOther, TResult>, thisArg?: any): Observable<TResult>;
        /**
        *  Projects each element of an observable sequence into a new sequence of observable sequences by incorporating the element's index and then
        *  transforms an observable sequence of observable sequences into an observable sequence which performs a exclusive waiting for the first to finish before subscribing to another observable.
        * @param {Function} selector A transform function to apply to each source element; the second parameter of the function represents the index of the source element.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the transform function on each element of source producing an Observable of Observable sequences
        *  and that at any point in time performs a exclusive waiting for the first to finish before subscribing to another observable.
        */
        selectSwitchFirst<TOther, TResult>(selector: _ValueOrSelector<T, ArrayOrIterable<TOther>>, resultSelector: special._FlatMapResultSelector<T, TOther, TResult>, thisArg?: any): Observable<TResult>;

        /**
        *  Projects each element of an observable sequence into a new sequence of observable sequences by incorporating the element's index and then
        *  transforms an observable sequence of observable sequences into an observable sequence which performs a exclusive waiting for the first to finish before subscribing to another observable.
        * @param {Function} selector A transform function to apply to each source element; the second parameter of the function represents the index of the source element.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the transform function on each element of source producing an Observable of Observable sequences
        *  and that at any point in time performs a exclusive waiting for the first to finish before subscribing to another observable.
        */
        flatMapFirst<TResult>(selector: _ValueOrSelector<T, ObservableOrPromise<TResult>>): Observable<TResult>;

        /**
        *  Projects each element of an observable sequence into a new sequence of observable sequences by incorporating the element's index and then
        *  transforms an observable sequence of observable sequences into an observable sequence which performs a exclusive waiting for the first to finish before subscribing to another observable.
        * @param {Function} selector A transform function to apply to each source element; the second parameter of the function represents the index of the source element.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the transform function on each element of source producing an Observable of Observable sequences
        *  and that at any point in time performs a exclusive waiting for the first to finish before subscribing to another observable.
        */
        flatMapFirst<TResult>(selector: _ValueOrSelector<T, ArrayOrIterable<TResult>>): Observable<TResult>;
        /**
        *  Projects each element of an observable sequence into a new sequence of observable sequences by incorporating the element's index and then
        *  transforms an observable sequence of observable sequences into an observable sequence which performs a exclusive waiting for the first to finish before subscribing to another observable.
        * @param {Function} selector A transform function to apply to each source element; the second parameter of the function represents the index of the source element.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the transform function on each element of source producing an Observable of Observable sequences
        *  and that at any point in time performs a exclusive waiting for the first to finish before subscribing to another observable.
        */
        flatMapFirst<TOther, TResult>(selector: _ValueOrSelector<T, ObservableOrPromise<TOther>>, resultSelector: special._FlatMapResultSelector<T, TOther, TResult>, thisArg?: any): Observable<TResult>;
        /**
        *  Projects each element of an observable sequence into a new sequence of observable sequences by incorporating the element's index and then
        *  transforms an observable sequence of observable sequences into an observable sequence which performs a exclusive waiting for the first to finish before subscribing to another observable.
        * @param {Function} selector A transform function to apply to each source element; the second parameter of the function represents the index of the source element.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the transform function on each element of source producing an Observable of Observable sequences
        *  and that at any point in time performs a exclusive waiting for the first to finish before subscribing to another observable.
        */
        flatMapFirst<TOther, TResult>(selector: _ValueOrSelector<T, ArrayOrIterable<TOther>>, resultSelector: special._FlatMapResultSelector<T, TOther, TResult>, thisArg?: any): Observable<TResult>;
    }

    export interface Observable<T> {
        /**
        *  One of the Following:
        *  Projects each element of an observable sequence to an observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        * @example
        *  var res = source.flatMapWithMaxConcurrent(5, function (x) { return Rx.Observable.range(0, x); });
        *  Or:
        *  Projects each element of an observable sequence to an observable sequence, invokes the result selector for the source element and each of the corresponding inner sequence's elements, and merges the results into one observable sequence.
        *
        *  var res = source.flatMapWithMaxConcurrent(5, function (x) { return Rx.Observable.range(0, x); }, function (x, y) { return x + y; });
        *  Or:
        *  Projects each element of the source observable sequence to the other observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        *  var res = source.flatMapWithMaxConcurrent(5, Rx.Observable.fromArray([1,2,3]));
        * @param selector A transform function to apply to each element or an observable sequence to project each element from the
        * source sequence onto which could be either an observable or Promise.
        * @param {Function} [resultSelector]  A transform function to apply to each element of the intermediate sequence.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the one-to-many transform function collectionSelector on each element of the input sequence and then mapping each of those sequence elements and their corresponding source element to a result element.
        */
        selectManyWithMaxConcurrent<TResult>(maxConcurrent: number, selector: _ValueOrSelector<T, ObservableOrPromise<TResult>>): Observable<TResult>;
        /**
        *  One of the Following:
        *  Projects each element of an observable sequence to an observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        * @example
        *  var res = source.flatMapWithMaxConcurrent(5, function (x) { return Rx.Observable.range(0, x); });
        *  Or:
        *  Projects each element of an observable sequence to an observable sequence, invokes the result selector for the source element and each of the corresponding inner sequence's elements, and merges the results into one observable sequence.
        *
        *  var res = source.flatMapWithMaxConcurrent(5, function (x) { return Rx.Observable.range(0, x); }, function (x, y) { return x + y; });
        *  Or:
        *  Projects each element of the source observable sequence to the other observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        *  var res = source.flatMapWithMaxConcurrent(5, Rx.Observable.fromArray([1,2,3]));
        * @param selector A transform function to apply to each element or an observable sequence to project each element from the
        * source sequence onto which could be either an observable or Promise.
        * @param {Function} [resultSelector]  A transform function to apply to each element of the intermediate sequence.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the one-to-many transform function collectionSelector on each element of the input sequence and then mapping each of those sequence elements and their corresponding source element to a result element.
        */
        selectManyWithMaxConcurrent<TResult>(maxConcurrent: number, selector: _ValueOrSelector<T, ArrayOrIterable<TResult>>): Observable<TResult>;
        /**
        *  One of the Following:
        *  Projects each element of an observable sequence to an observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        * @example
        *  var res = source.flatMapWithMaxConcurrent(5, function (x) { return Rx.Observable.range(0, x); });
        *  Or:
        *  Projects each element of an observable sequence to an observable sequence, invokes the result selector for the source element and each of the corresponding inner sequence's elements, and merges the results into one observable sequence.
        *
        *  var res = source.flatMapWithMaxConcurrent(5, function (x) { return Rx.Observable.range(0, x); }, function (x, y) { return x + y; });
        *  Or:
        *  Projects each element of the source observable sequence to the other observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        *  var res = source.flatMapWithMaxConcurrent(5, Rx.Observable.fromArray([1,2,3]));
        * @param selector A transform function to apply to each element or an observable sequence to project each element from the
        * source sequence onto which could be either an observable or Promise.
        * @param {Function} [resultSelector]  A transform function to apply to each element of the intermediate sequence.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the one-to-many transform function collectionSelector on each element of the input sequence and then mapping each of those sequence elements and their corresponding source element to a result element.
        */
        selectManyWithMaxConcurrent<TOther, TResult>(maxConcurrent: number, selector: _ValueOrSelector<T, ObservableOrPromise<TOther>>, resultSelector: special._FlatMapResultSelector<T, TOther, TResult>, thisArg?: any): Observable<TResult>;
        /**
        *  One of the Following:
        *  Projects each element of an observable sequence to an observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        * @example
        *  var res = source.flatMapWithMaxConcurrent(5, function (x) { return Rx.Observable.range(0, x); });
        *  Or:
        *  Projects each element of an observable sequence to an observable sequence, invokes the result selector for the source element and each of the corresponding inner sequence's elements, and merges the results into one observable sequence.
        *
        *  var res = source.flatMapWithMaxConcurrent(5, function (x) { return Rx.Observable.range(0, x); }, function (x, y) { return x + y; });
        *  Or:
        *  Projects each element of the source observable sequence to the other observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        *  var res = source.flatMapWithMaxConcurrent(5, Rx.Observable.fromArray([1,2,3]));
        * @param selector A transform function to apply to each element or an observable sequence to project each element from the
        * source sequence onto which could be either an observable or Promise.
        * @param {Function} [resultSelector]  A transform function to apply to each element of the intermediate sequence.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the one-to-many transform function collectionSelector on each element of the input sequence and then mapping each of those sequence elements and their corresponding source element to a result element.
        */
        selectManyWithMaxConcurrent<TOther, TResult>(maxConcurrent: number, selector: _ValueOrSelector<T, ArrayOrIterable<TOther>>, resultSelector: special._FlatMapResultSelector<T, TOther, TResult>, thisArg?: any): Observable<TResult>;

        /**
        *  One of the Following:
        *  Projects each element of an observable sequence to an observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        * @example
        *  var res = source.flatMapWithMaxConcurrent(5, function (x) { return Rx.Observable.range(0, x); });
        *  Or:
        *  Projects each element of an observable sequence to an observable sequence, invokes the result selector for the source element and each of the corresponding inner sequence's elements, and merges the results into one observable sequence.
        *
        *  var res = source.flatMapWithMaxConcurrent(5, function (x) { return Rx.Observable.range(0, x); }, function (x, y) { return x + y; });
        *  Or:
        *  Projects each element of the source observable sequence to the other observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        *  var res = source.flatMapWithMaxConcurrent(5, Rx.Observable.fromArray([1,2,3]));
        * @param selector A transform function to apply to each element or an observable sequence to project each element from the
        * source sequence onto which could be either an observable or Promise.
        * @param {Function} [resultSelector]  A transform function to apply to each element of the intermediate sequence.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the one-to-many transform function collectionSelector on each element of the input sequence and then mapping each of those sequence elements and their corresponding source element to a result element.
        */
        flatMapWithMaxConcurrent<TResult>(maxConcurrent: number, selector: _ValueOrSelector<T, ObservableOrPromise<TResult>>): Observable<TResult>;

        /**
        *  One of the Following:
        *  Projects each element of an observable sequence to an observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        * @example
        *  var res = source.flatMapWithMaxConcurrent(5, function (x) { return Rx.Observable.range(0, x); });
        *  Or:
        *  Projects each element of an observable sequence to an observable sequence, invokes the result selector for the source element and each of the corresponding inner sequence's elements, and merges the results into one observable sequence.
        *
        *  var res = source.flatMapWithMaxConcurrent(5, function (x) { return Rx.Observable.range(0, x); }, function (x, y) { return x + y; });
        *  Or:
        *  Projects each element of the source observable sequence to the other observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        *  var res = source.flatMapWithMaxConcurrent(5, Rx.Observable.fromArray([1,2,3]));
        * @param selector A transform function to apply to each element or an observable sequence to project each element from the
        * source sequence onto which could be either an observable or Promise.
        * @param {Function} [resultSelector]  A transform function to apply to each element of the intermediate sequence.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the one-to-many transform function collectionSelector on each element of the input sequence and then mapping each of those sequence elements and their corresponding source element to a result element.
        */
        flatMapWithMaxConcurrent<TResult>(maxConcurrent: number, selector: _ValueOrSelector<T, ArrayOrIterable<TResult>>): Observable<TResult>;
        /**
        *  One of the Following:
        *  Projects each element of an observable sequence to an observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        * @example
        *  var res = source.flatMapWithMaxConcurrent(5, function (x) { return Rx.Observable.range(0, x); });
        *  Or:
        *  Projects each element of an observable sequence to an observable sequence, invokes the result selector for the source element and each of the corresponding inner sequence's elements, and merges the results into one observable sequence.
        *
        *  var res = source.flatMapWithMaxConcurrent(5, function (x) { return Rx.Observable.range(0, x); }, function (x, y) { return x + y; });
        *  Or:
        *  Projects each element of the source observable sequence to the other observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        *  var res = source.flatMapWithMaxConcurrent(5, Rx.Observable.fromArray([1,2,3]));
        * @param selector A transform function to apply to each element or an observable sequence to project each element from the
        * source sequence onto which could be either an observable or Promise.
        * @param {Function} [resultSelector]  A transform function to apply to each element of the intermediate sequence.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the one-to-many transform function collectionSelector on each element of the input sequence and then mapping each of those sequence elements and their corresponding source element to a result element.
        */
        flatMapWithMaxConcurrent<TOther, TResult>(maxConcurrent: number, selector: _ValueOrSelector<T, ObservableOrPromise<TOther>>, resultSelector: special._FlatMapResultSelector<T, TOther, TResult>, thisArg?: any): Observable<TResult>;
        /**
        *  One of the Following:
        *  Projects each element of an observable sequence to an observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        * @example
        *  var res = source.flatMapWithMaxConcurrent(5, function (x) { return Rx.Observable.range(0, x); });
        *  Or:
        *  Projects each element of an observable sequence to an observable sequence, invokes the result selector for the source element and each of the corresponding inner sequence's elements, and merges the results into one observable sequence.
        *
        *  var res = source.flatMapWithMaxConcurrent(5, function (x) { return Rx.Observable.range(0, x); }, function (x, y) { return x + y; });
        *  Or:
        *  Projects each element of the source observable sequence to the other observable sequence and merges the resulting observable sequences into one observable sequence.
        *
        *  var res = source.flatMapWithMaxConcurrent(5, Rx.Observable.fromArray([1,2,3]));
        * @param selector A transform function to apply to each element or an observable sequence to project each element from the
        * source sequence onto which could be either an observable or Promise.
        * @param {Function} [resultSelector]  A transform function to apply to each element of the intermediate sequence.
        * @param {Any} [thisArg] Object to use as this when executing callback.
        * @returns {Observable} An observable sequence whose elements are the result of invoking the one-to-many transform function collectionSelector on each element of the input sequence and then mapping each of those sequence elements and their corresponding source element to a result element.
        */
        flatMapWithMaxConcurrent<TOther, TResult>(maxConcurrent: number, selector: _ValueOrSelector<T, ArrayOrIterable<TOther>>, resultSelector: special._FlatMapResultSelector<T, TOther, TResult>, thisArg?: any): Observable<TResult>;
    }

    export interface VirtualTimeScheduler<TAbsolute, TRelative> extends IScheduler {
        /**
         * Adds a relative time value to an absolute time value.
         * @param {Number} absolute Absolute virtual time value.
         * @param {Number} relative Relative virtual time value to add.
         * @return {Number} Resulting absolute virtual time sum value.
         */
        add(from: TAbsolute, by: TRelative): TAbsolute;

        /**
         * Converts an absolute time to a number
         * @param {Any} The absolute time.
         * @returns {Number} The absolute time in ms
         */
        toAbsoluteTime(duetime: TAbsolute): number;

        /**
         * Converts the TimeSpan value to a relative virtual time value.
         * @param {Number} timeSpan TimeSpan value to convert.
         * @return {Number} Corresponding relative virtual time value.
         */
        toRelativeTime(duetime: number): TRelative;

        /**
         * Starts the virtual time scheduler.
         */
        start(): IDisposable;

        /**
         * Stops the virtual time scheduler.
         */
        stop(): void;

        /**
         * Advances the scheduler's clock to the specified time, running all work till that point.
         * @param {Number} time Absolute time to advance the scheduler's clock to.
         */
        advanceTo(time: TAbsolute): void;

        /**
         * Advances the scheduler's clock by the specified relative time, running all work scheduled for that timespan.
         * @param {Number} time Relative time to advance the scheduler's clock by.
         */
        advanceBy(time: TRelative): void;

        /**
         * Advances the scheduler's clock by the specified relative time.
         * @param {Number} time Relative time to advance the scheduler's clock by.
         */
        sleep(time: TRelative): void;

        isEnabled: boolean;

        /**
         * Gets the next scheduled item to be executed.
         * @returns {ScheduledItem} The next scheduled item.
         */
        getNext(): internals.ScheduledItem<TAbsolute>;
    }

    export interface HistoricalScheduler extends VirtualTimeScheduler<number, number> {
    }

    export var HistoricalScheduler: {
        /**
         * Creates a new historical scheduler with the specified initial clock value.
         * @constructor
         * @param {Number} initialClock Initial value for the clock.
         * @param {Function} comparer Comparer to determine causality of events based on absolute time.
         */
        new (initialClock: number, comparer: _Comparer<number, number>): HistoricalScheduler;
    };

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

    export interface AnonymousObservable<T> extends Observable<T> { }

    export interface GroupedObservable<TKey, TElement> extends Observable<TElement> {
        key: TKey;
        underlyingObservable: Observable<TElement>;
    }

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

    /**
    * Used to pause and resume streams.
    */
    export interface Pauser {
        /**
         * Pauses the underlying sequence.
         */
        pause(): void;

        /**
        * Resumes the underlying sequence.
        */
        resume(): void;
    }

}

declare module "rx" { export = Rx; }
declare module "rx.all" { export = Rx; }
