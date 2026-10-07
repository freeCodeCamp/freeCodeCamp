"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ariaQuery = require("aria-query");
var _axobjectQuery = require("axobject-query");
var _arrayIncludes = _interopRequireDefault(require("array-includes"));
var _arrayPrototype = _interopRequireDefault(require("array.prototype.flatmap"));
var _attributesComparator = _interopRequireDefault(require("./attributesComparator"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var roleKeys = _ariaQuery.roles.keys();
var elementRoleEntries = _toConsumableArray(_ariaQuery.elementRoles);
var nonInteractiveRoles = new Set(roleKeys.filter(function (name) {
  var role = _ariaQuery.roles.get(name);
  return !role["abstract"]
  // 'toolbar' does not descend from widget, but it does support
  // aria-activedescendant, thus in practice we treat it as a widget.
  && name !== 'toolbar'
  // This role is meant to have no semantic value.
  // @see https://www.w3.org/TR/wai-aria-1.2/#generic
  && name !== 'generic' && !role.superClass.some(function (classes) {
    return (0, _arrayIncludes["default"])(classes, 'widget');
  });
}).concat(
// The `progressbar` is descended from `widget`, but in practice, its
// value is always `readonly`, so we treat it as a non-interactive role.
'progressbar'));
var interactiveRoles = new Set(roleKeys.filter(function (name) {
  var role = _ariaQuery.roles.get(name);
  return !role["abstract"]
  // The `progressbar` is descended from `widget`, but in practice, its
  // value is always `readonly`, so we treat it as a non-interactive role.
  && name !== 'progressbar'
  // This role is meant to have no semantic value.
  // @see https://www.w3.org/TR/wai-aria-1.2/#generic
  && name !== 'generic' && role.superClass.some(function (classes) {
    return (0, _arrayIncludes["default"])(classes, 'widget');
  });
}).concat(
// 'toolbar' does not descend from widget, but it does support
// aria-activedescendant, thus in practice we treat it as a widget.
'toolbar'));
var interactiveElementRoleSchemas = (0, _arrayPrototype["default"])(elementRoleEntries, function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
    elementSchema = _ref2[0],
    rolesArr = _ref2[1];
  return rolesArr.some(function (role) {
    return interactiveRoles.has(role);
  }) ? [elementSchema] : [];
});
var nonInteractiveElementRoleSchemas = (0, _arrayPrototype["default"])(elementRoleEntries, function (_ref3) {
  var _ref4 = _slicedToArray(_ref3, 2),
    elementSchema = _ref4[0],
    rolesArr = _ref4[1];
  return rolesArr.every(function (role) {
    return nonInteractiveRoles.has(role);
  }) ? [elementSchema] : [];
});
var nonInteractiveAXObjects = new Set(_axobjectQuery.AXObjects.keys().filter(function (name) {
  return (0, _arrayIncludes["default"])(['window', 'structure'], _axobjectQuery.AXObjects.get(name).type);
}));
var nonInteractiveElementAXObjectSchemas = (0, _arrayPrototype["default"])(_toConsumableArray(_axobjectQuery.elementAXObjects), function (_ref5) {
  var _ref6 = _slicedToArray(_ref5, 2),
    elementSchema = _ref6[0],
    AXObjectsArr = _ref6[1];
  return AXObjectsArr.every(function (role) {
    return nonInteractiveAXObjects.has(role);
  }) ? [elementSchema] : [];
});
function checkIsNonInteractiveElement(tagName, attributes) {
  function elementSchemaMatcher(elementSchema) {
    return tagName === elementSchema.name && tagName !== 'td' // TODO: investigate why this is needed
    && (0, _attributesComparator["default"])(elementSchema.attributes, attributes);
  }
  // Check in elementRoles for inherent non-interactive role associations for
  // this element.
  var isInherentNonInteractiveElement = nonInteractiveElementRoleSchemas.some(elementSchemaMatcher);
  if (isInherentNonInteractiveElement) {
    return true;
  }
  // Check in elementRoles for inherent interactive role associations for
  // this element.
  var isInherentInteractiveElement = interactiveElementRoleSchemas.some(elementSchemaMatcher);
  if (isInherentInteractiveElement) {
    return false;
  }
  // Check in elementAXObjects for AX Tree associations for this element.
  var isNonInteractiveAXElement = nonInteractiveElementAXObjectSchemas.some(elementSchemaMatcher);
  if (isNonInteractiveAXElement) {
    return true;
  }
  return false;
}

/**
 * Returns boolean indicating whether the given element is a non-interactive
 * element. If the element has either a non-interactive role assigned or it
 * is an element with an inherently non-interactive role, then this utility
 * returns true. Elements that lack either an explicitly assigned role or
 * an inherent role are not considered. For those, this utility returns false
 * because a positive determination of interactiveness cannot be determined.
 */
var isNonInteractiveElement = function isNonInteractiveElement(tagName, attributes) {
  // Do not test higher level JSX components, as we do not know what
  // low-level DOM element this maps to.
  if (!_ariaQuery.dom.has(tagName)) {
    return false;
  }
  // <header> elements do not technically have semantics, unless the
  // element is a direct descendant of <body>, and this plugin cannot
  // reliably test that.
  // @see https://www.w3.org/TR/wai-aria-practices/examples/landmarks/banner.html
  if (tagName === 'header') {
    return false;
  }
  return checkIsNonInteractiveElement(tagName, attributes);
};
var _default = exports["default"] = isNonInteractiveElement;
module.exports = exports.default;