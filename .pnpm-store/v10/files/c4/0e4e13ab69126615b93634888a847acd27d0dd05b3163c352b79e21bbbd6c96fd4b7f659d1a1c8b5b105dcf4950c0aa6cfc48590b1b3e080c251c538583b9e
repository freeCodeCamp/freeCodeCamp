import type * as Cause from "../Cause.js"
import * as Context from "../Context.js"
import type * as Deferred from "../Deferred.js"
import * as Duration from "../Duration.js"
import type { Effect } from "../Effect.js"
import type { RuntimeFiber } from "../Fiber.js"
import { constant, dual, flow, identity } from "../Function.js"
import * as MutableHashMap from "../MutableHashMap.js"
import { pipeArguments } from "../Pipeable.js"
import type * as RcMap from "../RcMap.js"
import type * as Scope from "../Scope.js"
import * as coreEffect from "./core-effect.js"
import * as core from "./core.js"
import * as circular from "./effect/circular.js"
import * as fiberRuntime from "./fiberRuntime.js"

/** @internal */
export const TypeId: RcMap.TypeId = Symbol.for("effect/RcMap") as RcMap.TypeId

type State<K, A, E> = State.Open<K, A, E> | State.Closed

declare namespace State {
  interface Open<K, A, E> {
    readonly _tag: "Open"
    readonly map: MutableHashMap.MutableHashMap<K, Entry<A, E>>
  }

  interface Closed {
    readonly _tag: "Closed"
  }

  interface Entry<A, E> {
    readonly deferred: Deferred.Deferred<A, E>
    readonly scope: Scope.CloseableScope
    readonly finalizer: Effect<void>
    readonly idleTimeToLive: Duration.Duration
    fiber: RuntimeFiber<void, never> | undefined
    expiresAt: number
    refCount: number
  }
}

const variance: RcMap.RcMap.Variance<any, any, any> = {
  _K: identity,
  _A: identity,
  _E: identity
}

class RcMapImpl<K, A, E> implements RcMap.RcMap<K, A, E> {
  readonly [TypeId]: RcMap.RcMap.Variance<K, A, E>

  state: State<K, A, E> = {
    _tag: "Open",
    map: MutableHashMap.empty()
  }
  readonly semaphore = circular.unsafeMakeSemaphore(1)

  constructor(
    readonly lookup: (key: K) => Effect<A, E, Scope.Scope>,
    readonly context: Context.Context<never>,
    readonly scope: Scope.Scope,
    readonly idleTimeToLive: ((key: K) => Duration.Duration) | undefined,
    readonly capacity: number
  ) {
    this[TypeId] = variance
  }

  pipe() {
    return pipeArguments(this, arguments)
  }
}

/** @internal */
export const make: {
  <K, A, E, R>(options: {
    readonly lookup: (key: K) => Effect<A, E, R>
    readonly idleTimeToLive?: Duration.DurationInput | ((key: K) => Duration.DurationInput) | undefined
    readonly capacity?: undefined
  }): Effect<RcMap.RcMap<K, A, E>, never, Scope.Scope | R>
  <K, A, E, R>(options: {
    readonly lookup: (key: K) => Effect<A, E, R>
    readonly idleTimeToLive?: Duration.DurationInput | ((key: K) => Duration.DurationInput) | undefined
    readonly capacity: number
  }): Effect<RcMap.RcMap<K, A, E | Cause.ExceededCapacityException>, never, Scope.Scope | R>
} = <K, A, E, R>(options: {
  readonly lookup: (key: K) => Effect<A, E, R>
  readonly idleTimeToLive?: Duration.DurationInput | ((key: K) => Duration.DurationInput) | undefined
  readonly capacity?: number | undefined
}) =>
  core.withFiberRuntime<RcMap.RcMap<K, A, E>, never, R | Scope.Scope>((fiber) => {
    const context = fiber.getFiberRef(core.currentContext) as Context.Context<R | Scope.Scope>
    const scope = Context.get(context, fiberRuntime.scopeTag)
    const idleTimeToLive = options.idleTimeToLive === undefined
      ? undefined
      : typeof options.idleTimeToLive === "function"
      ? flow(options.idleTimeToLive, Duration.decode)
      : constant(Duration.decode(options.idleTimeToLive))
    const self = new RcMapImpl<K, A, E>(
      options.lookup as any,
      context,
      scope,
      idleTimeToLive,
      Math.max(options.capacity ?? Number.POSITIVE_INFINITY, 0)
    )
    return core.as(
      scope.addFinalizer(() =>
        core.suspend(() => {
          if (self.state._tag === "Closed") {
            return core.void
          }
          const map = self.state.map
          self.state = { _tag: "Closed" }
          return core.forEachSequentialDiscard(
            map,
            ([, entry]) => core.scopeClose(entry.scope, core.exitVoid)
          ).pipe(
            core.tap(() => {
              MutableHashMap.clear(map)
            }),
            self.semaphore.withPermits(1)
          )
        })
      ),
      self
    )
  })

/** @internal */
export const get: {
  <K>(key: K): <A, E>(self: RcMap.RcMap<K, A, E>) => Effect<A, E, Scope.Scope>
  <K, A, E>(self: RcMap.RcMap<K, A, E>, key: K): Effect<A, E, Scope.Scope>
} = dual(2, <K, A, E>(self_: RcMap.RcMap<K, A, E>, key: K): Effect<A, E, Scope.Scope> => {
  const self = self_ as RcMapImpl<K, A, E>
  return core.uninterruptibleMask((restore) => getImpl(self, key, restore as any))
})

const getImpl = core.fnUntraced(function*<K, A, E>(self: RcMapImpl<K, A, E>, key: K, restore: <A>(a: A) => A) {
  if (self.state._tag === "Closed") {
    return yield* core.interrupt
  }
  const state = self.state
  const o = MutableHashMap.get(state.map, key)
  let entry: State.Entry<A, E>
  if (o._tag === "Some") {
    entry = o.value
    entry.refCount++
  } else if (Number.isFinite(self.capacity) && MutableHashMap.size(self.state.map) >= self.capacity) {
    return yield* core.fail(
      new core.ExceededCapacityException(`RcMap attempted to exceed capacity of ${self.capacity}`)
    ) as Effect<never>
  } else {
    entry = yield* self.semaphore.withPermits(1)(acquire(self, key, restore))
  }
  const scope = yield* fiberRuntime.scopeTag
  yield* scope.addFinalizer(() => entry.finalizer)
  return yield* restore(core.deferredAwait(entry.deferred))
})

const acquire = core.fnUntraced(function*<K, A, E>(self: RcMapImpl<K, A, E>, key: K, restore: <A>(a: A) => A) {
  const scope = yield* fiberRuntime.scopeMake()
  const deferred = yield* core.deferredMake<A, E>()
  const acquire = self.lookup(key)
  const contextMap = new Map(self.context.unsafeMap)
  yield* restore(core.mapInputContext(
    acquire as Effect<A, E>,
    (inputContext: Context.Context<never>) => {
      inputContext.unsafeMap.forEach((value, key) => {
        contextMap.set(key, value)
      })
      contextMap.set(fiberRuntime.scopeTag.key, scope)
      return Context.unsafeMake(contextMap)
    }
  )).pipe(
    core.exit,
    core.flatMap((exit) => core.deferredDone(deferred, exit)),
    circular.forkIn(scope)
  )
  const idleTimeToLive = self.idleTimeToLive ? self.idleTimeToLive(key) : Duration.zero
  const entry: State.Entry<A, E> = {
    deferred,
    scope,
    finalizer: undefined as any,
    idleTimeToLive,
    fiber: undefined,
    expiresAt: 0,
    refCount: 1
  }
  ;(entry as any).finalizer = release(self, key, entry)
  if (self.state._tag === "Open") {
    MutableHashMap.set(self.state.map, key, entry)
  }
  return entry
})

const release = <K, A, E>(self: RcMapImpl<K, A, E>, key: K, entry: State.Entry<A, E>) =>
  coreEffect.clockWith((clock) => {
    entry.refCount--
    if (entry.refCount > 0) {
      return core.void
    } else if (
      self.state._tag === "Closed"
      || !MutableHashMap.has(self.state.map, key)
      || Duration.isZero(entry.idleTimeToLive)
    ) {
      if (self.state._tag === "Open") {
        MutableHashMap.remove(self.state.map, key)
      }
      return core.scopeClose(entry.scope, core.exitVoid)
    }

    if (!Duration.isFinite(entry.idleTimeToLive)) {
      return core.void
    }

    entry.expiresAt = clock.unsafeCurrentTimeMillis() + Duration.toMillis(entry.idleTimeToLive)
    if (entry.fiber) return core.void

    return core.interruptibleMask(function loop(restore): Effect<void> {
      const now = clock.unsafeCurrentTimeMillis()
      const remaining = entry.expiresAt - now
      if (remaining <= 0) {
        if (self.state._tag === "Closed" || entry.refCount > 0) return core.void
        MutableHashMap.remove(self.state.map, key)
        return restore(core.scopeClose(entry.scope, core.exitVoid))
      }
      return core.flatMap(clock.sleep(Duration.millis(remaining)), () => loop(restore))
    }).pipe(
      fiberRuntime.ensuring(core.sync(() => {
        entry.fiber = undefined
      })),
      circular.forkIn(self.scope),
      core.tap((fiber) => {
        entry.fiber = fiber
      }),
      self.semaphore.withPermits(1)
    )
  })

/** @internal */
export const keys = <K, A, E>(self: RcMap.RcMap<K, A, E>): Effect<Array<K>> => {
  const impl = self as RcMapImpl<K, A, E>
  return core.suspend(() =>
    impl.state._tag === "Closed" ? core.interrupt : core.succeed(MutableHashMap.keys(impl.state.map))
  )
}

/** @internal */
export const invalidate: {
  <K>(key: K): <A, E>(self: RcMap.RcMap<K, A, E>) => Effect<void>
  <K, A, E>(self: RcMap.RcMap<K, A, E>, key: K): Effect<void>
} = dual(
  2,
  core.fnUntraced(function*<K, A, E>(self_: RcMap.RcMap<K, A, E>, key: K) {
    const self = self_ as RcMapImpl<K, A, E>
    if (self.state._tag === "Closed") return
    const o = MutableHashMap.get(self.state.map, key)
    if (o._tag === "None") return
    const entry = o.value
    MutableHashMap.remove(self.state.map, key)
    if (entry.refCount > 0) return
    yield* core.scopeClose(entry.scope, core.exitVoid)
    if (entry.fiber) yield* core.interruptFiber(entry.fiber)
  })
)

/** @internal */
export const has: {
  <K>(key: K): <A, E>(self: RcMap.RcMap<K, A, E>) => Effect<boolean>
  <K, A, E>(self: RcMap.RcMap<K, A, E>, key: K): Effect<boolean>
} = dual(2, <K, A, E>(self_: RcMap.RcMap<K, A, E>, key: K): Effect<boolean> => {
  const self = self_ as RcMapImpl<K, A, E>
  return core.sync(() => {
    if (self.state._tag === "Closed") return false
    return MutableHashMap.has(self.state.map, key)
  })
})

/** @internal */
export const touch: {
  <K>(key: K): <A, E>(self: RcMap.RcMap<K, A, E>) => Effect<void>
  <K, A, E>(self: RcMap.RcMap<K, A, E>, key: K): Effect<void>
} = dual(
  2,
  <K, A, E>(self_: RcMap.RcMap<K, A, E>, key: K) =>
    coreEffect.clockWith((clock) => {
      const self = self_ as RcMapImpl<K, A, E>
      if (self.state._tag === "Closed") return core.void
      const o = MutableHashMap.get(self.state.map, key)
      if (o._tag === "None") return core.void
      const entry = o.value
      if (Duration.isZero(entry.idleTimeToLive)) return core.void
      entry.expiresAt = clock.unsafeCurrentTimeMillis() + Duration.toMillis(entry.idleTimeToLive)
      return core.void
    })
)
