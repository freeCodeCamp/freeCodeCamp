"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ALL_EDGE_TYPES = void 0;
exports.mapVisitor = mapVisitor;

var _types = require("./types");

var _AdjacencyList = _interopRequireDefault(require("./AdjacencyList"));

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ALL_EDGE_TYPES = -1;
exports.ALL_EDGE_TYPES = ALL_EDGE_TYPES;

class Graph {
  constructor(opts) {
    this.nodes = (opts === null || opts === void 0 ? void 0 : opts.nodes) || new Map();
    this.setRootNodeId(opts === null || opts === void 0 ? void 0 : opts.rootNodeId);
    let adjacencyList = opts === null || opts === void 0 ? void 0 : opts.adjacencyList;
    this.adjacencyList = adjacencyList ? _AdjacencyList.default.deserialize(adjacencyList) : new _AdjacencyList.default();
  }

  setRootNodeId(id) {
    this.rootNodeId = id;
  }

  static deserialize(opts) {
    return new this({
      nodes: opts.nodes,
      adjacencyList: opts.adjacencyList,
      rootNodeId: opts.rootNodeId
    });
  }

  serialize() {
    return {
      nodes: this.nodes,
      adjacencyList: this.adjacencyList.serialize(),
      rootNodeId: this.rootNodeId
    };
  } // Returns an iterator of all edges in the graph. This can be large, so iterating
  // the complete list can be costly in large graphs. Used when merging graphs.


  getAllEdges() {
    return this.adjacencyList.getAllEdges();
  }

  addNode(node) {
    let id = this.adjacencyList.addNode();
    this.nodes.set(id, node);
    return id;
  }

  hasNode(id) {
    return this.nodes.has(id);
  }

  getNode(id) {
    return this.nodes.get(id);
  }

  addEdge(from, to, type = 1) {
    if (Number(type) === 0) {
      throw new Error(`Edge type "${type}" not allowed`);
    }

    if (!this.getNode(from)) {
      throw new Error(`"from" node '${(0, _types.fromNodeId)(from)}' not found`);
    }

    if (!this.getNode(to)) {
      throw new Error(`"to" node '${(0, _types.fromNodeId)(to)}' not found`);
    }

    return this.adjacencyList.addEdge(from, to, type);
  }

  hasEdge(from, to, type = 1) {
    return this.adjacencyList.hasEdge(from, to, type);
  }

  getNodeIdsConnectedTo(nodeId, type = 1) {
    this._assertHasNodeId(nodeId);

    return this.adjacencyList.getNodeIdsConnectedTo(nodeId, type);
  }

  getNodeIdsConnectedFrom(nodeId, type = 1) {
    this._assertHasNodeId(nodeId);

    return this.adjacencyList.getNodeIdsConnectedFrom(nodeId, type);
  } // Removes node and any edges coming from or to that node


  removeNode(nodeId) {
    if (!this.hasNode(nodeId)) {
      return;
    }

    for (let {
      type,
      from
    } of this.adjacencyList.getInboundEdgesByType(nodeId)) {
      this._removeEdge(from, nodeId, type, // Do not allow orphans to be removed as this node could be one
      // and is already being removed.
      false);
    }

    for (let {
      type,
      to
    } of this.adjacencyList.getOutboundEdgesByType(nodeId)) {
      this._removeEdge(nodeId, to, type);
    }

    let wasRemoved = this.nodes.delete(nodeId);
    (0, _assert().default)(wasRemoved);
  }

  removeEdges(nodeId, type = 1) {
    if (!this.hasNode(nodeId)) {
      return;
    }

    for (let to of this.getNodeIdsConnectedFrom(nodeId, type)) {
      this._removeEdge(nodeId, to, type);
    }
  }

  removeEdge(from, to, type = 1, removeOrphans = true) {
    if (!this.adjacencyList.hasEdge(from, to, type)) {
      throw new Error(`Edge from ${(0, _types.fromNodeId)(from)} to ${(0, _types.fromNodeId)(to)} not found!`);
    }

    this._removeEdge(from, to, type, removeOrphans);
  } // Removes edge and node the edge is to if the node is orphaned


  _removeEdge(from, to, type = 1, removeOrphans = true) {
    if (!this.adjacencyList.hasEdge(from, to, type)) {
      return;
    }

    this.adjacencyList.removeEdge(from, to, type);

    if (removeOrphans && this.isOrphanedNode(to)) {
      this.removeNode(to);
    }
  }

  isOrphanedNode(nodeId) {
    if (!this.hasNode(nodeId)) {
      return false;
    }

    if (this.rootNodeId == null) {
      // If the graph does not have a root, and there are inbound edges,
      // this node should not be considered orphaned.
      return !this.adjacencyList.hasInboundEdges(nodeId);
    } // Otherwise, attempt to traverse backwards to the root. If there is a path,
    // then this is not an orphaned node.


    let hasPathToRoot = false; // go back to traverseAncestors

    this.traverseAncestors(nodeId, (ancestorId, _, actions) => {
      if (ancestorId === this.rootNodeId) {
        hasPathToRoot = true;
        actions.stop();
      }
    }, ALL_EDGE_TYPES);

    if (hasPathToRoot) {
      return false;
    }

    return true;
  }

  updateNode(nodeId, node) {
    this._assertHasNodeId(nodeId);

    this.nodes.set(nodeId, node);
  } // Update a node's downstream nodes making sure to prune any orphaned branches


  replaceNodeIdsConnectedTo(fromNodeId, toNodeIds, replaceFilter, type = 1) {
    this._assertHasNodeId(fromNodeId);

    let outboundEdges = this.getNodeIdsConnectedFrom(fromNodeId, type);
    let childrenToRemove = new Set(replaceFilter ? outboundEdges.filter(toNodeId => replaceFilter(toNodeId)) : outboundEdges);

    for (let toNodeId of toNodeIds) {
      childrenToRemove.delete(toNodeId);

      if (!this.hasEdge(fromNodeId, toNodeId, type)) {
        this.addEdge(fromNodeId, toNodeId, type);
      }
    }

    for (let child of childrenToRemove) {
      this._removeEdge(fromNodeId, child, type);
    }
  }

  traverse(visit, startNodeId, type = 1) {
    return this.dfs({
      visit,
      startNodeId,
      getChildren: nodeId => this.getNodeIdsConnectedFrom(nodeId, type)
    });
  }

  filteredTraverse(filter, visit, startNodeId, type) {
    return this.traverse(mapVisitor(filter, visit), startNodeId, type);
  }

  traverseAncestors(startNodeId, visit, type = 1) {
    return this.dfs({
      visit,
      startNodeId,
      getChildren: nodeId => this.getNodeIdsConnectedTo(nodeId, type)
    });
  }

  dfs({
    visit,
    startNodeId,
    getChildren
  }) {
    let traversalStartNode = (0, _nullthrows().default)(startNodeId !== null && startNodeId !== void 0 ? startNodeId : this.rootNodeId, 'A start node is required to traverse');

    this._assertHasNodeId(traversalStartNode);

    let visited = new Set();
    let stopped = false;
    let skipped = false;
    let actions = {
      skipChildren() {
        skipped = true;
      },

      stop() {
        stopped = true;
      }

    };

    let walk = (nodeId, context) => {
      if (!this.hasNode(nodeId)) return;
      visited.add(nodeId);
      skipped = false;
      let enter = typeof visit === 'function' ? visit : visit.enter;

      if (enter) {
        let newContext = enter(nodeId, context, actions);

        if (typeof newContext !== 'undefined') {
          // $FlowFixMe[reassign-const]
          context = newContext;
        }
      }

      if (skipped) {
        return;
      }

      if (stopped) {
        return context;
      }

      for (let child of getChildren(nodeId)) {
        if (visited.has(child)) {
          continue;
        }

        visited.add(child);
        let result = walk(child, context);

        if (stopped) {
          return result;
        }
      }

      if (typeof visit !== 'function' && visit.exit && // Make sure the graph still has the node: it may have been removed between enter and exit
      this.hasNode(nodeId)) {
        let newContext = visit.exit(nodeId, context, actions);

        if (typeof newContext !== 'undefined') {
          // $FlowFixMe[reassign-const]
          context = newContext;
        }
      }

      if (skipped) {
        return;
      }

      if (stopped) {
        return context;
      }
    };

    return walk(traversalStartNode);
  }

  bfs(visit) {
    let rootNodeId = (0, _nullthrows().default)(this.rootNodeId, 'A root node is required to traverse');
    let queue = [rootNodeId];
    let visited = new Set([rootNodeId]);

    while (queue.length > 0) {
      let node = queue.shift();
      let stop = visit(rootNodeId);

      if (stop === true) {
        return node;
      }

      for (let child of this.getNodeIdsConnectedFrom(node)) {
        if (!visited.has(child)) {
          visited.add(child);
          queue.push(child);
        }
      }
    }

    return null;
  }

  topoSort(type) {
    let sorted = [];
    this.traverse({
      exit: nodeId => {
        sorted.push(nodeId);
      }
    }, null, type);
    return sorted.reverse();
  }

  findAncestor(nodeId, fn) {
    let res = null;
    this.traverseAncestors(nodeId, (nodeId, ctx, traversal) => {
      if (fn(nodeId)) {
        res = nodeId;
        traversal.stop();
      }
    });
    return res;
  }

  findAncestors(nodeId, fn) {
    let res = [];
    this.traverseAncestors(nodeId, (nodeId, ctx, traversal) => {
      if (fn(nodeId)) {
        res.push(nodeId);
        traversal.skipChildren();
      }
    });
    return res;
  }

  findDescendant(nodeId, fn) {
    let res = null;
    this.traverse((nodeId, ctx, traversal) => {
      if (fn(nodeId)) {
        res = nodeId;
        traversal.stop();
      }
    }, nodeId);
    return res;
  }

  findDescendants(nodeId, fn) {
    let res = [];
    this.traverse((nodeId, ctx, traversal) => {
      if (fn(nodeId)) {
        res.push(nodeId);
        traversal.skipChildren();
      }
    }, nodeId);
    return res;
  }

  _assertHasNodeId(nodeId) {
    if (!this.hasNode(nodeId)) {
      throw new Error('Does not have node ' + (0, _types.fromNodeId)(nodeId));
    }
  }

}

exports.default = Graph;

function mapVisitor(filter, visit) {
  function makeEnter(visit) {
    return function (nodeId, context, actions) {
      let value = filter(nodeId, actions);

      if (value != null) {
        return visit(value, context, actions);
      }
    };
  }

  if (typeof visit === 'function') {
    return makeEnter(visit);
  }

  let mapped = {};

  if (visit.enter != null) {
    mapped.enter = makeEnter(visit.enter);
  }

  if (visit.exit != null) {
    mapped.exit = function (nodeId, context, actions) {
      let exit = visit.exit;

      if (!exit) {
        return;
      }

      let value = filter(nodeId, actions);

      if (value != null) {
        return exit(value, context, actions);
      }
    };
  }

  return mapped;
}