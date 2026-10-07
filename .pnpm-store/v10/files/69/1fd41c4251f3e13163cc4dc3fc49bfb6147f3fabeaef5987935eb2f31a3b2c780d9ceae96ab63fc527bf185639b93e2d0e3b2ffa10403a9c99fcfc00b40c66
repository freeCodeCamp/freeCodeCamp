"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zip = exports.retry = exports.pollAndUpdate = exports.poll = exports.make = exports.launch = exports.collectAll = exports.MetricPollingTypeId = void 0;
var internal = _interopRequireWildcard(require("./internal/metric/polling.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 * @category symbols
 */
const MetricPollingTypeId = exports.MetricPollingTypeId = internal.MetricPollingTypeId;
/**
 * Constructs a new polling metric from a metric and poll effect.
 *
 * @since 2.0.0
 * @category constructors
 */
const make = exports.make = internal.make;
/**
 * Collects all of the polling metrics into a single polling metric, which
 * polls for, updates, and produces the outputs of all individual metrics.
 *
 * @since 2.0.0
 * @category constructors
 */
const collectAll = exports.collectAll = internal.collectAll;
/**
 * Returns an effect that will launch the polling metric in a background
 * fiber, using the specified schedule.
 *
 * @since 2.0.0
 * @category utils
 */
const launch = exports.launch = internal.launch;
/**
 * An effect that polls a value that may be fed to the metric.
 *
 * @since 2.0.0
 * @category utils
 */
const poll = exports.poll = internal.poll;
/**
 * An effect that polls for a value and uses the value to update the metric.
 *
 * @since 2.0.0
 * @category utils
 */
const pollAndUpdate = exports.pollAndUpdate = internal.pollAndUpdate;
/**
 * Returns a new polling metric whose poll function will be retried with the
 * specified retry policy.
 *
 * @since 2.0.0
 * @category constructors
 */
const retry = exports.retry = internal.retry;
/**
 * Zips this polling metric with the specified polling metric.
 *
 * @since 2.0.0
 * @category utils
 */
const zip = exports.zip = internal.zip;
//# sourceMappingURL=MetricPolling.js.map