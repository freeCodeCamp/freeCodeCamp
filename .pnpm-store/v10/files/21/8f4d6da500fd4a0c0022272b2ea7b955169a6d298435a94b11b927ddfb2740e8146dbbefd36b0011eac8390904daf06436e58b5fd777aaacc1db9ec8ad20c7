import type * as Cache from "../Cache.js"
import type * as Clock from "../Clock.js"
import * as Context from "../Context.js"
import * as Deferred from "../Deferred.js"
import * as Duration from "../Duration.js"
import type * as Effect from "../Effect.js"
import * as Either from "../Either.js"
import * as Equal from "../Equal.js"
import * as Exit from "../Exit.js"
import type * as FiberId from "../FiberId.js"
import { pipe } from "../Function.js"
import * as Hash from "../Hash.js"
import * as MutableHashMap from "../MutableHashMap.js"
import * as MutableQueue from "../MutableQueue.js"
import * as MutableRef from "../MutableRef.js"
import * as Option from "../Option.js"
import { hasProperty } from "../Predicate.js"
import * as effect from "./core-effect.js"
import * as core from "./core.js"
import * as Data from "./data.js"
import { none } from "./fiberId.js"
import * as fiberRuntime from "./fiberRuntime.js"

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
  readonly key: MapKey<Key>
  readonly exit: Exit.Exit<Value, Error>
  readonly entryStats: Cache.EntryStats
  readonly timeToLiveMillis: number
}

/** @internal */
export interface Pending<out Key, in out Value, in out Error> {
  readonly _tag: "Pending"
  readonly key: MapKey<Key>
  readonly deferred: Deferred.Deferred<Value, Error>
}

/** @internal */
export interface Refreshing<out Key, in out Value, in out Error> {
  readonly _tag: "Refreshing"
  readonly deferred: Deferred.Deferred<Value, Error>
  readonly complete: Complete<Key, Value, Error>
}

/** @internal */
export const complete = <Key, Value, Error>(
  key: MapKey<Key>,
  exit: Exit.Exit<Value, Error>,
  entryStats: Cache.EntryStats,
  timeToLiveMillis: number
): MapValue<Key, Value, Error> =>
  Data.struct({
    _tag: "Complete" as const,
    key,
    exit,
    entryStats,
    timeToLiveMillis
  })

/** @internal */
export const pending = <Key, Value, Error>(
  key: MapKey<Key>,
  deferred: Deferred.Deferred<Value, Error>
): MapValue<Key, Value, Error> =>
  Data.struct({
    _tag: "Pending" as const,
    key,
    deferred
  })

/** @internal */
export const refreshing = <Key, Value, Error>(
  deferred: Deferred.Deferred<Value, Error>,
  complete: Complete<Key, Value, Error>
): MapValue<Key, Value, Error> =>
  Data.struct({
    _tag: "Refreshing" as const,
    deferred,
    complete
  })

/** @internal */
export const MapKeyTypeId = Symbol.for("effect/Cache/MapKey")

/** @internal */
export type MapKeyTypeId = typeof MapKeyTypeId

/**
 * A `MapKey` represents a key in the cache. It contains mutable references
 * to the previous key and next key in the `KeySet` to support an efficient
 * implementation of a sorted set of keys.
 *
 * @internal
 */
export interface MapKey<out K> extends Equal.Equal {
  readonly [MapKeyTypeId]: MapKeyTypeId
  readonly current: K
  previous: MapKey<K> | undefined // mutable by design
  next: MapKey<K> | undefined // mutable by design
}

class MapKeyImpl<out K> implements MapKey<K> {
  readonly [MapKeyTypeId]: MapKeyTypeId = MapKeyTypeId
  previous: MapKey<K> | undefined = undefined
  next: MapKey<K> | undefined = undefined
  constructor(readonly current: K) {}
  [Hash.symbol](): number {
    return pipe(
      Hash.hash(this.current),
      Hash.combine(Hash.hash(this.previous)),
      Hash.combine(Hash.hash(this.next)),
      Hash.cached(this)
    )
  }
  [Equal.symbol](that: unknown): boolean {
    if (this === that) {
      return true
    }
    return isMapKey(that) &&
      Equal.equals(this.current, that.current) &&
      Equal.equals(this.previous, that.previous) &&
      Equal.equals(this.next, that.next)
  }
}

/** @internal */
export const makeMapKey = <K>(current: K): MapKey<K> => new MapKeyImpl(current)

/** @internal */
export const isMapKey = (u: unknown): u is MapKey<unknown> => hasProperty(u, MapKeyTypeId)

/**
 * A `KeySet` is a sorted set of keys in the cache ordered by last access.
 * For efficiency, the set is implemented in terms of a doubly linked list
 * and is not safe for concurrent access.
 *
 * @internal
 */
export interface KeySet<in out K> {
  head: MapKey<K> | undefined // mutable by design
  tail: MapKey<K> | undefined // mutable by design
  /**
   * Adds the specified key to the set.
   */
  add(key: MapKey<K>): void
  /**
   * Removes the lowest priority key from the set.
   */
  remove(): MapKey<K> | undefined
}

class KeySetImpl<in out K> implements KeySet<K> {
  head: MapKey<K> | undefined = undefined
  tail: MapKey<K> | undefined = undefined
  add(key: MapKey<K>): void {
    if (key !== this.tail) {
      if (this.tail === undefined) {
        this.head = key
        this.tail = key
      } else {
        const previous = key.previous
        const next = key.next
        if (next !== undefined) {
          key.next = undefined
          if (previous !== undefined) {
            previous.next = next
            next.previous = previous
          } else {
            this.head = next
            this.head.previous = undefined
          }
        }
        this.tail.next = key
        key.previous = this.tail
        this.tail = key
      }
    }
  }
  remove(): MapKey<K> | undefined {
    const key = this.head
    if (key !== undefined) {
      const next = key.next
      if (next !== undefined) {
        key.next = undefined
        this.head = next
        this.head.previous = undefined
      } else {
        this.head = undefined
        this.tail = undefined
      }
    }
    return key
  }
}

/** @internal */
export const makeKeySet = <K>(): KeySet<K> => new KeySetImpl<K>()

/**
 * The `CacheState` represents the mutable state underlying the cache.
 *
 * @internal
 */
export interface CacheState<in out Key, in out Value, in out Error> {
  map: MutableHashMap.MutableHashMap<Key, MapValue<Key, Value, Error>> // mutable by design
  keys: KeySet<Key> // mutable by design
  accesses: MutableQueue.MutableQueue<MapKey<Key>> // mutable by design
  updating: MutableRef.MutableRef<boolean> // mutable by design
  hits: number // mutable by design
  misses: number // mutable by design
}

/**
 * Constructs a new `CacheState` from the specified values.
 *
 * @internal
 */
export const makeCacheState = <Key, Value, Error>(
  map: MutableHashMap.MutableHashMap<Key, MapValue<Key, Value, Error>>,
  keys: KeySet<Key>,
  accesses: MutableQueue.MutableQueue<MapKey<Key>>,
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
export const initialCacheState = <Key, Value, Error>(): CacheState<Key, Value, Error> =>
  makeCacheState(
    MutableHashMap.empty(),
    makeKeySet(),
    MutableQueue.unbounded(),
    MutableRef.make(false),
    0,
    0
  )

/** @internal */
const CacheSymbolKey = "effect/Cache"

/** @internal */
export const CacheTypeId: Cache.CacheTypeId = Symbol.for(
  CacheSymbolKey
) as Cache.CacheTypeId

const cacheVariance = {
  /* c8 ignore next */
  _Key: (_: any) => _,
  /* c8 ignore next */
  _Error: (_: never) => _,
  /* c8 ignore next */
  _Value: (_: any) => _
}

/** @internal */
const ConsumerCacheSymbolKey = "effect/ConsumerCache"

/** @internal */
export const ConsumerCacheTypeId: Cache.ConsumerCacheTypeId = Symbol.for(
  ConsumerCacheSymbolKey
) as Cache.ConsumerCacheTypeId

const consumerCacheVariance = {
  /* c8 ignore next */
  _Key: (_: any) => _,
  /* c8 ignore next */
  _Error: (_: never) => _,
  /* c8 ignore next */
  _Value: (_: never) => _
}

/** @internal */
export const makeCacheStats = (
  options: {
    readonly hits: number
    readonly misses: number
    readonly size: number
  }
): Cache.CacheStats => options

/** @internal */
export const makeEntryStats = (loadedMillis: number): Cache.EntryStats => ({
  loadedMillis
})

class CacheImpl<in out Key, in out Value, in out Error> implements Cache.Cache<Key, Value, Error> {
  readonly [CacheTypeId] = cacheVariance
  readonly [ConsumerCacheTypeId] = consumerCacheVariance
  readonly cacheState: CacheState<Key, Value, Error>
  constructor(
    readonly capacity: number,
    readonly context: Context.Context<any>,
    readonly fiberId: FiberId.FiberId,
    readonly lookup: Cache.Lookup<Key, Value, Error, any>,
    readonly timeToLive: (exit: Exit.Exit<Value, Error>) => Duration.DurationInput
  ) {
    this.cacheState = initialCacheState()
  }

  get(key: Key): Effect.Effect<Value, Error> {
    return core.map(this.getEither(key), Either.merge)
  }

  get cacheStats(): Effect.Effect<Cache.CacheStats> {
    return core.sync(() =>
      makeCacheStats({
        hits: this.cacheState.hits,
        misses: this.cacheState.misses,
        size: MutableHashMap.size(this.cacheState.map)
      })
    )
  }

  getOption(key: Key): Effect.Effect<Option.Option<Value>, Error> {
    return core.suspend(() =>
      Option.match(MutableHashMap.get(this.cacheState.map, key), {
        onNone: () => {
          const mapKey = makeMapKey(key)
          this.trackAccess(mapKey)
          this.trackMiss()
          return core.succeed(Option.none<Value>())
        },
        onSome: (value) => this.resolveMapValue(value)
      })
    )
  }

  getOptionComplete(key: Key): Effect.Effect<Option.Option<Value>> {
    return core.suspend(() =>
      Option.match(MutableHashMap.get(this.cacheState.map, key), {
        onNone: () => {
          const mapKey = makeMapKey(key)
          this.trackAccess(mapKey)
          this.trackMiss()
          return core.succeed(Option.none<Value>())
        },
        onSome: (value) => this.resolveMapValue(value, true) as Effect.Effect<Option.Option<Value>>
      })
    )
  }

  contains(key: Key): Effect.Effect<boolean> {
    return core.sync(() => MutableHashMap.has(this.cacheState.map, key))
  }

  entryStats(key: Key): Effect.Effect<Option.Option<Cache.EntryStats>> {
    return core.sync(() => {
      const option = MutableHashMap.get(this.cacheState.map, key)
      if (Option.isSome(option)) {
        switch (option.value._tag) {
          case "Complete": {
            const loaded = option.value.entryStats.loadedMillis
            return Option.some(makeEntryStats(loaded))
          }
          case "Pending": {
            return Option.none()
          }
          case "Refreshing": {
            const loaded = option.value.complete.entryStats.loadedMillis
            return Option.some(makeEntryStats(loaded))
          }
        }
      }
      return Option.none()
    })
  }

  getEither(key: Key): Effect.Effect<Either.Either<Value, Value>, Error> {
    return core.suspend((): Effect.Effect<Either.Either<Value, Value>, Error> => {
      const k = key
      let mapKey: MapKey<Key> | undefined = undefined
      let deferred: Deferred.Deferred<Value, Error> | undefined = undefined
      let value = Option.getOrUndefined(MutableHashMap.get(this.cacheState.map, k))
      if (value === undefined) {
        deferred = Deferred.unsafeMake<Value, Error>(this.fiberId)
        mapKey = makeMapKey(k)
        if (MutableHashMap.has(this.cacheState.map, k)) {
          value = Option.getOrUndefined(MutableHashMap.get(this.cacheState.map, k))
        } else {
          MutableHashMap.set(this.cacheState.map, k, pending(mapKey, deferred))
        }
      }
      if (value === undefined) {
        this.trackAccess(mapKey!)
        this.trackMiss()
        return core.map(this.lookupValueOf(key, deferred!), Either.right)
      } else {
        return core.flatMap(
          this.resolveMapValue(value),
          Option.match({
            onNone: () => this.getEither(key),
            onSome: (value) => core.succeed(Either.left(value))
          })
        )
      }
    })
  }

  invalidate(key: Key): Effect.Effect<void> {
    return core.sync(() => {
      MutableHashMap.remove(this.cacheState.map, key)
    })
  }

  invalidateWhen(key: Key, when: (value: Value) => boolean): Effect.Effect<void> {
    return core.sync(() => {
      const value = MutableHashMap.get(this.cacheState.map, key)
      if (Option.isSome(value) && value.value._tag === "Complete") {
        if (value.value.exit._tag === "Success") {
          if (when(value.value.exit.value)) {
            MutableHashMap.remove(this.cacheState.map, key)
          }
        }
      }
    })
  }

  get invalidateAll(): Effect.Effect<void> {
    return core.sync(() => {
      this.cacheState.map = MutableHashMap.empty()
    })
  }

  refresh(key: Key): Effect.Effect<void, Error> {
    return effect.clockWith((clock) =>
      core.suspend(() => {
        const k = key
        const deferred: Deferred.Deferred<Value, Error> = Deferred.unsafeMake(this.fiberId)
        let value = Option.getOrUndefined(MutableHashMap.get(this.cacheState.map, k))
        if (value === undefined) {
          if (MutableHashMap.has(this.cacheState.map, k)) {
            value = Option.getOrUndefined(MutableHashMap.get(this.cacheState.map, k))
          } else {
            MutableHashMap.set(this.cacheState.map, k, pending(makeMapKey(k), deferred))
          }
        }
        if (value === undefined) {
          return core.asVoid(this.lookupValueOf(key, deferred))
        } else {
          switch (value._tag) {
            case "Complete": {
              if (this.hasExpired(clock, value.timeToLiveMillis)) {
                const found = Option.getOrUndefined(MutableHashMap.get(this.cacheState.map, k))
                if (Equal.equals(found, value)) {
                  MutableHashMap.remove(this.cacheState.map, k)
                }
                return core.asVoid(this.get(key))
              }
              // Only trigger the lookup if we're still the current value, `completedResult`
              return pipe(
                this.lookupValueOf(key, deferred),
                effect.when(() => {
                  const current = Option.getOrUndefined(MutableHashMap.get(this.cacheState.map, k))
                  if (Equal.equals(current, value)) {
                    const mapValue = refreshing(deferred, value as Complete<Key, Value, Error>)
                    MutableHashMap.set(this.cacheState.map, k, mapValue)
                    return true
                  }
                  return false
                }),
                core.asVoid
              )
            }
            case "Pending": {
              return Deferred.await(value.deferred)
            }
            case "Refreshing": {
              return Deferred.await(value.deferred)
            }
          }
        }
      })
    )
  }

  set(key: Key, value: Value): Effect.Effect<void> {
    return effect.clockWith((clock) =>
      core.sync(() => {
        const now = clock.unsafeCurrentTimeMillis()
        const k = key
        const lookupResult = Exit.succeed(value)
        const mapValue = complete(
          makeMapKey(k),
          lookupResult,
          makeEntryStats(now),
          now + Duration.toMillis(Duration.decode(this.timeToLive(lookupResult)))
        )
        MutableHashMap.set(
          this.cacheState.map,
          k,
          mapValue as Complete<Key, Value, Error>
        )
      })
    )
  }

  get size(): Effect.Effect<number> {
    return core.sync(() => {
      return MutableHashMap.size(this.cacheState.map)
    })
  }

  get values(): Effect.Effect<Array<Value>> {
    return core.sync(() => {
      const values: Array<Value> = []
      for (const entry of this.cacheState.map) {
        if (entry[1]._tag === "Complete" && entry[1].exit._tag === "Success") {
          values.push(entry[1].exit.value)
        }
      }
      return values
    })
  }

  get entries(): Effect.Effect<Array<[Key, Value]>> {
    return core.sync(() => {
      const values: Array<[Key, Value]> = []
      for (const entry of this.cacheState.map) {
        if (entry[1]._tag === "Complete" && entry[1].exit._tag === "Success") {
          values.push([entry[0], entry[1].exit.value])
        }
      }
      return values
    })
  }

  get keys(): Effect.Effect<Array<Key>> {
    return core.sync(() => {
      const keys: Array<Key> = []
      for (const entry of this.cacheState.map) {
        if (entry[1]._tag === "Complete" && entry[1].exit._tag === "Success") {
          keys.push(entry[0])
        }
      }
      return keys
    })
  }

  resolveMapValue(
    value: MapValue<Key, Value, Error>,
    ignorePending = false
  ): Effect.Effect<Option.Option<Value>, Error> {
    return effect.clockWith((clock) => {
      switch (value._tag) {
        case "Complete": {
          this.trackAccess(value.key)
          if (this.hasExpired(clock, value.timeToLiveMillis)) {
            MutableHashMap.remove(this.cacheState.map, value.key.current)
            return core.succeed(Option.none<Value>())
          }
          this.trackHit()
          return core.map(value.exit, Option.some)
        }
        case "Pending": {
          this.trackAccess(value.key)
          this.trackHit()
          if (ignorePending) {
            return core.succeed(Option.none<Value>())
          }
          return core.map(Deferred.await(value.deferred), Option.some)
        }
        case "Refreshing": {
          this.trackAccess(value.complete.key)
          this.trackHit()
          if (this.hasExpired(clock, value.complete.timeToLiveMillis)) {
            if (ignorePending) {
              return core.succeed(Option.none<Value>())
            }
            return core.map(Deferred.await(value.deferred), Option.some)
          }
          return core.map(value.complete.exit, Option.some)
        }
      }
    })
  }

  trackHit(): void {
    this.cacheState.hits = this.cacheState.hits + 1
  }

  trackMiss(): void {
    this.cacheState.misses = this.cacheState.misses + 1
  }

  trackAccess(key: MapKey<Key>): void {
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
        if (key !== undefined) {
          if (MutableHashMap.has(this.cacheState.map, key.current)) {
            MutableHashMap.remove(this.cacheState.map, key.current)
            size = size - 1
            loop = size > this.capacity
          }
        } else {
          loop = false
        }
      }
      MutableRef.set(this.cacheState.updating, false)
    }
  }

  hasExpired(clock: Clock.Clock, timeToLiveMillis: number): boolean {
    return clock.unsafeCurrentTimeMillis() > timeToLiveMillis
  }

  lookupValueOf(
    input: Key,
    deferred: Deferred.Deferred<Value, Error>
  ): Effect.Effect<Value, Error> {
    return effect.clockWith((clock) =>
      core.suspend(() => {
        const key = input
        return pipe(
          this.lookup(input),
          core.provideContext(this.context),
          core.exit,
          core.flatMap((exit) => {
            const now = clock.unsafeCurrentTimeMillis()
            const stats = makeEntryStats(now)
            const value = complete(
              makeMapKey(key),
              exit,
              stats,
              now + Duration.toMillis(Duration.decode(this.timeToLive(exit)))
            )
            MutableHashMap.set(this.cacheState.map, key, value)
            return core.zipRight(
              Deferred.done(deferred, exit),
              exit
            )
          }),
          core.onInterrupt(() =>
            core.zipRight(
              Deferred.interrupt(deferred),
              core.sync(() => {
                MutableHashMap.remove(this.cacheState.map, key)
              })
            )
          )
        )
      })
    )
  }
}

/** @internal */
export const make = <Key, Value, Error = never, Environment = never>(
  options: {
    readonly capacity: number
    readonly timeToLive: Duration.DurationInput
    readonly lookup: Cache.Lookup<Key, Value, Error, Environment>
  }
): Effect.Effect<Cache.Cache<Key, Value, Error>, never, Environment> => {
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
    readonly lookup: Cache.Lookup<Key, Value, Error, Environment>
    readonly timeToLive: (exit: Exit.Exit<Value, Error>) => Duration.DurationInput
  }
): Effect.Effect<Cache.Cache<Key, Value, Error>, never, Environment> =>
  core.map(
    fiberRuntime.all([core.context<Environment>(), core.fiberId]),
    ([context, fiberId]) =>
      new CacheImpl(
        options.capacity,
        context,
        fiberId,
        options.lookup,
        (exit) => Duration.decode(options.timeToLive(exit))
      )
  )

/** @internal */
export const unsafeMakeWith = <Key, Value, Error = never>(
  capacity: number,
  lookup: Cache.Lookup<Key, Value, Error>,
  timeToLive: (exit: Exit.Exit<Value, Error>) => Duration.DurationInput
): Cache.Cache<Key, Value, Error> =>
  new CacheImpl<Key, Value, Error>(
    capacity,
    Context.empty() as Context.Context<any>,
    none,
    lookup,
    (exit) => Duration.decode(timeToLive(exit))
  )
