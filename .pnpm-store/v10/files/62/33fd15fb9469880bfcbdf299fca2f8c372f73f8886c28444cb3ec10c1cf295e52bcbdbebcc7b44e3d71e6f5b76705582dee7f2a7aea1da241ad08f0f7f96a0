"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = exports.make = exports.isEnabled = exports.isEmpty = exports.isDisabled = exports.isActive = exports.inverse = exports.includes = exports.exclude = exports.enabledSet = exports.enable = exports.empty = exports.either = exports.disabledSet = exports.disable = exports.both = exports.andThen = void 0;
var runtimeFlags = _interopRequireWildcard(require("./internal/runtimeFlags.js"));
var internal = _interopRequireWildcard(require("./internal/runtimeFlagsPatch.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 */

/**
 * The empty `RuntimeFlagsPatch`.
 *
 * @since 2.0.0
 * @category constructors
 */
const empty = exports.empty = internal.empty;
/**
 * @since 2.0.0
 * @category constructors
 */
const make = exports.make = internal.make;
/**
 * Creates a `RuntimeFlagsPatch` describing enabling the provided `RuntimeFlag`.
 *
 * @since 2.0.0
 * @category constructors
 */
const enable = exports.enable = internal.enable;
/**
 * Creates a `RuntimeFlagsPatch` describing disabling the provided `RuntimeFlag`.
 *
 * @since 2.0.0
 * @category constructors
 */
const disable = exports.disable = internal.disable;
/**
 * Returns `true` if the specified `RuntimeFlagsPatch` is empty.
 *
 * @since 2.0.0
 * @category getters
 */
const isEmpty = exports.isEmpty = internal.isEmpty;
/**
 * Returns `true` if the `RuntimeFlagsPatch` describes the specified
 * `RuntimeFlag` as active.
 *
 * @since 2.0.0
 * @category elements
 */
const isActive = exports.isActive = internal.isActive;
/**
 * Returns `true` if the `RuntimeFlagsPatch` describes the specified
 * `RuntimeFlag` as enabled.
 *
 * @since 2.0.0
 * @category elements
 */
const isEnabled = exports.isEnabled = internal.isEnabled;
/**
 * Returns `true` if the `RuntimeFlagsPatch` describes the specified
 * `RuntimeFlag` as disabled.
 *
 * @since 2.0.0
 * @category elements
 */
const isDisabled = exports.isDisabled = internal.isDisabled;
/**
 * Returns `true` if the `RuntimeFlagsPatch` includes the specified
 * `RuntimeFlag`, `false` otherwise.
 *
 * @since 2.0.0
 * @category elements
 */
const includes = exports.includes = internal.isActive;
/**
 * Creates a `RuntimeFlagsPatch` describing the application of the `self` patch,
 * followed by `that` patch.
 *
 * @since 2.0.0
 * @category utils
 */
const andThen = exports.andThen = internal.andThen;
/**
 * Creates a `RuntimeFlagsPatch` describing application of both the `self` patch
 * and `that` patch.
 *
 * @since 2.0.0
 * @category utils
 */
const both = exports.both = internal.both;
/**
 * Creates a `RuntimeFlagsPatch` describing application of either the `self`
 * patch or `that` patch.
 *
 * @since 2.0.0
 * @category utils
 */
const either = exports.either = internal.either;
/**
 * Creates a `RuntimeFlagsPatch` which describes exclusion of the specified
 * `RuntimeFlag` from the set of `RuntimeFlags`.
 *
 * @category utils
 * @since 2.0.0
 */
const exclude = exports.exclude = internal.exclude;
/**
 * Creates a `RuntimeFlagsPatch` which describes the inverse of the patch
 * specified by the provided `RuntimeFlagsPatch`.
 *
 * @since 2.0.0
 * @category utils
 */
const inverse = exports.inverse = internal.inverse;
/**
 * Returns a `ReadonlySet<number>` containing the `RuntimeFlags` described as
 * enabled by the specified `RuntimeFlagsPatch`.
 *
 * @since 2.0.0
 * @category destructors
 */
const enabledSet = exports.enabledSet = runtimeFlags.enabledSet;
/**
 * Returns a `ReadonlySet<number>` containing the `RuntimeFlags` described as
 * disabled by the specified `RuntimeFlagsPatch`.
 *
 * @since 2.0.0
 * @category destructors
 */
const disabledSet = exports.disabledSet = runtimeFlags.disabledSet;
/**
 * Renders the provided `RuntimeFlagsPatch` to a string.
 *
 * @since 2.0.0
 * @category destructors
 */
const render = exports.render = runtimeFlags.renderPatch;
//# sourceMappingURL=RuntimeFlagsPatch.js.map