"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ariaQuery = require("aria-query");
var _jsxAstUtils = require("jsx-ast-utils");
var _arrayIncludes = _interopRequireDefault(require("array-includes"));
var _arrayPrototype = _interopRequireDefault(require("array.prototype.flatmap"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var nonInteractiveRoles = _ariaQuery.roles.keys().filter(function (name) {
  return !_ariaQuery.roles.get(name)["abstract"] && !_ariaQuery.roles.get(name).superClass.some(function (klasses) {
    return (0, _arrayIncludes["default"])(klasses, 'widget');
  });
});

/**
 * Returns boolean indicating whether the given element has a role
 * that is associated with a non-interactive component. Non-interactive roles
 * include `listitem`, `article`, or `dialog`. These are roles that indicate
 * for the most part containers.
 *
 * Elements with these roles should not respond or handle user interactions.
 * For example, an `onClick` handler should not be assigned to an element with
 * the role `listitem`. An element inside the `listitem`, like a button or a
 * link, should handle the click.
 *
 * This utility returns true for elements that are assigned a non-interactive
 * role. It will return false for elements that do not have a role. So whereas
 * a `div` might be considered non-interactive, for the purpose of this utility,
 * it is considered neither interactive nor non-interactive -- a determination
 * cannot be made in this case and false is returned.
 */

var isNonInteractiveRole = function isNonInteractiveRole(tagName, attributes) {
  // Do not test higher level JSX components, as we do not know what
  // low-level DOM element this maps to.
  if (!_ariaQuery.dom.has(tagName)) {
    return false;
  }
  var role = (0, _jsxAstUtils.getLiteralPropValue)((0, _jsxAstUtils.getProp)(attributes, 'role'));
  var isNonInteractive = false;
  var normalizedValues = String(role).toLowerCase().split(' ');
  var validRoles = (0, _arrayPrototype["default"])(normalizedValues, function (name) {
    return _ariaQuery.roles.has(name) ? [name] : [];
  });
  if (validRoles.length > 0) {
    // The first role value is a series takes precedence.
    isNonInteractive = (0, _arrayIncludes["default"])(nonInteractiveRoles, validRoles[0]);
  }
  return isNonInteractive;
};
var _default = exports["default"] = isNonInteractiveRole;
module.exports = exports.default;