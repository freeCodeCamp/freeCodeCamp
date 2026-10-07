"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isRegExp = exports.escape = void 0;
var predicate = _interopRequireWildcard(require("./Predicate.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * This module provides utility functions for working with RegExp in TypeScript.
 *
 * @since 2.0.0
 */

/**
 * Tests if a value is a `RegExp`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { RegExp } from "effect"
 *
 * assert.deepStrictEqual(RegExp.isRegExp(/a/), true)
 * assert.deepStrictEqual(RegExp.isRegExp("a"), false)
 * ```
 *
 * @category guards
 * @since 3.9.0
 */
const isRegExp = exports.isRegExp = predicate.isRegExp;
/**
 * Escapes special characters in a regular expression pattern.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { RegExp } from "effect"
 *
 * assert.deepStrictEqual(RegExp.escape("a*b"), "a\\*b")
 * ```
 *
 * @since 2.0.0
 */
const escape = string => string.replace(/[/\\^$*+?.()|[\]{}]/g, "\\$&");
exports.escape = escape;
//# sourceMappingURL=RegExp.js.map