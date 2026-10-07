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
import { constFalse, constVoid, dual } from "./Function.js"
import * as HashSet from "./HashSet.js"
import * as Inspectable from "./Inspectable.js"
import * as Iterable from "./Iterable.js"
import * as MutableHashMap from "./MutableHashMap.js"
import * as Option from "./Option.js"
import { type Pipeable, pipeArguments } from "./Pipeable.js"
import * as Predicate from "./Predicate.js"
import * as Runtime from "./Runtime.js"
import type * as Scope from "./Scope.js"

/**
 * @since 2.0.0
 * @categories type ids
 */
export const TypeId: unique symbol = Symbol.for("effect/FiberMap")

/**
 * @since 2.0.0
 * @categories type ids
 */
export type TypeId = typeof TypeId

/**
 * @since 2.0.0
 * @categories models
 */
export interface FiberMap<in out K, out A = unknown, out E = unknown>
  extends Pipeable, Inspectable.Inspectable, Iterable<[K, Fiber.RuntimeFiber<A, E>]>
{
  readonly [TypeId]: TypeId
  readonly deferred: Deferred.Deferred<void, unknown>
  /** @internal */
  state: {
    readonly _tag: "Open"
    readonly backing: MutableHashMap.MutableHashMap<K, Fiber.RuntimeFiber<A, E>>
  } | {
    readonly _tag: "Closed"
  }
}

/**
 * @since 2.0.0
 * @categories refinements
 */
export const isFiberMap = (u: unknown): u is FiberMap<unknown> => Predicate.hasProperty(u, TypeId)

const Proto = {
  [TypeId]: TypeId,
  [Symbol.iterator](this: FiberMap<unknown>) {
    if (this.state._tag === "Closed") {
      return Iterable.empty()
    }
    return this.state.backing[Symbol.iterator]()
  },
  toString(this: FiberMap<unknown>) {
    return Inspectable.format(this.toJSON())
  },
  toJSON(this: FiberMap<unknown>) {
    return {
      _id: "FiberMap",
      state: this.state
    }
  },
  [Inspectable.NodeInspectSymbol](this: FiberMap<unknown>) {
    return this.toJSON()
  },
  pipe() {
    return pipeArguments(this, arguments)
  }
}

const unsafeMake = <K, A = unknown, E = unknown>(
  backing: MutableHashMap.MutableHashMap<K, Fiber.RuntimeFiber<A, E>>,
  deferred: Deferred.Deferred<void, E>
): FiberMap<K, A, E> => {
  const self = Object.create(Proto)
  self.state = { _tag: "Open", backing }
  self.deferred = deferred
  return self
}

/**
 * A FiberMap can be used to store a collection of fibers, indexed by some key.
 * When the associated Scope is closed, all fibers in the map will be interrupted.
 *
 * You can add fibers to the map using `FiberMap.set` or `FiberMap.run`, and the fibers will
 * be automatically removed from the FiberMap when they complete.
 *
 * @example
 * ```ts
 * import { Effect, FiberMap } from "effect"
 *
 * Effect.gen(function*() {
 *   const map = yield* FiberMap.make<string>()
 *
 *   // run some effects and add the fibers to the map
 *   yield* FiberMap.run(map, "fiber a", Effect.never)
 *   yield* FiberMap.run(map, "fiber b", Effect.never)
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
export const make = <K, A = unknown, E = unknown>(): Effect.Effect<FiberMap<K, A, E>, never, Scope.Scope> =>
  Effect.acquireRelease(
    Effect.map(Deferred.make<void, E>(), (deferred) =>
      unsafeMake<K, A, E>(
        MutableHashMap.empty(),
        deferred
      )),
    (map) =>
      Effect.withFiberRuntime((parent) => {
        const state = map.state
        if (state._tag === "Closed") return Effect.void
        map.state = { _tag: "Closed" }
        return Fiber.interruptAllAs(
          Iterable.map(state.backing, ([, fiber]) => fiber),
          FiberId.combine(parent.id(), internalFiberId)
        ).pipe(
          Effect.intoDeferred(map.deferred)
        )
      })
  )

/**
 * Create an Effect run function that is backed by a FiberMap.
 *
 * @since 2.0.0
 * @categories constructors
 */
export const makeRuntime = <R, K, E = unknown, A = unknown>(): Effect.Effect<
  <XE extends E, XA extends A>(
    key: K,
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
    make<K, A, E>(),
    (self) => runtime(self)<R>()
  )

/**
 * Create an Effect run function that is backed by a FiberMap.
 *
 * @since 3.13.0
 * @categories constructors
 */
export const makeRuntimePromise = <R, K, A = unknown, E = unknown>(): Effect.Effect<
  <XE extends E, XA extends A>(
    key: K,
    effect: Effect.Effect<XA, XE, R>,
    options?:
      | Runtime.RunForkOptions & {
        readonly onlyIfMissing?: boolean | undefined
      }
      | undefined
  ) => Promise<XA>,
  never,
  Scope.Scope | R
> =>
  Effect.flatMap(
    make<K, A, E>(),
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
 * Add a fiber to the FiberMap. When the fiber completes, it will be removed from the FiberMap.
 * If the key already exists in the FiberMap, the previous fiber will be interrupted.
 *
 * @since 2.0.0
 * @categories combinators
 */
export const unsafeSet: {
  /**
   * Add a fiber to the FiberMap. When the fiber completes, it will be removed from the FiberMap.
   * If the key already exists in the FiberMap, the previous fiber will be interrupted.
   *
   * @since 2.0.0
   * @categories combinators
   */
  <K, A, E, XE extends E, XA extends A>(
    key: K,
    fiber: Fiber.RuntimeFiber<XA, XE>,
    options?: {
      readonly interruptAs?: FiberId.FiberId | undefined
      readonly onlyIfMissing?: boolean | undefined
      readonly propagateInterruption?: boolean | undefined
    } | undefined
  ): (self: FiberMap<K, A, E>) => void
  /**
   * Add a fiber to the FiberMap. When the fiber completes, it will be removed from the FiberMap.
   * If the key already exists in the FiberMap, the previous fiber will be interrupted.
   *
   * @since 2.0.0
   * @categories combinators
   */
  <K, A, E, XE extends E, XA extends A>(
    self: FiberMap<K, A, E>,
    key: K,
    fiber: Fiber.RuntimeFiber<XA, XE>,
    options?: {
      readonly interruptAs?: FiberId.FiberId | undefined
      readonly onlyIfMissing?: boolean | undefined
      readonly propagateInterruption?: boolean | undefined
    } | undefined
  ): void
} = dual((args) => isFiberMap(args[0]), <K, A, E, XE extends E, XA extends A>(
  self: FiberMap<K, A, E>,
  key: K,
  fiber: Fiber.RuntimeFiber<XA, XE>,
  options?: {
    readonly interruptAs?: FiberId.FiberId | undefined
    readonly onlyIfMissing?: boolean | undefined
    readonly propagateInterruption?: boolean | undefined
  } | undefined
): void => {
  if (self.state._tag === "Closed") {
    fiber.unsafeInterruptAsFork(FiberId.combine(options?.interruptAs ?? FiberId.none, internalFiberId))
    return
  }

  const previous = MutableHashMap.get(self.state.backing, key)
  if (previous._tag === "Some") {
    if (options?.onlyIfMissing === true) {
      fiber.unsafeInterruptAsFork(FiberId.combine(options?.interruptAs ?? FiberId.none, internalFiberId))
      return
    } else if (previous.value === fiber) {
      return
    }
    previous.value.unsafeInterruptAsFork(FiberId.combine(options?.interruptAs ?? FiberId.none, internalFiberId))
  }

  MutableHashMap.set(self.state.backing, key, fiber)
  fiber.addObserver((exit) => {
    if (self.state._tag === "Closed") {
      return
    }
    const current = MutableHashMap.get(self.state.backing, key)
    if (Option.isSome(current) && fiber === current.value) {
      MutableHashMap.remove(self.state.backing, key)
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
 * Add a fiber to the FiberMap. When the fiber completes, it will be removed from the FiberMap.
 * If the key already exists in the FiberMap, the previous fiber will be interrupted.
 *
 * @since 2.0.0
 * @categories combinators
 */
export const set: {
  /**
   * Add a fiber to the FiberMap. When the fiber completes, it will be removed from the FiberMap.
   * If the key already exists in the FiberMap, the previous fiber will be interrupted.
   *
   * @since 2.0.0
   * @categories combinators
   */
  <K, A, E, XE extends E, XA extends A>(
    key: K,
    fiber: Fiber.RuntimeFiber<XA, XE>,
    options?: {
      readonly onlyIfMissing?: boolean | undefined
      readonly propagateInterruption?: boolean | undefined
    } | undefined
  ): (self: FiberMap<K, A, E>) => Effect.Effect<void>
  /**
   * Add a fiber to the FiberMap. When the fiber completes, it will be removed from the FiberMap.
   * If the key already exists in the FiberMap, the previous fiber will be interrupted.
   *
   * @since 2.0.0
   * @categories combinators
   */
  <K, A, E, XE extends E, XA extends A>(
    self: FiberMap<K, A, E>,
    key: K,
    fiber: Fiber.RuntimeFiber<XA, XE>,
    options?: {
      readonly onlyIfMissing?: boolean | undefined
      readonly propagateInterruption?: boolean | undefined
    } | undefined
  ): Effect.Effect<void>
} = dual((args) => isFiberMap(args[0]), <K, A, E, XE extends E, XA extends A>(
  self: FiberMap<K, A, E>,
  key: K,
  fiber: Fiber.RuntimeFiber<XA, XE>,
  options?: {
    readonly onlyIfMissing?: boolean | undefined
    readonly propagateInterruption?: boolean | undefined
  } | undefined
): Effect.Effect<void> =>
  Effect.fiberIdWith(
    (fiberId) =>
      Effect.sync(() =>
        unsafeSet(self, key, fiber, {
          ...options,
          interruptAs: fiberId
        })
      )
  ))

/**
 * Retrieve a fiber from the FiberMap.
 *
 * @since 2.0.0
 * @categories combinators
 */
export const unsafeGet: {
  /**
   * Retrieve a fiber from the FiberMap.
   *
   * @since 2.0.0
   * @categories combinators
   */
  <K>(key: K): <A, E>(self: FiberMap<K, A, E>) => Option.Option<Fiber.RuntimeFiber<A, E>>
  /**
   * Retrieve a fiber from the FiberMap.
   *
   * @since 2.0.0
   * @categories combinators
   */
  <K, A, E>(self: FiberMap<K, A, E>, key: K): Option.Option<Fiber.RuntimeFiber<A, E>>
} = dual<
  /**
   * Retrieve a fiber from the FiberMap.
   *
   * @since 2.0.0
   * @categories combinators
   */
  <K>(key: K) => <A, E>(self: FiberMap<K, A, E>) => Option.Option<Fiber.RuntimeFiber<A, E>>,
  /**
   * Retrieve a fiber from the FiberMap.
   *
   * @since 2.0.0
   * @categories combinators
   */
  <K, A, E>(self: FiberMap<K, A, E>, key: K) => Option.Option<Fiber.RuntimeFiber<A, E>>
>(2, (self, key) => self.state._tag === "Closed" ? Option.none() : MutableHashMap.get(self.state.backing, key))

/**
 * Retrieve a fiber from the FiberMap.
 *
 * @since 2.0.0
 * @categories combinators
 */
export const get: {
  /**
   * Retrieve a fiber from the FiberMap.
   *
   * @since 2.0.0
   * @categories combinators
   */
  <K>(key: K): <A, E>(self: FiberMap<K, A, E>) => Effect.Effect<Fiber.RuntimeFiber<A, E>, NoSuchElementException>
  /**
   * Retrieve a fiber from the FiberMap.
   *
   * @since 2.0.0
   * @categories combinators
   */
  <K, A, E>(self: FiberMap<K, A, E>, key: K): Effect.Effect<Fiber.RuntimeFiber<A, E>, NoSuchElementException>
} = dual<
  /**
   * Retrieve a fiber from the FiberMap.
   *
   * @since 2.0.0
   * @categories combinators
   */
  <K>(key: K) => <A, E>(self: FiberMap<K, A, E>) => Effect.Effect<Fiber.RuntimeFiber<A, E>, NoSuchElementException>,
  /**
   * Retrieve a fiber from the FiberMap.
   *
   * @since 2.0.0
   * @categories combinators
   */
  <K, A, E>(self: FiberMap<K, A, E>, key: K) => Effect.Effect<Fiber.RuntimeFiber<A, E>, NoSuchElementException>
>(2, (self, key) => Effect.suspend(() => unsafeGet(self, key)))

/**
 * Check if a key exists in the FiberMap.
 *
 * @since 2.0.0
 * @categories combinators
 */
export const unsafeHas: {
  /**
   * Check if a key exists in the FiberMap.
   *
   * @since 2.0.0
   * @categories combinators
   */
  <K>(key: K): <A, E>(self: FiberMap<K, A, E>) => boolean
  /**
   * Check if a key exists in the FiberMap.
   *
   * @since 2.0.0
   * @categories combinators
   */
  <K, A, E>(self: FiberMap<K, A, E>, key: K): boolean
} = dual(
  2,
  <K, A, E>(self: FiberMap<K, A, E>, key: K): boolean =>
    self.state._tag === "Closed" ? false : MutableHashMap.has(self.state.backing, key)
)

/**
 * Check if a key exists in the FiberMap.
 *
 * @since 2.0.0
 * @categories combinators
 */
export const has: {
  /**
   * Check if a key exists in the FiberMap.
   *
   * @since 2.0.0
   * @categories combinators
   */
  <K>(key: K): <A, E>(self: FiberMap<K, A, E>) => Effect.Effect<boolean>
  /**
   * Check if a key exists in the FiberMap.
   *
   * @since 2.0.0
   * @categories combinators
   */
  <K, A, E>(self: FiberMap<K, A, E>, key: K): Effect.Effect<boolean>
} = dual(
  2,
  <K, A, E>(self: FiberMap<K, A, E>, key: K): Effect.Effect<boolean> => Effect.sync(() => unsafeHas(self, key))
)

/**
 * Remove a fiber from the FiberMap, interrupting it if it exists.
 *
 * @since 2.0.0
 * @categories combinators
 */
export const remove: {
  /**
   * Remove a fiber from the FiberMap, interrupting it if it exists.
   *
   * @since 2.0.0
   * @categories combinators
   */
  <K>(key: K): <A, E>(self: FiberMap<K, A, E>) => Effect.Effect<void>
  /**
   * Remove a fiber from the FiberMap, interrupting it if it exists.
   *
   * @since 2.0.0
   * @categories combinators
   */
  <K, A, E>(self: FiberMap<K, A, E>, key: K): Effect.Effect<void>
} = dual<
  /**
   * Remove a fiber from the FiberMap, interrupting it if it exists.
   *
   * @since 2.0.0
   * @categories combinators
   */
  <K>(key: K) => <A, E>(self: FiberMap<K, A, E>) => Effect.Effect<void>,
  /**
   * Remove a fiber from the FiberMap, interrupting it if it exists.
   *
   * @since 2.0.0
   * @categories combinators
   */
  <K, A, E>(self: FiberMap<K, A, E>, key: K) => Effect.Effect<void>
>(2, (self, key) =>
  Effect.withFiberRuntime((removeFiber) => {
    if (self.state._tag === "Closed") {
      return Effect.void
    }
    const fiber = MutableHashMap.get(self.state.backing, key)
    if (fiber._tag === "None") {
      return Effect.void
    }
    // will be removed by the observer
    return Fiber.interruptAs(fiber.value, FiberId.combine(removeFiber.id(), internalFiberId))
  }))

/**
 * @since 2.0.0
 * @categories combinators
 */
export const clear = <K, A, E>(self: FiberMap<K, A, E>): Effect.Effect<void> =>
  Effect.withFiberRuntime((clearFiber) => {
    if (self.state._tag === "Closed") {
      return Effect.void
    }

    return Effect.forEach(self.state.backing, ([, fiber]) =>
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
 * Run an Effect and add the forked fiber to the FiberMap.
 * When the fiber completes, it will be removed from the FiberMap.
 *
 * @since 2.0.0
 * @categories combinators
 */
export const run: {
  /**
   * Run an Effect and add the forked fiber to the FiberMap.
   * When the fiber completes, it will be removed from the FiberMap.
   *
   * @since 2.0.0
   * @categories combinators
   */
  <K, A, E>(
    self: FiberMap<K, A, E>,
    key: K,
    options?: {
      readonly onlyIfMissing?: boolean | undefined
      readonly propagateInterruption?: boolean | undefined
    } | undefined
  ): <R, XE extends E, XA extends A>(
    effect: Effect.Effect<XA, XE, R>
  ) => Effect.Effect<Fiber.RuntimeFiber<XA, XE>, never, R>
  /**
   * Run an Effect and add the forked fiber to the FiberMap.
   * When the fiber completes, it will be removed from the FiberMap.
   *
   * @since 2.0.0
   * @categories combinators
   */
  <K, A, E, R, XE extends E, XA extends A>(
    self: FiberMap<K, A, E>,
    key: K,
    effect: Effect.Effect<XA, XE, R>,
    options?: {
      readonly onlyIfMissing?: boolean | undefined
      readonly propagateInterruption?: boolean | undefined
    } | undefined
  ): Effect.Effect<Fiber.RuntimeFiber<XA, XE>, never, R>
} = function() {
  const self = arguments[0]
  if (Effect.isEffect(arguments[2])) {
    return runImpl(self, arguments[1], arguments[2], arguments[3]) as any
  }
  const key = arguments[1]
  const options = arguments[2]
  return (effect: Effect.Effect<any, any, any>) => runImpl(self, key, effect, options)
}

const runImpl = <K, A, E, R, XE extends E, XA extends A>(
  self: FiberMap<K, A, E>,
  key: K,
  effect: Effect.Effect<XA, XE, R>,
  options?: {
    readonly onlyIfMissing?: boolean
    readonly propagateInterruption?: boolean | undefined
  }
) =>
  Effect.withFiberRuntime((parent) => {
    if (self.state._tag === "Closed") {
      return Effect.interrupt
    } else if (options?.onlyIfMissing === true && unsafeHas(self, key)) {
      return Effect.sync(constInterruptedFiber)
    }
    const runtime = Runtime.make<R>({
      context: parent.currentContext as any,
      fiberRefs: parent.getFiberRefs(),
      runtimeFlags: Runtime.defaultRuntime.runtimeFlags
    })
    const fiber = Runtime.runFork(runtime)(effect)
    unsafeSet(self, key, fiber, { ...options, interruptAs: parent.id() })
    return Effect.succeed(fiber)
  })

/**
 * Capture a Runtime and use it to fork Effect's, adding the forked fibers to the FiberMap.
 *
 * @example
 * ```ts
 * import { Context, Effect, FiberMap } from "effect"
 *
 * interface Users {
 *   readonly _: unique symbol
 * }
 * const Users = Context.GenericTag<Users, {
 *    getAll: Effect.Effect<Array<unknown>>
 * }>("Users")
 *
 * Effect.gen(function*() {
 *   const map = yield* FiberMap.make<string>()
 *   const run = yield* FiberMap.runtime(map)<Users>()
 *
 *   // run some effects and add the fibers to the map
 *   run("effect-a", Effect.andThen(Users, _ => _.getAll))
 *   run("effect-b", Effect.andThen(Users, _ => _.getAll))
 * }).pipe(
 *   Effect.scoped // The fibers will be interrupted when the scope is closed
 * )
 * ```
 *
 * @since 2.0.0
 * @categories combinators
 */
export const runtime: <K, A, E>(
  self: FiberMap<K, A, E>
) => <R = never>() => Effect.Effect<
  <XE extends E, XA extends A>(
    key: K,
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
> = <K, A, E>(self: FiberMap<K, A, E>) => <R>() =>
  Effect.map(
    Effect.runtime<R>(),
    (runtime) => {
      const runFork = Runtime.runFork(runtime)
      return <XE extends E, XA extends A>(
        key: K,
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
        } else if (options?.onlyIfMissing === true && unsafeHas(self, key)) {
          return constInterruptedFiber()
        }
        const fiber = runFork(effect, options)
        unsafeSet(self, key, fiber, options)
        return fiber
      }
    }
  )

/**
 * Capture a Runtime and use it to fork Effect's, adding the forked fibers to the FiberMap.
 *
 * @since 3.13.0
 * @categories combinators
 */
export const runtimePromise = <K, A, E>(self: FiberMap<K, A, E>): <R = never>() => Effect.Effect<
  <XE extends E, XA extends A>(
    key: K,
    effect: Effect.Effect<XA, XE, R>,
    options?:
      | Runtime.RunForkOptions & {
        readonly onlyIfMissing?: boolean | undefined
        readonly propagateInterruption?: boolean | undefined
      }
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
      key: K,
      effect: Effect.Effect<XA, XE, R>,
      options?:
        | Runtime.RunForkOptions & { readonly propagateInterruption?: boolean | undefined }
        | undefined
    ): Promise<XA> =>
      new Promise((resolve, reject) =>
        runFork(key, effect, options).addObserver((exit) => {
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
export const size = <K, A, E>(self: FiberMap<K, A, E>): Effect.Effect<number> =>
  Effect.sync(() => self.state._tag === "Closed" ? 0 : MutableHashMap.size(self.state.backing))

/**
 * Join all fibers in the FiberMap. If any of the Fiber's in the map terminate with a failure,
 * the returned Effect will terminate with the first failure that occurred.
 *
 * @since 2.0.0
 * @categories combinators
 * @example
 * ```ts
 * import { Effect, FiberMap } from "effect";
 *
 * Effect.gen(function* (_) {
 *   const map = yield* _(FiberMap.make());
 *   yield* _(FiberMap.set(map, "a", Effect.runFork(Effect.fail("error"))));
 *
 *   // parent fiber will fail with "error"
 *   yield* _(FiberMap.join(map));
 * });
 * ```
 */
export const join = <K, A, E>(self: FiberMap<K, A, E>): Effect.Effect<void, E> =>
  Deferred.await(self.deferred as Deferred.Deferred<void, E>)

/**
 * Wait for the FiberMap to be empty.
 *
 * @since 3.13.0
 * @categories combinators
 */
export const awaitEmpty = <K, A, E>(self: FiberMap<K, A, E>): Effect.Effect<void, E> =>
  Effect.whileLoop({
    while: () => self.state._tag === "Open" && MutableHashMap.size(self.state.backing) > 0,
    body: () => Fiber.await(Iterable.unsafeHead(self)[1]),
    step: constVoid
  })
