/**
 * @since 2.0.0
 */
import type { NoSuchElementException } from "./Cause.js"
import * as Cause from "./Cause.js"
import * as Deferred from "./Deferred.js"
import * as Effect from "./Effect.js"
import * as Exit from "./Exit.js"
import * as Fiber from "./Fiber.js"
import * as FiberId from "./FiberId.js"
import { constFalse, dual } from "./Function.js"
import * as HashSet from "./HashSet.js"
import * as Inspectable from "./Inspectable.js"
import * as Option from "./Option.js"
import { type Pipeable, pipeArguments } from "./Pipeable.js"
import * as Predicate from "./Predicate.js"
import * as Runtime from "./Runtime.js"
import type * as Scope from "./Scope.js"

/**
 * @since 2.0.0
 * @categories type ids
 */
export const TypeId: unique symbol = Symbol.for("effect/FiberHandle")

/**
 * @since 2.0.0
 * @categories type ids
 */
export type TypeId = typeof TypeId

/**
 * @since 2.0.0
 * @categories models
 */
export interface FiberHandle<out A = unknown, out E = unknown> extends Pipeable, Inspectable.Inspectable {
  readonly [TypeId]: TypeId
  readonly deferred: Deferred.Deferred<void, unknown>
  /** @internal */
  state: {
    readonly _tag: "Open"
    fiber: Fiber.RuntimeFiber<A, E> | undefined
  } | {
    readonly _tag: "Closed"
  }
}

/**
 * @since 2.0.0
 * @categories refinements
 */
export const isFiberHandle = (u: unknown): u is FiberHandle => Predicate.hasProperty(u, TypeId)

const Proto = {
  [TypeId]: TypeId,
  toString(this: FiberHandle) {
    return Inspectable.format(this.toJSON())
  },
  toJSON(this: FiberHandle) {
    return {
      _id: "FiberHandle",
      state: this.state
    }
  },
  [Inspectable.NodeInspectSymbol](this: FiberHandle) {
    return this.toJSON()
  },
  pipe() {
    return pipeArguments(this, arguments)
  }
}

const unsafeMake = <A = unknown, E = unknown>(
  deferred: Deferred.Deferred<void, E>
): FiberHandle<A, E> => {
  const self = Object.create(Proto)
  self.state = { _tag: "Open", fiber: undefined }
  self.deferred = deferred
  return self
}

/**
 * A FiberHandle can be used to store a single fiber.
 * When the associated Scope is closed, the contained fiber will be interrupted.
 *
 * You can add a fiber to the handle using `FiberHandle.run`, and the fiber will
 * be automatically removed from the FiberHandle when it completes.
 *
 * @example
 * ```ts
 * import { Effect, FiberHandle } from "effect"
 *
 * Effect.gen(function*() {
 *   const handle = yield* FiberHandle.make()
 *
 *   // run some effects
 *   yield* FiberHandle.run(handle, Effect.never)
 *   // this will interrupt the previous fiber
 *   yield* FiberHandle.run(handle, Effect.never)
 *
 *   yield* Effect.sleep(1000)
 * }).pipe(
 *   Effect.scoped // The fiber will be interrupted when the scope is closed
 * )
 * ```
 *
 * @since 2.0.0
 * @categories constructors
 */
export const make = <A = unknown, E = unknown>(): Effect.Effect<FiberHandle<A, E>, never, Scope.Scope> =>
  Effect.acquireRelease(
    Effect.map(Deferred.make<void, E>(), (deferred) => unsafeMake<A, E>(deferred)),
    (handle) =>
      Effect.withFiberRuntime((parent) => {
        const state = handle.state
        if (state._tag === "Closed") return Effect.void
        handle.state = { _tag: "Closed" }
        return state.fiber ?
          Effect.intoDeferred(
            Effect.asVoid(Fiber.interruptAs(state.fiber, FiberId.combine(parent.id(), internalFiberId))),
            handle.deferred
          ) :
          Deferred.done(handle.deferred, Exit.void)
      })
  )

/**
 * Create an Effect run function that is backed by a FiberHandle.
 *
 * @since 2.0.0
 * @categories constructors
 */
export const makeRuntime = <R, E = unknown, A = unknown>(): Effect.Effect<
  <XE extends E, XA extends A>(
    effect: Effect.Effect<XA, XE, R>,
    options?:
      | Runtime.RunForkOptions & {
        readonly onlyIfMissing?: boolean | undefined
      }
      | undefined
  ) => Fiber.RuntimeFiber<XA, XE>,
  never,
  Scope.Scope | R
> =>
  Effect.flatMap(
    make<A, E>(),
    (self) => runtime(self)<R>()
  )

/**
 * Create an Effect run function that is backed by a FiberHandle.
 *
 * @since 3.13.0
 * @categories constructors
 */
export const makeRuntimePromise = <R = never, A = unknown, E = unknown>(): Effect.Effect<
  <XE extends E, XA extends A>(
    effect: Effect.Effect<XA, XE, R>,
    options?: Runtime.RunForkOptions | undefined
  ) => Promise<XA>,
  never,
  Scope.Scope | R
> =>
  Effect.flatMap(
    make<A, E>(),
    (self) => runtimePromise(self)<R>()
  )

const internalFiberIdId = -1
const internalFiberId = FiberId.make(internalFiberIdId, 0)
const isInternalInterruption = Cause.reduceWithContext(undefined, {
  emptyCase: constFalse,
  failCase: constFalse,
  dieCase: constFalse,
  interruptCase: (_, fiberId) => HashSet.has(FiberId.ids(fiberId), internalFiberIdId),
  sequentialCase: (_, left, right) => left || right,
  parallelCase: (_, left, right) => left || right
})

/**
 * Set the fiber in a FiberHandle. When the fiber completes, it will be removed from the FiberHandle.
 * If a fiber is already running, it will be interrupted unless `options.onlyIfMissing` is set.
 *
 * @since 2.0.0
 * @categories combinators
 */
export const unsafeSet: {
  /**
   * Set the fiber in a FiberHandle. When the fiber completes, it will be removed from the FiberHandle.
   * If a fiber is already running, it will be interrupted unless `options.onlyIfMissing` is set.
   *
   * @since 2.0.0
   * @categories combinators
   */
  <A, E, XE extends E, XA extends A>(
    fiber: Fiber.RuntimeFiber<XA, XE>,
    options?: {
      readonly interruptAs?: FiberId.FiberId | undefined
      readonly onlyIfMissing?: boolean | undefined
      readonly propagateInterruption?: boolean | undefined
    }
  ): (self: FiberHandle<A, E>) => void
  /**
   * Set the fiber in a FiberHandle. When the fiber completes, it will be removed from the FiberHandle.
   * If a fiber is already running, it will be interrupted unless `options.onlyIfMissing` is set.
   *
   * @since 2.0.0
   * @categories combinators
   */
  <A, E, XE extends E, XA extends A>(
    self: FiberHandle<A, E>,
    fiber: Fiber.RuntimeFiber<XA, XE>,
    options?: {
      readonly interruptAs?: FiberId.FiberId | undefined
      readonly onlyIfMissing?: boolean | undefined
      readonly propagateInterruption?: boolean | undefined
    }
  ): void
} = dual((args) => isFiberHandle(args[0]), <A, E, XE extends E, XA extends A>(
  self: FiberHandle<A, E>,
  fiber: Fiber.RuntimeFiber<XA, XE>,
  options?: {
    readonly interruptAs?: FiberId.FiberId | undefined
    readonly onlyIfMissing?: boolean | undefined
    readonly propagateInterruption?: boolean | undefined
  }
): void => {
  if (self.state._tag === "Closed") {
    fiber.unsafeInterruptAsFork(FiberId.combine(options?.interruptAs ?? FiberId.none, internalFiberId))
    return
  } else if (self.state.fiber !== undefined) {
    if (options?.onlyIfMissing === true) {
      fiber.unsafeInterruptAsFork(FiberId.combine(options?.interruptAs ?? FiberId.none, internalFiberId))
      return
    } else if (self.state.fiber === fiber) {
      return
    }
    self.state.fiber.unsafeInterruptAsFork(FiberId.combine(options?.interruptAs ?? FiberId.none, internalFiberId))
    self.state.fiber = undefined
  }

  self.state.fiber = fiber
  fiber.addObserver((exit) => {
    if (self.state._tag === "Open" && fiber === self.state.fiber) {
      self.state.fiber = undefined
    }
    if (
      Exit.isFailure(exit) &&
      (
        options?.propagateInterruption === true ?
          !isInternalInterruption(exit.cause) :
          !Cause.isInterruptedOnly(exit.cause)
      )
    ) {
      Deferred.unsafeDone(self.deferred, exit as any)
    }
  })
})

/**
 * Set the fiber in the FiberHandle. When the fiber completes, it will be removed from the FiberHandle.
 * If a fiber already exists in the FiberHandle, it will be interrupted unless `options.onlyIfMissing` is set.
 *
 * @since 2.0.0
 * @categories combinators
 */
export const set: {
  /**
   * Set the fiber in the FiberHandle. When the fiber completes, it will be removed from the FiberHandle.
   * If a fiber already exists in the FiberHandle, it will be interrupted unless `options.onlyIfMissing` is set.
   *
   * @since 2.0.0
   * @categories combinators
   */
  <A, E, XE extends E, XA extends A>(
    fiber: Fiber.RuntimeFiber<XA, XE>,
    options?: {
      readonly onlyIfMissing?: boolean
      readonly propagateInterruption?: boolean | undefined
    }
  ): (self: FiberHandle<A, E>) => Effect.Effect<void>
  /**
   * Set the fiber in the FiberHandle. When the fiber completes, it will be removed from the FiberHandle.
   * If a fiber already exists in the FiberHandle, it will be interrupted unless `options.onlyIfMissing` is set.
   *
   * @since 2.0.0
   * @categories combinators
   */
  <A, E, XE extends E, XA extends A>(
    self: FiberHandle<A, E>,
    fiber: Fiber.RuntimeFiber<XA, XE>,
    options?: {
      readonly onlyIfMissing?: boolean
      readonly propagateInterruption?: boolean | undefined
    }
  ): Effect.Effect<void>
} = dual((args) => isFiberHandle(args[0]), <A, E, XE extends E, XA extends A>(
  self: FiberHandle<A, E>,
  fiber: Fiber.RuntimeFiber<XA, XE>,
  options?: {
    readonly onlyIfMissing?: boolean
    readonly propagateInterruption?: boolean | undefined
  }
): Effect.Effect<void> =>
  Effect.fiberIdWith(
    (fiberId) =>
      Effect.sync(() =>
        unsafeSet(self, fiber, {
          interruptAs: fiberId,
          onlyIfMissing: options?.onlyIfMissing,
          propagateInterruption: options?.propagateInterruption
        })
      )
  ))

/**
 * Retrieve the fiber from the FiberHandle.
 *
 * @since 2.0.0
 * @categories combinators
 */
export const unsafeGet = <A, E>(self: FiberHandle<A, E>): Option.Option<Fiber.RuntimeFiber<A, E>> =>
  self.state._tag === "Closed" ? Option.none() : Option.fromNullable(self.state.fiber)

/**
 * Retrieve the fiber from the FiberHandle.
 *
 * @since 2.0.0
 * @categories combinators
 */
export const get = <A, E>(self: FiberHandle<A, E>): Effect.Effect<Fiber.RuntimeFiber<A, E>, NoSuchElementException> =>
  Effect.suspend(() => unsafeGet(self))

/**
 * @since 2.0.0
 * @categories combinators
 */
export const clear = <A, E>(self: FiberHandle<A, E>): Effect.Effect<void> =>
  Effect.uninterruptibleMask((restore) =>
    Effect.withFiberRuntime((fiber) => {
      if (self.state._tag === "Closed" || self.state.fiber === undefined) {
        return Effect.void
      }
      return Effect.zipRight(
        restore(Fiber.interruptAs(self.state.fiber, FiberId.combine(fiber.id(), internalFiberId))),
        Effect.sync(() => {
          if (self.state._tag === "Open") {
            self.state.fiber = undefined
          }
        })
      )
    })
  )

const constInterruptedFiber = (function() {
  let fiber: Fiber.RuntimeFiber<never, never> | undefined = undefined
  return () => {
    if (fiber === undefined) {
      fiber = Effect.runFork(Effect.interrupt)
    }
    return fiber
  }
})()

/**
 * Run an Effect and add the forked fiber to the FiberHandle.
 * When the fiber completes, it will be removed from the FiberHandle.
 *
 * @since 2.0.0
 * @categories combinators
 */
export const run: {
  /**
   * Run an Effect and add the forked fiber to the FiberHandle.
   * When the fiber completes, it will be removed from the FiberHandle.
   *
   * @since 2.0.0
   * @categories combinators
   */
  <A, E>(
    self: FiberHandle<A, E>,
    options?: {
      readonly onlyIfMissing?: boolean
      readonly propagateInterruption?: boolean | undefined
    }
  ): <R, XE extends E, XA extends A>(
    effect: Effect.Effect<XA, XE, R>
  ) => Effect.Effect<Fiber.RuntimeFiber<XA, XE>, never, R>
  /**
   * Run an Effect and add the forked fiber to the FiberHandle.
   * When the fiber completes, it will be removed from the FiberHandle.
   *
   * @since 2.0.0
   * @categories combinators
   */
  <A, E, R, XE extends E, XA extends A>(
    self: FiberHandle<A, E>,
    effect: Effect.Effect<XA, XE, R>,
    options?: {
      readonly onlyIfMissing?: boolean
      readonly propagateInterruption?: boolean | undefined
    }
  ): Effect.Effect<Fiber.RuntimeFiber<XA, XE>, never, R>
} = function() {
  const self = arguments[0] as FiberHandle
  if (Effect.isEffect(arguments[1])) {
    return runImpl(self, arguments[1], arguments[2]) as any
  }
  const options = arguments[1]
  return (effect: Effect.Effect<unknown, unknown, any>) => runImpl(self, effect, options)
}

const runImpl = <A, E, R, XE extends E, XA extends A>(
  self: FiberHandle<A, E>,
  effect: Effect.Effect<XA, XE, R>,
  options?: {
    readonly onlyIfMissing?: boolean
    readonly propagateInterruption?: boolean | undefined
  }
): Effect.Effect<Fiber.RuntimeFiber<XA, XE>, never, R> =>
  Effect.withFiberRuntime((parent) => {
    if (self.state._tag === "Closed") {
      return Effect.interrupt
    } else if (self.state.fiber !== undefined && options?.onlyIfMissing === true) {
      return Effect.sync(constInterruptedFiber)
    }
    const runtime = Runtime.make<R>({
      context: parent.currentContext as any,
      fiberRefs: parent.getFiberRefs(),
      runtimeFlags: Runtime.defaultRuntime.runtimeFlags
    })
    const fiber = Runtime.runFork(runtime)(effect)
    unsafeSet(self, fiber, { ...options, interruptAs: parent.id() })
    return Effect.succeed(fiber)
  })

/**
 * Capture a Runtime and use it to fork Effect's, adding the forked fibers to the FiberHandle.
 *
 * @example
 * ```ts
 * import { Context, Effect, FiberHandle } from "effect"
 *
 * interface Users {
 *   readonly _: unique symbol
 * }
 * const Users = Context.GenericTag<Users, {
 *    getAll: Effect.Effect<Array<unknown>>
 * }>("Users")
 *
 * Effect.gen(function*() {
 *   const handle = yield* FiberHandle.make()
 *   const run = yield* FiberHandle.runtime(handle)<Users>()
 *
 *   // run an effect and set the fiber in the handle
 *   run(Effect.andThen(Users, _ => _.getAll))
 *
 *   // this will interrupt the previous fiber
 *   run(Effect.andThen(Users, _ => _.getAll))
 * }).pipe(
 *   Effect.scoped // The fiber will be interrupted when the scope is closed
 * )
 * ```
 *
 * @since 2.0.0
 * @categories combinators
 */
export const runtime: <A, E>(
  self: FiberHandle<A, E>
) => <R = never>() => Effect.Effect<
  <XE extends E, XA extends A>(
    effect: Effect.Effect<XA, XE, R>,
    options?:
      | Runtime.RunForkOptions & {
        readonly onlyIfMissing?: boolean | undefined
        readonly propagateInterruption?: boolean | undefined
      }
      | undefined
  ) => Fiber.RuntimeFiber<XA, XE>,
  never,
  R
> = <A, E>(self: FiberHandle<A, E>) => <R>() =>
  Effect.map(
    Effect.runtime<R>(),
    (runtime) => {
      const runFork = Runtime.runFork(runtime)
      return <XE extends E, XA extends A>(
        effect: Effect.Effect<XA, XE, R>,
        options?:
          | Runtime.RunForkOptions & {
            readonly onlyIfMissing?: boolean | undefined
            readonly propagateInterruption?: boolean | undefined
          }
          | undefined
      ) => {
        if (self.state._tag === "Closed") {
          return constInterruptedFiber()
        } else if (self.state.fiber !== undefined && options?.onlyIfMissing === true) {
          return constInterruptedFiber()
        }
        const fiber = runFork(effect, options)
        unsafeSet(self, fiber, options)
        return fiber
      }
    }
  )

/**
 * Capture a Runtime and use it to fork Effect's, adding the forked fibers to the FiberHandle.
 *
 * The returned run function will return Promise's that will resolve when the
 * fiber completes.
 *
 * @since 3.13.0
 * @categories combinators
 */
export const runtimePromise = <A, E>(self: FiberHandle<A, E>): <R = never>() => Effect.Effect<
  <XE extends E, XA extends A>(
    effect: Effect.Effect<XA, XE, R>,
    options?:
      | Runtime.RunForkOptions & { readonly propagateInterruption?: boolean | undefined }
      | undefined
  ) => Promise<XA>,
  never,
  R
> =>
<R>() =>
  Effect.map(
    runtime(self)<R>(),
    (runFork) =>
    <XE extends E, XA extends A>(
      effect: Effect.Effect<XA, XE, R>,
      options?:
        | Runtime.RunForkOptions & { readonly propagateInterruption?: boolean | undefined }
        | undefined
    ): Promise<XA> =>
      new Promise((resolve, reject) =>
        runFork(effect, options).addObserver((exit) => {
          if (Exit.isSuccess(exit)) {
            resolve(exit.value)
          } else {
            reject(Cause.squash(exit.cause))
          }
        })
      )
  )

/**
 * If any of the Fiber's in the handle terminate with a failure,
 * the returned Effect will terminate with the first failure that occurred.
 *
 * @since 2.0.0
 * @categories combinators
 * @example
 * ```ts
 * import { Effect, FiberHandle } from "effect";
 *
 * Effect.gen(function* (_) {
 *   const handle = yield* _(FiberHandle.make());
 *   yield* _(FiberHandle.set(handle, Effect.runFork(Effect.fail("error"))));
 *
 *   // parent fiber will fail with "error"
 *   yield* _(FiberHandle.join(handle));
 * });
 * ```
 */
export const join = <A, E>(self: FiberHandle<A, E>): Effect.Effect<void, E> =>
  Deferred.await(self.deferred as Deferred.Deferred<void, E>)

/**
 * Wait for the fiber in the FiberHandle to complete.
 *
 * @since 3.13.0
 * @categories combinators
 */
export const awaitEmpty = <A, E>(self: FiberHandle<A, E>): Effect.Effect<void, E> =>
  Effect.suspend(() => {
    if (self.state._tag === "Closed" || self.state.fiber === undefined) {
      return Effect.void
    }
    return Fiber.await(self.state.fiber)
  })
