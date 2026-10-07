"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.union = exports.size = exports.min = exports.max = exports.make = exports.lessThan = exports.isNonEmpty = exports.isEmpty = exports.intersect = exports.empty = exports.before = exports.after = exports.IntervalTypeId = void 0;
var Duration = _interopRequireWildcard(require("../../Duration.js"));
var _Function = require("../../Function.js");
var Option = _interopRequireWildcard(require("../../Option.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const IntervalSymbolKey = "effect/ScheduleInterval";
/** @internal */
const IntervalTypeId = exports.IntervalTypeId = /*#__PURE__*/Symbol.for(IntervalSymbolKey);
/** @internal */
const empty = exports.empty = {
  [IntervalTypeId]: IntervalTypeId,
  startMillis: 0,
  endMillis: 0
};
/** @internal */
const make = (startMillis, endMillis) => {
  if (startMillis > endMillis) {
    return empty;
  }
  return {
    [IntervalTypeId]: IntervalTypeId,
    startMillis,
    endMillis
  };
};
/** @internal */
exports.make = make;
const lessThan = exports.lessThan = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => min(self, that) === self);
/** @internal */
const min = exports.min = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => {
  if (self.endMillis <= that.startMillis) return self;
  if (that.endMillis <= self.startMillis) return that;
  if (self.startMillis < that.startMillis) return self;
  if (that.startMillis < self.startMillis) return that;
  if (self.endMillis <= that.endMillis) return self;
  return that;
});
/** @internal */
const max = exports.max = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => min(self, that) === self ? that : self);
/** @internal */
const isEmpty = self => {
  return self.startMillis >= self.endMillis;
};
/** @internal */
exports.isEmpty = isEmpty;
const isNonEmpty = self => {
  return !isEmpty(self);
};
/** @internal */
exports.isNonEmpty = isNonEmpty;
const intersect = exports.intersect = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => {
  const start = Math.max(self.startMillis, that.startMillis);
  const end = Math.min(self.endMillis, that.endMillis);
  return make(start, end);
});
/** @internal */
const size = self => {
  return Duration.millis(self.endMillis - self.startMillis);
};
/** @internal */
exports.size = size;
const union = exports.union = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => {
  const start = Math.max(self.startMillis, that.startMillis);
  const end = Math.min(self.endMillis, that.endMillis);
  return start < end ? Option.none() : Option.some(make(start, end));
});
/** @internal */
const after = startMilliseconds => {
  return make(startMilliseconds, Number.POSITIVE_INFINITY);
};
/** @internal */
exports.after = after;
const before = endMilliseconds => {
  return make(Number.NEGATIVE_INFINITY, endMilliseconds);
};
exports.before = before;
//# sourceMappingURL=interval.js.map