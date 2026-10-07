"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSecond = exports.getOrder = exports.getFirst = exports.getEquivalence = exports.at = exports.appendElement = void 0;
Object.defineProperty(exports, "isTupleOf", {
  enumerable: true,
  get: function () {
    return _Predicate.isTupleOf;
  }
});
Object.defineProperty(exports, "isTupleOfAtLeast", {
  enumerable: true,
  get: function () {
    return _Predicate.isTupleOfAtLeast;
  }
});
exports.swap = exports.mapSecond = exports.mapFirst = exports.mapBoth = exports.map = exports.make = void 0;
var Equivalence = _interopRequireWildcard(require("./Equivalence.js"));
var _Function = require("./Function.js");
var order = _interopRequireWildcard(require("./Order.js"));
var _Predicate = require("./Predicate.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * This module provides utility functions for working with tuples in TypeScript.
 *
 * @since 2.0.0
 */

/**
 * Constructs a new tuple from the provided values.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { make } from "effect/Tuple"
 *
 * assert.deepStrictEqual(make(1, 'hello', true), [1, 'hello', true])
 * ```
 *
 * @category constructors
 * @since 2.0.0
 */
const make = (...elements) => elements;
/**
 * Return the first element from a tuple with two elements.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { getFirst } from "effect/Tuple"
 *
 * assert.deepStrictEqual(getFirst(["hello", 42]), "hello")
 * ```
 *
 * @category getters
 * @since 2.0.0
 */
exports.make = make;
const getFirst = self => self[0];
/**
 * Return the second element from a tuple with two elements.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { getSecond } from "effect/Tuple"
 *
 * assert.deepStrictEqual(getSecond(["hello", 42]), 42)
 * ```
 *
 * @category getters
 * @since 2.0.0
 */
exports.getFirst = getFirst;
const getSecond = self => self[1];
/**
 * Transforms each element of tuple using the given function, treating tuple homomorphically
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { pipe, Tuple } from "effect"
 *
 * const result = pipe(
 *   ["a", 1, false] as const,
 *   Tuple.map((el) => el.toString().toUpperCase())
 * )
 * assert.deepStrictEqual(result, ['A', '1', 'FALSE'])
 * ```
 *
 * @category mapping
 * @since 3.9.0
 */
exports.getSecond = getSecond;
const map = exports.map = /*#__PURE__*/(0, _Function.dual)(2, (self, fn) => self.map(element => fn(element)));
/**
 * Transforms both elements of a tuple with two elements using the given functions.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { mapBoth } from "effect/Tuple"
 *
 * assert.deepStrictEqual(
 *   mapBoth(["hello", 42], { onFirst: s => s.toUpperCase(), onSecond: n => n.toString() }),
 *   ["HELLO", "42"]
 * )
 * ```
 *
 * @category mapping
 * @since 2.0.0
 */
const mapBoth = exports.mapBoth = /*#__PURE__*/(0, _Function.dual)(2, (self, {
  onFirst,
  onSecond
}) => [onFirst(self[0]), onSecond(self[1])]);
/**
 * Transforms the first component of a tuple with two elements using a given function.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { mapFirst } from "effect/Tuple"
 *
 * assert.deepStrictEqual(
 *   mapFirst(["hello", 42], s => s.toUpperCase()),
 *   ["HELLO", 42]
 * )
 * ```
 *
 * @category mapping
 * @since 2.0.0
 */
const mapFirst = exports.mapFirst = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => [f(self[0]), self[1]]);
/**
 * Transforms the second component of a tuple with two elements using a given function.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { mapSecond } from "effect/Tuple"
 *
 * assert.deepStrictEqual(
 *   mapSecond(["hello", 42], n => n.toString()),
 *   ["hello", "42"]
 * )
 * ```
 *
 * @category mapping
 * @since 2.0.0
 */
const mapSecond = exports.mapSecond = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => [self[0], f(self[1])]);
/**
 * Swaps the elements of a tuple with two elements.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { swap } from "effect/Tuple"
 *
 * assert.deepStrictEqual(swap(["hello", 42]), [42, "hello"])
 * ```
 *
 * @since 2.0.0
 */
const swap = self => [self[1], self[0]];
/**
 * Given a tuple of `Equivalence`s returns a new `Equivalence` that compares values of a tuple
 * by applying each `Equivalence` to the corresponding element of the tuple.
 *
 * @category combinators
 * @since 2.0.0
 */
exports.swap = swap;
const getEquivalence = exports.getEquivalence = Equivalence.tuple;
/**
 * This function creates and returns a new `Order` for a tuple of values based on the given `Order`s for each element in the tuple.
 * The returned `Order` compares two tuples of the same type by applying the corresponding `Order` to each element in the tuple.
 * It is useful when you need to compare two tuples of the same type and you have a specific way of comparing each element
 * of the tuple.
 *
 * @category combinators
 * @since 2.0.0
 */
const getOrder = exports.getOrder = order.tuple;
/**
 * Appends an element to the end of a tuple.
 *
 * @category concatenating
 * @since 2.0.0
 */
const appendElement = exports.appendElement = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => [...self, that]);
/**
 * Retrieves the element at a specified index from a tuple.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Tuple } from "effect"
 *
 * assert.deepStrictEqual(Tuple.at([1, 'hello', true], 1), 'hello')
 * ```
 *
 * @category getters
 * @since 3.4.0
 */
const at = exports.at = /*#__PURE__*/(0, _Function.dual)(2, (self, index) => self[index]);
//# sourceMappingURL=Tuple.js.map