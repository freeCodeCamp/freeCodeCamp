"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.windDown = exports.toSet = exports.runtimeMetrics = exports.render = exports.patch = exports.opSupervision = exports.none = exports.make = exports.isEnabled = exports.isDisabled = exports.interruption = exports.interruptible = exports.enableWindDown = exports.enableRuntimeMetrics = exports.enableOpSupervision = exports.enableInterruption = exports.enableCooperativeYielding = exports.enableAll = exports.enable = exports.disableWindDown = exports.disableRuntimeMetrics = exports.disableOpSupervision = exports.disableInterruption = exports.disableCooperativeYielding = exports.disableAll = exports.disable = exports.differ = exports.diff = exports.cooperativeYielding = exports.WindDown = exports.RuntimeMetrics = exports.OpSupervision = exports.None = exports.Interruption = exports.CooperativeYielding = void 0;
var circular = _interopRequireWildcard(require("./internal/layer/circular.js"));
var internal = _interopRequireWildcard(require("./internal/runtimeFlags.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 */

/**
 * No runtime flags.
 *
 * @since 2.0.0
 * @category constructors
 */
const None = exports.None = internal.None;
/**
 * The interruption flag determines whether or not the Effect runtime system will
 * interrupt a fiber.
 *
 * @since 2.0.0
 * @category constructors
 */
const Interruption = exports.Interruption = internal.Interruption;
/**
 * The op supervision flag determines whether or not the Effect runtime system
 * will supervise all operations of the Effect runtime. Use of this flag will
 * negatively impact performance, but is required for some operations, such as
 * profiling.
 *
 * @since 2.0.0
 * @category constructors
 */
const OpSupervision = exports.OpSupervision = internal.OpSupervision;
/**
 * The runtime metrics flag determines whether or not the Effect runtime system
 * will collect metrics about the Effect runtime. Use of this flag will have a
 * very small negative impact on performance, but generates very helpful
 * operational insight into running Effect applications that can be exported to
 * Prometheus or other tools via Effect Metrics.
 *
 * @since 2.0.0
 * @category constructors
 */
const RuntimeMetrics = exports.RuntimeMetrics = internal.RuntimeMetrics;
/**
 * The wind down flag determines whether the Effect runtime system will execute
 * effects in wind-down mode. In wind-down mode, even if interruption is
 * enabled and a fiber has been interrupted, the fiber will continue its
 * execution uninterrupted.
 *
 * @since 2.0.0
 * @category constructors
 */
const WindDown = exports.WindDown = internal.WindDown;
/**
 * The cooperative yielding flag determines whether the Effect runtime will
 * yield to another fiber.
 *
 * @since 2.0.0
 * @category constructors
 */
const CooperativeYielding = exports.CooperativeYielding = internal.CooperativeYielding;
/**
 * Returns `true` if the `CooperativeYielding` `RuntimeFlag` is enabled, `false`
 * otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
const cooperativeYielding = exports.cooperativeYielding = internal.cooperativeYielding;
/**
 * Creates a `RuntimeFlagsPatch` which describes the difference between `self`
 * and `that`.
 *
 * @since 2.0.0
 * @category diffing
 */
const diff = exports.diff = internal.diff;
/**
 * Constructs a differ that knows how to diff `RuntimeFlags` values.
 *
 * @since 2.0.0
 * @category utils
 */
const differ = exports.differ = internal.differ;
/**
 * Disables the specified `RuntimeFlag`.
 *
 * @since 2.0.0
 * @category utils
 */
const disable = exports.disable = internal.disable;
/**
 * Disables all of the `RuntimeFlag`s in the specified set of `RuntimeFlags`.
 *
 * @since 2.0.0
 * @category utils
 */
const disableAll = exports.disableAll = internal.disableAll;
/**
 * @since 2.0.0
 * @category context
 */
const disableCooperativeYielding = exports.disableCooperativeYielding = circular.disableCooperativeYielding;
/**
 * @since 2.0.0
 * @category context
 */
const disableInterruption = exports.disableInterruption = circular.disableInterruption;
/**
 * @since 2.0.0
 * @category context
 */
const disableOpSupervision = exports.disableOpSupervision = circular.disableOpSupervision;
/**
 * @since 2.0.0
 * @category context
 */
const disableRuntimeMetrics = exports.disableRuntimeMetrics = circular.disableRuntimeMetrics;
/**
 * @since 2.0.0
 * @category context
 */
const disableWindDown = exports.disableWindDown = circular.disableWindDown;
/**
 * Enables the specified `RuntimeFlag`.
 *
 * @since 2.0.0
 * @category utils
 */
const enable = exports.enable = internal.enable;
/**
 * Enables all of the `RuntimeFlag`s in the specified set of `RuntimeFlags`.
 *
 * @since 2.0.0
 * @category utils
 */
const enableAll = exports.enableAll = internal.enableAll;
/**
 * @since 2.0.0
 * @category context
 */
const enableCooperativeYielding = exports.enableCooperativeYielding = circular.enableCooperativeYielding;
/**
 * @since 2.0.0
 * @category context
 */
const enableInterruption = exports.enableInterruption = circular.enableInterruption;
/**
 * @since 2.0.0
 * @category context
 */
const enableOpSupervision = exports.enableOpSupervision = circular.enableOpSupervision;
/**
 * @since 2.0.0
 * @category context
 */
const enableRuntimeMetrics = exports.enableRuntimeMetrics = circular.enableRuntimeMetrics;
/**
 * @since 2.0.0
 * @category context
 */
const enableWindDown = exports.enableWindDown = circular.enableWindDown;
/**
 * Returns true only if the `Interruption` flag is **enabled** and the
 * `WindDown` flag is **disabled**.
 *
 * A fiber is said to be interruptible if interruption is enabled and the fiber
 * is not in its wind-down phase, in which it takes care of cleanup activities
 * related to fiber shutdown.
 *
 * @since 2.0.0
 * @category getters
 */
const interruptible = exports.interruptible = internal.interruptible;
/**
 * Returns `true` if the `Interruption` `RuntimeFlag` is enabled, `false`
 * otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
const interruption = exports.interruption = internal.interruption;
/**
 * Returns `true` if the specified `RuntimeFlag` is enabled, `false` otherwise.
 *
 * @since 2.0.0
 * @category elements
 */
const isEnabled = exports.isEnabled = internal.isEnabled;
/**
 * Returns `true` if the specified `RuntimeFlag` is disabled, `false` otherwise.
 *
 * @since 2.0.0
 * @category elements
 */
const isDisabled = exports.isDisabled = internal.isDisabled;
/**
 * @since 2.0.0
 * @category constructors
 */
const make = exports.make = internal.make;
/**
 * @since 2.0.0
 * @category constructors
 */
const none = exports.none = internal.none;
/**
 * Returns `true` if the `OpSupervision` `RuntimeFlag` is enabled, `false`
 * otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
const opSupervision = exports.opSupervision = internal.opSupervision;
/**
 * Patches a set of `RuntimeFlag`s with a `RuntimeFlagsPatch`, returning the
 * patched set of `RuntimeFlag`s.
 *
 * @since 2.0.0
 * @category utils
 */
const patch = exports.patch = internal.patch;
/**
 * Converts the provided `RuntimeFlags` into a `string`.
 *
 * @category conversions
 * @since 2.0.0
 */
const render = exports.render = internal.render;
/**
 * Returns `true` if the `RuntimeMetrics` `RuntimeFlag` is enabled, `false`
 * otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
const runtimeMetrics = exports.runtimeMetrics = internal.runtimeMetrics;
/**
 * Converts the provided `RuntimeFlags` into a `ReadonlySet<number>`.
 *
 * @category conversions
 * @since 2.0.0
 */
const toSet = exports.toSet = internal.toSet;
/**
 * Returns `true` if the `WindDown` `RuntimeFlag` is enabled, `false`
 * otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
const windDown = exports.windDown = internal.windDown;
//# sourceMappingURL=RuntimeFlags.js.map