/**
 * @fileoverview Ensure proper position of the first property in JSX
 * @author Joachim Seminck
 */
'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Ensure proper position of the first property in JSX',
      category: 'Stylistic Issues',
      recommended: false
    },
    fixable: 'code',

    schema: [{
      enum: ['always', 'never', 'multiline', 'multiline-multiprop']
    }]
  },

  create: function (context) {
    var configuration = context.options[0];

    function isMultilineJSX(jsxNode) {
      return jsxNode.loc.start.line < jsxNode.loc.end.line;
    }

    return {
      JSXOpeningElement: function (node) {
        if (
          (configuration === 'multiline' && isMultilineJSX(node)) ||
          (configuration === 'multiline-multiprop' && isMultilineJSX(node) && node.attributes.length > 1) ||
          (configuration === 'always')
        ) {
          node.attributes.some(function(decl) {
            if (decl.loc.start.line === node.loc.start.line) {
              context.report({
                node: decl,
                message: 'Property should be placed on a new line',
                fix: function(fixer) {
                  return fixer.replaceTextRange([node.name.end, decl.start], '\n');
                }
              });
            }
            return true;
          });
        } else if (configuration === 'never' && node.attributes.length > 0) {
          var firstNode = node.attributes[0];
          if (node.loc.start.line < firstNode.loc.start.line) {
            context.report({
              node: firstNode,
              message: 'Property should be placed on the same line as the component declaration',
              fix: function(fixer) {
                return fixer.replaceTextRange([node.name.end, firstNode.start], ' ');
              }
            });
            return;
          }
        }
        return;
      }
    };
  }
};
