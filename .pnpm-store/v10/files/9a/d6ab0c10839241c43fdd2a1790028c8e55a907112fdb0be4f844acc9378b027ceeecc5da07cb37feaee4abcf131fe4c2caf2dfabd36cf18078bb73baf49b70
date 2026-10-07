import * as Arr from "../../Array.js";
import * as Equal from "../../Equal.js";
import { pipe } from "../../Function.js";
import * as Hash from "../../Hash.js";
import { pipeArguments } from "../../Pipeable.js";
import { hasProperty } from "../../Predicate.js";
/** @internal */
const MetricStateSymbolKey = "effect/MetricState";
/** @internal */
export const MetricStateTypeId = /*#__PURE__*/Symbol.for(MetricStateSymbolKey);
/** @internal */
const CounterStateSymbolKey = "effect/MetricState/Counter";
/** @internal */
export const CounterStateTypeId = /*#__PURE__*/Symbol.for(CounterStateSymbolKey);
/** @internal */
const FrequencyStateSymbolKey = "effect/MetricState/Frequency";
/** @internal */
export const FrequencyStateTypeId = /*#__PURE__*/Symbol.for(FrequencyStateSymbolKey);
/** @internal */
const GaugeStateSymbolKey = "effect/MetricState/Gauge";
/** @internal */
export const GaugeStateTypeId = /*#__PURE__*/Symbol.for(GaugeStateSymbolKey);
/** @internal */
const HistogramStateSymbolKey = "effect/MetricState/Histogram";
/** @internal */
export const HistogramStateTypeId = /*#__PURE__*/Symbol.for(HistogramStateSymbolKey);
/** @internal */
const SummaryStateSymbolKey = "effect/MetricState/Summary";
/** @internal */
export const SummaryStateTypeId = /*#__PURE__*/Symbol.for(SummaryStateSymbolKey);
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
    return pipe(Hash.hash(CounterStateSymbolKey), Hash.combine(Hash.hash(this.count)), Hash.cached(this));
  }
  [Equal.symbol](that) {
    return isCounterState(that) && this.count === that.count;
  }
  pipe() {
    return pipeArguments(this, arguments);
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
    return pipe(Hash.string(FrequencyStateSymbolKey), Hash.combine(Hash.array(Arr.fromIterable(this.occurrences.entries()))), Hash.cached(this));
  }
  [Equal.symbol](that) {
    return isFrequencyState(that) && arrayEquals(Arr.fromIterable(this.occurrences.entries()), Arr.fromIterable(that.occurrences.entries()));
  }
  pipe() {
    return pipeArguments(this, arguments);
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
    return pipe(Hash.hash(GaugeStateSymbolKey), Hash.combine(Hash.hash(this.value)), Hash.cached(this));
  }
  [Equal.symbol](u) {
    return isGaugeState(u) && this.value === u.value;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
}
/** @internal */
export class HistogramState {
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
    return pipe(Hash.hash(HistogramStateSymbolKey), Hash.combine(Hash.hash(this.buckets)), Hash.combine(Hash.hash(this.count)), Hash.combine(Hash.hash(this.min)), Hash.combine(Hash.hash(this.max)), Hash.combine(Hash.hash(this.sum)), Hash.cached(this));
  }
  [Equal.symbol](that) {
    return isHistogramState(that) && Equal.equals(this.buckets, that.buckets) && this.count === that.count && this.min === that.min && this.max === that.max && this.sum === that.sum;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
}
/** @internal */
export class SummaryState {
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
    return pipe(Hash.hash(SummaryStateSymbolKey), Hash.combine(Hash.hash(this.error)), Hash.combine(Hash.hash(this.quantiles)), Hash.combine(Hash.hash(this.count)), Hash.combine(Hash.hash(this.min)), Hash.combine(Hash.hash(this.max)), Hash.combine(Hash.hash(this.sum)), Hash.cached(this));
  }
  [Equal.symbol](that) {
    return isSummaryState(that) && this.error === that.error && Equal.equals(this.quantiles, that.quantiles) && this.count === that.count && this.min === that.min && this.max === that.max && this.sum === that.sum;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
}
/** @internal */
export const counter = count => new CounterState(count);
/** @internal */
export const frequency = occurrences => {
  return new FrequencyState(occurrences);
};
/** @internal */
export const gauge = count => new GaugeState(count);
/** @internal */
export const histogram = options => new HistogramState(options.buckets, options.count, options.min, options.max, options.sum);
/** @internal */
export const summary = options => new SummaryState(options.error, options.quantiles, options.count, options.min, options.max, options.sum);
/** @internal */
export const isMetricState = u => hasProperty(u, MetricStateTypeId);
/** @internal */
export const isCounterState = u => hasProperty(u, CounterStateTypeId);
/**
 * @since 2.0.0
 * @category refinements
 */
export const isFrequencyState = u => hasProperty(u, FrequencyStateTypeId);
/**
 * @since 2.0.0
 * @category refinements
 */
export const isGaugeState = u => hasProperty(u, GaugeStateTypeId);
/**
 * @since 2.0.0
 * @category refinements
 */
export const isHistogramState = u => hasProperty(u, HistogramStateTypeId);
/**
 * @since 2.0.0
 * @category refinements
 */
export const isSummaryState = u => hasProperty(u, SummaryStateTypeId);
//# sourceMappingURL=state.js.map