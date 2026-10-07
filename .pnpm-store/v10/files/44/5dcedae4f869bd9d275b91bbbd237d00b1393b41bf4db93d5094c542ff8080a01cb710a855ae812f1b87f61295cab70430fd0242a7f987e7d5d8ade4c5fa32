"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.xor = exports.some = exports.or = exports.not = exports.nor = exports.nand = exports.match = exports.isBoolean = exports.implies = exports.every = exports.eqv = exports.and = exports.Order = exports.Equivalence = void 0;
var equivalence = _interopRequireWildcard(require("./Equivalence.js"));
var _Function = require("./Function.js");
var order = _interopRequireWildcard(require("./Order.js"));
var predicate = _interopRequireWildcard(require("./Predicate.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * This module provides utility functions and type class instances for working with the `boolean` type in TypeScript.
 * It includes functions for basic boolean operations, as well as type class instances for
 * `Equivalence` and `Order`.
 *
 * @since 2.0.0
 */

/**
 * Tests if a value is a `boolean`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { isBoolean } from "effect/Boolean"
 *
 * assert.deepStrictEqual(isBoolean(true), true)
 * assert.deepStrictEqual(isBoolean("true"), false)
 * ```
 *
 * @category guards
 * @since 2.0.0
 */
const isBoolean = exports.isBoolean = predicate.isBoolean;
/**
 * This function returns the result of either of the given functions depending on the value of the boolean parameter.
 * It is useful when you have to run one of two functions depending on the boolean value.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Boolean } from "effect"
 *
 * assert.deepStrictEqual(Boolean.match(true, { onFalse: () => "It's false!", onTrue: () => "It's true!" }), "It's true!")
 * ```
 *
 * @category pattern matching
 * @since 2.0.0
 */
const match = exports.match = /*#__PURE__*/(0, _Function.dual)(2, (value, options) => value ? options.onTrue() : options.onFalse());
/**
 * @category instances
 * @since 2.0.0
 */
const Equivalence = exports.Equivalence = equivalence.boolean;
/**
 * @category instances
 * @since 2.0.0
 */
const Order = exports.Order = order.boolean;
/**
 * Negates the given boolean: `!self`
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { not } from "effect/Boolean"
 *
 * assert.deepStrictEqual(not(true), false)
 * assert.deepStrictEqual(not(false), true)
 * ```
 *
 * @category combinators
 * @since 2.0.0
 */
const not = self => !self;
/**
 * Combines two boolean using AND: `self && that`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { and } from "effect/Boolean"
 *
 * assert.deepStrictEqual(and(true, true), true)
 * assert.deepStrictEqual(and(true, false), false)
 * assert.deepStrictEqual(and(false, true), false)
 * assert.deepStrictEqual(and(false, false), false)
 * ```
 *
 * @category combinators
 * @since 2.0.0
 */
exports.not = not;
const and = exports.and = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => self && that);
/**
 * Combines two boolean using NAND: `!(self && that)`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { nand } from "effect/Boolean"
 *
 * assert.deepStrictEqual(nand(true, true), false)
 * assert.deepStrictEqual(nand(true, false), true)
 * assert.deepStrictEqual(nand(false, true), true)
 * assert.deepStrictEqual(nand(false, false), true)
 * ```
 *
 * @category combinators
 * @since 2.0.0
 */
const nand = exports.nand = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => !(self && that));
/**
 * Combines two boolean using OR: `self || that`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { or } from "effect/Boolean"
 *
 * assert.deepStrictEqual(or(true, true), true)
 * assert.deepStrictEqual(or(true, false), true)
 * assert.deepStrictEqual(or(false, true), true)
 * assert.deepStrictEqual(or(false, false), false)
 * ```
 *
 * @category combinators
 * @since 2.0.0
 */
const or = exports.or = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => self || that);
/**
 * Combines two booleans using NOR: `!(self || that)`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { nor } from "effect/Boolean"
 *
 * assert.deepStrictEqual(nor(true, true), false)
 * assert.deepStrictEqual(nor(true, false), false)
 * assert.deepStrictEqual(nor(false, true), false)
 * assert.deepStrictEqual(nor(false, false), true)
 * ```
 *
 * @category combinators
 * @since 2.0.0
 */
const nor = exports.nor = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => !(self || that));
/**
 * Combines two booleans using XOR: `(!self && that) || (self && !that)`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { xor } from "effect/Boolean"
 *
 * assert.deepStrictEqual(xor(true, true), false)
 * assert.deepStrictEqual(xor(true, false), true)
 * assert.deepStrictEqual(xor(false, true), true)
 * assert.deepStrictEqual(xor(false, false), false)
 * ```
 *
 * @category combinators
 * @since 2.0.0
 */
const xor = exports.xor = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => !self && that || self && !that);
/**
 * Combines two booleans using EQV (aka XNOR): `!xor(self, that)`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { eqv } from "effect/Boolean"
 *
 * assert.deepStrictEqual(eqv(true, true), true)
 * assert.deepStrictEqual(eqv(true, false), false)
 * assert.deepStrictEqual(eqv(false, true), false)
 * assert.deepStrictEqual(eqv(false, false), true)
 * ```
 *
 * @category combinators
 * @since 2.0.0
 */
const eqv = exports.eqv = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => !xor(self, that));
/**
 * Combines two booleans using an implication: `(!self || that)`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { implies } from "effect/Boolean"
 *
 * assert.deepStrictEqual(implies(true, true), true)
 * assert.deepStrictEqual(implies(true, false), false)
 * assert.deepStrictEqual(implies(false, true), true)
 * assert.deepStrictEqual(implies(false, false), true)
 * ```
 *
 * @category combinators
 * @since 2.0.0
 */
const implies = exports.implies = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => self ? that : true);
/**
 * This utility function is used to check if all the elements in a collection of boolean values are `true`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { every } from "effect/Boolean"
 *
 * assert.deepStrictEqual(every([true, true, true]), true)
 * assert.deepStrictEqual(every([true, false, true]), false)
 * ```
 *
 * @since 2.0.0
 */
const every = collection => {
  for (const b of collection) {
    if (!b) {
      return false;
    }
  }
  return true;
};
/**
 * This utility function is used to check if at least one of the elements in a collection of boolean values is `true`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { some } from "effect/Boolean"
 *
 * assert.deepStrictEqual(some([true, false, true]), true)
 * assert.deepStrictEqual(some([false, false, false]), false)
 * ```
 *
 * @since 2.0.0
 */
exports.every = every;
const some = collection => {
  for (const b of collection) {
    if (b) {
      return true;
    }
  }
  return false;
};
exports.some = some;
//# sourceMappingURL=Boolean.js.map