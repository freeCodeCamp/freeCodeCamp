"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSymbol = exports.Equivalence = void 0;
var equivalence = _interopRequireWildcard(require("./Equivalence.js"));
var predicate = _interopRequireWildcard(require("./Predicate.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 */

/**
 * Tests if a value is a `symbol`.
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Predicate } from "effect"
 *
 * assert.deepStrictEqual(Predicate.isSymbol(Symbol.for("a")), true)
 * assert.deepStrictEqual(Predicate.isSymbol("a"), false)
 * ```
 *
 * @category guards
 * @since 2.0.0
 */
const isSymbol = exports.isSymbol = predicate.isSymbol;
/**
 * @category instances
 * @since 2.0.0
 */
const Equivalence = exports.Equivalence = equivalence.symbol;
//# sourceMappingURL=Symbol.js.map