"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.make = exports.isMetricLabel = exports.MetricLabelTypeId = void 0;
var Equal = _interopRequireWildcard(require("../../Equal.js"));
var Hash = _interopRequireWildcard(require("../../Hash.js"));
var _Pipeable = require("../../Pipeable.js");
var _Predicate = require("../../Predicate.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const MetricLabelSymbolKey = "effect/MetricLabel";
/** @internal */
const MetricLabelTypeId = exports.MetricLabelTypeId = /*#__PURE__*/Symbol.for(MetricLabelSymbolKey);
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
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
}
/** @internal */
const make = (key, value) => {
  return new MetricLabelImpl(key, value);
};
/** @internal */
exports.make = make;
const isMetricLabel = u => (0, _Predicate.hasProperty)(u, MetricLabelTypeId);
exports.isMetricLabel = isMetricLabel;
//# sourceMappingURL=label.js.map