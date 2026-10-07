"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.traverseNode = traverseNode;
var _context = require("./context.js");
var _index = require("./path/index.js");
var _t = require("@babel/types");
var _context2 = require("./path/context.js");
const {
  VISITOR_KEYS
} = _t;
function _visitPaths(ctx, paths) {
  ctx.queue = paths;
  ctx.priorityQueue = [];
  const visited = new Set();
  let stop = false;
  let visitIndex = 0;
  for (; visitIndex < paths.length;) {
    const path = paths[visitIndex];
    visitIndex++;
    _context2.resync.call(path);
    if (path.contexts.length === 0 || path.contexts[path.contexts.length - 1] !== ctx) {
      _context2.pushContext.call(path, ctx);
    }
    if (path.key === null) continue;
    const {
      node
    } = path;
    if (visited.has(node)) continue;
    if (node) visited.add(node);
    if (_visit(ctx, path)) {
      stop = true;
      break;
    }
    if (ctx.priorityQueue.length) {
      stop = _visitPaths(ctx, ctx.priorityQueue);
      ctx.priorityQueue = [];
      ctx.queue = paths;
      if (stop) break;
    }
  }
  for (let i = 0; i < visitIndex; i++) {
    _context2.popContext.call(paths[i]);
  }
  ctx.queue = null;
  return stop;
}
function _visit(ctx, path) {
  var _opts$denylist;
  const node = path.node;
  if (!node) {
    return false;
  }
  const opts = ctx.opts;
  const denylist = (_opts$denylist = opts.denylist) != null ? _opts$denylist : opts.blacklist;
  if (denylist != null && denylist.includes(node.type)) {
    return false;
  }
  if (opts.shouldSkip != null && opts.shouldSkip(path)) {
    return false;
  }
  if (path.shouldSkip) return path.shouldStop;
  if (_context2._call.call(path, opts.enter)) return path.shouldStop;
  if (path.node) {
    var _opts$node$type;
    if (_context2._call.call(path, (_opts$node$type = opts[node.type]) == null ? void 0 : _opts$node$type.enter)) return path.shouldStop;
  }
  path.shouldStop = _traverse(path.node, opts, path.scope, ctx.state, path, path.skipKeys);
  if (path.node) {
    if (_context2._call.call(path, opts.exit)) return true;
  }
  if (path.node) {
    var _opts$node$type2;
    _context2._call.call(path, (_opts$node$type2 = opts[node.type]) == null ? void 0 : _opts$node$type2.exit);
  }
  return path.shouldStop;
}
function _traverse(node, opts, scope, state, path, skipKeys, visitSelf) {
  const keys = VISITOR_KEYS[node.type];
  if (!(keys != null && keys.length)) return false;
  const ctx = new _context.default(scope, opts, state, path);
  if (visitSelf) {
    if (skipKeys != null && skipKeys[path.parentKey]) return false;
    return _visitPaths(ctx, [path]);
  }
  for (const key of keys) {
    if (skipKeys != null && skipKeys[key]) continue;
    const prop = node[key];
    if (!prop) continue;
    if (Array.isArray(prop)) {
      if (!prop.length) continue;
      const paths = [];
      for (let i = 0; i < prop.length; i++) {
        const childPath = _index.default.get({
          parentPath: path,
          parent: node,
          container: prop,
          key: i,
          listKey: key
        });
        paths.push(childPath);
      }
      if (_visitPaths(ctx, paths)) return true;
    } else {
      if (_visitPaths(ctx, [_index.default.get({
        parentPath: path,
        parent: node,
        container: node,
        key,
        listKey: null
      })])) {
        return true;
      }
    }
  }
  return false;
}
function traverseNode(node, opts, scope, state, path, skipKeys, visitSelf) {
  const keys = VISITOR_KEYS[node.type];
  if (!keys) return false;
  const context = new _context.default(scope, opts, state, path);
  if (visitSelf) {
    if (skipKeys != null && skipKeys[path.parentKey]) return false;
    return context.visitQueue([path]);
  }
  for (const key of keys) {
    if (skipKeys != null && skipKeys[key]) continue;
    if (context.visit(node, key)) {
      return true;
    }
  }
  return false;
}

//# sourceMappingURL=traverse-node.js.map
