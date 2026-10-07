"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zip = exports.withNow = exports.withConstantInput = exports.value = exports.update = exports.unsafeSnapshot = exports.trackSuccessWith = exports.trackSuccess = exports.trackErrorWith = exports.trackError = exports.trackDurationWith = exports.trackDuration = exports.trackDefectWith = exports.trackDefect = exports.trackAll = exports.timerWithBoundaries = exports.timer = exports.taggedWithLabelsInput = exports.taggedWithLabels = exports.tagged = exports.sync = exports.summaryTimestamp = exports.summary = exports.succeed = exports.snapshot = exports.set = exports.modify = exports.mapType = exports.mapInput = exports.map = exports.make = exports.incrementBy = exports.increment = exports.histogram = exports.globalMetricRegistry = exports.gauge = exports.fromMetricKey = exports.frequency = exports.fiberSuccesses = exports.fiberStarted = exports.fiberLifetimes = exports.fiberFailures = exports.fiberActive = exports.counter = exports.MetricTypeId = void 0;
var fiberRuntime = _interopRequireWildcard(require("./internal/fiberRuntime.js"));
var internal = _interopRequireWildcard(require("./internal/metric.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 * @category symbols
 */
const MetricTypeId = exports.MetricTypeId = internal.MetricTypeId;
/**
 * @since 2.0.0
 * @category globals
 */
const globalMetricRegistry = exports.globalMetricRegistry = internal.globalMetricRegistry;
/**
 * @since 2.0.0
 * @category constructors
 */
const make = exports.make = internal.make;
/**
 * Returns a new metric that is powered by this one, but which accepts updates
 * of the specified new type, which must be transformable to the input type of
 * this metric.
 *
 * @since 2.0.0
 * @category mapping
 */
const mapInput = exports.mapInput = internal.mapInput;
/**
 * Represents a Counter metric that tracks cumulative numerical values over time.
 * Counters can be incremented and decremented and provide a running total of changes.
 *
 * **Options**
 *
 * - description - A description of the counter.
 * - bigint - Indicates if the counter uses 'bigint' data type.
 * - incremental - Set to 'true' for a counter that only increases. With this configuration, Effect ensures that non-incremental updates have no impact on the counter, making it exclusively suitable for counting upwards.
 *
 * @example
 * ```ts
 * import { Metric } from "effect"
 *
 * const numberCounter = Metric.counter("count", {
 *   description: "A number counter"
 * });
 *
 * const bigintCounter = Metric.counter("count", {
 *   description: "A bigint counter",
 *   bigint: true
 * });
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
const counter = exports.counter = internal.counter;
/**
 * Creates a Frequency metric to count occurrences of events.
 * Frequency metrics are used to count the number of times specific events or incidents occur.
 *
 * @example
 * ```ts
 * import { Metric } from "effect"
 *
 * const errorFrequency = Metric.frequency("error_frequency", {
 *    description: "Counts the occurrences of errors."
 * });
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
const frequency = exports.frequency = internal.frequency;
/**
 * Returns a new metric that is powered by this one, but which accepts updates
 * of any type, and translates them to updates with the specified constant
 * update value.
 *
 * @since 2.0.0
 * @category constructors
 */
const withConstantInput = exports.withConstantInput = internal.withConstantInput;
/**
 * @since 2.0.0
 * @category constructors
 */
const fromMetricKey = exports.fromMetricKey = internal.fromMetricKey;
/**
 * Represents a Gauge metric that tracks and reports a single numerical value at a specific moment.
 * Gauges are suitable for metrics that represent instantaneous values, such as memory usage or CPU load.
 *
 * **Options**
 *
 * - description - A description of the gauge metric.
 * - bigint - Indicates if the counter uses 'bigint' data type.
 *
 * @example
 * ```ts
 * import { Metric } from "effect"
 *
 * const numberGauge = Metric.gauge("memory_usage", {
 *   description: "A gauge for memory usage"
 * });
 *
 * const bigintGauge = Metric.gauge("cpu_load", {
 *   description: "A gauge for CPU load",
 *   bigint: true
 * });
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
const gauge = exports.gauge = internal.gauge;
/**
 * Represents a Histogram metric that records observations in specified value boundaries.
 * Histogram metrics are useful for measuring the distribution of values within a range.
 *
 * @example
 * ```ts
 * import { Metric, MetricBoundaries } from "effect"
 *
 * const latencyHistogram = Metric.histogram("latency_histogram",
 *   MetricBoundaries.linear({ start: 0, width: 10, count: 11 }),
 *   "Measures the distribution of request latency."
 * );
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
const histogram = exports.histogram = internal.histogram;
/**
 * @since 2.0.0
 * @category combinators
 */
const increment = exports.increment = internal.increment;
/**
 * @since 2.0.0
 * @category combinators
 */
const incrementBy = exports.incrementBy = internal.incrementBy;
/**
 * Returns a new metric that is powered by this one, but which outputs a new
 * state type, determined by transforming the state type of this metric by the
 * specified function.
 *
 * @since 2.0.0
 * @category mapping
 */
const map = exports.map = internal.map;
/**
 * @since 2.0.0
 * @category mapping
 */
const mapType = exports.mapType = internal.mapType;
/**
 * Modifies the metric with the specified update message. For example, if the
 * metric were a gauge, the update would increment the method by the provided
 * amount.
 *
 * @since 3.6.5
 * @category utils
 */
const modify = exports.modify = internal.modify;
/**
 * @since 2.0.0
 * @category aspects
 */
const set = exports.set = internal.set;
/**
 * Captures a snapshot of all metrics recorded by the application.
 *
 * @since 2.0.0
 * @category getters
 */
const snapshot = exports.snapshot = internal.snapshot;
/**
 * Creates a metric that ignores input and produces constant output.
 *
 * @since 2.0.0
 * @category constructors
 */
const succeed = exports.succeed = internal.succeed;
/**
 * Creates a metric that ignores input and produces constant output.
 *
 * @since 2.0.0
 * @category constructors
 */
const sync = exports.sync = internal.sync;
/**
 * Creates a Summary metric that records observations and calculates quantiles.
 * Summary metrics provide statistical information about a set of values, including quantiles.
 *
 * **Options**
 *
 * - name - The name of the Summary metric.
 * - maxAge - The maximum age of observations to retain.
 * - maxSize - The maximum number of observations to keep.
 * - error - The error percentage when calculating quantiles.
 * - quantiles - An `Chunk` of quantiles to calculate (e.g., [0.5, 0.9]).
 * - description - An optional description of the Summary metric.
 *
 * @example
 * ```ts
 * import { Metric, Chunk } from "effect"
 *
 * const responseTimesSummary = Metric.summary({
 *   name: "response_times_summary",
 *   maxAge: "60 seconds", // Retain observations for 60 seconds.
 *   maxSize: 1000, // Keep a maximum of 1000 observations.
 *   error: 0.01, // Allow a 1% error when calculating quantiles.
 *   quantiles: [0.5, 0.9, 0.99], // Calculate 50th, 90th, and 99th percentiles.
 *   description: "Measures the distribution of response times."
 * });
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
const summary = exports.summary = internal.summary;
/**
 * @since 2.0.0
 * @category constructors
 */
const summaryTimestamp // readonly because contravariant
= exports.summaryTimestamp = internal.summaryTimestamp;
/**
 * Returns a new metric, which is identical in every way to this one, except
 * the specified tags have been added to the tags of this metric.
 *
 * @since 2.0.0
 * @category utils
 */
const tagged = exports.tagged = internal.tagged;
/**
 * Returns a new metric, which is identical in every way to this one, except
 * dynamic tags are added based on the update values. Note that the metric
 * returned by this method does not return any useful information, due to the
 * dynamic nature of the added tags.
 *
 * @since 2.0.0
 * @category utils
 */
const taggedWithLabelsInput = exports.taggedWithLabelsInput = internal.taggedWithLabelsInput;
/**
 * Returns a new metric, which is identical in every way to this one, except
 * the specified tags have been added to the tags of this metric.
 *
 * @since 2.0.0
 * @category utils
 */
const taggedWithLabels = exports.taggedWithLabels = internal.taggedWithLabels;
/**
 * Creates a timer metric, based on a histogram, which keeps track of
 * durations in milliseconds. The unit of time will automatically be added to
 * the metric as a tag (i.e. `"time_unit: milliseconds"`).
 *
 * @since 2.0.0
 * @category constructors
 */
const timer = exports.timer = internal.timer;
/**
 * Creates a timer metric, based on a histogram created from the provided
 * boundaries, which keeps track of durations in milliseconds. The unit of time
 * will automatically be added to the metric as a tag (i.e.
 * `"time_unit: milliseconds"`).
 *
 * @since 2.0.0
 * @category constructors
 */
const timerWithBoundaries = exports.timerWithBoundaries = internal.timerWithBoundaries;
/**
 * Returns an aspect that will update this metric with the specified constant
 * value every time the aspect is applied to an effect, regardless of whether
 * that effect fails or succeeds.
 *
 * @since 2.0.0
 * @category aspects
 */
const trackAll = exports.trackAll = internal.trackAll;
/**
 * Returns an aspect that will update this metric with the defects of the
 * effects that it is applied to.
 *
 * @since 2.0.0
 * @category aspects
 */
const trackDefect = exports.trackDefect = internal.trackDefect;
/**
 * Returns an aspect that will update this metric with the result of applying
 * the specified function to the defect throwables of the effects that the
 * aspect is applied to.
 *
 * @since 2.0.0
 * @category aspects
 */
const trackDefectWith = exports.trackDefectWith = internal.trackDefectWith;
/**
 * Returns an aspect that will update this metric with the duration that the
 * effect takes to execute. To call this method, the input type of the metric
 * must be `Duration`.
 *
 * @since 2.0.0
 * @category aspects
 */
const trackDuration = exports.trackDuration = internal.trackDuration;
/**
 * Returns an aspect that will update this metric with the duration that the
 * effect takes to execute. To call this method, you must supply a function
 * that can convert the `Duration` to the input type of this metric.
 *
 * @since 2.0.0
 * @category aspects
 */
const trackDurationWith = exports.trackDurationWith = internal.trackDurationWith;
/**
 * Returns an aspect that will update this metric with the failure value of
 * the effects that it is applied to.
 *
 * @since 2.0.0
 * @category aspects
 */
const trackError = exports.trackError = internal.trackError;
/**
 * Returns an aspect that will update this metric with the result of applying
 * the specified function to the error value of the effects that the aspect is
 * applied to.
 *
 * @since 2.0.0
 * @category aspects
 */
const trackErrorWith = exports.trackErrorWith = internal.trackErrorWith;
/**
 * Returns an aspect that will update this metric with the success value of
 * the effects that it is applied to.
 *
 * @since 2.0.0
 * @category aspects
 */
const trackSuccess = exports.trackSuccess = internal.trackSuccess;
/**
 * Returns an aspect that will update this metric with the result of applying
 * the specified function to the success value of the effects that the aspect is
 * applied to.
 *
 * @since 2.0.0
 * @category aspects
 */
const trackSuccessWith = exports.trackSuccessWith = internal.trackSuccessWith;
/**
 * Updates the metric with the specified update message. For example, if the
 * metric were a counter, the update would increment the method by the
 * provided amount.
 *
 * @since 2.0.0
 * @category utils
 */
const update = exports.update = internal.update;
/**
 * Retrieves a snapshot of the value of the metric at this moment in time.
 *
 * @since 2.0.0
 * @category getters
 */
const value = exports.value = internal.value;
/**
 * @since 2.0.0
 * @category utils
 */
const withNow = exports.withNow = internal.withNow;
/**
 * @since 2.0.0
 * @category zipping
 */
const zip = exports.zip = internal.zip;
/**
 * Unsafely captures a snapshot of all metrics recorded by the application.
 *
 * @since 2.0.0
 * @category unsafe
 */
const unsafeSnapshot = exports.unsafeSnapshot = internal.unsafeSnapshot;
/**
 * @since 2.0.0
 * @category metrics
 */
const fiberStarted = exports.fiberStarted = fiberRuntime.fiberStarted;
/**
 * @since 2.0.0
 * @category metrics
 */
const fiberSuccesses = exports.fiberSuccesses = fiberRuntime.fiberSuccesses;
/**
 * @since 2.0.0
 * @category metrics
 */
const fiberFailures = exports.fiberFailures = fiberRuntime.fiberFailures;
/**
 * @since 2.0.0
 * @category metrics
 */
const fiberLifetimes = exports.fiberLifetimes = fiberRuntime.fiberLifetimes;
/**
 * @since 2.0.0
 * @category metrics
 */
const fiberActive = exports.fiberActive = fiberRuntime.fiberActive;
//# sourceMappingURL=Metric.js.map