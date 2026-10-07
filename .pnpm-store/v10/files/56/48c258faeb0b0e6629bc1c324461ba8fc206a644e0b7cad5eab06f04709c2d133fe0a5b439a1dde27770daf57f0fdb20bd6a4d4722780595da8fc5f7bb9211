"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.set = exports.make = exports.get = exports.fromAcquire = exports.ScopedRefTypeId = void 0;
var internal = _interopRequireWildcard(require("./internal/scopedRef.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 * @category symbols
 */
const ScopedRefTypeId = exports.ScopedRefTypeId = internal.ScopedRefTypeId;
/**
 * Creates a new `ScopedRef` from an effect that resourcefully produces a
 * value.
 *
 * @since 2.0.0
 * @category constructors
 */
const fromAcquire = exports.fromAcquire = internal.fromAcquire;
/**
 * Retrieves the current value of the scoped reference.
 *
 * @since 2.0.0
 * @category getters
 */
const get = exports.get = internal.get;
/**
 * Creates a new `ScopedRef` from the specified value. This method should
 * not be used for values whose creation require the acquisition of resources.
 *
 * @since 2.0.0
 * @category constructors
 */
const make = exports.make = internal.make;
/**
 * Sets the value of this reference to the specified resourcefully-created
 * value. Any resources associated with the old value will be released.
 *
 * This method will not return until either the reference is successfully
 * changed to the new value, with old resources released, or until the attempt
 * to acquire a new value fails.
 *
 * @since 2.0.0
 * @category getters
 */
const set = exports.set = internal.set;
//# sourceMappingURL=ScopedRef.js.map