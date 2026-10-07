"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unsafeToNumber = exports.unsafeRemainder = exports.unsafeMakeNormalized = exports.unsafeFromString = exports.unsafeFromNumber = exports.unsafeDivide = exports.truncate = exports.toExponential = exports.sumAll = exports.sum = exports.subtract = exports.sign = exports.scale = exports.safeFromNumber = exports.roundTerminal = exports.round = exports.remainder = exports.normalize = exports.negate = exports.multiply = exports.min = exports.max = exports.make = exports.lessThanOrEqualTo = exports.lessThan = exports.isZero = exports.isPositive = exports.isNegative = exports.isInteger = exports.isBigDecimal = exports.greaterThanOrEqualTo = exports.greaterThan = exports.fromString = exports.fromNumber = exports.fromBigInt = exports.format = exports.floor = exports.equals = exports.divide = exports.digitAt = exports.clamp = exports.ceil = exports.between = exports.abs = exports.TypeId = exports.Order = exports.Equivalence = void 0;
var Equal = _interopRequireWildcard(require("./Equal.js"));
var equivalence = _interopRequireWildcard(require("./Equivalence.js"));
var _Function = require("./Function.js");
var Hash = _interopRequireWildcard(require("./Hash.js"));
var _Inspectable = require("./Inspectable.js");
var Option = _interopRequireWildcard(require("./Option.js"));
var order = _interopRequireWildcard(require("./Order.js"));
var _Pipeable = require("./Pipeable.js");
var _Predicate = require("./Predicate.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * This module provides utility functions and type class instances for working with the `BigDecimal` type in TypeScript.
 * It includes functions for basic arithmetic operations, as well as type class instances for `Equivalence` and `Order`.
 *
 * A `BigDecimal` allows storing any real number to arbitrary precision; which avoids common floating point errors
 * (such as 0.1 + 0.2 ≠ 0.3) at the cost of complexity.
 *
 * Internally, `BigDecimal` uses a `BigInt` object, paired with a 64-bit integer which determines the position of the
 * decimal point. Therefore, the precision *is not* actually arbitrary, but limited to 2<sup>63</sup> decimal places.
 *
 * It is not recommended to convert a floating point number to a decimal directly, as the floating point representation
 * may be unexpected.
 *
 * @module BigDecimal
 * @since 2.0.0
 * @see {@link module:BigInt} for more similar operations on `bigint` types
 * @see {@link module:Number} for more similar operations on `number` types
 */

const DEFAULT_PRECISION = 100;
const FINITE_INT_REGEX = /^[+-]?\d+$/;
/**
 * @since 2.0.0
 * @category symbols
 */
const TypeId = exports.TypeId = /*#__PURE__*/Symbol.for("effect/BigDecimal");
const BigDecimalProto = {
  [TypeId]: TypeId,
  [Hash.symbol]() {
    const normalized = normalize(this);
    return (0, _Function.pipe)(Hash.hash(normalized.value), Hash.combine(Hash.number(normalized.scale)), Hash.cached(this));
  },
  [Equal.symbol](that) {
    return isBigDecimal(that) && equals(this, that);
  },
  toString() {
    return `BigDecimal(${format(this)})`;
  },
  toJSON() {
    return {
      _id: "BigDecimal",
      value: String(this.value),
      scale: this.scale
    };
  },
  [_Inspectable.NodeInspectSymbol]() {
    return this.toJSON();
  },
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
};
/**
 * Checks if a given value is a `BigDecimal`.
 *
 * @since 2.0.0
 * @category guards
 */
const isBigDecimal = u => (0, _Predicate.hasProperty)(u, TypeId);
/**
 * Creates a `BigDecimal` from a `bigint` value and a scale.
 *
 * @since 2.0.0
 * @category constructors
 */
exports.isBigDecimal = isBigDecimal;
const make = (value, scale) => {
  const o = Object.create(BigDecimalProto);
  o.value = value;
  o.scale = scale;
  return o;
};
/**
 * Internal function used to create pre-normalized `BigDecimal`s.
 *
 * @internal
 */
exports.make = make;
const unsafeMakeNormalized = (value, scale) => {
  if (value !== bigint0 && value % bigint10 === bigint0) {
    throw new RangeError("Value must be normalized");
  }
  const o = make(value, scale);
  o.normalized = o;
  return o;
};
exports.unsafeMakeNormalized = unsafeMakeNormalized;
const bigint0 = /*#__PURE__*/BigInt(0);
const bigint1 = /*#__PURE__*/BigInt(1);
const bigint10 = /*#__PURE__*/BigInt(10);
const zero = /*#__PURE__*/unsafeMakeNormalized(bigint0, 0);
/**
 * Normalizes a given `BigDecimal` by removing trailing zeros.
 *
 * **Example**
 *
 * ```ts
 * import * as assert from "node:assert"
 * import { normalize, make, unsafeFromString } from "effect/BigDecimal"
 *
 * assert.deepStrictEqual(normalize(unsafeFromString("123.00000")), normalize(make(123n, 0)))
 * assert.deepStrictEqual(normalize(unsafeFromString("12300000")), normalize(make(123n, -5)))
 * ```
 *
 * @since 2.0.0
 * @category scaling
 */
const normalize = self => {
  if (self.normalized === undefined) {
    if (self.value === bigint0) {
      self.normalized = zero;
    } else {
      const digits = `${self.value}`;
      let trail = 0;
      for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] === "0") {
          trail++;
        } else {
          break;
        }
      }
      if (trail === 0) {
        self.normalized = self;
      }
      const value = BigInt(digits.substring(0, digits.length - trail));
      const scale = self.scale - trail;
      self.normalized = unsafeMakeNormalized(value, scale);
    }
  }
  return self.normalized;
};
/**
 * Scales a given `BigDecimal` to the specified scale.
 *
 * If the given scale is smaller than the current scale, the value will be rounded down to
 * the nearest integer.
 *
 * @since 2.0.0
 * @category scaling
 */
exports.normalize = normalize;
const scale = exports.scale = /*#__PURE__*/(0, _Function.dual)(2, (self, scale) => {
  if (scale > self.scale) {
    return make(self.value * bigint10 ** BigInt(scale - self.scale), scale);
  }
  if (scale < self.scale) {
    return make(self.value / bigint10 ** BigInt(self.scale - scale), scale);
  }
  return self;
});
/**
 * Provides an addition operation on `BigDecimal`s.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { sum, unsafeFromString } from "effect/BigDecimal"
 *
 * assert.deepStrictEqual(sum(unsafeFromString("2"), unsafeFromString("3")), unsafeFromString("5"))
 * ```
 *
 * @since 2.0.0
 * @category math
 */
const sum = exports.sum = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => {
  if (that.value === bigint0) {
    return self;
  }
  if (self.value === bigint0) {
    return that;
  }
  if (self.scale > that.scale) {
    return make(scale(that, self.scale).value + self.value, self.scale);
  }
  if (self.scale < that.scale) {
    return make(scale(self, that.scale).value + that.value, that.scale);
  }
  return make(self.value + that.value, self.scale);
});
/**
 * Provides a multiplication operation on `BigDecimal`s.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { multiply, unsafeFromString } from "effect/BigDecimal"
 *
 * assert.deepStrictEqual(multiply(unsafeFromString("2"), unsafeFromString("3")), unsafeFromString("6"))
 * ```
 *
 * @since 2.0.0
 * @category math
 */
const multiply = exports.multiply = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => {
  if (that.value === bigint0 || self.value === bigint0) {
    return zero;
  }
  return make(self.value * that.value, self.scale + that.scale);
});
/**
 * Provides a subtraction operation on `BigDecimal`s.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { subtract, unsafeFromString } from "effect/BigDecimal"
 *
 * assert.deepStrictEqual(subtract(unsafeFromString("2"), unsafeFromString("3")), unsafeFromString("-1"))
 * ```
 *
 * @since 2.0.0
 * @category math
 */
const subtract = exports.subtract = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => {
  if (that.value === bigint0) {
    return self;
  }
  if (self.value === bigint0) {
    return make(-that.value, that.scale);
  }
  if (self.scale > that.scale) {
    return make(self.value - scale(that, self.scale).value, self.scale);
  }
  if (self.scale < that.scale) {
    return make(scale(self, that.scale).value - that.value, that.scale);
  }
  return make(self.value - that.value, self.scale);
});
/**
 * Internal function used for arbitrary precision division.
 */
const divideWithPrecision = (num, den, scale, precision) => {
  const numNegative = num < bigint0;
  const denNegative = den < bigint0;
  const negateResult = numNegative !== denNegative;
  num = numNegative ? -num : num;
  den = denNegative ? -den : den;
  // Shift digits until numerator is larger than denominator (set scale appropriately).
  while (num < den) {
    num *= bigint10;
    scale++;
  }
  // First division.
  let quotient = num / den;
  let remainder = num % den;
  if (remainder === bigint0) {
    // No remainder, return immediately.
    return make(negateResult ? -quotient : quotient, scale);
  }
  // The quotient is guaranteed to be non-negative at this point. No need to consider sign.
  let count = `${quotient}`.length;
  // Shift the remainder by 1 decimal; The quotient will be 1 digit upon next division.
  remainder *= bigint10;
  while (remainder !== bigint0 && count < precision) {
    const q = remainder / den;
    const r = remainder % den;
    quotient = quotient * bigint10 + q;
    remainder = r * bigint10;
    count++;
    scale++;
  }
  if (remainder !== bigint0) {
    // Round final number with remainder.
    quotient += roundTerminal(remainder / den);
  }
  return make(negateResult ? -quotient : quotient, scale);
};
/**
 * Internal function used for rounding.
 *
 * Returns 1 if the most significant digit is >= 5, otherwise 0.
 *
 * This is used after dividing a number by a power of ten and rounding the last digit.
 *
 * @internal
 */
const roundTerminal = n => {
  const pos = n >= bigint0 ? 0 : 1;
  return Number(`${n}`[pos]) < 5 ? bigint0 : bigint1;
};
/**
 * Provides a division operation on `BigDecimal`s.
 *
 * If the dividend is not a multiple of the divisor the result will be a `BigDecimal` value
 * which represents the integer division rounded down to the nearest integer.
 *
 * If the divisor is `0`, the result will be `None`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { BigDecimal, Option } from "effect"
 *
 * assert.deepStrictEqual(BigDecimal.divide(BigDecimal.unsafeFromString("6"), BigDecimal.unsafeFromString("3")), Option.some(BigDecimal.unsafeFromString("2")))
 * assert.deepStrictEqual(BigDecimal.divide(BigDecimal.unsafeFromString("6"), BigDecimal.unsafeFromString("4")), Option.some(BigDecimal.unsafeFromString("1.5")))
 * assert.deepStrictEqual(BigDecimal.divide(BigDecimal.unsafeFromString("6"), BigDecimal.unsafeFromString("0")), Option.none())
 * ```
 *
 * @since 2.0.0
 * @category math
 */
exports.roundTerminal = roundTerminal;
const divide = exports.divide = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => {
  if (that.value === bigint0) {
    return Option.none();
  }
  if (self.value === bigint0) {
    return Option.some(zero);
  }
  const scale = self.scale - that.scale;
  if (self.value === that.value) {
    return Option.some(make(bigint1, scale));
  }
  return Option.some(divideWithPrecision(self.value, that.value, scale, DEFAULT_PRECISION));
});
/**
 * Provides an unsafe division operation on `BigDecimal`s.
 *
 * If the dividend is not a multiple of the divisor the result will be a `BigDecimal` value
 * which represents the integer division rounded down to the nearest integer.
 *
 * Throws a `RangeError` if the divisor is `0`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { unsafeDivide, unsafeFromString } from "effect/BigDecimal"
 *
 * assert.deepStrictEqual(unsafeDivide(unsafeFromString("6"), unsafeFromString("3")), unsafeFromString("2"))
 * assert.deepStrictEqual(unsafeDivide(unsafeFromString("6"), unsafeFromString("4")), unsafeFromString("1.5"))
 * ```
 *
 * @since 2.0.0
 * @category math
 */
const unsafeDivide = exports.unsafeDivide = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => {
  if (that.value === bigint0) {
    throw new RangeError("Division by zero");
  }
  if (self.value === bigint0) {
    return zero;
  }
  const scale = self.scale - that.scale;
  if (self.value === that.value) {
    return make(bigint1, scale);
  }
  return divideWithPrecision(self.value, that.value, scale, DEFAULT_PRECISION);
});
/**
 * @since 2.0.0
 * @category instances
 */
const Order = exports.Order = /*#__PURE__*/order.make((self, that) => {
  const scmp = order.number(sign(self), sign(that));
  if (scmp !== 0) {
    return scmp;
  }
  if (self.scale > that.scale) {
    return order.bigint(self.value, scale(that, self.scale).value);
  }
  if (self.scale < that.scale) {
    return order.bigint(scale(self, that.scale).value, that.value);
  }
  return order.bigint(self.value, that.value);
});
/**
 * Returns `true` if the first argument is less than the second, otherwise `false`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { lessThan, unsafeFromString } from "effect/BigDecimal"
 *
 * assert.deepStrictEqual(lessThan(unsafeFromString("2"), unsafeFromString("3")), true)
 * assert.deepStrictEqual(lessThan(unsafeFromString("3"), unsafeFromString("3")), false)
 * assert.deepStrictEqual(lessThan(unsafeFromString("4"), unsafeFromString("3")), false)
 * ```
 *
 * @since 2.0.0
 * @category predicates
 */
const lessThan = exports.lessThan = /*#__PURE__*/order.lessThan(Order);
/**
 * Checks if a given `BigDecimal` is less than or equal to the provided one.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { lessThanOrEqualTo, unsafeFromString } from "effect/BigDecimal"
 *
 * assert.deepStrictEqual(lessThanOrEqualTo(unsafeFromString("2"), unsafeFromString("3")), true)
 * assert.deepStrictEqual(lessThanOrEqualTo(unsafeFromString("3"), unsafeFromString("3")), true)
 * assert.deepStrictEqual(lessThanOrEqualTo(unsafeFromString("4"), unsafeFromString("3")), false)
 * ```
 *
 * @since 2.0.0
 * @category predicates
 */
const lessThanOrEqualTo = exports.lessThanOrEqualTo = /*#__PURE__*/order.lessThanOrEqualTo(Order);
/**
 * Returns `true` if the first argument is greater than the second, otherwise `false`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { greaterThan, unsafeFromString } from "effect/BigDecimal"
 *
 * assert.deepStrictEqual(greaterThan(unsafeFromString("2"), unsafeFromString("3")), false)
 * assert.deepStrictEqual(greaterThan(unsafeFromString("3"), unsafeFromString("3")), false)
 * assert.deepStrictEqual(greaterThan(unsafeFromString("4"), unsafeFromString("3")), true)
 * ```
 *
 * @since 2.0.0
 * @category predicates
 */
const greaterThan = exports.greaterThan = /*#__PURE__*/order.greaterThan(Order);
/**
 * Checks if a given `BigDecimal` is greater than or equal to the provided one.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { greaterThanOrEqualTo, unsafeFromString } from "effect/BigDecimal"
 *
 * assert.deepStrictEqual(greaterThanOrEqualTo(unsafeFromString("2"), unsafeFromString("3")), false)
 * assert.deepStrictEqual(greaterThanOrEqualTo(unsafeFromString("3"), unsafeFromString("3")), true)
 * assert.deepStrictEqual(greaterThanOrEqualTo(unsafeFromString("4"), unsafeFromString("3")), true)
 * ```
 *
 * @since 2.0.0
 * @category predicates
 */
const greaterThanOrEqualTo = exports.greaterThanOrEqualTo = /*#__PURE__*/order.greaterThanOrEqualTo(Order);
/**
 * Checks if a `BigDecimal` is between a `minimum` and `maximum` value (inclusive).
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { BigDecimal } from "effect"
 *
 * const between = BigDecimal.between({
 *   minimum: BigDecimal.unsafeFromString("1"),
 *   maximum: BigDecimal.unsafeFromString("5") }
 * )
 *
 * assert.deepStrictEqual(between(BigDecimal.unsafeFromString("3")), true)
 * assert.deepStrictEqual(between(BigDecimal.unsafeFromString("0")), false)
 * assert.deepStrictEqual(between(BigDecimal.unsafeFromString("6")), false)
 * ```
 *
 * @since 2.0.0
 * @category predicates
 */
const between = exports.between = /*#__PURE__*/order.between(Order);
/**
 * Restricts the given `BigDecimal` to be within the range specified by the `minimum` and `maximum` values.
 *
 * - If the `BigDecimal` is less than the `minimum` value, the function returns the `minimum` value.
 * - If the `BigDecimal` is greater than the `maximum` value, the function returns the `maximum` value.
 * - Otherwise, it returns the original `BigDecimal`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { BigDecimal } from "effect"
 *
 * const clamp = BigDecimal.clamp({
 *   minimum: BigDecimal.unsafeFromString("1"),
 *   maximum: BigDecimal.unsafeFromString("5") }
 * )
 *
 * assert.deepStrictEqual(clamp(BigDecimal.unsafeFromString("3")), BigDecimal.unsafeFromString("3"))
 * assert.deepStrictEqual(clamp(BigDecimal.unsafeFromString("0")), BigDecimal.unsafeFromString("1"))
 * assert.deepStrictEqual(clamp(BigDecimal.unsafeFromString("6")), BigDecimal.unsafeFromString("5"))
 * ```
 *
 * @since 2.0.0
 * @category math
 */
const clamp = exports.clamp = /*#__PURE__*/order.clamp(Order);
/**
 * Returns the minimum between two `BigDecimal`s.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { min, unsafeFromString } from "effect/BigDecimal"
 *
 * assert.deepStrictEqual(min(unsafeFromString("2"), unsafeFromString("3")), unsafeFromString("2"))
 * ```
 *
 * @since 2.0.0
 * @category math
 */
const min = exports.min = /*#__PURE__*/order.min(Order);
/**
 * Returns the maximum between two `BigDecimal`s.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { max, unsafeFromString } from "effect/BigDecimal"
 *
 * assert.deepStrictEqual(max(unsafeFromString("2"), unsafeFromString("3")), unsafeFromString("3"))
 * ```
 *
 * @since 2.0.0
 * @category math
 */
const max = exports.max = /*#__PURE__*/order.max(Order);
/**
 * Determines the sign of a given `BigDecimal`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { sign, unsafeFromString } from "effect/BigDecimal"
 *
 * assert.deepStrictEqual(sign(unsafeFromString("-5")), -1)
 * assert.deepStrictEqual(sign(unsafeFromString("0")), 0)
 * assert.deepStrictEqual(sign(unsafeFromString("5")), 1)
 * ```
 *
 * @since 2.0.0
 * @category math
 */
const sign = n => n.value === bigint0 ? 0 : n.value < bigint0 ? -1 : 1;
/**
 * Determines the absolute value of a given `BigDecimal`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { abs, unsafeFromString } from "effect/BigDecimal"
 *
 * assert.deepStrictEqual(abs(unsafeFromString("-5")), unsafeFromString("5"))
 * assert.deepStrictEqual(abs(unsafeFromString("0")), unsafeFromString("0"))
 * assert.deepStrictEqual(abs(unsafeFromString("5")), unsafeFromString("5"))
 * ```
 *
 * @since 2.0.0
 * @category math
 */
exports.sign = sign;
const abs = n => n.value < bigint0 ? make(-n.value, n.scale) : n;
/**
 * Provides a negate operation on `BigDecimal`s.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { negate, unsafeFromString } from "effect/BigDecimal"
 *
 * assert.deepStrictEqual(negate(unsafeFromString("3")), unsafeFromString("-3"))
 * assert.deepStrictEqual(negate(unsafeFromString("-6")), unsafeFromString("6"))
 * ```
 *
 * @since 2.0.0
 * @category math
 */
exports.abs = abs;
const negate = n => make(-n.value, n.scale);
/**
 * Returns the remainder left over when one operand is divided by a second operand.
 *
 * If the divisor is `0`, the result will be `None`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { BigDecimal, Option } from "effect"
 *
 * assert.deepStrictEqual(BigDecimal.remainder(BigDecimal.unsafeFromString("2"), BigDecimal.unsafeFromString("2")), Option.some(BigDecimal.unsafeFromString("0")))
 * assert.deepStrictEqual(BigDecimal.remainder(BigDecimal.unsafeFromString("3"), BigDecimal.unsafeFromString("2")), Option.some(BigDecimal.unsafeFromString("1")))
 * assert.deepStrictEqual(BigDecimal.remainder(BigDecimal.unsafeFromString("-4"), BigDecimal.unsafeFromString("2")), Option.some(BigDecimal.unsafeFromString("0")))
 * ```
 *
 * @since 2.0.0
 * @category math
 */
exports.negate = negate;
const remainder = exports.remainder = /*#__PURE__*/(0, _Function.dual)(2, (self, divisor) => {
  if (divisor.value === bigint0) {
    return Option.none();
  }
  const max = Math.max(self.scale, divisor.scale);
  return Option.some(make(scale(self, max).value % scale(divisor, max).value, max));
});
/**
 * Returns the remainder left over when one operand is divided by a second operand.
 *
 * Throws a `RangeError` if the divisor is `0`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { unsafeRemainder, unsafeFromString } from "effect/BigDecimal"
 *
 * assert.deepStrictEqual(unsafeRemainder(unsafeFromString("2"), unsafeFromString("2")), unsafeFromString("0"))
 * assert.deepStrictEqual(unsafeRemainder(unsafeFromString("3"), unsafeFromString("2")), unsafeFromString("1"))
 * assert.deepStrictEqual(unsafeRemainder(unsafeFromString("-4"), unsafeFromString("2")), unsafeFromString("0"))
 * ```
 *
 * @since 2.0.0
 * @category math
 */
const unsafeRemainder = exports.unsafeRemainder = /*#__PURE__*/(0, _Function.dual)(2, (self, divisor) => {
  if (divisor.value === bigint0) {
    throw new RangeError("Division by zero");
  }
  const max = Math.max(self.scale, divisor.scale);
  return make(scale(self, max).value % scale(divisor, max).value, max);
});
/**
 * @category instances
 * @since 2.0.0
 */
const Equivalence = exports.Equivalence = /*#__PURE__*/equivalence.make((self, that) => {
  if (self.scale > that.scale) {
    return scale(that, self.scale).value === self.value;
  }
  if (self.scale < that.scale) {
    return scale(self, that.scale).value === that.value;
  }
  return self.value === that.value;
});
/**
 * Checks if two `BigDecimal`s are equal.
 *
 * @since 2.0.0
 * @category predicates
 */
const equals = exports.equals = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => Equivalence(self, that));
/**
 * Creates a `BigDecimal` from a `bigint` value.
 *
 * @since 2.0.0
 * @category constructors
 */
const fromBigInt = n => make(n, 0);
/**
 * Creates a `BigDecimal` from a `number` value.
 *
 * It is not recommended to convert a floating point number to a decimal directly,
 * as the floating point representation may be unexpected.
 *
 * Throws a `RangeError` if the number is not finite (`NaN`, `+Infinity` or `-Infinity`).
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { unsafeFromNumber, make } from "effect/BigDecimal"
 *
 * assert.deepStrictEqual(unsafeFromNumber(123), make(123n, 0))
 * assert.deepStrictEqual(unsafeFromNumber(123.456), make(123456n, 3))
 * ```
 *
 * @since 3.11.0
 * @category constructors
 */
exports.fromBigInt = fromBigInt;
const unsafeFromNumber = n => Option.getOrThrowWith(safeFromNumber(n), () => new RangeError(`Number must be finite, got ${n}`));
/**
 * Creates a `BigDecimal` from a `number` value.
 *
 * It is not recommended to convert a floating point number to a decimal directly,
 * as the floating point representation may be unexpected.
 *
 * Throws a `RangeError` if the number is not finite (`NaN`, `+Infinity` or `-Infinity`).
 *
 * @since 2.0.0
 * @category constructors
 * @deprecated Use {@link unsafeFromNumber} instead.
 */
exports.unsafeFromNumber = unsafeFromNumber;
const fromNumber = exports.fromNumber = unsafeFromNumber;
// TODO(4.0): Rename this to `fromNumber` after removing the current, unsafe implementation of `fromNumber`.
/**
 * Creates a `BigDecimal` from a `number` value.
 *
 * It is not recommended to convert a floating point number to a decimal directly,
 * as the floating point representation may be unexpected.
 *
 * Returns `None` if the number is not finite (`NaN`, `+Infinity` or `-Infinity`).
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { BigDecimal, Option } from "effect"
 *
 * assert.deepStrictEqual(BigDecimal.safeFromNumber(123), Option.some(BigDecimal.make(123n, 0)))
 * assert.deepStrictEqual(BigDecimal.safeFromNumber(123.456), Option.some(BigDecimal.make(123456n, 3)))
 * assert.deepStrictEqual(BigDecimal.safeFromNumber(Infinity), Option.none())
 * ```
 *
 * @since 3.11.0
 * @category constructors
 */
const safeFromNumber = n => {
  if (!Number.isFinite(n)) {
    return Option.none();
  }
  const string = `${n}`;
  if (string.includes("e")) {
    return fromString(string);
  }
  const [lead, trail = ""] = string.split(".");
  return Option.some(make(BigInt(`${lead}${trail}`), trail.length));
};
/**
 * Parses a numerical `string` into a `BigDecimal`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { BigDecimal, Option } from "effect"
 *
 * assert.deepStrictEqual(BigDecimal.fromString("123"), Option.some(BigDecimal.make(123n, 0)))
 * assert.deepStrictEqual(BigDecimal.fromString("123.456"), Option.some(BigDecimal.make(123456n, 3)))
 * assert.deepStrictEqual(BigDecimal.fromString("123.abc"), Option.none())
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
exports.safeFromNumber = safeFromNumber;
const fromString = s => {
  if (s === "") {
    return Option.some(zero);
  }
  let base;
  let exp;
  const seperator = s.search(/[eE]/);
  if (seperator !== -1) {
    const trail = s.slice(seperator + 1);
    base = s.slice(0, seperator);
    exp = Number(trail);
    if (base === "" || !Number.isSafeInteger(exp) || !FINITE_INT_REGEX.test(trail)) {
      return Option.none();
    }
  } else {
    base = s;
    exp = 0;
  }
  let digits;
  let offset;
  const dot = base.search(/\./);
  if (dot !== -1) {
    const lead = base.slice(0, dot);
    const trail = base.slice(dot + 1);
    digits = `${lead}${trail}`;
    offset = trail.length;
  } else {
    digits = base;
    offset = 0;
  }
  if (!FINITE_INT_REGEX.test(digits)) {
    return Option.none();
  }
  const scale = offset - exp;
  if (!Number.isSafeInteger(scale)) {
    return Option.none();
  }
  return Option.some(make(BigInt(digits), scale));
};
/**
 * Parses a numerical `string` into a `BigDecimal`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { unsafeFromString, make } from "effect/BigDecimal"
 *
 * assert.deepStrictEqual(unsafeFromString("123"), make(123n, 0))
 * assert.deepStrictEqual(unsafeFromString("123.456"), make(123456n, 3))
 * assert.throws(() => unsafeFromString("123.abc"))
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
exports.fromString = fromString;
const unsafeFromString = s => Option.getOrThrowWith(fromString(s), () => new Error("Invalid numerical string"));
/**
 * Formats a given `BigDecimal` as a `string`.
 *
 * If the scale of the `BigDecimal` is greater than or equal to 16, the `BigDecimal` will
 * be formatted in scientific notation.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { format, unsafeFromString } from "effect/BigDecimal"
 *
 * assert.deepStrictEqual(format(unsafeFromString("-5")), "-5")
 * assert.deepStrictEqual(format(unsafeFromString("123.456")), "123.456")
 * assert.deepStrictEqual(format(unsafeFromString("-0.00000123")), "-0.00000123")
 * ```
 *
 * @since 2.0.0
 * @category conversions
 */
exports.unsafeFromString = unsafeFromString;
const format = n => {
  const normalized = normalize(n);
  if (Math.abs(normalized.scale) >= 16) {
    return toExponential(normalized);
  }
  const negative = normalized.value < bigint0;
  const absolute = negative ? `${normalized.value}`.substring(1) : `${normalized.value}`;
  let before;
  let after;
  if (normalized.scale >= absolute.length) {
    before = "0";
    after = "0".repeat(normalized.scale - absolute.length) + absolute;
  } else {
    const location = absolute.length - normalized.scale;
    if (location > absolute.length) {
      const zeros = location - absolute.length;
      before = `${absolute}${"0".repeat(zeros)}`;
      after = "";
    } else {
      after = absolute.slice(location);
      before = absolute.slice(0, location);
    }
  }
  const complete = after === "" ? before : `${before}.${after}`;
  return negative ? `-${complete}` : complete;
};
/**
 * Formats a given `BigDecimal` as a `string` in scientific notation.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { toExponential, make } from "effect/BigDecimal"
 *
 * assert.deepStrictEqual(toExponential(make(123456n, -5)), "1.23456e+10")
 * ```
 *
 * @since 3.11.0
 * @category conversions
 */
exports.format = format;
const toExponential = n => {
  if (isZero(n)) {
    return "0e+0";
  }
  const normalized = normalize(n);
  const digits = `${abs(normalized).value}`;
  const head = digits.slice(0, 1);
  const tail = digits.slice(1);
  let output = `${isNegative(normalized) ? "-" : ""}${head}`;
  if (tail !== "") {
    output += `.${tail}`;
  }
  const exp = tail.length - normalized.scale;
  return `${output}e${exp >= 0 ? "+" : ""}${exp}`;
};
/**
 * Converts a `BigDecimal` to a `number`.
 *
 * This function will produce incorrect results if the `BigDecimal` exceeds the 64-bit range of a `number`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { unsafeToNumber, unsafeFromString } from "effect/BigDecimal"
 *
 * assert.deepStrictEqual(unsafeToNumber(unsafeFromString("123.456")), 123.456)
 * ```
 *
 * @since 2.0.0
 * @category conversions
 */
exports.toExponential = toExponential;
const unsafeToNumber = n => Number(format(n));
/**
 * Checks if a given `BigDecimal` is an integer.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { isInteger, unsafeFromString } from "effect/BigDecimal"
 *
 * assert.deepStrictEqual(isInteger(unsafeFromString("0")), true)
 * assert.deepStrictEqual(isInteger(unsafeFromString("1")), true)
 * assert.deepStrictEqual(isInteger(unsafeFromString("1.1")), false)
 * ```
 *
 * @since 2.0.0
 * @category predicates
 */
exports.unsafeToNumber = unsafeToNumber;
const isInteger = n => normalize(n).scale <= 0;
/**
 * Checks if a given `BigDecimal` is `0`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { isZero, unsafeFromString } from "effect/BigDecimal"
 *
 * assert.deepStrictEqual(isZero(unsafeFromString("0")), true)
 * assert.deepStrictEqual(isZero(unsafeFromString("1")), false)
 * ```
 *
 * @since 2.0.0
 * @category predicates
 */
exports.isInteger = isInteger;
const isZero = n => n.value === bigint0;
/**
 * Checks if a given `BigDecimal` is negative.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { isNegative, unsafeFromString } from "effect/BigDecimal"
 *
 * assert.deepStrictEqual(isNegative(unsafeFromString("-1")), true)
 * assert.deepStrictEqual(isNegative(unsafeFromString("0")), false)
 * assert.deepStrictEqual(isNegative(unsafeFromString("1")), false)
 * ```
 *
 * @since 2.0.0
 * @category predicates
 */
exports.isZero = isZero;
const isNegative = n => n.value < bigint0;
/**
 * Checks if a given `BigDecimal` is positive.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { isPositive, unsafeFromString } from "effect/BigDecimal"
 *
 * assert.deepStrictEqual(isPositive(unsafeFromString("-1")), false)
 * assert.deepStrictEqual(isPositive(unsafeFromString("0")), false)
 * assert.deepStrictEqual(isPositive(unsafeFromString("1")), true)
 * ```
 *
 * @since 2.0.0
 * @category predicates
 */
exports.isNegative = isNegative;
const isPositive = n => n.value > bigint0;
exports.isPositive = isPositive;
const isBigDecimalArgs = args => isBigDecimal(args[0]);
/**
 * Calculate the ceiling of a `BigDecimal` at the given scale.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { ceil, unsafeFromString } from "effect/BigDecimal"
 *
 * assert.deepStrictEqual(ceil(unsafeFromString("145"), -1), unsafeFromString("150"))
 * assert.deepStrictEqual(ceil(unsafeFromString("-14.5")), unsafeFromString("-14"))
 * ```
 *
 * @since 3.16.0
 * @category math
 */
const ceil = exports.ceil = /*#__PURE__*/(0, _Function.dual)(isBigDecimalArgs, (self, scale = 0) => {
  const truncated = truncate(self, scale);
  if (isPositive(self) && lessThan(truncated, self)) {
    return sum(truncated, make(1n, scale));
  }
  return truncated;
});
/**
 * Calculate the floor of a `BigDecimal` at the given scale.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { floor, unsafeFromString } from "effect/BigDecimal"
 *
 * assert.deepStrictEqual(floor(unsafeFromString("145"), -1), unsafeFromString("140"))
 * assert.deepStrictEqual(floor(unsafeFromString("-14.5")), unsafeFromString("-15"))
 * ```
 *
 * @since 3.16.0
 * @category math
 */
const floor = exports.floor = /*#__PURE__*/(0, _Function.dual)(isBigDecimalArgs, (self, scale = 0) => {
  const truncated = truncate(self, scale);
  if (isNegative(self) && greaterThan(truncated, self)) {
    return sum(truncated, make(-1n, scale));
  }
  return truncated;
});
/**
 * Truncate a `BigDecimal` at the given scale. This is the same operation as rounding away from zero.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { truncate, unsafeFromString } from "effect/BigDecimal"
 *
 * assert.deepStrictEqual(truncate(unsafeFromString("145"), -1), unsafeFromString("140"))
 * assert.deepStrictEqual(truncate(unsafeFromString("-14.5")), unsafeFromString("-14"))
 * ```
 *
 * @since 3.16.0
 * @category math
 */
const truncate = exports.truncate = /*#__PURE__*/(0, _Function.dual)(isBigDecimalArgs, (self, scale = 0) => {
  if (self.scale <= scale) {
    return self;
  }
  // BigInt division truncates towards zero
  return make(self.value / 10n ** BigInt(self.scale - scale), scale);
});
/**
 * Internal function used by `round` for `half-even` and `half-odd` rounding modes.
 *
 * Returns the digit at the position of the given `scale` within the `BigDecimal`.
 *
 * @internal
 */
const digitAt = exports.digitAt = /*#__PURE__*/(0, _Function.dual)(2, (self, scale) => {
  if (self.scale < scale) {
    return 0n;
  }
  const scaled = self.value / 10n ** BigInt(self.scale - scale);
  return scaled % 10n;
});
/**
 * Rounds a `BigDecimal` at the given scale with the specified rounding mode.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { round, unsafeFromString } from "effect/BigDecimal"
 *
 * assert.deepStrictEqual(round(unsafeFromString("145"), { mode: "from-zero", scale: -1 }), unsafeFromString("150"))
 * assert.deepStrictEqual(round(unsafeFromString("-14.5")), unsafeFromString("-15"))
 * ```
 *
 * @since 3.16.0
 * @category math
 */
const round = exports.round = /*#__PURE__*/(0, _Function.dual)(isBigDecimalArgs, (self, options) => {
  const mode = options?.mode ?? "half-from-zero";
  const scale = options?.scale ?? 0;
  switch (mode) {
    case "ceil":
      return ceil(self, scale);
    case "floor":
      return floor(self, scale);
    case "to-zero":
      return truncate(self, scale);
    case "from-zero":
      return isPositive(self) ? ceil(self, scale) : floor(self, scale);
    case "half-ceil":
      return floor(sum(self, make(5n, scale + 1)), scale);
    case "half-floor":
      return ceil(sum(self, make(-5n, scale + 1)), scale);
    case "half-to-zero":
      return isNegative(self) ? floor(sum(self, make(5n, scale + 1)), scale) : ceil(sum(self, make(-5n, scale + 1)), scale);
    case "half-from-zero":
      return isNegative(self) ? ceil(sum(self, make(-5n, scale + 1)), scale) : floor(sum(self, make(5n, scale + 1)), scale);
  }
  const halfCeil = floor(sum(self, make(5n, scale + 1)), scale);
  const halfFloor = ceil(sum(self, make(-5n, scale + 1)), scale);
  const digit = digitAt(halfCeil, scale);
  switch (mode) {
    case "half-even":
      return equals(halfCeil, halfFloor) ? halfCeil : digit % 2n === 0n ? halfCeil : halfFloor;
    case "half-odd":
      return equals(halfCeil, halfFloor) ? halfCeil : digit % 2n === 0n ? halfFloor : halfCeil;
  }
});
/**
 * Takes an `Iterable` of `BigDecimal`s and returns their sum as a single `BigDecimal`
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { unsafeFromString, sumAll } from "effect/BigDecimal"
 *
 * assert.deepStrictEqual(sumAll([unsafeFromString("2"), unsafeFromString("3"), unsafeFromString("4")]), unsafeFromString("9"))
 * ```
 *
 * @category math
 * @since 3.16.0
 */
const sumAll = collection => {
  let out = zero;
  for (const n of collection) {
    out = sum(out, n);
  }
  return out;
};
exports.sumAll = sumAll;
//# sourceMappingURL=BigDecimal.js.map