import * as Chunk from "../Chunk.js"
import * as Equal from "../Equal.js"
import { dual, pipe } from "../Function.js"
import * as Hash from "../Hash.js"
import { format, NodeInspectSymbol, toJSON } from "../Inspectable.js"
import * as Option from "../Option.js"
import type * as Order from "../Order.js"
import type * as Ordering from "../Ordering.js"
import { pipeArguments } from "../Pipeable.js"
import { hasProperty } from "../Predicate.js"
import type * as RBT from "../RedBlackTree.js"
import { Direction, RedBlackTreeIterator } from "./redBlackTree/iterator.js"
import * as Node from "./redBlackTree/node.js"
import * as Stack from "./stack.js"

const RedBlackTreeSymbolKey = "effect/RedBlackTree"

/** @internal */
export const RedBlackTreeTypeId: RBT.TypeId = Symbol.for(RedBlackTreeSymbolKey) as RBT.TypeId

/** @internal */
export interface RedBlackTreeImpl<in out K, out V> extends RBT.RedBlackTree<K, V> {
  readonly _ord: Order.Order<K>
  readonly _root: Node.Node<K, V> | undefined
}

const redBlackTreeVariance = {
  /* c8 ignore next */
  _Key: (_: any) => _,
  /* c8 ignore next */
  _Value: (_: never) => _
}

const RedBlackTreeProto: RBT.RedBlackTree<unknown, unknown> = {
  [RedBlackTreeTypeId]: redBlackTreeVariance,
  [Hash.symbol](this: RBT.RedBlackTree<unknown, unknown>): number {
    let hash = Hash.hash(RedBlackTreeSymbolKey)
    for (const item of this) {
      hash ^= pipe(Hash.hash(item[0]), Hash.combine(Hash.hash(item[1])))
    }
    return Hash.cached(this, hash)
  },
  [Equal.symbol]<K, V>(this: RedBlackTreeImpl<K, V>, that: unknown): boolean {
    if (isRedBlackTree(that)) {
      if ((this._root?.count ?? 0) !== ((that as RedBlackTreeImpl<K, V>)._root?.count ?? 0)) {
        return false
      }
      const entries = Array.from(that)
      return Array.from(this).every((itemSelf, i) => {
        const itemThat = entries[i]
        return Equal.equals(itemSelf[0], itemThat[0]) && Equal.equals(itemSelf[1], itemThat[1])
      })
    }
    return false
  },
  [Symbol.iterator]<K, V>(this: RedBlackTreeImpl<K, V>): RedBlackTreeIterator<K, V> {
    const stack: Array<Node.Node<K, V>> = []
    let n = this._root
    while (n != null) {
      stack.push(n)
      n = n.left
    }
    return new RedBlackTreeIterator(this, stack, Direction.Forward)
  },
  toString() {
    return format(this.toJSON())
  },
  toJSON() {
    return {
      _id: "RedBlackTree",
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

const makeImpl = <K, V>(ord: Order.Order<K>, root: Node.Node<K, V> | undefined): RedBlackTreeImpl<K, V> => {
  const tree = Object.create(RedBlackTreeProto)
  tree._ord = ord
  tree._root = root
  return tree
}

/** @internal */
export const isRedBlackTree: {
  <K, V>(u: Iterable<readonly [K, V]>): u is RBT.RedBlackTree<K, V>
  (u: unknown): u is RBT.RedBlackTree<unknown, unknown>
} = (u: unknown): u is RBT.RedBlackTree<unknown, unknown> => hasProperty(u, RedBlackTreeTypeId)

/** @internal */
export const empty = <K, V = never>(ord: Order.Order<K>): RBT.RedBlackTree<K, V> => makeImpl<K, V>(ord, undefined)

/** @internal */
export const fromIterable = dual<
  <B>(ord: Order.Order<B>) => <K extends B, V>(entries: Iterable<readonly [K, V]>) => RBT.RedBlackTree<K, V>,
  <K extends B, V, B>(entries: Iterable<readonly [K, V]>, ord: Order.Order<B>) => RBT.RedBlackTree<K, V>
>(2, <K extends B, V, B>(entries: Iterable<readonly [K, V]>, ord: Order.Order<B>) => {
  let tree = empty<K, V>(ord)
  for (const [key, value] of entries) {
    tree = insert(tree, key, value)
  }
  return tree
})

/** @internal */
export const make =
  <K>(ord: Order.Order<K>) =>
  <Entries extends Array<readonly [K, any]>>(...entries: Entries): RBT.RedBlackTree<
    K,
    Entries[number] extends readonly [any, infer V] ? V : never
  > => {
    return fromIterable(entries, ord)
  }

/** @internal */
export const atBackwards = dual<
  (index: number) => <K, V>(self: RBT.RedBlackTree<K, V>) => Iterable<[K, V]>,
  <K, V>(self: RBT.RedBlackTree<K, V>, index: number) => Iterable<[K, V]>
>(2, (self, index) => at(self, index, Direction.Backward))

/** @internal */
export const atForwards = dual<
  (index: number) => <K, V>(self: RBT.RedBlackTree<K, V>) => Iterable<[K, V]>,
  <K, V>(self: RBT.RedBlackTree<K, V>, index: number) => Iterable<[K, V]>
>(2, (self, index) => at(self, index, Direction.Forward))

const at = <K, V>(
  self: RBT.RedBlackTree<K, V>,
  index: number,
  direction: RBT.RedBlackTree.Direction
): Iterable<[K, V]> => {
  return {
    [Symbol.iterator]: () => {
      if (index < 0) {
        return new RedBlackTreeIterator(self, [], direction)
      }
      let node = (self as RedBlackTreeImpl<K, V>)._root
      const stack: Array<Node.Node<K, V>> = []
      while (node !== undefined) {
        stack.push(node)
        if (node.left !== undefined) {
          if (index < node.left.count) {
            node = node.left
            continue
          }
          index -= node.left.count
        }
        if (!index) {
          return new RedBlackTreeIterator(self, stack, direction)
        }
        index -= 1
        if (node.right !== undefined) {
          if (index >= node.right.count) {
            break
          }
          node = node.right
        } else {
          break
        }
      }
      return new RedBlackTreeIterator(self, [], direction)
    }
  }
}

/** @internal */
export const findAll = dual<
  <K>(key: K) => <V>(self: RBT.RedBlackTree<K, V>) => Chunk.Chunk<V>,
  <K, V>(self: RBT.RedBlackTree<K, V>, key: K) => Chunk.Chunk<V>
>(2, <K, V>(self: RBT.RedBlackTree<K, V>, key: K) => {
  const stack: Array<Node.Node<K, V>> = []
  let node = (self as RedBlackTreeImpl<K, V>)._root
  let result = Chunk.empty<V>()
  while (node !== undefined || stack.length > 0) {
    if (node) {
      stack.push(node)
      node = node.left
    } else {
      const current = stack.pop()!
      if (Equal.equals(key, current.key)) {
        result = Chunk.prepend(current.value)(result)
      }
      node = current.right
    }
  }
  return result
})

/** @internal */
export const findFirst = dual<
  <K>(key: K) => <V>(self: RBT.RedBlackTree<K, V>) => Option.Option<V>,
  <K, V>(self: RBT.RedBlackTree<K, V>, key: K) => Option.Option<V>
>(2, <K, V>(self: RBT.RedBlackTree<K, V>, key: K) => {
  const cmp = (self as RedBlackTreeImpl<K, V>)._ord
  let node = (self as RedBlackTreeImpl<K, V>)._root
  while (node !== undefined) {
    const d = cmp(key, node.key)
    if (Equal.equals(key, node.key)) {
      return Option.some(node.value)
    }
    if (d <= 0) {
      node = node.left
    } else {
      node = node.right
    }
  }
  return Option.none()
})

/** @internal */
export const first = <K, V>(self: RBT.RedBlackTree<K, V>): Option.Option<[K, V]> => {
  let node: Node.Node<K, V> | undefined = (self as RedBlackTreeImpl<K, V>)._root
  let current: Node.Node<K, V> | undefined = (self as RedBlackTreeImpl<K, V>)._root
  while (node !== undefined) {
    current = node
    node = node.left
  }
  return current ? Option.some([current.key, current.value]) : Option.none()
}

/** @internal */
export const getAt = dual<
  (index: number) => <K, V>(self: RBT.RedBlackTree<K, V>) => Option.Option<[K, V]>,
  <K, V>(self: RBT.RedBlackTree<K, V>, index: number) => Option.Option<[K, V]>
>(2, <K, V>(self: RBT.RedBlackTree<K, V>, index: number) => {
  if (index < 0) {
    return Option.none()
  }
  let root = (self as RedBlackTreeImpl<K, V>)._root
  let node: Node.Node<K, V> | undefined = undefined
  while (root !== undefined) {
    node = root
    if (root.left) {
      if (index < root.left.count) {
        root = root.left
        continue
      }
      index -= root.left.count
    }
    if (!index) {
      return Option.some([node.key, node.value])
    }
    index -= 1
    if (root.right) {
      if (index >= root.right.count) {
        break
      }
      root = root.right
    } else {
      break
    }
  }
  return Option.none()
})

/** @internal */
export const getOrder = <K, V>(tree: RBT.RedBlackTree<K, V>): Order.Order<K> => (tree as RedBlackTreeImpl<K, V>)._ord

/** @internal */
export const has = dual<
  <K>(key: K) => <V>(self: RBT.RedBlackTree<K, V>) => boolean,
  <K, V>(self: RBT.RedBlackTree<K, V>, key: K) => boolean
>(2, (self, key) => Option.isSome(findFirst(self, key)))

/** @internal */
export const insert = dual<
  <K, V>(key: K, value: V) => (self: RBT.RedBlackTree<K, V>) => RBT.RedBlackTree<K, V>,
  <K, V>(self: RBT.RedBlackTree<K, V>, key: K, value: V) => RBT.RedBlackTree<K, V>
>(3, <K, V>(self: RBT.RedBlackTree<K, V>, key: K, value: V) => {
  const cmp = (self as RedBlackTreeImpl<K, V>)._ord
  // Find point to insert new node at
  let n: Node.Node<K, V> | undefined = (self as RedBlackTreeImpl<K, V>)._root
  const n_stack: Array<Node.Node<K, V>> = []
  const d_stack: Array<Ordering.Ordering> = []
  while (n != null) {
    const d = cmp(key, n.key)
    n_stack.push(n)
    d_stack.push(d)
    if (d <= 0) {
      n = n.left
    } else {
      n = n.right
    }
  }
  // Rebuild path to leaf node
  n_stack.push({
    color: Node.Color.Red,
    key,
    value,
    left: undefined,
    right: undefined,
    count: 1
  })
  for (let s = n_stack.length - 2; s >= 0; --s) {
    const n2 = n_stack[s]!
    if (d_stack[s]! <= 0) {
      n_stack[s] = {
        color: n2.color,
        key: n2.key,
        value: n2.value,
        left: n_stack[s + 1],
        right: n2.right,
        count: n2.count + 1
      }
    } else {
      n_stack[s] = {
        color: n2.color,
        key: n2.key,
        value: n2.value,
        left: n2.left,
        right: n_stack[s + 1],
        count: n2.count + 1
      }
    }
  }
  // Rebalance tree using rotations
  for (let s = n_stack.length - 1; s > 1; --s) {
    const p = n_stack[s - 1]!
    const n3 = n_stack[s]!
    if (p.color === Node.Color.Black || n3.color === Node.Color.Black) {
      break
    }
    const pp = n_stack[s - 2]!
    if (pp.left === p) {
      if (p.left === n3) {
        const y = pp.right
        if (y && y.color === Node.Color.Red) {
          p.color = Node.Color.Black
          pp.right = Node.repaint(y, Node.Color.Black)
          pp.color = Node.Color.Red
          s -= 1
        } else {
          pp.color = Node.Color.Red
          pp.left = p.right
          p.color = Node.Color.Black
          p.right = pp
          n_stack[s - 2] = p
          n_stack[s - 1] = n3
          Node.recount(pp)
          Node.recount(p)
          if (s >= 3) {
            const ppp = n_stack[s - 3]!
            if (ppp.left === pp) {
              ppp.left = p
            } else {
              ppp.right = p
            }
          }
          break
        }
      } else {
        const y = pp.right
        if (y && y.color === Node.Color.Red) {
          p.color = Node.Color.Black
          pp.right = Node.repaint(y, Node.Color.Black)
          pp.color = Node.Color.Red
          s -= 1
        } else {
          p.right = n3.left
          pp.color = Node.Color.Red
          pp.left = n3.right
          n3.color = Node.Color.Black
          n3.left = p
          n3.right = pp
          n_stack[s - 2] = n3
          n_stack[s - 1] = p
          Node.recount(pp)
          Node.recount(p)
          Node.recount(n3)
          if (s >= 3) {
            const ppp = n_stack[s - 3]!
            if (ppp.left === pp) {
              ppp.left = n3
            } else {
              ppp.right = n3
            }
          }
          break
        }
      }
    } else {
      if (p.right === n3) {
        const y = pp.left
        if (y && y.color === Node.Color.Red) {
          p.color = Node.Color.Black
          pp.left = Node.repaint(y, Node.Color.Black)
          pp.color = Node.Color.Red
          s -= 1
        } else {
          pp.color = Node.Color.Red
          pp.right = p.left
          p.color = Node.Color.Black
          p.left = pp
          n_stack[s - 2] = p
          n_stack[s - 1] = n3
          Node.recount(pp)
          Node.recount(p)
          if (s >= 3) {
            const ppp = n_stack[s - 3]!
            if (ppp.right === pp) {
              ppp.right = p
            } else {
              ppp.left = p
            }
          }
          break
        }
      } else {
        const y = pp.left
        if (y && y.color === Node.Color.Red) {
          p.color = Node.Color.Black
          pp.left = Node.repaint(y, Node.Color.Black)
          pp.color = Node.Color.Red
          s -= 1
        } else {
          p.left = n3.right
          pp.color = Node.Color.Red
          pp.right = n3.left
          n3.color = Node.Color.Black
          n3.right = p
          n3.left = pp
          n_stack[s - 2] = n3
          n_stack[s - 1] = p
          Node.recount(pp)
          Node.recount(p)
          Node.recount(n3)
          if (s >= 3) {
            const ppp = n_stack[s - 3]!
            if (ppp.right === pp) {
              ppp.right = n3
            } else {
              ppp.left = n3
            }
          }
          break
        }
      }
    }
  }
  // Return new tree
  n_stack[0]!.color = Node.Color.Black
  return makeImpl((self as RedBlackTreeImpl<K, V>)._ord, n_stack[0])
})

/** @internal */
export const keysForward = <K, V>(self: RBT.RedBlackTree<K, V>): IterableIterator<K> => keys(self, Direction.Forward)

/** @internal */
export const keysBackward = <K, V>(self: RBT.RedBlackTree<K, V>): IterableIterator<K> => keys(self, Direction.Backward)

const keys = <K, V>(
  self: RBT.RedBlackTree<K, V>,
  direction: RBT.RedBlackTree.Direction
): IterableIterator<K> => {
  const begin: RedBlackTreeIterator<K, V> = self[Symbol.iterator]() as RedBlackTreeIterator<K, V>
  let count = 0
  return {
    [Symbol.iterator]: () => keys(self, direction),
    next: (): IteratorResult<K, number> => {
      count++
      const entry = begin.key
      if (direction === Direction.Forward) {
        begin.moveNext()
      } else {
        begin.movePrev()
      }
      switch (entry._tag) {
        case "None": {
          return { done: true, value: count }
        }
        case "Some": {
          return { done: false, value: entry.value }
        }
      }
    }
  }
}

/** @internal */
export const last = <K, V>(self: RBT.RedBlackTree<K, V>): Option.Option<[K, V]> => {
  let node: Node.Node<K, V> | undefined = (self as RedBlackTreeImpl<K, V>)._root
  let current: Node.Node<K, V> | undefined = (self as RedBlackTreeImpl<K, V>)._root
  while (node !== undefined) {
    current = node
    node = node.right
  }
  return current ? Option.some([current.key, current.value]) : Option.none()
}

/** @internal */
export const reversed = <K, V>(self: RBT.RedBlackTree<K, V>): Iterable<[K, V]> => {
  return {
    [Symbol.iterator]: () => {
      const stack: Array<Node.Node<K, V>> = []
      let node = (self as RedBlackTreeImpl<K, V>)._root
      while (node !== undefined) {
        stack.push(node)
        node = node.right
      }
      return new RedBlackTreeIterator(self, stack, Direction.Backward)
    }
  }
}

/** @internal */
export const greaterThanBackwards = dual<
  <K>(key: K) => <V>(self: RBT.RedBlackTree<K, V>) => Iterable<[K, V]>,
  <K, V>(self: RBT.RedBlackTree<K, V>, key: K) => Iterable<[K, V]>
>(2, (self, key) => greaterThan(self, key, Direction.Backward))

/** @internal */
export const greaterThanForwards = dual<
  <K>(key: K) => <V>(self: RBT.RedBlackTree<K, V>) => Iterable<[K, V]>,
  <K, V>(self: RBT.RedBlackTree<K, V>, key: K) => Iterable<[K, V]>
>(2, (self, key) => greaterThan(self, key, Direction.Forward))

const greaterThan = <K, V>(
  self: RBT.RedBlackTree<K, V>,
  key: K,
  direction: RBT.RedBlackTree.Direction
): Iterable<[K, V]> => {
  return {
    [Symbol.iterator]: () => {
      const cmp = (self as RedBlackTreeImpl<K, V>)._ord
      let node = (self as RedBlackTreeImpl<K, V>)._root
      const stack = []
      let last_ptr = 0
      while (node !== undefined) {
        const d = cmp(key, node.key)
        stack.push(node)
        if (d < 0) {
          last_ptr = stack.length
        }
        if (d < 0) {
          node = node.left
        } else {
          node = node.right
        }
      }
      stack.length = last_ptr
      return new RedBlackTreeIterator(self, stack, direction)
    }
  }
}

/** @internal */
export const greaterThanEqualBackwards = dual<
  <K>(key: K) => <V>(self: RBT.RedBlackTree<K, V>) => Iterable<[K, V]>,
  <K, V>(self: RBT.RedBlackTree<K, V>, key: K) => Iterable<[K, V]>
>(2, (self, key) => greaterThanEqual(self, key, Direction.Backward))

/** @internal */
export const greaterThanEqualForwards = dual<
  <K>(key: K) => <V>(self: RBT.RedBlackTree<K, V>) => Iterable<[K, V]>,
  <K, V>(self: RBT.RedBlackTree<K, V>, key: K) => Iterable<[K, V]>
>(2, (self, key) => greaterThanEqual(self, key, Direction.Forward))

const greaterThanEqual = <K, V>(
  self: RBT.RedBlackTree<K, V>,
  key: K,
  direction: RBT.RedBlackTree.Direction = Direction.Forward
): Iterable<[K, V]> => {
  return {
    [Symbol.iterator]: () => {
      const cmp = (self as RedBlackTreeImpl<K, V>)._ord
      let node = (self as RedBlackTreeImpl<K, V>)._root
      const stack = []
      let last_ptr = 0
      while (node !== undefined) {
        const d = cmp(key, node.key)
        stack.push(node)
        if (d <= 0) {
          last_ptr = stack.length
        }
        if (d <= 0) {
          node = node.left
        } else {
          node = node.right
        }
      }
      stack.length = last_ptr
      return new RedBlackTreeIterator(self, stack, direction)
    }
  }
}

/** @internal */
export const lessThanBackwards = dual<
  <K>(key: K) => <V>(self: RBT.RedBlackTree<K, V>) => Iterable<[K, V]>,
  <K, V>(self: RBT.RedBlackTree<K, V>, key: K) => Iterable<[K, V]>
>(2, (self, key) => lessThan(self, key, Direction.Backward))

/** @internal */
export const lessThanForwards = dual<
  <K>(key: K) => <V>(self: RBT.RedBlackTree<K, V>) => Iterable<[K, V]>,
  <K, V>(self: RBT.RedBlackTree<K, V>, key: K) => Iterable<[K, V]>
>(2, (self, key) => lessThan(self, key, Direction.Forward))

const lessThan = <K, V>(
  self: RBT.RedBlackTree<K, V>,
  key: K,
  direction: RBT.RedBlackTree.Direction
): Iterable<[K, V]> => {
  return {
    [Symbol.iterator]: () => {
      const cmp = (self as RedBlackTreeImpl<K, V>)._ord
      let node = (self as RedBlackTreeImpl<K, V>)._root
      const stack = []
      let last_ptr = 0
      while (node !== undefined) {
        const d = cmp(key, node.key)
        stack.push(node)
        if (d > 0) {
          last_ptr = stack.length
        }
        if (d <= 0) {
          node = node.left
        } else {
          node = node.right
        }
      }
      stack.length = last_ptr
      return new RedBlackTreeIterator(self, stack, direction)
    }
  }
}

/** @internal */
export const lessThanEqualBackwards = dual<
  <K>(key: K) => <V>(self: RBT.RedBlackTree<K, V>) => Iterable<[K, V]>,
  <K, V>(self: RBT.RedBlackTree<K, V>, key: K) => Iterable<[K, V]>
>(2, (self, key) => lessThanEqual(self, key, Direction.Backward))

/** @internal */
export const lessThanEqualForwards = dual<
  <K>(key: K) => <V>(self: RBT.RedBlackTree<K, V>) => Iterable<[K, V]>,
  <K, V>(self: RBT.RedBlackTree<K, V>, key: K) => Iterable<[K, V]>
>(2, (self, key) => lessThanEqual(self, key, Direction.Forward))

const lessThanEqual = <K, V>(
  self: RBT.RedBlackTree<K, V>,
  key: K,
  direction: RBT.RedBlackTree.Direction
): Iterable<[K, V]> => {
  return {
    [Symbol.iterator]: () => {
      const cmp = (self as RedBlackTreeImpl<K, V>)._ord
      let node = (self as RedBlackTreeImpl<K, V>)._root
      const stack = []
      let last_ptr = 0
      while (node !== undefined) {
        const d = cmp(key, node.key)
        stack.push(node)
        if (d >= 0) {
          last_ptr = stack.length
        }
        if (d < 0) {
          node = node.left
        } else {
          node = node.right
        }
      }
      stack.length = last_ptr
      return new RedBlackTreeIterator(self, stack, direction)
    }
  }
}

/** @internal */
export const forEach = dual<
  <K, V>(f: (key: K, value: V) => void) => (self: RBT.RedBlackTree<K, V>) => void,
  <K, V>(self: RBT.RedBlackTree<K, V>, f: (key: K, value: V) => void) => void
>(2, <K, V>(self: RBT.RedBlackTree<K, V>, f: (key: K, value: V) => void) => {
  const root = (self as RedBlackTreeImpl<K, V>)._root
  if (root !== undefined) {
    visitFull(root, (key, value) => {
      f(key, value)
      return Option.none()
    })
  }
})

/** @internal */
export const forEachGreaterThanEqual = dual<
  <K, V>(min: K, f: (key: K, value: V) => void) => (self: RBT.RedBlackTree<K, V>) => void,
  <K, V>(self: RBT.RedBlackTree<K, V>, min: K, f: (key: K, value: V) => void) => void
>(3, <K, V>(self: RBT.RedBlackTree<K, V>, min: K, f: (key: K, value: V) => void) => {
  const root = (self as RedBlackTreeImpl<K, V>)._root
  const ord = (self as RedBlackTreeImpl<K, V>)._ord
  if (root !== undefined) {
    visitGreaterThanEqual(root, min, ord, (key, value) => {
      f(key, value)
      return Option.none()
    })
  }
})

/** @internal */
export const forEachLessThan = dual<
  <K, V>(max: K, f: (key: K, value: V) => void) => (self: RBT.RedBlackTree<K, V>) => void,
  <K, V>(self: RBT.RedBlackTree<K, V>, max: K, f: (key: K, value: V) => void) => void
>(3, <K, V>(self: RBT.RedBlackTree<K, V>, max: K, f: (key: K, value: V) => void) => {
  const root = (self as RedBlackTreeImpl<K, V>)._root
  const ord = (self as RedBlackTreeImpl<K, V>)._ord
  if (root !== undefined) {
    visitLessThan(root, max, ord, (key, value) => {
      f(key, value)
      return Option.none()
    })
  }
})

/** @internal */
export const forEachBetween = dual<
  <K, V>(options: {
    readonly min: K
    readonly max: K
    readonly body: (key: K, value: V) => void
  }) => (self: RBT.RedBlackTree<K, V>) => void,
  <K, V>(self: RBT.RedBlackTree<K, V>, options: {
    readonly min: K
    readonly max: K
    readonly body: (key: K, value: V) => void
  }) => void
>(2, <K, V>(self: RBT.RedBlackTree<K, V>, { body, max, min }: {
  readonly min: K
  readonly max: K
  readonly body: (key: K, value: V) => void
}) => {
  const root = (self as RedBlackTreeImpl<K, V>)._root
  const ord = (self as RedBlackTreeImpl<K, V>)._ord
  if (root) {
    visitBetween(root, min, max, ord, (key, value) => {
      body(key, value)
      return Option.none()
    })
  }
})

/** @internal */
export const reduce = dual<
  <Z, V, K>(
    zero: Z,
    f: (accumulator: Z, value: V, key: K) => Z
  ) => (self: RBT.RedBlackTree<K, V>) => Z,
  <Z, V, K>(self: RBT.RedBlackTree<K, V>, zero: Z, f: (accumulator: Z, value: V, key: K) => Z) => Z
>(3, (self, zero, f) => {
  let accumulator = zero
  for (const entry of self) {
    accumulator = f(accumulator, entry[1], entry[0])
  }
  return accumulator
})

/** @internal */
export const removeFirst = dual<
  <K>(key: K) => <V>(self: RBT.RedBlackTree<K, V>) => RBT.RedBlackTree<K, V>,
  <K, V>(self: RBT.RedBlackTree<K, V>, key: K) => RBT.RedBlackTree<K, V>
>(2, <K, V>(self: RBT.RedBlackTree<K, V>, key: K) => {
  if (!has(self, key)) {
    return self
  }
  const ord = (self as RedBlackTreeImpl<K, V>)._ord
  const cmp = ord
  let node: Node.Node<K, V> | undefined = (self as RedBlackTreeImpl<K, V>)._root
  const stack = []
  while (node !== undefined) {
    const d = cmp(key, node.key)
    stack.push(node)
    if (Equal.equals(key, node.key)) {
      node = undefined
    } else if (d <= 0) {
      node = node.left
    } else {
      node = node.right
    }
  }
  if (stack.length === 0) {
    return self
  }
  const cstack = new Array<Node.Node<K, V>>(stack.length)
  let n = stack[stack.length - 1]!
  cstack[cstack.length - 1] = {
    color: n.color,
    key: n.key,
    value: n.value,
    left: n.left,
    right: n.right,
    count: n.count
  }
  for (let i = stack.length - 2; i >= 0; --i) {
    n = stack[i]!
    if (n.left === stack[i + 1]) {
      cstack[i] = {
        color: n.color,
        key: n.key,
        value: n.value,
        left: cstack[i + 1],
        right: n.right,
        count: n.count
      }
    } else {
      cstack[i] = {
        color: n.color,
        key: n.key,
        value: n.value,
        left: n.left,
        right: cstack[i + 1],
        count: n.count
      }
    }
  }
  // Get node
  n = cstack[cstack.length - 1]!
  // If not leaf, then swap with previous node
  if (n.left !== undefined && n.right !== undefined) {
    // First walk to previous leaf
    const split = cstack.length
    n = n.left
    while (n.right != null) {
      cstack.push(n)
      n = n.right
    }
    // Copy path to leaf
    const v = cstack[split - 1]
    cstack.push({
      color: n.color,
      key: v!.key,
      value: v!.value,
      left: n.left,
      right: n.right,
      count: n.count
    })
    cstack[split - 1]!.key = n.key
    cstack[split - 1]!.value = n.value
    // Fix up stack
    for (let i = cstack.length - 2; i >= split; --i) {
      n = cstack[i]!
      cstack[i] = {
        color: n.color,
        key: n.key,
        value: n.value,
        left: n.left,
        right: cstack[i + 1],
        count: n.count
      }
    }
    cstack[split - 1]!.left = cstack[split]
  }

  // Remove leaf node
  n = cstack[cstack.length - 1]!
  if (n.color === Node.Color.Red) {
    // Easy case: removing red leaf
    const p = cstack[cstack.length - 2]!
    if (p.left === n) {
      p.left = undefined
    } else if (p.right === n) {
      p.right = undefined
    }
    cstack.pop()
    for (let i = 0; i < cstack.length; ++i) {
      cstack[i]!.count--
    }
    return makeImpl(ord, cstack[0])
  } else {
    if (n.left !== undefined || n.right !== undefined) {
      // Second easy case:  Single child black parent
      if (n.left !== undefined) {
        Node.swap(n, n.left)
      } else if (n.right !== undefined) {
        Node.swap(n, n.right)
      }
      // Child must be red, so repaint it black to balance color
      n.color = Node.Color.Black
      for (let i = 0; i < cstack.length - 1; ++i) {
        cstack[i]!.count--
      }
      return makeImpl(ord, cstack[0])
    } else if (cstack.length === 1) {
      // Third easy case: root
      return makeImpl(ord, undefined)
    } else {
      // Hard case: Repaint n, and then do some nasty stuff
      for (let i = 0; i < cstack.length; ++i) {
        cstack[i]!.count--
      }
      const parent = cstack[cstack.length - 2]
      fixDoubleBlack(cstack)
      // Fix up links
      if (parent!.left === n) {
        parent!.left = undefined
      } else {
        parent!.right = undefined
      }
    }
  }
  return makeImpl(ord, cstack[0])
})

/** @internal */
export const size = <K, V>(self: RBT.RedBlackTree<K, V>): number => (self as RedBlackTreeImpl<K, V>)._root?.count ?? 0

/** @internal */
export const valuesForward = <K, V>(self: RBT.RedBlackTree<K, V>): IterableIterator<V> =>
  values(self, Direction.Forward)

/** @internal */
export const valuesBackward = <K, V>(self: RBT.RedBlackTree<K, V>): IterableIterator<V> =>
  values(self, Direction.Backward)

/** @internal */
const values = <K, V>(
  self: RBT.RedBlackTree<K, V>,
  direction: RBT.RedBlackTree.Direction
): IterableIterator<V> => {
  const begin: RedBlackTreeIterator<K, V> = self[Symbol.iterator]() as RedBlackTreeIterator<K, V>
  let count = 0
  return {
    [Symbol.iterator]: () => values(self, direction),
    next: (): IteratorResult<V, number> => {
      count++
      const entry = begin.value
      if (direction === Direction.Forward) {
        begin.moveNext()
      } else {
        begin.movePrev()
      }
      switch (entry._tag) {
        case "None": {
          return { done: true, value: count }
        }
        case "Some": {
          return { done: false, value: entry.value }
        }
      }
    }
  }
}

const visitFull = <K, V, A>(
  node: Node.Node<K, V>,
  visit: (key: K, value: V) => Option.Option<A>
): Option.Option<A> => {
  let current: Node.Node<K, V> | undefined = node
  let stack: Stack.Stack<Node.Node<K, V>> | undefined = undefined
  let done = false
  while (!done) {
    if (current != null) {
      stack = Stack.make(current, stack)
      current = current.left
    } else if (stack != null) {
      const value = visit(stack.value.key, stack.value.value)
      if (Option.isSome(value)) {
        return value
      }
      current = stack.value.right
      stack = stack.previous
    } else {
      done = true
    }
  }
  return Option.none()
}

const visitGreaterThanEqual = <K, V, A>(
  node: Node.Node<K, V>,
  min: K,
  ord: Order.Order<K>,
  visit: (key: K, value: V) => Option.Option<A>
): Option.Option<A> => {
  let current: Node.Node<K, V> | undefined = node
  let stack: Stack.Stack<Node.Node<K, V>> | undefined = undefined
  let done = false
  while (!done) {
    if (current !== undefined) {
      stack = Stack.make(current, stack)
      if (ord(min, current.key) <= 0) {
        current = current.left
      } else {
        current = undefined
      }
    } else if (stack !== undefined) {
      if (ord(min, stack.value.key) <= 0) {
        const value = visit(stack.value.key, stack.value.value)
        if (Option.isSome(value)) {
          return value
        }
      }
      current = stack.value.right
      stack = stack.previous
    } else {
      done = true
    }
  }
  return Option.none()
}

const visitLessThan = <K, V, A>(
  node: Node.Node<K, V>,
  max: K,
  ord: Order.Order<K>,
  visit: (key: K, value: V) => Option.Option<A>
): Option.Option<A> => {
  let current: Node.Node<K, V> | undefined = node
  let stack: Stack.Stack<Node.Node<K, V>> | undefined = undefined
  let done = false
  while (!done) {
    if (current !== undefined) {
      stack = Stack.make(current, stack)
      current = current.left
    } else if (stack !== undefined && ord(max, stack.value.key) > 0) {
      const value = visit(stack.value.key, stack.value.value)
      if (Option.isSome(value)) {
        return value
      }
      current = stack.value.right
      stack = stack.previous
    } else {
      done = true
    }
  }
  return Option.none()
}

const visitBetween = <K, V, A>(
  node: Node.Node<K, V>,
  min: K,
  max: K,
  ord: Order.Order<K>,
  visit: (key: K, value: V) => Option.Option<A>
): Option.Option<A> => {
  let current: Node.Node<K, V> | undefined = node
  let stack: Stack.Stack<Node.Node<K, V>> | undefined = undefined
  let done = false
  while (!done) {
    if (current !== undefined) {
      stack = Stack.make(current, stack)
      if (ord(min, current.key) <= 0) {
        current = current.left
      } else {
        current = undefined
      }
    } else if (stack !== undefined && ord(max, stack.value.key) > 0) {
      if (ord(min, stack.value.key) <= 0) {
        const value = visit(stack.value.key, stack.value.value)
        if (Option.isSome(value)) {
          return value
        }
      }
      current = stack.value.right
      stack = stack.previous
    } else {
      done = true
    }
  }
  return Option.none()
}

/**
 * Fix up a double black node in a Red-Black Tree.
 */
const fixDoubleBlack = <K, V>(stack: Array<Node.Node<K, V>>) => {
  let n, p, s, z
  for (let i = stack.length - 1; i >= 0; --i) {
    n = stack[i]!
    if (i === 0) {
      n.color = Node.Color.Black
      return
    }
    p = stack[i - 1]!
    if (p.left === n) {
      s = p.right
      if (s !== undefined && s.right !== undefined && s.right.color === Node.Color.Red) {
        s = p.right = Node.clone(s)
        z = s.right = Node.clone(s.right!)
        p.right = s.left
        s.left = p
        s.right = z
        s.color = p.color
        n.color = Node.Color.Black
        p.color = Node.Color.Black
        z.color = Node.Color.Black
        Node.recount(p)
        Node.recount(s)
        if (i > 1) {
          const pp = stack[i - 2]!
          if (pp.left === p) {
            pp.left = s
          } else {
            pp.right = s
          }
        }
        stack[i - 1] = s
        return
      } else if (s !== undefined && s.left !== undefined && s.left.color === Node.Color.Red) {
        s = p.right = Node.clone(s)
        z = s.left = Node.clone(s.left!)
        p.right = z.left
        s.left = z.right
        z.left = p
        z.right = s
        z.color = p.color
        p.color = Node.Color.Black
        s.color = Node.Color.Black
        n.color = Node.Color.Black
        Node.recount(p)
        Node.recount(s)
        Node.recount(z)
        if (i > 1) {
          const pp = stack[i - 2]!
          if (pp.left === p) {
            pp.left = z
          } else {
            pp.right = z
          }
        }
        stack[i - 1] = z
        return
      }
      if (s !== undefined && s.color === Node.Color.Black) {
        if (p.color === Node.Color.Red) {
          p.color = Node.Color.Black
          p.right = Node.repaint(s, Node.Color.Red)
          return
        } else {
          p.right = Node.repaint(s, Node.Color.Red)
          continue
        }
      } else if (s !== undefined) {
        s = Node.clone(s)
        p.right = s.left
        s.left = p
        s.color = p.color
        p.color = Node.Color.Red
        Node.recount(p)
        Node.recount(s)
        if (i > 1) {
          const pp = stack[i - 2]!
          if (pp.left === p) {
            pp.left = s
          } else {
            pp.right = s
          }
        }
        stack[i - 1] = s
        stack[i] = p
        if (i + 1 < stack.length) {
          stack[i + 1] = n
        } else {
          stack.push(n)
        }
        i = i + 2
      }
    } else {
      s = p.left
      if (s !== undefined && s.left !== undefined && s.left.color === Node.Color.Red) {
        s = p.left = Node.clone(s)
        z = s.left = Node.clone(s.left!)
        p.left = s.right
        s.right = p
        s.left = z
        s.color = p.color
        n.color = Node.Color.Black
        p.color = Node.Color.Black
        z.color = Node.Color.Black
        Node.recount(p)
        Node.recount(s)
        if (i > 1) {
          const pp = stack[i - 2]!
          if (pp.right === p) {
            pp.right = s
          } else {
            pp.left = s
          }
        }
        stack[i - 1] = s
        return
      } else if (s !== undefined && s.right !== undefined && s.right.color === Node.Color.Red) {
        s = p.left = Node.clone(s)
        z = s.right = Node.clone(s.right!)
        p.left = z.right
        s.right = z.left
        z.right = p
        z.left = s
        z.color = p.color
        p.color = Node.Color.Black
        s.color = Node.Color.Black
        n.color = Node.Color.Black
        Node.recount(p)
        Node.recount(s)
        Node.recount(z)
        if (i > 1) {
          const pp = stack[i - 2]!
          if (pp.right === p) {
            pp.right = z
          } else {
            pp.left = z
          }
        }
        stack[i - 1] = z
        return
      }
      if (s !== undefined && s.color === Node.Color.Black) {
        if (p.color === Node.Color.Red) {
          p.color = Node.Color.Black
          p.left = Node.repaint(s, Node.Color.Red)
          return
        } else {
          p.left = Node.repaint(s, Node.Color.Red)
          continue
        }
      } else if (s !== undefined) {
        s = Node.clone(s)
        p.left = s.right
        s.right = p
        s.color = p.color
        p.color = Node.Color.Red
        Node.recount(p)
        Node.recount(s)
        if (i > 1) {
          const pp = stack[i - 2]!
          if (pp.right === p) {
            pp.right = s
          } else {
            pp.left = s
          }
        }
        stack[i - 1] = s
        stack[i] = p
        if (i + 1 < stack.length) {
          stack[i + 1] = n
        } else {
          stack.push(n)
        }
        i = i + 2
      }
    }
  }
}
