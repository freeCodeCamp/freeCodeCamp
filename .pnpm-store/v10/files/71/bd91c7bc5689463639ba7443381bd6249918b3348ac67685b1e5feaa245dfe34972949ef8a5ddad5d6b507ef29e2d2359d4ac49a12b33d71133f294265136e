/**
 * @since 2.0.0
 */
import type * as Context from "./Context.js";
import type * as Effect from "./Effect.js";
import type * as Layer from "./Layer.js";
import type * as Schedule from "./Schedule.js";
import type * as Types from "./Types.js";
/**
 * @since 2.0.0
 * @category symbols
 */
export declare const ReloadableTypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbols
 */
export type ReloadableTypeId = typeof ReloadableTypeId;
/**
 * A `Reloadable` is an implementation of some service that can be dynamically
 * reloaded, or swapped out for another implementation on-the-fly.
 *
 * @since 2.0.0
 * @category models
 */
export interface Reloadable<in out A> extends Reloadable.Variance<A> {
}
/**
 * @since 2.0.0
 */
export declare namespace Reloadable {
    /**
     * @since 2.0.0
     * @category models
     */
    interface Variance<in out A> {
        readonly [ReloadableTypeId]: {
            readonly _A: Types.Invariant<A>;
        };
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
export declare const auto: <I, S, E, In, R>(tag: Context.Tag<I, S>, options: {
    readonly layer: Layer.Layer<I, E, In>;
    readonly schedule: Schedule.Schedule<unknown, unknown, R>;
}) => Layer.Layer<Reloadable<I>, E, R | In>;
/**
 * Makes a new reloadable service from a layer that describes the construction
 * of a static service. The service is automatically reloaded according to a
 * schedule, which is extracted from the input to the layer.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const autoFromConfig: <I, S, E, In, R>(tag: Context.Tag<I, S>, options: {
    readonly layer: Layer.Layer<I, E, In>;
    readonly scheduleFromConfig: (context: Context.Context<In>) => Schedule.Schedule<unknown, unknown, R>;
}) => Layer.Layer<Reloadable<I>, E, R | In>;
/**
 * Retrieves the current version of the reloadable service.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const get: <I, S>(tag: Context.Tag<I, S>) => Effect.Effect<S, never, Reloadable<I>>;
/**
 * Makes a new reloadable service from a layer that describes the construction
 * of a static service.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const manual: <I, S, In, E>(tag: Context.Tag<I, S>, options: {
    readonly layer: Layer.Layer<I, E, In>;
}) => Layer.Layer<Reloadable<I>, E, In>;
/**
 * Reloads the specified service.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const reload: <I, S>(tag: Context.Tag<I, S>) => Effect.Effect<void, unknown, Reloadable<I>>;
/**
 * @since 2.0.0
 * @category context
 */
export declare const tag: <I, S>(tag: Context.Tag<I, S>) => Context.Tag<Reloadable<I>, Reloadable<S>>;
/**
 * Forks the reload of the service in the background, ignoring any errors.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const reloadFork: <I, S>(tag: Context.Tag<I, S>) => Effect.Effect<void, unknown, Reloadable<I>>;
//# sourceMappingURL=Reloadable.d.ts.map