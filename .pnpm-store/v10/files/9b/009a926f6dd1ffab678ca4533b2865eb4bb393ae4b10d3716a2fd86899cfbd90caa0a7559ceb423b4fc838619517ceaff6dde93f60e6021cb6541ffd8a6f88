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
var elementRoles = [];
var keys = _rolesMap.default.keys();
for (var i = 0; i < keys.length; i++) {
  var key = keys[i];
  var role = _rolesMap.default.get(key);
  if (role) {
    var concepts = [].concat(role.baseConcepts, role.relatedConcepts);
    var _loop = function _loop() {
      var relation = concepts[k];
      if (relation.module === 'HTML') {
        var concept = relation.concept;
        if (concept) {
          var elementRoleRelation = elementRoles.filter(function (relation) {
            return ariaRoleRelationConceptEquals(relation[0], concept);
          })[0];
          var roles;
          if (elementRoleRelation) {
            roles = elementRoleRelation[1];
          } else {
            roles = [];
          }
          var isUnique = true;
          for (var _i = 0; _i < roles.length; _i++) {
            if (roles[_i] === key) {
              isUnique = false;
              break;
            }
          }
          if (isUnique) {
            roles.push(key);
          }
          if (!elementRoleRelation) {
            elementRoles.push([concept, roles]);
          }
        }
      }
    };
    for (var k = 0; k < concepts.length; k++) {
      _loop();
    }
  }
}
var elementRoleMap = {
  entries: function entries() {
    return elementRoles;
  },
  forEach: function forEach(fn) {
    var thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    for (var _i2 = 0, _elementRoles = elementRoles; _i2 < _elementRoles.length; _i2++) {
      var _elementRoles$_i = _slicedToArray(_elementRoles[_i2], 2),
        _key = _elementRoles$_i[0],
        values = _elementRoles$_i[1];
      fn.call(thisArg, values, _key, elementRoles);
    }
  },
  get: function get(key) {
    var item = elementRoles.filter(function (tuple) {
      return key.name === tuple[0].name && ariaRoleRelationConceptAttributeEquals(key.attributes, tuple[0].attributes);
    })[0];
    return item && item[1];
  },
  has: function has(key) {
    return !!elementRoleMap.get(key);
  },
  keys: function keys() {
    return elementRoles.map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 1),
        key = _ref2[0];
      return key;
    });
  },
  values: function values() {
    return elementRoles.map(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
        values = _ref4[1];
      return values;
    });
  }
};
function ariaRoleRelationConceptEquals(a, b) {
  return a.name === b.name && ariaRoleRelationConstraintsEquals(a.constraints, b.constraints) && ariaRoleRelationConceptAttributeEquals(a.attributes, b.attributes);
}
function ariaRoleRelationConstraintsEquals(a, b) {
  if (a === undefined && b !== undefined) {
    return false;
  }
  if (a !== undefined && b === undefined) {
    return false;
  }
  if (a !== undefined && b !== undefined) {
    if (a.length !== b.length) {
      return false;
    }
    for (var _i3 = 0; _i3 < a.length; _i3++) {
      if (a[_i3] !== b[_i3]) {
        return false;
      }
    }
  }
  return true;
}
function ariaRoleRelationConceptAttributeEquals(a, b) {
  if (a === undefined && b !== undefined) {
    return false;
  }
  if (a !== undefined && b === undefined) {
    return false;
  }
  if (a !== undefined && b !== undefined) {
    if (a.length !== b.length) {
      return false;
    }
    for (var _i4 = 0; _i4 < a.length; _i4++) {
      if (a[_i4].name !== b[_i4].name || a[_i4].value !== b[_i4].value) {
        return false;
      }
      if (a[_i4].constraints === undefined && b[_i4].constraints !== undefined) {
        return false;
      }
      if (a[_i4].constraints !== undefined && b[_i4].constraints === undefined) {
        return false;
      }
      if (a[_i4].constraints !== undefined && b[_i4].constraints !== undefined) {
        if (a[_i4].constraints.length !== b[_i4].constraints.length) {
          return false;
        }
        for (var j = 0; j < a[_i4].constraints.length; j++) {
          if (a[_i4].constraints[j] !== b[_i4].constraints[j]) {
            return false;
          }
        }
      }
    }
  }
  return true;
}
var _default = exports.default = (0, _iterationDecorator.default)(elementRoleMap, elementRoleMap.entries());