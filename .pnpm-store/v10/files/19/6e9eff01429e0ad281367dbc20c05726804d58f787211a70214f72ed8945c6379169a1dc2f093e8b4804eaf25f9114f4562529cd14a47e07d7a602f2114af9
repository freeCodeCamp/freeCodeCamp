import { pipe } from "../../Function.js";
import * as MutableHashMap from "../../MutableHashMap.js";
import * as Option from "../../Option.js";
import * as metricHook from "./hook.js";
import * as metricKeyType from "./keyType.js";
import * as metricPair from "./pair.js";
/** @internal */
const MetricRegistrySymbolKey = "effect/MetricRegistry";
/** @internal */
export const MetricRegistryTypeId = /*#__PURE__*/Symbol.for(MetricRegistrySymbolKey);
/** @internal */
class MetricRegistryImpl {
  [MetricRegistryTypeId] = MetricRegistryTypeId;
  map = /*#__PURE__*/MutableHashMap.empty();
  snapshot() {
    const result = [];
    for (const [key, hook] of this.map) {
      result.push(metricPair.unsafeMake(key, hook.get()));
    }
    return result;
  }
  get(key) {
    const hook = pipe(this.map, MutableHashMap.get(key), Option.getOrUndefined);
    if (hook == null) {
      if (metricKeyType.isCounterKey(key.keyType)) {
        return this.getCounter(key);
      }
      if (metricKeyType.isGaugeKey(key.keyType)) {
        return this.getGauge(key);
      }
      if (metricKeyType.isFrequencyKey(key.keyType)) {
        return this.getFrequency(key);
      }
      if (metricKeyType.isHistogramKey(key.keyType)) {
        return this.getHistogram(key);
      }
      if (metricKeyType.isSummaryKey(key.keyType)) {
        return this.getSummary(key);
      }
      throw new Error("BUG: MetricRegistry.get - unknown MetricKeyType - please report an issue at https://github.com/Effect-TS/effect/issues");
    } else {
      return hook;
    }
  }
  getCounter(key) {
    let value = pipe(this.map, MutableHashMap.get(key), Option.getOrUndefined);
    if (value == null) {
      const counter = metricHook.counter(key);
      if (!pipe(this.map, MutableHashMap.has(key))) {
        pipe(this.map, MutableHashMap.set(key, counter));
      }
      value = counter;
    }
    return value;
  }
  getFrequency(key) {
    let value = pipe(this.map, MutableHashMap.get(key), Option.getOrUndefined);
    if (value == null) {
      const frequency = metricHook.frequency(key);
      if (!pipe(this.map, MutableHashMap.has(key))) {
        pipe(this.map, MutableHashMap.set(key, frequency));
      }
      value = frequency;
    }
    return value;
  }
  getGauge(key) {
    let value = pipe(this.map, MutableHashMap.get(key), Option.getOrUndefined);
    if (value == null) {
      const gauge = metricHook.gauge(key, key.keyType.bigint ? BigInt(0) : 0);
      if (!pipe(this.map, MutableHashMap.has(key))) {
        pipe(this.map, MutableHashMap.set(key, gauge));
      }
      value = gauge;
    }
    return value;
  }
  getHistogram(key) {
    let value = pipe(this.map, MutableHashMap.get(key), Option.getOrUndefined);
    if (value == null) {
      const histogram = metricHook.histogram(key);
      if (!pipe(this.map, MutableHashMap.has(key))) {
        pipe(this.map, MutableHashMap.set(key, histogram));
      }
      value = histogram;
    }
    return value;
  }
  getSummary(key) {
    let value = pipe(this.map, MutableHashMap.get(key), Option.getOrUndefined);
    if (value == null) {
      const summary = metricHook.summary(key);
      if (!pipe(this.map, MutableHashMap.has(key))) {
        pipe(this.map, MutableHashMap.set(key, summary));
      }
      value = summary;
    }
    return value;
  }
}
/** @internal */
export const make = () => {
  return new MetricRegistryImpl();
};
//# sourceMappingURL=registry.js.map