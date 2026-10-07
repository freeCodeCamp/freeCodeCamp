"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zip = exports.withNow = exports.withConstantInput = exports.value = exports.update = exports.unsafeSnapshot = exports.trackSuccessWith = exports.trackSuccess = exports.trackErrorWith = exports.trackError = exports.trackDurationWith = exports.trackDuration = exports.trackDefectWith = exports.trackDefect = exports.trackAll = exports.timerWithBoundaries = exports.timer = exports.taggedWithLabelsInput = exports.taggedWithLabels = exports.tagged = exports.sync = exports.summaryTimestamp = exports.summary = exports.succeed = exports.snapshot = exports.set = exports.modify = exports.mapType = exports.mapInput = exports.map = exports.make = exports.incrementBy = exports.increment = exports.histogram = exports.globalMetricRegistry = exports.gauge = exports.fromMetricKey = exports.frequency = exports.counter = exports.MetricTypeId = void 0;
var Arr = _interopRequireWildcard(require("../Array.js"));
var Clock = _interopRequireWildcard(require("../Clock.js"));
var Duration = _interopRequireWildcard(require("../Duration.js"));
var _Function = require("../Function.js");
var _GlobalValue = require("../GlobalValue.js");
var _Pipeable = require("../Pipeable.js");
var Cause = _interopRequireWildcard(require("./cause.js"));
var effect_ = _interopRequireWildcard(require("./core-effect.js"));
var core = _interopRequireWildcard(require("./core.js"));
var metricBoundaries = _interopRequireWildcard(require("./metric/boundaries.js"));
var metricKey = _interopRequireWildcard(require("./metric/key.js"));
var metricKeyType = _interopRequireWildcard(require("./metric/keyType.js"));
var metricLabel = _interopRequireWildcard(require("./metric/label.js"));
var metricRegistry = _interopRequireWildcard(require("./metric/registry.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const MetricSymbolKey = "effect/Metric";
/** @internal */
const MetricTypeId = exports.MetricTypeId = /*#__PURE__*/Symbol.for(MetricSymbolKey);
const metricVariance = {
  /* c8 ignore next */
  _Type: _ => _,
  /* c8 ignore next */
  _In: _ => _,
  /* c8 ignore next */
  _Out: _ => _
};
/** @internal */
const globalMetricRegistry = exports.globalMetricRegistry = /*#__PURE__*/(0, _GlobalValue.globalValue)(/*#__PURE__*/Symbol.for("effect/Metric/globalMetricRegistry"), () => metricRegistry.make());
/** @internal */
const make = function (keyType, unsafeUpdate, unsafeValue, unsafeModify) {
  const metric = Object.assign(effect => core.tap(effect, a => update(metric, a)), {
    [MetricTypeId]: metricVariance,
    keyType,
    unsafeUpdate,
    unsafeValue,
    unsafeModify,
    register() {
      this.unsafeValue([]);
      return this;
    },
    pipe() {
      return (0, _Pipeable.pipeArguments)(this, arguments);
    }
  });
  return metric;
};
/** @internal */
exports.make = make;
const mapInput = exports.mapInput = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => make(self.keyType, (input, extraTags) => self.unsafeUpdate(f(input), extraTags), self.unsafeValue, (input, extraTags) => self.unsafeModify(f(input), extraTags)));
/** @internal */
const counter = (name, options) => fromMetricKey(metricKey.counter(name, options));
/** @internal */
exports.counter = counter;
const frequency = (name, options) => fromMetricKey(metricKey.frequency(name, options));
/** @internal */
exports.frequency = frequency;
const withConstantInput = exports.withConstantInput = /*#__PURE__*/(0, _Function.dual)(2, (self, input) => mapInput(self, () => input));
/** @internal */
const fromMetricKey = key => {
  let untaggedHook;
  const hookCache = new WeakMap();
  const hook = extraTags => {
    if (extraTags.length === 0) {
      if (untaggedHook !== undefined) {
        return untaggedHook;
      }
      untaggedHook = globalMetricRegistry.get(key);
      return untaggedHook;
    }
    let hook = hookCache.get(extraTags);
    if (hook !== undefined) {
      return hook;
    }
    hook = globalMetricRegistry.get(metricKey.taggedWithLabels(key, extraTags));
    hookCache.set(extraTags, hook);
    return hook;
  };
  return make(key.keyType, (input, extraTags) => hook(extraTags).update(input), extraTags => hook(extraTags).get(), (input, extraTags) => hook(extraTags).modify(input));
};
/** @internal */
exports.fromMetricKey = fromMetricKey;
const gauge = (name, options) => fromMetricKey(metricKey.gauge(name, options));
/** @internal */
exports.gauge = gauge;
const histogram = (name, boundaries, description) => fromMetricKey(metricKey.histogram(name, boundaries, description));
/* @internal */
exports.histogram = histogram;
const increment = self => metricKeyType.isCounterKey(self.keyType) ? update(self, self.keyType.bigint ? BigInt(1) : 1) : modify(self, self.keyType.bigint ? BigInt(1) : 1);
/* @internal */
exports.increment = increment;
const incrementBy = exports.incrementBy = /*#__PURE__*/(0, _Function.dual)(2, (self, amount) => metricKeyType.isCounterKey(self.keyType) ? update(self, amount) : modify(self, amount));
/** @internal */
const map = exports.map = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => make(self.keyType, self.unsafeUpdate, extraTags => f(self.unsafeValue(extraTags)), self.unsafeModify));
/** @internal */
const mapType = exports.mapType = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => make(f(self.keyType), self.unsafeUpdate, self.unsafeValue, self.unsafeModify));
/** @internal */
const modify = exports.modify = /*#__PURE__*/(0, _Function.dual)(2, (self, input) => core.fiberRefGetWith(core.currentMetricLabels, tags => core.sync(() => self.unsafeModify(input, tags))));
/* @internal */
const set = exports.set = /*#__PURE__*/(0, _Function.dual)(2, (self, value) => update(self, value));
/** @internal */
const succeed = out => make(void 0, _Function.constVoid, () => out, _Function.constVoid);
/** @internal */
exports.succeed = succeed;
const sync = evaluate => make(void 0, _Function.constVoid, evaluate, _Function.constVoid);
/** @internal */
exports.sync = sync;
const summary = options => withNow(summaryTimestamp(options));
/** @internal */
exports.summary = summary;
const summaryTimestamp = options => fromMetricKey(metricKey.summary(options));
/** @internal */
exports.summaryTimestamp = summaryTimestamp;
const tagged = exports.tagged = /*#__PURE__*/(0, _Function.dual)(3, (self, key, value) => taggedWithLabels(self, [metricLabel.make(key, value)]));
/** @internal */
const taggedWithLabelsInput = exports.taggedWithLabelsInput = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => map(make(self.keyType, (input, extraTags) => self.unsafeUpdate(input, Arr.union(f(input), extraTags)), self.unsafeValue, (input, extraTags) => self.unsafeModify(input, Arr.union(f(input), extraTags))), _Function.constVoid));
/** @internal */
const taggedWithLabels = exports.taggedWithLabels = /*#__PURE__*/(0, _Function.dual)(2, (self, extraTags) => {
  return make(self.keyType, (input, extraTags1) => self.unsafeUpdate(input, Arr.union(extraTags, extraTags1)), extraTags1 => self.unsafeValue(Arr.union(extraTags, extraTags1)), (input, extraTags1) => self.unsafeModify(input, Arr.union(extraTags, extraTags1)));
});
/** @internal */
const timer = (name, description) => {
  const boundaries = metricBoundaries.exponential({
    start: 0.5,
    factor: 2,
    count: 35
  });
  const base = (0, _Function.pipe)(histogram(name, boundaries, description), tagged("time_unit", "milliseconds"));
  return mapInput(base, Duration.toMillis);
};
/** @internal */
exports.timer = timer;
const timerWithBoundaries = (name, boundaries, description) => {
  const base = (0, _Function.pipe)(histogram(name, metricBoundaries.fromIterable(boundaries), description), tagged("time_unit", "milliseconds"));
  return mapInput(base, Duration.toMillis);
};
/* @internal */
exports.timerWithBoundaries = timerWithBoundaries;
const trackAll = exports.trackAll = /*#__PURE__*/(0, _Function.dual)(2, (self, input) => effect => core.matchCauseEffect(effect, {
  onFailure: cause => core.zipRight(update(self, input), core.failCause(cause)),
  onSuccess: value => core.zipRight(update(self, input), core.succeed(value))
}));
/* @internal */
const trackDefect = exports.trackDefect = /*#__PURE__*/(0, _Function.dual)(2, (self, metric) => trackDefectWith(self, metric, _Function.identity));
/* @internal */
const trackDefectWith = exports.trackDefectWith = /*#__PURE__*/(0, _Function.dual)(3, (self, metric, f) => {
  const updater = defect => update(metric, f(defect));
  return effect_.tapDefect(self, cause => core.forEachSequentialDiscard(Cause.defects(cause), updater));
});
/* @internal */
const trackDuration = exports.trackDuration = /*#__PURE__*/(0, _Function.dual)(2, (self, metric) => trackDurationWith(self, metric, _Function.identity));
/* @internal */
const trackDurationWith = exports.trackDurationWith = /*#__PURE__*/(0, _Function.dual)(3, (self, metric, f) => Clock.clockWith(clock => {
  const startTime = clock.unsafeCurrentTimeNanos();
  return core.tap(self, _ => {
    const endTime = clock.unsafeCurrentTimeNanos();
    const duration = Duration.nanos(endTime - startTime);
    return update(metric, f(duration));
  });
}));
/* @internal */
const trackError = exports.trackError = /*#__PURE__*/(0, _Function.dual)(2, (self, metric) => trackErrorWith(self, metric, a => a));
/* @internal */
const trackErrorWith = exports.trackErrorWith = /*#__PURE__*/(0, _Function.dual)(3, (self, metric, f) => {
  const updater = error => update(metric, f(error));
  return effect_.tapError(self, updater);
});
/* @internal */
const trackSuccess = exports.trackSuccess = /*#__PURE__*/(0, _Function.dual)(2, (self, metric) => trackSuccessWith(self, metric, a => a));
/* @internal */
const trackSuccessWith = exports.trackSuccessWith = /*#__PURE__*/(0, _Function.dual)(3, (self, metric, f) => {
  const updater = value => update(metric, f(value));
  return core.tap(self, updater);
});
/* @internal */
const update = exports.update = /*#__PURE__*/(0, _Function.dual)(2, (self, input) => core.fiberRefGetWith(core.currentMetricLabels, tags => core.sync(() => self.unsafeUpdate(input, tags))));
/* @internal */
const value = self => core.fiberRefGetWith(core.currentMetricLabels, tags => core.sync(() => self.unsafeValue(tags)));
/** @internal */
exports.value = value;
const withNow = self => mapInput(self, input => [input, Date.now()]);
/** @internal */
exports.withNow = withNow;
const zip = exports.zip = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => make([self.keyType, that.keyType], (input, extraTags) => {
  const [l, r] = input;
  self.unsafeUpdate(l, extraTags);
  that.unsafeUpdate(r, extraTags);
}, extraTags => [self.unsafeValue(extraTags), that.unsafeValue(extraTags)], (input, extraTags) => {
  const [l, r] = input;
  self.unsafeModify(l, extraTags);
  that.unsafeModify(r, extraTags);
}));
/** @internal */
const unsafeSnapshot = () => globalMetricRegistry.snapshot();
/** @internal */
exports.unsafeSnapshot = unsafeSnapshot;
const snapshot = exports.snapshot = /*#__PURE__*/core.sync(unsafeSnapshot);
//# sourceMappingURL=metric.js.map