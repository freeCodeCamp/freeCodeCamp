"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = exports.make = exports.isHashRing = exports.has = exports.getShards = exports.get = exports.addMany = exports.add = void 0;
var _Function = require("./Function.js");
var Hash = _interopRequireWildcard(require("./Hash.js"));
var Inspectable = _interopRequireWildcard(require("./Inspectable.js"));
var Iterable = _interopRequireWildcard(require("./Iterable.js"));
var _Pipeable = require("./Pipeable.js");
var _Predicate = require("./Predicate.js");
var PrimaryKey = _interopRequireWildcard(require("./PrimaryKey.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 3.19.0
 * @experimental
 */

const TypeId = "~effect/cluster/HashRing";
/**
 * @since 3.19.0
 * @category Guards
 * @experimental
 */
const isHashRing = u => (0, _Predicate.hasProperty)(u, TypeId);
/**
 * @since 3.19.0
 * @category Constructors
 * @experimental
 */
exports.isHashRing = isHashRing;
const make = options => {
  const self = Object.create(Proto);
  self.baseWeight = Math.max(options?.baseWeight ?? 128, 1);
  self.totalWeightCache = 0;
  self.nodes = new Map();
  self.ring = [];
  return self;
};
exports.make = make;
const Proto = {
  [TypeId]: TypeId,
  [Symbol.iterator]() {
    return Iterable.map(this.nodes.values(), ([n]) => n)[Symbol.iterator]();
  },
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  },
  ...Inspectable.BaseProto,
  toJSON() {
    return {
      _id: "HashRing",
      baseWeight: this.baseWeight,
      nodes: this.ring.map(([, n]) => this.nodes.get(n)[0])
    };
  }
};
/**
 * Add new nodes to the ring. If a node already exists in the ring, it
 * will be updated. For example, you can use this to update the node's weight.
 *
 * @since 3.19.0
 * @category Combinators
 * @experimental
 */
const addMany = exports.addMany = /*#__PURE__*/(0, _Function.dual)(args => isHashRing(args[0]), (self, nodes, options) => {
  const weight = Math.max(options?.weight ?? 1, 0.1);
  const keys = [];
  let toRemove;
  for (const node of nodes) {
    const key = PrimaryKey.value(node);
    const entry = self.nodes.get(key);
    if (entry) {
      if (entry[1] === weight) continue;
      toRemove ??= new Set();
      toRemove.add(key);
      self.totalWeightCache -= entry[1];
      self.totalWeightCache += weight;
      entry[1] = weight;
    } else {
      self.nodes.set(key, [node, weight]);
      self.totalWeightCache += weight;
    }
    keys.push(key);
  }
  if (toRemove) {
    self.ring = self.ring.filter(([, n]) => !toRemove.has(n));
  }
  addNodesToRing(self, keys, Math.round(weight * self.baseWeight));
  return self;
});
function addNodesToRing(self, keys, weight) {
  for (let i = weight; i > 0; i--) {
    for (let j = 0; j < keys.length; j++) {
      const key = keys[j];
      self.ring.push([Hash.string(`${key}:${i}`), key]);
    }
  }
  self.ring.sort((a, b) => a[0] - b[0]);
}
/**
 * Add a new node to the ring. If the node already exists in the ring, it
 * will be updated. For example, you can use this to update the node's weight.
 *
 * @since 3.19.0
 * @category Combinators
 * @experimental
 */
const add = exports.add = /*#__PURE__*/(0, _Function.dual)(args => isHashRing(args[0]), (self, node, options) => addMany(self, [node], options));
/**
 * Removes the node from the ring. No-op's if the node does not exist.
 *
 * @since 3.19.0
 * @category Combinators
 * @experimental
 */
const remove = exports.remove = /*#__PURE__*/(0, _Function.dual)(2, (self, node) => {
  const key = PrimaryKey.value(node);
  const entry = self.nodes.get(key);
  if (entry) {
    self.nodes.delete(key);
    self.ring = self.ring.filter(([, n]) => n !== key);
    self.totalWeightCache -= entry[1];
  }
  return self;
});
/**
 * @since 3.19.0
 * @category Combinators
 * @experimental
 */
const has = exports.has = /*#__PURE__*/(0, _Function.dual)(2, (self, node) => self.nodes.has(PrimaryKey.value(node)));
/**
 * Gets the node which should handle the given input. Returns undefined if
 * the hashring has no elements with weight.
 *
 * @since 3.19.0
 * @category Combinators
 * @experimental
 */
const get = (self, input) => {
  if (self.ring.length === 0) {
    return undefined;
  }
  const index = getIndexForInput(self, Hash.string(input))[0];
  const node = self.ring[index][1];
  return self.nodes.get(node)[0];
};
/**
 * Distributes `count` shards across the nodes in the ring, attempting to
 * balance the number of shards allocated to each node. Returns undefined if
 * the hashring has no elements with weight.
 *
 * @since 3.19.0
 * @category Combinators
 * @experimental
 */
exports.get = get;
const getShards = (self, count) => {
  if (self.ring.length === 0) {
    return undefined;
  }
  const shards = new Array(count);
  // for tracking how many shards have been allocated to each node
  const allocations = new Map();
  // for tracking which shards still need to be allocated
  const remaining = new Set();
  // for tracking which nodes have reached the max allocation
  const exclude = new Set();
  // First pass - allocate the closest nodes, skipping nodes that have reached
  // max
  const distances = new Array(count);
  for (let shard = 0; shard < count; shard++) {
    const hash = shardHashes[shard] ??= Hash.string(`shard-${shard}`);
    const [index, distance] = getIndexForInput(self, hash);
    const node = self.ring[index][1];
    distances[shard] = [shard, node, distance];
    remaining.add(shard);
  }
  distances.sort((a, b) => a[2] - b[2]);
  for (let i = 0; i < count; i++) {
    const [shard, node] = distances[i];
    if (exclude.has(node)) continue;
    const [value, weight] = self.nodes.get(node);
    shards[shard] = value;
    remaining.delete(shard);
    const nodeCount = (allocations.get(node) ?? 0) + 1;
    allocations.set(node, nodeCount);
    const maxPerNode = Math.max(1, Math.floor(count * (weight / self.totalWeightCache)));
    if (nodeCount >= maxPerNode) {
      exclude.add(node);
    }
  }
  // Second pass - allocate any remaining shards, skipping nodes that have
  // reached max
  let allAtMax = exclude.size === self.nodes.size;
  remaining.forEach(shard => {
    const index = getIndexForInput(self, shardHashes[shard], allAtMax ? undefined : exclude)[0];
    const node = self.ring[index][1];
    const [value, weight] = self.nodes.get(node);
    shards[shard] = value;
    if (allAtMax) return;
    const nodeCount = (allocations.get(node) ?? 0) + 1;
    allocations.set(node, nodeCount);
    const maxPerNode = Math.max(1, Math.floor(count * (weight / self.totalWeightCache)));
    if (nodeCount >= maxPerNode) {
      exclude.add(node);
      if (exclude.size === self.nodes.size) {
        allAtMax = true;
      }
    }
  });
  return shards;
};
exports.getShards = getShards;
const shardHashes = [];
function getIndexForInput(self, hash, exclude) {
  const ring = self.ring;
  const len = ring.length;
  let mid;
  let lo = 0;
  let hi = len - 1;
  while (lo <= hi) {
    mid = (lo + hi) / 2 >>> 0;
    if (ring[mid][0] >= hash) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  const a = lo === len ? lo - 1 : lo;
  const distA = Math.abs(ring[a][0] - hash);
  if (exclude === undefined) {
    const b = lo - 1;
    if (b < 0) {
      return [a, distA];
    }
    const distB = Math.abs(ring[b][0] - hash);
    return distA <= distB ? [a, distA] : [b, distB];
  } else if (!exclude.has(ring[a][1])) {
    return [a, distA];
  }
  const range = Math.max(lo, len - lo);
  for (let i = 1; i < range; i++) {
    let index = lo - i;
    if (index >= 0 && index < len && !exclude.has(ring[index][1])) {
      return [index, Math.abs(ring[index][0] - hash)];
    }
    index = lo + i;
    if (index >= 0 && index < len && !exclude.has(ring[index][1])) {
      return [index, Math.abs(ring[index][0] - hash)];
    }
  }
  return [a, distA];
}
//# sourceMappingURL=HashRing.js.map