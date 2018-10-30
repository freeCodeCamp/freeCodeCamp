/**
 * @fileoverview Prevent usage of isMounted
 * @author Joe Lencioni
 */
'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Prevent usage of isMounted',
      category: 'Best Practices',
      recommended: true
    },
    schema: []
  },

  create: function(context) {

    // --------------------------------------------------------------------------
    // Public
    // --------------------------------------------------------------------------

    return {

      CallExpression: function(node) {
        var callee = node.callee;
        if (callee.type !== 'MemberExpression') {
          return;
        }
        if (callee.object.type !== 'ThisExpression' || callee.property.name !== 'isMounted') {
          return;
        }
        var ancestors = context.getAncestors(callee);
        for (var i = 0, j = ancestors.length; i < j; i++) {
          if (ancestors[i].type === 'Property' || ancestors[i].type === 'MethodDefinition') {
            context.report({
              node: callee,
              message: 'Do not use isMounted'
            });
            break;
          }
        }
      }
    };

  }
};
