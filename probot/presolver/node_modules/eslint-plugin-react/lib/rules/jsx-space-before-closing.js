/**
 * @fileoverview Validate spacing before closing bracket in JSX.
 * @author ryym
 */
'use strict';

var getTokenBeforeClosingBracket = require('../util/getTokenBeforeClosingBracket');

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Validate spacing before closing bracket in JSX',
      category: 'Stylistic Issues',
      recommended: false
    },
    fixable: 'code',

    schema: [{
      enum: ['always', 'never']
    }]
  },

  create: function(context) {

    var configuration = context.options[0] || 'always';
    var sourceCode = context.getSourceCode();

    var NEVER_MESSAGE = 'A space is forbidden before closing bracket';
    var ALWAYS_MESSAGE = 'A space is required before closing bracket';

    // --------------------------------------------------------------------------
    // Public
    // --------------------------------------------------------------------------

    return {
      JSXOpeningElement: function(node) {
        if (!node.selfClosing) {
          return;
        }

        var leftToken = getTokenBeforeClosingBracket(node);
        var closingSlash = sourceCode.getTokenAfter(leftToken);

        if (leftToken.loc.end.line !== closingSlash.loc.start.line) {
          return;
        }

        if (configuration === 'always' && !sourceCode.isSpaceBetweenTokens(leftToken, closingSlash)) {
          context.report({
            loc: closingSlash.loc.start,
            message: ALWAYS_MESSAGE,
            fix: function(fixer) {
              return fixer.insertTextBefore(closingSlash, ' ');
            }
          });
        } else if (configuration === 'never' && sourceCode.isSpaceBetweenTokens(leftToken, closingSlash)) {
          context.report({
            loc: closingSlash.loc.start,
            message: NEVER_MESSAGE,
            fix: function(fixer) {
              var previousToken = sourceCode.getTokenBefore(closingSlash);
              return fixer.removeRange([previousToken.range[1], closingSlash.range[0]]);
            }
          });
        }
      }
    };

  }
};
