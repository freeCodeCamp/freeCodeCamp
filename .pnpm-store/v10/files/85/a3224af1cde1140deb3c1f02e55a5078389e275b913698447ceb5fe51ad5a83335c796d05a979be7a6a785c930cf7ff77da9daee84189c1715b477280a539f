/**
 * @since 2.0.0
 */
import type * as Context from "./Context.js"
import type * as Effect from "./Effect.js"
import * as internal from "./internal/reloadable.js"
import type * as Layer from "./Layer.js"
import type * as Schedule from "./Schedule.js"
import type * as ScopedRef from "./ScopedRef.js"
import type * as Types from "./Types.js"

/**
 * @since 2.0.0
 * @category symbols
 */
export const ReloadableTypeId: unique symbol = internal.ReloadableTypeId

/**
 * @since 2.0.0
 * @category symbols
 */
export type ReloadableTypeId = typeof ReloadableTypeId

/**
 * A `Reloadable` is an implementation of some service that can be dynamically
 * reloaded, or swapped out for another implementation on-the-fly.
 *
 * @since 2.0.0
 * @category models
 */
export interface Reloadable<in out A> extends Reloadable.Variance<A> {
  /**
   * @internal
   */
  readonly scopedRef: ScopedRef.ScopedRef<A>
  /**
   * @internal
   */
  readonly reload: Effect.Effect<void, unknown>
}

/**
 * @since 2.0.0
 */
export declare namespace Reloadable {
  /**
   * @since 2.0.0
   * @category models
   */
  export interface Variance<in out A> {
    readonly [ReloadableTypeId]: {
      readonly _A: Types.Invariant<A>
    }
  }
}

/**
 * Makes a new reloadable service from a layer that describes the construction
 * of a static service. The service is automatically reloaded according to the
 * provided schedule.
 *
 * @since 2.0.0
 * @category constructors
 */
export const auto: <I, S, E, In, R>(
  tag: Context.Tag<I, S>,
  options: { readonly layer: Layer.Layer<I, E, In>; readonly schedule: Schedule.Schedule<unknown, unknown, R> }
) => Layer.Layer<Reloadable<I>, E, R | In> = internal.auto

/**
 * Makes a new reloadable service from a layer that describes the construction
 * of a static service. The service is automatically reloaded according to a
 * schedule, which is extracted from the input to the layer.
 *
 * @since 2.0.0
 * @category constructors
 */
export const autoFromConfig: <I, S, E, In, R>(
  tag: Context.Tag<I, S>,
  options: {
    readonly layer: Layer.Layer<I, E, In>
    readonly scheduleFromConfig: (context: Context.Context<In>) => Schedule.Schedule<unknown, unknown, R>
  }
) => Layer.Layer<Reloadable<I>, E, R | In> = internal.autoFromConfig

/**
 * Retrieves the current version of the reloadable service.
 *
 * @since 2.0.0
 * @category getters
 */
export const get: <I, S>(tag: Context.Tag<I, S>) => Effect.Effect<S, never, Reloadable<I>> = internal.get

/**
 * Makes a new reloadable service from a layer that describes the construction
 * of a static service.
 *
 * @since 2.0.0
 * @category constructors
 */
export const manual: <I, S, In, E>(
  tag: Context.Tag<I, S>,
  options: { readonly layer: Layer.Layer<I, E, In> }
) => Layer.Layer<Reloadable<I>, E, In> = internal.manual

/**
 * Reloads the specified service.
 *
 * @since 2.0.0
 * @category constructors
 */
export const reload: <I, S>(tag: Context.Tag<I, S>) => Effect.Effect<void, unknown, Reloadable<I>> = internal.reload

/**
 * @since 2.0.0
 * @category context
 */
export const tag: <I, S>(tag: Context.Tag<I, S>) => Context.Tag<Reloadable<I>, Reloadable<S>> = internal.reloadableTag

/**
 * Forks the reload of the service in the background, ignoring any errors.
 *
 * @since 2.0.0
 * @category constructors
 */
export const reloadFork: <I, S>(tag: Context.Tag<I, S>) => Effect.Effect<void, unknown, Reloadable<I>> =
  internal.reloadFork
