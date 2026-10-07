/**
 * @since 2.0.0
 */
import type * as Effect from "./Effect.js"
import type * as Exit from "./Exit.js"
import * as internal from "./internal/resource.js"
import type * as Schedule from "./Schedule.js"
import type * as Scope from "./Scope.js"
import type * as ScopedRef from "./ScopedRef.js"
import type * as Types from "./Types.js"
import type * as Unify from "./Unify.js"

/**
 * @since 2.0.0
 * @category symbols
 */
export const ResourceTypeId: unique symbol = internal.ResourceTypeId

/**
 * @since 2.0.0
 * @category symbols
 */
export type ResourceTypeId = typeof ResourceTypeId

/**
 * A `Resource` is a possibly resourceful value that is loaded into memory, and
 * which can be refreshed either manually or automatically.
 *
 * @since 2.0.0
 * @category models
 */
export interface Resource<in out A, in out E = never> extends Effect.Effect<A, E>, Resource.Variance<A, E> {
  /** @internal */
  readonly scopedRef: ScopedRef.ScopedRef<Exit.Exit<A, E>>
  /** @internal */
  readonly acquire: Effect.Effect<A, E, Scope.Scope>

  readonly [Unify.typeSymbol]?: unknown
  readonly [Unify.unifySymbol]?: ResourceUnify<this>
  readonly [Unify.ignoreSymbol]?: ResourceUnifyIgnore
}

/**
 * @category models
 * @since 3.9.0
 */
export interface ResourceUnify<A extends { [Unify.typeSymbol]?: any }> extends Effect.EffectUnify<A> {
  Resource?: () => Extract<A[Unify.typeSymbol], Resource<any, any>>
}

/**
 * @category models
 * @since 3.9.0
 */
export interface ResourceUnifyIgnore extends Effect.EffectUnifyIgnore {
  Effect?: true
}

/**
 * @since 2.0.0
 */
export declare namespace Resource {
  /**
   * @since 2.0.0
   * @category models
   */
  export interface Variance<in out A, in out E> {
    readonly [ResourceTypeId]: {
      _A: Types.Invariant<A>
      _E: Types.Invariant<E>
    }
  }
}

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
export const auto: <A, E, R, Out, R2>(
  acquire: Effect.Effect<A, E, R>,
  policy: Schedule.Schedule<Out, unknown, R2>
) => Effect.Effect<Resource<A, E>, never, R | R2 | Scope.Scope> = internal.auto

/**
 * Retrieves the current value stored in the cache.
 *
 * @since 2.0.0
 * @category getters
 */
export const get: <A, E>(self: Resource<A, E>) => Effect.Effect<A, E> = internal.get

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
export const manual: <A, E, R>(
  acquire: Effect.Effect<A, E, R>
) => Effect.Effect<Resource<A, E>, never, Scope.Scope | R> = internal.manual

/**
 * Refreshes the cache. This method will not return until either the refresh
 * is successful, or the refresh operation fails.
 *
 * @since 2.0.0
 * @category utils
 */
export const refresh: <A, E>(self: Resource<A, E>) => Effect.Effect<void, E> = internal.refresh
