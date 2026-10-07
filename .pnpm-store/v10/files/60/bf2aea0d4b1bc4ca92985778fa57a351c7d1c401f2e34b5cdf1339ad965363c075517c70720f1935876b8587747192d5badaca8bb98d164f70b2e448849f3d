/**
 * @since 2.0.0
 */
import * as Cause from "./Cause.js"
import * as Deferred from "./Deferred.js"
import * as Effect from "./Effect.js"
import * as Exit from "./Exit.js"
import * as Fiber from "./Fiber.js"
import * as FiberId from "./FiberId.js"
import { constFalse, constVoid, dual } from "./Function.js"
import * as HashSet from "./HashSet.js"
import * as Inspectable from "./Inspectable.js"
import * as Iterable from "./Iterable.js"
import { type Pipeable, pipeArguments } from "./Pipeable.js"
import * as Predicate from "./Predicate.js"
import * as Runtime from "./Runtime.js"
import type * as Scope from "./Scope.js"

/**
 * @since 2.0.0
 * @categories type ids
 */
export const TypeId: unique symbol = Symbol.for("effect/FiberSet")

/**
 * @since 2.0.0
 * @categories type ids
 */
export type TypeId = typeof TypeId

/**
 * @since 2.0.0
 * @categories models
 */
export interface FiberSet<out A = unknown, out E = unknown>
  extends Pipeable, Inspectable.Inspectable, Iterable<Fiber.RuntimeFiber<A, E>>
{
  readonly [TypeId]: TypeId
  readonly deferred: Deferred.Deferred<void, unknown>
  /** @internal */
  state: {
    readonly _tag: "Open"
    readonly backing: Set<Fiber.RuntimeFiber<A, E>>
  } | {
    readonly _tag: "Closed"
  }
}

/**
 * @since 2.0.0
 * @categories refinements
 */
export const isFiberSet = (u: unknown): u is FiberSet<unknown, unknown> => Predicate.hasProperty(u, TypeId)

const Proto = {
  [TypeId]: TypeId,
  [Symbol.iterator](this: FiberSet<unknown, unknown>) {
    if (this.state._tag === "Closed") {
      return Iterable.empty()
    }
    return this.state.backing[Symbol.iterator]()
  },
  toString(this: FiberSet<unknown, unknown>) {
    return Inspectable.format(this.toJSON())
  },
  toJSON(this: FiberSet<unknown, unknown>) {
    return {
      _id: "FiberMap",
      state: this.state
    }
  },
  [Inspectable.NodeInspectSymbol](this: FiberSet<unknown, unknown>) {
    return this.toJSON()
  },
  pipe() {
    return pipeArguments(this, arguments)
  }
}

const unsafeMake = <A, E>(
  backing: Set<Fiber.RuntimeFiber<A, E>>,
  deferred: Deferred.Deferred<void, unknown>
): FiberSet<A, E> => {
  const self = Object.create(Proto)
  self.state = { _tag: "Open", backing }
  self.deferred = deferred
  return self
}

/**
 * A FiberSet can be used to store a collection of fibers.
 * When the associated Scope is closed, all fibers in the set will be interrupted.
 *
 * You can add fibers to the set using `FiberSet.add` or `FiberSet.run`, and the fibers will
 * be automatically removed from the FiberSet when they complete.
 *
 * @example
 * ```ts
 * import { Effect, FiberSet } from "effect"
 *
 * Effect.gen(function*() {
 *   const set = yield* FiberSet.make()
 *
 *   // run some effects and add the fibers to the set
 *   yield* FiberSet.run(set, Effect.never)
 *   yield* FiberSet.run(set, Effect.never)
 *
 *   yield* Effect.sleep(1000)
 * }).pipe(
 *   Effect.scoped // The fibers will be interrupted when the scope is closed
 * )
 * ```
 *
 * @since 2.0.0
 * @categories constructors
 */
export const make = <A = unknown, E = unknown>(): Effect.Effect<FiberSet<A, E>, never, Scope.Scope> =>
  Effect.acquireRelease(
    Effect.map(Deferred.make<void, unknown>(), (deferred) => unsafeMake(new Set(), deferred)),
    (set) =>
      Effect.withFiberRuntime((parent) => {
        const state = set.state
        if (state._tag === "Closed") return Effect.void
        set.state = { _tag: "Closed" }
        const fibers = state.backing
        return Fiber.interruptAllAs(fibers, FiberId.combine(parent.id(), internalFiberId)).pipe(
          Effect.intoDeferred(set.deferred)
        )
      })
  )

/**
 * Create an Effect run function that is backed by a FiberSet.
 *
 * @since 2.0.0
 * @categories constructors
 */
export const makeRuntime = <R = never, A = unknown, E = unknown>(): Effect.Effect<
  <XE extends E, XA extends A>(
    effect: Effect.Effect<XA, XE, R>,
    options?: Runtime.RunForkOptions | undefined
  ) => Fiber.RuntimeFiber<XA, XE>,
  never,
  Scope.Scope | R
> =>
  Effect.flatMap(
    make<A, E>(),
    (self) => runtime(self)<R>()
  )

/**
 * Create an Effect run function that is backed by a FiberSet.
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
 * Add a fiber to the FiberSet. When the fiber completes, it will be removed.
 *
 * @since 2.0.0
 * @categories combinators
 */
export const unsafeAdd: {
  /**
   * Add a fiber to the FiberSet. When the fiber completes, it will be removed.
   *
   * @since 2.0.0
   * @categories combinators
   */
  <A, E, XE extends E, XA extends A>(
    fiber: Fiber.RuntimeFiber<XA, XE>,
    options?: {
      readonly interruptAs?: FiberId.FiberId | undefined
      readonly propagateInterruption?: boolean | undefined
    } | undefined
  ): (self: FiberSet<A, E>) => void
  /**
   * Add a fiber to the FiberSet. When the fiber completes, it will be removed.
   *
   * @since 2.0.0
   * @categories combinators
   */
  <A, E, XE extends E, XA extends A>(
    self: FiberSet<A, E>,
    fiber: Fiber.RuntimeFiber<XA, XE>,
    options?: {
      readonly interruptAs?: FiberId.FiberId | undefined
      readonly propagateInterruption?: boolean | undefined
    } | undefined
  ): void
} = dual((args) => isFiberSet(args[0]), <A, E, XE extends E, XA extends A>(
  self: FiberSet<A, E>,
  fiber: Fiber.RuntimeFiber<XA, XE>,
  options?: {
    readonly interruptAs?: FiberId.FiberId | undefined
    readonly propagateInterruption?: boolean | undefined
  } | undefined
): void => {
  if (self.state._tag === "Closed") {
    fiber.unsafeInterruptAsFork(FiberId.combine(options?.interruptAs ?? FiberId.none, internalFiberId))
    return
  } else if (self.state.backing.has(fiber)) {
    return
  }
  self.state.backing.add(fiber)
  fiber.addObserver((exit) => {
    if (self.state._tag === "Closed") {
      return
    }
    self.state.backing.delete(fiber)
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
 * Add a fiber to the FiberSet. When the fiber completes, it will be removed.
 *
 * @since 2.0.0
 * @categories combinators
 */
export const add: {
  /**
   * Add a fiber to the FiberSet. When the fiber completes, it will be removed.
   *
   * @since 2.0.0
   * @categories combinators
   */
  <A, E, XE extends E, XA extends A>(
    fiber: Fiber.RuntimeFiber<XA, XE>,
    options?: {
      readonly propagateInterruption?: boolean | undefined
    } | undefined
  ): (self: FiberSet<A, E>) => Effect.Effect<void>
  /**
   * Add a fiber to the FiberSet. When the fiber completes, it will be removed.
   *
   * @since 2.0.0
   * @categories combinators
   */
  <A, E, XE extends E, XA extends A>(
    self: FiberSet<A, E>,
    fiber: Fiber.RuntimeFiber<XA, XE>,
    options?: {
      readonly propagateInterruption?: boolean | undefined
    } | undefined
  ): Effect.Effect<void>
} = dual(
  (args) => isFiberSet(args[0]),
  <A, E, XE extends E, XA extends A>(
    self: FiberSet<A, E>,
    fiber: Fiber.RuntimeFiber<XA, XE>,
    options?: {
      readonly propagateInterruption?: boolean | undefined
    } | undefined
  ): Effect.Effect<void> =>
    Effect.fiberIdWith((fiberId) =>
      Effect.sync(() =>
        unsafeAdd(self, fiber, {
          ...options,
          interruptAs: fiberId
        })
      )
    )
)

/**
 * @since 2.0.0
 * @categories combinators
 */
export const clear = <A, E>(self: FiberSet<A, E>): Effect.Effect<void> =>
  Effect.withFiberRuntime((clearFiber) => {
    if (self.state._tag === "Closed") {
      return Effect.void
    }
    return Effect.forEach(self.state.backing, (fiber) =>
      // will be removed by the observer
      Fiber.interruptAs(fiber, FiberId.combine(clearFiber.id(), internalFiberId)))
  })

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
 * Fork an Effect and add the forked fiber to the FiberSet.
 * When the fiber completes, it will be removed from the FiberSet.
 *
 * @since 2.0.0
 * @categories combinators
 */
export const run: {
  /**
   * Fork an Effect and add the forked fiber to the FiberSet.
   * When the fiber completes, it will be removed from the FiberSet.
   *
   * @since 2.0.0
   * @categories combinators
   */
  <A, E>(
    self: FiberSet<A, E>,
    options?: {
      readonly propagateInterruption?: boolean | undefined
    } | undefined
  ): <R, XE extends E, XA extends A>(
    effect: Effect.Effect<XA, XE, R>
  ) => Effect.Effect<Fiber.RuntimeFiber<XA, XE>, never, R>
  /**
   * Fork an Effect and add the forked fiber to the FiberSet.
   * When the fiber completes, it will be removed from the FiberSet.
   *
   * @since 2.0.0
   * @categories combinators
   */
  <A, E, R, XE extends E, XA extends A>(
    self: FiberSet<A, E>,
    effect: Effect.Effect<XA, XE, R>,
    options?: {
      readonly propagateInterruption?: boolean | undefined
    } | undefined
  ): Effect.Effect<Fiber.RuntimeFiber<XA, XE>, never, R>
} = function() {
  const self = arguments[0] as FiberSet<any, any>
  if (!Effect.isEffect(arguments[1])) {
    const options = arguments[1]
    return (effect: Effect.Effect<any, any, any>) => runImpl(self, effect, options)
  }
  return runImpl(self, arguments[1], arguments[2]) as any
}

const runImpl = <A, E, R, XE extends E, XA extends A>(
  self: FiberSet<A, E>,
  effect: Effect.Effect<XA, XE, R>,
  options?: {
    readonly propagateInterruption?: boolean | undefined
  }
): Effect.Effect<Fiber.RuntimeFiber<XA, XE>, never, R> =>
  Effect.fiberIdWith((fiberId) => {
    if (self.state._tag === "Closed") {
      return Effect.sync(constInterruptedFiber)
    }
    return Effect.tap(
      Effect.forkDaemon(effect),
      (fiber) =>
        unsafeAdd(self, fiber, {
          ...options,
          interruptAs: fiberId
        })
    )
  })

/**
 * Capture a Runtime and use it to fork Effect's, adding the forked fibers to the FiberSet.
 *
 * @example
 * ```ts
 * import { Context, Effect, FiberSet } from "effect"
 *
 * interface Users {
 *   readonly _: unique symbol
 * }
 * const Users = Context.GenericTag<Users, {
 *    getAll: Effect.Effect<Array<unknown>>
 * }>("Users")
 *
 * Effect.gen(function*() {
 *   const set = yield* FiberSet.make()
 *   const run = yield* FiberSet.runtime(set)<Users>()
 *
 *   // run some effects and add the fibers to the set
 *   run(Effect.andThen(Users, _ => _.getAll))
 * }).pipe(
 *   Effect.scoped // The fibers will be interrupted when the scope is closed
 * )
 * ```
 *
 * @since 2.0.0
 * @categories combinators
 */
export const runtime: <A, E>(
  self: FiberSet<A, E>
) => <R = never>() => Effect.Effect<
  <XE extends E, XA extends A>(
    effect: Effect.Effect<XA, XE, R>,
    options?:
      | Runtime.RunForkOptions & { readonly propagateInterruption?: boolean | undefined }
      | undefined
  ) => Fiber.RuntimeFiber<XA, XE>,
  never,
  R
> = <A, E>(self: FiberSet<A, E>) => <R>() =>
  Effect.map(
    Effect.runtime<R>(),
    (runtime) => {
      const runFork = Runtime.runFork(runtime)
      return <XE extends E, XA extends A>(
        effect: Effect.Effect<XA, XE, R>,
        options?:
          | Runtime.RunForkOptions & { readonly propagateInterruption?: boolean | undefined }
          | undefined
      ) => {
        if (self.state._tag === "Closed") {
          return constInterruptedFiber()
        }
        const fiber = runFork(effect, options)
        unsafeAdd(self, fiber)
        return fiber
      }
    }
  )

/**
 * Capture a Runtime and use it to fork Effect's, adding the forked fibers to the FiberSet.
 *
 * The returned run function will return Promise's.
 *
 * @since 3.13.0
 * @categories combinators
 */
export const runtimePromise = <A, E>(self: FiberSet<A, E>): <R = never>() => Effect.Effect<
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
 * @since 2.0.0
 * @categories combinators
 */
export const size = <A, E>(self: FiberSet<A, E>): Effect.Effect<number> =>
  Effect.sync(() => self.state._tag === "Closed" ? 0 : self.state.backing.size)

/**
 * Join all fibers in the FiberSet. If any of the Fiber's in the set terminate with a failure,
 * the returned Effect will terminate with the first failure that occurred.
 *
 * @since 2.0.0
 * @categories combinators
 * @example
 * ```ts
 * import { Effect, FiberSet } from "effect";
 *
 * Effect.gen(function* (_) {
 *   const set = yield* _(FiberSet.make());
 *   yield* _(FiberSet.add(set, Effect.runFork(Effect.fail("error"))));
 *
 *   // parent fiber will fail with "error"
 *   yield* _(FiberSet.join(set));
 * });
 * ```
 */
export const join = <A, E>(self: FiberSet<A, E>): Effect.Effect<void, E> =>
  Deferred.await(self.deferred as Deferred.Deferred<void, E>)

/**
 * Wait until the fiber set is empty.
 *
 * @since 3.13.0
 * @categories combinators
 */
export const awaitEmpty = <A, E>(self: FiberSet<A, E>): Effect.Effect<void> =>
  Effect.whileLoop({
    while: () => self.state._tag === "Open" && self.state.backing.size > 0,
    body: () => Fiber.await(Iterable.unsafeHead(self)),
    step: constVoid
  })
