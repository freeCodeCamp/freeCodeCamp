/**
 * @fileoverview Enforce boolean attributes notation in JSX
 * @author Yannick Croissant
 */
'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Enforce boolean attributes notation in JSX',
      category: 'Stylistic Issues',
      recommended: false
    },
    fixable: 'code',

    schema: [{
      enum: ['always', 'never']
    }]
  },

  create: function(context) {

    var configuration = context.options[0] || 'never';

    var NEVER_MESSAGE = 'Value must be omitted for boolean attributes';
    var ALWAYS_MESSAGE = 'Value must be set for boolean attributes';

    return {
      JSXAttribute: function(node) {
        switch (configuration) {
          case 'always':
            if (node.value === null) {
              context.report({
                node: node,
                message: ALWAYS_MESSAGE,
                fix: function(fixer) {
                  return fixer.insertTextAfter(node, '={true}');
                }
              });
            }
            break;
          case 'never':
            if (node.value && node.value.type === 'JSXExpressionContainer' && node.value.expression.value === true) {
              context.report({
                node: node,
                message: NEVER_MESSAGE,
                fix: function(fixer) {
                  return fixer.removeRange([node.name.range[1], node.value.range[1]]);
                }
              });
            }
            break;
          default:
            break;
        }
      }
    };
  }
};
