"use strict";

exports.__esModule = true;

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _virtualTypes = require("./lib/virtual-types");

var virtualTypes = _interopRequireWildcard(_virtualTypes);

var _debug2 = require("debug");

var _debug3 = _interopRequireDefault(_debug2);

var _invariant = require("invariant");

var _invariant2 = _interopRequireDefault(_invariant);

var _index = require("../index");

var _index2 = _interopRequireDefault(_index);

var _assign = require("lodash/assign");

var _assign2 = _interopRequireDefault(_assign);

var _scope = require("../scope");

var _scope2 = _interopRequireDefault(_scope);

var _babelTypes = require("babel-types");

var t = _interopRequireWildcard(_babelTypes);

var _cache = require("../cache");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _debug = (0, _debug3.default)("babel");

var NodePath = function () {
  function NodePath(hub, parent) {
    (0, _classCallCheck3.default)(this, NodePath);

    this.parent = parent;
    this.hub = hub;
    this.contexts = [];
    this.data = {};
    this.shouldSkip = false;
    this.shouldStop = false;
    this.removed = false;
    this.state = null;
    this.opts = null;
    this.skipKeys = null;
    this.parentPath = null;
    this.context = null;
    this.container = null;
    this.listKey = null;
    this.inList = false;
    this.parentKey = null;
    this.key = null;
    this.node = null;
    this.scope = null;
    this.type = null;
    this.typeAnnotation = null;
  }

  NodePath.get = function get(_ref) {
    var hub = _ref.hub,
        parentPath = _ref.parentPath,
        parent = _ref.parent,
        container = _ref.container,
        listKey = _ref.listKey,
        key = _ref.key;

    if (!hub && parentPath) {
      hub = parentPath.hub;
    }

    (0, _invariant2.default)(parent, "To get a node path the parent needs to exist");

    var targetNode = container[key];

    var paths = _cache.path.get(parent) || [];
    if (!_cache.path.has(parent)) {
      _cache.path.set(parent, paths);
    }

    var path = void 0;

    for (var i = 0; i < paths.length; i++) {
      var pathCheck = paths[i];
      if (pathCheck.node === targetNode) {
        path = pathCheck;
        break;
      }
    }

    if (!path) {
      path = new NodePath(hub, parent);
      paths.push(path);
    }

    path.setup(parentPath, container, listKey, key);

    return path;
  };

  NodePath.prototype.getScope = function getScope(scope) {
    var ourScope = scope;

    if (this.isScope()) {
      ourScope = new _scope2.default(this, scope);
    }

    return ourScope;
  };

  NodePath.prototype.setData = function setData(key, val) {
    return this.data[key] = val;
  };

  NodePath.prototype.getData = function getData(key, def) {
    var val = this.data[key];
    if (!val && def) val = this.data[key] = def;
    return val;
  };

  NodePath.prototype.buildCodeFrameError = function buildCodeFrameError(msg) {
    var Error = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : SyntaxError;

    return this.hub.file.buildCodeFrameError(this.node, msg, Error);
  };

  NodePath.prototype.traverse = function traverse(visitor, state) {
    (0, _index2.default)(this.node, visitor, this.scope, state, this);
  };

  NodePath.prototype.mark = function mark(type, message) {
    this.hub.file.metadata.marked.push({
      type: type,
      message: message,
      loc: this.node.loc
    });
  };

  NodePath.prototype.set = function set(key, node) {
    t.validate(this.node, key, node);
    this.node[key] = node;
  };

  NodePath.prototype.getPathLocation = function getPathLocation() {
    var parts = [];
    var path = this;
    do {
      var key = path.key;
      if (path.inList) key = path.listKey + "[" + key + "]";
      parts.unshift(key);
    } while (path = path.parentPath);
    return parts.join(".");
  };

  NodePath.prototype.debug = function debug(buildMessage) {
    if (!_debug.enabled) return;
    _debug(this.getPathLocation() + " " + this.type + ": " + buildMessage());
  };

  return NodePath;
}();

exports.default = NodePath;


(0, _assign2.default)(NodePath.prototype, require("./ancestry"));
(0, _assign2.default)(NodePath.prototype, require("./inference"));
(0, _assign2.default)(NodePath.prototype, require("./replacement"));
(0, _assign2.default)(NodePath.prototype, require("./evaluation"));
(0, _assign2.default)(NodePath.prototype, require("./conversion"));
(0, _assign2.default)(NodePath.prototype, require("./introspection"));
(0, _assign2.default)(NodePath.prototype, require("./context"));
(0, _assign2.default)(NodePath.prototype, require("./removal"));
(0, _assign2.default)(NodePath.prototype, require("./modification"));
(0, _assign2.default)(NodePath.prototype, require("./family"));
(0, _assign2.default)(NodePath.prototype, require("./comments"));

var _loop2 = function _loop2() {
  if (_isArray) {
    if (_i >= _iterator.length) return "break";
    _ref2 = _iterator[_i++];
  } else {
    _i = _iterator.next();
    if (_i.done) return "break";
    _ref2 = _i.value;
  }

  var type = _ref2;

  var typeKey = "is" + type;
  NodePath.prototype[typeKey] = function (opts) {
    return t[typeKey](this.node, opts);
  };

  NodePath.prototype["assert" + type] = function (opts) {
    if (!this[typeKey](opts)) {
      throw new TypeError("Expected node path of type " + type);
    }
  };
};

for (var _iterator = t.TYPES, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
  var _ref2;

  var _ret2 = _loop2();

  if (_ret2 === "break") break;
}

var _loop = function _loop(type) {
  if (type[0] === "_") return "continue";
  if (t.TYPES.indexOf(type) < 0) t.TYPES.push(type);

  var virtualType = virtualTypes[type];

  NodePath.prototype["is" + type] = function (opts) {
    return virtualType.checkPath(this, opts);
  };
};

for (var type in virtualTypes) {
  var _ret = _loop(type);

  if (_ret === "continue") continue;
}
module.exports = exports["default"];