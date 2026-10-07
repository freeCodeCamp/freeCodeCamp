import * as Arr from "../Array.js";
import * as Clock from "../Clock.js";
import * as Duration from "../Duration.js";
import { constVoid, dual, identity, pipe } from "../Function.js";
import { globalValue } from "../GlobalValue.js";
import { pipeArguments } from "../Pipeable.js";
import * as Cause from "./cause.js";
import * as effect_ from "./core-effect.js";
import * as core from "./core.js";
import * as metricBoundaries from "./metric/boundaries.js";
import * as metricKey from "./metric/key.js";
import * as metricKeyType from "./metric/keyType.js";
import * as metricLabel from "./metric/label.js";
import * as metricRegistry from "./metric/registry.js";
/** @internal */
const MetricSymbolKey = "effect/Metric";
/** @internal */
export const MetricTypeId = /*#__PURE__*/Symbol.for(MetricSymbolKey);
const metricVariance = {
  /* c8 ignore next */
  _Type: _ => _,
  /* c8 ignore next */
  _In: _ => _,
  /* c8 ignore next */
  _Out: _ => _
};
/** @internal */
export const globalMetricRegistry = /*#__PURE__*/globalValue(/*#__PURE__*/Symbol.for("effect/Metric/globalMetricRegistry"), () => metricRegistry.make());
/** @internal */
export const make = function (keyType, unsafeUpdate, unsafeValue, unsafeModify) {
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
      return pipeArguments(this, arguments);
    }
  });
  return metric;
};
/** @internal */
export const mapInput = /*#__PURE__*/dual(2, (self, f) => make(self.keyType, (input, extraTags) => self.unsafeUpdate(f(input), extraTags), self.unsafeValue, (input, extraTags) => self.unsafeModify(f(input), extraTags)));
/** @internal */
export const counter = (name, options) => fromMetricKey(metricKey.counter(name, options));
/** @internal */
export const frequency = (name, options) => fromMetricKey(metricKey.frequency(name, options));
/** @internal */
export const withConstantInput = /*#__PURE__*/dual(2, (self, input) => mapInput(self, () => input));
/** @internal */
export const fromMetricKey = key => {
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
export const gauge = (name, options) => fromMetricKey(metricKey.gauge(name, options));
/** @internal */
export const histogram = (name, boundaries, description) => fromMetricKey(metricKey.histogram(name, boundaries, description));
/* @internal */
export const increment = self => metricKeyType.isCounterKey(self.keyType) ? update(self, self.keyType.bigint ? BigInt(1) : 1) : modify(self, self.keyType.bigint ? BigInt(1) : 1);
/* @internal */
export const incrementBy = /*#__PURE__*/dual(2, (self, amount) => metricKeyType.isCounterKey(self.keyType) ? update(self, amount) : modify(self, amount));
/** @internal */
export const map = /*#__PURE__*/dual(2, (self, f) => make(self.keyType, self.unsafeUpdate, extraTags => f(self.unsafeValue(extraTags)), self.unsafeModify));
/** @internal */
export const mapType = /*#__PURE__*/dual(2, (self, f) => make(f(self.keyType), self.unsafeUpdate, self.unsafeValue, self.unsafeModify));
/** @internal */
export const modify = /*#__PURE__*/dual(2, (self, input) => core.fiberRefGetWith(core.currentMetricLabels, tags => core.sync(() => self.unsafeModify(input, tags))));
/* @internal */
export const set = /*#__PURE__*/dual(2, (self, value) => update(self, value));
/** @internal */
export const succeed = out => make(void 0, constVoid, () => out, constVoid);
/** @internal */
export const sync = evaluate => make(void 0, constVoid, evaluate, constVoid);
/** @internal */
export const summary = options => withNow(summaryTimestamp(options));
/** @internal */
export const summaryTimestamp = options => fromMetricKey(metricKey.summary(options));
/** @internal */
export const tagged = /*#__PURE__*/dual(3, (self, key, value) => taggedWithLabels(self, [metricLabel.make(key, value)]));
/** @internal */
export const taggedWithLabelsInput = /*#__PURE__*/dual(2, (self, f) => map(make(self.keyType, (input, extraTags) => self.unsafeUpdate(input, Arr.union(f(input), extraTags)), self.unsafeValue, (input, extraTags) => self.unsafeModify(input, Arr.union(f(input), extraTags))), constVoid));
/** @internal */
export const taggedWithLabels = /*#__PURE__*/dual(2, (self, extraTags) => {
  return make(self.keyType, (input, extraTags1) => self.unsafeUpdate(input, Arr.union(extraTags, extraTags1)), extraTags1 => self.unsafeValue(Arr.union(extraTags, extraTags1)), (input, extraTags1) => self.unsafeModify(input, Arr.union(extraTags, extraTags1)));
});
/** @internal */
export const timer = (name, description) => {
  const boundaries = metricBoundaries.exponential({
    start: 0.5,
    factor: 2,
    count: 35
  });
  const base = pipe(histogram(name, boundaries, description), tagged("time_unit", "milliseconds"));
  return mapInput(base, Duration.toMillis);
};
/** @internal */
export const timerWithBoundaries = (name, boundaries, description) => {
  const base = pipe(histogram(name, metricBoundaries.fromIterable(boundaries), description), tagged("time_unit", "milliseconds"));
  return mapInput(base, Duration.toMillis);
};
/* @internal */
export const trackAll = /*#__PURE__*/dual(2, (self, input) => effect => core.matchCauseEffect(effect, {
  onFailure: cause => core.zipRight(update(self, input), core.failCause(cause)),
  onSuccess: value => core.zipRight(update(self, input), core.succeed(value))
}));
/* @internal */
export const trackDefect = /*#__PURE__*/dual(2, (self, metric) => trackDefectWith(self, metric, identity));
/* @internal */
export const trackDefectWith = /*#__PURE__*/dual(3, (self, metric, f) => {
  const updater = defect => update(metric, f(defect));
  return effect_.tapDefect(self, cause => core.forEachSequentialDiscard(Cause.defects(cause), updater));
});
/* @internal */
export const trackDuration = /*#__PURE__*/dual(2, (self, metric) => trackDurationWith(self, metric, identity));
/* @internal */
export const trackDurationWith = /*#__PURE__*/dual(3, (self, metric, f) => Clock.clockWith(clock => {
  const startTime = clock.unsafeCurrentTimeNanos();
  return core.tap(self, _ => {
    const endTime = clock.unsafeCurrentTimeNanos();
    const duration = Duration.nanos(endTime - startTime);
    return update(metric, f(duration));
  });
}));
/* @internal */
export const trackError = /*#__PURE__*/dual(2, (self, metric) => trackErrorWith(self, metric, a => a));
/* @internal */
export const trackErrorWith = /*#__PURE__*/dual(3, (self, metric, f) => {
  const updater = error => update(metric, f(error));
  return effect_.tapError(self, updater);
});
/* @internal */
export const trackSuccess = /*#__PURE__*/dual(2, (self, metric) => trackSuccessWith(self, metric, a => a));
/* @internal */
export const trackSuccessWith = /*#__PURE__*/dual(3, (self, metric, f) => {
  const updater = value => update(metric, f(value));
  return core.tap(self, updater);
});
/* @internal */
export const update = /*#__PURE__*/dual(2, (self, input) => core.fiberRefGetWith(core.currentMetricLabels, tags => core.sync(() => self.unsafeUpdate(input, tags))));
/* @internal */
export const value = self => core.fiberRefGetWith(core.currentMetricLabels, tags => core.sync(() => self.unsafeValue(tags)));
/** @internal */
export const withNow = self => mapInput(self, input => [input, Date.now()]);
/** @internal */
export const zip = /*#__PURE__*/dual(2, (self, that) => make([self.keyType, that.keyType], (input, extraTags) => {
  const [l, r] = input;
  self.unsafeUpdate(l, extraTags);
  that.unsafeUpdate(r, extraTags);
}, extraTags => [self.unsafeValue(extraTags), that.unsafeValue(extraTags)], (input, extraTags) => {
  const [l, r] = input;
  self.unsafeModify(l, extraTags);
  that.unsafeModify(r, extraTags);
}));
/** @internal */
export const unsafeSnapshot = () => globalMetricRegistry.snapshot();
/** @internal */
export const snapshot = /*#__PURE__*/core.sync(unsafeSnapshot);
//# sourceMappingURL=metric.js.map