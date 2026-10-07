/**
 * This module provides an implementation of the `Order` type class which is used to define a total ordering on some type `A`.
 * An order is defined by a relation `<=`, which obeys the following laws:
 *
 * - either `x <= y` or `y <= x` (totality)
 * - if `x <= y` and `y <= x`, then `x == y` (antisymmetry)
 * - if `x <= y` and `y <= z`, then `x <= z` (transitivity)
 *
 * The truth table for compare is defined as follows:
 *
 * | `x <= y` | `x >= y` | Ordering |                       |
 * | -------- | -------- | -------- | --------------------- |
 * | `true`   | `true`   | `0`      | corresponds to x == y |
 * | `true`   | `false`  | `< 0`    | corresponds to x < y  |
 * | `false`  | `true`   | `> 0`    | corresponds to x > y  |
 *
 * @since 2.0.0
 */
import { dual } from "./Function.js";
/**
 * @category constructors
 * @since 2.0.0
 */
export const make = compare => (self, that) => self === that ? 0 : compare(self, that);
/**
 * @category instances
 * @since 2.0.0
 */
export const string = /*#__PURE__*/make((self, that) => self < that ? -1 : 1);
/**
 * @category instances
 * @since 2.0.0
 */
export const number = /*#__PURE__*/make((self, that) => self < that ? -1 : 1);
/**
 * @category instances
 * @since 2.0.0
 */
export const boolean = /*#__PURE__*/make((self, that) => self < that ? -1 : 1);
/**
 * @category instances
 * @since 2.0.0
 */
export const bigint = /*#__PURE__*/make((self, that) => self < that ? -1 : 1);
/**
 * @since 2.0.0
 */
export const reverse = O => make((self, that) => O(that, self));
/**
 * @category combining
 * @since 2.0.0
 */
export const combine = /*#__PURE__*/dual(2, (self, that) => make((a1, a2) => {
  const out = self(a1, a2);
  if (out !== 0) {
    return out;
  }
  return that(a1, a2);
}));
/**
 * @category combining
 * @since 2.0.0
 */
export const combineMany = /*#__PURE__*/dual(2, (self, collection) => make((a1, a2) => {
  let out = self(a1, a2);
  if (out !== 0) {
    return out;
  }
  for (const O of collection) {
    out = O(a1, a2);
    if (out !== 0) {
      return out;
    }
  }
  return out;
}));
/**
 * @since 2.0.0
 */
export const empty = () => make(() => 0);
/**
 * @category combining
 * @since 2.0.0
 */
export const combineAll = collection => combineMany(empty(), collection);
/**
 * @category mapping
 * @since 2.0.0
 */
export const mapInput = /*#__PURE__*/dual(2, (self, f) => make((b1, b2) => self(f(b1), f(b2))));
/**
 * @category instances
 * @since 2.0.0
 */
export const Date = /*#__PURE__*/mapInput(number, date => date.getTime());
/**
 * @category combining
 * @since 2.0.0
 */
export const product = /*#__PURE__*/dual(2, (self, that) => make(([xa, xb], [ya, yb]) => {
  const o = self(xa, ya);
  return o !== 0 ? o : that(xb, yb);
}));
/**
 * @category combining
 * @since 2.0.0
 */
export const all = collection => {
  return make((x, y) => {
    const len = Math.min(x.length, y.length);
    let collectionLength = 0;
    for (const O of collection) {
      if (collectionLength >= len) {
        break;
      }
      const o = O(x[collectionLength], y[collectionLength]);
      if (o !== 0) {
        return o;
      }
      collectionLength++;
    }
    return 0;
  });
};
/**
 * @category combining
 * @since 2.0.0
 */
export const productMany = /*#__PURE__*/dual(2, (self, collection) => {
  const O = all(collection);
  return make((x, y) => {
    const o = self(x[0], y[0]);
    return o !== 0 ? o : O(x.slice(1), y.slice(1));
  });
});
/**
 * Similar to `Promise.all` but operates on `Order`s.
 *
 * ```
 * [Order<A>, Order<B>, ...] -> Order<[A, B, ...]>
 * ```
 *
 * This function creates and returns a new `Order` for a tuple of values based on the given `Order`s for each element in the tuple.
 * The returned `Order` compares two tuples of the same type by applying the corresponding `Order` to each element in the tuple.
 * It is useful when you need to compare two tuples of the same type and you have a specific way of comparing each element
 * of the tuple.
 *
 * @category combinators
 * @since 2.0.0
 */
export const tuple = (...elements) => all(elements);
/**
 * This function creates and returns a new `Order` for an array of values based on a given `Order` for the elements of the array.
 * The returned `Order` compares two arrays by applying the given `Order` to each element in the arrays.
 * If all elements are equal, the arrays are then compared based on their length.
 * It is useful when you need to compare two arrays of the same type and you have a specific way of comparing each element of the array.
 *
 * @category combinators
 * @since 2.0.0
 */
export const array = O => make((self, that) => {
  const aLen = self.length;
  const bLen = that.length;
  const len = Math.min(aLen, bLen);
  for (let i = 0; i < len; i++) {
    const o = O(self[i], that[i]);
    if (o !== 0) {
      return o;
    }
  }
  return number(aLen, bLen);
});
/**
 * This function creates and returns a new `Order` for a struct of values based on the given `Order`s
 * for each property in the struct.
 *
 * @category combinators
 * @since 2.0.0
 */
export const struct = fields => {
  const keys = Object.keys(fields);
  return make((self, that) => {
    for (const key of keys) {
      const o = fields[key](self[key], that[key]);
      if (o !== 0) {
        return o;
      }
    }
    return 0;
  });
};
/**
 * Test whether one value is _strictly less than_ another.
 *
 * @since 2.0.0
 */
export const lessThan = O => dual(2, (self, that) => O(self, that) === -1);
/**
 * Test whether one value is _strictly greater than_ another.
 *
 * @since 2.0.0
 */
export const greaterThan = O => dual(2, (self, that) => O(self, that) === 1);
/**
 * Test whether one value is _non-strictly less than_ another.
 *
 * @since 2.0.0
 */
export const lessThanOrEqualTo = O => dual(2, (self, that) => O(self, that) !== 1);
/**
 * Test whether one value is _non-strictly greater than_ another.
 *
 * @since 2.0.0
 */
export const greaterThanOrEqualTo = O => dual(2, (self, that) => O(self, that) !== -1);
/**
 * Take the minimum of two values. If they are considered equal, the first argument is chosen.
 *
 * @since 2.0.0
 */
export const min = O => dual(2, (self, that) => self === that || O(self, that) < 1 ? self : that);
/**
 * Take the maximum of two values. If they are considered equal, the first argument is chosen.
 *
 * @since 2.0.0
 */
export const max = O => dual(2, (self, that) => self === that || O(self, that) > -1 ? self : that);
/**
 * Clamp a value between a minimum and a maximum.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Order, Number } from "effect"
 *
 * const clamp = Order.clamp(Number.Order)({ minimum: 1, maximum: 5 })
 *
 * assert.equal(clamp(3), 3)
 * assert.equal(clamp(0), 1)
 * assert.equal(clamp(6), 5)
 * ```
 *
 * @since 2.0.0
 */
export const clamp = O => dual(2, (self, options) => min(O)(options.maximum, max(O)(options.minimum, self)));
/**
 * Test whether a value is between a minimum and a maximum (inclusive).
 *
 * @since 2.0.0
 */
export const between = O => dual(2, (self, options) => !lessThan(O)(self, options.minimum) && !greaterThan(O)(self, options.maximum));
//# sourceMappingURL=Order.js.map