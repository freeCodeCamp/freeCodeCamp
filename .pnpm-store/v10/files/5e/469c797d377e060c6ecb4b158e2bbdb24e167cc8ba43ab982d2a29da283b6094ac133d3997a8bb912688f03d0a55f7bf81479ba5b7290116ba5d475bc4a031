/**
 * @since 2.0.0
 */
import * as Equal from "./Equal.js";
import { dual } from "./Function.js";
import * as Hash from "./Hash.js";
import { NodeInspectSymbol } from "./Inspectable.js";
import * as Option from "./Option.js";
import * as order from "./Order.js";
import { pipeArguments } from "./Pipeable.js";
import { hasProperty, isBigInt, isNumber, isString } from "./Predicate.js";
const TypeId = /*#__PURE__*/Symbol.for("effect/Duration");
const bigint0 = /*#__PURE__*/BigInt(0);
const bigint24 = /*#__PURE__*/BigInt(24);
const bigint60 = /*#__PURE__*/BigInt(60);
const bigint1e3 = /*#__PURE__*/BigInt(1_000);
const bigint1e6 = /*#__PURE__*/BigInt(1_000_000);
const bigint1e9 = /*#__PURE__*/BigInt(1_000_000_000);
const DURATION_REGEX = /^(-?\d+(?:\.\d+)?)\s+(nanos?|micros?|millis?|seconds?|minutes?|hours?|days?|weeks?)$/;
/**
 * @since 2.0.0
 */
export const decode = input => {
  if (isDuration(input)) {
    return input;
  } else if (isNumber(input)) {
    return millis(input);
  } else if (isBigInt(input)) {
    return nanos(input);
  } else if (Array.isArray(input) && input.length === 2 && input.every(isNumber)) {
    if (input[0] === -Infinity || input[1] === -Infinity || Number.isNaN(input[0]) || Number.isNaN(input[1])) {
      return zero;
    }
    if (input[0] === Infinity || input[1] === Infinity) {
      return infinity;
    }
    return nanos(BigInt(Math.round(input[0] * 1_000_000_000)) + BigInt(Math.round(input[1])));
  } else if (isString(input)) {
    const match = DURATION_REGEX.exec(input);
    if (match) {
      const [_, valueStr, unit] = match;
      const value = Number(valueStr);
      switch (unit) {
        case "nano":
        case "nanos":
          return nanos(BigInt(valueStr));
        case "micro":
        case "micros":
          return micros(BigInt(valueStr));
        case "milli":
        case "millis":
          return millis(value);
        case "second":
        case "seconds":
          return seconds(value);
        case "minute":
        case "minutes":
          return minutes(value);
        case "hour":
        case "hours":
          return hours(value);
        case "day":
        case "days":
          return days(value);
        case "week":
        case "weeks":
          return weeks(value);
      }
    }
  }
  throw new Error("Invalid DurationInput");
};
/**
 * @since 2.5.0
 */
export const decodeUnknown = /*#__PURE__*/Option.liftThrowable(decode);
const zeroValue = {
  _tag: "Millis",
  millis: 0
};
const infinityValue = {
  _tag: "Infinity"
};
const DurationProto = {
  [TypeId]: TypeId,
  [Hash.symbol]() {
    return Hash.cached(this, Hash.structure(this.value));
  },
  [Equal.symbol](that) {
    return isDuration(that) && equals(this, that);
  },
  toString() {
    return `Duration(${format(this)})`;
  },
  toJSON() {
    switch (this.value._tag) {
      case "Millis":
        return {
          _id: "Duration",
          _tag: "Millis",
          millis: this.value.millis
        };
      case "Nanos":
        return {
          _id: "Duration",
          _tag: "Nanos",
          hrtime: toHrTime(this)
        };
      case "Infinity":
        return {
          _id: "Duration",
          _tag: "Infinity"
        };
    }
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  pipe() {
    return pipeArguments(this, arguments);
  }
};
const make = input => {
  const duration = Object.create(DurationProto);
  if (isNumber(input)) {
    if (isNaN(input) || input <= 0) {
      duration.value = zeroValue;
    } else if (!Number.isFinite(input)) {
      duration.value = infinityValue;
    } else if (!Number.isInteger(input)) {
      duration.value = {
        _tag: "Nanos",
        nanos: BigInt(Math.round(input * 1_000_000))
      };
    } else {
      duration.value = {
        _tag: "Millis",
        millis: input
      };
    }
  } else if (input <= bigint0) {
    duration.value = zeroValue;
  } else {
    duration.value = {
      _tag: "Nanos",
      nanos: input
    };
  }
  return duration;
};
/**
 * @since 2.0.0
 * @category guards
 */
export const isDuration = u => hasProperty(u, TypeId);
/**
 * @since 2.0.0
 * @category guards
 */
export const isFinite = self => self.value._tag !== "Infinity";
/**
 * @since 3.5.0
 * @category guards
 */
export const isZero = self => {
  switch (self.value._tag) {
    case "Millis":
      {
        return self.value.millis === 0;
      }
    case "Nanos":
      {
        return self.value.nanos === bigint0;
      }
    case "Infinity":
      {
        return false;
      }
  }
};
/**
 * @since 2.0.0
 * @category constructors
 */
export const zero = /*#__PURE__*/make(0);
/**
 * @since 2.0.0
 * @category constructors
 */
export const infinity = /*#__PURE__*/make(Infinity);
/**
 * @since 2.0.0
 * @category constructors
 */
export const nanos = nanos => make(nanos);
/**
 * @since 2.0.0
 * @category constructors
 */
export const micros = micros => make(micros * bigint1e3);
/**
 * @since 2.0.0
 * @category constructors
 */
export const millis = millis => make(millis);
/**
 * @since 2.0.0
 * @category constructors
 */
export const seconds = seconds => make(seconds * 1000);
/**
 * @since 2.0.0
 * @category constructors
 */
export const minutes = minutes => make(minutes * 60_000);
/**
 * @since 2.0.0
 * @category constructors
 */
export const hours = hours => make(hours * 3_600_000);
/**
 * @since 2.0.0
 * @category constructors
 */
export const days = days => make(days * 86_400_000);
/**
 * @since 2.0.0
 * @category constructors
 */
export const weeks = weeks => make(weeks * 604_800_000);
/**
 * @since 2.0.0
 * @category getters
 */
export const toMillis = self => match(self, {
  onMillis: millis => millis,
  onNanos: nanos => Number(nanos) / 1_000_000
});
/**
 * @since 2.0.0
 * @category getters
 */
export const toSeconds = self => match(self, {
  onMillis: millis => millis / 1_000,
  onNanos: nanos => Number(nanos) / 1_000_000_000
});
/**
 * @since 3.8.0
 * @category getters
 */
export const toMinutes = self => match(self, {
  onMillis: millis => millis / 60_000,
  onNanos: nanos => Number(nanos) / 60_000_000_000
});
/**
 * @since 3.8.0
 * @category getters
 */
export const toHours = self => match(self, {
  onMillis: millis => millis / 3_600_000,
  onNanos: nanos => Number(nanos) / 3_600_000_000_000
});
/**
 * @since 3.8.0
 * @category getters
 */
export const toDays = self => match(self, {
  onMillis: millis => millis / 86_400_000,
  onNanos: nanos => Number(nanos) / 86_400_000_000_000
});
/**
 * @since 3.8.0
 * @category getters
 */
export const toWeeks = self => match(self, {
  onMillis: millis => millis / 604_800_000,
  onNanos: nanos => Number(nanos) / 604_800_000_000_000
});
/**
 * Get the duration in nanoseconds as a bigint.
 *
 * If the duration is infinite, returns `Option.none()`
 *
 * @since 2.0.0
 * @category getters
 */
export const toNanos = self => {
  const _self = decode(self);
  switch (_self.value._tag) {
    case "Infinity":
      return Option.none();
    case "Nanos":
      return Option.some(_self.value.nanos);
    case "Millis":
      return Option.some(BigInt(Math.round(_self.value.millis * 1_000_000)));
  }
};
/**
 * Get the duration in nanoseconds as a bigint.
 *
 * If the duration is infinite, it throws an error.
 *
 * @since 2.0.0
 * @category getters
 */
export const unsafeToNanos = self => {
  const _self = decode(self);
  switch (_self.value._tag) {
    case "Infinity":
      throw new Error("Cannot convert infinite duration to nanos");
    case "Nanos":
      return _self.value.nanos;
    case "Millis":
      return BigInt(Math.round(_self.value.millis * 1_000_000));
  }
};
/**
 * @since 2.0.0
 * @category getters
 */
export const toHrTime = self => {
  const _self = decode(self);
  switch (_self.value._tag) {
    case "Infinity":
      return [Infinity, 0];
    case "Nanos":
      return [Number(_self.value.nanos / bigint1e9), Number(_self.value.nanos % bigint1e9)];
    case "Millis":
      return [Math.floor(_self.value.millis / 1000), Math.round(_self.value.millis % 1000 * 1_000_000)];
  }
};
/**
 * @since 2.0.0
 * @category pattern matching
 */
export const match = /*#__PURE__*/dual(2, (self, options) => {
  const _self = decode(self);
  switch (_self.value._tag) {
    case "Nanos":
      return options.onNanos(_self.value.nanos);
    case "Infinity":
      return options.onMillis(Infinity);
    case "Millis":
      return options.onMillis(_self.value.millis);
  }
});
/**
 * @since 2.0.0
 * @category pattern matching
 */
export const matchWith = /*#__PURE__*/dual(3, (self, that, options) => {
  const _self = decode(self);
  const _that = decode(that);
  if (_self.value._tag === "Infinity" || _that.value._tag === "Infinity") {
    return options.onMillis(toMillis(_self), toMillis(_that));
  } else if (_self.value._tag === "Nanos" || _that.value._tag === "Nanos") {
    const selfNanos = _self.value._tag === "Nanos" ? _self.value.nanos : BigInt(Math.round(_self.value.millis * 1_000_000));
    const thatNanos = _that.value._tag === "Nanos" ? _that.value.nanos : BigInt(Math.round(_that.value.millis * 1_000_000));
    return options.onNanos(selfNanos, thatNanos);
  }
  return options.onMillis(_self.value.millis, _that.value.millis);
});
/**
 * @category instances
 * @since 2.0.0
 */
export const Order = /*#__PURE__*/order.make((self, that) => matchWith(self, that, {
  onMillis: (self, that) => self < that ? -1 : self > that ? 1 : 0,
  onNanos: (self, that) => self < that ? -1 : self > that ? 1 : 0
}));
/**
 * Checks if a `Duration` is between a `minimum` and `maximum` value.
 *
 * @category predicates
 * @since 2.0.0
 */
export const between = /*#__PURE__*/order.between(/*#__PURE__*/order.mapInput(Order, decode));
/**
 * @category instances
 * @since 2.0.0
 */
export const Equivalence = (self, that) => matchWith(self, that, {
  onMillis: (self, that) => self === that,
  onNanos: (self, that) => self === that
});
const _min = /*#__PURE__*/order.min(Order);
/**
 * @since 2.0.0
 */
export const min = /*#__PURE__*/dual(2, (self, that) => _min(decode(self), decode(that)));
const _max = /*#__PURE__*/order.max(Order);
/**
 * @since 2.0.0
 * @category order
 */
export const max = /*#__PURE__*/dual(2, (self, that) => _max(decode(self), decode(that)));
const _clamp = /*#__PURE__*/order.clamp(Order);
/**
 * @since 2.0.0
 * @category order
 */
export const clamp = /*#__PURE__*/dual(2, (self, options) => _clamp(decode(self), {
  minimum: decode(options.minimum),
  maximum: decode(options.maximum)
}));
/**
 * @since 2.4.19
 * @category math
 */
export const divide = /*#__PURE__*/dual(2, (self, by) => match(self, {
  onMillis: millis => {
    if (by === 0 || isNaN(by) || !Number.isFinite(by)) {
      return Option.none();
    }
    return Option.some(make(millis / by));
  },
  onNanos: nanos => {
    if (isNaN(by) || by <= 0 || !Number.isFinite(by)) {
      return Option.none();
    }
    try {
      return Option.some(make(nanos / BigInt(by)));
    } catch {
      return Option.none();
    }
  }
}));
/**
 * @since 2.4.19
 * @category math
 */
export const unsafeDivide = /*#__PURE__*/dual(2, (self, by) => match(self, {
  onMillis: millis => make(millis / by),
  onNanos: nanos => {
    if (isNaN(by) || by < 0 || Object.is(by, -0)) {
      return zero;
    } else if (Object.is(by, 0) || !Number.isFinite(by)) {
      return infinity;
    }
    return make(nanos / BigInt(by));
  }
}));
/**
 * @since 2.0.0
 * @category math
 */
export const times = /*#__PURE__*/dual(2, (self, times) => match(self, {
  onMillis: millis => make(millis * times),
  onNanos: nanos => make(nanos * BigInt(times))
}));
/**
 * @since 2.0.0
 * @category math
 */
export const subtract = /*#__PURE__*/dual(2, (self, that) => matchWith(self, that, {
  onMillis: (self, that) => make(self - that),
  onNanos: (self, that) => make(self - that)
}));
/**
 * @since 2.0.0
 * @category math
 */
export const sum = /*#__PURE__*/dual(2, (self, that) => matchWith(self, that, {
  onMillis: (self, that) => make(self + that),
  onNanos: (self, that) => make(self + that)
}));
/**
 * @since 2.0.0
 * @category predicates
 */
export const lessThan = /*#__PURE__*/dual(2, (self, that) => matchWith(self, that, {
  onMillis: (self, that) => self < that,
  onNanos: (self, that) => self < that
}));
/**
 * @since 2.0.0
 * @category predicates
 */
export const lessThanOrEqualTo = /*#__PURE__*/dual(2, (self, that) => matchWith(self, that, {
  onMillis: (self, that) => self <= that,
  onNanos: (self, that) => self <= that
}));
/**
 * @since 2.0.0
 * @category predicates
 */
export const greaterThan = /*#__PURE__*/dual(2, (self, that) => matchWith(self, that, {
  onMillis: (self, that) => self > that,
  onNanos: (self, that) => self > that
}));
/**
 * @since 2.0.0
 * @category predicates
 */
export const greaterThanOrEqualTo = /*#__PURE__*/dual(2, (self, that) => matchWith(self, that, {
  onMillis: (self, that) => self >= that,
  onNanos: (self, that) => self >= that
}));
/**
 * @since 2.0.0
 * @category predicates
 */
export const equals = /*#__PURE__*/dual(2, (self, that) => Equivalence(decode(self), decode(that)));
/**
 * Converts a `Duration` to its parts.
 *
 * @since 3.8.0
 * @category conversions
 */
export const parts = self => {
  const duration = decode(self);
  if (duration.value._tag === "Infinity") {
    return {
      days: Infinity,
      hours: Infinity,
      minutes: Infinity,
      seconds: Infinity,
      millis: Infinity,
      nanos: Infinity
    };
  }
  const nanos = unsafeToNanos(duration);
  const ms = nanos / bigint1e6;
  const sec = ms / bigint1e3;
  const min = sec / bigint60;
  const hr = min / bigint60;
  const days = hr / bigint24;
  return {
    days: Number(days),
    hours: Number(hr % bigint24),
    minutes: Number(min % bigint60),
    seconds: Number(sec % bigint60),
    millis: Number(ms % bigint1e3),
    nanos: Number(nanos % bigint1e6)
  };
};
/**
 * Converts a `Duration` to a human readable string.
 *
 * @since 2.0.0
 * @category conversions
 * @example
 * ```ts
 * import { Duration } from "effect"
 *
 * Duration.format(Duration.millis(1000)) // "1s"
 * Duration.format(Duration.millis(1001)) // "1s 1ms"
 * ```
 */
export const format = self => {
  const duration = decode(self);
  if (duration.value._tag === "Infinity") {
    return "Infinity";
  }
  if (isZero(duration)) {
    return "0";
  }
  const fragments = parts(duration);
  const pieces = [];
  if (fragments.days !== 0) {
    pieces.push(`${fragments.days}d`);
  }
  if (fragments.hours !== 0) {
    pieces.push(`${fragments.hours}h`);
  }
  if (fragments.minutes !== 0) {
    pieces.push(`${fragments.minutes}m`);
  }
  if (fragments.seconds !== 0) {
    pieces.push(`${fragments.seconds}s`);
  }
  if (fragments.millis !== 0) {
    pieces.push(`${fragments.millis}ms`);
  }
  if (fragments.nanos !== 0) {
    pieces.push(`${fragments.nanos}ns`);
  }
  return pieces.join(" ");
};
/**
 * Formats a Duration into an ISO8601 duration string.
 *
 * Months are assumed to be 30 days and years are assumed to be 365 days.
 *
 * Milliseconds and nanoseconds are expressed as fractional seconds.
 *
 * @example
 * ```ts
 * import { Duration } from "effect"
 *
 * Duration.unsafeFormatIso(Duration.days(1)) // => "P1D"
 * Duration.unsafeFormatIso(Duration.minutes(90)) // => "PT1H30M"
 * Duration.unsafeFormatIso(Duration.millis(1500)) // => "PT1.5S"
 * ```
 *
 * @throws `RangeError` If the duration is not finite.
 *
 * @since 3.13.0
 * @category conversions
 */
export const unsafeFormatIso = self => {
  const duration = decode(self);
  if (!isFinite(duration)) {
    throw new RangeError("Cannot format infinite duration");
  }
  const fragments = [];
  const {
    days,
    hours,
    millis,
    minutes,
    nanos,
    seconds
  } = parts(duration);
  let rest = days;
  if (rest >= 365) {
    const years = Math.floor(rest / 365);
    rest %= 365;
    fragments.push(`${years}Y`);
  }
  if (rest >= 30) {
    const months = Math.floor(rest / 30);
    rest %= 30;
    fragments.push(`${months}M`);
  }
  if (rest >= 7) {
    const weeks = Math.floor(rest / 7);
    rest %= 7;
    fragments.push(`${weeks}W`);
  }
  if (rest > 0) {
    fragments.push(`${rest}D`);
  }
  if (hours !== 0 || minutes !== 0 || seconds !== 0 || millis !== 0 || nanos !== 0) {
    fragments.push("T");
    if (hours !== 0) {
      fragments.push(`${hours}H`);
    }
    if (minutes !== 0) {
      fragments.push(`${minutes}M`);
    }
    if (seconds !== 0 || millis !== 0 || nanos !== 0) {
      const total = BigInt(seconds) * bigint1e9 + BigInt(millis) * bigint1e6 + BigInt(nanos);
      const str = (Number(total) / 1e9).toFixed(9).replace(/\.?0+$/, "");
      fragments.push(`${str}S`);
    }
  }
  return `P${fragments.join("") || "T0S"}`;
};
/**
 * Formats a Duration into an ISO8601 duration string.
 *
 * Months are assumed to be 30 days and years are assumed to be 365 days.
 *
 * Returns `Option.none()` if the duration is infinite.
 *
 * @example
 * ```ts
 * import { Duration, Option } from "effect"
 *
 * Duration.formatIso(Duration.days(1)) // => Option.some("P1D")
 * Duration.formatIso(Duration.minutes(90)) // => Option.some("PT1H30M")
 * Duration.formatIso(Duration.millis(1500)) // => Option.some("PT1.5S")
 * Duration.formatIso(Duration.infinity) // => Option.none()
 * ```
 *
 * @since 3.13.0
 * @category conversions
 */
export const formatIso = self => {
  const duration = decode(self);
  return isFinite(duration) ? Option.some(unsafeFormatIso(duration)) : Option.none();
};
/**
 * Parses an ISO8601 duration string into a `Duration`.
 *
 * Months are assumed to be 30 days and years are assumed to be 365 days.
 *
 * @example
 * ```ts
 * import { Duration, Option } from "effect"
 *
 * Duration.fromIso("P1D") // => Option.some(Duration.days(1))
 * Duration.fromIso("PT1H") // => Option.some(Duration.hours(1))
 * Duration.fromIso("PT1M") // => Option.some(Duration.minutes(1))
 * Duration.fromIso("PT1.5S") // => Option.some(Duration.seconds(1.5))
 * ```
 *
 * @since 3.13.0
 * @category conversions
 */
export const fromIso = iso => {
  const result = DURATION_ISO_REGEX.exec(iso);
  if (result == null) {
    return Option.none();
  }
  const [years, months, weeks, days, hours, mins, secs] = result.slice(1, 8).map(_ => _ ? Number(_) : 0);
  const value = years * 365 * 24 * 60 * 60 + months * 30 * 24 * 60 * 60 + weeks * 7 * 24 * 60 * 60 + days * 24 * 60 * 60 + hours * 60 * 60 + mins * 60 + secs;
  return Option.some(seconds(value));
};
const DURATION_ISO_REGEX = /^P(?!$)(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)W)?(?:(\d+)D)?(?:T(?!$)(?:(\d+)H)?(?:(\d+)M)?(?:(\d+(?:\.\d+)?)S)?)?$/;
//# sourceMappingURL=Duration.js.map