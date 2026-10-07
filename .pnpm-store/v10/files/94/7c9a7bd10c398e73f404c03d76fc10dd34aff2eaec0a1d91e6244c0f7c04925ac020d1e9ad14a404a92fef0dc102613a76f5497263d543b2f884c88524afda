"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tag = exports.reloadFork = exports.reload = exports.manual = exports.get = exports.autoFromConfig = exports.auto = exports.ReloadableTypeId = void 0;
var internal = _interopRequireWildcard(require("./internal/reloadable.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 * @category symbols
 */
const ReloadableTypeId = exports.ReloadableTypeId = internal.ReloadableTypeId;
/**
 * Makes a new reloadable service from a layer that describes the construction
 * of a static service. The service is automatically reloaded according to the
 * provided schedule.
 *
 * @since 2.0.0
 * @category constructors
 */
const auto = exports.auto = internal.auto;
/**
 * Makes a new reloadable service from a layer that describes the construction
 * of a static service. The service is automatically reloaded according to a
 * schedule, which is extracted from the input to the layer.
 *
 * @since 2.0.0
 * @category constructors
 */
const autoFromConfig = exports.autoFromConfig = internal.autoFromConfig;
/**
 * Retrieves the current version of the reloadable service.
 *
 * @since 2.0.0
 * @category getters
 */
const get = exports.get = internal.get;
/**
 * Makes a new reloadable service from a layer that describes the construction
 * of a static service.
 *
 * @since 2.0.0
 * @category constructors
 */
const manual = exports.manual = internal.manual;
/**
 * Reloads the specified service.
 *
 * @since 2.0.0
 * @category constructors
 */
const reload = exports.reload = internal.reload;
/**
 * @since 2.0.0
 * @category context
 */
const tag = exports.tag = internal.reloadableTag;
/**
 * Forks the reload of the service in the background, ignoring any errors.
 *
 * @since 2.0.0
 * @category constructors
 */
const reloadFork = exports.reloadFork = internal.reloadFork;
//# sourceMappingURL=Reloadable.js.map