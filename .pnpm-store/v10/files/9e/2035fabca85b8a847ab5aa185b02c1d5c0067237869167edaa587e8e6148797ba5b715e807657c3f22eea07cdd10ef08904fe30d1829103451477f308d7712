declare module "node:perf_hooks" {
    import { InternalEventTargetEventProperties } from "node:events";
    // #region web types
    type EntryType =
        | "dns" // Node.js only
        | "function" // Node.js only
        | "gc" // Node.js only
        | "http2" // Node.js only
        | "http" // Node.js only
        | "mark" // available on the Web
        | "measure" // available on the Web
        | "net" // Node.js only
        | "node" // Node.js only
        | "resource"; // available on the Web
    interface ConnectionTimingInfo {
        domainLookupStartTime: number;
        domainLookupEndTime: number;
        connectionStartTime: number;
        connectionEndTime: number;
        secureConnectionStartTime: number;
        ALPNNegotiatedProtocol: string;
    }
    interface FetchTimingInfo {
        startTime: number;
        redirectStartTime: number;
        redirectEndTime: number;
        postRedirectStartTime: number;
        finalServiceWorkerStartTime: number;
        finalNetworkRequestStartTime: number;
        finalNetworkResponseStartTime: number;
        endTime: number;
        finalConnectionTimingInfo: ConnectionTimingInfo | null;
        encodedBodySize: number;
        decodedBodySize: number;
    }
    type PerformanceEntryList = PerformanceEntry[];
    interface PerformanceMarkOptions {
        detail?: any;
        startTime?: number;
    }
    interface PerformanceMeasureOptions {
        detail?: any;
        duration?: number;
        end?: string | number;
        start?: string | number;
    }
    interface PerformanceObserverCallback {
        (entries: PerformanceObserverEntryList, observer: PerformanceObserver): void;
    }
    interface PerformanceObserverInit {
        buffered?: boolean;
        entryTypes?: EntryType[];
        type?: EntryType;
    }
    // TODO: remove in next major
    /** @deprecated Use `TimerifyOptions` instead. */
    interface PerformanceTimerifyOptions extends TimerifyOptions {}
    interface PerformanceEventMap {
        "resourcetimingbufferfull": Event;
    }
    interface Performance extends EventTarget, InternalEventTargetEventProperties<PerformanceEventMap> {
        readonly nodeTiming: PerformanceNodeTiming;
        readonly timeOrigin: number;
        clearMarks(markName?: string): void;
        clearMeasures(measureName?: string): void;
        clearResourceTimings(resourceTimingName?: string): void;
        getEntries(): PerformanceEntryList;
        getEntriesByName(name: string, type?: EntryType): PerformanceEntryList;
        getEntriesByType(type: EntryType): PerformanceEntryList;
        mark(markName: string, markOptions?: PerformanceMarkOptions): PerformanceMark;
        markResourceTiming(
            timingInfo: FetchTimingInfo,
            requestedUrl: string,
            initiatorType: string,
            global: unknown,
            cacheMode: string,
            bodyInfo: unknown,
            responseStatus: number,
            deliveryType?: string,
        ): PerformanceResourceTiming;
        measure(measureName: string, startMark?: string, endMark?: string): PerformanceMeasure;
        measure(measureName: string, options: PerformanceMeasureOptions, endMark?: string): PerformanceMeasure;
        now(): number;
        setResourceTimingBufferSize(maxSize: number): void;
        toJSON(): any;
        addEventListener<K extends keyof PerformanceEventMap>(
            type: K,
            listener: (ev: PerformanceEventMap[K]) => void,
            options?: AddEventListenerOptions | boolean,
        ): void;
        addEventListener(
            type: string,
            listener: EventListener | EventListenerObject,
            options?: AddEventListenerOptions | boolean,
        ): void;
        removeEventListener<K extends keyof PerformanceEventMap>(
            type: K,
            listener: (ev: PerformanceEventMap[K]) => void,
            options?: EventListenerOptions | boolean,
        ): void;
        removeEventListener(
            type: string,
            listener: EventListener | EventListenerObject,
            options?: EventListenerOptions | boolean,
        ): void;
        /**
         * This is an alias of `perf_hooks.eventLoopUtilization()`.
         *
         * _This property is an extension by Node.js. It is not available in Web browsers._
         * @since v14.10.0, v12.19.0
         * @param utilization1 The result of a previous call to
         * `eventLoopUtilization()`.
         * @param utilization2 The result of a previous call to
         * `eventLoopUtilization()` prior to `utilization1`.
         */
        eventLoopUtilization(
            utilization1?: EventLoopUtilization,
            utilization2?: EventLoopUtilization,
        ): EventLoopUtilization;
        /**
         * This is an alias of `perf_hooks.timerify()`.
         *
         * _This property is an extension by Node.js. It is not available in Web browsers._
         * @since v8.5.0
         */
        timerify<T extends (...args: any[]) => any>(fn: T, options?: TimerifyOptions): T;
    }
    var Performance: {
        prototype: Performance;
        new(): Performance;
    };
    interface PerformanceEntry {
        readonly duration: number;
        readonly entryType: EntryType;
        readonly name: string;
        readonly startTime: number;
        toJSON(): any;
    }
    var PerformanceEntry: {
        prototype: PerformanceEntry;
        new(): PerformanceEntry;
    };
    interface PerformanceMark extends PerformanceEntry {
        readonly detail: any;
        readonly entryType: "mark";
    }
    var PerformanceMark: {
        prototype: PerformanceMark;
        new(markName: string, markOptions?: PerformanceMarkOptions): PerformanceMark;
    };
    interface PerformanceMeasure extends PerformanceEntry {
        readonly detail: any;
        readonly entryType: "measure";
    }
    var PerformanceMeasure: {
        prototype: PerformanceMeasure;
        new(): PerformanceMeasure;
    };
    interface PerformanceObserver {
        disconnect(): void;
        observe(options: PerformanceObserverInit): void;
        takeRecords(): PerformanceEntryList;
    }
    var PerformanceObserver: {
        prototype: PerformanceObserver;
        new(callback: PerformanceObserverCallback): PerformanceObserver;
        readonly supportedEntryTypes: readonly EntryType[];
    };
    interface PerformanceObserverEntryList {
        getEntries(): PerformanceEntryList;
        getEntriesByName(name: string, type?: EntryType): PerformanceEntryList;
        getEntriesByType(type: EntryType): PerformanceEntryList;
    }
    var PerformanceObserverEntryList: {
        prototype: PerformanceObserverEntryList;
        new(): PerformanceObserverEntryList;
    };
    interface PerformanceResourceTiming extends PerformanceEntry {
        readonly connectEnd: number;
        readonly connectStart: number;
        readonly decodedBodySize: number;
        readonly domainLookupEnd: number;
        readonly domainLookupStart: number;
        readonly encodedBodySize: number;
        readonly entryType: "resource";
        readonly fetchStart: number;
        readonly initiatorType: string;
        readonly nextHopProtocol: string;
        readonly redirectEnd: number;
        readonly redirectStart: number;
        readonly requestStart: number;
        readonly responseEnd: number;
        readonly responseStart: number;
        readonly responseStatus: number;
        readonly secureConnectionStart: number;
        readonly transferSize: number;
        readonly workerStart: number;
        toJSON(): any;
    }
    var PerformanceResourceTiming: {
        prototype: PerformanceResourceTiming;
        new(): PerformanceResourceTiming;
    };
    var performance: Performance;
    // #endregion
    /**
     * _This class is an extension by Node.js. It is not available in Web browsers._
     *
     * Provides detailed Node.js timing data.
     *
     * The constructor of this class is not exposed to users directly.
     * @since v19.0.0
     */
    class PerformanceNodeEntry extends PerformanceEntry {
        /**
         * Additional detail specific to the `entryType`.
         * @since v16.0.0
         */
        readonly detail: any;
        readonly entryType: "dns" | "function" | "gc" | "http2" | "http" | "net" | "node";
    }
    interface UVMetrics {
        /**
         * Number of event loop iterations.
         */
        readonly loopCount: number;
        /**
         * Number of events that have been processed by the event handler.
         */
        readonly events: number;
        /**
         * Number of events that were waiting to be processed when the event provider was called.
         */
        readonly eventsWaiting: number;
    }
    /**
     * _This property is an extension by Node.js. It is not available in Web browsers._
     *
     * Provides timing details for Node.js itself. The constructor of this class
     * is not exposed to users.
     * @since v8.5.0
     */
    interface PerformanceNodeTiming extends PerformanceEntry {
        /**
         * The high resolution millisecond timestamp at which the Node.js process
         * completed bootstrapping. If bootstrapping has not yet finished, the property
         * has the value of -1.
         * @since v8.5.0
         */
        readonly bootstrapComplete: number;
        readonly entryType: "node";
        /**
         * The high resolution millisecond timestamp at which the Node.js environment was
         * initialized.
         * @since v8.5.0
         */
        readonly environment: number;
        /**
         * The high resolution millisecond timestamp of the amount of time the event loop
         * has been idle within the event loop's event provider (e.g. `epoll_wait`). This
         * does not take CPU usage into consideration. If the event loop has not yet
         * started (e.g., in the first tick of the main script), the property has the
         * value of 0.
         * @since v14.10.0, v12.19.0
         */
        readonly idleTime: number;
        /**
         * The high resolution millisecond timestamp at which the Node.js event loop
         * exited. If the event loop has not yet exited, the property has the value of -1\.
         * It can only have a value of not -1 in a handler of the `'exit'` event.
         * @since v8.5.0
         */
        readonly loopExit: number;
        /**
         * The high resolution millisecond timestamp at which the Node.js event loop
         * started. If the event loop has not yet started (e.g., in the first tick of the
         * main script), the property has the value of -1.
         * @since v8.5.0
         */
        readonly loopStart: number;
        /**
         * The high resolution millisecond timestamp at which the Node.js process was initialized.
         * @since v8.5.0
         */
        readonly nodeStart: number;
        /**
         * This is a wrapper to the `uv_metrics_info` function.
         * It returns the current set of event loop metrics.
         *
         * It is recommended to use this property inside a function whose execution was
         * scheduled using `setImmediate` to avoid collecting metrics before finishing all
         * operations scheduled during the current loop iteration.
         * @since v22.8.0, v20.18.0
         */
        readonly uvMetricsInfo: UVMetrics;
        /**
         * The high resolution millisecond timestamp at which the V8 platform was
         * initialized.
         * @since v8.5.0
         */
        readonly v8Start: number;
    }
    namespace constants {
        const NODE_PERFORMANCE_GC_MAJOR: number;
        const NODE_PERFORMANCE_GC_MINOR: number;
        const NODE_PERFORMANCE_GC_INCREMENTAL: number;
        const NODE_PERFORMANCE_GC_WEAKCB: number;
        const NODE_PERFORMANCE_GC_FLAGS_NO: number;
        const NODE_PERFORMANCE_GC_FLAGS_CONSTRUCT_RETAINED: number;
        const NODE_PERFORMANCE_GC_FLAGS_FORCED: number;
        const NODE_PERFORMANCE_GC_FLAGS_SYNCHRONOUS_PHANTOM_PROCESSING: number;
        const NODE_PERFORMANCE_GC_FLAGS_ALL_AVAILABLE_GARBAGE: number;
        const NODE_PERFORMANCE_GC_FLAGS_ALL_EXTERNAL_MEMORY: number;
        const NODE_PERFORMANCE_GC_FLAGS_SCHEDULE_IDLE: number;
    }
    interface EventLoopMonitorOptions {
        /**
         * The sampling rate in milliseconds.
         * Must be greater than zero.
         * @default 10
         */
        resolution?: number | undefined;
    }
    interface Histogram {
        /**
         * The number of samples recorded by the histogram.
         * @since v17.4.0, v16.14.0
         */
        readonly count: number;
        /**
         * The number of samples recorded by the histogram.
         * v17.4.0, v16.14.0
         */
        readonly countBigInt: bigint;
        /**
         * The number of times the event loop delay exceeded the maximum 1 hour event
         * loop delay threshold.
         * @since v11.10.0
         */
        readonly exceeds: number;
        /**
         * The number of times the event loop delay exceeded the maximum 1 hour event loop delay threshold.
         * @since v17.4.0, v16.14.0
         */
        readonly exceedsBigInt: bigint;
        /**
         * The maximum recorded event loop delay.
         * @since v11.10.0
         */
        readonly max: number;
        /**
         * The maximum recorded event loop delay.
         * v17.4.0, v16.14.0
         */
        readonly maxBigInt: number;
        /**
         * The mean of the recorded event loop delays.
         * @since v11.10.0
         */
        readonly mean: number;
        /**
         * The minimum recorded event loop delay.
         * @since v11.10.0
         */
        readonly min: number;
        /**
         * The minimum recorded event loop delay.
         * v17.4.0, v16.14.0
         */
        readonly minBigInt: bigint;
        /**
         * Returns the value at the given percentile.
         * @since v11.10.0
         * @param percentile A percentile value in the range (0, 100].
         */
        percentile(percentile: number): number;
        /**
         * Returns the value at the given percentile.
         * @since v17.4.0, v16.14.0
         * @param percentile A percentile value in the range (0, 100].
         */
        percentileBigInt(percentile: number): bigint;
        /**
         * Returns a `Map` object detailing the accumulated percentile distribution.
         * @since v11.10.0
         */
        readonly percentiles: Map<number, number>;
        /**
         * Returns a `Map` object detailing the accumulated percentile distribution.
         * @since v17.4.0, v16.14.0
         */
        readonly percentilesBigInt: Map<bigint, bigint>;
        /**
         * Resets the collected histogram data.
         * @since v11.10.0
         */
        reset(): void;
        /**
         * The standard deviation of the recorded event loop delays.
         * @since v11.10.0
         */
        readonly stddev: number;
    }
    interface IntervalHistogram extends Histogram {
        /**
         * Enables the update interval timer. Returns `true` if the timer was
         * started, `false` if it was already started.
         * @since v11.10.0
         */
        enable(): boolean;
        /**
         * Disables the update interval timer. Returns `true` if the timer was
         * stopped, `false` if it was already stopped.
         * @since v11.10.0
         */
        disable(): boolean;
        /**
         * Disables the update interval timer when the histogram is disposed.
         *
         * ```js
         * const { monitorEventLoopDelay } = require('node:perf_hooks');
         * {
         *   using hist = monitorEventLoopDelay({ resolution: 20 });
         *   hist.enable();
         *   // The histogram will be disabled when the block is exited.
         * }
         * ```
         * @since v24.2.0
         */
        [Symbol.dispose](): void;
    }
    interface RecordableHistogram extends Histogram {
        /**
         * @since v15.9.0, v14.18.0
         * @param val The amount to record in the histogram.
         */
        record(val: number | bigint): void;
        /**
         * Calculates the amount of time (in nanoseconds) that has passed since the
         * previous call to `recordDelta()` and records that amount in the histogram.
         * @since v15.9.0, v14.18.0
         */
        recordDelta(): void;
        /**
         * Adds the values from `other` to this histogram.
         * @since v17.4.0, v16.14.0
         */
        add(other: RecordableHistogram): void;
    }
    interface EventLoopUtilization {
        idle: number;
        active: number;
        utilization: number;
    }
    /**
     * The `eventLoopUtilization()` function returns an object that contains the
     * cumulative duration of time the event loop has been both idle and active as a
     * high resolution milliseconds timer. The `utilization` value is the calculated
     * Event Loop Utilization (ELU).
     *
     * If bootstrapping has not yet finished on the main thread the properties have
     * the value of `0`. The ELU is immediately available on [Worker threads](https://nodejs.org/docs/latest-v25.x/api/worker_threads.html#worker-threads) since
     * bootstrap happens within the event loop.
     *
     * Both `utilization1` and `utilization2` are optional parameters.
     *
     * If `utilization1` is passed, then the delta between the current call's `active`
     * and `idle` times, as well as the corresponding `utilization` value are
     * calculated and returned (similar to `process.hrtime()`).
     *
     * If `utilization1` and `utilization2` are both passed, then the delta is
     * calculated between the two arguments. This is a convenience option because,
     * unlike `process.hrtime()`, calculating the ELU is more complex than a
     * single subtraction.
     *
     * ELU is similar to CPU utilization, except that it only measures event loop
     * statistics and not CPU usage. It represents the percentage of time the event
     * loop has spent outside the event loop's event provider (e.g. `epoll_wait`).
     * No other CPU idle time is taken into consideration. The following is an example
     * of how a mostly idle process will have a high ELU.
     *
     * ```js
     * import { eventLoopUtilization } from 'node:perf_hooks';
     * import { spawnSync } from 'node:child_process';
     *
     * setImmediate(() => {
     *   const elu = eventLoopUtilization();
     *   spawnSync('sleep', ['5']);
     *   console.log(eventLoopUtilization(elu).utilization);
     * });
     * ```
     *
     * Although the CPU is mostly idle while running this script, the value of
     * `utilization` is `1`. This is because the call to
     * `child_process.spawnSync()` blocks the event loop from proceeding.
     *
     * Passing in a user-defined object instead of the result of a previous call to
     * `eventLoopUtilization()` will lead to undefined behavior. The return values
     * are not guaranteed to reflect any correct state of the event loop.
     * @since v25.2.0
     * @param utilization1 The result of a previous call to
     * `eventLoopUtilization()`.
     * @param utilization2 The result of a previous call to
     * `eventLoopUtilization()` prior to `utilization1`.
     */
    function eventLoopUtilization(
        utilization1?: EventLoopUtilization,
        utilization2?: EventLoopUtilization,
    ): EventLoopUtilization;
    /**
     * _This property is an extension by Node.js. It is not available in Web browsers._
     *
     * Creates an `IntervalHistogram` object that samples and reports the event loop
     * delay over time. The delays will be reported in nanoseconds.
     *
     * Using a timer to detect approximate event loop delay works because the
     * execution of timers is tied specifically to the lifecycle of the libuv
     * event loop. That is, a delay in the loop will cause a delay in the execution
     * of the timer, and those delays are specifically what this API is intended to
     * detect.
     *
     * ```js
     * import { monitorEventLoopDelay } from 'node:perf_hooks';
     * const h = monitorEventLoopDelay({ resolution: 20 });
     * h.enable();
     * // Do something.
     * h.disable();
     * console.log(h.min);
     * console.log(h.max);
     * console.log(h.mean);
     * console.log(h.stddev);
     * console.log(h.percentiles);
     * console.log(h.percentile(50));
     * console.log(h.percentile(99));
     * ```
     * @since v11.10.0
     */
    function monitorEventLoopDelay(options?: EventLoopMonitorOptions): IntervalHistogram;
    interface TimerifyOptions {
        /**
         * A histogram object created using
         * `perf_hooks.createHistogram()` that will record runtime durations in
         * nanoseconds.
         */
        histogram?: RecordableHistogram | undefined;
    }
    /**
     * _This property is an extension by Node.js. It is not available in Web browsers._
     *
     * Wraps a function within a new function that measures the running time of the
     * wrapped function. A `PerformanceObserver` must be subscribed to the `'function'`
     * event type in order for the timing details to be accessed.
     *
     * ```js
     * import { timerify, performance, PerformanceObserver } from 'node:perf_hooks';
     *
     * function someFunction() {
     *   console.log('hello world');
     * }
     *
     * const wrapped = timerify(someFunction);
     *
     * const obs = new PerformanceObserver((list) => {
     *   console.log(list.getEntries()[0].duration);
     *
     *   performance.clearMarks();
     *   performance.clearMeasures();
     *   obs.disconnect();
     * });
     * obs.observe({ entryTypes: ['function'] });
     *
     * // A performance timeline entry will be created
     * wrapped();
     * ```
     *
     * If the wrapped function returns a promise, a finally handler will be attached
     * to the promise and the duration will be reported once the finally handler is
     * invoked.
     * @since v25.2.0
     */
    function timerify<T extends (...args: any[]) => any>(fn: T, options?: TimerifyOptions): T;
    interface CreateHistogramOptions {
        /**
         * The minimum recordable value. Must be an integer value greater than 0.
         * @default 1
         */
        lowest?: number | bigint | undefined;
        /**
         * The maximum recordable value. Must be an integer value greater than min.
         * @default Number.MAX_SAFE_INTEGER
         */
        highest?: number | bigint | undefined;
        /**
         * The number of accuracy digits. Must be a number between 1 and 5.
         * @default 3
         */
        figures?: number | undefined;
    }
    /**
     * Returns a `RecordableHistogram`.
     * @since v15.9.0, v14.18.0
     */
    function createHistogram(options?: CreateHistogramOptions): RecordableHistogram;
    // TODO: remove these in a future major
    /** @deprecated Use the canonical `PerformanceMarkOptions` instead. */
    interface MarkOptions extends PerformanceMarkOptions {}
    /** @deprecated Use the canonical `PerformanceMeasureOptions` instead. */
    interface MeasureOptions extends PerformanceMeasureOptions {}
}
declare module "perf_hooks" {
    export * from "node:perf_hooks";
}
