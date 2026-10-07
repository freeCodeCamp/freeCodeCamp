/**
 * @fileoverview Validate spacing before closing bracket in JSX.
 * @author ryym
 * @deprecated
 */

'use strict';

const getTokenBeforeClosingBracket = require('../util/getTokenBeforeClosingBracket');
const docsUrl = require('../util/docsUrl');
const log = require('../util/log');
const report = require('../util/report');
const getSourceCode = require('../util/eslint').getSourceCode;

let isWarnedForDeprecation = false;

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

const messages = {
  noSpaceBeforeClose: 'A space is forbidden before closing bracket',
  needSpaceBeforeClose: 'A space is required before closing bracket',
};

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    deprecated: true,
    replacedBy: ['jsx-tag-spacing'],
    docs: {
      description: 'Enforce spacing before closing bracket in JSX',
      category: 'Stylistic Issues',
      recommended: false,
      url: docsUrl('jsx-space-before-closing'),
    },
    fixable: 'code',

    messages,

    schema: [{
      enum: ['always', 'never'],
    }],
  },

  create(context) {
    const configuration = context.options[0] || 'always';

    // --------------------------------------------------------------------------
    // Public
    // --------------------------------------------------------------------------

    return {
      JSXOpeningElement(node) {
        if (!node.selfClosing) {
          return;
        }

        const sourceCode = getSourceCode(context);

        const leftToken = getTokenBeforeClosingBracket(node);
        const closingSlash = /** @type {import('eslint').AST.Token} */ (sourceCode.getTokenAfter(leftToken));

        if (leftToken.loc.end.line !== closingSlash.loc.start.line) {
          return;
        }

        if (configuration === 'always' && !sourceCode.isSpaceBetweenTokens(leftToken, closingSlash)) {
          report(context, messages.needSpaceBeforeClose, 'needSpaceBeforeClose', {
            loc: closingSlash.loc.start,
            fix(fixer) {
              return fixer.insertTextBefore(closingSlash, ' ');
            },
          });
        } else if (configuration === 'never' && sourceCode.isSpaceBetweenTokens(leftToken, closingSlash)) {
          report(context, messages.noSpaceBeforeClose, 'noSpaceBeforeClose', {
            loc: closingSlash.loc.start,
            fix(fixer) {
              const previousToken = sourceCode.getTokenBefore(closingSlash);
              return fixer.removeRange([previousToken.range[1], closingSlash.range[0]]);
            },
          });
        }
      },

      Program() {
        if (isWarnedForDeprecation) {
          return;
        }

        log('The react/jsx-space-before-closing rule is deprecated. '
            + 'Please use the react/jsx-tag-spacing rule with the '
            + '"beforeSelfClosing" option instead.');
        isWarnedForDeprecation = true;
      },
    };
  },
};
