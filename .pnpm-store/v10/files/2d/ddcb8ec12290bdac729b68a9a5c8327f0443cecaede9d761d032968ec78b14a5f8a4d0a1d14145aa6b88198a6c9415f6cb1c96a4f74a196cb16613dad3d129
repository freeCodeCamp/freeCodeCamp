"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.refresh = exports.manual = exports.get = exports.auto = exports.ResourceTypeId = void 0;
var internal = _interopRequireWildcard(require("./internal/resource.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 * @category symbols
 */
const ResourceTypeId = exports.ResourceTypeId = internal.ResourceTypeId;
/**
 * Creates a new `Resource` value that is automatically refreshed according to
 * the specified policy. Note that error retrying is not performed
 * automatically, so if you want to retry on errors, you should first apply
 * retry policies to the acquisition effect before passing it to this
 * constructor.
 *
 * @since 2.0.0
 * @category constructors
 */
const auto = exports.auto = internal.auto;
/**
 * Retrieves the current value stored in the cache.
 *
 * @since 2.0.0
 * @category getters
 */
const get = exports.get = internal.get;
/**
 * Creates a new `Resource` value that must be manually refreshed by calling
 * the refresh method. Note that error retrying is not performed
 * automatically, so if you want to retry on errors, you should first apply
 * retry policies to the acquisition effect before passing it to this
 * constructor.
 *
 * @since 2.0.0
 * @category constructors
 */
const manual = exports.manual = internal.manual;
/**
 * Refreshes the cache. This method will not return until either the refresh
 * is successful, or the refresh operation fails.
 *
 * @since 2.0.0
 * @category utils
 */
const refresh = exports.refresh = internal.refresh;
//# sourceMappingURL=Resource.js.map