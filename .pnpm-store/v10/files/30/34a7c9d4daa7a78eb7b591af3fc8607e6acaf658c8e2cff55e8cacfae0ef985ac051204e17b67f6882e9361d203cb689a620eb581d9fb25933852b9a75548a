"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.make = exports.MetricRegistryTypeId = void 0;
var _Function = require("../../Function.js");
var MutableHashMap = _interopRequireWildcard(require("../../MutableHashMap.js"));
var Option = _interopRequireWildcard(require("../../Option.js"));
var metricHook = _interopRequireWildcard(require("./hook.js"));
var metricKeyType = _interopRequireWildcard(require("./keyType.js"));
var metricPair = _interopRequireWildcard(require("./pair.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const MetricRegistrySymbolKey = "effect/MetricRegistry";
/** @internal */
const MetricRegistryTypeId = exports.MetricRegistryTypeId = /*#__PURE__*/Symbol.for(MetricRegistrySymbolKey);
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
    const hook = (0, _Function.pipe)(this.map, MutableHashMap.get(key), Option.getOrUndefined);
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
    let value = (0, _Function.pipe)(this.map, MutableHashMap.get(key), Option.getOrUndefined);
    if (value == null) {
      const counter = metricHook.counter(key);
      if (!(0, _Function.pipe)(this.map, MutableHashMap.has(key))) {
        (0, _Function.pipe)(this.map, MutableHashMap.set(key, counter));
      }
      value = counter;
    }
    return value;
  }
  getFrequency(key) {
    let value = (0, _Function.pipe)(this.map, MutableHashMap.get(key), Option.getOrUndefined);
    if (value == null) {
      const frequency = metricHook.frequency(key);
      if (!(0, _Function.pipe)(this.map, MutableHashMap.has(key))) {
        (0, _Function.pipe)(this.map, MutableHashMap.set(key, frequency));
      }
      value = frequency;
    }
    return value;
  }
  getGauge(key) {
    let value = (0, _Function.pipe)(this.map, MutableHashMap.get(key), Option.getOrUndefined);
    if (value == null) {
      const gauge = metricHook.gauge(key, key.keyType.bigint ? BigInt(0) : 0);
      if (!(0, _Function.pipe)(this.map, MutableHashMap.has(key))) {
        (0, _Function.pipe)(this.map, MutableHashMap.set(key, gauge));
      }
      value = gauge;
    }
    return value;
  }
  getHistogram(key) {
    let value = (0, _Function.pipe)(this.map, MutableHashMap.get(key), Option.getOrUndefined);
    if (value == null) {
      const histogram = metricHook.histogram(key);
      if (!(0, _Function.pipe)(this.map, MutableHashMap.has(key))) {
        (0, _Function.pipe)(this.map, MutableHashMap.set(key, histogram));
      }
      value = histogram;
    }
    return value;
  }
  getSummary(key) {
    let value = (0, _Function.pipe)(this.map, MutableHashMap.get(key), Option.getOrUndefined);
    if (value == null) {
      const summary = metricHook.summary(key);
      if (!(0, _Function.pipe)(this.map, MutableHashMap.has(key))) {
        (0, _Function.pipe)(this.map, MutableHashMap.set(key, summary));
      }
      value = summary;
    }
    return value;
  }
}
/** @internal */
const make = () => {
  return new MetricRegistryImpl();
};
exports.make = make;
//# sourceMappingURL=registry.js.map