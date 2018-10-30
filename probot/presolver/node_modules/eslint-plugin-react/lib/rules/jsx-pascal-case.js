/**
 * @fileoverview Enforce PascalCase for user-defined JSX components
 * @author Jake Marsh
 */

'use strict';

var elementType = require('jsx-ast-utils/elementType');

// ------------------------------------------------------------------------------
// Constants
// ------------------------------------------------------------------------------

var PASCAL_CASE_REGEX = /^([A-Z0-9]|[A-Z0-9]+[a-z0-9]+(?:[A-Z0-9]+[a-z0-9]*)*)$/;
var COMPAT_TAG_REGEX = /^[a-z]|\-/;
var ALL_CAPS_TAG_REGEX = /^[A-Z0-9]+$/;

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Enforce PascalCase for user-defined JSX components',
      category: 'Stylistic Issues',
      recommended: false
    },

    schema: [{
      type: 'object',
      properties: {
        allowAllCaps: {
          type: 'boolean'
        },
        ignore: {
          type: 'array'
        }
      },
      additionalProperties: false
    }]
  },

  create: function(context) {

    var configuration = context.options[0] || {};
    var allowAllCaps = configuration.allowAllCaps || false;
    var ignore = configuration.ignore || [];

    return {
      JSXOpeningElement: function(node) {
        var name = elementType(node);

        // Get namespace if the type is JSXNamespacedName or JSXMemberExpression
        if (name.indexOf(':') > -1) {
          name = name.substring(0, name.indexOf(':'));
        } else if (name.indexOf('.') > -1) {
          name = name.substring(0, name.indexOf('.'));
        }

        var isPascalCase = PASCAL_CASE_REGEX.test(name);
        var isCompatTag = COMPAT_TAG_REGEX.test(name);
        var isAllowedAllCaps = allowAllCaps && ALL_CAPS_TAG_REGEX.test(name);
        var isIgnored = ignore.indexOf(name) !== -1;

        if (!isPascalCase && !isCompatTag && !isAllowedAllCaps && !isIgnored) {
          context.report({
            node: node,
            message: 'Imported JSX component ' + name + ' must be in PascalCase'
          });
        }
      }
    };

  }
};
