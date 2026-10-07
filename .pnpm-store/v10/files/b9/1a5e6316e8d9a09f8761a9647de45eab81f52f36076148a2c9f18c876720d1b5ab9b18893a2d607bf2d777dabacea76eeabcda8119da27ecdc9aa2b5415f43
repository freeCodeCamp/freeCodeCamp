/**
 * @since 2.0.0
 */
import type * as Differ from "./Differ.js";
import type * as Layer from "./Layer.js";
import type * as RuntimeFlagsPatch from "./RuntimeFlagsPatch.js";
/**
 * Represents a set of `RuntimeFlag`s. `RuntimeFlag`s affect the operation of
 * the Effect runtime system. They are exposed to application-level code because
 * they affect the behavior and performance of application code.
 *
 * @since 2.0.0
 * @category models
 */
export type RuntimeFlags = number & {
    readonly RuntimeFlags: unique symbol;
};
/**
 * Represents a flag that can be set to enable or disable a particular feature
 * of the Effect runtime.
 *
 * @since 2.0.0
 * @category models
 */
export type RuntimeFlag = number & {
    readonly RuntimeFlag: unique symbol;
};
/**
 * No runtime flags.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const None: RuntimeFlag;
/**
 * The interruption flag determines whether or not the Effect runtime system will
 * interrupt a fiber.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const Interruption: RuntimeFlag;
/**
 * The op supervision flag determines whether or not the Effect runtime system
 * will supervise all operations of the Effect runtime. Use of this flag will
 * negatively impact performance, but is required for some operations, such as
 * profiling.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const OpSupervision: RuntimeFlag;
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
export declare const RuntimeMetrics: RuntimeFlag;
/**
 * The wind down flag determines whether the Effect runtime system will execute
 * effects in wind-down mode. In wind-down mode, even if interruption is
 * enabled and a fiber has been interrupted, the fiber will continue its
 * execution uninterrupted.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const WindDown: RuntimeFlag;
/**
 * The cooperative yielding flag determines whether the Effect runtime will
 * yield to another fiber.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const CooperativeYielding: RuntimeFlag;
/**
 * Returns `true` if the `CooperativeYielding` `RuntimeFlag` is enabled, `false`
 * otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const cooperativeYielding: (self: RuntimeFlags) => boolean;
/**
 * Creates a `RuntimeFlagsPatch` which describes the difference between `self`
 * and `that`.
 *
 * @since 2.0.0
 * @category diffing
 */
export declare const diff: {
    /**
     * Creates a `RuntimeFlagsPatch` which describes the difference between `self`
     * and `that`.
     *
     * @since 2.0.0
     * @category diffing
     */
    (that: RuntimeFlags): (self: RuntimeFlags) => RuntimeFlagsPatch.RuntimeFlagsPatch;
    /**
     * Creates a `RuntimeFlagsPatch` which describes the difference between `self`
     * and `that`.
     *
     * @since 2.0.0
     * @category diffing
     */
    (self: RuntimeFlags, that: RuntimeFlags): RuntimeFlagsPatch.RuntimeFlagsPatch;
};
/**
 * Constructs a differ that knows how to diff `RuntimeFlags` values.
 *
 * @since 2.0.0
 * @category utils
 */
export declare const differ: Differ.Differ<RuntimeFlags, RuntimeFlagsPatch.RuntimeFlagsPatch>;
/**
 * Disables the specified `RuntimeFlag`.
 *
 * @since 2.0.0
 * @category utils
 */
export declare const disable: {
    /**
     * Disables the specified `RuntimeFlag`.
     *
     * @since 2.0.0
     * @category utils
     */
    (flag: RuntimeFlag): (self: RuntimeFlags) => RuntimeFlags;
    /**
     * Disables the specified `RuntimeFlag`.
     *
     * @since 2.0.0
     * @category utils
     */
    (self: RuntimeFlags, flag: RuntimeFlag): RuntimeFlags;
};
/**
 * Disables all of the `RuntimeFlag`s in the specified set of `RuntimeFlags`.
 *
 * @since 2.0.0
 * @category utils
 */
export declare const disableAll: {
    /**
     * Disables all of the `RuntimeFlag`s in the specified set of `RuntimeFlags`.
     *
     * @since 2.0.0
     * @category utils
     */
    (flags: RuntimeFlags): (self: RuntimeFlags) => RuntimeFlags;
    /**
     * Disables all of the `RuntimeFlag`s in the specified set of `RuntimeFlags`.
     *
     * @since 2.0.0
     * @category utils
     */
    (self: RuntimeFlags, flags: RuntimeFlags): RuntimeFlags;
};
/**
 * @since 2.0.0
 * @category context
 */
export declare const disableCooperativeYielding: Layer.Layer<never>;
/**
 * @since 2.0.0
 * @category context
 */
export declare const disableInterruption: Layer.Layer<never>;
/**
 * @since 2.0.0
 * @category context
 */
export declare const disableOpSupervision: Layer.Layer<never>;
/**
 * @since 2.0.0
 * @category context
 */
export declare const disableRuntimeMetrics: Layer.Layer<never>;
/**
 * @since 2.0.0
 * @category context
 */
export declare const disableWindDown: Layer.Layer<never>;
/**
 * Enables the specified `RuntimeFlag`.
 *
 * @since 2.0.0
 * @category utils
 */
export declare const enable: {
    /**
     * Enables the specified `RuntimeFlag`.
     *
     * @since 2.0.0
     * @category utils
     */
    (flag: RuntimeFlag): (self: RuntimeFlags) => RuntimeFlags;
    /**
     * Enables the specified `RuntimeFlag`.
     *
     * @since 2.0.0
     * @category utils
     */
    (self: RuntimeFlags, flag: RuntimeFlag): RuntimeFlags;
};
/**
 * Enables all of the `RuntimeFlag`s in the specified set of `RuntimeFlags`.
 *
 * @since 2.0.0
 * @category utils
 */
export declare const enableAll: {
    /**
     * Enables all of the `RuntimeFlag`s in the specified set of `RuntimeFlags`.
     *
     * @since 2.0.0
     * @category utils
     */
    (flags: RuntimeFlags): (self: RuntimeFlags) => RuntimeFlags;
    /**
     * Enables all of the `RuntimeFlag`s in the specified set of `RuntimeFlags`.
     *
     * @since 2.0.0
     * @category utils
     */
    (self: RuntimeFlags, flags: RuntimeFlags): RuntimeFlags;
};
/**
 * @since 2.0.0
 * @category context
 */
export declare const enableCooperativeYielding: Layer.Layer<never>;
/**
 * @since 2.0.0
 * @category context
 */
export declare const enableInterruption: Layer.Layer<never>;
/**
 * @since 2.0.0
 * @category context
 */
export declare const enableOpSupervision: Layer.Layer<never>;
/**
 * @since 2.0.0
 * @category context
 */
export declare const enableRuntimeMetrics: Layer.Layer<never>;
/**
 * @since 2.0.0
 * @category context
 */
export declare const enableWindDown: Layer.Layer<never>;
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
export declare const interruptible: (self: RuntimeFlags) => boolean;
/**
 * Returns `true` if the `Interruption` `RuntimeFlag` is enabled, `false`
 * otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const interruption: (self: RuntimeFlags) => boolean;
/**
 * Returns `true` if the specified `RuntimeFlag` is enabled, `false` otherwise.
 *
 * @since 2.0.0
 * @category elements
 */
export declare const isEnabled: {
    /**
     * Returns `true` if the specified `RuntimeFlag` is enabled, `false` otherwise.
     *
     * @since 2.0.0
     * @category elements
     */
    (flag: RuntimeFlag): (self: RuntimeFlags) => boolean;
    /**
     * Returns `true` if the specified `RuntimeFlag` is enabled, `false` otherwise.
     *
     * @since 2.0.0
     * @category elements
     */
    (self: RuntimeFlags, flag: RuntimeFlag): boolean;
};
/**
 * Returns `true` if the specified `RuntimeFlag` is disabled, `false` otherwise.
 *
 * @since 2.0.0
 * @category elements
 */
export declare const isDisabled: {
    /**
     * Returns `true` if the specified `RuntimeFlag` is disabled, `false` otherwise.
     *
     * @since 2.0.0
     * @category elements
     */
    (flag: RuntimeFlag): (self: RuntimeFlags) => boolean;
    /**
     * Returns `true` if the specified `RuntimeFlag` is disabled, `false` otherwise.
     *
     * @since 2.0.0
     * @category elements
     */
    (self: RuntimeFlags, flag: RuntimeFlag): boolean;
};
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const make: (...flags: ReadonlyArray<RuntimeFlag>) => RuntimeFlags;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const none: RuntimeFlags;
/**
 * Returns `true` if the `OpSupervision` `RuntimeFlag` is enabled, `false`
 * otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const opSupervision: (self: RuntimeFlags) => boolean;
/**
 * Patches a set of `RuntimeFlag`s with a `RuntimeFlagsPatch`, returning the
 * patched set of `RuntimeFlag`s.
 *
 * @since 2.0.0
 * @category utils
 */
export declare const patch: {
    /**
     * Patches a set of `RuntimeFlag`s with a `RuntimeFlagsPatch`, returning the
     * patched set of `RuntimeFlag`s.
     *
     * @since 2.0.0
     * @category utils
     */
    (patch: RuntimeFlagsPatch.RuntimeFlagsPatch): (self: RuntimeFlags) => RuntimeFlags;
    /**
     * Patches a set of `RuntimeFlag`s with a `RuntimeFlagsPatch`, returning the
     * patched set of `RuntimeFlag`s.
     *
     * @since 2.0.0
     * @category utils
     */
    (self: RuntimeFlags, patch: RuntimeFlagsPatch.RuntimeFlagsPatch): RuntimeFlags;
};
/**
 * Converts the provided `RuntimeFlags` into a `string`.
 *
 * @category conversions
 * @since 2.0.0
 */
export declare const render: (self: RuntimeFlags) => string;
/**
 * Returns `true` if the `RuntimeMetrics` `RuntimeFlag` is enabled, `false`
 * otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const runtimeMetrics: (self: RuntimeFlags) => boolean;
/**
 * Converts the provided `RuntimeFlags` into a `ReadonlySet<number>`.
 *
 * @category conversions
 * @since 2.0.0
 */
export declare const toSet: (self: RuntimeFlags) => ReadonlySet<RuntimeFlag>;
/**
 * Returns `true` if the `WindDown` `RuntimeFlag` is enabled, `false`
 * otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const windDown: (self: RuntimeFlags) => boolean;
//# sourceMappingURL=RuntimeFlags.d.ts.map