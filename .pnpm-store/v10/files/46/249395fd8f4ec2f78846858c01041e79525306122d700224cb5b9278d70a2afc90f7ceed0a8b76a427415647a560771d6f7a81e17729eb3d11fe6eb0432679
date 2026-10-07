import type * as Deferred from "../Deferred.js"
import * as Duration from "../Duration.js"
import type * as Effect from "../Effect.js"
import * as Equal from "../Equal.js"
import { dual, pipe } from "../Function.js"
import * as Hash from "../Hash.js"
import * as HashMap from "../HashMap.js"
import type * as KeyedPool from "../KeyedPool.js"
import * as MutableRef from "../MutableRef.js"
import * as Option from "../Option.js"
import { pipeArguments } from "../Pipeable.js"
import type * as Pool from "../Pool.js"
import * as Predicate from "../Predicate.js"
import type * as Scope from "../Scope.js"
import * as core from "./core.js"
import * as fiberRuntime from "./fiberRuntime.js"
import * as pool from "./pool.js"

/** @internal */
const KeyedPoolSymbolKey = "effect/KeyedPool"

/** @internal */
export const KeyedPoolTypeId: KeyedPool.KeyedPoolTypeId = Symbol.for(
  KeyedPoolSymbolKey
) as KeyedPool.KeyedPoolTypeId

const KeyedPoolMapValueSymbol = Symbol.for("effect/KeyedPool/MapValue")
type KeyedPoolMapValueSymbol = typeof KeyedPoolMapValueSymbol

const keyedPoolVariance = {
  /* c8 ignore next */
  _K: (_: unknown) => _,
  /* c8 ignore next */
  _E: (_: never) => _,
  /* c8 ignore next */
  _A: (_: any) => _
}

class KeyedPoolImpl<in K, in out A, out E = never> implements KeyedPool.KeyedPool<K, A, E> {
  readonly [KeyedPoolTypeId] = keyedPoolVariance
  constructor(
    readonly getOrCreatePool: (key: K) => Effect.Effect<Pool.Pool<A, E>>,
    readonly activePools: Effect.Effect<Array<Pool.Pool<A, E>>>
  ) {}
  get(key: K): Effect.Effect<A, E, Scope.Scope> {
    return core.flatMap(this.getOrCreatePool(key), pool.get)
  }
  invalidate(item: A): Effect.Effect<void> {
    return core.flatMap(this.activePools, core.forEachSequentialDiscard((pool) => pool.invalidate(item)))
  }
  pipe() {
    return pipeArguments(this, arguments)
  }
}

type MapValue<A, E> = Complete<A, E> | Pending<A, E>

class Complete<in out A, out E> implements Equal.Equal {
  readonly _tag = "Complete"
  readonly [KeyedPoolMapValueSymbol]: KeyedPoolMapValueSymbol = KeyedPoolMapValueSymbol
  constructor(readonly pool: Pool.Pool<A, E>) {}
  [Hash.symbol](): number {
    return pipe(
      Hash.string("effect/KeyedPool/Complete"),
      Hash.combine(Hash.hash(this.pool)),
      Hash.cached(this)
    )
  }
  [Equal.symbol](u: unknown): boolean {
    return isComplete(u) && Equal.equals(this.pool, u.pool)
  }
}

const isComplete = (u: unknown): u is Complete<unknown, unknown> =>
  Predicate.isTagged(u, "Complete") && KeyedPoolMapValueSymbol in u

class Pending<in out A, in out E> implements Equal.Equal {
  readonly _tag = "Pending"
  readonly [KeyedPoolMapValueSymbol]: KeyedPoolMapValueSymbol = KeyedPoolMapValueSymbol
  constructor(readonly deferred: Deferred.Deferred<Pool.Pool<A, E>>) {}
  [Hash.symbol](): number {
    return pipe(
      Hash.string("effect/KeyedPool/Pending"),
      Hash.combine(Hash.hash(this.deferred)),
      Hash.cached(this)
    )
  }
  [Equal.symbol](u: unknown): boolean {
    return isPending(u) && Equal.equals(this.deferred, u.deferred)
  }
}

const isPending = (u: unknown): u is Pending<unknown, unknown> =>
  Predicate.isTagged(u, "Pending") && KeyedPoolMapValueSymbol in u

const makeImpl = <K, A, E, R>(
  get: (key: K) => Effect.Effect<A, E, R>,
  min: (key: K) => number,
  max: (key: K) => number,
  timeToLive: (key: K) => Option.Option<Duration.Duration>
): Effect.Effect<KeyedPool.KeyedPool<K, A, E>, never, R | Scope.Scope> =>
  pipe(
    fiberRuntime.all([
      core.context<R>(),
      core.fiberId,
      core.sync(() => MutableRef.make(HashMap.empty<K, MapValue<A, E>>())),
      fiberRuntime.scopeMake()
    ]),
    core.map(([context, fiberId, map, scope]) => {
      const getOrCreatePool = (key: K): Effect.Effect<Pool.Pool<A, E>> =>
        core.suspend(() => {
          let value: MapValue<A, E> | undefined = Option.getOrUndefined(HashMap.get(MutableRef.get(map), key))
          if (value === undefined) {
            return core.uninterruptibleMask((restore) => {
              const deferred = core.deferredUnsafeMake<Pool.Pool<A, E>>(fiberId)
              value = new Pending(deferred)
              let previous: MapValue<A, E> | undefined = undefined
              if (HashMap.has(MutableRef.get(map), key)) {
                previous = Option.getOrUndefined(HashMap.get(MutableRef.get(map), key))
              } else {
                MutableRef.update(map, HashMap.set(key, value as MapValue<A, E>))
              }
              if (previous === undefined) {
                return pipe(
                  restore(
                    fiberRuntime.scopeExtend(
                      pool.makeWithTTL({
                        acquire: core.provideContext(get(key), context),
                        min: min(key),
                        max: max(key),
                        timeToLive: Option.getOrElse(timeToLive(key), () => Duration.infinity)
                      }),
                      scope
                    )
                  ),
                  core.matchCauseEffect({
                    onFailure: (cause) => {
                      const current = Option.getOrUndefined(HashMap.get(MutableRef.get(map), key))
                      if (Equal.equals(current, value)) {
                        MutableRef.update(map, HashMap.remove(key))
                      }
                      return core.zipRight(
                        core.deferredFailCause(deferred, cause),
                        core.failCause(cause)
                      )
                    },
                    onSuccess: (pool) => {
                      MutableRef.update(map, HashMap.set(key, new Complete(pool) as MapValue<A, E>))
                      return core.as(
                        core.deferredSucceed(deferred, pool),
                        pool
                      )
                    }
                  })
                )
              }
              switch (previous._tag) {
                case "Complete": {
                  return core.succeed(previous.pool)
                }
                case "Pending": {
                  return restore(core.deferredAwait(previous.deferred))
                }
              }
            })
          }
          switch (value._tag) {
            case "Complete": {
              return core.succeed(value.pool)
            }
            case "Pending": {
              return core.deferredAwait(value.deferred)
            }
          }
        })
      const activePools: Effect.Effect<Array<Pool.Pool<A, E>>> = core.suspend(() =>
        core.forEachSequential(HashMap.toValues(MutableRef.get(map)), (value) => {
          switch (value._tag) {
            case "Complete": {
              return core.succeed(value.pool)
            }
            case "Pending": {
              return core.deferredAwait(value.deferred)
            }
          }
        })
      )
      return new KeyedPoolImpl(getOrCreatePool, activePools)
    })
  )

/** @internal */
export const make = <K, A, E, R>(
  options: {
    readonly acquire: (key: K) => Effect.Effect<A, E, R>
    readonly size: number
  }
): Effect.Effect<KeyedPool.KeyedPool<K, A, E>, never, R | Scope.Scope> =>
  makeImpl(options.acquire, () => options.size, () => options.size, () => Option.none())

/** @internal */
export const makeWith = <K, A, E, R>(
  options: {
    readonly acquire: (key: K) => Effect.Effect<A, E, R>
    readonly size: (key: K) => number
  }
): Effect.Effect<KeyedPool.KeyedPool<K, A, E>, never, R | Scope.Scope> =>
  makeImpl(options.acquire, options.size, options.size, () => Option.none())

/** @internal */
export const makeWithTTL = <K, A, E, R>(
  options: {
    readonly acquire: (key: K) => Effect.Effect<A, E, R>
    readonly min: (key: K) => number
    readonly max: (key: K) => number
    readonly timeToLive: Duration.DurationInput
  }
): Effect.Effect<KeyedPool.KeyedPool<K, A, E>, never, R | Scope.Scope> => {
  const timeToLive = Duration.decode(options.timeToLive)
  return makeImpl(options.acquire, options.min, options.max, () => Option.some(timeToLive))
}

/** @internal */
export const makeWithTTLBy = <K, A, E, R>(
  options: {
    readonly acquire: (key: K) => Effect.Effect<A, E, R>
    readonly min: (key: K) => number
    readonly max: (key: K) => number
    readonly timeToLive: (key: K) => Duration.DurationInput
  }
): Effect.Effect<KeyedPool.KeyedPool<K, A, E>, never, R | Scope.Scope> =>
  makeImpl(options.acquire, options.min, options.max, (key) => Option.some(Duration.decode(options.timeToLive(key))))

/** @internal */
export const get = dual<
  <K>(key: K) => <A, E>(self: KeyedPool.KeyedPool<K, A, E>) => Effect.Effect<A, E, Scope.Scope>,
  <K, A, E>(self: KeyedPool.KeyedPool<K, A, E>, key: K) => Effect.Effect<A, E, Scope.Scope>
>(2, (self, key) => self.get(key))

/** @internal */
export const invalidate = dual<
  <A>(item: A) => <K, E>(self: KeyedPool.KeyedPool<K, A, E>) => Effect.Effect<void>,
  <K, A, E>(self: KeyedPool.KeyedPool<K, A, E>, item: A) => Effect.Effect<void>
>(2, (self, item) => self.invalidate(item))
