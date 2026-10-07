"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ariaAbstractRoles = _interopRequireDefault(require("./etc/roles/ariaAbstractRoles"));
var _ariaLiteralRoles = _interopRequireDefault(require("./etc/roles/ariaLiteralRoles"));
var _ariaDpubRoles = _interopRequireDefault(require("./etc/roles/ariaDpubRoles"));
var _ariaGraphicsRoles = _interopRequireDefault(require("./etc/roles/ariaGraphicsRoles"));
var _iterationDecorator = _interopRequireDefault(require("./util/iterationDecorator"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var roles = [].concat(_ariaAbstractRoles.default, _ariaLiteralRoles.default, _ariaDpubRoles.default, _ariaGraphicsRoles.default);
roles.forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
    roleDefinition = _ref2[1];
  // Conglomerate the properties
  var _iterator = _createForOfIteratorHelper(roleDefinition.superClass),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var superClassIter = _step.value;
      var _iterator2 = _createForOfIteratorHelper(superClassIter),
        _step2;
      try {
        var _loop = function _loop() {
          var superClassName = _step2.value;
          var superClassRoleTuple = roles.filter(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 1),
              name = _ref4[0];
            return name === superClassName;
          })[0];
          if (superClassRoleTuple) {
            var superClassDefinition = superClassRoleTuple[1];
            for (var _i = 0, _Object$keys = Object.keys(superClassDefinition.props); _i < _Object$keys.length; _i++) {
              var prop = _Object$keys[_i];
              if (
              // $FlowIssue Accessing the hasOwnProperty on the Object prototype is fine.
              !Object.prototype.hasOwnProperty.call(roleDefinition.props, prop)) {
                // $FlowIgnore assigning without an index signature is fine
                roleDefinition.props[prop] = superClassDefinition.props[prop];
              }
            }
          }
        };
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
});
var rolesMap = {
  entries: function entries() {
    return roles;
  },
  forEach: function forEach(fn) {
    var thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var _iterator3 = _createForOfIteratorHelper(roles),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _step3$value = _slicedToArray(_step3.value, 2),
          key = _step3$value[0],
          values = _step3$value[1];
        fn.call(thisArg, values, key, roles);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  },
  get: function get(key) {
    var item = roles.filter(function (tuple) {
      return tuple[0] === key ? true : false;
    })[0];
    return item && item[1];
  },
  has: function has(key) {
    return !!rolesMap.get(key);
  },
  keys: function keys() {
    return roles.map(function (_ref5) {
      var _ref6 = _slicedToArray(_ref5, 1),
        key = _ref6[0];
      return key;
    });
  },
  values: function values() {
    return roles.map(function (_ref7) {
      var _ref8 = _slicedToArray(_ref7, 2),
        values = _ref8[1];
      return values;
    });
  }
};
var _default = exports.default = (0, _iterationDecorator.default)(rolesMap, rolesMap.entries());