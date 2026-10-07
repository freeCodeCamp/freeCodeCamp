"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateManyAs = exports.updateAs = exports.unsafeMake = exports.setAll = exports.joinAs = exports.getOrDefault = exports.get = exports.forkAs = exports.fiberRefs = exports.empty = exports.delete = exports.FiberRefsSym = void 0;
var internal = _interopRequireWildcard(require("./internal/fiberRefs.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 * @category symbols
 */
const FiberRefsSym = exports.FiberRefsSym = internal.FiberRefsSym;
const delete_ = exports.delete = internal.delete_;
/**
 * Returns a set of each `FiberRef` in this collection.
 *
 * @since 2.0.0
 * @category getters
 */
const fiberRefs = exports.fiberRefs = internal.fiberRefs;
/**
 * Forks this collection of fiber refs as the specified child fiber id. This
 * will potentially modify the value of the fiber refs, as determined by the
 * individual fiber refs that make up the collection.
 *
 * @since 2.0.0
 * @category utils
 */
const forkAs = exports.forkAs = internal.forkAs;
/**
 * Gets the value of the specified `FiberRef` in this collection of `FiberRef`
 * values if it exists or `None` otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
const get = exports.get = internal.get;
/**
 * Gets the value of the specified `FiberRef` in this collection of `FiberRef`
 * values if it exists or the `initial` value of the `FiberRef` otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
const getOrDefault = exports.getOrDefault = internal.getOrDefault;
/**
 * Joins this collection of fiber refs to the specified collection, as the
 * specified fiber id. This will perform diffing and merging to ensure
 * preservation of maximum information from both child and parent refs.
 *
 * @since 2.0.0
 * @category utils
 */
const joinAs = exports.joinAs = internal.joinAs;
/**
 * Set each ref to either its value or its default.
 *
 * @since 2.0.0
 * @category utils
 */
const setAll = exports.setAll = internal.setAll;
/**
 * Updates the value of the specified `FiberRef` using the provided `FiberId`
 *
 * @since 2.0.0
 * @category utils
 */
const updateAs = exports.updateAs = internal.updateAs;
/**
 * Updates the values of the specified `FiberRef` & value pairs using the provided `FiberId`
 *
 * @since 2.0.0
 * @category utils
 */
const updateManyAs = exports.updateManyAs = internal.updateManyAs;
/**
 * Note: it will not copy the provided Map, make sure to provide a fresh one.
 *
 * @since 2.0.0
 * @category unsafe
 */
const unsafeMake = exports.unsafeMake = internal.unsafeMake;
/**
 * The empty collection of `FiberRef` values.
 *
 * @category constructors
 * @since 2.0.0
 */
const empty = exports.empty = internal.empty;
//# sourceMappingURL=FiberRefs.js.map