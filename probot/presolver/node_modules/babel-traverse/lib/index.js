"use strict";

exports.__esModule = true;
exports.visitors = exports.Hub = exports.Scope = exports.NodePath = undefined;

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _path = require("./path");

Object.defineProperty(exports, "NodePath", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_path).default;
  }
});

var _scope = require("./scope");

Object.defineProperty(exports, "Scope", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_scope).default;
  }
});

var _hub = require("./hub");

Object.defineProperty(exports, "Hub", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_hub).default;
  }
});
exports.default = traverse;

var _context = require("./context");

var _context2 = _interopRequireDefault(_context);

var _visitors = require("./visitors");

var visitors = _interopRequireWildcard(_visitors);

var _babelMessages = require("babel-messages");

var messages = _interopRequireWildcard(_babelMessages);

var _includes = require("lodash/includes");

var _includes2 = _interopRequireDefault(_includes);

var _babelTypes = require("babel-types");

var t = _interopRequireWildcard(_babelTypes);

var _cache = require("./cache");

var cache = _interopRequireWildcard(_cache);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.visitors = visitors;
function traverse(parent, opts, scope, state, parentPath) {
  if (!parent) return;
  if (!opts) opts = {};

  if (!opts.noScope && !scope) {
    if (parent.type !== "Program" && parent.type !== "File") {
      throw new Error(messages.get("traverseNeedsParent", parent.type));
    }
  }

  visitors.explode(opts);

  traverse.node(parent, opts, scope, state, parentPath);
}

traverse.visitors = visitors;
traverse.verify = visitors.verify;
traverse.explode = visitors.explode;

traverse.NodePath = require("./path");
traverse.Scope = require("./scope");
traverse.Hub = require("./hub");

traverse.cheap = function (node, enter) {
  return t.traverseFast(node, enter);
};

traverse.node = function (node, opts, scope, state, parentPath, skipKeys) {
  var keys = t.VISITOR_KEYS[node.type];
  if (!keys) return;

  var context = new _context2.default(scope, opts, state, parentPath);
  for (var _iterator = keys, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var key = _ref;

    if (skipKeys && skipKeys[key]) continue;
    if (context.visit(node, key)) return;
  }
};

traverse.clearNode = function (node, opts) {
  t.removeProperties(node, opts);

  cache.path.delete(node);
};

traverse.removeProperties = function (tree, opts) {
  t.traverseFast(tree, traverse.clearNode, opts);
  return tree;
};

function hasBlacklistedType(path, state) {
  if (path.node.type === state.type) {
    state.has = true;
    path.stop();
  }
}

traverse.hasType = function (tree, scope, type, blacklistTypes) {
  if ((0, _includes2.default)(blacklistTypes, tree.type)) return false;

  if (tree.type === type) return true;

  var state = {
    has: false,
    type: type
  };

  traverse(tree, {
    blacklist: blacklistTypes,
    enter: hasBlacklistedType
  }, scope, state);

  return state.has;
};

traverse.clearCache = function () {
  cache.clear();
};

traverse.clearCache.clearPath = cache.clearPath;
traverse.clearCache.clearScope = cache.clearScope;

traverse.copyCache = function (source, destination) {
  if (cache.path.has(source)) {
    cache.path.set(destination, cache.path.get(source));
  }
};