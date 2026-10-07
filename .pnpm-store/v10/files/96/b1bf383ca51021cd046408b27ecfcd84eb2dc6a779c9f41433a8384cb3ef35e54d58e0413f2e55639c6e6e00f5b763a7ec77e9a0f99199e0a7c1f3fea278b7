"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _axobjectQuery = require("axobject-query");
var _jsxAstUtils = require("jsx-ast-utils");
var isSemanticRoleElement = function isSemanticRoleElement(elementType, attributes) {
  var roleAttr = (0, _jsxAstUtils.getProp)(attributes, 'role');
  var res = false;
  var roleAttrValue = (0, _jsxAstUtils.getLiteralPropValue)(roleAttr);
  _axobjectQuery.elementAXObjects.forEach(function (axObjects, concept) {
    if (res) {
      return;
    }
    if (concept.name === elementType && (concept.attributes || []).every(function (cAttr) {
      return attributes.some(function (attr) {
        if (!attr.type || attr.type !== 'JSXAttribute') {
          return false;
        }
        var namesMatch = cAttr.name === (0, _jsxAstUtils.propName)(attr);
        var valuesMatch;
        if (cAttr.value !== undefined) {
          valuesMatch = cAttr.value === (0, _jsxAstUtils.getLiteralPropValue)(attr);
        }
        if (!namesMatch) {
          return false;
        }
        return namesMatch && valuesMatch !== undefined ? valuesMatch : true;
      });
    })) {
      axObjects.forEach(function (name) {
        if (res) {
          return;
        }
        var roles = _axobjectQuery.AXObjectRoles.get(name);
        if (roles) {
          roles.forEach(function (role) {
            if (res === true) {
              return;
            }
            if (role.name === roleAttrValue) {
              res = true;
            }
          });
        }
      });
    }
  });
  return res;
};
var _default = exports["default"] = isSemanticRoleElement;
module.exports = exports.default;