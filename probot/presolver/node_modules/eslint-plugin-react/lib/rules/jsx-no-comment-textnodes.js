/**
 * @fileoverview Comments inside children section of tag should be placed inside braces.
 * @author Ben Vinegar
 */
'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Comments inside children section of tag should be placed inside braces',
      category: 'Possible Errors',
      recommended: false
    },

    schema: [{
      type: 'object',
      properties: {},
      additionalProperties: false
    }]
  },

  create: function(context) {
    function reportLiteralNode(node) {
      context.report(node, 'Comments inside children section of tag should be placed inside braces');
    }

    // --------------------------------------------------------------------------
    // Public
    // --------------------------------------------------------------------------

    return {
      Literal: function(node) {
        if (/^\s*\/(\/|\*)/m.test(node.value)) {
          // inside component, e.g. <div>literal</div>
          if (node.parent.type !== 'JSXAttribute' &&
              node.parent.type !== 'JSXExpressionContainer' &&
              node.parent.type.indexOf('JSX') !== -1) {
            reportLiteralNode(node);
          }
        }
      }
    };
  }
};
