import * as Duration from "../../Duration.js";
import { dual } from "../../Function.js";
import * as Option from "../../Option.js";
/** @internal */
const IntervalSymbolKey = "effect/ScheduleInterval";
/** @internal */
export const IntervalTypeId = /*#__PURE__*/Symbol.for(IntervalSymbolKey);
/** @internal */
export const empty = {
  [IntervalTypeId]: IntervalTypeId,
  startMillis: 0,
  endMillis: 0
};
/** @internal */
export const make = (startMillis, endMillis) => {
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
export const lessThan = /*#__PURE__*/dual(2, (self, that) => min(self, that) === self);
/** @internal */
export const min = /*#__PURE__*/dual(2, (self, that) => {
  if (self.endMillis <= that.startMillis) return self;
  if (that.endMillis <= self.startMillis) return that;
  if (self.startMillis < that.startMillis) return self;
  if (that.startMillis < self.startMillis) return that;
  if (self.endMillis <= that.endMillis) return self;
  return that;
});
/** @internal */
export const max = /*#__PURE__*/dual(2, (self, that) => min(self, that) === self ? that : self);
/** @internal */
export const isEmpty = self => {
  return self.startMillis >= self.endMillis;
};
/** @internal */
export const isNonEmpty = self => {
  return !isEmpty(self);
};
/** @internal */
export const intersect = /*#__PURE__*/dual(2, (self, that) => {
  const start = Math.max(self.startMillis, that.startMillis);
  const end = Math.min(self.endMillis, that.endMillis);
  return make(start, end);
});
/** @internal */
export const size = self => {
  return Duration.millis(self.endMillis - self.startMillis);
};
/** @internal */
export const union = /*#__PURE__*/dual(2, (self, that) => {
  const start = Math.max(self.startMillis, that.startMillis);
  const end = Math.min(self.endMillis, that.endMillis);
  return start < end ? Option.none() : Option.some(make(start, end));
});
/** @internal */
export const after = startMilliseconds => {
  return make(startMilliseconds, Number.POSITIVE_INFINITY);
};
/** @internal */
export const before = endMilliseconds => {
  return make(Number.NEGATIVE_INFINITY, endMilliseconds);
};
//# sourceMappingURL=interval.js.map