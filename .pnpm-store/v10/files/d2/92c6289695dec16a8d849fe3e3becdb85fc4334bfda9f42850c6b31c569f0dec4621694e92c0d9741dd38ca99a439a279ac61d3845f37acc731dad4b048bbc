"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zip = exports.retry = exports.pollAndUpdate = exports.poll = exports.make = exports.launch = exports.collectAll = exports.MetricPollingTypeId = void 0;
var _Function = require("../../Function.js");
var _Pipeable = require("../../Pipeable.js");
var core = _interopRequireWildcard(require("../core.js"));
var metric = _interopRequireWildcard(require("../metric.js"));
var schedule_ = _interopRequireWildcard(require("../schedule.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const MetricPollingSymbolKey = "effect/MetricPolling";
/** @internal */
const MetricPollingTypeId = exports.MetricPollingTypeId = /*#__PURE__*/Symbol.for(MetricPollingSymbolKey);
/** @internal */
const make = (metric, poll) => {
  return {
    [MetricPollingTypeId]: MetricPollingTypeId,
    pipe() {
      return (0, _Pipeable.pipeArguments)(this, arguments);
    },
    metric,
    poll
  };
};
/** @internal */
exports.make = make;
const collectAll = iterable => {
  const metrics = Array.from(iterable);
  return {
    [MetricPollingTypeId]: MetricPollingTypeId,
    pipe() {
      return (0, _Pipeable.pipeArguments)(this, arguments);
    },
    metric: metric.make(Array.of(void 0), (inputs, extraTags) => {
      for (let i = 0; i < inputs.length; i++) {
        const pollingMetric = metrics[i];
        const input = (0, _Function.pipe)(inputs, x => x[i]);
        pollingMetric.metric.unsafeUpdate(input, extraTags);
      }
    }, extraTags => Array.from(metrics.map(pollingMetric => pollingMetric.metric.unsafeValue(extraTags))), (inputs, extraTags) => {
      for (let i = 0; i < inputs.length; i++) {
        const pollingMetric = metrics[i];
        const input = (0, _Function.pipe)(inputs, x => x[i]);
        pollingMetric.metric.unsafeModify(input, extraTags);
      }
    }),
    poll: core.forEachSequential(metrics, metric => metric.poll)
  };
};
/** @internal */
exports.collectAll = collectAll;
const launch = exports.launch = /*#__PURE__*/(0, _Function.dual)(2, (self, schedule) => (0, _Function.pipe)(pollAndUpdate(self), core.zipRight(metric.value(self.metric)), schedule_.scheduleForked(schedule)));
/** @internal */
const poll = self => self.poll;
/** @internal */
exports.poll = poll;
const pollAndUpdate = self => core.flatMap(self.poll, value => metric.update(self.metric, value));
/** @internal */
exports.pollAndUpdate = pollAndUpdate;
const retry = exports.retry = /*#__PURE__*/(0, _Function.dual)(2, (self, policy) => ({
  [MetricPollingTypeId]: MetricPollingTypeId,
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  },
  metric: self.metric,
  poll: schedule_.retry_Effect(self.poll, policy)
}));
/** @internal */
const zip = exports.zip = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => ({
  [MetricPollingTypeId]: MetricPollingTypeId,
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  },
  metric: (0, _Function.pipe)(self.metric, metric.zip(that.metric)),
  poll: core.zip(self.poll, that.poll)
}));
//# sourceMappingURL=polling.js.map