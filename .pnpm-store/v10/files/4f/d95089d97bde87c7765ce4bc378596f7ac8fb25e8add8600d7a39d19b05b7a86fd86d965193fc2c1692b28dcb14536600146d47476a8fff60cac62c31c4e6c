import { dual, pipe } from "../../Function.js";
import { pipeArguments } from "../../Pipeable.js";
import * as core from "../core.js";
import * as metric from "../metric.js";
import * as schedule_ from "../schedule.js";
/** @internal */
const MetricPollingSymbolKey = "effect/MetricPolling";
/** @internal */
export const MetricPollingTypeId = /*#__PURE__*/Symbol.for(MetricPollingSymbolKey);
/** @internal */
export const make = (metric, poll) => {
  return {
    [MetricPollingTypeId]: MetricPollingTypeId,
    pipe() {
      return pipeArguments(this, arguments);
    },
    metric,
    poll
  };
};
/** @internal */
export const collectAll = iterable => {
  const metrics = Array.from(iterable);
  return {
    [MetricPollingTypeId]: MetricPollingTypeId,
    pipe() {
      return pipeArguments(this, arguments);
    },
    metric: metric.make(Array.of(void 0), (inputs, extraTags) => {
      for (let i = 0; i < inputs.length; i++) {
        const pollingMetric = metrics[i];
        const input = pipe(inputs, x => x[i]);
        pollingMetric.metric.unsafeUpdate(input, extraTags);
      }
    }, extraTags => Array.from(metrics.map(pollingMetric => pollingMetric.metric.unsafeValue(extraTags))), (inputs, extraTags) => {
      for (let i = 0; i < inputs.length; i++) {
        const pollingMetric = metrics[i];
        const input = pipe(inputs, x => x[i]);
        pollingMetric.metric.unsafeModify(input, extraTags);
      }
    }),
    poll: core.forEachSequential(metrics, metric => metric.poll)
  };
};
/** @internal */
export const launch = /*#__PURE__*/dual(2, (self, schedule) => pipe(pollAndUpdate(self), core.zipRight(metric.value(self.metric)), schedule_.scheduleForked(schedule)));
/** @internal */
export const poll = self => self.poll;
/** @internal */
export const pollAndUpdate = self => core.flatMap(self.poll, value => metric.update(self.metric, value));
/** @internal */
export const retry = /*#__PURE__*/dual(2, (self, policy) => ({
  [MetricPollingTypeId]: MetricPollingTypeId,
  pipe() {
    return pipeArguments(this, arguments);
  },
  metric: self.metric,
  poll: schedule_.retry_Effect(self.poll, policy)
}));
/** @internal */
export const zip = /*#__PURE__*/dual(2, (self, that) => ({
  [MetricPollingTypeId]: MetricPollingTypeId,
  pipe() {
    return pipeArguments(this, arguments);
  },
  metric: pipe(self.metric, metric.zip(that.metric)),
  poll: core.zip(self.poll, that.poll)
}));
//# sourceMappingURL=polling.js.map