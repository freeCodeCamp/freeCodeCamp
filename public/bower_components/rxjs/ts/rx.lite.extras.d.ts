declare module Rx {

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
        *  Projects each element of an observable sequence into zero or more buffers which are produced based on element count information.
        * @param {Number} count Length of each buffer.
        * @param {Number} [skip] Number of elements to skip between creation of consecutive buffers. If not provided, defaults to the count.
        * @returns {Observable} An observable sequence of buffers.
        */
        bufferWithCount(count: number, skip?: number): Observable<T[]>;
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
        * Returns an observable sequence that shares a single subscription to the underlying sequence. This observable sequence
        * can be resubscribed to, even if all prior subscriptions have ended. (unlike `.publish().refCount()`)
        * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source.
        */
        singleInstance(): Observable<T>;
    }

}
declare module "rx.lite.extras" { export = Rx; }
