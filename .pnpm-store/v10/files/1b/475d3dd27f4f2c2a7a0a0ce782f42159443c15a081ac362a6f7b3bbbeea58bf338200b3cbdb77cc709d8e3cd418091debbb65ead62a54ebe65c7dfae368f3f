"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _cssesc = _interopRequireDefault(require("cssesc"));
var _util = require("../util");
var _node = _interopRequireDefault(require("./node"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var Namespace = /*#__PURE__*/function (_Node) {
  _inheritsLoose(Namespace, _Node);
  function Namespace() {
    return _Node.apply(this, arguments) || this;
  }
  var _proto = Namespace.prototype;
  _proto.qualifiedName = function qualifiedName(value) {
    if (this.namespace) {
      return this.namespaceString + "|" + value;
    } else {
      return value;
    }
  };
  _proto.valueToString = function valueToString() {
    return this.qualifiedName(_Node.prototype.valueToString.call(this));
  };
  _createClass(Namespace, [{
    key: "namespace",
    get: function get() {
      return this._namespace;
    },
    set: function set(namespace) {
      if (namespace === true || namespace === "*" || namespace === "&") {
        this._namespace = namespace;
        if (this.raws) {
          delete this.raws.namespace;
        }
        return;
      }
      var escaped = (0, _cssesc["default"])(namespace, {
        isIdentifier: true
      });
      this._namespace = namespace;
      if (escaped !== namespace) {
        (0, _util.ensureObject)(this, "raws");
        this.raws.namespace = escaped;
      } else if (this.raws) {
        delete this.raws.namespace;
      }
    }
  }, {
    key: "ns",
    get: function get() {
      return this._namespace;
    },
    set: function set(namespace) {
      this.namespace = namespace;
    }
  }, {
    key: "namespaceString",
    get: function get() {
      if (this.namespace) {
        var ns = this.stringifyProperty("namespace");
        if (ns === true) {
          return '';
        } else {
          return ns;
        }
      } else {
        return '';
      }
    }
  }]);
  return Namespace;
}(_node["default"]);
exports["default"] = Namespace;
;
module.exports = exports.default;