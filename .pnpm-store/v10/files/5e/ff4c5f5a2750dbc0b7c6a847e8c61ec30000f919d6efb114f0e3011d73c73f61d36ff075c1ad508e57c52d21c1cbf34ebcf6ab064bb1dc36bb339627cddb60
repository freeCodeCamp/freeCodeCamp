import * as RA from "../../Array.js"
import * as Chunk from "../../Chunk.js"
import * as Equal from "../../Equal.js"
import type { LazyArg } from "../../Function.js"
import { dual, pipe } from "../../Function.js"
import * as Hash from "../../Hash.js"
import * as HashMap from "../../HashMap.js"
import * as Option from "../../Option.js"
import { hasProperty } from "../../Predicate.js"
import * as STM from "../../STM.js"
import type * as TArray from "../../TArray.js"
import type * as TMap from "../../TMap.js"
import type * as TRef from "../../TRef.js"
import * as core from "./core.js"
import type * as Journal from "./journal.js"
import * as stm from "./stm.js"
import * as tArray from "./tArray.js"
import * as tRef from "./tRef.js"

/** @internal */
const TMapSymbolKey = "effect/TMap"

/** @internal */
export const TMapTypeId: TMap.TMapTypeId = Symbol.for(
  TMapSymbolKey
) as TMap.TMapTypeId

const tMapVariance = {
  /* c8 ignore next */
  _K: (_: any) => _,
  /* c8 ignore next */
  _V: (_: any) => _
}

/** @internal */
class TMapImpl<in out K, in out V> implements TMap.TMap<K, V> {
  readonly [TMapTypeId] = tMapVariance
  constructor(
    readonly tBuckets: TRef.TRef<TArray.TArray<Chunk.Chunk<readonly [K, V]>>>,
    readonly tSize: TRef.TRef<number>
  ) {}
}

const isTMap = (u: unknown) => hasProperty(u, TMapTypeId)

/** @internal */
const InitialCapacity = 16
const LoadFactor = 0.75

/** @internal */
const nextPowerOfTwo = (size: number): number => {
  const n = -1 >>> Math.clz32(size - 1)
  return n < 0 ? 1 : n + 1
}

/** @internal */
const hash = <K>(key: K): number => {
  const h = Hash.hash(key)
  return h ^ (h >>> 16)
}

/** @internal */
const indexOf = <K>(k: K, capacity: number): number => hash(k) & (capacity - 1)

/** @internal */
const allocate = <K, V>(
  capacity: number,
  data: Chunk.Chunk<readonly [K, V]>
): STM.STM<TMap.TMap<K, V>> => {
  const buckets = Array.from({ length: capacity }, () => Chunk.empty<readonly [K, V]>())
  const distinct = new Map<K, V>(data)
  let size = 0
  for (const entry of distinct) {
    const index = indexOf(entry[0], capacity)
    buckets[index] = pipe(buckets[index], Chunk.prepend(entry))
    size = size + 1
  }
  return pipe(
    tArray.fromIterable(buckets),
    core.flatMap((buckets) =>
      pipe(
        tRef.make(buckets),
        core.flatMap((tBuckets) =>
          pipe(
            tRef.make(size),
            core.map((tSize) => new TMapImpl(tBuckets, tSize))
          )
        )
      )
    )
  )
}

/** @internal */
export const empty = <K, V>(): STM.STM<TMap.TMap<K, V>> => fromIterable<K, V>([])

/** @internal */
export const find = dual<
  <K, V, A>(
    pf: (key: K, value: V) => Option.Option<A>
  ) => (self: TMap.TMap<K, V>) => STM.STM<Option.Option<A>>,
  <K, V, A>(
    self: TMap.TMap<K, V>,
    pf: (key: K, value: V) => Option.Option<A>
  ) => STM.STM<Option.Option<A>>
>(2, (self, pf) =>
  findSTM(self, (key, value) => {
    const option = pf(key, value)
    if (Option.isSome(option)) {
      return core.succeed(option.value)
    }
    return core.fail(Option.none())
  }))

/** @internal */
export const findSTM = dual<
  <K, V, A, E, R>(
    f: (key: K, value: V) => STM.STM<A, Option.Option<E>, R>
  ) => (self: TMap.TMap<K, V>) => STM.STM<Option.Option<A>, E, R>,
  <K, V, A, E, R>(
    self: TMap.TMap<K, V>,
    f: (key: K, value: V) => STM.STM<A, Option.Option<E>, R>
  ) => STM.STM<Option.Option<A>, E, R>
>(2, <K, V, A, E, R>(
  self: TMap.TMap<K, V>,
  f: (key: K, value: V) => STM.STM<A, Option.Option<E>, R>
) =>
  reduceSTM(self, Option.none<A>(), (acc, value, key) =>
    Option.isNone(acc) ?
      core.matchSTM(f(key, value), {
        onFailure: Option.match({
          onNone: () => stm.succeedNone,
          onSome: core.fail
        }),
        onSuccess: stm.succeedSome
      }) :
      STM.succeed(acc)))

/** @internal */
export const findAll = dual<
  <K, V, A>(
    pf: (key: K, value: V) => Option.Option<A>
  ) => (self: TMap.TMap<K, V>) => STM.STM<Array<A>>,
  <K, V, A>(
    self: TMap.TMap<K, V>,
    pf: (key: K, value: V) => Option.Option<A>
  ) => STM.STM<Array<A>>
>(2, (self, pf) =>
  findAllSTM(self, (key, value) => {
    const option = pf(key, value)
    if (Option.isSome(option)) {
      return core.succeed(option.value)
    }
    return core.fail(Option.none())
  }))

/** @internal */
export const findAllSTM = dual<
  <K, V, A, E, R>(
    pf: (key: K, value: V) => STM.STM<A, Option.Option<E>, R>
  ) => (self: TMap.TMap<K, V>) => STM.STM<Array<A>, E, R>,
  <K, V, A, E, R>(
    self: TMap.TMap<K, V>,
    pf: (key: K, value: V) => STM.STM<A, Option.Option<E>, R>
  ) => STM.STM<Array<A>, E, R>
>(2, <K, V, A, E, R>(
  self: TMap.TMap<K, V>,
  pf: (key: K, value: V) => STM.STM<A, Option.Option<E>, R>
) =>
  core.map(
    reduceSTM(self, Chunk.empty<A>(), (acc, value, key) =>
      core.matchSTM(pf(key, value), {
        onFailure: Option.match({
          onNone: () => core.succeed(acc),
          onSome: core.fail
        }),
        onSuccess: (a) => core.succeed(Chunk.append(acc, a))
      })),
    (a) => Array.from(a)
  ))

/** @internal */
export const forEach = dual<
  <K, V, X, E, R>(f: (key: K, value: V) => STM.STM<X, E, R>) => (self: TMap.TMap<K, V>) => STM.STM<void, E, R>,
  <K, V, X, E, R>(self: TMap.TMap<K, V>, f: (key: K, value: V) => STM.STM<X, E, R>) => STM.STM<void, E, R>
>(2, (self, f) =>
  reduceSTM(
    self,
    void 0 as void,
    (_, value, key) => stm.asVoid(f(key, value))
  ))

/** @internal */
export const fromIterable = <K, V>(iterable: Iterable<readonly [K, V]>): STM.STM<TMap.TMap<K, V>> =>
  stm.suspend(() => {
    const data = Chunk.fromIterable(iterable)
    const capacity = data.length < InitialCapacity
      ? InitialCapacity
      : nextPowerOfTwo(data.length)
    return allocate(capacity, data)
  })

/** @internal */
export const get = dual<
  <K>(key: K) => <V>(self: TMap.TMap<K, V>) => STM.STM<Option.Option<V>>,
  <K, V>(self: TMap.TMap<K, V>, key: K) => STM.STM<Option.Option<V>>
>(2, <K, V>(self: TMap.TMap<K, V>, key: K) =>
  core.effect<never, Option.Option<V>>((journal) => {
    const buckets = tRef.unsafeGet(self.tBuckets, journal)
    const index = indexOf(key, buckets.chunk.length)
    const bucket = tRef.unsafeGet(buckets.chunk[index], journal)
    return pipe(
      Chunk.findFirst(bucket, (entry) => Equal.equals(entry[0])(key)),
      Option.map((entry) => entry[1])
    )
  }))

/** @internal */
export const getOrElse = dual<
  <K, V>(key: K, fallback: LazyArg<V>) => (self: TMap.TMap<K, V>) => STM.STM<V>,
  <K, V>(self: TMap.TMap<K, V>, key: K, fallback: LazyArg<V>) => STM.STM<V>
>(3, (self, key, fallback) =>
  core.map(
    get(self, key),
    Option.getOrElse(fallback)
  ))

/** @internal */
export const has = dual<
  <K>(key: K) => <V>(self: TMap.TMap<K, V>) => STM.STM<boolean>,
  <K, V>(self: TMap.TMap<K, V>, key: K) => STM.STM<boolean>
>(2, (self, key) => core.map(get(self, key), Option.isSome))

/** @internal */
export const isEmpty = <K, V>(self: TMap.TMap<K, V>): STM.STM<boolean> =>
  core.map(tRef.get(self.tSize), (size) => size === 0)

/** @internal */
export const keys = <K, V>(self: TMap.TMap<K, V>): STM.STM<Array<K>> =>
  core.map(toReadonlyArray(self), RA.map((entry) => entry[0]))

/** @internal */
export const make = <K, V>(...entries: Array<readonly [K, V]>): STM.STM<TMap.TMap<K, V>> => fromIterable(entries)

/** @internal */
export const merge = dual<
  <K, V>(key: K, value: V, f: (x: V, y: V) => V) => (self: TMap.TMap<K, V>) => STM.STM<V>,
  <K, V>(self: TMap.TMap<K, V>, key: K, value: V, f: (x: V, y: V) => V) => STM.STM<V>
>(4, (self, key, value, f) =>
  core.flatMap(
    get(self, key),
    Option.match({
      onNone: () => stm.as(set(self, key, value), value),
      onSome: (v0) => {
        const v1 = f(v0, value)
        return stm.as(set(self, key, v1), v1)
      }
    })
  ))

/** @internal */
export const reduce = dual<
  <Z, K, V>(zero: Z, f: (acc: Z, value: V, key: K) => Z) => (self: TMap.TMap<K, V>) => STM.STM<Z>,
  <K, V, Z>(self: TMap.TMap<K, V>, zero: Z, f: (acc: Z, value: V, key: K) => Z) => STM.STM<Z>
>(
  3,
  <K, V, Z>(self: TMap.TMap<K, V>, zero: Z, f: (acc: Z, value: V, key: K) => Z) =>
    core.effect<never, Z>((journal) => {
      const buckets = tRef.unsafeGet(self.tBuckets, journal)
      let result = zero
      let index = 0
      while (index < buckets.chunk.length) {
        const bucket = buckets.chunk[index]
        const items = tRef.unsafeGet(bucket, journal)
        result = Chunk.reduce(items, result, (acc, entry) => f(acc, entry[1], entry[0]))
        index = index + 1
      }
      return result
    })
)

/** @internal */
export const reduceSTM = dual<
  <Z, V, K, R, E>(
    zero: Z,
    f: (acc: Z, value: V, key: K) => STM.STM<Z, E, R>
  ) => (self: TMap.TMap<K, V>) => STM.STM<Z, E, R>,
  <Z, V, K, R, E>(
    self: TMap.TMap<K, V>,
    zero: Z,
    f: (acc: Z, value: V, key: K) => STM.STM<Z, E, R>
  ) => STM.STM<Z, E, R>
>(3, (self, zero, f) =>
  core.flatMap(
    toReadonlyArray(self),
    stm.reduce(zero, (acc, entry) => f(acc, entry[1], entry[0]))
  ))

/** @internal */
export const remove = dual<
  <K>(key: K) => <V>(self: TMap.TMap<K, V>) => STM.STM<void>,
  <K, V>(self: TMap.TMap<K, V>, key: K) => STM.STM<void>
>(2, (self, key) =>
  core.effect<never, void>((journal) => {
    const buckets = tRef.unsafeGet(self.tBuckets, journal)
    const index = indexOf(key, buckets.chunk.length)
    const bucket = tRef.unsafeGet(buckets.chunk[index], journal)
    const [toRemove, toRetain] = Chunk.partition(bucket, (entry) => Equal.equals(entry[1], key))
    if (Chunk.isNonEmpty(toRemove)) {
      const currentSize = tRef.unsafeGet(self.tSize, journal)
      tRef.unsafeSet(buckets.chunk[index], toRetain, journal)
      tRef.unsafeSet(self.tSize, currentSize - 1, journal)
    }
  }))

/** @internal */
export const removeAll = dual<
  <K>(keys: Iterable<K>) => <V>(self: TMap.TMap<K, V>) => STM.STM<void>,
  <K, V>(self: TMap.TMap<K, V>, keys: Iterable<K>) => STM.STM<void>
>(2, <K, V>(self: TMap.TMap<K, V>, keys: Iterable<K>) =>
  core.effect<never, void>((journal) => {
    const iterator = keys[Symbol.iterator]()
    let next: IteratorResult<K, any>
    while ((next = iterator.next()) && !next.done) {
      const buckets = tRef.unsafeGet(self.tBuckets, journal)
      const index = indexOf(next.value, buckets.chunk.length)
      const bucket = tRef.unsafeGet(buckets.chunk[index], journal)
      const [toRemove, toRetain] = Chunk.partition(bucket, (entry) => Equal.equals(next.value)(entry[0]))
      if (Chunk.isNonEmpty(toRemove)) {
        const currentSize = tRef.unsafeGet(self.tSize, journal)
        tRef.unsafeSet(buckets.chunk[index], toRetain, journal)
        tRef.unsafeSet(self.tSize, currentSize - 1, journal)
      }
    }
  }))

/** @internal */
export const removeIf: {
  <K, V>(
    predicate: (key: K, value: V) => boolean,
    options: {
      readonly discard: true
    }
  ): (self: TMap.TMap<K, V>) => STM.STM<void>
  <K, V>(
    predicate: (key: K, value: V) => boolean,
    options?: {
      readonly discard: false
    }
  ): (self: TMap.TMap<K, V>) => STM.STM<Array<[K, V]>>
  <K, V>(
    self: TMap.TMap<K, V>,
    predicate: (key: K, value: V) => boolean,
    options: {
      readonly discard: true
    }
  ): STM.STM<void>
  <K, V>(
    self: TMap.TMap<K, V>,
    predicate: (key: K, value: V) => boolean,
    options?: {
      readonly discard: false
    }
  ): STM.STM<Array<[K, V]>>
} = dual((args) => isTMap(args[0]), <K, V>(
  self: TMap.TMap<K, V>,
  predicate: (key: K, value: V) => boolean,
  options?: {
    readonly discard: boolean
  }
) =>
  core.effect((journal) => {
    const discard = options?.discard === true
    const buckets = tRef.unsafeGet(self.tBuckets, journal)
    const capacity = buckets.chunk.length
    const removed: Array<[K, V]> = []
    let index = 0
    let newSize = 0
    while (index < capacity) {
      const bucket = tRef.unsafeGet(buckets.chunk[index], journal)
      const iterator = bucket[Symbol.iterator]()
      let next: IteratorResult<readonly [K, V], any>
      let newBucket = Chunk.empty<readonly [K, V]>()
      while ((next = iterator.next()) && !next.done) {
        const [k, v] = next.value
        if (!predicate(k, v)) {
          newBucket = Chunk.prepend(newBucket, next.value)
          newSize = newSize + 1
        } else {
          if (!discard) {
            removed.push([k, v])
          }
        }
      }
      tRef.unsafeSet(buckets.chunk[index], newBucket, journal)
      index = index + 1
    }
    tRef.unsafeSet(self.tSize, newSize, journal)
    if (!discard) {
      return removed
    }
  }))

/** @internal */
export const retainIf: {
  <K, V>(
    predicate: (key: K, value: V) => boolean,
    options: {
      readonly discard: true
    }
  ): (self: TMap.TMap<K, V>) => STM.STM<void>
  <K, V>(
    predicate: (key: K, value: V) => boolean,
    options?: {
      readonly discard: false
    }
  ): (self: TMap.TMap<K, V>) => STM.STM<Array<[K, V]>>
  <K, V>(
    self: TMap.TMap<K, V>,
    predicate: (key: K, value: V) => boolean,
    options: {
      readonly discard: true
    }
  ): STM.STM<void>
  <K, V>(
    self: TMap.TMap<K, V>,
    predicate: (key: K, value: V) => boolean,
    options?: {
      readonly discard: false
    }
  ): STM.STM<Array<[K, V]>>
} = dual(
  (args) => isTMap(args[0]),
  (self, predicate, options) => removeIf(self, (key, value) => !predicate(key, value), options)
)

/** @internal */
export const set = dual<
  <K, V>(key: K, value: V) => (self: TMap.TMap<K, V>) => STM.STM<void>,
  <K, V>(self: TMap.TMap<K, V>, key: K, value: V) => STM.STM<void>
>(3, <K, V>(self: TMap.TMap<K, V>, key: K, value: V) => {
  const resize = (journal: Journal.Journal, buckets: TArray.TArray<Chunk.Chunk<readonly [K, V]>>): void => {
    const capacity = buckets.chunk.length
    const newCapacity = capacity << 1
    const newBuckets = Array.from({ length: newCapacity }, () => Chunk.empty<readonly [K, V]>())
    let index = 0
    while (index < capacity) {
      const pairs = tRef.unsafeGet(buckets.chunk[index], journal)
      const iterator = pairs[Symbol.iterator]()
      let next: IteratorResult<readonly [K, V], any>
      while ((next = iterator.next()) && !next.done) {
        const newIndex = indexOf(next.value[0], newCapacity)
        newBuckets[newIndex] = Chunk.prepend(newBuckets[newIndex], next.value)
      }
      index = index + 1
    }
    // insert new pair
    const newIndex = indexOf(key, newCapacity)
    newBuckets[newIndex] = Chunk.prepend(newBuckets[newIndex], [key, value] as const)

    const newArray: Array<TRef.TRef<Chunk.Chunk<readonly [K, V]>>> = []
    index = 0
    while (index < newCapacity) {
      newArray[index] = new tRef.TRefImpl(newBuckets[index])
      index = index + 1
    }
    const newTArray: TArray.TArray<Chunk.Chunk<readonly [K, V]>> = new tArray.TArrayImpl(newArray)
    tRef.unsafeSet(self.tBuckets, newTArray, journal)
  }
  return core.effect<never, void>((journal) => {
    const buckets = tRef.unsafeGet(self.tBuckets, journal)
    const capacity = buckets.chunk.length
    const index = indexOf(key, capacity)
    const bucket = tRef.unsafeGet(buckets.chunk[index], journal)
    const shouldUpdate = Chunk.some(bucket, (entry) => Equal.equals(key)(entry[0]))
    if (shouldUpdate) {
      const newBucket = Chunk.map(bucket, (entry) =>
        Equal.equals(key)(entry[0]) ?
          [key, value] as const :
          entry)
      tRef.unsafeSet(buckets.chunk[index], newBucket, journal)
    } else {
      const newSize = tRef.unsafeGet(self.tSize, journal) + 1
      tRef.unsafeSet(self.tSize, newSize, journal)
      if (capacity * LoadFactor < newSize) {
        resize(journal, buckets)
      } else {
        const newBucket = Chunk.prepend(bucket, [key, value] as const)
        tRef.unsafeSet(buckets.chunk[index], newBucket, journal)
      }
    }
  })
})

/** @internal */
export const setIfAbsent = dual<
  <K, V>(key: K, value: V) => (self: TMap.TMap<K, V>) => STM.STM<void>,
  <K, V>(self: TMap.TMap<K, V>, key: K, value: V) => STM.STM<void>
>(3, (self, key, value) =>
  core.flatMap(
    get(self, key),
    Option.match({
      onNone: () => set(self, key, value),
      onSome: () => stm.void
    })
  ))

/** @internal */
export const size = <K, V>(self: TMap.TMap<K, V>): STM.STM<number> => tRef.get(self.tSize)

/** @internal */
export const takeFirst = dual<
  <K, V, A>(pf: (key: K, value: V) => Option.Option<A>) => (self: TMap.TMap<K, V>) => STM.STM<A>,
  <K, V, A>(self: TMap.TMap<K, V>, pf: (key: K, value: V) => Option.Option<A>) => STM.STM<A>
>(2, <K, V, A>(self: TMap.TMap<K, V>, pf: (key: K, value: V) => Option.Option<A>) =>
  pipe(
    core.effect<never, Option.Option<A>>((journal) => {
      const buckets = tRef.unsafeGet(self.tBuckets, journal)
      const capacity = buckets.chunk.length
      const size = tRef.unsafeGet(self.tSize, journal)
      let result: Option.Option<A> = Option.none()
      let index = 0
      while (index < capacity && Option.isNone(result)) {
        const bucket = tRef.unsafeGet(buckets.chunk[index], journal)
        const recreate = Chunk.some(bucket, (entry) => Option.isSome(pf(entry[0], entry[1])))
        if (recreate) {
          const iterator = bucket[Symbol.iterator]()
          let newBucket = Chunk.empty<readonly [K, V]>()
          let next: IteratorResult<readonly [K, V], any>
          while ((next = iterator.next()) && !next.done && Option.isNone(result)) {
            const option = pf(next.value[0], next.value[1])
            if (Option.isSome(option) && Option.isNone(result)) {
              result = option
            } else {
              newBucket = Chunk.prepend(newBucket, next.value)
            }
          }
          tRef.unsafeSet(buckets.chunk[index], newBucket, journal)
        }
        index = index + 1
      }
      if (Option.isSome(result)) {
        tRef.unsafeSet(self.tSize, size - 1, journal)
      }
      return result
    }),
    stm.collect((option) =>
      Option.isSome(option) ?
        Option.some(option.value) :
        Option.none<A>()
    )
  ))

/** @internal */
export const takeFirstSTM = dual<
  <K, V, A, E, R>(
    pf: (key: K, value: V) => STM.STM<A, Option.Option<E>, R>
  ) => (self: TMap.TMap<K, V>) => STM.STM<A, E, R>,
  <K, V, A, E, R>(self: TMap.TMap<K, V>, pf: (key: K, value: V) => STM.STM<A, Option.Option<E>, R>) => STM.STM<A, E, R>
>(2, (self, pf) =>
  pipe(
    findSTM(self, (key, value) => core.map(pf(key, value), (a) => [key, a] as const)),
    stm.collect((option) => Option.isSome(option) ? Option.some(option.value) : Option.none()),
    core.flatMap((entry) => stm.as(remove(self, entry[0]), entry[1]))
  ))

/** @internal */
export const takeSome = dual<
  <K, V, A>(
    pf: (key: K, value: V) => Option.Option<A>
  ) => (self: TMap.TMap<K, V>) => STM.STM<RA.NonEmptyArray<A>>,
  <K, V, A>(
    self: TMap.TMap<K, V>,
    pf: (key: K, value: V) => Option.Option<A>
  ) => STM.STM<RA.NonEmptyArray<A>>
>(2, <K, V, A>(self: TMap.TMap<K, V>, pf: (key: K, value: V) => Option.Option<A>) =>
  pipe(
    core.effect<never, Option.Option<RA.NonEmptyArray<A>>>((journal) => {
      const buckets = tRef.unsafeGet(self.tBuckets, journal)
      const capacity = buckets.chunk.length
      const builder: Array<A> = []
      let newSize = 0
      let index = 0
      while (index < capacity) {
        const bucket = tRef.unsafeGet(buckets.chunk[index], journal)
        const recreate = Chunk.some(bucket, (entry) => Option.isSome(pf(entry[0], entry[1])))
        if (recreate) {
          const iterator = bucket[Symbol.iterator]()
          let newBucket = Chunk.empty<readonly [K, V]>()
          let next: IteratorResult<readonly [K, V], any>
          while ((next = iterator.next()) && !next.done) {
            const option = pf(next.value[0], next.value[1])
            if (Option.isSome(option)) {
              builder.push(option.value)
            } else {
              newBucket = Chunk.prepend(newBucket, next.value)
              newSize = newSize + 1
            }
          }
          tRef.unsafeSet(buckets.chunk[index], newBucket, journal)
        } else {
          newSize = newSize + bucket.length
        }
        index = index + 1
      }
      tRef.unsafeSet(self.tSize, newSize, journal)
      if (builder.length > 0) {
        return Option.some(builder as RA.NonEmptyArray<A>)
      }
      return Option.none()
    }),
    stm.collect((option) =>
      Option.isSome(option) ?
        Option.some(option.value) :
        Option.none<RA.NonEmptyArray<A>>()
    )
  ))

/** @internal */
export const takeSomeSTM = dual<
  <K, V, A, E, R>(
    pf: (key: K, value: V) => STM.STM<A, Option.Option<E>, R>
  ) => (self: TMap.TMap<K, V>) => STM.STM<RA.NonEmptyArray<A>, E, R>,
  <K, V, A, E, R>(
    self: TMap.TMap<K, V>,
    pf: (key: K, value: V) => STM.STM<A, Option.Option<E>, R>
  ) => STM.STM<RA.NonEmptyArray<A>, E, R>
>(2, <K, V, A, E, R>(
  self: TMap.TMap<K, V>,
  pf: (key: K, value: V) => STM.STM<A, Option.Option<E>, R>
) =>
  pipe(
    findAllSTM(
      self,
      (key, value) => core.map(pf(key, value), (a) => [key, a] as const)
    ),
    core.map((chunk) =>
      RA.isNonEmptyArray(chunk) ?
        Option.some(chunk) :
        Option.none()
    ),
    stm.collect((option) =>
      Option.isSome(option) ?
        Option.some(option.value) :
        Option.none()
    ),
    core.flatMap((entries) =>
      stm.as(
        removeAll(self, entries.map((entry) => entry[0])),
        RA.map(entries, (entry) => entry[1]) as RA.NonEmptyArray<A>
      )
    )
  ))

const toReadonlyArray = <K, V>(self: TMap.TMap<K, V>): STM.STM<ReadonlyArray<readonly [K, V]>> =>
  core.effect<never, Array<readonly [K, V]>>((journal) => {
    const buckets = tRef.unsafeGet(self.tBuckets, journal)
    const capacity = buckets.chunk.length
    const builder: Array<readonly [K, V]> = []
    let index = 0
    while (index < capacity) {
      const bucket = buckets.chunk[index]
      for (const entry of tRef.unsafeGet(bucket, journal)) {
        builder.push(entry)
      }
      index = index + 1
    }
    return builder
  })

/** @internal */
export const toChunk = <K, V>(self: TMap.TMap<K, V>): STM.STM<Chunk.Chunk<[K, V]>> =>
  reduce(
    self,
    Chunk.empty<[K, V]>(),
    (acc, value, key) => Chunk.append(acc, [key, value])
  )

/** @internal */
export const toHashMap = <K, V>(self: TMap.TMap<K, V>): STM.STM<HashMap.HashMap<K, V>> =>
  reduce(
    self,
    HashMap.empty<K, V>(),
    (acc, value, key) => pipe(acc, HashMap.set(key, value))
  )

/** @internal */
export const toArray = <K, V>(self: TMap.TMap<K, V>): STM.STM<Array<[K, V]>> =>
  reduce(
    self,
    [] as Array<[K, V]>,
    (acc, value, key) => {
      acc.unshift([key, value])
      return acc
    }
  )

/** @internal */
export const toMap = <K, V>(self: TMap.TMap<K, V>): STM.STM<Map<K, V>> =>
  reduce(
    self,
    new Map<K, V>(),
    (acc, value, key) => acc.set(key, value)
  )

/** @internal */
export const transform = dual<
  <K, V>(f: (key: K, value: V) => readonly [K, V]) => (self: TMap.TMap<K, V>) => STM.STM<void>,
  <K, V>(self: TMap.TMap<K, V>, f: (key: K, value: V) => readonly [K, V]) => STM.STM<void>
>(
  2,
  <K, V>(self: TMap.TMap<K, V>, f: (key: K, value: V) => readonly [K, V]) =>
    core.effect<never, void>((journal) => {
      const buckets = pipe(self.tBuckets, tRef.unsafeGet(journal))
      const capacity = buckets.chunk.length
      const newBuckets = Array.from({ length: capacity }, () => Chunk.empty<readonly [K, V]>())
      let newSize = 0
      let index = 0
      while (index < capacity) {
        const bucket = buckets.chunk[index]
        const pairs = tRef.unsafeGet(bucket, journal)
        const iterator = pairs[Symbol.iterator]()
        let next: IteratorResult<readonly [K, V], any>
        while ((next = iterator.next()) && !next.done) {
          const newPair = f(next.value[0], next.value[1])
          const index = indexOf(newPair[0], capacity)
          const newBucket = newBuckets[index]
          if (!Chunk.some(newBucket, (entry) => Equal.equals(entry[0], newPair[0]))) {
            newBuckets[index] = Chunk.prepend(newBucket, newPair)
            newSize = newSize + 1
          }
        }
        index = index + 1
      }
      index = 0
      while (index < capacity) {
        tRef.unsafeSet(buckets.chunk[index], newBuckets[index], journal)
        index = index + 1
      }
      tRef.unsafeSet(self.tSize, newSize, journal)
    })
)

/** @internal */
export const transformSTM = dual<
  <K, V, R, E>(
    f: (key: K, value: V) => STM.STM<readonly [K, V], E, R>
  ) => (self: TMap.TMap<K, V>) => STM.STM<void, E, R>,
  <K, V, R, E>(self: TMap.TMap<K, V>, f: (key: K, value: V) => STM.STM<readonly [K, V], E, R>) => STM.STM<void, E, R>
>(
  2,
  <K, V, R, E>(self: TMap.TMap<K, V>, f: (key: K, value: V) => STM.STM<readonly [K, V], E, R>) =>
    pipe(
      core.flatMap(
        toReadonlyArray(self),
        stm.forEach((entry) => f(entry[0], entry[1]))
      ),
      core.flatMap((newData) =>
        core.effect<never, void>((journal) => {
          const buckets = tRef.unsafeGet(self.tBuckets, journal)
          const capacity = buckets.chunk.length
          const newBuckets = Array.from({ length: capacity }, () => Chunk.empty<readonly [K, V]>())
          const iterator = newData[Symbol.iterator]()
          let newSize = 0
          let next: IteratorResult<readonly [K, V], any>
          while ((next = iterator.next()) && !next.done) {
            const index = indexOf(next.value[0], capacity)
            const newBucket = newBuckets[index]
            if (!Chunk.some(newBucket, (entry) => Equal.equals(entry[0])(next.value[0]))) {
              newBuckets[index] = Chunk.prepend(newBucket, next.value)
              newSize = newSize + 1
            }
          }
          let index = 0
          while (index < capacity) {
            tRef.unsafeSet(buckets.chunk[index], newBuckets[index], journal)
            index = index + 1
          }
          tRef.unsafeSet(self.tSize, newSize, journal)
        })
      )
    )
)

/** @internal */
export const transformValues = dual<
  <V>(f: (value: V) => V) => <K>(self: TMap.TMap<K, V>) => STM.STM<void>,
  <K, V>(self: TMap.TMap<K, V>, f: (value: V) => V) => STM.STM<void>
>(2, (self, f) => transform(self, (key, value) => [key, f(value)]))

/** @internal */
export const transformValuesSTM = dual<
  <V, R, E>(f: (value: V) => STM.STM<V, E, R>) => <K>(self: TMap.TMap<K, V>) => STM.STM<void, E, R>,
  <K, V, R, E>(self: TMap.TMap<K, V>, f: (value: V) => STM.STM<V, E, R>) => STM.STM<void, E, R>
>(2, (self, f) =>
  transformSTM(
    self,
    (key, value) => core.map(f(value), (value) => [key, value])
  ))

/** @internal */
export const updateWith = dual<
  <K, V>(
    key: K,
    f: (value: Option.Option<V>) => Option.Option<V>
  ) => (self: TMap.TMap<K, V>) => STM.STM<Option.Option<V>>,
  <K, V>(
    self: TMap.TMap<K, V>,
    key: K,
    f: (value: Option.Option<V>) => Option.Option<V>
  ) => STM.STM<Option.Option<V>>
>(3, (self, key, f) =>
  core.flatMap(get(self, key), (option) =>
    Option.match(
      f(option),
      {
        onNone: () => stm.as(remove(self, key), Option.none()),
        onSome: (value) => stm.as(set(self, key, value), Option.some(value))
      }
    )))

/** @internal */
export const values = <K, V>(self: TMap.TMap<K, V>): STM.STM<Array<V>> =>
  core.map(toReadonlyArray(self), RA.map((entry) => entry[1]))
