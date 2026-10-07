(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["postcss"] = factory();
	else
		root["prettierPlugins"] = root["prettierPlugins"] || {}, root["prettierPlugins"]["postcss"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 87);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var TAG = exports.TAG = 'tag';
var STRING = exports.STRING = 'string';
var SELECTOR = exports.SELECTOR = 'selector';
var ROOT = exports.ROOT = 'root';
var PSEUDO = exports.PSEUDO = 'pseudo';
var NESTING = exports.NESTING = 'nesting';
var ID = exports.ID = 'id';
var COMMENT = exports.COMMENT = 'comment';
var COMBINATOR = exports.COMBINATOR = 'combinator';
var CLASS = exports.CLASS = 'class';
var ATTRIBUTE = exports.ATTRIBUTE = 'attribute';
var UNIVERSAL = exports.UNIVERSAL = 'universal';

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Node = __webpack_require__(3);

var Container =
/*#__PURE__*/
function (_Node) {
  _inherits(Container, _Node);

  function Container(opts) {
    var _this;

    _classCallCheck(this, Container);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Container).call(this, opts));

    if (!_this.nodes) {
      _this.nodes = [];
    }

    return _this;
  }

  _createClass(Container, [{
    key: "push",
    value: function push(child) {
      child.parent = this;
      this.nodes.push(child);
      return this;
    }
  }, {
    key: "each",
    value: function each(callback) {
      if (!this.lastEach) this.lastEach = 0;
      if (!this.indexes) this.indexes = {};
      this.lastEach += 1;
      var id = this.lastEach,
          index,
          result;
      this.indexes[id] = 0;
      if (!this.nodes) return undefined;

      while (this.indexes[id] < this.nodes.length) {
        index = this.indexes[id];
        result = callback(this.nodes[index], index);
        if (result === false) break;
        this.indexes[id] += 1;
      }

      delete this.indexes[id];
      return result;
    }
  }, {
    key: "walk",
    value: function walk(callback) {
      return this.each(function (child, i) {
        var result = callback(child, i);

        if (result !== false && child.walk) {
          result = child.walk(callback);
        }

        return result;
      });
    }
  }, {
    key: "walkType",
    value: function walkType(type, callback) {
      var _this2 = this;

      if (!type || !callback) {
        throw new Error('Parameters {type} and {callback} are required.');
      } // allow users to pass a constructor, or node type string; eg. Word.


      type = type.name && type.prototype ? type.name : type;
      return this.walk(function (node, index) {
        if (node.type === type) {
          return callback.call(_this2, node, index);
        }
      });
    }
  }, {
    key: "append",
    value: function append(node) {
      node.parent = this;
      this.nodes.push(node);
      return this;
    }
  }, {
    key: "prepend",
    value: function prepend(node) {
      node.parent = this;
      this.nodes.unshift(node);
      return this;
    }
  }, {
    key: "cleanRaws",
    value: function cleanRaws(keepBetween) {
      _get(_getPrototypeOf(Container.prototype), "cleanRaws", this).call(this, keepBetween);

      if (this.nodes) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.nodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var node = _step.value;
            node.cleanRaws(keepBetween);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }
  }, {
    key: "insertAfter",
    value: function insertAfter(oldNode, newNode) {
      var oldIndex = this.index(oldNode),
          index;
      this.nodes.splice(oldIndex + 1, 0, newNode);

      for (var id in this.indexes) {
        index = this.indexes[id];

        if (oldIndex <= index) {
          this.indexes[id] = index + this.nodes.length;
        }
      }

      return this;
    }
  }, {
    key: "insertBefore",
    value: function insertBefore(oldNode, newNode) {
      var oldIndex = this.index(oldNode),
          index;
      this.nodes.splice(oldIndex, 0, newNode);

      for (var id in this.indexes) {
        index = this.indexes[id];

        if (oldIndex <= index) {
          this.indexes[id] = index + this.nodes.length;
        }
      }

      return this;
    }
  }, {
    key: "removeChild",
    value: function removeChild(child) {
      child = this.index(child);
      this.nodes[child].parent = undefined;
      this.nodes.splice(child, 1);
      var index;

      for (var id in this.indexes) {
        index = this.indexes[id];

        if (index >= child) {
          this.indexes[id] = index - 1;
        }
      }

      return this;
    }
  }, {
    key: "removeAll",
    value: function removeAll() {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.nodes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var node = _step2.value;
          node.parent = undefined;
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      this.nodes = [];
      return this;
    }
  }, {
    key: "every",
    value: function every(condition) {
      return this.nodes.every(condition);
    }
  }, {
    key: "some",
    value: function some(condition) {
      return this.nodes.some(condition);
    }
  }, {
    key: "index",
    value: function index(child) {
      if (typeof child === 'number') {
        return child;
      } else {
        return this.nodes.indexOf(child);
      }
    }
  }, {
    key: "toString",
    value: function toString() {
      var result = this.nodes.map(String).join('');

      if (this.value) {
        result = this.value + result;
      }

      if (this.raws.before) {
        result = this.raws.before + result;
      }

      if (this.raws.after) {
        result += this.raws.after;
      }

      return result;
    }
  }, {
    key: "first",
    get: function get() {
      if (!this.nodes) return undefined;
      return this.nodes[0];
    }
  }, {
    key: "last",
    get: function get() {
      if (!this.nodes) return undefined;
      return this.nodes[this.nodes.length - 1];
    }
  }]);

  return Container;
}(Node);

Container.registerWalker = function (constructor) {
  var walkerName = 'walk' + constructor.name; // plural sugar

  if (walkerName.lastIndexOf('s') !== walkerName.length - 1) {
    walkerName += 's';
  }

  if (Container.prototype[walkerName]) {
    return;
  } // we need access to `this` so we can't use an arrow function


  Container.prototype[walkerName] = function (callback) {
    return this.walkType(constructor, callback);
  };
};

module.exports = Container;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var singleQuote = exports.singleQuote = '\''.charCodeAt(0);
var doubleQuote = exports.doubleQuote = '"'.charCodeAt(0);
var backslash = exports.backslash = '\\'.charCodeAt(0);
var backTick = exports.backTick = '`'.charCodeAt(0);
var slash = exports.slash = '/'.charCodeAt(0);
var newline = exports.newline = '\n'.charCodeAt(0);
var space = exports.space = ' '.charCodeAt(0);
var feed = exports.feed = '\f'.charCodeAt(0);
var tab = exports.tab = '\t'.charCodeAt(0);
var carriageReturn = exports.carriageReturn = '\r'.charCodeAt(0);
var openedParenthesis = exports.openedParenthesis = '('.charCodeAt(0);
var closedParenthesis = exports.closedParenthesis = ')'.charCodeAt(0);
var openedCurlyBracket = exports.openedCurlyBracket = '{'.charCodeAt(0);
var closedCurlyBracket = exports.closedCurlyBracket = '}'.charCodeAt(0);
var openSquareBracket = exports.openSquareBracket = '['.charCodeAt(0);
var closeSquareBracket = exports.closeSquareBracket = ']'.charCodeAt(0);
var semicolon = exports.semicolon = ';'.charCodeAt(0);
var asterisk = exports.asterisk = '*'.charCodeAt(0);
var colon = exports.colon = ':'.charCodeAt(0);
var comma = exports.comma = ','.charCodeAt(0);
var dot = exports.dot = '.'.charCodeAt(0);
var atRule = exports.atRule = '@'.charCodeAt(0);
var tilde = exports.tilde = '~'.charCodeAt(0);
var hash = exports.hash = '#'.charCodeAt(0);
var atEndPattern = exports.atEndPattern = /[ \n\t\r\f\{\(\)'"\\;/\[\]#]/g;
var wordEndPattern = exports.wordEndPattern = /[ \n\t\r\f\(\)\{\}:,;@!'"\\\]\[#]|\/(?=\*)/g;
var badBracketPattern = exports.badBracketPattern = /.[\\\/\("'\n]/;
var variablePattern = exports.variablePattern = /^@[^:\(\{]+:/;
var hashColorPattern = exports.hashColorPattern = /^#[0-9a-fA-F]{6}$|^#[0-9a-fA-F]{3}$/;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var cloneNode = function cloneNode(obj, parent) {
  var cloned = new obj.constructor();

  for (var i in obj) {
    if (!obj.hasOwnProperty(i)) continue;

    var value = obj[i],
        type = _typeof(value);

    if (i === 'parent' && type === 'object') {
      if (parent) cloned[i] = parent;
    } else if (i === 'source') {
      cloned[i] = value;
    } else if (value instanceof Array) {
      cloned[i] = value.map(function (j) {
        return cloneNode(j, cloned);
      });
    } else if (i !== 'before' && i !== 'after' && i !== 'between' && i !== 'semicolon') {
      if (type === 'object' && value !== null) value = cloneNode(value);
      cloned[i] = value;
    }
  }

  return cloned;
};

module.exports =
/*#__PURE__*/
function () {
  function Node(defaults) {
    _classCallCheck(this, Node);

    defaults = defaults || {};
    this.raws = {
      before: '',
      after: ''
    };

    for (var name in defaults) {
      this[name] = defaults[name];
    }
  }

  _createClass(Node, [{
    key: "remove",
    value: function remove() {
      if (this.parent) {
        this.parent.removeChild(this);
      }

      this.parent = undefined;
      return this;
    }
  }, {
    key: "toString",
    value: function toString() {
      return [this.raws.before, String(this.value), this.raws.after].join('');
    }
  }, {
    key: "clone",
    value: function clone(overrides) {
      overrides = overrides || {};
      var cloned = cloneNode(this);

      for (var name in overrides) {
        cloned[name] = overrides[name];
      }

      return cloned;
    }
  }, {
    key: "cloneBefore",
    value: function cloneBefore(overrides) {
      overrides = overrides || {};
      var cloned = this.clone(overrides);
      this.parent.insertBefore(this, cloned);
      return cloned;
    }
  }, {
    key: "cloneAfter",
    value: function cloneAfter(overrides) {
      overrides = overrides || {};
      var cloned = this.clone(overrides);
      this.parent.insertAfter(this, cloned);
      return cloned;
    }
  }, {
    key: "replaceWith",
    value: function replaceWith() {
      var nodes = Array.prototype.slice.call(arguments);

      if (this.parent) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = nodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var node = _step.value;
            this.parent.insertBefore(this, node);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        this.remove();
      }

      return this;
    }
  }, {
    key: "moveTo",
    value: function moveTo(container) {
      this.cleanRaws(this.root() === container.root());
      this.remove();
      container.append(this);
      return this;
    }
  }, {
    key: "moveBefore",
    value: function moveBefore(node) {
      this.cleanRaws(this.root() === node.root());
      this.remove();
      node.parent.insertBefore(node, this);
      return this;
    }
  }, {
    key: "moveAfter",
    value: function moveAfter(node) {
      this.cleanRaws(this.root() === node.root());
      this.remove();
      node.parent.insertAfter(node, this);
      return this;
    }
  }, {
    key: "next",
    value: function next() {
      var index = this.parent.index(this);
      return this.parent.nodes[index + 1];
    }
  }, {
    key: "prev",
    value: function prev() {
      var index = this.parent.index(this);
      return this.parent.nodes[index - 1];
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var fixed = {};

      for (var name in this) {
        if (!this.hasOwnProperty(name)) continue;
        if (name === 'parent') continue;
        var value = this[name];

        if (value instanceof Array) {
          fixed[name] = value.map(function (i) {
            if (_typeof(i) === 'object' && i.toJSON) {
              return i.toJSON();
            } else {
              return i;
            }
          });
        } else if (_typeof(value) === 'object' && value.toJSON) {
          fixed[name] = value.toJSON();
        } else {
          fixed[name] = value;
        }
      }

      return fixed;
    }
  }, {
    key: "root",
    value: function root() {
      var result = this;

      while (result.parent) {
        result = result.parent;
      }

      return result;
    }
  }, {
    key: "cleanRaws",
    value: function cleanRaws(keepBetween) {
      delete this.raws.before;
      delete this.raws.after;
      if (!keepBetween) delete this.raws.between;
    }
  }, {
    key: "positionInside",
    value: function positionInside(index) {
      var string = this.toString(),
          column = this.source.start.column,
          line = this.source.start.line;

      for (var i = 0; i < index; i++) {
        if (string[i] === '\n') {
          column = 1;
          line += 1;
        } else {
          column += 1;
        }
      }

      return {
        line: line,
        column: column
      };
    }
  }, {
    key: "positionBy",
    value: function positionBy(opts) {
      var pos = this.source.start;

      if (opts.index) {
        pos = this.positionInside(opts.index);
      } else if (opts.word) {
        var index = this.toString().indexOf(opts.word);
        if (index !== -1) pos = this.positionInside(index);
      }

      return pos;
    }
  }]);

  return Node;
}();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = warnOnce;
var printed = {};

function warnOnce(message) {
  if (printed[message]) return;
  printed[message] = true;
  if (typeof console !== 'undefined' && console.warn) console.warn(message);
}

module.exports = exports['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var cloneNode = function cloneNode(obj, parent) {
  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
    return obj;
  }

  var cloned = new obj.constructor();

  for (var i in obj) {
    if (!obj.hasOwnProperty(i)) {
      continue;
    }

    var value = obj[i];
    var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);

    if (i === 'parent' && type === 'object') {
      if (parent) {
        cloned[i] = parent;
      }
    } else if (value instanceof Array) {
      cloned[i] = value.map(function (j) {
        return cloneNode(j, cloned);
      });
    } else {
      cloned[i] = cloneNode(value, cloned);
    }
  }

  return cloned;
};

var _class = function () {
  function _class() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, _class);

    for (var key in opts) {
      this[key] = opts[key];
    }

    var _opts$spaces = opts.spaces;
    _opts$spaces = _opts$spaces === undefined ? {} : _opts$spaces;
    var _opts$spaces$before = _opts$spaces.before,
        before = _opts$spaces$before === undefined ? '' : _opts$spaces$before,
        _opts$spaces$after = _opts$spaces.after,
        after = _opts$spaces$after === undefined ? '' : _opts$spaces$after;
    this.spaces = {
      before: before,
      after: after
    };
  }

  _class.prototype.remove = function remove() {
    if (this.parent) {
      this.parent.removeChild(this);
    }

    this.parent = undefined;
    return this;
  };

  _class.prototype.replaceWith = function replaceWith() {
    if (this.parent) {
      for (var index in arguments) {
        this.parent.insertBefore(this, arguments[index]);
      }

      this.remove();
    }

    return this;
  };

  _class.prototype.next = function next() {
    return this.parent.at(this.parent.index(this) + 1);
  };

  _class.prototype.prev = function prev() {
    return this.parent.at(this.parent.index(this) - 1);
  };

  _class.prototype.clone = function clone() {
    var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var cloned = cloneNode(this);

    for (var name in overrides) {
      cloned[name] = overrides[name];
    }

    return cloned;
  };

  _class.prototype.toString = function toString() {
    return [this.spaces.before, String(this.value), this.spaces.after].join('');
  };

  return _class;
}();

exports.default = _class;
module.exports = exports['default'];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;

  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];

    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  } // if the path is allowed to go above the root, restore leading ..s


  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
} // Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.


var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;

var splitPath = function splitPath(filename) {
  return splitPathRe.exec(filename).slice(1);
}; // path.resolve([from ...], to)
// posix version


exports.resolve = function () {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = i >= 0 ? arguments[i] : process.cwd(); // Skip empty and invalid entries

    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  } // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)
  // Normalize the path


  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function (p) {
    return !!p;
  }), !resolvedAbsolute).join('/');
  return (resolvedAbsolute ? '/' : '') + resolvedPath || '.';
}; // path.normalize(path)
// posix version


exports.normalize = function (path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/'; // Normalize the path

  path = normalizeArray(filter(path.split('/'), function (p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }

  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
}; // posix version


exports.isAbsolute = function (path) {
  return path.charAt(0) === '/';
}; // posix version


exports.join = function () {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function (p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }

    return p;
  }).join('/'));
}; // path.relative(from, to)
// posix version


exports.relative = function (from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;

    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;

    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));
  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;

  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];

  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));
  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};

exports.basename = function (path, ext) {
  var f = splitPath(path)[2]; // TODO: make this comparison case-insensitive on windows?

  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }

  return f;
};

exports.extname = function (path) {
  return splitPath(path)[3];
};

function filter(xs, f) {
  if (xs.filter) return xs.filter(f);
  var res = [];

  for (var i = 0; i < xs.length; i++) {
    if (f(xs[i], i, xs)) res.push(xs[i]);
  }

  return res;
} // String.prototype.substr - negative index don't work in IE8


var substr = 'ab'.substr(-1) === 'b' ? function (str, start, len) {
  return str.substr(start, len);
} : function (str, start, len) {
  if (start < 0) start = str.length + start;
  return str.substr(start, len);
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.__esModule = true;

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _node = __webpack_require__(5);

var _node2 = _interopRequireDefault(_node);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Namespace = function (_Node) {
  _inherits(Namespace, _Node);

  function Namespace() {
    _classCallCheck(this, Namespace);

    return _possibleConstructorReturn(this, _Node.apply(this, arguments));
  }

  Namespace.prototype.toString = function toString() {
    return [this.spaces.before, this.ns, String(this.value), this.spaces.after].join('');
  };

  _createClass(Namespace, [{
    key: 'ns',
    get: function get() {
      var n = this.namespace;
      return n ? (typeof n === 'string' ? n : '') + '|' : '';
    }
  }]);

  return Namespace;
}(_node2.default);

exports.default = Namespace;
;
module.exports = exports['default'];

/***/ }),
/* 8 */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */

/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

/**
 * This is a helper function for getting values from parameter/options
 * objects.
 *
 * @param args The object we are extracting values from
 * @param name The name of the property we are getting.
 * @param defaultValue An optional value to return if the property is missing
 * from the object. If this is not specified and the property is missing, an
 * error will be thrown.
 */
function getArg(aArgs, aName, aDefaultValue) {
  if (aName in aArgs) {
    return aArgs[aName];
  } else if (arguments.length === 3) {
    return aDefaultValue;
  } else {
    throw new Error('"' + aName + '" is a required argument.');
  }
}

exports.getArg = getArg;
var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
var dataUrlRegexp = /^data:.+\,.+$/;

function urlParse(aUrl) {
  var match = aUrl.match(urlRegexp);

  if (!match) {
    return null;
  }

  return {
    scheme: match[1],
    auth: match[2],
    host: match[3],
    port: match[4],
    path: match[5]
  };
}

exports.urlParse = urlParse;

function urlGenerate(aParsedUrl) {
  var url = '';

  if (aParsedUrl.scheme) {
    url += aParsedUrl.scheme + ':';
  }

  url += '//';

  if (aParsedUrl.auth) {
    url += aParsedUrl.auth + '@';
  }

  if (aParsedUrl.host) {
    url += aParsedUrl.host;
  }

  if (aParsedUrl.port) {
    url += ":" + aParsedUrl.port;
  }

  if (aParsedUrl.path) {
    url += aParsedUrl.path;
  }

  return url;
}

exports.urlGenerate = urlGenerate;
/**
 * Normalizes a path, or the path portion of a URL:
 *
 * - Replaces consecutive slashes with one slash.
 * - Removes unnecessary '.' parts.
 * - Removes unnecessary '<dir>/..' parts.
 *
 * Based on code in the Node.js 'path' core module.
 *
 * @param aPath The path or url to normalize.
 */

function normalize(aPath) {
  var path = aPath;
  var url = urlParse(aPath);

  if (url) {
    if (!url.path) {
      return aPath;
    }

    path = url.path;
  }

  var isAbsolute = exports.isAbsolute(path);
  var parts = path.split(/\/+/);

  for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
    part = parts[i];

    if (part === '.') {
      parts.splice(i, 1);
    } else if (part === '..') {
      up++;
    } else if (up > 0) {
      if (part === '') {
        // The first part is blank if the path is absolute. Trying to go
        // above the root is a no-op. Therefore we can remove all '..' parts
        // directly after the root.
        parts.splice(i + 1, up);
        up = 0;
      } else {
        parts.splice(i, 2);
        up--;
      }
    }
  }

  path = parts.join('/');

  if (path === '') {
    path = isAbsolute ? '/' : '.';
  }

  if (url) {
    url.path = path;
    return urlGenerate(url);
  }

  return path;
}

exports.normalize = normalize;
/**
 * Joins two paths/URLs.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be joined with the root.
 *
 * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
 *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
 *   first.
 * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
 *   is updated with the result and aRoot is returned. Otherwise the result
 *   is returned.
 *   - If aPath is absolute, the result is aPath.
 *   - Otherwise the two paths are joined with a slash.
 * - Joining for example 'http://' and 'www.example.com' is also supported.
 */

function join(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }

  if (aPath === "") {
    aPath = ".";
  }

  var aPathUrl = urlParse(aPath);
  var aRootUrl = urlParse(aRoot);

  if (aRootUrl) {
    aRoot = aRootUrl.path || '/';
  } // `join(foo, '//www.example.org')`


  if (aPathUrl && !aPathUrl.scheme) {
    if (aRootUrl) {
      aPathUrl.scheme = aRootUrl.scheme;
    }

    return urlGenerate(aPathUrl);
  }

  if (aPathUrl || aPath.match(dataUrlRegexp)) {
    return aPath;
  } // `join('http://', 'www.example.com')`


  if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
    aRootUrl.host = aPath;
    return urlGenerate(aRootUrl);
  }

  var joined = aPath.charAt(0) === '/' ? aPath : normalize(aRoot.replace(/\/+$/, '') + '/' + aPath);

  if (aRootUrl) {
    aRootUrl.path = joined;
    return urlGenerate(aRootUrl);
  }

  return joined;
}

exports.join = join;

exports.isAbsolute = function (aPath) {
  return aPath.charAt(0) === '/' || urlRegexp.test(aPath);
};
/**
 * Make a path relative to a URL or another path.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be made relative to aRoot.
 */


function relative(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }

  aRoot = aRoot.replace(/\/$/, ''); // It is possible for the path to be above the root. In this case, simply
  // checking whether the root is a prefix of the path won't work. Instead, we
  // need to remove components from the root one by one, until either we find
  // a prefix that fits, or we run out of components to remove.

  var level = 0;

  while (aPath.indexOf(aRoot + '/') !== 0) {
    var index = aRoot.lastIndexOf("/");

    if (index < 0) {
      return aPath;
    } // If the only part of the root that is left is the scheme (i.e. http://,
    // file:///, etc.), one or more slashes (/), or simply nothing at all, we
    // have exhausted all components, so the path is not relative to the root.


    aRoot = aRoot.slice(0, index);

    if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
      return aPath;
    }

    ++level;
  } // Make sure we add a "../" for each component we removed from the root.


  return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
}

exports.relative = relative;

var supportsNullProto = function () {
  var obj = Object.create(null);
  return !('__proto__' in obj);
}();

function identity(s) {
  return s;
}
/**
 * Because behavior goes wacky when you set `__proto__` on objects, we
 * have to prefix all the strings in our set with an arbitrary character.
 *
 * See https://github.com/mozilla/source-map/pull/31 and
 * https://github.com/mozilla/source-map/issues/30
 *
 * @param String aStr
 */


function toSetString(aStr) {
  if (isProtoString(aStr)) {
    return '$' + aStr;
  }

  return aStr;
}

exports.toSetString = supportsNullProto ? identity : toSetString;

function fromSetString(aStr) {
  if (isProtoString(aStr)) {
    return aStr.slice(1);
  }

  return aStr;
}

exports.fromSetString = supportsNullProto ? identity : fromSetString;

function isProtoString(s) {
  if (!s) {
    return false;
  }

  var length = s.length;

  if (length < 9
  /* "__proto__".length */
  ) {
      return false;
    }

  if (s.charCodeAt(length - 1) !== 95
  /* '_' */
  || s.charCodeAt(length - 2) !== 95
  /* '_' */
  || s.charCodeAt(length - 3) !== 111
  /* 'o' */
  || s.charCodeAt(length - 4) !== 116
  /* 't' */
  || s.charCodeAt(length - 5) !== 111
  /* 'o' */
  || s.charCodeAt(length - 6) !== 114
  /* 'r' */
  || s.charCodeAt(length - 7) !== 112
  /* 'p' */
  || s.charCodeAt(length - 8) !== 95
  /* '_' */
  || s.charCodeAt(length - 9) !== 95
  /* '_' */
  ) {
      return false;
    }

  for (var i = length - 10; i >= 0; i--) {
    if (s.charCodeAt(i) !== 36
    /* '$' */
    ) {
        return false;
      }
  }

  return true;
}
/**
 * Comparator between two mappings where the original positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same original source/line/column, but different generated
 * line and column the same. Useful when searching for a mapping with a
 * stubbed out mapping.
 */


function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
  var cmp = strcmp(mappingA.source, mappingB.source);

  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;

  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;

  if (cmp !== 0 || onlyCompareOriginal) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;

  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedLine - mappingB.generatedLine;

  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}

exports.compareByOriginalPositions = compareByOriginalPositions;
/**
 * Comparator between two mappings with deflated source and name indices where
 * the generated positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same generated line and column, but different
 * source/name/original line and column the same. Useful when searching for a
 * mapping with a stubbed out mapping.
 */

function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;

  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;

  if (cmp !== 0 || onlyCompareGenerated) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);

  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;

  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;

  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}

exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;

function strcmp(aStr1, aStr2) {
  if (aStr1 === aStr2) {
    return 0;
  }

  if (aStr1 === null) {
    return 1; // aStr2 !== null
  }

  if (aStr2 === null) {
    return -1; // aStr1 !== null
  }

  if (aStr1 > aStr2) {
    return 1;
  }

  return -1;
}
/**
 * Comparator between two mappings with inflated source and name strings where
 * the generated positions are compared.
 */


function compareByGeneratedPositionsInflated(mappingA, mappingB) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;

  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;

  if (cmp !== 0) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);

  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;

  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;

  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}

exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;
/**
 * Strip any JSON XSSI avoidance prefix from the string (as documented
 * in the source maps specification), and then parse the string as
 * JSON.
 */

function parseSourceMapInput(str) {
  return JSON.parse(str.replace(/^\)]}'[^\n]*\n/, ''));
}

exports.parseSourceMapInput = parseSourceMapInput;
/**
 * Compute the URL of a source given the the source root, the source's
 * URL, and the source map's URL.
 */

function computeSourceURL(sourceRoot, sourceURL, sourceMapURL) {
  sourceURL = sourceURL || '';

  if (sourceRoot) {
    // This follows what Chrome does.
    if (sourceRoot[sourceRoot.length - 1] !== '/' && sourceURL[0] !== '/') {
      sourceRoot += '/';
    } // The spec says:
    //   Line 4: An optional source root, useful for relocating source
    //   files on a server or removing repeated values in the
    //   “sources” entry.  This value is prepended to the individual
    //   entries in the “source” field.


    sourceURL = sourceRoot + sourceURL;
  } // Historically, SourceMapConsumer did not take the sourceMapURL as
  // a parameter.  This mode is still somewhat supported, which is why
  // this code block is conditional.  However, it's preferable to pass
  // the source map URL to SourceMapConsumer, so that this function
  // can implement the source URL resolution algorithm as outlined in
  // the spec.  This block is basically the equivalent of:
  //    new URL(sourceURL, sourceMapURL).toString()
  // ... except it avoids using URL, which wasn't available in the
  // older releases of node still supported by this library.
  //
  // The spec says:
  //   If the sources are not absolute URLs after prepending of the
  //   “sourceRoot”, the sources are resolved relative to the
  //   SourceMap (like resolving script src in a html document).


  if (sourceMapURL) {
    var parsed = urlParse(sourceMapURL);

    if (!parsed) {
      throw new Error("sourceMapURL could not be parsed");
    }

    if (parsed.path) {
      // Strip the last path component, but keep the "/".
      var index = parsed.path.lastIndexOf('/');

      if (index >= 0) {
        parsed.path = parsed.path.substring(0, index + 1);
      }
    }

    sourceURL = join(urlGenerate(parsed), sourceURL);
  }

  return normalize(sourceURL);
}

exports.computeSourceURL = computeSourceURL;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */

/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

/**
 * This is a helper function for getting values from parameter/options
 * objects.
 *
 * @param args The object we are extracting values from
 * @param name The name of the property we are getting.
 * @param defaultValue An optional value to return if the property is missing
 * from the object. If this is not specified and the property is missing, an
 * error will be thrown.
 */
function getArg(aArgs, aName, aDefaultValue) {
  if (aName in aArgs) {
    return aArgs[aName];
  } else if (arguments.length === 3) {
    return aDefaultValue;
  } else {
    throw new Error('"' + aName + '" is a required argument.');
  }
}

exports.getArg = getArg;
var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/;
var dataUrlRegexp = /^data:.+\,.+$/;

function urlParse(aUrl) {
  var match = aUrl.match(urlRegexp);

  if (!match) {
    return null;
  }

  return {
    scheme: match[1],
    auth: match[2],
    host: match[3],
    port: match[4],
    path: match[5]
  };
}

exports.urlParse = urlParse;

function urlGenerate(aParsedUrl) {
  var url = '';

  if (aParsedUrl.scheme) {
    url += aParsedUrl.scheme + ':';
  }

  url += '//';

  if (aParsedUrl.auth) {
    url += aParsedUrl.auth + '@';
  }

  if (aParsedUrl.host) {
    url += aParsedUrl.host;
  }

  if (aParsedUrl.port) {
    url += ":" + aParsedUrl.port;
  }

  if (aParsedUrl.path) {
    url += aParsedUrl.path;
  }

  return url;
}

exports.urlGenerate = urlGenerate;
/**
 * Normalizes a path, or the path portion of a URL:
 *
 * - Replaces consecutive slashes with one slash.
 * - Removes unnecessary '.' parts.
 * - Removes unnecessary '<dir>/..' parts.
 *
 * Based on code in the Node.js 'path' core module.
 *
 * @param aPath The path or url to normalize.
 */

function normalize(aPath) {
  var path = aPath;
  var url = urlParse(aPath);

  if (url) {
    if (!url.path) {
      return aPath;
    }

    path = url.path;
  }

  var isAbsolute = exports.isAbsolute(path);
  var parts = path.split(/\/+/);

  for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
    part = parts[i];

    if (part === '.') {
      parts.splice(i, 1);
    } else if (part === '..') {
      up++;
    } else if (up > 0) {
      if (part === '') {
        // The first part is blank if the path is absolute. Trying to go
        // above the root is a no-op. Therefore we can remove all '..' parts
        // directly after the root.
        parts.splice(i + 1, up);
        up = 0;
      } else {
        parts.splice(i, 2);
        up--;
      }
    }
  }

  path = parts.join('/');

  if (path === '') {
    path = isAbsolute ? '/' : '.';
  }

  if (url) {
    url.path = path;
    return urlGenerate(url);
  }

  return path;
}

exports.normalize = normalize;
/**
 * Joins two paths/URLs.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be joined with the root.
 *
 * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
 *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
 *   first.
 * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
 *   is updated with the result and aRoot is returned. Otherwise the result
 *   is returned.
 *   - If aPath is absolute, the result is aPath.
 *   - Otherwise the two paths are joined with a slash.
 * - Joining for example 'http://' and 'www.example.com' is also supported.
 */

function join(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }

  if (aPath === "") {
    aPath = ".";
  }

  var aPathUrl = urlParse(aPath);
  var aRootUrl = urlParse(aRoot);

  if (aRootUrl) {
    aRoot = aRootUrl.path || '/';
  } // `join(foo, '//www.example.org')`


  if (aPathUrl && !aPathUrl.scheme) {
    if (aRootUrl) {
      aPathUrl.scheme = aRootUrl.scheme;
    }

    return urlGenerate(aPathUrl);
  }

  if (aPathUrl || aPath.match(dataUrlRegexp)) {
    return aPath;
  } // `join('http://', 'www.example.com')`


  if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
    aRootUrl.host = aPath;
    return urlGenerate(aRootUrl);
  }

  var joined = aPath.charAt(0) === '/' ? aPath : normalize(aRoot.replace(/\/+$/, '') + '/' + aPath);

  if (aRootUrl) {
    aRootUrl.path = joined;
    return urlGenerate(aRootUrl);
  }

  return joined;
}

exports.join = join;

exports.isAbsolute = function (aPath) {
  return aPath.charAt(0) === '/' || !!aPath.match(urlRegexp);
};
/**
 * Make a path relative to a URL or another path.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be made relative to aRoot.
 */


function relative(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }

  aRoot = aRoot.replace(/\/$/, ''); // It is possible for the path to be above the root. In this case, simply
  // checking whether the root is a prefix of the path won't work. Instead, we
  // need to remove components from the root one by one, until either we find
  // a prefix that fits, or we run out of components to remove.

  var level = 0;

  while (aPath.indexOf(aRoot + '/') !== 0) {
    var index = aRoot.lastIndexOf("/");

    if (index < 0) {
      return aPath;
    } // If the only part of the root that is left is the scheme (i.e. http://,
    // file:///, etc.), one or more slashes (/), or simply nothing at all, we
    // have exhausted all components, so the path is not relative to the root.


    aRoot = aRoot.slice(0, index);

    if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
      return aPath;
    }

    ++level;
  } // Make sure we add a "../" for each component we removed from the root.


  return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
}

exports.relative = relative;

var supportsNullProto = function () {
  var obj = Object.create(null);
  return !('__proto__' in obj);
}();

function identity(s) {
  return s;
}
/**
 * Because behavior goes wacky when you set `__proto__` on objects, we
 * have to prefix all the strings in our set with an arbitrary character.
 *
 * See https://github.com/mozilla/source-map/pull/31 and
 * https://github.com/mozilla/source-map/issues/30
 *
 * @param String aStr
 */


function toSetString(aStr) {
  if (isProtoString(aStr)) {
    return '$' + aStr;
  }

  return aStr;
}

exports.toSetString = supportsNullProto ? identity : toSetString;

function fromSetString(aStr) {
  if (isProtoString(aStr)) {
    return aStr.slice(1);
  }

  return aStr;
}

exports.fromSetString = supportsNullProto ? identity : fromSetString;

function isProtoString(s) {
  if (!s) {
    return false;
  }

  var length = s.length;

  if (length < 9
  /* "__proto__".length */
  ) {
      return false;
    }

  if (s.charCodeAt(length - 1) !== 95
  /* '_' */
  || s.charCodeAt(length - 2) !== 95
  /* '_' */
  || s.charCodeAt(length - 3) !== 111
  /* 'o' */
  || s.charCodeAt(length - 4) !== 116
  /* 't' */
  || s.charCodeAt(length - 5) !== 111
  /* 'o' */
  || s.charCodeAt(length - 6) !== 114
  /* 'r' */
  || s.charCodeAt(length - 7) !== 112
  /* 'p' */
  || s.charCodeAt(length - 8) !== 95
  /* '_' */
  || s.charCodeAt(length - 9) !== 95
  /* '_' */
  ) {
      return false;
    }

  for (var i = length - 10; i >= 0; i--) {
    if (s.charCodeAt(i) !== 36
    /* '$' */
    ) {
        return false;
      }
  }

  return true;
}
/**
 * Comparator between two mappings where the original positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same original source/line/column, but different generated
 * line and column the same. Useful when searching for a mapping with a
 * stubbed out mapping.
 */


function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
  var cmp = mappingA.source - mappingB.source;

  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;

  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;

  if (cmp !== 0 || onlyCompareOriginal) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;

  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedLine - mappingB.generatedLine;

  if (cmp !== 0) {
    return cmp;
  }

  return mappingA.name - mappingB.name;
}

exports.compareByOriginalPositions = compareByOriginalPositions;
/**
 * Comparator between two mappings with deflated source and name indices where
 * the generated positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same generated line and column, but different
 * source/name/original line and column the same. Useful when searching for a
 * mapping with a stubbed out mapping.
 */

function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;

  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;

  if (cmp !== 0 || onlyCompareGenerated) {
    return cmp;
  }

  cmp = mappingA.source - mappingB.source;

  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;

  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;

  if (cmp !== 0) {
    return cmp;
  }

  return mappingA.name - mappingB.name;
}

exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;

function strcmp(aStr1, aStr2) {
  if (aStr1 === aStr2) {
    return 0;
  }

  if (aStr1 > aStr2) {
    return 1;
  }

  return -1;
}
/**
 * Comparator between two mappings with inflated source and name strings where
 * the generated positions are compared.
 */


function compareByGeneratedPositionsInflated(mappingA, mappingB) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;

  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;

  if (cmp !== 0) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);

  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;

  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;

  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}

exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.__esModule = true;

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _container = __webpack_require__(25);

var _container2 = _interopRequireDefault(_container);

var _warnOnce = __webpack_require__(4);

var _warnOnce2 = _interopRequireDefault(_warnOnce);

var _list = __webpack_require__(162);

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
/**
 * Represents a CSS rule: a selector followed by a declaration block.
 *
 * @extends Container
 *
 * @example
 * const root = postcss.parse('a{}');
 * const rule = root.first;
 * rule.type       //=> 'rule'
 * rule.toString() //=> 'a{}'
 */


var Rule = function (_Container) {
  _inherits(Rule, _Container);

  function Rule(defaults) {
    _classCallCheck(this, Rule);

    var _this = _possibleConstructorReturn(this, _Container.call(this, defaults));

    _this.type = 'rule';
    if (!_this.nodes) _this.nodes = [];
    return _this;
  }
  /**
   * An array containing the rule’s individual selectors.
   * Groups of selectors are split at commas.
   *
   * @type {string[]}
   *
   * @example
   * const root = postcss.parse('a, b { }');
   * const rule = root.first;
   *
   * rule.selector  //=> 'a, b'
   * rule.selectors //=> ['a', 'b']
   *
   * rule.selectors = ['a', 'strong'];
   * rule.selector //=> 'a, strong'
   */


  _createClass(Rule, [{
    key: 'selectors',
    get: function get() {
      return _list2.default.comma(this.selector);
    },
    set: function set(values) {
      var match = this.selector ? this.selector.match(/,\s*/) : null;
      var sep = match ? match[0] : ',' + this.raw('between', 'beforeOpen');
      this.selector = values.join(sep);
    }
  }, {
    key: '_selector',
    get: function get() {
      (0, _warnOnce2.default)('Rule#_selector is deprecated. Use Rule#raws.selector');
      return this.raws.selector;
    },
    set: function set(val) {
      (0, _warnOnce2.default)('Rule#_selector is deprecated. Use Rule#raws.selector');
      this.raws.selector = val;
    }
    /**
     * @memberof Rule#
     * @member {string} selector - the rule’s full selector represented
     *                             as a string
     *
     * @example
     * const root = postcss.parse('a, b { }');
     * const rule = root.first;
     * rule.selector //=> 'a, b'
     */

    /**
     * @memberof Rule#
     * @member {object} raws - Information to generate byte-to-byte equal
     *                         node string as it was in the origin input.
     *
     * Every parser saves its own properties,
     * but the default CSS parser uses:
     *
     * * `before`: the space symbols before the node. It also stores `*`
     *   and `_` symbols before the declaration (IE hack).
     * * `after`: the space symbols after the last child of the node
     *   to the end of the node.
     * * `between`: the symbols between the property and value
     *   for declarations, selector and `{` for rules, or last parameter
     *   and `{` for at-rules.
     * * `semicolon`: contains true if the last child has
     *   an (optional) semicolon.
     *
     * PostCSS cleans selectors from comments and extra spaces,
     * but it stores origin content in raws properties.
     * As such, if you don’t change a declaration’s value,
     * PostCSS will use the raw value with comments.
     *
     * @example
     * const root = postcss.parse('a {\n  color:black\n}')
     * root.first.first.raws //=> { before: '', between: ' ', after: '\n' }
     */

  }]);

  return Rule;
}(_container2.default);

exports.default = Rule;
module.exports = exports['default'];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = unclosed;

function unclosed(state, what) {
  throw state.input.error("Unclosed " + what, state.line, state.pos - state.offset);
}

module.exports = exports["default"];

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _declaration = _interopRequireDefault(__webpack_require__(67));

var _comment = _interopRequireDefault(__webpack_require__(19));

var _node = _interopRequireDefault(__webpack_require__(20));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function cleanSource(nodes) {
  return nodes.map(function (i) {
    if (i.nodes) i.nodes = cleanSource(i.nodes);
    delete i.source;
    return i;
  });
}
/**
 * The {@link Root}, {@link AtRule}, and {@link Rule} container nodes
 * inherit some common methods to help work with their children.
 *
 * Note that all containers can store any content. If you write a rule inside
 * a rule, PostCSS will parse it.
 *
 * @extends Node
 * @abstract
 */


var Container =
/*#__PURE__*/
function (_Node) {
  _inheritsLoose(Container, _Node);

  function Container() {
    return _Node.apply(this, arguments) || this;
  }

  var _proto = Container.prototype;

  _proto.push = function push(child) {
    child.parent = this;
    this.nodes.push(child);
    return this;
  };
  /**
   * Iterates through the container’s immediate children,
   * calling `callback` for each child.
   *
   * Returning `false` in the callback will break iteration.
   *
   * This method only iterates through the container’s immediate children.
   * If you need to recursively iterate through all the container’s descendant
   * nodes, use {@link Container#walk}.
   *
   * Unlike the for `{}`-cycle or `Array#forEach` this iterator is safe
   * if you are mutating the array of child nodes during iteration.
   * PostCSS will adjust the current index to match the mutations.
   *
   * @param {childIterator} callback Iterator receives each node and index.
   *
   * @return {false|undefined} Returns `false` if iteration was broke.
   *
   * @example
   * const root = postcss.parse('a { color: black; z-index: 1 }')
   * const rule = root.first
   *
   * for (const decl of rule.nodes) {
   *   decl.cloneBefore({ prop: '-webkit-' + decl.prop })
   *   // Cycle will be infinite, because cloneBefore moves the current node
   *   // to the next index
   * }
   *
   * rule.each(decl => {
   *   decl.cloneBefore({ prop: '-webkit-' + decl.prop })
   *   // Will be executed only for color and z-index
   * })
   */


  _proto.each = function each(callback) {
    if (!this.lastEach) this.lastEach = 0;
    if (!this.indexes) this.indexes = {};
    this.lastEach += 1;
    var id = this.lastEach;
    this.indexes[id] = 0;
    if (!this.nodes) return undefined;
    var index, result;

    while (this.indexes[id] < this.nodes.length) {
      index = this.indexes[id];
      result = callback(this.nodes[index], index);
      if (result === false) break;
      this.indexes[id] += 1;
    }

    delete this.indexes[id];
    return result;
  };
  /**
   * Traverses the container’s descendant nodes, calling callback
   * for each node.
   *
   * Like container.each(), this method is safe to use
   * if you are mutating arrays during iteration.
   *
   * If you only need to iterate through the container’s immediate children,
   * use {@link Container#each}.
   *
   * @param {childIterator} callback Iterator receives each node and index.
   *
   * @return {false|undefined} Returns `false` if iteration was broke.
   *
   * @example
   * root.walk(node => {
   *   // Traverses all descendant nodes.
   * })
   */


  _proto.walk = function walk(callback) {
    return this.each(function (child, i) {
      var result;

      try {
        result = callback(child, i);
      } catch (e) {
        e.postcssNode = child;

        if (e.stack && child.source && /\n\s{4}at /.test(e.stack)) {
          var s = child.source;
          e.stack = e.stack.replace(/\n\s{4}at /, "$&" + s.input.from + ":" + s.start.line + ":" + s.start.column + "$&");
        }

        throw e;
      }

      if (result !== false && child.walk) {
        result = child.walk(callback);
      }

      return result;
    });
  };
  /**
   * Traverses the container’s descendant nodes, calling callback
   * for each declaration node.
   *
   * If you pass a filter, iteration will only happen over declarations
   * with matching properties.
   *
   * Like {@link Container#each}, this method is safe
   * to use if you are mutating arrays during iteration.
   *
   * @param {string|RegExp} [prop]   String or regular expression
   *                                 to filter declarations by property name.
   * @param {childIterator} callback Iterator receives each node and index.
   *
   * @return {false|undefined} Returns `false` if iteration was broke.
   *
   * @example
   * root.walkDecls(decl => {
   *   checkPropertySupport(decl.prop)
   * })
   *
   * root.walkDecls('border-radius', decl => {
   *   decl.remove()
   * })
   *
   * root.walkDecls(/^background/, decl => {
   *   decl.value = takeFirstColorFromGradient(decl.value)
   * })
   */


  _proto.walkDecls = function walkDecls(prop, callback) {
    if (!callback) {
      callback = prop;
      return this.walk(function (child, i) {
        if (child.type === 'decl') {
          return callback(child, i);
        }
      });
    }

    if (prop instanceof RegExp) {
      return this.walk(function (child, i) {
        if (child.type === 'decl' && prop.test(child.prop)) {
          return callback(child, i);
        }
      });
    }

    return this.walk(function (child, i) {
      if (child.type === 'decl' && child.prop === prop) {
        return callback(child, i);
      }
    });
  };
  /**
   * Traverses the container’s descendant nodes, calling callback
   * for each rule node.
   *
   * If you pass a filter, iteration will only happen over rules
   * with matching selectors.
   *
   * Like {@link Container#each}, this method is safe
   * to use if you are mutating arrays during iteration.
   *
   * @param {string|RegExp} [selector] String or regular expression
   *                                   to filter rules by selector.
   * @param {childIterator} callback   Iterator receives each node and index.
   *
   * @return {false|undefined} returns `false` if iteration was broke.
   *
   * @example
   * const selectors = []
   * root.walkRules(rule => {
   *   selectors.push(rule.selector)
   * })
   * console.log(`Your CSS uses ${ selectors.length } selectors`)
   */


  _proto.walkRules = function walkRules(selector, callback) {
    if (!callback) {
      callback = selector;
      return this.walk(function (child, i) {
        if (child.type === 'rule') {
          return callback(child, i);
        }
      });
    }

    if (selector instanceof RegExp) {
      return this.walk(function (child, i) {
        if (child.type === 'rule' && selector.test(child.selector)) {
          return callback(child, i);
        }
      });
    }

    return this.walk(function (child, i) {
      if (child.type === 'rule' && child.selector === selector) {
        return callback(child, i);
      }
    });
  };
  /**
   * Traverses the container’s descendant nodes, calling callback
   * for each at-rule node.
   *
   * If you pass a filter, iteration will only happen over at-rules
   * that have matching names.
   *
   * Like {@link Container#each}, this method is safe
   * to use if you are mutating arrays during iteration.
   *
   * @param {string|RegExp} [name]   String or regular expression
   *                                 to filter at-rules by name.
   * @param {childIterator} callback Iterator receives each node and index.
   *
   * @return {false|undefined} Returns `false` if iteration was broke.
   *
   * @example
   * root.walkAtRules(rule => {
   *   if (isOld(rule.name)) rule.remove()
   * })
   *
   * let first = false
   * root.walkAtRules('charset', rule => {
   *   if (!first) {
   *     first = true
   *   } else {
   *     rule.remove()
   *   }
   * })
   */


  _proto.walkAtRules = function walkAtRules(name, callback) {
    if (!callback) {
      callback = name;
      return this.walk(function (child, i) {
        if (child.type === 'atrule') {
          return callback(child, i);
        }
      });
    }

    if (name instanceof RegExp) {
      return this.walk(function (child, i) {
        if (child.type === 'atrule' && name.test(child.name)) {
          return callback(child, i);
        }
      });
    }

    return this.walk(function (child, i) {
      if (child.type === 'atrule' && child.name === name) {
        return callback(child, i);
      }
    });
  };
  /**
   * Traverses the container’s descendant nodes, calling callback
   * for each comment node.
   *
   * Like {@link Container#each}, this method is safe
   * to use if you are mutating arrays during iteration.
   *
   * @param {childIterator} callback Iterator receives each node and index.
   *
   * @return {false|undefined} Returns `false` if iteration was broke.
   *
   * @example
   * root.walkComments(comment => {
   *   comment.remove()
   * })
   */


  _proto.walkComments = function walkComments(callback) {
    return this.walk(function (child, i) {
      if (child.type === 'comment') {
        return callback(child, i);
      }
    });
  };
  /**
   * Inserts new nodes to the end of the container.
   *
   * @param {...(Node|object|string|Node[])} children New nodes.
   *
   * @return {Node} This node for methods chain.
   *
   * @example
   * const decl1 = postcss.decl({ prop: 'color', value: 'black' })
   * const decl2 = postcss.decl({ prop: 'background-color', value: 'white' })
   * rule.append(decl1, decl2)
   *
   * root.append({ name: 'charset', params: '"UTF-8"' })  // at-rule
   * root.append({ selector: 'a' })                       // rule
   * rule.append({ prop: 'color', value: 'black' })       // declaration
   * rule.append({ text: 'Comment' })                     // comment
   *
   * root.append('a {}')
   * root.first.append('color: black; z-index: 1')
   */


  _proto.append = function append() {
    for (var _len = arguments.length, children = new Array(_len), _key = 0; _key < _len; _key++) {
      children[_key] = arguments[_key];
    }

    for (var _i = 0; _i < children.length; _i++) {
      var child = children[_i];
      var nodes = this.normalize(child, this.last);

      for (var _iterator = nodes, _isArray = Array.isArray(_iterator), _i2 = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i2 >= _iterator.length) break;
          _ref = _iterator[_i2++];
        } else {
          _i2 = _iterator.next();
          if (_i2.done) break;
          _ref = _i2.value;
        }

        var node = _ref;
        this.nodes.push(node);
      }
    }

    return this;
  };
  /**
   * Inserts new nodes to the start of the container.
   *
   * @param {...(Node|object|string|Node[])} children New nodes.
   *
   * @return {Node} This node for methods chain.
   *
   * @example
   * const decl1 = postcss.decl({ prop: 'color', value: 'black' })
   * const decl2 = postcss.decl({ prop: 'background-color', value: 'white' })
   * rule.prepend(decl1, decl2)
   *
   * root.append({ name: 'charset', params: '"UTF-8"' })  // at-rule
   * root.append({ selector: 'a' })                       // rule
   * rule.append({ prop: 'color', value: 'black' })       // declaration
   * rule.append({ text: 'Comment' })                     // comment
   *
   * root.append('a {}')
   * root.first.append('color: black; z-index: 1')
   */


  _proto.prepend = function prepend() {
    for (var _len2 = arguments.length, children = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      children[_key2] = arguments[_key2];
    }

    children = children.reverse();

    for (var _iterator2 = children, _isArray2 = Array.isArray(_iterator2), _i3 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
      var _ref2;

      if (_isArray2) {
        if (_i3 >= _iterator2.length) break;
        _ref2 = _iterator2[_i3++];
      } else {
        _i3 = _iterator2.next();
        if (_i3.done) break;
        _ref2 = _i3.value;
      }

      var child = _ref2;
      var nodes = this.normalize(child, this.first, 'prepend').reverse();

      for (var _iterator3 = nodes, _isArray3 = Array.isArray(_iterator3), _i4 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
        var _ref3;

        if (_isArray3) {
          if (_i4 >= _iterator3.length) break;
          _ref3 = _iterator3[_i4++];
        } else {
          _i4 = _iterator3.next();
          if (_i4.done) break;
          _ref3 = _i4.value;
        }

        var node = _ref3;
        this.nodes.unshift(node);
      }

      for (var id in this.indexes) {
        this.indexes[id] = this.indexes[id] + nodes.length;
      }
    }

    return this;
  };

  _proto.cleanRaws = function cleanRaws(keepBetween) {
    _Node.prototype.cleanRaws.call(this, keepBetween);

    if (this.nodes) {
      for (var _iterator4 = this.nodes, _isArray4 = Array.isArray(_iterator4), _i5 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
        var _ref4;

        if (_isArray4) {
          if (_i5 >= _iterator4.length) break;
          _ref4 = _iterator4[_i5++];
        } else {
          _i5 = _iterator4.next();
          if (_i5.done) break;
          _ref4 = _i5.value;
        }

        var node = _ref4;
        node.cleanRaws(keepBetween);
      }
    }
  };
  /**
   * Insert new node before old node within the container.
   *
   * @param {Node|number} exist             Child or child’s index.
   * @param {Node|object|string|Node[]} add New node.
   *
   * @return {Node} This node for methods chain.
   *
   * @example
   * rule.insertBefore(decl, decl.clone({ prop: '-webkit-' + decl.prop }))
   */


  _proto.insertBefore = function insertBefore(exist, add) {
    exist = this.index(exist);
    var type = exist === 0 ? 'prepend' : false;
    var nodes = this.normalize(add, this.nodes[exist], type).reverse();

    for (var _iterator5 = nodes, _isArray5 = Array.isArray(_iterator5), _i6 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
      var _ref5;

      if (_isArray5) {
        if (_i6 >= _iterator5.length) break;
        _ref5 = _iterator5[_i6++];
      } else {
        _i6 = _iterator5.next();
        if (_i6.done) break;
        _ref5 = _i6.value;
      }

      var node = _ref5;
      this.nodes.splice(exist, 0, node);
    }

    var index;

    for (var id in this.indexes) {
      index = this.indexes[id];

      if (exist <= index) {
        this.indexes[id] = index + nodes.length;
      }
    }

    return this;
  };
  /**
   * Insert new node after old node within the container.
   *
   * @param {Node|number} exist             Child or child’s index.
   * @param {Node|object|string|Node[]} add New node.
   *
   * @return {Node} This node for methods chain.
   */


  _proto.insertAfter = function insertAfter(exist, add) {
    exist = this.index(exist);
    var nodes = this.normalize(add, this.nodes[exist]).reverse();

    for (var _iterator6 = nodes, _isArray6 = Array.isArray(_iterator6), _i7 = 0, _iterator6 = _isArray6 ? _iterator6 : _iterator6[Symbol.iterator]();;) {
      var _ref6;

      if (_isArray6) {
        if (_i7 >= _iterator6.length) break;
        _ref6 = _iterator6[_i7++];
      } else {
        _i7 = _iterator6.next();
        if (_i7.done) break;
        _ref6 = _i7.value;
      }

      var node = _ref6;
      this.nodes.splice(exist + 1, 0, node);
    }

    var index;

    for (var id in this.indexes) {
      index = this.indexes[id];

      if (exist < index) {
        this.indexes[id] = index + nodes.length;
      }
    }

    return this;
  };
  /**
   * Removes node from the container and cleans the parent properties
   * from the node and its children.
   *
   * @param {Node|number} child Child or child’s index.
   *
   * @return {Node} This node for methods chain
   *
   * @example
   * rule.nodes.length  //=> 5
   * rule.removeChild(decl)
   * rule.nodes.length  //=> 4
   * decl.parent        //=> undefined
   */


  _proto.removeChild = function removeChild(child) {
    child = this.index(child);
    this.nodes[child].parent = undefined;
    this.nodes.splice(child, 1);
    var index;

    for (var id in this.indexes) {
      index = this.indexes[id];

      if (index >= child) {
        this.indexes[id] = index - 1;
      }
    }

    return this;
  };
  /**
   * Removes all children from the container
   * and cleans their parent properties.
   *
   * @return {Node} This node for methods chain.
   *
   * @example
   * rule.removeAll()
   * rule.nodes.length //=> 0
   */


  _proto.removeAll = function removeAll() {
    for (var _iterator7 = this.nodes, _isArray7 = Array.isArray(_iterator7), _i8 = 0, _iterator7 = _isArray7 ? _iterator7 : _iterator7[Symbol.iterator]();;) {
      var _ref7;

      if (_isArray7) {
        if (_i8 >= _iterator7.length) break;
        _ref7 = _iterator7[_i8++];
      } else {
        _i8 = _iterator7.next();
        if (_i8.done) break;
        _ref7 = _i8.value;
      }

      var node = _ref7;
      node.parent = undefined;
    }

    this.nodes = [];
    return this;
  };
  /**
   * Passes all declaration values within the container that match pattern
   * through callback, replacing those values with the returned result
   * of callback.
   *
   * This method is useful if you are using a custom unit or function
   * and need to iterate through all values.
   *
   * @param {string|RegExp} pattern      Replace pattern.
   * @param {object} opts                Options to speed up the search.
   * @param {string|string[]} opts.props An array of property names.
   * @param {string} opts.fast           String that’s used to narrow down
   *                                     values and speed up the regexp search.
   * @param {function|string} callback   String to replace pattern or callback
   *                                     that returns a new value. The callback
   *                                     will receive the same arguments
   *                                     as those passed to a function parameter
   *                                     of `String#replace`.
   *
   * @return {Node} This node for methods chain.
   *
   * @example
   * root.replaceValues(/\d+rem/, { fast: 'rem' }, string => {
   *   return 15 * parseInt(string) + 'px'
   * })
   */


  _proto.replaceValues = function replaceValues(pattern, opts, callback) {
    if (!callback) {
      callback = opts;
      opts = {};
    }

    this.walkDecls(function (decl) {
      if (opts.props && opts.props.indexOf(decl.prop) === -1) return;
      if (opts.fast && decl.value.indexOf(opts.fast) === -1) return;
      decl.value = decl.value.replace(pattern, callback);
    });
    return this;
  };
  /**
   * Returns `true` if callback returns `true`
   * for all of the container’s children.
   *
   * @param {childCondition} condition Iterator returns true or false.
   *
   * @return {boolean} Is every child pass condition.
   *
   * @example
   * const noPrefixes = rule.every(i => i.prop[0] !== '-')
   */


  _proto.every = function every(condition) {
    return this.nodes.every(condition);
  };
  /**
   * Returns `true` if callback returns `true` for (at least) one
   * of the container’s children.
   *
   * @param {childCondition} condition Iterator returns true or false.
   *
   * @return {boolean} Is some child pass condition.
   *
   * @example
   * const hasPrefix = rule.some(i => i.prop[0] === '-')
   */


  _proto.some = function some(condition) {
    return this.nodes.some(condition);
  };
  /**
   * Returns a `child`’s index within the {@link Container#nodes} array.
   *
   * @param {Node} child Child of the current container.
   *
   * @return {number} Child index.
   *
   * @example
   * rule.index( rule.nodes[2] ) //=> 2
   */


  _proto.index = function index(child) {
    if (typeof child === 'number') {
      return child;
    }

    return this.nodes.indexOf(child);
  };
  /**
   * The container’s first child.
   *
   * @type {Node}
   *
   * @example
   * rule.first === rules.nodes[0]
   */


  _proto.normalize = function normalize(nodes, sample) {
    var _this = this;

    if (typeof nodes === 'string') {
      var parse = __webpack_require__(69);

      nodes = cleanSource(parse(nodes).nodes);
    } else if (Array.isArray(nodes)) {
      nodes = nodes.slice(0);

      for (var _iterator8 = nodes, _isArray8 = Array.isArray(_iterator8), _i9 = 0, _iterator8 = _isArray8 ? _iterator8 : _iterator8[Symbol.iterator]();;) {
        var _ref8;

        if (_isArray8) {
          if (_i9 >= _iterator8.length) break;
          _ref8 = _iterator8[_i9++];
        } else {
          _i9 = _iterator8.next();
          if (_i9.done) break;
          _ref8 = _i9.value;
        }

        var i = _ref8;
        if (i.parent) i.parent.removeChild(i, 'ignore');
      }
    } else if (nodes.type === 'root') {
      nodes = nodes.nodes.slice(0);

      for (var _iterator9 = nodes, _isArray9 = Array.isArray(_iterator9), _i10 = 0, _iterator9 = _isArray9 ? _iterator9 : _iterator9[Symbol.iterator]();;) {
        var _ref9;

        if (_isArray9) {
          if (_i10 >= _iterator9.length) break;
          _ref9 = _iterator9[_i10++];
        } else {
          _i10 = _iterator9.next();
          if (_i10.done) break;
          _ref9 = _i10.value;
        }

        var _i11 = _ref9;
        if (_i11.parent) _i11.parent.removeChild(_i11, 'ignore');
      }
    } else if (nodes.type) {
      nodes = [nodes];
    } else if (nodes.prop) {
      if (typeof nodes.value === 'undefined') {
        throw new Error('Value field is missed in node creation');
      } else if (typeof nodes.value !== 'string') {
        nodes.value = String(nodes.value);
      }

      nodes = [new _declaration.default(nodes)];
    } else if (nodes.selector) {
      var Rule = __webpack_require__(70);

      nodes = [new Rule(nodes)];
    } else if (nodes.name) {
      var AtRule = __webpack_require__(68);

      nodes = [new AtRule(nodes)];
    } else if (nodes.text) {
      nodes = [new _comment.default(nodes)];
    } else {
      throw new Error('Unknown node type in node creation');
    }

    var processed = nodes.map(function (i) {
      if (i.parent) i.parent.removeChild(i);

      if (typeof i.raws.before === 'undefined') {
        if (sample && typeof sample.raws.before !== 'undefined') {
          i.raws.before = sample.raws.before.replace(/[^\s]/g, '');
        }
      }

      i.parent = _this;
      return i;
    });
    return processed;
  };
  /**
   * @memberof Container#
   * @member {Node[]} nodes An array containing the container’s children.
   *
   * @example
   * const root = postcss.parse('a { color: black }')
   * root.nodes.length           //=> 1
   * root.nodes[0].selector      //=> 'a'
   * root.nodes[0].nodes[0].prop //=> 'color'
   */


  _createClass(Container, [{
    key: "first",
    get: function get() {
      if (!this.nodes) return undefined;
      return this.nodes[0];
    }
    /**
     * The container’s last child.
     *
     * @type {Node}
     *
     * @example
     * rule.last === rule.nodes[rule.nodes.length - 1]
     */

  }, {
    key: "last",
    get: function get() {
      if (!this.nodes) return undefined;
      return this.nodes[this.nodes.length - 1];
    }
  }]);

  return Container;
}(_node.default);

var _default = Container;
/**
 * @callback childCondition
 * @param {Node} node    Container child.
 * @param {number} index Child index.
 * @param {Node[]} nodes All container children.
 * @return {boolean}
 */

/**
 * @callback childIterator
 * @param {Node} node    Container child.
 * @param {number} index Child index.
 * @return {false|undefined} Returning `false` will break iteration.
 */

exports.default = _default;
module.exports = exports.default;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lessStringify;

var _lessStringifier = __webpack_require__(163);

var _lessStringifier2 = _interopRequireDefault(_lessStringifier);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function lessStringify(node, builder) {
  var str = new _lessStringifier2.default(builder);
  str.stringify(node);
}

module.exports = exports['default'];

/***/ }),
/* 15 */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.__esModule = true;

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _node = __webpack_require__(5);

var _node2 = _interopRequireDefault(_node);

var _types = __webpack_require__(0);

var types = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Container = function (_Node) {
  _inherits(Container, _Node);

  function Container(opts) {
    _classCallCheck(this, Container);

    var _this = _possibleConstructorReturn(this, _Node.call(this, opts));

    if (!_this.nodes) {
      _this.nodes = [];
    }

    return _this;
  }

  Container.prototype.append = function append(selector) {
    selector.parent = this;
    this.nodes.push(selector);
    return this;
  };

  Container.prototype.prepend = function prepend(selector) {
    selector.parent = this;
    this.nodes.unshift(selector);
    return this;
  };

  Container.prototype.at = function at(index) {
    return this.nodes[index];
  };

  Container.prototype.index = function index(child) {
    if (typeof child === 'number') {
      return child;
    }

    return this.nodes.indexOf(child);
  };

  Container.prototype.removeChild = function removeChild(child) {
    child = this.index(child);
    this.at(child).parent = undefined;
    this.nodes.splice(child, 1);
    var index = void 0;

    for (var id in this.indexes) {
      index = this.indexes[id];

      if (index >= child) {
        this.indexes[id] = index - 1;
      }
    }

    return this;
  };

  Container.prototype.removeAll = function removeAll() {
    for (var _iterator = this.nodes, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var node = _ref;
      node.parent = undefined;
    }

    this.nodes = [];
    return this;
  };

  Container.prototype.empty = function empty() {
    return this.removeAll();
  };

  Container.prototype.insertAfter = function insertAfter(oldNode, newNode) {
    var oldIndex = this.index(oldNode);
    this.nodes.splice(oldIndex + 1, 0, newNode);
    var index = void 0;

    for (var id in this.indexes) {
      index = this.indexes[id];

      if (oldIndex <= index) {
        this.indexes[id] = index + this.nodes.length;
      }
    }

    return this;
  };

  Container.prototype.insertBefore = function insertBefore(oldNode, newNode) {
    var oldIndex = this.index(oldNode);
    this.nodes.splice(oldIndex, 0, newNode);
    var index = void 0;

    for (var id in this.indexes) {
      index = this.indexes[id];

      if (oldIndex <= index) {
        this.indexes[id] = index + this.nodes.length;
      }
    }

    return this;
  };

  Container.prototype.each = function each(callback) {
    if (!this.lastEach) {
      this.lastEach = 0;
    }

    if (!this.indexes) {
      this.indexes = {};
    }

    this.lastEach++;
    var id = this.lastEach;
    this.indexes[id] = 0;

    if (!this.length) {
      return undefined;
    }

    var index = void 0,
        result = void 0;

    while (this.indexes[id] < this.length) {
      index = this.indexes[id];
      result = callback(this.at(index), index);

      if (result === false) {
        break;
      }

      this.indexes[id] += 1;
    }

    delete this.indexes[id];

    if (result === false) {
      return false;
    }
  };

  Container.prototype.walk = function walk(callback) {
    return this.each(function (node, i) {
      var result = callback(node, i);

      if (result !== false && node.length) {
        result = node.walk(callback);
      }

      if (result === false) {
        return false;
      }
    });
  };

  Container.prototype.walkAttributes = function walkAttributes(callback) {
    var _this2 = this;

    return this.walk(function (selector) {
      if (selector.type === types.ATTRIBUTE) {
        return callback.call(_this2, selector);
      }
    });
  };

  Container.prototype.walkClasses = function walkClasses(callback) {
    var _this3 = this;

    return this.walk(function (selector) {
      if (selector.type === types.CLASS) {
        return callback.call(_this3, selector);
      }
    });
  };

  Container.prototype.walkCombinators = function walkCombinators(callback) {
    var _this4 = this;

    return this.walk(function (selector) {
      if (selector.type === types.COMBINATOR) {
        return callback.call(_this4, selector);
      }
    });
  };

  Container.prototype.walkComments = function walkComments(callback) {
    var _this5 = this;

    return this.walk(function (selector) {
      if (selector.type === types.COMMENT) {
        return callback.call(_this5, selector);
      }
    });
  };

  Container.prototype.walkIds = function walkIds(callback) {
    var _this6 = this;

    return this.walk(function (selector) {
      if (selector.type === types.ID) {
        return callback.call(_this6, selector);
      }
    });
  };

  Container.prototype.walkNesting = function walkNesting(callback) {
    var _this7 = this;

    return this.walk(function (selector) {
      if (selector.type === types.NESTING) {
        return callback.call(_this7, selector);
      }
    });
  };

  Container.prototype.walkPseudos = function walkPseudos(callback) {
    var _this8 = this;

    return this.walk(function (selector) {
      if (selector.type === types.PSEUDO) {
        return callback.call(_this8, selector);
      }
    });
  };

  Container.prototype.walkTags = function walkTags(callback) {
    var _this9 = this;

    return this.walk(function (selector) {
      if (selector.type === types.TAG) {
        return callback.call(_this9, selector);
      }
    });
  };

  Container.prototype.walkUniversals = function walkUniversals(callback) {
    var _this10 = this;

    return this.walk(function (selector) {
      if (selector.type === types.UNIVERSAL) {
        return callback.call(_this10, selector);
      }
    });
  };

  Container.prototype.split = function split(callback) {
    var _this11 = this;

    var current = [];
    return this.reduce(function (memo, node, index) {
      var split = callback.call(_this11, node);
      current.push(node);

      if (split) {
        memo.push(current);
        current = [];
      } else if (index === _this11.length - 1) {
        memo.push(current);
      }

      return memo;
    }, []);
  };

  Container.prototype.map = function map(callback) {
    return this.nodes.map(callback);
  };

  Container.prototype.reduce = function reduce(callback, memo) {
    return this.nodes.reduce(callback, memo);
  };

  Container.prototype.every = function every(callback) {
    return this.nodes.every(callback);
  };

  Container.prototype.some = function some(callback) {
    return this.nodes.some(callback);
  };

  Container.prototype.filter = function filter(callback) {
    return this.nodes.filter(callback);
  };

  Container.prototype.sort = function sort(callback) {
    return this.nodes.sort(callback);
  };

  Container.prototype.toString = function toString() {
    return this.map(String).join('');
  };

  _createClass(Container, [{
    key: 'first',
    get: function get() {
      return this.at(0);
    }
  }, {
    key: 'last',
    get: function get() {
      return this.at(this.length - 1);
    }
  }, {
    key: 'length',
    get: function get() {
      return this.nodes.length;
    }
  }]);

  return Container;
}(_node2.default);

exports.default = Container;
module.exports = exports['default'];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
var DEFAULT_RAW = {
  colon: ': ',
  indent: '    ',
  beforeDecl: '\n',
  beforeRule: '\n',
  beforeOpen: ' ',
  beforeClose: '\n',
  beforeComment: '\n',
  after: '\n',
  emptyBody: '',
  commentLeft: ' ',
  commentRight: ' '
};

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

var Stringifier =
/*#__PURE__*/
function () {
  function Stringifier(builder) {
    this.builder = builder;
  }

  var _proto = Stringifier.prototype;

  _proto.stringify = function stringify(node, semicolon) {
    this[node.type](node, semicolon);
  };

  _proto.root = function root(node) {
    this.body(node);
    if (node.raws.after) this.builder(node.raws.after);
  };

  _proto.comment = function comment(node) {
    var left = this.raw(node, 'left', 'commentLeft');
    var right = this.raw(node, 'right', 'commentRight');
    this.builder('/*' + left + node.text + right + '*/', node);
  };

  _proto.decl = function decl(node, semicolon) {
    var between = this.raw(node, 'between', 'colon');
    var string = node.prop + between + this.rawValue(node, 'value');

    if (node.important) {
      string += node.raws.important || ' !important';
    }

    if (semicolon) string += ';';
    this.builder(string, node);
  };

  _proto.rule = function rule(node) {
    this.block(node, this.rawValue(node, 'selector'));

    if (node.raws.ownSemicolon) {
      this.builder(node.raws.ownSemicolon, node, 'end');
    }
  };

  _proto.atrule = function atrule(node, semicolon) {
    var name = '@' + node.name;
    var params = node.params ? this.rawValue(node, 'params') : '';

    if (typeof node.raws.afterName !== 'undefined') {
      name += node.raws.afterName;
    } else if (params) {
      name += ' ';
    }

    if (node.nodes) {
      this.block(node, name + params);
    } else {
      var end = (node.raws.between || '') + (semicolon ? ';' : '');
      this.builder(name + params + end, node);
    }
  };

  _proto.body = function body(node) {
    var last = node.nodes.length - 1;

    while (last > 0) {
      if (node.nodes[last].type !== 'comment') break;
      last -= 1;
    }

    var semicolon = this.raw(node, 'semicolon');

    for (var i = 0; i < node.nodes.length; i++) {
      var child = node.nodes[i];
      var before = this.raw(child, 'before');
      if (before) this.builder(before);
      this.stringify(child, last !== i || semicolon);
    }
  };

  _proto.block = function block(node, start) {
    var between = this.raw(node, 'between', 'beforeOpen');
    this.builder(start + between + '{', node, 'start');
    var after;

    if (node.nodes && node.nodes.length) {
      this.body(node);
      after = this.raw(node, 'after');
    } else {
      after = this.raw(node, 'after', 'emptyBody');
    }

    if (after) this.builder(after);
    this.builder('}', node, 'end');
  };

  _proto.raw = function raw(node, own, detect) {
    var value;
    if (!detect) detect = own; // Already had

    if (own) {
      value = node.raws[own];
      if (typeof value !== 'undefined') return value;
    }

    var parent = node.parent; // Hack for first rule in CSS

    if (detect === 'before') {
      if (!parent || parent.type === 'root' && parent.first === node) {
        return '';
      }
    } // Floating child without parent


    if (!parent) return DEFAULT_RAW[detect]; // Detect style by other nodes

    var root = node.root();
    if (!root.rawCache) root.rawCache = {};

    if (typeof root.rawCache[detect] !== 'undefined') {
      return root.rawCache[detect];
    }

    if (detect === 'before' || detect === 'after') {
      return this.beforeAfter(node, detect);
    } else {
      var method = 'raw' + capitalize(detect);

      if (this[method]) {
        value = this[method](root, node);
      } else {
        root.walk(function (i) {
          value = i.raws[own];
          if (typeof value !== 'undefined') return false;
        });
      }
    }

    if (typeof value === 'undefined') value = DEFAULT_RAW[detect];
    root.rawCache[detect] = value;
    return value;
  };

  _proto.rawSemicolon = function rawSemicolon(root) {
    var value;
    root.walk(function (i) {
      if (i.nodes && i.nodes.length && i.last.type === 'decl') {
        value = i.raws.semicolon;
        if (typeof value !== 'undefined') return false;
      }
    });
    return value;
  };

  _proto.rawEmptyBody = function rawEmptyBody(root) {
    var value;
    root.walk(function (i) {
      if (i.nodes && i.nodes.length === 0) {
        value = i.raws.after;
        if (typeof value !== 'undefined') return false;
      }
    });
    return value;
  };

  _proto.rawIndent = function rawIndent(root) {
    if (root.raws.indent) return root.raws.indent;
    var value;
    root.walk(function (i) {
      var p = i.parent;

      if (p && p !== root && p.parent && p.parent === root) {
        if (typeof i.raws.before !== 'undefined') {
          var parts = i.raws.before.split('\n');
          value = parts[parts.length - 1];
          value = value.replace(/[^\s]/g, '');
          return false;
        }
      }
    });
    return value;
  };

  _proto.rawBeforeComment = function rawBeforeComment(root, node) {
    var value;
    root.walkComments(function (i) {
      if (typeof i.raws.before !== 'undefined') {
        value = i.raws.before;

        if (value.indexOf('\n') !== -1) {
          value = value.replace(/[^\n]+$/, '');
        }

        return false;
      }
    });

    if (typeof value === 'undefined') {
      value = this.raw(node, null, 'beforeDecl');
    } else if (value) {
      value = value.replace(/[^\s]/g, '');
    }

    return value;
  };

  _proto.rawBeforeDecl = function rawBeforeDecl(root, node) {
    var value;
    root.walkDecls(function (i) {
      if (typeof i.raws.before !== 'undefined') {
        value = i.raws.before;

        if (value.indexOf('\n') !== -1) {
          value = value.replace(/[^\n]+$/, '');
        }

        return false;
      }
    });

    if (typeof value === 'undefined') {
      value = this.raw(node, null, 'beforeRule');
    } else if (value) {
      value = value.replace(/[^\s]/g, '');
    }

    return value;
  };

  _proto.rawBeforeRule = function rawBeforeRule(root) {
    var value;
    root.walk(function (i) {
      if (i.nodes && (i.parent !== root || root.first !== i)) {
        if (typeof i.raws.before !== 'undefined') {
          value = i.raws.before;

          if (value.indexOf('\n') !== -1) {
            value = value.replace(/[^\n]+$/, '');
          }

          return false;
        }
      }
    });
    if (value) value = value.replace(/[^\s]/g, '');
    return value;
  };

  _proto.rawBeforeClose = function rawBeforeClose(root) {
    var value;
    root.walk(function (i) {
      if (i.nodes && i.nodes.length > 0) {
        if (typeof i.raws.after !== 'undefined') {
          value = i.raws.after;

          if (value.indexOf('\n') !== -1) {
            value = value.replace(/[^\n]+$/, '');
          }

          return false;
        }
      }
    });
    if (value) value = value.replace(/[^\s]/g, '');
    return value;
  };

  _proto.rawBeforeOpen = function rawBeforeOpen(root) {
    var value;
    root.walk(function (i) {
      if (i.type !== 'decl') {
        value = i.raws.between;
        if (typeof value !== 'undefined') return false;
      }
    });
    return value;
  };

  _proto.rawColon = function rawColon(root) {
    var value;
    root.walkDecls(function (i) {
      if (typeof i.raws.between !== 'undefined') {
        value = i.raws.between.replace(/[^\s:]/g, '');
        return false;
      }
    });
    return value;
  };

  _proto.beforeAfter = function beforeAfter(node, detect) {
    var value;

    if (node.type === 'decl') {
      value = this.raw(node, null, 'beforeDecl');
    } else if (node.type === 'comment') {
      value = this.raw(node, null, 'beforeComment');
    } else if (detect === 'before') {
      value = this.raw(node, null, 'beforeRule');
    } else {
      value = this.raw(node, null, 'beforeClose');
    }

    var buf = node.parent;
    var depth = 0;

    while (buf && buf.type !== 'root') {
      depth += 1;
      buf = buf.parent;
    }

    if (value.indexOf('\n') !== -1) {
      var indent = this.raw(node, null, 'indent');

      if (indent.length) {
        for (var step = 0; step < depth; step++) {
          value += indent;
        }
      }
    }

    return value;
  };

  _proto.rawValue = function rawValue(node, prop) {
    var value = node[prop];
    var raw = node.raws[prop];

    if (raw && raw.value === value) {
      return raw.raw;
    }

    return value;
  };

  return Stringifier;
}();

var _default = Stringifier;
exports.default = _default;
module.exports = exports.default;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

/* eslint-disable no-proto */


var base64 = __webpack_require__(121);

var ieee754 = __webpack_require__(122);

var isArray = __webpack_require__(123);

exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */

Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();
/*
 * Export kMaxLength after typed array support is determined.
 */

exports.kMaxLength = kMaxLength();

function typedArraySupport() {
  try {
    var arr = new Uint8Array(1);
    arr.__proto__ = {
      __proto__: Uint8Array.prototype,
      foo: function foo() {
        return 42;
      }
    };
    return arr.foo() === 42 && // typed array instances can be augmented
    typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
    arr.subarray(1, 1).byteLength === 0; // ie10 has broken `subarray`
  } catch (e) {
    return false;
  }
}

function kMaxLength() {
  return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
}

function createBuffer(that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length');
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length);
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length);
    }

    that.length = length;
  }

  return that;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */


function Buffer(arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length);
  } // Common case.


  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error('If encoding is specified then the first argument must be a string');
    }

    return allocUnsafe(this, arg);
  }

  return from(this, arg, encodingOrOffset, length);
}

Buffer.poolSize = 8192; // not used by this implementation
// TODO: Legacy, not needed anymore. Remove in next major version.

Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype;
  return arr;
};

function from(that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number');
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length);
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset);
  }

  return fromObject(that, value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/


Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length);
};

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype;
  Buffer.__proto__ = Uint8Array;

  if (typeof Symbol !== 'undefined' && Symbol.species && Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    });
  }
}

function assertSize(size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number');
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative');
  }
}

function alloc(that, size, fill, encoding) {
  assertSize(size);

  if (size <= 0) {
    return createBuffer(that, size);
  }

  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string' ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
  }

  return createBuffer(that, size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/


Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding);
};

function allocUnsafe(that, size) {
  assertSize(size);
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);

  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0;
    }
  }

  return that;
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */


Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */


Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size);
};

function fromString(that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8';
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding');
  }

  var length = byteLength(string, encoding) | 0;
  that = createBuffer(that, length);
  var actual = that.write(string, encoding);

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual);
  }

  return that;
}

function fromArrayLike(that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  that = createBuffer(that, length);

  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255;
  }

  return that;
}

function fromArrayBuffer(that, array, byteOffset, length) {
  array.byteLength; // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds');
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds');
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array);
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset);
  } else {
    array = new Uint8Array(array, byteOffset, length);
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array;
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array);
  }

  return that;
}

function fromObject(that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0;
    that = createBuffer(that, len);

    if (that.length === 0) {
      return that;
    }

    obj.copy(that, 0, 0, len);
    return that;
  }

  if (obj) {
    if (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0);
      }

      return fromArrayLike(that, obj);
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data);
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
}

function checked(length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
  }

  return length | 0;
}

function SlowBuffer(length) {
  if (+length != length) {
    // eslint-disable-line eqeqeq
    length = 0;
  }

  return Buffer.alloc(+length);
}

Buffer.isBuffer = function isBuffer(b) {
  return !!(b != null && b._isBuffer);
};

Buffer.compare = function compare(a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers');
  }

  if (a === b) return 0;
  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};

Buffer.isEncoding = function isEncoding(encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true;

    default:
      return false;
  }
};

Buffer.concat = function concat(list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers');
  }

  if (list.length === 0) {
    return Buffer.alloc(0);
  }

  var i;

  if (length === undefined) {
    length = 0;

    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }

  var buffer = Buffer.allocUnsafe(length);
  var pos = 0;

  for (i = 0; i < list.length; ++i) {
    var buf = list[i];

    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }

    buf.copy(buffer, pos);
    pos += buf.length;
  }

  return buffer;
};

function byteLength(string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length;
  }

  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength;
  }

  if (typeof string !== 'string') {
    string = '' + string;
  }

  var len = string.length;
  if (len === 0) return 0; // Use a for loop to avoid recursion

  var loweredCase = false;

  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len;

      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length;

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2;

      case 'hex':
        return len >>> 1;

      case 'base64':
        return base64ToBytes(string).length;

      default:
        if (loweredCase) return utf8ToBytes(string).length; // assume utf8

        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}

Buffer.byteLength = byteLength;

function slowToString(encoding, start, end) {
  var loweredCase = false; // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.
  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.

  if (start === undefined || start < 0) {
    start = 0;
  } // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.


  if (start > this.length) {
    return '';
  }

  if (end === undefined || end > this.length) {
    end = this.length;
  }

  if (end <= 0) {
    return '';
  } // Force coersion to uint32. This will also coerce falsey/NaN values to 0.


  end >>>= 0;
  start >>>= 0;

  if (end <= start) {
    return '';
  }

  if (!encoding) encoding = 'utf8';

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end);

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end);

      case 'ascii':
        return asciiSlice(this, start, end);

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end);

      case 'base64':
        return base64Slice(this, start, end);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = (encoding + '').toLowerCase();
        loweredCase = true;
    }
  }
} // The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.


Buffer.prototype._isBuffer = true;

function swap(b, n, m) {
  var i = b[n];
  b[n] = b[m];
  b[m] = i;
}

Buffer.prototype.swap16 = function swap16() {
  var len = this.length;

  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits');
  }

  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1);
  }

  return this;
};

Buffer.prototype.swap32 = function swap32() {
  var len = this.length;

  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits');
  }

  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3);
    swap(this, i + 1, i + 2);
  }

  return this;
};

Buffer.prototype.swap64 = function swap64() {
  var len = this.length;

  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits');
  }

  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7);
    swap(this, i + 1, i + 6);
    swap(this, i + 2, i + 5);
    swap(this, i + 3, i + 4);
  }

  return this;
};

Buffer.prototype.toString = function toString() {
  var length = this.length | 0;
  if (length === 0) return '';
  if (arguments.length === 0) return utf8Slice(this, 0, length);
  return slowToString.apply(this, arguments);
};

Buffer.prototype.equals = function equals(b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
  if (this === b) return true;
  return Buffer.compare(this, b) === 0;
};

Buffer.prototype.inspect = function inspect() {
  var str = '';
  var max = exports.INSPECT_MAX_BYTES;

  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
    if (this.length > max) str += ' ... ';
  }

  return '<Buffer ' + str + '>';
};

Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer');
  }

  if (start === undefined) {
    start = 0;
  }

  if (end === undefined) {
    end = target ? target.length : 0;
  }

  if (thisStart === undefined) {
    thisStart = 0;
  }

  if (thisEnd === undefined) {
    thisEnd = this.length;
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index');
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0;
  }

  if (thisStart >= thisEnd) {
    return -1;
  }

  if (start >= end) {
    return 1;
  }

  start >>>= 0;
  end >>>= 0;
  thisStart >>>= 0;
  thisEnd >>>= 0;
  if (this === target) return 0;
  var x = thisEnd - thisStart;
  var y = end - start;
  var len = Math.min(x, y);
  var thisCopy = this.slice(thisStart, thisEnd);
  var targetCopy = target.slice(start, end);

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i];
      y = targetCopy[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
}; // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf


function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1; // Normalize byteOffset

  if (typeof byteOffset === 'string') {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff;
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000;
  }

  byteOffset = +byteOffset; // Coerce to Number.

  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
  } // Normalize byteOffset: negative offsets start from the end of the buffer


  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;

  if (byteOffset >= buffer.length) {
    if (dir) return -1;else byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0;else return -1;
  } // Normalize val


  if (typeof val === 'string') {
    val = Buffer.from(val, encoding);
  } // Finally, search either indexOf (if dir is true) or lastIndexOf


  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1;
    }

    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
  } else if (typeof val === 'number') {
    val = val & 0xFF; // Search for a byte value [0-255]

    if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
      }
    }

    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
  }

  throw new TypeError('val must be string, number or Buffer');
}

function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
  var indexSize = 1;
  var arrLength = arr.length;
  var valLength = val.length;

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase();

    if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1;
      }

      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }

  function read(buf, i) {
    if (indexSize === 1) {
      return buf[i];
    } else {
      return buf.readUInt16BE(i * indexSize);
    }
  }

  var i;

  if (dir) {
    var foundIndex = -1;

    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i;
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
      } else {
        if (foundIndex !== -1) i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;

    for (i = byteOffset; i >= 0; i--) {
      var found = true;

      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false;
          break;
        }
      }

      if (found) return i;
    }
  }

  return -1;
}

Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1;
};

Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};

Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};

function hexWrite(buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;

  if (!length) {
    length = remaining;
  } else {
    length = Number(length);

    if (length > remaining) {
      length = remaining;
    }
  } // must be an even number of digits


  var strLen = string.length;
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string');

  if (length > strLen / 2) {
    length = strLen / 2;
  }

  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (isNaN(parsed)) return i;
    buf[offset + i] = parsed;
  }

  return i;
}

function utf8Write(buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}

function asciiWrite(buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length);
}

function latin1Write(buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length);
}

function base64Write(buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length);
}

function ucs2Write(buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}

Buffer.prototype.write = function write(string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8';
    length = this.length;
    offset = 0; // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset;
    length = this.length;
    offset = 0; // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0;

    if (isFinite(length)) {
      length = length | 0;
      if (encoding === undefined) encoding = 'utf8';
    } else {
      encoding = length;
      length = undefined;
    } // legacy write(string, encoding, offset, length) - remove in v0.13

  } else {
    throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
  }

  var remaining = this.length - offset;
  if (length === undefined || length > remaining) length = remaining;

  if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds');
  }

  if (!encoding) encoding = 'utf8';
  var loweredCase = false;

  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length);

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length);

      case 'ascii':
        return asciiWrite(this, string, offset, length);

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length);

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
};

Buffer.prototype.toJSON = function toJSON() {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};

function base64Slice(buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf);
  } else {
    return base64.fromByteArray(buf.slice(start, end));
  }
}

function utf8Slice(buf, start, end) {
  end = Math.min(buf.length, end);
  var res = [];
  var i = start;

  while (i < end) {
    var firstByte = buf[i];
    var codePoint = null;
    var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte;
          }

          break;

        case 2:
          secondByte = buf[i + 1];

          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;

            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint;
            }
          }

          break;

        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];

          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;

            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint;
            }
          }

          break;

        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];

          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;

            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint;
            }
          }

      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD;
      bytesPerSequence = 1;
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000;
      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
      codePoint = 0xDC00 | codePoint & 0x3FF;
    }

    res.push(codePoint);
    i += bytesPerSequence;
  }

  return decodeCodePointsArray(res);
} // Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety


var MAX_ARGUMENTS_LENGTH = 0x1000;

function decodeCodePointsArray(codePoints) {
  var len = codePoints.length;

  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
  } // Decode in chunks to avoid "call stack size exceeded".


  var res = '';
  var i = 0;

  while (i < len) {
    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
  }

  return res;
}

function asciiSlice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F);
  }

  return ret;
}

function latin1Slice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }

  return ret;
}

function hexSlice(buf, start, end) {
  var len = buf.length;
  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;
  var out = '';

  for (var i = start; i < end; ++i) {
    out += toHex(buf[i]);
  }

  return out;
}

function utf16leSlice(buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = '';

  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }

  return res;
}

Buffer.prototype.slice = function slice(start, end) {
  var len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;

  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }

  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }

  if (end < start) end = start;
  var newBuf;

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end);
    newBuf.__proto__ = Buffer.prototype;
  } else {
    var sliceLen = end - start;
    newBuf = new Buffer(sliceLen, undefined);

    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start];
    }
  }

  return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */


function checkOffset(offset, ext, length) {
  if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}

Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var val = this[offset];
  var mul = 1;
  var i = 0;

  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  return val;
};

Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;

  if (!noAssert) {
    checkOffset(offset, byteLength, this.length);
  }

  var val = this[offset + --byteLength];
  var mul = 1;

  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul;
  }

  return val;
};

Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  return this[offset];
};

Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] | this[offset + 1] << 8;
};

Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] << 8 | this[offset + 1];
};

Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};

Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};

Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var val = this[offset];
  var mul = 1;
  var i = 0;

  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  mul *= 0x80;
  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
  return val;
};

Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var i = byteLength;
  var mul = 1;
  var val = this[offset + --i];

  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul;
  }

  mul *= 0x80;
  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
  return val;
};

Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  if (!(this[offset] & 0x80)) return this[offset];
  return (0xff - this[offset] + 1) * -1;
};

Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset] | this[offset + 1] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset + 1] | this[offset] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};

Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};

Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, true, 23, 4);
};

Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, false, 23, 4);
};

Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, true, 52, 8);
};

Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, false, 52, 8);
};

function checkInt(buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
}

Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;

  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var mul = 1;
  var i = 0;
  this[offset] = value & 0xFF;

  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;

  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var i = byteLength - 1;
  var mul = 1;
  this[offset + i] = value & 0xFF;

  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  this[offset] = value & 0xff;
  return offset + 1;
};

function objectWriteUInt16(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1;

  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }

  return offset + 2;
};

Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }

  return offset + 2;
};

function objectWriteUInt32(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1;

  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }

  return offset + 4;
};

Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }

  return offset + 4;
};

Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;

  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);
    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = 0;
  var mul = 1;
  var sub = 0;
  this[offset] = value & 0xFF;

  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1;
    }

    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;

  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);
    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = byteLength - 1;
  var mul = 1;
  var sub = 0;
  this[offset + i] = value & 0xFF;

  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1;
    }

    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  if (value < 0) value = 0xff + value + 1;
  this[offset] = value & 0xff;
  return offset + 1;
};

Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }

  return offset + 2;
};

Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }

  return offset + 2;
};

Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }

  return offset + 4;
};

Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (value < 0) value = 0xffffffff + value + 1;

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }

  return offset + 4;
};

function checkIEEE754(buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
  if (offset < 0) throw new RangeError('Index out of range');
}

function writeFloat(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
  }

  ieee754.write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4;
}

Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert);
};

Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert);
};

function writeDouble(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
  }

  ieee754.write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8;
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert);
};

Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert);
}; // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)


Buffer.prototype.copy = function copy(target, targetStart, start, end) {
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start; // Copy 0 bytes; we're done

  if (end === start) return 0;
  if (target.length === 0 || this.length === 0) return 0; // Fatal error conditions

  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds');
  }

  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
  if (end < 0) throw new RangeError('sourceEnd out of bounds'); // Are we oob?

  if (end > this.length) end = this.length;

  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }

  var len = end - start;
  var i;

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start];
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
  }

  return len;
}; // Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])


Buffer.prototype.fill = function fill(val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start;
      start = 0;
      end = this.length;
    } else if (typeof end === 'string') {
      encoding = end;
      end = this.length;
    }

    if (val.length === 1) {
      var code = val.charCodeAt(0);

      if (code < 256) {
        val = code;
      }
    }

    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string');
    }

    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding);
    }
  } else if (typeof val === 'number') {
    val = val & 255;
  } // Invalid ranges are not set to a default, so can range check early.


  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index');
  }

  if (end <= start) {
    return this;
  }

  start = start >>> 0;
  end = end === undefined ? this.length : end >>> 0;
  if (!val) val = 0;
  var i;

  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
    var len = bytes.length;

    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }

  return this;
}; // HELPER FUNCTIONS
// ================


var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

function base64clean(str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, ''); // Node converts strings with length < 2 to ''

  if (str.length < 2) return ''; // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not

  while (str.length % 4 !== 0) {
    str = str + '=';
  }

  return str;
}

function stringtrim(str) {
  if (str.trim) return str.trim();
  return str.replace(/^\s+|\s+$/g, '');
}

function toHex(n) {
  if (n < 16) return '0' + n.toString(16);
  return n.toString(16);
}

function utf8ToBytes(string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i); // is surrogate component

    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } // valid lead


        leadSurrogate = codePoint;
        continue;
      } // 2 leads in a row


      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        leadSurrogate = codePoint;
        continue;
      } // valid surrogate pair


      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
    }

    leadSurrogate = null; // encode utf8

    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break;
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break;
      bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break;
      bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break;
      bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else {
      throw new Error('Invalid code point');
    }
  }

  return bytes;
}

function asciiToBytes(str) {
  var byteArray = [];

  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
  }

  return byteArray;
}

function utf16leToBytes(str, units) {
  var c, hi, lo;
  var byteArray = [];

  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break;
    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }

  return byteArray;
}

function base64ToBytes(str) {
  return base64.toByteArray(base64clean(str));
}

function blitBuffer(src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if (i + offset >= dst.length || i >= src.length) break;
    dst[i + offset] = src[i];
  }

  return i;
}

function isnan(val) {
  return val !== val; // eslint-disable-line no-self-compare
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)))

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _node = _interopRequireDefault(__webpack_require__(20));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
/**
 * Represents a comment between declarations or statements (rule and at-rules).
 *
 * Comments inside selectors, at-rule parameters, or declaration values
 * will be stored in the `raws` properties explained above.
 *
 * @extends Node
 */


var Comment =
/*#__PURE__*/
function (_Node) {
  _inheritsLoose(Comment, _Node);

  function Comment(defaults) {
    var _this;

    _this = _Node.call(this, defaults) || this;
    _this.type = 'comment';
    return _this;
  }
  /**
   * @memberof Comment#
   * @member {string} text The comment’s text.
   */

  /**
   * @memberof Comment#
   * @member {object} raws Information to generate byte-to-byte equal
   *                       node string as it was in the origin input.
   *
   * Every parser saves its own properties,
   * but the default CSS parser uses:
   *
   * * `before`: the space symbols before the node.
   * * `left`: the space symbols between `/*` and the comment’s text.
   * * `right`: the space symbols between the comment’s text.
   */


  return Comment;
}(_node.default);

var _default = Comment;
exports.default = _default;
module.exports = exports.default;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.__esModule = true;
exports.default = void 0;

var _cssSyntaxError = _interopRequireDefault(__webpack_require__(60));

var _stringifier = _interopRequireDefault(__webpack_require__(17));

var _stringify = _interopRequireDefault(__webpack_require__(65));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function cloneNode(obj, parent) {
  var cloned = new obj.constructor();

  for (var i in obj) {
    if (!obj.hasOwnProperty(i)) continue;
    var value = obj[i];

    var type = _typeof(value);

    if (i === 'parent' && type === 'object') {
      if (parent) cloned[i] = parent;
    } else if (i === 'source') {
      cloned[i] = value;
    } else if (value instanceof Array) {
      cloned[i] = value.map(function (j) {
        return cloneNode(j, cloned);
      });
    } else {
      if (type === 'object' && value !== null) value = cloneNode(value);
      cloned[i] = value;
    }
  }

  return cloned;
}
/**
 * All node classes inherit the following common methods.
 *
 * @abstract
 */


var Node =
/*#__PURE__*/
function () {
  /**
   * @param {object} [defaults] Value for node properties.
   */
  function Node(defaults) {
    if (defaults === void 0) {
      defaults = {};
    }

    this.raws = {};

    if (false) {
      if (_typeof(defaults) !== 'object' && typeof defaults !== 'undefined') {
        throw new Error('PostCSS nodes constructor accepts object, not ' + JSON.stringify(defaults));
      }
    }

    for (var name in defaults) {
      this[name] = defaults[name];
    }
  }
  /**
   * Returns a `CssSyntaxError` instance containing the original position
   * of the node in the source, showing line and column numbers and also
   * a small excerpt to facilitate debugging.
   *
   * If present, an input source map will be used to get the original position
   * of the source, even from a previous compilation step
   * (e.g., from Sass compilation).
   *
   * This method produces very useful error messages.
   *
   * @param {string} message     Error description.
   * @param {object} [opts]      Options.
   * @param {string} opts.plugin Plugin name that created this error.
   *                             PostCSS will set it automatically.
   * @param {string} opts.word   A word inside a node’s string that should
   *                             be highlighted as the source of the error.
   * @param {number} opts.index  An index inside a node’s string that should
   *                             be highlighted as the source of the error.
   *
   * @return {CssSyntaxError} Error object to throw it.
   *
   * @example
   * if (!variables[name]) {
   *   throw decl.error('Unknown variable ' + name, { word: name })
   *   // CssSyntaxError: postcss-vars:a.sass:4:3: Unknown variable $black
   *   //   color: $black
   *   // a
   *   //          ^
   *   //   background: white
   * }
   */


  var _proto = Node.prototype;

  _proto.error = function error(message, opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (this.source) {
      var pos = this.positionBy(opts);
      return this.source.input.error(message, pos.line, pos.column, opts);
    }

    return new _cssSyntaxError.default(message);
  };
  /**
   * This method is provided as a convenience wrapper for {@link Result#warn}.
   *
   * @param {Result} result      The {@link Result} instance
   *                             that will receive the warning.
   * @param {string} text        Warning message.
   * @param {object} [opts]      Options
   * @param {string} opts.plugin Plugin name that created this warning.
   *                             PostCSS will set it automatically.
   * @param {string} opts.word   A word inside a node’s string that should
   *                             be highlighted as the source of the warning.
   * @param {number} opts.index  An index inside a node’s string that should
   *                             be highlighted as the source of the warning.
   *
   * @return {Warning} Created warning object.
   *
   * @example
   * const plugin = postcss.plugin('postcss-deprecated', () => {
   *   return (root, result) => {
   *     root.walkDecls('bad', decl => {
   *       decl.warn(result, 'Deprecated property bad')
   *     })
   *   }
   * })
   */


  _proto.warn = function warn(result, text, opts) {
    var data = {
      node: this
    };

    for (var i in opts) {
      data[i] = opts[i];
    }

    return result.warn(text, data);
  };
  /**
   * Removes the node from its parent and cleans the parent properties
   * from the node and its children.
   *
   * @example
   * if (decl.prop.match(/^-webkit-/)) {
   *   decl.remove()
   * }
   *
   * @return {Node} Node to make calls chain.
   */


  _proto.remove = function remove() {
    if (this.parent) {
      this.parent.removeChild(this);
    }

    this.parent = undefined;
    return this;
  };
  /**
   * Returns a CSS string representing the node.
   *
   * @param {stringifier|syntax} [stringifier] A syntax to use
   *                                           in string generation.
   *
   * @return {string} CSS string of this node.
   *
   * @example
   * postcss.rule({ selector: 'a' }).toString() //=> "a {}"
   */


  _proto.toString = function toString(stringifier) {
    if (stringifier === void 0) {
      stringifier = _stringify.default;
    }

    if (stringifier.stringify) stringifier = stringifier.stringify;
    var result = '';
    stringifier(this, function (i) {
      result += i;
    });
    return result;
  };
  /**
   * Returns an exact clone of the node.
   *
   * The resulting cloned node and its (cloned) children will retain
   * code style properties.
   *
   * @param {object} [overrides] New properties to override in the clone.
   *
   * @example
   * decl.raws.before    //=> "\n  "
   * const cloned = decl.clone({ prop: '-moz-' + decl.prop })
   * cloned.raws.before  //=> "\n  "
   * cloned.toString()   //=> -moz-transform: scale(0)
   *
   * @return {Node} Clone of the node.
   */


  _proto.clone = function clone(overrides) {
    if (overrides === void 0) {
      overrides = {};
    }

    var cloned = cloneNode(this);

    for (var name in overrides) {
      cloned[name] = overrides[name];
    }

    return cloned;
  };
  /**
   * Shortcut to clone the node and insert the resulting cloned node
   * before the current node.
   *
   * @param {object} [overrides] Mew properties to override in the clone.
   *
   * @example
   * decl.cloneBefore({ prop: '-moz-' + decl.prop })
   *
   * @return {Node} New node
   */


  _proto.cloneBefore = function cloneBefore(overrides) {
    if (overrides === void 0) {
      overrides = {};
    }

    var cloned = this.clone(overrides);
    this.parent.insertBefore(this, cloned);
    return cloned;
  };
  /**
   * Shortcut to clone the node and insert the resulting cloned node
   * after the current node.
   *
   * @param {object} [overrides] New properties to override in the clone.
   *
   * @return {Node} New node.
   */


  _proto.cloneAfter = function cloneAfter(overrides) {
    if (overrides === void 0) {
      overrides = {};
    }

    var cloned = this.clone(overrides);
    this.parent.insertAfter(this, cloned);
    return cloned;
  };
  /**
   * Inserts node(s) before the current node and removes the current node.
   *
   * @param {...Node} nodes Mode(s) to replace current one.
   *
   * @example
   * if (atrule.name === 'mixin') {
   *   atrule.replaceWith(mixinRules[atrule.params])
   * }
   *
   * @return {Node} Current node to methods chain.
   */


  _proto.replaceWith = function replaceWith() {
    if (this.parent) {
      for (var _len = arguments.length, nodes = new Array(_len), _key = 0; _key < _len; _key++) {
        nodes[_key] = arguments[_key];
      }

      for (var _i = 0; _i < nodes.length; _i++) {
        var node = nodes[_i];
        this.parent.insertBefore(this, node);
      }

      this.remove();
    }

    return this;
  };
  /**
   * Returns the next child of the node’s parent.
   * Returns `undefined` if the current node is the last child.
   *
   * @return {Node|undefined} Next node.
   *
   * @example
   * if (comment.text === 'delete next') {
   *   const next = comment.next()
   *   if (next) {
   *     next.remove()
   *   }
   * }
   */


  _proto.next = function next() {
    if (!this.parent) return undefined;
    var index = this.parent.index(this);
    return this.parent.nodes[index + 1];
  };
  /**
   * Returns the previous child of the node’s parent.
   * Returns `undefined` if the current node is the first child.
   *
   * @return {Node|undefined} Previous node.
   *
   * @example
   * const annotation = decl.prev()
   * if (annotation.type === 'comment') {
   *   readAnnotation(annotation.text)
   * }
   */


  _proto.prev = function prev() {
    if (!this.parent) return undefined;
    var index = this.parent.index(this);
    return this.parent.nodes[index - 1];
  };
  /**
   * Insert new node before current node to current node’s parent.
   *
   * Just alias for `node.parent.insertBefore(node, add)`.
   *
   * @param {Node|object|string|Node[]} add New node.
   *
   * @return {Node} This node for methods chain.
   *
   * @example
   * decl.before('content: ""')
   */


  _proto.before = function before(add) {
    this.parent.insertBefore(this, add);
    return this;
  };
  /**
   * Insert new node after current node to current node’s parent.
   *
   * Just alias for `node.parent.insertAfter(node, add)`.
   *
   * @param {Node|object|string|Node[]} add New node.
   *
   * @return {Node} This node for methods chain.
   *
   * @example
   * decl.after('color: black')
   */


  _proto.after = function after(add) {
    this.parent.insertAfter(this, add);
    return this;
  };

  _proto.toJSON = function toJSON() {
    var fixed = {};

    for (var name in this) {
      if (!this.hasOwnProperty(name)) continue;
      if (name === 'parent') continue;
      var value = this[name];

      if (value instanceof Array) {
        fixed[name] = value.map(function (i) {
          if (_typeof(i) === 'object' && i.toJSON) {
            return i.toJSON();
          } else {
            return i;
          }
        });
      } else if (_typeof(value) === 'object' && value.toJSON) {
        fixed[name] = value.toJSON();
      } else {
        fixed[name] = value;
      }
    }

    return fixed;
  };
  /**
   * Returns a {@link Node#raws} value. If the node is missing
   * the code style property (because the node was manually built or cloned),
   * PostCSS will try to autodetect the code style property by looking
   * at other nodes in the tree.
   *
   * @param {string} prop          Name of code style property.
   * @param {string} [defaultType] Name of default value, it can be missed
   *                               if the value is the same as prop.
   *
   * @example
   * const root = postcss.parse('a { background: white }')
   * root.nodes[0].append({ prop: 'color', value: 'black' })
   * root.nodes[0].nodes[1].raws.before   //=> undefined
   * root.nodes[0].nodes[1].raw('before') //=> ' '
   *
   * @return {string} Code style value.
   */


  _proto.raw = function raw(prop, defaultType) {
    var str = new _stringifier.default();
    return str.raw(this, prop, defaultType);
  };
  /**
   * Finds the Root instance of the node’s tree.
   *
   * @example
   * root.nodes[0].nodes[0].root() === root
   *
   * @return {Root} Root parent.
   */


  _proto.root = function root() {
    var result = this;

    while (result.parent) {
      result = result.parent;
    }

    return result;
  };
  /**
   * Clear the code style properties for the node and its children.
   *
   * @param {boolean} [keepBetween] Keep the raws.between symbols.
   *
   * @return {undefined}
   *
   * @example
   * node.raws.before  //=> ' '
   * node.cleanRaws()
   * node.raws.before  //=> undefined
   */


  _proto.cleanRaws = function cleanRaws(keepBetween) {
    delete this.raws.before;
    delete this.raws.after;
    if (!keepBetween) delete this.raws.between;
  };

  _proto.positionInside = function positionInside(index) {
    var string = this.toString();
    var column = this.source.start.column;
    var line = this.source.start.line;

    for (var i = 0; i < index; i++) {
      if (string[i] === '\n') {
        column = 1;
        line += 1;
      } else {
        column += 1;
      }
    }

    return {
      line: line,
      column: column
    };
  };

  _proto.positionBy = function positionBy(opts) {
    var pos = this.source.start;

    if (opts.index) {
      pos = this.positionInside(opts.index);
    } else if (opts.word) {
      var index = this.toString().indexOf(opts.word);
      if (index !== -1) pos = this.positionInside(index);
    }

    return pos;
  };
  /**
   * @memberof Node#
   * @member {string} type String representing the node’s type.
   *                       Possible values are `root`, `atrule`, `rule`,
   *                       `decl`, or `comment`.
   *
   * @example
   * postcss.decl({ prop: 'color', value: 'black' }).type //=> 'decl'
   */

  /**
   * @memberof Node#
   * @member {Container} parent The node’s parent node.
   *
   * @example
   * root.nodes[0].parent === root
   */

  /**
   * @memberof Node#
   * @member {source} source The input source of the node.
   *
   * The property is used in source map generation.
   *
   * If you create a node manually (e.g., with `postcss.decl()`),
   * that node will not have a `source` property and will be absent
   * from the source map. For this reason, the plugin developer should
   * consider cloning nodes to create new ones (in which case the new node’s
   * source will reference the original, cloned node) or setting
   * the `source` property manually.
   *
   * ```js
   * // Bad
   * const prefixed = postcss.decl({
   *   prop: '-moz-' + decl.prop,
   *   value: decl.value
   * })
   *
   * // Good
   * const prefixed = decl.clone({ prop: '-moz-' + decl.prop })
   * ```
   *
   * ```js
   * if (atrule.name === 'add-link') {
   *   const rule = postcss.rule({ selector: 'a', source: atrule.source })
   *   atrule.parent.insertBefore(atrule, rule)
   * }
   * ```
   *
   * @example
   * decl.source.input.from //=> '/home/ai/a.sass'
   * decl.source.start      //=> { line: 10, column: 2 }
   * decl.source.end        //=> { line: 10, column: 12 }
   */

  /**
   * @memberof Node#
   * @member {object} raws Information to generate byte-to-byte equal
   *                       node string as it was in the origin input.
   *
   * Every parser saves its own properties,
   * but the default CSS parser uses:
   *
   * * `before`: the space symbols before the node. It also stores `*`
   *   and `_` symbols before the declaration (IE hack).
   * * `after`: the space symbols after the last child of the node
   *   to the end of the node.
   * * `between`: the symbols between the property and value
   *   for declarations, selector and `{` for rules, or last parameter
   *   and `{` for at-rules.
   * * `semicolon`: contains true if the last child has
   *   an (optional) semicolon.
   * * `afterName`: the space between the at-rule name and its parameters.
   * * `left`: the space symbols between `/*` and the comment’s text.
   * * `right`: the space symbols between the comment’s text
   *   and <code>*&#47;</code>.
   * * `important`: the content of the important statement,
   *   if it is not just `!important`.
   *
   * PostCSS cleans selectors, declaration values and at-rule parameters
   * from comments and extra spaces, but it stores origin content in raws
   * properties. As such, if you don’t change a declaration’s value,
   * PostCSS will use the raw value with comments.
   *
   * @example
   * const root = postcss.parse('a {\n  color:black\n}')
   * root.first.first.raws //=> { before: '\n  ', between: ':' }
   */


  return Node;
}();

var _default = Node;
/**
 * @typedef {object} position
 * @property {number} line   Source line in file.
 * @property {number} column Source column in file.
 */

/**
 * @typedef {object} source
 * @property {Input} input    {@link Input} with input file
 * @property {position} start The starting position of the node’s source.
 * @property {position} end   The ending position of the node’s source.
 */

exports.default = _default;
module.exports = exports.default;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.__esModule = true;

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _warnOnce = __webpack_require__(4);

var _warnOnce2 = _interopRequireDefault(_warnOnce);

var _node = __webpack_require__(22);

var _node2 = _interopRequireDefault(_node);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
/**
 * Represents a comment between declarations or statements (rule and at-rules).
 *
 * Comments inside selectors, at-rule parameters, or declaration values
 * will be stored in the `raws` properties explained above.
 *
 * @extends Node
 */


var Comment = function (_Node) {
  _inherits(Comment, _Node);

  function Comment(defaults) {
    _classCallCheck(this, Comment);

    var _this = _possibleConstructorReturn(this, _Node.call(this, defaults));

    _this.type = 'comment';
    return _this;
  }

  _createClass(Comment, [{
    key: 'left',
    get: function get() {
      (0, _warnOnce2.default)('Comment#left was deprecated. Use Comment#raws.left');
      return this.raws.left;
    },
    set: function set(val) {
      (0, _warnOnce2.default)('Comment#left was deprecated. Use Comment#raws.left');
      this.raws.left = val;
    }
  }, {
    key: 'right',
    get: function get() {
      (0, _warnOnce2.default)('Comment#right was deprecated. Use Comment#raws.right');
      return this.raws.right;
    },
    set: function set(val) {
      (0, _warnOnce2.default)('Comment#right was deprecated. Use Comment#raws.right');
      this.raws.right = val;
    }
    /**
     * @memberof Comment#
     * @member {string} text - the comment’s text
     */

    /**
     * @memberof Comment#
     * @member {object} raws - Information to generate byte-to-byte equal
     *                         node string as it was in the origin input.
     *
     * Every parser saves its own properties,
     * but the default CSS parser uses:
     *
     * * `before`: the space symbols before the node.
     * * `left`: the space symbols between `/*` and the comment’s text.
     * * `right`: the space symbols between the comment’s text.
     */

  }]);

  return Comment;
}(_node2.default);

exports.default = Comment;
module.exports = exports['default'];

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

exports.__esModule = true;

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _cssSyntaxError = __webpack_require__(73);

var _cssSyntaxError2 = _interopRequireDefault(_cssSyntaxError);

var _stringifier = __webpack_require__(24);

var _stringifier2 = _interopRequireDefault(_stringifier);

var _stringify = __webpack_require__(82);

var _stringify2 = _interopRequireDefault(_stringify);

var _warnOnce = __webpack_require__(4);

var _warnOnce2 = _interopRequireDefault(_warnOnce);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var cloneNode = function cloneNode(obj, parent) {
  var cloned = new obj.constructor();

  for (var i in obj) {
    if (!obj.hasOwnProperty(i)) continue;
    var value = obj[i];
    var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);

    if (i === 'parent' && type === 'object') {
      if (parent) cloned[i] = parent;
    } else if (i === 'source') {
      cloned[i] = value;
    } else if (value instanceof Array) {
      cloned[i] = value.map(function (j) {
        return cloneNode(j, cloned);
      });
    } else if (i !== 'before' && i !== 'after' && i !== 'between' && i !== 'semicolon') {
      if (type === 'object' && value !== null) value = cloneNode(value);
      cloned[i] = value;
    }
  }

  return cloned;
};
/**
 * All node classes inherit the following common methods.
 *
 * @abstract
 */


var Node = function () {
  /**
   * @param {object} [defaults] - value for node properties
   */
  function Node() {
    var defaults = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Node);

    this.raws = {};

    if ((typeof defaults === 'undefined' ? 'undefined' : _typeof(defaults)) !== 'object' && typeof defaults !== 'undefined') {
      throw new Error('PostCSS nodes constructor accepts object, not ' + JSON.stringify(defaults));
    }

    for (var name in defaults) {
      this[name] = defaults[name];
    }
  }
  /**
   * Returns a CssSyntaxError instance containing the original position
   * of the node in the source, showing line and column numbers and also
   * a small excerpt to facilitate debugging.
   *
   * If present, an input source map will be used to get the original position
   * of the source, even from a previous compilation step
   * (e.g., from Sass compilation).
   *
   * This method produces very useful error messages.
   *
   * @param {string} message     - error description
   * @param {object} [opts]      - options
   * @param {string} opts.plugin - plugin name that created this error.
   *                               PostCSS will set it automatically.
   * @param {string} opts.word   - a word inside a node’s string that should
   *                               be highlighted as the source of the error
   * @param {number} opts.index  - an index inside a node’s string that should
   *                               be highlighted as the source of the error
   *
   * @return {CssSyntaxError} error object to throw it
   *
   * @example
   * if ( !variables[name] ) {
   *   throw decl.error('Unknown variable ' + name, { word: name });
   *   // CssSyntaxError: postcss-vars:a.sass:4:3: Unknown variable $black
   *   //   color: $black
   *   // a
   *   //          ^
   *   //   background: white
   * }
   */


  Node.prototype.error = function error(message) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (this.source) {
      var pos = this.positionBy(opts);
      return this.source.input.error(message, pos.line, pos.column, opts);
    } else {
      return new _cssSyntaxError2.default(message);
    }
  };
  /**
   * This method is provided as a convenience wrapper for {@link Result#warn}.
   *
   * @param {Result} result      - the {@link Result} instance
   *                               that will receive the warning
   * @param {string} text        - warning message
   * @param {object} [opts]      - options
   * @param {string} opts.plugin - plugin name that created this warning.
   *                               PostCSS will set it automatically.
   * @param {string} opts.word   - a word inside a node’s string that should
   *                               be highlighted as the source of the warning
   * @param {number} opts.index  - an index inside a node’s string that should
   *                               be highlighted as the source of the warning
   *
   * @return {Warning} created warning object
   *
   * @example
   * const plugin = postcss.plugin('postcss-deprecated', () => {
   *   return (root, result) => {
   *     root.walkDecls('bad', decl => {
   *       decl.warn(result, 'Deprecated property bad');
   *     });
   *   };
   * });
   */


  Node.prototype.warn = function warn(result, text, opts) {
    var data = {
      node: this
    };

    for (var i in opts) {
      data[i] = opts[i];
    }

    return result.warn(text, data);
  };
  /**
   * Removes the node from its parent and cleans the parent properties
   * from the node and its children.
   *
   * @example
   * if ( decl.prop.match(/^-webkit-/) ) {
   *   decl.remove();
   * }
   *
   * @return {Node} node to make calls chain
   */


  Node.prototype.remove = function remove() {
    if (this.parent) {
      this.parent.removeChild(this);
    }

    this.parent = undefined;
    return this;
  };
  /**
   * Returns a CSS string representing the node.
   *
   * @param {stringifier|syntax} [stringifier] - a syntax to use
   *                                             in string generation
   *
   * @return {string} CSS string of this node
   *
   * @example
   * postcss.rule({ selector: 'a' }).toString() //=> "a {}"
   */


  Node.prototype.toString = function toString() {
    var stringifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _stringify2.default;
    if (stringifier.stringify) stringifier = stringifier.stringify;
    var result = '';
    stringifier(this, function (i) {
      result += i;
    });
    return result;
  };
  /**
   * Returns a clone of the node.
   *
   * The resulting cloned node and its (cloned) children will have
   * a clean parent and code style properties.
   *
   * @param {object} [overrides] - new properties to override in the clone.
   *
   * @example
   * const cloned = decl.clone({ prop: '-moz-' + decl.prop });
   * cloned.raws.before  //=> undefined
   * cloned.parent       //=> undefined
   * cloned.toString()   //=> -moz-transform: scale(0)
   *
   * @return {Node} clone of the node
   */


  Node.prototype.clone = function clone() {
    var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var cloned = cloneNode(this);

    for (var name in overrides) {
      cloned[name] = overrides[name];
    }

    return cloned;
  };
  /**
   * Shortcut to clone the node and insert the resulting cloned node
   * before the current node.
   *
   * @param {object} [overrides] - new properties to override in the clone.
   *
   * @example
   * decl.cloneBefore({ prop: '-moz-' + decl.prop });
   *
   * @return {Node} - new node
   */


  Node.prototype.cloneBefore = function cloneBefore() {
    var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var cloned = this.clone(overrides);
    this.parent.insertBefore(this, cloned);
    return cloned;
  };
  /**
   * Shortcut to clone the node and insert the resulting cloned node
   * after the current node.
   *
   * @param {object} [overrides] - new properties to override in the clone.
   *
   * @return {Node} - new node
   */


  Node.prototype.cloneAfter = function cloneAfter() {
    var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var cloned = this.clone(overrides);
    this.parent.insertAfter(this, cloned);
    return cloned;
  };
  /**
   * Inserts node(s) before the current node and removes the current node.
   *
   * @param {...Node} nodes - node(s) to replace current one
   *
   * @example
   * if ( atrule.name == 'mixin' ) {
   *   atrule.replaceWith(mixinRules[atrule.params]);
   * }
   *
   * @return {Node} current node to methods chain
   */


  Node.prototype.replaceWith = function replaceWith() {
    if (this.parent) {
      for (var _len = arguments.length, nodes = Array(_len), _key = 0; _key < _len; _key++) {
        nodes[_key] = arguments[_key];
      }

      for (var _iterator = nodes, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var node = _ref;
        this.parent.insertBefore(this, node);
      }

      this.remove();
    }

    return this;
  };
  /**
   * Removes the node from its current parent and inserts it
   * at the end of `newParent`.
   *
   * This will clean the `before` and `after` code {@link Node#raws} data
   * from the node and replace them with the indentation style of `newParent`.
   * It will also clean the `between` property
   * if `newParent` is in another {@link Root}.
   *
   * @param {Container} newParent - container node where the current node
   *                                will be moved
   *
   * @example
   * atrule.moveTo(atrule.root());
   *
   * @return {Node} current node to methods chain
   */


  Node.prototype.moveTo = function moveTo(newParent) {
    this.cleanRaws(this.root() === newParent.root());
    this.remove();
    newParent.append(this);
    return this;
  };
  /**
   * Removes the node from its current parent and inserts it into
   * a new parent before `otherNode`.
   *
   * This will also clean the node’s code style properties just as it would
   * in {@link Node#moveTo}.
   *
   * @param {Node} otherNode - node that will be before current node
   *
   * @return {Node} current node to methods chain
   */


  Node.prototype.moveBefore = function moveBefore(otherNode) {
    this.cleanRaws(this.root() === otherNode.root());
    this.remove();
    otherNode.parent.insertBefore(otherNode, this);
    return this;
  };
  /**
   * Removes the node from its current parent and inserts it into
   * a new parent after `otherNode`.
   *
   * This will also clean the node’s code style properties just as it would
   * in {@link Node#moveTo}.
   *
   * @param {Node} otherNode - node that will be after current node
   *
   * @return {Node} current node to methods chain
   */


  Node.prototype.moveAfter = function moveAfter(otherNode) {
    this.cleanRaws(this.root() === otherNode.root());
    this.remove();
    otherNode.parent.insertAfter(otherNode, this);
    return this;
  };
  /**
   * Returns the next child of the node’s parent.
   * Returns `undefined` if the current node is the last child.
   *
   * @return {Node|undefined} next node
   *
   * @example
   * if ( comment.text === 'delete next' ) {
   *   const next = comment.next();
   *   if ( next ) {
   *     next.remove();
   *   }
   * }
   */


  Node.prototype.next = function next() {
    var index = this.parent.index(this);
    return this.parent.nodes[index + 1];
  };
  /**
   * Returns the previous child of the node’s parent.
   * Returns `undefined` if the current node is the first child.
   *
   * @return {Node|undefined} previous node
   *
   * @example
   * const annotation = decl.prev();
   * if ( annotation.type == 'comment' ) {
   *  readAnnotation(annotation.text);
   * }
   */


  Node.prototype.prev = function prev() {
    var index = this.parent.index(this);
    return this.parent.nodes[index - 1];
  };

  Node.prototype.toJSON = function toJSON() {
    var fixed = {};

    for (var name in this) {
      if (!this.hasOwnProperty(name)) continue;
      if (name === 'parent') continue;
      var value = this[name];

      if (value instanceof Array) {
        fixed[name] = value.map(function (i) {
          if ((typeof i === 'undefined' ? 'undefined' : _typeof(i)) === 'object' && i.toJSON) {
            return i.toJSON();
          } else {
            return i;
          }
        });
      } else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.toJSON) {
        fixed[name] = value.toJSON();
      } else {
        fixed[name] = value;
      }
    }

    return fixed;
  };
  /**
   * Returns a {@link Node#raws} value. If the node is missing
   * the code style property (because the node was manually built or cloned),
   * PostCSS will try to autodetect the code style property by looking
   * at other nodes in the tree.
   *
   * @param {string} prop          - name of code style property
   * @param {string} [defaultType] - name of default value, it can be missed
   *                                 if the value is the same as prop
   *
   * @example
   * const root = postcss.parse('a { background: white }');
   * root.nodes[0].append({ prop: 'color', value: 'black' });
   * root.nodes[0].nodes[1].raws.before   //=> undefined
   * root.nodes[0].nodes[1].raw('before') //=> ' '
   *
   * @return {string} code style value
   */


  Node.prototype.raw = function raw(prop, defaultType) {
    var str = new _stringifier2.default();
    return str.raw(this, prop, defaultType);
  };
  /**
   * Finds the Root instance of the node’s tree.
   *
   * @example
   * root.nodes[0].nodes[0].root() === root
   *
   * @return {Root} root parent
   */


  Node.prototype.root = function root() {
    var result = this;

    while (result.parent) {
      result = result.parent;
    }

    return result;
  };

  Node.prototype.cleanRaws = function cleanRaws(keepBetween) {
    delete this.raws.before;
    delete this.raws.after;
    if (!keepBetween) delete this.raws.between;
  };

  Node.prototype.positionInside = function positionInside(index) {
    var string = this.toString();
    var column = this.source.start.column;
    var line = this.source.start.line;

    for (var i = 0; i < index; i++) {
      if (string[i] === '\n') {
        column = 1;
        line += 1;
      } else {
        column += 1;
      }
    }

    return {
      line: line,
      column: column
    };
  };

  Node.prototype.positionBy = function positionBy(opts) {
    var pos = this.source.start;

    if (opts.index) {
      pos = this.positionInside(opts.index);
    } else if (opts.word) {
      var index = this.toString().indexOf(opts.word);
      if (index !== -1) pos = this.positionInside(index);
    }

    return pos;
  };

  Node.prototype.removeSelf = function removeSelf() {
    (0, _warnOnce2.default)('Node#removeSelf is deprecated. Use Node#remove.');
    return this.remove();
  };

  Node.prototype.replace = function replace(nodes) {
    (0, _warnOnce2.default)('Node#replace is deprecated. Use Node#replaceWith');
    return this.replaceWith(nodes);
  };

  Node.prototype.style = function style(own, detect) {
    (0, _warnOnce2.default)('Node#style() is deprecated. Use Node#raw()');
    return this.raw(own, detect);
  };

  Node.prototype.cleanStyles = function cleanStyles(keepBetween) {
    (0, _warnOnce2.default)('Node#cleanStyles() is deprecated. Use Node#cleanRaws()');
    return this.cleanRaws(keepBetween);
  };

  _createClass(Node, [{
    key: 'before',
    get: function get() {
      (0, _warnOnce2.default)('Node#before is deprecated. Use Node#raws.before');
      return this.raws.before;
    },
    set: function set(val) {
      (0, _warnOnce2.default)('Node#before is deprecated. Use Node#raws.before');
      this.raws.before = val;
    }
  }, {
    key: 'between',
    get: function get() {
      (0, _warnOnce2.default)('Node#between is deprecated. Use Node#raws.between');
      return this.raws.between;
    },
    set: function set(val) {
      (0, _warnOnce2.default)('Node#between is deprecated. Use Node#raws.between');
      this.raws.between = val;
    }
    /**
     * @memberof Node#
     * @member {string} type - String representing the node’s type.
     *                         Possible values are `root`, `atrule`, `rule`,
     *                         `decl`, or `comment`.
     *
     * @example
     * postcss.decl({ prop: 'color', value: 'black' }).type //=> 'decl'
     */

    /**
     * @memberof Node#
     * @member {Container} parent - the node’s parent node.
     *
     * @example
     * root.nodes[0].parent == root;
     */

    /**
     * @memberof Node#
     * @member {source} source - the input source of the node
     *
     * The property is used in source map generation.
     *
     * If you create a node manually (e.g., with `postcss.decl()`),
     * that node will not have a `source` property and will be absent
     * from the source map. For this reason, the plugin developer should
     * consider cloning nodes to create new ones (in which case the new node’s
     * source will reference the original, cloned node) or setting
     * the `source` property manually.
     *
     * ```js
     * // Bad
     * const prefixed = postcss.decl({
     *   prop: '-moz-' + decl.prop,
     *   value: decl.value
     * });
     *
     * // Good
     * const prefixed = decl.clone({ prop: '-moz-' + decl.prop });
     * ```
     *
     * ```js
     * if ( atrule.name == 'add-link' ) {
     *   const rule = postcss.rule({ selector: 'a', source: atrule.source });
     *   atrule.parent.insertBefore(atrule, rule);
     * }
     * ```
     *
     * @example
     * decl.source.input.from //=> '/home/ai/a.sass'
     * decl.source.start      //=> { line: 10, column: 2 }
     * decl.source.end        //=> { line: 10, column: 12 }
     */

    /**
     * @memberof Node#
     * @member {object} raws - Information to generate byte-to-byte equal
     *                         node string as it was in the origin input.
     *
     * Every parser saves its own properties,
     * but the default CSS parser uses:
     *
     * * `before`: the space symbols before the node. It also stores `*`
     *   and `_` symbols before the declaration (IE hack).
     * * `after`: the space symbols after the last child of the node
     *   to the end of the node.
     * * `between`: the symbols between the property and value
     *   for declarations, selector and `{` for rules, or last parameter
     *   and `{` for at-rules.
     * * `semicolon`: contains true if the last child has
     *   an (optional) semicolon.
     * * `afterName`: the space between the at-rule name and its parameters.
     * * `left`: the space symbols between `/*` and the comment’s text.
     * * `right`: the space symbols between the comment’s text
     *   and <code>*&#47;</code>.
     * * `important`: the content of the important statement,
     *   if it is not just `!important`.
     *
     * PostCSS cleans selectors, declaration values and at-rule parameters
     * from comments and extra spaces, but it stores origin content in raws
     * properties. As such, if you don’t change a declaration’s value,
     * PostCSS will use the raw value with comments.
     *
     * @example
     * const root = postcss.parse('a {\n  color:black\n}')
     * root.first.first.raws //=> { before: '\n  ', between: ':' }
     */

  }]);

  return Node;
}();

exports.default = Node;
/**
 * @typedef {object} position
 * @property {number} line   - source line in file
 * @property {number} column - source column in file
 */

/**
 * @typedef {object} source
 * @property {Input} input    - {@link Input} with input file
 * @property {position} start - The starting position of the node’s source
 * @property {position} end   - The ending position of the node’s source
 */

module.exports = exports['default'];

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _cssSyntaxError = __webpack_require__(73);

var _cssSyntaxError2 = _interopRequireDefault(_cssSyntaxError);

var _previousMap = __webpack_require__(149);

var _previousMap2 = _interopRequireDefault(_previousMap);

var _path = __webpack_require__(6);

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var sequence = 0;
/**
 * Represents the source CSS.
 *
 * @example
 * const root  = postcss.parse(css, { from: file });
 * const input = root.source.input;
 */

var Input = function () {
  /**
   * @param {string} css    - input CSS source
   * @param {object} [opts] - {@link Processor#process} options
   */
  function Input(css) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Input);
    /**
     * @member {string} - input CSS source
     *
     * @example
     * const input = postcss.parse('a{}', { from: file }).input;
     * input.css //=> "a{}";
     */


    this.css = css.toString();

    if (this.css[0] === "\uFEFF" || this.css[0] === "\uFFFE") {
      this.css = this.css.slice(1);
    }

    if (opts.from) {
      if (/^\w+:\/\//.test(opts.from)) {
        /**
         * @member {string} - The absolute path to the CSS source file
         *                    defined with the `from` option.
         *
         * @example
         * const root = postcss.parse(css, { from: 'a.css' });
         * root.source.input.file //=> '/home/ai/a.css'
         */
        this.file = opts.from;
      } else {
        this.file = _path2.default.resolve(opts.from);
      }
    }

    var map = new _previousMap2.default(this.css, opts);

    if (map.text) {
      /**
       * @member {PreviousMap} - The input source map passed from
       *                         a compilation step before PostCSS
       *                         (for example, from Sass compiler).
       *
       * @example
       * root.source.input.map.consumer().sources //=> ['a.sass']
       */
      this.map = map;
      var file = map.consumer().file;
      if (!this.file && file) this.file = this.mapResolve(file);
    }

    if (!this.file) {
      sequence += 1;
      /**
       * @member {string} - The unique ID of the CSS source. It will be
       *                    created if `from` option is not provided
       *                    (because PostCSS does not know the file path).
       *
       * @example
       * const root = postcss.parse(css);
       * root.source.input.file //=> undefined
       * root.source.input.id   //=> "<input css 1>"
       */

      this.id = '<input css ' + sequence + '>';
    }

    if (this.map) this.map.file = this.from;
  }

  Input.prototype.error = function error(message, line, column) {
    var opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var result = void 0;
    var origin = this.origin(line, column);

    if (origin) {
      result = new _cssSyntaxError2.default(message, origin.line, origin.column, origin.source, origin.file, opts.plugin);
    } else {
      result = new _cssSyntaxError2.default(message, line, column, this.css, this.file, opts.plugin);
    }

    result.input = {
      line: line,
      column: column,
      source: this.css
    };
    if (this.file) result.input.file = this.file;
    return result;
  };
  /**
   * Reads the input source map and returns a symbol position
   * in the input source (e.g., in a Sass file that was compiled
   * to CSS before being passed to PostCSS).
   *
   * @param {number} line   - line in input CSS
   * @param {number} column - column in input CSS
   *
   * @return {filePosition} position in input source
   *
   * @example
   * root.source.input.origin(1, 1) //=> { file: 'a.css', line: 3, column: 1 }
   */


  Input.prototype.origin = function origin(line, column) {
    if (!this.map) return false;
    var consumer = this.map.consumer();
    var from = consumer.originalPositionFor({
      line: line,
      column: column
    });
    if (!from.source) return false;
    var result = {
      file: this.mapResolve(from.source),
      line: from.line,
      column: from.column
    };
    var source = consumer.sourceContentFor(from.source);
    if (source) result.source = source;
    return result;
  };

  Input.prototype.mapResolve = function mapResolve(file) {
    if (/^\w+:\/\//.test(file)) {
      return file;
    } else {
      return _path2.default.resolve(this.map.consumer().sourceRoot || '.', file);
    }
  };
  /**
   * The CSS source identifier. Contains {@link Input#file} if the user
   * set the `from` option, or {@link Input#id} if they did not.
   * @type {string}
   *
   * @example
   * const root = postcss.parse(css, { from: 'a.css' });
   * root.source.input.from //=> "/home/ai/a.css"
   *
   * const root = postcss.parse(css);
   * root.source.input.from //=> "<input css 1>"
   */


  _createClass(Input, [{
    key: 'from',
    get: function get() {
      return this.file || this.id;
    }
  }]);

  return Input;
}();

exports.default = Input;
/**
 * @typedef  {object} filePosition
 * @property {string} file   - path to file
 * @property {number} line   - source line in file
 * @property {number} column - source column in file
 */

module.exports = exports['default'];

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var defaultRaw = {
  colon: ': ',
  indent: '    ',
  beforeDecl: '\n',
  beforeRule: '\n',
  beforeOpen: ' ',
  beforeClose: '\n',
  beforeComment: '\n',
  after: '\n',
  emptyBody: '',
  commentLeft: ' ',
  commentRight: ' '
};

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

var Stringifier = function () {
  function Stringifier(builder) {
    _classCallCheck(this, Stringifier);

    this.builder = builder;
  }

  Stringifier.prototype.stringify = function stringify(node, semicolon) {
    this[node.type](node, semicolon);
  };

  Stringifier.prototype.root = function root(node) {
    this.body(node);
    if (node.raws.after) this.builder(node.raws.after);
  };

  Stringifier.prototype.comment = function comment(node) {
    var left = this.raw(node, 'left', 'commentLeft');
    var right = this.raw(node, 'right', 'commentRight');
    this.builder('/*' + left + node.text + right + '*/', node);
  };

  Stringifier.prototype.decl = function decl(node, semicolon) {
    var between = this.raw(node, 'between', 'colon');
    var string = node.prop + between + this.rawValue(node, 'value');

    if (node.important) {
      string += node.raws.important || ' !important';
    }

    if (semicolon) string += ';';
    this.builder(string, node);
  };

  Stringifier.prototype.rule = function rule(node) {
    this.block(node, this.rawValue(node, 'selector'));
  };

  Stringifier.prototype.atrule = function atrule(node, semicolon) {
    var name = '@' + node.name;
    var params = node.params ? this.rawValue(node, 'params') : '';

    if (typeof node.raws.afterName !== 'undefined') {
      name += node.raws.afterName;
    } else if (params) {
      name += ' ';
    }

    if (node.nodes) {
      this.block(node, name + params);
    } else {
      var end = (node.raws.between || '') + (semicolon ? ';' : '');
      this.builder(name + params + end, node);
    }
  };

  Stringifier.prototype.body = function body(node) {
    var last = node.nodes.length - 1;

    while (last > 0) {
      if (node.nodes[last].type !== 'comment') break;
      last -= 1;
    }

    var semicolon = this.raw(node, 'semicolon');

    for (var i = 0; i < node.nodes.length; i++) {
      var child = node.nodes[i];
      var before = this.raw(child, 'before');
      if (before) this.builder(before);
      this.stringify(child, last !== i || semicolon);
    }
  };

  Stringifier.prototype.block = function block(node, start) {
    var between = this.raw(node, 'between', 'beforeOpen');
    this.builder(start + between + '{', node, 'start');
    var after = void 0;

    if (node.nodes && node.nodes.length) {
      this.body(node);
      after = this.raw(node, 'after');
    } else {
      after = this.raw(node, 'after', 'emptyBody');
    }

    if (after) this.builder(after);
    this.builder('}', node, 'end');
  };

  Stringifier.prototype.raw = function raw(node, own, detect) {
    var value = void 0;
    if (!detect) detect = own; // Already had

    if (own) {
      value = node.raws[own];
      if (typeof value !== 'undefined') return value;
    }

    var parent = node.parent; // Hack for first rule in CSS

    if (detect === 'before') {
      if (!parent || parent.type === 'root' && parent.first === node) {
        return '';
      }
    } // Floating child without parent


    if (!parent) return defaultRaw[detect]; // Detect style by other nodes

    var root = node.root();
    if (!root.rawCache) root.rawCache = {};

    if (typeof root.rawCache[detect] !== 'undefined') {
      return root.rawCache[detect];
    }

    if (detect === 'before' || detect === 'after') {
      return this.beforeAfter(node, detect);
    } else {
      var method = 'raw' + capitalize(detect);

      if (this[method]) {
        value = this[method](root, node);
      } else {
        root.walk(function (i) {
          value = i.raws[own];
          if (typeof value !== 'undefined') return false;
        });
      }
    }

    if (typeof value === 'undefined') value = defaultRaw[detect];
    root.rawCache[detect] = value;
    return value;
  };

  Stringifier.prototype.rawSemicolon = function rawSemicolon(root) {
    var value = void 0;
    root.walk(function (i) {
      if (i.nodes && i.nodes.length && i.last.type === 'decl') {
        value = i.raws.semicolon;
        if (typeof value !== 'undefined') return false;
      }
    });
    return value;
  };

  Stringifier.prototype.rawEmptyBody = function rawEmptyBody(root) {
    var value = void 0;
    root.walk(function (i) {
      if (i.nodes && i.nodes.length === 0) {
        value = i.raws.after;
        if (typeof value !== 'undefined') return false;
      }
    });
    return value;
  };

  Stringifier.prototype.rawIndent = function rawIndent(root) {
    if (root.raws.indent) return root.raws.indent;
    var value = void 0;
    root.walk(function (i) {
      var p = i.parent;

      if (p && p !== root && p.parent && p.parent === root) {
        if (typeof i.raws.before !== 'undefined') {
          var parts = i.raws.before.split('\n');
          value = parts[parts.length - 1];
          value = value.replace(/[^\s]/g, '');
          return false;
        }
      }
    });
    return value;
  };

  Stringifier.prototype.rawBeforeComment = function rawBeforeComment(root, node) {
    var value = void 0;
    root.walkComments(function (i) {
      if (typeof i.raws.before !== 'undefined') {
        value = i.raws.before;

        if (value.indexOf('\n') !== -1) {
          value = value.replace(/[^\n]+$/, '');
        }

        return false;
      }
    });

    if (typeof value === 'undefined') {
      value = this.raw(node, null, 'beforeDecl');
    }

    return value;
  };

  Stringifier.prototype.rawBeforeDecl = function rawBeforeDecl(root, node) {
    var value = void 0;
    root.walkDecls(function (i) {
      if (typeof i.raws.before !== 'undefined') {
        value = i.raws.before;

        if (value.indexOf('\n') !== -1) {
          value = value.replace(/[^\n]+$/, '');
        }

        return false;
      }
    });

    if (typeof value === 'undefined') {
      value = this.raw(node, null, 'beforeRule');
    }

    return value;
  };

  Stringifier.prototype.rawBeforeRule = function rawBeforeRule(root) {
    var value = void 0;
    root.walk(function (i) {
      if (i.nodes && (i.parent !== root || root.first !== i)) {
        if (typeof i.raws.before !== 'undefined') {
          value = i.raws.before;

          if (value.indexOf('\n') !== -1) {
            value = value.replace(/[^\n]+$/, '');
          }

          return false;
        }
      }
    });
    return value;
  };

  Stringifier.prototype.rawBeforeClose = function rawBeforeClose(root) {
    var value = void 0;
    root.walk(function (i) {
      if (i.nodes && i.nodes.length > 0) {
        if (typeof i.raws.after !== 'undefined') {
          value = i.raws.after;

          if (value.indexOf('\n') !== -1) {
            value = value.replace(/[^\n]+$/, '');
          }

          return false;
        }
      }
    });
    return value;
  };

  Stringifier.prototype.rawBeforeOpen = function rawBeforeOpen(root) {
    var value = void 0;
    root.walk(function (i) {
      if (i.type !== 'decl') {
        value = i.raws.between;
        if (typeof value !== 'undefined') return false;
      }
    });
    return value;
  };

  Stringifier.prototype.rawColon = function rawColon(root) {
    var value = void 0;
    root.walkDecls(function (i) {
      if (typeof i.raws.between !== 'undefined') {
        value = i.raws.between.replace(/[^\s:]/g, '');
        return false;
      }
    });
    return value;
  };

  Stringifier.prototype.beforeAfter = function beforeAfter(node, detect) {
    var value = void 0;

    if (node.type === 'decl') {
      value = this.raw(node, null, 'beforeDecl');
    } else if (node.type === 'comment') {
      value = this.raw(node, null, 'beforeComment');
    } else if (detect === 'before') {
      value = this.raw(node, null, 'beforeRule');
    } else {
      value = this.raw(node, null, 'beforeClose');
    }

    var buf = node.parent;
    var depth = 0;

    while (buf && buf.type !== 'root') {
      depth += 1;
      buf = buf.parent;
    }

    if (value.indexOf('\n') !== -1) {
      var indent = this.raw(node, null, 'indent');

      if (indent.length) {
        for (var step = 0; step < depth; step++) {
          value += indent;
        }
      }
    }

    return value;
  };

  Stringifier.prototype.rawValue = function rawValue(node, prop) {
    var value = node[prop];
    var raw = node.raws[prop];

    if (raw && raw.value === value) {
      return raw.raw;
    } else {
      return value;
    }
  };

  return Stringifier;
}();

exports.default = Stringifier;
module.exports = exports['default'];

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.__esModule = true;

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _declaration = __webpack_require__(83);

var _declaration2 = _interopRequireDefault(_declaration);

var _warnOnce = __webpack_require__(4);

var _warnOnce2 = _interopRequireDefault(_warnOnce);

var _comment = __webpack_require__(21);

var _comment2 = _interopRequireDefault(_comment);

var _node = __webpack_require__(22);

var _node2 = _interopRequireDefault(_node);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function cleanSource(nodes) {
  return nodes.map(function (i) {
    if (i.nodes) i.nodes = cleanSource(i.nodes);
    delete i.source;
    return i;
  });
}
/**
 * The {@link Root}, {@link AtRule}, and {@link Rule} container nodes
 * inherit some common methods to help work with their children.
 *
 * Note that all containers can store any content. If you write a rule inside
 * a rule, PostCSS will parse it.
 *
 * @extends Node
 * @abstract
 */


var Container = function (_Node) {
  _inherits(Container, _Node);

  function Container() {
    _classCallCheck(this, Container);

    return _possibleConstructorReturn(this, _Node.apply(this, arguments));
  }

  Container.prototype.push = function push(child) {
    child.parent = this;
    this.nodes.push(child);
    return this;
  };
  /**
   * Iterates through the container’s immediate children,
   * calling `callback` for each child.
   *
   * Returning `false` in the callback will break iteration.
   *
   * This method only iterates through the container’s immediate children.
   * If you need to recursively iterate through all the container’s descendant
   * nodes, use {@link Container#walk}.
   *
   * Unlike the for `{}`-cycle or `Array#forEach` this iterator is safe
   * if you are mutating the array of child nodes during iteration.
   * PostCSS will adjust the current index to match the mutations.
   *
   * @param {childIterator} callback - iterator receives each node and index
   *
   * @return {false|undefined} returns `false` if iteration was broke
   *
   * @example
   * const root = postcss.parse('a { color: black; z-index: 1 }');
   * const rule = root.first;
   *
   * for ( let decl of rule.nodes ) {
   *     decl.cloneBefore({ prop: '-webkit-' + decl.prop });
   *     // Cycle will be infinite, because cloneBefore moves the current node
   *     // to the next index
   * }
   *
   * rule.each(decl => {
   *     decl.cloneBefore({ prop: '-webkit-' + decl.prop });
   *     // Will be executed only for color and z-index
   * });
   */


  Container.prototype.each = function each(callback) {
    if (!this.lastEach) this.lastEach = 0;
    if (!this.indexes) this.indexes = {};
    this.lastEach += 1;
    var id = this.lastEach;
    this.indexes[id] = 0;
    if (!this.nodes) return undefined;
    var index = void 0,
        result = void 0;

    while (this.indexes[id] < this.nodes.length) {
      index = this.indexes[id];
      result = callback(this.nodes[index], index);
      if (result === false) break;
      this.indexes[id] += 1;
    }

    delete this.indexes[id];
    return result;
  };
  /**
   * Traverses the container’s descendant nodes, calling callback
   * for each node.
   *
   * Like container.each(), this method is safe to use
   * if you are mutating arrays during iteration.
   *
   * If you only need to iterate through the container’s immediate children,
   * use {@link Container#each}.
   *
   * @param {childIterator} callback - iterator receives each node and index
   *
   * @return {false|undefined} returns `false` if iteration was broke
   *
   * @example
   * root.walk(node => {
   *   // Traverses all descendant nodes.
   * });
   */


  Container.prototype.walk = function walk(callback) {
    return this.each(function (child, i) {
      var result = callback(child, i);

      if (result !== false && child.walk) {
        result = child.walk(callback);
      }

      return result;
    });
  };
  /**
   * Traverses the container’s descendant nodes, calling callback
   * for each declaration node.
   *
   * If you pass a filter, iteration will only happen over declarations
   * with matching properties.
   *
   * Like {@link Container#each}, this method is safe
   * to use if you are mutating arrays during iteration.
   *
   * @param {string|RegExp} [prop]   - string or regular expression
   *                                   to filter declarations by property name
   * @param {childIterator} callback - iterator receives each node and index
   *
   * @return {false|undefined} returns `false` if iteration was broke
   *
   * @example
   * root.walkDecls(decl => {
   *   checkPropertySupport(decl.prop);
   * });
   *
   * root.walkDecls('border-radius', decl => {
   *   decl.remove();
   * });
   *
   * root.walkDecls(/^background/, decl => {
   *   decl.value = takeFirstColorFromGradient(decl.value);
   * });
   */


  Container.prototype.walkDecls = function walkDecls(prop, callback) {
    if (!callback) {
      callback = prop;
      return this.walk(function (child, i) {
        if (child.type === 'decl') {
          return callback(child, i);
        }
      });
    } else if (prop instanceof RegExp) {
      return this.walk(function (child, i) {
        if (child.type === 'decl' && prop.test(child.prop)) {
          return callback(child, i);
        }
      });
    } else {
      return this.walk(function (child, i) {
        if (child.type === 'decl' && child.prop === prop) {
          return callback(child, i);
        }
      });
    }
  };
  /**
   * Traverses the container’s descendant nodes, calling callback
   * for each rule node.
   *
   * If you pass a filter, iteration will only happen over rules
   * with matching selectors.
   *
   * Like {@link Container#each}, this method is safe
   * to use if you are mutating arrays during iteration.
   *
   * @param {string|RegExp} [selector] - string or regular expression
   *                                     to filter rules by selector
   * @param {childIterator} callback   - iterator receives each node and index
   *
   * @return {false|undefined} returns `false` if iteration was broke
   *
   * @example
   * const selectors = [];
   * root.walkRules(rule => {
   *   selectors.push(rule.selector);
   * });
   * console.log(`Your CSS uses ${selectors.length} selectors`);
   */


  Container.prototype.walkRules = function walkRules(selector, callback) {
    if (!callback) {
      callback = selector;
      return this.walk(function (child, i) {
        if (child.type === 'rule') {
          return callback(child, i);
        }
      });
    } else if (selector instanceof RegExp) {
      return this.walk(function (child, i) {
        if (child.type === 'rule' && selector.test(child.selector)) {
          return callback(child, i);
        }
      });
    } else {
      return this.walk(function (child, i) {
        if (child.type === 'rule' && child.selector === selector) {
          return callback(child, i);
        }
      });
    }
  };
  /**
   * Traverses the container’s descendant nodes, calling callback
   * for each at-rule node.
   *
   * If you pass a filter, iteration will only happen over at-rules
   * that have matching names.
   *
   * Like {@link Container#each}, this method is safe
   * to use if you are mutating arrays during iteration.
   *
   * @param {string|RegExp} [name]   - string or regular expression
   *                                   to filter at-rules by name
   * @param {childIterator} callback - iterator receives each node and index
   *
   * @return {false|undefined} returns `false` if iteration was broke
   *
   * @example
   * root.walkAtRules(rule => {
   *   if ( isOld(rule.name) ) rule.remove();
   * });
   *
   * let first = false;
   * root.walkAtRules('charset', rule => {
   *   if ( !first ) {
   *     first = true;
   *   } else {
   *     rule.remove();
   *   }
   * });
   */


  Container.prototype.walkAtRules = function walkAtRules(name, callback) {
    if (!callback) {
      callback = name;
      return this.walk(function (child, i) {
        if (child.type === 'atrule') {
          return callback(child, i);
        }
      });
    } else if (name instanceof RegExp) {
      return this.walk(function (child, i) {
        if (child.type === 'atrule' && name.test(child.name)) {
          return callback(child, i);
        }
      });
    } else {
      return this.walk(function (child, i) {
        if (child.type === 'atrule' && child.name === name) {
          return callback(child, i);
        }
      });
    }
  };
  /**
   * Traverses the container’s descendant nodes, calling callback
   * for each comment node.
   *
   * Like {@link Container#each}, this method is safe
   * to use if you are mutating arrays during iteration.
   *
   * @param {childIterator} callback - iterator receives each node and index
   *
   * @return {false|undefined} returns `false` if iteration was broke
   *
   * @example
   * root.walkComments(comment => {
   *   comment.remove();
   * });
   */


  Container.prototype.walkComments = function walkComments(callback) {
    return this.walk(function (child, i) {
      if (child.type === 'comment') {
        return callback(child, i);
      }
    });
  };
  /**
   * Inserts new nodes to the end of the container.
   *
   * @param {...(Node|object|string|Node[])} children - new nodes
   *
   * @return {Node} this node for methods chain
   *
   * @example
   * const decl1 = postcss.decl({ prop: 'color', value: 'black' });
   * const decl2 = postcss.decl({ prop: 'background-color', value: 'white' });
   * rule.append(decl1, decl2);
   *
   * root.append({ name: 'charset', params: '"UTF-8"' });  // at-rule
   * root.append({ selector: 'a' });                       // rule
   * rule.append({ prop: 'color', value: 'black' });       // declaration
   * rule.append({ text: 'Comment' })                      // comment
   *
   * root.append('a {}');
   * root.first.append('color: black; z-index: 1');
   */


  Container.prototype.append = function append() {
    for (var _len = arguments.length, children = Array(_len), _key = 0; _key < _len; _key++) {
      children[_key] = arguments[_key];
    }

    for (var _iterator = children, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var child = _ref;
      var nodes = this.normalize(child, this.last);

      for (var _iterator2 = nodes, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        var _ref2;

        if (_isArray2) {
          if (_i2 >= _iterator2.length) break;
          _ref2 = _iterator2[_i2++];
        } else {
          _i2 = _iterator2.next();
          if (_i2.done) break;
          _ref2 = _i2.value;
        }

        var node = _ref2;
        this.nodes.push(node);
      }
    }

    return this;
  };
  /**
   * Inserts new nodes to the start of the container.
   *
   * @param {...(Node|object|string|Node[])} children - new nodes
   *
   * @return {Node} this node for methods chain
   *
   * @example
   * const decl1 = postcss.decl({ prop: 'color', value: 'black' });
   * const decl2 = postcss.decl({ prop: 'background-color', value: 'white' });
   * rule.prepend(decl1, decl2);
   *
   * root.append({ name: 'charset', params: '"UTF-8"' });  // at-rule
   * root.append({ selector: 'a' });                       // rule
   * rule.append({ prop: 'color', value: 'black' });       // declaration
   * rule.append({ text: 'Comment' })                      // comment
   *
   * root.append('a {}');
   * root.first.append('color: black; z-index: 1');
   */


  Container.prototype.prepend = function prepend() {
    for (var _len2 = arguments.length, children = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      children[_key2] = arguments[_key2];
    }

    children = children.reverse();

    for (var _iterator3 = children, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
      var _ref3;

      if (_isArray3) {
        if (_i3 >= _iterator3.length) break;
        _ref3 = _iterator3[_i3++];
      } else {
        _i3 = _iterator3.next();
        if (_i3.done) break;
        _ref3 = _i3.value;
      }

      var child = _ref3;
      var nodes = this.normalize(child, this.first, 'prepend').reverse();

      for (var _iterator4 = nodes, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
        var _ref4;

        if (_isArray4) {
          if (_i4 >= _iterator4.length) break;
          _ref4 = _iterator4[_i4++];
        } else {
          _i4 = _iterator4.next();
          if (_i4.done) break;
          _ref4 = _i4.value;
        }

        var node = _ref4;
        this.nodes.unshift(node);
      }

      for (var id in this.indexes) {
        this.indexes[id] = this.indexes[id] + nodes.length;
      }
    }

    return this;
  };

  Container.prototype.cleanRaws = function cleanRaws(keepBetween) {
    _Node.prototype.cleanRaws.call(this, keepBetween);

    if (this.nodes) {
      for (var _iterator5 = this.nodes, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
        var _ref5;

        if (_isArray5) {
          if (_i5 >= _iterator5.length) break;
          _ref5 = _iterator5[_i5++];
        } else {
          _i5 = _iterator5.next();
          if (_i5.done) break;
          _ref5 = _i5.value;
        }

        var node = _ref5;
        node.cleanRaws(keepBetween);
      }
    }
  };
  /**
   * Insert new node before old node within the container.
   *
   * @param {Node|number} exist             - child or child’s index.
   * @param {Node|object|string|Node[]} add - new node
   *
   * @return {Node} this node for methods chain
   *
   * @example
   * rule.insertBefore(decl, decl.clone({ prop: '-webkit-' + decl.prop }));
   */


  Container.prototype.insertBefore = function insertBefore(exist, add) {
    exist = this.index(exist);
    var type = exist === 0 ? 'prepend' : false;
    var nodes = this.normalize(add, this.nodes[exist], type).reverse();

    for (var _iterator6 = nodes, _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : _iterator6[Symbol.iterator]();;) {
      var _ref6;

      if (_isArray6) {
        if (_i6 >= _iterator6.length) break;
        _ref6 = _iterator6[_i6++];
      } else {
        _i6 = _iterator6.next();
        if (_i6.done) break;
        _ref6 = _i6.value;
      }

      var node = _ref6;
      this.nodes.splice(exist, 0, node);
    }

    var index = void 0;

    for (var id in this.indexes) {
      index = this.indexes[id];

      if (exist <= index) {
        this.indexes[id] = index + nodes.length;
      }
    }

    return this;
  };
  /**
   * Insert new node after old node within the container.
   *
   * @param {Node|number} exist             - child or child’s index
   * @param {Node|object|string|Node[]} add - new node
   *
   * @return {Node} this node for methods chain
   */


  Container.prototype.insertAfter = function insertAfter(exist, add) {
    exist = this.index(exist);
    var nodes = this.normalize(add, this.nodes[exist]).reverse();

    for (var _iterator7 = nodes, _isArray7 = Array.isArray(_iterator7), _i7 = 0, _iterator7 = _isArray7 ? _iterator7 : _iterator7[Symbol.iterator]();;) {
      var _ref7;

      if (_isArray7) {
        if (_i7 >= _iterator7.length) break;
        _ref7 = _iterator7[_i7++];
      } else {
        _i7 = _iterator7.next();
        if (_i7.done) break;
        _ref7 = _i7.value;
      }

      var node = _ref7;
      this.nodes.splice(exist + 1, 0, node);
    }

    var index = void 0;

    for (var id in this.indexes) {
      index = this.indexes[id];

      if (exist < index) {
        this.indexes[id] = index + nodes.length;
      }
    }

    return this;
  };

  Container.prototype.remove = function remove(child) {
    if (typeof child !== 'undefined') {
      (0, _warnOnce2.default)('Container#remove is deprecated. ' + 'Use Container#removeChild');
      this.removeChild(child);
    } else {
      _Node.prototype.remove.call(this);
    }

    return this;
  };
  /**
   * Removes node from the container and cleans the parent properties
   * from the node and its children.
   *
   * @param {Node|number} child - child or child’s index
   *
   * @return {Node} this node for methods chain
   *
   * @example
   * rule.nodes.length  //=> 5
   * rule.removeChild(decl);
   * rule.nodes.length  //=> 4
   * decl.parent        //=> undefined
   */


  Container.prototype.removeChild = function removeChild(child) {
    child = this.index(child);
    this.nodes[child].parent = undefined;
    this.nodes.splice(child, 1);
    var index = void 0;

    for (var id in this.indexes) {
      index = this.indexes[id];

      if (index >= child) {
        this.indexes[id] = index - 1;
      }
    }

    return this;
  };
  /**
   * Removes all children from the container
   * and cleans their parent properties.
   *
   * @return {Node} this node for methods chain
   *
   * @example
   * rule.removeAll();
   * rule.nodes.length //=> 0
   */


  Container.prototype.removeAll = function removeAll() {
    for (var _iterator8 = this.nodes, _isArray8 = Array.isArray(_iterator8), _i8 = 0, _iterator8 = _isArray8 ? _iterator8 : _iterator8[Symbol.iterator]();;) {
      var _ref8;

      if (_isArray8) {
        if (_i8 >= _iterator8.length) break;
        _ref8 = _iterator8[_i8++];
      } else {
        _i8 = _iterator8.next();
        if (_i8.done) break;
        _ref8 = _i8.value;
      }

      var node = _ref8;
      node.parent = undefined;
    }

    this.nodes = [];
    return this;
  };
  /**
   * Passes all declaration values within the container that match pattern
   * through callback, replacing those values with the returned result
   * of callback.
   *
   * This method is useful if you are using a custom unit or function
   * and need to iterate through all values.
   *
   * @param {string|RegExp} pattern      - replace pattern
   * @param {object} opts                - options to speed up the search
   * @param {string|string[]} opts.props - an array of property names
   * @param {string} opts.fast           - string that’s used
   *                                       to narrow down values and speed up
                                           the regexp search
   * @param {function|string} callback   - string to replace pattern
   *                                       or callback that returns a new
   *                                       value.
   *                                       The callback will receive
   *                                       the same arguments as those
   *                                       passed to a function parameter
   *                                       of `String#replace`.
   *
   * @return {Node} this node for methods chain
   *
   * @example
   * root.replaceValues(/\d+rem/, { fast: 'rem' }, string => {
   *   return 15 * parseInt(string) + 'px';
   * });
   */


  Container.prototype.replaceValues = function replaceValues(pattern, opts, callback) {
    if (!callback) {
      callback = opts;
      opts = {};
    }

    this.walkDecls(function (decl) {
      if (opts.props && opts.props.indexOf(decl.prop) === -1) return;
      if (opts.fast && decl.value.indexOf(opts.fast) === -1) return;
      decl.value = decl.value.replace(pattern, callback);
    });
    return this;
  };
  /**
   * Returns `true` if callback returns `true`
   * for all of the container’s children.
   *
   * @param {childCondition} condition - iterator returns true or false.
   *
   * @return {boolean} is every child pass condition
   *
   * @example
   * const noPrefixes = rule.every(i => i.prop[0] !== '-');
   */


  Container.prototype.every = function every(condition) {
    return this.nodes.every(condition);
  };
  /**
   * Returns `true` if callback returns `true` for (at least) one
   * of the container’s children.
   *
   * @param {childCondition} condition - iterator returns true or false.
   *
   * @return {boolean} is some child pass condition
   *
   * @example
   * const hasPrefix = rule.some(i => i.prop[0] === '-');
   */


  Container.prototype.some = function some(condition) {
    return this.nodes.some(condition);
  };
  /**
   * Returns a `child`’s index within the {@link Container#nodes} array.
   *
   * @param {Node} child - child of the current container.
   *
   * @return {number} child index
   *
   * @example
   * rule.index( rule.nodes[2] ) //=> 2
   */


  Container.prototype.index = function index(child) {
    if (typeof child === 'number') {
      return child;
    } else {
      return this.nodes.indexOf(child);
    }
  };
  /**
   * The container’s first child.
   *
   * @type {Node}
   *
   * @example
   * rule.first == rules.nodes[0];
   */


  Container.prototype.normalize = function normalize(nodes, sample) {
    var _this2 = this;

    if (typeof nodes === 'string') {
      var parse = __webpack_require__(84);

      nodes = cleanSource(parse(nodes).nodes);
    } else if (!Array.isArray(nodes)) {
      if (nodes.type === 'root') {
        nodes = nodes.nodes;
      } else if (nodes.type) {
        nodes = [nodes];
      } else if (nodes.prop) {
        if (typeof nodes.value === 'undefined') {
          throw new Error('Value field is missed in node creation');
        } else if (typeof nodes.value !== 'string') {
          nodes.value = String(nodes.value);
        }

        nodes = [new _declaration2.default(nodes)];
      } else if (nodes.selector) {
        var Rule = __webpack_require__(10);

        nodes = [new Rule(nodes)];
      } else if (nodes.name) {
        var AtRule = __webpack_require__(26);

        nodes = [new AtRule(nodes)];
      } else if (nodes.text) {
        nodes = [new _comment2.default(nodes)];
      } else {
        throw new Error('Unknown node type in node creation');
      }
    }

    var processed = nodes.map(function (i) {
      if (typeof i.raws === 'undefined') i = _this2.rebuild(i);
      if (i.parent) i = i.clone();

      if (typeof i.raws.before === 'undefined') {
        if (sample && typeof sample.raws.before !== 'undefined') {
          i.raws.before = sample.raws.before.replace(/[^\s]/g, '');
        }
      }

      i.parent = _this2;
      return i;
    });
    return processed;
  };

  Container.prototype.rebuild = function rebuild(node, parent) {
    var _this3 = this;

    var fix = void 0;

    if (node.type === 'root') {
      var Root = __webpack_require__(27);

      fix = new Root();
    } else if (node.type === 'atrule') {
      var AtRule = __webpack_require__(26);

      fix = new AtRule();
    } else if (node.type === 'rule') {
      var Rule = __webpack_require__(10);

      fix = new Rule();
    } else if (node.type === 'decl') {
      fix = new _declaration2.default();
    } else if (node.type === 'comment') {
      fix = new _comment2.default();
    }

    for (var i in node) {
      if (i === 'nodes') {
        fix.nodes = node.nodes.map(function (j) {
          return _this3.rebuild(j, fix);
        });
      } else if (i === 'parent' && parent) {
        fix.parent = parent;
      } else if (node.hasOwnProperty(i)) {
        fix[i] = node[i];
      }
    }

    return fix;
  };

  Container.prototype.eachInside = function eachInside(callback) {
    (0, _warnOnce2.default)('Container#eachInside is deprecated. ' + 'Use Container#walk instead.');
    return this.walk(callback);
  };

  Container.prototype.eachDecl = function eachDecl(prop, callback) {
    (0, _warnOnce2.default)('Container#eachDecl is deprecated. ' + 'Use Container#walkDecls instead.');
    return this.walkDecls(prop, callback);
  };

  Container.prototype.eachRule = function eachRule(selector, callback) {
    (0, _warnOnce2.default)('Container#eachRule is deprecated. ' + 'Use Container#walkRules instead.');
    return this.walkRules(selector, callback);
  };

  Container.prototype.eachAtRule = function eachAtRule(name, callback) {
    (0, _warnOnce2.default)('Container#eachAtRule is deprecated. ' + 'Use Container#walkAtRules instead.');
    return this.walkAtRules(name, callback);
  };

  Container.prototype.eachComment = function eachComment(callback) {
    (0, _warnOnce2.default)('Container#eachComment is deprecated. ' + 'Use Container#walkComments instead.');
    return this.walkComments(callback);
  };

  _createClass(Container, [{
    key: 'first',
    get: function get() {
      if (!this.nodes) return undefined;
      return this.nodes[0];
    }
    /**
     * The container’s last child.
     *
     * @type {Node}
     *
     * @example
     * rule.last == rule.nodes[rule.nodes.length - 1];
     */

  }, {
    key: 'last',
    get: function get() {
      if (!this.nodes) return undefined;
      return this.nodes[this.nodes.length - 1];
    }
  }, {
    key: 'semicolon',
    get: function get() {
      (0, _warnOnce2.default)('Node#semicolon is deprecated. Use Node#raws.semicolon');
      return this.raws.semicolon;
    },
    set: function set(val) {
      (0, _warnOnce2.default)('Node#semicolon is deprecated. Use Node#raws.semicolon');
      this.raws.semicolon = val;
    }
  }, {
    key: 'after',
    get: function get() {
      (0, _warnOnce2.default)('Node#after is deprecated. Use Node#raws.after');
      return this.raws.after;
    },
    set: function set(val) {
      (0, _warnOnce2.default)('Node#after is deprecated. Use Node#raws.after');
      this.raws.after = val;
    }
    /**
     * @memberof Container#
     * @member {Node[]} nodes - an array containing the container’s children
     *
     * @example
     * const root = postcss.parse('a { color: black }');
     * root.nodes.length           //=> 1
     * root.nodes[0].selector      //=> 'a'
     * root.nodes[0].nodes[0].prop //=> 'color'
     */

  }]);

  return Container;
}(_node2.default);

exports.default = Container;
/**
 * @callback childCondition
 * @param {Node} node    - container child
 * @param {number} index - child index
 * @param {Node[]} nodes - all container children
 * @return {boolean}
 */

/**
 * @callback childIterator
 * @param {Node} node    - container child
 * @param {number} index - child index
 * @return {false|undefined} returning `false` will break iteration
 */

module.exports = exports['default'];

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.__esModule = true;

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _container = __webpack_require__(25);

var _container2 = _interopRequireDefault(_container);

var _warnOnce = __webpack_require__(4);

var _warnOnce2 = _interopRequireDefault(_warnOnce);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
/**
 * Represents an at-rule.
 *
 * If it’s followed in the CSS by a {} block, this node will have
 * a nodes property representing its children.
 *
 * @extends Container
 *
 * @example
 * const root = postcss.parse('@charset "UTF-8"; @media print {}');
 *
 * const charset = root.first;
 * charset.type  //=> 'atrule'
 * charset.nodes //=> undefined
 *
 * const media = root.last;
 * media.nodes   //=> []
 */


var AtRule = function (_Container) {
  _inherits(AtRule, _Container);

  function AtRule(defaults) {
    _classCallCheck(this, AtRule);

    var _this = _possibleConstructorReturn(this, _Container.call(this, defaults));

    _this.type = 'atrule';
    return _this;
  }

  AtRule.prototype.append = function append() {
    var _Container$prototype$;

    if (!this.nodes) this.nodes = [];

    for (var _len = arguments.length, children = Array(_len), _key = 0; _key < _len; _key++) {
      children[_key] = arguments[_key];
    }

    return (_Container$prototype$ = _Container.prototype.append).call.apply(_Container$prototype$, [this].concat(children));
  };

  AtRule.prototype.prepend = function prepend() {
    var _Container$prototype$2;

    if (!this.nodes) this.nodes = [];

    for (var _len2 = arguments.length, children = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      children[_key2] = arguments[_key2];
    }

    return (_Container$prototype$2 = _Container.prototype.prepend).call.apply(_Container$prototype$2, [this].concat(children));
  };

  _createClass(AtRule, [{
    key: 'afterName',
    get: function get() {
      (0, _warnOnce2.default)('AtRule#afterName was deprecated. Use AtRule#raws.afterName');
      return this.raws.afterName;
    },
    set: function set(val) {
      (0, _warnOnce2.default)('AtRule#afterName was deprecated. Use AtRule#raws.afterName');
      this.raws.afterName = val;
    }
  }, {
    key: '_params',
    get: function get() {
      (0, _warnOnce2.default)('AtRule#_params was deprecated. Use AtRule#raws.params');
      return this.raws.params;
    },
    set: function set(val) {
      (0, _warnOnce2.default)('AtRule#_params was deprecated. Use AtRule#raws.params');
      this.raws.params = val;
    }
    /**
     * @memberof AtRule#
     * @member {string} name - the at-rule’s name immediately follows the `@`
     *
     * @example
     * const root  = postcss.parse('@media print {}');
     * media.name //=> 'media'
     * const media = root.first;
     */

    /**
     * @memberof AtRule#
     * @member {string} params - the at-rule’s parameters, the values
     *                           that follow the at-rule’s name but precede
     *                           any {} block
     *
     * @example
     * const root  = postcss.parse('@media print, screen {}');
     * const media = root.first;
     * media.params //=> 'print, screen'
     */

    /**
     * @memberof AtRule#
     * @member {object} raws - Information to generate byte-to-byte equal
     *                         node string as it was in the origin input.
     *
     * Every parser saves its own properties,
     * but the default CSS parser uses:
     *
     * * `before`: the space symbols before the node. It also stores `*`
     *   and `_` symbols before the declaration (IE hack).
     * * `after`: the space symbols after the last child of the node
     *   to the end of the node.
     * * `between`: the symbols between the property and value
     *   for declarations, selector and `{` for rules, or last parameter
     *   and `{` for at-rules.
     * * `semicolon`: contains true if the last child has
     *   an (optional) semicolon.
     * * `afterName`: the space between the at-rule name and its parameters.
     *
     * PostCSS cleans at-rule parameters from comments and extra spaces,
     * but it stores origin content in raws properties.
     * As such, if you don’t change a declaration’s value,
     * PostCSS will use the raw value with comments.
     *
     * @example
     * const root = postcss.parse('  @media\nprint {\n}')
     * root.first.first.raws //=> { before: '  ',
     *                       //     between: ' ',
     *                       //     afterName: '\n',
     *                       //     after: '\n' }
     */

  }]);

  return AtRule;
}(_container2.default);

exports.default = AtRule;
module.exports = exports['default'];

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.__esModule = true;

var _container = __webpack_require__(25);

var _container2 = _interopRequireDefault(_container);

var _warnOnce = __webpack_require__(4);

var _warnOnce2 = _interopRequireDefault(_warnOnce);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
/**
 * Represents a CSS file and contains all its parsed nodes.
 *
 * @extends Container
 *
 * @example
 * const root = postcss.parse('a{color:black} b{z-index:2}');
 * root.type         //=> 'root'
 * root.nodes.length //=> 2
 */


var Root = function (_Container) {
  _inherits(Root, _Container);

  function Root(defaults) {
    _classCallCheck(this, Root);

    var _this = _possibleConstructorReturn(this, _Container.call(this, defaults));

    _this.type = 'root';
    if (!_this.nodes) _this.nodes = [];
    return _this;
  }

  Root.prototype.removeChild = function removeChild(child) {
    child = this.index(child);

    if (child === 0 && this.nodes.length > 1) {
      this.nodes[1].raws.before = this.nodes[child].raws.before;
    }

    return _Container.prototype.removeChild.call(this, child);
  };

  Root.prototype.normalize = function normalize(child, sample, type) {
    var nodes = _Container.prototype.normalize.call(this, child);

    if (sample) {
      if (type === 'prepend') {
        if (this.nodes.length > 1) {
          sample.raws.before = this.nodes[1].raws.before;
        } else {
          delete sample.raws.before;
        }
      } else if (this.first !== sample) {
        for (var _iterator = nodes, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
          var _ref;

          if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
          }

          var node = _ref;
          node.raws.before = sample.raws.before;
        }
      }
    }

    return nodes;
  };
  /**
   * Returns a {@link Result} instance representing the root’s CSS.
   *
   * @param {processOptions} [opts] - options with only `to` and `map` keys
   *
   * @return {Result} result with current root’s CSS
   *
   * @example
   * const root1 = postcss.parse(css1, { from: 'a.css' });
   * const root2 = postcss.parse(css2, { from: 'b.css' });
   * root1.append(root2);
   * const result = root1.toResult({ to: 'all.css', map: true });
   */


  Root.prototype.toResult = function toResult() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var LazyResult = __webpack_require__(86);

    var Processor = __webpack_require__(161);

    var lazy = new LazyResult(new Processor(), this, opts);
    return lazy.stringify();
  };

  Root.prototype.remove = function remove(child) {
    (0, _warnOnce2.default)('Root#remove is deprecated. Use Root#removeChild');
    this.removeChild(child);
  };

  Root.prototype.prevMap = function prevMap() {
    (0, _warnOnce2.default)('Root#prevMap is deprecated. Use Root#source.input.map');
    return this.source.input.map;
  };
  /**
   * @memberof Root#
   * @member {object} raws - Information to generate byte-to-byte equal
   *                         node string as it was in the origin input.
   *
   * Every parser saves its own properties,
   * but the default CSS parser uses:
   *
   * * `after`: the space symbols after the last child to the end of file.
   * * `semicolon`: is the last child has an (optional) semicolon.
   *
   * @example
   * postcss.parse('a {}\n').raws //=> { after: '\n' }
   * postcss.parse('a {}').raws   //=> { after: '' }
   */


  return Root;
}(_container2.default);

exports.default = Root;
module.exports = exports['default'];

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var escape = __webpack_require__(29);

var DELIMITER_MAP = {
  "---": "yaml",
  "+++": "toml"
};

function parse(text) {
  var delimiterRegex = Object.keys(DELIMITER_MAP).map(escape).join("|");
  var match = text.match( // trailing spaces after delimiters are allowed
  new RegExp("^(".concat(delimiterRegex, ")[^\\n\\S]*\\n(?:([\\s\\S]*?)\\n)?\\1[^\\n\\S]*(\\n|$)")));

  if (match === null) {
    return {
      frontMatter: null,
      content: text
    };
  }

  var raw = match[0].replace(/\n$/, "");
  var delimiter = match[1];
  var value = match[2];
  return {
    frontMatter: {
      type: DELIMITER_MAP[delimiter],
      value: value,
      raw: raw
    },
    content: match[0].replace(/[^\n]/g, " ") + text.slice(match[0].length)
  };
}

module.exports = parse;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;

module.exports = function (str) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }

  return str.replace(matchOperatorsRe, '\\$&');
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Container = __webpack_require__(1);

module.exports =
/*#__PURE__*/
function (_Container) {
  _inherits(Value, _Container);

  function Value(opts) {
    var _this;

    _classCallCheck(this, Value);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Value).call(this, opts));
    _this.type = 'value';
    _this.unbalanced = 0;
    return _this;
  }

  return Value;
}(Container);

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Container = __webpack_require__(1);

var AtWord =
/*#__PURE__*/
function (_Container) {
  _inherits(AtWord, _Container);

  function AtWord(opts) {
    var _this;

    _classCallCheck(this, AtWord);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AtWord).call(this, opts));
    _this.type = 'atword';
    return _this;
  }

  _createClass(AtWord, [{
    key: "toString",
    value: function toString() {
      var quote = this.quoted ? this.raws.quote : '';
      return [this.raws.before, '@', // we can't use String() here because it'll try using itself
      // as the constructor
      String.prototype.toString.call(this.value), this.raws.after].join('');
    }
  }]);

  return AtWord;
}(Container);

Container.registerWalker(AtWord);
module.exports = AtWord;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Container = __webpack_require__(1);

var Node = __webpack_require__(3);

var Colon =
/*#__PURE__*/
function (_Node) {
  _inherits(Colon, _Node);

  function Colon(opts) {
    var _this;

    _classCallCheck(this, Colon);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Colon).call(this, opts));
    _this.type = 'colon';
    return _this;
  }

  return Colon;
}(Node);

Container.registerWalker(Colon);
module.exports = Colon;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Container = __webpack_require__(1);

var Node = __webpack_require__(3);

var Comma =
/*#__PURE__*/
function (_Node) {
  _inherits(Comma, _Node);

  function Comma(opts) {
    var _this;

    _classCallCheck(this, Comma);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Comma).call(this, opts));
    _this.type = 'comma';
    return _this;
  }

  return Comma;
}(Node);

Container.registerWalker(Comma);
module.exports = Comma;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Container = __webpack_require__(1);

var Node = __webpack_require__(3);

var Comment =
/*#__PURE__*/
function (_Node) {
  _inherits(Comment, _Node);

  function Comment(opts) {
    var _this;

    _classCallCheck(this, Comment);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Comment).call(this, opts));
    _this.type = 'comment';
    _this.inline = opts.inline || false;
    return _this;
  }

  _createClass(Comment, [{
    key: "toString",
    value: function toString() {
      return [this.raws.before, this.inline ? '//' : '/*', String(this.value), this.inline ? '' : '*/', this.raws.after].join('');
    }
  }]);

  return Comment;
}(Node);

;
Container.registerWalker(Comment);
module.exports = Comment;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Container = __webpack_require__(1);

var FunctionNode =
/*#__PURE__*/
function (_Container) {
  _inherits(FunctionNode, _Container);

  function FunctionNode(opts) {
    var _this;

    _classCallCheck(this, FunctionNode);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FunctionNode).call(this, opts));
    _this.type = 'func'; // start off at -1 so we know there haven't been any parens added

    _this.unbalanced = -1;
    return _this;
  }

  return FunctionNode;
}(Container);

;
Container.registerWalker(FunctionNode);
module.exports = FunctionNode;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Container = __webpack_require__(1);

var Node = __webpack_require__(3);

var NumberNode =
/*#__PURE__*/
function (_Node) {
  _inherits(NumberNode, _Node);

  function NumberNode(opts) {
    var _this;

    _classCallCheck(this, NumberNode);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NumberNode).call(this, opts));
    _this.type = 'number';
    _this.unit = opts.unit || '';
    return _this;
  }

  _createClass(NumberNode, [{
    key: "toString",
    value: function toString() {
      return [this.raws.before, String(this.value), this.unit, this.raws.after].join('');
    }
  }]);

  return NumberNode;
}(Node);

;
Container.registerWalker(NumberNode);
module.exports = NumberNode;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Container = __webpack_require__(1);

var Node = __webpack_require__(3);

var Operator =
/*#__PURE__*/
function (_Node) {
  _inherits(Operator, _Node);

  function Operator(opts) {
    var _this;

    _classCallCheck(this, Operator);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Operator).call(this, opts));
    _this.type = 'operator';
    return _this;
  }

  return Operator;
}(Node);

Container.registerWalker(Operator);
module.exports = Operator;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Container = __webpack_require__(1);

var Node = __webpack_require__(3);

var Parenthesis =
/*#__PURE__*/
function (_Node) {
  _inherits(Parenthesis, _Node);

  function Parenthesis(opts) {
    var _this;

    _classCallCheck(this, Parenthesis);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Parenthesis).call(this, opts));
    _this.type = 'paren';
    _this.parenType = '';
    return _this;
  }

  return Parenthesis;
}(Node);

Container.registerWalker(Parenthesis);
module.exports = Parenthesis;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Container = __webpack_require__(1);

var Node = __webpack_require__(3);

var StringNode =
/*#__PURE__*/
function (_Node) {
  _inherits(StringNode, _Node);

  function StringNode(opts) {
    var _this;

    _classCallCheck(this, StringNode);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StringNode).call(this, opts));
    _this.type = 'string';
    return _this;
  }

  _createClass(StringNode, [{
    key: "toString",
    value: function toString() {
      var quote = this.quoted ? this.raws.quote : '';
      return [this.raws.before, quote, // we can't use String() here because it'll try using itself
      // as the constructor
      this.value + '', quote, this.raws.after].join('');
    }
  }]);

  return StringNode;
}(Node);

Container.registerWalker(StringNode);
module.exports = StringNode;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Container = __webpack_require__(1);

var Node = __webpack_require__(3);

var Word =
/*#__PURE__*/
function (_Node) {
  _inherits(Word, _Node);

  function Word(opts) {
    var _this;

    _classCallCheck(this, Word);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Word).call(this, opts));
    _this.type = 'word';
    return _this;
  }

  return Word;
}(Node);

Container.registerWalker(Word);
module.exports = Word;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Container = __webpack_require__(1);

var Node = __webpack_require__(3);

var UnicodeRange =
/*#__PURE__*/
function (_Node) {
  _inherits(UnicodeRange, _Node);

  function UnicodeRange(opts) {
    var _this;

    _classCallCheck(this, UnicodeRange);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UnicodeRange).call(this, opts));
    _this.type = 'unicode-range';
    return _this;
  }

  return UnicodeRange;
}(Node);

Container.registerWalker(UnicodeRange);
module.exports = UnicodeRange;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = function flatten(list, depth) {
  depth = typeof depth == 'number' ? depth : Infinity;

  if (!depth) {
    if (Array.isArray(list)) {
      return list.map(function (i) {
        return i;
      });
    }

    return list;
  }

  return _flatten(list, 1);

  function _flatten(list, d) {
    return list.reduce(function (acc, item) {
      if (Array.isArray(item) && d < depth) {
        return acc.concat(_flatten(item, d + 1));
      } else {
        return acc.concat(item);
      }
    }, []);
  }
};

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = function (ary, item) {
  var i = -1,
      indexes = [];

  while ((i = ary.indexOf(item, i + 1)) !== -1) {
    indexes.push(i);
  }

  return indexes;
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function unique_pred(list, compare) {
  var ptr = 1,
      len = list.length,
      a = list[0],
      b = list[0];

  for (var i = 1; i < len; ++i) {
    b = a;
    a = list[i];

    if (compare(a, b)) {
      if (i === ptr) {
        ptr++;
        continue;
      }

      list[ptr++] = a;
    }
  }

  list.length = ptr;
  return list;
}

function unique_eq(list) {
  var ptr = 1,
      len = list.length,
      a = list[0],
      b = list[0];

  for (var i = 1; i < len; ++i, b = a) {
    b = a;
    a = list[i];

    if (a !== b) {
      if (i === ptr) {
        ptr++;
        continue;
      }

      list[ptr++] = a;
    }
  }

  list.length = ptr;
  return list;
}

function unique(list, compare, sorted) {
  if (list.length === 0) {
    return list;
  }

  if (compare) {
    if (!sorted) {
      list.sort(compare);
    }

    return unique_pred(list, compare);
  }

  if (!sorted) {
    list.sort();
  }

  return unique_eq(list);
}

module.exports = unique;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.__esModule = true;

var _container = __webpack_require__(16);

var _container2 = _interopRequireDefault(_container);

var _types = __webpack_require__(0);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Root = function (_Container) {
  _inherits(Root, _Container);

  function Root(opts) {
    _classCallCheck(this, Root);

    var _this = _possibleConstructorReturn(this, _Container.call(this, opts));

    _this.type = _types.ROOT;
    return _this;
  }

  Root.prototype.toString = function toString() {
    var str = this.reduce(function (memo, selector) {
      var sel = String(selector);
      return sel ? memo + sel + ',' : '';
    }, '').slice(0, -1);
    return this.trailingComma ? str + ',' : str;
  };

  return Root;
}(_container2.default);

exports.default = Root;
module.exports = exports['default'];

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.__esModule = true;

var _container = __webpack_require__(16);

var _container2 = _interopRequireDefault(_container);

var _types = __webpack_require__(0);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Selector = function (_Container) {
  _inherits(Selector, _Container);

  function Selector(opts) {
    _classCallCheck(this, Selector);

    var _this = _possibleConstructorReturn(this, _Container.call(this, opts));

    _this.type = _types.SELECTOR;
    return _this;
  }

  return Selector;
}(_container2.default);

exports.default = Selector;
module.exports = exports['default'];

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.__esModule = true;

var _namespace = __webpack_require__(7);

var _namespace2 = _interopRequireDefault(_namespace);

var _types = __webpack_require__(0);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ClassName = function (_Namespace) {
  _inherits(ClassName, _Namespace);

  function ClassName(opts) {
    _classCallCheck(this, ClassName);

    var _this = _possibleConstructorReturn(this, _Namespace.call(this, opts));

    _this.type = _types.CLASS;
    return _this;
  }

  ClassName.prototype.toString = function toString() {
    return [this.spaces.before, this.ns, String('.' + this.value), this.spaces.after].join('');
  };

  return ClassName;
}(_namespace2.default);

exports.default = ClassName;
module.exports = exports['default'];

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.__esModule = true;

var _node = __webpack_require__(5);

var _node2 = _interopRequireDefault(_node);

var _types = __webpack_require__(0);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Comment = function (_Node) {
  _inherits(Comment, _Node);

  function Comment(opts) {
    _classCallCheck(this, Comment);

    var _this = _possibleConstructorReturn(this, _Node.call(this, opts));

    _this.type = _types.COMMENT;
    return _this;
  }

  return Comment;
}(_node2.default);

exports.default = Comment;
module.exports = exports['default'];

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.__esModule = true;

var _namespace = __webpack_require__(7);

var _namespace2 = _interopRequireDefault(_namespace);

var _types = __webpack_require__(0);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ID = function (_Namespace) {
  _inherits(ID, _Namespace);

  function ID(opts) {
    _classCallCheck(this, ID);

    var _this = _possibleConstructorReturn(this, _Namespace.call(this, opts));

    _this.type = _types.ID;
    return _this;
  }

  ID.prototype.toString = function toString() {
    return [this.spaces.before, this.ns, String('#' + this.value), this.spaces.after].join('');
  };

  return ID;
}(_namespace2.default);

exports.default = ID;
module.exports = exports['default'];

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.__esModule = true;

var _namespace = __webpack_require__(7);

var _namespace2 = _interopRequireDefault(_namespace);

var _types = __webpack_require__(0);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Tag = function (_Namespace) {
  _inherits(Tag, _Namespace);

  function Tag(opts) {
    _classCallCheck(this, Tag);

    var _this = _possibleConstructorReturn(this, _Namespace.call(this, opts));

    _this.type = _types.TAG;
    return _this;
  }

  return Tag;
}(_namespace2.default);

exports.default = Tag;
module.exports = exports['default'];

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.__esModule = true;

var _node = __webpack_require__(5);

var _node2 = _interopRequireDefault(_node);

var _types = __webpack_require__(0);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var String = function (_Node) {
  _inherits(String, _Node);

  function String(opts) {
    _classCallCheck(this, String);

    var _this = _possibleConstructorReturn(this, _Node.call(this, opts));

    _this.type = _types.STRING;
    return _this;
  }

  return String;
}(_node2.default);

exports.default = String;
module.exports = exports['default'];

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.__esModule = true;

var _container = __webpack_require__(16);

var _container2 = _interopRequireDefault(_container);

var _types = __webpack_require__(0);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Pseudo = function (_Container) {
  _inherits(Pseudo, _Container);

  function Pseudo(opts) {
    _classCallCheck(this, Pseudo);

    var _this = _possibleConstructorReturn(this, _Container.call(this, opts));

    _this.type = _types.PSEUDO;
    return _this;
  }

  Pseudo.prototype.toString = function toString() {
    var params = this.length ? '(' + this.map(String).join(',') + ')' : '';
    return [this.spaces.before, String(this.value), params, this.spaces.after].join('');
  };

  return Pseudo;
}(_container2.default);

exports.default = Pseudo;
module.exports = exports['default'];

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.__esModule = true;

var _namespace = __webpack_require__(7);

var _namespace2 = _interopRequireDefault(_namespace);

var _types = __webpack_require__(0);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Attribute = function (_Namespace) {
  _inherits(Attribute, _Namespace);

  function Attribute(opts) {
    _classCallCheck(this, Attribute);

    var _this = _possibleConstructorReturn(this, _Namespace.call(this, opts));

    _this.type = _types.ATTRIBUTE;
    _this.raws = {};
    return _this;
  }

  Attribute.prototype.toString = function toString() {
    var selector = [this.spaces.before, '[', this.ns, this.attribute];

    if (this.operator) {
      selector.push(this.operator);
    }

    if (this.value) {
      selector.push(this.value);
    }

    if (this.raws.insensitive) {
      selector.push(this.raws.insensitive);
    } else if (this.insensitive) {
      selector.push(' i');
    }

    selector.push(']');
    return selector.concat(this.spaces.after).join('');
  };

  return Attribute;
}(_namespace2.default);

exports.default = Attribute;
module.exports = exports['default'];

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.__esModule = true;

var _namespace = __webpack_require__(7);

var _namespace2 = _interopRequireDefault(_namespace);

var _types = __webpack_require__(0);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Universal = function (_Namespace) {
  _inherits(Universal, _Namespace);

  function Universal(opts) {
    _classCallCheck(this, Universal);

    var _this = _possibleConstructorReturn(this, _Namespace.call(this, opts));

    _this.type = _types.UNIVERSAL;
    _this.value = '*';
    return _this;
  }

  return Universal;
}(_namespace2.default);

exports.default = Universal;
module.exports = exports['default'];

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.__esModule = true;

var _node = __webpack_require__(5);

var _node2 = _interopRequireDefault(_node);

var _types = __webpack_require__(0);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Combinator = function (_Node) {
  _inherits(Combinator, _Node);

  function Combinator(opts) {
    _classCallCheck(this, Combinator);

    var _this = _possibleConstructorReturn(this, _Node.call(this, opts));

    _this.type = _types.COMBINATOR;
    return _this;
  }

  return Combinator;
}(_node2.default);

exports.default = Combinator;
module.exports = exports['default'];

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.__esModule = true;

var _node = __webpack_require__(5);

var _node2 = _interopRequireDefault(_node);

var _types = __webpack_require__(0);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Nesting = function (_Node) {
  _inherits(Nesting, _Node);

  function Nesting(opts) {
    _classCallCheck(this, Nesting);

    var _this = _possibleConstructorReturn(this, _Node.call(this, opts));

    _this.type = _types.NESTING;
    _this.value = '&';
    return _this;
  }

  return Nesting;
}(_node2.default);

exports.default = Nesting;
module.exports = exports['default'];

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Node = __webpack_require__(58);

var _Node2 = _interopRequireDefault(_Node);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function Container(opts) {
  var _this = this;

  this.constructor(opts);
  this.nodes = opts.nodes;

  if (this.after === undefined) {
    this.after = this.nodes.length > 0 ? this.nodes[this.nodes.length - 1].after : '';
  }

  if (this.before === undefined) {
    this.before = this.nodes.length > 0 ? this.nodes[0].before : '';
  }

  if (this.sourceIndex === undefined) {
    this.sourceIndex = this.before.length;
  }

  this.nodes.forEach(function (node) {
    node.parent = _this; // eslint-disable-line no-param-reassign
  });
}
/**
 * A node that contains other nodes and support traversing over them
 */


Container.prototype = Object.create(_Node2.default.prototype);
Container.constructor = _Node2.default;
/**
 * Iterate over descendant nodes of the node
 *
 * @param {RegExp|string} filter - Optional. Only nodes with node.type that
 *    satisfies the filter will be traversed over
 * @param {function} cb - callback to call on each node. Takes theese params:
 *    node - the node being processed, i - it's index, nodes - the array
 *    of all nodes
 *    If false is returned, the iteration breaks
 *
 * @return (boolean) false, if the iteration was broken
 */

Container.prototype.walk = function walk(filter, cb) {
  var hasFilter = typeof filter === 'string' || filter instanceof RegExp;
  var callback = hasFilter ? cb : filter;
  var filterReg = typeof filter === 'string' ? new RegExp(filter) : filter;

  for (var i = 0; i < this.nodes.length; i++) {
    var node = this.nodes[i];
    var filtered = hasFilter ? filterReg.test(node.type) : true;

    if (filtered && callback && callback(node, i, this.nodes) === false) {
      return false;
    }

    if (node.nodes && node.walk(filter, cb) === false) {
      return false;
    }
  }

  return true;
};
/**
 * Iterate over immediate children of the node
 *
 * @param {function} cb - callback to call on each node. Takes theese params:
 *    node - the node being processed, i - it's index, nodes - the array
 *    of all nodes
 *    If false is returned, the iteration breaks
 *
 * @return (boolean) false, if the iteration was broken
 */


Container.prototype.each = function each() {
  var cb = arguments.length <= 0 || arguments[0] === undefined ? function () {} : arguments[0];

  for (var i = 0; i < this.nodes.length; i++) {
    var node = this.nodes[i];

    if (cb(node, i, this.nodes) === false) {
      return false;
    }
  }

  return true;
};

exports.default = Container;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * A very generic node. Pretty much any element of a media query
 */

function Node(opts) {
  this.after = opts.after;
  this.before = opts.before;
  this.type = opts.type;
  this.value = opts.value;
  this.sourceIndex = opts.sourceIndex;
}

exports.default = Node;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.__esModule = true;
exports.default = void 0;

var _cssSyntaxError = _interopRequireDefault(__webpack_require__(60));

var _previousMap = _interopRequireDefault(__webpack_require__(120));

var _path = _interopRequireDefault(__webpack_require__(6));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var sequence = 0;
/**
 * Represents the source CSS.
 *
 * @example
 * const root  = postcss.parse(css, { from: file })
 * const input = root.source.input
 */

var Input =
/*#__PURE__*/
function () {
  /**
   * @param {string} css    Input CSS source.
   * @param {object} [opts] {@link Processor#process} options.
   */
  function Input(css, opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (css === null || _typeof(css) === 'object' && !css.toString) {
      throw new Error("PostCSS received " + css + " instead of CSS string");
    }
    /**
     * Input CSS source
     *
     * @type {string}
     *
     * @example
     * const input = postcss.parse('a{}', { from: file }).input
     * input.css //=> "a{}"
     */


    this.css = css.toString();

    if (this.css[0] === "\uFEFF" || this.css[0] === "\uFFFE") {
      this.css = this.css.slice(1);
    }

    if (opts.from) {
      if (/^\w+:\/\//.test(opts.from)) {
        /**
         * The absolute path to the CSS source file defined
         * with the `from` option.
         *
         * @type {string}
         *
         * @example
         * const root = postcss.parse(css, { from: 'a.css' })
         * root.source.input.file //=> '/home/ai/a.css'
         */
        this.file = opts.from;
      } else {
        this.file = _path.default.resolve(opts.from);
      }
    }

    var map = new _previousMap.default(this.css, opts);

    if (map.text) {
      /**
       * The input source map passed from a compilation step before PostCSS
       * (for example, from Sass compiler).
       *
       * @type {PreviousMap}
       *
       * @example
       * root.source.input.map.consumer().sources //=> ['a.sass']
       */
      this.map = map;
      var file = map.consumer().file;
      if (!this.file && file) this.file = this.mapResolve(file);
    }

    if (!this.file) {
      sequence += 1;
      /**
       * The unique ID of the CSS source. It will be created if `from` option
       * is not provided (because PostCSS does not know the file path).
       *
       * @type {string}
       *
       * @example
       * const root = postcss.parse(css)
       * root.source.input.file //=> undefined
       * root.source.input.id   //=> "<input css 1>"
       */

      this.id = '<input css ' + sequence + '>';
    }

    if (this.map) this.map.file = this.from;
  }

  var _proto = Input.prototype;

  _proto.error = function error(message, line, column, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var result;
    var origin = this.origin(line, column);

    if (origin) {
      result = new _cssSyntaxError.default(message, origin.line, origin.column, origin.source, origin.file, opts.plugin);
    } else {
      result = new _cssSyntaxError.default(message, line, column, this.css, this.file, opts.plugin);
    }

    result.input = {
      line: line,
      column: column,
      source: this.css
    };
    if (this.file) result.input.file = this.file;
    return result;
  };
  /**
   * Reads the input source map and returns a symbol position
   * in the input source (e.g., in a Sass file that was compiled
   * to CSS before being passed to PostCSS).
   *
   * @param {number} line   Line in input CSS.
   * @param {number} column Column in input CSS.
   *
   * @return {filePosition} Position in input source.
   *
   * @example
   * root.source.input.origin(1, 1) //=> { file: 'a.css', line: 3, column: 1 }
   */


  _proto.origin = function origin(line, column) {
    if (!this.map) return false;
    var consumer = this.map.consumer();
    var from = consumer.originalPositionFor({
      line: line,
      column: column
    });
    if (!from.source) return false;
    var result = {
      file: this.mapResolve(from.source),
      line: from.line,
      column: from.column
    };
    var source = consumer.sourceContentFor(from.source);
    if (source) result.source = source;
    return result;
  };

  _proto.mapResolve = function mapResolve(file) {
    if (/^\w+:\/\//.test(file)) {
      return file;
    }

    return _path.default.resolve(this.map.consumer().sourceRoot || '.', file);
  };
  /**
   * The CSS source identifier. Contains {@link Input#file} if the user
   * set the `from` option, or {@link Input#id} if they did not.
   *
   * @type {string}
   *
   * @example
   * const root = postcss.parse(css, { from: 'a.css' })
   * root.source.input.from //=> "/home/ai/a.css"
   *
   * const root = postcss.parse(css)
   * root.source.input.from //=> "<input css 1>"
   */


  _createClass(Input, [{
    key: "from",
    get: function get() {
      return this.file || this.id;
    }
  }]);

  return Input;
}();

var _default = Input;
/**
 * @typedef  {object} filePosition
 * @property {string} file   Path to file.
 * @property {number} line   Source line in file.
 * @property {number} column Source column in file.
 */

exports.default = _default;
module.exports = exports.default;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _supportsColor = _interopRequireDefault(__webpack_require__(117));

var _chalk = _interopRequireDefault(__webpack_require__(118));

var _terminalHighlight = _interopRequireDefault(__webpack_require__(119));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/**
 * The CSS parser throws this error for broken CSS.
 *
 * Custom parsers can throw this error for broken custom syntax using
 * the {@link Node#error} method.
 *
 * PostCSS will use the input source map to detect the original error location.
 * If you wrote a Sass file, compiled it to CSS and then parsed it with PostCSS,
 * PostCSS will show the original position in the Sass file.
 *
 * If you need the position in the PostCSS input
 * (e.g., to debug the previous compiler), use `error.input.file`.
 *
 * @example
 * // Catching and checking syntax error
 * try {
 *   postcss.parse('a{')
 * } catch (error) {
 *   if (error.name === 'CssSyntaxError') {
 *     error //=> CssSyntaxError
 *   }
 * }
 *
 * @example
 * // Raising error from plugin
 * throw node.error('Unknown variable', { plugin: 'postcss-vars' })
 */


var CssSyntaxError =
/*#__PURE__*/
function () {
  /**
   * @param {string} message  Error message.
   * @param {number} [line]   Source line of the error.
   * @param {number} [column] Source column of the error.
   * @param {string} [source] Source code of the broken file.
   * @param {string} [file]   Absolute path to the broken file.
   * @param {string} [plugin] PostCSS plugin name, if error came from plugin.
   */
  function CssSyntaxError(message, line, column, source, file, plugin) {
    /**
     * Always equal to `'CssSyntaxError'`. You should always check error type
     * by `error.name === 'CssSyntaxError'`
     * instead of `error instanceof CssSyntaxError`,
     * because npm could have several PostCSS versions.
     *
     * @type {string}
     *
     * @example
     * if (error.name === 'CssSyntaxError') {
     *   error //=> CssSyntaxError
     * }
     */
    this.name = 'CssSyntaxError';
    /**
     * Error message.
     *
     * @type {string}
     *
     * @example
     * error.message //=> 'Unclosed block'
     */

    this.reason = message;

    if (file) {
      /**
       * Absolute path to the broken file.
       *
       * @type {string}
       *
       * @example
       * error.file       //=> 'a.sass'
       * error.input.file //=> 'a.css'
       */
      this.file = file;
    }

    if (source) {
      /**
       * Source code of the broken file.
       *
       * @type {string}
       *
       * @example
       * error.source       //=> 'a { b {} }'
       * error.input.column //=> 'a b { }'
       */
      this.source = source;
    }

    if (plugin) {
      /**
       * Plugin name, if error came from plugin.
       *
       * @type {string}
       *
       * @example
       * error.plugin //=> 'postcss-vars'
       */
      this.plugin = plugin;
    }

    if (typeof line !== 'undefined' && typeof column !== 'undefined') {
      /**
       * Source line of the error.
       *
       * @type {number}
       *
       * @example
       * error.line       //=> 2
       * error.input.line //=> 4
       */
      this.line = line;
      /**
       * Source column of the error.
       *
       * @type {number}
       *
       * @example
       * error.column       //=> 1
       * error.input.column //=> 4
       */

      this.column = column;
    }

    this.setMessage();

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CssSyntaxError);
    }
  }

  var _proto = CssSyntaxError.prototype;

  _proto.setMessage = function setMessage() {
    /**
     * Full error text in the GNU error format
     * with plugin, file, line and column.
     *
     * @type {string}
     *
     * @example
     * error.message //=> 'a.css:1:1: Unclosed block'
     */
    this.message = this.plugin ? this.plugin + ': ' : '';
    this.message += this.file ? this.file : '<css input>';

    if (typeof this.line !== 'undefined') {
      this.message += ':' + this.line + ':' + this.column;
    }

    this.message += ': ' + this.reason;
  };
  /**
   * Returns a few lines of CSS source that caused the error.
   *
   * If the CSS has an input source map without `sourceContent`,
   * this method will return an empty string.
   *
   * @param {boolean} [color] Whether arrow will be colored red by terminal
   *                          color codes. By default, PostCSS will detect
   *                          color support by `process.stdout.isTTY`
   *                          and `process.env.NODE_DISABLE_COLORS`.
   *
   * @example
   * error.showSourceCode() //=> "  4 | }
   *                        //      5 | a {
   *                        //    > 6 |   bad
   *                        //        |   ^
   *                        //      7 | }
   *                        //      8 | b {"
   *
   * @return {string} Few lines of CSS source that caused the error.
   */


  _proto.showSourceCode = function showSourceCode(color) {
    var _this = this;

    if (!this.source) return '';
    var css = this.source;

    if (_terminalHighlight.default) {
      if (typeof color === 'undefined') color = _supportsColor.default.stdout;
      if (color) css = (0, _terminalHighlight.default)(css);
    }

    var lines = css.split(/\r?\n/);
    var start = Math.max(this.line - 3, 0);
    var end = Math.min(this.line + 2, lines.length);
    var maxWidth = String(end).length;

    function mark(text) {
      if (color && _chalk.default.red) {
        return _chalk.default.red.bold(text);
      }

      return text;
    }

    function aside(text) {
      if (color && _chalk.default.gray) {
        return _chalk.default.gray(text);
      }

      return text;
    }

    return lines.slice(start, end).map(function (line, index) {
      var number = start + 1 + index;
      var gutter = ' ' + (' ' + number).slice(-maxWidth) + ' | ';

      if (number === _this.line) {
        var spacing = aside(gutter.replace(/\d/g, ' ')) + line.slice(0, _this.column - 1).replace(/[^\t]/g, ' ');
        return mark('>') + aside(gutter) + line + '\n ' + spacing + mark('^');
      }

      return ' ' + aside(gutter) + line;
    }).join('\n');
  };
  /**
   * Returns error position, message and source code of the broken part.
   *
   * @example
   * error.toString() //=> "CssSyntaxError: app.css:1:1: Unclosed block
   *                  //    > 1 | a {
   *                  //        | ^"
   *
   * @return {string} Error position, message and source code.
   */


  _proto.toString = function toString() {
    var code = this.showSourceCode();

    if (code) {
      code = '\n\n' + code + '\n';
    }

    return this.name + ': ' + this.message + code;
  };
  /**
   * @memberof CssSyntaxError#
   * @member {Input} input Input object with PostCSS internal information
   *                       about input file. If input has source map
   *                       from previous tool, PostCSS will use origin
   *                       (for example, Sass) source. You can use this
   *                       object to get PostCSS input source.
   *
   * @example
   * error.input.file //=> 'a.css'
   * error.file       //=> 'a.sass'
   */


  return CssSyntaxError;
}();

var _default = CssSyntaxError;
exports.default = _default;
module.exports = exports.default;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Copyright 2009-2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE.txt or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
exports.SourceMapGenerator = __webpack_require__(62).SourceMapGenerator;
exports.SourceMapConsumer = __webpack_require__(126).SourceMapConsumer;
exports.SourceNode = __webpack_require__(129).SourceNode;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */

/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
var base64VLQ = __webpack_require__(63);

var util = __webpack_require__(8);

var ArraySet = __webpack_require__(64).ArraySet;

var MappingList = __webpack_require__(125).MappingList;
/**
 * An instance of the SourceMapGenerator represents a source map which is
 * being built incrementally. You may pass an object with the following
 * properties:
 *
 *   - file: The filename of the generated source.
 *   - sourceRoot: A root for all relative URLs in this source map.
 */


function SourceMapGenerator(aArgs) {
  if (!aArgs) {
    aArgs = {};
  }

  this._file = util.getArg(aArgs, 'file', null);
  this._sourceRoot = util.getArg(aArgs, 'sourceRoot', null);
  this._skipValidation = util.getArg(aArgs, 'skipValidation', false);
  this._sources = new ArraySet();
  this._names = new ArraySet();
  this._mappings = new MappingList();
  this._sourcesContents = null;
}

SourceMapGenerator.prototype._version = 3;
/**
 * Creates a new SourceMapGenerator based on a SourceMapConsumer
 *
 * @param aSourceMapConsumer The SourceMap.
 */

SourceMapGenerator.fromSourceMap = function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
  var sourceRoot = aSourceMapConsumer.sourceRoot;
  var generator = new SourceMapGenerator({
    file: aSourceMapConsumer.file,
    sourceRoot: sourceRoot
  });
  aSourceMapConsumer.eachMapping(function (mapping) {
    var newMapping = {
      generated: {
        line: mapping.generatedLine,
        column: mapping.generatedColumn
      }
    };

    if (mapping.source != null) {
      newMapping.source = mapping.source;

      if (sourceRoot != null) {
        newMapping.source = util.relative(sourceRoot, newMapping.source);
      }

      newMapping.original = {
        line: mapping.originalLine,
        column: mapping.originalColumn
      };

      if (mapping.name != null) {
        newMapping.name = mapping.name;
      }
    }

    generator.addMapping(newMapping);
  });
  aSourceMapConsumer.sources.forEach(function (sourceFile) {
    var sourceRelative = sourceFile;

    if (sourceRoot !== null) {
      sourceRelative = util.relative(sourceRoot, sourceFile);
    }

    if (!generator._sources.has(sourceRelative)) {
      generator._sources.add(sourceRelative);
    }

    var content = aSourceMapConsumer.sourceContentFor(sourceFile);

    if (content != null) {
      generator.setSourceContent(sourceFile, content);
    }
  });
  return generator;
};
/**
 * Add a single mapping from original source line and column to the generated
 * source's line and column for this source map being created. The mapping
 * object should have the following properties:
 *
 *   - generated: An object with the generated line and column positions.
 *   - original: An object with the original line and column positions.
 *   - source: The original source file (relative to the sourceRoot).
 *   - name: An optional original token name for this mapping.
 */


SourceMapGenerator.prototype.addMapping = function SourceMapGenerator_addMapping(aArgs) {
  var generated = util.getArg(aArgs, 'generated');
  var original = util.getArg(aArgs, 'original', null);
  var source = util.getArg(aArgs, 'source', null);
  var name = util.getArg(aArgs, 'name', null);

  if (!this._skipValidation) {
    this._validateMapping(generated, original, source, name);
  }

  if (source != null) {
    source = String(source);

    if (!this._sources.has(source)) {
      this._sources.add(source);
    }
  }

  if (name != null) {
    name = String(name);

    if (!this._names.has(name)) {
      this._names.add(name);
    }
  }

  this._mappings.add({
    generatedLine: generated.line,
    generatedColumn: generated.column,
    originalLine: original != null && original.line,
    originalColumn: original != null && original.column,
    source: source,
    name: name
  });
};
/**
 * Set the source content for a source file.
 */


SourceMapGenerator.prototype.setSourceContent = function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
  var source = aSourceFile;

  if (this._sourceRoot != null) {
    source = util.relative(this._sourceRoot, source);
  }

  if (aSourceContent != null) {
    // Add the source content to the _sourcesContents map.
    // Create a new _sourcesContents map if the property is null.
    if (!this._sourcesContents) {
      this._sourcesContents = Object.create(null);
    }

    this._sourcesContents[util.toSetString(source)] = aSourceContent;
  } else if (this._sourcesContents) {
    // Remove the source file from the _sourcesContents map.
    // If the _sourcesContents map is empty, set the property to null.
    delete this._sourcesContents[util.toSetString(source)];

    if (Object.keys(this._sourcesContents).length === 0) {
      this._sourcesContents = null;
    }
  }
};
/**
 * Applies the mappings of a sub-source-map for a specific source file to the
 * source map being generated. Each mapping to the supplied source file is
 * rewritten using the supplied source map. Note: The resolution for the
 * resulting mappings is the minimium of this map and the supplied map.
 *
 * @param aSourceMapConsumer The source map to be applied.
 * @param aSourceFile Optional. The filename of the source file.
 *        If omitted, SourceMapConsumer's file property will be used.
 * @param aSourceMapPath Optional. The dirname of the path to the source map
 *        to be applied. If relative, it is relative to the SourceMapConsumer.
 *        This parameter is needed when the two source maps aren't in the same
 *        directory, and the source map to be applied contains relative source
 *        paths. If so, those relative source paths need to be rewritten
 *        relative to the SourceMapGenerator.
 */


SourceMapGenerator.prototype.applySourceMap = function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
  var sourceFile = aSourceFile; // If aSourceFile is omitted, we will use the file property of the SourceMap

  if (aSourceFile == null) {
    if (aSourceMapConsumer.file == null) {
      throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, ' + 'or the source map\'s "file" property. Both were omitted.');
    }

    sourceFile = aSourceMapConsumer.file;
  }

  var sourceRoot = this._sourceRoot; // Make "sourceFile" relative if an absolute Url is passed.

  if (sourceRoot != null) {
    sourceFile = util.relative(sourceRoot, sourceFile);
  } // Applying the SourceMap can add and remove items from the sources and
  // the names array.


  var newSources = new ArraySet();
  var newNames = new ArraySet(); // Find mappings for the "sourceFile"

  this._mappings.unsortedForEach(function (mapping) {
    if (mapping.source === sourceFile && mapping.originalLine != null) {
      // Check if it can be mapped by the source map, then update the mapping.
      var original = aSourceMapConsumer.originalPositionFor({
        line: mapping.originalLine,
        column: mapping.originalColumn
      });

      if (original.source != null) {
        // Copy mapping
        mapping.source = original.source;

        if (aSourceMapPath != null) {
          mapping.source = util.join(aSourceMapPath, mapping.source);
        }

        if (sourceRoot != null) {
          mapping.source = util.relative(sourceRoot, mapping.source);
        }

        mapping.originalLine = original.line;
        mapping.originalColumn = original.column;

        if (original.name != null) {
          mapping.name = original.name;
        }
      }
    }

    var source = mapping.source;

    if (source != null && !newSources.has(source)) {
      newSources.add(source);
    }

    var name = mapping.name;

    if (name != null && !newNames.has(name)) {
      newNames.add(name);
    }
  }, this);

  this._sources = newSources;
  this._names = newNames; // Copy sourcesContents of applied map.

  aSourceMapConsumer.sources.forEach(function (sourceFile) {
    var content = aSourceMapConsumer.sourceContentFor(sourceFile);

    if (content != null) {
      if (aSourceMapPath != null) {
        sourceFile = util.join(aSourceMapPath, sourceFile);
      }

      if (sourceRoot != null) {
        sourceFile = util.relative(sourceRoot, sourceFile);
      }

      this.setSourceContent(sourceFile, content);
    }
  }, this);
};
/**
 * A mapping can have one of the three levels of data:
 *
 *   1. Just the generated position.
 *   2. The Generated position, original position, and original source.
 *   3. Generated and original position, original source, as well as a name
 *      token.
 *
 * To maintain consistency, we validate that any new mapping being added falls
 * in to one of these categories.
 */


SourceMapGenerator.prototype._validateMapping = function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource, aName) {
  // When aOriginal is truthy but has empty values for .line and .column,
  // it is most likely a programmer error. In this case we throw a very
  // specific error message to try to guide them the right way.
  // For example: https://github.com/Polymer/polymer-bundler/pull/519
  if (aOriginal && typeof aOriginal.line !== 'number' && typeof aOriginal.column !== 'number') {
    throw new Error('original.line and original.column are not numbers -- you probably meant to omit ' + 'the original mapping entirely and only map the generated position. If so, pass ' + 'null for the original mapping instead of an object with empty or null values.');
  }

  if (aGenerated && 'line' in aGenerated && 'column' in aGenerated && aGenerated.line > 0 && aGenerated.column >= 0 && !aOriginal && !aSource && !aName) {
    // Case 1.
    return;
  } else if (aGenerated && 'line' in aGenerated && 'column' in aGenerated && aOriginal && 'line' in aOriginal && 'column' in aOriginal && aGenerated.line > 0 && aGenerated.column >= 0 && aOriginal.line > 0 && aOriginal.column >= 0 && aSource) {
    // Cases 2 and 3.
    return;
  } else {
    throw new Error('Invalid mapping: ' + JSON.stringify({
      generated: aGenerated,
      source: aSource,
      original: aOriginal,
      name: aName
    }));
  }
};
/**
 * Serialize the accumulated mappings in to the stream of base 64 VLQs
 * specified by the source map format.
 */


SourceMapGenerator.prototype._serializeMappings = function SourceMapGenerator_serializeMappings() {
  var previousGeneratedColumn = 0;
  var previousGeneratedLine = 1;
  var previousOriginalColumn = 0;
  var previousOriginalLine = 0;
  var previousName = 0;
  var previousSource = 0;
  var result = '';
  var next;
  var mapping;
  var nameIdx;
  var sourceIdx;

  var mappings = this._mappings.toArray();

  for (var i = 0, len = mappings.length; i < len; i++) {
    mapping = mappings[i];
    next = '';

    if (mapping.generatedLine !== previousGeneratedLine) {
      previousGeneratedColumn = 0;

      while (mapping.generatedLine !== previousGeneratedLine) {
        next += ';';
        previousGeneratedLine++;
      }
    } else {
      if (i > 0) {
        if (!util.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) {
          continue;
        }

        next += ',';
      }
    }

    next += base64VLQ.encode(mapping.generatedColumn - previousGeneratedColumn);
    previousGeneratedColumn = mapping.generatedColumn;

    if (mapping.source != null) {
      sourceIdx = this._sources.indexOf(mapping.source);
      next += base64VLQ.encode(sourceIdx - previousSource);
      previousSource = sourceIdx; // lines are stored 0-based in SourceMap spec version 3

      next += base64VLQ.encode(mapping.originalLine - 1 - previousOriginalLine);
      previousOriginalLine = mapping.originalLine - 1;
      next += base64VLQ.encode(mapping.originalColumn - previousOriginalColumn);
      previousOriginalColumn = mapping.originalColumn;

      if (mapping.name != null) {
        nameIdx = this._names.indexOf(mapping.name);
        next += base64VLQ.encode(nameIdx - previousName);
        previousName = nameIdx;
      }
    }

    result += next;
  }

  return result;
};

SourceMapGenerator.prototype._generateSourcesContent = function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
  return aSources.map(function (source) {
    if (!this._sourcesContents) {
      return null;
    }

    if (aSourceRoot != null) {
      source = util.relative(aSourceRoot, source);
    }

    var key = util.toSetString(source);
    return Object.prototype.hasOwnProperty.call(this._sourcesContents, key) ? this._sourcesContents[key] : null;
  }, this);
};
/**
 * Externalize the source map.
 */


SourceMapGenerator.prototype.toJSON = function SourceMapGenerator_toJSON() {
  var map = {
    version: this._version,
    sources: this._sources.toArray(),
    names: this._names.toArray(),
    mappings: this._serializeMappings()
  };

  if (this._file != null) {
    map.file = this._file;
  }

  if (this._sourceRoot != null) {
    map.sourceRoot = this._sourceRoot;
  }

  if (this._sourcesContents) {
    map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
  }

  return map;
};
/**
 * Render the source map being generated to a string.
 */


SourceMapGenerator.prototype.toString = function SourceMapGenerator_toString() {
  return JSON.stringify(this.toJSON());
};

exports.SourceMapGenerator = SourceMapGenerator;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */

/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 *
 * Based on the Base 64 VLQ implementation in Closure Compiler:
 * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
 *
 * Copyright 2011 The Closure Compiler Authors. All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *  * Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above
 *    copyright notice, this list of conditions and the following
 *    disclaimer in the documentation and/or other materials provided
 *    with the distribution.
 *  * Neither the name of Google Inc. nor the names of its
 *    contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
var base64 = __webpack_require__(124); // A single base 64 digit can contain 6 bits of data. For the base 64 variable
// length quantities we use in the source map spec, the first bit is the sign,
// the next four bits are the actual value, and the 6th bit is the
// continuation bit. The continuation bit tells us whether there are more
// digits in this value following this digit.
//
//   Continuation
//   |    Sign
//   |    |
//   V    V
//   101011


var VLQ_BASE_SHIFT = 5; // binary: 100000

var VLQ_BASE = 1 << VLQ_BASE_SHIFT; // binary: 011111

var VLQ_BASE_MASK = VLQ_BASE - 1; // binary: 100000

var VLQ_CONTINUATION_BIT = VLQ_BASE;
/**
 * Converts from a two-complement value to a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
 *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
 */

function toVLQSigned(aValue) {
  return aValue < 0 ? (-aValue << 1) + 1 : (aValue << 1) + 0;
}
/**
 * Converts to a two-complement value from a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
 *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
 */


function fromVLQSigned(aValue) {
  var isNegative = (aValue & 1) === 1;
  var shifted = aValue >> 1;
  return isNegative ? -shifted : shifted;
}
/**
 * Returns the base 64 VLQ encoded value.
 */


exports.encode = function base64VLQ_encode(aValue) {
  var encoded = "";
  var digit;
  var vlq = toVLQSigned(aValue);

  do {
    digit = vlq & VLQ_BASE_MASK;
    vlq >>>= VLQ_BASE_SHIFT;

    if (vlq > 0) {
      // There are still more digits in this value, so we must make sure the
      // continuation bit is marked.
      digit |= VLQ_CONTINUATION_BIT;
    }

    encoded += base64.encode(digit);
  } while (vlq > 0);

  return encoded;
};
/**
 * Decodes the next base 64 VLQ value from the given string and returns the
 * value and the rest of the string via the out parameter.
 */


exports.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
  var strLen = aStr.length;
  var result = 0;
  var shift = 0;
  var continuation, digit;

  do {
    if (aIndex >= strLen) {
      throw new Error("Expected more digits in base 64 VLQ value.");
    }

    digit = base64.decode(aStr.charCodeAt(aIndex++));

    if (digit === -1) {
      throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
    }

    continuation = !!(digit & VLQ_CONTINUATION_BIT);
    digit &= VLQ_BASE_MASK;
    result = result + (digit << shift);
    shift += VLQ_BASE_SHIFT;
  } while (continuation);

  aOutParam.value = fromVLQSigned(result);
  aOutParam.rest = aIndex;
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */

/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
var util = __webpack_require__(8);

var has = Object.prototype.hasOwnProperty;
var hasNativeMap = typeof Map !== "undefined";
/**
 * A data structure which is a combination of an array and a set. Adding a new
 * member is O(1), testing for membership is O(1), and finding the index of an
 * element is O(1). Removing elements from the set is not supported. Only
 * strings are supported for membership.
 */

function ArraySet() {
  this._array = [];
  this._set = hasNativeMap ? new Map() : Object.create(null);
}
/**
 * Static method for creating ArraySet instances from an existing array.
 */


ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
  var set = new ArraySet();

  for (var i = 0, len = aArray.length; i < len; i++) {
    set.add(aArray[i], aAllowDuplicates);
  }

  return set;
};
/**
 * Return how many unique items are in this ArraySet. If duplicates have been
 * added, than those do not count towards the size.
 *
 * @returns Number
 */


ArraySet.prototype.size = function ArraySet_size() {
  return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
};
/**
 * Add the given string to this set.
 *
 * @param String aStr
 */


ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
  var sStr = hasNativeMap ? aStr : util.toSetString(aStr);
  var isDuplicate = hasNativeMap ? this.has(aStr) : has.call(this._set, sStr);
  var idx = this._array.length;

  if (!isDuplicate || aAllowDuplicates) {
    this._array.push(aStr);
  }

  if (!isDuplicate) {
    if (hasNativeMap) {
      this._set.set(aStr, idx);
    } else {
      this._set[sStr] = idx;
    }
  }
};
/**
 * Is the given string a member of this set?
 *
 * @param String aStr
 */


ArraySet.prototype.has = function ArraySet_has(aStr) {
  if (hasNativeMap) {
    return this._set.has(aStr);
  } else {
    var sStr = util.toSetString(aStr);
    return has.call(this._set, sStr);
  }
};
/**
 * What is the index of the given string in the array?
 *
 * @param String aStr
 */


ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
  if (hasNativeMap) {
    var idx = this._set.get(aStr);

    if (idx >= 0) {
      return idx;
    }
  } else {
    var sStr = util.toSetString(aStr);

    if (has.call(this._set, sStr)) {
      return this._set[sStr];
    }
  }

  throw new Error('"' + aStr + '" is not in the set.');
};
/**
 * What is the element at the given index?
 *
 * @param Number aIdx
 */


ArraySet.prototype.at = function ArraySet_at(aIdx) {
  if (aIdx >= 0 && aIdx < this._array.length) {
    return this._array[aIdx];
  }

  throw new Error('No element indexed by ' + aIdx);
};
/**
 * Returns the array representation of this set (which has the proper indices
 * indicated by indexOf). Note that this is a copy of the internal array used
 * for storing the members so that no one can mess with internal state.
 */


ArraySet.prototype.toArray = function ArraySet_toArray() {
  return this._array.slice();
};

exports.ArraySet = ArraySet;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _stringifier = _interopRequireDefault(__webpack_require__(17));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function stringify(node, builder) {
  var str = new _stringifier.default(builder);
  str.stringify(node);
}

var _default = stringify;
exports.default = _default;
module.exports = exports.default;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _declaration = _interopRequireDefault(__webpack_require__(67));

var _tokenize = _interopRequireDefault(__webpack_require__(132));

var _comment = _interopRequireDefault(__webpack_require__(19));

var _atRule = _interopRequireDefault(__webpack_require__(68));

var _root = _interopRequireDefault(__webpack_require__(134));

var _rule = _interopRequireDefault(__webpack_require__(70));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var Parser =
/*#__PURE__*/
function () {
  function Parser(input) {
    this.input = input;
    this.root = new _root.default();
    this.current = this.root;
    this.spaces = '';
    this.semicolon = false;
    this.createTokenizer();
    this.root.source = {
      input: input,
      start: {
        line: 1,
        column: 1
      }
    };
  }

  var _proto = Parser.prototype;

  _proto.createTokenizer = function createTokenizer() {
    this.tokenizer = (0, _tokenize.default)(this.input);
  };

  _proto.parse = function parse() {
    var token;

    while (!this.tokenizer.endOfFile()) {
      token = this.tokenizer.nextToken();

      switch (token[0]) {
        case 'space':
          this.spaces += token[1];
          break;

        case ';':
          this.freeSemicolon(token);
          break;

        case '}':
          this.end(token);
          break;

        case 'comment':
          this.comment(token);
          break;

        case 'at-word':
          this.atrule(token);
          break;

        case '{':
          this.emptyRule(token);
          break;

        default:
          this.other(token);
          break;
      }
    }

    this.endFile();
  };

  _proto.comment = function comment(token) {
    var node = new _comment.default();
    this.init(node, token[2], token[3]);
    node.source.end = {
      line: token[4],
      column: token[5]
    };
    var text = token[1].slice(2, -2);

    if (/^\s*$/.test(text)) {
      node.text = '';
      node.raws.left = text;
      node.raws.right = '';
    } else {
      var match = text.match(/^(\s*)([^]*[^\s])(\s*)$/);
      node.text = match[2];
      node.raws.left = match[1];
      node.raws.right = match[3];
    }
  };

  _proto.emptyRule = function emptyRule(token) {
    var node = new _rule.default();
    this.init(node, token[2], token[3]);
    node.selector = '';
    node.raws.between = '';
    this.current = node;
  };

  _proto.other = function other(start) {
    var end = false;
    var type = null;
    var colon = false;
    var bracket = null;
    var brackets = [];
    var tokens = [];
    var token = start;

    while (token) {
      type = token[0];
      tokens.push(token);

      if (type === '(' || type === '[') {
        if (!bracket) bracket = token;
        brackets.push(type === '(' ? ')' : ']');
      } else if (brackets.length === 0) {
        if (type === ';') {
          if (colon) {
            this.decl(tokens);
            return;
          } else {
            break;
          }
        } else if (type === '{') {
          this.rule(tokens);
          return;
        } else if (type === '}') {
          this.tokenizer.back(tokens.pop());
          end = true;
          break;
        } else if (type === ':') {
          colon = true;
        }
      } else if (type === brackets[brackets.length - 1]) {
        brackets.pop();
        if (brackets.length === 0) bracket = null;
      }

      token = this.tokenizer.nextToken();
    }

    if (this.tokenizer.endOfFile()) end = true;
    if (brackets.length > 0) this.unclosedBracket(bracket);

    if (end && colon) {
      while (tokens.length) {
        token = tokens[tokens.length - 1][0];
        if (token !== 'space' && token !== 'comment') break;
        this.tokenizer.back(tokens.pop());
      }

      this.decl(tokens);
    } else {
      this.unknownWord(tokens);
    }
  };

  _proto.rule = function rule(tokens) {
    tokens.pop();
    var node = new _rule.default();
    this.init(node, tokens[0][2], tokens[0][3]);
    node.raws.between = this.spacesAndCommentsFromEnd(tokens);
    this.raw(node, 'selector', tokens);
    this.current = node;
  };

  _proto.decl = function decl(tokens) {
    var node = new _declaration.default();
    this.init(node);
    var last = tokens[tokens.length - 1];

    if (last[0] === ';') {
      this.semicolon = true;
      tokens.pop();
    }

    if (last[4]) {
      node.source.end = {
        line: last[4],
        column: last[5]
      };
    } else {
      node.source.end = {
        line: last[2],
        column: last[3]
      };
    }

    while (tokens[0][0] !== 'word') {
      if (tokens.length === 1) this.unknownWord(tokens);
      node.raws.before += tokens.shift()[1];
    }

    node.source.start = {
      line: tokens[0][2],
      column: tokens[0][3]
    };
    node.prop = '';

    while (tokens.length) {
      var type = tokens[0][0];

      if (type === ':' || type === 'space' || type === 'comment') {
        break;
      }

      node.prop += tokens.shift()[1];
    }

    node.raws.between = '';
    var token;

    while (tokens.length) {
      token = tokens.shift();

      if (token[0] === ':') {
        node.raws.between += token[1];
        break;
      } else {
        node.raws.between += token[1];
      }
    }

    if (node.prop[0] === '_' || node.prop[0] === '*') {
      node.raws.before += node.prop[0];
      node.prop = node.prop.slice(1);
    }

    node.raws.between += this.spacesAndCommentsFromStart(tokens);
    this.precheckMissedSemicolon(tokens);

    for (var i = tokens.length - 1; i > 0; i--) {
      token = tokens[i];

      if (token[1].toLowerCase() === '!important') {
        node.important = true;
        var string = this.stringFrom(tokens, i);
        string = this.spacesFromEnd(tokens) + string;
        if (string !== ' !important') node.raws.important = string;
        break;
      } else if (token[1].toLowerCase() === 'important') {
        var cache = tokens.slice(0);
        var str = '';

        for (var j = i; j > 0; j--) {
          var _type = cache[j][0];

          if (str.trim().indexOf('!') === 0 && _type !== 'space') {
            break;
          }

          str = cache.pop()[1] + str;
        }

        if (str.trim().indexOf('!') === 0) {
          node.important = true;
          node.raws.important = str;
          tokens = cache;
        }
      }

      if (token[0] !== 'space' && token[0] !== 'comment') {
        break;
      }
    }

    this.raw(node, 'value', tokens);
    if (node.value.indexOf(':') !== -1) this.checkMissedSemicolon(tokens);
  };

  _proto.atrule = function atrule(token) {
    var node = new _atRule.default();
    node.name = token[1].slice(1);

    if (node.name === '') {
      this.unnamedAtrule(node, token);
    }

    this.init(node, token[2], token[3]);
    var prev;
    var shift;
    var last = false;
    var open = false;
    var params = [];

    while (!this.tokenizer.endOfFile()) {
      token = this.tokenizer.nextToken();

      if (token[0] === ';') {
        node.source.end = {
          line: token[2],
          column: token[3]
        };
        this.semicolon = true;
        break;
      } else if (token[0] === '{') {
        open = true;
        break;
      } else if (token[0] === '}') {
        if (params.length > 0) {
          shift = params.length - 1;
          prev = params[shift];

          while (prev && prev[0] === 'space') {
            prev = params[--shift];
          }

          if (prev) {
            node.source.end = {
              line: prev[4],
              column: prev[5]
            };
          }
        }

        this.end(token);
        break;
      } else {
        params.push(token);
      }

      if (this.tokenizer.endOfFile()) {
        last = true;
        break;
      }
    }

    node.raws.between = this.spacesAndCommentsFromEnd(params);

    if (params.length) {
      node.raws.afterName = this.spacesAndCommentsFromStart(params);
      this.raw(node, 'params', params);

      if (last) {
        token = params[params.length - 1];
        node.source.end = {
          line: token[4],
          column: token[5]
        };
        this.spaces = node.raws.between;
        node.raws.between = '';
      }
    } else {
      node.raws.afterName = '';
      node.params = '';
    }

    if (open) {
      node.nodes = [];
      this.current = node;
    }
  };

  _proto.end = function end(token) {
    if (this.current.nodes && this.current.nodes.length) {
      this.current.raws.semicolon = this.semicolon;
    }

    this.semicolon = false;
    this.current.raws.after = (this.current.raws.after || '') + this.spaces;
    this.spaces = '';

    if (this.current.parent) {
      this.current.source.end = {
        line: token[2],
        column: token[3]
      };
      this.current = this.current.parent;
    } else {
      this.unexpectedClose(token);
    }
  };

  _proto.endFile = function endFile() {
    if (this.current.parent) this.unclosedBlock();

    if (this.current.nodes && this.current.nodes.length) {
      this.current.raws.semicolon = this.semicolon;
    }

    this.current.raws.after = (this.current.raws.after || '') + this.spaces;
  };

  _proto.freeSemicolon = function freeSemicolon(token) {
    this.spaces += token[1];

    if (this.current.nodes) {
      var prev = this.current.nodes[this.current.nodes.length - 1];

      if (prev && prev.type === 'rule' && !prev.raws.ownSemicolon) {
        prev.raws.ownSemicolon = this.spaces;
        this.spaces = '';
      }
    }
  }; // Helpers


  _proto.init = function init(node, line, column) {
    this.current.push(node);
    node.source = {
      start: {
        line: line,
        column: column
      },
      input: this.input
    };
    node.raws.before = this.spaces;
    this.spaces = '';
    if (node.type !== 'comment') this.semicolon = false;
  };

  _proto.raw = function raw(node, prop, tokens) {
    var token, type;
    var length = tokens.length;
    var value = '';
    var clean = true;
    var next, prev;
    var pattern = /^([.|#])?([\w])+/i;

    for (var i = 0; i < length; i += 1) {
      token = tokens[i];
      type = token[0];

      if (type === 'comment' && node.type === 'rule') {
        prev = tokens[i - 1];
        next = tokens[i + 1];

        if (prev[0] !== 'space' && next[0] !== 'space' && pattern.test(prev[1]) && pattern.test(next[1])) {
          value += token[1];
        } else {
          clean = false;
        }

        continue;
      }

      if (type === 'comment' || type === 'space' && i === length - 1) {
        clean = false;
      } else {
        value += token[1];
      }
    }

    if (!clean) {
      var raw = tokens.reduce(function (all, i) {
        return all + i[1];
      }, '');
      node.raws[prop] = {
        value: value,
        raw: raw
      };
    }

    node[prop] = value;
  };

  _proto.spacesAndCommentsFromEnd = function spacesAndCommentsFromEnd(tokens) {
    var lastTokenType;
    var spaces = '';

    while (tokens.length) {
      lastTokenType = tokens[tokens.length - 1][0];
      if (lastTokenType !== 'space' && lastTokenType !== 'comment') break;
      spaces = tokens.pop()[1] + spaces;
    }

    return spaces;
  };

  _proto.spacesAndCommentsFromStart = function spacesAndCommentsFromStart(tokens) {
    var next;
    var spaces = '';

    while (tokens.length) {
      next = tokens[0][0];
      if (next !== 'space' && next !== 'comment') break;
      spaces += tokens.shift()[1];
    }

    return spaces;
  };

  _proto.spacesFromEnd = function spacesFromEnd(tokens) {
    var lastTokenType;
    var spaces = '';

    while (tokens.length) {
      lastTokenType = tokens[tokens.length - 1][0];
      if (lastTokenType !== 'space') break;
      spaces = tokens.pop()[1] + spaces;
    }

    return spaces;
  };

  _proto.stringFrom = function stringFrom(tokens, from) {
    var result = '';

    for (var i = from; i < tokens.length; i++) {
      result += tokens[i][1];
    }

    tokens.splice(from, tokens.length - from);
    return result;
  };

  _proto.colon = function colon(tokens) {
    var brackets = 0;
    var token, type, prev;

    for (var i = 0; i < tokens.length; i++) {
      token = tokens[i];
      type = token[0];

      if (type === '(') {
        brackets += 1;
      }

      if (type === ')') {
        brackets -= 1;
      }

      if (brackets === 0 && type === ':') {
        if (!prev) {
          this.doubleColon(token);
        } else if (prev[0] === 'word' && prev[1] === 'progid') {
          continue;
        } else {
          return i;
        }
      }

      prev = token;
    }

    return false;
  }; // Errors


  _proto.unclosedBracket = function unclosedBracket(bracket) {
    throw this.input.error('Unclosed bracket', bracket[2], bracket[3]);
  };

  _proto.unknownWord = function unknownWord(tokens) {
    throw this.input.error('Unknown word', tokens[0][2], tokens[0][3]);
  };

  _proto.unexpectedClose = function unexpectedClose(token) {
    throw this.input.error('Unexpected }', token[2], token[3]);
  };

  _proto.unclosedBlock = function unclosedBlock() {
    var pos = this.current.source.start;
    throw this.input.error('Unclosed block', pos.line, pos.column);
  };

  _proto.doubleColon = function doubleColon(token) {
    throw this.input.error('Double colon', token[2], token[3]);
  };

  _proto.unnamedAtrule = function unnamedAtrule(node, token) {
    throw this.input.error('At-rule without name', token[2], token[3]);
  };

  _proto.precheckMissedSemicolon = function precheckMissedSemicolon()
  /* tokens */
  {// Hook for Safe Parser
  };

  _proto.checkMissedSemicolon = function checkMissedSemicolon(tokens) {
    var colon = this.colon(tokens);
    if (colon === false) return;
    var founded = 0;
    var token;

    for (var j = colon - 1; j >= 0; j--) {
      token = tokens[j];

      if (token[0] !== 'space') {
        founded += 1;
        if (founded === 2) break;
      }
    }

    throw this.input.error('Missed semicolon', token[2], token[3]);
  };

  return Parser;
}();

exports.default = Parser;
module.exports = exports.default;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _node = _interopRequireDefault(__webpack_require__(20));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
/**
 * Represents a CSS declaration.
 *
 * @extends Node
 *
 * @example
 * const root = postcss.parse('a { color: black }')
 * const decl = root.first.first
 * decl.type       //=> 'decl'
 * decl.toString() //=> ' color: black'
 */


var Declaration =
/*#__PURE__*/
function (_Node) {
  _inheritsLoose(Declaration, _Node);

  function Declaration(defaults) {
    var _this;

    _this = _Node.call(this, defaults) || this;
    _this.type = 'decl';
    return _this;
  }
  /**
   * @memberof Declaration#
   * @member {string} prop The declaration’s property name.
   *
   * @example
   * const root = postcss.parse('a { color: black }')
   * const decl = root.first.first
   * decl.prop //=> 'color'
   */

  /**
   * @memberof Declaration#
   * @member {string} value The declaration’s value.
   *
   * @example
   * const root = postcss.parse('a { color: black }')
   * const decl = root.first.first
   * decl.value //=> 'black'
   */

  /**
   * @memberof Declaration#
   * @member {boolean} important `true` if the declaration
   *                             has an !important annotation.
   *
   * @example
   * const root = postcss.parse('a { color: black !important; color: red }')
   * root.first.first.important //=> true
   * root.first.last.important  //=> undefined
   */

  /**
   * @memberof Declaration#
   * @member {object} raws Information to generate byte-to-byte equal
   *                       node string as it was in the origin input.
   *
   * Every parser saves its own properties,
   * but the default CSS parser uses:
   *
   * * `before`: the space symbols before the node. It also stores `*`
   *   and `_` symbols before the declaration (IE hack).
   * * `between`: the symbols between the property and value
   *   for declarations.
   * * `important`: the content of the important statement,
   *   if it is not just `!important`.
   *
   * PostCSS cleans declaration from comments and extra spaces,
   * but it stores origin content in raws properties.
   * As such, if you don’t change a declaration’s value,
   * PostCSS will use the raw value with comments.
   *
   * @example
   * const root = postcss.parse('a {\n  color:black\n}')
   * root.first.first.raws //=> { before: '\n  ', between: ':' }
   */


  return Declaration;
}(_node.default);

var _default = Declaration;
exports.default = _default;
module.exports = exports.default;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _container = _interopRequireDefault(__webpack_require__(13));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
/**
 * Represents an at-rule.
 *
 * If it’s followed in the CSS by a {} block, this node will have
 * a nodes property representing its children.
 *
 * @extends Container
 *
 * @example
 * const root = postcss.parse('@charset "UTF-8"; @media print {}')
 *
 * const charset = root.first
 * charset.type  //=> 'atrule'
 * charset.nodes //=> undefined
 *
 * const media = root.last
 * media.nodes   //=> []
 */


var AtRule =
/*#__PURE__*/
function (_Container) {
  _inheritsLoose(AtRule, _Container);

  function AtRule(defaults) {
    var _this;

    _this = _Container.call(this, defaults) || this;
    _this.type = 'atrule';
    return _this;
  }

  var _proto = AtRule.prototype;

  _proto.append = function append() {
    var _Container$prototype$;

    if (!this.nodes) this.nodes = [];

    for (var _len = arguments.length, children = new Array(_len), _key = 0; _key < _len; _key++) {
      children[_key] = arguments[_key];
    }

    return (_Container$prototype$ = _Container.prototype.append).call.apply(_Container$prototype$, [this].concat(children));
  };

  _proto.prepend = function prepend() {
    var _Container$prototype$2;

    if (!this.nodes) this.nodes = [];

    for (var _len2 = arguments.length, children = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      children[_key2] = arguments[_key2];
    }

    return (_Container$prototype$2 = _Container.prototype.prepend).call.apply(_Container$prototype$2, [this].concat(children));
  };
  /**
   * @memberof AtRule#
   * @member {string} name The at-rule’s name immediately follows the `@`.
   *
   * @example
   * const root  = postcss.parse('@media print {}')
   * media.name //=> 'media'
   * const media = root.first
   */

  /**
   * @memberof AtRule#
   * @member {string} params The at-rule’s parameters, the values
   *                         that follow the at-rule’s name but precede
   *                         any {} block.
   *
   * @example
   * const root  = postcss.parse('@media print, screen {}')
   * const media = root.first
   * media.params //=> 'print, screen'
   */

  /**
   * @memberof AtRule#
   * @member {object} raws Information to generate byte-to-byte equal
   *                        node string as it was in the origin input.
   *
   * Every parser saves its own properties,
   * but the default CSS parser uses:
   *
   * * `before`: the space symbols before the node. It also stores `*`
   *   and `_` symbols before the declaration (IE hack).
   * * `after`: the space symbols after the last child of the node
   *   to the end of the node.
   * * `between`: the symbols between the property and value
   *   for declarations, selector and `{` for rules, or last parameter
   *   and `{` for at-rules.
   * * `semicolon`: contains true if the last child has
   *   an (optional) semicolon.
   * * `afterName`: the space between the at-rule name and its parameters.
   *
   * PostCSS cleans at-rule parameters from comments and extra spaces,
   * but it stores origin content in raws properties.
   * As such, if you don’t change a declaration’s value,
   * PostCSS will use the raw value with comments.
   *
   * @example
   * const root = postcss.parse('  @media\nprint {\n}')
   * root.first.first.raws //=> { before: '  ',
   *                       //     between: ' ',
   *                       //     afterName: '\n',
   *                       //     after: '\n' }
   */


  return AtRule;
}(_container.default);

var _default = AtRule;
exports.default = _default;
module.exports = exports.default;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _parser = _interopRequireDefault(__webpack_require__(66));

var _input = _interopRequireDefault(__webpack_require__(59));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function parse(css, opts) {
  var input = new _input.default(css, opts);
  var parser = new _parser.default(input);

  try {
    parser.parse();
  } catch (e) {
    if (false) {
      if (e.name === 'CssSyntaxError' && opts && opts.from) {
        if (/\.scss$/i.test(opts.from)) {
          e.message += '\nYou tried to parse SCSS with ' + 'the standard CSS parser; ' + 'try again with the postcss-scss parser';
        } else if (/\.sass/i.test(opts.from)) {
          e.message += '\nYou tried to parse Sass with ' + 'the standard CSS parser; ' + 'try again with the postcss-sass parser';
        } else if (/\.less$/i.test(opts.from)) {
          e.message += '\nYou tried to parse Less with ' + 'the standard CSS parser; ' + 'try again with the postcss-less parser';
        }
      }
    }

    throw e;
  }

  return parser.root;
}

var _default = parse;
exports.default = _default;
module.exports = exports.default;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _container = _interopRequireDefault(__webpack_require__(13));

var _list = _interopRequireDefault(__webpack_require__(133));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
/**
 * Represents a CSS rule: a selector followed by a declaration block.
 *
 * @extends Container
 *
 * @example
 * const root = postcss.parse('a{}')
 * const rule = root.first
 * rule.type       //=> 'rule'
 * rule.toString() //=> 'a{}'
 */


var Rule =
/*#__PURE__*/
function (_Container) {
  _inheritsLoose(Rule, _Container);

  function Rule(defaults) {
    var _this;

    _this = _Container.call(this, defaults) || this;
    _this.type = 'rule';
    if (!_this.nodes) _this.nodes = [];
    return _this;
  }
  /**
   * An array containing the rule’s individual selectors.
   * Groups of selectors are split at commas.
   *
   * @type {string[]}
   *
   * @example
   * const root = postcss.parse('a, b { }')
   * const rule = root.first
   *
   * rule.selector  //=> 'a, b'
   * rule.selectors //=> ['a', 'b']
   *
   * rule.selectors = ['a', 'strong']
   * rule.selector //=> 'a, strong'
   */


  _createClass(Rule, [{
    key: "selectors",
    get: function get() {
      return _list.default.comma(this.selector);
    },
    set: function set(values) {
      var match = this.selector ? this.selector.match(/,\s*/) : null;
      var sep = match ? match[0] : ',' + this.raw('between', 'beforeOpen');
      this.selector = values.join(sep);
    }
    /**
     * @memberof Rule#
     * @member {string} selector The rule’s full selector represented
     *                           as a string.
     *
     * @example
     * const root = postcss.parse('a, b { }')
     * const rule = root.first
     * rule.selector //=> 'a, b'
     */

    /**
     * @memberof Rule#
     * @member {object} raws Information to generate byte-to-byte equal
     *                       node string as it was in the origin input.
     *
     * Every parser saves its own properties,
     * but the default CSS parser uses:
     *
     * * `before`: the space symbols before the node. It also stores `*`
     *   and `_` symbols before the declaration (IE hack).
     * * `after`: the space symbols after the last child of the node
     *   to the end of the node.
     * * `between`: the symbols between the property and value
     *   for declarations, selector and `{` for rules, or last parameter
     *   and `{` for at-rules.
     * * `semicolon`: contains `true` if the last child has
     *   an (optional) semicolon.
     * * `ownSemicolon`: contains `true` if there is semicolon after rule.
     *
     * PostCSS cleans selectors from comments and extra spaces,
     * but it stores origin content in raws properties.
     * As such, if you don’t change a declaration’s value,
     * PostCSS will use the raw value with comments.
     *
     * @example
     * const root = postcss.parse('a {\n  color:black\n}')
     * root.first.first.raws //=> { before: '', between: ' ', after: '\n' }
     */

  }]);

  return Rule;
}(_container.default);

var _default = Rule;
exports.default = _default;
module.exports = exports.default;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.__esModule = true;
exports.default = void 0;

var _mapGenerator = _interopRequireDefault(__webpack_require__(135));

var _stringify2 = _interopRequireDefault(__webpack_require__(65));

var _warnOnce = _interopRequireDefault(__webpack_require__(136));

var _result = _interopRequireDefault(__webpack_require__(137));

var _parse = _interopRequireDefault(__webpack_require__(69));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function isPromise(obj) {
  return _typeof(obj) === 'object' && typeof obj.then === 'function';
}
/**
 * A Promise proxy for the result of PostCSS transformations.
 *
 * A `LazyResult` instance is returned by {@link Processor#process}.
 *
 * @example
 * const lazy = postcss([autoprefixer]).process(css)
 */


var LazyResult =
/*#__PURE__*/
function () {
  function LazyResult(processor, css, opts) {
    this.stringified = false;
    this.processed = false;
    var root;

    if (_typeof(css) === 'object' && css !== null && css.type === 'root') {
      root = css;
    } else if (css instanceof LazyResult || css instanceof _result.default) {
      root = css.root;

      if (css.map) {
        if (typeof opts.map === 'undefined') opts.map = {};
        if (!opts.map.inline) opts.map.inline = false;
        opts.map.prev = css.map;
      }
    } else {
      var parser = _parse.default;
      if (opts.syntax) parser = opts.syntax.parse;
      if (opts.parser) parser = opts.parser;
      if (parser.parse) parser = parser.parse;

      try {
        root = parser(css, opts);
      } catch (error) {
        this.error = error;
      }
    }

    this.result = new _result.default(processor, root, opts);
  }
  /**
   * Returns a {@link Processor} instance, which will be used
   * for CSS transformations.
   *
   * @type {Processor}
   */


  var _proto = LazyResult.prototype;
  /**
   * Processes input CSS through synchronous plugins
   * and calls {@link Result#warnings()}.
   *
   * @return {Warning[]} Warnings from plugins.
   */

  _proto.warnings = function warnings() {
    return this.sync().warnings();
  };
  /**
   * Alias for the {@link LazyResult#css} property.
   *
   * @example
   * lazy + '' === lazy.css
   *
   * @return {string} Output CSS.
   */


  _proto.toString = function toString() {
    return this.css;
  };
  /**
   * Processes input CSS through synchronous and asynchronous plugins
   * and calls `onFulfilled` with a Result instance. If a plugin throws
   * an error, the `onRejected` callback will be executed.
   *
   * It implements standard Promise API.
   *
   * @param {onFulfilled} onFulfilled Callback will be executed
   *                                  when all plugins will finish work.
   * @param {onRejected}  onRejected  Callback will be executed on any error.
   *
   * @return {Promise} Promise API to make queue.
   *
   * @example
   * postcss([autoprefixer]).process(css, { from: cssPath }).then(result => {
   *   console.log(result.css)
   * })
   */


  _proto.then = function then(onFulfilled, onRejected) {
    if (false) {
      if (!('from' in this.opts)) {
        (0, _warnOnce.default)('Without `from` option PostCSS could generate wrong source map ' + 'and will not find Browserslist config. Set it to CSS file path ' + 'or to `undefined` to prevent this warning.');
      }
    }

    return this.async().then(onFulfilled, onRejected);
  };
  /**
   * Processes input CSS through synchronous and asynchronous plugins
   * and calls onRejected for each error thrown in any plugin.
   *
   * It implements standard Promise API.
   *
   * @param {onRejected} onRejected Callback will be executed on any error.
   *
   * @return {Promise} Promise API to make queue.
   *
   * @example
   * postcss([autoprefixer]).process(css).then(result => {
   *   console.log(result.css)
   * }).catch(error => {
   *   console.error(error)
   * })
   */


  _proto.catch = function _catch(onRejected) {
    return this.async().catch(onRejected);
  };
  /**
   * Processes input CSS through synchronous and asynchronous plugins
   * and calls onFinally on any error or when all plugins will finish work.
   *
   * It implements standard Promise API.
   *
   * @param {onFinally} onFinally Callback will be executed on any error or
   *                              when all plugins will finish work.
   *
   * @return {Promise} Promise API to make queue.
   *
   * @example
   * postcss([autoprefixer]).process(css).finally(() => {
   *   console.log('processing ended')
   * })
   */


  _proto.finally = function _finally(onFinally) {
    return this.async().then(onFinally, onFinally);
  };

  _proto.handleError = function handleError(error, plugin) {
    try {
      this.error = error;

      if (error.name === 'CssSyntaxError' && !error.plugin) {
        error.plugin = plugin.postcssPlugin;
        error.setMessage();
      } else if (plugin.postcssVersion) {
        if (false) {
          var pluginName = plugin.postcssPlugin;
          var pluginVer = plugin.postcssVersion;
          var runtimeVer = this.result.processor.version;
          var a = pluginVer.split('.');
          var b = runtimeVer.split('.');

          if (a[0] !== b[0] || parseInt(a[1]) > parseInt(b[1])) {
            console.error('Unknown error from PostCSS plugin. Your current PostCSS ' + 'version is ' + runtimeVer + ', but ' + pluginName + ' uses ' + pluginVer + '. Perhaps this is the source of the error below.');
          }
        }
      }
    } catch (err) {
      if (console && console.error) console.error(err);
    }
  };

  _proto.asyncTick = function asyncTick(resolve, reject) {
    var _this = this;

    if (this.plugin >= this.processor.plugins.length) {
      this.processed = true;
      return resolve();
    }

    try {
      var plugin = this.processor.plugins[this.plugin];
      var promise = this.run(plugin);
      this.plugin += 1;

      if (isPromise(promise)) {
        promise.then(function () {
          _this.asyncTick(resolve, reject);
        }).catch(function (error) {
          _this.handleError(error, plugin);

          _this.processed = true;
          reject(error);
        });
      } else {
        this.asyncTick(resolve, reject);
      }
    } catch (error) {
      this.processed = true;
      reject(error);
    }
  };

  _proto.async = function async() {
    var _this2 = this;

    if (this.processed) {
      return new Promise(function (resolve, reject) {
        if (_this2.error) {
          reject(_this2.error);
        } else {
          resolve(_this2.stringify());
        }
      });
    }

    if (this.processing) {
      return this.processing;
    }

    this.processing = new Promise(function (resolve, reject) {
      if (_this2.error) return reject(_this2.error);
      _this2.plugin = 0;

      _this2.asyncTick(resolve, reject);
    }).then(function () {
      _this2.processed = true;
      return _this2.stringify();
    });
    return this.processing;
  };

  _proto.sync = function sync() {
    if (this.processed) return this.result;
    this.processed = true;

    if (this.processing) {
      throw new Error('Use process(css).then(cb) to work with async plugins');
    }

    if (this.error) throw this.error;

    for (var _iterator = this.result.processor.plugins, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var plugin = _ref;
      var promise = this.run(plugin);

      if (isPromise(promise)) {
        throw new Error('Use process(css).then(cb) to work with async plugins');
      }
    }

    return this.result;
  };

  _proto.run = function run(plugin) {
    this.result.lastPlugin = plugin;

    try {
      return plugin(this.result.root, this.result);
    } catch (error) {
      this.handleError(error, plugin);
      throw error;
    }
  };

  _proto.stringify = function stringify() {
    if (this.stringified) return this.result;
    this.stringified = true;
    this.sync();
    var opts = this.result.opts;
    var str = _stringify2.default;
    if (opts.syntax) str = opts.syntax.stringify;
    if (opts.stringifier) str = opts.stringifier;
    if (str.stringify) str = str.stringify;
    var map = new _mapGenerator.default(str, this.result.root, this.result.opts);
    var data = map.generate();
    this.result.css = data[0];
    this.result.map = data[1];
    return this.result;
  };

  _createClass(LazyResult, [{
    key: "processor",
    get: function get() {
      return this.result.processor;
    }
    /**
     * Options from the {@link Processor#process} call.
     *
     * @type {processOptions}
     */

  }, {
    key: "opts",
    get: function get() {
      return this.result.opts;
    }
    /**
     * Processes input CSS through synchronous plugins, converts `Root`
     * to a CSS string and returns {@link Result#css}.
     *
     * This property will only work with synchronous plugins.
     * If the processor contains any asynchronous plugins
     * it will throw an error. This is why this method is only
     * for debug purpose, you should always use {@link LazyResult#then}.
     *
     * @type {string}
     * @see Result#css
     */

  }, {
    key: "css",
    get: function get() {
      return this.stringify().css;
    }
    /**
     * An alias for the `css` property. Use it with syntaxes
     * that generate non-CSS output.
     *
     * This property will only work with synchronous plugins.
     * If the processor contains any asynchronous plugins
     * it will throw an error. This is why this method is only
     * for debug purpose, you should always use {@link LazyResult#then}.
     *
     * @type {string}
     * @see Result#content
     */

  }, {
    key: "content",
    get: function get() {
      return this.stringify().content;
    }
    /**
     * Processes input CSS through synchronous plugins
     * and returns {@link Result#map}.
     *
     * This property will only work with synchronous plugins.
     * If the processor contains any asynchronous plugins
     * it will throw an error. This is why this method is only
     * for debug purpose, you should always use {@link LazyResult#then}.
     *
     * @type {SourceMapGenerator}
     * @see Result#map
     */

  }, {
    key: "map",
    get: function get() {
      return this.stringify().map;
    }
    /**
     * Processes input CSS through synchronous plugins
     * and returns {@link Result#root}.
     *
     * This property will only work with synchronous plugins. If the processor
     * contains any asynchronous plugins it will throw an error.
     *
     * This is why this method is only for debug purpose,
     * you should always use {@link LazyResult#then}.
     *
     * @type {Root}
     * @see Result#root
     */

  }, {
    key: "root",
    get: function get() {
      return this.sync().root;
    }
    /**
     * Processes input CSS through synchronous plugins
     * and returns {@link Result#messages}.
     *
     * This property will only work with synchronous plugins. If the processor
     * contains any asynchronous plugins it will throw an error.
     *
     * This is why this method is only for debug purpose,
     * you should always use {@link LazyResult#then}.
     *
     * @type {Message[]}
     * @see Result#messages
     */

  }, {
    key: "messages",
    get: function get() {
      return this.sync().messages;
    }
  }]);

  return LazyResult;
}();

var _default = LazyResult;
/**
 * @callback onFulfilled
 * @param {Result} result
 */

/**
 * @callback onRejected
 * @param {Error} error
 */

exports.default = _default;
module.exports = exports.default;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var _comment = __webpack_require__(21);

var _comment2 = _interopRequireDefault(_comment);

var _import2 = __webpack_require__(157);

var _import3 = _interopRequireDefault(_import2);

var _parser = __webpack_require__(85);

var _parser2 = _interopRequireDefault(_parser);

var _rule = __webpack_require__(164);

var _rule2 = _interopRequireDefault(_rule);

var _root = __webpack_require__(165);

var _root2 = _interopRequireDefault(_root);

var _findExtendRule = __webpack_require__(166);

var _findExtendRule2 = _interopRequireDefault(_findExtendRule);

var _isMixinToken = __webpack_require__(167);

var _isMixinToken2 = _interopRequireDefault(_isMixinToken);

var _lessTokenize = __webpack_require__(168);

var _lessTokenize2 = _interopRequireDefault(_lessTokenize);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var blockCommentEndPattern = /\*\/$/;

var LessParser = function (_Parser) {
  _inherits(LessParser, _Parser);

  function LessParser(input) {
    _classCallCheck(this, LessParser);

    var _this = _possibleConstructorReturn(this, (LessParser.__proto__ || Object.getPrototypeOf(LessParser)).call(this, input));

    _this.root = new _root2.default();
    _this.current = _this.root;
    _this.root.source = {
      input: input,
      start: {
        line: 1,
        column: 1
      }
    };
    return _this;
  }

  _createClass(LessParser, [{
    key: 'atrule',
    value: function atrule(token) {
      if (token[1] === '@import') {
        this.import(token);
      } else {
        _get(LessParser.prototype.__proto__ || Object.getPrototypeOf(LessParser.prototype), 'atrule', this).call(this, token);
      }
    }
  }, {
    key: 'comment',
    value: function comment(token) {
      var node = new _comment2.default();
      var content = token[1];
      var text = content.slice(2).replace(blockCommentEndPattern, '');
      this.init(node, token[2], token[3]);
      node.source.end = {
        line: token[4],
        column: token[5]
      };
      node.raws.content = content;
      node.raws.begin = content[0] + content[1];
      node.inline = token[6] === 'inline';
      node.block = !node.inline;

      if (/^\s*$/.test(text)) {
        node.text = '';
        node.raws.left = text;
        node.raws.right = '';
      } else {
        var match = text.match(/^(\s*)([^]*[^\s])(\s*)$/);
        node.text = match[2]; // Add extra spaces to generate a comment in a common style /*[space][text][space]*/

        node.raws.left = match[1] || ' ';
        node.raws.right = match[3] || ' ';
      }
    }
    /**
     * @description Create a Declaration
     * @param options {{start: number}}
     */

  }, {
    key: 'createDeclaration',
    value: function createDeclaration(options) {
      this.decl(this.tokens.slice(options.start, this.pos + 1));
    }
    /**
     * @description Create a Rule node
     * @param options {{start: number, params: Array}}
     */

  }, {
    key: 'createRule',
    value: function createRule(options) {
      var semi = this.tokens[this.pos][0] === ';';
      var end = this.pos + (options.empty && semi ? 2 : 1);
      var tokens = this.tokens.slice(options.start, end);
      var node = this.rule(tokens);
      /**
       * By default in PostCSS `Rule.params` is `undefined`.
       * To preserve compability with PostCSS:
       *  - Don't set empty params for a Rule.
       *  - Set params for a Rule only if it can be a mixin or &:extend rule.
       */

      if (options.params[0] && (options.mixin || options.extend)) {
        this.raw(node, 'params', options.params);
      }

      if (options.empty) {
        // if it's an empty mixin or extend, it must have a semicolon
        // (that's the only way we get to this point)
        if (semi) {
          node.raws.semicolon = this.semicolon = true;
          node.selector = node.selector.replace(/;$/, '');
        }

        if (options.extend) {
          node.extend = true;
        }

        if (options.mixin) {
          node.mixin = true;
        }
        /**
         * @description Mark mixin without declarations.
         * @type {boolean}
         */


        node.empty = true; // eslint-disable-next-line

        delete this.current.nodes;

        if (/!\s*important/i.test(node.selector)) {
          node.important = true;

          if (/\s*!\s*important/i.test(node.selector)) {
            node.raws.important = node.selector.match(/(\s*!\s*important)/i)[1];
          }

          node.selector = node.selector.replace(/\s*!\s*important/i, '');
        } // rules don't have trailing semicolons in vanilla css, so they get
        // added to this.spaces by the parser loop, so don't step back.


        if (!semi) {
          this.pos--;
        }

        this.end(this.tokens[this.pos]);
      }
    }
  }, {
    key: 'end',
    value: function end(token) {
      var node = this.current; // if a Rule contains other Rules (mixins, extends) and those have
      // semicolons, assert that the parent Rule has a semicolon

      if (node.nodes && node.nodes.length && node.last.raws.semicolon && !node.last.nodes) {
        this.semicolon = true;
      }

      _get(LessParser.prototype.__proto__ || Object.getPrototypeOf(LessParser.prototype), 'end', this).call(this, token);
    }
  }, {
    key: 'import',
    value: function _import(token) {
      /* eslint complexity: 0 */
      var last = false,
          open = false,
          end = {
        line: 0,
        column: 0
      };
      var directives = [];
      var node = new _import3.default();
      node.name = token[1].slice(1);
      this.init(node, token[2], token[3]);
      this.pos += 1;

      while (this.pos < this.tokens.length) {
        var tokn = this.tokens[this.pos];

        if (tokn[0] === ';') {
          end = {
            line: tokn[2],
            column: tokn[3]
          };
          node.raws.semicolon = true;
          break;
        } else if (tokn[0] === '{') {
          open = true;
          break;
        } else if (tokn[0] === '}') {
          this.end(tokn);
          break;
        } else if (tokn[0] === 'brackets') {
          if (node.urlFunc) {
            node.importPath = tokn[1].replace(/[()]/g, '');
          } else {
            directives.push(tokn);
          }
        } else if (tokn[0] === 'space') {
          if (directives.length) {
            node.raws.between = tokn[1];
          } else if (node.urlFunc) {
            node.raws.beforeUrl = tokn[1];
          } else if (node.importPath) {
            if (node.urlFunc) {
              node.raws.afterUrl = tokn[1];
            } else {
              node.raws.after = tokn[1];
            }
          } else {
            node.raws.afterName = tokn[1];
          }
        } else if (tokn[0] === 'word' && tokn[1] === 'url') {
          node.urlFunc = true;
        } else {
          if (tokn[0] !== '(' && tokn[0] !== ')') {
            node.importPath = tokn[1];
          }
        }

        if (this.pos === this.tokens.length) {
          last = true;
          break;
        }

        this.pos += 1;
      }

      if (node.raws.between && !node.raws.afterName) {
        node.raws.afterName = node.raws.between;
        node.raws.between = '';
      }

      node.source.end = end;

      if (directives.length) {
        this.raw(node, 'directives', directives);

        if (last) {
          token = directives[directives.length - 1];
          node.source.end = {
            line: token[4],
            column: token[5]
          };
          this.spaces = node.raws.between;
          node.raws.between = '';
        }
      } else {
        node.directives = '';
      }

      if (open) {
        node.nodes = [];
        this.current = node;
      }
    }
    /* eslint-disable max-statements, complexity */

  }, {
    key: 'other',
    value: function other() {
      var brackets = [];
      var params = [];
      var start = this.pos;
      var end = false,
          colon = false,
          bracket = null; // we need pass "()" as spaces
      // However we can override method Parser.loop, but it seems less maintainable

      if (this.tokens[start][0] === 'brackets') {
        this.spaces += this.tokens[start][1];
        return;
      }

      var mixin = (0, _isMixinToken2.default)(this.tokens[start]);
      var extend = Boolean((0, _findExtendRule2.default)(this.tokens, start));

      while (this.pos < this.tokens.length) {
        var token = this.tokens[this.pos];
        var type = token[0];

        if (type === '(' || type === '[') {
          if (!bracket) {
            bracket = token;
          }

          brackets.push(type === '(' ? ')' : ']');
        } else if (brackets.length === 0) {
          if (type === ';') {
            var foundEndOfRule = this.ruleEnd({
              start: start,
              params: params,
              colon: colon,
              mixin: mixin,
              extend: extend
            });

            if (foundEndOfRule) {
              return;
            }

            break;
          } else if (type === '{') {
            this.createRule({
              start: start,
              params: params,
              mixin: mixin
            });
            return;
          } else if (type === '}') {
            this.pos -= 1;
            end = true;
            break;
          } else if (type === ':') {
            colon = true;
          }
        } else if (type === brackets[brackets.length - 1]) {
          brackets.pop();

          if (brackets.length === 0) {
            bracket = null;
          }
        } // we don't want to add params for pseudo-selectors that utilize parens (#56)
        // if ((extend || !colon) && (brackets.length > 0 || type === 'brackets' || params[0])) {
        //   params.push(token);
        // }
        // we don't want to add params for pseudo-selectors that utilize parens (#56) or bracket selectors (#96)


        if ((extend || !colon) && (brackets.length > 0 || type === 'brackets' || params[0]) && brackets[0] !== ']') {
          params.push(token);
        }

        this.pos += 1;
      }

      if (this.pos === this.tokens.length) {
        this.pos -= 1;
        end = true;
      }

      if (brackets.length > 0) {
        this.unclosedBracket(bracket);
      } // dont process an end of rule if there's only one token and it's unknown (#64)


      if (end && this.tokens.length > 1) {
        // Handle the case where the there is only a single token in the end rule.
        if (start === this.pos) {
          this.pos += 1;
        }

        var _foundEndOfRule = this.ruleEnd({
          start: start,
          params: params,
          colon: colon,
          mixin: mixin,
          extend: extend,
          isEndOfBlock: true
        });

        if (_foundEndOfRule) {
          return;
        }
      }

      this.unknownWord(start);
    }
  }, {
    key: 'rule',
    value: function rule(tokens) {
      tokens.pop();
      var node = new _rule2.default();
      this.init(node, tokens[0][2], tokens[0][3]); //node.raws.between = this.spacesFromEnd(tokens);

      node.raws.between = this.spacesAndCommentsFromEnd(tokens);
      this.raw(node, 'selector', tokens);
      this.current = node;
      return node;
    }
  }, {
    key: 'ruleEnd',
    value: function ruleEnd(options) {
      var start = options.start;

      if (options.extend || options.mixin) {
        this.createRule(Object.assign(options, {
          empty: true
        }));
        return true;
      }

      if (options.colon) {
        if (options.isEndOfBlock) {
          while (this.pos > start) {
            var token = this.tokens[this.pos][0];

            if (token !== 'space' && token !== 'comment') {
              break;
            }

            this.pos -= 1;
          }
        }

        this.createDeclaration({
          start: start
        });
        return true;
      }

      return false;
    }
  }, {
    key: 'tokenize',
    value: function tokenize() {
      this.tokens = (0, _lessTokenize2.default)(this.input);
    }
    /* eslint-enable max-statements, complexity */

  }]);

  return LessParser;
}(_parser2.default);

exports.default = LessParser;
module.exports = exports['default'];

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _supportsColor = __webpack_require__(142);

var _supportsColor2 = _interopRequireDefault(_supportsColor);

var _chalk = __webpack_require__(74);

var _chalk2 = _interopRequireDefault(_chalk);

var _terminalHighlight = __webpack_require__(148);

var _terminalHighlight2 = _interopRequireDefault(_terminalHighlight);

var _warnOnce = __webpack_require__(4);

var _warnOnce2 = _interopRequireDefault(_warnOnce);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
/**
 * The CSS parser throws this error for broken CSS.
 *
 * Custom parsers can throw this error for broken custom syntax using
 * the {@link Node#error} method.
 *
 * PostCSS will use the input source map to detect the original error location.
 * If you wrote a Sass file, compiled it to CSS and then parsed it with PostCSS,
 * PostCSS will show the original position in the Sass file.
 *
 * If you need the position in the PostCSS input
 * (e.g., to debug the previous compiler), use `error.input.file`.
 *
 * @example
 * // Catching and checking syntax error
 * try {
 *   postcss.parse('a{')
 * } catch (error) {
 *   if ( error.name === 'CssSyntaxError' ) {
 *     error //=> CssSyntaxError
 *   }
 * }
 *
 * @example
 * // Raising error from plugin
 * throw node.error('Unknown variable', { plugin: 'postcss-vars' });
 */


var CssSyntaxError = function () {
  /**
   * @param {string} message  - error message
   * @param {number} [line]   - source line of the error
   * @param {number} [column] - source column of the error
   * @param {string} [source] - source code of the broken file
   * @param {string} [file]   - absolute path to the broken file
   * @param {string} [plugin] - PostCSS plugin name, if error came from plugin
   */
  function CssSyntaxError(message, line, column, source, file, plugin) {
    _classCallCheck(this, CssSyntaxError);
    /**
     * @member {string} - Always equal to `'CssSyntaxError'`. You should
     *                    always check error type
     *                    by `error.name === 'CssSyntaxError'` instead of
     *                    `error instanceof CssSyntaxError`, because
     *                    npm could have several PostCSS versions.
     *
     * @example
     * if ( error.name === 'CssSyntaxError' ) {
     *   error //=> CssSyntaxError
     * }
     */


    this.name = 'CssSyntaxError';
    /**
     * @member {string} - Error message.
     *
     * @example
     * error.message //=> 'Unclosed block'
     */

    this.reason = message;

    if (file) {
      /**
       * @member {string} - Absolute path to the broken file.
       *
       * @example
       * error.file       //=> 'a.sass'
       * error.input.file //=> 'a.css'
       */
      this.file = file;
    }

    if (source) {
      /**
       * @member {string} - Source code of the broken file.
       *
       * @example
       * error.source       //=> 'a { b {} }'
       * error.input.column //=> 'a b { }'
       */
      this.source = source;
    }

    if (plugin) {
      /**
       * @member {string} - Plugin name, if error came from plugin.
       *
       * @example
       * error.plugin //=> 'postcss-vars'
       */
      this.plugin = plugin;
    }

    if (typeof line !== 'undefined' && typeof column !== 'undefined') {
      /**
       * @member {number} - Source line of the error.
       *
       * @example
       * error.line       //=> 2
       * error.input.line //=> 4
       */
      this.line = line;
      /**
       * @member {number} - Source column of the error.
       *
       * @example
       * error.column       //=> 1
       * error.input.column //=> 4
       */

      this.column = column;
    }

    this.setMessage();

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CssSyntaxError);
    }
  }

  CssSyntaxError.prototype.setMessage = function setMessage() {
    /**
     * @member {string} - Full error text in the GNU error format
     *                    with plugin, file, line and column.
     *
     * @example
     * error.message //=> 'a.css:1:1: Unclosed block'
     */
    this.message = this.plugin ? this.plugin + ': ' : '';
    this.message += this.file ? this.file : '<css input>';

    if (typeof this.line !== 'undefined') {
      this.message += ':' + this.line + ':' + this.column;
    }

    this.message += ': ' + this.reason;
  };
  /**
   * Returns a few lines of CSS source that caused the error.
   *
   * If the CSS has an input source map without `sourceContent`,
   * this method will return an empty string.
   *
   * @param {boolean} [color] whether arrow will be colored red by terminal
   *                          color codes. By default, PostCSS will detect
   *                          color support by `process.stdout.isTTY`
   *                          and `process.env.NODE_DISABLE_COLORS`.
   *
   * @example
   * error.showSourceCode() //=> "  4 | }
   *                        //      5 | a {
   *                        //    > 6 |   bad
   *                        //        |   ^
   *                        //      7 | }
   *                        //      8 | b {"
   *
   * @return {string} few lines of CSS source that caused the error
   */


  CssSyntaxError.prototype.showSourceCode = function showSourceCode(color) {
    var _this = this;

    if (!this.source) return '';
    var css = this.source;
    if (typeof color === 'undefined') color = _supportsColor2.default;
    if (color) css = (0, _terminalHighlight2.default)(css);
    var lines = css.split(/\r?\n/);
    var start = Math.max(this.line - 3, 0);
    var end = Math.min(this.line + 2, lines.length);
    var maxWidth = String(end).length;
    var colors = new _chalk2.default.constructor({
      enabled: true
    });

    function mark(text) {
      if (color) {
        return colors.red.bold(text);
      } else {
        return text;
      }
    }

    function aside(text) {
      if (color) {
        return colors.gray(text);
      } else {
        return text;
      }
    }

    return lines.slice(start, end).map(function (line, index) {
      var number = start + 1 + index;
      var gutter = ' ' + (' ' + number).slice(-maxWidth) + ' | ';

      if (number === _this.line) {
        var spacing = aside(gutter.replace(/\d/g, ' ')) + line.slice(0, _this.column - 1).replace(/[^\t]/g, ' ');
        return mark('>') + aside(gutter) + line + '\n ' + spacing + mark('^');
      } else {
        return ' ' + aside(gutter) + line;
      }
    }).join('\n');
  };
  /**
   * Returns error position, message and source code of the broken part.
   *
   * @example
   * error.toString() //=> "CssSyntaxError: app.css:1:1: Unclosed block
   *                  //    > 1 | a {
   *                  //        | ^"
   *
   * @return {string} error position, message and source code
   */


  CssSyntaxError.prototype.toString = function toString() {
    var code = this.showSourceCode();

    if (code) {
      code = '\n\n' + code + '\n';
    }

    return this.name + ': ' + this.message + code;
  };

  _createClass(CssSyntaxError, [{
    key: 'generated',
    get: function get() {
      (0, _warnOnce2.default)('CssSyntaxError#generated is deprecated. Use input instead.');
      return this.input;
    }
    /**
     * @memberof CssSyntaxError#
     * @member {Input} input - Input object with PostCSS internal information
     *                         about input file. If input has source map
     *                         from previous tool, PostCSS will use origin
     *                         (for example, Sass) source. You can use this
     *                         object to get PostCSS input source.
     *
     * @example
     * error.input.file //=> 'a.css'
     * error.file       //=> 'a.sass'
     */

  }]);

  return CssSyntaxError;
}();

exports.default = CssSyntaxError;
module.exports = exports['default'];

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var escapeStringRegexp = __webpack_require__(29);

var ansiStyles = __webpack_require__(143);

var stripAnsi = __webpack_require__(145);

var hasAnsi = __webpack_require__(146);

var supportsColor = __webpack_require__(147);

var defineProps = Object.defineProperties;
var isSimpleWindowsTerm = process.platform === 'win32' && !/^xterm/i.test(process.env.TERM);

function Chalk(options) {
  // detect mode if not set manually
  this.enabled = !options || options.enabled === undefined ? supportsColor : options.enabled;
} // use bright blue on Windows as the normal blue color is illegible


if (isSimpleWindowsTerm) {
  ansiStyles.blue.open = "\x1B[94m";
}

var styles = function () {
  var ret = {};
  Object.keys(ansiStyles).forEach(function (key) {
    ansiStyles[key].closeRe = new RegExp(escapeStringRegexp(ansiStyles[key].close), 'g');
    ret[key] = {
      get: function get() {
        return build.call(this, this._styles.concat(key));
      }
    };
  });
  return ret;
}();

var proto = defineProps(function chalk() {}, styles);

function build(_styles) {
  var builder = function builder() {
    return applyStyle.apply(builder, arguments);
  };

  builder._styles = _styles;
  builder.enabled = this.enabled; // __proto__ is used because we must return a function, but there is
  // no way to create a function with a different prototype.

  /* eslint-disable no-proto */

  builder.__proto__ = proto;
  return builder;
}

function applyStyle() {
  // support varags, but simply cast to string in case there's only one arg
  var args = arguments;
  var argsLen = args.length;
  var str = argsLen !== 0 && String(arguments[0]);

  if (argsLen > 1) {
    // don't slice `arguments`, it prevents v8 optimizations
    for (var a = 1; a < argsLen; a++) {
      str += ' ' + args[a];
    }
  }

  if (!this.enabled || !str) {
    return str;
  }

  var nestedStyles = this._styles;
  var i = nestedStyles.length; // Turns out that on Windows dimmed gray text becomes invisible in cmd.exe,
  // see https://github.com/chalk/chalk/issues/58
  // If we're on Windows and we're dealing with a gray color, temporarily make 'dim' a noop.

  var originalDim = ansiStyles.dim.open;

  if (isSimpleWindowsTerm && (nestedStyles.indexOf('gray') !== -1 || nestedStyles.indexOf('grey') !== -1)) {
    ansiStyles.dim.open = '';
  }

  while (i--) {
    var code = ansiStyles[nestedStyles[i]]; // Replace any instances already present with a re-opening code
    // otherwise only the part of the string until said closing code
    // will be colored, and the rest will simply be 'plain'.

    str = code.open + str.replace(code.closeRe, code.open) + code.close;
  } // Reset the original 'dim' if we changed it to work around the Windows dimmed gray issue.


  ansiStyles.dim.open = originalDim;
  return str;
}

function init() {
  var ret = {};
  Object.keys(styles).forEach(function (name) {
    ret[name] = {
      get: function get() {
        return build.call(this, [name]);
      }
    };
  });
  return ret;
}

defineProps(Chalk.prototype, init());
module.exports = new Chalk();
module.exports.styles = ansiStyles;
module.exports.hasColor = hasAnsi;
module.exports.stripColor = stripAnsi;
module.exports.supportsColor = supportsColor;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  return /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-PRZcf-nqry=><]/g;
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = tokenize;
var SINGLE_QUOTE = 39;
var DOUBLE_QUOTE = 34;
var BACKSLASH = 92;
var SLASH = 47;
var NEWLINE = 10;
var SPACE = 32;
var FEED = 12;
var TAB = 9;
var CR = 13;
var OPEN_SQUARE = 91;
var CLOSE_SQUARE = 93;
var OPEN_PARENTHESES = 40;
var CLOSE_PARENTHESES = 41;
var OPEN_CURLY = 123;
var CLOSE_CURLY = 125;
var SEMICOLON = 59;
var ASTERISK = 42;
var COLON = 58;
var AT = 64;
var RE_AT_END = /[ \n\t\r\f\{\(\)'"\\;/\[\]#]/g;
var RE_WORD_END = /[ \n\t\r\f\(\)\{\}:;@!'"\\\]\[#]|\/(?=\*)/g;
var RE_BAD_BRACKET = /.[\\\/\("'\n]/;

function tokenize(input) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var tokens = [];
  var css = input.css.valueOf();
  var ignore = options.ignoreErrors;
  var code = void 0,
      next = void 0,
      quote = void 0,
      lines = void 0,
      last = void 0,
      content = void 0,
      escape = void 0,
      nextLine = void 0,
      nextOffset = void 0,
      escaped = void 0,
      escapePos = void 0,
      prev = void 0,
      n = void 0;
  var length = css.length;
  var offset = -1;
  var line = 1;
  var pos = 0;

  function unclosed(what) {
    throw input.error('Unclosed ' + what, line, pos - offset);
  }

  while (pos < length) {
    code = css.charCodeAt(pos);

    if (code === NEWLINE || code === FEED || code === CR && css.charCodeAt(pos + 1) !== NEWLINE) {
      offset = pos;
      line += 1;
    }

    switch (code) {
      case NEWLINE:
      case SPACE:
      case TAB:
      case CR:
      case FEED:
        next = pos;

        do {
          next += 1;
          code = css.charCodeAt(next);

          if (code === NEWLINE) {
            offset = next;
            line += 1;
          }
        } while (code === SPACE || code === NEWLINE || code === TAB || code === CR || code === FEED);

        tokens.push(['space', css.slice(pos, next)]);
        pos = next - 1;
        break;

      case OPEN_SQUARE:
        tokens.push(['[', '[', line, pos - offset]);
        break;

      case CLOSE_SQUARE:
        tokens.push([']', ']', line, pos - offset]);
        break;

      case OPEN_CURLY:
        tokens.push(['{', '{', line, pos - offset]);
        break;

      case CLOSE_CURLY:
        tokens.push(['}', '}', line, pos - offset]);
        break;

      case COLON:
        tokens.push([':', ':', line, pos - offset]);
        break;

      case SEMICOLON:
        tokens.push([';', ';', line, pos - offset]);
        break;

      case OPEN_PARENTHESES:
        prev = tokens.length ? tokens[tokens.length - 1][1] : '';
        n = css.charCodeAt(pos + 1);

        if (prev === 'url' && n !== SINGLE_QUOTE && n !== DOUBLE_QUOTE && n !== SPACE && n !== NEWLINE && n !== TAB && n !== FEED && n !== CR) {
          next = pos;

          do {
            escaped = false;
            next = css.indexOf(')', next + 1);

            if (next === -1) {
              if (ignore) {
                next = pos;
                break;
              } else {
                unclosed('bracket');
              }
            }

            escapePos = next;

            while (css.charCodeAt(escapePos - 1) === BACKSLASH) {
              escapePos -= 1;
              escaped = !escaped;
            }
          } while (escaped);

          tokens.push(['brackets', css.slice(pos, next + 1), line, pos - offset, line, next - offset]);
          pos = next;
        } else {
          next = css.indexOf(')', pos + 1);
          content = css.slice(pos, next + 1);

          if (next === -1 || RE_BAD_BRACKET.test(content)) {
            tokens.push(['(', '(', line, pos - offset]);
          } else {
            tokens.push(['brackets', content, line, pos - offset, line, next - offset]);
            pos = next;
          }
        }

        break;

      case CLOSE_PARENTHESES:
        tokens.push([')', ')', line, pos - offset]);
        break;

      case SINGLE_QUOTE:
      case DOUBLE_QUOTE:
        quote = code === SINGLE_QUOTE ? '\'' : '"';
        next = pos;

        do {
          escaped = false;
          next = css.indexOf(quote, next + 1);

          if (next === -1) {
            if (ignore) {
              next = pos + 1;
              break;
            } else {
              unclosed('string');
            }
          }

          escapePos = next;

          while (css.charCodeAt(escapePos - 1) === BACKSLASH) {
            escapePos -= 1;
            escaped = !escaped;
          }
        } while (escaped);

        content = css.slice(pos, next + 1);
        lines = content.split('\n');
        last = lines.length - 1;

        if (last > 0) {
          nextLine = line + last;
          nextOffset = next - lines[last].length;
        } else {
          nextLine = line;
          nextOffset = offset;
        }

        tokens.push(['string', css.slice(pos, next + 1), line, pos - offset, nextLine, next - nextOffset]);
        offset = nextOffset;
        line = nextLine;
        pos = next;
        break;

      case AT:
        RE_AT_END.lastIndex = pos + 1;
        RE_AT_END.test(css);

        if (RE_AT_END.lastIndex === 0) {
          next = css.length - 1;
        } else {
          next = RE_AT_END.lastIndex - 2;
        }

        tokens.push(['at-word', css.slice(pos, next + 1), line, pos - offset, line, next - offset]);
        pos = next;
        break;

      case BACKSLASH:
        next = pos;
        escape = true;

        while (css.charCodeAt(next + 1) === BACKSLASH) {
          next += 1;
          escape = !escape;
        }

        code = css.charCodeAt(next + 1);

        if (escape && code !== SLASH && code !== SPACE && code !== NEWLINE && code !== TAB && code !== CR && code !== FEED) {
          next += 1;
        }

        tokens.push(['word', css.slice(pos, next + 1), line, pos - offset, line, next - offset]);
        pos = next;
        break;

      default:
        if (code === SLASH && css.charCodeAt(pos + 1) === ASTERISK) {
          next = css.indexOf('*/', pos + 2) + 1;

          if (next === 0) {
            if (ignore) {
              next = css.length;
            } else {
              unclosed('comment');
            }
          }

          content = css.slice(pos, next + 1);
          lines = content.split('\n');
          last = lines.length - 1;

          if (last > 0) {
            nextLine = line + last;
            nextOffset = next - lines[last].length;
          } else {
            nextLine = line;
            nextOffset = offset;
          }

          tokens.push(['comment', content, line, pos - offset, nextLine, next - nextOffset]);
          offset = nextOffset;
          line = nextLine;
          pos = next;
        } else {
          RE_WORD_END.lastIndex = pos + 1;
          RE_WORD_END.test(css);

          if (RE_WORD_END.lastIndex === 0) {
            next = css.length - 1;
          } else {
            next = RE_WORD_END.lastIndex - 2;
          }

          tokens.push(['word', css.slice(pos, next + 1), line, pos - offset, line, next - offset]);
          pos = next;
        }

        break;
    }

    pos++;
  }

  return tokens;
}

module.exports = exports['default'];

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * $Id: base64.js,v 2.15 2014/04/05 12:58:57 dankogai Exp dankogai $
 *
 *  Licensed under the BSD 3-Clause License.
 *    http://opensource.org/licenses/BSD-3-Clause
 *
 *  References:
 *    http://en.wikipedia.org/wiki/Base64
 */
(function (global) {
  'use strict'; // existing version for noConflict()

  var _Base64 = global.Base64;
  var version = "2.3.2"; // if node.js, we use Buffer

  var buffer;

  if (typeof module !== 'undefined' && module.exports) {
    try {
      buffer = __webpack_require__(18).Buffer;
    } catch (err) {}
  } // constants


  var b64chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

  var b64tab = function (bin) {
    var t = {};

    for (var i = 0, l = bin.length; i < l; i++) {
      t[bin.charAt(i)] = i;
    }

    return t;
  }(b64chars);

  var fromCharCode = String.fromCharCode; // encoder stuff

  var cb_utob = function cb_utob(c) {
    if (c.length < 2) {
      var cc = c.charCodeAt(0);
      return cc < 0x80 ? c : cc < 0x800 ? fromCharCode(0xc0 | cc >>> 6) + fromCharCode(0x80 | cc & 0x3f) : fromCharCode(0xe0 | cc >>> 12 & 0x0f) + fromCharCode(0x80 | cc >>> 6 & 0x3f) + fromCharCode(0x80 | cc & 0x3f);
    } else {
      var cc = 0x10000 + (c.charCodeAt(0) - 0xD800) * 0x400 + (c.charCodeAt(1) - 0xDC00);
      return fromCharCode(0xf0 | cc >>> 18 & 0x07) + fromCharCode(0x80 | cc >>> 12 & 0x3f) + fromCharCode(0x80 | cc >>> 6 & 0x3f) + fromCharCode(0x80 | cc & 0x3f);
    }
  };

  var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;

  var utob = function utob(u) {
    return u.replace(re_utob, cb_utob);
  };

  var cb_encode = function cb_encode(ccc) {
    var padlen = [0, 2, 1][ccc.length % 3],
        ord = ccc.charCodeAt(0) << 16 | (ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8 | (ccc.length > 2 ? ccc.charCodeAt(2) : 0),
        chars = [b64chars.charAt(ord >>> 18), b64chars.charAt(ord >>> 12 & 63), padlen >= 2 ? '=' : b64chars.charAt(ord >>> 6 & 63), padlen >= 1 ? '=' : b64chars.charAt(ord & 63)];
    return chars.join('');
  };

  var btoa = global.btoa ? function (b) {
    return global.btoa(b);
  } : function (b) {
    return b.replace(/[\s\S]{1,3}/g, cb_encode);
  };

  var _encode = buffer ? buffer.from && buffer.from !== Uint8Array.from ? function (u) {
    return (u.constructor === buffer.constructor ? u : buffer.from(u)).toString('base64');
  } : function (u) {
    return (u.constructor === buffer.constructor ? u : new buffer(u)).toString('base64');
  } : function (u) {
    return btoa(utob(u));
  };

  var encode = function encode(u, urisafe) {
    return !urisafe ? _encode(String(u)) : _encode(String(u)).replace(/[+\/]/g, function (m0) {
      return m0 == '+' ? '-' : '_';
    }).replace(/=/g, '');
  };

  var encodeURI = function encodeURI(u) {
    return encode(u, true);
  }; // decoder stuff


  var re_btou = new RegExp(['[\xC0-\xDF][\x80-\xBF]', '[\xE0-\xEF][\x80-\xBF]{2}', '[\xF0-\xF7][\x80-\xBF]{3}'].join('|'), 'g');

  var cb_btou = function cb_btou(cccc) {
    switch (cccc.length) {
      case 4:
        var cp = (0x07 & cccc.charCodeAt(0)) << 18 | (0x3f & cccc.charCodeAt(1)) << 12 | (0x3f & cccc.charCodeAt(2)) << 6 | 0x3f & cccc.charCodeAt(3),
            offset = cp - 0x10000;
        return fromCharCode((offset >>> 10) + 0xD800) + fromCharCode((offset & 0x3FF) + 0xDC00);

      case 3:
        return fromCharCode((0x0f & cccc.charCodeAt(0)) << 12 | (0x3f & cccc.charCodeAt(1)) << 6 | 0x3f & cccc.charCodeAt(2));

      default:
        return fromCharCode((0x1f & cccc.charCodeAt(0)) << 6 | 0x3f & cccc.charCodeAt(1));
    }
  };

  var btou = function btou(b) {
    return b.replace(re_btou, cb_btou);
  };

  var cb_decode = function cb_decode(cccc) {
    var len = cccc.length,
        padlen = len % 4,
        n = (len > 0 ? b64tab[cccc.charAt(0)] << 18 : 0) | (len > 1 ? b64tab[cccc.charAt(1)] << 12 : 0) | (len > 2 ? b64tab[cccc.charAt(2)] << 6 : 0) | (len > 3 ? b64tab[cccc.charAt(3)] : 0),
        chars = [fromCharCode(n >>> 16), fromCharCode(n >>> 8 & 0xff), fromCharCode(n & 0xff)];
    chars.length -= [0, 0, 2, 1][padlen];
    return chars.join('');
  };

  var atob = global.atob ? function (a) {
    return global.atob(a);
  } : function (a) {
    return a.replace(/[\s\S]{1,4}/g, cb_decode);
  };

  var _decode = buffer ? buffer.from && buffer.from !== Uint8Array.from ? function (a) {
    return (a.constructor === buffer.constructor ? a : buffer.from(a, 'base64')).toString();
  } : function (a) {
    return (a.constructor === buffer.constructor ? a : new buffer(a, 'base64')).toString();
  } : function (a) {
    return btou(atob(a));
  };

  var decode = function decode(a) {
    return _decode(String(a).replace(/[-_]/g, function (m0) {
      return m0 == '-' ? '+' : '/';
    }).replace(/[^A-Za-z0-9\+\/]/g, ''));
  };

  var noConflict = function noConflict() {
    var Base64 = global.Base64;
    global.Base64 = _Base64;
    return Base64;
  }; // export Base64


  global.Base64 = {
    VERSION: version,
    atob: atob,
    btoa: btoa,
    fromBase64: decode,
    toBase64: encode,
    utob: utob,
    encode: encode,
    encodeURI: encodeURI,
    btou: btou,
    decode: decode,
    noConflict: noConflict
  }; // if ES5 is available, make Base64.extendString() available

  if (typeof Object.defineProperty === 'function') {
    var noEnum = function noEnum(v) {
      return {
        value: v,
        enumerable: false,
        writable: true,
        configurable: true
      };
    };

    global.Base64.extendString = function () {
      Object.defineProperty(String.prototype, 'fromBase64', noEnum(function () {
        return decode(this);
      }));
      Object.defineProperty(String.prototype, 'toBase64', noEnum(function (urisafe) {
        return encode(this, urisafe);
      }));
      Object.defineProperty(String.prototype, 'toBase64URI', noEnum(function () {
        return encode(this, true);
      }));
    };
  } //
  // export Base64 to the namespace
  //


  if (global['Meteor']) {
    // Meteor.js
    Base64 = global.Base64;
  } // module.exports and AMD are mutually exclusive.
  // module.exports has precedence.


  if (typeof module !== 'undefined' && module.exports) {
    module.exports.Base64 = global.Base64;
  } else if (true) {
    // AMD. Register as an anonymous module.	
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return global.Base64;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } // that's it!

})(typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)))

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Copyright 2009-2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE.txt or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
exports.SourceMapGenerator = __webpack_require__(79).SourceMapGenerator;
exports.SourceMapConsumer = __webpack_require__(152).SourceMapConsumer;
exports.SourceNode = __webpack_require__(155).SourceNode;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */

/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
var base64VLQ = __webpack_require__(80);

var util = __webpack_require__(9);

var ArraySet = __webpack_require__(81).ArraySet;

var MappingList = __webpack_require__(151).MappingList;
/**
 * An instance of the SourceMapGenerator represents a source map which is
 * being built incrementally. You may pass an object with the following
 * properties:
 *
 *   - file: The filename of the generated source.
 *   - sourceRoot: A root for all relative URLs in this source map.
 */


function SourceMapGenerator(aArgs) {
  if (!aArgs) {
    aArgs = {};
  }

  this._file = util.getArg(aArgs, 'file', null);
  this._sourceRoot = util.getArg(aArgs, 'sourceRoot', null);
  this._skipValidation = util.getArg(aArgs, 'skipValidation', false);
  this._sources = new ArraySet();
  this._names = new ArraySet();
  this._mappings = new MappingList();
  this._sourcesContents = null;
}

SourceMapGenerator.prototype._version = 3;
/**
 * Creates a new SourceMapGenerator based on a SourceMapConsumer
 *
 * @param aSourceMapConsumer The SourceMap.
 */

SourceMapGenerator.fromSourceMap = function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
  var sourceRoot = aSourceMapConsumer.sourceRoot;
  var generator = new SourceMapGenerator({
    file: aSourceMapConsumer.file,
    sourceRoot: sourceRoot
  });
  aSourceMapConsumer.eachMapping(function (mapping) {
    var newMapping = {
      generated: {
        line: mapping.generatedLine,
        column: mapping.generatedColumn
      }
    };

    if (mapping.source != null) {
      newMapping.source = mapping.source;

      if (sourceRoot != null) {
        newMapping.source = util.relative(sourceRoot, newMapping.source);
      }

      newMapping.original = {
        line: mapping.originalLine,
        column: mapping.originalColumn
      };

      if (mapping.name != null) {
        newMapping.name = mapping.name;
      }
    }

    generator.addMapping(newMapping);
  });
  aSourceMapConsumer.sources.forEach(function (sourceFile) {
    var content = aSourceMapConsumer.sourceContentFor(sourceFile);

    if (content != null) {
      generator.setSourceContent(sourceFile, content);
    }
  });
  return generator;
};
/**
 * Add a single mapping from original source line and column to the generated
 * source's line and column for this source map being created. The mapping
 * object should have the following properties:
 *
 *   - generated: An object with the generated line and column positions.
 *   - original: An object with the original line and column positions.
 *   - source: The original source file (relative to the sourceRoot).
 *   - name: An optional original token name for this mapping.
 */


SourceMapGenerator.prototype.addMapping = function SourceMapGenerator_addMapping(aArgs) {
  var generated = util.getArg(aArgs, 'generated');
  var original = util.getArg(aArgs, 'original', null);
  var source = util.getArg(aArgs, 'source', null);
  var name = util.getArg(aArgs, 'name', null);

  if (!this._skipValidation) {
    this._validateMapping(generated, original, source, name);
  }

  if (source != null) {
    source = String(source);

    if (!this._sources.has(source)) {
      this._sources.add(source);
    }
  }

  if (name != null) {
    name = String(name);

    if (!this._names.has(name)) {
      this._names.add(name);
    }
  }

  this._mappings.add({
    generatedLine: generated.line,
    generatedColumn: generated.column,
    originalLine: original != null && original.line,
    originalColumn: original != null && original.column,
    source: source,
    name: name
  });
};
/**
 * Set the source content for a source file.
 */


SourceMapGenerator.prototype.setSourceContent = function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
  var source = aSourceFile;

  if (this._sourceRoot != null) {
    source = util.relative(this._sourceRoot, source);
  }

  if (aSourceContent != null) {
    // Add the source content to the _sourcesContents map.
    // Create a new _sourcesContents map if the property is null.
    if (!this._sourcesContents) {
      this._sourcesContents = Object.create(null);
    }

    this._sourcesContents[util.toSetString(source)] = aSourceContent;
  } else if (this._sourcesContents) {
    // Remove the source file from the _sourcesContents map.
    // If the _sourcesContents map is empty, set the property to null.
    delete this._sourcesContents[util.toSetString(source)];

    if (Object.keys(this._sourcesContents).length === 0) {
      this._sourcesContents = null;
    }
  }
};
/**
 * Applies the mappings of a sub-source-map for a specific source file to the
 * source map being generated. Each mapping to the supplied source file is
 * rewritten using the supplied source map. Note: The resolution for the
 * resulting mappings is the minimium of this map and the supplied map.
 *
 * @param aSourceMapConsumer The source map to be applied.
 * @param aSourceFile Optional. The filename of the source file.
 *        If omitted, SourceMapConsumer's file property will be used.
 * @param aSourceMapPath Optional. The dirname of the path to the source map
 *        to be applied. If relative, it is relative to the SourceMapConsumer.
 *        This parameter is needed when the two source maps aren't in the same
 *        directory, and the source map to be applied contains relative source
 *        paths. If so, those relative source paths need to be rewritten
 *        relative to the SourceMapGenerator.
 */


SourceMapGenerator.prototype.applySourceMap = function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
  var sourceFile = aSourceFile; // If aSourceFile is omitted, we will use the file property of the SourceMap

  if (aSourceFile == null) {
    if (aSourceMapConsumer.file == null) {
      throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, ' + 'or the source map\'s "file" property. Both were omitted.');
    }

    sourceFile = aSourceMapConsumer.file;
  }

  var sourceRoot = this._sourceRoot; // Make "sourceFile" relative if an absolute Url is passed.

  if (sourceRoot != null) {
    sourceFile = util.relative(sourceRoot, sourceFile);
  } // Applying the SourceMap can add and remove items from the sources and
  // the names array.


  var newSources = new ArraySet();
  var newNames = new ArraySet(); // Find mappings for the "sourceFile"

  this._mappings.unsortedForEach(function (mapping) {
    if (mapping.source === sourceFile && mapping.originalLine != null) {
      // Check if it can be mapped by the source map, then update the mapping.
      var original = aSourceMapConsumer.originalPositionFor({
        line: mapping.originalLine,
        column: mapping.originalColumn
      });

      if (original.source != null) {
        // Copy mapping
        mapping.source = original.source;

        if (aSourceMapPath != null) {
          mapping.source = util.join(aSourceMapPath, mapping.source);
        }

        if (sourceRoot != null) {
          mapping.source = util.relative(sourceRoot, mapping.source);
        }

        mapping.originalLine = original.line;
        mapping.originalColumn = original.column;

        if (original.name != null) {
          mapping.name = original.name;
        }
      }
    }

    var source = mapping.source;

    if (source != null && !newSources.has(source)) {
      newSources.add(source);
    }

    var name = mapping.name;

    if (name != null && !newNames.has(name)) {
      newNames.add(name);
    }
  }, this);

  this._sources = newSources;
  this._names = newNames; // Copy sourcesContents of applied map.

  aSourceMapConsumer.sources.forEach(function (sourceFile) {
    var content = aSourceMapConsumer.sourceContentFor(sourceFile);

    if (content != null) {
      if (aSourceMapPath != null) {
        sourceFile = util.join(aSourceMapPath, sourceFile);
      }

      if (sourceRoot != null) {
        sourceFile = util.relative(sourceRoot, sourceFile);
      }

      this.setSourceContent(sourceFile, content);
    }
  }, this);
};
/**
 * A mapping can have one of the three levels of data:
 *
 *   1. Just the generated position.
 *   2. The Generated position, original position, and original source.
 *   3. Generated and original position, original source, as well as a name
 *      token.
 *
 * To maintain consistency, we validate that any new mapping being added falls
 * in to one of these categories.
 */


SourceMapGenerator.prototype._validateMapping = function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource, aName) {
  if (aGenerated && 'line' in aGenerated && 'column' in aGenerated && aGenerated.line > 0 && aGenerated.column >= 0 && !aOriginal && !aSource && !aName) {
    // Case 1.
    return;
  } else if (aGenerated && 'line' in aGenerated && 'column' in aGenerated && aOriginal && 'line' in aOriginal && 'column' in aOriginal && aGenerated.line > 0 && aGenerated.column >= 0 && aOriginal.line > 0 && aOriginal.column >= 0 && aSource) {
    // Cases 2 and 3.
    return;
  } else {
    throw new Error('Invalid mapping: ' + JSON.stringify({
      generated: aGenerated,
      source: aSource,
      original: aOriginal,
      name: aName
    }));
  }
};
/**
 * Serialize the accumulated mappings in to the stream of base 64 VLQs
 * specified by the source map format.
 */


SourceMapGenerator.prototype._serializeMappings = function SourceMapGenerator_serializeMappings() {
  var previousGeneratedColumn = 0;
  var previousGeneratedLine = 1;
  var previousOriginalColumn = 0;
  var previousOriginalLine = 0;
  var previousName = 0;
  var previousSource = 0;
  var result = '';
  var next;
  var mapping;
  var nameIdx;
  var sourceIdx;

  var mappings = this._mappings.toArray();

  for (var i = 0, len = mappings.length; i < len; i++) {
    mapping = mappings[i];
    next = '';

    if (mapping.generatedLine !== previousGeneratedLine) {
      previousGeneratedColumn = 0;

      while (mapping.generatedLine !== previousGeneratedLine) {
        next += ';';
        previousGeneratedLine++;
      }
    } else {
      if (i > 0) {
        if (!util.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) {
          continue;
        }

        next += ',';
      }
    }

    next += base64VLQ.encode(mapping.generatedColumn - previousGeneratedColumn);
    previousGeneratedColumn = mapping.generatedColumn;

    if (mapping.source != null) {
      sourceIdx = this._sources.indexOf(mapping.source);
      next += base64VLQ.encode(sourceIdx - previousSource);
      previousSource = sourceIdx; // lines are stored 0-based in SourceMap spec version 3

      next += base64VLQ.encode(mapping.originalLine - 1 - previousOriginalLine);
      previousOriginalLine = mapping.originalLine - 1;
      next += base64VLQ.encode(mapping.originalColumn - previousOriginalColumn);
      previousOriginalColumn = mapping.originalColumn;

      if (mapping.name != null) {
        nameIdx = this._names.indexOf(mapping.name);
        next += base64VLQ.encode(nameIdx - previousName);
        previousName = nameIdx;
      }
    }

    result += next;
  }

  return result;
};

SourceMapGenerator.prototype._generateSourcesContent = function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
  return aSources.map(function (source) {
    if (!this._sourcesContents) {
      return null;
    }

    if (aSourceRoot != null) {
      source = util.relative(aSourceRoot, source);
    }

    var key = util.toSetString(source);
    return Object.prototype.hasOwnProperty.call(this._sourcesContents, key) ? this._sourcesContents[key] : null;
  }, this);
};
/**
 * Externalize the source map.
 */


SourceMapGenerator.prototype.toJSON = function SourceMapGenerator_toJSON() {
  var map = {
    version: this._version,
    sources: this._sources.toArray(),
    names: this._names.toArray(),
    mappings: this._serializeMappings()
  };

  if (this._file != null) {
    map.file = this._file;
  }

  if (this._sourceRoot != null) {
    map.sourceRoot = this._sourceRoot;
  }

  if (this._sourcesContents) {
    map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
  }

  return map;
};
/**
 * Render the source map being generated to a string.
 */


SourceMapGenerator.prototype.toString = function SourceMapGenerator_toString() {
  return JSON.stringify(this.toJSON());
};

exports.SourceMapGenerator = SourceMapGenerator;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */

/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 *
 * Based on the Base 64 VLQ implementation in Closure Compiler:
 * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
 *
 * Copyright 2011 The Closure Compiler Authors. All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *  * Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above
 *    copyright notice, this list of conditions and the following
 *    disclaimer in the documentation and/or other materials provided
 *    with the distribution.
 *  * Neither the name of Google Inc. nor the names of its
 *    contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
var base64 = __webpack_require__(150); // A single base 64 digit can contain 6 bits of data. For the base 64 variable
// length quantities we use in the source map spec, the first bit is the sign,
// the next four bits are the actual value, and the 6th bit is the
// continuation bit. The continuation bit tells us whether there are more
// digits in this value following this digit.
//
//   Continuation
//   |    Sign
//   |    |
//   V    V
//   101011


var VLQ_BASE_SHIFT = 5; // binary: 100000

var VLQ_BASE = 1 << VLQ_BASE_SHIFT; // binary: 011111

var VLQ_BASE_MASK = VLQ_BASE - 1; // binary: 100000

var VLQ_CONTINUATION_BIT = VLQ_BASE;
/**
 * Converts from a two-complement value to a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
 *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
 */

function toVLQSigned(aValue) {
  return aValue < 0 ? (-aValue << 1) + 1 : (aValue << 1) + 0;
}
/**
 * Converts to a two-complement value from a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
 *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
 */


function fromVLQSigned(aValue) {
  var isNegative = (aValue & 1) === 1;
  var shifted = aValue >> 1;
  return isNegative ? -shifted : shifted;
}
/**
 * Returns the base 64 VLQ encoded value.
 */


exports.encode = function base64VLQ_encode(aValue) {
  var encoded = "";
  var digit;
  var vlq = toVLQSigned(aValue);

  do {
    digit = vlq & VLQ_BASE_MASK;
    vlq >>>= VLQ_BASE_SHIFT;

    if (vlq > 0) {
      // There are still more digits in this value, so we must make sure the
      // continuation bit is marked.
      digit |= VLQ_CONTINUATION_BIT;
    }

    encoded += base64.encode(digit);
  } while (vlq > 0);

  return encoded;
};
/**
 * Decodes the next base 64 VLQ value from the given string and returns the
 * value and the rest of the string via the out parameter.
 */


exports.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
  var strLen = aStr.length;
  var result = 0;
  var shift = 0;
  var continuation, digit;

  do {
    if (aIndex >= strLen) {
      throw new Error("Expected more digits in base 64 VLQ value.");
    }

    digit = base64.decode(aStr.charCodeAt(aIndex++));

    if (digit === -1) {
      throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
    }

    continuation = !!(digit & VLQ_CONTINUATION_BIT);
    digit &= VLQ_BASE_MASK;
    result = result + (digit << shift);
    shift += VLQ_BASE_SHIFT;
  } while (continuation);

  aOutParam.value = fromVLQSigned(result);
  aOutParam.rest = aIndex;
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */

/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
var util = __webpack_require__(9);

var has = Object.prototype.hasOwnProperty;
/**
 * A data structure which is a combination of an array and a set. Adding a new
 * member is O(1), testing for membership is O(1), and finding the index of an
 * element is O(1). Removing elements from the set is not supported. Only
 * strings are supported for membership.
 */

function ArraySet() {
  this._array = [];
  this._set = Object.create(null);
}
/**
 * Static method for creating ArraySet instances from an existing array.
 */


ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
  var set = new ArraySet();

  for (var i = 0, len = aArray.length; i < len; i++) {
    set.add(aArray[i], aAllowDuplicates);
  }

  return set;
};
/**
 * Return how many unique items are in this ArraySet. If duplicates have been
 * added, than those do not count towards the size.
 *
 * @returns Number
 */


ArraySet.prototype.size = function ArraySet_size() {
  return Object.getOwnPropertyNames(this._set).length;
};
/**
 * Add the given string to this set.
 *
 * @param String aStr
 */


ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
  var sStr = util.toSetString(aStr);
  var isDuplicate = has.call(this._set, sStr);
  var idx = this._array.length;

  if (!isDuplicate || aAllowDuplicates) {
    this._array.push(aStr);
  }

  if (!isDuplicate) {
    this._set[sStr] = idx;
  }
};
/**
 * Is the given string a member of this set?
 *
 * @param String aStr
 */


ArraySet.prototype.has = function ArraySet_has(aStr) {
  var sStr = util.toSetString(aStr);
  return has.call(this._set, sStr);
};
/**
 * What is the index of the given string in the array?
 *
 * @param String aStr
 */


ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
  var sStr = util.toSetString(aStr);

  if (has.call(this._set, sStr)) {
    return this._set[sStr];
  }

  throw new Error('"' + aStr + '" is not in the set.');
};
/**
 * What is the element at the given index?
 *
 * @param Number aIdx
 */


ArraySet.prototype.at = function ArraySet_at(aIdx) {
  if (aIdx >= 0 && aIdx < this._array.length) {
    return this._array[aIdx];
  }

  throw new Error('No element indexed by ' + aIdx);
};
/**
 * Returns the array representation of this set (which has the proper indices
 * indicated by indexOf). Note that this is a copy of the internal array used
 * for storing the members so that no one can mess with internal state.
 */


ArraySet.prototype.toArray = function ArraySet_toArray() {
  return this._array.slice();
};

exports.ArraySet = ArraySet;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = stringify;

var _stringifier = __webpack_require__(24);

var _stringifier2 = _interopRequireDefault(_stringifier);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function stringify(node, builder) {
  var str = new _stringifier2.default(builder);
  str.stringify(node);
}

module.exports = exports['default'];

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.__esModule = true;

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _warnOnce = __webpack_require__(4);

var _warnOnce2 = _interopRequireDefault(_warnOnce);

var _node = __webpack_require__(22);

var _node2 = _interopRequireDefault(_node);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
/**
 * Represents a CSS declaration.
 *
 * @extends Node
 *
 * @example
 * const root = postcss.parse('a { color: black }');
 * const decl = root.first.first;
 * decl.type       //=> 'decl'
 * decl.toString() //=> ' color: black'
 */


var Declaration = function (_Node) {
  _inherits(Declaration, _Node);

  function Declaration(defaults) {
    _classCallCheck(this, Declaration);

    var _this = _possibleConstructorReturn(this, _Node.call(this, defaults));

    _this.type = 'decl';
    return _this;
  }

  _createClass(Declaration, [{
    key: '_value',
    get: function get() {
      (0, _warnOnce2.default)('Node#_value was deprecated. Use Node#raws.value');
      return this.raws.value;
    },
    set: function set(val) {
      (0, _warnOnce2.default)('Node#_value was deprecated. Use Node#raws.value');
      this.raws.value = val;
    }
  }, {
    key: '_important',
    get: function get() {
      (0, _warnOnce2.default)('Node#_important was deprecated. Use Node#raws.important');
      return this.raws.important;
    },
    set: function set(val) {
      (0, _warnOnce2.default)('Node#_important was deprecated. Use Node#raws.important');
      this.raws.important = val;
    }
    /**
     * @memberof Declaration#
     * @member {string} prop - the declaration’s property name
     *
     * @example
     * const root = postcss.parse('a { color: black }');
     * const decl = root.first.first;
     * decl.prop //=> 'color'
     */

    /**
     * @memberof Declaration#
     * @member {string} value - the declaration’s value
     *
     * @example
     * const root = postcss.parse('a { color: black }');
     * const decl = root.first.first;
     * decl.value //=> 'black'
     */

    /**
     * @memberof Declaration#
     * @member {boolean} important - `true` if the declaration
     *                               has an !important annotation.
     *
     * @example
     * const root = postcss.parse('a { color: black !important; color: red }');
     * root.first.first.important //=> true
     * root.first.last.important  //=> undefined
     */

    /**
     * @memberof Declaration#
     * @member {object} raws - Information to generate byte-to-byte equal
     *                         node string as it was in the origin input.
     *
     * Every parser saves its own properties,
     * but the default CSS parser uses:
     *
     * * `before`: the space symbols before the node. It also stores `*`
     *   and `_` symbols before the declaration (IE hack).
     * * `between`: the symbols between the property and value
     *   for declarations.
     * * `important`: the content of the important statement,
     *   if it is not just `!important`.
     *
     * PostCSS cleans declaration from comments and extra spaces,
     * but it stores origin content in raws properties.
     * As such, if you don’t change a declaration’s value,
     * PostCSS will use the raw value with comments.
     *
     * @example
     * const root = postcss.parse('a {\n  color:black\n}')
     * root.first.first.raws //=> { before: '\n  ', between: ':' }
     */

  }]);

  return Declaration;
}(_node2.default);

exports.default = Declaration;
module.exports = exports['default'];

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = parse;

var _parser = __webpack_require__(85);

var _parser2 = _interopRequireDefault(_parser);

var _input = __webpack_require__(23);

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function parse(css, opts) {
  if (opts && opts.safe) {
    throw new Error('Option safe was removed. ' + 'Use parser: require("postcss-safe-parser")');
  }

  var input = new _input2.default(css, opts);
  var parser = new _parser2.default(input);

  try {
    parser.tokenize();
    parser.loop();
  } catch (e) {
    if (e.name === 'CssSyntaxError' && opts && opts.from) {
      if (/\.scss$/i.test(opts.from)) {
        e.message += '\nYou tried to parse SCSS with ' + 'the standard CSS parser; ' + 'try again with the postcss-scss parser';
      } else if (/\.sass/i.test(opts.from)) {
        e.message += '\nYou tried to parse Sass with ' + 'the standard CSS parser; ' + 'try again with the postcss-sass parser';
      } else if (/\.less$/i.test(opts.from)) {
        e.message += '\nYou tried to parse Less with ' + 'the standard CSS parser; ' + 'try again with the postcss-less parser';
      }
    }

    throw e;
  }

  return parser.root;
}

module.exports = exports['default'];

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _declaration = __webpack_require__(83);

var _declaration2 = _interopRequireDefault(_declaration);

var _tokenize = __webpack_require__(76);

var _tokenize2 = _interopRequireDefault(_tokenize);

var _comment = __webpack_require__(21);

var _comment2 = _interopRequireDefault(_comment);

var _atRule = __webpack_require__(26);

var _atRule2 = _interopRequireDefault(_atRule);

var _root = __webpack_require__(27);

var _root2 = _interopRequireDefault(_root);

var _rule = __webpack_require__(10);

var _rule2 = _interopRequireDefault(_rule);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Parser = function () {
  function Parser(input) {
    _classCallCheck(this, Parser);

    this.input = input;
    this.pos = 0;
    this.root = new _root2.default();
    this.current = this.root;
    this.spaces = '';
    this.semicolon = false;
    this.root.source = {
      input: input,
      start: {
        line: 1,
        column: 1
      }
    };
  }

  Parser.prototype.tokenize = function tokenize() {
    this.tokens = (0, _tokenize2.default)(this.input);
  };

  Parser.prototype.loop = function loop() {
    var token = void 0;

    while (this.pos < this.tokens.length) {
      token = this.tokens[this.pos];

      switch (token[0]) {
        case 'space':
        case ';':
          this.spaces += token[1];
          break;

        case '}':
          this.end(token);
          break;

        case 'comment':
          this.comment(token);
          break;

        case 'at-word':
          this.atrule(token);
          break;

        case '{':
          this.emptyRule(token);
          break;

        default:
          this.other();
          break;
      }

      this.pos += 1;
    }

    this.endFile();
  };

  Parser.prototype.comment = function comment(token) {
    var node = new _comment2.default();
    this.init(node, token[2], token[3]);
    node.source.end = {
      line: token[4],
      column: token[5]
    };
    var text = token[1].slice(2, -2);

    if (/^\s*$/.test(text)) {
      node.text = '';
      node.raws.left = text;
      node.raws.right = '';
    } else {
      var match = text.match(/^(\s*)([^]*[^\s])(\s*)$/);
      node.text = match[2];
      node.raws.left = match[1];
      node.raws.right = match[3];
    }
  };

  Parser.prototype.emptyRule = function emptyRule(token) {
    var node = new _rule2.default();
    this.init(node, token[2], token[3]);
    node.selector = '';
    node.raws.between = '';
    this.current = node;
  };

  Parser.prototype.other = function other() {
    var token = void 0;
    var end = false;
    var type = null;
    var colon = false;
    var bracket = null;
    var brackets = [];
    var start = this.pos;

    while (this.pos < this.tokens.length) {
      token = this.tokens[this.pos];
      type = token[0];

      if (type === '(' || type === '[') {
        if (!bracket) bracket = token;
        brackets.push(type === '(' ? ')' : ']');
      } else if (brackets.length === 0) {
        if (type === ';') {
          if (colon) {
            this.decl(this.tokens.slice(start, this.pos + 1));
            return;
          } else {
            break;
          }
        } else if (type === '{') {
          this.rule(this.tokens.slice(start, this.pos + 1));
          return;
        } else if (type === '}') {
          this.pos -= 1;
          end = true;
          break;
        } else if (type === ':') {
          colon = true;
        }
      } else if (type === brackets[brackets.length - 1]) {
        brackets.pop();
        if (brackets.length === 0) bracket = null;
      }

      this.pos += 1;
    }

    if (this.pos === this.tokens.length) {
      this.pos -= 1;
      end = true;
    }

    if (brackets.length > 0) this.unclosedBracket(bracket);

    if (end && colon) {
      while (this.pos > start) {
        token = this.tokens[this.pos][0];
        if (token !== 'space' && token !== 'comment') break;
        this.pos -= 1;
      }

      this.decl(this.tokens.slice(start, this.pos + 1));
      return;
    }

    this.unknownWord(start);
  };

  Parser.prototype.rule = function rule(tokens) {
    tokens.pop();
    var node = new _rule2.default();
    this.init(node, tokens[0][2], tokens[0][3]);
    node.raws.between = this.spacesAndCommentsFromEnd(tokens);
    this.raw(node, 'selector', tokens);
    this.current = node;
  };

  Parser.prototype.decl = function decl(tokens) {
    var node = new _declaration2.default();
    this.init(node);
    var last = tokens[tokens.length - 1];

    if (last[0] === ';') {
      this.semicolon = true;
      tokens.pop();
    }

    if (last[4]) {
      node.source.end = {
        line: last[4],
        column: last[5]
      };
    } else {
      node.source.end = {
        line: last[2],
        column: last[3]
      };
    }

    while (tokens[0][0] !== 'word') {
      node.raws.before += tokens.shift()[1];
    }

    node.source.start = {
      line: tokens[0][2],
      column: tokens[0][3]
    };
    node.prop = '';

    while (tokens.length) {
      var type = tokens[0][0];

      if (type === ':' || type === 'space' || type === 'comment') {
        break;
      }

      node.prop += tokens.shift()[1];
    }

    node.raws.between = '';
    var token = void 0;

    while (tokens.length) {
      token = tokens.shift();

      if (token[0] === ':') {
        node.raws.between += token[1];
        break;
      } else {
        node.raws.between += token[1];
      }
    }

    if (node.prop[0] === '_' || node.prop[0] === '*') {
      node.raws.before += node.prop[0];
      node.prop = node.prop.slice(1);
    }

    node.raws.between += this.spacesAndCommentsFromStart(tokens);
    this.precheckMissedSemicolon(tokens);

    for (var i = tokens.length - 1; i > 0; i--) {
      token = tokens[i];

      if (token[1] === '!important') {
        node.important = true;
        var string = this.stringFrom(tokens, i);
        string = this.spacesFromEnd(tokens) + string;
        if (string !== ' !important') node.raws.important = string;
        break;
      } else if (token[1] === 'important') {
        var cache = tokens.slice(0);
        var str = '';

        for (var j = i; j > 0; j--) {
          var _type = cache[j][0];

          if (str.trim().indexOf('!') === 0 && _type !== 'space') {
            break;
          }

          str = cache.pop()[1] + str;
        }

        if (str.trim().indexOf('!') === 0) {
          node.important = true;
          node.raws.important = str;
          tokens = cache;
        }
      }

      if (token[0] !== 'space' && token[0] !== 'comment') {
        break;
      }
    }

    this.raw(node, 'value', tokens);
    if (node.value.indexOf(':') !== -1) this.checkMissedSemicolon(tokens);
  };

  Parser.prototype.atrule = function atrule(token) {
    var node = new _atRule2.default();
    node.name = token[1].slice(1);

    if (node.name === '') {
      this.unnamedAtrule(node, token);
    }

    this.init(node, token[2], token[3]);
    var last = false;
    var open = false;
    var params = [];
    this.pos += 1;

    while (this.pos < this.tokens.length) {
      token = this.tokens[this.pos];

      if (token[0] === ';') {
        node.source.end = {
          line: token[2],
          column: token[3]
        };
        this.semicolon = true;
        break;
      } else if (token[0] === '{') {
        open = true;
        break;
      } else if (token[0] === '}') {
        this.end(token);
        break;
      } else {
        params.push(token);
      }

      this.pos += 1;
    }

    if (this.pos === this.tokens.length) {
      last = true;
    }

    node.raws.between = this.spacesAndCommentsFromEnd(params);

    if (params.length) {
      node.raws.afterName = this.spacesAndCommentsFromStart(params);
      this.raw(node, 'params', params);

      if (last) {
        token = params[params.length - 1];
        node.source.end = {
          line: token[4],
          column: token[5]
        };
        this.spaces = node.raws.between;
        node.raws.between = '';
      }
    } else {
      node.raws.afterName = '';
      node.params = '';
    }

    if (open) {
      node.nodes = [];
      this.current = node;
    }
  };

  Parser.prototype.end = function end(token) {
    if (this.current.nodes && this.current.nodes.length) {
      this.current.raws.semicolon = this.semicolon;
    }

    this.semicolon = false;
    this.current.raws.after = (this.current.raws.after || '') + this.spaces;
    this.spaces = '';

    if (this.current.parent) {
      this.current.source.end = {
        line: token[2],
        column: token[3]
      };
      this.current = this.current.parent;
    } else {
      this.unexpectedClose(token);
    }
  };

  Parser.prototype.endFile = function endFile() {
    if (this.current.parent) this.unclosedBlock();

    if (this.current.nodes && this.current.nodes.length) {
      this.current.raws.semicolon = this.semicolon;
    }

    this.current.raws.after = (this.current.raws.after || '') + this.spaces;
  }; // Helpers


  Parser.prototype.init = function init(node, line, column) {
    this.current.push(node);
    node.source = {
      start: {
        line: line,
        column: column
      },
      input: this.input
    };
    node.raws.before = this.spaces;
    this.spaces = '';
    if (node.type !== 'comment') this.semicolon = false;
  };

  Parser.prototype.raw = function raw(node, prop, tokens) {
    var token = void 0,
        type = void 0;
    var length = tokens.length;
    var value = '';
    var clean = true;

    for (var i = 0; i < length; i += 1) {
      token = tokens[i];
      type = token[0];

      if (type === 'comment' || type === 'space' && i === length - 1) {
        clean = false;
      } else {
        value += token[1];
      }
    }

    if (!clean) {
      var raw = tokens.reduce(function (all, i) {
        return all + i[1];
      }, '');
      node.raws[prop] = {
        value: value,
        raw: raw
      };
    }

    node[prop] = value;
  };

  Parser.prototype.spacesAndCommentsFromEnd = function spacesAndCommentsFromEnd(tokens) {
    var lastTokenType = void 0;
    var spaces = '';

    while (tokens.length) {
      lastTokenType = tokens[tokens.length - 1][0];
      if (lastTokenType !== 'space' && lastTokenType !== 'comment') break;
      spaces = tokens.pop()[1] + spaces;
    }

    return spaces;
  };

  Parser.prototype.spacesAndCommentsFromStart = function spacesAndCommentsFromStart(tokens) {
    var next = void 0;
    var spaces = '';

    while (tokens.length) {
      next = tokens[0][0];
      if (next !== 'space' && next !== 'comment') break;
      spaces += tokens.shift()[1];
    }

    return spaces;
  };

  Parser.prototype.spacesFromEnd = function spacesFromEnd(tokens) {
    var lastTokenType = void 0;
    var spaces = '';

    while (tokens.length) {
      lastTokenType = tokens[tokens.length - 1][0];
      if (lastTokenType !== 'space') break;
      spaces = tokens.pop()[1] + spaces;
    }

    return spaces;
  };

  Parser.prototype.stringFrom = function stringFrom(tokens, from) {
    var result = '';

    for (var i = from; i < tokens.length; i++) {
      result += tokens[i][1];
    }

    tokens.splice(from, tokens.length - from);
    return result;
  };

  Parser.prototype.colon = function colon(tokens) {
    var brackets = 0;
    var token = void 0,
        type = void 0,
        prev = void 0;

    for (var i = 0; i < tokens.length; i++) {
      token = tokens[i];
      type = token[0];

      if (type === '(') {
        brackets += 1;
      } else if (type === ')') {
        brackets -= 1;
      } else if (brackets === 0 && type === ':') {
        if (!prev) {
          this.doubleColon(token);
        } else if (prev[0] === 'word' && prev[1] === 'progid') {
          continue;
        } else {
          return i;
        }
      }

      prev = token;
    }

    return false;
  }; // Errors


  Parser.prototype.unclosedBracket = function unclosedBracket(bracket) {
    throw this.input.error('Unclosed bracket', bracket[2], bracket[3]);
  };

  Parser.prototype.unknownWord = function unknownWord(start) {
    var token = this.tokens[start];
    throw this.input.error('Unknown word', token[2], token[3]);
  };

  Parser.prototype.unexpectedClose = function unexpectedClose(token) {
    throw this.input.error('Unexpected }', token[2], token[3]);
  };

  Parser.prototype.unclosedBlock = function unclosedBlock() {
    var pos = this.current.source.start;
    throw this.input.error('Unclosed block', pos.line, pos.column);
  };

  Parser.prototype.doubleColon = function doubleColon(token) {
    throw this.input.error('Double colon', token[2], token[3]);
  };

  Parser.prototype.unnamedAtrule = function unnamedAtrule(node, token) {
    throw this.input.error('At-rule without name', token[2], token[3]);
  };

  Parser.prototype.precheckMissedSemicolon = function precheckMissedSemicolon(tokens) {
    // Hook for Safe Parser
    tokens;
  };

  Parser.prototype.checkMissedSemicolon = function checkMissedSemicolon(tokens) {
    var colon = this.colon(tokens);
    if (colon === false) return;
    var founded = 0;
    var token = void 0;

    for (var j = colon - 1; j >= 0; j--) {
      token = tokens[j];

      if (token[0] !== 'space') {
        founded += 1;
        if (founded === 2) break;
      }
    }

    throw this.input.error('Missed semicolon', token[2], token[3]);
  };

  return Parser;
}();

exports.default = Parser;
module.exports = exports['default'];

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

exports.__esModule = true;

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _mapGenerator = __webpack_require__(158);

var _mapGenerator2 = _interopRequireDefault(_mapGenerator);

var _stringify2 = __webpack_require__(82);

var _stringify3 = _interopRequireDefault(_stringify2);

var _warnOnce = __webpack_require__(4);

var _warnOnce2 = _interopRequireDefault(_warnOnce);

var _result = __webpack_require__(159);

var _result2 = _interopRequireDefault(_result);

var _parse = __webpack_require__(84);

var _parse2 = _interopRequireDefault(_parse);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function isPromise(obj) {
  return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && typeof obj.then === 'function';
}
/**
 * A Promise proxy for the result of PostCSS transformations.
 *
 * A `LazyResult` instance is returned by {@link Processor#process}.
 *
 * @example
 * const lazy = postcss([cssnext]).process(css);
 */


var LazyResult = function () {
  function LazyResult(processor, css, opts) {
    _classCallCheck(this, LazyResult);

    this.stringified = false;
    this.processed = false;
    var root = void 0;

    if ((typeof css === 'undefined' ? 'undefined' : _typeof(css)) === 'object' && css.type === 'root') {
      root = css;
    } else if (css instanceof LazyResult || css instanceof _result2.default) {
      root = css.root;

      if (css.map) {
        if (typeof opts.map === 'undefined') opts.map = {};
        if (!opts.map.inline) opts.map.inline = false;
        opts.map.prev = css.map;
      }
    } else {
      var parser = _parse2.default;
      if (opts.syntax) parser = opts.syntax.parse;
      if (opts.parser) parser = opts.parser;
      if (parser.parse) parser = parser.parse;

      try {
        root = parser(css, opts);
      } catch (error) {
        this.error = error;
      }
    }

    this.result = new _result2.default(processor, root, opts);
  }
  /**
   * Returns a {@link Processor} instance, which will be used
   * for CSS transformations.
   * @type {Processor}
   */

  /**
   * Processes input CSS through synchronous plugins
   * and calls {@link Result#warnings()}.
   *
   * @return {Warning[]} warnings from plugins
   */


  LazyResult.prototype.warnings = function warnings() {
    return this.sync().warnings();
  };
  /**
   * Alias for the {@link LazyResult#css} property.
   *
   * @example
   * lazy + '' === lazy.css;
   *
   * @return {string} output CSS
   */


  LazyResult.prototype.toString = function toString() {
    return this.css;
  };
  /**
   * Processes input CSS through synchronous and asynchronous plugins
   * and calls `onFulfilled` with a Result instance. If a plugin throws
   * an error, the `onRejected` callback will be executed.
   *
   * It implements standard Promise API.
   *
   * @param {onFulfilled} onFulfilled - callback will be executed
   *                                    when all plugins will finish work
   * @param {onRejected}  onRejected  - callback will be executed on any error
   *
   * @return {Promise} Promise API to make queue
   *
   * @example
   * postcss([cssnext]).process(css).then(result => {
   *   console.log(result.css);
   * });
   */


  LazyResult.prototype.then = function then(onFulfilled, onRejected) {
    return this.async().then(onFulfilled, onRejected);
  };
  /**
   * Processes input CSS through synchronous and asynchronous plugins
   * and calls onRejected for each error thrown in any plugin.
   *
   * It implements standard Promise API.
   *
   * @param {onRejected} onRejected - callback will be executed on any error
   *
   * @return {Promise} Promise API to make queue
   *
   * @example
   * postcss([cssnext]).process(css).then(result => {
   *   console.log(result.css);
   * }).catch(error => {
   *   console.error(error);
   * });
   */


  LazyResult.prototype.catch = function _catch(onRejected) {
    return this.async().catch(onRejected);
  };

  LazyResult.prototype.handleError = function handleError(error, plugin) {
    try {
      this.error = error;

      if (error.name === 'CssSyntaxError' && !error.plugin) {
        error.plugin = plugin.postcssPlugin;
        error.setMessage();
      } else if (plugin.postcssVersion) {
        var pluginName = plugin.postcssPlugin;
        var pluginVer = plugin.postcssVersion;
        var runtimeVer = this.result.processor.version;
        var a = pluginVer.split('.');
        var b = runtimeVer.split('.');

        if (a[0] !== b[0] || parseInt(a[1]) > parseInt(b[1])) {
          (0, _warnOnce2.default)('Your current PostCSS version ' + 'is ' + runtimeVer + ', but ' + pluginName + ' ' + 'uses ' + pluginVer + '. Perhaps this is ' + 'the source of the error below.');
        }
      }
    } catch (err) {
      if (console && console.error) console.error(err);
    }
  };

  LazyResult.prototype.asyncTick = function asyncTick(resolve, reject) {
    var _this = this;

    if (this.plugin >= this.processor.plugins.length) {
      this.processed = true;
      return resolve();
    }

    try {
      var plugin = this.processor.plugins[this.plugin];
      var promise = this.run(plugin);
      this.plugin += 1;

      if (isPromise(promise)) {
        promise.then(function () {
          _this.asyncTick(resolve, reject);
        }).catch(function (error) {
          _this.handleError(error, plugin);

          _this.processed = true;
          reject(error);
        });
      } else {
        this.asyncTick(resolve, reject);
      }
    } catch (error) {
      this.processed = true;
      reject(error);
    }
  };

  LazyResult.prototype.async = function async() {
    var _this2 = this;

    if (this.processed) {
      return new Promise(function (resolve, reject) {
        if (_this2.error) {
          reject(_this2.error);
        } else {
          resolve(_this2.stringify());
        }
      });
    }

    if (this.processing) {
      return this.processing;
    }

    this.processing = new Promise(function (resolve, reject) {
      if (_this2.error) return reject(_this2.error);
      _this2.plugin = 0;

      _this2.asyncTick(resolve, reject);
    }).then(function () {
      _this2.processed = true;
      return _this2.stringify();
    });
    return this.processing;
  };

  LazyResult.prototype.sync = function sync() {
    if (this.processed) return this.result;
    this.processed = true;

    if (this.processing) {
      throw new Error('Use process(css).then(cb) to work with async plugins');
    }

    if (this.error) throw this.error;

    for (var _iterator = this.result.processor.plugins, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var plugin = _ref;
      var promise = this.run(plugin);

      if (isPromise(promise)) {
        throw new Error('Use process(css).then(cb) to work with async plugins');
      }
    }

    return this.result;
  };

  LazyResult.prototype.run = function run(plugin) {
    this.result.lastPlugin = plugin;

    try {
      return plugin(this.result.root, this.result);
    } catch (error) {
      this.handleError(error, plugin);
      throw error;
    }
  };

  LazyResult.prototype.stringify = function stringify() {
    if (this.stringified) return this.result;
    this.stringified = true;
    this.sync();
    var opts = this.result.opts;
    var str = _stringify3.default;
    if (opts.syntax) str = opts.syntax.stringify;
    if (opts.stringifier) str = opts.stringifier;
    if (str.stringify) str = str.stringify;
    var map = new _mapGenerator2.default(str, this.result.root, this.result.opts);
    var data = map.generate();
    this.result.css = data[0];
    this.result.map = data[1];
    return this.result;
  };

  _createClass(LazyResult, [{
    key: 'processor',
    get: function get() {
      return this.result.processor;
    }
    /**
     * Options from the {@link Processor#process} call.
     * @type {processOptions}
     */

  }, {
    key: 'opts',
    get: function get() {
      return this.result.opts;
    }
    /**
     * Processes input CSS through synchronous plugins, converts `Root`
     * to a CSS string and returns {@link Result#css}.
     *
     * This property will only work with synchronous plugins.
     * If the processor contains any asynchronous plugins
     * it will throw an error. This is why this method is only
     * for debug purpose, you should always use {@link LazyResult#then}.
     *
     * @type {string}
     * @see Result#css
     */

  }, {
    key: 'css',
    get: function get() {
      return this.stringify().css;
    }
    /**
     * An alias for the `css` property. Use it with syntaxes
     * that generate non-CSS output.
     *
     * This property will only work with synchronous plugins.
     * If the processor contains any asynchronous plugins
     * it will throw an error. This is why this method is only
     * for debug purpose, you should always use {@link LazyResult#then}.
     *
     * @type {string}
     * @see Result#content
     */

  }, {
    key: 'content',
    get: function get() {
      return this.stringify().content;
    }
    /**
     * Processes input CSS through synchronous plugins
     * and returns {@link Result#map}.
     *
     * This property will only work with synchronous plugins.
     * If the processor contains any asynchronous plugins
     * it will throw an error. This is why this method is only
     * for debug purpose, you should always use {@link LazyResult#then}.
     *
     * @type {SourceMapGenerator}
     * @see Result#map
     */

  }, {
    key: 'map',
    get: function get() {
      return this.stringify().map;
    }
    /**
     * Processes input CSS through synchronous plugins
     * and returns {@link Result#root}.
     *
     * This property will only work with synchronous plugins. If the processor
     * contains any asynchronous plugins it will throw an error.
     *
     * This is why this method is only for debug purpose,
     * you should always use {@link LazyResult#then}.
     *
     * @type {Root}
     * @see Result#root
     */

  }, {
    key: 'root',
    get: function get() {
      return this.sync().root;
    }
    /**
     * Processes input CSS through synchronous plugins
     * and returns {@link Result#messages}.
     *
     * This property will only work with synchronous plugins. If the processor
     * contains any asynchronous plugins it will throw an error.
     *
     * This is why this method is only for debug purpose,
     * you should always use {@link LazyResult#then}.
     *
     * @type {Message[]}
     * @see Result#messages
     */

  }, {
    key: 'messages',
    get: function get() {
      return this.sync().messages;
    }
  }]);

  return LazyResult;
}();

exports.default = LazyResult;
/**
 * @callback onFulfilled
 * @param {Result} result
 */

/**
 * @callback onRejected
 * @param {Error} error
 */

module.exports = exports['default'];

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var createError = __webpack_require__(88);

var parseFrontMatter = __webpack_require__(28);

var lineColumnToIndex = __webpack_require__(89);

var _require = __webpack_require__(90),
    hasPragma = _require.hasPragma; // utils


var utils = __webpack_require__(95);

var isSCSS = utils.isSCSS;
var isSCSSNestedPropertyNode = utils.isSCSSNestedPropertyNode;

function parseValueNodes(nodes) {
  var parenGroup = {
    open: null,
    close: null,
    groups: [],
    type: "paren_group"
  };
  var parenGroupStack = [parenGroup];
  var rootParenGroup = parenGroup;
  var commaGroup = {
    groups: [],
    type: "comma_group"
  };
  var commaGroupStack = [commaGroup];

  for (var i = 0; i < nodes.length; ++i) {
    var node = nodes[i];
    var isUnquotedDataURLCall = node.type === "func" && node.value === "url" && node.group && node.group.groups && node.group.groups[0] && node.group.groups[0].groups && node.group.groups[0].groups.length > 2 && node.group.groups[0].groups[0].type === "word" && node.group.groups[0].groups[0].value === "data" && node.group.groups[0].groups[1].type === "colon" && node.group.groups[0].groups[1].value === ":";

    if (isUnquotedDataURLCall) {
      node.group.groups = [stringifyGroup(node)];
    }

    if (node.type === "paren" && node.value === "(") {
      parenGroup = {
        open: node,
        close: null,
        groups: [],
        type: "paren_group"
      };
      parenGroupStack.push(parenGroup);
      commaGroup = {
        groups: [],
        type: "comma_group"
      };
      commaGroupStack.push(commaGroup);
    } else if (node.type === "paren" && node.value === ")") {
      if (commaGroup.groups.length) {
        parenGroup.groups.push(commaGroup);
      }

      parenGroup.close = node;

      if (commaGroupStack.length === 1) {
        throw new Error("Unbalanced parenthesis");
      }

      commaGroupStack.pop();
      commaGroup = commaGroupStack[commaGroupStack.length - 1];
      commaGroup.groups.push(parenGroup);
      parenGroupStack.pop();
      parenGroup = parenGroupStack[parenGroupStack.length - 1];
    } else if (node.type === "comma") {
      parenGroup.groups.push(commaGroup);
      commaGroup = {
        groups: [],
        type: "comma_group"
      };
      commaGroupStack[commaGroupStack.length - 1] = commaGroup;
    } else {
      commaGroup.groups.push(node);
    }
  }

  if (commaGroup.groups.length > 0) {
    parenGroup.groups.push(commaGroup);
  }

  return rootParenGroup;
}

function stringifyGroup(node) {
  if (node.group) {
    return stringifyGroup(node.group);
  }

  if (node.groups) {
    return node.groups.reduce(function (previousValue, currentValue, index) {
      return previousValue + stringifyGroup(currentValue) + (currentValue.type === "comma_group" && index !== node.groups.length - 1 ? "," : "");
    }, "");
  }

  var before = node.raws && node.raws.before ? node.raws.before : "";
  var value = node.value ? node.value : "";
  var unit = node.unit ? node.unit : "";
  var after = node.raws && node.raws.after ? node.raws.after : "";
  return before + value + unit + after;
}

function flattenGroups(node) {
  if (node.type === "paren_group" && !node.open && !node.close && node.groups.length === 1) {
    return flattenGroups(node.groups[0]);
  }

  if (node.type === "comma_group" && node.groups.length === 1) {
    return flattenGroups(node.groups[0]);
  }

  if (node.type === "paren_group" || node.type === "comma_group") {
    return Object.assign({}, node, {
      groups: node.groups.map(flattenGroups)
    });
  }

  return node;
}

function addTypePrefix(node, prefix) {
  if (node && _typeof(node) === "object") {
    delete node.parent;

    for (var key in node) {
      addTypePrefix(node[key], prefix);

      if (key === "type" && typeof node[key] === "string") {
        if (!node[key].startsWith(prefix)) {
          node[key] = prefix + node[key];
        }
      }
    }
  }

  return node;
}

function addMissingType(node) {
  if (node && _typeof(node) === "object") {
    delete node.parent;

    for (var key in node) {
      addMissingType(node[key]);
    }

    if (!Array.isArray(node) && node.value && !node.type) {
      node.type = "unknown";
    }
  }

  return node;
}

function parseNestedValue(node) {
  if (node && _typeof(node) === "object") {
    delete node.parent;

    for (var key in node) {
      parseNestedValue(node[key]);

      if (key === "nodes") {
        node.group = flattenGroups(parseValueNodes(node[key]));
        delete node[key];
      }
    }
  }

  return node;
}

function parseValue(value) {
  var valueParser = __webpack_require__(97);

  var result = null;

  try {
    result = valueParser(value, {
      loose: true
    }).parse();
  } catch (e) {
    return {
      type: "value-unknown",
      value: value
    };
  }

  var parsedResult = parseNestedValue(result);
  return addTypePrefix(parsedResult, "value-");
}

function parseSelector(selector) {
  // If there's a comment inside of a selector, the parser tries to parse
  // the content of the comment as selectors which turns it into complete
  // garbage. Better to print the whole selector as-is and not try to parse
  // and reformat it.
  if (selector.match(/\/\/|\/\*/)) {
    return {
      type: "selector-unknown",
      value: selector.replace(/^ +/, "").replace(/ +$/, "")
    };
  }

  var selectorParser = __webpack_require__(106);

  var result = null;

  try {
    selectorParser(function (result_) {
      result = result_;
    }).process(selector);
  } catch (e) {
    // Fail silently. It's better to print it as is than to try and parse it
    // Note: A common failure is for SCSS nested properties. `background:
    // none { color: red; }` is parsed as a NestedDeclaration by
    // postcss-scss, while `background: { color: red; }` is parsed as a Rule
    // with a selector ending with a colon. See:
    // https://github.com/postcss/postcss-scss/issues/39
    return {
      type: "selector-unknown",
      value: selector
    };
  }

  return addTypePrefix(result, "selector-");
}

function parseMediaQuery(params) {
  var mediaParser = __webpack_require__(111).default;

  var result = null;

  try {
    result = mediaParser(params);
  } catch (e) {
    // Ignore bad media queries
    return {
      type: "selector-unknown",
      value: params
    };
  }

  return addTypePrefix(addMissingType(result), "media-");
}

var DEFAULT_SCSS_DIRECTIVE = /(\s*?)(!default).*$/;
var GLOBAL_SCSS_DIRECTIVE = /(\s*?)(!global).*$/;

function parseNestedCSS(node) {
  if (node && _typeof(node) === "object") {
    delete node.parent;

    for (var key in node) {
      parseNestedCSS(node[key]);
    }

    if (!node.type) {
      return node;
    }

    if (!node.raws) {
      node.raws = {};
    }

    var selector = "";

    if (typeof node.selector === "string") {
      selector = node.raws.selector ? node.raws.selector.scss ? node.raws.selector.scss : node.raws.selector.raw : node.selector;

      if (node.raws.between && node.raws.between.trim().length > 0) {
        selector += node.raws.between;
      }

      node.raws.selector = selector;
    }

    var value = "";

    if (typeof node.value === "string") {
      value = node.raws.value ? node.raws.value.scss ? node.raws.value.scss : node.raws.value.raw : node.value;
      value = value.trim();
      node.raws.value = selector;
    }

    var params = "";

    if (typeof node.params === "string") {
      params = node.raws.params ? node.raws.params.scss ? node.raws.params.scss : node.raws.params.raw : node.params;

      if (node.raws.afterName && node.raws.afterName.trim().length > 0) {
        params = node.raws.afterName + params;
      }

      if (node.raws.between && node.raws.between.trim().length > 0) {
        params = params + node.raws.between;
      }

      params = params.trim();
      node.raws.params = params;
    } // Ignore LESS mixin declaration


    if (selector.trim().length > 0) {
      if (selector.startsWith("@") && selector.endsWith(":")) {
        return node;
      } // Ignore LESS mixins


      if (node.mixin) {
        node.selector = parseValue(selector);
        return node;
      } // Check on SCSS nested property


      if (isSCSSNestedPropertyNode(node)) {
        node.isSCSSNesterProperty = true;
      }

      node.selector = parseSelector(selector);
      return node;
    }

    if (value.length > 0) {
      var defaultSCSSDirectiveIndex = value.match(DEFAULT_SCSS_DIRECTIVE);

      if (defaultSCSSDirectiveIndex) {
        value = value.substring(0, defaultSCSSDirectiveIndex.index);
        node.scssDefault = true;

        if (defaultSCSSDirectiveIndex[0].trim() !== "!default") {
          node.raws.scssDefault = defaultSCSSDirectiveIndex[0];
        }
      }

      var globalSCSSDirectiveIndex = value.match(GLOBAL_SCSS_DIRECTIVE);

      if (globalSCSSDirectiveIndex) {
        value = value.substring(0, globalSCSSDirectiveIndex.index);
        node.scssGlobal = true;

        if (globalSCSSDirectiveIndex[0].trim() !== "!global") {
          node.raws.scssGlobal = globalSCSSDirectiveIndex[0];
        }
      }

      if (value.startsWith("progid:")) {
        return {
          type: "value-unknown",
          value: value
        };
      }

      node.value = parseValue(value);
    }

    if (node.type === "css-atrule" && params.length > 0) {
      var name = node.name;
      var lowercasedName = node.name.toLowerCase();

      if (name === "warn" || name === "error") {
        node.params = {
          type: "media-unknown",
          value: params
        };
        return node;
      }

      if (name === "extend" || name === "nest") {
        node.selector = parseSelector(params);
        delete node.params;
        return node;
      }

      if (name === "at-root") {
        if (/^\(\s*(without|with)\s*:[\s\S]+\)$/.test(params)) {
          node.params = parseValue(params);
        } else {
          node.selector = parseSelector(params);
          delete node.params;
        }

        return node;
      }

      if (lowercasedName === "import") {
        node.params = parseValue(params);
        return node;
      }

      if (["namespace", "supports", "if", "else", "for", "each", "while", "debug", "mixin", "include", "function", "return", "define-mixin", "add-mixin"].indexOf(name) !== -1) {
        // Remove unnecessary spaces in SCSS variable arguments
        params = params.replace(/(\$\S+?)\s+?\.\.\./, "$1..."); // Remove unnecessary spaces before SCSS control, mixin and function directives

        params = params.replace(/^(?!if)(\S+)\s+\(/, "$1(");
        node.value = parseValue(params);
        delete node.params;
        return node;
      }

      if (name === "custom-selector") {
        var customSelector = params.match(/:--\S+?\s+/)[0].trim();
        node.customSelector = customSelector;
        node.selector = parseSelector(params.substring(customSelector.length));
        delete node.params;
        return node;
      }

      if (["media", "custom-media"].indexOf(lowercasedName) !== -1) {
        if (params.includes("#{")) {
          // Workaround for media at rule with scss interpolation
          return {
            type: "media-unknown",
            value: params
          };
        }

        node.params = parseMediaQuery(params);
        return node;
      }

      node.params = params;
      return node;
    }
  }

  return node;
}

function parseWithParser(parser, text) {
  var parsed = parseFrontMatter(text);
  var frontMatter = parsed.frontMatter;
  text = parsed.content;
  var result;

  try {
    result = parser.parse(text);
  } catch (e) {
    if (typeof e.line !== "number") {
      throw e;
    }

    throw createError("(postcss) " + e.name + " " + e.reason, {
      start: e
    });
  }

  result = parseNestedCSS(addTypePrefix(result, "css-"));

  if (frontMatter) {
    result.nodes.unshift(frontMatter);
  }

  return result;
}

function requireParser(isSCSSParser) {
  if (isSCSSParser) {
    return __webpack_require__(113);
  } // TODO: Remove this hack when this issue is fixed:
  // https://github.com/shellscape/postcss-less/issues/88


  var LessParser = __webpack_require__(72);

  LessParser.prototype.atrule = function () {
    return Object.getPrototypeOf(LessParser.prototype).atrule.apply(this, arguments);
  };

  return __webpack_require__(182);
}

function parse(text, parsers, opts) {
  var hasExplicitParserChoice = opts.parser === "less" || opts.parser === "scss";
  var isSCSSParser = isSCSS(opts.parser, text);

  try {
    return parseWithParser(requireParser(isSCSSParser), text);
  } catch (originalError) {
    if (hasExplicitParserChoice) {
      throw originalError;
    }

    try {
      return parseWithParser(requireParser(!isSCSSParser), text);
    } catch (_secondError) {
      throw originalError;
    }
  }
}

var parser = {
  parse: parse,
  astFormat: "postcss",
  hasPragma: hasPragma,
  locStart: function locStart(node) {
    if (node.source) {
      return lineColumnToIndex(node.source.start, node.source.input.css) - 1;
    }

    return null;
  },
  locEnd: function locEnd(node) {
    var endNode = node.nodes && node.nodes[node.nodes.length - 1];

    if (endNode && node.source && !node.source.end) {
      node = endNode;
    }

    if (node.source && node.source.end) {
      return lineColumnToIndex(node.source.end, node.source.input.css);
    }

    return null;
  }
}; // Export as a plugin so we can reuse the same bundle for UMD loading

module.exports = {
  parsers: {
    css: parser,
    less: parser,
    scss: parser
  }
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function createError(message, loc) {
  // Construct an error similar to the ones thrown by Babel.
  var error = new SyntaxError(message + " (" + loc.start.line + ":" + loc.start.column + ")");
  error.loc = loc;
  return error;
}

module.exports = createError;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // Super inefficient, needs to be cached.

module.exports = function (lineColumn, text) {
  var index = 0;

  for (var i = 0; i < lineColumn.line - 1; ++i) {
    index = text.indexOf("\n", index) + 1;

    if (index === -1) {
      return -1;
    }
  }

  return index + lineColumn.column;
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var jsPragma = __webpack_require__(91);

var parseFrontMatter = __webpack_require__(28);

function hasPragma(text) {
  return jsPragma.hasPragma(parseFrontMatter(text).content);
}

function insertPragma(text) {
  var _parseFrontMatter = parseFrontMatter(text),
      frontMatter = _parseFrontMatter.frontMatter,
      content = _parseFrontMatter.content;

  return (frontMatter ? frontMatter.raw + "\n\n" : "") + jsPragma.insertPragma(content);
}

module.exports = {
  hasPragma: hasPragma,
  insertPragma: insertPragma
};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var docblock = __webpack_require__(92);

function hasPragma(text) {
  var pragmas = Object.keys(docblock.parse(docblock.extract(text)));
  return pragmas.indexOf("prettier") !== -1 || pragmas.indexOf("format") !== -1;
}

function insertPragma(text) {
  var parsedDocblock = docblock.parseWithComments(docblock.extract(text));
  var pragmas = Object.assign({
    format: ""
  }, parsedDocblock.pragmas);
  var newDocblock = docblock.print({
    pragmas: pragmas,
    comments: parsedDocblock.comments.replace(/^(\s+?\r?\n)+/, "") // remove leading newlines

  }).replace(/(\r\n|\r)/g, "\n"); // normalise newlines (mitigate use of os.EOL by jest-docblock)

  var strippedText = docblock.strip(text);
  var separatingNewlines = strippedText.startsWith("\n") ? "\n" : "\n\n";
  return newDocblock + separatingNewlines + strippedText;
}

module.exports = {
  hasPragma: hasPragma,
  insertPragma: insertPragma
};

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.extract = extract;
exports.strip = strip;
exports.parse = parse;
exports.parseWithComments = parseWithComments;
exports.print = print;

var _detectNewline;

function _load_detectNewline() {
  return _detectNewline = _interopRequireDefault(__webpack_require__(93));
}

var _os;

function _load_os() {
  return _os = __webpack_require__(94);
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 */


var commentEndRe = /\*\/$/;
var commentStartRe = /^\/\*\*/;
var docblockRe = /^\s*(\/\*\*?(.|\r?\n)*?\*\/)/;
var lineCommentRe = /(^|\s+)\/\/([^\r\n]*)/g;
var ltrimNewlineRe = /^(\r?\n)+/;
var multilineRe = /(?:^|\r?\n) *(@[^\r\n]*?) *\r?\n *(?![^@\r\n]*\/\/[^]*)([^@\r\n\s][^@\r\n]+?) *\r?\n/g;
var propertyRe = /(?:^|\r?\n) *@(\S+) *([^\r\n]*)/g;
var stringStartRe = /(\r?\n|^) *\* ?/g;

function extract(contents) {
  var match = contents.match(docblockRe);
  return match ? match[0].trimLeft() : '';
}

function strip(contents) {
  var match = contents.match(docblockRe);
  return match && match[0] ? contents.substring(match[0].length) : contents;
}

function parse(docblock) {
  return parseWithComments(docblock).pragmas;
}

function parseWithComments(docblock) {
  var line = (0, (_detectNewline || _load_detectNewline()).default)(docblock) || (_os || _load_os()).EOL;

  docblock = docblock.replace(commentStartRe, '').replace(commentEndRe, '').replace(stringStartRe, '$1'); // Normalize multi-line directives

  var prev = '';

  while (prev !== docblock) {
    prev = docblock;
    docblock = docblock.replace(multilineRe, "".concat(line, "$1 $2").concat(line));
  }

  docblock = docblock.replace(ltrimNewlineRe, '').trimRight();
  var result = Object.create(null);
  var comments = docblock.replace(propertyRe, '').replace(ltrimNewlineRe, '').trimRight();
  var match;

  while (match = propertyRe.exec(docblock)) {
    // strip linecomments from pragmas
    var nextPragma = match[2].replace(lineCommentRe, '');

    if (typeof result[match[1]] === 'string' || Array.isArray(result[match[1]])) {
      result[match[1]] = [].concat(result[match[1]], nextPragma);
    } else {
      result[match[1]] = nextPragma;
    }
  }

  return {
    comments: comments,
    pragmas: result
  };
}

function print(_ref) {
  var _ref$comments = _ref.comments;
  var comments = _ref$comments === undefined ? '' : _ref$comments;
  var _ref$pragmas = _ref.pragmas;
  var pragmas = _ref$pragmas === undefined ? {} : _ref$pragmas;

  var line = (0, (_detectNewline || _load_detectNewline()).default)(comments) || (_os || _load_os()).EOL;

  var head = '/**';
  var start = ' *';
  var tail = ' */';
  var keys = Object.keys(pragmas);
  var printedObject = keys.map(function (key) {
    return printKeyValues(key, pragmas[key]);
  }).reduce(function (arr, next) {
    return arr.concat(next);
  }, []).map(function (keyValue) {
    return start + ' ' + keyValue + line;
  }).join('');

  if (!comments) {
    if (keys.length === 0) {
      return '';
    }

    if (keys.length === 1 && !Array.isArray(pragmas[keys[0]])) {
      var value = pragmas[keys[0]];
      return "".concat(head, " ").concat(printKeyValues(keys[0], value)[0]).concat(tail);
    }
  }

  var printedComments = comments.split(line).map(function (textLine) {
    return "".concat(start, " ").concat(textLine);
  }).join(line) + line;
  return head + line + (comments ? printedComments : '') + (comments && keys.length ? start + line : '') + printedObject + tail;
}

function printKeyValues(key, valueOrArray) {
  return [].concat(valueOrArray).map(function (value) {
    return "@".concat(key, " ").concat(value).trim();
  });
}

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (str) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }

  var newlines = str.match(/(?:\r?\n)/g) || [];

  if (newlines.length === 0) {
    return null;
  }

  var crlf = newlines.filter(function (el) {
    return el === '\r\n';
  }).length;
  var lf = newlines.length - crlf;
  return crlf > lf ? '\r\n' : '\n';
};

module.exports.graceful = function (str) {
  return module.exports(str) || '\n';
};

/***/ }),
/* 94 */
/***/ (function(module, exports) {

exports.endianness = function () {
  return 'LE';
};

exports.hostname = function () {
  if (typeof location !== 'undefined') {
    return location.hostname;
  } else return '';
};

exports.loadavg = function () {
  return [];
};

exports.uptime = function () {
  return 0;
};

exports.freemem = function () {
  return Number.MAX_VALUE;
};

exports.totalmem = function () {
  return Number.MAX_VALUE;
};

exports.cpus = function () {
  return [];
};

exports.type = function () {
  return 'Browser';
};

exports.release = function () {
  if (typeof navigator !== 'undefined') {
    return navigator.appVersion;
  }

  return '';
};

exports.networkInterfaces = exports.getNetworkInterfaces = function () {
  return {};
};

exports.arch = function () {
  return 'javascript';
};

exports.platform = function () {
  return 'browser';
};

exports.tmpdir = exports.tmpDir = function () {
  return '/tmp';
};

exports.EOL = '\n';

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var htmlTagNames = __webpack_require__(96);

var colorAdjusterFunctions = ["red", "green", "blue", "alpha", "a", "rgb", "hue", "h", "saturation", "s", "lightness", "l", "whiteness", "w", "blackness", "b", "tint", "shade", "blend", "blenda", "contrast", "hsl", "hsla", "hwb", "hwba"];

function getAncestorCounter(path, typeOrTypes) {
  var types = [].concat(typeOrTypes);
  var counter = -1;
  var ancestorNode;

  while (ancestorNode = path.getParentNode(++counter)) {
    if (types.indexOf(ancestorNode.type) !== -1) {
      return counter;
    }
  }

  return -1;
}

function getAncestorNode(path, typeOrTypes) {
  var counter = getAncestorCounter(path, typeOrTypes);
  return counter === -1 ? null : path.getParentNode(counter);
}

function getPropOfDeclNode(path) {
  var declAncestorNode = getAncestorNode(path, "css-decl");
  return declAncestorNode && declAncestorNode.prop && declAncestorNode.prop.toLowerCase();
}

function isSCSS(parser, text) {
  var hasExplicitParserChoice = parser === "less" || parser === "scss";
  var IS_POSSIBLY_SCSS = /(\w\s*: [^}:]+|#){|@import[^\n]+(url|,)/;
  return hasExplicitParserChoice ? parser === "scss" : IS_POSSIBLY_SCSS.test(text);
}

function isWideKeywords(value) {
  return ["initial", "inherit", "unset", "revert"].indexOf(value.toLowerCase()) !== -1;
}

function isKeyframeAtRuleKeywords(path, value) {
  var atRuleAncestorNode = getAncestorNode(path, "css-atrule");
  return atRuleAncestorNode && atRuleAncestorNode.name && atRuleAncestorNode.name.toLowerCase().endsWith("keyframes") && ["from", "to"].indexOf(value.toLowerCase()) !== -1;
}

function maybeToLowerCase(value) {
  return value.includes("$") || value.includes("@") || value.includes("#") || value.startsWith("%") || value.startsWith("--") || value.startsWith(":--") || value.includes("(") && value.includes(")") ? value : value.toLowerCase();
}

function insideValueFunctionNode(path, functionName) {
  var funcAncestorNode = getAncestorNode(path, "value-func");
  return funcAncestorNode && funcAncestorNode.value && funcAncestorNode.value.toLowerCase() === functionName;
}

function insideICSSRuleNode(path) {
  var ruleAncestorNode = getAncestorNode(path, "css-rule");
  return ruleAncestorNode && ruleAncestorNode.raws && ruleAncestorNode.raws.selector && (ruleAncestorNode.raws.selector.startsWith(":import") || ruleAncestorNode.raws.selector.startsWith(":export"));
}

function insideAtRuleNode(path, atRuleNameOrAtRuleNames) {
  var atRuleNames = [].concat(atRuleNameOrAtRuleNames);
  var atRuleAncestorNode = getAncestorNode(path, "css-atrule");
  return atRuleAncestorNode && atRuleNames.indexOf(atRuleAncestorNode.name.toLowerCase()) !== -1;
}

function insideURLFunctionInImportAtRuleNode(path) {
  var node = path.getValue();
  var atRuleAncestorNode = getAncestorNode(path, "css-atrule");
  return atRuleAncestorNode && atRuleAncestorNode.name === "import" && node.groups[0].value === "url" && node.groups.length === 2;
}

function isURLFunctionNode(node) {
  return node.type === "value-func" && node.value.toLowerCase() === "url";
}

function isLastNode(path, node) {
  var parentNode = path.getParentNode();

  if (!parentNode) {
    return false;
  }

  var nodes = parentNode.nodes;
  return nodes && nodes.indexOf(node) === nodes.length - 1;
}

function isHTMLTag(value) {
  return htmlTagNames.indexOf(value.toLowerCase()) !== -1;
}

function isDetachedRulesetDeclarationNode(node) {
  // If a Less file ends up being parsed with the SCSS parser, Less
  // variable declarations will be parsed as atrules with names ending
  // with a colon, so keep the original case then.
  if (!node.selector) {
    return false;
  }

  return typeof node.selector === "string" && /^@.+:.*$/.test(node.selector) || node.selector.value && /^@.+:.*$/.test(node.selector.value);
}

function isForKeywordNode(node) {
  return node.type === "value-word" && ["from", "through", "end"].indexOf(node.value) !== -1;
}

function isIfElseKeywordNode(node) {
  return node.type === "value-word" && ["and", "or", "not"].indexOf(node.value) !== -1;
}

function isEachKeywordNode(node) {
  return node.type === "value-word" && node.value === "in";
}

function isMultiplicationNode(node) {
  return node.type === "value-operator" && node.value === "*";
}

function isDivisionNode(node) {
  return node.type === "value-operator" && node.value === "/";
}

function isAdditionNode(node) {
  return node.type === "value-operator" && node.value === "+";
}

function isSubtractionNode(node) {
  return node.type === "value-operator" && node.value === "-";
}

function isModuloNode(node) {
  return node.type === "value-operator" && node.value === "%";
}

function isMathOperatorNode(node) {
  return isMultiplicationNode(node) || isDivisionNode(node) || isAdditionNode(node) || isSubtractionNode(node) || isModuloNode(node);
}

function isEqualityOperatorNode(node) {
  return node.type === "value-word" && ["==", "!="].indexOf(node.value) !== -1;
}

function isRelationalOperatorNode(node) {
  return node.type === "value-word" && ["<", ">", "<=", ">="].indexOf(node.value) !== -1;
}

function isSCSSControlDirectiveNode(node) {
  return node.type === "css-atrule" && ["if", "else", "for", "each", "while"].indexOf(node.name) !== -1;
}

function isSCSSNestedPropertyNode(node) {
  if (!node.selector) {
    return false;
  }

  return node.selector.replace(/\/\*.*?\*\//, "").replace(/\/\/.*?\n/, "").trim().endsWith(":");
}

function isDetachedRulesetCallNode(node) {
  return node.raws && node.raws.params && /^\(\s*\)$/.test(node.raws.params);
}

function isTemplatePlaceholderNode(node) {
  return node.name.startsWith("prettier-placeholder");
}

function isTemplatePropNode(node) {
  return node.prop.startsWith("@prettier-placeholder");
}

function isPostcssSimpleVarNode(currentNode, nextNode) {
  return currentNode.value === "$$" && currentNode.type === "value-func" && nextNode && nextNode.type === "value-word" && !nextNode.raws.before;
}

function hasComposesNode(node) {
  return node.value && node.value.type === "value-root" && node.value.group && node.value.group.type === "value-value" && node.prop.toLowerCase() === "composes";
}

function hasParensAroundNode(node) {
  return node.value && node.value.group && node.value.group.group && node.value.group.group.type === "value-paren_group" && node.value.group.group.open !== null && node.value.group.group.close !== null;
}

function hasEmptyRawBefore(node) {
  return node.raws && node.raws.before === "";
}

function isKeyValuePairNode(node) {
  return node.type === "value-comma_group" && node.groups && node.groups[1] && node.groups[1].type === "value-colon";
}

function isKeyValuePairInParenGroupNode(node) {
  return node.type === "value-paren_group" && node.groups && node.groups[0] && isKeyValuePairNode(node.groups[0]);
}

function isSCSSMapItemNode(path) {
  var node = path.getValue(); // Ignore empty item (i.e. `$key: ()`)

  if (node.groups.length === 0) {
    return false;
  }

  var parentParentNode = path.getParentNode(1); // Check open parens contain key/value pair (i.e. `(key: value)` and `(key: (value, other-value)`)

  if (!isKeyValuePairInParenGroupNode(node) && !(parentParentNode && isKeyValuePairInParenGroupNode(parentParentNode))) {
    return false;
  }

  var declNode = getAncestorNode(path, "css-decl"); // SCSS map declaration (i.e. `$map: (key: value, other-key: other-value)`)

  if (declNode && declNode.prop && declNode.prop.startsWith("$")) {
    return true;
  } // List as value of key inside SCSS map (i.e. `$map: (key: (value other-value other-other-value))`)


  if (isKeyValuePairInParenGroupNode(parentParentNode)) {
    return true;
  } // SCSS Map is argument of function (i.e. `func((key: value, other-key: other-value))`)


  if (parentParentNode.type === "value-func") {
    return true;
  }

  return false;
}

function isInlineValueCommentNode(node) {
  return node.type === "value-comment" && node.inline;
}

function isHashNode(node) {
  return node.type === "value-word" && node.value === "#";
}

function isLeftCurlyBraceNode(node) {
  return node.type === "value-word" && node.value === "{";
}

function isRightCurlyBraceNode(node) {
  return node.type === "value-word" && node.value === "}";
}

function isWordNode(node) {
  return ["value-word", "value-atword"].indexOf(node.type) !== -1;
}

function isColonNode(node) {
  return node.type === "value-colon";
}

function isMediaAndSupportsKeywords(node) {
  return node.value && ["not", "and", "or"].indexOf(node.value.toLowerCase()) !== -1;
}

function isColorAdjusterFuncNode(node) {
  if (node.type !== "value-func") {
    return false;
  }

  return colorAdjusterFunctions.indexOf(node.value.toLowerCase()) !== -1;
}

module.exports = {
  getAncestorCounter: getAncestorCounter,
  getAncestorNode: getAncestorNode,
  getPropOfDeclNode: getPropOfDeclNode,
  maybeToLowerCase: maybeToLowerCase,
  insideValueFunctionNode: insideValueFunctionNode,
  insideICSSRuleNode: insideICSSRuleNode,
  insideAtRuleNode: insideAtRuleNode,
  insideURLFunctionInImportAtRuleNode: insideURLFunctionInImportAtRuleNode,
  isKeyframeAtRuleKeywords: isKeyframeAtRuleKeywords,
  isHTMLTag: isHTMLTag,
  isWideKeywords: isWideKeywords,
  isSCSS: isSCSS,
  isLastNode: isLastNode,
  isSCSSControlDirectiveNode: isSCSSControlDirectiveNode,
  isDetachedRulesetDeclarationNode: isDetachedRulesetDeclarationNode,
  isRelationalOperatorNode: isRelationalOperatorNode,
  isEqualityOperatorNode: isEqualityOperatorNode,
  isMultiplicationNode: isMultiplicationNode,
  isDivisionNode: isDivisionNode,
  isAdditionNode: isAdditionNode,
  isSubtractionNode: isSubtractionNode,
  isModuloNode: isModuloNode,
  isMathOperatorNode: isMathOperatorNode,
  isEachKeywordNode: isEachKeywordNode,
  isForKeywordNode: isForKeywordNode,
  isURLFunctionNode: isURLFunctionNode,
  isIfElseKeywordNode: isIfElseKeywordNode,
  hasComposesNode: hasComposesNode,
  hasParensAroundNode: hasParensAroundNode,
  hasEmptyRawBefore: hasEmptyRawBefore,
  isSCSSNestedPropertyNode: isSCSSNestedPropertyNode,
  isDetachedRulesetCallNode: isDetachedRulesetCallNode,
  isTemplatePlaceholderNode: isTemplatePlaceholderNode,
  isTemplatePropNode: isTemplatePropNode,
  isPostcssSimpleVarNode: isPostcssSimpleVarNode,
  isKeyValuePairNode: isKeyValuePairNode,
  isKeyValuePairInParenGroupNode: isKeyValuePairInParenGroupNode,
  isSCSSMapItemNode: isSCSSMapItemNode,
  isInlineValueCommentNode: isInlineValueCommentNode,
  isHashNode: isHashNode,
  isLeftCurlyBraceNode: isLeftCurlyBraceNode,
  isRightCurlyBraceNode: isRightCurlyBraceNode,
  isWordNode: isWordNode,
  isColonNode: isColonNode,
  isMediaAndSupportsKeywords: isMediaAndSupportsKeywords,
  isColorAdjusterFuncNode: isColorAdjusterFuncNode
};

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = [
	"a",
	"abbr",
	"acronym",
	"address",
	"applet",
	"area",
	"article",
	"aside",
	"audio",
	"b",
	"base",
	"basefont",
	"bdi",
	"bdo",
	"bgsound",
	"big",
	"blink",
	"blockquote",
	"body",
	"br",
	"button",
	"canvas",
	"caption",
	"center",
	"cite",
	"code",
	"col",
	"colgroup",
	"command",
	"content",
	"data",
	"datalist",
	"dd",
	"del",
	"details",
	"dfn",
	"dialog",
	"dir",
	"div",
	"dl",
	"dt",
	"element",
	"em",
	"embed",
	"fieldset",
	"figcaption",
	"figure",
	"font",
	"footer",
	"form",
	"frame",
	"frameset",
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6",
	"head",
	"header",
	"hgroup",
	"hr",
	"html",
	"i",
	"iframe",
	"image",
	"img",
	"input",
	"ins",
	"isindex",
	"kbd",
	"keygen",
	"label",
	"legend",
	"li",
	"link",
	"listing",
	"main",
	"map",
	"mark",
	"marquee",
	"math",
	"menu",
	"menuitem",
	"meta",
	"meter",
	"multicol",
	"nav",
	"nextid",
	"nobr",
	"noembed",
	"noframes",
	"noscript",
	"object",
	"ol",
	"optgroup",
	"option",
	"output",
	"p",
	"param",
	"picture",
	"plaintext",
	"pre",
	"progress",
	"q",
	"rb",
	"rbc",
	"rp",
	"rt",
	"rtc",
	"ruby",
	"s",
	"samp",
	"script",
	"section",
	"select",
	"shadow",
	"slot",
	"small",
	"source",
	"spacer",
	"span",
	"strike",
	"strong",
	"style",
	"sub",
	"summary",
	"sup",
	"svg",
	"table",
	"tbody",
	"td",
	"template",
	"textarea",
	"tfoot",
	"th",
	"thead",
	"time",
	"title",
	"tr",
	"track",
	"tt",
	"u",
	"ul",
	"var",
	"video",
	"wbr",
	"xmp"
];

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Parser = __webpack_require__(98);

var AtWord = __webpack_require__(31);

var Colon = __webpack_require__(32);

var Comma = __webpack_require__(33);

var Comment = __webpack_require__(34);

var Func = __webpack_require__(35);

var Num = __webpack_require__(36);

var Operator = __webpack_require__(37);

var Paren = __webpack_require__(38);

var Str = __webpack_require__(39);

var UnicodeRange = __webpack_require__(41);

var Value = __webpack_require__(30);

var Word = __webpack_require__(40);

var parser = function parser(source, options) {
  return new Parser(source, options);
};

parser.atword = function (opts) {
  return new AtWord(opts);
};

parser.colon = function (opts) {
  opts.value = opts.value || ':';
  return new Colon(opts);
};

parser.comma = function (opts) {
  opts.value = opts.value || ',';
  return new Comma(opts);
};

parser.comment = function (opts) {
  return new Comment(opts);
};

parser.func = function (opts) {
  return new Func(opts);
};

parser.number = function (opts) {
  return new Num(opts);
};

parser.operator = function (opts) {
  return new Operator(opts);
};

parser.paren = function (opts) {
  opts.value = opts.value || '(';
  return new Paren(opts);
};

parser.string = function (opts) {
  opts.quote = opts.quote || '\'';
  return new Str(opts);
};

parser.value = function (opts) {
  return new Value(opts);
};

parser.word = function (opts) {
  return new Word(opts);
};

parser.unicodeRange = function (opts) {
  return new UnicodeRange(opts);
};

module.exports = parser;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Root = __webpack_require__(99);

var Value = __webpack_require__(30);

var AtWord = __webpack_require__(31);

var Colon = __webpack_require__(32);

var Comma = __webpack_require__(33);

var Comment = __webpack_require__(34);

var Func = __webpack_require__(35);

var Numbr = __webpack_require__(36);

var Operator = __webpack_require__(37);

var Paren = __webpack_require__(38);

var Str = __webpack_require__(39);

var Word = __webpack_require__(40);

var UnicodeRange = __webpack_require__(41);

var tokenize = __webpack_require__(100);

var flatten = __webpack_require__(42);

var indexesOf = __webpack_require__(43);

var uniq = __webpack_require__(44);

var ParserError = __webpack_require__(105);

function sortAscending(list) {
  return list.sort(function (a, b) {
    return a - b;
  });
}

module.exports =
/*#__PURE__*/
function () {
  function Parser(input, options) {
    _classCallCheck(this, Parser);

    var defaults = {
      loose: false
    }; // cache needs to be an array for values with more than 1 level of function nesting

    this.cache = [];
    this.input = input;
    this.options = Object.assign({}, defaults, options);
    this.position = 0; // we'll use this to keep track of the paren balance

    this.unbalanced = 0;
    this.root = new Root();
    var value = new Value();
    this.root.append(value);
    this.current = value;
    this.tokens = tokenize(input, this.options);
  }

  _createClass(Parser, [{
    key: "parse",
    value: function parse() {
      return this.loop();
    }
  }, {
    key: "colon",
    value: function colon() {
      var token = this.currToken;
      this.newNode(new Colon({
        value: token[1],
        source: {
          start: {
            line: token[2],
            column: token[3]
          },
          end: {
            line: token[4],
            column: token[5]
          }
        },
        sourceIndex: token[6]
      }));
      this.position++;
    }
  }, {
    key: "comma",
    value: function comma() {
      var token = this.currToken;
      this.newNode(new Comma({
        value: token[1],
        source: {
          start: {
            line: token[2],
            column: token[3]
          },
          end: {
            line: token[4],
            column: token[5]
          }
        },
        sourceIndex: token[6]
      }));
      this.position++;
    }
  }, {
    key: "comment",
    value: function comment() {
      var inline = false,
          value = this.currToken[1].replace(/\/\*|\*\//g, ''),
          node;

      if (this.options.loose && value.startsWith("//")) {
        value = value.substring(2);
        inline = true;
      }

      node = new Comment({
        value: value,
        inline: inline,
        source: {
          start: {
            line: this.currToken[2],
            column: this.currToken[3]
          },
          end: {
            line: this.currToken[4],
            column: this.currToken[5]
          }
        },
        sourceIndex: this.currToken[6]
      });
      this.newNode(node);
      this.position++;
    }
  }, {
    key: "error",
    value: function error(message, token) {
      throw new ParserError(message + " at line: ".concat(token[2], ", column ").concat(token[3]));
    }
  }, {
    key: "loop",
    value: function loop() {
      while (this.position < this.tokens.length) {
        this.parseTokens();
      }

      if (!this.current.last && this.spaces) {
        this.current.raws.before += this.spaces;
      } else if (this.spaces) {
        this.current.last.raws.after += this.spaces;
      }

      this.spaces = '';
      return this.root;
    }
  }, {
    key: "operator",
    value: function operator() {
      // if a +|- operator is followed by a non-word character (. is allowed) and
      // is preceded by a non-word character. (5+5)
      var char = this.currToken[1],
          node;

      if (char === '+' || char === '-') {
        // only inspect if the operator is not the first token, and we're only
        // within a calc() function: the only spec-valid place for math expressions
        if (!this.options.loose) {
          if (this.position > 0) {
            if (this.current.type === 'func' && this.current.value === 'calc') {
              // allow operators to be proceeded by spaces and opening parens
              if (this.prevToken[0] !== 'space' && this.prevToken[0] !== '(') {
                this.error('Syntax Error', this.currToken);
              } // valid: calc(1 - +2)
              // invalid: calc(1 -+2)
              else if (this.nextToken[0] !== 'space' && this.nextToken[0] !== 'word') {
                  this.error('Syntax Error', this.currToken);
                } // valid: calc(1 - +2)
                // valid: calc(-0.5 + 2)
                // invalid: calc(1 -2)
                else if (this.nextToken[0] === 'word' && this.current.last.type !== 'operator' && this.current.last.value !== '(') {
                    this.error('Syntax Error', this.currToken);
                  }
            } // if we're not in a function and someone has doubled up on operators,
            // or they're trying to perform a calc outside of a calc
            // eg. +-4px or 5+ 5, throw an error
            else if (this.nextToken[0] === 'space' || this.nextToken[0] === 'operator' || this.prevToken[0] === 'operator') {
                this.error('Syntax Error', this.currToken);
              }
          }
        }

        if (!this.options.loose) {
          if (this.nextToken[0] === 'word') {
            return this.word();
          }
        } else {
          if ((!this.current.nodes.length || this.current.last && this.current.last.type === 'operator') && this.nextToken[0] === 'word') {
            return this.word();
          }
        }
      }

      node = new Operator({
        value: this.currToken[1],
        source: {
          start: {
            line: this.currToken[2],
            column: this.currToken[3]
          },
          end: {
            line: this.currToken[2],
            column: this.currToken[3]
          }
        },
        sourceIndex: this.currToken[4]
      });
      this.position++;
      return this.newNode(node);
    }
  }, {
    key: "parseTokens",
    value: function parseTokens() {
      switch (this.currToken[0]) {
        case 'space':
          this.space();
          break;

        case 'colon':
          this.colon();
          break;

        case 'comma':
          this.comma();
          break;

        case 'comment':
          this.comment();
          break;

        case '(':
          this.parenOpen();
          break;

        case ')':
          this.parenClose();
          break;

        case 'atword':
        case 'word':
          this.word();
          break;

        case 'operator':
          this.operator();
          break;

        case 'string':
          this.string();
          break;

        case 'unicoderange':
          this.unicodeRange();
          break;

        default:
          this.word();
          break;
      }
    }
  }, {
    key: "parenOpen",
    value: function parenOpen() {
      var unbalanced = 1,
          pos = this.position + 1,
          token = this.currToken,
          last; // check for balanced parens

      while (pos < this.tokens.length && unbalanced) {
        var tkn = this.tokens[pos];

        if (tkn[0] === '(') {
          unbalanced++;
        }

        if (tkn[0] === ')') {
          unbalanced--;
        }

        pos++;
      }

      if (unbalanced) {
        this.error('Expected closing parenthesis', token);
      } // ok, all parens are balanced. continue on


      last = this.current.last;

      if (last && last.type === 'func' && last.unbalanced < 0) {
        last.unbalanced = 0; // ok we're ready to add parens now

        this.current = last;
      }

      this.current.unbalanced++;
      this.newNode(new Paren({
        value: token[1],
        source: {
          start: {
            line: token[2],
            column: token[3]
          },
          end: {
            line: token[4],
            column: token[5]
          }
        },
        sourceIndex: token[6]
      }));
      this.position++; // url functions get special treatment, and anything between the function
      // parens get treated as one word, if the contents aren't not a string.

      if (this.current.type === 'func' && this.current.unbalanced && this.current.value === 'url' && this.currToken[0] !== 'string' && this.currToken[0] !== ')' && !this.options.loose) {
        var nextToken = this.nextToken,
            value = this.currToken[1],
            start = {
          line: this.currToken[2],
          column: this.currToken[3]
        };

        while (nextToken && nextToken[0] !== ')' && this.current.unbalanced) {
          this.position++;
          value += this.currToken[1];
          nextToken = this.nextToken;
        }

        if (this.position !== this.tokens.length - 1) {
          // skip the following word definition, or it'll be a duplicate
          this.position++;
          this.newNode(new Word({
            value: value,
            source: {
              start: start,
              end: {
                line: this.currToken[4],
                column: this.currToken[5]
              }
            },
            sourceIndex: this.currToken[6]
          }));
        }
      }
    }
  }, {
    key: "parenClose",
    value: function parenClose() {
      var token = this.currToken;
      this.newNode(new Paren({
        value: token[1],
        source: {
          start: {
            line: token[2],
            column: token[3]
          },
          end: {
            line: token[4],
            column: token[5]
          }
        },
        sourceIndex: token[6]
      }));
      this.position++;

      if (this.position >= this.tokens.length - 1 && !this.current.unbalanced) {
        return;
      }

      this.current.unbalanced--;

      if (this.current.unbalanced < 0) {
        this.error('Expected opening parenthesis', token);
      }

      if (!this.current.unbalanced && this.cache.length) {
        this.current = this.cache.pop();
      }
    }
  }, {
    key: "space",
    value: function space() {
      var token = this.currToken; // Handle space before and after the selector

      if (this.position === this.tokens.length - 1 || this.nextToken[0] === ',' || this.nextToken[0] === ')') {
        this.current.last.raws.after += token[1];
        this.position++;
      } else {
        this.spaces = token[1];
        this.position++;
      }
    }
  }, {
    key: "unicodeRange",
    value: function unicodeRange() {
      var token = this.currToken;
      this.newNode(new UnicodeRange({
        value: token[1],
        source: {
          start: {
            line: token[2],
            column: token[3]
          },
          end: {
            line: token[4],
            column: token[5]
          }
        },
        sourceIndex: token[6]
      }));
      this.position++;
    }
  }, {
    key: "splitWord",
    value: function splitWord() {
      var _this = this;

      var nextToken = this.nextToken,
          word = this.currToken[1],
          rNumber = /^[\+\-]?((\d+(\.\d*)?)|(\.\d+))([eE][\+\-]?\d+)?/,
          // treat css-like groupings differently so they can be inspected,
      // but don't address them as anything but a word, but allow hex values
      // to pass through.
      rNoFollow = /^(?!\#([a-z0-9]+))[\#\{\}]/gi,
          hasAt,
          indices;

      if (!rNoFollow.test(word)) {
        while (nextToken && nextToken[0] === 'word') {
          this.position++;
          var current = this.currToken[1];
          word += current;
          nextToken = this.nextToken;
        }
      }

      hasAt = indexesOf(word, '@');
      indices = sortAscending(uniq(flatten([[0], hasAt])));
      indices.forEach(function (ind, i) {
        var index = indices[i + 1] || word.length,
            value = word.slice(ind, index),
            node;

        if (~hasAt.indexOf(ind)) {
          node = new AtWord({
            value: value.slice(1),
            source: {
              start: {
                line: _this.currToken[2],
                column: _this.currToken[3] + ind
              },
              end: {
                line: _this.currToken[4],
                column: _this.currToken[3] + (index - 1)
              }
            },
            sourceIndex: _this.currToken[6] + indices[i]
          });
        } else if (rNumber.test(_this.currToken[1])) {
          var unit = value.replace(rNumber, '');
          node = new Numbr({
            value: value.replace(unit, ''),
            source: {
              start: {
                line: _this.currToken[2],
                column: _this.currToken[3] + ind
              },
              end: {
                line: _this.currToken[4],
                column: _this.currToken[3] + (index - 1)
              }
            },
            sourceIndex: _this.currToken[6] + indices[i],
            unit: unit
          });
        } else {
          node = new (nextToken && nextToken[0] === '(' ? Func : Word)({
            value: value,
            source: {
              start: {
                line: _this.currToken[2],
                column: _this.currToken[3] + ind
              },
              end: {
                line: _this.currToken[4],
                column: _this.currToken[3] + (index - 1)
              }
            },
            sourceIndex: _this.currToken[6] + indices[i]
          });

          if (node.constructor.name === 'Word') {
            node.isHex = /^#(.+)/.test(value);
            node.isColor = /^#([0-9a-f]{3}|[0-9a-f]{4}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(value);
          } else {
            _this.cache.push(_this.current);
          }
        }

        _this.newNode(node);
      });
      this.position++;
    }
  }, {
    key: "string",
    value: function string() {
      var token = this.currToken,
          value = this.currToken[1],
          rQuote = /^(\"|\')/,
          quoted = rQuote.test(value),
          quote = '',
          node;

      if (quoted) {
        quote = value.match(rQuote)[0]; // set value to the string within the quotes
        // quotes are stored in raws

        value = value.slice(1, value.length - 1);
      }

      node = new Str({
        value: value,
        source: {
          start: {
            line: token[2],
            column: token[3]
          },
          end: {
            line: token[4],
            column: token[5]
          }
        },
        sourceIndex: token[6],
        quoted: quoted
      });
      node.raws.quote = quote;
      this.newNode(node);
      this.position++;
    }
  }, {
    key: "word",
    value: function word() {
      return this.splitWord();
    }
  }, {
    key: "newNode",
    value: function newNode(node) {
      if (this.spaces) {
        node.raws.before += this.spaces;
        this.spaces = '';
      }

      return this.current.append(node);
    }
  }, {
    key: "currToken",
    get: function get() {
      return this.tokens[this.position];
    }
  }, {
    key: "nextToken",
    get: function get() {
      return this.tokens[this.position + 1];
    }
  }, {
    key: "prevToken",
    get: function get() {
      return this.tokens[this.position - 1];
    }
  }]);

  return Parser;
}();

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Container = __webpack_require__(1);

module.exports =
/*#__PURE__*/
function (_Container) {
  _inherits(Root, _Container);

  function Root(opts) {
    var _this;

    _classCallCheck(this, Root);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Root).call(this, opts));
    _this.type = 'root';
    return _this;
  }

  return Root;
}(Container);

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var openBracket = '{'.charCodeAt(0);
var closeBracket = '}'.charCodeAt(0);
var openParen = '('.charCodeAt(0);
var closeParen = ')'.charCodeAt(0);
var singleQuote = '\''.charCodeAt(0);
var doubleQuote = '"'.charCodeAt(0);
var backslash = '\\'.charCodeAt(0);
var slash = '/'.charCodeAt(0);
var period = '.'.charCodeAt(0);
var comma = ','.charCodeAt(0);
var colon = ':'.charCodeAt(0);
var asterisk = '*'.charCodeAt(0);
var minus = '-'.charCodeAt(0);
var plus = '+'.charCodeAt(0);
var pound = '#'.charCodeAt(0);
var newline = '\n'.charCodeAt(0);
var space = ' '.charCodeAt(0);
var feed = '\f'.charCodeAt(0);
var tab = '\t'.charCodeAt(0);
var cr = '\r'.charCodeAt(0);
var at = '@'.charCodeAt(0);
var lowerE = 'e'.charCodeAt(0);
var upperE = 'E'.charCodeAt(0);
var digit0 = '0'.charCodeAt(0);
var digit9 = '9'.charCodeAt(0);
var lowerU = 'u'.charCodeAt(0);
var upperU = 'U'.charCodeAt(0);
var atEnd = /[ \n\t\r\{\(\)'"\\;,/]/g;
var wordEnd = /[ \n\t\r\(\)\{\}\*:;@!&'"\+\|~>,\[\]\\]|\/(?=\*)/g;
var wordEndNum = /[ \n\t\r\(\)\{\}\*:;@!&'"\-\+\|~>,\[\]\\]|\//g;
var alphaNum = /^[a-z0-9]/i;
var unicodeRange = /^[a-f0-9?\-]/i;

var util = __webpack_require__(101);

var TokenizeError = __webpack_require__(104);

module.exports = function tokenize(input, options) {
  options = options || {};
  var tokens = [],
      css = input.valueOf(),
      length = css.length,
      offset = -1,
      line = 1,
      pos = 0,
      parentCount = 0,
      isURLArg = null,
      code,
      next,
      quote,
      lines,
      last,
      content,
      escape,
      nextLine,
      nextOffset,
      escaped,
      escapePos,
      nextChar;

  function unclosed(what) {
    var message = util.format('Unclosed %s at line: %d, column: %d, token: %d', what, line, pos - offset, pos);
    throw new TokenizeError(message);
  }

  function tokenizeError() {
    var message = util.format('Syntax error at line: %d, column: %d, token: %d', line, pos - offset, pos);
    throw new TokenizeError(message);
  }

  while (pos < length) {
    code = css.charCodeAt(pos);

    if (code === newline) {
      offset = pos;
      line += 1;
    }

    switch (code) {
      case newline:
      case space:
      case tab:
      case cr:
      case feed:
        next = pos;

        do {
          next += 1;
          code = css.charCodeAt(next);

          if (code === newline) {
            offset = next;
            line += 1;
          }
        } while (code === space || code === newline || code === tab || code === cr || code === feed);

        tokens.push(['space', css.slice(pos, next), line, pos - offset, line, next - offset, pos]);
        pos = next - 1;
        break;

      case colon:
        next = pos + 1;
        tokens.push(['colon', css.slice(pos, next), line, pos - offset, line, next - offset, pos]);
        pos = next - 1;
        break;

      case comma:
        next = pos + 1;
        tokens.push(['comma', css.slice(pos, next), line, pos - offset, line, next - offset, pos]);
        pos = next - 1;
        break;

      case openBracket:
        tokens.push(['{', '{', line, pos - offset, line, next - offset, pos]);
        break;

      case closeBracket:
        tokens.push(['}', '}', line, pos - offset, line, next - offset, pos]);
        break;

      case openParen:
        parentCount++;
        isURLArg = !isURLArg && parentCount === 1 && tokens.length > 0 && tokens[tokens.length - 1][0] === "word" && tokens[tokens.length - 1][1] === "url";
        tokens.push(['(', '(', line, pos - offset, line, next - offset, pos]);
        break;

      case closeParen:
        parentCount--;
        isURLArg = !isURLArg && parentCount === 1;
        tokens.push([')', ')', line, pos - offset, line, next - offset, pos]);
        break;

      case singleQuote:
      case doubleQuote:
        quote = code === singleQuote ? '\'' : '"';
        next = pos;

        do {
          escaped = false;
          next = css.indexOf(quote, next + 1);

          if (next === -1) {
            unclosed('quote', quote);
          }

          escapePos = next;

          while (css.charCodeAt(escapePos - 1) === backslash) {
            escapePos -= 1;
            escaped = !escaped;
          }
        } while (escaped);

        tokens.push(['string', css.slice(pos, next + 1), line, pos - offset, line, next - offset, pos]);
        pos = next;
        break;

      case at:
        atEnd.lastIndex = pos + 1;
        atEnd.test(css);

        if (atEnd.lastIndex === 0) {
          next = css.length - 1;
        } else {
          next = atEnd.lastIndex - 2;
        }

        tokens.push(['atword', css.slice(pos, next + 1), line, pos - offset, line, next - offset, pos]);
        pos = next;
        break;

      case backslash:
        next = pos;
        code = css.charCodeAt(next + 1);

        if (escape && code !== slash && code !== space && code !== newline && code !== tab && code !== cr && code !== feed) {
          next += 1;
        }

        tokens.push(['word', css.slice(pos, next + 1), line, pos - offset, line, next - offset, pos]);
        pos = next;
        break;

      case plus:
      case minus:
      case asterisk:
        next = pos + 1;
        nextChar = css.slice(pos + 1, next + 1);
        var prevChar = css.slice(pos - 1, pos); // if the operator is immediately followed by a word character, then we
        // have a prefix of some kind, and should fall-through. eg. -webkit
        // look for --* for custom variables

        if (code === minus && nextChar.charCodeAt(0) === minus) {
          next++;
          tokens.push(['word', css.slice(pos, next), line, pos - offset, line, next - offset, pos]);
          pos = next - 1;
          break;
        }

        tokens.push(['operator', css.slice(pos, next), line, pos - offset, line, next - offset, pos]);
        pos = next - 1;
        break;

      default:
        if (code === slash && (css.charCodeAt(pos + 1) === asterisk || options.loose && !isURLArg && css.charCodeAt(pos + 1) === slash)) {
          var isStandardComment = css.charCodeAt(pos + 1) === asterisk;

          if (isStandardComment) {
            next = css.indexOf('*/', pos + 2) + 1;

            if (next === 0) {
              unclosed('comment', '*/');
            }
          } else {
            var newlinePos = css.indexOf('\n', pos + 2);
            next = newlinePos !== -1 ? newlinePos - 1 : length;
          }

          content = css.slice(pos, next + 1);
          lines = content.split('\n');
          last = lines.length - 1;

          if (last > 0) {
            nextLine = line + last;
            nextOffset = next - lines[last].length;
          } else {
            nextLine = line;
            nextOffset = offset;
          }

          tokens.push(['comment', content, line, pos - offset, nextLine, next - nextOffset, pos]);
          offset = nextOffset;
          line = nextLine;
          pos = next;
        } else if (code === pound && !alphaNum.test(css.slice(pos + 1, pos + 2))) {
          next = pos + 1;
          tokens.push(['#', css.slice(pos, next), line, pos - offset, line, next - offset, pos]);
          pos = next - 1;
        } else if ((code === lowerU || code === upperU) && css.charCodeAt(pos + 1) === plus) {
          next = pos + 2;

          do {
            next += 1;
            code = css.charCodeAt(next);
          } while (next < length && unicodeRange.test(css.slice(next, next + 1)));

          tokens.push(['unicoderange', css.slice(pos, next), line, pos - offset, line, next - offset, pos]);
          pos = next - 1;
        } // catch a regular slash, that isn't a comment
        else if (code === slash) {
            next = pos + 1;
            tokens.push(['operator', css.slice(pos, next), line, pos - offset, line, next - offset, pos]);
            pos = next - 1;
          } else {
            var regex = wordEnd; // we're dealing with a word that starts with a number
            // those get treated differently

            if (code >= digit0 && code <= digit9) {
              regex = wordEndNum;
            }

            regex.lastIndex = pos + 1;
            regex.test(css);

            if (regex.lastIndex === 0) {
              next = css.length - 1;
            } else {
              next = regex.lastIndex - 2;
            } // Exponential number notation with minus or plus: 1e-10, 1e+10


            if (regex === wordEndNum || code === period) {
              var ncode = css.charCodeAt(next),
                  ncode1 = css.charCodeAt(next + 1),
                  ncode2 = css.charCodeAt(next + 2);

              if ((ncode === lowerE || ncode === upperE) && (ncode1 === minus || ncode1 === plus) && ncode2 >= digit0 && ncode2 <= digit9) {
                wordEndNum.lastIndex = next + 2;
                wordEndNum.test(css);

                if (wordEndNum.lastIndex === 0) {
                  next = css.length - 1;
                } else {
                  next = wordEndNum.lastIndex - 2;
                }
              }
            }

            tokens.push(['word', css.slice(pos, next + 1), line, pos - offset, line, next - offset, pos]);
            pos = next;
          }

        break;
    }

    pos++;
  }

  return tokens;
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var formatRegExp = /%[sdj%]/g;

exports.format = function (f) {
  if (!isString(f)) {
    var objects = [];

    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }

    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function (x) {
    if (x === '%%') return '%';
    if (i >= len) return x;

    switch (x) {
      case '%s':
        return String(args[i++]);

      case '%d':
        return Number(args[i++]);

      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }

      default:
        return x;
    }
  });

  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }

  return str;
}; // Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.


exports.deprecate = function (fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function () {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;

  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }

      warned = true;
    }

    return fn.apply(this, arguments);
  }

  return deprecated;
};

var debugs = {};
var debugEnviron;

exports.debuglog = function (set) {
  if (isUndefined(debugEnviron)) debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();

  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;

      debugs[set] = function () {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function () {};
    }
  }

  return debugs[set];
};
/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */

/* legacy: obj, showHidden, depth, colors*/


function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  }; // legacy...

  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];

  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  } // set default options


  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}

exports.inspect = inspect; // http://en.wikipedia.org/wiki/ANSI_escape_code#graphics

inspect.colors = {
  'bold': [1, 22],
  'italic': [3, 23],
  'underline': [4, 24],
  'inverse': [7, 27],
  'white': [37, 39],
  'grey': [90, 39],
  'black': [30, 39],
  'blue': [34, 39],
  'cyan': [36, 39],
  'green': [32, 39],
  'magenta': [35, 39],
  'red': [31, 39],
  'yellow': [33, 39]
}; // Don't use 'blue' not visible on cmd.exe

inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};

function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return "\x1B[" + inspect.colors[style][0] + 'm' + str + "\x1B[" + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}

function stylizeNoColor(str, styleType) {
  return str;
}

function arrayToHash(array) {
  var hash = {};
  array.forEach(function (val, idx) {
    hash[val] = true;
  });
  return hash;
}

function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect && value && isFunction(value.inspect) && // Filter out the util module, it's inspect function is special
  value.inspect !== exports.inspect && // Also filter out any prototype objects using the circular check.
  !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);

    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }

    return ret;
  } // Primitive types cannot have properties


  var primitive = formatPrimitive(ctx, value);

  if (primitive) {
    return primitive;
  } // Look up the keys of the object.


  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  } // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx


  if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  } // Some type of object without properties can be shortcutted.


  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }

    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }

    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }

    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '',
      array = false,
      braces = ['{', '}']; // Make Array say that they are Array

  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  } // Make functions say that they are functions


  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  } // Make RegExps say that they are RegExps


  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  } // Make dates with properties first say the date


  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  } // Make error with message first say the error


  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);
  var output;

  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function (key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();
  return reduceToSingleString(output, base, braces);
}

function formatPrimitive(ctx, value) {
  if (isUndefined(value)) return ctx.stylize('undefined', 'undefined');

  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }

  if (isNumber(value)) return ctx.stylize('' + value, 'number');
  if (isBoolean(value)) return ctx.stylize('' + value, 'boolean'); // For some reason typeof null is "object", so special case here.

  if (isNull(value)) return ctx.stylize('null', 'null');
}

function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}

function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];

  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
    } else {
      output.push('');
    }
  }

  keys.forEach(function (key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
    }
  });
  return output;
}

function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || {
    value: value[key]
  };

  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }

  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }

  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }

      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function (line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function (line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }

  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }

    name = JSON.stringify('' + key);

    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}

function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function (prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
} // NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.


function isArray(ar) {
  return Array.isArray(ar);
}

exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}

exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}

exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}

exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}

exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}

exports.isString = isString;

function isSymbol(arg) {
  return _typeof(arg) === 'symbol';
}

exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}

exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}

exports.isRegExp = isRegExp;

function isObject(arg) {
  return _typeof(arg) === 'object' && arg !== null;
}

exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}

exports.isDate = isDate;

function isError(e) {
  return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
}

exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}

exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || _typeof(arg) === 'symbol' || // ES6 symbol
  typeof arg === 'undefined';
}

exports.isPrimitive = isPrimitive;
exports.isBuffer = __webpack_require__(102);

function objectToString(o) {
  return Object.prototype.toString.call(o);
}

function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']; // 26 Feb 16:19:34

function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
} // log is just a thin wrapper to console.log that prepends a timestamp


exports.log = function () {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};
/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */


exports.inherits = __webpack_require__(103);

exports._extend = function (origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;
  var keys = Object.keys(add);
  var i = keys.length;

  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }

  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15), __webpack_require__(12)))

/***/ }),
/* 102 */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function isBuffer(arg) {
  return arg && _typeof(arg) === 'object' && typeof arg.copy === 'function' && typeof arg.fill === 'function' && typeof arg.readUInt8 === 'function';
};

/***/ }),
/* 103 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;

    var TempCtor = function TempCtor() {};

    TempCtor.prototype = superCtor.prototype;
    ctor.prototype = new TempCtor();
    ctor.prototype.constructor = ctor;
  };
}

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var TokenizeError =
/*#__PURE__*/
function (_Error) {
  _inherits(TokenizeError, _Error);

  function TokenizeError(message) {
    var _this;

    _classCallCheck(this, TokenizeError);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TokenizeError).call(this, message));
    _this.name = _this.constructor.name;
    _this.message = message || 'An error ocurred while tokzenizing.';

    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(_assertThisInitialized(_assertThisInitialized(_this)), _this.constructor);
    } else {
      _this.stack = new Error(message).stack;
    }

    return _this;
  }

  return TokenizeError;
}(_wrapNativeSuper(Error));

module.exports = TokenizeError;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ParserError =
/*#__PURE__*/
function (_Error) {
  _inherits(ParserError, _Error);

  function ParserError(message) {
    var _this;

    _classCallCheck(this, ParserError);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ParserError).call(this, message));
    _this.name = _this.constructor.name;
    _this.message = message || 'An error ocurred while parsing.';

    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(_assertThisInitialized(_assertThisInitialized(_this)), _this.constructor);
    } else {
      _this.stack = new Error(message).stack;
    }

    return _this;
  }

  return ParserError;
}(_wrapNativeSuper(Error));

module.exports = ParserError;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _processor = __webpack_require__(107);

var _processor2 = _interopRequireDefault(_processor);

var _attribute = __webpack_require__(53);

var _attribute2 = _interopRequireDefault(_attribute);

var _className = __webpack_require__(47);

var _className2 = _interopRequireDefault(_className);

var _combinator = __webpack_require__(55);

var _combinator2 = _interopRequireDefault(_combinator);

var _comment = __webpack_require__(48);

var _comment2 = _interopRequireDefault(_comment);

var _id = __webpack_require__(49);

var _id2 = _interopRequireDefault(_id);

var _nesting = __webpack_require__(56);

var _nesting2 = _interopRequireDefault(_nesting);

var _pseudo = __webpack_require__(52);

var _pseudo2 = _interopRequireDefault(_pseudo);

var _root = __webpack_require__(45);

var _root2 = _interopRequireDefault(_root);

var _selector = __webpack_require__(46);

var _selector2 = _interopRequireDefault(_selector);

var _string = __webpack_require__(51);

var _string2 = _interopRequireDefault(_string);

var _tag = __webpack_require__(50);

var _tag2 = _interopRequireDefault(_tag);

var _universal = __webpack_require__(54);

var _universal2 = _interopRequireDefault(_universal);

var _types = __webpack_require__(0);

var types = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var parser = function parser(processor) {
  return new _processor2.default(processor);
};

parser.attribute = function (opts) {
  return new _attribute2.default(opts);
};

parser.className = function (opts) {
  return new _className2.default(opts);
};

parser.combinator = function (opts) {
  return new _combinator2.default(opts);
};

parser.comment = function (opts) {
  return new _comment2.default(opts);
};

parser.id = function (opts) {
  return new _id2.default(opts);
};

parser.nesting = function (opts) {
  return new _nesting2.default(opts);
};

parser.pseudo = function (opts) {
  return new _pseudo2.default(opts);
};

parser.root = function (opts) {
  return new _root2.default(opts);
};

parser.selector = function (opts) {
  return new _selector2.default(opts);
};

parser.string = function (opts) {
  return new _string2.default(opts);
};

parser.tag = function (opts) {
  return new _tag2.default(opts);
};

parser.universal = function (opts) {
  return new _universal2.default(opts);
};

Object.keys(types).forEach(function (type) {
  if (type === '__esModule') {
    return;
  }

  parser[type] = types[type]; // eslint-disable-line
});
exports.default = parser;
module.exports = exports['default'];

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _parser = __webpack_require__(108);

var _parser2 = _interopRequireDefault(_parser);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Processor = function () {
  function Processor(func) {
    _classCallCheck(this, Processor);

    this.func = func || function noop() {};

    return this;
  }

  Processor.prototype.process = function process(selectors) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var input = new _parser2.default({
      css: selectors,
      error: function error(e) {
        throw new Error(e);
      },
      options: options
    });
    this.res = input;
    this.func(input);
    return this;
  };

  _createClass(Processor, [{
    key: 'result',
    get: function get() {
      return String(this.res);
    }
  }]);

  return Processor;
}();

exports.default = Processor;
module.exports = exports['default'];

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _flatten = __webpack_require__(42);

var _flatten2 = _interopRequireDefault(_flatten);

var _indexesOf = __webpack_require__(43);

var _indexesOf2 = _interopRequireDefault(_indexesOf);

var _uniq = __webpack_require__(44);

var _uniq2 = _interopRequireDefault(_uniq);

var _root = __webpack_require__(45);

var _root2 = _interopRequireDefault(_root);

var _selector = __webpack_require__(46);

var _selector2 = _interopRequireDefault(_selector);

var _className = __webpack_require__(47);

var _className2 = _interopRequireDefault(_className);

var _comment = __webpack_require__(48);

var _comment2 = _interopRequireDefault(_comment);

var _id = __webpack_require__(49);

var _id2 = _interopRequireDefault(_id);

var _tag = __webpack_require__(50);

var _tag2 = _interopRequireDefault(_tag);

var _string = __webpack_require__(51);

var _string2 = _interopRequireDefault(_string);

var _pseudo = __webpack_require__(52);

var _pseudo2 = _interopRequireDefault(_pseudo);

var _attribute = __webpack_require__(53);

var _attribute2 = _interopRequireDefault(_attribute);

var _universal = __webpack_require__(54);

var _universal2 = _interopRequireDefault(_universal);

var _combinator = __webpack_require__(55);

var _combinator2 = _interopRequireDefault(_combinator);

var _nesting = __webpack_require__(56);

var _nesting2 = _interopRequireDefault(_nesting);

var _sortAscending = __webpack_require__(109);

var _sortAscending2 = _interopRequireDefault(_sortAscending);

var _tokenize = __webpack_require__(110);

var _tokenize2 = _interopRequireDefault(_tokenize);

var _types = __webpack_require__(0);

var types = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Parser = function () {
  function Parser(input) {
    _classCallCheck(this, Parser);

    this.input = input;
    this.lossy = input.options.lossless === false;
    this.position = 0;
    this.root = new _root2.default();
    var selectors = new _selector2.default();
    this.root.append(selectors);
    this.current = selectors;

    if (this.lossy) {
      this.tokens = (0, _tokenize2.default)({
        safe: input.safe,
        css: input.css.trim()
      });
    } else {
      this.tokens = (0, _tokenize2.default)(input);
    }

    return this.loop();
  }

  Parser.prototype.attribute = function attribute() {
    var str = '';
    var attr = void 0;
    var startingToken = this.currToken;
    this.position++;

    while (this.position < this.tokens.length && this.currToken[0] !== ']') {
      str += this.tokens[this.position][1];
      this.position++;
    }

    if (this.position === this.tokens.length && !~str.indexOf(']')) {
      this.error('Expected a closing square bracket.');
    }

    var parts = str.split(/((?:[*~^$|]?=))([^]*)/);
    var namespace = parts[0].split(/(\|)/g);
    var attributeProps = {
      operator: parts[1],
      value: parts[2],
      source: {
        start: {
          line: startingToken[2],
          column: startingToken[3]
        },
        end: {
          line: this.currToken[2],
          column: this.currToken[3]
        }
      },
      sourceIndex: startingToken[4]
    };

    if (namespace.length > 1) {
      if (namespace[0] === '') {
        namespace[0] = true;
      }

      attributeProps.attribute = this.parseValue(namespace[2]);
      attributeProps.namespace = this.parseNamespace(namespace[0]);
    } else {
      attributeProps.attribute = this.parseValue(parts[0]);
    }

    attr = new _attribute2.default(attributeProps);

    if (parts[2]) {
      var insensitive = parts[2].split(/(\s+i\s*?)$/);
      var trimmedValue = insensitive[0].trim();
      attr.value = this.lossy ? trimmedValue : insensitive[0];

      if (insensitive[1]) {
        attr.insensitive = true;

        if (!this.lossy) {
          attr.raws.insensitive = insensitive[1];
        }
      }

      attr.quoted = trimmedValue[0] === '\'' || trimmedValue[0] === '"';
      attr.raws.unquoted = attr.quoted ? trimmedValue.slice(1, -1) : trimmedValue;
    }

    this.newNode(attr);
    this.position++;
  };

  Parser.prototype.combinator = function combinator() {
    if (this.currToken[1] === '|') {
      return this.namespace();
    }

    var node = new _combinator2.default({
      value: '',
      source: {
        start: {
          line: this.currToken[2],
          column: this.currToken[3]
        },
        end: {
          line: this.currToken[2],
          column: this.currToken[3]
        }
      },
      sourceIndex: this.currToken[4]
    });

    while (this.position < this.tokens.length && this.currToken && (this.currToken[0] === 'space' || this.currToken[0] === 'combinator')) {
      if (this.nextToken && this.nextToken[0] === 'combinator') {
        node.spaces.before = this.parseSpace(this.currToken[1]);
        node.source.start.line = this.nextToken[2];
        node.source.start.column = this.nextToken[3];
        node.source.end.column = this.nextToken[3];
        node.source.end.line = this.nextToken[2];
        node.sourceIndex = this.nextToken[4];
      } else if (this.prevToken && this.prevToken[0] === 'combinator') {
        node.spaces.after = this.parseSpace(this.currToken[1]);
      } else if (this.currToken[0] === 'combinator') {
        node.value = this.currToken[1];
      } else if (this.currToken[0] === 'space') {
        node.value = this.parseSpace(this.currToken[1], ' ');
      }

      this.position++;
    }

    return this.newNode(node);
  };

  Parser.prototype.comma = function comma() {
    if (this.position === this.tokens.length - 1) {
      this.root.trailingComma = true;
      this.position++;
      return;
    }

    var selectors = new _selector2.default();
    this.current.parent.append(selectors);
    this.current = selectors;
    this.position++;
  };

  Parser.prototype.comment = function comment() {
    var node = new _comment2.default({
      value: this.currToken[1],
      source: {
        start: {
          line: this.currToken[2],
          column: this.currToken[3]
        },
        end: {
          line: this.currToken[4],
          column: this.currToken[5]
        }
      },
      sourceIndex: this.currToken[6]
    });
    this.newNode(node);
    this.position++;
  };

  Parser.prototype.error = function error(message) {
    throw new this.input.error(message); // eslint-disable-line new-cap
  };

  Parser.prototype.missingBackslash = function missingBackslash() {
    return this.error('Expected a backslash preceding the semicolon.');
  };

  Parser.prototype.missingParenthesis = function missingParenthesis() {
    return this.error('Expected opening parenthesis.');
  };

  Parser.prototype.missingSquareBracket = function missingSquareBracket() {
    return this.error('Expected opening square bracket.');
  };

  Parser.prototype.namespace = function namespace() {
    var before = this.prevToken && this.prevToken[1] || true;

    if (this.nextToken[0] === 'word') {
      this.position++;
      return this.word(before);
    } else if (this.nextToken[0] === '*') {
      this.position++;
      return this.universal(before);
    }
  };

  Parser.prototype.nesting = function nesting() {
    this.newNode(new _nesting2.default({
      value: this.currToken[1],
      source: {
        start: {
          line: this.currToken[2],
          column: this.currToken[3]
        },
        end: {
          line: this.currToken[2],
          column: this.currToken[3]
        }
      },
      sourceIndex: this.currToken[4]
    }));
    this.position++;
  };

  Parser.prototype.parentheses = function parentheses() {
    var last = this.current.last;

    if (last && last.type === types.PSEUDO) {
      var selector = new _selector2.default();
      var cache = this.current;
      last.append(selector);
      this.current = selector;
      var balanced = 1;
      this.position++;

      while (this.position < this.tokens.length && balanced) {
        if (this.currToken[0] === '(') {
          balanced++;
        }

        if (this.currToken[0] === ')') {
          balanced--;
        }

        if (balanced) {
          this.parse();
        } else {
          selector.parent.source.end.line = this.currToken[2];
          selector.parent.source.end.column = this.currToken[3];
          this.position++;
        }
      }

      if (balanced) {
        this.error('Expected closing parenthesis.');
      }

      this.current = cache;
    } else {
      var _balanced = 1;
      this.position++;
      last.value += '(';

      while (this.position < this.tokens.length && _balanced) {
        if (this.currToken[0] === '(') {
          _balanced++;
        }

        if (this.currToken[0] === ')') {
          _balanced--;
        }

        last.value += this.parseParenthesisToken(this.currToken);
        this.position++;
      }

      if (_balanced) {
        this.error('Expected closing parenthesis.');
      }
    }
  };

  Parser.prototype.pseudo = function pseudo() {
    var _this = this;

    var pseudoStr = '';
    var startingToken = this.currToken;

    while (this.currToken && this.currToken[0] === ':') {
      pseudoStr += this.currToken[1];
      this.position++;
    }

    if (!this.currToken) {
      return this.error('Expected pseudo-class or pseudo-element');
    }

    if (this.currToken[0] === 'word') {
      var pseudo = void 0;
      this.splitWord(false, function (first, length) {
        pseudoStr += first;
        pseudo = new _pseudo2.default({
          value: pseudoStr,
          source: {
            start: {
              line: startingToken[2],
              column: startingToken[3]
            },
            end: {
              line: _this.currToken[4],
              column: _this.currToken[5]
            }
          },
          sourceIndex: startingToken[4]
        });

        _this.newNode(pseudo);

        if (length > 1 && _this.nextToken && _this.nextToken[0] === '(') {
          _this.error('Misplaced parenthesis.');
        }
      });
    } else {
      this.error('Unexpected "' + this.currToken[0] + '" found.');
    }
  };

  Parser.prototype.space = function space() {
    var token = this.currToken; // Handle space before and after the selector

    if (this.position === 0 || this.prevToken[0] === ',' || this.prevToken[0] === '(') {
      this.spaces = this.parseSpace(token[1]);
      this.position++;
    } else if (this.position === this.tokens.length - 1 || this.nextToken[0] === ',' || this.nextToken[0] === ')') {
      this.current.last.spaces.after = this.parseSpace(token[1]);
      this.position++;
    } else {
      this.combinator();
    }
  };

  Parser.prototype.string = function string() {
    var token = this.currToken;
    this.newNode(new _string2.default({
      value: this.currToken[1],
      source: {
        start: {
          line: token[2],
          column: token[3]
        },
        end: {
          line: token[4],
          column: token[5]
        }
      },
      sourceIndex: token[6]
    }));
    this.position++;
  };

  Parser.prototype.universal = function universal(namespace) {
    var nextToken = this.nextToken;

    if (nextToken && nextToken[1] === '|') {
      this.position++;
      return this.namespace();
    }

    this.newNode(new _universal2.default({
      value: this.currToken[1],
      source: {
        start: {
          line: this.currToken[2],
          column: this.currToken[3]
        },
        end: {
          line: this.currToken[2],
          column: this.currToken[3]
        }
      },
      sourceIndex: this.currToken[4]
    }), namespace);
    this.position++;
  };

  Parser.prototype.splitWord = function splitWord(namespace, firstCallback) {
    var _this2 = this;

    var nextToken = this.nextToken;
    var word = this.currToken[1];

    while (nextToken && nextToken[0] === 'word') {
      this.position++;
      var current = this.currToken[1];
      word += current;

      if (current.lastIndexOf('\\') === current.length - 1) {
        var next = this.nextToken;

        if (next && next[0] === 'space') {
          word += this.parseSpace(next[1], ' ');
          this.position++;
        }
      }

      nextToken = this.nextToken;
    }

    var hasClass = (0, _indexesOf2.default)(word, '.');
    var hasId = (0, _indexesOf2.default)(word, '#'); // Eliminate Sass interpolations from the list of id indexes

    var interpolations = (0, _indexesOf2.default)(word, '#{');

    if (interpolations.length) {
      hasId = hasId.filter(function (hashIndex) {
        return !~interpolations.indexOf(hashIndex);
      });
    }

    var indices = (0, _sortAscending2.default)((0, _uniq2.default)((0, _flatten2.default)([[0], hasClass, hasId])));
    indices.forEach(function (ind, i) {
      var index = indices[i + 1] || word.length;
      var value = word.slice(ind, index);

      if (i === 0 && firstCallback) {
        return firstCallback.call(_this2, value, indices.length);
      }

      var node = void 0;

      if (~hasClass.indexOf(ind)) {
        node = new _className2.default({
          value: value.slice(1),
          source: {
            start: {
              line: _this2.currToken[2],
              column: _this2.currToken[3] + ind
            },
            end: {
              line: _this2.currToken[4],
              column: _this2.currToken[3] + (index - 1)
            }
          },
          sourceIndex: _this2.currToken[6] + indices[i]
        });
      } else if (~hasId.indexOf(ind)) {
        node = new _id2.default({
          value: value.slice(1),
          source: {
            start: {
              line: _this2.currToken[2],
              column: _this2.currToken[3] + ind
            },
            end: {
              line: _this2.currToken[4],
              column: _this2.currToken[3] + (index - 1)
            }
          },
          sourceIndex: _this2.currToken[6] + indices[i]
        });
      } else {
        node = new _tag2.default({
          value: value,
          source: {
            start: {
              line: _this2.currToken[2],
              column: _this2.currToken[3] + ind
            },
            end: {
              line: _this2.currToken[4],
              column: _this2.currToken[3] + (index - 1)
            }
          },
          sourceIndex: _this2.currToken[6] + indices[i]
        });
      }

      _this2.newNode(node, namespace);
    });
    this.position++;
  };

  Parser.prototype.word = function word(namespace) {
    var nextToken = this.nextToken;

    if (nextToken && nextToken[1] === '|') {
      this.position++;
      return this.namespace();
    }

    return this.splitWord(namespace);
  };

  Parser.prototype.loop = function loop() {
    while (this.position < this.tokens.length) {
      this.parse(true);
    }

    return this.root;
  };

  Parser.prototype.parse = function parse(throwOnParenthesis) {
    switch (this.currToken[0]) {
      case 'space':
        this.space();
        break;

      case 'comment':
        this.comment();
        break;

      case '(':
        this.parentheses();
        break;

      case ')':
        if (throwOnParenthesis) {
          this.missingParenthesis();
        }

        break;

      case '[':
        this.attribute();
        break;

      case ']':
        this.missingSquareBracket();
        break;

      case 'at-word':
      case 'word':
        this.word();
        break;

      case ':':
        this.pseudo();
        break;

      case ';':
        this.missingBackslash();
        break;

      case ',':
        this.comma();
        break;

      case '*':
        this.universal();
        break;

      case '&':
        this.nesting();
        break;

      case 'combinator':
        this.combinator();
        break;

      case 'string':
        this.string();
        break;
    }
  };
  /**
   * Helpers
   */


  Parser.prototype.parseNamespace = function parseNamespace(namespace) {
    if (this.lossy && typeof namespace === 'string') {
      var trimmed = namespace.trim();

      if (!trimmed.length) {
        return true;
      }

      return trimmed;
    }

    return namespace;
  };

  Parser.prototype.parseSpace = function parseSpace(space, replacement) {
    return this.lossy ? replacement || '' : space;
  };

  Parser.prototype.parseValue = function parseValue(value) {
    return this.lossy && value && typeof value === 'string' ? value.trim() : value;
  };

  Parser.prototype.parseParenthesisToken = function parseParenthesisToken(token) {
    if (!this.lossy) {
      return token[1];
    }

    if (token[0] === 'space') {
      return this.parseSpace(token[1], ' ');
    }

    return this.parseValue(token[1]);
  };

  Parser.prototype.newNode = function newNode(node, namespace) {
    if (namespace) {
      node.namespace = this.parseNamespace(namespace);
    }

    if (this.spaces) {
      node.spaces.before = this.spaces;
      this.spaces = '';
    }

    return this.current.append(node);
  };

  _createClass(Parser, [{
    key: 'currToken',
    get: function get() {
      return this.tokens[this.position];
    }
  }, {
    key: 'nextToken',
    get: function get() {
      return this.tokens[this.position + 1];
    }
  }, {
    key: 'prevToken',
    get: function get() {
      return this.tokens[this.position - 1];
    }
  }]);

  return Parser;
}();

exports.default = Parser;
module.exports = exports['default'];

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = sortAscending;

function sortAscending(list) {
  return list.sort(function (a, b) {
    return a - b;
  });
}

;
module.exports = exports["default"];

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = tokenize;
var singleQuote = 39,
    doubleQuote = 34,
    backslash = 92,
    slash = 47,
    newline = 10,
    space = 32,
    feed = 12,
    tab = 9,
    cr = 13,
    plus = 43,
    gt = 62,
    tilde = 126,
    pipe = 124,
    comma = 44,
    openBracket = 40,
    closeBracket = 41,
    openSq = 91,
    closeSq = 93,
    semicolon = 59,
    asterisk = 42,
    colon = 58,
    ampersand = 38,
    at = 64,
    atEnd = /[ \n\t\r\{\(\)'"\\;/]/g,
    wordEnd = /[ \n\t\r\(\)\*:;@!&'"\+\|~>,\[\]\\]|\/(?=\*)/g;

function tokenize(input) {
  var tokens = [];
  var css = input.css.valueOf();
  var code = void 0,
      next = void 0,
      quote = void 0,
      lines = void 0,
      last = void 0,
      content = void 0,
      escape = void 0,
      nextLine = void 0,
      nextOffset = void 0,
      escaped = void 0,
      escapePos = void 0;
  var length = css.length;
  var offset = -1;
  var line = 1;
  var pos = 0;

  var unclosed = function unclosed(what, end) {
    if (input.safe) {
      css += end;
      next = css.length - 1;
    } else {
      throw input.error('Unclosed ' + what, line, pos - offset, pos);
    }
  };

  while (pos < length) {
    code = css.charCodeAt(pos);

    if (code === newline) {
      offset = pos;
      line += 1;
    }

    switch (code) {
      case newline:
      case space:
      case tab:
      case cr:
      case feed:
        next = pos;

        do {
          next += 1;
          code = css.charCodeAt(next);

          if (code === newline) {
            offset = next;
            line += 1;
          }
        } while (code === space || code === newline || code === tab || code === cr || code === feed);

        tokens.push(['space', css.slice(pos, next), line, pos - offset, pos]);
        pos = next - 1;
        break;

      case plus:
      case gt:
      case tilde:
      case pipe:
        next = pos;

        do {
          next += 1;
          code = css.charCodeAt(next);
        } while (code === plus || code === gt || code === tilde || code === pipe);

        tokens.push(['combinator', css.slice(pos, next), line, pos - offset, pos]);
        pos = next - 1;
        break;

      case asterisk:
        tokens.push(['*', '*', line, pos - offset, pos]);
        break;

      case ampersand:
        tokens.push(['&', '&', line, pos - offset, pos]);
        break;

      case comma:
        tokens.push([',', ',', line, pos - offset, pos]);
        break;

      case openSq:
        tokens.push(['[', '[', line, pos - offset, pos]);
        break;

      case closeSq:
        tokens.push([']', ']', line, pos - offset, pos]);
        break;

      case colon:
        tokens.push([':', ':', line, pos - offset, pos]);
        break;

      case semicolon:
        tokens.push([';', ';', line, pos - offset, pos]);
        break;

      case openBracket:
        tokens.push(['(', '(', line, pos - offset, pos]);
        break;

      case closeBracket:
        tokens.push([')', ')', line, pos - offset, pos]);
        break;

      case singleQuote:
      case doubleQuote:
        quote = code === singleQuote ? "'" : '"';
        next = pos;

        do {
          escaped = false;
          next = css.indexOf(quote, next + 1);

          if (next === -1) {
            unclosed('quote', quote);
          }

          escapePos = next;

          while (css.charCodeAt(escapePos - 1) === backslash) {
            escapePos -= 1;
            escaped = !escaped;
          }
        } while (escaped);

        tokens.push(['string', css.slice(pos, next + 1), line, pos - offset, line, next - offset, pos]);
        pos = next;
        break;

      case at:
        atEnd.lastIndex = pos + 1;
        atEnd.test(css);

        if (atEnd.lastIndex === 0) {
          next = css.length - 1;
        } else {
          next = atEnd.lastIndex - 2;
        }

        tokens.push(['at-word', css.slice(pos, next + 1), line, pos - offset, line, next - offset, pos]);
        pos = next;
        break;

      case backslash:
        next = pos;
        escape = true;

        while (css.charCodeAt(next + 1) === backslash) {
          next += 1;
          escape = !escape;
        }

        code = css.charCodeAt(next + 1);

        if (escape && code !== slash && code !== space && code !== newline && code !== tab && code !== cr && code !== feed) {
          next += 1;
        }

        tokens.push(['word', css.slice(pos, next + 1), line, pos - offset, line, next - offset, pos]);
        pos = next;
        break;

      default:
        if (code === slash && css.charCodeAt(pos + 1) === asterisk) {
          next = css.indexOf('*/', pos + 2) + 1;

          if (next === 0) {
            unclosed('comment', '*/');
          }

          content = css.slice(pos, next + 1);
          lines = content.split('\n');
          last = lines.length - 1;

          if (last > 0) {
            nextLine = line + last;
            nextOffset = next - lines[last].length;
          } else {
            nextLine = line;
            nextOffset = offset;
          }

          tokens.push(['comment', content, line, pos - offset, nextLine, next - nextOffset, pos]);
          offset = nextOffset;
          line = nextLine;
          pos = next;
        } else {
          wordEnd.lastIndex = pos + 1;
          wordEnd.test(css);

          if (wordEnd.lastIndex === 0) {
            next = css.length - 1;
          } else {
            next = wordEnd.lastIndex - 2;
          }

          tokens.push(['word', css.slice(pos, next + 1), line, pos - offset, line, next - offset, pos]);
          pos = next;
        }

        break;
    }

    pos++;
  }

  return tokens;
}

module.exports = exports['default'];

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseMedia;

var _Container = __webpack_require__(57);

var _Container2 = _interopRequireDefault(_Container);

var _parsers = __webpack_require__(112);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/**
 * Parses a media query list into an array of nodes. A typical node signature:
 *  {string} node.type -- one of: 'media-query', 'media-type', 'keyword',
 *    'media-feature-expression', 'media-feature', 'colon', 'value'
 *  {string} node.value -- the contents of a particular element, trimmed
 *    e.g.: `screen`, `max-width`, `1024px`
 *  {string} node.after -- whitespaces that follow the element
 *  {string} node.before -- whitespaces that precede the element
 *  {string} node.sourceIndex -- the index of the element in a source media
 *    query list, 0-based
 *  {object} node.parent -- a link to the parent node (a container)
 *
 * Some nodes (media queries, media feature expressions) contain other nodes.
 * They additionally have:
 *  {array} node.nodes -- an array of nodes of the type described here
 *  {funciton} node.each -- traverses direct children of the node, calling
 *    a callback for each one
 *  {funciton} node.walk -- traverses ALL descendants of the node, calling
 *    a callback for each one
 */


function parseMedia(value) {
  return new _Container2.default({
    nodes: (0, _parsers.parseMediaList)(value),
    type: 'media-query-list',
    value: value.trim()
  });
}

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseMediaFeature = parseMediaFeature;
exports.parseMediaQuery = parseMediaQuery;
exports.parseMediaList = parseMediaList;

var _Node = __webpack_require__(58);

var _Node2 = _interopRequireDefault(_Node);

var _Container = __webpack_require__(57);

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/**
 * Parses a media feature expression, e.g. `max-width: 10px`, `(color)`
 *
 * @param {string} string - the source expression string, can be inside parens
 * @param {Number} index - the index of `string` in the overall input
 *
 * @return {Array} an array of Nodes, the first element being a media feature,
 *    the secont - its value (may be missing)
 */


function parseMediaFeature(string) {
  var index = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
  var modesEntered = [{
    mode: 'normal',
    character: null
  }];
  var result = [];
  var lastModeIndex = 0;
  var mediaFeature = '';
  var colon = null;
  var mediaFeatureValue = null;
  var indexLocal = index;
  var stringNormalized = string; // Strip trailing parens (if any), and correct the starting index

  if (string[0] === '(' && string[string.length - 1] === ')') {
    stringNormalized = string.substring(1, string.length - 1);
    indexLocal++;
  }

  for (var i = 0; i < stringNormalized.length; i++) {
    var character = stringNormalized[i]; // If entering/exiting a string

    if (character === '\'' || character === '"') {
      if (modesEntered[lastModeIndex].isCalculationEnabled === true) {
        modesEntered.push({
          mode: 'string',
          isCalculationEnabled: false,
          character: character
        });
        lastModeIndex++;
      } else if (modesEntered[lastModeIndex].mode === 'string' && modesEntered[lastModeIndex].character === character && stringNormalized[i - 1] !== '\\') {
        modesEntered.pop();
        lastModeIndex--;
      }
    } // If entering/exiting interpolation


    if (character === '{') {
      modesEntered.push({
        mode: 'interpolation',
        isCalculationEnabled: true
      });
      lastModeIndex++;
    } else if (character === '}') {
      modesEntered.pop();
      lastModeIndex--;
    } // If a : is met outside of a string, function call or interpolation, than
    // this : separates a media feature and a value


    if (modesEntered[lastModeIndex].mode === 'normal' && character === ':') {
      var mediaFeatureValueStr = stringNormalized.substring(i + 1);
      mediaFeatureValue = {
        type: 'value',
        before: /^(\s*)/.exec(mediaFeatureValueStr)[1],
        after: /(\s*)$/.exec(mediaFeatureValueStr)[1],
        value: mediaFeatureValueStr.trim()
      }; // +1 for the colon

      mediaFeatureValue.sourceIndex = mediaFeatureValue.before.length + i + 1 + indexLocal;
      colon = {
        type: 'colon',
        sourceIndex: i + indexLocal,
        after: mediaFeatureValue.before,
        value: ':'
      };
      break;
    }

    mediaFeature += character;
  } // Forming a media feature node


  mediaFeature = {
    type: 'media-feature',
    before: /^(\s*)/.exec(mediaFeature)[1],
    after: /(\s*)$/.exec(mediaFeature)[1],
    value: mediaFeature.trim()
  };
  mediaFeature.sourceIndex = mediaFeature.before.length + indexLocal;
  result.push(mediaFeature);

  if (colon !== null) {
    colon.before = mediaFeature.after;
    result.push(colon);
  }

  if (mediaFeatureValue !== null) {
    result.push(mediaFeatureValue);
  }

  return result;
}
/**
 * Parses a media query, e.g. `screen and (color)`, `only tv`
 *
 * @param {string} string - the source media query string
 * @param {Number} index - the index of `string` in the overall input
 *
 * @return {Array} an array of Nodes and Containers
 */


function parseMediaQuery(string) {
  var index = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
  var result = []; // How many timies the parser entered parens/curly braces

  var localLevel = 0; // Has any keyword, media type, media feature expression or interpolation
  // ('element' hereafter) started

  var insideSomeValue = false;
  var node = void 0;

  function resetNode() {
    return {
      before: '',
      after: '',
      value: ''
    };
  }

  node = resetNode();

  for (var i = 0; i < string.length; i++) {
    var character = string[i]; // If not yet entered any element

    if (!insideSomeValue) {
      if (character.search(/\s/) !== -1) {
        // A whitespace
        // Don't form 'after' yet; will do it later
        node.before += character;
      } else {
        // Not a whitespace - entering an element
        // Expression start
        if (character === '(') {
          node.type = 'media-feature-expression';
          localLevel++;
        }

        node.value = character;
        node.sourceIndex = index + i;
        insideSomeValue = true;
      }
    } else {
      // Already in the middle of some alement
      node.value += character; // Here parens just increase localLevel and don't trigger a start of
      // a media feature expression (since they can't be nested)
      // Interpolation start

      if (character === '{' || character === '(') {
        localLevel++;
      } // Interpolation/function call/media feature expression end


      if (character === ')' || character === '}') {
        localLevel--;
      }
    } // If exited all parens/curlies and the next symbol


    if (insideSomeValue && localLevel === 0 && (character === ')' || i === string.length - 1 || string[i + 1].search(/\s/) !== -1)) {
      if (['not', 'only', 'and'].indexOf(node.value) !== -1) {
        node.type = 'keyword';
      } // if it's an expression, parse its contents


      if (node.type === 'media-feature-expression') {
        node.nodes = parseMediaFeature(node.value, node.sourceIndex);
      }

      result.push(Array.isArray(node.nodes) ? new _Container2.default(node) : new _Node2.default(node));
      node = resetNode();
      insideSomeValue = false;
    }
  } // Now process the result array - to specify undefined types of the nodes
  // and specify the `after` prop


  for (var _i = 0; _i < result.length; _i++) {
    node = result[_i];

    if (_i > 0) {
      result[_i - 1].after = node.before;
    } // Node types. Might not be set because contains interpolation/function
    // calls or fully consists of them


    if (node.type === undefined) {
      if (_i > 0) {
        // only `and` can follow an expression
        if (result[_i - 1].type === 'media-feature-expression') {
          node.type = 'keyword';
          continue;
        } // Anything after 'only|not' is a media type


        if (result[_i - 1].value === 'not' || result[_i - 1].value === 'only') {
          node.type = 'media-type';
          continue;
        } // Anything after 'and' is an expression


        if (result[_i - 1].value === 'and') {
          node.type = 'media-feature-expression';
          continue;
        }

        if (result[_i - 1].type === 'media-type') {
          // if it is the last element - it might be an expression
          // or 'and' depending on what is after it
          if (!result[_i + 1]) {
            node.type = 'media-feature-expression';
          } else {
            node.type = result[_i + 1].type === 'media-feature-expression' ? 'keyword' : 'media-feature-expression';
          }
        }
      }

      if (_i === 0) {
        // `screen`, `fn( ... )`, `#{ ... }`. Not an expression, since then
        // its type would have been set by now
        if (!result[_i + 1]) {
          node.type = 'media-type';
          continue;
        } // `screen and` or `#{...} (max-width: 10px)`


        if (result[_i + 1] && (result[_i + 1].type === 'media-feature-expression' || result[_i + 1].type === 'keyword')) {
          node.type = 'media-type';
          continue;
        }

        if (result[_i + 2]) {
          // `screen and (color) ...`
          if (result[_i + 2].type === 'media-feature-expression') {
            node.type = 'media-type';
            result[_i + 1].type = 'keyword';
            continue;
          } // `only screen and ...`


          if (result[_i + 2].type === 'keyword') {
            node.type = 'keyword';
            result[_i + 1].type = 'media-type';
            continue;
          }
        }

        if (result[_i + 3]) {
          // `screen and (color) ...`
          if (result[_i + 3].type === 'media-feature-expression') {
            node.type = 'keyword';
            result[_i + 1].type = 'media-type';
            result[_i + 2].type = 'keyword';
            continue;
          }
        }
      }
    }
  }

  return result;
}
/**
 * Parses a media query list. Takes a possible `url()` at the start into
 * account, and divides the list into media queries that are parsed separately
 *
 * @param {string} string - the source media query list string
 *
 * @return {Array} an array of Nodes/Containers
 */


function parseMediaList(string) {
  var result = [];
  var interimIndex = 0;
  var levelLocal = 0; // Check for a `url(...)` part (if it is contents of an @import rule)

  var doesHaveUrl = /^(\s*)url\s*\(/.exec(string);

  if (doesHaveUrl !== null) {
    var i = doesHaveUrl[0].length;
    var parenthesesLv = 1;

    while (parenthesesLv > 0) {
      var character = string[i];

      if (character === '(') {
        parenthesesLv++;
      }

      if (character === ')') {
        parenthesesLv--;
      }

      i++;
    }

    result.unshift(new _Node2.default({
      type: 'url',
      value: string.substring(0, i).trim(),
      sourceIndex: doesHaveUrl[1].length,
      before: doesHaveUrl[1],
      after: /^(\s*)/.exec(string.substring(i))[1]
    }));
    interimIndex = i;
  } // Start processing the media query list


  for (var _i2 = interimIndex; _i2 < string.length; _i2++) {
    var _character = string[_i2]; // Dividing the media query list into comma-separated media queries
    // Only count commas that are outside of any parens
    // (i.e., not part of function call params list, etc.)

    if (_character === '(') {
      levelLocal++;
    }

    if (_character === ')') {
      levelLocal--;
    }

    if (levelLocal === 0 && _character === ',') {
      var _mediaQueryString = string.substring(interimIndex, _i2);

      var _spaceBefore = /^(\s*)/.exec(_mediaQueryString)[1];
      result.push(new _Container2.default({
        type: 'media-query',
        value: _mediaQueryString.trim(),
        sourceIndex: interimIndex + _spaceBefore.length,
        nodes: parseMediaQuery(_mediaQueryString, interimIndex),
        before: _spaceBefore,
        after: /(\s*)$/.exec(_mediaQueryString)[1]
      }));
      interimIndex = _i2 + 1;
    }
  }

  var mediaQueryString = string.substring(interimIndex);
  var spaceBefore = /^(\s*)/.exec(mediaQueryString)[1];
  result.push(new _Container2.default({
    type: 'media-query',
    value: mediaQueryString.trim(),
    sourceIndex: interimIndex + spaceBefore.length,
    nodes: parseMediaQuery(mediaQueryString, interimIndex),
    before: spaceBefore,
    after: /(\s*)$/.exec(mediaQueryString)[1]
  }));
  return result;
}

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(114);

var parse = __webpack_require__(116);

module.exports = {
  parse: parse,
  stringify: stringify
};

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ScssStringifier = __webpack_require__(115);

module.exports = function scssStringify(node, builder) {
  var str = new ScssStringifier(builder);
  str.stringify(node);
};

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Stringifier = __webpack_require__(17);

var ScssStringifier = function (_Stringifier) {
  _inherits(ScssStringifier, _Stringifier);

  function ScssStringifier() {
    _classCallCheck(this, ScssStringifier);

    return _possibleConstructorReturn(this, _Stringifier.apply(this, arguments));
  }

  ScssStringifier.prototype.comment = function comment(node) {
    var left = this.raw(node, 'left', 'commentLeft');
    var right = this.raw(node, 'right', 'commentRight');

    if (node.raws.inline) {
      var text = node.raws.text || node.text;
      this.builder('//' + left + text + right, node);
    } else {
      this.builder('/*' + left + node.text + right + '*/', node);
    }
  };

  ScssStringifier.prototype.decl = function decl(node, semicolon) {
    if (!node.isNested) {
      _Stringifier.prototype.decl.call(this, node, semicolon);
    } else {
      var between = this.raw(node, 'between', 'colon');
      var string = node.prop + between + this.rawValue(node, 'value');

      if (node.important) {
        string += node.raws.important || ' !important';
      }

      this.builder(string + '{', node, 'start');
      var after = void 0;

      if (node.nodes && node.nodes.length) {
        this.body(node);
        after = this.raw(node, 'after');
      } else {
        after = this.raw(node, 'after', 'emptyBody');
      }

      if (after) this.builder(after);
      this.builder('}', node, 'end');
    }
  };

  ScssStringifier.prototype.rawValue = function rawValue(node, prop) {
    var value = node[prop];
    var raw = node.raws[prop];

    if (raw && raw.value === value) {
      return raw.scss ? raw.scss : raw.raw;
    } else {
      return value;
    }
  };

  return ScssStringifier;
}(Stringifier);

module.exports = ScssStringifier;

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Input = __webpack_require__(59);

var ScssParser = __webpack_require__(131);

module.exports = function scssParse(scss, opts) {
  var input = new Input(scss, opts);
  var parser = new ScssParser(input);
  parser.parse();
  return parser.root;
};

/***/ }),
/* 117 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 118 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 119 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.__esModule = true;
exports.default = void 0;

var _sourceMap = _interopRequireDefault(__webpack_require__(61));

var _path = _interopRequireDefault(__webpack_require__(6));

var _fs = _interopRequireDefault(__webpack_require__(130));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function fromBase64(str) {
  if (Buffer) {
    return Buffer.from(str, 'base64').toString();
  } else {
    return window.atob(str);
  }
}
/**
 * Source map information from input CSS.
 * For example, source map after Sass compiler.
 *
 * This class will automatically find source map in input CSS or in file system
 * near input file (according `from` option).
 *
 * @example
 * const root = postcss.parse(css, { from: 'a.sass.css' })
 * root.input.map //=> PreviousMap
 */


var PreviousMap =
/*#__PURE__*/
function () {
  /**
   * @param {string}         css    Input CSS source.
   * @param {processOptions} [opts] {@link Processor#process} options.
   */
  function PreviousMap(css, opts) {
    this.loadAnnotation(css);
    /**
     * Was source map inlined by data-uri to input CSS.
     *
     * @type {boolean}
     */

    this.inline = this.startWith(this.annotation, 'data:');
    var prev = opts.map ? opts.map.prev : undefined;
    var text = this.loadMap(opts.from, prev);
    if (text) this.text = text;
  }
  /**
   * Create a instance of `SourceMapGenerator` class
   * from the `source-map` library to work with source map information.
   *
   * It is lazy method, so it will create object only on first call
   * and then it will use cache.
   *
   * @return {SourceMapGenerator} Object with source map information.
   */


  var _proto = PreviousMap.prototype;

  _proto.consumer = function consumer() {
    if (!this.consumerCache) {
      this.consumerCache = new _sourceMap.default.SourceMapConsumer(this.text);
    }

    return this.consumerCache;
  };
  /**
   * Does source map contains `sourcesContent` with input source text.
   *
   * @return {boolean} Is `sourcesContent` present.
   */


  _proto.withContent = function withContent() {
    return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
  };

  _proto.startWith = function startWith(string, start) {
    if (!string) return false;
    return string.substr(0, start.length) === start;
  };

  _proto.loadAnnotation = function loadAnnotation(css) {
    var match = css.match(/\/\*\s*# sourceMappingURL=(.*)\s*\*\//);
    if (match) this.annotation = match[1].trim();
  };

  _proto.decodeInline = function decodeInline(text) {
    var baseCharsetUri = /^data:application\/json;charset=utf-?8;base64,/;
    var baseUri = /^data:application\/json;base64,/;
    var uri = 'data:application/json,';

    if (this.startWith(text, uri)) {
      return decodeURIComponent(text.substr(uri.length));
    }

    if (baseCharsetUri.test(text) || baseUri.test(text)) {
      return fromBase64(text.substr(RegExp.lastMatch.length));
    }

    var encoding = text.match(/data:application\/json;([^,]+),/)[1];
    throw new Error('Unsupported source map encoding ' + encoding);
  };

  _proto.loadMap = function loadMap(file, prev) {
    if (prev === false) return false;

    if (prev) {
      if (typeof prev === 'string') {
        return prev;
      } else if (typeof prev === 'function') {
        var prevPath = prev(file);

        if (prevPath && _fs.default.existsSync && _fs.default.existsSync(prevPath)) {
          return _fs.default.readFileSync(prevPath, 'utf-8').toString().trim();
        } else {
          throw new Error('Unable to load previous source map: ' + prevPath.toString());
        }
      } else if (prev instanceof _sourceMap.default.SourceMapConsumer) {
        return _sourceMap.default.SourceMapGenerator.fromSourceMap(prev).toString();
      } else if (prev instanceof _sourceMap.default.SourceMapGenerator) {
        return prev.toString();
      } else if (this.isMap(prev)) {
        return JSON.stringify(prev);
      } else {
        throw new Error('Unsupported previous source map format: ' + prev.toString());
      }
    } else if (this.inline) {
      return this.decodeInline(this.annotation);
    } else if (this.annotation) {
      var map = this.annotation;
      if (file) map = _path.default.join(_path.default.dirname(file), map);
      this.root = _path.default.dirname(map);

      if (_fs.default.existsSync && _fs.default.existsSync(map)) {
        return _fs.default.readFileSync(map, 'utf-8').toString().trim();
      } else {
        return false;
      }
    }
  };

  _proto.isMap = function isMap(map) {
    if (_typeof(map) !== 'object') return false;
    return typeof map.mappings === 'string' || typeof map._mappings === 'string';
  };

  return PreviousMap;
}();

var _default = PreviousMap;
exports.default = _default;
module.exports = exports.default;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18).Buffer))

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i];
  revLookup[code.charCodeAt(i)] = i;
}

revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;

function placeHoldersCount(b64) {
  var len = b64.length;

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4');
  } // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice


  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;
}

function byteLength(b64) {
  // base64 is 4/3 + up to two characters of the original data
  return b64.length * 3 / 4 - placeHoldersCount(b64);
}

function toByteArray(b64) {
  var i, j, l, tmp, placeHolders, arr;
  var len = b64.length;
  placeHolders = placeHoldersCount(b64);
  arr = new Arr(len * 3 / 4 - placeHolders); // if there are placeholders, only get up to the last complete 4 chars

  l = placeHolders > 0 ? len - 4 : len;
  var L = 0;

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
    arr[L++] = tmp >> 16 & 0xFF;
    arr[L++] = tmp >> 8 & 0xFF;
    arr[L++] = tmp & 0xFF;
  }

  if (placeHolders === 2) {
    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
    arr[L++] = tmp & 0xFF;
  } else if (placeHolders === 1) {
    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
    arr[L++] = tmp >> 8 & 0xFF;
    arr[L++] = tmp & 0xFF;
  }

  return arr;
}

function tripletToBase64(num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}

function encodeChunk(uint8, start, end) {
  var tmp;
  var output = [];

  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
    output.push(tripletToBase64(tmp));
  }

  return output.join('');
}

function fromByteArray(uint8) {
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes

  var output = '';
  var parts = [];
  var maxChunkLength = 16383; // must be multiple of 3
  // go through the array every three bytes, we'll deal with trailing stuff later

  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
  } // pad the end with zeros, but make sure to not forget the extra bytes


  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    output += lookup[tmp >> 2];
    output += lookup[tmp << 4 & 0x3F];
    output += '==';
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
    output += lookup[tmp >> 10];
    output += lookup[tmp >> 4 & 0x3F];
    output += lookup[tmp << 2 & 0x3F];
    output += '=';
  }

  parts.push(output);
  return parts.join('');
}

/***/ }),
/* 122 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? nBytes - 1 : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];
  i += d;
  e = s & (1 << -nBits) - 1;
  s >>= -nBits;
  nBits += eLen;

  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;

  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : (s ? -1 : 1) * Infinity;
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }

  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var i = isLE ? 0 : nBytes - 1;
  var d = isLE ? 1 : -1;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);

    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }

    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }

    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = e << mLen | m;
  eLen += mLen;

  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128;
};

/***/ }),
/* 123 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

/***/ }),
/* 124 */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */

/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
var intToCharMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');
/**
 * Encode an integer in the range of 0 to 63 to a single base 64 digit.
 */

exports.encode = function (number) {
  if (0 <= number && number < intToCharMap.length) {
    return intToCharMap[number];
  }

  throw new TypeError("Must be between 0 and 63: " + number);
};
/**
 * Decode a single base 64 character code digit to an integer. Returns -1 on
 * failure.
 */


exports.decode = function (charCode) {
  var bigA = 65; // 'A'

  var bigZ = 90; // 'Z'

  var littleA = 97; // 'a'

  var littleZ = 122; // 'z'

  var zero = 48; // '0'

  var nine = 57; // '9'

  var plus = 43; // '+'

  var slash = 47; // '/'

  var littleOffset = 26;
  var numberOffset = 52; // 0 - 25: ABCDEFGHIJKLMNOPQRSTUVWXYZ

  if (bigA <= charCode && charCode <= bigZ) {
    return charCode - bigA;
  } // 26 - 51: abcdefghijklmnopqrstuvwxyz


  if (littleA <= charCode && charCode <= littleZ) {
    return charCode - littleA + littleOffset;
  } // 52 - 61: 0123456789


  if (zero <= charCode && charCode <= nine) {
    return charCode - zero + numberOffset;
  } // 62: +


  if (charCode == plus) {
    return 62;
  } // 63: /


  if (charCode == slash) {
    return 63;
  } // Invalid base64 digit.


  return -1;
};

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */

/*
 * Copyright 2014 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
var util = __webpack_require__(8);
/**
 * Determine whether mappingB is after mappingA with respect to generated
 * position.
 */


function generatedPositionAfter(mappingA, mappingB) {
  // Optimized for most common case
  var lineA = mappingA.generatedLine;
  var lineB = mappingB.generatedLine;
  var columnA = mappingA.generatedColumn;
  var columnB = mappingB.generatedColumn;
  return lineB > lineA || lineB == lineA && columnB >= columnA || util.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
}
/**
 * A data structure to provide a sorted view of accumulated mappings in a
 * performance conscious manner. It trades a neglibable overhead in general
 * case for a large speedup in case of mappings being added in order.
 */


function MappingList() {
  this._array = [];
  this._sorted = true; // Serves as infimum

  this._last = {
    generatedLine: -1,
    generatedColumn: 0
  };
}
/**
 * Iterate through internal items. This method takes the same arguments that
 * `Array.prototype.forEach` takes.
 *
 * NOTE: The order of the mappings is NOT guaranteed.
 */


MappingList.prototype.unsortedForEach = function MappingList_forEach(aCallback, aThisArg) {
  this._array.forEach(aCallback, aThisArg);
};
/**
 * Add the given source mapping.
 *
 * @param Object aMapping
 */


MappingList.prototype.add = function MappingList_add(aMapping) {
  if (generatedPositionAfter(this._last, aMapping)) {
    this._last = aMapping;

    this._array.push(aMapping);
  } else {
    this._sorted = false;

    this._array.push(aMapping);
  }
};
/**
 * Returns the flat, sorted array of mappings. The mappings are sorted by
 * generated position.
 *
 * WARNING: This method returns internal data without copying, for
 * performance. The return value must NOT be mutated, and should be treated as
 * an immutable borrow. If you want to take ownership, you must make your own
 * copy.
 */


MappingList.prototype.toArray = function MappingList_toArray() {
  if (!this._sorted) {
    this._array.sort(util.compareByGeneratedPositionsInflated);

    this._sorted = true;
  }

  return this._array;
};

exports.MappingList = MappingList;

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */

/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
var util = __webpack_require__(8);

var binarySearch = __webpack_require__(127);

var ArraySet = __webpack_require__(64).ArraySet;

var base64VLQ = __webpack_require__(63);

var quickSort = __webpack_require__(128).quickSort;

function SourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;

  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  return sourceMap.sections != null ? new IndexedSourceMapConsumer(sourceMap, aSourceMapURL) : new BasicSourceMapConsumer(sourceMap, aSourceMapURL);
}

SourceMapConsumer.fromSourceMap = function (aSourceMap, aSourceMapURL) {
  return BasicSourceMapConsumer.fromSourceMap(aSourceMap, aSourceMapURL);
};
/**
 * The version of the source mapping spec that we are consuming.
 */


SourceMapConsumer.prototype._version = 3; // `__generatedMappings` and `__originalMappings` are arrays that hold the
// parsed mapping coordinates from the source map's "mappings" attribute. They
// are lazily instantiated, accessed via the `_generatedMappings` and
// `_originalMappings` getters respectively, and we only parse the mappings
// and create these arrays once queried for a source location. We jump through
// these hoops because there can be many thousands of mappings, and parsing
// them is expensive, so we only want to do it if we must.
//
// Each object in the arrays is of the form:
//
//     {
//       generatedLine: The line number in the generated code,
//       generatedColumn: The column number in the generated code,
//       source: The path to the original source file that generated this
//               chunk of code,
//       originalLine: The line number in the original source that
//                     corresponds to this chunk of generated code,
//       originalColumn: The column number in the original source that
//                       corresponds to this chunk of generated code,
//       name: The name of the original symbol which generated this chunk of
//             code.
//     }
//
// All properties except for `generatedLine` and `generatedColumn` can be
// `null`.
//
// `_generatedMappings` is ordered by the generated positions.
//
// `_originalMappings` is ordered by the original positions.

SourceMapConsumer.prototype.__generatedMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_generatedMappings', {
  configurable: true,
  enumerable: true,
  get: function get() {
    if (!this.__generatedMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__generatedMappings;
  }
});
SourceMapConsumer.prototype.__originalMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_originalMappings', {
  configurable: true,
  enumerable: true,
  get: function get() {
    if (!this.__originalMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__originalMappings;
  }
});

SourceMapConsumer.prototype._charIsMappingSeparator = function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
  var c = aStr.charAt(index);
  return c === ";" || c === ",";
};
/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */


SourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
  throw new Error("Subclasses must implement _parseMappings");
};

SourceMapConsumer.GENERATED_ORDER = 1;
SourceMapConsumer.ORIGINAL_ORDER = 2;
SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
SourceMapConsumer.LEAST_UPPER_BOUND = 2;
/**
 * Iterate over each mapping between an original source/line/column and a
 * generated line/column in this source map.
 *
 * @param Function aCallback
 *        The function that is called with each mapping.
 * @param Object aContext
 *        Optional. If specified, this object will be the value of `this` every
 *        time that `aCallback` is called.
 * @param aOrder
 *        Either `SourceMapConsumer.GENERATED_ORDER` or
 *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
 *        iterate over the mappings sorted by the generated file's line/column
 *        order or the original's source/line/column order, respectively. Defaults to
 *        `SourceMapConsumer.GENERATED_ORDER`.
 */

SourceMapConsumer.prototype.eachMapping = function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
  var context = aContext || null;
  var order = aOrder || SourceMapConsumer.GENERATED_ORDER;
  var mappings;

  switch (order) {
    case SourceMapConsumer.GENERATED_ORDER:
      mappings = this._generatedMappings;
      break;

    case SourceMapConsumer.ORIGINAL_ORDER:
      mappings = this._originalMappings;
      break;

    default:
      throw new Error("Unknown order of iteration.");
  }

  var sourceRoot = this.sourceRoot;
  mappings.map(function (mapping) {
    var source = mapping.source === null ? null : this._sources.at(mapping.source);
    source = util.computeSourceURL(sourceRoot, source, this._sourceMapURL);
    return {
      source: source,
      generatedLine: mapping.generatedLine,
      generatedColumn: mapping.generatedColumn,
      originalLine: mapping.originalLine,
      originalColumn: mapping.originalColumn,
      name: mapping.name === null ? null : this._names.at(mapping.name)
    };
  }, this).forEach(aCallback, context);
};
/**
 * Returns all generated line and column information for the original source,
 * line, and column provided. If no column is provided, returns all mappings
 * corresponding to a either the line we are searching for or the next
 * closest line that has any mappings. Otherwise, returns all mappings
 * corresponding to the given line and either the column we are searching for
 * or the next closest column that has any offsets.
 *
 * The only argument is an object with the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number is 1-based.
 *   - column: Optional. the column number in the original source.
 *    The column number is 0-based.
 *
 * and an array of objects is returned, each with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *    line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *    The column number is 0-based.
 */


SourceMapConsumer.prototype.allGeneratedPositionsFor = function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
  var line = util.getArg(aArgs, 'line'); // When there is no exact match, BasicSourceMapConsumer.prototype._findMapping
  // returns the index of the closest mapping less than the needle. By
  // setting needle.originalColumn to 0, we thus find the last mapping for
  // the given line, provided such a mapping exists.

  var needle = {
    source: util.getArg(aArgs, 'source'),
    originalLine: line,
    originalColumn: util.getArg(aArgs, 'column', 0)
  };
  needle.source = this._findSourceIndex(needle.source);

  if (needle.source < 0) {
    return [];
  }

  var mappings = [];

  var index = this._findMapping(needle, this._originalMappings, "originalLine", "originalColumn", util.compareByOriginalPositions, binarySearch.LEAST_UPPER_BOUND);

  if (index >= 0) {
    var mapping = this._originalMappings[index];

    if (aArgs.column === undefined) {
      var originalLine = mapping.originalLine; // Iterate until either we run out of mappings, or we run into
      // a mapping for a different line than the one we found. Since
      // mappings are sorted, this is guaranteed to find all mappings for
      // the line we found.

      while (mapping && mapping.originalLine === originalLine) {
        mappings.push({
          line: util.getArg(mapping, 'generatedLine', null),
          column: util.getArg(mapping, 'generatedColumn', null),
          lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
        });
        mapping = this._originalMappings[++index];
      }
    } else {
      var originalColumn = mapping.originalColumn; // Iterate until either we run out of mappings, or we run into
      // a mapping for a different line than the one we were searching for.
      // Since mappings are sorted, this is guaranteed to find all mappings for
      // the line we are searching for.

      while (mapping && mapping.originalLine === line && mapping.originalColumn == originalColumn) {
        mappings.push({
          line: util.getArg(mapping, 'generatedLine', null),
          column: util.getArg(mapping, 'generatedColumn', null),
          lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
        });
        mapping = this._originalMappings[++index];
      }
    }
  }

  return mappings;
};

exports.SourceMapConsumer = SourceMapConsumer;
/**
 * A BasicSourceMapConsumer instance represents a parsed source map which we can
 * query for information about the original file positions by giving it a file
 * position in the generated source.
 *
 * The first parameter is the raw source map (either as a JSON string, or
 * already parsed to an object). According to the spec, source maps have the
 * following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - sources: An array of URLs to the original source files.
 *   - names: An array of identifiers which can be referrenced by individual mappings.
 *   - sourceRoot: Optional. The URL root from which all sources are relative.
 *   - sourcesContent: Optional. An array of contents of the original source files.
 *   - mappings: A string of base64 VLQs which contain the actual mappings.
 *   - file: Optional. The generated file this source map is associated with.
 *
 * Here is an example source map, taken from the source map spec[0]:
 *
 *     {
 *       version : 3,
 *       file: "out.js",
 *       sourceRoot : "",
 *       sources: ["foo.js", "bar.js"],
 *       names: ["src", "maps", "are", "fun"],
 *       mappings: "AA,AB;;ABCDE;"
 *     }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
 */

function BasicSourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;

  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  var version = util.getArg(sourceMap, 'version');
  var sources = util.getArg(sourceMap, 'sources'); // Sass 3.3 leaves out the 'names' array, so we deviate from the spec (which
  // requires the array) to play nice here.

  var names = util.getArg(sourceMap, 'names', []);
  var sourceRoot = util.getArg(sourceMap, 'sourceRoot', null);
  var sourcesContent = util.getArg(sourceMap, 'sourcesContent', null);
  var mappings = util.getArg(sourceMap, 'mappings');
  var file = util.getArg(sourceMap, 'file', null); // Once again, Sass deviates from the spec and supplies the version as a
  // string rather than a number, so we use loose equality checking here.

  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  if (sourceRoot) {
    sourceRoot = util.normalize(sourceRoot);
  }

  sources = sources.map(String) // Some source maps produce relative source paths like "./foo.js" instead of
  // "foo.js".  Normalize these first so that future comparisons will succeed.
  // See bugzil.la/1090768.
  .map(util.normalize) // Always ensure that absolute sources are internally stored relative to
  // the source root, if the source root is absolute. Not doing this would
  // be particularly problematic when the source root is a prefix of the
  // source (valid, but why??). See github issue #199 and bugzil.la/1188982.
  .map(function (source) {
    return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source) ? util.relative(sourceRoot, source) : source;
  }); // Pass `true` below to allow duplicate names and sources. While source maps
  // are intended to be compressed and deduplicated, the TypeScript compiler
  // sometimes generates source maps with duplicates in them. See Github issue
  // #72 and bugzil.la/889492.

  this._names = ArraySet.fromArray(names.map(String), true);
  this._sources = ArraySet.fromArray(sources, true);
  this._absoluteSources = this._sources.toArray().map(function (s) {
    return util.computeSourceURL(sourceRoot, s, aSourceMapURL);
  });
  this.sourceRoot = sourceRoot;
  this.sourcesContent = sourcesContent;
  this._mappings = mappings;
  this._sourceMapURL = aSourceMapURL;
  this.file = file;
}

BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;
/**
 * Utility function to find the index of a source.  Returns -1 if not
 * found.
 */

BasicSourceMapConsumer.prototype._findSourceIndex = function (aSource) {
  var relativeSource = aSource;

  if (this.sourceRoot != null) {
    relativeSource = util.relative(this.sourceRoot, relativeSource);
  }

  if (this._sources.has(relativeSource)) {
    return this._sources.indexOf(relativeSource);
  } // Maybe aSource is an absolute URL as returned by |sources|.  In
  // this case we can't simply undo the transform.


  var i;

  for (i = 0; i < this._absoluteSources.length; ++i) {
    if (this._absoluteSources[i] == aSource) {
      return i;
    }
  }

  return -1;
};
/**
 * Create a BasicSourceMapConsumer from a SourceMapGenerator.
 *
 * @param SourceMapGenerator aSourceMap
 *        The source map that will be consumed.
 * @param String aSourceMapURL
 *        The URL at which the source map can be found (optional)
 * @returns BasicSourceMapConsumer
 */


BasicSourceMapConsumer.fromSourceMap = function SourceMapConsumer_fromSourceMap(aSourceMap, aSourceMapURL) {
  var smc = Object.create(BasicSourceMapConsumer.prototype);
  var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
  var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
  smc.sourceRoot = aSourceMap._sourceRoot;
  smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(), smc.sourceRoot);
  smc.file = aSourceMap._file;
  smc._sourceMapURL = aSourceMapURL;
  smc._absoluteSources = smc._sources.toArray().map(function (s) {
    return util.computeSourceURL(smc.sourceRoot, s, aSourceMapURL);
  }); // Because we are modifying the entries (by converting string sources and
  // names to indices into the sources and names ArraySets), we have to make
  // a copy of the entry or else bad things happen. Shared mutable state
  // strikes again! See github issue #191.

  var generatedMappings = aSourceMap._mappings.toArray().slice();

  var destGeneratedMappings = smc.__generatedMappings = [];
  var destOriginalMappings = smc.__originalMappings = [];

  for (var i = 0, length = generatedMappings.length; i < length; i++) {
    var srcMapping = generatedMappings[i];
    var destMapping = new Mapping();
    destMapping.generatedLine = srcMapping.generatedLine;
    destMapping.generatedColumn = srcMapping.generatedColumn;

    if (srcMapping.source) {
      destMapping.source = sources.indexOf(srcMapping.source);
      destMapping.originalLine = srcMapping.originalLine;
      destMapping.originalColumn = srcMapping.originalColumn;

      if (srcMapping.name) {
        destMapping.name = names.indexOf(srcMapping.name);
      }

      destOriginalMappings.push(destMapping);
    }

    destGeneratedMappings.push(destMapping);
  }

  quickSort(smc.__originalMappings, util.compareByOriginalPositions);
  return smc;
};
/**
 * The version of the source mapping spec that we are consuming.
 */


BasicSourceMapConsumer.prototype._version = 3;
/**
 * The list of original sources.
 */

Object.defineProperty(BasicSourceMapConsumer.prototype, 'sources', {
  get: function get() {
    return this._absoluteSources.slice();
  }
});
/**
 * Provide the JIT with a nice shape / hidden class.
 */

function Mapping() {
  this.generatedLine = 0;
  this.generatedColumn = 0;
  this.source = null;
  this.originalLine = null;
  this.originalColumn = null;
  this.name = null;
}
/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */


BasicSourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
  var generatedLine = 1;
  var previousGeneratedColumn = 0;
  var previousOriginalLine = 0;
  var previousOriginalColumn = 0;
  var previousSource = 0;
  var previousName = 0;
  var length = aStr.length;
  var index = 0;
  var cachedSegments = {};
  var temp = {};
  var originalMappings = [];
  var generatedMappings = [];
  var mapping, str, segment, end, value;

  while (index < length) {
    if (aStr.charAt(index) === ';') {
      generatedLine++;
      index++;
      previousGeneratedColumn = 0;
    } else if (aStr.charAt(index) === ',') {
      index++;
    } else {
      mapping = new Mapping();
      mapping.generatedLine = generatedLine; // Because each offset is encoded relative to the previous one,
      // many segments often have the same encoding. We can exploit this
      // fact by caching the parsed variable length fields of each segment,
      // allowing us to avoid a second parse if we encounter the same
      // segment again.

      for (end = index; end < length; end++) {
        if (this._charIsMappingSeparator(aStr, end)) {
          break;
        }
      }

      str = aStr.slice(index, end);
      segment = cachedSegments[str];

      if (segment) {
        index += str.length;
      } else {
        segment = [];

        while (index < end) {
          base64VLQ.decode(aStr, index, temp);
          value = temp.value;
          index = temp.rest;
          segment.push(value);
        }

        if (segment.length === 2) {
          throw new Error('Found a source, but no line and column');
        }

        if (segment.length === 3) {
          throw new Error('Found a source and line, but no column');
        }

        cachedSegments[str] = segment;
      } // Generated column.


      mapping.generatedColumn = previousGeneratedColumn + segment[0];
      previousGeneratedColumn = mapping.generatedColumn;

      if (segment.length > 1) {
        // Original source.
        mapping.source = previousSource + segment[1];
        previousSource += segment[1]; // Original line.

        mapping.originalLine = previousOriginalLine + segment[2];
        previousOriginalLine = mapping.originalLine; // Lines are stored 0-based

        mapping.originalLine += 1; // Original column.

        mapping.originalColumn = previousOriginalColumn + segment[3];
        previousOriginalColumn = mapping.originalColumn;

        if (segment.length > 4) {
          // Original name.
          mapping.name = previousName + segment[4];
          previousName += segment[4];
        }
      }

      generatedMappings.push(mapping);

      if (typeof mapping.originalLine === 'number') {
        originalMappings.push(mapping);
      }
    }
  }

  quickSort(generatedMappings, util.compareByGeneratedPositionsDeflated);
  this.__generatedMappings = generatedMappings;
  quickSort(originalMappings, util.compareByOriginalPositions);
  this.__originalMappings = originalMappings;
};
/**
 * Find the mapping that best matches the hypothetical "needle" mapping that
 * we are searching for in the given "haystack" of mappings.
 */


BasicSourceMapConsumer.prototype._findMapping = function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName, aColumnName, aComparator, aBias) {
  // To return the position we are searching for, we must first find the
  // mapping for the given position and then return the opposite position it
  // points to. Because the mappings are sorted, we can use binary search to
  // find the best mapping.
  if (aNeedle[aLineName] <= 0) {
    throw new TypeError('Line must be greater than or equal to 1, got ' + aNeedle[aLineName]);
  }

  if (aNeedle[aColumnName] < 0) {
    throw new TypeError('Column must be greater than or equal to 0, got ' + aNeedle[aColumnName]);
  }

  return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
};
/**
 * Compute the last column for each generated mapping. The last column is
 * inclusive.
 */


BasicSourceMapConsumer.prototype.computeColumnSpans = function SourceMapConsumer_computeColumnSpans() {
  for (var index = 0; index < this._generatedMappings.length; ++index) {
    var mapping = this._generatedMappings[index]; // Mappings do not contain a field for the last generated columnt. We
    // can come up with an optimistic estimate, however, by assuming that
    // mappings are contiguous (i.e. given two consecutive mappings, the
    // first mapping ends where the second one starts).

    if (index + 1 < this._generatedMappings.length) {
      var nextMapping = this._generatedMappings[index + 1];

      if (mapping.generatedLine === nextMapping.generatedLine) {
        mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
        continue;
      }
    } // The last mapping for each line spans the entire line.


    mapping.lastGeneratedColumn = Infinity;
  }
};
/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */


BasicSourceMapConsumer.prototype.originalPositionFor = function SourceMapConsumer_originalPositionFor(aArgs) {
  var needle = {
    generatedLine: util.getArg(aArgs, 'line'),
    generatedColumn: util.getArg(aArgs, 'column')
  };

  var index = this._findMapping(needle, this._generatedMappings, "generatedLine", "generatedColumn", util.compareByGeneratedPositionsDeflated, util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND));

  if (index >= 0) {
    var mapping = this._generatedMappings[index];

    if (mapping.generatedLine === needle.generatedLine) {
      var source = util.getArg(mapping, 'source', null);

      if (source !== null) {
        source = this._sources.at(source);
        source = util.computeSourceURL(this.sourceRoot, source, this._sourceMapURL);
      }

      var name = util.getArg(mapping, 'name', null);

      if (name !== null) {
        name = this._names.at(name);
      }

      return {
        source: source,
        line: util.getArg(mapping, 'originalLine', null),
        column: util.getArg(mapping, 'originalColumn', null),
        name: name
      };
    }
  }

  return {
    source: null,
    line: null,
    column: null,
    name: null
  };
};
/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */


BasicSourceMapConsumer.prototype.hasContentsOfAllSources = function BasicSourceMapConsumer_hasContentsOfAllSources() {
  if (!this.sourcesContent) {
    return false;
  }

  return this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function (sc) {
    return sc == null;
  });
};
/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */


BasicSourceMapConsumer.prototype.sourceContentFor = function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
  if (!this.sourcesContent) {
    return null;
  }

  var index = this._findSourceIndex(aSource);

  if (index >= 0) {
    return this.sourcesContent[index];
  }

  var relativeSource = aSource;

  if (this.sourceRoot != null) {
    relativeSource = util.relative(this.sourceRoot, relativeSource);
  }

  var url;

  if (this.sourceRoot != null && (url = util.urlParse(this.sourceRoot))) {
    // XXX: file:// URIs and absolute paths lead to unexpected behavior for
    // many users. We can help them out when they expect file:// URIs to
    // behave like it would if they were running a local HTTP server. See
    // https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
    var fileUriAbsPath = relativeSource.replace(/^file:\/\//, "");

    if (url.scheme == "file" && this._sources.has(fileUriAbsPath)) {
      return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)];
    }

    if ((!url.path || url.path == "/") && this._sources.has("/" + relativeSource)) {
      return this.sourcesContent[this._sources.indexOf("/" + relativeSource)];
    }
  } // This function is used recursively from
  // IndexedSourceMapConsumer.prototype.sourceContentFor. In that case, we
  // don't want to throw if we can't find the source - we just want to
  // return null, so we provide a flag to exit gracefully.


  if (nullOnMissing) {
    return null;
  } else {
    throw new Error('"' + relativeSource + '" is not in the SourceMap.');
  }
};
/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */


BasicSourceMapConsumer.prototype.generatedPositionFor = function SourceMapConsumer_generatedPositionFor(aArgs) {
  var source = util.getArg(aArgs, 'source');
  source = this._findSourceIndex(source);

  if (source < 0) {
    return {
      line: null,
      column: null,
      lastColumn: null
    };
  }

  var needle = {
    source: source,
    originalLine: util.getArg(aArgs, 'line'),
    originalColumn: util.getArg(aArgs, 'column')
  };

  var index = this._findMapping(needle, this._originalMappings, "originalLine", "originalColumn", util.compareByOriginalPositions, util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND));

  if (index >= 0) {
    var mapping = this._originalMappings[index];

    if (mapping.source === needle.source) {
      return {
        line: util.getArg(mapping, 'generatedLine', null),
        column: util.getArg(mapping, 'generatedColumn', null),
        lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
      };
    }
  }

  return {
    line: null,
    column: null,
    lastColumn: null
  };
};

exports.BasicSourceMapConsumer = BasicSourceMapConsumer;
/**
 * An IndexedSourceMapConsumer instance represents a parsed source map which
 * we can query for information. It differs from BasicSourceMapConsumer in
 * that it takes "indexed" source maps (i.e. ones with a "sections" field) as
 * input.
 *
 * The first parameter is a raw source map (either as a JSON string, or already
 * parsed to an object). According to the spec for indexed source maps, they
 * have the following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - file: Optional. The generated file this source map is associated with.
 *   - sections: A list of section definitions.
 *
 * Each value under the "sections" field has two fields:
 *   - offset: The offset into the original specified at which this section
 *       begins to apply, defined as an object with a "line" and "column"
 *       field.
 *   - map: A source map definition. This source map could also be indexed,
 *       but doesn't have to be.
 *
 * Instead of the "map" field, it's also possible to have a "url" field
 * specifying a URL to retrieve a source map from, but that's currently
 * unsupported.
 *
 * Here's an example source map, taken from the source map spec[0], but
 * modified to omit a section which uses the "url" field.
 *
 *  {
 *    version : 3,
 *    file: "app.js",
 *    sections: [{
 *      offset: {line:100, column:10},
 *      map: {
 *        version : 3,
 *        file: "section.js",
 *        sources: ["foo.js", "bar.js"],
 *        names: ["src", "maps", "are", "fun"],
 *        mappings: "AAAA,E;;ABCDE;"
 *      }
 *    }],
 *  }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit#heading=h.535es3xeprgt
 */

function IndexedSourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;

  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  var version = util.getArg(sourceMap, 'version');
  var sections = util.getArg(sourceMap, 'sections');

  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  this._sources = new ArraySet();
  this._names = new ArraySet();
  var lastOffset = {
    line: -1,
    column: 0
  };
  this._sections = sections.map(function (s) {
    if (s.url) {
      // The url field will require support for asynchronicity.
      // See https://github.com/mozilla/source-map/issues/16
      throw new Error('Support for url field in sections not implemented.');
    }

    var offset = util.getArg(s, 'offset');
    var offsetLine = util.getArg(offset, 'line');
    var offsetColumn = util.getArg(offset, 'column');

    if (offsetLine < lastOffset.line || offsetLine === lastOffset.line && offsetColumn < lastOffset.column) {
      throw new Error('Section offsets must be ordered and non-overlapping.');
    }

    lastOffset = offset;
    return {
      generatedOffset: {
        // The offset fields are 0-based, but we use 1-based indices when
        // encoding/decoding from VLQ.
        generatedLine: offsetLine + 1,
        generatedColumn: offsetColumn + 1
      },
      consumer: new SourceMapConsumer(util.getArg(s, 'map'), aSourceMapURL)
    };
  });
}

IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;
/**
 * The version of the source mapping spec that we are consuming.
 */

IndexedSourceMapConsumer.prototype._version = 3;
/**
 * The list of original sources.
 */

Object.defineProperty(IndexedSourceMapConsumer.prototype, 'sources', {
  get: function get() {
    var sources = [];

    for (var i = 0; i < this._sections.length; i++) {
      for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
        sources.push(this._sections[i].consumer.sources[j]);
      }
    }

    return sources;
  }
});
/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */

IndexedSourceMapConsumer.prototype.originalPositionFor = function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
  var needle = {
    generatedLine: util.getArg(aArgs, 'line'),
    generatedColumn: util.getArg(aArgs, 'column')
  }; // Find the section containing the generated position we're trying to map
  // to an original position.

  var sectionIndex = binarySearch.search(needle, this._sections, function (needle, section) {
    var cmp = needle.generatedLine - section.generatedOffset.generatedLine;

    if (cmp) {
      return cmp;
    }

    return needle.generatedColumn - section.generatedOffset.generatedColumn;
  });
  var section = this._sections[sectionIndex];

  if (!section) {
    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }

  return section.consumer.originalPositionFor({
    line: needle.generatedLine - (section.generatedOffset.generatedLine - 1),
    column: needle.generatedColumn - (section.generatedOffset.generatedLine === needle.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
    bias: aArgs.bias
  });
};
/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */


IndexedSourceMapConsumer.prototype.hasContentsOfAllSources = function IndexedSourceMapConsumer_hasContentsOfAllSources() {
  return this._sections.every(function (s) {
    return s.consumer.hasContentsOfAllSources();
  });
};
/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */


IndexedSourceMapConsumer.prototype.sourceContentFor = function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
  for (var i = 0; i < this._sections.length; i++) {
    var section = this._sections[i];
    var content = section.consumer.sourceContentFor(aSource, true);

    if (content) {
      return content;
    }
  }

  if (nullOnMissing) {
    return null;
  } else {
    throw new Error('"' + aSource + '" is not in the SourceMap.');
  }
};
/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based. 
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */


IndexedSourceMapConsumer.prototype.generatedPositionFor = function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
  for (var i = 0; i < this._sections.length; i++) {
    var section = this._sections[i]; // Only consider this section if the requested source is in the list of
    // sources of the consumer.

    if (section.consumer._findSourceIndex(util.getArg(aArgs, 'source')) === -1) {
      continue;
    }

    var generatedPosition = section.consumer.generatedPositionFor(aArgs);

    if (generatedPosition) {
      var ret = {
        line: generatedPosition.line + (section.generatedOffset.generatedLine - 1),
        column: generatedPosition.column + (section.generatedOffset.generatedLine === generatedPosition.line ? section.generatedOffset.generatedColumn - 1 : 0)
      };
      return ret;
    }
  }

  return {
    line: null,
    column: null
  };
};
/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */


IndexedSourceMapConsumer.prototype._parseMappings = function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
  this.__generatedMappings = [];
  this.__originalMappings = [];

  for (var i = 0; i < this._sections.length; i++) {
    var section = this._sections[i];
    var sectionMappings = section.consumer._generatedMappings;

    for (var j = 0; j < sectionMappings.length; j++) {
      var mapping = sectionMappings[j];

      var source = section.consumer._sources.at(mapping.source);

      source = util.computeSourceURL(section.consumer.sourceRoot, source, this._sourceMapURL);

      this._sources.add(source);

      source = this._sources.indexOf(source);
      var name = null;

      if (mapping.name) {
        name = section.consumer._names.at(mapping.name);

        this._names.add(name);

        name = this._names.indexOf(name);
      } // The mappings coming from the consumer for the section have
      // generated positions relative to the start of the section, so we
      // need to offset them to be relative to the start of the concatenated
      // generated file.


      var adjustedMapping = {
        source: source,
        generatedLine: mapping.generatedLine + (section.generatedOffset.generatedLine - 1),
        generatedColumn: mapping.generatedColumn + (section.generatedOffset.generatedLine === mapping.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
        originalLine: mapping.originalLine,
        originalColumn: mapping.originalColumn,
        name: name
      };

      this.__generatedMappings.push(adjustedMapping);

      if (typeof adjustedMapping.originalLine === 'number') {
        this.__originalMappings.push(adjustedMapping);
      }
    }
  }

  quickSort(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
  quickSort(this.__originalMappings, util.compareByOriginalPositions);
};

exports.IndexedSourceMapConsumer = IndexedSourceMapConsumer;

/***/ }),
/* 127 */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */

/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
exports.GREATEST_LOWER_BOUND = 1;
exports.LEAST_UPPER_BOUND = 2;
/**
 * Recursive implementation of binary search.
 *
 * @param aLow Indices here and lower do not contain the needle.
 * @param aHigh Indices here and higher do not contain the needle.
 * @param aNeedle The element being searched for.
 * @param aHaystack The non-empty array being searched.
 * @param aCompare Function which takes two elements and returns -1, 0, or 1.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 */

function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
  // This function terminates when one of the following is true:
  //
  //   1. We find the exact element we are looking for.
  //
  //   2. We did not find the exact element, but we can return the index of
  //      the next-closest element.
  //
  //   3. We did not find the exact element, and there is no next-closest
  //      element than the one we are searching for, so we return -1.
  var mid = Math.floor((aHigh - aLow) / 2) + aLow;
  var cmp = aCompare(aNeedle, aHaystack[mid], true);

  if (cmp === 0) {
    // Found the element we are looking for.
    return mid;
  } else if (cmp > 0) {
    // Our needle is greater than aHaystack[mid].
    if (aHigh - mid > 1) {
      // The element is in the upper half.
      return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
    } // The exact needle element was not found in this haystack. Determine if
    // we are in termination case (3) or (2) and return the appropriate thing.


    if (aBias == exports.LEAST_UPPER_BOUND) {
      return aHigh < aHaystack.length ? aHigh : -1;
    } else {
      return mid;
    }
  } else {
    // Our needle is less than aHaystack[mid].
    if (mid - aLow > 1) {
      // The element is in the lower half.
      return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
    } // we are in termination case (3) or (2) and return the appropriate thing.


    if (aBias == exports.LEAST_UPPER_BOUND) {
      return mid;
    } else {
      return aLow < 0 ? -1 : aLow;
    }
  }
}
/**
 * This is an implementation of binary search which will always try and return
 * the index of the closest element if there is no exact hit. This is because
 * mappings between original and generated line/col pairs are single points,
 * and there is an implicit region between each of them, so a miss just means
 * that you aren't on the very start of a region.
 *
 * @param aNeedle The element you are looking for.
 * @param aHaystack The array that is being searched.
 * @param aCompare A function which takes the needle and an element in the
 *     array and returns -1, 0, or 1 depending on whether the needle is less
 *     than, equal to, or greater than the element, respectively.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'binarySearch.GREATEST_LOWER_BOUND'.
 */


exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
  if (aHaystack.length === 0) {
    return -1;
  }

  var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack, aCompare, aBias || exports.GREATEST_LOWER_BOUND);

  if (index < 0) {
    return -1;
  } // We have found either the exact element, or the next-closest element than
  // the one we are searching for. However, there may be more than one such
  // element. Make sure we always return the smallest of these.


  while (index - 1 >= 0) {
    if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
      break;
    }

    --index;
  }

  return index;
};

/***/ }),
/* 128 */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */

/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
// It turns out that some (most?) JavaScript engines don't self-host
// `Array.prototype.sort`. This makes sense because C++ will likely remain
// faster than JS when doing raw CPU-intensive sorting. However, when using a
// custom comparator function, calling back and forth between the VM's C++ and
// JIT'd JS is rather slow *and* loses JIT type information, resulting in
// worse generated code for the comparator function than would be optimal. In
// fact, when sorting with a comparator, these costs outweigh the benefits of
// sorting in C++. By using our own JS-implemented Quick Sort (below), we get
// a ~3500ms mean speed-up in `bench/bench.html`.

/**
 * Swap the elements indexed by `x` and `y` in the array `ary`.
 *
 * @param {Array} ary
 *        The array.
 * @param {Number} x
 *        The index of the first item.
 * @param {Number} y
 *        The index of the second item.
 */
function swap(ary, x, y) {
  var temp = ary[x];
  ary[x] = ary[y];
  ary[y] = temp;
}
/**
 * Returns a random integer within the range `low .. high` inclusive.
 *
 * @param {Number} low
 *        The lower bound on the range.
 * @param {Number} high
 *        The upper bound on the range.
 */


function randomIntInRange(low, high) {
  return Math.round(low + Math.random() * (high - low));
}
/**
 * The Quick Sort algorithm.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 * @param {Number} p
 *        Start index of the array
 * @param {Number} r
 *        End index of the array
 */


function doQuickSort(ary, comparator, p, r) {
  // If our lower bound is less than our upper bound, we (1) partition the
  // array into two pieces and (2) recurse on each half. If it is not, this is
  // the empty array and our base case.
  if (p < r) {
    // (1) Partitioning.
    //
    // The partitioning chooses a pivot between `p` and `r` and moves all
    // elements that are less than or equal to the pivot to the before it, and
    // all the elements that are greater than it after it. The effect is that
    // once partition is done, the pivot is in the exact place it will be when
    // the array is put in sorted order, and it will not need to be moved
    // again. This runs in O(n) time.
    // Always choose a random pivot so that an input array which is reverse
    // sorted does not cause O(n^2) running time.
    var pivotIndex = randomIntInRange(p, r);
    var i = p - 1;
    swap(ary, pivotIndex, r);
    var pivot = ary[r]; // Immediately after `j` is incremented in this loop, the following hold
    // true:
    //
    //   * Every element in `ary[p .. i]` is less than or equal to the pivot.
    //
    //   * Every element in `ary[i+1 .. j-1]` is greater than the pivot.

    for (var j = p; j < r; j++) {
      if (comparator(ary[j], pivot) <= 0) {
        i += 1;
        swap(ary, i, j);
      }
    }

    swap(ary, i + 1, j);
    var q = i + 1; // (2) Recurse on each half.

    doQuickSort(ary, comparator, p, q - 1);
    doQuickSort(ary, comparator, q + 1, r);
  }
}
/**
 * Sort the given array in-place with the given comparator function.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 */


exports.quickSort = function (ary, comparator) {
  doQuickSort(ary, comparator, 0, ary.length - 1);
};

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */

/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
var SourceMapGenerator = __webpack_require__(62).SourceMapGenerator;

var util = __webpack_require__(8); // Matches a Windows-style `\r\n` newline or a `\n` newline used by all other
// operating systems these days (capturing the result).


var REGEX_NEWLINE = /(\r?\n)/; // Newline character code for charCodeAt() comparisons

var NEWLINE_CODE = 10; // Private symbol for identifying `SourceNode`s when multiple versions of
// the source-map library are loaded. This MUST NOT CHANGE across
// versions!

var isSourceNode = "$$$isSourceNode$$$";
/**
 * SourceNodes provide a way to abstract over interpolating/concatenating
 * snippets of generated JavaScript source code while maintaining the line and
 * column information associated with the original source code.
 *
 * @param aLine The original line number.
 * @param aColumn The original column number.
 * @param aSource The original source's filename.
 * @param aChunks Optional. An array of strings which are snippets of
 *        generated JS, or other SourceNodes.
 * @param aName The original identifier.
 */

function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
  this.children = [];
  this.sourceContents = {};
  this.line = aLine == null ? null : aLine;
  this.column = aColumn == null ? null : aColumn;
  this.source = aSource == null ? null : aSource;
  this.name = aName == null ? null : aName;
  this[isSourceNode] = true;
  if (aChunks != null) this.add(aChunks);
}
/**
 * Creates a SourceNode from generated code and a SourceMapConsumer.
 *
 * @param aGeneratedCode The generated code
 * @param aSourceMapConsumer The SourceMap for the generated code
 * @param aRelativePath Optional. The path that relative sources in the
 *        SourceMapConsumer should be relative to.
 */


SourceNode.fromStringWithSourceMap = function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer, aRelativePath) {
  // The SourceNode we want to fill with the generated code
  // and the SourceMap
  var node = new SourceNode(); // All even indices of this array are one line of the generated code,
  // while all odd indices are the newlines between two adjacent lines
  // (since `REGEX_NEWLINE` captures its match).
  // Processed fragments are accessed by calling `shiftNextLine`.

  var remainingLines = aGeneratedCode.split(REGEX_NEWLINE);
  var remainingLinesIndex = 0;

  var shiftNextLine = function shiftNextLine() {
    var lineContents = getNextLine(); // The last line of a file might not have a newline.

    var newLine = getNextLine() || "";
    return lineContents + newLine;

    function getNextLine() {
      return remainingLinesIndex < remainingLines.length ? remainingLines[remainingLinesIndex++] : undefined;
    }
  }; // We need to remember the position of "remainingLines"


  var lastGeneratedLine = 1,
      lastGeneratedColumn = 0; // The generate SourceNodes we need a code range.
  // To extract it current and last mapping is used.
  // Here we store the last mapping.

  var lastMapping = null;
  aSourceMapConsumer.eachMapping(function (mapping) {
    if (lastMapping !== null) {
      // We add the code from "lastMapping" to "mapping":
      // First check if there is a new line in between.
      if (lastGeneratedLine < mapping.generatedLine) {
        // Associate first line with "lastMapping"
        addMappingWithCode(lastMapping, shiftNextLine());
        lastGeneratedLine++;
        lastGeneratedColumn = 0; // The remaining code is added without mapping
      } else {
        // There is no new line in between.
        // Associate the code between "lastGeneratedColumn" and
        // "mapping.generatedColumn" with "lastMapping"
        var nextLine = remainingLines[remainingLinesIndex] || '';
        var code = nextLine.substr(0, mapping.generatedColumn - lastGeneratedColumn);
        remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn - lastGeneratedColumn);
        lastGeneratedColumn = mapping.generatedColumn;
        addMappingWithCode(lastMapping, code); // No more remaining code, continue

        lastMapping = mapping;
        return;
      }
    } // We add the generated code until the first mapping
    // to the SourceNode without any mapping.
    // Each line is added as separate string.


    while (lastGeneratedLine < mapping.generatedLine) {
      node.add(shiftNextLine());
      lastGeneratedLine++;
    }

    if (lastGeneratedColumn < mapping.generatedColumn) {
      var nextLine = remainingLines[remainingLinesIndex] || '';
      node.add(nextLine.substr(0, mapping.generatedColumn));
      remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn);
      lastGeneratedColumn = mapping.generatedColumn;
    }

    lastMapping = mapping;
  }, this); // We have processed all mappings.

  if (remainingLinesIndex < remainingLines.length) {
    if (lastMapping) {
      // Associate the remaining code in the current line with "lastMapping"
      addMappingWithCode(lastMapping, shiftNextLine());
    } // and add the remaining lines without any mapping


    node.add(remainingLines.splice(remainingLinesIndex).join(""));
  } // Copy sourcesContent into SourceNode


  aSourceMapConsumer.sources.forEach(function (sourceFile) {
    var content = aSourceMapConsumer.sourceContentFor(sourceFile);

    if (content != null) {
      if (aRelativePath != null) {
        sourceFile = util.join(aRelativePath, sourceFile);
      }

      node.setSourceContent(sourceFile, content);
    }
  });
  return node;

  function addMappingWithCode(mapping, code) {
    if (mapping === null || mapping.source === undefined) {
      node.add(code);
    } else {
      var source = aRelativePath ? util.join(aRelativePath, mapping.source) : mapping.source;
      node.add(new SourceNode(mapping.originalLine, mapping.originalColumn, source, code, mapping.name));
    }
  }
};
/**
 * Add a chunk of generated JS to this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */


SourceNode.prototype.add = function SourceNode_add(aChunk) {
  if (Array.isArray(aChunk)) {
    aChunk.forEach(function (chunk) {
      this.add(chunk);
    }, this);
  } else if (aChunk[isSourceNode] || typeof aChunk === "string") {
    if (aChunk) {
      this.children.push(aChunk);
    }
  } else {
    throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk);
  }

  return this;
};
/**
 * Add a chunk of generated JS to the beginning of this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */


SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
  if (Array.isArray(aChunk)) {
    for (var i = aChunk.length - 1; i >= 0; i--) {
      this.prepend(aChunk[i]);
    }
  } else if (aChunk[isSourceNode] || typeof aChunk === "string") {
    this.children.unshift(aChunk);
  } else {
    throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk);
  }

  return this;
};
/**
 * Walk over the tree of JS snippets in this node and its children. The
 * walking function is called once for each snippet of JS and is passed that
 * snippet and the its original associated source's line/column location.
 *
 * @param aFn The traversal function.
 */


SourceNode.prototype.walk = function SourceNode_walk(aFn) {
  var chunk;

  for (var i = 0, len = this.children.length; i < len; i++) {
    chunk = this.children[i];

    if (chunk[isSourceNode]) {
      chunk.walk(aFn);
    } else {
      if (chunk !== '') {
        aFn(chunk, {
          source: this.source,
          line: this.line,
          column: this.column,
          name: this.name
        });
      }
    }
  }
};
/**
 * Like `String.prototype.join` except for SourceNodes. Inserts `aStr` between
 * each of `this.children`.
 *
 * @param aSep The separator.
 */


SourceNode.prototype.join = function SourceNode_join(aSep) {
  var newChildren;
  var i;
  var len = this.children.length;

  if (len > 0) {
    newChildren = [];

    for (i = 0; i < len - 1; i++) {
      newChildren.push(this.children[i]);
      newChildren.push(aSep);
    }

    newChildren.push(this.children[i]);
    this.children = newChildren;
  }

  return this;
};
/**
 * Call String.prototype.replace on the very right-most source snippet. Useful
 * for trimming whitespace from the end of a source node, etc.
 *
 * @param aPattern The pattern to replace.
 * @param aReplacement The thing to replace the pattern with.
 */


SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
  var lastChild = this.children[this.children.length - 1];

  if (lastChild[isSourceNode]) {
    lastChild.replaceRight(aPattern, aReplacement);
  } else if (typeof lastChild === 'string') {
    this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
  } else {
    this.children.push(''.replace(aPattern, aReplacement));
  }

  return this;
};
/**
 * Set the source content for a source file. This will be added to the SourceMapGenerator
 * in the sourcesContent field.
 *
 * @param aSourceFile The filename of the source file
 * @param aSourceContent The content of the source file
 */


SourceNode.prototype.setSourceContent = function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
  this.sourceContents[util.toSetString(aSourceFile)] = aSourceContent;
};
/**
 * Walk over the tree of SourceNodes. The walking function is called for each
 * source file content and is passed the filename and source content.
 *
 * @param aFn The traversal function.
 */


SourceNode.prototype.walkSourceContents = function SourceNode_walkSourceContents(aFn) {
  for (var i = 0, len = this.children.length; i < len; i++) {
    if (this.children[i][isSourceNode]) {
      this.children[i].walkSourceContents(aFn);
    }
  }

  var sources = Object.keys(this.sourceContents);

  for (var i = 0, len = sources.length; i < len; i++) {
    aFn(util.fromSetString(sources[i]), this.sourceContents[sources[i]]);
  }
};
/**
 * Return the string representation of this source node. Walks over the tree
 * and concatenates all the various snippets together to one string.
 */


SourceNode.prototype.toString = function SourceNode_toString() {
  var str = "";
  this.walk(function (chunk) {
    str += chunk;
  });
  return str;
};
/**
 * Returns the string representation of this source node along with a source
 * map.
 */


SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
  var generated = {
    code: "",
    line: 1,
    column: 0
  };
  var map = new SourceMapGenerator(aArgs);
  var sourceMappingActive = false;
  var lastOriginalSource = null;
  var lastOriginalLine = null;
  var lastOriginalColumn = null;
  var lastOriginalName = null;
  this.walk(function (chunk, original) {
    generated.code += chunk;

    if (original.source !== null && original.line !== null && original.column !== null) {
      if (lastOriginalSource !== original.source || lastOriginalLine !== original.line || lastOriginalColumn !== original.column || lastOriginalName !== original.name) {
        map.addMapping({
          source: original.source,
          original: {
            line: original.line,
            column: original.column
          },
          generated: {
            line: generated.line,
            column: generated.column
          },
          name: original.name
        });
      }

      lastOriginalSource = original.source;
      lastOriginalLine = original.line;
      lastOriginalColumn = original.column;
      lastOriginalName = original.name;
      sourceMappingActive = true;
    } else if (sourceMappingActive) {
      map.addMapping({
        generated: {
          line: generated.line,
          column: generated.column
        }
      });
      lastOriginalSource = null;
      sourceMappingActive = false;
    }

    for (var idx = 0, length = chunk.length; idx < length; idx++) {
      if (chunk.charCodeAt(idx) === NEWLINE_CODE) {
        generated.line++;
        generated.column = 0; // Mappings end at eol

        if (idx + 1 === length) {
          lastOriginalSource = null;
          sourceMappingActive = false;
        } else if (sourceMappingActive) {
          map.addMapping({
            source: original.source,
            original: {
              line: original.line,
              column: original.column
            },
            generated: {
              line: generated.line,
              column: generated.column
            },
            name: original.name
          });
        }
      } else {
        generated.column++;
      }
    }
  });
  this.walkSourceContents(function (sourceFile, sourceContent) {
    map.setSourceContent(sourceFile, sourceContent);
  });
  return {
    code: generated.code,
    map: map
  };
};

exports.SourceNode = SourceNode;

/***/ }),
/* 130 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Comment = __webpack_require__(19);

var Parser = __webpack_require__(66);

var NestedDeclaration = __webpack_require__(140);

var scssTokenizer = __webpack_require__(141);

var ScssParser = function (_Parser) {
  _inherits(ScssParser, _Parser);

  function ScssParser() {
    _classCallCheck(this, ScssParser);

    return _possibleConstructorReturn(this, _Parser.apply(this, arguments));
  }

  ScssParser.prototype.createTokenizer = function createTokenizer() {
    this.tokenizer = scssTokenizer(this.input);
  };

  ScssParser.prototype.rule = function rule(tokens) {
    var withColon = false;
    var brackets = 0;
    var value = '';

    for (var _iterator = tokens, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var i = _ref;

      if (withColon) {
        if (i[0] !== 'comment' && i[0] !== '{') {
          value += i[1];
        }
      } else if (i[0] === 'space' && i[1].indexOf('\n') !== -1) {
        break;
      } else if (i[0] === '(') {
        brackets += 1;
      } else if (i[0] === ')') {
        brackets -= 1;
      } else if (brackets === 0 && i[0] === ':') {
        withColon = true;
      }
    }

    if (!withColon || value.trim() === '' || /^[a-zA-Z-:#]/.test(value)) {
      _Parser.prototype.rule.call(this, tokens);
    } else {
      tokens.pop();
      var node = new NestedDeclaration();
      this.init(node);
      var last = tokens[tokens.length - 1];

      if (last[4]) {
        node.source.end = {
          line: last[4],
          column: last[5]
        };
      } else {
        node.source.end = {
          line: last[2],
          column: last[3]
        };
      }

      while (tokens[0][0] !== 'word') {
        node.raws.before += tokens.shift()[1];
      }

      node.source.start = {
        line: tokens[0][2],
        column: tokens[0][3]
      };
      node.prop = '';

      while (tokens.length) {
        var type = tokens[0][0];

        if (type === ':' || type === 'space' || type === 'comment') {
          break;
        }

        node.prop += tokens.shift()[1];
      }

      node.raws.between = '';
      var token = void 0;

      while (tokens.length) {
        token = tokens.shift();

        if (token[0] === ':') {
          node.raws.between += token[1];
          break;
        } else {
          node.raws.between += token[1];
        }
      }

      if (node.prop[0] === '_' || node.prop[0] === '*') {
        node.raws.before += node.prop[0];
        node.prop = node.prop.slice(1);
      }

      node.raws.between += this.spacesAndCommentsFromStart(tokens);
      this.precheckMissedSemicolon(tokens);

      for (var _i2 = tokens.length - 1; _i2 > 0; _i2--) {
        token = tokens[_i2];

        if (token[1] === '!important') {
          node.important = true;
          var string = this.stringFrom(tokens, _i2);
          string = this.spacesFromEnd(tokens) + string;

          if (string !== ' !important') {
            node.raws.important = string;
          }

          break;
        } else if (token[1] === 'important') {
          var cache = tokens.slice(0);
          var str = '';

          for (var j = _i2; j > 0; j--) {
            var _type = cache[j][0];

            if (str.trim().indexOf('!') === 0 && _type !== 'space') {
              break;
            }

            str = cache.pop()[1] + str;
          }

          if (str.trim().indexOf('!') === 0) {
            node.important = true;
            node.raws.important = str;
            tokens = cache;
          }
        }

        if (token[0] !== 'space' && token[0] !== 'comment') {
          break;
        }
      }

      this.raw(node, 'value', tokens);

      if (node.value.indexOf(':') !== -1) {
        this.checkMissedSemicolon(tokens);
      }

      this.current = node;
    }
  };

  ScssParser.prototype.comment = function comment(token) {
    if (token[6] === 'inline') {
      var node = new Comment();
      this.init(node, token[2], token[3]);
      node.raws.inline = true;
      node.source.end = {
        line: token[4],
        column: token[5]
      };
      var text = token[1].slice(2);

      if (/^\s*$/.test(text)) {
        node.text = '';
        node.raws.left = text;
        node.raws.right = '';
      } else {
        var match = text.match(/^(\s*)([^]*[^\s])(\s*)$/);
        var fixed = match[2].replace(/(\*\/|\/\*)/g, '*//*');
        node.text = fixed;
        node.raws.left = match[1];
        node.raws.right = match[3];
        node.raws.text = match[2];
      }
    } else {
      _Parser.prototype.comment.call(this, token);
    }
  };

  ScssParser.prototype.raw = function raw(node, prop, tokens) {
    _Parser.prototype.raw.call(this, node, prop, tokens);

    if (node.raws[prop]) {
      var scss = node.raws[prop].raw;
      node.raws[prop].raw = tokens.reduce(function (all, i) {
        if (i[0] === 'comment' && i[6] === 'inline') {
          var text = i[1].slice(2).replace(/(\*\/|\/\*)/g, '*//*');
          return all + '/*' + text + '*/';
        } else {
          return all + i[1];
        }
      }, '');

      if (scss !== node.raws[prop].raw) {
        node.raws[prop].scss = scss;
      }
    }
  };

  return ScssParser;
}(Parser);

module.exports = ScssParser;

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = tokenizer;
var SINGLE_QUOTE = '\''.charCodeAt(0);
var DOUBLE_QUOTE = '"'.charCodeAt(0);
var BACKSLASH = '\\'.charCodeAt(0);
var SLASH = '/'.charCodeAt(0);
var NEWLINE = '\n'.charCodeAt(0);
var SPACE = ' '.charCodeAt(0);
var FEED = '\f'.charCodeAt(0);
var TAB = '\t'.charCodeAt(0);
var CR = '\r'.charCodeAt(0);
var OPEN_SQUARE = '['.charCodeAt(0);
var CLOSE_SQUARE = ']'.charCodeAt(0);
var OPEN_PARENTHESES = '('.charCodeAt(0);
var CLOSE_PARENTHESES = ')'.charCodeAt(0);
var OPEN_CURLY = '{'.charCodeAt(0);
var CLOSE_CURLY = '}'.charCodeAt(0);
var SEMICOLON = ';'.charCodeAt(0);
var ASTERISK = '*'.charCodeAt(0);
var COLON = ':'.charCodeAt(0);
var AT = '@'.charCodeAt(0);
var RE_AT_END = /[ \n\t\r\f{}()'"\\;/[\]#]/g;
var RE_WORD_END = /[ \n\t\r\f(){}:;@!'"\\\][#]|\/(?=\*)/g;
var RE_BAD_BRACKET = /.[\\/("'\n]/;
var RE_HEX_ESCAPE = /[a-f0-9]/i;

function tokenizer(input, options) {
  if (options === void 0) {
    options = {};
  }

  var css = input.css.valueOf();
  var ignore = options.ignoreErrors;
  var code, next, quote, lines, last, content, escape;
  var nextLine, nextOffset, escaped, escapePos, prev, n, currentToken;
  var length = css.length;
  var offset = -1;
  var line = 1;
  var pos = 0;
  var buffer = [];
  var returned = [];

  function unclosed(what) {
    throw input.error('Unclosed ' + what, line, pos - offset);
  }

  function endOfFile() {
    return returned.length === 0 && pos >= length;
  }

  function nextToken(opts) {
    if (returned.length) return returned.pop();
    if (pos >= length) return;
    var ignoreUnclosed = opts ? opts.ignoreUnclosed : false;
    code = css.charCodeAt(pos);

    if (code === NEWLINE || code === FEED || code === CR && css.charCodeAt(pos + 1) !== NEWLINE) {
      offset = pos;
      line += 1;
    }

    switch (code) {
      case NEWLINE:
      case SPACE:
      case TAB:
      case CR:
      case FEED:
        next = pos;

        do {
          next += 1;
          code = css.charCodeAt(next);

          if (code === NEWLINE) {
            offset = next;
            line += 1;
          }
        } while (code === SPACE || code === NEWLINE || code === TAB || code === CR || code === FEED);

        currentToken = ['space', css.slice(pos, next)];
        pos = next - 1;
        break;

      case OPEN_SQUARE:
      case CLOSE_SQUARE:
      case OPEN_CURLY:
      case CLOSE_CURLY:
      case COLON:
      case SEMICOLON:
      case CLOSE_PARENTHESES:
        var controlChar = String.fromCharCode(code);
        currentToken = [controlChar, controlChar, line, pos - offset];
        break;

      case OPEN_PARENTHESES:
        prev = buffer.length ? buffer.pop()[1] : '';
        n = css.charCodeAt(pos + 1);

        if (prev === 'url' && n !== SINGLE_QUOTE && n !== DOUBLE_QUOTE && n !== SPACE && n !== NEWLINE && n !== TAB && n !== FEED && n !== CR) {
          next = pos;

          do {
            escaped = false;
            next = css.indexOf(')', next + 1);

            if (next === -1) {
              if (ignore || ignoreUnclosed) {
                next = pos;
                break;
              } else {
                unclosed('bracket');
              }
            }

            escapePos = next;

            while (css.charCodeAt(escapePos - 1) === BACKSLASH) {
              escapePos -= 1;
              escaped = !escaped;
            }
          } while (escaped);

          currentToken = ['brackets', css.slice(pos, next + 1), line, pos - offset, line, next - offset];
          pos = next;
        } else {
          next = css.indexOf(')', pos + 1);
          content = css.slice(pos, next + 1);

          if (next === -1 || RE_BAD_BRACKET.test(content)) {
            currentToken = ['(', '(', line, pos - offset];
          } else {
            currentToken = ['brackets', content, line, pos - offset, line, next - offset];
            pos = next;
          }
        }

        break;

      case SINGLE_QUOTE:
      case DOUBLE_QUOTE:
        quote = code === SINGLE_QUOTE ? '\'' : '"';
        next = pos;

        do {
          escaped = false;
          next = css.indexOf(quote, next + 1);

          if (next === -1) {
            if (ignore || ignoreUnclosed) {
              next = pos + 1;
              break;
            } else {
              unclosed('string');
            }
          }

          escapePos = next;

          while (css.charCodeAt(escapePos - 1) === BACKSLASH) {
            escapePos -= 1;
            escaped = !escaped;
          }
        } while (escaped);

        content = css.slice(pos, next + 1);
        lines = content.split('\n');
        last = lines.length - 1;

        if (last > 0) {
          nextLine = line + last;
          nextOffset = next - lines[last].length;
        } else {
          nextLine = line;
          nextOffset = offset;
        }

        currentToken = ['string', css.slice(pos, next + 1), line, pos - offset, nextLine, next - nextOffset];
        offset = nextOffset;
        line = nextLine;
        pos = next;
        break;

      case AT:
        RE_AT_END.lastIndex = pos + 1;
        RE_AT_END.test(css);

        if (RE_AT_END.lastIndex === 0) {
          next = css.length - 1;
        } else {
          next = RE_AT_END.lastIndex - 2;
        }

        currentToken = ['at-word', css.slice(pos, next + 1), line, pos - offset, line, next - offset];
        pos = next;
        break;

      case BACKSLASH:
        next = pos;
        escape = true;

        while (css.charCodeAt(next + 1) === BACKSLASH) {
          next += 1;
          escape = !escape;
        }

        code = css.charCodeAt(next + 1);

        if (escape && code !== SLASH && code !== SPACE && code !== NEWLINE && code !== TAB && code !== CR && code !== FEED) {
          next += 1;

          if (RE_HEX_ESCAPE.test(css.charAt(next))) {
            while (RE_HEX_ESCAPE.test(css.charAt(next + 1))) {
              next += 1;
            }

            if (css.charCodeAt(next + 1) === SPACE) {
              next += 1;
            }
          }
        }

        currentToken = ['word', css.slice(pos, next + 1), line, pos - offset, line, next - offset];
        pos = next;
        break;

      default:
        if (code === SLASH && css.charCodeAt(pos + 1) === ASTERISK) {
          next = css.indexOf('*/', pos + 2) + 1;

          if (next === 0) {
            if (ignore || ignoreUnclosed) {
              next = css.length;
            } else {
              unclosed('comment');
            }
          }

          content = css.slice(pos, next + 1);
          lines = content.split('\n');
          last = lines.length - 1;

          if (last > 0) {
            nextLine = line + last;
            nextOffset = next - lines[last].length;
          } else {
            nextLine = line;
            nextOffset = offset;
          }

          currentToken = ['comment', content, line, pos - offset, nextLine, next - nextOffset];
          offset = nextOffset;
          line = nextLine;
          pos = next;
        } else {
          RE_WORD_END.lastIndex = pos + 1;
          RE_WORD_END.test(css);

          if (RE_WORD_END.lastIndex === 0) {
            next = css.length - 1;
          } else {
            next = RE_WORD_END.lastIndex - 2;
          }

          currentToken = ['word', css.slice(pos, next + 1), line, pos - offset, line, next - offset];
          buffer.push(currentToken);
          pos = next;
        }

        break;
    }

    pos++;
    return currentToken;
  }

  function back(token) {
    returned.push(token);
  }

  return {
    back: back,
    nextToken: nextToken,
    endOfFile: endOfFile
  };
}

module.exports = exports.default;

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
/**
 * Contains helpers for safely splitting lists of CSS values,
 * preserving parentheses and quotes.
 *
 * @example
 * const list = postcss.list
 *
 * @namespace list
 */

var list = {
  split: function split(string, separators, last) {
    var array = [];
    var current = '';
    var split = false;
    var func = 0;
    var quote = false;
    var escape = false;

    for (var i = 0; i < string.length; i++) {
      var letter = string[i];

      if (quote) {
        if (escape) {
          escape = false;
        } else if (letter === '\\') {
          escape = true;
        } else if (letter === quote) {
          quote = false;
        }
      } else if (letter === '"' || letter === '\'') {
        quote = letter;
      } else if (letter === '(') {
        func += 1;
      } else if (letter === ')') {
        if (func > 0) func -= 1;
      } else if (func === 0) {
        if (separators.indexOf(letter) !== -1) split = true;
      }

      if (split) {
        if (current !== '') array.push(current.trim());
        current = '';
        split = false;
      } else {
        current += letter;
      }
    }

    if (last || current !== '') array.push(current.trim());
    return array;
  },

  /**
   * Safely splits space-separated values (such as those for `background`,
   * `border-radius`, and other shorthand properties).
   *
   * @param {string} string Space-separated values.
   *
   * @return {string[]} Split values.
   *
   * @example
   * postcss.list.space('1px calc(10% + 1px)') //=> ['1px', 'calc(10% + 1px)']
   */
  space: function space(string) {
    var spaces = [' ', '\n', '\t'];
    return list.split(string, spaces);
  },

  /**
   * Safely splits comma-separated values (such as those for `transition-*`
   * and `background` properties).
   *
   * @param {string} string Comma-separated values.
   *
   * @return {string[]} Split values.
   *
   * @example
   * postcss.list.comma('black, linear-gradient(white, black)')
   * //=> ['black', 'linear-gradient(white, black)']
   */
  comma: function comma(string) {
    return list.split(string, [','], true);
  }
};
var _default = list;
exports.default = _default;
module.exports = exports.default;

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _container = _interopRequireDefault(__webpack_require__(13));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
/**
 * Represents a CSS file and contains all its parsed nodes.
 *
 * @extends Container
 *
 * @example
 * const root = postcss.parse('a{color:black} b{z-index:2}')
 * root.type         //=> 'root'
 * root.nodes.length //=> 2
 */


var Root =
/*#__PURE__*/
function (_Container) {
  _inheritsLoose(Root, _Container);

  function Root(defaults) {
    var _this;

    _this = _Container.call(this, defaults) || this;
    _this.type = 'root';
    if (!_this.nodes) _this.nodes = [];
    return _this;
  }

  var _proto = Root.prototype;

  _proto.removeChild = function removeChild(child, ignore) {
    var index = this.index(child);

    if (!ignore && index === 0 && this.nodes.length > 1) {
      this.nodes[1].raws.before = this.nodes[index].raws.before;
    }

    return _Container.prototype.removeChild.call(this, child);
  };

  _proto.normalize = function normalize(child, sample, type) {
    var nodes = _Container.prototype.normalize.call(this, child);

    if (sample) {
      if (type === 'prepend') {
        if (this.nodes.length > 1) {
          sample.raws.before = this.nodes[1].raws.before;
        } else {
          delete sample.raws.before;
        }
      } else if (this.first !== sample) {
        for (var _iterator = nodes, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
          var _ref;

          if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
          }

          var node = _ref;
          node.raws.before = sample.raws.before;
        }
      }
    }

    return nodes;
  };
  /**
   * Returns a {@link Result} instance representing the root’s CSS.
   *
   * @param {processOptions} [opts] Options with only `to` and `map` keys.
   *
   * @return {Result} Result with current root’s CSS.
   *
   * @example
   * const root1 = postcss.parse(css1, { from: 'a.css' })
   * const root2 = postcss.parse(css2, { from: 'b.css' })
   * root1.append(root2)
   * const result = root1.toResult({ to: 'all.css', map: true })
   */


  _proto.toResult = function toResult(opts) {
    if (opts === void 0) {
      opts = {};
    }

    var LazyResult = __webpack_require__(71);

    var Processor = __webpack_require__(139);

    var lazy = new LazyResult(new Processor(), this, opts);
    return lazy.stringify();
  };
  /**
   * @memberof Root#
   * @member {object} raws Information to generate byte-to-byte equal
   *                       node string as it was in the origin input.
   *
   * Every parser saves its own properties,
   * but the default CSS parser uses:
   *
   * * `after`: the space symbols after the last child to the end of file.
   * * `semicolon`: is the last child has an (optional) semicolon.
   *
   * @example
   * postcss.parse('a {}\n').raws //=> { after: '\n' }
   * postcss.parse('a {}').raws   //=> { after: '' }
   */


  return Root;
}(_container.default);

var _default = Root;
exports.default = _default;
module.exports = exports.default;

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

exports.__esModule = true;
exports.default = void 0;

var _sourceMap = _interopRequireDefault(__webpack_require__(61));

var _path = _interopRequireDefault(__webpack_require__(6));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var MapGenerator =
/*#__PURE__*/
function () {
  function MapGenerator(stringify, root, opts) {
    this.stringify = stringify;
    this.mapOpts = opts.map || {};
    this.root = root;
    this.opts = opts;
  }

  var _proto = MapGenerator.prototype;

  _proto.isMap = function isMap() {
    if (typeof this.opts.map !== 'undefined') {
      return !!this.opts.map;
    }

    return this.previous().length > 0;
  };

  _proto.previous = function previous() {
    var _this = this;

    if (!this.previousMaps) {
      this.previousMaps = [];
      this.root.walk(function (node) {
        if (node.source && node.source.input.map) {
          var map = node.source.input.map;

          if (_this.previousMaps.indexOf(map) === -1) {
            _this.previousMaps.push(map);
          }
        }
      });
    }

    return this.previousMaps;
  };

  _proto.isInline = function isInline() {
    if (typeof this.mapOpts.inline !== 'undefined') {
      return this.mapOpts.inline;
    }

    var annotation = this.mapOpts.annotation;

    if (typeof annotation !== 'undefined' && annotation !== true) {
      return false;
    }

    if (this.previous().length) {
      return this.previous().some(function (i) {
        return i.inline;
      });
    }

    return true;
  };

  _proto.isSourcesContent = function isSourcesContent() {
    if (typeof this.mapOpts.sourcesContent !== 'undefined') {
      return this.mapOpts.sourcesContent;
    }

    if (this.previous().length) {
      return this.previous().some(function (i) {
        return i.withContent();
      });
    }

    return true;
  };

  _proto.clearAnnotation = function clearAnnotation() {
    if (this.mapOpts.annotation === false) return;
    var node;

    for (var i = this.root.nodes.length - 1; i >= 0; i--) {
      node = this.root.nodes[i];
      if (node.type !== 'comment') continue;

      if (node.text.indexOf('# sourceMappingURL=') === 0) {
        this.root.removeChild(i);
      }
    }
  };

  _proto.setSourcesContent = function setSourcesContent() {
    var _this2 = this;

    var already = {};
    this.root.walk(function (node) {
      if (node.source) {
        var from = node.source.input.from;

        if (from && !already[from]) {
          already[from] = true;

          var relative = _this2.relative(from);

          _this2.map.setSourceContent(relative, node.source.input.css);
        }
      }
    });
  };

  _proto.applyPrevMaps = function applyPrevMaps() {
    for (var _iterator = this.previous(), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var prev = _ref;
      var from = this.relative(prev.file);

      var root = prev.root || _path.default.dirname(prev.file);

      var map = void 0;

      if (this.mapOpts.sourcesContent === false) {
        map = new _sourceMap.default.SourceMapConsumer(prev.text);

        if (map.sourcesContent) {
          map.sourcesContent = map.sourcesContent.map(function () {
            return null;
          });
        }
      } else {
        map = prev.consumer();
      }

      this.map.applySourceMap(map, from, this.relative(root));
    }
  };

  _proto.isAnnotation = function isAnnotation() {
    if (this.isInline()) {
      return true;
    }

    if (typeof this.mapOpts.annotation !== 'undefined') {
      return this.mapOpts.annotation;
    }

    if (this.previous().length) {
      return this.previous().some(function (i) {
        return i.annotation;
      });
    }

    return true;
  };

  _proto.toBase64 = function toBase64(str) {
    if (Buffer) {
      return Buffer.from(str).toString('base64');
    }

    return window.btoa(unescape(encodeURIComponent(str)));
  };

  _proto.addAnnotation = function addAnnotation() {
    var content;

    if (this.isInline()) {
      content = 'data:application/json;base64,' + this.toBase64(this.map.toString());
    } else if (typeof this.mapOpts.annotation === 'string') {
      content = this.mapOpts.annotation;
    } else {
      content = this.outputFile() + '.map';
    }

    var eol = '\n';
    if (this.css.indexOf('\r\n') !== -1) eol = '\r\n';
    this.css += eol + '/*# sourceMappingURL=' + content + ' */';
  };

  _proto.outputFile = function outputFile() {
    if (this.opts.to) {
      return this.relative(this.opts.to);
    }

    if (this.opts.from) {
      return this.relative(this.opts.from);
    }

    return 'to.css';
  };

  _proto.generateMap = function generateMap() {
    this.generateString();
    if (this.isSourcesContent()) this.setSourcesContent();
    if (this.previous().length > 0) this.applyPrevMaps();
    if (this.isAnnotation()) this.addAnnotation();

    if (this.isInline()) {
      return [this.css];
    }

    return [this.css, this.map];
  };

  _proto.relative = function relative(file) {
    if (file.indexOf('<') === 0) return file;
    if (/^\w+:\/\//.test(file)) return file;
    var from = this.opts.to ? _path.default.dirname(this.opts.to) : '.';

    if (typeof this.mapOpts.annotation === 'string') {
      from = _path.default.dirname(_path.default.resolve(from, this.mapOpts.annotation));
    }

    file = _path.default.relative(from, file);

    if (_path.default.sep === '\\') {
      return file.replace(/\\/g, '/');
    }

    return file;
  };

  _proto.sourcePath = function sourcePath(node) {
    if (this.mapOpts.from) {
      return this.mapOpts.from;
    }

    return this.relative(node.source.input.from);
  };

  _proto.generateString = function generateString() {
    var _this3 = this;

    this.css = '';
    this.map = new _sourceMap.default.SourceMapGenerator({
      file: this.outputFile()
    });
    var line = 1;
    var column = 1;
    var lines, last;
    this.stringify(this.root, function (str, node, type) {
      _this3.css += str;

      if (node && type !== 'end') {
        if (node.source && node.source.start) {
          _this3.map.addMapping({
            source: _this3.sourcePath(node),
            generated: {
              line: line,
              column: column - 1
            },
            original: {
              line: node.source.start.line,
              column: node.source.start.column - 1
            }
          });
        } else {
          _this3.map.addMapping({
            source: '<no source>',
            original: {
              line: 1,
              column: 0
            },
            generated: {
              line: line,
              column: column - 1
            }
          });
        }
      }

      lines = str.match(/\n/g);

      if (lines) {
        line += lines.length;
        last = str.lastIndexOf('\n');
        column = str.length - last;
      } else {
        column += str.length;
      }

      if (node && type !== 'start') {
        if (node.source && node.source.end) {
          _this3.map.addMapping({
            source: _this3.sourcePath(node),
            generated: {
              line: line,
              column: column - 1
            },
            original: {
              line: node.source.end.line,
              column: node.source.end.column
            }
          });
        } else {
          _this3.map.addMapping({
            source: '<no source>',
            original: {
              line: 1,
              column: 0
            },
            generated: {
              line: line,
              column: column - 1
            }
          });
        }
      }
    });
  };

  _proto.generate = function generate() {
    this.clearAnnotation();

    if (this.isMap()) {
      return this.generateMap();
    }

    var result = '';
    this.stringify(this.root, function (i) {
      result += i;
    });
    return [result];
  };

  return MapGenerator;
}();

var _default = MapGenerator;
exports.default = _default;
module.exports = exports.default;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18).Buffer))

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = warnOnce;
var printed = {};

function warnOnce(message) {
  if (printed[message]) return;
  printed[message] = true;

  if (typeof console !== 'undefined' && console.warn) {
    console.warn(message);
  }
}

module.exports = exports.default;

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _warning = _interopRequireDefault(__webpack_require__(138));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
/**
 * Provides the result of the PostCSS transformations.
 *
 * A Result instance is returned by {@link LazyResult#then}
 * or {@link Root#toResult} methods.
 *
 * @example
 * postcss([autoprefixer]).process(css).then(result => {
 *  console.log(result.css)
 * })
 *
 * @example
 * const result2 = postcss.parse(css).toResult()
 */


var Result =
/*#__PURE__*/
function () {
  /**
   * @param {Processor} processor Processor used for this transformation.
   * @param {Root}      root      Root node after all transformations.
   * @param {processOptions} opts Options from the {@link Processor#process}
   *                              or {@link Root#toResult}.
   */
  function Result(processor, root, opts) {
    /**
     * The Processor instance used for this transformation.
     *
     * @type {Processor}
     *
     * @example
     * for (const plugin of result.processor.plugins) {
     *   if (plugin.postcssPlugin === 'postcss-bad') {
     *     throw 'postcss-good is incompatible with postcss-bad'
     *   }
     * })
     */
    this.processor = processor;
    /**
     * Contains messages from plugins (e.g., warnings or custom messages).
     * Each message should have type and plugin properties.
     *
     * @type {Message[]}
     *
     * @example
     * postcss.plugin('postcss-min-browser', () => {
     *   return (root, result) => {
     *     const browsers = detectMinBrowsersByCanIUse(root)
     *     result.messages.push({
     *       type: 'min-browser',
     *       plugin: 'postcss-min-browser',
     *       browsers
     *     })
     *   }
     * })
     */

    this.messages = [];
    /**
     * Root node after all transformations.
     *
     * @type {Root}
     *
     * @example
     * root.toResult().root === root
     */

    this.root = root;
    /**
     * Options from the {@link Processor#process} or {@link Root#toResult} call
     * that produced this Result instance.
     *
     * @type {processOptions}
     *
     * @example
     * root.toResult(opts).opts === opts
     */

    this.opts = opts;
    /**
     * A CSS string representing of {@link Result#root}.
     *
     * @type {string}
     *
     * @example
     * postcss.parse('a{}').toResult().css //=> "a{}"
     */

    this.css = undefined;
    /**
     * An instance of `SourceMapGenerator` class from the `source-map` library,
     * representing changes to the {@link Result#root} instance.
     *
     * @type {SourceMapGenerator}
     *
     * @example
     * result.map.toJSON() //=> { version: 3, file: 'a.css', … }
     *
     * @example
     * if (result.map) {
     *   fs.writeFileSync(result.opts.to + '.map', result.map.toString())
     * }
     */

    this.map = undefined;
  }
  /**
   * Returns for @{link Result#css} content.
   *
   * @example
   * result + '' === result.css
   *
   * @return {string} String representing of {@link Result#root}.
   */


  var _proto = Result.prototype;

  _proto.toString = function toString() {
    return this.css;
  };
  /**
   * Creates an instance of {@link Warning} and adds it
   * to {@link Result#messages}.
   *
   * @param {string} text        Warning message.
   * @param {Object} [opts]      Warning options.
   * @param {Node}   opts.node   CSS node that caused the warning.
   * @param {string} opts.word   Word in CSS source that caused the warning.
   * @param {number} opts.index  Index in CSS node string that caused
   *                             the warning.
   * @param {string} opts.plugin Name of the plugin that created
   *                             this warning. {@link Result#warn} fills
   *                             this property automatically.
   *
   * @return {Warning} Created warning.
   */


  _proto.warn = function warn(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!opts.plugin) {
      if (this.lastPlugin && this.lastPlugin.postcssPlugin) {
        opts.plugin = this.lastPlugin.postcssPlugin;
      }
    }

    var warning = new _warning.default(text, opts);
    this.messages.push(warning);
    return warning;
  };
  /**
     * Returns warnings from plugins. Filters {@link Warning} instances
     * from {@link Result#messages}.
     *
     * @example
     * result.warnings().forEach(warn => {
     *   console.warn(warn.toString())
     * })
     *
     * @return {Warning[]} Warnings from plugins.
     */


  _proto.warnings = function warnings() {
    return this.messages.filter(function (i) {
      return i.type === 'warning';
    });
  };
  /**
   * An alias for the {@link Result#css} property.
   * Use it with syntaxes that generate non-CSS output.
   *
   * @type {string}
   *
   * @example
   * result.css === result.content
   */


  _createClass(Result, [{
    key: "content",
    get: function get() {
      return this.css;
    }
  }]);

  return Result;
}();

var _default = Result;
/**
 * @typedef  {object} Message
 * @property {string} type   Message type.
 * @property {string} plugin Source PostCSS plugin name.
 */

exports.default = _default;
module.exports = exports.default;

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;
/**
 * Represents a plugin’s warning. It can be created using {@link Node#warn}.
 *
 * @example
 * if (decl.important) {
 *   decl.warn(result, 'Avoid !important', { word: '!important' })
 * }
 */

var Warning =
/*#__PURE__*/
function () {
  /**
   * @param {string} text        Warning message.
   * @param {Object} [opts]      Warning options.
   * @param {Node}   opts.node   CSS node that caused the warning.
   * @param {string} opts.word   Word in CSS source that caused the warning.
   * @param {number} opts.index  Index in CSS node string that caused
   *                             the warning.
   * @param {string} opts.plugin Name of the plugin that created
   *                             this warning. {@link Result#warn} fills
   *                             this property automatically.
   */
  function Warning(text, opts) {
    if (opts === void 0) {
      opts = {};
    }
    /**
     * Type to filter warnings from {@link Result#messages}.
     * Always equal to `"warning"`.
     *
     * @type {string}
     *
     * @example
     * const nonWarning = result.messages.filter(i => i.type !== 'warning')
     */


    this.type = 'warning';
    /**
     * The warning message.
     *
     * @type {string}
     *
     * @example
     * warning.text //=> 'Try to avoid !important'
     */

    this.text = text;

    if (opts.node && opts.node.source) {
      var pos = opts.node.positionBy(opts);
      /**
       * Line in the input file with this warning’s source.
       * @type {number}
       *
       * @example
       * warning.line //=> 5
       */

      this.line = pos.line;
      /**
       * Column in the input file with this warning’s source.
       *
       * @type {number}
       *
       * @example
       * warning.column //=> 6
       */

      this.column = pos.column;
    }

    for (var opt in opts) {
      this[opt] = opts[opt];
    }
  }
  /**
   * Returns a warning position and message.
   *
   * @example
   * warning.toString() //=> 'postcss-lint:a.css:10:14: Avoid !important'
   *
   * @return {string} Warning position and message.
   */


  var _proto = Warning.prototype;

  _proto.toString = function toString() {
    if (this.node) {
      return this.node.error(this.text, {
        plugin: this.plugin,
        index: this.index,
        word: this.word
      }).message;
    }

    if (this.plugin) {
      return this.plugin + ': ' + this.text;
    }

    return this.text;
  };
  /**
   * @memberof Warning#
   * @member {string} plugin The name of the plugin that created
   *                         it will fill this property automatically.
   *                         this warning. When you call {@link Node#warn}
   *
   * @example
   * warning.plugin //=> 'postcss-important'
   */

  /**
   * @memberof Warning#
   * @member {Node} node Contains the CSS node that caused the warning.
   *
   * @example
   * warning.node.toString() //=> 'color: white !important'
   */


  return Warning;
}();

var _default = Warning;
exports.default = _default;
module.exports = exports.default;

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.__esModule = true;
exports.default = void 0;

var _lazyResult = _interopRequireDefault(__webpack_require__(71));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/**
 * Contains plugins to process CSS. Create one `Processor` instance,
 * initialize its plugins, and then use that instance on numerous CSS files.
 *
 * @example
 * const processor = postcss([autoprefixer, precss])
 * processor.process(css1).then(result => console.log(result.css))
 * processor.process(css2).then(result => console.log(result.css))
 */


var Processor =
/*#__PURE__*/
function () {
  /**
   * @param {Array.<Plugin|pluginFunction>|Processor} plugins PostCSS plugins.
   *        See {@link Processor#use} for plugin format.
   */
  function Processor(plugins) {
    if (plugins === void 0) {
      plugins = [];
    }
    /**
     * Current PostCSS version.
     *
     * @type {string}
     *
     * @example
     * if (result.processor.version.split('.')[0] !== '6') {
     *   throw new Error('This plugin works only with PostCSS 6')
     * }
     */


    this.version = '7.0.5';
    /**
     * Plugins added to this processor.
     *
     * @type {pluginFunction[]}
     *
     * @example
     * const processor = postcss([autoprefixer, precss])
     * processor.plugins.length //=> 2
     */

    this.plugins = this.normalize(plugins);
  }
  /**
   * Adds a plugin to be used as a CSS processor.
   *
   * PostCSS plugin can be in 4 formats:
   * * A plugin created by {@link postcss.plugin} method.
   * * A function. PostCSS will pass the function a @{link Root}
   *   as the first argument and current {@link Result} instance
   *   as the second.
   * * An object with a `postcss` method. PostCSS will use that method
   *   as described in #2.
   * * Another {@link Processor} instance. PostCSS will copy plugins
   *   from that instance into this one.
   *
   * Plugins can also be added by passing them as arguments when creating
   * a `postcss` instance (see [`postcss(plugins)`]).
   *
   * Asynchronous plugins should return a `Promise` instance.
   *
   * @param {Plugin|pluginFunction|Processor} plugin PostCSS plugin
   *                                                 or {@link Processor}
   *                                                 with plugins.
   *
   * @example
   * const processor = postcss()
   *   .use(autoprefixer)
   *   .use(precss)
   *
   * @return {Processes} Current processor to make methods chain.
   */


  var _proto = Processor.prototype;

  _proto.use = function use(plugin) {
    this.plugins = this.plugins.concat(this.normalize([plugin]));
    return this;
  };
  /**
   * Parses source CSS and returns a {@link LazyResult} Promise proxy.
   * Because some plugins can be asynchronous it doesn’t make
   * any transformations. Transformations will be applied
   * in the {@link LazyResult} methods.
   *
   * @param {string|toString|Result} css String with input CSS or any object
   *                                     with a `toString()` method,
   *                                     like a Buffer. Optionally, send
   *                                     a {@link Result} instance
   *                                     and the processor will take
   *                                     the {@link Root} from it.
   * @param {processOptions} [opts]      Options.
   *
   * @return {LazyResult} Promise proxy.
   *
   * @example
   * processor.process(css, { from: 'a.css', to: 'a.out.css' })
   *   .then(result => {
   *      console.log(result.css)
   *   })
   */


  _proto.process = function (_process) {
    function process(_x) {
      return _process.apply(this, arguments);
    }

    process.toString = function () {
      return _process.toString();
    };

    return process;
  }(function (css, opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (this.plugins.length === 0 && opts.parser === opts.stringifier) {
      if (false) {
        if (typeof console !== 'undefined' && console.warn) {
          console.warn('You did not set any plugins, parser, or stringifier. ' + 'Right now, PostCSS does nothing. Pick plugins for your case ' + 'on https://www.postcss.parts/ and use them in postcss.config.js.');
        }
      }
    }

    return new _lazyResult.default(this, css, opts);
  });

  _proto.normalize = function normalize(plugins) {
    var normalized = [];

    for (var _iterator = plugins, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var i = _ref;
      if (i.postcss) i = i.postcss;

      if (_typeof(i) === 'object' && Array.isArray(i.plugins)) {
        normalized = normalized.concat(i.plugins);
      } else if (typeof i === 'function') {
        normalized.push(i);
      } else if (_typeof(i) === 'object' && (i.parse || i.stringify)) {
        if (false) {
          throw new Error('PostCSS syntaxes cannot be used as plugins. Instead, please use ' + 'one of the syntax/parser/stringifier options as outlined ' + 'in your PostCSS runner documentation.');
        }
      } else {
        throw new Error(i + ' is not a PostCSS plugin');
      }
    }

    return normalized;
  };

  return Processor;
}();

var _default = Processor;
/**
 * @callback builder
 * @param {string} part          Part of generated CSS connected to this node.
 * @param {Node}   node          AST node.
 * @param {"start"|"end"} [type] Node’s part type.
 */

/**
 * @callback parser
 *
 * @param {string|toString} css   String with input CSS or any object
 *                                with toString() method, like a Buffer.
 * @param {processOptions} [opts] Options with only `from` and `map` keys.
 *
 * @return {Root} PostCSS AST
 */

/**
 * @callback stringifier
 *
 * @param {Node} node       Start node for stringifing. Usually {@link Root}.
 * @param {builder} builder Function to concatenate CSS from node’s parts
 *                          or generate string and source map.
 *
 * @return {void}
 */

/**
 * @typedef {object} syntax
 * @property {parser} parse          Function to generate AST by string.
 * @property {stringifier} stringify Function to generate string by AST.
 */

/**
 * @typedef {object} toString
 * @property {function} toString
 */

/**
 * @callback pluginFunction
 * @param {Root} root     Parsed input CSS.
 * @param {Result} result Result to set warnings or check other plugins.
 */

/**
 * @typedef {object} Plugin
 * @property {function} postcss PostCSS plugin function.
 */

/**
 * @typedef {object} processOptions
 * @property {string} from             The path of the CSS source file.
 *                                     You should always set `from`,
 *                                     because it is used in source map
 *                                     generation and syntax error messages.
 * @property {string} to               The path where you’ll put the output
 *                                     CSS file. You should always set `to`
 *                                     to generate correct source maps.
 * @property {parser} parser           Function to generate AST by string.
 * @property {stringifier} stringifier Class to generate string by AST.
 * @property {syntax} syntax           Object with `parse` and `stringify`.
 * @property {object} map              Source map options.
 * @property {boolean} map.inline                    Does source map should
 *                                                   be embedded in the output
 *                                                   CSS as a base64-encoded
 *                                                   comment.
 * @property {string|object|false|function} map.prev Source map content
 *                                                   from a previous
 *                                                   processing step
 *                                                   (for example, Sass).
 *                                                   PostCSS will try to find
 *                                                   previous map automatically,
 *                                                   so you could disable it by
 *                                                   `false` value.
 * @property {boolean} map.sourcesContent            Does PostCSS should set
 *                                                   the origin content to map.
 * @property {string|false} map.annotation           Does PostCSS should set
 *                                                   annotation comment to map.
 * @property {string} map.from                       Override `from` in map’s
 *                                                   sources`.
 */

exports.default = _default;
module.exports = exports.default;

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Container = __webpack_require__(13);

var NestedDeclaration = function (_Container) {
  _inherits(NestedDeclaration, _Container);

  function NestedDeclaration(defaults) {
    _classCallCheck(this, NestedDeclaration);

    var _this = _possibleConstructorReturn(this, _Container.call(this, defaults));

    _this.type = 'decl';
    _this.isNested = true;
    if (!_this.nodes) _this.nodes = [];
    return _this;
  }

  return NestedDeclaration;
}(Container);

module.exports = NestedDeclaration;

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var SINGLE_QUOTE = 39;
var DOUBLE_QUOTE = 34;
var BACKSLASH = 92;
var SLASH = 47;
var NEWLINE = 10;
var SPACE = 32;
var FEED = 12;
var TAB = 9;
var CR = 13;
var OPEN_SQUARE = 91;
var CLOSE_SQUARE = 93;
var OPEN_PARENTHESES = 40;
var CLOSE_PARENTHESES = 41;
var OPEN_CURLY = 123;
var CLOSE_CURLY = 125;
var SEMICOLON = 59;
var ASTERISK = 42;
var COLON = 58;
var AT = 64; // SCSS PATCH {

var COMMA = 44;
var HASH = 35; // } SCSS PATCH

var RE_AT_END = /[ \n\t\r\f{}()'"\\;/[\]#]/g;
var RE_WORD_END = /[ \n\t\r\f(){}:;@!'"\\\][#]|\/(?=\*)/g;
var RE_BAD_BRACKET = /.[\\/("'\n]/;
var RE_HEX_ESCAPE = /[a-f0-9]/i;
var RE_NEW_LINE = /[\r\f\n]/g; // SCSS PATCH
// SCSS PATCH function name was changed

module.exports = function scssTokenize(input) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var css = input.css.valueOf();
  var ignore = options.ignoreErrors;
  var code = void 0,
      next = void 0,
      quote = void 0,
      lines = void 0,
      last = void 0,
      content = void 0,
      escape = void 0,
      nextLine = void 0,
      nextOffset = void 0,
      escaped = void 0,
      prev = void 0,
      n = void 0,
      currentToken = void 0;
  var brackets = void 0; // SCSS PATCH

  var length = css.length;
  var offset = -1;
  var line = 1;
  var pos = 0;
  var buffer = [];
  var returned = [];

  function unclosed(what) {
    throw input.error('Unclosed ' + what, line, pos - offset);
  }

  function endOfFile() {
    return returned.length === 0 && pos >= length;
  } // SCSS PATCH {


  function interpolation() {
    var deep = 1;
    var stringQuote = false;
    var stringEscaped = false;

    while (deep > 0) {
      next += 1;
      if (css.length <= next) unclosed('interpolation');
      code = css.charCodeAt(next);
      n = css.charCodeAt(next + 1);

      if (stringQuote) {
        if (!stringEscaped && code === stringQuote) {
          stringQuote = false;
          stringEscaped = false;
        } else if (code === BACKSLASH) {
          stringEscaped = !escaped;
        } else if (stringEscaped) {
          stringEscaped = false;
        }
      } else if (code === SINGLE_QUOTE || code === DOUBLE_QUOTE) {
        stringQuote = code;
      } else if (code === CLOSE_CURLY) {
        deep -= 1;
      } else if (code === HASH && n === OPEN_CURLY) {
        deep += 1;
      }
    }
  } // } SCSS PATCH


  function nextToken() {
    if (returned.length) return returned.pop();
    if (pos >= length) return;
    code = css.charCodeAt(pos);

    if (code === NEWLINE || code === FEED || code === CR && css.charCodeAt(pos + 1) !== NEWLINE) {
      offset = pos;
      line += 1;
    }

    switch (code) {
      case NEWLINE:
      case SPACE:
      case TAB:
      case CR:
      case FEED:
        next = pos;

        do {
          next += 1;
          code = css.charCodeAt(next);

          if (code === NEWLINE) {
            offset = next;
            line += 1;
          }
        } while (code === SPACE || code === NEWLINE || code === TAB || code === CR || code === FEED);

        currentToken = ['space', css.slice(pos, next)];
        pos = next - 1;
        break;

      case OPEN_SQUARE:
        currentToken = ['[', '[', line, pos - offset];
        break;

      case CLOSE_SQUARE:
        currentToken = [']', ']', line, pos - offset];
        break;

      case OPEN_CURLY:
        currentToken = ['{', '{', line, pos - offset];
        break;

      case CLOSE_CURLY:
        currentToken = ['}', '}', line, pos - offset];
        break;
      // SCSS PATCH {

      case COMMA:
        currentToken = ['word', ',', line, pos - offset, line, pos - offset + 1];
        break;
      // } SCSS PATCH

      case COLON:
        currentToken = [':', ':', line, pos - offset];
        break;

      case SEMICOLON:
        currentToken = [';', ';', line, pos - offset];
        break;

      case OPEN_PARENTHESES:
        prev = buffer.length ? buffer.pop()[1] : '';
        n = css.charCodeAt(pos + 1); // SCSS PATCH {

        if (prev === 'url' && n !== SINGLE_QUOTE && n !== DOUBLE_QUOTE) {
          brackets = 1;
          escaped = false;
          next = pos + 1;

          while (next <= css.length - 1) {
            n = css.charCodeAt(next);

            if (n === BACKSLASH) {
              escaped = !escaped;
            } else if (n === OPEN_PARENTHESES) {
              brackets += 1;
            } else if (n === CLOSE_PARENTHESES) {
              brackets -= 1;
              if (brackets === 0) break;
            }

            next += 1;
          }

          content = css.slice(pos, next + 1);
          lines = content.split('\n');
          last = lines.length - 1;

          if (last > 0) {
            nextLine = line + last;
            nextOffset = next - lines[last].length;
          } else {
            nextLine = line;
            nextOffset = offset;
          }

          currentToken = ['brackets', content, line, pos - offset, nextLine, next - nextOffset];
          offset = nextOffset;
          line = nextLine;
          pos = next; // } SCSS PATCH
        } else {
          next = css.indexOf(')', pos + 1);
          content = css.slice(pos, next + 1);

          if (next === -1 || RE_BAD_BRACKET.test(content)) {
            currentToken = ['(', '(', line, pos - offset];
          } else {
            currentToken = ['brackets', content, line, pos - offset, line, next - offset];
            pos = next;
          }
        }

        break;

      case CLOSE_PARENTHESES:
        currentToken = [')', ')', line, pos - offset];
        break;

      case SINGLE_QUOTE:
      case DOUBLE_QUOTE:
        // SCSS PATCH {
        quote = code;
        next = pos;
        escaped = false;

        while (next < length) {
          next++;
          if (next === length) unclosed('string');
          code = css.charCodeAt(next);
          n = css.charCodeAt(next + 1);

          if (!escaped && code === quote) {
            break;
          } else if (code === BACKSLASH) {
            escaped = !escaped;
          } else if (escaped) {
            escaped = false;
          } else if (code === HASH && n === OPEN_CURLY) {
            interpolation();
          }
        } // } SCSS PATCH


        content = css.slice(pos, next + 1);
        lines = content.split('\n');
        last = lines.length - 1;

        if (last > 0) {
          nextLine = line + last;
          nextOffset = next - lines[last].length;
        } else {
          nextLine = line;
          nextOffset = offset;
        }

        currentToken = ['string', css.slice(pos, next + 1), line, pos - offset, nextLine, next - nextOffset];
        offset = nextOffset;
        line = nextLine;
        pos = next;
        break;

      case AT:
        RE_AT_END.lastIndex = pos + 1;
        RE_AT_END.test(css);

        if (RE_AT_END.lastIndex === 0) {
          next = css.length - 1;
        } else {
          next = RE_AT_END.lastIndex - 2;
        }

        currentToken = ['at-word', css.slice(pos, next + 1), line, pos - offset, line, next - offset];
        pos = next;
        break;

      case BACKSLASH:
        next = pos;
        escape = true;

        while (css.charCodeAt(next + 1) === BACKSLASH) {
          next += 1;
          escape = !escape;
        }

        code = css.charCodeAt(next + 1);

        if (escape && code !== SLASH && code !== SPACE && code !== NEWLINE && code !== TAB && code !== CR && code !== FEED) {
          next += 1;

          if (RE_HEX_ESCAPE.test(css.charAt(next))) {
            while (RE_HEX_ESCAPE.test(css.charAt(next + 1))) {
              next += 1;
            }

            if (css.charCodeAt(next + 1) === SPACE) {
              next += 1;
            }
          }
        }

        currentToken = ['word', css.slice(pos, next + 1), line, pos - offset, line, next - offset];
        pos = next;
        break;

      default:
        // SCSS PATCH {
        n = css.charCodeAt(pos + 1);

        if (code === HASH && n === OPEN_CURLY) {
          next = pos;
          interpolation();
          content = css.slice(pos, next + 1);
          lines = content.split('\n');
          last = lines.length - 1;

          if (last > 0) {
            nextLine = line + last;
            nextOffset = next - lines[last].length;
          } else {
            nextLine = line;
            nextOffset = offset;
          }

          currentToken = ['word', content, line, pos - offset, nextLine, next - nextOffset];
          offset = nextOffset;
          line = nextLine;
          pos = next;
        } else if (code === SLASH && n === ASTERISK) {
          // } SCSS PATCH
          next = css.indexOf('*/', pos + 2) + 1;

          if (next === 0) {
            if (ignore) {
              next = css.length;
            } else {
              unclosed('comment');
            }
          }

          content = css.slice(pos, next + 1);
          lines = content.split('\n');
          last = lines.length - 1;

          if (last > 0) {
            nextLine = line + last;
            nextOffset = next - lines[last].length;
          } else {
            nextLine = line;
            nextOffset = offset;
          }

          currentToken = ['comment', content, line, pos - offset, nextLine, next - nextOffset];
          offset = nextOffset;
          line = nextLine;
          pos = next; // SCSS PATCH {
        } else if (code === SLASH && n === SLASH) {
          RE_NEW_LINE.lastIndex = pos + 1;
          RE_NEW_LINE.test(css);

          if (RE_NEW_LINE.lastIndex === 0) {
            next = css.length - 1;
          } else {
            next = RE_NEW_LINE.lastIndex - 2;
          }

          content = css.slice(pos, next + 1);
          currentToken = ['comment', content, line, pos - offset, line, next - offset, 'inline'];
          pos = next; // } SCSS PATCH
        } else {
          RE_WORD_END.lastIndex = pos + 1;
          RE_WORD_END.test(css);

          if (RE_WORD_END.lastIndex === 0) {
            next = css.length - 1;
          } else {
            next = RE_WORD_END.lastIndex - 2;
          }

          currentToken = ['word', css.slice(pos, next + 1), line, pos - offset, line, next - offset];
          buffer.push(currentToken);
          pos = next;
        }

        break;
    }

    pos++;
    return currentToken;
  }

  function back(token) {
    returned.push(token);
  }

  return {
    back: back,
    nextToken: nextToken,
    endOfFile: endOfFile
  };
};

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = false;

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

function assembleStyles() {
  var styles = {
    modifiers: {
      reset: [0, 0],
      bold: [1, 22],
      // 21 isn't widely supported and 22 does the same thing
      dim: [2, 22],
      italic: [3, 23],
      underline: [4, 24],
      inverse: [7, 27],
      hidden: [8, 28],
      strikethrough: [9, 29]
    },
    colors: {
      black: [30, 39],
      red: [31, 39],
      green: [32, 39],
      yellow: [33, 39],
      blue: [34, 39],
      magenta: [35, 39],
      cyan: [36, 39],
      white: [37, 39],
      gray: [90, 39]
    },
    bgColors: {
      bgBlack: [40, 49],
      bgRed: [41, 49],
      bgGreen: [42, 49],
      bgYellow: [43, 49],
      bgBlue: [44, 49],
      bgMagenta: [45, 49],
      bgCyan: [46, 49],
      bgWhite: [47, 49]
    }
  }; // fix humans

  styles.colors.grey = styles.colors.gray;
  Object.keys(styles).forEach(function (groupName) {
    var group = styles[groupName];
    Object.keys(group).forEach(function (styleName) {
      var style = group[styleName];
      styles[styleName] = group[styleName] = {
        open: "\x1B[" + style[0] + 'm',
        close: "\x1B[" + style[1] + 'm'
      };
    });
    Object.defineProperty(styles, groupName, {
      value: group,
      enumerable: false
    });
  });
  return styles;
}

Object.defineProperty(module, 'exports', {
  enumerable: true,
  get: assembleStyles
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(144)(module)))

/***/ }),
/* 144 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ansiRegex = __webpack_require__(75)();

module.exports = function (str) {
  return typeof str === 'string' ? str.replace(ansiRegex, '') : str;
};

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ansiRegex = __webpack_require__(75);

var re = new RegExp(ansiRegex().source); // remove the `g` flag

module.exports = re.test.bind(re);

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var argv = process.argv;
var terminator = argv.indexOf('--');

var hasFlag = function hasFlag(flag) {
  flag = '--' + flag;
  var pos = argv.indexOf(flag);
  return pos !== -1 && (terminator !== -1 ? pos < terminator : true);
};

module.exports = function () {
  if ('FORCE_COLOR' in process.env) {
    return true;
  }

  if (hasFlag('no-color') || hasFlag('no-colors') || hasFlag('color=false')) {
    return false;
  }

  if (hasFlag('color') || hasFlag('colors') || hasFlag('color=true') || hasFlag('color=always')) {
    return true;
  }

  if (process.stdout && !process.stdout.isTTY) {
    return false;
  }

  if (process.platform === 'win32') {
    return true;
  }

  if ('COLORTERM' in process.env) {
    return true;
  }

  if (process.env.TERM === 'dumb') {
    return false;
  }

  if (/^screen|^xterm|^vt100|color|ansi|cygwin|linux/i.test(process.env.TERM)) {
    return true;
  }

  return false;
}();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _chalk = __webpack_require__(74);

var _chalk2 = _interopRequireDefault(_chalk);

var _tokenize = __webpack_require__(76);

var _tokenize2 = _interopRequireDefault(_tokenize);

var _input = __webpack_require__(23);

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var colors = new _chalk2.default.constructor({
  enabled: true
});
var HIGHLIGHT_THEME = {
  'brackets': colors.cyan,
  'at-word': colors.cyan,
  'call': colors.cyan,
  'comment': colors.gray,
  'string': colors.green,
  'class': colors.yellow,
  'hash': colors.magenta,
  '(': colors.cyan,
  ')': colors.cyan,
  '{': colors.yellow,
  '}': colors.yellow,
  '[': colors.yellow,
  ']': colors.yellow,
  ':': colors.yellow,
  ';': colors.yellow
};

function getTokenType(_ref, index, tokens) {
  var type = _ref[0],
      value = _ref[1];

  if (type === 'word') {
    if (value[0] === '.') {
      return 'class';
    }

    if (value[0] === '#') {
      return 'hash';
    }
  }

  var nextToken = tokens[index + 1];

  if (nextToken && (nextToken[0] === 'brackets' || nextToken[0] === '(')) {
    return 'call';
  }

  return type;
}

function terminalHighlight(css) {
  var tokens = (0, _tokenize2.default)(new _input2.default(css), {
    ignoreErrors: true
  });
  return tokens.map(function (token, index) {
    var color = HIGHLIGHT_THEME[getTokenType(token, index, tokens)];

    if (color) {
      return token[1].split(/\r?\n/).map(function (i) {
        return color(i);
      }).join('\n');
    } else {
      return token[1];
    }
  }).join('');
}

exports.default = terminalHighlight;
module.exports = exports['default'];

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _jsBase = __webpack_require__(77);

var _sourceMap = __webpack_require__(78);

var _sourceMap2 = _interopRequireDefault(_sourceMap);

var _path = __webpack_require__(6);

var _path2 = _interopRequireDefault(_path);

var _fs = __webpack_require__(156);

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
/**
 * Source map information from input CSS.
 * For example, source map after Sass compiler.
 *
 * This class will automatically find source map in input CSS or in file system
 * near input file (according `from` option).
 *
 * @example
 * const root = postcss.parse(css, { from: 'a.sass.css' });
 * root.input.map //=> PreviousMap
 */


var PreviousMap = function () {
  /**
   * @param {string}         css    - input CSS source
   * @param {processOptions} [opts] - {@link Processor#process} options
   */
  function PreviousMap(css, opts) {
    _classCallCheck(this, PreviousMap);

    this.loadAnnotation(css);
    /**
     * @member {boolean} - Was source map inlined by data-uri to input CSS.
     */

    this.inline = this.startWith(this.annotation, 'data:');
    var prev = opts.map ? opts.map.prev : undefined;
    var text = this.loadMap(opts.from, prev);
    if (text) this.text = text;
  }
  /**
   * Create a instance of `SourceMapGenerator` class
   * from the `source-map` library to work with source map information.
   *
   * It is lazy method, so it will create object only on first call
   * and then it will use cache.
   *
   * @return {SourceMapGenerator} object with source map information
   */


  PreviousMap.prototype.consumer = function consumer() {
    if (!this.consumerCache) {
      this.consumerCache = new _sourceMap2.default.SourceMapConsumer(this.text);
    }

    return this.consumerCache;
  };
  /**
   * Does source map contains `sourcesContent` with input source text.
   *
   * @return {boolean} Is `sourcesContent` present
   */


  PreviousMap.prototype.withContent = function withContent() {
    return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
  };

  PreviousMap.prototype.startWith = function startWith(string, start) {
    if (!string) return false;
    return string.substr(0, start.length) === start;
  };

  PreviousMap.prototype.loadAnnotation = function loadAnnotation(css) {
    var match = css.match(/\/\*\s*# sourceMappingURL=(.*)\s*\*\//);
    if (match) this.annotation = match[1].trim();
  };

  PreviousMap.prototype.decodeInline = function decodeInline(text) {
    var utfd64 = 'data:application/json;charset=utf-8;base64,';
    var utf64 = 'data:application/json;charset=utf8;base64,';
    var b64 = 'data:application/json;base64,';
    var uri = 'data:application/json,';

    if (this.startWith(text, uri)) {
      return decodeURIComponent(text.substr(uri.length));
    } else if (this.startWith(text, b64)) {
      return _jsBase.Base64.decode(text.substr(b64.length));
    } else if (this.startWith(text, utf64)) {
      return _jsBase.Base64.decode(text.substr(utf64.length));
    } else if (this.startWith(text, utfd64)) {
      return _jsBase.Base64.decode(text.substr(utfd64.length));
    } else {
      var encoding = text.match(/data:application\/json;([^,]+),/)[1];
      throw new Error('Unsupported source map encoding ' + encoding);
    }
  };

  PreviousMap.prototype.loadMap = function loadMap(file, prev) {
    if (prev === false) return false;

    if (prev) {
      if (typeof prev === 'string') {
        return prev;
      } else if (typeof prev === 'function') {
        var prevPath = prev(file);

        if (prevPath && _fs2.default.existsSync && _fs2.default.existsSync(prevPath)) {
          return _fs2.default.readFileSync(prevPath, 'utf-8').toString().trim();
        } else {
          throw new Error('Unable to load previous source map: ' + prevPath.toString());
        }
      } else if (prev instanceof _sourceMap2.default.SourceMapConsumer) {
        return _sourceMap2.default.SourceMapGenerator.fromSourceMap(prev).toString();
      } else if (prev instanceof _sourceMap2.default.SourceMapGenerator) {
        return prev.toString();
      } else if (this.isMap(prev)) {
        return JSON.stringify(prev);
      } else {
        throw new Error('Unsupported previous source map format: ' + prev.toString());
      }
    } else if (this.inline) {
      return this.decodeInline(this.annotation);
    } else if (this.annotation) {
      var map = this.annotation;
      if (file) map = _path2.default.join(_path2.default.dirname(file), map);
      this.root = _path2.default.dirname(map);

      if (_fs2.default.existsSync && _fs2.default.existsSync(map)) {
        return _fs2.default.readFileSync(map, 'utf-8').toString().trim();
      } else {
        return false;
      }
    }
  };

  PreviousMap.prototype.isMap = function isMap(map) {
    if ((typeof map === 'undefined' ? 'undefined' : _typeof(map)) !== 'object') return false;
    return typeof map.mappings === 'string' || typeof map._mappings === 'string';
  };

  return PreviousMap;
}();

exports.default = PreviousMap;
module.exports = exports['default'];

/***/ }),
/* 150 */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */

/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
var intToCharMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');
/**
 * Encode an integer in the range of 0 to 63 to a single base 64 digit.
 */

exports.encode = function (number) {
  if (0 <= number && number < intToCharMap.length) {
    return intToCharMap[number];
  }

  throw new TypeError("Must be between 0 and 63: " + number);
};
/**
 * Decode a single base 64 character code digit to an integer. Returns -1 on
 * failure.
 */


exports.decode = function (charCode) {
  var bigA = 65; // 'A'

  var bigZ = 90; // 'Z'

  var littleA = 97; // 'a'

  var littleZ = 122; // 'z'

  var zero = 48; // '0'

  var nine = 57; // '9'

  var plus = 43; // '+'

  var slash = 47; // '/'

  var littleOffset = 26;
  var numberOffset = 52; // 0 - 25: ABCDEFGHIJKLMNOPQRSTUVWXYZ

  if (bigA <= charCode && charCode <= bigZ) {
    return charCode - bigA;
  } // 26 - 51: abcdefghijklmnopqrstuvwxyz


  if (littleA <= charCode && charCode <= littleZ) {
    return charCode - littleA + littleOffset;
  } // 52 - 61: 0123456789


  if (zero <= charCode && charCode <= nine) {
    return charCode - zero + numberOffset;
  } // 62: +


  if (charCode == plus) {
    return 62;
  } // 63: /


  if (charCode == slash) {
    return 63;
  } // Invalid base64 digit.


  return -1;
};

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */

/*
 * Copyright 2014 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
var util = __webpack_require__(9);
/**
 * Determine whether mappingB is after mappingA with respect to generated
 * position.
 */


function generatedPositionAfter(mappingA, mappingB) {
  // Optimized for most common case
  var lineA = mappingA.generatedLine;
  var lineB = mappingB.generatedLine;
  var columnA = mappingA.generatedColumn;
  var columnB = mappingB.generatedColumn;
  return lineB > lineA || lineB == lineA && columnB >= columnA || util.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
}
/**
 * A data structure to provide a sorted view of accumulated mappings in a
 * performance conscious manner. It trades a neglibable overhead in general
 * case for a large speedup in case of mappings being added in order.
 */


function MappingList() {
  this._array = [];
  this._sorted = true; // Serves as infimum

  this._last = {
    generatedLine: -1,
    generatedColumn: 0
  };
}
/**
 * Iterate through internal items. This method takes the same arguments that
 * `Array.prototype.forEach` takes.
 *
 * NOTE: The order of the mappings is NOT guaranteed.
 */


MappingList.prototype.unsortedForEach = function MappingList_forEach(aCallback, aThisArg) {
  this._array.forEach(aCallback, aThisArg);
};
/**
 * Add the given source mapping.
 *
 * @param Object aMapping
 */


MappingList.prototype.add = function MappingList_add(aMapping) {
  if (generatedPositionAfter(this._last, aMapping)) {
    this._last = aMapping;

    this._array.push(aMapping);
  } else {
    this._sorted = false;

    this._array.push(aMapping);
  }
};
/**
 * Returns the flat, sorted array of mappings. The mappings are sorted by
 * generated position.
 *
 * WARNING: This method returns internal data without copying, for
 * performance. The return value must NOT be mutated, and should be treated as
 * an immutable borrow. If you want to take ownership, you must make your own
 * copy.
 */


MappingList.prototype.toArray = function MappingList_toArray() {
  if (!this._sorted) {
    this._array.sort(util.compareByGeneratedPositionsInflated);

    this._sorted = true;
  }

  return this._array;
};

exports.MappingList = MappingList;

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */

/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
var util = __webpack_require__(9);

var binarySearch = __webpack_require__(153);

var ArraySet = __webpack_require__(81).ArraySet;

var base64VLQ = __webpack_require__(80);

var quickSort = __webpack_require__(154).quickSort;

function SourceMapConsumer(aSourceMap) {
  var sourceMap = aSourceMap;

  if (typeof aSourceMap === 'string') {
    sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
  }

  return sourceMap.sections != null ? new IndexedSourceMapConsumer(sourceMap) : new BasicSourceMapConsumer(sourceMap);
}

SourceMapConsumer.fromSourceMap = function (aSourceMap) {
  return BasicSourceMapConsumer.fromSourceMap(aSourceMap);
};
/**
 * The version of the source mapping spec that we are consuming.
 */


SourceMapConsumer.prototype._version = 3; // `__generatedMappings` and `__originalMappings` are arrays that hold the
// parsed mapping coordinates from the source map's "mappings" attribute. They
// are lazily instantiated, accessed via the `_generatedMappings` and
// `_originalMappings` getters respectively, and we only parse the mappings
// and create these arrays once queried for a source location. We jump through
// these hoops because there can be many thousands of mappings, and parsing
// them is expensive, so we only want to do it if we must.
//
// Each object in the arrays is of the form:
//
//     {
//       generatedLine: The line number in the generated code,
//       generatedColumn: The column number in the generated code,
//       source: The path to the original source file that generated this
//               chunk of code,
//       originalLine: The line number in the original source that
//                     corresponds to this chunk of generated code,
//       originalColumn: The column number in the original source that
//                       corresponds to this chunk of generated code,
//       name: The name of the original symbol which generated this chunk of
//             code.
//     }
//
// All properties except for `generatedLine` and `generatedColumn` can be
// `null`.
//
// `_generatedMappings` is ordered by the generated positions.
//
// `_originalMappings` is ordered by the original positions.

SourceMapConsumer.prototype.__generatedMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_generatedMappings', {
  get: function get() {
    if (!this.__generatedMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__generatedMappings;
  }
});
SourceMapConsumer.prototype.__originalMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_originalMappings', {
  get: function get() {
    if (!this.__originalMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__originalMappings;
  }
});

SourceMapConsumer.prototype._charIsMappingSeparator = function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
  var c = aStr.charAt(index);
  return c === ";" || c === ",";
};
/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */


SourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
  throw new Error("Subclasses must implement _parseMappings");
};

SourceMapConsumer.GENERATED_ORDER = 1;
SourceMapConsumer.ORIGINAL_ORDER = 2;
SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
SourceMapConsumer.LEAST_UPPER_BOUND = 2;
/**
 * Iterate over each mapping between an original source/line/column and a
 * generated line/column in this source map.
 *
 * @param Function aCallback
 *        The function that is called with each mapping.
 * @param Object aContext
 *        Optional. If specified, this object will be the value of `this` every
 *        time that `aCallback` is called.
 * @param aOrder
 *        Either `SourceMapConsumer.GENERATED_ORDER` or
 *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
 *        iterate over the mappings sorted by the generated file's line/column
 *        order or the original's source/line/column order, respectively. Defaults to
 *        `SourceMapConsumer.GENERATED_ORDER`.
 */

SourceMapConsumer.prototype.eachMapping = function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
  var context = aContext || null;
  var order = aOrder || SourceMapConsumer.GENERATED_ORDER;
  var mappings;

  switch (order) {
    case SourceMapConsumer.GENERATED_ORDER:
      mappings = this._generatedMappings;
      break;

    case SourceMapConsumer.ORIGINAL_ORDER:
      mappings = this._originalMappings;
      break;

    default:
      throw new Error("Unknown order of iteration.");
  }

  var sourceRoot = this.sourceRoot;
  mappings.map(function (mapping) {
    var source = mapping.source === null ? null : this._sources.at(mapping.source);

    if (source != null && sourceRoot != null) {
      source = util.join(sourceRoot, source);
    }

    return {
      source: source,
      generatedLine: mapping.generatedLine,
      generatedColumn: mapping.generatedColumn,
      originalLine: mapping.originalLine,
      originalColumn: mapping.originalColumn,
      name: mapping.name === null ? null : this._names.at(mapping.name)
    };
  }, this).forEach(aCallback, context);
};
/**
 * Returns all generated line and column information for the original source,
 * line, and column provided. If no column is provided, returns all mappings
 * corresponding to a either the line we are searching for or the next
 * closest line that has any mappings. Otherwise, returns all mappings
 * corresponding to the given line and either the column we are searching for
 * or the next closest column that has any offsets.
 *
 * The only argument is an object with the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.
 *   - column: Optional. the column number in the original source.
 *
 * and an array of objects is returned, each with the following properties:
 *
 *   - line: The line number in the generated source, or null.
 *   - column: The column number in the generated source, or null.
 */


SourceMapConsumer.prototype.allGeneratedPositionsFor = function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
  var line = util.getArg(aArgs, 'line'); // When there is no exact match, BasicSourceMapConsumer.prototype._findMapping
  // returns the index of the closest mapping less than the needle. By
  // setting needle.originalColumn to 0, we thus find the last mapping for
  // the given line, provided such a mapping exists.

  var needle = {
    source: util.getArg(aArgs, 'source'),
    originalLine: line,
    originalColumn: util.getArg(aArgs, 'column', 0)
  };

  if (this.sourceRoot != null) {
    needle.source = util.relative(this.sourceRoot, needle.source);
  }

  if (!this._sources.has(needle.source)) {
    return [];
  }

  needle.source = this._sources.indexOf(needle.source);
  var mappings = [];

  var index = this._findMapping(needle, this._originalMappings, "originalLine", "originalColumn", util.compareByOriginalPositions, binarySearch.LEAST_UPPER_BOUND);

  if (index >= 0) {
    var mapping = this._originalMappings[index];

    if (aArgs.column === undefined) {
      var originalLine = mapping.originalLine; // Iterate until either we run out of mappings, or we run into
      // a mapping for a different line than the one we found. Since
      // mappings are sorted, this is guaranteed to find all mappings for
      // the line we found.

      while (mapping && mapping.originalLine === originalLine) {
        mappings.push({
          line: util.getArg(mapping, 'generatedLine', null),
          column: util.getArg(mapping, 'generatedColumn', null),
          lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
        });
        mapping = this._originalMappings[++index];
      }
    } else {
      var originalColumn = mapping.originalColumn; // Iterate until either we run out of mappings, or we run into
      // a mapping for a different line than the one we were searching for.
      // Since mappings are sorted, this is guaranteed to find all mappings for
      // the line we are searching for.

      while (mapping && mapping.originalLine === line && mapping.originalColumn == originalColumn) {
        mappings.push({
          line: util.getArg(mapping, 'generatedLine', null),
          column: util.getArg(mapping, 'generatedColumn', null),
          lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
        });
        mapping = this._originalMappings[++index];
      }
    }
  }

  return mappings;
};

exports.SourceMapConsumer = SourceMapConsumer;
/**
 * A BasicSourceMapConsumer instance represents a parsed source map which we can
 * query for information about the original file positions by giving it a file
 * position in the generated source.
 *
 * The only parameter is the raw source map (either as a JSON string, or
 * already parsed to an object). According to the spec, source maps have the
 * following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - sources: An array of URLs to the original source files.
 *   - names: An array of identifiers which can be referrenced by individual mappings.
 *   - sourceRoot: Optional. The URL root from which all sources are relative.
 *   - sourcesContent: Optional. An array of contents of the original source files.
 *   - mappings: A string of base64 VLQs which contain the actual mappings.
 *   - file: Optional. The generated file this source map is associated with.
 *
 * Here is an example source map, taken from the source map spec[0]:
 *
 *     {
 *       version : 3,
 *       file: "out.js",
 *       sourceRoot : "",
 *       sources: ["foo.js", "bar.js"],
 *       names: ["src", "maps", "are", "fun"],
 *       mappings: "AA,AB;;ABCDE;"
 *     }
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
 */

function BasicSourceMapConsumer(aSourceMap) {
  var sourceMap = aSourceMap;

  if (typeof aSourceMap === 'string') {
    sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
  }

  var version = util.getArg(sourceMap, 'version');
  var sources = util.getArg(sourceMap, 'sources'); // Sass 3.3 leaves out the 'names' array, so we deviate from the spec (which
  // requires the array) to play nice here.

  var names = util.getArg(sourceMap, 'names', []);
  var sourceRoot = util.getArg(sourceMap, 'sourceRoot', null);
  var sourcesContent = util.getArg(sourceMap, 'sourcesContent', null);
  var mappings = util.getArg(sourceMap, 'mappings');
  var file = util.getArg(sourceMap, 'file', null); // Once again, Sass deviates from the spec and supplies the version as a
  // string rather than a number, so we use loose equality checking here.

  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  sources = sources.map(String) // Some source maps produce relative source paths like "./foo.js" instead of
  // "foo.js".  Normalize these first so that future comparisons will succeed.
  // See bugzil.la/1090768.
  .map(util.normalize) // Always ensure that absolute sources are internally stored relative to
  // the source root, if the source root is absolute. Not doing this would
  // be particularly problematic when the source root is a prefix of the
  // source (valid, but why??). See github issue #199 and bugzil.la/1188982.
  .map(function (source) {
    return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source) ? util.relative(sourceRoot, source) : source;
  }); // Pass `true` below to allow duplicate names and sources. While source maps
  // are intended to be compressed and deduplicated, the TypeScript compiler
  // sometimes generates source maps with duplicates in them. See Github issue
  // #72 and bugzil.la/889492.

  this._names = ArraySet.fromArray(names.map(String), true);
  this._sources = ArraySet.fromArray(sources, true);
  this.sourceRoot = sourceRoot;
  this.sourcesContent = sourcesContent;
  this._mappings = mappings;
  this.file = file;
}

BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;
/**
 * Create a BasicSourceMapConsumer from a SourceMapGenerator.
 *
 * @param SourceMapGenerator aSourceMap
 *        The source map that will be consumed.
 * @returns BasicSourceMapConsumer
 */

BasicSourceMapConsumer.fromSourceMap = function SourceMapConsumer_fromSourceMap(aSourceMap) {
  var smc = Object.create(BasicSourceMapConsumer.prototype);
  var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
  var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
  smc.sourceRoot = aSourceMap._sourceRoot;
  smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(), smc.sourceRoot);
  smc.file = aSourceMap._file; // Because we are modifying the entries (by converting string sources and
  // names to indices into the sources and names ArraySets), we have to make
  // a copy of the entry or else bad things happen. Shared mutable state
  // strikes again! See github issue #191.

  var generatedMappings = aSourceMap._mappings.toArray().slice();

  var destGeneratedMappings = smc.__generatedMappings = [];
  var destOriginalMappings = smc.__originalMappings = [];

  for (var i = 0, length = generatedMappings.length; i < length; i++) {
    var srcMapping = generatedMappings[i];
    var destMapping = new Mapping();
    destMapping.generatedLine = srcMapping.generatedLine;
    destMapping.generatedColumn = srcMapping.generatedColumn;

    if (srcMapping.source) {
      destMapping.source = sources.indexOf(srcMapping.source);
      destMapping.originalLine = srcMapping.originalLine;
      destMapping.originalColumn = srcMapping.originalColumn;

      if (srcMapping.name) {
        destMapping.name = names.indexOf(srcMapping.name);
      }

      destOriginalMappings.push(destMapping);
    }

    destGeneratedMappings.push(destMapping);
  }

  quickSort(smc.__originalMappings, util.compareByOriginalPositions);
  return smc;
};
/**
 * The version of the source mapping spec that we are consuming.
 */


BasicSourceMapConsumer.prototype._version = 3;
/**
 * The list of original sources.
 */

Object.defineProperty(BasicSourceMapConsumer.prototype, 'sources', {
  get: function get() {
    return this._sources.toArray().map(function (s) {
      return this.sourceRoot != null ? util.join(this.sourceRoot, s) : s;
    }, this);
  }
});
/**
 * Provide the JIT with a nice shape / hidden class.
 */

function Mapping() {
  this.generatedLine = 0;
  this.generatedColumn = 0;
  this.source = null;
  this.originalLine = null;
  this.originalColumn = null;
  this.name = null;
}
/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */


BasicSourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
  var generatedLine = 1;
  var previousGeneratedColumn = 0;
  var previousOriginalLine = 0;
  var previousOriginalColumn = 0;
  var previousSource = 0;
  var previousName = 0;
  var length = aStr.length;
  var index = 0;
  var cachedSegments = {};
  var temp = {};
  var originalMappings = [];
  var generatedMappings = [];
  var mapping, str, segment, end, value;

  while (index < length) {
    if (aStr.charAt(index) === ';') {
      generatedLine++;
      index++;
      previousGeneratedColumn = 0;
    } else if (aStr.charAt(index) === ',') {
      index++;
    } else {
      mapping = new Mapping();
      mapping.generatedLine = generatedLine; // Because each offset is encoded relative to the previous one,
      // many segments often have the same encoding. We can exploit this
      // fact by caching the parsed variable length fields of each segment,
      // allowing us to avoid a second parse if we encounter the same
      // segment again.

      for (end = index; end < length; end++) {
        if (this._charIsMappingSeparator(aStr, end)) {
          break;
        }
      }

      str = aStr.slice(index, end);
      segment = cachedSegments[str];

      if (segment) {
        index += str.length;
      } else {
        segment = [];

        while (index < end) {
          base64VLQ.decode(aStr, index, temp);
          value = temp.value;
          index = temp.rest;
          segment.push(value);
        }

        if (segment.length === 2) {
          throw new Error('Found a source, but no line and column');
        }

        if (segment.length === 3) {
          throw new Error('Found a source and line, but no column');
        }

        cachedSegments[str] = segment;
      } // Generated column.


      mapping.generatedColumn = previousGeneratedColumn + segment[0];
      previousGeneratedColumn = mapping.generatedColumn;

      if (segment.length > 1) {
        // Original source.
        mapping.source = previousSource + segment[1];
        previousSource += segment[1]; // Original line.

        mapping.originalLine = previousOriginalLine + segment[2];
        previousOriginalLine = mapping.originalLine; // Lines are stored 0-based

        mapping.originalLine += 1; // Original column.

        mapping.originalColumn = previousOriginalColumn + segment[3];
        previousOriginalColumn = mapping.originalColumn;

        if (segment.length > 4) {
          // Original name.
          mapping.name = previousName + segment[4];
          previousName += segment[4];
        }
      }

      generatedMappings.push(mapping);

      if (typeof mapping.originalLine === 'number') {
        originalMappings.push(mapping);
      }
    }
  }

  quickSort(generatedMappings, util.compareByGeneratedPositionsDeflated);
  this.__generatedMappings = generatedMappings;
  quickSort(originalMappings, util.compareByOriginalPositions);
  this.__originalMappings = originalMappings;
};
/**
 * Find the mapping that best matches the hypothetical "needle" mapping that
 * we are searching for in the given "haystack" of mappings.
 */


BasicSourceMapConsumer.prototype._findMapping = function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName, aColumnName, aComparator, aBias) {
  // To return the position we are searching for, we must first find the
  // mapping for the given position and then return the opposite position it
  // points to. Because the mappings are sorted, we can use binary search to
  // find the best mapping.
  if (aNeedle[aLineName] <= 0) {
    throw new TypeError('Line must be greater than or equal to 1, got ' + aNeedle[aLineName]);
  }

  if (aNeedle[aColumnName] < 0) {
    throw new TypeError('Column must be greater than or equal to 0, got ' + aNeedle[aColumnName]);
  }

  return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
};
/**
 * Compute the last column for each generated mapping. The last column is
 * inclusive.
 */


BasicSourceMapConsumer.prototype.computeColumnSpans = function SourceMapConsumer_computeColumnSpans() {
  for (var index = 0; index < this._generatedMappings.length; ++index) {
    var mapping = this._generatedMappings[index]; // Mappings do not contain a field for the last generated columnt. We
    // can come up with an optimistic estimate, however, by assuming that
    // mappings are contiguous (i.e. given two consecutive mappings, the
    // first mapping ends where the second one starts).

    if (index + 1 < this._generatedMappings.length) {
      var nextMapping = this._generatedMappings[index + 1];

      if (mapping.generatedLine === nextMapping.generatedLine) {
        mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
        continue;
      }
    } // The last mapping for each line spans the entire line.


    mapping.lastGeneratedColumn = Infinity;
  }
};
/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.
 *   - column: The column number in the generated source.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.
 *   - column: The column number in the original source, or null.
 *   - name: The original identifier, or null.
 */


BasicSourceMapConsumer.prototype.originalPositionFor = function SourceMapConsumer_originalPositionFor(aArgs) {
  var needle = {
    generatedLine: util.getArg(aArgs, 'line'),
    generatedColumn: util.getArg(aArgs, 'column')
  };

  var index = this._findMapping(needle, this._generatedMappings, "generatedLine", "generatedColumn", util.compareByGeneratedPositionsDeflated, util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND));

  if (index >= 0) {
    var mapping = this._generatedMappings[index];

    if (mapping.generatedLine === needle.generatedLine) {
      var source = util.getArg(mapping, 'source', null);

      if (source !== null) {
        source = this._sources.at(source);

        if (this.sourceRoot != null) {
          source = util.join(this.sourceRoot, source);
        }
      }

      var name = util.getArg(mapping, 'name', null);

      if (name !== null) {
        name = this._names.at(name);
      }

      return {
        source: source,
        line: util.getArg(mapping, 'originalLine', null),
        column: util.getArg(mapping, 'originalColumn', null),
        name: name
      };
    }
  }

  return {
    source: null,
    line: null,
    column: null,
    name: null
  };
};
/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */


BasicSourceMapConsumer.prototype.hasContentsOfAllSources = function BasicSourceMapConsumer_hasContentsOfAllSources() {
  if (!this.sourcesContent) {
    return false;
  }

  return this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function (sc) {
    return sc == null;
  });
};
/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */


BasicSourceMapConsumer.prototype.sourceContentFor = function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
  if (!this.sourcesContent) {
    return null;
  }

  if (this.sourceRoot != null) {
    aSource = util.relative(this.sourceRoot, aSource);
  }

  if (this._sources.has(aSource)) {
    return this.sourcesContent[this._sources.indexOf(aSource)];
  }

  var url;

  if (this.sourceRoot != null && (url = util.urlParse(this.sourceRoot))) {
    // XXX: file:// URIs and absolute paths lead to unexpected behavior for
    // many users. We can help them out when they expect file:// URIs to
    // behave like it would if they were running a local HTTP server. See
    // https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
    var fileUriAbsPath = aSource.replace(/^file:\/\//, "");

    if (url.scheme == "file" && this._sources.has(fileUriAbsPath)) {
      return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)];
    }

    if ((!url.path || url.path == "/") && this._sources.has("/" + aSource)) {
      return this.sourcesContent[this._sources.indexOf("/" + aSource)];
    }
  } // This function is used recursively from
  // IndexedSourceMapConsumer.prototype.sourceContentFor. In that case, we
  // don't want to throw if we can't find the source - we just want to
  // return null, so we provide a flag to exit gracefully.


  if (nullOnMissing) {
    return null;
  } else {
    throw new Error('"' + aSource + '" is not in the SourceMap.');
  }
};
/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.
 *   - column: The column number in the original source.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.
 *   - column: The column number in the generated source, or null.
 */


BasicSourceMapConsumer.prototype.generatedPositionFor = function SourceMapConsumer_generatedPositionFor(aArgs) {
  var source = util.getArg(aArgs, 'source');

  if (this.sourceRoot != null) {
    source = util.relative(this.sourceRoot, source);
  }

  if (!this._sources.has(source)) {
    return {
      line: null,
      column: null,
      lastColumn: null
    };
  }

  source = this._sources.indexOf(source);
  var needle = {
    source: source,
    originalLine: util.getArg(aArgs, 'line'),
    originalColumn: util.getArg(aArgs, 'column')
  };

  var index = this._findMapping(needle, this._originalMappings, "originalLine", "originalColumn", util.compareByOriginalPositions, util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND));

  if (index >= 0) {
    var mapping = this._originalMappings[index];

    if (mapping.source === needle.source) {
      return {
        line: util.getArg(mapping, 'generatedLine', null),
        column: util.getArg(mapping, 'generatedColumn', null),
        lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
      };
    }
  }

  return {
    line: null,
    column: null,
    lastColumn: null
  };
};

exports.BasicSourceMapConsumer = BasicSourceMapConsumer;
/**
 * An IndexedSourceMapConsumer instance represents a parsed source map which
 * we can query for information. It differs from BasicSourceMapConsumer in
 * that it takes "indexed" source maps (i.e. ones with a "sections" field) as
 * input.
 *
 * The only parameter is a raw source map (either as a JSON string, or already
 * parsed to an object). According to the spec for indexed source maps, they
 * have the following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - file: Optional. The generated file this source map is associated with.
 *   - sections: A list of section definitions.
 *
 * Each value under the "sections" field has two fields:
 *   - offset: The offset into the original specified at which this section
 *       begins to apply, defined as an object with a "line" and "column"
 *       field.
 *   - map: A source map definition. This source map could also be indexed,
 *       but doesn't have to be.
 *
 * Instead of the "map" field, it's also possible to have a "url" field
 * specifying a URL to retrieve a source map from, but that's currently
 * unsupported.
 *
 * Here's an example source map, taken from the source map spec[0], but
 * modified to omit a section which uses the "url" field.
 *
 *  {
 *    version : 3,
 *    file: "app.js",
 *    sections: [{
 *      offset: {line:100, column:10},
 *      map: {
 *        version : 3,
 *        file: "section.js",
 *        sources: ["foo.js", "bar.js"],
 *        names: ["src", "maps", "are", "fun"],
 *        mappings: "AAAA,E;;ABCDE;"
 *      }
 *    }],
 *  }
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit#heading=h.535es3xeprgt
 */

function IndexedSourceMapConsumer(aSourceMap) {
  var sourceMap = aSourceMap;

  if (typeof aSourceMap === 'string') {
    sourceMap = JSON.parse(aSourceMap.replace(/^\)\]\}'/, ''));
  }

  var version = util.getArg(sourceMap, 'version');
  var sections = util.getArg(sourceMap, 'sections');

  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  this._sources = new ArraySet();
  this._names = new ArraySet();
  var lastOffset = {
    line: -1,
    column: 0
  };
  this._sections = sections.map(function (s) {
    if (s.url) {
      // The url field will require support for asynchronicity.
      // See https://github.com/mozilla/source-map/issues/16
      throw new Error('Support for url field in sections not implemented.');
    }

    var offset = util.getArg(s, 'offset');
    var offsetLine = util.getArg(offset, 'line');
    var offsetColumn = util.getArg(offset, 'column');

    if (offsetLine < lastOffset.line || offsetLine === lastOffset.line && offsetColumn < lastOffset.column) {
      throw new Error('Section offsets must be ordered and non-overlapping.');
    }

    lastOffset = offset;
    return {
      generatedOffset: {
        // The offset fields are 0-based, but we use 1-based indices when
        // encoding/decoding from VLQ.
        generatedLine: offsetLine + 1,
        generatedColumn: offsetColumn + 1
      },
      consumer: new SourceMapConsumer(util.getArg(s, 'map'))
    };
  });
}

IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;
/**
 * The version of the source mapping spec that we are consuming.
 */

IndexedSourceMapConsumer.prototype._version = 3;
/**
 * The list of original sources.
 */

Object.defineProperty(IndexedSourceMapConsumer.prototype, 'sources', {
  get: function get() {
    var sources = [];

    for (var i = 0; i < this._sections.length; i++) {
      for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
        sources.push(this._sections[i].consumer.sources[j]);
      }
    }

    return sources;
  }
});
/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.
 *   - column: The column number in the generated source.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.
 *   - column: The column number in the original source, or null.
 *   - name: The original identifier, or null.
 */

IndexedSourceMapConsumer.prototype.originalPositionFor = function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
  var needle = {
    generatedLine: util.getArg(aArgs, 'line'),
    generatedColumn: util.getArg(aArgs, 'column')
  }; // Find the section containing the generated position we're trying to map
  // to an original position.

  var sectionIndex = binarySearch.search(needle, this._sections, function (needle, section) {
    var cmp = needle.generatedLine - section.generatedOffset.generatedLine;

    if (cmp) {
      return cmp;
    }

    return needle.generatedColumn - section.generatedOffset.generatedColumn;
  });
  var section = this._sections[sectionIndex];

  if (!section) {
    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }

  return section.consumer.originalPositionFor({
    line: needle.generatedLine - (section.generatedOffset.generatedLine - 1),
    column: needle.generatedColumn - (section.generatedOffset.generatedLine === needle.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
    bias: aArgs.bias
  });
};
/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */


IndexedSourceMapConsumer.prototype.hasContentsOfAllSources = function IndexedSourceMapConsumer_hasContentsOfAllSources() {
  return this._sections.every(function (s) {
    return s.consumer.hasContentsOfAllSources();
  });
};
/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */


IndexedSourceMapConsumer.prototype.sourceContentFor = function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
  for (var i = 0; i < this._sections.length; i++) {
    var section = this._sections[i];
    var content = section.consumer.sourceContentFor(aSource, true);

    if (content) {
      return content;
    }
  }

  if (nullOnMissing) {
    return null;
  } else {
    throw new Error('"' + aSource + '" is not in the SourceMap.');
  }
};
/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.
 *   - column: The column number in the original source.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.
 *   - column: The column number in the generated source, or null.
 */


IndexedSourceMapConsumer.prototype.generatedPositionFor = function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
  for (var i = 0; i < this._sections.length; i++) {
    var section = this._sections[i]; // Only consider this section if the requested source is in the list of
    // sources of the consumer.

    if (section.consumer.sources.indexOf(util.getArg(aArgs, 'source')) === -1) {
      continue;
    }

    var generatedPosition = section.consumer.generatedPositionFor(aArgs);

    if (generatedPosition) {
      var ret = {
        line: generatedPosition.line + (section.generatedOffset.generatedLine - 1),
        column: generatedPosition.column + (section.generatedOffset.generatedLine === generatedPosition.line ? section.generatedOffset.generatedColumn - 1 : 0)
      };
      return ret;
    }
  }

  return {
    line: null,
    column: null
  };
};
/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */


IndexedSourceMapConsumer.prototype._parseMappings = function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
  this.__generatedMappings = [];
  this.__originalMappings = [];

  for (var i = 0; i < this._sections.length; i++) {
    var section = this._sections[i];
    var sectionMappings = section.consumer._generatedMappings;

    for (var j = 0; j < sectionMappings.length; j++) {
      var mapping = sectionMappings[j];

      var source = section.consumer._sources.at(mapping.source);

      if (section.consumer.sourceRoot !== null) {
        source = util.join(section.consumer.sourceRoot, source);
      }

      this._sources.add(source);

      source = this._sources.indexOf(source);

      var name = section.consumer._names.at(mapping.name);

      this._names.add(name);

      name = this._names.indexOf(name); // The mappings coming from the consumer for the section have
      // generated positions relative to the start of the section, so we
      // need to offset them to be relative to the start of the concatenated
      // generated file.

      var adjustedMapping = {
        source: source,
        generatedLine: mapping.generatedLine + (section.generatedOffset.generatedLine - 1),
        generatedColumn: mapping.generatedColumn + (section.generatedOffset.generatedLine === mapping.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
        originalLine: mapping.originalLine,
        originalColumn: mapping.originalColumn,
        name: name
      };

      this.__generatedMappings.push(adjustedMapping);

      if (typeof adjustedMapping.originalLine === 'number') {
        this.__originalMappings.push(adjustedMapping);
      }
    }
  }

  quickSort(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
  quickSort(this.__originalMappings, util.compareByOriginalPositions);
};

exports.IndexedSourceMapConsumer = IndexedSourceMapConsumer;

/***/ }),
/* 153 */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */

/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
exports.GREATEST_LOWER_BOUND = 1;
exports.LEAST_UPPER_BOUND = 2;
/**
 * Recursive implementation of binary search.
 *
 * @param aLow Indices here and lower do not contain the needle.
 * @param aHigh Indices here and higher do not contain the needle.
 * @param aNeedle The element being searched for.
 * @param aHaystack The non-empty array being searched.
 * @param aCompare Function which takes two elements and returns -1, 0, or 1.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 */

function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
  // This function terminates when one of the following is true:
  //
  //   1. We find the exact element we are looking for.
  //
  //   2. We did not find the exact element, but we can return the index of
  //      the next-closest element.
  //
  //   3. We did not find the exact element, and there is no next-closest
  //      element than the one we are searching for, so we return -1.
  var mid = Math.floor((aHigh - aLow) / 2) + aLow;
  var cmp = aCompare(aNeedle, aHaystack[mid], true);

  if (cmp === 0) {
    // Found the element we are looking for.
    return mid;
  } else if (cmp > 0) {
    // Our needle is greater than aHaystack[mid].
    if (aHigh - mid > 1) {
      // The element is in the upper half.
      return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
    } // The exact needle element was not found in this haystack. Determine if
    // we are in termination case (3) or (2) and return the appropriate thing.


    if (aBias == exports.LEAST_UPPER_BOUND) {
      return aHigh < aHaystack.length ? aHigh : -1;
    } else {
      return mid;
    }
  } else {
    // Our needle is less than aHaystack[mid].
    if (mid - aLow > 1) {
      // The element is in the lower half.
      return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
    } // we are in termination case (3) or (2) and return the appropriate thing.


    if (aBias == exports.LEAST_UPPER_BOUND) {
      return mid;
    } else {
      return aLow < 0 ? -1 : aLow;
    }
  }
}
/**
 * This is an implementation of binary search which will always try and return
 * the index of the closest element if there is no exact hit. This is because
 * mappings between original and generated line/col pairs are single points,
 * and there is an implicit region between each of them, so a miss just means
 * that you aren't on the very start of a region.
 *
 * @param aNeedle The element you are looking for.
 * @param aHaystack The array that is being searched.
 * @param aCompare A function which takes the needle and an element in the
 *     array and returns -1, 0, or 1 depending on whether the needle is less
 *     than, equal to, or greater than the element, respectively.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'binarySearch.GREATEST_LOWER_BOUND'.
 */


exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
  if (aHaystack.length === 0) {
    return -1;
  }

  var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack, aCompare, aBias || exports.GREATEST_LOWER_BOUND);

  if (index < 0) {
    return -1;
  } // We have found either the exact element, or the next-closest element than
  // the one we are searching for. However, there may be more than one such
  // element. Make sure we always return the smallest of these.


  while (index - 1 >= 0) {
    if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
      break;
    }

    --index;
  }

  return index;
};

/***/ }),
/* 154 */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */

/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
// It turns out that some (most?) JavaScript engines don't self-host
// `Array.prototype.sort`. This makes sense because C++ will likely remain
// faster than JS when doing raw CPU-intensive sorting. However, when using a
// custom comparator function, calling back and forth between the VM's C++ and
// JIT'd JS is rather slow *and* loses JIT type information, resulting in
// worse generated code for the comparator function than would be optimal. In
// fact, when sorting with a comparator, these costs outweigh the benefits of
// sorting in C++. By using our own JS-implemented Quick Sort (below), we get
// a ~3500ms mean speed-up in `bench/bench.html`.

/**
 * Swap the elements indexed by `x` and `y` in the array `ary`.
 *
 * @param {Array} ary
 *        The array.
 * @param {Number} x
 *        The index of the first item.
 * @param {Number} y
 *        The index of the second item.
 */
function swap(ary, x, y) {
  var temp = ary[x];
  ary[x] = ary[y];
  ary[y] = temp;
}
/**
 * Returns a random integer within the range `low .. high` inclusive.
 *
 * @param {Number} low
 *        The lower bound on the range.
 * @param {Number} high
 *        The upper bound on the range.
 */


function randomIntInRange(low, high) {
  return Math.round(low + Math.random() * (high - low));
}
/**
 * The Quick Sort algorithm.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 * @param {Number} p
 *        Start index of the array
 * @param {Number} r
 *        End index of the array
 */


function doQuickSort(ary, comparator, p, r) {
  // If our lower bound is less than our upper bound, we (1) partition the
  // array into two pieces and (2) recurse on each half. If it is not, this is
  // the empty array and our base case.
  if (p < r) {
    // (1) Partitioning.
    //
    // The partitioning chooses a pivot between `p` and `r` and moves all
    // elements that are less than or equal to the pivot to the before it, and
    // all the elements that are greater than it after it. The effect is that
    // once partition is done, the pivot is in the exact place it will be when
    // the array is put in sorted order, and it will not need to be moved
    // again. This runs in O(n) time.
    // Always choose a random pivot so that an input array which is reverse
    // sorted does not cause O(n^2) running time.
    var pivotIndex = randomIntInRange(p, r);
    var i = p - 1;
    swap(ary, pivotIndex, r);
    var pivot = ary[r]; // Immediately after `j` is incremented in this loop, the following hold
    // true:
    //
    //   * Every element in `ary[p .. i]` is less than or equal to the pivot.
    //
    //   * Every element in `ary[i+1 .. j-1]` is greater than the pivot.

    for (var j = p; j < r; j++) {
      if (comparator(ary[j], pivot) <= 0) {
        i += 1;
        swap(ary, i, j);
      }
    }

    swap(ary, i + 1, j);
    var q = i + 1; // (2) Recurse on each half.

    doQuickSort(ary, comparator, p, q - 1);
    doQuickSort(ary, comparator, q + 1, r);
  }
}
/**
 * Sort the given array in-place with the given comparator function.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 */


exports.quickSort = function (ary, comparator) {
  doQuickSort(ary, comparator, 0, ary.length - 1);
};

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */

/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
var SourceMapGenerator = __webpack_require__(79).SourceMapGenerator;

var util = __webpack_require__(9); // Matches a Windows-style `\r\n` newline or a `\n` newline used by all other
// operating systems these days (capturing the result).


var REGEX_NEWLINE = /(\r?\n)/; // Newline character code for charCodeAt() comparisons

var NEWLINE_CODE = 10; // Private symbol for identifying `SourceNode`s when multiple versions of
// the source-map library are loaded. This MUST NOT CHANGE across
// versions!

var isSourceNode = "$$$isSourceNode$$$";
/**
 * SourceNodes provide a way to abstract over interpolating/concatenating
 * snippets of generated JavaScript source code while maintaining the line and
 * column information associated with the original source code.
 *
 * @param aLine The original line number.
 * @param aColumn The original column number.
 * @param aSource The original source's filename.
 * @param aChunks Optional. An array of strings which are snippets of
 *        generated JS, or other SourceNodes.
 * @param aName The original identifier.
 */

function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
  this.children = [];
  this.sourceContents = {};
  this.line = aLine == null ? null : aLine;
  this.column = aColumn == null ? null : aColumn;
  this.source = aSource == null ? null : aSource;
  this.name = aName == null ? null : aName;
  this[isSourceNode] = true;
  if (aChunks != null) this.add(aChunks);
}
/**
 * Creates a SourceNode from generated code and a SourceMapConsumer.
 *
 * @param aGeneratedCode The generated code
 * @param aSourceMapConsumer The SourceMap for the generated code
 * @param aRelativePath Optional. The path that relative sources in the
 *        SourceMapConsumer should be relative to.
 */


SourceNode.fromStringWithSourceMap = function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer, aRelativePath) {
  // The SourceNode we want to fill with the generated code
  // and the SourceMap
  var node = new SourceNode(); // All even indices of this array are one line of the generated code,
  // while all odd indices are the newlines between two adjacent lines
  // (since `REGEX_NEWLINE` captures its match).
  // Processed fragments are removed from this array, by calling `shiftNextLine`.

  var remainingLines = aGeneratedCode.split(REGEX_NEWLINE);

  var shiftNextLine = function shiftNextLine() {
    var lineContents = remainingLines.shift(); // The last line of a file might not have a newline.

    var newLine = remainingLines.shift() || "";
    return lineContents + newLine;
  }; // We need to remember the position of "remainingLines"


  var lastGeneratedLine = 1,
      lastGeneratedColumn = 0; // The generate SourceNodes we need a code range.
  // To extract it current and last mapping is used.
  // Here we store the last mapping.

  var lastMapping = null;
  aSourceMapConsumer.eachMapping(function (mapping) {
    if (lastMapping !== null) {
      // We add the code from "lastMapping" to "mapping":
      // First check if there is a new line in between.
      if (lastGeneratedLine < mapping.generatedLine) {
        // Associate first line with "lastMapping"
        addMappingWithCode(lastMapping, shiftNextLine());
        lastGeneratedLine++;
        lastGeneratedColumn = 0; // The remaining code is added without mapping
      } else {
        // There is no new line in between.
        // Associate the code between "lastGeneratedColumn" and
        // "mapping.generatedColumn" with "lastMapping"
        var nextLine = remainingLines[0];
        var code = nextLine.substr(0, mapping.generatedColumn - lastGeneratedColumn);
        remainingLines[0] = nextLine.substr(mapping.generatedColumn - lastGeneratedColumn);
        lastGeneratedColumn = mapping.generatedColumn;
        addMappingWithCode(lastMapping, code); // No more remaining code, continue

        lastMapping = mapping;
        return;
      }
    } // We add the generated code until the first mapping
    // to the SourceNode without any mapping.
    // Each line is added as separate string.


    while (lastGeneratedLine < mapping.generatedLine) {
      node.add(shiftNextLine());
      lastGeneratedLine++;
    }

    if (lastGeneratedColumn < mapping.generatedColumn) {
      var nextLine = remainingLines[0];
      node.add(nextLine.substr(0, mapping.generatedColumn));
      remainingLines[0] = nextLine.substr(mapping.generatedColumn);
      lastGeneratedColumn = mapping.generatedColumn;
    }

    lastMapping = mapping;
  }, this); // We have processed all mappings.

  if (remainingLines.length > 0) {
    if (lastMapping) {
      // Associate the remaining code in the current line with "lastMapping"
      addMappingWithCode(lastMapping, shiftNextLine());
    } // and add the remaining lines without any mapping


    node.add(remainingLines.join(""));
  } // Copy sourcesContent into SourceNode


  aSourceMapConsumer.sources.forEach(function (sourceFile) {
    var content = aSourceMapConsumer.sourceContentFor(sourceFile);

    if (content != null) {
      if (aRelativePath != null) {
        sourceFile = util.join(aRelativePath, sourceFile);
      }

      node.setSourceContent(sourceFile, content);
    }
  });
  return node;

  function addMappingWithCode(mapping, code) {
    if (mapping === null || mapping.source === undefined) {
      node.add(code);
    } else {
      var source = aRelativePath ? util.join(aRelativePath, mapping.source) : mapping.source;
      node.add(new SourceNode(mapping.originalLine, mapping.originalColumn, source, code, mapping.name));
    }
  }
};
/**
 * Add a chunk of generated JS to this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */


SourceNode.prototype.add = function SourceNode_add(aChunk) {
  if (Array.isArray(aChunk)) {
    aChunk.forEach(function (chunk) {
      this.add(chunk);
    }, this);
  } else if (aChunk[isSourceNode] || typeof aChunk === "string") {
    if (aChunk) {
      this.children.push(aChunk);
    }
  } else {
    throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk);
  }

  return this;
};
/**
 * Add a chunk of generated JS to the beginning of this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */


SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
  if (Array.isArray(aChunk)) {
    for (var i = aChunk.length - 1; i >= 0; i--) {
      this.prepend(aChunk[i]);
    }
  } else if (aChunk[isSourceNode] || typeof aChunk === "string") {
    this.children.unshift(aChunk);
  } else {
    throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk);
  }

  return this;
};
/**
 * Walk over the tree of JS snippets in this node and its children. The
 * walking function is called once for each snippet of JS and is passed that
 * snippet and the its original associated source's line/column location.
 *
 * @param aFn The traversal function.
 */


SourceNode.prototype.walk = function SourceNode_walk(aFn) {
  var chunk;

  for (var i = 0, len = this.children.length; i < len; i++) {
    chunk = this.children[i];

    if (chunk[isSourceNode]) {
      chunk.walk(aFn);
    } else {
      if (chunk !== '') {
        aFn(chunk, {
          source: this.source,
          line: this.line,
          column: this.column,
          name: this.name
        });
      }
    }
  }
};
/**
 * Like `String.prototype.join` except for SourceNodes. Inserts `aStr` between
 * each of `this.children`.
 *
 * @param aSep The separator.
 */


SourceNode.prototype.join = function SourceNode_join(aSep) {
  var newChildren;
  var i;
  var len = this.children.length;

  if (len > 0) {
    newChildren = [];

    for (i = 0; i < len - 1; i++) {
      newChildren.push(this.children[i]);
      newChildren.push(aSep);
    }

    newChildren.push(this.children[i]);
    this.children = newChildren;
  }

  return this;
};
/**
 * Call String.prototype.replace on the very right-most source snippet. Useful
 * for trimming whitespace from the end of a source node, etc.
 *
 * @param aPattern The pattern to replace.
 * @param aReplacement The thing to replace the pattern with.
 */


SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
  var lastChild = this.children[this.children.length - 1];

  if (lastChild[isSourceNode]) {
    lastChild.replaceRight(aPattern, aReplacement);
  } else if (typeof lastChild === 'string') {
    this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
  } else {
    this.children.push(''.replace(aPattern, aReplacement));
  }

  return this;
};
/**
 * Set the source content for a source file. This will be added to the SourceMapGenerator
 * in the sourcesContent field.
 *
 * @param aSourceFile The filename of the source file
 * @param aSourceContent The content of the source file
 */


SourceNode.prototype.setSourceContent = function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
  this.sourceContents[util.toSetString(aSourceFile)] = aSourceContent;
};
/**
 * Walk over the tree of SourceNodes. The walking function is called for each
 * source file content and is passed the filename and source content.
 *
 * @param aFn The traversal function.
 */


SourceNode.prototype.walkSourceContents = function SourceNode_walkSourceContents(aFn) {
  for (var i = 0, len = this.children.length; i < len; i++) {
    if (this.children[i][isSourceNode]) {
      this.children[i].walkSourceContents(aFn);
    }
  }

  var sources = Object.keys(this.sourceContents);

  for (var i = 0, len = sources.length; i < len; i++) {
    aFn(util.fromSetString(sources[i]), this.sourceContents[sources[i]]);
  }
};
/**
 * Return the string representation of this source node. Walks over the tree
 * and concatenates all the various snippets together to one string.
 */


SourceNode.prototype.toString = function SourceNode_toString() {
  var str = "";
  this.walk(function (chunk) {
    str += chunk;
  });
  return str;
};
/**
 * Returns the string representation of this source node along with a source
 * map.
 */


SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
  var generated = {
    code: "",
    line: 1,
    column: 0
  };
  var map = new SourceMapGenerator(aArgs);
  var sourceMappingActive = false;
  var lastOriginalSource = null;
  var lastOriginalLine = null;
  var lastOriginalColumn = null;
  var lastOriginalName = null;
  this.walk(function (chunk, original) {
    generated.code += chunk;

    if (original.source !== null && original.line !== null && original.column !== null) {
      if (lastOriginalSource !== original.source || lastOriginalLine !== original.line || lastOriginalColumn !== original.column || lastOriginalName !== original.name) {
        map.addMapping({
          source: original.source,
          original: {
            line: original.line,
            column: original.column
          },
          generated: {
            line: generated.line,
            column: generated.column
          },
          name: original.name
        });
      }

      lastOriginalSource = original.source;
      lastOriginalLine = original.line;
      lastOriginalColumn = original.column;
      lastOriginalName = original.name;
      sourceMappingActive = true;
    } else if (sourceMappingActive) {
      map.addMapping({
        generated: {
          line: generated.line,
          column: generated.column
        }
      });
      lastOriginalSource = null;
      sourceMappingActive = false;
    }

    for (var idx = 0, length = chunk.length; idx < length; idx++) {
      if (chunk.charCodeAt(idx) === NEWLINE_CODE) {
        generated.line++;
        generated.column = 0; // Mappings end at eol

        if (idx + 1 === length) {
          lastOriginalSource = null;
          sourceMappingActive = false;
        } else if (sourceMappingActive) {
          map.addMapping({
            source: original.source,
            original: {
              line: original.line,
              column: original.column
            },
            generated: {
              line: generated.line,
              column: generated.column
            },
            name: original.name
          });
        }
      } else {
        generated.column++;
      }
    }
  });
  this.walkSourceContents(function (sourceFile, sourceContent) {
    map.setSourceContent(sourceFile, sourceContent);
  });
  return {
    code: generated.code,
    map: map
  };
};

exports.SourceNode = SourceNode;

/***/ }),
/* 156 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var _rule = __webpack_require__(10);

var _rule2 = _interopRequireDefault(_rule);

var _lessStringify = __webpack_require__(14);

var _lessStringify2 = _interopRequireDefault(_lessStringify);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Import = function (_PostCssRule) {
  _inherits(Import, _PostCssRule);

  function Import(defaults) {
    _classCallCheck(this, Import);

    var _this = _possibleConstructorReturn(this, (Import.__proto__ || Object.getPrototypeOf(Import)).call(this, defaults));

    _this.type = 'import';
    return _this;
  }

  _createClass(Import, [{
    key: 'toString',
    value: function toString(stringifier) {
      if (!stringifier) {
        stringifier = {
          stringify: _lessStringify2.default
        };
      }

      return _get(Import.prototype.__proto__ || Object.getPrototypeOf(Import.prototype), 'toString', this).call(this, stringifier);
    }
  }]);

  return Import;
}(_rule2.default);

exports.default = Import;
module.exports = exports['default'];

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _jsBase = __webpack_require__(77);

var _sourceMap = __webpack_require__(78);

var _sourceMap2 = _interopRequireDefault(_sourceMap);

var _path = __webpack_require__(6);

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var MapGenerator = function () {
  function MapGenerator(stringify, root, opts) {
    _classCallCheck(this, MapGenerator);

    this.stringify = stringify;
    this.mapOpts = opts.map || {};
    this.root = root;
    this.opts = opts;
  }

  MapGenerator.prototype.isMap = function isMap() {
    if (typeof this.opts.map !== 'undefined') {
      return !!this.opts.map;
    } else {
      return this.previous().length > 0;
    }
  };

  MapGenerator.prototype.previous = function previous() {
    var _this = this;

    if (!this.previousMaps) {
      this.previousMaps = [];
      this.root.walk(function (node) {
        if (node.source && node.source.input.map) {
          var map = node.source.input.map;

          if (_this.previousMaps.indexOf(map) === -1) {
            _this.previousMaps.push(map);
          }
        }
      });
    }

    return this.previousMaps;
  };

  MapGenerator.prototype.isInline = function isInline() {
    if (typeof this.mapOpts.inline !== 'undefined') {
      return this.mapOpts.inline;
    }

    var annotation = this.mapOpts.annotation;

    if (typeof annotation !== 'undefined' && annotation !== true) {
      return false;
    }

    if (this.previous().length) {
      return this.previous().some(function (i) {
        return i.inline;
      });
    } else {
      return true;
    }
  };

  MapGenerator.prototype.isSourcesContent = function isSourcesContent() {
    if (typeof this.mapOpts.sourcesContent !== 'undefined') {
      return this.mapOpts.sourcesContent;
    }

    if (this.previous().length) {
      return this.previous().some(function (i) {
        return i.withContent();
      });
    } else {
      return true;
    }
  };

  MapGenerator.prototype.clearAnnotation = function clearAnnotation() {
    if (this.mapOpts.annotation === false) return;
    var node = void 0;

    for (var i = this.root.nodes.length - 1; i >= 0; i--) {
      node = this.root.nodes[i];
      if (node.type !== 'comment') continue;

      if (node.text.indexOf('# sourceMappingURL=') === 0) {
        this.root.removeChild(i);
      }
    }
  };

  MapGenerator.prototype.setSourcesContent = function setSourcesContent() {
    var _this2 = this;

    var already = {};
    this.root.walk(function (node) {
      if (node.source) {
        var from = node.source.input.from;

        if (from && !already[from]) {
          already[from] = true;

          var relative = _this2.relative(from);

          _this2.map.setSourceContent(relative, node.source.input.css);
        }
      }
    });
  };

  MapGenerator.prototype.applyPrevMaps = function applyPrevMaps() {
    for (var _iterator = this.previous(), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var prev = _ref;
      var from = this.relative(prev.file);

      var root = prev.root || _path2.default.dirname(prev.file);

      var map = void 0;

      if (this.mapOpts.sourcesContent === false) {
        map = new _sourceMap2.default.SourceMapConsumer(prev.text);

        if (map.sourcesContent) {
          map.sourcesContent = map.sourcesContent.map(function () {
            return null;
          });
        }
      } else {
        map = prev.consumer();
      }

      this.map.applySourceMap(map, from, this.relative(root));
    }
  };

  MapGenerator.prototype.isAnnotation = function isAnnotation() {
    if (this.isInline()) {
      return true;
    } else if (typeof this.mapOpts.annotation !== 'undefined') {
      return this.mapOpts.annotation;
    } else if (this.previous().length) {
      return this.previous().some(function (i) {
        return i.annotation;
      });
    } else {
      return true;
    }
  };

  MapGenerator.prototype.addAnnotation = function addAnnotation() {
    var content = void 0;

    if (this.isInline()) {
      content = 'data:application/json;base64,' + _jsBase.Base64.encode(this.map.toString());
    } else if (typeof this.mapOpts.annotation === 'string') {
      content = this.mapOpts.annotation;
    } else {
      content = this.outputFile() + '.map';
    }

    var eol = '\n';
    if (this.css.indexOf('\r\n') !== -1) eol = '\r\n';
    this.css += eol + '/*# sourceMappingURL=' + content + ' */';
  };

  MapGenerator.prototype.outputFile = function outputFile() {
    if (this.opts.to) {
      return this.relative(this.opts.to);
    } else if (this.opts.from) {
      return this.relative(this.opts.from);
    } else {
      return 'to.css';
    }
  };

  MapGenerator.prototype.generateMap = function generateMap() {
    this.generateString();
    if (this.isSourcesContent()) this.setSourcesContent();
    if (this.previous().length > 0) this.applyPrevMaps();
    if (this.isAnnotation()) this.addAnnotation();

    if (this.isInline()) {
      return [this.css];
    } else {
      return [this.css, this.map];
    }
  };

  MapGenerator.prototype.relative = function relative(file) {
    if (file.indexOf('<') === 0) return file;
    if (/^\w+:\/\//.test(file)) return file;
    var from = this.opts.to ? _path2.default.dirname(this.opts.to) : '.';

    if (typeof this.mapOpts.annotation === 'string') {
      from = _path2.default.dirname(_path2.default.resolve(from, this.mapOpts.annotation));
    }

    file = _path2.default.relative(from, file);

    if (_path2.default.sep === '\\') {
      return file.replace(/\\/g, '/');
    } else {
      return file;
    }
  };

  MapGenerator.prototype.sourcePath = function sourcePath(node) {
    if (this.mapOpts.from) {
      return this.mapOpts.from;
    } else {
      return this.relative(node.source.input.from);
    }
  };

  MapGenerator.prototype.generateString = function generateString() {
    var _this3 = this;

    this.css = '';
    this.map = new _sourceMap2.default.SourceMapGenerator({
      file: this.outputFile()
    });
    var line = 1;
    var column = 1;
    var lines = void 0,
        last = void 0;
    this.stringify(this.root, function (str, node, type) {
      _this3.css += str;

      if (node && type !== 'end') {
        if (node.source && node.source.start) {
          _this3.map.addMapping({
            source: _this3.sourcePath(node),
            generated: {
              line: line,
              column: column - 1
            },
            original: {
              line: node.source.start.line,
              column: node.source.start.column - 1
            }
          });
        } else {
          _this3.map.addMapping({
            source: '<no source>',
            original: {
              line: 1,
              column: 0
            },
            generated: {
              line: line,
              column: column - 1
            }
          });
        }
      }

      lines = str.match(/\n/g);

      if (lines) {
        line += lines.length;
        last = str.lastIndexOf('\n');
        column = str.length - last;
      } else {
        column += str.length;
      }

      if (node && type !== 'start') {
        if (node.source && node.source.end) {
          _this3.map.addMapping({
            source: _this3.sourcePath(node),
            generated: {
              line: line,
              column: column - 1
            },
            original: {
              line: node.source.end.line,
              column: node.source.end.column
            }
          });
        } else {
          _this3.map.addMapping({
            source: '<no source>',
            original: {
              line: 1,
              column: 0
            },
            generated: {
              line: line,
              column: column - 1
            }
          });
        }
      }
    });
  };

  MapGenerator.prototype.generate = function generate() {
    this.clearAnnotation();

    if (this.isMap()) {
      return this.generateMap();
    } else {
      var result = '';
      this.stringify(this.root, function (i) {
        result += i;
      });
      return [result];
    }
  };

  return MapGenerator;
}();

exports.default = MapGenerator;
module.exports = exports['default'];

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _warning = __webpack_require__(160);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
/**
 * Provides the result of the PostCSS transformations.
 *
 * A Result instance is returned by {@link LazyResult#then}
 * or {@link Root#toResult} methods.
 *
 * @example
 * postcss([cssnext]).process(css).then(function (result) {
 *    console.log(result.css);
 * });
 *
 * @example
 * var result2 = postcss.parse(css).toResult();
 */


var Result = function () {
  /**
   * @param {Processor} processor - processor used for this transformation.
   * @param {Root}      root      - Root node after all transformations.
   * @param {processOptions} opts - options from the {@link Processor#process}
   *                                or {@link Root#toResult}
   */
  function Result(processor, root, opts) {
    _classCallCheck(this, Result);
    /**
     * @member {Processor} - The Processor instance used
     *                       for this transformation.
     *
     * @example
     * for ( let plugin of result.processor.plugins) {
     *   if ( plugin.postcssPlugin === 'postcss-bad' ) {
     *     throw 'postcss-good is incompatible with postcss-bad';
     *   }
     * });
     */


    this.processor = processor;
    /**
     * @member {Message[]} - Contains messages from plugins
     *                       (e.g., warnings or custom messages).
     *                       Each message should have type
     *                       and plugin properties.
     *
     * @example
     * postcss.plugin('postcss-min-browser', () => {
     *   return (root, result) => {
     *     var browsers = detectMinBrowsersByCanIUse(root);
     *     result.messages.push({
     *       type:    'min-browser',
     *       plugin:  'postcss-min-browser',
     *       browsers: browsers
     *     });
     *   };
     * });
     */

    this.messages = [];
    /**
     * @member {Root} - Root node after all transformations.
     *
     * @example
     * root.toResult().root == root;
     */

    this.root = root;
    /**
     * @member {processOptions} - Options from the {@link Processor#process}
     *                            or {@link Root#toResult} call
     *                            that produced this Result instance.
     *
     * @example
     * root.toResult(opts).opts == opts;
     */

    this.opts = opts;
    /**
     * @member {string} - A CSS string representing of {@link Result#root}.
     *
     * @example
     * postcss.parse('a{}').toResult().css //=> "a{}"
     */

    this.css = undefined;
    /**
     * @member {SourceMapGenerator} - An instance of `SourceMapGenerator`
     *                                class from the `source-map` library,
     *                                representing changes
     *                                to the {@link Result#root} instance.
     *
     * @example
     * result.map.toJSON() //=> { version: 3, file: 'a.css', … }
     *
     * @example
     * if ( result.map ) {
     *   fs.writeFileSync(result.opts.to + '.map', result.map.toString());
     * }
     */

    this.map = undefined;
  }
  /**
   * Returns for @{link Result#css} content.
   *
   * @example
   * result + '' === result.css
   *
   * @return {string} string representing of {@link Result#root}
   */


  Result.prototype.toString = function toString() {
    return this.css;
  };
  /**
   * Creates an instance of {@link Warning} and adds it
   * to {@link Result#messages}.
   *
   * @param {string} text        - warning message
   * @param {Object} [opts]      - warning options
   * @param {Node}   opts.node   - CSS node that caused the warning
   * @param {string} opts.word   - word in CSS source that caused the warning
   * @param {number} opts.index  - index in CSS node string that caused
   *                               the warning
   * @param {string} opts.plugin - name of the plugin that created
   *                               this warning. {@link Result#warn} fills
   *                               this property automatically.
   *
   * @return {Warning} created warning
   */


  Result.prototype.warn = function warn(text) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (!opts.plugin) {
      if (this.lastPlugin && this.lastPlugin.postcssPlugin) {
        opts.plugin = this.lastPlugin.postcssPlugin;
      }
    }

    var warning = new _warning2.default(text, opts);
    this.messages.push(warning);
    return warning;
  };
  /**
   * Returns warnings from plugins. Filters {@link Warning} instances
   * from {@link Result#messages}.
   *
   * @example
   * result.warnings().forEach(warn => {
   *   console.warn(warn.toString());
   * });
   *
   * @return {Warning[]} warnings from plugins
   */


  Result.prototype.warnings = function warnings() {
    return this.messages.filter(function (i) {
      return i.type === 'warning';
    });
  };
  /**
   * An alias for the {@link Result#css} property.
   * Use it with syntaxes that generate non-CSS output.
   * @type {string}
   *
   * @example
   * result.css === result.content;
   */


  _createClass(Result, [{
    key: 'content',
    get: function get() {
      return this.css;
    }
  }]);

  return Result;
}();

exports.default = Result;
/**
 * @typedef  {object} Message
 * @property {string} type   - message type
 * @property {string} plugin - source PostCSS plugin name
 */

module.exports = exports['default'];

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
/**
 * Represents a plugin’s warning. It can be created using {@link Node#warn}.
 *
 * @example
 * if ( decl.important ) {
 *     decl.warn(result, 'Avoid !important', { word: '!important' });
 * }
 */


var Warning = function () {
  /**
   * @param {string} text        - warning message
   * @param {Object} [opts]      - warning options
   * @param {Node}   opts.node   - CSS node that caused the warning
   * @param {string} opts.word   - word in CSS source that caused the warning
   * @param {number} opts.index  - index in CSS node string that caused
   *                               the warning
   * @param {string} opts.plugin - name of the plugin that created
   *                               this warning. {@link Result#warn} fills
   *                               this property automatically.
   */
  function Warning(text) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Warning);
    /**
     * @member {string} - Type to filter warnings from
     *                    {@link Result#messages}. Always equal
     *                    to `"warning"`.
     *
     * @example
     * const nonWarning = result.messages.filter(i => i.type !== 'warning')
     */


    this.type = 'warning';
    /**
     * @member {string} - The warning message.
     *
     * @example
     * warning.text //=> 'Try to avoid !important'
     */

    this.text = text;

    if (opts.node && opts.node.source) {
      var pos = opts.node.positionBy(opts);
      /**
       * @member {number} - Line in the input file
       *                    with this warning’s source
       *
       * @example
       * warning.line //=> 5
       */

      this.line = pos.line;
      /**
       * @member {number} - Column in the input file
       *                    with this warning’s source.
       *
       * @example
       * warning.column //=> 6
       */

      this.column = pos.column;
    }

    for (var opt in opts) {
      this[opt] = opts[opt];
    }
  }
  /**
   * Returns a warning position and message.
   *
   * @example
   * warning.toString() //=> 'postcss-lint:a.css:10:14: Avoid !important'
   *
   * @return {string} warning position and message
   */


  Warning.prototype.toString = function toString() {
    if (this.node) {
      return this.node.error(this.text, {
        plugin: this.plugin,
        index: this.index,
        word: this.word
      }).message;
    } else if (this.plugin) {
      return this.plugin + ': ' + this.text;
    } else {
      return this.text;
    }
  };
  /**
   * @memberof Warning#
   * @member {string} plugin - The name of the plugin that created
   *                           it will fill this property automatically.
   *                           this warning. When you call {@link Node#warn}
   *
   * @example
   * warning.plugin //=> 'postcss-important'
   */

  /**
   * @memberof Warning#
   * @member {Node} node - Contains the CSS node that caused the warning.
   *
   * @example
   * warning.node.toString() //=> 'color: white !important'
   */


  return Warning;
}();

exports.default = Warning;
module.exports = exports['default'];

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _lazyResult = __webpack_require__(86);

var _lazyResult2 = _interopRequireDefault(_lazyResult);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
/**
 * Contains plugins to process CSS. Create one `Processor` instance,
 * initialize its plugins, and then use that instance on numerous CSS files.
 *
 * @example
 * const processor = postcss([autoprefixer, precss]);
 * processor.process(css1).then(result => console.log(result.css));
 * processor.process(css2).then(result => console.log(result.css));
 */


var Processor = function () {
  /**
   * @param {Array.<Plugin|pluginFunction>|Processor} plugins - PostCSS
   *        plugins. See {@link Processor#use} for plugin format.
   */
  function Processor() {
    var plugins = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, Processor);
    /**
     * @member {string} - Current PostCSS version.
     *
     * @example
     * if ( result.processor.version.split('.')[0] !== '5' ) {
     *   throw new Error('This plugin works only with PostCSS 5');
     * }
     */


    this.version = '5.2.17';
    /**
     * @member {pluginFunction[]} - Plugins added to this processor.
     *
     * @example
     * const processor = postcss([autoprefixer, precss]);
     * processor.plugins.length //=> 2
     */

    this.plugins = this.normalize(plugins);
  }
  /**
   * Adds a plugin to be used as a CSS processor.
   *
   * PostCSS plugin can be in 4 formats:
   * * A plugin created by {@link postcss.plugin} method.
   * * A function. PostCSS will pass the function a @{link Root}
   *   as the first argument and current {@link Result} instance
   *   as the second.
   * * An object with a `postcss` method. PostCSS will use that method
   *   as described in #2.
   * * Another {@link Processor} instance. PostCSS will copy plugins
   *   from that instance into this one.
   *
   * Plugins can also be added by passing them as arguments when creating
   * a `postcss` instance (see [`postcss(plugins)`]).
   *
   * Asynchronous plugins should return a `Promise` instance.
   *
   * @param {Plugin|pluginFunction|Processor} plugin - PostCSS plugin
   *                                                   or {@link Processor}
   *                                                   with plugins
   *
   * @example
   * const processor = postcss()
   *   .use(autoprefixer)
   *   .use(precss);
   *
   * @return {Processes} current processor to make methods chain
   */


  Processor.prototype.use = function use(plugin) {
    this.plugins = this.plugins.concat(this.normalize([plugin]));
    return this;
  };
  /**
   * Parses source CSS and returns a {@link LazyResult} Promise proxy.
   * Because some plugins can be asynchronous it doesn’t make
   * any transformations. Transformations will be applied
   * in the {@link LazyResult} methods.
   *
   * @param {string|toString|Result} css - String with input CSS or
   *                                       any object with a `toString()`
   *                                       method, like a Buffer.
   *                                       Optionally, send a {@link Result}
   *                                       instance and the processor will
   *                                       take the {@link Root} from it.
   * @param {processOptions} [opts]      - options
   *
   * @return {LazyResult} Promise proxy
   *
   * @example
   * processor.process(css, { from: 'a.css', to: 'a.out.css' })
   *   .then(result => {
   *      console.log(result.css);
   *   });
   */


  Processor.prototype.process = function process(css) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return new _lazyResult2.default(this, css, opts);
  };

  Processor.prototype.normalize = function normalize(plugins) {
    var normalized = [];

    for (var _iterator = plugins, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var i = _ref;
      if (i.postcss) i = i.postcss;

      if ((typeof i === 'undefined' ? 'undefined' : _typeof(i)) === 'object' && Array.isArray(i.plugins)) {
        normalized = normalized.concat(i.plugins);
      } else if (typeof i === 'function') {
        normalized.push(i);
      } else if ((typeof i === 'undefined' ? 'undefined' : _typeof(i)) === 'object' && (i.parse || i.stringify)) {
        throw new Error('PostCSS syntaxes cannot be used as plugins. ' + 'Instead, please use one of the ' + 'syntax/parser/stringifier options as ' + 'outlined in your PostCSS ' + 'runner documentation.');
      } else {
        throw new Error(i + ' is not a PostCSS plugin');
      }
    }

    return normalized;
  };

  return Processor;
}();

exports.default = Processor;
/**
 * @callback builder
 * @param {string} part          - part of generated CSS connected to this node
 * @param {Node}   node          - AST node
 * @param {"start"|"end"} [type] - node’s part type
 */

/**
 * @callback parser
 *
 * @param {string|toString} css   - string with input CSS or any object
 *                                  with toString() method, like a Buffer
 * @param {processOptions} [opts] - options with only `from` and `map` keys
 *
 * @return {Root} PostCSS AST
 */

/**
 * @callback stringifier
 *
 * @param {Node} node       - start node for stringifing. Usually {@link Root}.
 * @param {builder} builder - function to concatenate CSS from node’s parts
 *                            or generate string and source map
 *
 * @return {void}
 */

/**
 * @typedef {object} syntax
 * @property {parser} parse          - function to generate AST by string
 * @property {stringifier} stringify - function to generate string by AST
 */

/**
 * @typedef {object} toString
 * @property {function} toString
 */

/**
 * @callback pluginFunction
 * @param {Root} root     - parsed input CSS
 * @param {Result} result - result to set warnings or check other plugins
 */

/**
 * @typedef {object} Plugin
 * @property {function} postcss - PostCSS plugin function
 */

/**
 * @typedef {object} processOptions
 * @property {string} from             - the path of the CSS source file.
 *                                       You should always set `from`,
 *                                       because it is used in source map
 *                                       generation and syntax error messages.
 * @property {string} to               - the path where you’ll put the output
 *                                       CSS file. You should always set `to`
 *                                       to generate correct source maps.
 * @property {parser} parser           - function to generate AST by string
 * @property {stringifier} stringifier - class to generate string by AST
 * @property {syntax} syntax           - object with `parse` and `stringify`
 * @property {object} map              - source map options
 * @property {boolean} map.inline                    - does source map should
 *                                                     be embedded in the output
 *                                                     CSS as a base64-encoded
 *                                                     comment
 * @property {string|object|false|function} map.prev - source map content
 *                                                     from a previous
 *                                                     processing step
 *                                                     (for example, Sass).
 *                                                     PostCSS will try to find
 *                                                     previous map
 *                                                     automatically, so you
 *                                                     could disable it by
 *                                                     `false` value.
 * @property {boolean} map.sourcesContent            - does PostCSS should set
 *                                                     the origin content to map
 * @property {string|false} map.annotation           - does PostCSS should set
 *                                                     annotation comment to map
 * @property {string} map.from                       - override `from` in map’s
 *                                                     `sources`
 */

module.exports = exports['default'];

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/**
 * Contains helpers for safely splitting lists of CSS values,
 * preserving parentheses and quotes.
 *
 * @example
 * const list = postcss.list;
 *
 * @namespace list
 */

var list = {
  split: function split(string, separators, last) {
    var array = [];
    var current = '';
    var split = false;
    var func = 0;
    var quote = false;
    var escape = false;

    for (var i = 0; i < string.length; i++) {
      var letter = string[i];

      if (quote) {
        if (escape) {
          escape = false;
        } else if (letter === '\\') {
          escape = true;
        } else if (letter === quote) {
          quote = false;
        }
      } else if (letter === '"' || letter === '\'') {
        quote = letter;
      } else if (letter === '(') {
        func += 1;
      } else if (letter === ')') {
        if (func > 0) func -= 1;
      } else if (func === 0) {
        if (separators.indexOf(letter) !== -1) split = true;
      }

      if (split) {
        if (current !== '') array.push(current.trim());
        current = '';
        split = false;
      } else {
        current += letter;
      }
    }

    if (last || current !== '') array.push(current.trim());
    return array;
  },

  /**
   * Safely splits space-separated values (such as those for `background`,
   * `border-radius`, and other shorthand properties).
   *
   * @param {string} string - space-separated values
   *
   * @return {string[]} split values
   *
   * @example
   * postcss.list.space('1px calc(10% + 1px)') //=> ['1px', 'calc(10% + 1px)']
   */
  space: function space(string) {
    var spaces = [' ', '\n', '\t'];
    return list.split(string, spaces);
  },

  /**
   * Safely splits comma-separated values (such as those for `transition-*`
   * and `background` properties).
   *
   * @param {string} string - comma-separated values
   *
   * @return {string[]} split values
   *
   * @example
   * postcss.list.comma('black, linear-gradient(white, black)')
   * //=> ['black', 'linear-gradient(white, black)']
   */
  comma: function comma(string) {
    var comma = ',';
    return list.split(string, [comma], true);
  }
};
exports.default = list;
module.exports = exports['default'];

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var _stringifier = __webpack_require__(24);

var _stringifier2 = _interopRequireDefault(_stringifier);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var LessStringifier = function (_Stringifier) {
  _inherits(LessStringifier, _Stringifier);

  function LessStringifier() {
    _classCallCheck(this, LessStringifier);

    return _possibleConstructorReturn(this, (LessStringifier.__proto__ || Object.getPrototypeOf(LessStringifier)).apply(this, arguments));
  }

  _createClass(LessStringifier, [{
    key: 'comment',
    value: function comment(node) {
      this.builder(node.raws.content, node);
    }
  }, {
    key: 'import',
    value: function _import(node) {
      this.builder('@' + node.name);
      this.builder((node.raws.afterName || '') + (node.directives || '') + (node.raws.between || '') + (node.urlFunc ? 'url(' : '') + (node.raws.beforeUrl || '') + (node.importPath || '') + (node.raws.afterUrl || '') + (node.urlFunc ? ')' : '') + (node.raws.after || ''));

      if (node.raws.semicolon) {
        this.builder(';');
      }
    }
  }, {
    key: 'rule',
    value: function rule(node) {
      _get(LessStringifier.prototype.__proto__ || Object.getPrototypeOf(LessStringifier.prototype), 'rule', this).call(this, node);

      if (node.empty && node.raws.semicolon) {
        if (node.important) {
          if (node.raws.important) {
            this.builder(node.raws.important);
          } else {
            this.builder(' !important');
          }
        }

        if (node.raws.semicolon) {
          this.builder(';');
        }
      }
    }
  }, {
    key: 'block',
    value: function block(node, start) {
      var empty = node.empty;
      var between = this.raw(node, 'between', 'beforeOpen');
      var after = '';

      if (empty) {
        this.builder(start + between, node, 'start');
      } else {
        this.builder(start + between + '{', node, 'start');
      }

      if (node.nodes && node.nodes.length) {
        this.body(node);
        after = this.raw(node, 'after');
      } else {
        after = this.raw(node, 'after', 'emptyBody');
      }

      if (after) {
        this.builder(after);
      }

      if (!empty) {
        this.builder('}', node, 'end');
      }
    }
  }]);

  return LessStringifier;
}(_stringifier2.default);

exports.default = LessStringifier;
module.exports = exports['default'];

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var _rule = __webpack_require__(10);

var _rule2 = _interopRequireDefault(_rule);

var _lessStringify = __webpack_require__(14);

var _lessStringify2 = _interopRequireDefault(_lessStringify);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Rule = function (_PostCssRule) {
  _inherits(Rule, _PostCssRule);

  function Rule() {
    _classCallCheck(this, Rule);

    return _possibleConstructorReturn(this, (Rule.__proto__ || Object.getPrototypeOf(Rule)).apply(this, arguments));
  }

  _createClass(Rule, [{
    key: 'toString',
    value: function toString(stringifier) {
      if (!stringifier) {
        stringifier = {
          stringify: _lessStringify2.default
        };
      }

      return _get(Rule.prototype.__proto__ || Object.getPrototypeOf(Rule.prototype), 'toString', this).call(this, stringifier);
    }
  }]);

  return Rule;
}(_rule2.default);

exports.default = Rule;
module.exports = exports['default'];

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var _root = __webpack_require__(27);

var _root2 = _interopRequireDefault(_root);

var _lessStringify = __webpack_require__(14);

var _lessStringify2 = _interopRequireDefault(_lessStringify);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Root = function (_PostCssRoot) {
  _inherits(Root, _PostCssRoot);

  function Root() {
    _classCallCheck(this, Root);

    return _possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).apply(this, arguments));
  }

  _createClass(Root, [{
    key: 'toString',
    value: function toString(stringifier) {
      if (!stringifier) {
        stringifier = {
          stringify: _lessStringify2.default
        };
      }

      return _get(Root.prototype.__proto__ || Object.getPrototypeOf(Root.prototype), 'toString', this).call(this, stringifier);
    }
  }]);

  return Root;
}(_root2.default);

exports.default = Root;
module.exports = exports['default'];

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = findExtendRule;
var extendRuleKeyWords = ['&', ':', 'extend'];
var extendRuleKeyWordsCount = extendRuleKeyWords.length;

function findExtendRule(tokens) {
  var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var stack = [];
  var len = tokens.length;
  var end = start;

  while (end < len) {
    var token = tokens[end];

    if (extendRuleKeyWords.indexOf(token[1]) >= 0) {
      stack.push(token[1]);
    } else if (token[0] !== 'space') {
      break;
    }

    end++;
  }

  for (var index = 0; index < extendRuleKeyWordsCount; index++) {
    if (stack[index] !== extendRuleKeyWords[index]) {
      return null;
    }
  }

  return tokens.slice(start, end);
}

module.exports = exports['default'];

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMixinToken;

var _globals = __webpack_require__(2);

var unpaddedFractionalNumbersPattern = /\.[0-9]/;

function isMixinToken(token) {
  var symbol = token[1];
  var firstSymbolCode = symbol ? symbol[0].charCodeAt(0) : null;
  return (firstSymbolCode === _globals.dot || firstSymbolCode === _globals.hash) && // ignore hashes used for colors
  _globals.hashColorPattern.test(symbol) === false && // ignore dots used for unpadded fractional numbers
  unpaddedFractionalNumbersPattern.test(symbol) === false;
}

module.exports = exports['default'];

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lessTokenize;

var _globals = __webpack_require__(2);

var _tokenizeSymbol = __webpack_require__(169);

var _tokenizeSymbol2 = _interopRequireDefault(_tokenizeSymbol);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function lessTokenize(input) {
  var state = {
    input: input,
    tokens: [],
    css: input.css.valueOf(),
    offset: -1,
    line: 1,
    pos: 0
  };
  state.length = state.css.length;

  while (state.pos < state.length) {
    state.symbolCode = state.css.charCodeAt(state.pos);
    state.symbol = state.css[state.pos];
    state.nextPos = null;
    state.escaped = null;
    state.lines = null;
    state.lastLine = null;
    state.cssPart = null;
    state.escape = null;
    state.nextLine = null;
    state.nextOffset = null;
    state.escapePos = null;
    state.token = null;

    if (state.symbolCode === _globals.newline) {
      state.offset = state.pos;
      state.line += 1;
    }

    (0, _tokenizeSymbol2.default)(state);
    state.pos++;
  }

  return state.tokens;
}

module.exports = exports['default'];

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = tokenizeSymbol;

var _globals = __webpack_require__(2);

var _tokenizeAtRule = __webpack_require__(170);

var _tokenizeAtRule2 = _interopRequireDefault(_tokenizeAtRule);

var _tokenizeBackslash = __webpack_require__(171);

var _tokenizeBackslash2 = _interopRequireDefault(_tokenizeBackslash);

var _tokenizeBasicSymbol = __webpack_require__(172);

var _tokenizeBasicSymbol2 = _interopRequireDefault(_tokenizeBasicSymbol);

var _tokenizeComma = __webpack_require__(173);

var _tokenizeComma2 = _interopRequireDefault(_tokenizeComma);

var _tokenizeDefault = __webpack_require__(174);

var _tokenizeDefault2 = _interopRequireDefault(_tokenizeDefault);

var _tokenizeOpenedParenthesis = __webpack_require__(179);

var _tokenizeOpenedParenthesis2 = _interopRequireDefault(_tokenizeOpenedParenthesis);

var _tokenizeQuotes = __webpack_require__(180);

var _tokenizeQuotes2 = _interopRequireDefault(_tokenizeQuotes);

var _tokenizeWhitespace = __webpack_require__(181);

var _tokenizeWhitespace2 = _interopRequireDefault(_tokenizeWhitespace);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // we cannot reduce complexity beyond this level
// eslint-disable-next-line complexity


function tokenizeSymbol(state) {
  switch (state.symbolCode) {
    case _globals.newline:
    case _globals.space:
    case _globals.tab:
    case _globals.carriageReturn:
    case _globals.feed:
      (0, _tokenizeWhitespace2.default)(state);
      break;

    case _globals.comma:
      (0, _tokenizeComma2.default)(state);
      break;

    case _globals.colon:
    case _globals.semicolon:
    case _globals.openedCurlyBracket:
    case _globals.closedCurlyBracket:
    case _globals.closedParenthesis:
    case _globals.openSquareBracket:
    case _globals.closeSquareBracket:
      (0, _tokenizeBasicSymbol2.default)(state);
      break;

    case _globals.openedParenthesis:
      (0, _tokenizeOpenedParenthesis2.default)(state);
      break;

    case _globals.singleQuote:
    case _globals.doubleQuote:
      (0, _tokenizeQuotes2.default)(state);
      break;

    case _globals.atRule:
      (0, _tokenizeAtRule2.default)(state);
      break;

    case _globals.backslash:
      (0, _tokenizeBackslash2.default)(state);
      break;

    default:
      (0, _tokenizeDefault2.default)(state);
      break;
  }
}

module.exports = exports['default'];

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = tokenizeAtRule;

var _globals = __webpack_require__(2);

var _unclosed = __webpack_require__(11);

var _unclosed2 = _interopRequireDefault(_unclosed);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function tokenizeAtRule(state) {
  // it's an interpolation
  if (state.css.charCodeAt(state.pos + 1) === _globals.openedCurlyBracket) {
    state.nextPos = state.css.indexOf('}', state.pos + 2);

    if (state.nextPos === -1) {
      (0, _unclosed2.default)(state, 'interpolation');
    }

    state.cssPart = state.css.slice(state.pos, state.nextPos + 1);
    state.lines = state.cssPart.split('\n');
    state.lastLine = state.lines.length - 1;

    if (state.lastLine > 0) {
      state.nextLine = state.line + state.lastLine;
      state.nextOffset = state.nextPos - state.lines[state.lastLine].length;
    } else {
      state.nextLine = state.line;
      state.nextOffset = state.offset;
    }

    state.tokens.push(['word', state.cssPart, state.line, state.pos - state.offset, state.nextLine, state.nextPos - state.nextOffset]);
    state.offset = state.nextOffset;
    state.line = state.nextLine;
  } else {
    _globals.atEndPattern.lastIndex = state.pos + 1;

    _globals.atEndPattern.test(state.css);

    if (_globals.atEndPattern.lastIndex === 0) {
      state.nextPos = state.css.length - 1;
    } else {
      state.nextPos = _globals.atEndPattern.lastIndex - 2;
    }

    state.cssPart = state.css.slice(state.pos, state.nextPos + 1);
    state.token = 'at-word'; // check if it's a variable

    if (_globals.variablePattern.test(state.cssPart)) {
      _globals.wordEndPattern.lastIndex = state.pos + 1;

      _globals.wordEndPattern.test(state.css);

      if (_globals.wordEndPattern.lastIndex === 0) {
        state.nextPos = state.css.length - 1;
      } else {
        state.nextPos = _globals.wordEndPattern.lastIndex - 2;
      }

      state.cssPart = state.css.slice(state.pos, state.nextPos + 1);
      state.token = 'word';
    }

    state.tokens.push([state.token, state.cssPart, state.line, state.pos - state.offset, state.line, state.nextPos - state.offset]);
  }

  state.pos = state.nextPos;
}

module.exports = exports['default'];

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = tokenizeBackslash;

var _globals = __webpack_require__(2);

function tokenizeBackslash(state) {
  state.nextPos = state.pos;
  state.escape = true;

  while (state.css.charCodeAt(state.nextPos + 1) === _globals.backslash) {
    state.nextPos += 1;
    state.escape = !state.escape;
  }

  state.symbolCode = state.css.charCodeAt(state.nextPos + 1);

  if (state.escape && state.symbolCode !== _globals.slash && state.symbolCode !== _globals.space && state.symbolCode !== _globals.newline && state.symbolCode !== _globals.tab && state.symbolCode !== _globals.carriageReturn && state.symbolCode !== _globals.feed) {
    state.nextPos += 1;
  }

  state.tokens.push(['word', state.css.slice(state.pos, state.nextPos + 1), state.line, state.pos - state.offset, state.line, state.nextPos - state.offset]);
  state.pos = state.nextPos;
}

module.exports = exports['default'];

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = tokenizeBasicSymbol;

function tokenizeBasicSymbol(state) {
  state.tokens.push([state.symbol, state.symbol, state.line, state.pos - state.offset]);
}

module.exports = exports["default"];

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = tokenizeComma;

function tokenizeComma(state) {
  state.tokens.push(['word', state.symbol, state.line, state.pos - state.offset, state.line, state.pos - state.offset + 1]);
}

module.exports = exports['default'];

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = tokenizeDefault;

var _globals = __webpack_require__(2);

var _findEndOfEscaping = __webpack_require__(175);

var _findEndOfEscaping2 = _interopRequireDefault(_findEndOfEscaping);

var _isEscaping = __webpack_require__(176);

var _isEscaping2 = _interopRequireDefault(_isEscaping);

var _tokenizeInlineComment = __webpack_require__(177);

var _tokenizeInlineComment2 = _interopRequireDefault(_tokenizeInlineComment);

var _tokenizeMultilineComment = __webpack_require__(178);

var _tokenizeMultilineComment2 = _interopRequireDefault(_tokenizeMultilineComment);

var _unclosed = __webpack_require__(11);

var _unclosed2 = _interopRequireDefault(_unclosed);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function tokenizeDefault(state) {
  var nextSymbolCode = state.css.charCodeAt(state.pos + 1);

  if (state.symbolCode === _globals.slash && nextSymbolCode === _globals.asterisk) {
    (0, _tokenizeMultilineComment2.default)(state);
  } else if (state.symbolCode === _globals.slash && nextSymbolCode === _globals.slash) {
    (0, _tokenizeInlineComment2.default)(state);
  } else {
    if ((0, _isEscaping2.default)(state)) {
      var pos = (0, _findEndOfEscaping2.default)(state);

      if (pos < 0) {
        (0, _unclosed2.default)(state, 'escaping');
      } else {
        state.nextPos = pos;
      }
    } else {
      _globals.wordEndPattern.lastIndex = state.pos + 1;

      _globals.wordEndPattern.test(state.css);

      if (_globals.wordEndPattern.lastIndex === 0) {
        state.nextPos = state.css.length - 1;
      } else {
        state.nextPos = _globals.wordEndPattern.lastIndex - 2;
      }
    }

    state.cssPart = state.css.slice(state.pos, state.nextPos + 1);
    state.tokens.push(['word', state.cssPart, state.line, state.pos - state.offset, state.line, state.nextPos - state.offset]);
    state.pos = state.nextPos;
  }
}

module.exports = exports['default'];

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = findEndOfEscaping;

var _globals = __webpack_require__(2);
/**
 * @param state
 * @returns {number}
 */


function findEndOfEscaping(state) {
  var openQuotesCount = 0,
      quoteCode = -1;

  for (var i = state.pos + 1; i < state.length; i++) {
    var symbolCode = state.css.charCodeAt(i);
    var prevSymbolCode = state.css.charCodeAt(i - 1);

    if (prevSymbolCode !== _globals.backslash && (symbolCode === _globals.singleQuote || symbolCode === _globals.doubleQuote || symbolCode === _globals.backTick)) {
      if (quoteCode === -1) {
        quoteCode = symbolCode;
        openQuotesCount++;
      } else if (symbolCode === quoteCode) {
        openQuotesCount--;

        if (!openQuotesCount) {
          return i;
        }
      }
    }
  }

  return -1;
}

module.exports = exports['default'];

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEscaping;

var _globals = __webpack_require__(2);

var nextSymbolVariants = [_globals.backTick, _globals.doubleQuote, _globals.singleQuote];

function isEscaping(state) {
  var nextSymbolCode = state.css.charCodeAt(state.pos + 1);
  return state.symbolCode === _globals.tilde && nextSymbolVariants.indexOf(nextSymbolCode) >= 0;
}

module.exports = exports['default'];

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = tokenizeInlineComment;

function tokenizeInlineComment(state) {
  state.nextPos = state.css.indexOf('\n', state.pos + 2) - 1;

  if (state.nextPos === -2) {
    state.nextPos = state.css.length - 1;
  }

  state.tokens.push(['comment', state.css.slice(state.pos, state.nextPos + 1), state.line, state.pos - state.offset, state.line, state.nextPos - state.offset, 'inline']);
  state.pos = state.nextPos;
}

module.exports = exports['default'];

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = tokenizeMultilineComment;

var _unclosed = __webpack_require__(11);

var _unclosed2 = _interopRequireDefault(_unclosed);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function tokenizeMultilineComment(state) {
  state.nextPos = state.css.indexOf('*/', state.pos + 2) + 1;

  if (state.nextPos === 0) {
    (0, _unclosed2.default)(state, 'comment');
  }

  state.cssPart = state.css.slice(state.pos, state.nextPos + 1);
  state.lines = state.cssPart.split('\n');
  state.lastLine = state.lines.length - 1;

  if (state.lastLine > 0) {
    state.nextLine = state.line + state.lastLine;
    state.nextOffset = state.nextPos - state.lines[state.lastLine].length;
  } else {
    state.nextLine = state.line;
    state.nextOffset = state.offset;
  }

  state.tokens.push(['comment', state.cssPart, state.line, state.pos - state.offset, state.nextLine, state.nextPos - state.nextOffset]);
  state.offset = state.nextOffset;
  state.line = state.nextLine;
  state.pos = state.nextPos;
}

module.exports = exports['default'];

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = tokenizeOpenedParenthesis;

var _globals = __webpack_require__(2);

var _unclosed = __webpack_require__(11);

var _unclosed2 = _interopRequireDefault(_unclosed);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function findClosedParenthesisPosition(css, length, start) {
  var openedParenthesisCount = 0;

  for (var i = start; i < length; i++) {
    var symbol = css[i];

    if (symbol === '(') {
      openedParenthesisCount++;
    } else if (symbol === ')') {
      openedParenthesisCount--;

      if (!openedParenthesisCount) {
        return i;
      }
    }
  }

  return -1;
} // it is not very reasonable to reduce complexity beyond this level
// eslint-disable-next-line complexity


function tokenizeOpenedParenthesis(state) {
  var nextSymbolCode = state.css.charCodeAt(state.pos + 1);
  var tokensCount = state.tokens.length;
  var prevTokenCssPart = tokensCount ? state.tokens[tokensCount - 1][1] : '';

  if (prevTokenCssPart === 'url' && nextSymbolCode !== _globals.singleQuote && nextSymbolCode !== _globals.doubleQuote && nextSymbolCode !== _globals.space && nextSymbolCode !== _globals.newline && nextSymbolCode !== _globals.tab && nextSymbolCode !== _globals.feed && nextSymbolCode !== _globals.carriageReturn) {
    state.nextPos = state.pos;

    do {
      state.escaped = false;
      state.nextPos = state.css.indexOf(')', state.nextPos + 1);

      if (state.nextPos === -1) {
        (0, _unclosed2.default)(state, 'bracket');
      }

      state.escapePos = state.nextPos;

      while (state.css.charCodeAt(state.escapePos - 1) === _globals.backslash) {
        state.escapePos -= 1;
        state.escaped = !state.escaped;
      }
    } while (state.escaped);

    state.tokens.push(['brackets', state.css.slice(state.pos, state.nextPos + 1), state.line, state.pos - state.offset, state.line, state.nextPos - state.offset]);
    state.pos = state.nextPos;
  } else {
    state.nextPos = findClosedParenthesisPosition(state.css, state.length, state.pos);
    state.cssPart = state.css.slice(state.pos, state.nextPos + 1);
    var foundParam = state.cssPart.indexOf('@') >= 0;
    var foundString = /['"]/.test(state.cssPart);

    if (state.cssPart.length === 0 || state.cssPart === '...' || foundParam && !foundString) {
      // we're dealing with a mixin param block
      if (state.nextPos === -1) {
        (0, _unclosed2.default)(state, 'bracket');
      }

      state.tokens.push([state.symbol, state.symbol, state.line, state.pos - state.offset]);
    } else {
      var badBracket = _globals.badBracketPattern.test(state.cssPart);

      if (state.nextPos === -1 || badBracket) {
        state.tokens.push([state.symbol, state.symbol, state.line, state.pos - state.offset]);
      } else {
        state.tokens.push(['brackets', state.cssPart, state.line, state.pos - state.offset, state.line, state.nextPos - state.offset]);
        state.pos = state.nextPos;
      }
    }
  }
}

module.exports = exports['default'];

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = tokenizeQuotes;

var _globals = __webpack_require__(2);

var _unclosed = __webpack_require__(11);

var _unclosed2 = _interopRequireDefault(_unclosed);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function tokenizeQuotes(state) {
  state.nextPos = state.pos;

  do {
    state.escaped = false;
    state.nextPos = state.css.indexOf(state.symbol, state.nextPos + 1);

    if (state.nextPos === -1) {
      (0, _unclosed2.default)(state, 'quote');
    }

    state.escapePos = state.nextPos;

    while (state.css.charCodeAt(state.escapePos - 1) === _globals.backslash) {
      state.escapePos -= 1;
      state.escaped = !state.escaped;
    }
  } while (state.escaped);

  state.tokens.push(['string', state.css.slice(state.pos, state.nextPos + 1), state.line, state.pos - state.offset, state.line, state.nextPos - state.offset]);
  state.pos = state.nextPos;
}

module.exports = exports['default'];

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = tokenizeWhitespace;

var _globals = __webpack_require__(2);

function tokenizeWhitespace(state) {
  state.nextPos = state.pos; // collect all neighbour space symbols

  do {
    state.nextPos += 1;
    state.symbolCode = state.css.charCodeAt(state.nextPos);

    if (state.symbolCode === _globals.newline) {
      state.offset = state.nextPos;
      state.line += 1;
    }
  } while (state.symbolCode === _globals.space || state.symbolCode === _globals.newline || state.symbolCode === _globals.tab || state.symbolCode === _globals.carriageReturn || state.symbolCode === _globals.feed);

  state.tokens.push(['space', state.css.slice(state.pos, state.nextPos)]);
  state.pos = state.nextPos - 1;
}

module.exports = exports['default'];

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lessParse = __webpack_require__(183);

var _lessParse2 = _interopRequireDefault(_lessParse);

var _lessStringify = __webpack_require__(14);

var _lessStringify2 = _interopRequireDefault(_lessStringify);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

exports.default = {
  parse: _lessParse2.default,
  stringify: _lessStringify2.default
};
module.exports = exports['default'];

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lessParse;

var _input = __webpack_require__(23);

var _input2 = _interopRequireDefault(_input);

var _lessParser = __webpack_require__(72);

var _lessParser2 = _interopRequireDefault(_lessParser);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function lessParse(less, opts) {
  var input = new _input2.default(less, opts);
  var parser = new _lessParser2.default(input, opts); // const parser = new Parser(input, opts);

  parser.tokenize();
  parser.loop();
  return parser.root;
} // import Parser from 'postcss/lib/parser';


module.exports = exports['default'];

/***/ })
/******/ ]);
});