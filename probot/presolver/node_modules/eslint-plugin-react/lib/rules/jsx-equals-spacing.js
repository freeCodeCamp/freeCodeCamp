/**
 * @fileoverview Disallow or enforce spaces around equal signs in JSX attributes.
 * @author ryym
 */
'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Disallow or enforce spaces around equal signs in JSX attributes',
      category: 'Stylistic Issues',
      recommended: false
    },
    fixable: 'code',

    schema: [{
      enum: ['always', 'never']
    }]
  },

  create: function(context) {
    var config = context.options[0];
    var sourceCode = context.getSourceCode();

    /**
     * Determines a given attribute node has an equal sign.
     * @param {ASTNode} attrNode - The attribute node.
     * @returns {boolean} Whether or not the attriute node has an equal sign.
     */
    function hasEqual(attrNode) {
      return attrNode.type !== 'JSXSpreadAttribute' && attrNode.value !== null;
    }

    // --------------------------------------------------------------------------
    // Public
    // --------------------------------------------------------------------------

    return {
      JSXOpeningElement: function(node) {
        node.attributes.forEach(function(attrNode) {
          if (!hasEqual(attrNode)) {
            return;
          }

          var equalToken = sourceCode.getTokenAfter(attrNode.name);
          var spacedBefore = sourceCode.isSpaceBetweenTokens(attrNode.name, equalToken);
          var spacedAfter = sourceCode.isSpaceBetweenTokens(equalToken, attrNode.value);

          switch (config) {
            default:
            case 'never':
              if (spacedBefore) {
                context.report({
                  node: attrNode,
                  loc: equalToken.loc.start,
                  message: 'There should be no space before \'=\'',
                  fix: function(fixer) {
                    return fixer.removeRange([attrNode.name.range[1], equalToken.start]);
                  }
                });
              }
              if (spacedAfter) {
                context.report({
                  node: attrNode,
                  loc: equalToken.loc.start,
                  message: 'There should be no space after \'=\'',
                  fix: function(fixer) {
                    return fixer.removeRange([equalToken.end, attrNode.value.range[0]]);
                  }
                });
              }
              break;
            case 'always':
              if (!spacedBefore) {
                context.report({
                  node: attrNode,
                  loc: equalToken.loc.start,
                  message: 'A space is required before \'=\'',
                  fix: function(fixer) {
                    return fixer.insertTextBefore(equalToken, ' ');
                  }
                });
              }
              if (!spacedAfter) {
                context.report({
                  node: attrNode,
                  loc: equalToken.loc.start,
                  message: 'A space is required after \'=\'',
                  fix: function(fixer) {
                    return fixer.insertTextAfter(equalToken, ' ');
                  }
                });
              }
              break;
          }
        });
      }
    };
  }
};
