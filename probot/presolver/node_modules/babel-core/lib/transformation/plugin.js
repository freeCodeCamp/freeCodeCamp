"use strict";

exports.__esModule = true;

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _optionManager = require("./file/options/option-manager");

var _optionManager2 = _interopRequireDefault(_optionManager);

var _babelMessages = require("babel-messages");

var messages = _interopRequireWildcard(_babelMessages);

var _store = require("../store");

var _store2 = _interopRequireDefault(_store);

var _babelTraverse = require("babel-traverse");

var _babelTraverse2 = _interopRequireDefault(_babelTraverse);

var _assign = require("lodash/assign");

var _assign2 = _interopRequireDefault(_assign);

var _clone = require("lodash/clone");

var _clone2 = _interopRequireDefault(_clone);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GLOBAL_VISITOR_PROPS = ["enter", "exit"];

var Plugin = function (_Store) {
  (0, _inherits3.default)(Plugin, _Store);

  function Plugin(plugin, key) {
    (0, _classCallCheck3.default)(this, Plugin);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Store.call(this));

    _this.initialized = false;
    _this.raw = (0, _assign2.default)({}, plugin);
    _this.key = _this.take("name") || key;

    _this.manipulateOptions = _this.take("manipulateOptions");
    _this.post = _this.take("post");
    _this.pre = _this.take("pre");
    _this.visitor = _this.normaliseVisitor((0, _clone2.default)(_this.take("visitor")) || {});
    return _this;
  }

  Plugin.prototype.take = function take(key) {
    var val = this.raw[key];
    delete this.raw[key];
    return val;
  };

  Plugin.prototype.chain = function chain(target, key) {
    if (!target[key]) return this[key];
    if (!this[key]) return target[key];

    var fns = [target[key], this[key]];

    return function () {
      var val = void 0;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      for (var _iterator = fns, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var fn = _ref;

        if (fn) {
          var ret = fn.apply(this, args);
          if (ret != null) val = ret;
        }
      }
      return val;
    };
  };

  Plugin.prototype.maybeInherit = function maybeInherit(loc) {
    var inherits = this.take("inherits");
    if (!inherits) return;

    inherits = _optionManager2.default.normalisePlugin(inherits, loc, "inherits");

    this.manipulateOptions = this.chain(inherits, "manipulateOptions");
    this.post = this.chain(inherits, "post");
    this.pre = this.chain(inherits, "pre");
    this.visitor = _babelTraverse2.default.visitors.merge([inherits.visitor, this.visitor]);
  };

  Plugin.prototype.init = function init(loc, i) {
    if (this.initialized) return;
    this.initialized = true;

    this.maybeInherit(loc);

    for (var key in this.raw) {
      throw new Error(messages.get("pluginInvalidProperty", loc, i, key));
    }
  };

  Plugin.prototype.normaliseVisitor = function normaliseVisitor(visitor) {
    for (var _iterator2 = GLOBAL_VISITOR_PROPS, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);;) {
      var _ref2;

      if (_isArray2) {
        if (_i2 >= _iterator2.length) break;
        _ref2 = _iterator2[_i2++];
      } else {
        _i2 = _iterator2.next();
        if (_i2.done) break;
        _ref2 = _i2.value;
      }

      var key = _ref2;

      if (visitor[key]) {
        throw new Error("Plugins aren't allowed to specify catch-all enter/exit handlers. " + "Please target individual nodes.");
      }
    }

    _babelTraverse2.default.explode(visitor);
    return visitor;
  };

  return Plugin;
}(_store2.default);

exports.default = Plugin;
module.exports = exports["default"];