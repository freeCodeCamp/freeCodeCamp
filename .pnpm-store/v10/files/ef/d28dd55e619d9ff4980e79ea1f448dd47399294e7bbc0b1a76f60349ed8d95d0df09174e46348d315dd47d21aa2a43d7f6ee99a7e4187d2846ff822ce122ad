"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SharedTypeMap = exports.NodeTypeMap = exports.EdgeTypeMap = void 0;

function _assert() {
  const data = _interopRequireDefault(require("assert"));

  _assert = function () {
    return data;
  };

  return data;
}

function _nullthrows() {
  const data = _interopRequireDefault(require("nullthrows"));

  _nullthrows = function () {
    return data;
  };

  return data;
}

var _sharedBuffer = require("./shared-buffer");

var _types = require("./types");

var _Graph = require("./Graph");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** The upper bound above which capacity should be increased. */
const LOAD_FACTOR = 0.7;
/** The lower bound below which capacity should be decreased. */

const UNLOAD_FACTOR = 0.3;
/** The max amount by which to grow the capacity. */

const MAX_GROW_FACTOR = 8;
/** The min amount by which to grow the capacity. */

const MIN_GROW_FACTOR = 2;
/** The amount by which to shrink the capacity. */

const SHRINK_FACTOR = 0.5;

class AdjacencyList {
  #nodes
  /*: NodeTypeMap<TEdgeType | NullEdgeType> */
  ;
  #edges
  /*: EdgeTypeMap<TEdgeType | NullEdgeType> */
  ;

  constructor(opts) {
    let nodes;
    let edges;

    if (opts !== null && opts !== void 0 && opts.nodes) {
      ({
        nodes,
        edges
      } = opts);
      this.#nodes = new NodeTypeMap(nodes);
      this.#edges = new EdgeTypeMap(edges);
    } else {
      let {
        nodeCapacity = NodeTypeMap.MIN_CAPACITY,
        edgeCapacity = EdgeTypeMap.MIN_CAPACITY
      } = opts !== null && opts !== void 0 ? opts : {};
      (0, _assert().default)(nodeCapacity <= NodeTypeMap.MAX_CAPACITY, 'Node capacity overflow!');
      (0, _assert().default)(edgeCapacity <= EdgeTypeMap.MAX_CAPACITY, 'Edge capacity overflow!');
      this.#nodes = new NodeTypeMap(nodeCapacity);
      this.#edges = new EdgeTypeMap(edgeCapacity);
    }
  }
  /**
   * Create a new `AdjacencyList` from the given options.
   */


  static deserialize(opts) {
    return new AdjacencyList(opts);
  }
  /**
   * Returns a serializable object of the nodes and edges in the graph.
   */


  serialize() {
    return {
      nodes: this.#nodes.data,
      edges: this.#edges.data
    };
  }

  get stats() {
    let buckets = new Map();

    for (let {
      from,
      to,
      type
    } of this.getAllEdges()) {
      let hash = this.#edges.hash(from, to, type);
      let bucket = buckets.get(hash) || new Set();
      let key = `${String(from)}, ${String(to)}, ${String(type)}`;
      (0, _assert().default)(!bucket.has(key), `Duplicate node detected: ${key}`);
      bucket.add(key);
      buckets.set(hash, bucket);
    }

    let maxCollisions = 0;
    let collisions = 0;
    let distribution = 0;

    for (let bucket of buckets.values()) {
      maxCollisions = Math.max(maxCollisions, bucket.size - 1);
      collisions += bucket.size - 1;
      distribution += bucket.size * (bucket.size + 1) / 2;
    }

    let uniformity = distribution / (this.#edges.count / (2 * this.#edges.capacity) * (this.#edges.count + 2 * this.#edges.capacity - 1));
    return {
      nodes: (0, _types.fromNodeId)(this.#nodes.nextId),
      nodeEdgeTypes: this.#nodes.count,
      nodeCapacity: this.#nodes.capacity,
      nodeLoad: `${Math.round(this.#nodes.load * 100)}%`,
      nodeBufferSize: this.#nodes.bufferSize,
      edges: this.#edges.count,
      deleted: this.#edges.deletes,
      edgeCapacity: this.#edges.capacity,
      edgeLoad: `${Math.round(this.#edges.load * 100)}%`,
      edgeLoadWithDeletes: `${Math.round(this.#edges.getLoad(this.#edges.count + this.#edges.deletes) * 100)}%`,
      edgeBufferSize: this.#edges.bufferSize,
      collisions,
      maxCollisions,
      avgCollisions: Math.round(collisions / buckets.size * 100) / 100 || 0,
      uniformity: Math.round(uniformity * 100) / 100 || 0
    };
  }
  /**
   * Resize the internal nodes array.
   *
   * This is used in `addNode` when the `numNodes` meets or exceeds
   * the allocated size of the `nodes` array.
   */


  resizeNodes(size) {
    let nodes = this.#nodes; // Allocate the required space for a `nodes` map of the given `size`.

    this.#nodes = new NodeTypeMap(size); // Copy the existing nodes into the new array.

    this.#nodes.set(nodes.data);
  }
  /**
   * Resize the internal edges array.
   *
   * This is used in `addEdge` when the `numEdges` meets or exceeds
   * the allocated size of the `edges` array.
   */


  resizeEdges(size) {
    // Allocate the required space for new `nodes` and `edges` maps.
    let copy = new AdjacencyList({
      nodeCapacity: this.#nodes.capacity,
      edgeCapacity: size
    }); // Copy the existing edges into the new array.

    copy.#nodes.nextId = this.#nodes.nextId;
    this.#edges.forEach(edge => void copy.addEdge(this.#edges.from(edge), this.#edges.to(edge), this.#edges.typeOf(edge))); // We expect to preserve the same number of edges.

    (0, _assert().default)(this.#edges.count === copy.#edges.count, `Edge mismatch! ${this.#edges.count} does not match ${copy.#edges.count}.`); // Finally, copy the new data arrays over to this graph.

    this.#nodes = copy.#nodes;
    this.#edges = copy.#edges;
  }
  /**
   * Adds a node to the graph.
   *
   * Returns the id of the added node.
   */


  addNode() {
    let id = this.#nodes.getId(); // If we're in danger of overflowing the `nodes` array, resize it.

    if (this.#nodes.load > LOAD_FACTOR) {
      this.resizeNodes(increaseNodeCapacity(this.#nodes.capacity));
    }

    return id;
  }
  /**
   * Adds an edge to the graph.
   *
   * Returns `true` if the edge was added,
   * or `false` if the edge already exists.
   */


  addEdge(from, to, type = 1) {
    (0, _assert().default)(type > 0, `Unsupported edge type ${type}`);
    let hash = this.#edges.hash(from, to, type);
    let edge = this.#edges.addressOf(hash, from, to, type); // The edge is already in the graph; do nothing.

    if (edge !== null) return false;
    let capacity = this.#edges.capacity; // We add 1 to account for the edge we are adding.

    let count = this.#edges.count + 1; // Since the space occupied by deleted edges isn't reclaimed,
    // we include them in our count to avoid overflowing the `edges` array.

    let deletes = this.#edges.deletes;
    let total = count + deletes; // If we have enough space to keep adding edges, we can
    // put off reclaiming the deleted space until the next resize.

    if (this.#edges.getLoad(total) > LOAD_FACTOR) {
      if (this.#edges.getLoad(deletes) > UNLOAD_FACTOR) {
        // If we have a significant number of deletes, we compute our new
        // capacity based on the current count, even though we decided to
        // resize based on the sum total of count and deletes.
        // In this case, resizing is more like a compaction.
        this.resizeEdges(getNextEdgeCapacity(capacity, count, this.#edges.getLoad(count)));
      } else {
        this.resizeEdges(getNextEdgeCapacity(capacity, total, this.#edges.getLoad(total)));
      } // We must rehash because the capacity has changed.


      hash = this.#edges.hash(from, to, type);
    }

    let toNode = this.#nodes.addressOf(to, type);
    let fromNode = this.#nodes.addressOf(from, type);

    if (toNode === null || fromNode === null) {
      // If we're in danger of overflowing the `nodes` array, resize it.
      if (this.#nodes.load >= LOAD_FACTOR) {
        this.resizeNodes(increaseNodeCapacity(this.#nodes.capacity)); // We need to update our indices since the `nodes` array has changed.

        toNode = this.#nodes.addressOf(to, type);
        fromNode = this.#nodes.addressOf(from, type);
      }
    }

    if (toNode === null) toNode = this.#nodes.add(to, type);
    if (fromNode === null) fromNode = this.#nodes.add(from, type); // Add our new edge to its hash bucket.

    edge = this.#edges.add(hash, from, to, type); // Link this edge to the node's list of incoming edges.

    let prevIn = this.#nodes.linkIn(toNode, edge);
    if (prevIn !== null) this.#edges.linkIn(prevIn, edge); // Link this edge to the node's list of outgoing edges.

    let prevOut = this.#nodes.linkOut(fromNode, edge);
    if (prevOut !== null) this.#edges.linkOut(prevOut, edge);
    return true;
  }

  *getAllEdges() {
    for (let edge of this.#edges) {
      yield {
        from: this.#edges.from(edge),
        to: this.#edges.to(edge),
        type: this.#edges.typeOf(edge)
      };
    }
  }
  /**
   * Check if the graph has an edge connecting the `from` and `to` nodes.
   */


  hasEdge(from, to, type = 1) {
    let hasEdge = type => {
      let hash = this.#edges.hash(from, to, type);
      return this.#edges.addressOf(hash, from, to, type) !== null;
    };

    if (Array.isArray(type)) {
      return type.some(hasEdge);
    }

    return hasEdge(type);
  }
  /**
   *
   */


  removeEdge(from, to, type = 1) {
    let hash = this.#edges.hash(from, to, type);
    let edge = this.#edges.addressOf(hash, from, to, type); // The edge is not in the graph; do nothing.

    if (edge === null) return;
    let toNode = (0, _nullthrows().default)(this.#nodes.addressOf(to, type));
    let fromNode = (0, _nullthrows().default)(this.#nodes.addressOf(from, type)); // Update the terminating node's first and last incoming edges.

    this.#nodes.unlinkIn(toNode, edge, this.#edges.prevIn(edge), this.#edges.nextIn(edge)); // Update the originating node's first and last outgoing edges.

    this.#nodes.unlinkOut(fromNode, edge, this.#edges.prevOut(edge), this.#edges.nextOut(edge)); // Splice the removed edge out of the linked list of edges in the bucket.

    this.#edges.unlink(hash, edge); // Splice the removed edge out of the linked list of incoming edges.

    this.#edges.unlinkIn(edge); // Splice the removed edge out of the linked list of outgoing edges.

    this.#edges.unlinkOut(edge); // Finally, delete the edge.

    this.#edges.delete(edge);
  }

  hasInboundEdges(to) {
    let node = this.#nodes.head(to);

    while (node !== null) {
      if (this.#nodes.firstIn(node) !== null) return true;
      node = this.#nodes.next(node);
    }

    return false;
  }

  getInboundEdgesByType(to) {
    let edges = [];
    let node = this.#nodes.head(to);

    while (node !== null) {
      let type = this.#nodes.typeOf(node);
      let edge = this.#nodes.firstIn(node);

      while (edge !== null) {
        let from = this.#edges.from(edge);
        edges.push({
          from,
          type
        });
        edge = this.#edges.nextIn(edge);
      }

      node = this.#nodes.next(node);
    }

    return edges;
  }

  getOutboundEdgesByType(from) {
    let edges = [];
    let node = this.#nodes.head(from);

    while (node !== null) {
      let type = this.#nodes.typeOf(node);
      let edge = this.#nodes.firstOut(node);

      while (edge !== null) {
        let to = this.#edges.to(edge);
        edges.push({
          to,
          type
        });
        edge = this.#edges.nextOut(edge);
      }

      node = this.#nodes.next(node);
    }

    return edges;
  }
  /**
   * Get the list of nodes connected from this node.
   */


  getNodeIdsConnectedFrom(from, type = 1) {
    let matches = node => type === _Graph.ALL_EDGE_TYPES || (Array.isArray(type) ? type.includes(this.#nodes.typeOf(node)) : type === this.#nodes.typeOf(node));

    let nodes = [];
    let seen = new Set();
    let node = this.#nodes.head(from);

    while (node !== null) {
      if (matches(node)) {
        let edge = this.#nodes.firstOut(node);

        while (edge !== null) {
          let to = this.#edges.to(edge);

          if (!seen.has(to)) {
            nodes.push(to);
            seen.add(to);
          }

          edge = this.#edges.nextOut(edge);
        }
      }

      node = this.#nodes.next(node);
    }

    return nodes;
  }
  /**
   * Get the list of nodes connected to this node.
   */


  getNodeIdsConnectedTo(to, type = 1) {
    let matches = node => type === _Graph.ALL_EDGE_TYPES || (Array.isArray(type) ? type.includes(this.#nodes.typeOf(node)) : type === this.#nodes.typeOf(node));

    let nodes = [];
    let seen = new Set();
    let node = this.#nodes.head(to);

    while (node !== null) {
      if (matches(node)) {
        let edge = this.#nodes.firstIn(node);

        while (edge !== null) {
          let from = this.#edges.from(edge);

          if (!seen.has(from)) {
            nodes.push(from);
            seen.add(from);
          }

          edge = this.#edges.nextIn(edge);
        }
      }

      node = this.#nodes.next(node);
    }

    return nodes;
  }

  inspect() {
    return {
      nodes: this.#nodes.inspect(),
      edges: this.#edges.inspect()
    };
  }

}
/**
 * `SharedTypeMap` is a hashmap of items,
 * where each item has its own 'type' field.
 *
 * The `SharedTypeMap` is backed by a shared array buffer of fixed length.
 * The buffer is partitioned into:
 * - a header, which stores the capacity and number of items in the map,
 * - a hash table, which is an array of pointers to linked lists of items
 *   with the same hash,
 * - an items array, which is where the linked items are stored.
 *
 *            hash table                 item
 *            (capacity)             (ITEM_SIZE)
 *         ┌──────┴──────┐             ┌──┴──┐
 *   ┌──┬──┬──┬───────┬──┬──┬──┬───────┬──┬──┐
 *   │  │  │  │  ...  │  │  │  │  ...  │  │  │
 *   └──┴──┴──┴───────┴──┴──┴──┴───────┴──┴──┘
 *   └──┬──┘             └─────────┬─────────┘
 *    header                     items
 * (HEADER_SIZE)    (capacity * ITEM_SIZE * BUCKET_SIZE)
 *
 *
 * An item is added with a hash key that fits within the range of the hash
 * table capacity. The item is stored at the next available address after the
 * hash table, and a pointer to the address is stored in the hash table at
 * the index matching the hash. If the hash is already pointing at an item,
 * the pointer is stored in the `next` field of the existing item instead.
 *
 *       hash table                          items
 * ┌─────────┴────────┐┌───────────────────────┴────────────────────────┐
 *    0    1    2        11       17        23       29      35
 * ┌───┐┌───┐┌───┐┌───┐┌───┬───┐┌───┬───┐┌───┬───┐┌───┬───┐┌───┬───┐┌───┐
 * │17 ││11 ││35 ││...││23 │ 1 ││29 │ 1 ││ 0 │ 2 ││ 0 │ 2 ││ 0 │ 1 ││...│
 * └───┘└───┘└───┘└───┘└───┴───┘└───┴───┘└───┴───┘└───┴───┘└───┴───┘└───┘
 *   │    │    │         ▲        ▲        ▲        ▲        ▲
 *   └────┼────┼─────────┼────────┴────────┼────────┘        │
 *        └────┼─────────┴─────────────────┘                 │
 *             └─────────────────────────────────────────────┘
 */


exports.default = AdjacencyList;

class SharedTypeMap {
  /**
   * The header for the `SharedTypeMap` comprises 2 4-byte chunks:
   *
   * struct SharedTypeMapHeader {
   *   int capacity;
   *   int count;
   * }
   *
   * ┌──────────┬───────┐
   * │ CAPACITY │ COUNT │
   * └──────────┴───────┘
   */
  static HEADER_SIZE = 2;
  /** The offset from the header where the capacity is stored. */

  static #CAPACITY = 0;
  /** The offset from the header where the count is stored. */

  static #COUNT = 1;
  /**
   * Each item in `SharedTypeMap` comprises 2 4-byte chunks:
   *
   * struct Node {
   *   int next;
   *   int type;
   * }
   *
   * ┌──────┬──────┐
   * │ NEXT │ TYPE │
   * └──────┴──────┘
   */

  static ITEM_SIZE = 2;
  /** The offset at which a link to the next item in the same bucket is stored. */

  static #NEXT = 0;
  /** The offset at which an item's type is stored. */

  static #TYPE = 1;
  /** The number of items to accommodate per hash bucket. */

  static BUCKET_SIZE = 2;

  get capacity() {
    return this.data[SharedTypeMap.#CAPACITY];
  }

  get count() {
    return this.data[SharedTypeMap.#COUNT];
  }

  get load() {
    return this.getLoad();
  }

  get length() {
    return this.getLength();
  }

  get addressableLimit() {
    return this.constructor.HEADER_SIZE + this.capacity;
  }

  get bufferSize() {
    return `${(this.data.byteLength / 1024 / 1024).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })} mb`;
  }

  constructor(capacityOrData) {
    if (typeof capacityOrData === 'number') {
      let {
        BYTES_PER_ELEMENT
      } = Uint32Array;
      let CAPACITY = SharedTypeMap.#CAPACITY; // $FlowFixMe[incompatible-call]

      this.data = new Uint32Array(new _sharedBuffer.SharedBuffer(this.getLength(capacityOrData) * BYTES_PER_ELEMENT));
      this.data[CAPACITY] = capacityOrData;
    } else {
      this.data = capacityOrData;
      (0, _assert().default)(this.getLength() === this.data.length, 'Data appears corrupt.');
    }
  }

  set(data) {
    let {
      HEADER_SIZE,
      ITEM_SIZE
    } = this.constructor;
    let NEXT = SharedTypeMap.#NEXT;
    let COUNT = SharedTypeMap.#COUNT;
    let CAPACITY = SharedTypeMap.#CAPACITY;
    let delta = this.capacity - data[CAPACITY];
    (0, _assert().default)(delta >= 0, 'Cannot copy to a map with smaller capacity.'); // Copy the header.

    this.data.set(data.subarray(COUNT, HEADER_SIZE), COUNT); // Copy the hash table.

    let toTable = this.data.subarray(HEADER_SIZE, HEADER_SIZE + this.capacity);
    toTable.set(data.subarray(HEADER_SIZE, HEADER_SIZE + data[CAPACITY])); // Offset first links to account for the change in table capacity.

    let max = toTable.length;

    for (let i = 0; i < max; i++) {
      if (toTable[i]) toTable[i] += delta;
    } // Copy the items.


    let toItems = this.data.subarray(HEADER_SIZE + this.capacity);
    toItems.set(data.subarray(HEADER_SIZE + data[CAPACITY])); // Offset next links to account for the change in table capacity.

    max = toItems.length;

    for (let i = 0; i < max; i += ITEM_SIZE) {
      if (toItems[i + NEXT]) toItems[i + NEXT] += delta;
    }
  }

  getLoad(count = this.count) {
    let {
      BUCKET_SIZE
    } = this.constructor;
    return count / (this.capacity * BUCKET_SIZE);
  }

  getLength(capacity = this.capacity) {
    let {
      HEADER_SIZE,
      ITEM_SIZE,
      BUCKET_SIZE
    } = this.constructor;
    return capacity + HEADER_SIZE + ITEM_SIZE * BUCKET_SIZE * capacity;
  }
  /** Get the next available address in the map. */


  getNextAddress() {
    let {
      HEADER_SIZE,
      ITEM_SIZE
    } = this.constructor;
    return HEADER_SIZE + this.capacity + this.count * ITEM_SIZE;
  }
  /** Get the address of the first item with the given hash. */


  head(hash) {
    let {
      HEADER_SIZE
    } = this.constructor;
    return this.data[HEADER_SIZE + hash] || null;
  }
  /** Get the address of the next item with the same hash as the given item. */


  next(item) {
    let NEXT = SharedTypeMap.#NEXT;
    return this.data[item + NEXT] || null;
  }

  typeOf(item) {
    return this.data[item + SharedTypeMap.#TYPE];
  }

  link(hash, item, type) {
    let COUNT = SharedTypeMap.#COUNT;
    let NEXT = SharedTypeMap.#NEXT;
    let TYPE = SharedTypeMap.#TYPE;
    let {
      HEADER_SIZE
    } = this.constructor;
    this.data[item + TYPE] = type;
    let prev = this.head(hash);

    if (prev !== null) {
      let next = this.next(prev);

      while (next !== null) {
        prev = next;
        next = this.next(next);
      }

      this.data[prev + NEXT] = item;
    } else {
      // This is the first item in the bucket!
      this.data[HEADER_SIZE + hash] = item;
    }

    this.data[COUNT]++;
  }

  unlink(hash, item) {
    let COUNT = SharedTypeMap.#COUNT;
    let NEXT = SharedTypeMap.#NEXT;
    let TYPE = SharedTypeMap.#TYPE;
    let {
      HEADER_SIZE
    } = this.constructor;
    this.data[item + TYPE] = 0;
    let head = this.head(hash); // No bucket to unlink from.

    if (head === null) return;
    let next = this.next(item);
    let prev = null;
    let candidate = head;

    while (candidate !== null && candidate !== item) {
      prev = candidate;
      candidate = this.next(candidate);
    }

    if (prev !== null && next !== null) {
      this.data[prev + NEXT] = next;
    } else if (prev !== null) {
      this.data[prev + NEXT] = 0;
    } else if (next !== null) {
      this.data[HEADER_SIZE + hash] = next;
    } else {
      this.data[HEADER_SIZE + hash] = 0;
    }

    this.data[item + NEXT] = 0;
    this.data[COUNT]--;
  }

  forEach(cb) {
    let max = this.count;
    let len = this.length;
    let {
      ITEM_SIZE
    } = this.constructor;

    for (let i = this.addressableLimit, count = 0; i < len && count < max; i += ITEM_SIZE) {
      // Skip items that don't have a type.
      if (this.typeOf(i)) {
        cb(i);
        count++;
      }
    }
  } // Trick Flow into believing in `Symbol.iterator`.
  // See https://github.com/facebook/flow/issues/1163#issuecomment-353523840

  /*:: @@iterator(): Iterator<TAddress> { return ({}: any); } */
  // $FlowFixMe[unsupported-syntax]


  *[Symbol.iterator]() {
    let max = this.count;
    let len = this.length;
    let {
      ITEM_SIZE
    } = this.constructor;

    for (let i = this.addressableLimit, count = 0; i < len && count < max; i += ITEM_SIZE) {
      if (this.data.subarray(i, i + ITEM_SIZE).some(Boolean)) {
        yield i;
        count++;
      }
    }
  }

  inspect() {
    const {
      HEADER_SIZE,
      ITEM_SIZE,
      BUCKET_SIZE
    } = this.constructor;
    let min = HEADER_SIZE + this.capacity;
    let max = min + this.capacity * BUCKET_SIZE * ITEM_SIZE;
    return {
      header: this.data.subarray(0, HEADER_SIZE),
      table: this.data.subarray(HEADER_SIZE, min),
      data: this.data.subarray(min, max)
    };
  }

}
/**
 * Nodes are stored in a `SharedTypeMap`, keyed on node id plus an edge type.
 * This means that for any given unique node id, there may be `e` nodes in the
 * map, where `e` is the number of possible edge types in the graph.
 */


exports.SharedTypeMap = SharedTypeMap;

class NodeTypeMap extends SharedTypeMap {
  /**
   * In addition to the header defined by `SharedTypeMap`, the header for
   * the node map includes a 4-byte `nextId` chunk:
   *
   * struct NodeTypeMapHeader {
   *   int capacity; // from `SharedTypeMap`
   *   int count; // from `SharedTypeMap`
   *   int nextId;
   * }
   *
   * ┌──────────┬───────┬─────────┐
   * │ CAPACITY │ COUNT │ NEXT_ID │
   * └──────────┴───────┴─────────┘
   */
  static HEADER_SIZE = 3;
  /** The offset from the header where the next available node id is stored. */

  static #NEXT_ID = 2;
  /**
   * In addition to the item fields defined by `SharedTypeMap`,
   * each node includes another 4 4-byte chunks:
   *
   * struct Node {
   *   int next; // from `SharedTypeMap`
   *   int type; // from `SharedTypeMap`
   *   int firstIn;
   *   int firstOut;
   *   int lastIn;
   *   int lastOut;
   * }
   *
   * ┌──────┬──────┬──────────┬───────────┬─────────┬──────────┐
   * │ NEXT │ TYPE │ FIRST_IN │ FIRST_OUT │ LAST_IN │ LAST_OUT │
   * └──────┴──────┴──────────┴───────────┴─────────┴──────────┘
   */

  static ITEM_SIZE = 6;
  /** The offset at which a node's first incoming edge of this type is stored. */

  static #FIRST_IN = 2;
  /** The offset at which a node's first outgoing edge of this type is stored. */

  static #FIRST_OUT = 3;
  /** The offset at which a node's last incoming edge of this type is stored. */

  static #LAST_IN = 4;
  /** The offset at which a node's last outgoing edge of this type is stored. */

  static #LAST_OUT = 5;
  /** The smallest functional node map capacity. */

  static MIN_CAPACITY = 2;
  /** The largest possible node map capacity. */

  static MAX_CAPACITY = Math.floor( // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_array_length#what_went_wrong
  (2 ** 31 - 1 - NodeTypeMap.HEADER_SIZE) / NodeTypeMap.ITEM_SIZE / NodeTypeMap.BUCKET_SIZE);

  get nextId() {
    return (0, _types.toNodeId)(this.data[NodeTypeMap.#NEXT_ID]);
  }

  set nextId(nextId) {
    this.data[NodeTypeMap.#NEXT_ID] = (0, _types.fromNodeId)(nextId);
  }
  /** Get a unique node id. */


  getId() {
    return (0, _types.toNodeId)(this.data[NodeTypeMap.#NEXT_ID]++);
  }

  getLoad(count = this.count) {
    return Math.max((0, _types.fromNodeId)(this.nextId) / this.capacity, super.getLoad(count));
  }

  add(node, type) {
    let index = (0, _types.fromNodeId)(node);
    (0, _assert().default)(index >= 0 && index < this.data[NodeTypeMap.#NEXT_ID], `Invalid node id ${String(node)} (${this.data[NodeTypeMap.#NEXT_ID]})`);
    let address = this.getNextAddress();
    this.link(node, address, type);
    return address;
  }

  addressOf(node, type) {
    let address = this.head(node);

    while (address !== null) {
      if (this.typeOf(address) === type) {
        return address;
      }

      address = this.next(address);
    }

    return null;
  }

  firstIn(node) {
    return this.data[node + NodeTypeMap.#FIRST_IN] || null;
  }

  firstOut(node) {
    return this.data[node + NodeTypeMap.#FIRST_OUT] || null;
  }

  lastIn(node) {
    return this.data[node + NodeTypeMap.#LAST_IN] || null;
  }

  lastOut(node) {
    return this.data[node + NodeTypeMap.#LAST_OUT] || null;
  }

  linkIn(node, edge) {
    let first = this.firstIn(node);
    let last = this.lastIn(node);
    if (first === null) this.data[node + NodeTypeMap.#FIRST_IN] = edge;
    this.data[node + NodeTypeMap.#LAST_IN] = edge;
    return last;
  }

  unlinkIn(node, edge, prev, next) {
    let first = this.firstIn(node);
    let last = this.lastIn(node);

    if (last === edge) {
      this.data[node + NodeTypeMap.#LAST_IN] = prev === null ? 0 : prev;
    }

    if (first === edge) {
      this.data[node + NodeTypeMap.#FIRST_IN] = next === null ? 0 : next;
    }
  }

  linkOut(node, edge) {
    let first = this.firstOut(node);
    let last = this.lastOut(node);
    if (first === null) this.data[node + NodeTypeMap.#FIRST_OUT] = edge;
    this.data[node + NodeTypeMap.#LAST_OUT] = edge;
    return last;
  }

  unlinkOut(node, edge, prev, next) {
    let first = this.firstOut(node);
    let last = this.lastOut(node);

    if (last === edge) {
      this.data[node + NodeTypeMap.#LAST_OUT] = prev === null ? 0 : prev;
    }

    if (first === edge) {
      this.data[node + NodeTypeMap.#FIRST_OUT] = next === null ? 0 : next;
    }
  }

}
/**
 * Edges are stored in a `SharedTypeMap`,
 * keyed on the 'from' and 'to' node ids, and the edge type.
 */


exports.NodeTypeMap = NodeTypeMap;

class EdgeTypeMap extends SharedTypeMap {
  /**
   * In addition to the header defined by `SharedTypeMap`, the header for
   * the edge map includes a 4-byte `deletes` chunk:
   *
   * struct EdgeTypeMapHeader {
   *   int capacity; // from `SharedTypeMap`
   *   int count; // from `SharedTypeMap`
   *   int deletes;
   * }
   *
   * ┌──────────┬───────┬─────────┐
   * │ CAPACITY │ COUNT │ DELETES │
   * └──────────┴───────┴─────────┘
   */
  static HEADER_SIZE = 3;
  /** The offset from the header where the delete count is stored. */

  static #DELETES = 2;
  /**
   * In addition to the item fields defined by `SharedTypeMap`,
   * each edge includes another 6 4-byte chunks:
   *
   * struct Edge {
   *   int next; // from `SharedTypeMap`
   *   int type; // from `SharedTypeMap`
   *   int from;
   *   int to;
   *   int nextIn;
   *   int prevIn;
   *   int nextOut;
   *   int prevOut;
   * }
   *
   * ┌──────┬──────┬──────┬────┬─────────┬─────────┬──────────┬──────────┐
   * │ NEXT │ TYPE │ FROM │ TO │ NEXT_IN │ PREV_IN │ NEXT_OUT │ PREV_OUT │
   * └──────┴──────┴──────┴────┴─────────┴─────────┴──────────┴──────────┘
   */

  static ITEM_SIZE = 8;
  /** The offset at which an edge's 'from' node id is stored. */

  static #FROM = 2;
  /** The offset at which an edge's 'to' node id is stored. */

  static #TO = 3;
  /** The offset at which the 'to' node's next incoming edge is stored.  */

  static #NEXT_IN = 4;
  /** The offset at which the 'to' node's previous incoming edge is stored.  */

  static #PREV_IN = 5;
  /** The offset at which the 'from' node's next outgoing edge is stored.  */

  static #NEXT_OUT = 6;
  /** The offset at which the 'from' node's previous outgoing edge is stored.  */

  static #PREV_OUT = 7;
  /** The smallest functional edge map capacity. */

  static MIN_CAPACITY = 2;
  /** The largest possible edge map capacity. */

  static MAX_CAPACITY = Math.floor( // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_array_length#what_went_wrong
  (2 ** 31 - 1 - EdgeTypeMap.HEADER_SIZE) / EdgeTypeMap.ITEM_SIZE / EdgeTypeMap.BUCKET_SIZE);
  /** The size after which to grow the capacity by the minimum factor. */

  static PEAK_CAPACITY = 2 ** 18;

  get deletes() {
    return this.data[EdgeTypeMap.#DELETES];
  }

  getNextAddress() {
    let {
      ITEM_SIZE
    } = this.constructor;
    return this.addressableLimit + (this.count + this.deletes) * ITEM_SIZE;
  }

  add(hash, from, to, type) {
    (0, _assert().default)(hash >= 0 && hash < this.capacity, `Invalid edge hash ${String(hash)}`); // Use the next available edge address.

    let edge = this.getNextAddress(); // Add our new edge to its hash bucket.

    this.link(hash, edge, type);
    this.data[edge + EdgeTypeMap.#FROM] = (0, _types.fromNodeId)(from);
    this.data[edge + EdgeTypeMap.#TO] = (0, _types.fromNodeId)(to);
    return edge;
  }

  delete(edge) {
    this.data[edge + EdgeTypeMap.#FROM] = 0;
    this.data[edge + EdgeTypeMap.#TO] = 0;
    this.data[EdgeTypeMap.#DELETES]++;
  }

  addressOf(hash, from, to, type) {
    let address = this.head(hash);

    while (address !== null) {
      if (this.typeOf(address) === type && this.from(address) === from && this.to(address) === to) {
        return address;
      }

      address = this.next(address);
    }

    return null;
  }

  from(edge) {
    return (0, _types.toNodeId)(this.data[edge + EdgeTypeMap.#FROM]);
  }

  to(edge) {
    return (0, _types.toNodeId)(this.data[edge + EdgeTypeMap.#TO]);
  }

  nextIn(edge) {
    return this.data[edge + EdgeTypeMap.#NEXT_IN] || null;
  }

  prevIn(edge) {
    return this.data[edge + EdgeTypeMap.#PREV_IN] || null;
  }

  linkIn(edge, next) {
    this.data[edge + EdgeTypeMap.#NEXT_IN] = next;
    this.data[next + EdgeTypeMap.#PREV_IN] = edge;
  }

  unlinkIn(edge) {
    let next = this.nextIn(edge);
    let prev = this.prevIn(edge);
    this.data[edge + EdgeTypeMap.#NEXT_IN] = 0;
    this.data[edge + EdgeTypeMap.#PREV_IN] = 0;

    if (next !== null && prev !== null) {
      this.data[prev + EdgeTypeMap.#NEXT_IN] = next;
      this.data[next + EdgeTypeMap.#PREV_IN] = prev;
    } else if (next !== null) {
      this.data[next + EdgeTypeMap.#PREV_IN] = 0;
    } else if (prev !== null) {
      this.data[prev + EdgeTypeMap.#NEXT_IN] = 0;
    }
  }

  nextOut(edge) {
    return this.data[edge + EdgeTypeMap.#NEXT_OUT] || null;
  }

  prevOut(edge) {
    return this.data[edge + EdgeTypeMap.#PREV_OUT] || null;
  }

  linkOut(edge, next) {
    this.data[edge + EdgeTypeMap.#NEXT_OUT] = next;
    this.data[next + EdgeTypeMap.#PREV_OUT] = edge;
  }

  unlinkOut(edge) {
    let next = this.nextOut(edge);
    let prev = this.prevOut(edge);
    this.data[edge + EdgeTypeMap.#NEXT_OUT] = 0;
    this.data[edge + EdgeTypeMap.#PREV_OUT] = 0;

    if (next !== null && prev !== null) {
      this.data[prev + EdgeTypeMap.#NEXT_OUT] = next;
      this.data[next + EdgeTypeMap.#PREV_OUT] = prev;
    } else if (next !== null) {
      this.data[next + EdgeTypeMap.#PREV_OUT] = 0;
    } else if (prev !== null) {
      this.data[prev + EdgeTypeMap.#NEXT_OUT] = 0;
    }
  }
  /** Create a hash of the edge connecting the `from` and `to` nodes.  */


  hash(from, to, type) {
    // Each parameter is hashed by mixing its upper bits into its lower bits to
    // increase the likelihood that a change to any bit of the input will vary
    // the output widely. Then we do a series of prime multiplications and
    // additions to combine the hashes into one value.
    let hash = 17;
    hash = hash * 37 + hash32shift(from);
    hash = hash * 37 + hash32shift(to);
    hash = hash * 37 + hash32shift(type); // Finally, we map the hash to a value modulo the edge capacity.

    hash %= this.capacity;
    return hash;
  }

} // From https://gist.github.com/badboy/6267743#32-bit-mix-functions


exports.EdgeTypeMap = EdgeTypeMap;

function hash32shift(key) {
  key = ~key + (key << 15); // key = (key << 15) - key - 1;

  key = key ^ key >> 12;
  key = key + (key << 2);
  key = key ^ key >> 4;
  key = key * 2057; // key = (key + (key << 3)) + (key << 11);

  key = key ^ key >> 16;
  return key;
}

function interpolate(x, y, t) {
  return x + (y - x) * Math.min(1, Math.max(0, t));
}

function increaseNodeCapacity(nodeCapacity) {
  let {
    MIN_CAPACITY,
    MAX_CAPACITY
  } = NodeTypeMap;
  let newCapacity = Math.round(nodeCapacity * MIN_GROW_FACTOR);
  (0, _assert().default)(newCapacity <= MAX_CAPACITY, 'Node capacity overflow!');
  return Math.max(MIN_CAPACITY, newCapacity);
}

function getNextEdgeCapacity(capacity, count, load) {
  let {
    MIN_CAPACITY,
    MAX_CAPACITY,
    PEAK_CAPACITY
  } = EdgeTypeMap;
  let newCapacity = capacity;

  if (load > LOAD_FACTOR) {
    // This is intended to strike a balance between growing the edge capacity
    // in too small increments, which causes a lot of resizing, and growing
    // the edge capacity in too large increments, which results in a lot of
    // wasted memory.
    let growFactor = interpolate(MAX_GROW_FACTOR, MIN_GROW_FACTOR, capacity / PEAK_CAPACITY);
    newCapacity = Math.round(capacity * growFactor);
  } else if (load < UNLOAD_FACTOR) {
    // In some cases, it may be possible to shrink the edge capacity,
    // but this is only likely to occur when a lot of edges have been removed.
    newCapacity = Math.round(capacity * SHRINK_FACTOR);
  }

  (0, _assert().default)(newCapacity <= MAX_CAPACITY, 'Edge capacity overflow!');
  return Math.max(MIN_CAPACITY, newCapacity);
}