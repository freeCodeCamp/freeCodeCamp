"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.make = exports.invalidate = exports.get = exports.TypeId = void 0;
var internal = _interopRequireWildcard(require("./internal/rcRef.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 3.5.0
 * @category type ids
 */
const TypeId = exports.TypeId = internal.TypeId;
/**
 * Create an `RcRef` from an acquire `Effect`.
 *
 * An RcRef wraps a reference counted resource that can be acquired and released
 * multiple times.
 *
 * The resource is lazily acquired on the first call to `get` and released when
 * the last reference is released.
 *
 * @since 3.5.0
 * @category constructors
 * @example
 * ```ts
 * import { Effect, RcRef } from "effect"
 *
 * Effect.gen(function*() {
 *   const ref = yield* RcRef.make({
 *     acquire: Effect.acquireRelease(
 *       Effect.succeed("foo"),
 *       () => Effect.log("release foo")
 *     )
 *   })
 *
 *   // will only acquire the resource once, and release it
 *   // when the scope is closed
 *   yield* RcRef.get(ref).pipe(
 *     Effect.andThen(RcRef.get(ref)),
 *     Effect.scoped
 *   )
 * })
 * ```
 */
const make = exports.make = internal.make;
/**
 * @since 3.5.0
 * @category combinators
 */
const get = exports.get = internal.get;
/**
 * @since 3.19.6
 * @category combinators
 * @experimental
 */
const invalidate = exports.invalidate = internal.invalidate;
//# sourceMappingURL=RcRef.js.map