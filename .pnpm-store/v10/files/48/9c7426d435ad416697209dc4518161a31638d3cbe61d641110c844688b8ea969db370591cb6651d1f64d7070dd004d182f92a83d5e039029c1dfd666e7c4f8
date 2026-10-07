"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.touch = exports.make = exports.keys = exports.invalidate = exports.has = exports.get = exports.TypeId = void 0;
var internal = _interopRequireWildcard(require("./internal/rcMap.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 3.5.0
 * @category type ids
 */
const TypeId = exports.TypeId = internal.TypeId;
/**
 * An `RcMap` can contain multiple reference counted resources that can be indexed
 * by a key. The resources are lazily acquired on the first call to `get` and
 * released when the last reference is released.
 *
 * Complex keys can extend `Equal` and `Hash` to allow lookups by value.
 *
 * **Options**
 *
 * - `capacity`: The maximum number of resources that can be held in the map.
 * - `idleTimeToLive`: When the reference count reaches zero, the resource will be released after this duration.
 *   Can be a static duration or a function that returns a duration based on the key.
 *
 * @since 3.5.0
 * @category models
 * @example
 * ```ts
 * import { Effect, RcMap } from "effect"
 *
 * Effect.gen(function*() {
 *   const map = yield* RcMap.make({
 *     lookup: (key: string) =>
 *       Effect.acquireRelease(
 *         Effect.succeed(`acquired ${key}`),
 *         () => Effect.log(`releasing ${key}`)
 *       )
 *   })
 *
 *   // Get "foo" from the map twice, which will only acquire it once.
 *   // It will then be released once the scope closes.
 *   yield* RcMap.get(map, "foo").pipe(
 *     Effect.andThen(RcMap.get(map, "foo")),
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
 * @since 3.17.7
 * @category combinators
 */
const has = exports.has = internal.has;
/**
 * @since 3.8.0
 * @category combinators
 */
const keys = exports.keys = internal.keys;
/**
 * @since 3.13.0
 * @category combinators
 */
const invalidate = exports.invalidate = internal.invalidate;
/**
 * @since 3.13.0
 * @category combinators
 */
const touch = exports.touch = internal.touch;
//# sourceMappingURL=RcMap.js.map