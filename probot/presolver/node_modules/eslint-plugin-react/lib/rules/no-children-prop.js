/**
 * @fileoverview Prevent passing of children as props
 * @author Benjamin Stepp
 */
'use strict';

var find = require('array.prototype.find');

// ------------------------------------------------------------------------------
// Helpers
// ------------------------------------------------------------------------------

/**
 * Checks if the node is a createElement call with a props literal.
 * @param {ASTNode} node - The AST node being checked.
 * @returns {Boolean} - True if node is a createElement call with a props
 * object literal, False if not.
*/
function isCreateElementWithProps(node) {
  return node.callee
    && node.callee.type === 'MemberExpression'
    && node.callee.property.name === 'createElement'
    && node.arguments.length > 1
    && node.arguments[1].type === 'ObjectExpression';
}

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Prevent passing of children as props.',
      category: 'Best Practices',
      recommended: false
    },
    schema: []
  },
  create: function(context) {
    return {
      JSXAttribute: function(node) {
        if (node.name.name !== 'children') {
          return;
        }

        context.report({
          node: node,
          message: 'Do not pass children as props. Instead, nest children between the opening and closing tags.'
        });
      },
      CallExpression: function(node) {
        if (!isCreateElementWithProps(node)) {
          return;
        }

        var props = node.arguments[1].properties;
        var childrenProp = find(props, function(prop) {
          return prop.key && prop.key.name === 'children';
        });

        if (childrenProp) {
          context.report({
            node: node,
            message: 'Do not pass children as props. Instead, pass them as additional arguments to React.createElement.'
          });
        }
      }
    };
  }
};
