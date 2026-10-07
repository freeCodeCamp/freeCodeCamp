/**
 * @since 2.0.0
 */
import * as runtimeFlags from "./internal/runtimeFlags.js";
import * as internal from "./internal/runtimeFlagsPatch.js";
/**
 * The empty `RuntimeFlagsPatch`.
 *
 * @since 2.0.0
 * @category constructors
 */
export const empty = internal.empty;
/**
 * @since 2.0.0
 * @category constructors
 */
export const make = internal.make;
/**
 * Creates a `RuntimeFlagsPatch` describing enabling the provided `RuntimeFlag`.
 *
 * @since 2.0.0
 * @category constructors
 */
export const enable = internal.enable;
/**
 * Creates a `RuntimeFlagsPatch` describing disabling the provided `RuntimeFlag`.
 *
 * @since 2.0.0
 * @category constructors
 */
export const disable = internal.disable;
/**
 * Returns `true` if the specified `RuntimeFlagsPatch` is empty.
 *
 * @since 2.0.0
 * @category getters
 */
export const isEmpty = internal.isEmpty;
/**
 * Returns `true` if the `RuntimeFlagsPatch` describes the specified
 * `RuntimeFlag` as active.
 *
 * @since 2.0.0
 * @category elements
 */
export const isActive = internal.isActive;
/**
 * Returns `true` if the `RuntimeFlagsPatch` describes the specified
 * `RuntimeFlag` as enabled.
 *
 * @since 2.0.0
 * @category elements
 */
export const isEnabled = internal.isEnabled;
/**
 * Returns `true` if the `RuntimeFlagsPatch` describes the specified
 * `RuntimeFlag` as disabled.
 *
 * @since 2.0.0
 * @category elements
 */
export const isDisabled = internal.isDisabled;
/**
 * Returns `true` if the `RuntimeFlagsPatch` includes the specified
 * `RuntimeFlag`, `false` otherwise.
 *
 * @since 2.0.0
 * @category elements
 */
export const includes = internal.isActive;
/**
 * Creates a `RuntimeFlagsPatch` describing the application of the `self` patch,
 * followed by `that` patch.
 *
 * @since 2.0.0
 * @category utils
 */
export const andThen = internal.andThen;
/**
 * Creates a `RuntimeFlagsPatch` describing application of both the `self` patch
 * and `that` patch.
 *
 * @since 2.0.0
 * @category utils
 */
export const both = internal.both;
/**
 * Creates a `RuntimeFlagsPatch` describing application of either the `self`
 * patch or `that` patch.
 *
 * @since 2.0.0
 * @category utils
 */
export const either = internal.either;
/**
 * Creates a `RuntimeFlagsPatch` which describes exclusion of the specified
 * `RuntimeFlag` from the set of `RuntimeFlags`.
 *
 * @category utils
 * @since 2.0.0
 */
export const exclude = internal.exclude;
/**
 * Creates a `RuntimeFlagsPatch` which describes the inverse of the patch
 * specified by the provided `RuntimeFlagsPatch`.
 *
 * @since 2.0.0
 * @category utils
 */
export const inverse = internal.inverse;
/**
 * Returns a `ReadonlySet<number>` containing the `RuntimeFlags` described as
 * enabled by the specified `RuntimeFlagsPatch`.
 *
 * @since 2.0.0
 * @category destructors
 */
export const enabledSet = runtimeFlags.enabledSet;
/**
 * Returns a `ReadonlySet<number>` containing the `RuntimeFlags` described as
 * disabled by the specified `RuntimeFlagsPatch`.
 *
 * @since 2.0.0
 * @category destructors
 */
export const disabledSet = runtimeFlags.disabledSet;
/**
 * Renders the provided `RuntimeFlagsPatch` to a string.
 *
 * @since 2.0.0
 * @category destructors
 */
export const render = runtimeFlags.renderPatch;
//# sourceMappingURL=RuntimeFlagsPatch.js.map