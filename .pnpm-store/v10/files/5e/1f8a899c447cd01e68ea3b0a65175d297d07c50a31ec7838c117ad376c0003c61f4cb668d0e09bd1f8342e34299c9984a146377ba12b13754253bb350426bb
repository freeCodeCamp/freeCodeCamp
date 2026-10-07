"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.union = exports.start = exports.max = exports.make = exports.lessThan = exports.isNonEmpty = exports.intersect = exports.fromIterable = exports.end = exports.empty = exports.IntervalsTypeId = void 0;
var Chunk = _interopRequireWildcard(require("../../Chunk.js"));
var _Function = require("../../Function.js");
var Option = _interopRequireWildcard(require("../../Option.js"));
var Interval = _interopRequireWildcard(require("../../ScheduleInterval.js"));
var _errors = require("../errors.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const IntervalsSymbolKey = "effect/ScheduleIntervals";
/** @internal */
const IntervalsTypeId = exports.IntervalsTypeId = /*#__PURE__*/Symbol.for(IntervalsSymbolKey);
/** @internal */
const make = intervals => {
  return {
    [IntervalsTypeId]: IntervalsTypeId,
    intervals
  };
};
/** @internal */
exports.make = make;
const empty = exports.empty = /*#__PURE__*/make(/*#__PURE__*/Chunk.empty());
/** @internal */
const fromIterable = intervals => Array.from(intervals).reduce((intervals, interval) => (0, _Function.pipe)(intervals, union(make(Chunk.of(interval)))), empty);
/** @internal */
exports.fromIterable = fromIterable;
const union = exports.union = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => {
  if (!Chunk.isNonEmpty(that.intervals)) {
    return self;
  }
  if (!Chunk.isNonEmpty(self.intervals)) {
    return that;
  }
  if (Chunk.headNonEmpty(self.intervals).startMillis < Chunk.headNonEmpty(that.intervals).startMillis) {
    return unionLoop(Chunk.tailNonEmpty(self.intervals), that.intervals, Chunk.headNonEmpty(self.intervals), Chunk.empty());
  }
  return unionLoop(self.intervals, Chunk.tailNonEmpty(that.intervals), Chunk.headNonEmpty(that.intervals), Chunk.empty());
});
/** @internal */
const unionLoop = (_self, _that, _interval, _acc) => {
  let self = _self;
  let that = _that;
  let interval = _interval;
  let acc = _acc;
  while (Chunk.isNonEmpty(self) || Chunk.isNonEmpty(that)) {
    if (!Chunk.isNonEmpty(self) && Chunk.isNonEmpty(that)) {
      if (interval.endMillis < Chunk.headNonEmpty(that).startMillis) {
        acc = (0, _Function.pipe)(acc, Chunk.prepend(interval));
        interval = Chunk.headNonEmpty(that);
        that = Chunk.tailNonEmpty(that);
        self = Chunk.empty();
      } else {
        interval = Interval.make(interval.startMillis, Chunk.headNonEmpty(that).endMillis);
        that = Chunk.tailNonEmpty(that);
        self = Chunk.empty();
      }
    } else if (Chunk.isNonEmpty(self) && Chunk.isEmpty(that)) {
      if (interval.endMillis < Chunk.headNonEmpty(self).startMillis) {
        acc = (0, _Function.pipe)(acc, Chunk.prepend(interval));
        interval = Chunk.headNonEmpty(self);
        that = Chunk.empty();
        self = Chunk.tailNonEmpty(self);
      } else {
        interval = Interval.make(interval.startMillis, Chunk.headNonEmpty(self).endMillis);
        that = Chunk.empty();
        self = Chunk.tailNonEmpty(self);
      }
    } else if (Chunk.isNonEmpty(self) && Chunk.isNonEmpty(that)) {
      if (Chunk.headNonEmpty(self).startMillis < Chunk.headNonEmpty(that).startMillis) {
        if (interval.endMillis < Chunk.headNonEmpty(self).startMillis) {
          acc = (0, _Function.pipe)(acc, Chunk.prepend(interval));
          interval = Chunk.headNonEmpty(self);
          self = Chunk.tailNonEmpty(self);
        } else {
          interval = Interval.make(interval.startMillis, Chunk.headNonEmpty(self).endMillis);
          self = Chunk.tailNonEmpty(self);
        }
      } else if (interval.endMillis < Chunk.headNonEmpty(that).startMillis) {
        acc = (0, _Function.pipe)(acc, Chunk.prepend(interval));
        interval = Chunk.headNonEmpty(that);
        that = Chunk.tailNonEmpty(that);
      } else {
        interval = Interval.make(interval.startMillis, Chunk.headNonEmpty(that).endMillis);
        that = Chunk.tailNonEmpty(that);
      }
    } else {
      throw new Error((0, _errors.getBugErrorMessage)("Intervals.unionLoop"));
    }
  }
  return make((0, _Function.pipe)(acc, Chunk.prepend(interval), Chunk.reverse));
};
/** @internal */
const intersect = exports.intersect = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => intersectLoop(self.intervals, that.intervals, Chunk.empty()));
/** @internal */
const intersectLoop = (_left, _right, _acc) => {
  let left = _left;
  let right = _right;
  let acc = _acc;
  while (Chunk.isNonEmpty(left) && Chunk.isNonEmpty(right)) {
    const interval = (0, _Function.pipe)(Chunk.headNonEmpty(left), Interval.intersect(Chunk.headNonEmpty(right)));
    const intervals = Interval.isEmpty(interval) ? acc : (0, _Function.pipe)(acc, Chunk.prepend(interval));
    if ((0, _Function.pipe)(Chunk.headNonEmpty(left), Interval.lessThan(Chunk.headNonEmpty(right)))) {
      left = Chunk.tailNonEmpty(left);
    } else {
      right = Chunk.tailNonEmpty(right);
    }
    acc = intervals;
  }
  return make(Chunk.reverse(acc));
};
/** @internal */
const start = self => {
  return (0, _Function.pipe)(self.intervals, Chunk.head, Option.getOrElse(() => Interval.empty)).startMillis;
};
/** @internal */
exports.start = start;
const end = self => {
  return (0, _Function.pipe)(self.intervals, Chunk.head, Option.getOrElse(() => Interval.empty)).endMillis;
};
/** @internal */
exports.end = end;
const lessThan = exports.lessThan = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => start(self) < start(that));
/** @internal */
const isNonEmpty = self => {
  return Chunk.isNonEmpty(self.intervals);
};
/** @internal */
exports.isNonEmpty = isNonEmpty;
const max = exports.max = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => lessThan(self, that) ? that : self);
//# sourceMappingURL=intervals.js.map