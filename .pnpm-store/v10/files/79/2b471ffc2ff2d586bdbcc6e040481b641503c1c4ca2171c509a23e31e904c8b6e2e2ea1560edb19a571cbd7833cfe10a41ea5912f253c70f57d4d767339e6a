"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _jsxAstUtils = require("jsx-ast-utils");
var _arrayPrototype = _interopRequireDefault(require("array.prototype.flatmap"));
var _schemas = require("../util/schemas");
var _getElementType = _interopRequireDefault(require("../util/getElementType"));
var _hasAccessibleChild = _interopRequireDefault(require("../util/hasAccessibleChild"));
var _isPresentationRole = _interopRequireDefault(require("../util/isPresentationRole"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * @fileoverview Enforce all elements that require alternative text have it.
 * @author Ethan Cohen
 */

// ----------------------------------------------------------------------------
// Rule Definition
// ----------------------------------------------------------------------------

var DEFAULT_ELEMENTS = ['img', 'object', 'area', 'input[type="image"]'];
var schema = (0, _schemas.generateObjSchema)({
  elements: _schemas.arraySchema,
  img: _schemas.arraySchema,
  object: _schemas.arraySchema,
  area: _schemas.arraySchema,
  'input[type="image"]': _schemas.arraySchema
});
var ariaLabelHasValue = function ariaLabelHasValue(prop) {
  var value = (0, _jsxAstUtils.getPropValue)(prop);
  if (value === undefined) {
    return false;
  }
  if (typeof value === 'string' && value.length === 0) {
    return false;
  }
  return true;
};
var ruleByElement = {
  img(context, node, nodeType) {
    var altProp = (0, _jsxAstUtils.getProp)(node.attributes, 'alt');

    // Missing alt prop error.
    if (altProp === undefined) {
      if ((0, _isPresentationRole["default"])(nodeType, node.attributes)) {
        context.report({
          node,
          message: 'Prefer alt="" over a presentational role. First rule of aria is to not use aria if it can be achieved via native HTML.'
        });
        return;
      }
      // Check for `aria-label` to provide text alternative
      // Don't create an error if the attribute is used correctly. But if it
      // isn't, suggest that the developer use `alt` instead.
      var ariaLabelProp = (0, _jsxAstUtils.getProp)(node.attributes, 'aria-label');
      if (ariaLabelProp !== undefined) {
        if (!ariaLabelHasValue(ariaLabelProp)) {
          context.report({
            node,
            message: 'The aria-label attribute must have a value. The alt attribute is preferred over aria-label for images.'
          });
        }
        return;
      }
      // Check for `aria-labelledby` to provide text alternative
      // Don't create an error if the attribute is used correctly. But if it
      // isn't, suggest that the developer use `alt` instead.
      var ariaLabelledbyProp = (0, _jsxAstUtils.getProp)(node.attributes, 'aria-labelledby');
      if (ariaLabelledbyProp !== undefined) {
        if (!ariaLabelHasValue(ariaLabelledbyProp)) {
          context.report({
            node,
            message: 'The aria-labelledby attribute must have a value. The alt attribute is preferred over aria-labelledby for images.'
          });
        }
        return;
      }
      context.report({
        node,
        message: "".concat(nodeType, " elements must have an alt prop, either with meaningful text, or an empty string for decorative images.")
      });
      return;
    }

    // Check if alt prop is undefined.
    var altValue = (0, _jsxAstUtils.getPropValue)(altProp);
    var isNullValued = altProp.value === null; // <img alt />

    if (altValue && !isNullValued || altValue === '') {
      return;
    }

    // Undefined alt prop error.
    context.report({
      node,
      message: "Invalid alt value for ".concat(nodeType, ". Use alt=\"\" for presentational images.")
    });
  },
  object(context, node, unusedNodeType, elementType) {
    var ariaLabelProp = (0, _jsxAstUtils.getProp)(node.attributes, 'aria-label');
    var arialLabelledByProp = (0, _jsxAstUtils.getProp)(node.attributes, 'aria-labelledby');
    var hasLabel = ariaLabelHasValue(ariaLabelProp) || ariaLabelHasValue(arialLabelledByProp);
    var titleProp = (0, _jsxAstUtils.getLiteralPropValue)((0, _jsxAstUtils.getProp)(node.attributes, 'title'));
    var hasTitleAttr = !!titleProp;
    if (hasLabel || hasTitleAttr || (0, _hasAccessibleChild["default"])(node.parent, elementType)) {
      return;
    }
    context.report({
      node,
      message: 'Embedded <object> elements must have alternative text by providing inner text, aria-label or aria-labelledby props.'
    });
  },
  area(context, node) {
    var ariaLabelProp = (0, _jsxAstUtils.getProp)(node.attributes, 'aria-label');
    var arialLabelledByProp = (0, _jsxAstUtils.getProp)(node.attributes, 'aria-labelledby');
    var hasLabel = ariaLabelHasValue(ariaLabelProp) || ariaLabelHasValue(arialLabelledByProp);
    if (hasLabel) {
      return;
    }
    var altProp = (0, _jsxAstUtils.getProp)(node.attributes, 'alt');
    if (altProp === undefined) {
      context.report({
        node,
        message: 'Each area of an image map must have a text alternative through the `alt`, `aria-label`, or `aria-labelledby` prop.'
      });
      return;
    }
    var altValue = (0, _jsxAstUtils.getPropValue)(altProp);
    var isNullValued = altProp.value === null; // <area alt />

    if (altValue && !isNullValued || altValue === '') {
      return;
    }
    context.report({
      node,
      message: 'Each area of an image map must have a text alternative through the `alt`, `aria-label`, or `aria-labelledby` prop.'
    });
  },
  'input[type="image"]': function inputImage(context, node, nodeType) {
    // Only test input[type="image"]
    if (nodeType === 'input') {
      var typePropValue = (0, _jsxAstUtils.getPropValue)((0, _jsxAstUtils.getProp)(node.attributes, 'type'));
      if (typePropValue !== 'image') {
        return;
      }
    }
    var ariaLabelProp = (0, _jsxAstUtils.getProp)(node.attributes, 'aria-label');
    var arialLabelledByProp = (0, _jsxAstUtils.getProp)(node.attributes, 'aria-labelledby');
    var hasLabel = ariaLabelHasValue(ariaLabelProp) || ariaLabelHasValue(arialLabelledByProp);
    if (hasLabel) {
      return;
    }
    var altProp = (0, _jsxAstUtils.getProp)(node.attributes, 'alt');
    if (altProp === undefined) {
      context.report({
        node,
        message: '<input> elements with type="image" must have a text alternative through the `alt`, `aria-label`, or `aria-labelledby` prop.'
      });
      return;
    }
    var altValue = (0, _jsxAstUtils.getPropValue)(altProp);
    var isNullValued = altProp.value === null; // <area alt />

    if (altValue && !isNullValued || altValue === '') {
      return;
    }
    context.report({
      node,
      message: '<input> elements with type="image" must have a text alternative through the `alt`, `aria-label`, or `aria-labelledby` prop.'
    });
  }
};
var _default = exports["default"] = {
  meta: {
    docs: {
      url: 'https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/alt-text.md',
      description: 'Enforce all elements that require alternative text have meaningful information to relay back to end user.'
    },
    schema: [schema]
  },
  create: function create(context) {
    var options = context.options[0] || {};
    // Elements to validate for alt text.
    var elementOptions = options.elements || DEFAULT_ELEMENTS;
    // Get custom components for just the elements that will be tested.
    var customComponents = (0, _arrayPrototype["default"])(elementOptions, function (element) {
      return options[element];
    });
    var typesToValidate = new Set([].concat(customComponents, elementOptions).map(function (type) {
      return type === 'input[type="image"]' ? 'input' : type;
    }));
    var elementType = (0, _getElementType["default"])(context);
    return {
      JSXOpeningElement(node) {
        var nodeType = elementType(node);
        if (!typesToValidate.has(nodeType)) {
          return;
        }
        var DOMElement = nodeType;
        if (DOMElement === 'input') {
          DOMElement = 'input[type="image"]';
        }

        // Map nodeType to the DOM element if we are running this on a custom component.
        if (elementOptions.indexOf(DOMElement) === -1) {
          DOMElement = elementOptions.find(function (element) {
            var customComponentsForElement = options[element] || [];
            return customComponentsForElement.indexOf(nodeType) > -1;
          });
        }
        ruleByElement[DOMElement](context, node, nodeType, elementType);
      }
    };
  }
};
module.exports = exports.default;