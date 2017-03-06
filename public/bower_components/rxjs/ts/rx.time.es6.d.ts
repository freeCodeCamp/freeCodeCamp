declare module Rx {

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

}
declare module "rx.time" { export = Rx; }
