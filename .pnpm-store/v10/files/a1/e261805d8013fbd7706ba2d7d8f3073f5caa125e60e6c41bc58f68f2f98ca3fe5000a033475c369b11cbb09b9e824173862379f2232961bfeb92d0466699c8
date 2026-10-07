"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pick = exports.omit = exports.keys = exports.getOrder = exports.getEquivalence = exports.get = exports.evolve = exports.entries = void 0;
var Equivalence = _interopRequireWildcard(require("./Equivalence.js"));
var _Function = require("./Function.js");
var order = _interopRequireWildcard(require("./Order.js"));
var Predicate = _interopRequireWildcard(require("./Predicate.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * This module provides utility functions for working with structs in TypeScript.
 *
 * @since 2.0.0
 */

/**
 * Create a new object by picking properties of an existing object.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { pipe, Struct } from "effect"
 *
 * assert.deepStrictEqual(pipe({ a: "a", b: 1, c: true }, Struct.pick("a", "b")), { a: "a", b: 1 })
 * assert.deepStrictEqual(Struct.pick({ a: "a", b: 1, c: true }, "a", "b"), { a: "a", b: 1 })
 * ```
 *
 * @since 2.0.0
 */
const pick = exports.pick = /*#__PURE__*/(0, _Function.dual)(args => Predicate.isObject(args[0]), (s, ...keys) => {
  const out = {};
  for (const k of keys) {
    if (k in s) {
      out[k] = s[k];
    }
  }
  return out;
});
/**
 * Create a new object by omitting properties of an existing object.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { pipe, Struct } from "effect"
 *
 * assert.deepStrictEqual(pipe({ a: "a", b: 1, c: true }, Struct.omit("c")), { a: "a", b: 1 })
 * assert.deepStrictEqual(Struct.omit({ a: "a", b: 1, c: true }, "c"), { a: "a", b: 1 })
 * ```
 *
 * @since 2.0.0
 */
const omit = exports.omit = /*#__PURE__*/(0, _Function.dual)(args => Predicate.isObject(args[0]), (s, ...keys) => {
  const out = {
    ...s
  };
  for (const k of keys) {
    delete out[k];
  }
  return out;
});
/**
 * Given a struct of `Equivalence`s returns a new `Equivalence` that compares values of a struct
 * by applying each `Equivalence` to the corresponding property of the struct.
 *
 * Alias of {@link Equivalence.struct}.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Struct, String, Number } from "effect"
 *
 * const PersonEquivalence = Struct.getEquivalence({
 *   name: String.Equivalence,
 *   age: Number.Equivalence
 * })
 *
 * assert.deepStrictEqual(
 *   PersonEquivalence({ name: "John", age: 25 }, { name: "John", age: 25 }),
 *   true
 * )
 * assert.deepStrictEqual(
 *   PersonEquivalence({ name: "John", age: 25 }, { name: "John", age: 40 }),
 *   false
 * )
 * ```
 *
 * @category combinators
 * @since 2.0.0
 */
const getEquivalence = exports.getEquivalence = Equivalence.struct;
/**
 * This function creates and returns a new `Order` for a struct of values based on the given `Order`s
 * for each property in the struct.
 *
 * Alias of {@link order.struct}.
 *
 * @category combinators
 * @since 2.0.0
 */
const getOrder = exports.getOrder = order.struct;
/**
 * Transforms the values of a Struct provided a transformation function for each key.
 * If no transformation function is provided for a key, it will return the original value for that key.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { pipe, Struct } from "effect"
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     { a: 'a', b: 1, c: 3 },
 *     Struct.evolve({
 *       a: (a) => a.length,
 *       b: (b) => b * 2
 *     })
 *   ),
 *   { a: 1, b: 2, c: 3 }
 * )
 * ```
 *
 * @since 2.0.0
 */
const evolve = exports.evolve = /*#__PURE__*/(0, _Function.dual)(2, (obj, t) => {
  const out = {
    ...obj
  };
  for (const k in t) {
    if (Object.prototype.hasOwnProperty.call(obj, k)) {
      // @ts-expect-error
      out[k] = t[k](obj[k]);
    }
  }
  return out;
});
/**
 * Retrieves the value associated with the specified key from a struct.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { pipe, Struct } from "effect"
 *
 * const value = pipe({ a: 1, b: 2 }, Struct.get("a"))
 *
 * assert.deepStrictEqual(value, 1)
 * ```
 *
 * @since 2.0.0
 */
const get = key => s => s[key];
/**
 * Retrieves the object keys that are strings in a typed manner
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Struct } from "effect"
 *
 * const symbol: unique symbol = Symbol()
 *
 * const value = {
 *   a: 1,
 *   b: 2,
 *   [symbol]: 3
 * }
 *
 * const keys: Array<"a" | "b"> = Struct.keys(value)
 *
 * assert.deepStrictEqual(keys, ["a", "b"])
 * ```
 *
 * @since 3.6.0
 */
exports.get = get;
const keys = o => Object.keys(o);
/**
 * Retrieves the entries (key-value pairs) of an object, where keys are strings,
 * in a type-safe manner. Symbol keys are excluded from the result.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Struct } from "effect"
 *
 * const c = Symbol("c")
 * const value = { a: "foo", b: 1, [c]: true }
 *
 * const entries: Array<["a" | "b", string | number]> = Struct.entries(value)
 *
 * assert.deepStrictEqual(entries, [["a", "foo"], ["b", 1]])
 * ```
 *
 * @since 3.17.0
 */
exports.keys = keys;
const entries = obj => Object.entries(obj);
exports.entries = entries;
//# sourceMappingURL=Struct.js.map