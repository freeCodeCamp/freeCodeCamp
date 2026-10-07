import { pipeArguments } from "../../Pipeable.js";
/** @internal */
const MetricPairSymbolKey = "effect/MetricPair";
/** @internal */
export const MetricPairTypeId = /*#__PURE__*/Symbol.for(MetricPairSymbolKey);
const metricPairVariance = {
  /* c8 ignore next */
  _Type: _ => _
};
/** @internal */
export const make = (metricKey, metricState) => {
  return {
    [MetricPairTypeId]: metricPairVariance,
    metricKey,
    metricState,
    pipe() {
      return pipeArguments(this, arguments);
    }
  };
};
/** @internal */
export const unsafeMake = (metricKey, metricState) => {
  return {
    [MetricPairTypeId]: metricPairVariance,
    metricKey,
    metricState,
    pipe() {
      return pipeArguments(this, arguments);
    }
  };
};
//# sourceMappingURL=pair.js.map