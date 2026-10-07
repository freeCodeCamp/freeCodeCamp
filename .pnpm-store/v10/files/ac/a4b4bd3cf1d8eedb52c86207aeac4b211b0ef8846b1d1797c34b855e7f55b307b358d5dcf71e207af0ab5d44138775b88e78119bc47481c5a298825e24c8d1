/**
 * @since 3.19.0
 * @experimental
 */
import { dual } from "./Function.js"
import * as Hash from "./Hash.js"
import * as Inspectable from "./Inspectable.js"
import * as Iterable from "./Iterable.js"
import { type Pipeable, pipeArguments } from "./Pipeable.js"
import { hasProperty } from "./Predicate.js"
import * as PrimaryKey from "./PrimaryKey.js"

const TypeId = "~effect/cluster/HashRing" as const

/**
 * @since 3.19.0
 * @category Models
 * @experimental
 */
export interface HashRing<A extends PrimaryKey.PrimaryKey> extends Pipeable, Iterable<A> {
  readonly [TypeId]: typeof TypeId
  readonly baseWeight: number
  totalWeightCache: number
  readonly nodes: Map<string, [node: A, weight: number]>
  ring: Array<[hash: number, node: string]>
}

/**
 * @since 3.19.0
 * @category Guards
 * @experimental
 */
export const isHashRing = (u: unknown): u is HashRing<any> => hasProperty(u, TypeId)

/**
 * @since 3.19.0
 * @category Constructors
 * @experimental
 */
export const make = <A extends PrimaryKey.PrimaryKey>(options?: {
  readonly baseWeight?: number | undefined
}): HashRing<A> => {
  const self = Object.create(Proto)
  self.baseWeight = Math.max(options?.baseWeight ?? 128, 1)
  self.totalWeightCache = 0
  self.nodes = new Map()
  self.ring = []
  return self
}

const Proto = {
  [TypeId]: TypeId,
  [Symbol.iterator]<A extends PrimaryKey.PrimaryKey>(this: HashRing<A>): Iterator<A> {
    return Iterable.map(this.nodes.values(), ([n]) => n)[Symbol.iterator]()
  },
  pipe() {
    return pipeArguments(this, arguments)
  },
  ...Inspectable.BaseProto,
  toJSON(this: HashRing<any>) {
    return {
      _id: "HashRing",
      baseWeight: this.baseWeight,
      nodes: this.ring.map(([, n]) => this.nodes.get(n)![0])
    }
  }
}

/**
 * Add new nodes to the ring. If a node already exists in the ring, it
 * will be updated. For example, you can use this to update the node's weight.
 *
 * @since 3.19.0
 * @category Combinators
 * @experimental
 */
export const addMany: {
  /**
   * Add new nodes to the ring. If a node already exists in the ring, it
   * will be updated. For example, you can use this to update the node's weight.
   *
   * @since 3.19.0
   * @category Combinators
   * @experimental
   */
  <A extends PrimaryKey.PrimaryKey>(
    nodes: Iterable<A>,
    options?: {
      readonly weight?: number | undefined
    }
  ): (self: HashRing<A>) => HashRing<A>
  /**
   * Add new nodes to the ring. If a node already exists in the ring, it
   * will be updated. For example, you can use this to update the node's weight.
   *
   * @since 3.19.0
   * @category Combinators
   * @experimental
   */
  <A extends PrimaryKey.PrimaryKey>(
    self: HashRing<A>,
    nodes: Iterable<A>,
    options?: {
      readonly weight?: number | undefined
    }
  ): HashRing<A>
} = dual(
  (args) => isHashRing(args[0]),
  <A extends PrimaryKey.PrimaryKey>(self: HashRing<A>, nodes: Iterable<A>, options?: {
    readonly weight?: number | undefined
  }): HashRing<A> => {
    const weight = Math.max(options?.weight ?? 1, 0.1)
    const keys: Array<string> = []
    let toRemove: Set<string> | undefined
    for (const node of nodes) {
      const key = PrimaryKey.value(node)
      const entry = self.nodes.get(key)
      if (entry) {
        if (entry[1] === weight) continue
        toRemove ??= new Set()
        toRemove.add(key)
        self.totalWeightCache -= entry[1]
        self.totalWeightCache += weight
        entry[1] = weight
      } else {
        self.nodes.set(key, [node, weight])
        self.totalWeightCache += weight
      }
      keys.push(key)
    }
    if (toRemove) {
      self.ring = self.ring.filter(([, n]) => !toRemove.has(n))
    }
    addNodesToRing(self, keys, Math.round(weight * self.baseWeight))
    return self
  }
)

function addNodesToRing<A extends PrimaryKey.PrimaryKey>(self: HashRing<A>, keys: Array<string>, weight: number) {
  for (let i = weight; i > 0; i--) {
    for (let j = 0; j < keys.length; j++) {
      const key = keys[j]
      self.ring.push([
        Hash.string(`${key}:${i}`),
        key
      ])
    }
  }
  self.ring.sort((a, b) => a[0] - b[0])
}

/**
 * Add a new node to the ring. If the node already exists in the ring, it
 * will be updated. For example, you can use this to update the node's weight.
 *
 * @since 3.19.0
 * @category Combinators
 * @experimental
 */
export const add: {
  /**
   * Add a new node to the ring. If the node already exists in the ring, it
   * will be updated. For example, you can use this to update the node's weight.
   *
   * @since 3.19.0
   * @category Combinators
   * @experimental
   */
  <A extends PrimaryKey.PrimaryKey>(
    node: A,
    options?: {
      readonly weight?: number | undefined
    }
  ): (self: HashRing<A>) => HashRing<A>
  /**
   * Add a new node to the ring. If the node already exists in the ring, it
   * will be updated. For example, you can use this to update the node's weight.
   *
   * @since 3.19.0
   * @category Combinators
   * @experimental
   */
  <A extends PrimaryKey.PrimaryKey>(
    self: HashRing<A>,
    node: A,
    options?: {
      readonly weight?: number | undefined
    }
  ): HashRing<A>
} = dual((args) => isHashRing(args[0]), <A extends PrimaryKey.PrimaryKey>(self: HashRing<A>, node: A, options?: {
  readonly weight?: number | undefined
}): HashRing<A> => addMany(self, [node], options))

/**
 * Removes the node from the ring. No-op's if the node does not exist.
 *
 * @since 3.19.0
 * @category Combinators
 * @experimental
 */
export const remove: {
  /**
   * Removes the node from the ring. No-op's if the node does not exist.
   *
   * @since 3.19.0
   * @category Combinators
   * @experimental
   */
  <A extends PrimaryKey.PrimaryKey>(node: A): (self: HashRing<A>) => HashRing<A>
  /**
   * Removes the node from the ring. No-op's if the node does not exist.
   *
   * @since 3.19.0
   * @category Combinators
   * @experimental
   */
  <A extends PrimaryKey.PrimaryKey>(self: HashRing<A>, node: A): HashRing<A>
} = dual(2, <A extends PrimaryKey.PrimaryKey>(self: HashRing<A>, node: A): HashRing<A> => {
  const key = PrimaryKey.value(node)
  const entry = self.nodes.get(key)
  if (entry) {
    self.nodes.delete(key)
    self.ring = self.ring.filter(([, n]) => n !== key)
    self.totalWeightCache -= entry[1]
  }
  return self
})

/**
 * @since 3.19.0
 * @category Combinators
 * @experimental
 */
export const has: {
  /**
   * @since 3.19.0
   * @category Combinators
   * @experimental
   */
  <A extends PrimaryKey.PrimaryKey>(node: A): (self: HashRing<A>) => boolean
  /**
   * @since 3.19.0
   * @category Combinators
   * @experimental
   */
  <A extends PrimaryKey.PrimaryKey>(self: HashRing<A>, node: A): boolean
} = dual(
  2,
  <A extends PrimaryKey.PrimaryKey>(self: HashRing<A>, node: A): boolean => self.nodes.has(PrimaryKey.value(node))
)

/**
 * Gets the node which should handle the given input. Returns undefined if
 * the hashring has no elements with weight.
 *
 * @since 3.19.0
 * @category Combinators
 * @experimental
 */
export const get = <A extends PrimaryKey.PrimaryKey>(self: HashRing<A>, input: string): A | undefined => {
  if (self.ring.length === 0) {
    return undefined
  }
  const index = getIndexForInput(self, Hash.string(input))[0]
  const node = self.ring[index][1]!
  return self.nodes.get(node)![0]
}

/**
 * Distributes `count` shards across the nodes in the ring, attempting to
 * balance the number of shards allocated to each node. Returns undefined if
 * the hashring has no elements with weight.
 *
 * @since 3.19.0
 * @category Combinators
 * @experimental
 */
export const getShards = <A extends PrimaryKey.PrimaryKey>(self: HashRing<A>, count: number): Array<A> | undefined => {
  if (self.ring.length === 0) {
    return undefined
  }

  const shards = new Array<A>(count)

  // for tracking how many shards have been allocated to each node
  const allocations = new Map<string, number>()
  // for tracking which shards still need to be allocated
  const remaining = new Set<number>()
  // for tracking which nodes have reached the max allocation
  const exclude = new Set<string>()

  // First pass - allocate the closest nodes, skipping nodes that have reached
  // max
  const distances = new Array<[shard: number, node: string, distance: number]>(count)
  for (let shard = 0; shard < count; shard++) {
    const hash = (shardHashes[shard] ??= Hash.string(`shard-${shard}`))
    const [index, distance] = getIndexForInput(self, hash)
    const node = self.ring[index][1]!
    distances[shard] = [shard, node, distance]
    remaining.add(shard)
  }
  distances.sort((a, b) => a[2] - b[2])
  for (let i = 0; i < count; i++) {
    const [shard, node] = distances[i]
    if (exclude.has(node)) continue
    const [value, weight] = self.nodes.get(node)!
    shards[shard] = value
    remaining.delete(shard)
    const nodeCount = (allocations.get(node) ?? 0) + 1
    allocations.set(node, nodeCount)
    const maxPerNode = Math.max(1, Math.floor(count * (weight / self.totalWeightCache)))
    if (nodeCount >= maxPerNode) {
      exclude.add(node)
    }
  }

  // Second pass - allocate any remaining shards, skipping nodes that have
  // reached max
  let allAtMax = exclude.size === self.nodes.size
  remaining.forEach((shard) => {
    const index = getIndexForInput(self, shardHashes[shard], allAtMax ? undefined : exclude)[0]
    const node = self.ring[index][1]
    const [value, weight] = self.nodes.get(node)!
    shards[shard] = value

    if (allAtMax) return
    const nodeCount = (allocations.get(node) ?? 0) + 1
    allocations.set(node, nodeCount)
    const maxPerNode = Math.max(1, Math.floor(count * (weight / self.totalWeightCache)))
    if (nodeCount >= maxPerNode) {
      exclude.add(node)
      if (exclude.size === self.nodes.size) {
        allAtMax = true
      }
    }
  })

  return shards
}

const shardHashes: Array<number> = []

function getIndexForInput<A extends PrimaryKey.PrimaryKey>(
  self: HashRing<A>,
  hash: number,
  exclude?: ReadonlySet<string> | undefined
): readonly [index: number, distance: number] {
  const ring = self.ring
  const len = ring.length

  let mid: number
  let lo = 0
  let hi = len - 1

  while (lo <= hi) {
    mid = ((lo + hi) / 2) >>> 0
    if (ring[mid][0] >= hash) {
      hi = mid - 1
    } else {
      lo = mid + 1
    }
  }
  const a = lo === len ? lo - 1 : lo
  const distA = Math.abs(ring[a][0] - hash)
  if (exclude === undefined) {
    const b = lo - 1
    if (b < 0) {
      return [a, distA]
    }
    const distB = Math.abs(ring[b][0] - hash)
    return distA <= distB ? [a, distA] : [b, distB]
  } else if (!exclude.has(ring[a][1])) {
    return [a, distA]
  }
  const range = Math.max(lo, len - lo)
  for (let i = 1; i < range; i++) {
    let index = lo - i
    if (index >= 0 && index < len && !exclude.has(ring[index][1])) {
      return [index, Math.abs(ring[index][0] - hash)]
    }
    index = lo + i
    if (index >= 0 && index < len && !exclude.has(ring[index][1])) {
      return [index, Math.abs(ring[index][0] - hash)]
    }
  }
  return [a, distA]
}
