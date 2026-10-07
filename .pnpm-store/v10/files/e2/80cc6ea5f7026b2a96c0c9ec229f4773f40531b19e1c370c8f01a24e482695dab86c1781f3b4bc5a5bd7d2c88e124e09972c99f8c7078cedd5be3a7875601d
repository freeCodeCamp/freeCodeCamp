/**
 * @since 2.0.0
 */
import type { NonEmptyArray } from "./Array.js"
import * as Equal from "./Equal.js"
import { dual } from "./Function.js"
import * as Hash from "./Hash.js"
import { format, type Inspectable, NodeInspectSymbol, toJSON } from "./Inspectable.js"
import * as Option from "./Option.js"
import type { Pipeable } from "./Pipeable.js"
import { pipeArguments } from "./Pipeable.js"

const TypeId: unique symbol = Symbol.for("effect/MutableHashMap") as TypeId

/**
 * @since 2.0.0
 * @category symbol
 */
export type TypeId = typeof TypeId

/**
 * @since 2.0.0
 * @category models
 */
export interface MutableHashMap<out K, out V> extends Iterable<[K, V]>, Pipeable, Inspectable {
  readonly [TypeId]: TypeId
  /** @internal */
  readonly referential: Map<K, V>
  /** @internal */
  readonly buckets: Map<number, NonEmptyArray<readonly [K & Equal.Equal, V]>>
  /** @internal */
  bucketsSize: number
}

const MutableHashMapProto: Omit<MutableHashMap<unknown, unknown>, "referential" | "buckets" | "bucketsSize"> = {
  [TypeId]: TypeId,
  [Symbol.iterator](this: MutableHashMap<unknown, unknown>): Iterator<[unknown, unknown]> {
    return new MutableHashMapIterator(this)
  },
  toString() {
    return format(this.toJSON())
  },
  toJSON() {
    return {
      _id: "MutableHashMap",
      values: Array.from(this).map(toJSON)
    }
  },
  [NodeInspectSymbol]() {
    return this.toJSON()
  },
  pipe() {
    return pipeArguments(this, arguments)
  }
}

class MutableHashMapIterator<K, V> implements IterableIterator<[K, V]> {
  readonly referentialIterator: Iterator<[K, V]>
  bucketIterator: Iterator<[K, V]> | undefined

  constructor(readonly self: MutableHashMap<K, V>) {
    this.referentialIterator = self.referential[Symbol.iterator]()
  }
  next(): IteratorResult<[K, V]> {
    if (this.bucketIterator !== undefined) {
      return this.bucketIterator.next()
    }
    const result = this.referentialIterator.next()
    if (result.done) {
      this.bucketIterator = new BucketIterator(this.self.buckets.values())
      return this.next()
    }
    return result
  }

  [Symbol.iterator](): IterableIterator<[K, V]> {
    return new MutableHashMapIterator(this.self)
  }
}

class BucketIterator<K, V> implements Iterator<[K, V]> {
  constructor(readonly backing: Iterator<NonEmptyArray<readonly [K, V]>>) {}
  currentBucket: Iterator<readonly [K, V]> | undefined
  next(): IteratorResult<[K, V]> {
    if (this.currentBucket === undefined) {
      const result = this.backing.next()
      if (result.done) {
        return result
      }
      this.currentBucket = result.value[Symbol.iterator]()
    }
    const result = this.currentBucket.next()
    if (result.done) {
      this.currentBucket = undefined
      return this.next()
    }
    return result as IteratorResult<[K, V]>
  }
}

/**
 * @since 2.0.0
 * @category constructors
 */
export const empty = <K = never, V = never>(): MutableHashMap<K, V> => {
  const self = Object.create(MutableHashMapProto)
  self.referential = new Map()
  self.buckets = new Map()
  self.bucketsSize = 0
  return self
}

/**
 * @since 2.0.0
 * @category constructors
 */
export const make: <Entries extends Array<readonly [any, any]>>(
  ...entries: Entries
) => MutableHashMap<
  Entries[number] extends readonly [infer K, any] ? K : never,
  Entries[number] extends readonly [any, infer V] ? V : never
> = (...entries) => fromIterable(entries)

/**
 * Creates a new `MutableHashMap` from an iterable collection of key/value pairs.
 *
 * @since 2.0.0
 * @category constructors
 */
export const fromIterable = <K, V>(entries: Iterable<readonly [K, V]>): MutableHashMap<K, V> => {
  const self = empty<K, V>()
  for (const [key, value] of entries) {
    set(self, key, value)
  }
  return self
}

/**
 * @since 2.0.0
 * @category elements
 */
export const get: {
  /**
   * @since 2.0.0
   * @category elements
   */
  <K>(key: K): <V>(self: MutableHashMap<K, V>) => Option.Option<V>
  /**
   * @since 2.0.0
   * @category elements
   */
  <K, V>(self: MutableHashMap<K, V>, key: K): Option.Option<V>
} = dual<
  /**
   * @since 2.0.0
   * @category elements
   */
  <K>(key: K) => <V>(self: MutableHashMap<K, V>) => Option.Option<V>,
  /**
   * @since 2.0.0
   * @category elements
   */
  <K, V>(self: MutableHashMap<K, V>, key: K) => Option.Option<V>
>(2, <K, V>(self: MutableHashMap<K, V>, key: K): Option.Option<V> => {
  if (Equal.isEqual(key) === false) {
    return self.referential.has(key) ? Option.some(self.referential.get(key)!) : Option.none()
  }

  const hash = key[Hash.symbol]()
  const bucket = self.buckets.get(hash)
  if (bucket === undefined) {
    return Option.none()
  }

  return getFromBucket(self, bucket, key)
})

/**
 * @since 3.8.0
 * @category elements
 */
export const keys = <K, V>(self: MutableHashMap<K, V>): Array<K> => {
  const keys = Array.from(self.referential.keys())
  for (const bucket of self.buckets.values()) {
    for (let i = 0, len = bucket.length; i < len; i++) {
      keys.push(bucket[i][0])
    }
  }
  return keys
}

/**
 * @since 3.8.0
 * @category elements
 */
export const values = <K, V>(self: MutableHashMap<K, V>): Array<V> => {
  const values = Array.from(self.referential.values())
  for (const bucket of self.buckets.values()) {
    for (let i = 0, len = bucket.length; i < len; i++) {
      values.push(bucket[i][1])
    }
  }
  return values
}

const getFromBucket = <K, V>(
  self: MutableHashMap<K, V>,
  bucket: NonEmptyArray<readonly [K & Equal.Equal, V]>,
  key: K & Equal.Equal,
  remove = false
): Option.Option<V> => {
  for (let i = 0, len = bucket.length; i < len; i++) {
    if (key[Equal.symbol](bucket[i][0])) {
      const value = bucket[i][1]
      if (remove) {
        bucket.splice(i, 1)
        self.bucketsSize--
      }
      return Option.some(value)
    }
  }

  return Option.none()
}

/**
 * @since 2.0.0
 * @category elements
 */
export const has: {
  /**
   * @since 2.0.0
   * @category elements
   */
  <K>(key: K): <V>(self: MutableHashMap<K, V>) => boolean
  /**
   * @since 2.0.0
   * @category elements
   */
  <K, V>(self: MutableHashMap<K, V>, key: K): boolean
} = dual<
  /**
   * @since 2.0.0
   * @category elements
   */
  <K>(key: K) => <V>(self: MutableHashMap<K, V>) => boolean,
  /**
   * @since 2.0.0
   * @category elements
   */
  <K, V>(self: MutableHashMap<K, V>, key: K) => boolean
>(2, (self, key) => Option.isSome(get(self, key)))

/**
 * @since 2.0.0
 */
export const set: {
  /**
   * @since 2.0.0
   */
  <K, V>(key: K, value: V): (self: MutableHashMap<K, V>) => MutableHashMap<K, V>
  /**
   * @since 2.0.0
   */
  <K, V>(self: MutableHashMap<K, V>, key: K, value: V): MutableHashMap<K, V>
} = dual<
  /**
   * @since 2.0.0
   */
  <K, V>(key: K, value: V) => (self: MutableHashMap<K, V>) => MutableHashMap<K, V>,
  /**
   * @since 2.0.0
   */
  <K, V>(self: MutableHashMap<K, V>, key: K, value: V) => MutableHashMap<K, V>
>(3, <K, V>(self: MutableHashMap<K, V>, key: K, value: V) => {
  if (Equal.isEqual(key) === false) {
    self.referential.set(key, value)
    return self
  }

  const hash = key[Hash.symbol]()
  const bucket = self.buckets.get(hash)
  if (bucket === undefined) {
    self.buckets.set(hash, [[key, value]])
    self.bucketsSize++
    return self
  }

  removeFromBucket(self, bucket, key)
  bucket.push([key, value])
  self.bucketsSize++
  return self
})

const removeFromBucket = <K, V>(
  self: MutableHashMap<K, V>,
  bucket: NonEmptyArray<readonly [K & Equal.Equal, V]>,
  key: K & Equal.Equal
) => {
  for (let i = 0, len = bucket.length; i < len; i++) {
    if (key[Equal.symbol](bucket[i][0])) {
      bucket.splice(i, 1)
      self.bucketsSize--
      return
    }
  }
}

/**
 * Updates the value of the specified key within the `MutableHashMap` if it exists.
 *
 * @since 2.0.0
 */
export const modify: {
  /**
   * Updates the value of the specified key within the `MutableHashMap` if it exists.
   *
   * @since 2.0.0
   */
  <K, V>(key: K, f: (v: V) => V): (self: MutableHashMap<K, V>) => MutableHashMap<K, V>
  /**
   * Updates the value of the specified key within the `MutableHashMap` if it exists.
   *
   * @since 2.0.0
   */
  <K, V>(self: MutableHashMap<K, V>, key: K, f: (v: V) => V): MutableHashMap<K, V>
} = dual<
  /**
   * Updates the value of the specified key within the `MutableHashMap` if it exists.
   *
   * @since 2.0.0
   */
  <K, V>(key: K, f: (v: V) => V) => (self: MutableHashMap<K, V>) => MutableHashMap<K, V>,
  /**
   * Updates the value of the specified key within the `MutableHashMap` if it exists.
   *
   * @since 2.0.0
   */
  <K, V>(self: MutableHashMap<K, V>, key: K, f: (v: V) => V) => MutableHashMap<K, V>
>(3, <K, V>(self: MutableHashMap<K, V>, key: K, f: (v: V) => V) => {
  if (Equal.isEqual(key) === false) {
    if (self.referential.has(key)) {
      self.referential.set(key, f(self.referential.get(key)!))
    }
    return self
  }

  const hash = key[Hash.symbol]()
  const bucket = self.buckets.get(hash)
  if (bucket === undefined) {
    return self
  }

  const value = getFromBucket(self, bucket, key, true)
  if (Option.isNone(value)) {
    return self
  }
  bucket.push([key, f(value.value)])
  self.bucketsSize++
  return self
})

/**
 * Set or remove the specified key in the `MutableHashMap` using the specified
 * update function.
 *
 * @since 2.0.0
 */
export const modifyAt: {
  /**
   * Set or remove the specified key in the `MutableHashMap` using the specified
   * update function.
   *
   * @since 2.0.0
   */
  <K, V>(key: K, f: (value: Option.Option<V>) => Option.Option<V>): (self: MutableHashMap<K, V>) => MutableHashMap<K, V>
  /**
   * Set or remove the specified key in the `MutableHashMap` using the specified
   * update function.
   *
   * @since 2.0.0
   */
  <K, V>(
    self: MutableHashMap<K, V>,
    key: K,
    f: (value: Option.Option<V>) => Option.Option<V>
  ): MutableHashMap<K, V>
} = dual<
  /**
   * Set or remove the specified key in the `MutableHashMap` using the specified
   * update function.
   *
   * @since 2.0.0
   */
  <K, V>(key: K, f: (value: Option.Option<V>) => Option.Option<V>) => (self: MutableHashMap<K, V>) => MutableHashMap<K, V>,
  /**
   * Set or remove the specified key in the `MutableHashMap` using the specified
   * update function.
   *
   * @since 2.0.0
   */
  <K, V>(
    self: MutableHashMap<K, V>,
    key: K,
    f: (value: Option.Option<V>) => Option.Option<V>
  ) => MutableHashMap<K, V>
>(3, (self, key, f) => {
  if (Equal.isEqual(key) === false) {
    const result = f(get(self, key))
    if (Option.isSome(result)) {
      set(self, key, result.value)
    } else {
      remove(self, key)
    }
    return self
  }

  const hash = key[Hash.symbol]()
  const bucket = self.buckets.get(hash)
  if (bucket === undefined) {
    const result = f(Option.none())
    return Option.isSome(result) ? set(self, key, result.value) : self
  }

  const result = f(getFromBucket(self, bucket, key, true))
  if (Option.isNone(result)) {
    if (bucket.length === 0) {
      self.buckets.delete(hash)
    }
    return self
  }
  bucket.push([key, result.value])
  self.bucketsSize++
  return self
})

/**
 * @since 2.0.0
 */
export const remove: {
  /**
   * @since 2.0.0
   */
  <K>(key: K): <V>(self: MutableHashMap<K, V>) => MutableHashMap<K, V>
  /**
   * @since 2.0.0
   */
  <K, V>(self: MutableHashMap<K, V>, key: K): MutableHashMap<K, V>
} = dual<
  /**
   * @since 2.0.0
   */
  <K>(key: K) => <V>(self: MutableHashMap<K, V>) => MutableHashMap<K, V>,
  /**
   * @since 2.0.0
   */
  <K, V>(self: MutableHashMap<K, V>, key: K) => MutableHashMap<K, V>
>(2, <K, V>(self: MutableHashMap<K, V>, key: K) => {
  if (Equal.isEqual(key) === false) {
    self.referential.delete(key)
    return self
  }

  const hash = key[Hash.symbol]()
  const bucket = self.buckets.get(hash)
  if (bucket === undefined) {
    return self
  }
  removeFromBucket(self, bucket, key)
  if (bucket.length === 0) {
    self.buckets.delete(hash)
  }
  return self
})

/**
 * @since 2.0.0
 */
export const clear = <K, V>(self: MutableHashMap<K, V>) => {
  self.referential.clear()
  self.buckets.clear()
  self.bucketsSize = 0
  return self
}

/**
 * @since 2.0.0
 * @category elements
 */
export const size = <K, V>(self: MutableHashMap<K, V>): number => {
  return self.referential.size + self.bucketsSize
}

/**
 * @since 2.0.0
 */
export const isEmpty = <K, V>(self: MutableHashMap<K, V>): boolean => size(self) === 0

/**
 * @since 2.0.0
 */
export const forEach: {
  /**
   * @since 2.0.0
   */
  <K, V>(f: (value: V, key: K) => void): (self: MutableHashMap<K, V>) => void
  /**
   * @since 2.0.0
   */
  <K, V>(self: MutableHashMap<K, V>, f: (value: V, key: K) => void): void
} = dual(2, <K, V>(self: MutableHashMap<K, V>, f: (value: V, key: K) => void) => {
  self.referential.forEach(f)
  for (const bucket of self.buckets.values()) {
    for (const [key, value] of bucket) {
      f(value, key)
    }
  }
})
