/**
 * This module provides an implementation of the `Equivalence` type class, which defines a binary relation
 * that is reflexive, symmetric, and transitive. In other words, it defines a notion of equivalence between values of a certain type.
 * These properties are also known in mathematics as an "equivalence relation".
 *
 * @since 2.0.0
 */
import { dual } from "./Function.js";
/**
 * @category constructors
 * @since 2.0.0
 */
export const make = isEquivalent => (self, that) => self === that || isEquivalent(self, that);
const isStrictEquivalent = (x, y) => x === y;
/**
 * Return an `Equivalence` that uses strict equality (===) to compare values.
 *
 * @since 2.0.0
 * @category constructors
 */
export const strict = () => isStrictEquivalent;
/**
 * @category instances
 * @since 2.0.0
 */
export const string = /*#__PURE__*/strict();
/**
 * @category instances
 * @since 2.0.0
 */
export const number = /*#__PURE__*/strict();
/**
 * @category instances
 * @since 2.0.0
 */
export const boolean = /*#__PURE__*/strict();
/**
 * @category instances
 * @since 2.0.0
 */
export const bigint = /*#__PURE__*/strict();
/**
 * @category instances
 * @since 2.0.0
 */
export const symbol = /*#__PURE__*/strict();
/**
 * @category combining
 * @since 2.0.0
 */
export const combine = /*#__PURE__*/dual(2, (self, that) => make((x, y) => self(x, y) && that(x, y)));
/**
 * @category combining
 * @since 2.0.0
 */
export const combineMany = /*#__PURE__*/dual(2, (self, collection) => make((x, y) => {
  if (!self(x, y)) {
    return false;
  }
  for (const equivalence of collection) {
    if (!equivalence(x, y)) {
      return false;
    }
  }
  return true;
}));
const isAlwaysEquivalent = (_x, _y) => true;
/**
 * @category combining
 * @since 2.0.0
 */
export const combineAll = collection => combineMany(isAlwaysEquivalent, collection);
/**
 * @category mapping
 * @since 2.0.0
 */
export const mapInput = /*#__PURE__*/dual(2, (self, f) => make((x, y) => self(f(x), f(y))));
/**
 * @category instances
 * @since 2.0.0
 */
export const Date = /*#__PURE__*/mapInput(number, date => date.getTime());
/**
 * @category combining
 * @since 2.0.0
 */
export const product = /*#__PURE__*/dual(2, (self, that) => make(([xa, xb], [ya, yb]) => self(xa, ya) && that(xb, yb)));
/**
 * @category combining
 * @since 2.0.0
 */
export const all = collection => {
  return make((x, y) => {
    const len = Math.min(x.length, y.length);
    let collectionLength = 0;
    for (const equivalence of collection) {
      if (collectionLength >= len) {
        break;
      }
      if (!equivalence(x[collectionLength], y[collectionLength])) {
        return false;
      }
      collectionLength++;
    }
    return true;
  });
};
/**
 * @category combining
 * @since 2.0.0
 */
export const productMany = (self, collection) => {
  const equivalence = all(collection);
  return make((x, y) => !self(x[0], y[0]) ? false : equivalence(x.slice(1), y.slice(1)));
};
/**
 * Similar to `Promise.all` but operates on `Equivalence`s.
 *
 * ```ts skip-type-checking
 * [Equivalence<A>, Equivalence<B>, ...] -> Equivalence<[A, B, ...]>
 * ```
 *
 * Given a tuple of `Equivalence`s returns a new `Equivalence` that compares values of a tuple
 * by applying each `Equivalence` to the corresponding element of the tuple.
 *
 * @category combinators
 * @since 2.0.0
 */
export const tuple = (...elements) => all(elements);
/**
 * Creates a new `Equivalence` for an array of values based on a given `Equivalence` for the elements of the array.
 *
 * @category combinators
 * @since 2.0.0
 */
export const array = item => make((self, that) => {
  if (self.length !== that.length) {
    return false;
  }
  for (let i = 0; i < self.length; i++) {
    const isEq = item(self[i], that[i]);
    if (!isEq) {
      return false;
    }
  }
  return true;
});
/**
 * Given a struct of `Equivalence`s returns a new `Equivalence` that compares values of a struct
 * by applying each `Equivalence` to the corresponding property of the struct.
 *
 * @category combinators
 * @since 2.0.0
 */
export const struct = fields => {
  const keys = Object.keys(fields);
  return make((self, that) => {
    for (const key of keys) {
      if (!fields[key](self[key], that[key])) {
        return false;
      }
    }
    return true;
  });
};
//# sourceMappingURL=Equivalence.js.map