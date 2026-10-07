/**
 * This module provides an implementation of a subset of the W3C [Web Performance APIs](https://w3c.github.io/perf-timing-primer/) as well as additional APIs for
 * Node.js-specific performance measurements.
 *
 * Node.js supports the following [Web Performance APIs](https://w3c.github.io/perf-timing-primer/):
 *
 * * [High Resolution Time](https://www.w3.org/TR/hr-time-2)
 * * [Performance Timeline](https://w3c.github.io/performance-timeline/)
 * * [User Timing](https://www.w3.org/TR/user-timing/)
 * * [Resource Timing](https://www.w3.org/TR/resource-timing-2/)
 *
 * ```js
 * import { PerformanceObserver, performance } from 'node:perf_hooks';
 *
 * const obs = new PerformanceObserver((items) => {
 *   console.log(items.getEntries()[0].duration);
 *   performance.clearMarks();
 * });
 * obs.observe({ type: 'measure' });
 * performance.measure('Start to Now');
 *
 * performance.mark('A');
 * doSomeLongRunningProcess(() => {
 *   performance.measure('A to Now', 'A');
 *
 *   performance.mark('B');
 *   performance.measure('A to B', 'A', 'B');
 * });
 * ```
 * @see [source](https://github.com/nodejs/node/blob/v24.x/lib/perf_hooks.js)
 */
declare module "perf_hooks" {
    import { AsyncResource } from "node:async_hooks";
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
    interface NodeGCPerformanceDetail {
        /**
         * When `performanceEntry.entryType` is equal to 'gc', the `performance.kind` property identifies
         * the type of garbage collection operation that occurred.
         * See perf_hooks.constants for valid values.
         */
        readonly kind: number;
        /**
         * When `performanceEntry.entryType` is equal to 'gc', the `performance.flags`
         * property contains additional information about garbage collection operation.
         * See perf_hooks.constants for valid values.
         */
        readonly flags: number;
    }
    /**
     * The constructor of this class is not exposed to users directly.
     * @since v8.5.0
     */
    class PerformanceEntry {
        protected constructor();
        /**
         * The total number of milliseconds elapsed for this entry. This value will not
         * be meaningful for all Performance Entry types.
         * @since v8.5.0
         */
        readonly duration: number;
        /**
         * The name of the performance entry.
         * @since v8.5.0
         */
        readonly name: string;
        /**
         * The high resolution millisecond timestamp marking the starting time of the
         * Performance Entry.
         * @since v8.5.0
         */
        readonly startTime: number;
        /**
         * The type of the performance entry. It may be one of:
         *
         * * `'node'` (Node.js only)
         * * `'mark'` (available on the Web)
         * * `'measure'` (available on the Web)
         * * `'gc'` (Node.js only)
         * * `'function'` (Node.js only)
         * * `'http2'` (Node.js only)
         * * `'http'` (Node.js only)
         * @since v8.5.0
         */
        readonly entryType: EntryType;
        toJSON(): any;
    }
    /**
     * Exposes marks created via the `Performance.mark()` method.
     * @since v18.2.0, v16.17.0
     */
    class PerformanceMark extends PerformanceEntry {
        readonly detail: any;
        readonly duration: 0;
        readonly entryType: "mark";
    }
    /**
     * Exposes measures created via the `Performance.measure()` method.
     *
     * The constructor of this class is not exposed to users directly.
     * @since v18.2.0, v16.17.0
     */
    class PerformanceMeasure extends PerformanceEntry {
        readonly detail: any;
        readonly entryType: "measure";
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
    // TODO: PerformanceNodeEntry is missing
    /**
     * _This property is an extension by Node.js. It is not available in Web browsers._
     *
     * Provides timing details for Node.js itself. The constructor of this class
     * is not exposed to users.
     * @since v8.5.0
     */
    class PerformanceNodeTiming extends PerformanceEntry {
        readonly entryType: "node";
        /**
         * The high resolution millisecond timestamp at which the Node.js process
         * completed bootstrapping. If bootstrapping has not yet finished, the property
         * has the value of -1.
         * @since v8.5.0
         */
        readonly bootstrapComplete: number;
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
    interface EventLoopUtilization {
        idle: number;
        active: number;
        utilization: number;
    }
    interface MarkOptions {
        /**
         * Additional optional detail to include with the mark.
         */
        detail?: unknown | undefined;
        /**
         * An optional timestamp to be used as the mark time.
         * @default `performance.now()`
         */
        startTime?: number | undefined;
    }
    interface MeasureOptions {
        /**
         * Additional optional detail to include with the mark.
         */
        detail?: unknown;
        /**
         * Duration between start and end times.
         */
        duration?: number | undefined;
        /**
         * Timestamp to be used as the end time, or a string identifying a previously recorded mark.
         */
        end?: number | string | undefined;
        /**
         * Timestamp to be used as the start time, or a string identifying a previously recorded mark.
         */
        start?: number | string | undefined;
    }
    interface TimerifyOptions {
        /**
         * A histogram object created using `perf_hooks.createHistogram()` that will record runtime
         * durations in nanoseconds.
         */
        histogram?: RecordableHistogram | undefined;
    }
    interface Performance {
        /**
         * If `name` is not provided, removes all `PerformanceMark` objects from the Performance Timeline.
         * If `name` is provided, removes only the named mark.
         * @since v8.5.0
         */
        clearMarks(name?: string): void;
        /**
         * If `name` is not provided, removes all `PerformanceMeasure` objects from the Performance Timeline.
         * If `name` is provided, removes only the named measure.
         * @since v16.7.0
         */
        clearMeasures(name?: string): void;
        /**
         * If `name` is not provided, removes all `PerformanceResourceTiming` objects from the Resource Timeline.
         * If `name` is provided, removes only the named resource.
         * @since v18.2.0, v16.17.0
         */
        clearResourceTimings(name?: string): void;
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
         * Returns a list of `PerformanceEntry` objects in chronological order with respect to `performanceEntry.startTime`.
         * If you are only interested in performance entries of certain types or that have certain names, see
         * `performance.getEntriesByType()` and `performance.getEntriesByName()`.
         * @since v16.7.0
         */
        getEntries(): PerformanceEntry[];
        /**
         * Returns a list of `PerformanceEntry` objects in chronological order with respect to `performanceEntry.startTime`
         * whose `performanceEntry.name` is equal to `name`, and optionally, whose `performanceEntry.entryType` is equal to `type`.
         * @param name
         * @param type
         * @since v16.7.0
         */
        getEntriesByName(name: string, type?: EntryType): PerformanceEntry[];
        /**
         * Returns a list of `PerformanceEntry` objects in chronological order with respect to `performanceEntry.startTime`
         * whose `performanceEntry.entryType` is equal to `type`.
         * @param type
         * @since v16.7.0
         */
        getEntriesByType(type: EntryType): PerformanceEntry[];
        /**
         * Creates a new `PerformanceMark` entry in the Performance Timeline.
         * A `PerformanceMark` is a subclass of `PerformanceEntry` whose `performanceEntry.entryType` is always `'mark'`,
         * and whose `performanceEntry.duration` is always `0`.
         * Performance marks are used to mark specific significant moments in the Performance Timeline.
         *
         * The created `PerformanceMark` entry is put in the global Performance Timeline and can be queried with
         * `performance.getEntries`, `performance.getEntriesByName`, and `performance.getEntriesByType`. When the observation is
         * performed, the entries should be cleared from the global Performance Timeline manually with `performance.clearMarks`.
         * @param name
         */
        mark(name: string, options?: MarkOptions): PerformanceMark;
        /**
         * Creates a new `PerformanceResourceTiming` entry in the Resource Timeline.
         * A `PerformanceResourceTiming` is a subclass of `PerformanceEntry` whose `performanceEntry.entryType` is always `'resource'`.
         * Performance resources are used to mark moments in the Resource Timeline.
         * @param timingInfo [Fetch Timing Info](https://fetch.spec.whatwg.org/#fetch-timing-info)
         * @param requestedUrl The resource url
         * @param initiatorType The initiator name, e.g: 'fetch'
         * @param global
         * @param cacheMode The cache mode must be an empty string ('') or 'local'
         * @param bodyInfo [Fetch Response Body Info](https://fetch.spec.whatwg.org/#response-body-info)
         * @param responseStatus The response's status code
         * @param deliveryType The delivery type. Default: ''.
         * @since v18.2.0, v16.17.0
         */
        markResourceTiming(
            timingInfo: object,
            requestedUrl: string,
            initiatorType: string,
            global: object,
            cacheMode: "" | "local",
            bodyInfo: object,
            responseStatus: number,
            deliveryType?: string,
        ): PerformanceResourceTiming;
        /**
         * Creates a new PerformanceMeasure entry in the Performance Timeline.
         * A PerformanceMeasure is a subclass of PerformanceEntry whose performanceEntry.entryType is always 'measure',
         * and whose performanceEntry.duration measures the number of milliseconds elapsed since startMark and endMark.
         *
         * The startMark argument may identify any existing PerformanceMark in the the Performance Timeline, or may identify
         * any of the timestamp properties provided by the PerformanceNodeTiming class. If the named startMark does not exist,
         * then startMark is set to timeOrigin by default.
         *
         * The endMark argument must identify any existing PerformanceMark in the the Performance Timeline or any of the timestamp
         * properties provided by the PerformanceNodeTiming class. If the named endMark does not exist, an error will be thrown.
         * @param name
         * @param startMark
         * @param endMark
         * @return The PerformanceMeasure entry that was created
         */
        measure(name: string, startMark?: string, endMark?: string): PerformanceMeasure;
        measure(name: string, options: MeasureOptions): PerformanceMeasure;
        /**
         * _This property is an extension by Node.js. It is not available in Web browsers._
         *
         * An instance of the `PerformanceNodeTiming` class that provides performance metrics for specific Node.js operational milestones.
         * @since v8.5.0
         */
        readonly nodeTiming: PerformanceNodeTiming;
        /**
         * Returns the current high resolution millisecond timestamp, where 0 represents the start of the current `node` process.
         * @since v8.5.0
         */
        now(): number;
        /**
         * Sets the global performance resource timing buffer size to the specified number of "resource" type performance entry objects.
         *
         * By default the max buffer size is set to 250.
         * @since v18.8.0
         */
        setResourceTimingBufferSize(maxSize: number): void;
        /**
         * The [`timeOrigin`](https://w3c.github.io/hr-time/#dom-performance-timeorigin) specifies the high resolution millisecond timestamp
         * at which the current `node` process began, measured in Unix time.
         * @since v8.5.0
         */
        readonly timeOrigin: number;
        /**
         * This is an alias of `perf_hooks.timerify()`.
         *
         * _This property is an extension by Node.js. It is not available in Web browsers._
         * @since v8.5.0
         */
        timerify<T extends (...args: any[]) => any>(fn: T, options?: TimerifyOptions): T;
        /**
         * An object which is JSON representation of the performance object. It is similar to
         * [`window.performance.toJSON`](https://developer.mozilla.org/en-US/docs/Web/API/Performance/toJSON) in browsers.
         * @since v16.1.0
         */
        toJSON(): any;
    }
    class PerformanceObserverEntryList {
        /**
         * Returns a list of `PerformanceEntry` objects in chronological order
         * with respect to `performanceEntry.startTime`.
         *
         * ```js
         * import {
         *   performance,
         *   PerformanceObserver,
         * } from 'node:perf_hooks';
         *
         * const obs = new PerformanceObserver((perfObserverList, observer) => {
         *   console.log(perfObserverList.getEntries());
         *
         *    * [
         *    *   PerformanceEntry {
         *    *     name: 'test',
         *    *     entryType: 'mark',
         *    *     startTime: 81.465639,
         *    *     duration: 0,
         *    *     detail: null
         *    *   },
         *    *   PerformanceEntry {
         *    *     name: 'meow',
         *    *     entryType: 'mark',
         *    *     startTime: 81.860064,
         *    *     duration: 0,
         *    *     detail: null
         *    *   }
         *    * ]
         *
         *   performance.clearMarks();
         *   performance.clearMeasures();
         *   observer.disconnect();
         * });
         * obs.observe({ type: 'mark' });
         *
         * performance.mark('test');
         * performance.mark('meow');
         * ```
         * @since v8.5.0
         */
        getEntries(): PerformanceEntry[];
        /**
         * Returns a list of `PerformanceEntry` objects in chronological order
         * with respect to `performanceEntry.startTime` whose `performanceEntry.name` is
         * equal to `name`, and optionally, whose `performanceEntry.entryType` is equal to`type`.
         *
         * ```js
         * import {
         *   performance,
         *   PerformanceObserver,
         * } from 'node:perf_hooks';
         *
         * const obs = new PerformanceObserver((perfObserverList, observer) => {
         *   console.log(perfObserverList.getEntriesByName('meow'));
         *
         *    * [
         *    *   PerformanceEntry {
         *    *     name: 'meow',
         *    *     entryType: 'mark',
         *    *     startTime: 98.545991,
         *    *     duration: 0,
         *    *     detail: null
         *    *   }
         *    * ]
         *
         *   console.log(perfObserverList.getEntriesByName('nope')); // []
         *
         *   console.log(perfObserverList.getEntriesByName('test', 'mark'));
         *
         *    * [
         *    *   PerformanceEntry {
         *    *     name: 'test',
         *    *     entryType: 'mark',
         *    *     startTime: 63.518931,
         *    *     duration: 0,
         *    *     detail: null
         *    *   }
         *    * ]
         *
         *   console.log(perfObserverList.getEntriesByName('test', 'measure')); // []
         *
         *   performance.clearMarks();
         *   performance.clearMeasures();
         *   observer.disconnect();
         * });
         * obs.observe({ entryTypes: ['mark', 'measure'] });
         *
         * performance.mark('test');
         * performance.mark('meow');
         * ```
         * @since v8.5.0
         */
        getEntriesByName(name: string, type?: EntryType): PerformanceEntry[];
        /**
         * Returns a list of `PerformanceEntry` objects in chronological order
         * with respect to `performanceEntry.startTime` whose `performanceEntry.entryType` is equal to `type`.
         *
         * ```js
         * import {
         *   performance,
         *   PerformanceObserver,
         * } from 'node:perf_hooks';
         *
         * const obs = new PerformanceObserver((perfObserverList, observer) => {
         *   console.log(perfObserverList.getEntriesByType('mark'));
         *
         *    * [
         *    *   PerformanceEntry {
         *    *     name: 'test',
         *    *     entryType: 'mark',
         *    *     startTime: 55.897834,
         *    *     duration: 0,
         *    *     detail: null
         *    *   },
         *    *   PerformanceEntry {
         *    *     name: 'meow',
         *    *     entryType: 'mark',
         *    *     startTime: 56.350146,
         *    *     duration: 0,
         *    *     detail: null
         *    *   }
         *    * ]
         *
         *   performance.clearMarks();
         *   performance.clearMeasures();
         *   observer.disconnect();
         * });
         * obs.observe({ type: 'mark' });
         *
         * performance.mark('test');
         * performance.mark('meow');
         * ```
         * @since v8.5.0
         */
        getEntriesByType(type: EntryType): PerformanceEntry[];
    }
    type PerformanceObserverCallback = (list: PerformanceObserverEntryList, observer: PerformanceObserver) => void;
    /**
     * @since v8.5.0
     */
    class PerformanceObserver extends AsyncResource {
        constructor(callback: PerformanceObserverCallback);
        /**
         * Disconnects the `PerformanceObserver` instance from all notifications.
         * @since v8.5.0
         */
        disconnect(): void;
        /**
         * Subscribes the `PerformanceObserver` instance to notifications of new `PerformanceEntry` instances identified either by `options.entryTypes` or `options.type`:
         *
         * ```js
         * import {
         *   performance,
         *   PerformanceObserver,
         * } from 'node:perf_hooks';
         *
         * const obs = new PerformanceObserver((list, observer) => {
         *   // Called once asynchronously. `list` contains three items.
         * });
         * obs.observe({ type: 'mark' });
         *
         * for (let n = 0; n < 3; n++)
         *   performance.mark(`test${n}`);
         * ```
         * @since v8.5.0
         */
        observe(
            options:
                | {
                    entryTypes: readonly EntryType[];
                    buffered?: boolean | undefined;
                }
                | {
                    type: EntryType;
                    buffered?: boolean | undefined;
                },
        ): void;
        /**
         * @since v16.0.0
         * @returns Current list of entries stored in the performance observer, emptying it out.
         */
        takeRecords(): PerformanceEntry[];
    }
    /**
     * Provides detailed network timing data regarding the loading of an application's resources.
     *
     * The constructor of this class is not exposed to users directly.
     * @since v18.2.0, v16.17.0
     */
    class PerformanceResourceTiming extends PerformanceEntry {
        readonly entryType: "resource";
        protected constructor();
        /**
         * The high resolution millisecond timestamp at immediately before dispatching the `fetch`
         * request. If the resource is not intercepted by a worker the property will always return 0.
         * @since v18.2.0, v16.17.0
         */
        readonly workerStart: number;
        /**
         * The high resolution millisecond timestamp that represents the start time of the fetch which
         * initiates the redirect.
         * @since v18.2.0, v16.17.0
         */
        readonly redirectStart: number;
        /**
         * The high resolution millisecond timestamp that will be created immediately after receiving
         * the last byte of the response of the last redirect.
         * @since v18.2.0, v16.17.0
         */
        readonly redirectEnd: number;
        /**
         * The high resolution millisecond timestamp immediately before the Node.js starts to fetch the resource.
         * @since v18.2.0, v16.17.0
         */
        readonly fetchStart: number;
        /**
         * The high resolution millisecond timestamp immediately before the Node.js starts the domain name lookup
         * for the resource.
         * @since v18.2.0, v16.17.0
         */
        readonly domainLookupStart: number;
        /**
         * The high resolution millisecond timestamp representing the time immediately after the Node.js finished
         * the domain name lookup for the resource.
         * @since v18.2.0, v16.17.0
         */
        readonly domainLookupEnd: number;
        /**
         * The high resolution millisecond timestamp representing the time immediately before Node.js starts to
         * establish the connection to the server to retrieve the resource.
         * @since v18.2.0, v16.17.0
         */
        readonly connectStart: number;
        /**
         * The high resolution millisecond timestamp representing the time immediately after Node.js finishes
         * establishing the connection to the server to retrieve the resource.
         * @since v18.2.0, v16.17.0
         */
        readonly connectEnd: number;
        /**
         * The high resolution millisecond timestamp representing the time immediately before Node.js starts the
         * handshake process to secure the current connection.
         * @since v18.2.0, v16.17.0
         */
        readonly secureConnectionStart: number;
        /**
         * The high resolution millisecond timestamp representing the time immediately before Node.js receives the
         * first byte of the response from the server.
         * @since v18.2.0, v16.17.0
         */
        readonly requestStart: number;
        /**
         * The high resolution millisecond timestamp representing the time immediately after Node.js receives the
         * last byte of the resource or immediately before the transport connection is closed, whichever comes first.
         * @since v18.2.0, v16.17.0
         */
        readonly responseEnd: number;
        /**
         * A number representing the size (in octets) of the fetched resource. The size includes the response header
         * fields plus the response payload body.
         * @since v18.2.0, v16.17.0
         */
        readonly transferSize: number;
        /**
         * A number representing the size (in octets) received from the fetch (HTTP or cache), of the payload body, before
         * removing any applied content-codings.
         * @since v18.2.0, v16.17.0
         */
        readonly encodedBodySize: number;
        /**
         * A number representing the size (in octets) received from the fetch (HTTP or cache), of the message body, after
         * removing any applied content-codings.
         * @since v18.2.0, v16.17.0
         */
        readonly decodedBodySize: number;
        /**
         * Returns a `object` that is the JSON representation of the `PerformanceResourceTiming` object
         * @since v18.2.0, v16.17.0
         */
        toJSON(): any;
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
    const performance: Performance;
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
    interface CreateHistogramOptions {
        /**
         * The lowest discernible value. Must be an integer value greater than 0.
         * @default 1
         */
        lowest?: number | bigint | undefined;
        /**
         * The highest recordable value. Must be an integer value that is equal to
         * or greater than two times `lowest`.
         * @default Number.MAX_SAFE_INTEGER
         */
        highest?: number | bigint | undefined;
        /**
         * The number of accuracy digits. Must be a number between `1` and `5`.
         * @default 3
         */
        figures?: number | undefined;
    }
    /**
     * Returns a {@link RecordableHistogram `RecordableHistogram`}.
     * @since v15.9.0, v14.18.0
     */
    function createHistogram(options?: CreateHistogramOptions): RecordableHistogram;
    /**
     * The `eventLoopUtilization()` function returns an object that contains the
     * cumulative duration of time the event loop has been both idle and active as a
     * high resolution milliseconds timer. The `utilization` value is the calculated
     * Event Loop Utilization (ELU).
     *
     * If bootstrapping has not yet finished on the main thread the properties have
     * the value of `0`. The ELU is immediately available on
     * [Worker threads](https://nodejs.org/docs/latest-v24.x/api/worker_threads.html#worker-threads)
     * since bootstrap happens within the event loop.
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
     * Although the CPU is mostly idle while running this script, the value of `utilization`
     * is `1`. This is because the call to `child_process.spawnSync()` blocks the event loop
     * from proceeding.
     *
     * Passing in a user-defined object instead of the result of a previous call to
     * `eventLoopUtilization()` will lead to undefined behavior. The return values are not
     * guaranteed to reflect any correct state of the event loop.
     * @since v24.12.0
     * @param utilization1 The result of a previous call to `eventLoopUtilization()`.
     * @param utilization2 The result of a previous call to `eventLoopUtilization()` prior to `utilization1`.
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
     * to the promise and the duration will be reported once the finally handler is invoked.
     * @since v24.12.0
     */
    function timerify<T extends (...params: any[]) => any>(fn: T, options?: TimerifyOptions): T;
    import {
        performance as _performance,
        PerformanceEntry as _PerformanceEntry,
        PerformanceMark as _PerformanceMark,
        PerformanceMeasure as _PerformanceMeasure,
        PerformanceObserver as _PerformanceObserver,
        PerformanceObserverEntryList as _PerformanceObserverEntryList,
        PerformanceResourceTiming as _PerformanceResourceTiming,
    } from "perf_hooks";
    global {
        /**
         * `PerformanceEntry` is a global reference for `import { PerformanceEntry } from 'node:perf_hooks'`
         * @see https://nodejs.org/docs/latest-v24.x/api/globals.html#performanceentry
         * @since v19.0.0
         */
        var PerformanceEntry: typeof globalThis extends {
            onmessage: any;
            PerformanceEntry: infer T;
        } ? T
            : typeof _PerformanceEntry;
        /**
         * `PerformanceMark` is a global reference for `import { PerformanceMark } from 'node:perf_hooks'`
         * @see https://nodejs.org/docs/latest-v24.x/api/globals.html#performancemark
         * @since v19.0.0
         */
        var PerformanceMark: typeof globalThis extends {
            onmessage: any;
            PerformanceMark: infer T;
        } ? T
            : typeof _PerformanceMark;
        /**
         * `PerformanceMeasure` is a global reference for `import { PerformanceMeasure } from 'node:perf_hooks'`
         * @see https://nodejs.org/docs/latest-v24.x/api/globals.html#performancemeasure
         * @since v19.0.0
         */
        var PerformanceMeasure: typeof globalThis extends {
            onmessage: any;
            PerformanceMeasure: infer T;
        } ? T
            : typeof _PerformanceMeasure;
        /**
         * `PerformanceObserver` is a global reference for `import { PerformanceObserver } from 'node:perf_hooks'`
         * @see https://nodejs.org/docs/latest-v24.x/api/globals.html#performanceobserver
         * @since v19.0.0
         */
        var PerformanceObserver: typeof globalThis extends {
            onmessage: any;
            PerformanceObserver: infer T;
        } ? T
            : typeof _PerformanceObserver;
        /**
         * `PerformanceObserverEntryList` is a global reference for `import { PerformanceObserverEntryList } from 'node:perf_hooks'`
         * @see https://nodejs.org/docs/latest-v24.x/api/globals.html#performanceobserverentrylist
         * @since v19.0.0
         */
        var PerformanceObserverEntryList: typeof globalThis extends {
            onmessage: any;
            PerformanceObserverEntryList: infer T;
        } ? T
            : typeof _PerformanceObserverEntryList;
        /**
         * `PerformanceResourceTiming` is a global reference for `import { PerformanceResourceTiming } from 'node:perf_hooks'`
         * @see https://nodejs.org/docs/latest-v24.x/api/globals.html#performanceresourcetiming
         * @since v19.0.0
         */
        var PerformanceResourceTiming: typeof globalThis extends {
            onmessage: any;
            PerformanceResourceTiming: infer T;
        } ? T
            : typeof _PerformanceResourceTiming;
        /**
         * `performance` is a global reference for `import { performance } from 'node:perf_hooks'`
         * @see https://nodejs.org/docs/latest-v24.x/api/globals.html#performance
         * @since v16.0.0
         */
        var performance: typeof globalThis extends {
            onmessage: any;
            performance: infer T;
        } ? T
            : typeof _performance;
    }
}
declare module "node:perf_hooks" {
    export * from "perf_hooks";
}
