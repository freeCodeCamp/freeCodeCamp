"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _cssesc = _interopRequireDefault(require("cssesc"));
var _util = require("../util");
var _node = _interopRequireDefault(require("./node"));
var _types = require("./types");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var ClassName = /*#__PURE__*/function (_Node) {
  _inheritsLoose(ClassName, _Node);
  function ClassName(opts) {
    var _this;
    _this = _Node.call(this, opts) || this;
    _this.type = _types.CLASS;
    _this._constructed = true;
    return _this;
  }
  var _proto = ClassName.prototype;
  _proto.valueToString = function valueToString() {
    return '.' + _Node.prototype.valueToString.call(this);
  };
  _createClass(ClassName, [{
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set(v) {
      if (this._constructed) {
        var escaped = (0, _cssesc["default"])(v, {
          isIdentifier: true
        });
        if (escaped !== v) {
          (0, _util.ensureObject)(this, "raws");
          this.raws.value = escaped;
        } else if (this.raws) {
          delete this.raws.value;
        }
      }
      this._value = v;
    }
  }]);
  return ClassName;
}(_node["default"]);
exports["default"] = ClassName;
module.exports = exports.default;