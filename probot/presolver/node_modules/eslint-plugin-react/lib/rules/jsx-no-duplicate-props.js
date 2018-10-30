/**
 * @fileoverview Enforce no duplicate props
 * @author Markus Ånöstam
 */

'use strict';

var has = require('has');

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Enforce no duplicate props',
      category: 'Possible Errors',
      recommended: true
    },

    schema: [{
      type: 'object',
      properties: {
        ignoreCase: {
          type: 'boolean'
        }
      },
      additionalProperties: false
    }]
  },

  create: function (context) {

    var configuration = context.options[0] || {};
    var ignoreCase = configuration.ignoreCase || false;

    return {
      JSXOpeningElement: function (node) {
        var props = {};

        node.attributes.forEach(function(decl) {
          if (decl.type === 'JSXSpreadAttribute') {
            return;
          }

          var name = decl.name.name;

          if (ignoreCase) {
            name = name.toLowerCase();
          }

          if (has(props, name)) {
            context.report({
              node: decl,
              message: 'No duplicate props allowed'
            });
          } else {
            props[name] = 1;
          }
        });
      }
    };
  }
};
