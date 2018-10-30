/**
 * @fileoverview Enforce ES5 or ES6 class for React Components
 * @author Dan Hamilton
 */
'use strict';

var Components = require('../util/Components');

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Enforce ES5 or ES6 class for React Components',
      category: 'Stylistic Issues',
      recommended: false
    },

    schema: [{
      enum: ['always', 'never']
    }]
  },

  create: Components.detect(function(context, components, utils) {
    var configuration = context.options[0] || 'always';

    return {
      ObjectExpression: function(node) {
        if (utils.isES5Component(node) && configuration === 'always') {
          context.report({
            node: node,
            message: 'Component should use es6 class instead of createClass'
          });
        }
      },
      ClassDeclaration: function(node) {
        if (utils.isES6Component(node) && configuration === 'never') {
          context.report({
            node: node,
            message: 'Component should use createClass instead of es6 class'
          });
        }
      }
    };
  })
};
