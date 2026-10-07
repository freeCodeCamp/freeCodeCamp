"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unsafeMake = exports.make = exports.MetricPairTypeId = void 0;
var _Pipeable = require("../../Pipeable.js");
/** @internal */
const MetricPairSymbolKey = "effect/MetricPair";
/** @internal */
const MetricPairTypeId = exports.MetricPairTypeId = /*#__PURE__*/Symbol.for(MetricPairSymbolKey);
const metricPairVariance = {
  /* c8 ignore next */
  _Type: _ => _
};
/** @internal */
const make = (metricKey, metricState) => {
  return {
    [MetricPairTypeId]: metricPairVariance,
    metricKey,
    metricState,
    pipe() {
      return (0, _Pipeable.pipeArguments)(this, arguments);
    }
  };
};
/** @internal */
exports.make = make;
const unsafeMake = (metricKey, metricState) => {
  return {
    [MetricPairTypeId]: metricPairVariance,
    metricKey,
    metricState,
    pipe() {
      return (0, _Pipeable.pipeArguments)(this, arguments);
    }
  };
};
exports.unsafeMake = unsafeMake;
//# sourceMappingURL=pair.js.map