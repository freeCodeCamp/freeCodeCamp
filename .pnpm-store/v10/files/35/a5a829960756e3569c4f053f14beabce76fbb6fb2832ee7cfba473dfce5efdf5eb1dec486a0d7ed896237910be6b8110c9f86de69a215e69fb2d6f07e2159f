"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._call = _call;
exports._forceSetScope = _forceSetScope;
exports._getQueueContexts = _getQueueContexts;
exports._resyncKey = _resyncKey;
exports._resyncList = _resyncList;
exports._resyncParent = _resyncParent;
exports._resyncRemoved = _resyncRemoved;
exports.call = call;
exports.isDenylisted = isDenylisted;
exports.popContext = popContext;
exports.pushContext = pushContext;
exports.requeue = requeue;
exports.requeueComputedKeyAndDecorators = requeueComputedKeyAndDecorators;
exports.resync = resync;
exports.setContext = setContext;
exports.setKey = setKey;
exports.setScope = setScope;
exports.setup = setup;
exports.skip = skip;
exports.skipKey = skipKey;
exports.stop = stop;
exports.visit = visit;
var _traverseNode = require("../traverse-node.js");
var _index = require("./index.js");
var _removal = require("./removal.js");
var t = require("@babel/types");
function call(key) {
  const opts = this.opts;
  this.debug(key);
  if (this.node) {
    if (_call.call(this, opts[key])) return true;
  }
  if (this.node) {
    var _opts$this$node$type;
    return _call.call(this, (_opts$this$node$type = opts[this.node.type]) == null ? void 0 : _opts$this$node$type[key]);
  }
  return false;
}
function _call(fns) {
  if (!fns) return false;
  for (const fn of fns) {
    if (!fn) continue;
    const node = this.node;
    if (!node) return true;
    const ret = fn.call(this.state, this, this.state);
    if (ret && typeof ret === "object" && typeof ret.then === "function") {
      throw new Error(`You appear to be using a plugin with an async traversal visitor, ` + `which your current version of Babel does not support. ` + `If you're using a published plugin, you may need to upgrade ` + `your @babel/core version.`);
    }
    if (ret) {
      throw new Error(`Unexpected return value from visitor method ${fn}`);
    }
    if (this.node !== node) return true;
    if (this._traverseFlags > 0) return true;
  }
  return false;
}
function isDenylisted() {
  var _this$opts$denylist;
  const denylist = (_this$opts$denylist = this.opts.denylist) != null ? _this$opts$denylist : this.opts.blacklist;
  return denylist == null ? void 0 : denylist.includes(this.node.type);
}
exports.isBlacklisted = isDenylisted;
function restoreContext(path, context) {
  if (path.context !== context) {
    path.context = context;
    path.state = context.state;
    path.opts = context.opts;
  }
}
function visit() {
  var _this$opts$shouldSkip, _this$opts;
  if (!this.node) {
    return false;
  }
  if (this.isDenylisted()) {
    return false;
  }
  if ((_this$opts$shouldSkip = (_this$opts = this.opts).shouldSkip) != null && _this$opts$shouldSkip.call(_this$opts, this)) {
    return false;
  }
  const currentContext = this.context;
  if (this.shouldSkip || call.call(this, "enter")) {
    this.debug("Skip...");
    return this.shouldStop;
  }
  restoreContext(this, currentContext);
  this.debug("Recursing into...");
  this.shouldStop = (0, _traverseNode.traverseNode)(this.node, this.opts, this.scope, this.state, this, this.skipKeys);
  restoreContext(this, currentContext);
  call.call(this, "exit");
  return this.shouldStop;
}
function skip() {
  this.shouldSkip = true;
}
function skipKey(key) {
  if (this.skipKeys == null) {
    this.skipKeys = {};
  }
  this.skipKeys[key] = true;
}
function stop() {
  this._traverseFlags |= _index.SHOULD_SKIP | _index.SHOULD_STOP;
}
function _forceSetScope() {
  var _this$scope;
  let path = this.parentPath;
  if ((this.key === "key" || this.listKey === "decorators") && path.isMethod() || this.key === "discriminant" && path.isSwitchStatement()) {
    path = path.parentPath;
  }
  let target;
  while (path && !target) {
    target = path.scope;
    path = path.parentPath;
  }
  this.scope = this.getScope(target);
  (_this$scope = this.scope) == null || _this$scope.init();
}
function setScope() {
  var _this$opts2, _this$scope2;
  if ((_this$opts2 = this.opts) != null && _this$opts2.noScope) return;
  let path = this.parentPath;
  if ((this.key === "key" || this.listKey === "decorators") && path.isMethod() || this.key === "discriminant" && path.isSwitchStatement()) {
    path = path.parentPath;
  }
  let target;
  while (path && !target) {
    var _path$opts;
    if ((_path$opts = path.opts) != null && _path$opts.noScope) return;
    target = path.scope;
    path = path.parentPath;
  }
  this.scope = this.getScope(target);
  (_this$scope2 = this.scope) == null || _this$scope2.init();
}
function setContext(context) {
  if (this.skipKeys != null) {
    this.skipKeys = {};
  }
  this._traverseFlags = 0;
  if (context) {
    this.context = context;
    this.state = context.state;
    this.opts = context.opts;
  }
  setScope.call(this);
  return this;
}
function resync() {
  if (this.removed) return;
  _resyncParent.call(this);
  _resyncList.call(this);
  _resyncKey.call(this);
}
function _resyncParent() {
  if (this.parentPath) {
    this.parent = this.parentPath.node;
  }
}
function _resyncKey() {
  if (!this.container) return;
  if (this.node === this.container[this.key]) {
    return;
  }
  if (Array.isArray(this.container)) {
    for (let i = 0; i < this.container.length; i++) {
      if (this.container[i] === this.node) {
        setKey.call(this, i);
        return;
      }
    }
  } else {
    for (const key of Object.keys(this.container)) {
      if (this.container[key] === this.node) {
        setKey.call(this, key);
        return;
      }
    }
  }
  this.key = null;
}
function _resyncList() {
  if (!this.parent || !this.inList) return;
  const newContainer = this.parent[this.listKey];
  if (this.container === newContainer) return;
  this.container = newContainer || null;
}
function _resyncRemoved() {
  if (this.key == null || !this.container || this.container[this.key] !== this.node) {
    _removal._markRemoved.call(this);
  }
}
function popContext() {
  this.contexts.pop();
  if (this.contexts.length > 0) {
    this.setContext(this.contexts[this.contexts.length - 1]);
  } else {
    this.setContext(undefined);
  }
}
function pushContext(context) {
  this.contexts.push(context);
  this.setContext(context);
}
function setup(parentPath, container, listKey, key) {
  this.listKey = listKey;
  this.container = container;
  this.parentPath = parentPath || this.parentPath;
  setKey.call(this, key);
}
function setKey(key) {
  var _this$node;
  this.key = key;
  this.node = this.container[this.key];
  this.type = (_this$node = this.node) == null ? void 0 : _this$node.type;
}
function requeue(pathToQueue = this) {
  if (pathToQueue.removed) return;
  const contexts = this.contexts;
  for (const context of contexts) {
    context.maybeQueue(pathToQueue);
  }
}
function requeueComputedKeyAndDecorators() {
  const {
    context,
    node
  } = this;
  if (!t.isPrivate(node) && node.computed) {
    context.maybeQueue(this.get("key"));
  }
  if (node.decorators) {
    for (const decorator of this.get("decorators")) {
      context.maybeQueue(decorator);
    }
  }
}
function _getQueueContexts() {
  let path = this;
  let contexts = this.contexts;
  while (!contexts.length) {
    path = path.parentPath;
    if (!path) break;
    contexts = path.contexts;
  }
  return contexts;
}

//# sourceMappingURL=context.js.map
