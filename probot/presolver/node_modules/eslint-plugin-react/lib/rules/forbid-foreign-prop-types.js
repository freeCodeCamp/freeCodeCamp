/**
 * @fileoverview Forbid using another component's propTypes
 * @author Ian Christian Myers
 */
'use strict';

var find = require('array.prototype.find');

// ------------------------------------------------------------------------------
// Constants
// ------------------------------------------------------------------------------


// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Forbid using another component\'s propTypes',
      category: 'Best Practices',
      recommended: false
    }
  },

  create: function(context) {
    // --------------------------------------------------------------------------
    // Helpers
    // --------------------------------------------------------------------------

    function isLeftSideOfAssignment(node) {
      return node.parent.type === 'AssignmentExpression' && node.parent.left === node;
    }

    return {
      MemberExpression: function(node) {
        if (!node.computed && node.property && node.property.type === 'Identifier' &&
            node.property.name === 'propTypes' && !isLeftSideOfAssignment(node) ||
            node.property && node.property.type === 'Literal' &&
            node.property.value === 'propTypes' && !isLeftSideOfAssignment(node)) {
          context.report({
            node: node.property,
            message: 'Using another component\'s propTypes is forbidden'
          });
        }
      },

      ObjectPattern: function(node) {
        var propTypesNode = find(node.properties, function(property) {
          return property.type === 'Property' && property.key.name === 'propTypes';
        });

        if (propTypesNode) {
          context.report({
            node: propTypesNode,
            message: 'Using another component\'s propTypes is forbidden'
          });
        }
      }
    };
  }
};
