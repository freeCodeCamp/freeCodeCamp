/**
 * @fileoverview Disallow or enforce spaces around equal signs in JSX attributes.
 * @author ryym
 */

'use strict';

const docsUrl = require('../util/docsUrl');
const getSourceCode = require('../util/eslint').getSourceCode;
const report = require('../util/report');

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

const messages = {
  noSpaceBefore: 'There should be no space before \'=\'',
  noSpaceAfter: 'There should be no space after \'=\'',
  needSpaceBefore: 'A space is required before \'=\'',
  needSpaceAfter: 'A space is required after \'=\'',
};

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    docs: {
      description: 'Enforce or disallow spaces around equal signs in JSX attributes',
      category: 'Stylistic Issues',
      recommended: false,
      url: docsUrl('jsx-equals-spacing'),
    },
    fixable: 'code',

    messages,

    schema: [{
      enum: ['always', 'never'],
    }],
  },

  create(context) {
    const config = context.options[0] || 'never';

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
      JSXOpeningElement(node) {
        node.attributes.forEach((attrNode) => {
          if (!hasEqual(attrNode)) {
            return;
          }

          const sourceCode = getSourceCode(context);
          const equalToken = sourceCode.getTokenAfter(attrNode.name);
          const spacedBefore = sourceCode.isSpaceBetweenTokens(attrNode.name, equalToken);
          const spacedAfter = sourceCode.isSpaceBetweenTokens(equalToken, attrNode.value);

          if (config === 'never') {
            if (spacedBefore) {
              report(context, messages.noSpaceBefore, 'noSpaceBefore', {
                node: attrNode,
                loc: equalToken.loc.start,
                fix(fixer) {
                  return fixer.removeRange([attrNode.name.range[1], equalToken.range[0]]);
                },
              });
            }
            if (spacedAfter) {
              report(context, messages.noSpaceAfter, 'noSpaceAfter', {
                node: attrNode,
                loc: equalToken.loc.start,
                fix(fixer) {
                  return fixer.removeRange([equalToken.range[1], attrNode.value.range[0]]);
                },
              });
            }
          } else if (config === 'always') {
            if (!spacedBefore) {
              report(context, messages.needSpaceBefore, 'needSpaceBefore', {
                node: attrNode,
                loc: equalToken.loc.start,
                fix(fixer) {
                  return fixer.insertTextBefore(equalToken, ' ');
                },
              });
            }
            if (!spacedAfter) {
              report(context, messages.needSpaceAfter, 'needSpaceAfter', {
                node: attrNode,
                loc: equalToken.loc.start,
                fix(fixer) {
                  return fixer.insertTextAfter(equalToken, ' ');
                },
              });
            }
          }
        });
      },
    };
  },
};
