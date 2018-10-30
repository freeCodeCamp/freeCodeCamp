/**
 * @fileoverview Enforce style prop value is an object
 * @author David Petersen
 */
'use strict';

var find = require('array.prototype.find');
var variableUtil = require('../util/variable');

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Enforce style prop value is an object',
      category: '',
      recommended: false
    },
    schema: []
  },

  create: function(context) {
    /**
     * @param {object} node An Identifier node
     */
    function isNonNullaryLiteral(expression) {
      return expression.type === 'Literal' && expression.value !== null;
    }

    /**
     * @param {object} node A Identifier node
     */
    function checkIdentifiers(node) {
      var variable = find(variableUtil.variablesInScope(context), function (item) {
        return item.name === node.name;
      });

      if (!variable || !variable.defs[0] || !variable.defs[0].node.init) {
        return;
      }

      if (isNonNullaryLiteral(variable.defs[0].node.init)) {
        context.report(node, 'Style prop value must be an object');
      }
    }

    return {
      CallExpression: function(node) {
        if (
          node.callee
          && node.callee.type === 'MemberExpression'
          && node.callee.property.name === 'createElement'
          && node.arguments.length > 1
        ) {
          if (node.arguments[1].type === 'ObjectExpression') {
            var style = find(node.arguments[1].properties, function(property) {
              return property.key && property.key.name === 'style' && !property.computed;
            });
            if (style) {
              if (style.value.type === 'Identifier') {
                checkIdentifiers(style.value);
              } else if (isNonNullaryLiteral(style.value)) {
                context.report(style.value, 'Style prop value must be an object');
              }
            }
          }
        }
      },

      JSXAttribute: function(node) {
        if (!node.value || node.name.name !== 'style') {
          return;
        }

        if (node.value.type !== 'JSXExpressionContainer' || isNonNullaryLiteral(node.value.expression)) {
          context.report(node, 'Style prop value must be an object');
        } else if (node.value.expression.type === 'Identifier') {
          checkIdentifiers(node.value.expression);
        }
      }
    };
  }
};
