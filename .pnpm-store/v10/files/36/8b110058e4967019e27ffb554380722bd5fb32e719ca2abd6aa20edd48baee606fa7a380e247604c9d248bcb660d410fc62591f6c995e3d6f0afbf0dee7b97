import * as Equal from "../Equal.js"
import { dual, identity, pipe } from "../Function.js"
import * as Hash from "../Hash.js"
import { format, NodeInspectSymbol, toJSON } from "../Inspectable.js"
import * as Option from "../Option.js"
import type * as Ordering from "../Ordering.js"
import { pipeArguments } from "../Pipeable.js"
import { hasProperty } from "../Predicate.js"
import type * as TR from "../Trie.js"
import type { NoInfer } from "../Types.js"

const TrieSymbolKey = "effect/Trie"

/** @internal */
export const TrieTypeId: TR.TypeId = Symbol.for(TrieSymbolKey) as TR.TypeId

type TraversalMap<K, V, A> = (k: K, v: V) => A

type TraversalFilter<K, V> = (k: K, v: V) => boolean

/** @internal */
export interface TrieImpl<in out V> extends TR.Trie<V> {
  readonly _root: Node<V> | undefined
  readonly _count: number
}

const trieVariance = {
  /* c8 ignore next */
  _Value: (_: never) => _
}

const TrieProto: TR.Trie<unknown> = {
  [TrieTypeId]: trieVariance,
  [Symbol.iterator]<V>(this: TrieImpl<V>): Iterator<[string, V]> {
    return new TrieIterator(this, (k, v) => [k, v], () => true)
  },
  [Hash.symbol](this: TR.Trie<unknown>): number {
    let hash = Hash.hash(TrieSymbolKey)
    for (const item of this) {
      hash ^= pipe(Hash.hash(item[0]), Hash.combine(Hash.hash(item[1])))
    }
    return Hash.cached(this, hash)
  },
  [Equal.symbol]<V>(this: TrieImpl<V>, that: unknown): boolean {
    if (isTrie(that)) {
      const entries = Array.from(that)
      return Array.from(this).every((itemSelf, i) => {
        const itemThat = entries[i]
        return Equal.equals(itemSelf[0], itemThat[0]) && Equal.equals(itemSelf[1], itemThat[1])
      })
    }
    return false
  },
  toString() {
    return format(this.toJSON())
  },
  toJSON() {
    return {
      _id: "Trie",
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

const makeImpl = <V>(root: Node<V> | undefined): TrieImpl<V> => {
  const trie = Object.create(TrieProto)
  trie._root = root
  trie._count = root?.count ?? 0
  return trie
}

class TrieIterator<in out V, out T> implements IterableIterator<T> {
  stack: Array<[Node<V>, string, boolean]> = []

  constructor(
    readonly trie: TrieImpl<V>,
    readonly f: TraversalMap<string, V, T>,
    readonly filter: TraversalFilter<string, V>
  ) {
    const root = trie._root !== undefined ? trie._root : undefined
    if (root !== undefined) {
      this.stack.push([root, "", false])
    }
  }

  next(): IteratorResult<T> {
    while (this.stack.length > 0) {
      const [node, keyString, isAdded] = this.stack.pop()!

      if (isAdded) {
        const value = node.value
        if (value !== undefined) {
          const key = keyString + node.key
          if (this.filter(key, value)) {
            return { done: false, value: this.f(key, value) }
          }
        }
      } else {
        this.addToStack(node, keyString)
      }
    }

    return { done: true, value: undefined }
  }

  addToStack(node: Node<V>, keyString: string) {
    if (node.right !== undefined) {
      this.stack.push([node.right, keyString, false])
    }
    if (node.mid !== undefined) {
      this.stack.push([node.mid, keyString + node.key, false])
    }
    this.stack.push([node, keyString, true])
    if (node.left !== undefined) {
      this.stack.push([node.left, keyString, false])
    }
  }

  [Symbol.iterator](): IterableIterator<T> {
    return new TrieIterator(this.trie, this.f, this.filter)
  }
}

/** @internal */
export const isTrie: {
  <V>(u: Iterable<readonly [string, V]>): u is TR.Trie<V>
  (u: unknown): u is TR.Trie<unknown>
} = (u: unknown): u is TR.Trie<unknown> => hasProperty(u, TrieTypeId)

/** @internal */
export const empty = <V = never>(): TR.Trie<V> => makeImpl<V>(undefined)

/** @internal */
export const fromIterable = <V>(entries: Iterable<readonly [string, V]>) => {
  let trie = empty<V>()
  for (const [key, value] of entries) {
    trie = insert(trie, key, value)
  }
  return trie
}

/** @internal */
export const make = <Entries extends Array<readonly [string, any]>>(...entries: Entries): TR.Trie<
  Entries[number] extends readonly [any, infer V] ? V : never
> => {
  return fromIterable(entries)
}

/** @internal */
export const insert = dual<
  <V>(key: string, value: V) => (self: TR.Trie<V>) => TR.Trie<V>,
  <V>(self: TR.Trie<V>, key: string, value: V) => TR.Trie<V>
>(3, <V>(self: TR.Trie<V>, key: string, value: V) => {
  if (key.length === 0) return self

  // -1:left | 0:mid | 1:right
  const dStack: Array<Ordering.Ordering> = []
  const nStack: Array<Node<V>> = []
  let n: Node<V> = (self as TrieImpl<V>)._root ?? {
    key: key[0],
    count: 0
  }
  const count = n.count + 1
  let cIndex = 0

  while (cIndex < key.length) {
    const c = key[cIndex]
    nStack.push(n)
    if (c > n.key) {
      dStack.push(1)
      if (n.right === undefined) {
        n = { key: c, count }
      } else {
        n = n.right
      }
    } else if (c < n.key) {
      dStack.push(-1)
      if (n.left === undefined) {
        n = { key: c, count }
      } else {
        n = n.left
      }
    } else {
      if (cIndex === key.length - 1) {
        n.value = value
      } else if (n.mid === undefined) {
        dStack.push(0)
        n = { key: key[cIndex + 1], count }
      } else {
        dStack.push(0)
        n = n.mid
      }

      cIndex += 1
    }
  }

  // Rebuild path to leaf node (Path-copying immutability)
  for (let s = nStack.length - 2; s >= 0; --s) {
    const n2 = nStack[s]
    const d = dStack[s]
    if (d === -1) {
      // left
      nStack[s] = {
        key: n2.key,
        count,
        value: n2.value,
        left: nStack[s + 1],
        mid: n2.mid,
        right: n2.right
      }
    } else if (d === 1) {
      // right
      nStack[s] = {
        key: n2.key,
        count,
        value: n2.value,
        left: n2.left,
        mid: n2.mid,
        right: nStack[s + 1]
      }
    } else {
      // mid
      nStack[s] = {
        key: n2.key,
        count,
        value: n2.value,
        left: n2.left,
        mid: nStack[s + 1],
        right: n2.right
      }
    }
  }

  nStack[0].count = count
  return makeImpl(nStack[0])
})

/** @internal */
export const size = <V>(self: TR.Trie<V>): number => (self as TrieImpl<V>)._root?.count ?? 0

/** @internal */
export const isEmpty = <V>(self: TR.Trie<V>): boolean => size(self) === 0

/** @internal */
export const keys = <V>(self: TR.Trie<V>): IterableIterator<string> =>
  new TrieIterator(self as TrieImpl<V>, (key) => key, () => true)

/** @internal */
export const values = <V>(self: TR.Trie<V>): IterableIterator<V> =>
  new TrieIterator(self as TrieImpl<V>, (_, value) => value, () => true)

/** @internal */
export const entries = <V>(self: TR.Trie<V>): IterableIterator<[string, V]> =>
  new TrieIterator(self as TrieImpl<V>, (key, value) => [key, value], () => true)

/** @internal */
export const reduce = dual<
  <Z, V>(
    zero: Z,
    f: (accumulator: Z, value: V, key: string) => Z
  ) => (self: TR.Trie<V>) => Z,
  <Z, V>(self: TR.Trie<V>, zero: Z, f: (accumulator: Z, value: V, key: string) => Z) => Z
>(3, (self, zero, f) => {
  let accumulator = zero
  for (const entry of self) {
    accumulator = f(accumulator, entry[1], entry[0])
  }
  return accumulator
})

/** @internal */
export const map = dual<
  <A, V>(f: (value: V, key: string) => A) => (self: TR.Trie<V>) => TR.Trie<A>,
  <V, A>(self: TR.Trie<V>, f: (value: V, key: string) => A) => TR.Trie<A>
>(2, (self, f) =>
  reduce(
    self,
    empty(),
    (trie, value, key) => insert(trie, key, f(value, key))
  ))

/** @internal */
export const filter: {
  <A, B extends A>(f: (a: NoInfer<A>, k: string) => a is B): (self: TR.Trie<A>) => TR.Trie<B>
  <A>(f: (a: NoInfer<A>, k: string) => boolean): (self: TR.Trie<A>) => TR.Trie<A>
  <A, B extends A>(self: TR.Trie<A>, f: (a: A, k: string) => a is B): TR.Trie<B>
  <A>(self: TR.Trie<A>, f: (a: A, k: string) => boolean): TR.Trie<A>
} = dual(
  2,
  <A>(self: TR.Trie<A>, f: (a: A, k: string) => boolean): TR.Trie<A> =>
    reduce(
      self,
      empty(),
      (trie, value, key) => f(value, key) ? insert(trie, key, value) : trie
    )
)

/** @internal */
export const filterMap = dual<
  <A, B>(
    f: (value: A, key: string) => Option.Option<B>
  ) => (self: TR.Trie<A>) => TR.Trie<B>,
  <A, B>(self: TR.Trie<A>, f: (value: A, key: string) => Option.Option<B>) => TR.Trie<B>
>(2, (self, f) =>
  reduce(
    self,
    empty(),
    (trie, value, key) => {
      const option = f(value, key)
      return Option.isSome(option) ? insert(trie, key, option.value) : trie
    }
  ))

/** @internal */
export const compact = <A>(self: TR.Trie<Option.Option<A>>) => filterMap(self, identity)

/** @internal */
export const forEach = dual<
  <V>(f: (value: V, key: string) => void) => (self: TR.Trie<V>) => void,
  <V>(self: TR.Trie<V>, f: (value: V, key: string) => void) => void
>(2, (self, f) => reduce(self, void 0 as void, (_, value, key) => f(value, key)))

/** @internal */
export const keysWithPrefix = dual<
  (prefix: string) => <V>(self: TR.Trie<V>) => IterableIterator<string>,
  <V>(self: TR.Trie<V>, prefix: string) => IterableIterator<string>
>(
  2,
  <V>(self: TR.Trie<V>, prefix: string): IterableIterator<string> =>
    new TrieIterator(self as TrieImpl<V>, (key) => key, (key) => key.startsWith(prefix))
)

/** @internal */
export const valuesWithPrefix = dual<
  (prefix: string) => <V>(self: TR.Trie<V>) => IterableIterator<V>,
  <V>(self: TR.Trie<V>, prefix: string) => IterableIterator<V>
>(
  2,
  <V>(self: TR.Trie<V>, prefix: string): IterableIterator<V> =>
    new TrieIterator(self as TrieImpl<V>, (_, value) => value, (key) => key.startsWith(prefix))
)

/** @internal */
export const entriesWithPrefix = dual<
  (prefix: string) => <V>(self: TR.Trie<V>) => IterableIterator<[string, V]>,
  <V>(self: TR.Trie<V>, prefix: string) => IterableIterator<[string, V]>
>(
  2,
  <V>(self: TR.Trie<V>, prefix: string): IterableIterator<[string, V]> =>
    new TrieIterator(self as TrieImpl<V>, (key, value) => [key, value], (key) => key.startsWith(prefix))
)

/** @internal */
export const toEntriesWithPrefix = dual<
  (prefix: string) => <V>(self: TR.Trie<V>) => Array<[string, V]>,
  <V>(self: TR.Trie<V>, prefix: string) => Array<[string, V]>
>(
  2,
  <V>(self: TR.Trie<V>, prefix: string): Array<[string, V]> => Array.from(entriesWithPrefix(self, prefix))
)

/** @internal */
export const get = dual<
  (key: string) => <V>(self: TR.Trie<V>) => Option.Option<V>,
  <V>(self: TR.Trie<V>, key: string) => Option.Option<V>
>(
  2,
  <V>(self: TR.Trie<V>, key: string) => {
    let n: Node<V> | undefined = (self as TrieImpl<V>)._root
    if (n === undefined || key.length === 0) return Option.none()
    let cIndex = 0
    while (cIndex < key.length) {
      const c = key[cIndex]
      if (c > n.key) {
        if (n.right === undefined) {
          return Option.none()
        } else {
          n = n.right
        }
      } else if (c < n.key) {
        if (n.left === undefined) {
          return Option.none()
        } else {
          n = n.left
        }
      } else {
        if (cIndex === key.length - 1) {
          return Option.fromNullable(n.value)
        } else {
          if (n.mid === undefined) {
            return Option.none()
          } else {
            n = n.mid
            cIndex += 1
          }
        }
      }
    }
    return Option.none()
  }
)

/** @internal */
export const has = dual<
  (key: string) => <V>(self: TR.Trie<V>) => boolean,
  <V>(self: TR.Trie<V>, key: string) => boolean
>(2, (self, key) => Option.isSome(get(self, key)))

/** @internal */
export const unsafeGet = dual<
  (key: string) => <V>(self: TR.Trie<V>) => V,
  <V>(self: TR.Trie<V>, key: string) => V
>(2, (self, key) => {
  const element = get(self, key)
  if (Option.isNone(element)) {
    throw new Error("Expected trie to contain key")
  }
  return element.value
})

/** @internal */
export const remove = dual<
  (key: string) => <V>(self: TR.Trie<V>) => TR.Trie<V>,
  <V>(self: TR.Trie<V>, key: string) => TR.Trie<V>
>(
  2,
  <V>(self: TR.Trie<V>, key: string) => {
    let n: Node<V> | undefined = (self as TrieImpl<V>)._root
    if (n === undefined || key.length === 0) return self

    const count = n.count - 1
    // -1:left | 0:mid | 1:right
    const dStack: Array<Ordering.Ordering> = []
    const nStack: Array<Node<V>> = []

    let cIndex = 0
    while (cIndex < key.length) {
      const c = key[cIndex]
      if (c > n.key) {
        if (n.right === undefined) {
          return self
        } else {
          nStack.push(n)
          dStack.push(1)
          n = n.right
        }
      } else if (c < n.key) {
        if (n.left === undefined) {
          return self
        } else {
          nStack.push(n)
          dStack.push(-1)
          n = n.left
        }
      } else {
        if (cIndex === key.length - 1) {
          if (n.value !== undefined) {
            nStack.push(n)
            dStack.push(0)
            cIndex += 1
          } else {
            return self
          }
        } else {
          if (n.mid === undefined) {
            return self
          } else {
            nStack.push(n)
            dStack.push(0)
            n = n.mid
            cIndex += 1
          }
        }
      }
    }

    const removeNode = nStack[nStack.length - 1]
    nStack[nStack.length - 1] = {
      key: removeNode.key,
      count,
      left: removeNode.left,
      mid: removeNode.mid,
      right: removeNode.right
    }

    // Rebuild path to leaf node (Path-copying immutability)
    for (let s = nStack.length - 2; s >= 0; --s) {
      const n2 = nStack[s]
      const d = dStack[s]
      const child = nStack[s + 1]
      const nc = child.left === undefined && child.mid === undefined && child.right === undefined ? undefined : child
      if (d === -1) {
        // left
        nStack[s] = {
          key: n2.key,
          count,
          value: n2.value,
          left: nc,
          mid: n2.mid,
          right: n2.right
        }
      } else if (d === 1) {
        // right
        nStack[s] = {
          key: n2.key,
          count,
          value: n2.value,
          left: n2.left,
          mid: n2.mid,
          right: nc
        }
      } else {
        // mid
        nStack[s] = {
          key: n2.key,
          count,
          value: n2.value,
          left: n2.left,
          mid: nc,
          right: n2.right
        }
      }
    }

    nStack[0].count = count
    return makeImpl(nStack[0])
  }
)

/** @internal */
export const removeMany = dual<
  (keys: Iterable<string>) => <V>(self: TR.Trie<V>) => TR.Trie<V>,
  <V>(self: TR.Trie<V>, keys: Iterable<string>) => TR.Trie<V>
>(2, (self, keys) => {
  let trie = self
  for (const key of keys) {
    trie = remove(key)(trie)
  }
  return trie
})

/** @internal */
export const insertMany = dual<
  <V>(iter: Iterable<[string, V]>) => (self: TR.Trie<V>) => TR.Trie<V>,
  <V>(self: TR.Trie<V>, iter: Iterable<[string, V]>) => TR.Trie<V>
>(2, (self, iter) => {
  let trie = self
  for (const [key, value] of iter) {
    trie = insert(key, value)(trie)
  }
  return trie
})

/** @internal */
export const modify = dual<
  <V>(key: string, f: (v: V) => V) => (self: TR.Trie<V>) => TR.Trie<V>,
  <V>(self: TR.Trie<V>, key: string, f: (v: V) => V) => TR.Trie<V>
>(
  3,
  <V>(self: TR.Trie<V>, key: string, f: (v: V) => V): TR.Trie<V> => {
    let n: Node<V> | undefined = (self as TrieImpl<V>)._root
    if (n === undefined || key.length === 0) return self

    // -1:left | 0:mid | 1:right
    const dStack: Array<Ordering.Ordering> = []
    const nStack: Array<Node<V>> = []

    let cIndex = 0
    while (cIndex < key.length) {
      const c = key[cIndex]
      if (c > n.key) {
        if (n.right === undefined) {
          return self
        } else {
          nStack.push(n)
          dStack.push(1)
          n = n.right
        }
      } else if (c < n.key) {
        if (n.left === undefined) {
          return self
        } else {
          nStack.push(n)
          dStack.push(-1)
          n = n.left
        }
      } else {
        if (cIndex === key.length - 1) {
          if (n.value !== undefined) {
            nStack.push(n)
            dStack.push(0)
            cIndex += 1
          } else {
            return self
          }
        } else {
          if (n.mid === undefined) {
            return self
          } else {
            nStack.push(n)
            dStack.push(0)
            n = n.mid
            cIndex += 1
          }
        }
      }
    }

    const updateNode = nStack[nStack.length - 1]
    if (updateNode.value === undefined) {
      return self
    }

    nStack[nStack.length - 1] = {
      key: updateNode.key,
      count: updateNode.count,
      value: f(updateNode.value), // Update
      left: updateNode.left,
      mid: updateNode.mid,
      right: updateNode.right
    }

    // Rebuild path to leaf node (Path-copying immutability)
    for (let s = nStack.length - 2; s >= 0; --s) {
      const n2 = nStack[s]
      const d = dStack[s]
      const child = nStack[s + 1]
      if (d === -1) {
        // left
        nStack[s] = {
          key: n2.key,
          count: n2.count,
          value: n2.value,
          left: child,
          mid: n2.mid,
          right: n2.right
        }
      } else if (d === 1) {
        // right
        nStack[s] = {
          key: n2.key,
          count: n2.count,
          value: n2.value,
          left: n2.left,
          mid: n2.mid,
          right: child
        }
      } else {
        // mid
        nStack[s] = {
          key: n2.key,
          count: n2.count,
          value: n2.value,
          left: n2.left,
          mid: child,
          right: n2.right
        }
      }
    }

    return makeImpl(nStack[0])
  }
)

/** @internal */
export const longestPrefixOf = dual<
  (key: string) => <V>(self: TR.Trie<V>) => Option.Option<[string, V]>,
  <V>(self: TR.Trie<V>, key: string) => Option.Option<[string, V]>
>(
  2,
  <V>(self: TR.Trie<V>, key: string) => {
    let n: Node<V> | undefined = (self as TrieImpl<V>)._root
    if (n === undefined || key.length === 0) return Option.none()
    let longestPrefixNode: [string, V] | undefined = undefined
    let cIndex = 0
    while (cIndex < key.length) {
      const c = key[cIndex]
      if (n.value !== undefined) {
        longestPrefixNode = [key.slice(0, cIndex + 1), n.value]
      }

      if (c > n.key) {
        if (n.right === undefined) {
          break
        } else {
          n = n.right
        }
      } else if (c < n.key) {
        if (n.left === undefined) {
          break
        } else {
          n = n.left
        }
      } else {
        if (n.mid === undefined) {
          break
        } else {
          n = n.mid
          cIndex += 1
        }
      }
    }

    return Option.fromNullable(longestPrefixNode)
  }
)

interface Node<V> {
  key: string
  count: number
  value?: V | undefined
  left?: Node<V> | undefined
  mid?: Node<V> | undefined
  right?: Node<V> | undefined
}
