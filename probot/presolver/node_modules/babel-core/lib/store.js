"use strict";

exports.__esModule = true;

var _map = require("babel-runtime/core-js/map");

var _map2 = _interopRequireDefault(_map);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Store = function (_Map) {
  (0, _inherits3.default)(Store, _Map);

  function Store() {
    (0, _classCallCheck3.default)(this, Store);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Map.call(this));

    _this.dynamicData = {};
    return _this;
  }

  Store.prototype.setDynamic = function setDynamic(key, fn) {
    this.dynamicData[key] = fn;
  };

  Store.prototype.get = function get(key) {
    if (this.has(key)) {
      return _Map.prototype.get.call(this, key);
    } else {
      if (Object.prototype.hasOwnProperty.call(this.dynamicData, key)) {
        var val = this.dynamicData[key]();
        this.set(key, val);
        return val;
      }
    }
  };

  return Store;
}(_map2.default);

exports.default = Store;
module.exports = exports["default"];