/**
 * @since 2.0.0
 */
import * as core from "./internal/core.js";
import * as fiberRuntime from "./internal/fiberRuntime.js";
/**
 * A unique identifier for the `Scope` type.
 *
 * @since 2.0.0
 * @category symbols
 */
export const ScopeTypeId = core.ScopeTypeId;
/**
 * A unique identifier for the `CloseableScope` type.
 *
 * @since 2.0.0
 * @category symbols
 */
export const CloseableScopeTypeId = core.CloseableScopeTypeId;
/**
 * A tag representing the current `Scope` in the environment.
 *
 * @since 2.0.0
 * @category context
 */
export const Scope = fiberRuntime.scopeTag;
/**
 * Adds a finalizer to this scope. The finalizer is guaranteed to be run when
 * the scope is closed. Use this when the finalizer does not need to know the
 * `Exit` value that the scope is closed with.
 *
 * @see {@link addFinalizerExit}
 *
 * @since 2.0.0
 * @category utils
 */
export const addFinalizer = core.scopeAddFinalizer;
/**
 * Adds a finalizer to this scope. The finalizer receives the `Exit` value
 * when the scope is closed, allowing it to perform different actions based
 * on the exit status.
 *
 * @see {@link addFinalizer}
 *
 * @since 2.0.0
 * @category utils
 */
export const addFinalizerExit = core.scopeAddFinalizerExit;
/**
 * Closes this scope with the specified exit value, running all finalizers that
 * have been added to the scope.
 *
 * @since 2.0.0
 * @category destructors
 */
export const close = core.scopeClose;
/**
 * Extends the scope of an `Effect` that requires a scope into this scope.
 * It provides this scope to the effect but does not close the scope when the
 * effect completes execution. This allows extending a scoped value into a
 * larger scope.
 *
 * @since 2.0.0
 * @category utils
 */
export const extend = fiberRuntime.scopeExtend;
/**
 * Forks a new child scope with the specified execution strategy. The child scope
 * will automatically be closed when this scope is closed.
 *
 * @since 2.0.0
 * @category utils
 */
export const fork = core.scopeFork;
/**
 * Provides this closeable scope to an `Effect` that requires a scope,
 * guaranteeing that the scope is closed with the result of that effect as
 * soon as the effect completes execution, whether by success, failure, or
 * interruption.
 *
 * @since 2.0.0
 * @category destructors
 */
export const use = fiberRuntime.scopeUse;
/**
 * Creates a new closeable scope where finalizers will run according to the
 * specified `ExecutionStrategy`. If no execution strategy is provided, `sequential`
 * will be used by default.
 *
 * @since 2.0.0
 * @category constructors
 */
export const make = fiberRuntime.scopeMake;
//# sourceMappingURL=Scope.js.map