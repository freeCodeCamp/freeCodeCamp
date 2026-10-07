"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.union = exports.size = exports.min = exports.max = exports.make = exports.lessThan = exports.isNonEmpty = exports.isEmpty = exports.intersect = exports.empty = exports.before = exports.after = exports.IntervalTypeId = void 0;
var internal = _interopRequireWildcard(require("./internal/schedule/interval.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 * @category symbols
 */
const IntervalTypeId = exports.IntervalTypeId = internal.IntervalTypeId;
/**
 * Constructs a new interval from the two specified endpoints. If the start
 * endpoint greater than the end endpoint, then a zero size interval will be
 * returned.
 *
 * @since 2.0.0
 * @category constructors
 */
const make = exports.make = internal.make;
/**
 * An `Interval` of zero-width.
 *
 * @since 2.0.0
 * @category constructors
 */
const empty = exports.empty = internal.empty;
/**
 * Returns `true` if this `Interval` is less than `that` interval, `false`
 * otherwise.
 *
 * @since 2.0.0
 * @category ordering
 */
const lessThan = exports.lessThan = internal.lessThan;
/**
 * Returns the minimum of two `Interval`s.
 *
 * @since 2.0.0
 * @category ordering
 */
const min = exports.min = internal.min;
/**
 * Returns the maximum of two `Interval`s.
 *
 * @since 2.0.0
 * @category ordering
 */
const max = exports.max = internal.max;
/**
 * Returns `true` if the specified `Interval` is empty, `false` otherwise.
 *
 * @since 2.0.0
 * @category ordering
 */
const isEmpty = exports.isEmpty = internal.isEmpty;
/**
 * Returns `true` if the specified `Interval` is non-empty, `false` otherwise.
 *
 * @since 2.0.0
 * @category ordering
 */
const isNonEmpty = exports.isNonEmpty = internal.isNonEmpty;
/**
 * Computes a new `Interval` which is the intersection of this `Interval` and
 * that `Interval`.
 *
 * @since 2.0.0
 * @category ordering
 */
const intersect = exports.intersect = internal.intersect;
/**
 * Calculates the size of the `Interval` as the `Duration` from the start of the
 * interval to the end of the interval.
 *
 * @since 2.0.0
 * @category getters
 */
const size = exports.size = internal.size;
/**
 * Computes a new `Interval` which is the union of this `Interval` and that
 * `Interval` as a `Some`, otherwise returns `None` if the two intervals cannot
 * form a union.
 *
 * @since 2.0.0
 * @category utils
 */
const union = exports.union = internal.union;
/**
 * Construct an `Interval` that includes all time equal to and after the
 * specified start time.
 *
 * @since 2.0.0
 * @category constructors
 */
const after = exports.after = internal.after;
/**
 * Construct an `Interval` that includes all time equal to and before the
 * specified end time.
 *
 * @category constructors
 * @since 2.0.0
 */
const before = exports.before = internal.before;
//# sourceMappingURL=ScheduleInterval.js.map