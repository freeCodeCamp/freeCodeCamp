"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = require("./path/index.js");
var _t = require("@babel/types");
var _context = require("./path/context.js");
var _hub = require("./hub.js");
const {
  VISITOR_KEYS
} = _t;
class TraversalContext {
  constructor(scope, opts, state, parentPath) {
    this.queue = null;
    this.priorityQueue = null;
    this.parentPath = parentPath;
    this.scope = scope;
    this.state = state;
    this.opts = opts;
  }
  shouldVisit(node) {
    const opts = this.opts;
    if (opts.enter || opts.exit) return true;
    if (opts[node.type]) return true;
    const keys = VISITOR_KEYS[node.type];
    if (!(keys != null && keys.length)) return false;
    for (const key of keys) {
      if (node[key]) {
        return true;
      }
    }
    return false;
  }
  create(node, container, key, listKey) {
    const {
      parentPath
    } = this;
    const hub = parentPath == null ? node.type === "Program" || node.type === "File" ? new _hub.default() : undefined : parentPath.hub;
    return _index.default.get({
      parentPath,
      parent: node,
      container,
      key: key,
      listKey,
      hub
    });
  }
  maybeQueue(path, notPriority) {
    if (this.queue) {
      if (notPriority) {
        this.queue.push(path);
      } else {
        this.priorityQueue.push(path);
      }
    }
  }
  visitMultiple(container, parent, listKey) {
    if (container.length === 0) return false;
    const queue = [];
    for (let key = 0; key < container.length; key++) {
      const node = container[key];
      if (node && this.shouldVisit(node)) {
        queue.push(this.create(parent, container, key, listKey));
      }
    }
    return this.visitQueue(queue);
  }
  visitSingle(node, key) {
    if (this.shouldVisit(node[key])) {
      return this.visitQueue([this.create(node, node, key)]);
    } else {
      return false;
    }
  }
  visitQueue(queue) {
    this.queue = queue;
    this.priorityQueue = [];
    const visited = new WeakSet();
    let stop = false;
    let visitIndex = 0;
    for (; visitIndex < queue.length;) {
      const path = queue[visitIndex];
      visitIndex++;
      _context.resync.call(path);
      if (path.contexts.length === 0 || path.contexts[path.contexts.length - 1] !== this) {
        _context.pushContext.call(path, this);
      }
      if (path.key === null) continue;
      const {
        node
      } = path;
      if (visited.has(node)) continue;
      if (node) visited.add(node);
      if (path.visit()) {
        stop = true;
        break;
      }
      if (this.priorityQueue.length) {
        stop = this.visitQueue(this.priorityQueue);
        this.priorityQueue = [];
        this.queue = queue;
        if (stop) break;
      }
    }
    for (let i = 0; i < visitIndex; i++) {
      _context.popContext.call(queue[i]);
    }
    this.queue = null;
    return stop;
  }
  visit(node, key) {
    const nodes = node[key];
    if (!nodes) return false;
    if (Array.isArray(nodes)) {
      return this.visitMultiple(nodes, node, key);
    } else {
      return this.visitSingle(node, key);
    }
  }
}
exports.default = TraversalContext;

//# sourceMappingURL=context.js.map
