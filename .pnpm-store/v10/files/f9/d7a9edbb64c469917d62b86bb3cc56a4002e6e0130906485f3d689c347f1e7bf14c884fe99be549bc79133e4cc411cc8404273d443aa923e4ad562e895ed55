import * as Duration from "../../Duration.js";
import * as Equal from "../../Equal.js";
import { pipe } from "../../Function.js";
import * as Hash from "../../Hash.js";
import { pipeArguments } from "../../Pipeable.js";
import { hasProperty } from "../../Predicate.js";
/** @internal */
const MetricKeyTypeSymbolKey = "effect/MetricKeyType";
/** @internal */
export const MetricKeyTypeTypeId = /*#__PURE__*/Symbol.for(MetricKeyTypeSymbolKey);
/** @internal */
const CounterKeyTypeSymbolKey = "effect/MetricKeyType/Counter";
/** @internal */
export const CounterKeyTypeTypeId = /*#__PURE__*/Symbol.for(CounterKeyTypeSymbolKey);
/** @internal */
const FrequencyKeyTypeSymbolKey = "effect/MetricKeyType/Frequency";
/** @internal */
export const FrequencyKeyTypeTypeId = /*#__PURE__*/Symbol.for(FrequencyKeyTypeSymbolKey);
/** @internal */
const GaugeKeyTypeSymbolKey = "effect/MetricKeyType/Gauge";
/** @internal */
export const GaugeKeyTypeTypeId = /*#__PURE__*/Symbol.for(GaugeKeyTypeSymbolKey);
/** @internal */
const HistogramKeyTypeSymbolKey = "effect/MetricKeyType/Histogram";
/** @internal */
export const HistogramKeyTypeTypeId = /*#__PURE__*/Symbol.for(HistogramKeyTypeSymbolKey);
/** @internal */
const SummaryKeyTypeSymbolKey = "effect/MetricKeyType/Summary";
/** @internal */
export const SummaryKeyTypeTypeId = /*#__PURE__*/Symbol.for(SummaryKeyTypeSymbolKey);
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
    return pipeArguments(this, arguments);
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
    return pipeArguments(this, arguments);
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
    return pipeArguments(this, arguments);
  }
}
/** @internal */
export class HistogramKeyType {
  boundaries;
  [MetricKeyTypeTypeId] = metricKeyTypeVariance;
  [HistogramKeyTypeTypeId] = HistogramKeyTypeTypeId;
  constructor(boundaries) {
    this.boundaries = boundaries;
    this._hash = pipe(Hash.string(HistogramKeyTypeSymbolKey), Hash.combine(Hash.hash(this.boundaries)));
  }
  _hash;
  [Hash.symbol]() {
    return this._hash;
  }
  [Equal.symbol](that) {
    return isHistogramKey(that) && Equal.equals(this.boundaries, that.boundaries);
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
}
/** @internal */
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
    this._hash = pipe(Hash.string(SummaryKeyTypeSymbolKey), Hash.combine(Hash.hash(this.maxAge)), Hash.combine(Hash.hash(this.maxSize)), Hash.combine(Hash.hash(this.error)), Hash.combine(Hash.array(this.quantiles)));
  }
  _hash;
  [Hash.symbol]() {
    return this._hash;
  }
  [Equal.symbol](that) {
    return isSummaryKey(that) && Equal.equals(this.maxAge, that.maxAge) && this.maxSize === that.maxSize && this.error === that.error && Equal.equals(this.quantiles, that.quantiles);
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
}
/** @internal */
export const counter = options => new CounterKeyType(options?.incremental ?? false, options?.bigint ?? false);
/** @internal */
export const frequency = options => new FrequencyKeyType(options?.preregisteredWords ?? []);
/** @internal */
export const gauge = options => new GaugeKeyType(options?.bigint ?? false);
/** @internal */
export const histogram = boundaries => {
  return new HistogramKeyType(boundaries);
};
/** @internal */
export const summary = options => {
  return new SummaryKeyType(Duration.decode(options.maxAge), options.maxSize, options.error, options.quantiles);
};
/** @internal */
export const isMetricKeyType = u => hasProperty(u, MetricKeyTypeTypeId);
/** @internal */
export const isCounterKey = u => hasProperty(u, CounterKeyTypeTypeId);
/** @internal */
export const isFrequencyKey = u => hasProperty(u, FrequencyKeyTypeTypeId);
/** @internal */
export const isGaugeKey = u => hasProperty(u, GaugeKeyTypeTypeId);
/** @internal */
export const isHistogramKey = u => hasProperty(u, HistogramKeyTypeTypeId);
/** @internal */
export const isSummaryKey = u => hasProperty(u, SummaryKeyTypeTypeId);
//# sourceMappingURL=keyType.js.map