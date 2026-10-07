import * as Equal from "../../Equal.js";
import * as Hash from "../../Hash.js";
import { pipeArguments } from "../../Pipeable.js";
import { hasProperty } from "../../Predicate.js";
/** @internal */
const MetricLabelSymbolKey = "effect/MetricLabel";
/** @internal */
export const MetricLabelTypeId = /*#__PURE__*/Symbol.for(MetricLabelSymbolKey);
/** @internal */
class MetricLabelImpl {
  key;
  value;
  [MetricLabelTypeId] = MetricLabelTypeId;
  _hash;
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this._hash = Hash.string(MetricLabelSymbolKey + this.key + this.value);
  }
  [Hash.symbol]() {
    return this._hash;
  }
  [Equal.symbol](that) {
    return isMetricLabel(that) && this.key === that.key && this.value === that.value;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
}
/** @internal */
export const make = (key, value) => {
  return new MetricLabelImpl(key, value);
};
/** @internal */
export const isMetricLabel = u => hasProperty(u, MetricLabelTypeId);
//# sourceMappingURL=label.js.map