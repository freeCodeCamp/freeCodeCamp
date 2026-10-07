/**
 * @since 2.0.0
 */
import type * as Context from "./Context.js";
import type * as Effect from "./Effect.js";
import type * as ExecutionStrategy from "./ExecutionStrategy.js";
import type * as Exit from "./Exit.js";
import type { Pipeable } from "./Pipeable.js";
/**
 * A unique identifier for the `Scope` type.
 *
 * @since 2.0.0
 * @category symbols
 */
export declare const ScopeTypeId: unique symbol;
/**
 * The type of the unique identifier for `Scope`.
 *
 * @since 2.0.0
 * @category symbols
 */
export type ScopeTypeId = typeof ScopeTypeId;
/**
 * A unique identifier for the `CloseableScope` type.
 *
 * @since 2.0.0
 * @category symbols
 */
export declare const CloseableScopeTypeId: unique symbol;
/**
 * The type of the unique identifier for `CloseableScope`.
 *
 * @since 2.0.0
 * @category symbols
 */
export type CloseableScopeTypeId = typeof CloseableScopeTypeId;
/**
 * Represents a scope that manages finalizers and can fork child scopes.
 *
 * @since 2.0.0
 * @category models
 */
export interface Scope extends Pipeable {
    readonly [ScopeTypeId]: ScopeTypeId;
    /**
     * The execution strategy for running finalizers in this scope.
     */
    readonly strategy: ExecutionStrategy.ExecutionStrategy;
}
/**
 * A scope that can be explicitly closed with a specified exit value.
 *
 * @since 2.0.0
 * @category models
 */
export interface CloseableScope extends Scope, Pipeable {
    readonly [CloseableScopeTypeId]: CloseableScopeTypeId;
}
/**
 * A tag representing the current `Scope` in the environment.
 *
 * @since 2.0.0
 * @category context
 */
export declare const Scope: Context.Tag<Scope, Scope>;
/**
 * @since 2.0.0
 */
export declare namespace Scope {
    /**
     * A finalizer function that takes an `Exit` value and returns an `Effect`.
     *
     * @since 2.0.0
     * @category model
     */
    type Finalizer = (exit: Exit.Exit<unknown, unknown>) => Effect.Effect<void>;
    /**
     * A closeable scope that can be explicitly closed.
     *
     * @since 2.0.0
     * @category model
     */
    type Closeable = CloseableScope;
}
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
export declare const addFinalizer: (self: Scope, finalizer: Effect.Effect<unknown>) => Effect.Effect<void>;
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
export declare const addFinalizerExit: (self: Scope, finalizer: Scope.Finalizer) => Effect.Effect<void>;
/**
 * Closes this scope with the specified exit value, running all finalizers that
 * have been added to the scope.
 *
 * @since 2.0.0
 * @category destructors
 */
export declare const close: (self: CloseableScope, exit: Exit.Exit<unknown, unknown>) => Effect.Effect<void>;
/**
 * Extends the scope of an `Effect` that requires a scope into this scope.
 * It provides this scope to the effect but does not close the scope when the
 * effect completes execution. This allows extending a scoped value into a
 * larger scope.
 *
 * @since 2.0.0
 * @category utils
 */
export declare const extend: {
    /**
     * Extends the scope of an `Effect` that requires a scope into this scope.
     * It provides this scope to the effect but does not close the scope when the
     * effect completes execution. This allows extending a scoped value into a
     * larger scope.
     *
     * @since 2.0.0
     * @category utils
     */
    (scope: Scope): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, Exclude<R, Scope>>;
    /**
     * Extends the scope of an `Effect` that requires a scope into this scope.
     * It provides this scope to the effect but does not close the scope when the
     * effect completes execution. This allows extending a scoped value into a
     * larger scope.
     *
     * @since 2.0.0
     * @category utils
     */
    <A, E, R>(effect: Effect.Effect<A, E, R>, scope: Scope): Effect.Effect<A, E, Exclude<R, Scope>>;
};
/**
 * Forks a new child scope with the specified execution strategy. The child scope
 * will automatically be closed when this scope is closed.
 *
 * @since 2.0.0
 * @category utils
 */
export declare const fork: (self: Scope, strategy: ExecutionStrategy.ExecutionStrategy) => Effect.Effect<CloseableScope>;
/**
 * Provides this closeable scope to an `Effect` that requires a scope,
 * guaranteeing that the scope is closed with the result of that effect as
 * soon as the effect completes execution, whether by success, failure, or
 * interruption.
 *
 * @since 2.0.0
 * @category destructors
 */
export declare const use: {
    /**
     * Provides this closeable scope to an `Effect` that requires a scope,
     * guaranteeing that the scope is closed with the result of that effect as
     * soon as the effect completes execution, whether by success, failure, or
     * interruption.
     *
     * @since 2.0.0
     * @category destructors
     */
    (scope: CloseableScope): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, Exclude<R, Scope>>;
    /**
     * Provides this closeable scope to an `Effect` that requires a scope,
     * guaranteeing that the scope is closed with the result of that effect as
     * soon as the effect completes execution, whether by success, failure, or
     * interruption.
     *
     * @since 2.0.0
     * @category destructors
     */
    <A, E, R>(effect: Effect.Effect<A, E, R>, scope: CloseableScope): Effect.Effect<A, E, Exclude<R, Scope>>;
};
/**
 * Creates a new closeable scope where finalizers will run according to the
 * specified `ExecutionStrategy`. If no execution strategy is provided, `sequential`
 * will be used by default.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const make: (executionStrategy?: ExecutionStrategy.ExecutionStrategy) => Effect.Effect<CloseableScope>;
//# sourceMappingURL=Scope.d.ts.map