"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unsafeMake = exports.toSet = exports.toOption = exports.threadName = exports.runtime = exports.none = exports.make = exports.isRuntime = exports.isNone = exports.isFiberId = exports.isComposite = exports.ids = exports.getOrElse = exports.composite = exports.combineAll = exports.combine = exports.FiberIdTypeId = void 0;
var internal = _interopRequireWildcard(require("./internal/fiberId.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 * @category symbols
 */
const FiberIdTypeId = exports.FiberIdTypeId = internal.FiberIdTypeId;
/**
 * @since 2.0.0
 * @category constructors
 */
const none = exports.none = internal.none;
/**
 * @since 2.0.0
 * @category constructors
 */
const runtime = exports.runtime = internal.runtime;
/**
 * @since 2.0.0
 * @category constructors
 */
const composite = exports.composite = internal.composite;
/**
 * Returns `true` if the specified unknown value is a `FiberId`, `false`
 * otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
const isFiberId = exports.isFiberId = internal.isFiberId;
/**
 * Returns `true` if the `FiberId` is a `None`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
const isNone = exports.isNone = internal.isNone;
/**
 * Returns `true` if the `FiberId` is a `Runtime`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
const isRuntime = exports.isRuntime = internal.isRuntime;
/**
 * Returns `true` if the `FiberId` is a `Composite`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
const isComposite = exports.isComposite = internal.isComposite;
/**
 * Combine two `FiberId`s.
 *
 * @since 2.0.0
 * @category constructors
 */
const combine = exports.combine = internal.combine;
/**
 * Combines a set of `FiberId`s into a single `FiberId`.
 *
 * @since 2.0.0
 * @category constructors
 */
const combineAll = exports.combineAll = internal.combineAll;
/**
 * Returns this `FiberId` if it is not `None`, otherwise returns that `FiberId`.
 *
 * @since 2.0.0
 * @category utils
 */
const getOrElse = exports.getOrElse = internal.getOrElse;
/**
 * Get the set of identifiers for this `FiberId`.
 *
 * @since 2.0.0
 * @category destructors
 */
const ids = exports.ids = internal.ids;
/**
 * Creates a new `FiberId`.
 *
 * @since 2.0.0
 * @category constructors
 */
const make = exports.make = internal.make;
/**
 * Creates a string representing the name of the current thread of execution
 * represented by the specified `FiberId`.
 *
 * @since 2.0.0
 * @category destructors
 */
const threadName = exports.threadName = internal.threadName;
/**
 * Convert a `FiberId` into an `Option<FiberId>`.
 *
 * @since 2.0.0
 * @category destructors
 */
const toOption = exports.toOption = internal.toOption;
/**
 * Convert a `FiberId` into a `HashSet<FiberId>`.
 *
 * @since 2.0.0
 * @category destructors
 */
const toSet = exports.toSet = internal.toSet;
/**
 * Unsafely creates a new `FiberId`.
 *
 * @since 2.0.0
 * @category unsafe
 */
const unsafeMake = exports.unsafeMake = internal.unsafeMake;
//# sourceMappingURL=FiberId.js.map