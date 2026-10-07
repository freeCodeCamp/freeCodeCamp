/**
 * @since 2.0.0
 */
import * as Equal from "./Equal.js"
import * as Dual from "./Function.js"
import { pipe } from "./Function.js"
import * as Hash from "./Hash.js"
import { format, type Inspectable, NodeInspectSymbol, toJSON } from "./Inspectable.js"
import * as Option from "./Option.js"
import type { Order } from "./Order.js"
import type { Pipeable } from "./Pipeable.js"
import { pipeArguments } from "./Pipeable.js"
import { hasProperty } from "./Predicate.js"
import * as RBT from "./RedBlackTree.js"
import type * as Types from "./Types.js"

const TypeId: unique symbol = Symbol.for("effect/SortedMap")

/**
 * @since 2.0.0
 * @category symbol
 */
export type TypeId = typeof TypeId

/**
 * @since 2.0.0
 * @category models
 */
export interface SortedMap<in out K, out V> extends Iterable<[K, V]>, Equal.Equal, Pipeable, Inspectable {
  readonly [TypeId]: {
    readonly _K: Types.Invariant<K>
    readonly _V: Types.Covariant<V>
  }
  /** @internal */
  readonly tree: RBT.RedBlackTree<K, V>
}

const SortedMapProto: Omit<SortedMap<unknown, unknown>, "tree"> = {
  [TypeId]: {
    _K: (_: any) => _,
    _V: (_: never) => _
  },
  [Hash.symbol]<K, V>(this: SortedMap<K, V>): number {
    return pipe(
      Hash.hash(this.tree),
      Hash.combine(Hash.hash("effect/SortedMap")),
      Hash.cached(this)
    )
  },
  [Equal.symbol]<K, V>(this: SortedMap<K, V>, that: unknown): boolean {
    return isSortedMap(that) && Equal.equals(this.tree, that.tree)
  },
  [Symbol.iterator]<K, V>(this: SortedMap<K, V>): Iterator<[K, V]> {
    return this.tree[Symbol.iterator]()
  },
  toString() {
    return format(this.toJSON())
  },
  toJSON() {
    return {
      _id: "SortedMap",
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

const makeImpl = <K, V>(tree: RBT.RedBlackTree<K, V>): SortedMap<K, V> => {
  const self = Object.create(SortedMapProto)
  self.tree = tree
  return self
}

/**
 * @since 2.0.0
 * @category refinements
 */
export const isSortedMap: {
  /**
   * @since 2.0.0
   * @category refinements
   */
  <K, V>(u: Iterable<readonly [K, V]>): u is SortedMap<K, V>
  /**
   * @since 2.0.0
   * @category refinements
   */
  (u: unknown): u is SortedMap<unknown, unknown>
} = (u: unknown): u is SortedMap<unknown, unknown> => hasProperty(u, TypeId)

/**
 * @since 2.0.0
 * @category constructors
 */
export const empty = <K, V = never>(ord: Order<K>): SortedMap<K, V> => makeImpl<K, V>(RBT.empty<K, V>(ord))

/**
 * Creates a new `SortedMap` from an iterable collection of key/value pairs.
 *
 * @since 2.0.0
 * @category constructors
 */
export const fromIterable: {
  /**
   * Creates a new `SortedMap` from an iterable collection of key/value pairs.
   *
   * @since 2.0.0
   * @category constructors
   */
  <B>(ord: Order<B>): <K extends B, V>(iterable: Iterable<readonly [K, V]>) => SortedMap<K, V>
  /**
   * Creates a new `SortedMap` from an iterable collection of key/value pairs.
   *
   * @since 2.0.0
   * @category constructors
   */
  <K extends B, V, B>(iterable: Iterable<readonly [K, V]>, ord: Order<B>): SortedMap<K, V>
} = Dual.dual(
  2,
  <K extends B, V, B>(iterable: Iterable<readonly [K, V]>, ord: Order<B>): SortedMap<K, V> =>
    makeImpl(RBT.fromIterable(iterable, ord))
)

/**
 * @since 2.0.0
 * @category constructors
 */
export const make =
  <K>(ord: Order<K>) =>
  <Entries extends ReadonlyArray<readonly [K, any]>>(...entries: Entries): SortedMap<
    K,
    Entries[number] extends (readonly [any, infer V]) ? V : never
  > => fromIterable(ord)(entries)

/**
 * @since 2.0.0
 * @category predicates
 */
export const isEmpty = <K, V>(self: SortedMap<K, V>): boolean => size(self) === 0

/**
 * @since 2.0.0
 * @category predicates
 */
export const isNonEmpty = <K, V>(self: SortedMap<K, V>): boolean => size(self) > 0

/**
 * @since 2.0.0
 * @category elements
 */
export const get: {
  /**
   * @since 2.0.0
   * @category elements
   */
  <K>(key: K): <V>(self: SortedMap<K, V>) => Option.Option<V>
  /**
   * @since 2.0.0
   * @category elements
   */
  <K, V>(self: SortedMap<K, V>, key: K): Option.Option<V>
} = Dual.dual<
  <K>(key: K) => <V>(self: SortedMap<K, V>) => Option.Option<V>,
  <K, V>(self: SortedMap<K, V>, key: K) => Option.Option<V>
>(2, (self, key) => RBT.findFirst(self.tree, key))

/**
 * Gets the `Order<K>` that the `SortedMap<K, V>` is using.
 *
 * @since 2.0.0
 * @category getters
 */
export const getOrder = <K, V>(self: SortedMap<K, V>): Order<K> => RBT.getOrder(self.tree)

/**
 * @since 2.0.0
 * @category elements
 */
export const has: {
  /**
   * @since 2.0.0
   * @category elements
   */
  <K>(key: K): <V>(self: SortedMap<K, V>) => boolean
  /**
   * @since 2.0.0
   * @category elements
   */
  <K, V>(self: SortedMap<K, V>, key: K): boolean
} = Dual.dual<
  <K>(key: K) => <V>(self: SortedMap<K, V>) => boolean,
  <K, V>(self: SortedMap<K, V>, key: K) => boolean
>(2, (self, key) => Option.isSome(get(self, key)))

/**
 * @since 2.0.0
 * @category elements
 */
export const headOption = <K, V>(self: SortedMap<K, V>): Option.Option<[K, V]> => RBT.first(self.tree)

/**
 * @since 2.0.0
 * @category mapping
 */
export const map: {
  /**
   * @since 2.0.0
   * @category mapping
   */
  <A, K, B>(f: (a: A, k: K) => B): (self: SortedMap<K, A>) => SortedMap<K, B>
  /**
   * @since 2.0.0
   * @category mapping
   */
  <K, A, B>(self: SortedMap<K, A>, f: (a: A, k: K) => B): SortedMap<K, B>
} = Dual.dual<
  <A, K, B>(f: (a: A, k: K) => B) => (self: SortedMap<K, A>) => SortedMap<K, B>,
  <K, A, B>(self: SortedMap<K, A>, f: (a: A, k: K) => B) => SortedMap<K, B>
>(2, <K, A, B>(self: SortedMap<K, A>, f: (a: A, k: K) => B) =>
  reduce(
    self,
    empty<K, B>(RBT.getOrder(self.tree)),
    (acc, v, k) => set(acc, k, f(v, k))
  ))

/**
 * @since 2.0.0
 * @category folding
 */
export const reduce: {
  /**
   * @since 2.0.0
   * @category folding
   */
  <B, A, K>(zero: B, f: (acc: B, value: A, key: K) => B): (self: SortedMap<K, A>) => B
  /**
   * @since 2.0.0
   * @category folding
   */
  <K, A, B>(self: SortedMap<K, A>, zero: B, f: (acc: B, value: A, key: K) => B): B
} = Dual.dual<
  <B, A, K>(zero: B, f: (acc: B, value: A, key: K) => B) => (self: SortedMap<K, A>) => B,
  <K, A, B>(self: SortedMap<K, A>, zero: B, f: (acc: B, value: A, key: K) => B) => B
>(3, (self, zero, f) => RBT.reduce(self.tree, zero, f))

/**
 * @since 2.0.0
 * @category elements
 */
export const remove: {
  /**
   * @since 2.0.0
   * @category elements
   */
  <K>(key: K): <V>(self: SortedMap<K, V>) => SortedMap<K, V>
  /**
   * @since 2.0.0
   * @category elements
   */
  <K, V>(self: SortedMap<K, V>, key: K): SortedMap<K, V>
} = Dual.dual<
  <K>(key: K) => <V>(self: SortedMap<K, V>) => SortedMap<K, V>,
  <K, V>(self: SortedMap<K, V>, key: K) => SortedMap<K, V>
>(2, (self, key) => makeImpl(RBT.removeFirst(self.tree, key)))

/**
 * @since 2.0.0
 * @category elements
 */
export const set: {
  /**
   * @since 2.0.0
   * @category elements
   */
  <K, V>(key: K, value: V): (self: SortedMap<K, V>) => SortedMap<K, V>
  /**
   * @since 2.0.0
   * @category elements
   */
  <K, V>(self: SortedMap<K, V>, key: K, value: V): SortedMap<K, V>
} = Dual.dual<
  <K, V>(key: K, value: V) => (self: SortedMap<K, V>) => SortedMap<K, V>,
  <K, V>(self: SortedMap<K, V>, key: K, value: V) => SortedMap<K, V>
>(3, (self, key, value) =>
  RBT.has(self.tree, key)
    ? makeImpl(RBT.insert(RBT.removeFirst(self.tree, key), key, value))
    : makeImpl(RBT.insert(self.tree, key, value)))

/**
 * @since 2.0.0
 * @category getters
 */
export const size = <K, V>(self: SortedMap<K, V>): number => RBT.size(self.tree)

/**
 * @since 2.0.0
 * @category getters
 */
export const keys = <K, V>(self: SortedMap<K, V>): IterableIterator<K> => RBT.keys(self.tree)

/**
 * @since 2.0.0
 * @category getters
 */
export const values = <K, V>(self: SortedMap<K, V>): IterableIterator<V> => RBT.values(self.tree)

/**
 * @since 2.0.0
 * @category getters
 */
export const entries = <K, V>(self: SortedMap<K, V>): IterableIterator<[K, V]> => {
  const iterator: any = self.tree[Symbol.iterator]()
  iterator[Symbol.iterator] = () => entries(self)
  return iterator
}

/**
 * @since 3.1.0
 * @category elements
 */
export const lastOption = <K, V>(self: SortedMap<K, V>): Option.Option<[K, V]> => RBT.last(self.tree)

/**
 * @since 3.1.0
 * @category filtering
 */
export const partition: {
  /**
   * @since 3.1.0
   * @category filtering
   */
  <K, V>(predicate: (a: Types.NoInfer<K>) => boolean): (self: SortedMap<K, V>) => [excluded: SortedMap<K, V>, satisfying: SortedMap<K, V>]
  /**
   * @since 3.1.0
   * @category filtering
   */
  <K, V>(self: SortedMap<K, V>, predicate: (a: K) => boolean): [excluded: SortedMap<K, V>, satisfying: SortedMap<K, V>]
} = Dual.dual(
  2,
  <K, V>(
    self: SortedMap<K, V>,
    predicate: (a: K) => boolean
  ): [excluded: SortedMap<K, V>, satisfying: SortedMap<K, V>] => {
    const ord = RBT.getOrder(self.tree)
    let right = empty<K, V>(ord)
    let left = empty<K, V>(ord)
    for (const value of self) {
      if (predicate(value[0])) {
        right = set(right, value[0], value[1])
      } else {
        left = set(left, value[0], value[1])
      }
    }
    return [left, right]
  }
)
