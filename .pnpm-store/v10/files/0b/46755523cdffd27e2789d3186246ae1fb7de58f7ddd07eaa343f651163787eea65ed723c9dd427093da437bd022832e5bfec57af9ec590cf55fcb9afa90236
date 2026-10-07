"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.summary = exports.isSummaryState = exports.isMetricState = exports.isHistogramState = exports.isGaugeState = exports.isFrequencyState = exports.isCounterState = exports.histogram = exports.gauge = exports.frequency = exports.counter = exports.SummaryStateTypeId = exports.SummaryState = exports.MetricStateTypeId = exports.HistogramStateTypeId = exports.HistogramState = exports.GaugeStateTypeId = exports.FrequencyStateTypeId = exports.CounterStateTypeId = void 0;
var Arr = _interopRequireWildcard(require("../../Array.js"));
var Equal = _interopRequireWildcard(require("../../Equal.js"));
var _Function = require("../../Function.js");
var Hash = _interopRequireWildcard(require("../../Hash.js"));
var _Pipeable = require("../../Pipeable.js");
var _Predicate = require("../../Predicate.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const MetricStateSymbolKey = "effect/MetricState";
/** @internal */
const MetricStateTypeId = exports.MetricStateTypeId = /*#__PURE__*/Symbol.for(MetricStateSymbolKey);
/** @internal */
const CounterStateSymbolKey = "effect/MetricState/Counter";
/** @internal */
const CounterStateTypeId = exports.CounterStateTypeId = /*#__PURE__*/Symbol.for(CounterStateSymbolKey);
/** @internal */
const FrequencyStateSymbolKey = "effect/MetricState/Frequency";
/** @internal */
const FrequencyStateTypeId = exports.FrequencyStateTypeId = /*#__PURE__*/Symbol.for(FrequencyStateSymbolKey);
/** @internal */
const GaugeStateSymbolKey = "effect/MetricState/Gauge";
/** @internal */
const GaugeStateTypeId = exports.GaugeStateTypeId = /*#__PURE__*/Symbol.for(GaugeStateSymbolKey);
/** @internal */
const HistogramStateSymbolKey = "effect/MetricState/Histogram";
/** @internal */
const HistogramStateTypeId = exports.HistogramStateTypeId = /*#__PURE__*/Symbol.for(HistogramStateSymbolKey);
/** @internal */
const SummaryStateSymbolKey = "effect/MetricState/Summary";
/** @internal */
const SummaryStateTypeId = exports.SummaryStateTypeId = /*#__PURE__*/Symbol.for(SummaryStateSymbolKey);
const metricStateVariance = {
  /* c8 ignore next */
  _A: _ => _
};
/** @internal */
class CounterState {
  count;
  [MetricStateTypeId] = metricStateVariance;
  [CounterStateTypeId] = CounterStateTypeId;
  constructor(count) {
    this.count = count;
  }
  [Hash.symbol]() {
    return (0, _Function.pipe)(Hash.hash(CounterStateSymbolKey), Hash.combine(Hash.hash(this.count)), Hash.cached(this));
  }
  [Equal.symbol](that) {
    return isCounterState(that) && this.count === that.count;
  }
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
}
const arrayEquals = /*#__PURE__*/Arr.getEquivalence(Equal.equals);
/** @internal */
class FrequencyState {
  occurrences;
  [MetricStateTypeId] = metricStateVariance;
  [FrequencyStateTypeId] = FrequencyStateTypeId;
  constructor(occurrences) {
    this.occurrences = occurrences;
  }
  _hash;
  [Hash.symbol]() {
    return (0, _Function.pipe)(Hash.string(FrequencyStateSymbolKey), Hash.combine(Hash.array(Arr.fromIterable(this.occurrences.entries()))), Hash.cached(this));
  }
  [Equal.symbol](that) {
    return isFrequencyState(that) && arrayEquals(Arr.fromIterable(this.occurrences.entries()), Arr.fromIterable(that.occurrences.entries()));
  }
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
}
/** @internal */
class GaugeState {
  value;
  [MetricStateTypeId] = metricStateVariance;
  [GaugeStateTypeId] = GaugeStateTypeId;
  constructor(value) {
    this.value = value;
  }
  [Hash.symbol]() {
    return (0, _Function.pipe)(Hash.hash(GaugeStateSymbolKey), Hash.combine(Hash.hash(this.value)), Hash.cached(this));
  }
  [Equal.symbol](u) {
    return isGaugeState(u) && this.value === u.value;
  }
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
}
/** @internal */
class HistogramState {
  buckets;
  count;
  min;
  max;
  sum;
  [MetricStateTypeId] = metricStateVariance;
  [HistogramStateTypeId] = HistogramStateTypeId;
  constructor(buckets, count, min, max, sum) {
    this.buckets = buckets;
    this.count = count;
    this.min = min;
    this.max = max;
    this.sum = sum;
  }
  [Hash.symbol]() {
    return (0, _Function.pipe)(Hash.hash(HistogramStateSymbolKey), Hash.combine(Hash.hash(this.buckets)), Hash.combine(Hash.hash(this.count)), Hash.combine(Hash.hash(this.min)), Hash.combine(Hash.hash(this.max)), Hash.combine(Hash.hash(this.sum)), Hash.cached(this));
  }
  [Equal.symbol](that) {
    return isHistogramState(that) && Equal.equals(this.buckets, that.buckets) && this.count === that.count && this.min === that.min && this.max === that.max && this.sum === that.sum;
  }
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
}
/** @internal */
exports.HistogramState = HistogramState;
class SummaryState {
  error;
  quantiles;
  count;
  min;
  max;
  sum;
  [MetricStateTypeId] = metricStateVariance;
  [SummaryStateTypeId] = SummaryStateTypeId;
  constructor(error, quantiles, count, min, max, sum) {
    this.error = error;
    this.quantiles = quantiles;
    this.count = count;
    this.min = min;
    this.max = max;
    this.sum = sum;
  }
  [Hash.symbol]() {
    return (0, _Function.pipe)(Hash.hash(SummaryStateSymbolKey), Hash.combine(Hash.hash(this.error)), Hash.combine(Hash.hash(this.quantiles)), Hash.combine(Hash.hash(this.count)), Hash.combine(Hash.hash(this.min)), Hash.combine(Hash.hash(this.max)), Hash.combine(Hash.hash(this.sum)), Hash.cached(this));
  }
  [Equal.symbol](that) {
    return isSummaryState(that) && this.error === that.error && Equal.equals(this.quantiles, that.quantiles) && this.count === that.count && this.min === that.min && this.max === that.max && this.sum === that.sum;
  }
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
}
/** @internal */
exports.SummaryState = SummaryState;
const counter = count => new CounterState(count);
/** @internal */
exports.counter = counter;
const frequency = occurrences => {
  return new FrequencyState(occurrences);
};
/** @internal */
exports.frequency = frequency;
const gauge = count => new GaugeState(count);
/** @internal */
exports.gauge = gauge;
const histogram = options => new HistogramState(options.buckets, options.count, options.min, options.max, options.sum);
/** @internal */
exports.histogram = histogram;
const summary = options => new SummaryState(options.error, options.quantiles, options.count, options.min, options.max, options.sum);
/** @internal */
exports.summary = summary;
const isMetricState = u => (0, _Predicate.hasProperty)(u, MetricStateTypeId);
/** @internal */
exports.isMetricState = isMetricState;
const isCounterState = u => (0, _Predicate.hasProperty)(u, CounterStateTypeId);
/**
 * @since 2.0.0
 * @category refinements
 */
exports.isCounterState = isCounterState;
const isFrequencyState = u => (0, _Predicate.hasProperty)(u, FrequencyStateTypeId);
/**
 * @since 2.0.0
 * @category refinements
 */
exports.isFrequencyState = isFrequencyState;
const isGaugeState = u => (0, _Predicate.hasProperty)(u, GaugeStateTypeId);
/**
 * @since 2.0.0
 * @category refinements
 */
exports.isGaugeState = isGaugeState;
const isHistogramState = u => (0, _Predicate.hasProperty)(u, HistogramStateTypeId);
/**
 * @since 2.0.0
 * @category refinements
 */
exports.isHistogramState = isHistogramState;
const isSummaryState = u => (0, _Predicate.hasProperty)(u, SummaryStateTypeId);
exports.isSummaryState = isSummaryState;
//# sourceMappingURL=state.js.map