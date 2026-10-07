"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getImplicitRole;
var _ariaQuery = require("aria-query");
var _implicitRoles = _interopRequireDefault(require("./implicitRoles"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * Returns an element's implicit role given its attributes and type.
 * Some elements only have an implicit role when certain props are defined.
 */
function getImplicitRole(type, attributes) {
  var implicitRole;
  if (_implicitRoles["default"][type]) {
    implicitRole = _implicitRoles["default"][type](attributes);
  }
  if (_ariaQuery.roles.has(implicitRole)) {
    return implicitRole;
  }
  return null;
}
module.exports = exports.default;