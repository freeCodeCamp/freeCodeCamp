"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.summary = exports.isSummaryKey = exports.isMetricKeyType = exports.isHistogramKey = exports.isGaugeKey = exports.isFrequencyKey = exports.isCounterKey = exports.histogram = exports.gauge = exports.frequency = exports.counter = exports.SummaryKeyTypeTypeId = exports.MetricKeyTypeTypeId = exports.HistogramKeyTypeTypeId = exports.HistogramKeyType = exports.GaugeKeyTypeTypeId = exports.FrequencyKeyTypeTypeId = exports.CounterKeyTypeTypeId = void 0;
var Duration = _interopRequireWildcard(require("../../Duration.js"));
var Equal = _interopRequireWildcard(require("../../Equal.js"));
var _Function = require("../../Function.js");
var Hash = _interopRequireWildcard(require("../../Hash.js"));
var _Pipeable = require("../../Pipeable.js");
var _Predicate = require("../../Predicate.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const MetricKeyTypeSymbolKey = "effect/MetricKeyType";
/** @internal */
const MetricKeyTypeTypeId = exports.MetricKeyTypeTypeId = /*#__PURE__*/Symbol.for(MetricKeyTypeSymbolKey);
/** @internal */
const CounterKeyTypeSymbolKey = "effect/MetricKeyType/Counter";
/** @internal */
const CounterKeyTypeTypeId = exports.CounterKeyTypeTypeId = /*#__PURE__*/Symbol.for(CounterKeyTypeSymbolKey);
/** @internal */
const FrequencyKeyTypeSymbolKey = "effect/MetricKeyType/Frequency";
/** @internal */
const FrequencyKeyTypeTypeId = exports.FrequencyKeyTypeTypeId = /*#__PURE__*/Symbol.for(FrequencyKeyTypeSymbolKey);
/** @internal */
const GaugeKeyTypeSymbolKey = "effect/MetricKeyType/Gauge";
/** @internal */
const GaugeKeyTypeTypeId = exports.GaugeKeyTypeTypeId = /*#__PURE__*/Symbol.for(GaugeKeyTypeSymbolKey);
/** @internal */
const HistogramKeyTypeSymbolKey = "effect/MetricKeyType/Histogram";
/** @internal */
const HistogramKeyTypeTypeId = exports.HistogramKeyTypeTypeId = /*#__PURE__*/Symbol.for(HistogramKeyTypeSymbolKey);
/** @internal */
const SummaryKeyTypeSymbolKey = "effect/MetricKeyType/Summary";
/** @internal */
const SummaryKeyTypeTypeId = exports.SummaryKeyTypeTypeId = /*#__PURE__*/Symbol.for(SummaryKeyTypeSymbolKey);
const metricKeyTypeVariance = {
  /* c8 ignore next */
  _In: _ => _,
  /* c8 ignore next */
  _Out: _ => _
};
/** @internal */
class CounterKeyType {
  incremental;
  bigint;
  [MetricKeyTypeTypeId] = metricKeyTypeVariance;
  [CounterKeyTypeTypeId] = CounterKeyTypeTypeId;
  constructor(incremental, bigint) {
    this.incremental = incremental;
    this.bigint = bigint;
    this._hash = Hash.string(CounterKeyTypeSymbolKey);
  }
  _hash;
  [Hash.symbol]() {
    return this._hash;
  }
  [Equal.symbol](that) {
    return isCounterKey(that);
  }
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
}
const FrequencyKeyTypeHash = /*#__PURE__*/Hash.string(FrequencyKeyTypeSymbolKey);
/** @internal */
class FrequencyKeyType {
  preregisteredWords;
  [MetricKeyTypeTypeId] = metricKeyTypeVariance;
  [FrequencyKeyTypeTypeId] = FrequencyKeyTypeTypeId;
  constructor(preregisteredWords) {
    this.preregisteredWords = preregisteredWords;
  }
  [Hash.symbol]() {
    return FrequencyKeyTypeHash;
  }
  [Equal.symbol](that) {
    return isFrequencyKey(that);
  }
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
}
const GaugeKeyTypeHash = /*#__PURE__*/Hash.string(GaugeKeyTypeSymbolKey);
/** @internal */
class GaugeKeyType {
  bigint;
  [MetricKeyTypeTypeId] = metricKeyTypeVariance;
  [GaugeKeyTypeTypeId] = GaugeKeyTypeTypeId;
  constructor(bigint) {
    this.bigint = bigint;
  }
  [Hash.symbol]() {
    return GaugeKeyTypeHash;
  }
  [Equal.symbol](that) {
    return isGaugeKey(that);
  }
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
}
/** @internal */
class HistogramKeyType {
  boundaries;
  [MetricKeyTypeTypeId] = metricKeyTypeVariance;
  [HistogramKeyTypeTypeId] = HistogramKeyTypeTypeId;
  constructor(boundaries) {
    this.boundaries = boundaries;
    this._hash = (0, _Function.pipe)(Hash.string(HistogramKeyTypeSymbolKey), Hash.combine(Hash.hash(this.boundaries)));
  }
  _hash;
  [Hash.symbol]() {
    return this._hash;
  }
  [Equal.symbol](that) {
    return isHistogramKey(that) && Equal.equals(this.boundaries, that.boundaries);
  }
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
}
/** @internal */
exports.HistogramKeyType = HistogramKeyType;
class SummaryKeyType {
  maxAge;
  maxSize;
  error;
  quantiles;
  [MetricKeyTypeTypeId] = metricKeyTypeVariance;
  [SummaryKeyTypeTypeId] = SummaryKeyTypeTypeId;
  constructor(maxAge, maxSize, error, quantiles) {
    this.maxAge = maxAge;
    this.maxSize = maxSize;
    this.error = error;
    this.quantiles = quantiles;
    this._hash = (0, _Function.pipe)(Hash.string(SummaryKeyTypeSymbolKey), Hash.combine(Hash.hash(this.maxAge)), Hash.combine(Hash.hash(this.maxSize)), Hash.combine(Hash.hash(this.error)), Hash.combine(Hash.array(this.quantiles)));
  }
  _hash;
  [Hash.symbol]() {
    return this._hash;
  }
  [Equal.symbol](that) {
    return isSummaryKey(that) && Equal.equals(this.maxAge, that.maxAge) && this.maxSize === that.maxSize && this.error === that.error && Equal.equals(this.quantiles, that.quantiles);
  }
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
}
/** @internal */
const counter = options => new CounterKeyType(options?.incremental ?? false, options?.bigint ?? false);
/** @internal */
exports.counter = counter;
const frequency = options => new FrequencyKeyType(options?.preregisteredWords ?? []);
/** @internal */
exports.frequency = frequency;
const gauge = options => new GaugeKeyType(options?.bigint ?? false);
/** @internal */
exports.gauge = gauge;
const histogram = boundaries => {
  return new HistogramKeyType(boundaries);
};
/** @internal */
exports.histogram = histogram;
const summary = options => {
  return new SummaryKeyType(Duration.decode(options.maxAge), options.maxSize, options.error, options.quantiles);
};
/** @internal */
exports.summary = summary;
const isMetricKeyType = u => (0, _Predicate.hasProperty)(u, MetricKeyTypeTypeId);
/** @internal */
exports.isMetricKeyType = isMetricKeyType;
const isCounterKey = u => (0, _Predicate.hasProperty)(u, CounterKeyTypeTypeId);
/** @internal */
exports.isCounterKey = isCounterKey;
const isFrequencyKey = u => (0, _Predicate.hasProperty)(u, FrequencyKeyTypeTypeId);
/** @internal */
exports.isFrequencyKey = isFrequencyKey;
const isGaugeKey = u => (0, _Predicate.hasProperty)(u, GaugeKeyTypeTypeId);
/** @internal */
exports.isGaugeKey = isGaugeKey;
const isHistogramKey = u => (0, _Predicate.hasProperty)(u, HistogramKeyTypeTypeId);
/** @internal */
exports.isHistogramKey = isHistogramKey;
const isSummaryKey = u => (0, _Predicate.hasProperty)(u, SummaryKeyTypeTypeId);
exports.isSummaryKey = isSummaryKey;
//# sourceMappingURL=keyType.js.map