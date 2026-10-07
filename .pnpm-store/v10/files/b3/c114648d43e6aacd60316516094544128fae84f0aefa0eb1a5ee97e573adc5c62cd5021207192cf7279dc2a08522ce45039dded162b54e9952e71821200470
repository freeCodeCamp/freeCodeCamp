/**
 * A `Supervisor<T>` is allowed to supervise the launching and termination of
 * fibers, producing some visible value of type `T` from the supervision.
 *
 * @since 2.0.0
 */
import type * as Context from "./Context.js"
import type * as Effect from "./Effect.js"
import type * as Exit from "./Exit.js"
import type * as Fiber from "./Fiber.js"
import * as core from "./internal/core.js"
import * as circular from "./internal/layer/circular.js"
import * as internal from "./internal/supervisor.js"
import type * as Layer from "./Layer.js"
import type * as MutableRef from "./MutableRef.js"
import type * as Option from "./Option.js"
import type * as SortedSet from "./SortedSet.js"
import type * as Types from "./Types.js"

/**
 * @since 2.0.0
 * @category symbols
 */
export const SupervisorTypeId: unique symbol = internal.SupervisorTypeId

/**
 * @since 2.0.0
 * @category symbols
 */
export type SupervisorTypeId = typeof SupervisorTypeId

/**
 * @since 2.0.0
 * @category models
 */
export interface Supervisor<out T> extends Supervisor.Variance<T> {
  /**
   * Returns an `Effect` that succeeds with the value produced by this
   * supervisor. This value may change over time, reflecting what the supervisor
   * produces as it supervises fibers.
   */
  readonly value: Effect.Effect<T>

  /**
   * Supervises the start of a `Fiber`.
   */
  onStart<A, E, R>(
    context: Context.Context<R>,
    effect: Effect.Effect<A, E, R>,
    parent: Option.Option<Fiber.RuntimeFiber<any, any>>,
    fiber: Fiber.RuntimeFiber<A, E>
  ): void

  /**
   * Supervises the end of a `Fiber`.
   */
  onEnd<A, E>(value: Exit.Exit<A, E>, fiber: Fiber.RuntimeFiber<A, E>): void

  /**
   * Supervises the execution of an `Effect` by a `Fiber`.
   */
  onEffect<A, E>(fiber: Fiber.RuntimeFiber<A, E>, effect: Effect.Effect<any, any, any>): void

  /**
   * Supervises the suspension of a computation running within a `Fiber`.
   */
  onSuspend<A, E>(fiber: Fiber.RuntimeFiber<A, E>): void

  /**
   * Supervises the resumption of a computation running within a `Fiber`.
   */
  onResume<A, E>(fiber: Fiber.RuntimeFiber<A, E>): void

  /**
   * Maps this supervisor to another one, which has the same effect, but whose
   * value has been transformed by the specified function.
   */
  map<B>(f: (a: T) => B): Supervisor<B>

  /**
   * Returns a new supervisor that performs the function of this supervisor, and
   * the function of the specified supervisor, producing a tuple of the outputs
   * produced by both supervisors.
   */
  zip<A>(right: Supervisor<A>): Supervisor<[T, A]>
}

/**
 * @since 2.0.0
 */
export declare namespace Supervisor {
  /**
   * @since 2.0.0
   * @category models
   */
  export interface Variance<out T> {
    readonly [SupervisorTypeId]: {
      readonly _T: Types.Covariant<T>
    }
  }
}

/**
 * @since 2.0.0
 * @category context
 */
export const addSupervisor: <A>(supervisor: Supervisor<A>) => Layer.Layer<never> = circular.addSupervisor

/**
 * Creates a new supervisor that tracks children in a set.
 *
 * @since 2.0.0
 * @category constructors
 */
export const fibersIn: (
  ref: MutableRef.MutableRef<SortedSet.SortedSet<Fiber.RuntimeFiber<any, any>>>
) => Effect.Effect<Supervisor<SortedSet.SortedSet<Fiber.RuntimeFiber<any, any>>>> = internal.fibersIn

/**
 * Creates a new supervisor that constantly yields effect when polled
 *
 * @since 2.0.0
 * @category constructors
 */
export const fromEffect: <A>(effect: Effect.Effect<A>) => Supervisor<A> = internal.fromEffect

/**
 * A supervisor that doesn't do anything in response to supervision events.
 *
 * @since 2.0.0
 * @category constructors
 */
export const none: Supervisor<void> = internal.none

/**
 * Creates a new supervisor that tracks children in a set.
 *
 * @since 2.0.0
 * @category constructors
 */
export const track: Effect.Effect<Supervisor<Array<Fiber.RuntimeFiber<any, any>>>> = internal.track

/**
 * Unsafely creates a new supervisor that tracks children in a set.
 *
 * @since 2.0.0
 * @category unsafe
 */
export const unsafeTrack: () => Supervisor<Array<Fiber.RuntimeFiber<any, any>>> = internal.unsafeTrack

/**
 * @since 2.0.0
 * @category constructors
 */
export abstract class AbstractSupervisor<T> implements Supervisor<T> {
  /**
   * @since 2.0.0
   */
  abstract value: Effect.Effect<T>

  /**
   * @since 2.0.0
   */
  onStart<A, E, R>(
    _context: Context.Context<R>,
    _effect: Effect.Effect<A, E, R>,
    _parent: Option.Option<Fiber.RuntimeFiber<any, any>>,
    _fiber: Fiber.RuntimeFiber<A, E>
  ): void {
    //
  }

  /**
   * @since 2.0.0
   */
  onEnd<A, E>(
    _value: Exit.Exit<A, E>,
    _fiber: Fiber.RuntimeFiber<A, E>
  ): void {
    //
  }

  /**
   * @since 2.0.0
   */
  onEffect<A, E>(
    _fiber: Fiber.RuntimeFiber<A, E>,
    _effect: Effect.Effect<any, any, any>
  ): void {
    //
  }

  /**
   * @since 2.0.0
   */
  onSuspend<A, E>(
    _fiber: Fiber.RuntimeFiber<A, E>
  ): void {
    //
  }

  /**
   * @since 2.0.0
   */
  onResume<A, E>(
    _fiber: Fiber.RuntimeFiber<A, E>
  ): void {
    //
  }

  /**
   * @since 2.0.0
   */
  map<B>(f: (a: T) => B): Supervisor<B> {
    return new internal.ProxySupervisor(this, core.map(this.value, f))
  }

  /**
   * @since 2.0.0
   */
  zip<A>(
    right: Supervisor<A>
  ): Supervisor<[T, A]> {
    return new internal.Zip(this, right)
  }

  /**
   * @since 2.0.0
   */
  onRun<E, A, X>(execution: () => X, _fiber: Fiber.RuntimeFiber<A, E>): X {
    return execution()
  }

  /**
   * @since 2.0.0
   */
  readonly [SupervisorTypeId]: {
    _T: (_: never) => never
  } = internal.supervisorVariance
}
