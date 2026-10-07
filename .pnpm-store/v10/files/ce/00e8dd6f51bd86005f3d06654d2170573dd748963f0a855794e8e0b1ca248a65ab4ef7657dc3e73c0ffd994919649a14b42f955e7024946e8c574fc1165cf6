import type * as Cache from "../Cache.js"
import type * as Clock from "../Clock.js"
import * as Context from "../Context.js"
import * as Data from "../Data.js"
import * as Duration from "../Duration.js"
import type * as Effect from "../Effect.js"
import * as Equal from "../Equal.js"
import * as Exit from "../Exit.js"
import { pipe } from "../Function.js"
import * as HashSet from "../HashSet.js"
import * as MutableHashMap from "../MutableHashMap.js"
import * as MutableQueue from "../MutableQueue.js"
import * as MutableRef from "../MutableRef.js"
import * as Option from "../Option.js"
import { pipeArguments } from "../Pipeable.js"
import * as Scope from "../Scope.js"
import type * as ScopedCache from "../ScopedCache.js"
import * as cache_ from "./cache.js"
import * as effect from "./core-effect.js"
import * as core from "./core.js"
import * as fiberRuntime from "./fiberRuntime.js"

/**
 * The `CacheState` represents the mutable state underlying the cache.
 *
 * @internal
 */
export interface CacheState<in out Key, out Value, out Error = never> {
  map: MutableHashMap.MutableHashMap<Key, MapValue<Key, Value, Error>> // mutable by design
  keys: cache_.KeySet<Key> // mutable by design
  accesses: MutableQueue.MutableQueue<cache_.MapKey<Key>> // mutable by design
  updating: MutableRef.MutableRef<boolean> // mutable by design
  hits: number // mutable by design
  misses: number // mutable by design
}

/** @internal */
export const makeCacheState = <Key, Value, Error = never>(
  map: MutableHashMap.MutableHashMap<Key, MapValue<Key, Value, Error>>,
  keys: cache_.KeySet<Key>,
  accesses: MutableQueue.MutableQueue<cache_.MapKey<Key>>,
  updating: MutableRef.MutableRef<boolean>,
  hits: number,
  misses: number
): CacheState<Key, Value, Error> => ({
  map,
  keys,
  accesses,
  updating,
  hits,
  misses
})

/**
 * Constructs an initial cache state.
 *
 * @internal
 */
export const initialCacheState = <Key, Value, Error = never>(): CacheState<Key, Value, Error> =>
  makeCacheState(
    MutableHashMap.empty(),
    cache_.makeKeySet(),
    MutableQueue.unbounded(),
    MutableRef.make(false),
    0,
    0
  )

/**
 * A `MapValue` represents a value in the cache. A value may either be
 * `Pending` with a `Promise` that will contain the result of computing the
 * lookup function, when it is available, or `Complete` with an `Exit` value
 * that contains the result of computing the lookup function.
 *
 * @internal
 */
export type MapValue<Key, Value, Error> =
  | Complete<Key, Value, Error>
  | Pending<Key, Value, Error>
  | Refreshing<Key, Value, Error>

/** @internal */
export interface Complete<out Key, out Value, out Error> {
  readonly _tag: "Complete"
  readonly key: cache_.MapKey<Key>
  readonly exit: Exit.Exit<readonly [Value, Scope.Scope.Finalizer], Error>
  readonly ownerCount: MutableRef.MutableRef<number>
  readonly entryStats: Cache.EntryStats
  readonly timeToLive: number
}

/** @internal */
export interface Pending<out Key, out Value, out Error> {
  readonly _tag: "Pending"
  readonly key: cache_.MapKey<Key>
  readonly scoped: Effect.Effect<Effect.Effect<Value, Error, Scope.Scope>>
}

/** @internal */
export interface Refreshing<out Key, out Value, out Error> {
  readonly _tag: "Refreshing"
  readonly scoped: Effect.Effect<Effect.Effect<Value, Error, Scope.Scope>>
  readonly complete: Complete<Key, Value, Error>
}

/** @internal */
export const complete = <Key, Value, Error = never>(
  key: cache_.MapKey<Key>,
  exit: Exit.Exit<readonly [Value, Scope.Scope.Finalizer], Error>,
  ownerCount: MutableRef.MutableRef<number>,
  entryStats: Cache.EntryStats,
  timeToLive: number
): Complete<Key, Value, Error> =>
  Data.struct({
    _tag: "Complete",
    key,
    exit,
    ownerCount,
    entryStats,
    timeToLive
  })

/** @internal */
export const pending = <Key, Value, Error = never>(
  key: cache_.MapKey<Key>,
  scoped: Effect.Effect<Effect.Effect<Value, Error, Scope.Scope>>
): Pending<Key, Value, Error> =>
  Data.struct({
    _tag: "Pending",
    key,
    scoped
  })

/** @internal */
export const refreshing = <Key, Value, Error = never>(
  scoped: Effect.Effect<Effect.Effect<Value, Error, Scope.Scope>>,
  complete: Complete<Key, Value, Error>
): Refreshing<Key, Value, Error> =>
  Data.struct({
    _tag: "Refreshing",
    scoped,
    complete
  })

/** @internal */
export const toScoped = <Key, Value, Error = never>(
  self: Complete<Key, Value, Error>
): Effect.Effect<Value, Error, Scope.Scope> =>
  Exit.matchEffect(self.exit, {
    onFailure: (cause) => core.failCause(cause),
    onSuccess: ([value]) =>
      fiberRuntime.acquireRelease(
        core.as(core.sync(() => MutableRef.incrementAndGet(self.ownerCount)), value),
        () => releaseOwner(self)
      )
  })

/** @internal */
export const releaseOwner = <Key, Value, Error = never>(
  self: Complete<Key, Value, Error>
): Effect.Effect<void> =>
  Exit.matchEffect(self.exit, {
    onFailure: () => core.void,
    onSuccess: ([, finalizer]) =>
      core.flatMap(
        core.sync(() => MutableRef.decrementAndGet(self.ownerCount)),
        (numOwner) => effect.when(finalizer(Exit.void), () => numOwner === 0)
      )
  })

/** @internal */
const ScopedCacheSymbolKey = "effect/ScopedCache"

/** @internal */
export const ScopedCacheTypeId: ScopedCache.ScopedCacheTypeId = Symbol.for(
  ScopedCacheSymbolKey
) as ScopedCache.ScopedCacheTypeId

const scopedCacheVariance = {
  /* c8 ignore next */
  _Key: (_: unknown) => _,
  /* c8 ignore next */
  _Error: (_: never) => _,
  /* c8 ignore next */
  _Value: (_: never) => _
}

class ScopedCacheImpl<in out Key, in out Environment, in out Error, in out Value>
  implements ScopedCache.ScopedCache<Key, Value, Error>
{
  readonly [ScopedCacheTypeId] = scopedCacheVariance
  readonly cacheState: CacheState<Key, Value, Error>
  constructor(
    readonly capacity: number,
    readonly scopedLookup: ScopedCache.Lookup<Key, Value, Error, Environment>,
    readonly clock: Clock.Clock,
    readonly timeToLive: (exit: Exit.Exit<Value, Error>) => Duration.Duration,
    readonly context: Context.Context<Environment>
  ) {
    this.cacheState = initialCacheState()
  }

  pipe() {
    return pipeArguments(this, arguments)
  }

  get cacheStats(): Effect.Effect<Cache.CacheStats> {
    return core.sync(() =>
      cache_.makeCacheStats({
        hits: this.cacheState.hits,
        misses: this.cacheState.misses,
        size: MutableHashMap.size(this.cacheState.map)
      })
    )
  }

  getOption(key: Key): Effect.Effect<Option.Option<Value>, Error, Scope.Scope> {
    return core.suspend(() =>
      Option.match(MutableHashMap.get(this.cacheState.map, key), {
        onNone: () => effect.succeedNone,
        onSome: (value) => core.flatten(this.resolveMapValue(value))
      })
    )
  }

  getOptionComplete(key: Key): Effect.Effect<Option.Option<Value>, never, Scope.Scope> {
    return core.suspend(() =>
      Option.match(MutableHashMap.get(this.cacheState.map, key), {
        onNone: () => effect.succeedNone,
        onSome: (value) =>
          core.flatten(this.resolveMapValue(value, true)) as Effect.Effect<Option.Option<Value>, never, Scope.Scope>
      })
    )
  }

  contains(key: Key): Effect.Effect<boolean> {
    return core.sync(() => MutableHashMap.has(this.cacheState.map, key))
  }

  entryStats(key: Key): Effect.Effect<Option.Option<Cache.EntryStats>> {
    return core.sync(() => {
      const value = Option.getOrUndefined(MutableHashMap.get(this.cacheState.map, key))
      if (value === undefined) {
        return Option.none()
      }
      switch (value._tag) {
        case "Complete": {
          return Option.some(cache_.makeEntryStats(value.entryStats.loadedMillis))
        }
        case "Pending": {
          return Option.none()
        }
        case "Refreshing": {
          return Option.some(cache_.makeEntryStats(value.complete.entryStats.loadedMillis))
        }
      }
    })
  }

  get(key: Key): Effect.Effect<Value, Error, Scope.Scope> {
    return pipe(
      this.lookupValueOf(key),
      effect.memoize,
      core.flatMap((lookupValue) =>
        core.suspend(() => {
          let k: cache_.MapKey<Key> | undefined = undefined
          let value = Option.getOrUndefined(MutableHashMap.get(this.cacheState.map, key))
          if (value === undefined) {
            k = cache_.makeMapKey(key)
            if (MutableHashMap.has(this.cacheState.map, key)) {
              value = Option.getOrUndefined(MutableHashMap.get(this.cacheState.map, key))
            } else {
              MutableHashMap.set(this.cacheState.map, key, pending(k, lookupValue))
            }
          }
          if (value === undefined) {
            this.trackMiss()
            return core.zipRight(
              this.ensureMapSizeNotExceeded(k!),
              lookupValue
            )
          }

          return core.map(
            this.resolveMapValue(value),
            core.flatMap(Option.match({
              onNone: () => {
                const val = value as Complete<Key, Value, Error>
                const current = Option.getOrUndefined(MutableHashMap.get(this.cacheState.map, key))
                if (Equal.equals(current, value)) {
                  MutableHashMap.remove(this.cacheState.map, key)
                }
                return pipe(
                  this.ensureMapSizeNotExceeded(val.key),
                  core.zipRight(releaseOwner(val)),
                  core.zipRight(this.get(key))
                )
              },
              onSome: core.succeed
            }))
          )
        })
      ),
      core.flatten
    )
  }

  invalidate(key: Key): Effect.Effect<void> {
    return core.suspend(() => {
      if (MutableHashMap.has(this.cacheState.map, key)) {
        const mapValue = Option.getOrUndefined(MutableHashMap.get(this.cacheState.map, key))!
        MutableHashMap.remove(this.cacheState.map, key)
        switch (mapValue._tag) {
          case "Complete": {
            return releaseOwner(mapValue)
          }
          case "Pending": {
            return core.void
          }
          case "Refreshing": {
            return releaseOwner(mapValue.complete)
          }
        }
      }
      return core.void
    })
  }

  get invalidateAll(): Effect.Effect<void> {
    return fiberRuntime.forEachConcurrentDiscard(
      HashSet.fromIterable(Array.from(this.cacheState.map).map(([key]) => key)),
      (key) => this.invalidate(key),
      false,
      false
    )
  }

  refresh(key: Key): Effect.Effect<void, Error> {
    return pipe(
      this.lookupValueOf(key),
      effect.memoize,
      core.flatMap((scoped) => {
        let value = Option.getOrUndefined(MutableHashMap.get(this.cacheState.map, key))
        let newKey: cache_.MapKey<Key> | undefined = undefined
        if (value === undefined) {
          newKey = cache_.makeMapKey(key)
          if (MutableHashMap.has(this.cacheState.map, key)) {
            value = Option.getOrUndefined(MutableHashMap.get(this.cacheState.map, key))
          } else {
            MutableHashMap.set(this.cacheState.map, key, pending(newKey, scoped))
          }
        }
        let finalScoped: Effect.Effect<Effect.Effect<Value, Error, Scope.Scope>>
        if (value === undefined) {
          finalScoped = core.zipRight(
            this.ensureMapSizeNotExceeded(newKey!),
            scoped
          )
        } else {
          switch (value._tag) {
            case "Complete": {
              if (this.hasExpired(value.timeToLive)) {
                finalScoped = core.succeed(this.get(key))
              } else {
                const current = Option.getOrUndefined(MutableHashMap.get(this.cacheState.map, key))
                if (Equal.equals(current, value)) {
                  const mapValue = refreshing(scoped, value)
                  MutableHashMap.set(this.cacheState.map, key, mapValue)
                  finalScoped = scoped
                } else {
                  finalScoped = core.succeed(this.get(key))
                }
              }
              break
            }
            case "Pending": {
              finalScoped = value.scoped
              break
            }
            case "Refreshing": {
              finalScoped = value.scoped
              break
            }
          }
        }
        return core.flatMap(finalScoped, (s) => fiberRuntime.scopedEffect(core.asVoid(s)))
      })
    )
  }

  get size(): Effect.Effect<number> {
    return core.sync(() => MutableHashMap.size(this.cacheState.map))
  }

  resolveMapValue(
    value: MapValue<Key, Value, Error>,
    ignorePending = false
  ): Effect.Effect<Effect.Effect<Option.Option<Value>, Error, Scope.Scope>> {
    switch (value._tag) {
      case "Complete": {
        this.trackHit()
        if (this.hasExpired(value.timeToLive)) {
          return core.succeed(effect.succeedNone)
        }
        return core.as(
          this.ensureMapSizeNotExceeded(value.key),
          effect.asSome(toScoped(value))
        )
      }
      case "Pending": {
        this.trackHit()

        if (ignorePending) {
          return core.succeed(effect.succeedNone)
        }

        return core.zipRight(
          this.ensureMapSizeNotExceeded(value.key),
          core.map(value.scoped, effect.asSome)
        )
      }
      case "Refreshing": {
        this.trackHit()
        if (this.hasExpired(value.complete.timeToLive)) {
          if (ignorePending) {
            return core.succeed(effect.succeedNone)
          }
          return core.zipRight(
            this.ensureMapSizeNotExceeded(value.complete.key),
            core.map(value.scoped, effect.asSome)
          )
        }
        return core.as(
          this.ensureMapSizeNotExceeded(value.complete.key),
          effect.asSome(toScoped(value.complete))
        )
      }
    }
  }

  lookupValueOf(key: Key): Effect.Effect<Effect.Effect<Value, Error, Scope.Scope>> {
    return pipe(
      core.onInterrupt(
        core.flatMap(Scope.make(), (scope) =>
          pipe(
            this.scopedLookup(key),
            core.provideContext(pipe(this.context, Context.add(Scope.Scope, scope))),
            core.exit,
            core.map((exit) => [exit, ((exit) => Scope.close(scope, exit)) as Scope.Scope.Finalizer] as const)
          )),
        () => core.sync(() => MutableHashMap.remove(this.cacheState.map, key))
      ),
      core.flatMap(([exit, release]) => {
        const now = this.clock.unsafeCurrentTimeMillis()
        const expiredAt = now + Duration.toMillis(this.timeToLive(exit))
        switch (exit._tag) {
          case "Success": {
            const exitWithFinalizer: Exit.Exit<[Value, Scope.Scope.Finalizer]> = Exit.succeed([
              exit.value,
              release
            ])
            const completedResult = complete<Key, Value, Error>(
              cache_.makeMapKey(key),
              exitWithFinalizer,
              MutableRef.make(1),
              cache_.makeEntryStats(now),
              expiredAt
            )
            let previousValue: MapValue<Key, Value, Error> | undefined = undefined
            if (MutableHashMap.has(this.cacheState.map, key)) {
              previousValue = Option.getOrUndefined(MutableHashMap.get(this.cacheState.map, key))
            }
            MutableHashMap.set(this.cacheState.map, key, completedResult)
            return core.sync(() =>
              core.flatten(
                core.as(
                  this.cleanMapValue(previousValue),
                  toScoped(completedResult)
                )
              )
            )
          }
          case "Failure": {
            const completedResult = complete<Key, Value, Error>(
              cache_.makeMapKey(key),
              exit as Exit.Exit<readonly [Value, Scope.Scope.Finalizer], Error>,
              MutableRef.make(0),
              cache_.makeEntryStats(now),
              expiredAt
            )
            let previousValue: MapValue<Key, Value, Error> | undefined = undefined
            if (MutableHashMap.has(this.cacheState.map, key)) {
              previousValue = Option.getOrUndefined(MutableHashMap.get(this.cacheState.map, key))
            }
            MutableHashMap.set(this.cacheState.map, key, completedResult)
            return core.zipRight(
              release(exit),
              core.sync(() =>
                core.flatten(
                  core.as(
                    this.cleanMapValue(previousValue),
                    toScoped(completedResult)
                  )
                )
              )
            )
          }
        }
      }),
      effect.memoize,
      core.flatten
    )
  }

  hasExpired(timeToLive: number): boolean {
    return this.clock.unsafeCurrentTimeMillis() > timeToLive
  }

  trackHit(): void {
    this.cacheState.hits = this.cacheState.hits + 1
  }

  trackMiss(): void {
    this.cacheState.misses = this.cacheState.misses + 1
  }

  trackAccess(key: cache_.MapKey<Key>): Array<MapValue<Key, Value, Error>> {
    const cleanedKeys: Array<MapValue<Key, Value, Error>> = []
    MutableQueue.offer(this.cacheState.accesses, key)
    if (MutableRef.compareAndSet(this.cacheState.updating, false, true)) {
      let loop = true
      while (loop) {
        const key = MutableQueue.poll(this.cacheState.accesses, MutableQueue.EmptyMutableQueue)
        if (key === MutableQueue.EmptyMutableQueue) {
          loop = false
        } else {
          this.cacheState.keys.add(key)
        }
      }
      let size = MutableHashMap.size(this.cacheState.map)
      loop = size > this.capacity
      while (loop) {
        const key = this.cacheState.keys.remove()
        if (key === undefined) {
          loop = false
        } else {
          if (MutableHashMap.has(this.cacheState.map, key.current)) {
            const removed = Option.getOrUndefined(MutableHashMap.get(this.cacheState.map, key.current))!
            MutableHashMap.remove(this.cacheState.map, key.current)
            size = size - 1
            cleanedKeys.push(removed)
            loop = size > this.capacity
          }
        }
      }
      MutableRef.set(this.cacheState.updating, false)
    }
    return cleanedKeys
  }

  cleanMapValue(mapValue: MapValue<Key, Value, Error> | undefined): Effect.Effect<void> {
    if (mapValue === undefined) {
      return core.void
    }
    switch (mapValue._tag) {
      case "Complete": {
        return releaseOwner(mapValue)
      }
      case "Pending": {
        return core.void
      }
      case "Refreshing": {
        return releaseOwner(mapValue.complete)
      }
    }
  }

  ensureMapSizeNotExceeded(key: cache_.MapKey<Key>): Effect.Effect<void> {
    return fiberRuntime.forEachConcurrentDiscard(
      this.trackAccess(key),
      (cleanedMapValue) => this.cleanMapValue(cleanedMapValue),
      false,
      false
    )
  }
}

/** @internal */
export const make = <Key, Value, Error = never, Environment = never>(
  options: {
    readonly lookup: ScopedCache.Lookup<Key, Value, Error, Environment>
    readonly capacity: number
    readonly timeToLive: Duration.DurationInput
  }
): Effect.Effect<ScopedCache.ScopedCache<Key, Value, Error>, never, Environment | Scope.Scope> => {
  const timeToLive = Duration.decode(options.timeToLive)
  return makeWith({
    capacity: options.capacity,
    lookup: options.lookup,
    timeToLive: () => timeToLive
  })
}

/** @internal */
export const makeWith = <Key, Value, Error = never, Environment = never>(
  options: {
    readonly capacity: number
    readonly lookup: ScopedCache.Lookup<Key, Value, Error, Environment>
    readonly timeToLive: (exit: Exit.Exit<Value, Error>) => Duration.DurationInput
  }
): Effect.Effect<ScopedCache.ScopedCache<Key, Value, Error>, never, Environment | Scope.Scope> =>
  core.flatMap(
    effect.clock,
    (clock) =>
      buildWith(
        options.capacity,
        options.lookup,
        clock,
        (exit) => Duration.decode(options.timeToLive(exit))
      )
  )

const buildWith = <Key, Value, Error = never, Environment = never>(
  capacity: number,
  scopedLookup: ScopedCache.Lookup<Key, Value, Error, Environment>,
  clock: Clock.Clock,
  timeToLive: (exit: Exit.Exit<Value, Error>) => Duration.Duration
): Effect.Effect<ScopedCache.ScopedCache<Key, Value, Error>, never, Environment | Scope.Scope> =>
  fiberRuntime.acquireRelease(
    core.flatMap(
      core.context<Environment>(),
      (context) =>
        core.sync(() =>
          new ScopedCacheImpl(
            capacity,
            scopedLookup,
            clock,
            timeToLive,
            context
          )
        )
    ),
    (cache) => cache.invalidateAll
  )
