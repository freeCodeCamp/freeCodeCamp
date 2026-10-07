import type * as Cause from "../../Cause.js"
import type * as Deferred from "../../Deferred.js"
import * as Duration from "../../Duration.js"
import type * as Effect from "../../Effect.js"
import * as Effectable from "../../Effectable.js"
import * as Equal from "../../Equal.js"
import type { Equivalence } from "../../Equivalence.js"
import * as Exit from "../../Exit.js"
import type * as Fiber from "../../Fiber.js"
import * as FiberId from "../../FiberId.js"
import type * as FiberRefsPatch from "../../FiberRefsPatch.js"
import type { LazyArg } from "../../Function.js"
import { dual, pipe } from "../../Function.js"
import * as Hash from "../../Hash.js"
import * as MutableHashMap from "../../MutableHashMap.js"
import * as Option from "../../Option.js"
import { pipeArguments } from "../../Pipeable.js"
import * as Predicate from "../../Predicate.js"
import * as Readable from "../../Readable.js"
import type * as Ref from "../../Ref.js"
import { currentScheduler } from "../../Scheduler.js"
import type * as Scope from "../../Scope.js"
import type * as Supervisor from "../../Supervisor.js"
import type * as Synchronized from "../../SynchronizedRef.js"
import type * as Types from "../../Types.js"
import * as internalCause from "../cause.js"
import * as effect from "../core-effect.js"
import * as core from "../core.js"
import * as internalFiber from "../fiber.js"
import * as fiberRuntime from "../fiberRuntime.js"
import { globalScope } from "../fiberScope.js"
import * as internalRef from "../ref.js"
import * as supervisor from "../supervisor.js"

/** @internal */
class Semaphore {
  public waiters = new Set<() => void>()
  public taken = 0

  constructor(public permits: number) {}

  get free() {
    return this.permits - this.taken
  }

  readonly take = (n: number): Effect.Effect<number> =>
    core.asyncInterrupt<number>((resume) => {
      if (this.free < n) {
        const observer = () => {
          if (this.free < n) return
          this.waiters.delete(observer)
          resume(core.suspend(() => {
            if (this.free < n) return this.take(n)
            this.taken += n
            return core.succeed(n)
          }))
        }
        this.waiters.add(observer)
        return core.sync(() => {
          this.waiters.delete(observer)
        })
      }
      resume(core.suspend(() => {
        if (this.free < n) return this.take(n)
        this.taken += n
        return core.succeed(n)
      }))
    })

  updateTakenUnsafe(fiber: Fiber.RuntimeFiber<any, any>, f: (n: number) => number): Effect.Effect<number> {
    this.taken = f(this.taken)
    if (this.waiters.size > 0) {
      fiber.getFiberRef(currentScheduler).scheduleTask(
        () => {
          const iter = this.waiters.values()
          let item = iter.next()
          while (item.done === false && this.free > 0) {
            item.value()
            item = iter.next()
          }
        },
        fiber.getFiberRef(core.currentSchedulingPriority),
        fiber
      )
    }
    return core.succeed(this.free)
  }

  updateTaken(f: (n: number) => number): Effect.Effect<number> {
    return core.withFiberRuntime((fiber) => this.updateTakenUnsafe(fiber, f))
  }

  readonly resize = (permits: number) =>
    core.asVoid(
      core.withFiberRuntime((fiber) => {
        this.permits = permits
        if (this.free < 0) {
          return core.void
        }
        return this.updateTakenUnsafe(fiber, (taken) => taken)
      })
    )

  readonly release = (n: number): Effect.Effect<number> => this.updateTaken((taken) => taken - n)

  readonly releaseAll: Effect.Effect<number> = this.updateTaken((_) => 0)

  readonly withPermits = (n: number) => <A, E, R>(self: Effect.Effect<A, E, R>) =>
    core.uninterruptibleMask((restore) =>
      core.flatMap(
        restore(this.take(n)),
        (permits) => fiberRuntime.ensuring(restore(self), this.release(permits))
      )
    )

  readonly withPermitsIfAvailable = (n: number) => <A, E, R>(self: Effect.Effect<A, E, R>) =>
    core.uninterruptibleMask((restore) =>
      core.suspend(() => {
        if (this.free < n) {
          return effect.succeedNone
        }
        this.taken += n
        return fiberRuntime.ensuring(restore(effect.asSome(self)), this.release(n))
      })
    )
}

/** @internal */
export const unsafeMakeSemaphore = (permits: number): Effect.Semaphore => new Semaphore(permits)

/** @internal */
export const makeSemaphore = (permits: number) => core.sync(() => unsafeMakeSemaphore(permits))

class Latch extends Effectable.Class<void> implements Effect.Latch {
  waiters: Array<(_: Effect.Effect<void>) => void> = []
  scheduled = false
  constructor(private isOpen: boolean) {
    super()
  }

  commit() {
    return this.await
  }

  private unsafeSchedule(fiber: Fiber.RuntimeFiber<void>) {
    if (this.scheduled || this.waiters.length === 0) {
      return core.void
    }
    this.scheduled = true
    fiber.currentScheduler.scheduleTask(this.flushWaiters, fiber.getFiberRef(core.currentSchedulingPriority), fiber)
    return core.void
  }
  private flushWaiters = () => {
    this.scheduled = false
    const waiters = this.waiters
    this.waiters = []
    for (let i = 0; i < waiters.length; i++) {
      waiters[i](core.exitVoid)
    }
  }

  open = core.withFiberRuntime<void>((fiber) => {
    if (this.isOpen) {
      return core.void
    }
    this.isOpen = true
    return this.unsafeSchedule(fiber)
  })
  unsafeOpen() {
    if (this.isOpen) return
    this.isOpen = true
    this.flushWaiters()
  }
  release = core.withFiberRuntime<void>((fiber) => {
    if (this.isOpen) {
      return core.void
    }
    return this.unsafeSchedule(fiber)
  })
  await = core.asyncInterrupt<void>((resume) => {
    if (this.isOpen) {
      return resume(core.void)
    }
    this.waiters.push(resume)
    return core.sync(() => {
      const index = this.waiters.indexOf(resume)
      if (index !== -1) {
        this.waiters.splice(index, 1)
      }
    })
  })
  unsafeClose() {
    this.isOpen = false
  }
  close = core.sync(() => {
    this.isOpen = false
  })
  whenOpen = <A, E, R>(self: Effect.Effect<A, E, R>): Effect.Effect<A, E, R> => {
    return core.zipRight(this.await, self)
  }
}

/** @internal */
export const unsafeMakeLatch = (open?: boolean | undefined): Effect.Latch => new Latch(open ?? false)

/** @internal */
export const makeLatch = (open?: boolean | undefined) => core.sync(() => unsafeMakeLatch(open))

/** @internal */
export const awaitAllChildren = <A, E, R>(self: Effect.Effect<A, E, R>): Effect.Effect<A, E, R> =>
  ensuringChildren(self, fiberRuntime.fiberAwaitAll)

/** @internal */
export const cached: {
  (
    timeToLive: Duration.DurationInput
  ): <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<Effect.Effect<A, E>, never, R>
  <A, E, R>(
    self: Effect.Effect<A, E, R>,
    timeToLive: Duration.DurationInput
  ): Effect.Effect<Effect.Effect<A, E>, never, R>
} = dual(
  2,
  <A, E, R>(
    self: Effect.Effect<A, E, R>,
    timeToLive: Duration.DurationInput
  ): Effect.Effect<Effect.Effect<A, E>, never, R> =>
    core.map(cachedInvalidateWithTTL(self, timeToLive), (tuple) => tuple[0])
)

/** @internal */
export const cachedInvalidateWithTTL: {
  (timeToLive: Duration.DurationInput): <A, E, R>(
    self: Effect.Effect<A, E, R>
  ) => Effect.Effect<[Effect.Effect<A, E>, Effect.Effect<void>], never, R>
  <A, E, R>(
    self: Effect.Effect<A, E, R>,
    timeToLive: Duration.DurationInput
  ): Effect.Effect<[Effect.Effect<A, E>, Effect.Effect<void>], never, R>
} = dual(
  2,
  <A, E, R>(
    self: Effect.Effect<A, E, R>,
    timeToLive: Duration.DurationInput
  ): Effect.Effect<[Effect.Effect<A, E>, Effect.Effect<void>], never, R> => {
    const duration = Duration.decode(timeToLive)
    return core.flatMap(
      core.context<R>(),
      (env) =>
        core.map(
          makeSynchronized<Option.Option<readonly [number, Deferred.Deferred<A, E>]>>(Option.none()),
          (cache) =>
            [
              core.provideContext(getCachedValue(self, duration, cache), env),
              invalidateCache(cache)
            ] as [Effect.Effect<A, E>, Effect.Effect<void>]
        )
    )
  }
)

/** @internal */
const computeCachedValue = <A, E, R>(
  self: Effect.Effect<A, E, R>,
  timeToLive: Duration.DurationInput,
  start: number
): Effect.Effect<Option.Option<[number, Deferred.Deferred<A, E>]>, never, R> => {
  const timeToLiveMillis = Duration.toMillis(Duration.decode(timeToLive))
  return pipe(
    core.deferredMake<A, E>(),
    core.tap((deferred) => core.intoDeferred(self, deferred)),
    core.map((deferred) => Option.some([start + timeToLiveMillis, deferred]))
  )
}

/** @internal */
const getCachedValue = <A, E, R>(
  self: Effect.Effect<A, E, R>,
  timeToLive: Duration.DurationInput,
  cache: Synchronized.SynchronizedRef<Option.Option<readonly [number, Deferred.Deferred<A, E>]>>
): Effect.Effect<A, E, R> =>
  core.uninterruptibleMask((restore) =>
    pipe(
      effect.clockWith((clock) => clock.currentTimeMillis),
      core.flatMap((time) =>
        updateSomeAndGetEffectSynchronized(cache, (option) => {
          switch (option._tag) {
            case "None": {
              return Option.some(computeCachedValue(self, timeToLive, time))
            }
            case "Some": {
              const [end] = option.value
              return end - time <= 0
                ? Option.some(computeCachedValue(self, timeToLive, time))
                : Option.none()
            }
          }
        })
      ),
      core.flatMap((option) =>
        Option.isNone(option) ?
          core.dieMessage(
            "BUG: Effect.cachedInvalidate - please report an issue at https://github.com/Effect-TS/effect/issues"
          ) :
          restore(core.deferredAwait(option.value[1]))
      )
    )
  )

/** @internal */
const invalidateCache = <A, E>(
  cache: Synchronized.SynchronizedRef<Option.Option<readonly [number, Deferred.Deferred<A, E>]>>
): Effect.Effect<void> => internalRef.set(cache, Option.none())

/** @internal */
export const ensuringChild = dual<
  <X, R2>(
    f: (fiber: Fiber.Fiber<ReadonlyArray<unknown>, any>) => Effect.Effect<X, never, R2>
  ) => <A, E, R>(
    self: Effect.Effect<A, E, R>
  ) => Effect.Effect<A, E, R | R2>,
  <A, E, R, X, R2>(
    self: Effect.Effect<A, E, R>,
    f: (fiber: Fiber.Fiber<ReadonlyArray<unknown>, any>) => Effect.Effect<X, never, R2>
  ) => Effect.Effect<A, E, R | R2>
>(2, (self, f) => ensuringChildren(self, (children) => f(fiberRuntime.fiberAll(children))))

/** @internal */
export const ensuringChildren = dual<
  <X, R2>(
    children: (fibers: ReadonlyArray<Fiber.RuntimeFiber<any, any>>) => Effect.Effect<X, never, R2>
  ) => <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R | R2>,
  <A, E, R, X, R2>(
    self: Effect.Effect<A, E, R>,
    children: (fibers: ReadonlyArray<Fiber.RuntimeFiber<any, any>>) => Effect.Effect<X, never, R2>
  ) => Effect.Effect<A, E, R | R2>
>(2, (self, children) =>
  core.flatMap(supervisor.track, (supervisor) =>
    pipe(
      supervised(self, supervisor),
      fiberRuntime.ensuring(core.flatMap(supervisor.value, children))
    )))

/** @internal */
export const forkAll: {
  (
    options?: {
      readonly discard?: false | undefined
    }
  ): <Eff extends Effect.Effect<any, any, any>>(
    effects: Iterable<Eff>
  ) => Effect.Effect<
    Fiber.Fiber<Array<Effect.Effect.Success<Eff>>, Effect.Effect.Error<Eff>>,
    never,
    Effect.Effect.Context<Eff>
  >
  (options: {
    readonly discard: true
  }): <Eff extends Effect.Effect<any, any, any>>(
    effects: Iterable<Eff>
  ) => Effect.Effect<void, never, Effect.Effect.Context<Eff>>
  <Eff extends Effect.Effect<any, any, any>>(
    effects: Iterable<Eff>,
    options?: {
      readonly discard?: false | undefined
    }
  ): Effect.Effect<
    Fiber.Fiber<Array<Effect.Effect.Success<Eff>>, Effect.Effect.Error<Eff>>,
    never,
    Effect.Effect.Context<Eff>
  >
  <Eff extends Effect.Effect<any, any, any>>(effects: Iterable<Eff>, options: {
    readonly discard: true
  }): Effect.Effect<void, never, Effect.Effect.Context<Eff>>
} = dual((args) => Predicate.isIterable(args[0]), <A, E, R>(effects: Iterable<Effect.Effect<A, E, R>>, options: {
  readonly discard: true
}): Effect.Effect<void, never, R> =>
  options?.discard ?
    core.forEachSequentialDiscard(effects, fiberRuntime.fork) :
    core.map(core.forEachSequential(effects, fiberRuntime.fork), fiberRuntime.fiberAll))

/** @internal */
export const forkIn = dual<
  (scope: Scope.Scope) => <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<Fiber.RuntimeFiber<A, E>, never, R>,
  <A, E, R>(self: Effect.Effect<A, E, R>, scope: Scope.Scope) => Effect.Effect<Fiber.RuntimeFiber<A, E>, never, R>
>(
  2,
  (self, scope) =>
    core.withFiberRuntime((parent, parentStatus) => {
      const scopeImpl = scope as fiberRuntime.ScopeImpl
      const fiber = fiberRuntime.unsafeFork(self, parent, parentStatus.runtimeFlags, globalScope)
      if (scopeImpl.state._tag === "Open") {
        const finalizer = () =>
          core.fiberIdWith((fiberId) =>
            Equal.equals(fiberId, fiber.id()) ?
              core.void :
              core.asVoid(core.interruptFiber(fiber))
          )
        const key = {}
        scopeImpl.state.finalizers.set(key, finalizer)
        fiber.addObserver(() => {
          if (scopeImpl.state._tag === "Closed") return
          scopeImpl.state.finalizers.delete(key)
        })
      } else {
        fiber.unsafeInterruptAsFork(parent.id())
      }
      return core.succeed(fiber)
    })
)

/** @internal */
export const forkScoped = <A, E, R>(
  self: Effect.Effect<A, E, R>
): Effect.Effect<Fiber.RuntimeFiber<A, E>, never, R | Scope.Scope> =>
  fiberRuntime.scopeWith((scope) => forkIn(self, scope))

/** @internal */
export const fromFiber = <A, E>(fiber: Fiber.Fiber<A, E>): Effect.Effect<A, E> => internalFiber.join(fiber)

/** @internal */
export const fromFiberEffect = <A, E, R>(fiber: Effect.Effect<Fiber.Fiber<A, E>, E, R>): Effect.Effect<A, E, R> =>
  core.suspend(() => core.flatMap(fiber, internalFiber.join))

const memoKeySymbol = Symbol.for("effect/Effect/memoizeFunction.key")

class Key<in out A> implements Equal.Equal {
  [memoKeySymbol] = memoKeySymbol
  constructor(readonly a: A, readonly eq?: Equivalence<A>) {}
  [Equal.symbol](that: Equal.Equal) {
    if (Predicate.hasProperty(that, memoKeySymbol)) {
      if (this.eq) {
        return this.eq(this.a, (that as unknown as Key<A>).a)
      } else {
        return Equal.equals(this.a, (that as unknown as Key<A>).a)
      }
    }
    return false
  }
  [Hash.symbol]() {
    return this.eq ? 0 : Hash.cached(this, Hash.hash(this.a))
  }
}

/** @internal */
export const cachedFunction = <A, B, E, R>(
  f: (a: A) => Effect.Effect<B, E, R>,
  eq?: Equivalence<A>
): Effect.Effect<(a: A) => Effect.Effect<B, E, R>> => {
  return pipe(
    core.sync(() => MutableHashMap.empty<Key<A>, Deferred.Deferred<readonly [FiberRefsPatch.FiberRefsPatch, B], E>>()),
    core.flatMap(makeSynchronized),
    core.map((ref) => (a: A) =>
      pipe(
        ref.modifyEffect((map) => {
          const result = pipe(map, MutableHashMap.get(new Key(a, eq)))
          if (Option.isNone(result)) {
            return pipe(
              core.deferredMake<readonly [FiberRefsPatch.FiberRefsPatch, B], E>(),
              core.tap((deferred) =>
                pipe(
                  effect.diffFiberRefs(f(a)),
                  core.intoDeferred(deferred),
                  fiberRuntime.fork
                )
              ),
              core.map((deferred) => [deferred, pipe(map, MutableHashMap.set(new Key(a, eq), deferred))] as const)
            )
          }
          return core.succeed([result.value, map] as const)
        }),
        core.flatMap(core.deferredAwait),
        core.flatMap(([patch, b]) => pipe(effect.patchFiberRefs(patch), core.as(b)))
      )
    )
  )
}

/** @internal */
export const raceFirst = dual<
  <A2, E2, R2>(
    that: Effect.Effect<A2, E2, R2>
  ) => <A, E, R>(
    self: Effect.Effect<A, E, R>
  ) => Effect.Effect<A2 | A, E2 | E, R | R2>,
  <A, E, R, A2, E2, R2>(
    self: Effect.Effect<A, E, R>,
    that: Effect.Effect<A2, E2, R2>
  ) => Effect.Effect<A2 | A, E2 | E, R | R2>
>(2, <A, E, R, A2, E2, R2>(
  self: Effect.Effect<A, E, R>,
  that: Effect.Effect<A2, E2, R2>
) =>
  pipe(
    core.exit(self),
    fiberRuntime.race(core.exit(that)),
    (effect: Effect.Effect<Exit.Exit<A | A2, E | E2>, never, R | R2>) => core.flatten(effect)
  ))

/** @internal */
export const supervised = dual<
  <X>(supervisor: Supervisor.Supervisor<X>) => <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>,
  <A, E, R, X>(self: Effect.Effect<A, E, R>, supervisor: Supervisor.Supervisor<X>) => Effect.Effect<A, E, R>
>(2, (self, supervisor) => {
  const supervise = core.fiberRefLocallyWith(fiberRuntime.currentSupervisor, (s) => s.zip(supervisor))
  return supervise(self)
})

/** @internal */
export const timeout = dual<
  (
    duration: Duration.DurationInput
  ) => <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E | Cause.TimeoutException, R>,
  <A, E, R>(
    self: Effect.Effect<A, E, R>,
    duration: Duration.DurationInput
  ) => Effect.Effect<A, E | Cause.TimeoutException, R>
>(2, (self, duration) =>
  timeoutFail(self, {
    onTimeout: () => core.timeoutExceptionFromDuration(duration),
    duration
  }))

/** @internal */
export const timeoutFail = dual<
  <E1>(
    options: {
      readonly onTimeout: LazyArg<E1>
      readonly duration: Duration.DurationInput
    }
  ) => <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E | E1, R>,
  <A, E, R, E1>(
    self: Effect.Effect<A, E, R>,
    options: {
      readonly onTimeout: LazyArg<E1>
      readonly duration: Duration.DurationInput
    }
  ) => Effect.Effect<A, E | E1, R>
>(2, (self, { duration, onTimeout }) =>
  core.flatten(timeoutTo(self, {
    onTimeout: () => core.failSync(onTimeout),
    onSuccess: core.succeed,
    duration
  })))

/** @internal */
export const timeoutFailCause = dual<
  <E1>(
    options: {
      readonly onTimeout: LazyArg<Cause.Cause<E1>>
      readonly duration: Duration.DurationInput
    }
  ) => <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E | E1, R>,
  <A, E, R, E1>(
    self: Effect.Effect<A, E, R>,
    options: {
      readonly onTimeout: LazyArg<Cause.Cause<E1>>
      readonly duration: Duration.DurationInput
    }
  ) => Effect.Effect<A, E | E1, R>
>(2, (self, { duration, onTimeout }) =>
  core.flatten(timeoutTo(self, {
    onTimeout: () => core.failCauseSync(onTimeout),
    onSuccess: core.succeed,
    duration
  })))

/** @internal */
export const timeoutOption = dual<
  (
    duration: Duration.DurationInput
  ) => <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<Option.Option<A>, E, R>,
  <A, E, R>(
    self: Effect.Effect<A, E, R>,
    duration: Duration.DurationInput
  ) => Effect.Effect<Option.Option<A>, E, R>
>(2, (self, duration) =>
  timeoutTo(self, {
    duration,
    onSuccess: Option.some,
    onTimeout: Option.none
  }))

/** @internal */
export const timeoutTo = dual<
  <A, B, B1>(
    options: {
      readonly onTimeout: LazyArg<B1>
      readonly onSuccess: (a: A) => B
      readonly duration: Duration.DurationInput
    }
  ) => <E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<B | B1, E, R>,
  <A, E, R, B1, B>(
    self: Effect.Effect<A, E, R>,
    options: {
      readonly onTimeout: LazyArg<B1>
      readonly onSuccess: (a: A) => B
      readonly duration: Duration.DurationInput
    }
  ) => Effect.Effect<B | B1, E, R>
>(
  2,
  (self, { duration, onSuccess, onTimeout }) =>
    core.fiberIdWith((parentFiberId) =>
      core.uninterruptibleMask((restore) =>
        fiberRuntime.raceFibersWith(
          restore(self),
          core.interruptible(effect.sleep(duration)),
          {
            onSelfWin: (winner, loser) =>
              core.flatMap(
                winner.await,
                (exit) => {
                  if (exit._tag === "Success") {
                    return core.flatMap(
                      winner.inheritAll,
                      () =>
                        core.as(
                          core.interruptAsFiber(loser, parentFiberId),
                          onSuccess(exit.value)
                        )
                    )
                  } else {
                    return core.flatMap(
                      core.interruptAsFiber(loser, parentFiberId),
                      () => core.exitFailCause(exit.cause)
                    )
                  }
                }
              ),
            onOtherWin: (winner, loser) =>
              core.flatMap(
                winner.await,
                (exit) => {
                  if (exit._tag === "Success") {
                    return core.flatMap(
                      winner.inheritAll,
                      () =>
                        core.as(
                          core.interruptAsFiber(loser, parentFiberId),
                          onTimeout()
                        )
                    )
                  } else {
                    return core.flatMap(
                      core.interruptAsFiber(loser, parentFiberId),
                      () => core.exitFailCause(exit.cause)
                    )
                  }
                }
              ),
            otherScope: globalScope
          }
        )
      )
    )
)

// circular with Synchronized

/** @internal */
const SynchronizedSymbolKey = "effect/Ref/SynchronizedRef"

/** @internal */
export const SynchronizedTypeId: Synchronized.SynchronizedRefTypeId = Symbol.for(
  SynchronizedSymbolKey
) as Synchronized.SynchronizedRefTypeId

/** @internal */
export const synchronizedVariance = {
  /* c8 ignore next */
  _A: (_: any) => _
}

/** @internal */
class SynchronizedImpl<in out A> extends Effectable.Class<A> implements Synchronized.SynchronizedRef<A> {
  readonly [SynchronizedTypeId] = synchronizedVariance
  readonly [internalRef.RefTypeId] = internalRef.refVariance
  readonly [Readable.TypeId]: Readable.TypeId = Readable.TypeId
  constructor(
    readonly ref: Ref.Ref<A>,
    readonly withLock: <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>
  ) {
    super()
    this.get = internalRef.get(this.ref)
  }
  readonly get: Effect.Effect<A>
  commit() {
    return this.get
  }
  modify<B>(f: (a: A) => readonly [B, A]): Effect.Effect<B> {
    return this.modifyEffect((a) => core.succeed(f(a)))
  }
  modifyEffect<B, E, R>(f: (a: A) => Effect.Effect<readonly [B, A], E, R>): Effect.Effect<B, E, R> {
    return this.withLock(
      pipe(
        core.flatMap(internalRef.get(this.ref), f),
        core.flatMap(([b, a]) => core.as(internalRef.set(this.ref, a), b))
      )
    )
  }
}

/** @internal */
export const makeSynchronized = <A>(value: A): Effect.Effect<Synchronized.SynchronizedRef<A>> =>
  core.sync(() => unsafeMakeSynchronized(value))

/** @internal */
export const unsafeMakeSynchronized = <A>(value: A): Synchronized.SynchronizedRef<A> => {
  const ref = internalRef.unsafeMake(value)
  const sem = unsafeMakeSemaphore(1)
  return new SynchronizedImpl(ref, sem.withPermits(1))
}

/** @internal */
export const updateSomeAndGetEffectSynchronized = dual<
  <A, R, E>(
    pf: (a: A) => Option.Option<Effect.Effect<A, E, R>>
  ) => (self: Synchronized.SynchronizedRef<A>) => Effect.Effect<A, E, R>,
  <A, R, E>(
    self: Synchronized.SynchronizedRef<A>,
    pf: (a: A) => Option.Option<Effect.Effect<A, E, R>>
  ) => Effect.Effect<A, E, R>
>(2, (self, pf) =>
  self.modifyEffect((value) => {
    const result = pf(value)
    switch (result._tag) {
      case "None": {
        return core.succeed([value, value] as const)
      }
      case "Some": {
        return core.map(result.value, (a) => [a, a] as const)
      }
    }
  }))

// circular with Fiber

/** @internal */
export const zipFiber = dual<
  <A2, E2>(that: Fiber.Fiber<A2, E2>) => <A, E>(self: Fiber.Fiber<A, E>) => Fiber.Fiber<[A, A2], E | E2>,
  <A, E, A2, E2>(self: Fiber.Fiber<A, E>, that: Fiber.Fiber<A2, E2>) => Fiber.Fiber<[A, A2], E | E2>
>(2, (self, that) => zipWithFiber(self, that, (a, b) => [a, b]))

/** @internal */
export const zipLeftFiber = dual<
  <A2, E2>(that: Fiber.Fiber<A2, E2>) => <A, E>(self: Fiber.Fiber<A, E>) => Fiber.Fiber<A, E | E2>,
  <A, E, A2, E2>(self: Fiber.Fiber<A, E>, that: Fiber.Fiber<A2, E2>) => Fiber.Fiber<A, E | E2>
>(2, (self, that) => zipWithFiber(self, that, (a, _) => a))

/** @internal */
export const zipRightFiber = dual<
  <A2, E2>(that: Fiber.Fiber<A2, E2>) => <A, E>(self: Fiber.Fiber<A, E>) => Fiber.Fiber<A2, E | E2>,
  <A, E, A2, E2>(self: Fiber.Fiber<A, E>, that: Fiber.Fiber<A2, E2>) => Fiber.Fiber<A2, E | E2>
>(2, (self, that) => zipWithFiber(self, that, (_, b) => b))

/** @internal */
export const zipWithFiber = dual<
  <B, E2, A, C>(
    that: Fiber.Fiber<B, E2>,
    f: (a: A, b: B) => C
  ) => <E>(self: Fiber.Fiber<A, E>) => Fiber.Fiber<C, E | E2>,
  <A, E, B, E2, C>(
    self: Fiber.Fiber<A, E>,
    that: Fiber.Fiber<B, E2>,
    f: (a: A, b: B) => C
  ) => Fiber.Fiber<C, E | E2>
>(3, (self, that, f) => ({
  ...Effectable.CommitPrototype,
  commit() {
    return internalFiber.join(this)
  },
  [internalFiber.FiberTypeId]: internalFiber.fiberVariance,
  id: () => pipe(self.id(), FiberId.getOrElse(that.id())),
  await: pipe(
    self.await,
    core.flatten,
    fiberRuntime.zipWithOptions(core.flatten(that.await), f, { concurrent: true }),
    core.exit
  ),
  children: self.children,
  inheritAll: core.zipRight(
    that.inheritAll,
    self.inheritAll
  ),
  poll: core.zipWith(
    self.poll,
    that.poll,
    (optionA, optionB) =>
      pipe(
        optionA,
        Option.flatMap((exitA) =>
          pipe(
            optionB,
            Option.map((exitB) =>
              Exit.zipWith(exitA, exitB, {
                onSuccess: f,
                onFailure: internalCause.parallel
              })
            )
          )
        )
      )
  ),
  interruptAsFork: (id) =>
    core.zipRight(
      self.interruptAsFork(id),
      that.interruptAsFork(id)
    ),
  pipe() {
    return pipeArguments(this, arguments)
  }
}))

/* @internal */
export const bindAll: {
  <
    A extends object,
    X extends Record<string, Effect.Effect<any, any, any>>,
    O extends Types.NoExcessProperties<{
      readonly concurrency?: Types.Concurrency | undefined
      readonly batching?: boolean | "inherit" | undefined
      readonly mode?: "default" | "validate" | "either" | undefined
      readonly concurrentFinalizers?: boolean | undefined
    }, O>
  >(
    f: (a: A) => [Extract<keyof X, keyof A>] extends [never] ? X : `Duplicate keys`,
    options?: undefined | O
  ): <E1, R1>(
    self: Effect.Effect<A, E1, R1>
  ) => [Effect.All.ReturnObject<X, false, Effect.All.ExtractMode<O>>] extends
    [Effect.Effect<infer Success, infer Error, infer Context>] ? Effect.Effect<
      {
        [K in keyof A | keyof Success]: K extends keyof A ? A[K]
          : K extends keyof Success ? Success[K]
          : never
      },
      | E1
      | Error,
      R1 | Context
    >
    : never

  <
    A extends object,
    X extends Record<string, Effect.Effect<any, any, any>>,
    O extends Types.NoExcessProperties<{
      readonly concurrency?: Types.Concurrency | undefined
      readonly batching?: boolean | "inherit" | undefined
      readonly mode?: "default" | "validate" | "either" | undefined
      readonly concurrentFinalizers?: boolean | undefined
    }, O>,
    E1,
    R1
  >(
    self: Effect.Effect<A, E1, R1>,
    f: (a: A) => [Extract<keyof X, keyof A>] extends [never] ? X : `Duplicate keys`,
    options?: undefined | {
      readonly concurrency?: Types.Concurrency | undefined
      readonly batching?: boolean | "inherit" | undefined
      readonly mode?: "default" | "validate" | "either" | undefined
      readonly concurrentFinalizers?: boolean | undefined
    }
  ): [Effect.All.ReturnObject<X, false, Effect.All.ExtractMode<O>>] extends
    [Effect.Effect<infer Success, infer Error, infer Context>] ? Effect.Effect<
      {
        [K in keyof A | keyof Success]: K extends keyof A ? A[K]
          : K extends keyof Success ? Success[K]
          : never
      },
      | E1
      | Error,
      R1 | Context
    >
    : never
} = dual((args) => core.isEffect(args[0]), <
  A extends object,
  X extends Record<string, Effect.Effect<any, any, any>>,
  O extends Types.NoExcessProperties<{
    readonly concurrency?: Types.Concurrency | undefined
    readonly batching?: boolean | "inherit" | undefined
    readonly mode?: "default" | "validate" | "either" | undefined
    readonly concurrentFinalizers?: boolean | undefined
  }, O>,
  E1,
  R1
>(
  self: Effect.Effect<A, E1, R1>,
  f: (a: A) => X,
  options?: undefined | O
) =>
  core.flatMap(
    self,
    (a) =>
      (fiberRuntime.all(f(a), options) as Effect.All.ReturnObject<
        X,
        Effect.All.IsDiscard<O>,
        Effect.All.ExtractMode<O>
      >)
        .pipe(
          core.map((record) => Object.assign({}, a, record))
        )
  ))
