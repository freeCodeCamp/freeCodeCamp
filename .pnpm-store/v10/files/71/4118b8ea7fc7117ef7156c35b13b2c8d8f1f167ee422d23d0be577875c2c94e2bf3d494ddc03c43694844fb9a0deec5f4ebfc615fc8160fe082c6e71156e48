"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.taggedWithLabels = exports.tagged = exports.summary = exports.isMetricKey = exports.histogram = exports.gauge = exports.frequency = exports.counter = exports.MetricKeyTypeId = void 0;
var Arr = _interopRequireWildcard(require("../../Array.js"));
var Equal = _interopRequireWildcard(require("../../Equal.js"));
var _Function = require("../../Function.js");
var Hash = _interopRequireWildcard(require("../../Hash.js"));
var Option = _interopRequireWildcard(require("../../Option.js"));
var _Pipeable = require("../../Pipeable.js");
var _Predicate = require("../../Predicate.js");
var metricKeyType = _interopRequireWildcard(require("./keyType.js"));
var metricLabel = _interopRequireWildcard(require("./label.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const MetricKeySymbolKey = "effect/MetricKey";
/** @internal */
const MetricKeyTypeId = exports.MetricKeyTypeId = /*#__PURE__*/Symbol.for(MetricKeySymbolKey);
const metricKeyVariance = {
  /* c8 ignore next */
  _Type: _ => _
};
const arrayEquivilence = /*#__PURE__*/Arr.getEquivalence(Equal.equals);
/** @internal */
class MetricKeyImpl {
  name;
  keyType;
  description;
  tags;
  [MetricKeyTypeId] = metricKeyVariance;
  constructor(name, keyType, description, tags = []) {
    this.name = name;
    this.keyType = keyType;
    this.description = description;
    this.tags = tags;
    this._hash = (0, _Function.pipe)(Hash.string(this.name + this.description), Hash.combine(Hash.hash(this.keyType)), Hash.combine(Hash.array(this.tags)));
  }
  _hash;
  [Hash.symbol]() {
    return this._hash;
  }
  [Equal.symbol](u) {
    return isMetricKey(u) && this.name === u.name && Equal.equals(this.keyType, u.keyType) && Equal.equals(this.description, u.description) && arrayEquivilence(this.tags, u.tags);
  }
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
}
/** @internal */
const isMetricKey = u => (0, _Predicate.hasProperty)(u, MetricKeyTypeId);
/** @internal */
exports.isMetricKey = isMetricKey;
const counter = (name, options) => new MetricKeyImpl(name, metricKeyType.counter(options), Option.fromNullable(options?.description));
/** @internal */
exports.counter = counter;
const frequency = (name, options) => new MetricKeyImpl(name, metricKeyType.frequency(options), Option.fromNullable(options?.description));
/** @internal */
exports.frequency = frequency;
const gauge = (name, options) => new MetricKeyImpl(name, metricKeyType.gauge(options), Option.fromNullable(options?.description));
/** @internal */
exports.gauge = gauge;
const histogram = (name, boundaries, description) => new MetricKeyImpl(name, metricKeyType.histogram(boundaries), Option.fromNullable(description));
/** @internal */
exports.histogram = histogram;
const summary = options => new MetricKeyImpl(options.name, metricKeyType.summary(options), Option.fromNullable(options.description));
/** @internal */
exports.summary = summary;
const tagged = exports.tagged = /*#__PURE__*/(0, _Function.dual)(3, (self, key, value) => taggedWithLabels(self, [metricLabel.make(key, value)]));
/** @internal */
const taggedWithLabels = exports.taggedWithLabels = /*#__PURE__*/(0, _Function.dual)(2, (self, extraTags) => extraTags.length === 0 ? self : new MetricKeyImpl(self.name, self.keyType, self.description, Arr.union(self.tags, extraTags)));
//# sourceMappingURL=key.js.map