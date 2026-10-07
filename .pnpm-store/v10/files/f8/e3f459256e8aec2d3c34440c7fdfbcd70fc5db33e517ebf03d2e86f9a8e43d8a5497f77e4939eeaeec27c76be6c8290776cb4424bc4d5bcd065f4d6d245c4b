"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _jsxAstUtils = require("jsx-ast-utils");
var _schemas = require("../util/schemas");
var _getElementType = _interopRequireDefault(require("../util/getElementType"));
var _hasAccessibleChild = _interopRequireDefault(require("../util/hasAccessibleChild"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * @fileoverview Enforce label tags have htmlFor attribute.
 * @author Ethan Cohen
 */

// ----------------------------------------------------------------------------
// Rule Definition
// ----------------------------------------------------------------------------

var enumValues = ['nesting', 'id'];
var schema = {
  type: 'object',
  properties: {
    components: _schemas.arraySchema,
    required: {
      oneOf: [{
        type: 'string',
        "enum": enumValues
      }, (0, _schemas.generateObjSchema)({
        some: (0, _schemas.enumArraySchema)(enumValues)
      }, ['some']), (0, _schemas.generateObjSchema)({
        every: (0, _schemas.enumArraySchema)(enumValues)
      }, ['every'])]
    },
    allowChildren: {
      type: 'boolean'
    }
  }
};
// Breadth-first search, assuming that HTML for forms is shallow.
function validateNesting(node) {
  var queue = node.parent.children.slice();
  var child;
  var opener;
  while (queue.length) {
    child = queue.shift();
    opener = child.openingElement;
    if (child.type === 'JSXElement' && opener && (opener.name.name === 'input' || opener.name.name === 'textarea' || opener.name.name === 'select')) {
      return true;
    }
    if (child.children) {
      queue = queue.concat(child.children);
    }
  }
  return false;
}
function validateID(_ref, context) {
  var _settings$jsxA11y$at, _settings$jsxA11y, _settings$jsxA11y$att;
  var attributes = _ref.attributes;
  var settings = context.settings;
  var htmlForAttributes = (_settings$jsxA11y$at = (_settings$jsxA11y = settings['jsx-a11y']) === null || _settings$jsxA11y === void 0 ? void 0 : (_settings$jsxA11y$att = _settings$jsxA11y.attributes) === null || _settings$jsxA11y$att === void 0 ? void 0 : _settings$jsxA11y$att["for"]) !== null && _settings$jsxA11y$at !== void 0 ? _settings$jsxA11y$at : ['htmlFor'];
  for (var i = 0; i < htmlForAttributes.length; i += 1) {
    var attribute = htmlForAttributes[i];
    if ((0, _jsxAstUtils.hasProp)(attributes, attribute)) {
      var htmlForAttr = (0, _jsxAstUtils.getProp)(attributes, attribute);
      var htmlForValue = (0, _jsxAstUtils.getPropValue)(htmlForAttr);
      return htmlForAttr !== false && !!htmlForValue;
    }
  }
  return false;
}
function validate(node, required, allowChildren, elementType, context) {
  if (allowChildren === true) {
    return (0, _hasAccessibleChild["default"])(node.parent, elementType);
  }
  if (required === 'nesting') {
    return validateNesting(node);
  }
  return validateID(node, context);
}
function getValidityStatus(node, required, allowChildren, elementType, context) {
  if (Array.isArray(required.some)) {
    var _isValid = required.some.some(function (rule) {
      return validate(node, rule, allowChildren, elementType, context);
    });
    var _message = !_isValid ? "Form label must have ANY of the following types of associated control: ".concat(required.some.join(', ')) : null;
    return {
      isValid: _isValid,
      message: _message
    };
  }
  if (Array.isArray(required.every)) {
    var _isValid2 = required.every.every(function (rule) {
      return validate(node, rule, allowChildren, elementType, context);
    });
    var _message2 = !_isValid2 ? "Form label must have ALL of the following types of associated control: ".concat(required.every.join(', ')) : null;
    return {
      isValid: _isValid2,
      message: _message2
    };
  }
  var isValid = validate(node, required, allowChildren, elementType, context);
  var message = !isValid ? "Form label must have the following type of associated control: ".concat(required) : null;
  return {
    isValid,
    message
  };
}
var _default = exports["default"] = {
  meta: {
    deprecated: true,
    replacedBy: ['label-has-associated-control'],
    docs: {
      description: 'Enforce that `<label>` elements have the `htmlFor` prop.',
      url: 'https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/label-has-for.md'
    },
    schema: [schema]
  },
  create: function create(context) {
    var elementType = (0, _getElementType["default"])(context);
    return {
      JSXOpeningElement(node) {
        var options = context.options[0] || {};
        var componentOptions = options.components || [];
        var typesToValidate = ['label'].concat(componentOptions);
        var nodeType = elementType(node);

        // Only check 'label' elements and custom types.
        if (typesToValidate.indexOf(nodeType) === -1) {
          return;
        }
        var required = options.required || {
          every: ['nesting', 'id']
        };
        var allowChildren = options.allowChildren || false;
        var _getValidityStatus = getValidityStatus(node, required, allowChildren, elementType, context),
          isValid = _getValidityStatus.isValid,
          message = _getValidityStatus.message;
        if (!isValid) {
          context.report({
            node,
            message
          });
        }
      }
    };
  }
};
module.exports = exports.default;