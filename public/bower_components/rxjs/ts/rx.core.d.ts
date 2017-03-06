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

    export interface CheckedObserver<T> extends Observer<T> {
        checkAccess(): void;
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

    export interface AnonymousObservable<T> extends Observable<T> { }

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

}

declare module "rx" { export = Rx; }

