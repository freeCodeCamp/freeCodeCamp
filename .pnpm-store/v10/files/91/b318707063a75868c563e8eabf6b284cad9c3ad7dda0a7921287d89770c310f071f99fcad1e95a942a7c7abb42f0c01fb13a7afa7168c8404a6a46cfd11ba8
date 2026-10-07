"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.union = exports.start = exports.max = exports.make = exports.lessThan = exports.isNonEmpty = exports.intersect = exports.fromIterable = exports.end = exports.empty = exports.IntervalsTypeId = void 0;
var internal = _interopRequireWildcard(require("./internal/schedule/intervals.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 * @category symbols
 */
const IntervalsTypeId = exports.IntervalsTypeId = internal.IntervalsTypeId;
/**
 * Creates a new `Intervals` from a `List` of `Interval`s.
 *
 * @since 2.0.0
 * @category constructors
 */
const make = exports.make = internal.make;
/**
 * Constructs an empty list of `Interval`s.
 *
 * @since 2.0.0
 * @category constructors
 */
const empty = exports.empty = internal.empty;
/**
 * Creates `Intervals` from the specified `Iterable<Interval>`.
 *
 * @since 2.0.0
 * @category constructors
 */
const fromIterable = exports.fromIterable = internal.fromIterable;
/**
 * Computes the union of this `Intervals` and  that `Intervals`
 *
 * @since 2.0.0
 * @category utils
 */
const union = exports.union = internal.union;
/**
 * Produces the intersection of this `Intervals` and that `Intervals`.
 *
 * @since 2.0.0
 * @category utils
 */
const intersect = exports.intersect = internal.intersect;
/**
 * The start of the earliest interval in the specified `Intervals`.
 *
 * @since 2.0.0
 * @category getters
 */
const start = exports.start = internal.start;
/**
 * The end of the latest interval in the specified `Intervals`.
 *
 * @since 2.0.0
 * @category getters
 */
const end = exports.end = internal.end;
/**
 * Returns `true` if the start of this `Intervals` is before the start of that
 * `Intervals`, `false` otherwise.
 *
 * @since 2.0.0
 * @category ordering
 */
const lessThan = exports.lessThan = internal.lessThan;
/**
 * Returns `true` if this `Intervals` is non-empty, `false` otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
const isNonEmpty = exports.isNonEmpty = internal.isNonEmpty;
/**
 * Returns the maximum of the two `Intervals` (i.e. which has the latest start).
 *
 * @since 2.0.0
 * @category ordering
 */
const max = exports.max = internal.max;
//# sourceMappingURL=ScheduleIntervals.js.map