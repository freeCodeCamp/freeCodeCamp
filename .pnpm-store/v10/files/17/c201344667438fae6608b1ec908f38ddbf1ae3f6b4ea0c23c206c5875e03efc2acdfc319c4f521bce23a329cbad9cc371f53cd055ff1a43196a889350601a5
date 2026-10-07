/**
 * @since 2.0.0
 */
import * as runtimeFlags from "./internal/runtimeFlags.js"
import * as internal from "./internal/runtimeFlagsPatch.js"
import type * as RuntimeFlags from "./RuntimeFlags.js"

/**
 * @since 2.0.0
 * @category models
 */
export type RuntimeFlagsPatch = number & {
  readonly RuntimeFlagsPatch: unique symbol
}

/**
 * The empty `RuntimeFlagsPatch`.
 *
 * @since 2.0.0
 * @category constructors
 */
export const empty: RuntimeFlagsPatch = internal.empty

/**
 * @since 2.0.0
 * @category constructors
 */
export const make: (active: number, enabled: number) => RuntimeFlagsPatch = internal.make

/**
 * Creates a `RuntimeFlagsPatch` describing enabling the provided `RuntimeFlag`.
 *
 * @since 2.0.0
 * @category constructors
 */
export const enable: (flag: RuntimeFlags.RuntimeFlag) => RuntimeFlagsPatch = internal.enable

/**
 * Creates a `RuntimeFlagsPatch` describing disabling the provided `RuntimeFlag`.
 *
 * @since 2.0.0
 * @category constructors
 */
export const disable: (flag: RuntimeFlags.RuntimeFlag) => RuntimeFlagsPatch = internal.disable

/**
 * Returns `true` if the specified `RuntimeFlagsPatch` is empty.
 *
 * @since 2.0.0
 * @category getters
 */
export const isEmpty: (patch: RuntimeFlagsPatch) => boolean = internal.isEmpty

/**
 * Returns `true` if the `RuntimeFlagsPatch` describes the specified
 * `RuntimeFlag` as active.
 *
 * @since 2.0.0
 * @category elements
 */
export const isActive: {
  /**
   * Returns `true` if the `RuntimeFlagsPatch` describes the specified
   * `RuntimeFlag` as active.
   *
   * @since 2.0.0
   * @category elements
   */
  (flag: RuntimeFlagsPatch): (self: RuntimeFlagsPatch) => boolean
  /**
   * Returns `true` if the `RuntimeFlagsPatch` describes the specified
   * `RuntimeFlag` as active.
   *
   * @since 2.0.0
   * @category elements
   */
  (self: RuntimeFlagsPatch, flag: RuntimeFlagsPatch): boolean
} = internal.isActive

/**
 * Returns `true` if the `RuntimeFlagsPatch` describes the specified
 * `RuntimeFlag` as enabled.
 *
 * @since 2.0.0
 * @category elements
 */
export const isEnabled: {
  /**
   * Returns `true` if the `RuntimeFlagsPatch` describes the specified
   * `RuntimeFlag` as enabled.
   *
   * @since 2.0.0
   * @category elements
   */
  (flag: RuntimeFlags.RuntimeFlag): (self: RuntimeFlagsPatch) => boolean
  /**
   * Returns `true` if the `RuntimeFlagsPatch` describes the specified
   * `RuntimeFlag` as enabled.
   *
   * @since 2.0.0
   * @category elements
   */
  (self: RuntimeFlagsPatch, flag: RuntimeFlags.RuntimeFlag): boolean
} = internal.isEnabled

/**
 * Returns `true` if the `RuntimeFlagsPatch` describes the specified
 * `RuntimeFlag` as disabled.
 *
 * @since 2.0.0
 * @category elements
 */
export const isDisabled: {
  /**
   * Returns `true` if the `RuntimeFlagsPatch` describes the specified
   * `RuntimeFlag` as disabled.
   *
   * @since 2.0.0
   * @category elements
   */
  (flag: RuntimeFlags.RuntimeFlag): (self: RuntimeFlagsPatch) => boolean
  /**
   * Returns `true` if the `RuntimeFlagsPatch` describes the specified
   * `RuntimeFlag` as disabled.
   *
   * @since 2.0.0
   * @category elements
   */
  (self: RuntimeFlagsPatch, flag: RuntimeFlags.RuntimeFlag): boolean
} = internal.isDisabled

/**
 * Returns `true` if the `RuntimeFlagsPatch` includes the specified
 * `RuntimeFlag`, `false` otherwise.
 *
 * @since 2.0.0
 * @category elements
 */
export const includes: {
  /**
   * Returns `true` if the `RuntimeFlagsPatch` includes the specified
   * `RuntimeFlag`, `false` otherwise.
   *
   * @since 2.0.0
   * @category elements
   */
  (flag: RuntimeFlagsPatch): (self: RuntimeFlagsPatch) => boolean
  /**
   * Returns `true` if the `RuntimeFlagsPatch` includes the specified
   * `RuntimeFlag`, `false` otherwise.
   *
   * @since 2.0.0
   * @category elements
   */
  (self: RuntimeFlagsPatch, flag: RuntimeFlagsPatch): boolean
} = internal.isActive

/**
 * Creates a `RuntimeFlagsPatch` describing the application of the `self` patch,
 * followed by `that` patch.
 *
 * @since 2.0.0
 * @category utils
 */
export const andThen: {
  /**
   * Creates a `RuntimeFlagsPatch` describing the application of the `self` patch,
   * followed by `that` patch.
   *
   * @since 2.0.0
   * @category utils
   */
  (that: RuntimeFlagsPatch): (self: RuntimeFlagsPatch) => RuntimeFlagsPatch
  /**
   * Creates a `RuntimeFlagsPatch` describing the application of the `self` patch,
   * followed by `that` patch.
   *
   * @since 2.0.0
   * @category utils
   */
  (self: RuntimeFlagsPatch, that: RuntimeFlagsPatch): RuntimeFlagsPatch
} = internal.andThen

/**
 * Creates a `RuntimeFlagsPatch` describing application of both the `self` patch
 * and `that` patch.
 *
 * @since 2.0.0
 * @category utils
 */
export const both: {
  /**
   * Creates a `RuntimeFlagsPatch` describing application of both the `self` patch
   * and `that` patch.
   *
   * @since 2.0.0
   * @category utils
   */
  (that: RuntimeFlagsPatch): (self: RuntimeFlagsPatch) => RuntimeFlagsPatch
  /**
   * Creates a `RuntimeFlagsPatch` describing application of both the `self` patch
   * and `that` patch.
   *
   * @since 2.0.0
   * @category utils
   */
  (self: RuntimeFlagsPatch, that: RuntimeFlagsPatch): RuntimeFlagsPatch
} = internal.both

/**
 * Creates a `RuntimeFlagsPatch` describing application of either the `self`
 * patch or `that` patch.
 *
 * @since 2.0.0
 * @category utils
 */
export const either: {
  /**
   * Creates a `RuntimeFlagsPatch` describing application of either the `self`
   * patch or `that` patch.
   *
   * @since 2.0.0
   * @category utils
   */
  (that: RuntimeFlagsPatch): (self: RuntimeFlagsPatch) => RuntimeFlagsPatch
  /**
   * Creates a `RuntimeFlagsPatch` describing application of either the `self`
   * patch or `that` patch.
   *
   * @since 2.0.0
   * @category utils
   */
  (self: RuntimeFlagsPatch, that: RuntimeFlagsPatch): RuntimeFlagsPatch
} = internal.either

/**
 * Creates a `RuntimeFlagsPatch` which describes exclusion of the specified
 * `RuntimeFlag` from the set of `RuntimeFlags`.
 *
 * @category utils
 * @since 2.0.0
 */
export const exclude: {
  /**
   * Creates a `RuntimeFlagsPatch` which describes exclusion of the specified
   * `RuntimeFlag` from the set of `RuntimeFlags`.
   *
   * @category utils
   * @since 2.0.0
   */
  (flag: RuntimeFlags.RuntimeFlag): (self: RuntimeFlagsPatch) => RuntimeFlagsPatch
  /**
   * Creates a `RuntimeFlagsPatch` which describes exclusion of the specified
   * `RuntimeFlag` from the set of `RuntimeFlags`.
   *
   * @category utils
   * @since 2.0.0
   */
  (self: RuntimeFlagsPatch, flag: RuntimeFlags.RuntimeFlag): RuntimeFlagsPatch
} = internal.exclude

/**
 * Creates a `RuntimeFlagsPatch` which describes the inverse of the patch
 * specified by the provided `RuntimeFlagsPatch`.
 *
 * @since 2.0.0
 * @category utils
 */
export const inverse: (patch: RuntimeFlagsPatch) => RuntimeFlagsPatch = internal.inverse

/**
 * Returns a `ReadonlySet<number>` containing the `RuntimeFlags` described as
 * enabled by the specified `RuntimeFlagsPatch`.
 *
 * @since 2.0.0
 * @category destructors
 */
export const enabledSet: (self: RuntimeFlagsPatch) => ReadonlySet<RuntimeFlags.RuntimeFlag> = runtimeFlags.enabledSet

/**
 * Returns a `ReadonlySet<number>` containing the `RuntimeFlags` described as
 * disabled by the specified `RuntimeFlagsPatch`.
 *
 * @since 2.0.0
 * @category destructors
 */
export const disabledSet: (self: RuntimeFlagsPatch) => ReadonlySet<RuntimeFlags.RuntimeFlag> = runtimeFlags.disabledSet

/**
 * Renders the provided `RuntimeFlagsPatch` to a string.
 *
 * @since 2.0.0
 * @category destructors
 */
export const render: (self: RuntimeFlagsPatch) => string = runtimeFlags.renderPatch
