"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _iterationDecorator = _interopRequireDefault(require("./util/iterationDecorator"));
var _rolesMap = _interopRequireDefault(require("./rolesMap"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var roleElement = [];
var keys = _rolesMap.default.keys();
for (var i = 0; i < keys.length; i++) {
  var key = keys[i];
  var role = _rolesMap.default.get(key);
  var relationConcepts = [];
  if (role) {
    var concepts = [].concat(role.baseConcepts, role.relatedConcepts);
    for (var k = 0; k < concepts.length; k++) {
      var relation = concepts[k];
      if (relation.module === 'HTML') {
        var concept = relation.concept;
        if (concept != null) {
          relationConcepts.push(concept);
        }
      }
    }
    if (relationConcepts.length > 0) {
      roleElement.push([key, relationConcepts]);
    }
  }
}
var roleElementMap = {
  entries: function entries() {
    return roleElement;
  },
  forEach: function forEach(fn) {
    var thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    for (var _i = 0, _roleElement = roleElement; _i < _roleElement.length; _i++) {
      var _roleElement$_i = _slicedToArray(_roleElement[_i], 2),
        _key = _roleElement$_i[0],
        values = _roleElement$_i[1];
      fn.call(thisArg, values, _key, roleElement);
    }
  },
  get: function get(key) {
    var item = roleElement.filter(function (tuple) {
      return tuple[0] === key ? true : false;
    })[0];
    return item && item[1];
  },
  has: function has(key) {
    return !!roleElementMap.get(key);
  },
  keys: function keys() {
    return roleElement.map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 1),
        key = _ref2[0];
      return key;
    });
  },
  values: function values() {
    return roleElement.map(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
        values = _ref4[1];
      return values;
    });
  }
};
var _default = exports.default = (0, _iterationDecorator.default)(roleElementMap, roleElementMap.entries());