import * as Equal from "../Equal.js"
import * as Dual from "../Function.js"
import { identity, pipe } from "../Function.js"
import * as Hash from "../Hash.js"
import type * as HM from "../HashMap.js"
import { format, NodeInspectSymbol, toJSON } from "../Inspectable.js"
import * as Option from "../Option.js"
import { pipeArguments } from "../Pipeable.js"
import { hasProperty } from "../Predicate.js"
import type { NoInfer } from "../Types.js"
import { fromBitmap, hashFragment, toBitmap } from "./hashMap/bitwise.js"
import { SIZE } from "./hashMap/config.js"
import * as Node from "./hashMap/node.js"

const HashMapSymbolKey = "effect/HashMap"

/** @internal */
export const HashMapTypeId: HM.TypeId = Symbol.for(HashMapSymbolKey) as HM.TypeId

type TraversalFn<K, V, A> = (k: K, v: V) => A

type Cont<K, V, A> =
  | [
    len: number,
    children: Array<Node.Node<K, V>>,
    i: number,
    f: TraversalFn<K, V, A>,
    cont: Cont<K, V, A>
  ]
  | undefined

interface VisitResult<K, V, A> {
  value: A
  cont: Cont<K, V, A>
}

/** @internal */
export interface HashMapImpl<out K, out V> extends HM.HashMap<K, V> {
  _editable: boolean // mutable by design
  _edit: number // mutable by design
  _root: Node.Node<K, V> // mutable by design
  _size: number // mutable by design
}

const HashMapProto: HM.HashMap<unknown, unknown> = {
  [HashMapTypeId]: HashMapTypeId,
  [Symbol.iterator]<K, V>(this: HashMapImpl<K, V>): Iterator<[K, V]> {
    return new HashMapIterator(this, (k, v) => [k, v])
  },
  [Hash.symbol](this: HM.HashMap<unknown, unknown>): number {
    let hash = Hash.hash(HashMapSymbolKey)
    for (const item of this) {
      hash ^= pipe(Hash.hash(item[0]), Hash.combine(Hash.hash(item[1])))
    }
    return Hash.cached(this, hash)
  },
  [Equal.symbol]<K, V>(this: HashMapImpl<K, V>, that: unknown): boolean {
    if (isHashMap(that)) {
      if ((that as HashMapImpl<K, V>)._size !== this._size) {
        return false
      }
      for (const item of this) {
        const elem = pipe(
          that as HM.HashMap<K, V>,
          getHash(item[0], Hash.hash(item[0]))
        )
        if (Option.isNone(elem)) {
          return false
        } else {
          if (!Equal.equals(item[1], elem.value)) {
            return false
          }
        }
      }
      return true
    }
    return false
  },
  toString<K, V>(this: HashMapImpl<K, V>) {
    return format(this.toJSON())
  },
  toJSON() {
    return {
      _id: "HashMap",
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

const makeImpl = <K, V>(
  editable: boolean,
  edit: number,
  root: Node.Node<K, V>,
  size: number
): HashMapImpl<K, V> => {
  const map = Object.create(HashMapProto)
  map._editable = editable
  map._edit = edit
  map._root = root
  map._size = size
  return map
}

class HashMapIterator<in out K, in out V, out T> implements IterableIterator<T> {
  v: Option.Option<VisitResult<K, V, T>>

  constructor(readonly map: HashMapImpl<K, V>, readonly f: TraversalFn<K, V, T>) {
    this.v = visitLazy(this.map._root, this.f, undefined)
  }

  next(): IteratorResult<T> {
    if (Option.isNone(this.v)) {
      return { done: true, value: undefined }
    }
    const v0 = this.v.value
    this.v = applyCont(v0.cont)
    return { done: false, value: v0.value }
  }

  [Symbol.iterator](): IterableIterator<T> {
    return new HashMapIterator(this.map, this.f)
  }
}

const applyCont = <K, V, A>(cont: Cont<K, V, A>): Option.Option<VisitResult<K, V, A>> =>
  cont
    ? visitLazyChildren(cont[0], cont[1], cont[2], cont[3], cont[4])
    : Option.none()

const visitLazy = <K, V, A>(
  node: Node.Node<K, V>,
  f: TraversalFn<K, V, A>,
  cont: Cont<K, V, A> = undefined
): Option.Option<VisitResult<K, V, A>> => {
  switch (node._tag) {
    case "LeafNode": {
      if (Option.isSome(node.value)) {
        return Option.some({
          value: f(node.key, node.value.value),
          cont
        })
      }
      return applyCont(cont)
    }
    case "CollisionNode":
    case "ArrayNode":
    case "IndexedNode": {
      const children = node.children
      return visitLazyChildren(children.length, children, 0, f, cont)
    }
    default: {
      return applyCont(cont)
    }
  }
}

const visitLazyChildren = <K, V, A>(
  len: number,
  children: Array<Node.Node<K, V>>,
  i: number,
  f: TraversalFn<K, V, A>,
  cont: Cont<K, V, A>
): Option.Option<VisitResult<K, V, A>> => {
  while (i < len) {
    const child = children[i++]
    if (child && !Node.isEmptyNode(child)) {
      return visitLazy(child, f, [len, children, i, f, cont])
    }
  }
  return applyCont(cont)
}

const _empty = makeImpl<never, never>(false, 0, new Node.EmptyNode(), 0)

/** @internal */
export const empty = <K = never, V = never>(): HM.HashMap<K, V> => _empty

/** @internal */
export const make = <Entries extends ReadonlyArray<readonly [any, any]>>(
  ...entries: Entries
): HM.HashMap<
  Entries[number] extends readonly [infer K, any] ? K : never,
  Entries[number] extends readonly [any, infer V] ? V : never
> => fromIterable(entries)

/** @internal */
export const fromIterable = <K, V>(entries: Iterable<readonly [K, V]>): HM.HashMap<K, V> => {
  const map = beginMutation(empty<K, V>())
  for (const entry of entries) {
    set(map, entry[0], entry[1])
  }
  return endMutation(map)
}

/** @internal */
export const isHashMap: {
  <K, V>(u: Iterable<readonly [K, V]>): u is HM.HashMap<K, V>
  (u: unknown): u is HM.HashMap<unknown, unknown>
} = (u: unknown): u is HM.HashMap<unknown, unknown> => hasProperty(u, HashMapTypeId)

/** @internal */
export const isEmpty = <K, V>(self: HM.HashMap<K, V>): boolean =>
  self && Node.isEmptyNode((self as HashMapImpl<K, V>)._root)

/** @internal */
export const get = Dual.dual<
  <K1 extends K, K>(key: K1) => <V>(self: HM.HashMap<K, V>) => Option.Option<V>,
  <K, V, K1 extends K>(self: HM.HashMap<K, V>, key: K1) => Option.Option<V>
>(2, (self, key) => getHash(self, key, Hash.hash(key)))

/** @internal */
export const getHash = Dual.dual<
  <K1 extends K, K>(key: K1, hash: number) => <V>(self: HM.HashMap<K, V>) => Option.Option<V>,
  <K, V, K1 extends K>(self: HM.HashMap<K, V>, key: K1, hash: number) => Option.Option<V>
>(3, <K, V, K1 extends K>(self: HM.HashMap<K, V>, key: K1, hash: number) => {
  let node = (self as HashMapImpl<K, V>)._root
  let shift = 0

  while (true) {
    switch (node._tag) {
      case "LeafNode": {
        return Equal.equals(key, node.key) ? node.value : Option.none()
      }
      case "CollisionNode": {
        if (hash === node.hash) {
          const children = node.children
          for (let i = 0, len = children.length; i < len; ++i) {
            const child = children[i]!
            if ("key" in child && Equal.equals(key, child.key)) {
              return child.value
            }
          }
        }
        return Option.none()
      }
      case "IndexedNode": {
        const frag = hashFragment(shift, hash)
        const bit = toBitmap(frag)
        if (node.mask & bit) {
          node = node.children[fromBitmap(node.mask, bit)]!
          shift += SIZE
          break
        }
        return Option.none()
      }
      case "ArrayNode": {
        node = node.children[hashFragment(shift, hash)]!
        if (node) {
          shift += SIZE
          break
        }
        return Option.none()
      }
      default:
        return Option.none()
    }
  }
})

/** @internal */
export const unsafeGet = Dual.dual<
  <K1 extends K, K>(key: K1) => <V>(self: HM.HashMap<K, V>) => V,
  <K, V, K1 extends K>(self: HM.HashMap<K, V>, key: K1) => V
>(2, (self, key) => {
  const element = getHash(self, key, Hash.hash(key))
  if (Option.isNone(element)) {
    throw new Error("Expected map to contain key")
  }
  return element.value
})

/** @internal */
export const has = Dual.dual<
  <K1 extends K, K>(key: K1) => <V>(self: HM.HashMap<K, V>) => boolean,
  <K, V, K1 extends K>(self: HM.HashMap<K, V>, key: K1) => boolean
>(2, (self, key) => Option.isSome(getHash(self, key, Hash.hash(key))))

/** @internal */
export const hasHash = Dual.dual<
  <K1 extends K, K>(key: K1, hash: number) => <V>(self: HM.HashMap<K, V>) => boolean,
  <K, V, K1 extends K>(self: HM.HashMap<K, V>, key: K1, hash: number) => boolean
>(3, (self, key, hash) => Option.isSome(getHash(self, key, hash)))

/** @internal */
export const hasBy = Dual.dual<
  <K, V>(predicate: (value: NoInfer<V>, key: NoInfer<K>) => boolean) => (self: HM.HashMap<K, V>) => boolean,
  <K, V>(self: HM.HashMap<K, V>, predicate: (value: NoInfer<V>, key: NoInfer<K>) => boolean) => boolean
>(2, (self, predicate) => Option.isSome(findFirst(self, predicate)))

/** @internal */
export const set = Dual.dual<
  <K, V>(key: K, value: V) => (self: HM.HashMap<K, V>) => HM.HashMap<K, V>,
  <K, V>(self: HM.HashMap<K, V>, key: K, value: V) => HM.HashMap<K, V>
>(3, (self, key, value) => modifyAt(self, key, () => Option.some(value)))

/** @internal */
export const setTree = Dual.dual<
  <K, V>(newRoot: Node.Node<K, V>, newSize: number) => (self: HM.HashMap<K, V>) => HM.HashMap<K, V>,
  <K, V>(self: HM.HashMap<K, V>, newRoot: Node.Node<K, V>, newSize: number) => HM.HashMap<K, V>
>(3, <K, V>(self: HM.HashMap<K, V>, newRoot: Node.Node<K, V>, newSize: number) => {
  if ((self as HashMapImpl<K, V>)._editable) {
    ;(self as HashMapImpl<K, V>)._root = newRoot
    ;(self as HashMapImpl<K, V>)._size = newSize
    return self
  }
  return newRoot === (self as HashMapImpl<K, V>)._root
    ? self
    : makeImpl(
      (self as HashMapImpl<K, V>)._editable,
      (self as HashMapImpl<K, V>)._edit,
      newRoot,
      newSize
    )
})

/** @internal */
export const keys = <K, V>(self: HM.HashMap<K, V>): IterableIterator<K> =>
  new HashMapIterator(self as HashMapImpl<K, V>, (key) => key)

/** @internal */
export const values = <K, V>(self: HM.HashMap<K, V>): IterableIterator<V> =>
  new HashMapIterator(self as HashMapImpl<K, V>, (_, value) => value)

/** @internal */
export const entries = <K, V>(self: HM.HashMap<K, V>): IterableIterator<[K, V]> =>
  new HashMapIterator(self as HashMapImpl<K, V>, (key, value) => [key, value])

/** @internal */
export const size = <K, V>(self: HM.HashMap<K, V>): number => (self as HashMapImpl<K, V>)._size

/** @internal */
export const countBy = Dual.dual<
  <K, V>(predicate: (value: NoInfer<V>, key: NoInfer<K>) => boolean) => (self: HM.HashMap<K, V>) => number,
  <K, V>(self: HM.HashMap<K, V>, predicate: (value: NoInfer<V>, key: NoInfer<K>) => boolean) => number
>(2, (self, f) => {
  let count = 0
  for (const [k, a] of self) {
    if (f(a, k)) {
      count++
    }
  }
  return count
})

/** @internal */
export const beginMutation = <K, V>(self: HM.HashMap<K, V>): HM.HashMap<K, V> =>
  makeImpl(
    true,
    (self as HashMapImpl<K, V>)._edit + 1,
    (self as HashMapImpl<K, V>)._root,
    (self as HashMapImpl<K, V>)._size
  )

/** @internal */
export const endMutation = <K, V>(self: HM.HashMap<K, V>): HM.HashMap<K, V> => {
  ;(self as HashMapImpl<K, V>)._editable = false
  return self
}

/** @internal */
export const mutate = Dual.dual<
  <K, V>(f: (self: HM.HashMap<K, V>) => void) => (self: HM.HashMap<K, V>) => HM.HashMap<K, V>,
  <K, V>(self: HM.HashMap<K, V>, f: (self: HM.HashMap<K, V>) => void) => HM.HashMap<K, V>
>(2, (self, f) => {
  const transient = beginMutation(self)
  f(transient)
  return endMutation(transient)
})

/** @internal */
export const modifyAt = Dual.dual<
  <K, V>(key: K, f: HM.HashMap.UpdateFn<V>) => (self: HM.HashMap<K, V>) => HM.HashMap<K, V>,
  <K, V>(self: HM.HashMap<K, V>, key: K, f: HM.HashMap.UpdateFn<V>) => HM.HashMap<K, V>
>(3, (self, key, f) => modifyHash(self, key, Hash.hash(key), f))

/** @internal */
export const modifyHash = Dual.dual<
  <K, V>(key: K, hash: number, f: HM.HashMap.UpdateFn<V>) => (self: HM.HashMap<K, V>) => HM.HashMap<K, V>,
  <K, V>(self: HM.HashMap<K, V>, key: K, hash: number, f: HM.HashMap.UpdateFn<V>) => HM.HashMap<K, V>
>(4, <K, V>(self: HM.HashMap<K, V>, key: K, hash: number, f: HM.HashMap.UpdateFn<V>) => {
  const size = { value: (self as HashMapImpl<K, V>)._size }
  const newRoot = (self as HashMapImpl<K, V>)._root.modify(
    (self as HashMapImpl<K, V>)._editable ?
      (self as HashMapImpl<K, V>)._edit :
      NaN,
    0,
    f,
    hash,
    key,
    size
  )
  return pipe(self, setTree(newRoot, size.value))
})

/** @internal */
export const modify = Dual.dual<
  <K, V>(key: K, f: (v: V) => V) => (self: HM.HashMap<K, V>) => HM.HashMap<K, V>,
  <K, V>(self: HM.HashMap<K, V>, key: K, f: (v: V) => V) => HM.HashMap<K, V>
>(3, (self, key, f) => modifyAt(self, key, Option.map(f)))

/** @internal */
export const union = Dual.dual<
  <K1, V1>(
    that: HM.HashMap<K1, V1>
  ) => <K0, V0>(self: HM.HashMap<K0, V0>) => HM.HashMap<K0 | K1, V0 | V1>,
  <K0, V0, K1, V1>(
    self: HM.HashMap<K0, V0>,
    that: HM.HashMap<K1, V1>
  ) => HM.HashMap<K0 | K1, V0 | V1>
>(2, <K0, V0, K1, V1>(self: HM.HashMap<K0, V0>, that: HM.HashMap<K1, V1>) => {
  const result: HM.HashMap<K0 | K1, V0 | V1> = beginMutation(self)
  forEach(that, (v, k) => set(result, k, v))
  return endMutation(result)
})

/** @internal */
export const remove = Dual.dual<
  <K>(key: K) => <V>(self: HM.HashMap<K, V>) => HM.HashMap<K, V>,
  <K, V>(self: HM.HashMap<K, V>, key: K) => HM.HashMap<K, V>
>(2, (self, key) => modifyAt(self, key, Option.none))

/** @internal */
export const removeMany = Dual.dual<
  <K>(keys: Iterable<K>) => <V>(self: HM.HashMap<K, V>) => HM.HashMap<K, V>,
  <K, V>(self: HM.HashMap<K, V>, keys: Iterable<K>) => HM.HashMap<K, V>
>(2, (self, keys) =>
  mutate(self, (map) => {
    for (const key of keys) {
      remove(key)(map)
    }
  }))

/**
 * Maps over the entries of the `HashMap` using the specified function.
 *
 * @since 2.0.0
 * @category mapping
 */
export const map = Dual.dual<
  <A, V, K>(f: (value: V, key: K) => A) => (self: HM.HashMap<K, V>) => HM.HashMap<K, A>,
  <K, V, A>(self: HM.HashMap<K, V>, f: (value: V, key: K) => A) => HM.HashMap<K, A>
>(2, (self, f) =>
  reduce(
    self,
    empty(),
    (map, value, key) => set(map, key, f(value, key))
  ))

/** @internal */
export const flatMap = Dual.dual<
  <A, K, B>(
    f: (value: A, key: K) => HM.HashMap<K, B>
  ) => (self: HM.HashMap<K, A>) => HM.HashMap<K, B>,
  <K, A, B>(self: HM.HashMap<K, A>, f: (value: A, key: K) => HM.HashMap<K, B>) => HM.HashMap<K, B>
>(
  2,
  (self, f) =>
    reduce(self, empty(), (zero, value, key) =>
      mutate(
        zero,
        (map) => forEach(f(value, key), (value, key) => set(map, key, value))
      ))
)

/** @internal */
export const forEach = Dual.dual<
  <V, K>(f: (value: V, key: K) => void) => (self: HM.HashMap<K, V>) => void,
  <V, K>(self: HM.HashMap<K, V>, f: (value: V, key: K) => void) => void
>(2, (self, f) => reduce(self, void 0 as void, (_, value, key) => f(value, key)))

/** @internal */
export const reduce = Dual.dual<
  <Z, V, K>(zero: Z, f: (accumulator: Z, value: V, key: K) => Z) => (self: HM.HashMap<K, V>) => Z,
  <Z, V, K>(self: HM.HashMap<K, V>, zero: Z, f: (accumulator: Z, value: V, key: K) => Z) => Z
>(3, <Z, V, K>(self: HM.HashMap<K, V>, zero: Z, f: (accumulator: Z, value: V, key: K) => Z) => {
  const root = (self as HashMapImpl<K, V>)._root
  if (root._tag === "LeafNode") {
    return Option.isSome(root.value) ? f(zero, root.value.value, root.key) : zero
  }
  if (root._tag === "EmptyNode") {
    return zero
  }
  const toVisit = [root.children]
  let children
  while ((children = toVisit.pop())) {
    for (let i = 0, len = children.length; i < len;) {
      const child = children[i++]
      if (child && !Node.isEmptyNode(child)) {
        if (child._tag === "LeafNode") {
          if (Option.isSome(child.value)) {
            zero = f(zero, child.value.value, child.key)
          }
        } else {
          toVisit.push(child.children)
        }
      }
    }
  }
  return zero
})

/** @internal */
export const filter: {
  <K, A, B extends A>(f: (a: NoInfer<A>, k: K) => a is B): (self: HM.HashMap<K, A>) => HM.HashMap<K, B>
  <K, A>(f: (a: NoInfer<A>, k: K) => boolean): (self: HM.HashMap<K, A>) => HM.HashMap<K, A>
  <K, A, B extends A>(self: HM.HashMap<K, A>, f: (a: A, k: K) => a is B): HM.HashMap<K, B>
  <K, A>(self: HM.HashMap<K, A>, f: (a: A, k: K) => boolean): HM.HashMap<K, A>
} = Dual.dual(
  2,
  <K, A>(self: HM.HashMap<K, A>, f: (a: A, k: K) => boolean): HM.HashMap<K, A> =>
    mutate(empty(), (map) => {
      for (const [k, a] of self) {
        if (f(a, k)) {
          set(map, k, a)
        }
      }
    })
)

/** @internal */
export const compact = <K, A>(self: HM.HashMap<K, Option.Option<A>>) => filterMap(self, identity)

/** @internal */
export const filterMap = Dual.dual<
  <A, K, B>(
    f: (value: A, key: K) => Option.Option<B>
  ) => (self: HM.HashMap<K, A>) => HM.HashMap<K, B>,
  <K, A, B>(self: HM.HashMap<K, A>, f: (value: A, key: K) => Option.Option<B>) => HM.HashMap<K, B>
>(2, (self, f) =>
  mutate(empty(), (map) => {
    for (const [k, a] of self) {
      const option = f(a, k)
      if (Option.isSome(option)) {
        set(map, k, option.value)
      }
    }
  }))

/** @internal */
export const findFirst: {
  <K, A, B extends A>(predicate: (a: NoInfer<A>, k: K) => a is B): (self: HM.HashMap<K, A>) => Option.Option<[K, B]>
  <K, A>(predicate: (a: NoInfer<A>, k: K) => boolean): (self: HM.HashMap<K, A>) => Option.Option<[K, A]>
  <K, A, B extends A>(self: HM.HashMap<K, A>, predicate: (a: A, k: K) => a is B): Option.Option<[K, B]>
  <K, A>(self: HM.HashMap<K, A>, predicate: (a: A, k: K) => boolean): Option.Option<[K, A]>
} = Dual.dual(
  2,
  <K, A>(self: HM.HashMap<K, A>, predicate: (a: A, k: K) => boolean): Option.Option<[K, A]> => {
    for (const ka of self) {
      if (predicate(ka[1], ka[0])) {
        return Option.some(ka)
      }
    }
    return Option.none()
  }
)

/** @internal */
export const some: {
  <K, A>(predicate: (a: NoInfer<A>, k: K) => boolean): (self: HM.HashMap<K, A>) => boolean
  <K, A>(self: HM.HashMap<K, A>, predicate: (a: A, k: K) => boolean): boolean
} = Dual.dual(
  2,
  <K, A>(self: HM.HashMap<K, A>, predicate: (a: A, k: K) => boolean): boolean => {
    for (const ka of self) {
      if (predicate(ka[1], ka[0])) {
        return true
      }
    }
    return false
  }
)

/** @internal */
export const every: {
  <K, A>(predicate: (a: NoInfer<A>, k: K) => boolean): (self: HM.HashMap<K, A>) => boolean
  <K, A>(self: HM.HashMap<K, A>, predicate: (a: A, k: K) => boolean): boolean
} = Dual.dual(
  2,
  <K, A>(self: HM.HashMap<K, A>, predicate: (a: A, k: K) => boolean): boolean => !some(self, (a, k) => !predicate(a, k))
)
