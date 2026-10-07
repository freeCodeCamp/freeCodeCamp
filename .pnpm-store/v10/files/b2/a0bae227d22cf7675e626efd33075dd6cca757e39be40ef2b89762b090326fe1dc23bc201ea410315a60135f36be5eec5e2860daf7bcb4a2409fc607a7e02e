"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.linear = exports.isMetricBoundaries = exports.fromIterable = exports.exponential = exports.MetricBoundariesTypeId = void 0;
var Arr = _interopRequireWildcard(require("../../Array.js"));
var Chunk = _interopRequireWildcard(require("../../Chunk.js"));
var Equal = _interopRequireWildcard(require("../../Equal.js"));
var _Function = require("../../Function.js");
var Hash = _interopRequireWildcard(require("../../Hash.js"));
var _Pipeable = require("../../Pipeable.js");
var _Predicate = require("../../Predicate.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const MetricBoundariesSymbolKey = "effect/MetricBoundaries";
/** @internal */
const MetricBoundariesTypeId = exports.MetricBoundariesTypeId = /*#__PURE__*/Symbol.for(MetricBoundariesSymbolKey);
/** @internal */
class MetricBoundariesImpl {
  values;
  [MetricBoundariesTypeId] = MetricBoundariesTypeId;
  constructor(values) {
    this.values = values;
    this._hash = (0, _Function.pipe)(Hash.string(MetricBoundariesSymbolKey), Hash.combine(Hash.array(this.values)));
  }
  _hash;
  [Hash.symbol]() {
    return this._hash;
  }
  [Equal.symbol](u) {
    return isMetricBoundaries(u) && Equal.equals(this.values, u.values);
  }
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
}
/** @internal */
const isMetricBoundaries = u => (0, _Predicate.hasProperty)(u, MetricBoundariesTypeId);
/** @internal */
exports.isMetricBoundaries = isMetricBoundaries;
const fromIterable = iterable => {
  const values = (0, _Function.pipe)(iterable, Arr.appendAll(Chunk.of(Number.POSITIVE_INFINITY)), Arr.dedupe);
  return new MetricBoundariesImpl(values);
};
/** @internal */
exports.fromIterable = fromIterable;
const linear = options => (0, _Function.pipe)(Arr.makeBy(options.count - 1, i => options.start + i * options.width), Chunk.unsafeFromArray, fromIterable);
/** @internal */
exports.linear = linear;
const exponential = options => (0, _Function.pipe)(Arr.makeBy(options.count - 1, i => options.start * Math.pow(options.factor, i)), Chunk.unsafeFromArray, fromIterable);
exports.exponential = exponential;
//# sourceMappingURL=boundaries.js.map