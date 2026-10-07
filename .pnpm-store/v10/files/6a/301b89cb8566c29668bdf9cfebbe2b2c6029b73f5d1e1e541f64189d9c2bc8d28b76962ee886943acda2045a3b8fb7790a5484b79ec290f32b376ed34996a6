/**
 * @since 2.0.0
 */

import type * as Differ from "./Differ.js"
import * as circular from "./internal/layer/circular.js"
import * as internal from "./internal/runtimeFlags.js"
import type * as Layer from "./Layer.js"
import type * as RuntimeFlagsPatch from "./RuntimeFlagsPatch.js"

/**
 * Represents a set of `RuntimeFlag`s. `RuntimeFlag`s affect the operation of
 * the Effect runtime system. They are exposed to application-level code because
 * they affect the behavior and performance of application code.
 *
 * @since 2.0.0
 * @category models
 */
export type RuntimeFlags = number & {
  readonly RuntimeFlags: unique symbol
}

/**
 * Represents a flag that can be set to enable or disable a particular feature
 * of the Effect runtime.
 *
 * @since 2.0.0
 * @category models
 */
export type RuntimeFlag = number & {
  readonly RuntimeFlag: unique symbol
}

/**
 * No runtime flags.
 *
 * @since 2.0.0
 * @category constructors
 */
export const None: RuntimeFlag = internal.None

/**
 * The interruption flag determines whether or not the Effect runtime system will
 * interrupt a fiber.
 *
 * @since 2.0.0
 * @category constructors
 */
export const Interruption: RuntimeFlag = internal.Interruption

/**
 * The op supervision flag determines whether or not the Effect runtime system
 * will supervise all operations of the Effect runtime. Use of this flag will
 * negatively impact performance, but is required for some operations, such as
 * profiling.
 *
 * @since 2.0.0
 * @category constructors
 */
export const OpSupervision: RuntimeFlag = internal.OpSupervision

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
export const RuntimeMetrics: RuntimeFlag = internal.RuntimeMetrics

/**
 * The wind down flag determines whether the Effect runtime system will execute
 * effects in wind-down mode. In wind-down mode, even if interruption is
 * enabled and a fiber has been interrupted, the fiber will continue its
 * execution uninterrupted.
 *
 * @since 2.0.0
 * @category constructors
 */
export const WindDown: RuntimeFlag = internal.WindDown

/**
 * The cooperative yielding flag determines whether the Effect runtime will
 * yield to another fiber.
 *
 * @since 2.0.0
 * @category constructors
 */
export const CooperativeYielding: RuntimeFlag = internal.CooperativeYielding

/**
 * Returns `true` if the `CooperativeYielding` `RuntimeFlag` is enabled, `false`
 * otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
export const cooperativeYielding: (self: RuntimeFlags) => boolean = internal.cooperativeYielding

/**
 * Creates a `RuntimeFlagsPatch` which describes the difference between `self`
 * and `that`.
 *
 * @since 2.0.0
 * @category diffing
 */
export const diff: {
  /**
   * Creates a `RuntimeFlagsPatch` which describes the difference between `self`
   * and `that`.
   *
   * @since 2.0.0
   * @category diffing
   */
  (that: RuntimeFlags): (self: RuntimeFlags) => RuntimeFlagsPatch.RuntimeFlagsPatch
  /**
   * Creates a `RuntimeFlagsPatch` which describes the difference between `self`
   * and `that`.
   *
   * @since 2.0.0
   * @category diffing
   */
  (self: RuntimeFlags, that: RuntimeFlags): RuntimeFlagsPatch.RuntimeFlagsPatch
} = internal.diff

/**
 * Constructs a differ that knows how to diff `RuntimeFlags` values.
 *
 * @since 2.0.0
 * @category utils
 */
export const differ: Differ.Differ<RuntimeFlags, RuntimeFlagsPatch.RuntimeFlagsPatch> = internal.differ

/**
 * Disables the specified `RuntimeFlag`.
 *
 * @since 2.0.0
 * @category utils
 */
export const disable: {
  /**
   * Disables the specified `RuntimeFlag`.
   *
   * @since 2.0.0
   * @category utils
   */
  (flag: RuntimeFlag): (self: RuntimeFlags) => RuntimeFlags
  /**
   * Disables the specified `RuntimeFlag`.
   *
   * @since 2.0.0
   * @category utils
   */
  (self: RuntimeFlags, flag: RuntimeFlag): RuntimeFlags
} = internal.disable

/**
 * Disables all of the `RuntimeFlag`s in the specified set of `RuntimeFlags`.
 *
 * @since 2.0.0
 * @category utils
 */
export const disableAll: {
  /**
   * Disables all of the `RuntimeFlag`s in the specified set of `RuntimeFlags`.
   *
   * @since 2.0.0
   * @category utils
   */
  (flags: RuntimeFlags): (self: RuntimeFlags) => RuntimeFlags
  /**
   * Disables all of the `RuntimeFlag`s in the specified set of `RuntimeFlags`.
   *
   * @since 2.0.0
   * @category utils
   */
  (self: RuntimeFlags, flags: RuntimeFlags): RuntimeFlags
} = internal.disableAll

/**
 * @since 2.0.0
 * @category context
 */
export const disableCooperativeYielding: Layer.Layer<never> = circular.disableCooperativeYielding

/**
 * @since 2.0.0
 * @category context
 */
export const disableInterruption: Layer.Layer<never> = circular.disableInterruption

/**
 * @since 2.0.0
 * @category context
 */
export const disableOpSupervision: Layer.Layer<never> = circular.disableOpSupervision

/**
 * @since 2.0.0
 * @category context
 */
export const disableRuntimeMetrics: Layer.Layer<never> = circular.disableRuntimeMetrics

/**
 * @since 2.0.0
 * @category context
 */
export const disableWindDown: Layer.Layer<never> = circular.disableWindDown

/**
 * Enables the specified `RuntimeFlag`.
 *
 * @since 2.0.0
 * @category utils
 */
export const enable: {
  /**
   * Enables the specified `RuntimeFlag`.
   *
   * @since 2.0.0
   * @category utils
   */
  (flag: RuntimeFlag): (self: RuntimeFlags) => RuntimeFlags
  /**
   * Enables the specified `RuntimeFlag`.
   *
   * @since 2.0.0
   * @category utils
   */
  (self: RuntimeFlags, flag: RuntimeFlag): RuntimeFlags
} = internal.enable

/**
 * Enables all of the `RuntimeFlag`s in the specified set of `RuntimeFlags`.
 *
 * @since 2.0.0
 * @category utils
 */
export const enableAll: {
  /**
   * Enables all of the `RuntimeFlag`s in the specified set of `RuntimeFlags`.
   *
   * @since 2.0.0
   * @category utils
   */
  (flags: RuntimeFlags): (self: RuntimeFlags) => RuntimeFlags
  /**
   * Enables all of the `RuntimeFlag`s in the specified set of `RuntimeFlags`.
   *
   * @since 2.0.0
   * @category utils
   */
  (self: RuntimeFlags, flags: RuntimeFlags): RuntimeFlags
} = internal.enableAll

/**
 * @since 2.0.0
 * @category context
 */
export const enableCooperativeYielding: Layer.Layer<never> = circular.enableCooperativeYielding

/**
 * @since 2.0.0
 * @category context
 */
export const enableInterruption: Layer.Layer<never> = circular.enableInterruption

/**
 * @since 2.0.0
 * @category context
 */
export const enableOpSupervision: Layer.Layer<never> = circular.enableOpSupervision

/**
 * @since 2.0.0
 * @category context
 */
export const enableRuntimeMetrics: Layer.Layer<never> = circular.enableRuntimeMetrics

/**
 * @since 2.0.0
 * @category context
 */
export const enableWindDown: Layer.Layer<never> = circular.enableWindDown

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
export const interruptible: (self: RuntimeFlags) => boolean = internal.interruptible

/**
 * Returns `true` if the `Interruption` `RuntimeFlag` is enabled, `false`
 * otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
export const interruption: (self: RuntimeFlags) => boolean = internal.interruption

/**
 * Returns `true` if the specified `RuntimeFlag` is enabled, `false` otherwise.
 *
 * @since 2.0.0
 * @category elements
 */
export const isEnabled: {
  /**
   * Returns `true` if the specified `RuntimeFlag` is enabled, `false` otherwise.
   *
   * @since 2.0.0
   * @category elements
   */
  (flag: RuntimeFlag): (self: RuntimeFlags) => boolean
  /**
   * Returns `true` if the specified `RuntimeFlag` is enabled, `false` otherwise.
   *
   * @since 2.0.0
   * @category elements
   */
  (self: RuntimeFlags, flag: RuntimeFlag): boolean
} = internal.isEnabled

/**
 * Returns `true` if the specified `RuntimeFlag` is disabled, `false` otherwise.
 *
 * @since 2.0.0
 * @category elements
 */
export const isDisabled: {
  /**
   * Returns `true` if the specified `RuntimeFlag` is disabled, `false` otherwise.
   *
   * @since 2.0.0
   * @category elements
   */
  (flag: RuntimeFlag): (self: RuntimeFlags) => boolean
  /**
   * Returns `true` if the specified `RuntimeFlag` is disabled, `false` otherwise.
   *
   * @since 2.0.0
   * @category elements
   */
  (self: RuntimeFlags, flag: RuntimeFlag): boolean
} = internal.isDisabled

/**
 * @since 2.0.0
 * @category constructors
 */
export const make: (...flags: ReadonlyArray<RuntimeFlag>) => RuntimeFlags = internal.make

/**
 * @since 2.0.0
 * @category constructors
 */
export const none: RuntimeFlags = internal.none

/**
 * Returns `true` if the `OpSupervision` `RuntimeFlag` is enabled, `false`
 * otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
export const opSupervision: (self: RuntimeFlags) => boolean = internal.opSupervision

/**
 * Patches a set of `RuntimeFlag`s with a `RuntimeFlagsPatch`, returning the
 * patched set of `RuntimeFlag`s.
 *
 * @since 2.0.0
 * @category utils
 */
export const patch: {
  /**
   * Patches a set of `RuntimeFlag`s with a `RuntimeFlagsPatch`, returning the
   * patched set of `RuntimeFlag`s.
   *
   * @since 2.0.0
   * @category utils
   */
  (patch: RuntimeFlagsPatch.RuntimeFlagsPatch): (self: RuntimeFlags) => RuntimeFlags
  /**
   * Patches a set of `RuntimeFlag`s with a `RuntimeFlagsPatch`, returning the
   * patched set of `RuntimeFlag`s.
   *
   * @since 2.0.0
   * @category utils
   */
  (self: RuntimeFlags, patch: RuntimeFlagsPatch.RuntimeFlagsPatch): RuntimeFlags
} = internal.patch

/**
 * Converts the provided `RuntimeFlags` into a `string`.
 *
 * @category conversions
 * @since 2.0.0
 */
export const render: (self: RuntimeFlags) => string = internal.render

/**
 * Returns `true` if the `RuntimeMetrics` `RuntimeFlag` is enabled, `false`
 * otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
export const runtimeMetrics: (self: RuntimeFlags) => boolean = internal.runtimeMetrics

/**
 * Converts the provided `RuntimeFlags` into a `ReadonlySet<number>`.
 *
 * @category conversions
 * @since 2.0.0
 */
export const toSet: (self: RuntimeFlags) => ReadonlySet<RuntimeFlag> = internal.toSet

/**
 * Returns `true` if the `WindDown` `RuntimeFlag` is enabled, `false`
 * otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
export const windDown: (self: RuntimeFlags) => boolean = internal.windDown
