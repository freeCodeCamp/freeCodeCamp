/**
 * @since 2.0.0
 */
import type * as Cause from "./Cause.js"
import type * as Effect from "./Effect.js"
import type * as Exit from "./Exit.js"
import type * as FiberId from "./FiberId.js"
import type { LazyArg } from "./Function.js"
import * as core from "./internal/core.js"
import * as internal from "./internal/deferred.js"
import type * as MutableRef from "./MutableRef.js"
import type * as Option from "./Option.js"
import type * as Types from "./Types.js"
import type * as Unify from "./Unify.js"

/**
 * @since 2.0.0
 * @category symbols
 */
export const DeferredTypeId: unique symbol = internal.DeferredTypeId

/**
 * @since 2.0.0
 * @category symbols
 */
export type DeferredTypeId = typeof DeferredTypeId

/**
 * A `Deferred` represents an asynchronous variable that can be set exactly
 * once, with the ability for an arbitrary number of fibers to suspend (by
 * calling `Deferred.await`) and automatically resume when the variable is set.
 *
 * `Deferred` can be used for building primitive actions whose completions
 * require the coordinated action of multiple fibers, and for building
 * higher-level concurrent or asynchronous structures.
 *
 * @since 2.0.0
 * @category models
 */
export interface Deferred<in out A, in out E = never> extends Effect.Effect<A, E>, Deferred.Variance<A, E> {
  /** @internal */
  readonly state: MutableRef.MutableRef<internal.State<A, E>>
  /** @internal */
  readonly blockingOn: FiberId.FiberId
  readonly [Unify.typeSymbol]?: unknown
  readonly [Unify.unifySymbol]?: DeferredUnify<this>
  readonly [Unify.ignoreSymbol]?: DeferredUnifyIgnore
}

/**
 * @category models
 * @since 3.8.0
 */
export interface DeferredUnify<A extends { [Unify.typeSymbol]?: any }> extends Effect.EffectUnify<A> {
  Deferred?: () => Extract<A[Unify.typeSymbol], Deferred<any, any>>
}

/**
 * @category models
 * @since 3.8.0
 */
export interface DeferredUnifyIgnore extends Effect.EffectUnifyIgnore {
  Effect?: true
}

/**
 * @since 2.0.0
 */
export declare namespace Deferred {
  /**
   * @since 2.0.0
   * @category models
   */
  export interface Variance<in out A, in out E> {
    readonly [DeferredTypeId]: {
      readonly _A: Types.Invariant<A>
      readonly _E: Types.Invariant<E>
    }
  }
}

/**
 * Creates a new `Deferred`.
 *
 * @since 2.0.0
 * @category constructors
 */
export const make: <A, E = never>() => Effect.Effect<Deferred<A, E>> = core.deferredMake

/**
 * Creates a new `Deferred` from the specified `FiberId`.
 *
 * @since 2.0.0
 * @category constructors
 */
export const makeAs: <A, E = never>(fiberId: FiberId.FiberId) => Effect.Effect<Deferred<A, E>> = core.deferredMakeAs

const _await: <A, E>(self: Deferred<A, E>) => Effect.Effect<A, E> = core.deferredAwait

export {
  /**
   * Retrieves the value of the `Deferred`, suspending the fiber running the
   * workflow until the result is available.
   *
   * @since 2.0.0
   * @category getters
   */
  _await as await
}

/**
 * Completes the deferred with the result of the specified effect. If the
 * deferred has already been completed, the method will produce false.
 *
 * Note that `Deferred.completeWith` will be much faster, so consider using
 * that if you do not need to memoize the result of the specified effect.
 *
 * @since 2.0.0
 * @category utils
 */
export const complete: {
  /**
   * Completes the deferred with the result of the specified effect. If the
   * deferred has already been completed, the method will produce false.
   *
   * Note that `Deferred.completeWith` will be much faster, so consider using
   * that if you do not need to memoize the result of the specified effect.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E>(effect: Effect.Effect<A, E>): (self: Deferred<A, E>) => Effect.Effect<boolean>
  /**
   * Completes the deferred with the result of the specified effect. If the
   * deferred has already been completed, the method will produce false.
   *
   * Note that `Deferred.completeWith` will be much faster, so consider using
   * that if you do not need to memoize the result of the specified effect.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E>(self: Deferred<A, E>, effect: Effect.Effect<A, E>): Effect.Effect<boolean>
} = core.deferredComplete

/**
 * Completes the deferred with the result of the specified effect. If the
 * deferred has already been completed, the method will produce false.
 *
 * @since 2.0.0
 * @category utils
 */
export const completeWith: {
  /**
   * Completes the deferred with the result of the specified effect. If the
   * deferred has already been completed, the method will produce false.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E>(effect: Effect.Effect<A, E>): (self: Deferred<A, E>) => Effect.Effect<boolean>
  /**
   * Completes the deferred with the result of the specified effect. If the
   * deferred has already been completed, the method will produce false.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E>(self: Deferred<A, E>, effect: Effect.Effect<A, E>): Effect.Effect<boolean>
} = core.deferredCompleteWith

/**
 * Exits the `Deferred` with the specified `Exit` value, which will be
 * propagated to all fibers waiting on the value of the `Deferred`.
 *
 * @since 2.0.0
 * @category utils
 */
export const done: {
  /**
   * Exits the `Deferred` with the specified `Exit` value, which will be
   * propagated to all fibers waiting on the value of the `Deferred`.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E>(exit: Exit.Exit<A, E>): (self: Deferred<A, E>) => Effect.Effect<boolean>
  /**
   * Exits the `Deferred` with the specified `Exit` value, which will be
   * propagated to all fibers waiting on the value of the `Deferred`.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E>(self: Deferred<A, E>, exit: Exit.Exit<A, E>): Effect.Effect<boolean>
} = core.deferredDone

/**
 * Fails the `Deferred` with the specified error, which will be propagated to
 * all fibers waiting on the value of the `Deferred`.
 *
 * @since 2.0.0
 * @category utils
 */
export const fail: {
  /**
   * Fails the `Deferred` with the specified error, which will be propagated to
   * all fibers waiting on the value of the `Deferred`.
   *
   * @since 2.0.0
   * @category utils
   */
  <E>(error: E): <A>(self: Deferred<A, E>) => Effect.Effect<boolean>
  /**
   * Fails the `Deferred` with the specified error, which will be propagated to
   * all fibers waiting on the value of the `Deferred`.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E>(self: Deferred<A, E>, error: E): Effect.Effect<boolean>
} = core.deferredFail

/**
 * Fails the `Deferred` with the specified error, which will be propagated to
 * all fibers waiting on the value of the `Deferred`.
 *
 * @since 2.0.0
 * @category utils
 */
export const failSync: {
  /**
   * Fails the `Deferred` with the specified error, which will be propagated to
   * all fibers waiting on the value of the `Deferred`.
   *
   * @since 2.0.0
   * @category utils
   */
  <E>(evaluate: LazyArg<E>): <A>(self: Deferred<A, E>) => Effect.Effect<boolean>
  /**
   * Fails the `Deferred` with the specified error, which will be propagated to
   * all fibers waiting on the value of the `Deferred`.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E>(self: Deferred<A, E>, evaluate: LazyArg<E>): Effect.Effect<boolean>
} = core.deferredFailSync

/**
 * Fails the `Deferred` with the specified `Cause`, which will be propagated to
 * all fibers waiting on the value of the `Deferred`.
 *
 * @since 2.0.0
 * @category utils
 */
export const failCause: {
  /**
   * Fails the `Deferred` with the specified `Cause`, which will be propagated to
   * all fibers waiting on the value of the `Deferred`.
   *
   * @since 2.0.0
   * @category utils
   */
  <E>(cause: Cause.Cause<E>): <A>(self: Deferred<A, E>) => Effect.Effect<boolean>
  /**
   * Fails the `Deferred` with the specified `Cause`, which will be propagated to
   * all fibers waiting on the value of the `Deferred`.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E>(self: Deferred<A, E>, cause: Cause.Cause<E>): Effect.Effect<boolean>
} = core.deferredFailCause

/**
 * Fails the `Deferred` with the specified `Cause`, which will be propagated to
 * all fibers waiting on the value of the `Deferred`.
 *
 * @since 2.0.0
 * @category utils
 */
export const failCauseSync: {
  /**
   * Fails the `Deferred` with the specified `Cause`, which will be propagated to
   * all fibers waiting on the value of the `Deferred`.
   *
   * @since 2.0.0
   * @category utils
   */
  <E>(evaluate: LazyArg<Cause.Cause<E>>): <A>(self: Deferred<A, E>) => Effect.Effect<boolean>
  /**
   * Fails the `Deferred` with the specified `Cause`, which will be propagated to
   * all fibers waiting on the value of the `Deferred`.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E>(self: Deferred<A, E>, evaluate: LazyArg<Cause.Cause<E>>): Effect.Effect<boolean>
} = core.deferredFailCauseSync

/**
 * Kills the `Deferred` with the specified defect, which will be propagated to
 * all fibers waiting on the value of the `Deferred`.
 *
 * @since 2.0.0
 * @category utils
 */
export const die: {
  /**
   * Kills the `Deferred` with the specified defect, which will be propagated to
   * all fibers waiting on the value of the `Deferred`.
   *
   * @since 2.0.0
   * @category utils
   */
  (defect: unknown): <A, E>(self: Deferred<A, E>) => Effect.Effect<boolean>
  /**
   * Kills the `Deferred` with the specified defect, which will be propagated to
   * all fibers waiting on the value of the `Deferred`.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E>(self: Deferred<A, E>, defect: unknown): Effect.Effect<boolean>
} = core.deferredDie

/**
 * Kills the `Deferred` with the specified defect, which will be propagated to
 * all fibers waiting on the value of the `Deferred`.
 *
 * @since 2.0.0
 * @category utils
 */
export const dieSync: {
  /**
   * Kills the `Deferred` with the specified defect, which will be propagated to
   * all fibers waiting on the value of the `Deferred`.
   *
   * @since 2.0.0
   * @category utils
   */
  (evaluate: LazyArg<unknown>): <A, E>(self: Deferred<A, E>) => Effect.Effect<boolean>
  /**
   * Kills the `Deferred` with the specified defect, which will be propagated to
   * all fibers waiting on the value of the `Deferred`.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E>(self: Deferred<A, E>, evaluate: LazyArg<unknown>): Effect.Effect<boolean>
} = core.deferredDieSync

/**
 * Completes the `Deferred` with interruption. This will interrupt all fibers
 * waiting on the value of the `Deferred` with the `FiberId` of the fiber
 * calling this method.
 *
 * @since 2.0.0
 * @category utils
 */
export const interrupt: <A, E>(self: Deferred<A, E>) => Effect.Effect<boolean> = core.deferredInterrupt

/**
 * Completes the `Deferred` with interruption. This will interrupt all fibers
 * waiting on the value of the `Deferred` with the specified `FiberId`.
 *
 * @since 2.0.0
 * @category utils
 */
export const interruptWith: {
  /**
   * Completes the `Deferred` with interruption. This will interrupt all fibers
   * waiting on the value of the `Deferred` with the specified `FiberId`.
   *
   * @since 2.0.0
   * @category utils
   */
  (fiberId: FiberId.FiberId): <A, E>(self: Deferred<A, E>) => Effect.Effect<boolean>
  /**
   * Completes the `Deferred` with interruption. This will interrupt all fibers
   * waiting on the value of the `Deferred` with the specified `FiberId`.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E>(self: Deferred<A, E>, fiberId: FiberId.FiberId): Effect.Effect<boolean>
} = core.deferredInterruptWith

/**
 * Returns `true` if this `Deferred` has already been completed with a value or
 * an error, `false` otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
export const isDone: <A, E>(self: Deferred<A, E>) => Effect.Effect<boolean> = core.deferredIsDone

/**
 * Returns a `Some<Effect<A, E, R>>` from the `Deferred` if this `Deferred` has
 * already been completed, `None` otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
export const poll: <A, E>(
  self: Deferred<A, E>
) => Effect.Effect<Option.Option<Effect.Effect<A, E>>> = core.deferredPoll

/**
 * Completes the `Deferred` with the specified value.
 *
 * @since 2.0.0
 * @category utils
 */
export const succeed: {
  /**
   * Completes the `Deferred` with the specified value.
   *
   * @since 2.0.0
   * @category utils
   */
  <A>(value: A): <E>(self: Deferred<A, E>) => Effect.Effect<boolean>
  /**
   * Completes the `Deferred` with the specified value.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E>(self: Deferred<A, E>, value: A): Effect.Effect<boolean>
} = core.deferredSucceed

/**
 * Completes the `Deferred` with the specified lazily evaluated value.
 *
 * @since 2.0.0
 * @category utils
 */
export const sync: {
  /**
   * Completes the `Deferred` with the specified lazily evaluated value.
   *
   * @since 2.0.0
   * @category utils
   */
  <A>(evaluate: LazyArg<A>): <E>(self: Deferred<A, E>) => Effect.Effect<boolean>
  /**
   * Completes the `Deferred` with the specified lazily evaluated value.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E>(self: Deferred<A, E>, evaluate: LazyArg<A>): Effect.Effect<boolean>
} = core.deferredSync

/**
 * Unsafely creates a new `Deferred` from the specified `FiberId`.
 *
 * @since 2.0.0
 * @category unsafe
 */
export const unsafeMake: <A, E = never>(fiberId: FiberId.FiberId) => Deferred<A, E> = core.deferredUnsafeMake

/**
 * Unsafely exits the `Deferred` with the specified `Exit` value, which will be
 * propagated to all fibers waiting on the value of the `Deferred`.
 *
 * @since 2.0.0
 * @category unsafe
 */
export const unsafeDone: <A, E>(self: Deferred<A, E>, effect: Effect.Effect<A, E>) => void = core.deferredUnsafeDone
