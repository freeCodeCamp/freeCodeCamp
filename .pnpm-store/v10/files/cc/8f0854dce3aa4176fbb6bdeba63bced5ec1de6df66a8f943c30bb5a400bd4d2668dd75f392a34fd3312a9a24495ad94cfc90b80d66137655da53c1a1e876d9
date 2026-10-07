/**
 * @since 2.0.0
 */
import type * as Cause from "./Cause.js"
import type { Context } from "./Context.js"
import type { DefaultServices } from "./DefaultServices.js"
import type * as Effect from "./Effect.js"
import type * as Either from "./Either.js"
import type * as Exit from "./Exit.js"
import type * as FiberId from "./FiberId.js"
import type { FiberRef } from "./FiberRef.js"
import type * as FiberRefs from "./FiberRefs.js"
import type * as FiberStatus from "./FiberStatus.js"
import type * as HashSet from "./HashSet.js"
import * as core from "./internal/core.js"
import * as circular from "./internal/effect/circular.js"
import * as internal from "./internal/fiber.js"
import * as fiberRuntime from "./internal/fiberRuntime.js"
import type * as Option from "./Option.js"
import type * as order from "./Order.js"
import type * as RuntimeFlags from "./RuntimeFlags.js"
import type { Scheduler } from "./Scheduler.js"
import type * as Scope from "./Scope.js"
import type { Supervisor } from "./Supervisor.js"
import type { AnySpan, Tracer } from "./Tracer.js"
import type * as Types from "./Types.js"
import type * as Unify from "./Unify.js"

/**
 * @since 2.0.0
 * @category symbols
 */
export const FiberTypeId: unique symbol = internal.FiberTypeId

/**
 * @since 2.0.0
 * @category symbols
 */
export type FiberTypeId = typeof FiberTypeId

/**
 * @since 2.0.0
 * @category symbols
 */
export const RuntimeFiberTypeId: unique symbol = internal.RuntimeFiberTypeId

/**
 * @since 2.0.0
 * @category symbols
 */
export type RuntimeFiberTypeId = typeof RuntimeFiberTypeId

/**
 * A fiber is a lightweight thread of execution that never consumes more than a
 * whole thread (but may consume much less, depending on contention and
 * asynchronicity). Fibers are spawned by forking effects, which run
 * concurrently with the parent effect.
 *
 * Fibers can be joined, yielding their result to other fibers, or interrupted,
 * which terminates the fiber, safely releasing all resources.
 *
 * @since 2.0.0
 * @category models
 */
export interface Fiber<out A, out E = never> extends Effect.Effect<A, E>, Fiber.Variance<A, E> {
  /**
   * The identity of the fiber.
   */
  id(): FiberId.FiberId

  /**
   * Awaits the fiber, which suspends the awaiting fiber until the result of the
   * fiber has been determined.
   */
  readonly await: Effect.Effect<Exit.Exit<A, E>>

  /**
   * Retrieves the immediate children of the fiber.
   */
  readonly children: Effect.Effect<Array<Fiber.Runtime<any, any>>>

  /**
   * Inherits values from all `FiberRef` instances into current fiber. This
   * will resume immediately.
   */
  readonly inheritAll: Effect.Effect<void>

  /**
   * Tentatively observes the fiber, but returns immediately if it is not
   * already done.
   */
  readonly poll: Effect.Effect<Option.Option<Exit.Exit<A, E>>>

  /**
   * In the background, interrupts the fiber as if interrupted from the
   * specified fiber. If the fiber has already exited, the returned effect will
   * resume immediately. Otherwise, the effect will resume when the fiber exits.
   */
  interruptAsFork(fiberId: FiberId.FiberId): Effect.Effect<void>

  readonly [Unify.typeSymbol]?: unknown
  readonly [Unify.unifySymbol]?: FiberUnify<this>
  readonly [Unify.ignoreSymbol]?: FiberUnifyIgnore
}

/**
 * @category models
 * @since 3.8.0
 */
export interface FiberUnify<A extends { [Unify.typeSymbol]?: any }> extends Effect.EffectUnify<A> {
  Fiber?: () => A[Unify.typeSymbol] extends Fiber<infer A0, infer E0> | infer _ ? Fiber<A0, E0> : never
}

/**
 * @category models
 * @since 3.8.0
 */
export interface FiberUnifyIgnore extends Effect.EffectUnifyIgnore {
  Effect?: true
}

/**
 * A runtime fiber that is executing an effect. Runtime fibers have an
 * identity and a trace.
 *
 * @since 2.0.0
 * @category models
 */
export interface RuntimeFiber<out A, out E = never> extends Fiber<A, E>, Fiber.RuntimeVariance<A, E> {
  /**
   * Reads the current number of ops that have occurred since the last yield
   */
  get currentOpCount(): number

  /**
   * Reads the current value of a fiber ref
   */
  getFiberRef<X>(fiberRef: FiberRef<X>): X

  /**
   * The identity of the fiber.
   */
  id(): FiberId.Runtime

  /**
   * The status of the fiber.
   */
  readonly status: Effect.Effect<FiberStatus.FiberStatus>

  /**
   * Returns the current `RuntimeFlags` the fiber is running with.
   */
  readonly runtimeFlags: Effect.Effect<RuntimeFlags.RuntimeFlags>

  /**
   * Adds an observer to the list of observers.
   */
  addObserver(observer: (exit: Exit.Exit<A, E>) => void): void

  /**
   * Removes the specified observer from the list of observers that will be
   * notified when the fiber exits.
   */
  removeObserver(observer: (exit: Exit.Exit<A, E>) => void): void

  /**
   * Retrieves all fiber refs of the fiber.
   */
  getFiberRefs(): FiberRefs.FiberRefs

  /**
   * Unsafely observes the fiber, but returns immediately if it is not
   * already done.
   */
  unsafePoll(): Exit.Exit<A, E> | null

  /**
   * In the background, interrupts the fiber as if interrupted from the
   * specified fiber. If the fiber has already exited, the returned effect will
   * resume immediately. Otherwise, the effect will resume when the fiber exits.
   */
  unsafeInterruptAsFork(fiberId: FiberId.FiberId): void

  /**
   * Gets the current context
   */
  get currentContext(): Context<never>

  /**
   * Gets the current context
   */
  get currentDefaultServices(): Context<DefaultServices>

  /**
   * Gets the current scheduler
   */
  get currentScheduler(): Scheduler

  /**
   * Gets the current tracer
   */
  get currentTracer(): Tracer

  /**
   * Gets the current span
   */
  get currentSpan(): AnySpan | undefined

  /**
   * Gets the current supervisor
   */
  get currentSupervisor(): Supervisor<unknown>

  readonly [Unify.typeSymbol]?: unknown
  readonly [Unify.unifySymbol]?: RuntimeFiberUnify<this>
  readonly [Unify.ignoreSymbol]?: RuntimeFiberUnifyIgnore
}

/**
 * @category models
 * @since 3.8.0
 */
export interface RuntimeFiberUnify<A extends { [Unify.typeSymbol]?: any }> extends FiberUnify<A> {
  RuntimeFiber?: () => A[Unify.typeSymbol] extends RuntimeFiber<infer A0, infer E0> | infer _ ? RuntimeFiber<A0, E0>
    : never
}

/**
 * @category models
 * @since 3.8.0
 */
export interface RuntimeFiberUnifyIgnore extends FiberUnifyIgnore {
  Fiber?: true
}

/**
 * @since 2.0.0
 */
export declare namespace Fiber {
  /**
   * @since 2.0.0
   * @category models
   */
  export type Runtime<A, E = never> = RuntimeFiber<A, E>

  /**
   * @since 2.0.0
   * @category models
   */
  export interface Variance<out A, out E> {
    readonly [FiberTypeId]: {
      readonly _A: Types.Covariant<A>
      readonly _E: Types.Covariant<E>
    }
  }

  /**
   * @since 2.0.0
   */
  export interface RuntimeVariance<out A, out E> {
    readonly [RuntimeFiberTypeId]: {
      readonly _A: Types.Covariant<A>
      readonly _E: Types.Covariant<E>
    }
  }

  /**
   * @since 2.0.0
   * @category models
   */
  export interface Dump {
    /**
     * The fiber's unique identifier.
     */
    readonly id: FiberId.Runtime
    /**
     * The status of the fiber.
     */
    readonly status: FiberStatus.FiberStatus
  }

  /**
   * A record containing information about a `Fiber`.
   *
   * @since 2.0.0
   * @category models
   */
  export interface Descriptor {
    /**
     * The fiber's unique identifier.
     */
    readonly id: FiberId.FiberId
    /**
     * The status of the fiber.
     */
    readonly status: FiberStatus.FiberStatus
    /**
     * The set of fibers attempting to interrupt the fiber or its ancestors.
     */
    readonly interruptors: HashSet.HashSet<FiberId.FiberId>
  }
}

/**
 * @since 2.0.0
 * @category instances
 */
export const Order: order.Order<RuntimeFiber<unknown, unknown>> = internal.Order

/**
 * Returns `true` if the specified value is a `Fiber`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export const isFiber: (u: unknown) => u is Fiber<unknown, unknown> = internal.isFiber

/**
 * Returns `true` if the specified `Fiber` is a `RuntimeFiber`, `false`
 * otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export const isRuntimeFiber: <A, E>(self: Fiber<A, E>) => self is RuntimeFiber<A, E> = internal.isRuntimeFiber

/**
 * The identity of the fiber.
 *
 * @since 2.0.0
 * @category getters
 */
export const id: <A, E>(self: Fiber<A, E>) => FiberId.FiberId = internal.id

const _await: <A, E>(self: Fiber<A, E>) => Effect.Effect<Exit.Exit<A, E>> = internal._await

export {
  /**
   * Awaits the fiber, which suspends the awaiting fiber until the result of the
   * fiber has been determined.
   *
   * @since 2.0.0
   * @category getters
   */
  _await as await
}

/**
 * Awaits on all fibers to be completed, successfully or not.
 *
 * @since 2.0.0
 * @category destructors
 */
export const awaitAll: <const T extends Iterable<Fiber<any, any>>>(
  fibers: T
) => Effect.Effect<
  [T] extends [ReadonlyArray<infer U>]
    ? number extends T["length"] ? Array<U extends Fiber<infer A, infer E> ? Exit.Exit<A, E> : never>
    : { -readonly [K in keyof T]: T[K] extends Fiber<infer A, infer E> ? Exit.Exit<A, E> : never }
    : Array<T extends Iterable<infer U> ? U extends Fiber<infer A, infer E> ? Exit.Exit<A, E> : never : never>
> = fiberRuntime.fiberAwaitAll

/**
 * Retrieves the immediate children of the fiber.
 *
 * @since 2.0.0
 * @category getters
 */
export const children: <A, E>(self: Fiber<A, E>) => Effect.Effect<Array<RuntimeFiber<any, any>>> = internal.children

/**
 * Collects all fibers into a single fiber producing an in-order list of the
 * results.
 *
 * @since 2.0.0
 * @category constructors
 */
export const all: <A, E>(fibers: Iterable<Fiber<A, E>>) => Fiber<ReadonlyArray<A>, E> = fiberRuntime.fiberAll

/**
 * A fiber that is done with the specified `Exit` value.
 *
 * @since 2.0.0
 * @category constructors
 */
export const done: <A, E>(exit: Exit.Exit<A, E>) => Fiber<A, E> = internal.done

/**
 * @since 2.0.0
 * @category destructors
 */
export const dump: <A, E>(self: RuntimeFiber<A, E>) => Effect.Effect<Fiber.Dump> = internal.dump

/**
 * @since 2.0.0
 * @category destructors
 */
export const dumpAll: (
  fibers: Iterable<RuntimeFiber<unknown, unknown>>
) => Effect.Effect<Array<Fiber.Dump>> = internal.dumpAll

/**
 * A fiber that has already failed with the specified value.
 *
 * @since 2.0.0
 * @category constructors
 */
export const fail: <E>(error: E) => Fiber<never, E> = internal.fail

/**
 * Creates a `Fiber` that has already failed with the specified cause.
 *
 * @since 2.0.0
 * @category constructors
 */
export const failCause: <E>(cause: Cause.Cause<E>) => Fiber<never, E> = internal.failCause

/**
 * Lifts an `Effect` into a `Fiber`.
 *
 * @since 2.0.0
 * @category conversions
 */
export const fromEffect: <A, E>(effect: Effect.Effect<A, E>) => Effect.Effect<Fiber<A, E>> = internal.fromEffect

/**
 * Gets the current fiber if one is running.
 *
 * @since 2.0.0
 * @category utilities
 */
export const getCurrentFiber: () => Option.Option<RuntimeFiber<any, any>> = internal.getCurrentFiber

/**
 * Inherits values from all `FiberRef` instances into current fiber. This
 * will resume immediately.
 *
 * @since 2.0.0
 * @category destructors
 */
export const inheritAll: <A, E>(self: Fiber<A, E>) => Effect.Effect<void> = internal.inheritAll

/**
 * Interrupts the fiber from whichever fiber is calling this method. If the
 * fiber has already exited, the returned effect will resume immediately.
 * Otherwise, the effect will resume when the fiber exits.
 *
 * @since 2.0.0
 * @category interruption
 */
export const interrupt: <A, E>(self: Fiber<A, E>) => Effect.Effect<Exit.Exit<A, E>> = core.interruptFiber

/**
 * Constructrs a `Fiber` that is already interrupted.
 *
 * @since 2.0.0
 * @category constructors
 */
export const interrupted: (fiberId: FiberId.FiberId) => Fiber<never> = internal.interrupted

/**
 * Interrupts the fiber as if interrupted from the specified fiber. If the
 * fiber has already exited, the returned effect will resume immediately.
 * Otherwise, the effect will resume when the fiber exits.
 *
 * @since 2.0.0
 * @category interruption
 */
export const interruptAs: {
  /**
   * Interrupts the fiber as if interrupted from the specified fiber. If the
   * fiber has already exited, the returned effect will resume immediately.
   * Otherwise, the effect will resume when the fiber exits.
   *
   * @since 2.0.0
   * @category interruption
   */
  (fiberId: FiberId.FiberId): <A, E>(self: Fiber<A, E>) => Effect.Effect<Exit.Exit<A, E>>
  /**
   * Interrupts the fiber as if interrupted from the specified fiber. If the
   * fiber has already exited, the returned effect will resume immediately.
   * Otherwise, the effect will resume when the fiber exits.
   *
   * @since 2.0.0
   * @category interruption
   */
  <A, E>(self: Fiber<A, E>, fiberId: FiberId.FiberId): Effect.Effect<Exit.Exit<A, E>>
} = core.interruptAsFiber

/**
 * Interrupts the fiber as if interrupted from the specified fiber. If the
 * fiber has already exited, the returned effect will resume immediately.
 * Otherwise, the effect will resume when the fiber exits.
 *
 * @since 2.0.0
 * @category interruption
 */
export const interruptAsFork: {
  /**
   * Interrupts the fiber as if interrupted from the specified fiber. If the
   * fiber has already exited, the returned effect will resume immediately.
   * Otherwise, the effect will resume when the fiber exits.
   *
   * @since 2.0.0
   * @category interruption
   */
  (fiberId: FiberId.FiberId): <A, E>(self: Fiber<A, E>) => Effect.Effect<void>
  /**
   * Interrupts the fiber as if interrupted from the specified fiber. If the
   * fiber has already exited, the returned effect will resume immediately.
   * Otherwise, the effect will resume when the fiber exits.
   *
   * @since 2.0.0
   * @category interruption
   */
  <A, E>(self: Fiber<A, E>, fiberId: FiberId.FiberId): Effect.Effect<void>
} = internal.interruptAsFork

/**
 * Interrupts all fibers, awaiting their interruption.
 *
 * @since 2.0.0
 * @category interruption
 */
export const interruptAll: (fibers: Iterable<Fiber<any, any>>) => Effect.Effect<void> = internal.interruptAll

/**
 * Interrupts all fibers as by the specified fiber, awaiting their
 * interruption.
 *
 * @since 2.0.0
 * @category interruption
 */
export const interruptAllAs: {
  /**
   * Interrupts all fibers as by the specified fiber, awaiting their
   * interruption.
   *
   * @since 2.0.0
   * @category interruption
   */
  (fiberId: FiberId.FiberId): (fibers: Iterable<Fiber<any, any>>) => Effect.Effect<void>
  /**
   * Interrupts all fibers as by the specified fiber, awaiting their
   * interruption.
   *
   * @since 2.0.0
   * @category interruption
   */
  (fibers: Iterable<Fiber<any, any>>, fiberId: FiberId.FiberId): Effect.Effect<void>
} = internal.interruptAllAs

/**
 * Interrupts the fiber from whichever fiber is calling this method. The
 * interruption will happen in a separate daemon fiber, and the returned
 * effect will always resume immediately without waiting.
 *
 * @since 2.0.0
 * @category interruption
 */
export const interruptFork: <A, E>(self: Fiber<A, E>) => Effect.Effect<void> = fiberRuntime.fiberInterruptFork

/**
 * Joins the fiber, which suspends the joining fiber until the result of the
 * fiber has been determined. Attempting to join a fiber that has erred will
 * result in a catchable error. Joining an interrupted fiber will result in an
 * "inner interruption" of this fiber, unlike interruption triggered by
 * another fiber, "inner interruption" can be caught and recovered.
 *
 * @since 2.0.0
 * @category destructors
 */
export const join: <A, E>(self: Fiber<A, E>) => Effect.Effect<A, E> = internal.join

/**
 * Joins all fibers, awaiting their _successful_ completion. Attempting to
 * join a fiber that has erred will result in a catchable error, _if_ that
 * error does not result from interruption.
 *
 * @since 2.0.0
 * @category destructors
 */
export const joinAll: <A, E>(fibers: Iterable<Fiber<A, E>>) => Effect.Effect<Array<A>, E> = fiberRuntime.fiberJoinAll

/**
 * Maps over the value the Fiber computes.
 *
 * @since 2.0.0
 * @category mapping
 */
export const map: {
  /**
   * Maps over the value the Fiber computes.
   *
   * @since 2.0.0
   * @category mapping
   */
  <A, B>(f: (a: A) => B): <E>(self: Fiber<A, E>) => Fiber<B, E>
  /**
   * Maps over the value the Fiber computes.
   *
   * @since 2.0.0
   * @category mapping
   */
  <A, E, B>(self: Fiber<A, E>, f: (a: A) => B): Fiber<B, E>
} = internal.map

/**
 * Effectually maps over the value the fiber computes.
 *
 * @since 2.0.0
 * @category mapping
 */
export const mapEffect: {
  /**
   * Effectually maps over the value the fiber computes.
   *
   * @since 2.0.0
   * @category mapping
   */
  <A, A2, E2>(f: (a: A) => Effect.Effect<A2, E2>): <E>(self: Fiber<A, E>) => Fiber<A2, E2 | E>
  /**
   * Effectually maps over the value the fiber computes.
   *
   * @since 2.0.0
   * @category mapping
   */
  <A, E, A2, E2>(self: Fiber<A, E>, f: (a: A) => Effect.Effect<A2, E2>): Fiber<A2, E | E2>
} = internal.mapEffect

/**
 * Passes the success of this fiber to the specified callback, and continues
 * with the fiber that it returns.
 *
 * @since 2.0.0
 * @category mapping
 */
export const mapFiber: {
  /**
   * Passes the success of this fiber to the specified callback, and continues
   * with the fiber that it returns.
   *
   * @since 2.0.0
   * @category mapping
   */
  <E, E2, A, B>(f: (a: A) => Fiber<B, E2>): (self: Fiber<A, E>) => Effect.Effect<Fiber<B, E | E2>>
  /**
   * Passes the success of this fiber to the specified callback, and continues
   * with the fiber that it returns.
   *
   * @since 2.0.0
   * @category mapping
   */
  <A, E, E2, B>(self: Fiber<A, E>, f: (a: A) => Fiber<B, E2>): Effect.Effect<Fiber<B, E | E2>>
} = internal.mapFiber

/**
 * Folds over the `Fiber` or `RuntimeFiber`.
 *
 * @since 2.0.0
 * @category folding
 */
export const match: {
  /**
   * Folds over the `Fiber` or `RuntimeFiber`.
   *
   * @since 2.0.0
   * @category folding
   */
  <A, E, Z>(
   options: {
     readonly onFiber: (fiber: Fiber<A, E>) => Z
     readonly onRuntimeFiber: (fiber: RuntimeFiber<A, E>) => Z
   }
  ): (self: Fiber<A, E>) => Z
  /**
   * Folds over the `Fiber` or `RuntimeFiber`.
   *
   * @since 2.0.0
   * @category folding
   */
  <A, E, Z>(
   self: Fiber<A, E>,
   options: {
     readonly onFiber: (fiber: Fiber<A, E>) => Z
     readonly onRuntimeFiber: (fiber: RuntimeFiber<A, E>) => Z
   }
  ): Z
} = internal.match

/**
 * A fiber that never fails or succeeds.
 *
 * @since 2.0.0
 * @category constructors
 */
export const never: Fiber<never> = internal.never

/**
 * Returns a fiber that prefers `this` fiber, but falls back to the `that` one
 * when `this` one fails. Interrupting the returned fiber will interrupt both
 * fibers, sequentially, from left to right.
 *
 * @since 2.0.0
 * @category alternatives
 */
export const orElse: {
  /**
   * Returns a fiber that prefers `this` fiber, but falls back to the `that` one
   * when `this` one fails. Interrupting the returned fiber will interrupt both
   * fibers, sequentially, from left to right.
   *
   * @since 2.0.0
   * @category alternatives
   */
  <A2, E2>(that: Fiber<A2, E2>): <A, E>(self: Fiber<A, E>) => Fiber<A2 | A, E2 | E>
  /**
   * Returns a fiber that prefers `this` fiber, but falls back to the `that` one
   * when `this` one fails. Interrupting the returned fiber will interrupt both
   * fibers, sequentially, from left to right.
   *
   * @since 2.0.0
   * @category alternatives
   */
  <A, E, A2, E2>(self: Fiber<A, E>, that: Fiber<A2, E2>): Fiber<A | A2, E | E2>
} = internal.orElse

/**
 * Returns a fiber that prefers `this` fiber, but falls back to the `that` one
 * when `this` one fails. Interrupting the returned fiber will interrupt both
 * fibers, sequentially, from left to right.
 *
 * @since 2.0.0
 * @category alternatives
 */
export const orElseEither: {
  /**
   * Returns a fiber that prefers `this` fiber, but falls back to the `that` one
   * when `this` one fails. Interrupting the returned fiber will interrupt both
   * fibers, sequentially, from left to right.
   *
   * @since 2.0.0
   * @category alternatives
   */
  <A2, E2>(that: Fiber<A2, E2>): <A, E>(self: Fiber<A, E>) => Fiber<Either.Either<A2, A>, E2 | E>
  /**
   * Returns a fiber that prefers `this` fiber, but falls back to the `that` one
   * when `this` one fails. Interrupting the returned fiber will interrupt both
   * fibers, sequentially, from left to right.
   *
   * @since 2.0.0
   * @category alternatives
   */
  <A, E, A2, E2>(self: Fiber<A, E>, that: Fiber<A2, E2>): Fiber<Either.Either<A2, A>, E | E2>
} = internal.orElseEither

/**
 * Tentatively observes the fiber, but returns immediately if it is not
 * already done.
 *
 * @since 2.0.0
 * @category getters
 */
export const poll: <A, E>(self: Fiber<A, E>) => Effect.Effect<Option.Option<Exit.Exit<A, E>>> = internal.poll

/**
 * Pretty-prints a `RuntimeFiber`.
 *
 * @since 2.0.0
 * @category destructors
 */
export const pretty: <A, E>(self: RuntimeFiber<A, E>) => Effect.Effect<string> = internal.pretty

/**
 * Returns a chunk containing all root fibers.
 *
 * @since 2.0.0
 * @category constructors
 */
export const roots: Effect.Effect<Array<RuntimeFiber<any, any>>> = internal.roots

/**
 * Returns a chunk containing all root fibers.
 *
 * @since 2.0.0
 * @category constructors
 */
export const unsafeRoots: (_: void) => Array<RuntimeFiber<any, any>> = internal.unsafeRoots

/**
 * Converts this fiber into a scoped effect. The fiber is interrupted when the
 * scope is closed.
 *
 * @since 2.0.0
 * @category destructors
 */
export const scoped: <A, E>(self: Fiber<A, E>) => Effect.Effect<Fiber<A, E>, never, Scope.Scope> =
  fiberRuntime.fiberScoped

/**
 * Returns the `FiberStatus` of a `RuntimeFiber`.
 *
 * @since 2.0.0
 * @category getters
 */
export const status: <A, E>(self: RuntimeFiber<A, E>) => Effect.Effect<FiberStatus.FiberStatus> = internal.status

/**
 * Returns a fiber that has already succeeded with the specified value.
 *
 * @since 2.0.0
 * @category constructors
 */
export const succeed: <A>(value: A) => Fiber<A> = internal.succeed

const void_: Fiber<void> = internal.void
export {
  /**
   * A fiber that has already succeeded with unit.
   *
   * @since 2.0.0
   * @category constructors
   */
  void_ as void
}

/**
 * Zips this fiber and the specified fiber together, producing a tuple of
 * their output.
 *
 * @since 2.0.0
 * @category zipping
 */
export const zip: {
  /**
   * Zips this fiber and the specified fiber together, producing a tuple of
   * their output.
   *
   * @since 2.0.0
   * @category zipping
   */
  <A2, E2>(that: Fiber<A2, E2>): <A, E>(self: Fiber<A, E>) => Fiber<[A, A2], E2 | E>
  /**
   * Zips this fiber and the specified fiber together, producing a tuple of
   * their output.
   *
   * @since 2.0.0
   * @category zipping
   */
  <A, E, A2, E2>(self: Fiber<A, E>, that: Fiber<A2, E2>): Fiber<[A, A2], E | E2>
} = circular.zipFiber

/**
 * Same as `zip` but discards the output of that `Fiber`.
 *
 * @since 2.0.0
 * @category zipping
 */
export const zipLeft: {
  /**
   * Same as `zip` but discards the output of that `Fiber`.
   *
   * @since 2.0.0
   * @category zipping
   */
  <A2, E2>(that: Fiber<A2, E2>): <A, E>(self: Fiber<A, E>) => Fiber<A, E2 | E>
  /**
   * Same as `zip` but discards the output of that `Fiber`.
   *
   * @since 2.0.0
   * @category zipping
   */
  <A, E, A2, E2>(self: Fiber<A, E>, that: Fiber<A2, E2>): Fiber<A, E | E2>
} = circular.zipLeftFiber

/**
 * Same as `zip` but discards the output of this `Fiber`.
 *
 * @since 2.0.0
 * @category zipping
 */
export const zipRight: {
  /**
   * Same as `zip` but discards the output of this `Fiber`.
   *
   * @since 2.0.0
   * @category zipping
   */
  <A2, E2>(that: Fiber<A2, E2>): <A, E>(self: Fiber<A, E>) => Fiber<A2, E2 | E>
  /**
   * Same as `zip` but discards the output of this `Fiber`.
   *
   * @since 2.0.0
   * @category zipping
   */
  <A, E, A2, E2>(self: Fiber<A, E>, that: Fiber<A2, E2>): Fiber<A2, E | E2>
} = circular.zipRightFiber

/**
 * Zips this fiber with the specified fiber, combining their results using the
 * specified combiner function. Both joins and interruptions are performed in
 * sequential order from left to right.
 *
 * @since 2.0.0
 * @category zipping
 */
export const zipWith: {
  /**
   * Zips this fiber with the specified fiber, combining their results using the
   * specified combiner function. Both joins and interruptions are performed in
   * sequential order from left to right.
   *
   * @since 2.0.0
   * @category zipping
   */
  <B, E2, A, C>(that: Fiber<B, E2>, f: (a: A, b: B) => C): <E>(self: Fiber<A, E>) => Fiber<C, E2 | E>
  /**
   * Zips this fiber with the specified fiber, combining their results using the
   * specified combiner function. Both joins and interruptions are performed in
   * sequential order from left to right.
   *
   * @since 2.0.0
   * @category zipping
   */
  <A, E, B, E2, C>(self: Fiber<A, E>, that: Fiber<B, E2>, f: (a: A, b: B) => C): Fiber<C, E | E2>
} = circular.zipWithFiber
