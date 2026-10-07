/**
 * @fileoverview enforce consistent line breaks inside jsx curly
 */

'use strict';

const docsUrl = require('../util/docsUrl');
const eslintUtil = require('../util/eslint');
const report = require('../util/report');

const getSourceCode = eslintUtil.getSourceCode;
const getText = eslintUtil.getText;

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

function getNormalizedOption(context) {
  const rawOption = context.options[0] || 'consistent';

  if (rawOption === 'consistent') {
    return {
      multiline: 'consistent',
      singleline: 'consistent',
    };
  }

  if (rawOption === 'never') {
    return {
      multiline: 'forbid',
      singleline: 'forbid',
    };
  }

  return {
    multiline: rawOption.multiline || 'consistent',
    singleline: rawOption.singleline || 'consistent',
  };
}

const messages = {
  expectedBefore: 'Expected newline before \'}\'.',
  expectedAfter: 'Expected newline after \'{\'.',
  unexpectedBefore: 'Unexpected newline before \'}\'.',
  unexpectedAfter: 'Unexpected newline after \'{\'.',
};

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'layout',

    docs: {
      description: 'Enforce consistent linebreaks in curly braces in JSX attributes and expressions',
      category: 'Stylistic Issues',
      recommended: false,
      url: docsUrl('jsx-curly-newline'),
    },

    fixable: 'whitespace',

    schema: [
      {
        anyOf: [
          {
            enum: ['consistent', 'never'],
          },
          {
            type: 'object',
            properties: {
              singleline: { enum: ['consistent', 'require', 'forbid'] },
              multiline: { enum: ['consistent', 'require', 'forbid'] },
            },
            additionalProperties: false,
          },
        ],
      },
    ],

    messages,
  },

  create(context) {
    const sourceCode = getSourceCode(context);
    const option = getNormalizedOption(context);

    // ----------------------------------------------------------------------
    // Helpers
    // ----------------------------------------------------------------------

    /**
     * Determines whether two adjacent tokens are on the same line.
     * @param {Object} left - The left token object.
     * @param {Object} right - The right token object.
     * @returns {boolean} Whether or not the tokens are on the same line.
     */
    function isTokenOnSameLine(left, right) {
      return left.loc.end.line === right.loc.start.line;
    }

    /**
     * Determines whether there should be newlines inside curlys
     * @param {ASTNode} expression The expression contained in the curlys
     * @param {boolean} hasLeftNewline `true` if the left curly has a newline in the current code.
     * @returns {boolean} `true` if there should be newlines inside the function curlys
     */
    function shouldHaveNewlines(expression, hasLeftNewline) {
      const isMultiline = expression.loc.start.line !== expression.loc.end.line;

      switch (isMultiline ? option.multiline : option.singleline) {
        case 'forbid': return false;
        case 'require': return true;
        case 'consistent':
        default: return hasLeftNewline;
      }
    }

    /**
     * Validates curlys
     * @param {Object} curlys An object with keys `leftParen` for the left paren token, and `rightParen` for the right paren token
     * @param {ASTNode} expression The expression inside the curly
     * @returns {void}
     */
    function validateCurlys(curlys, expression) {
      const leftCurly = curlys.leftCurly;
      const rightCurly = curlys.rightCurly;
      const tokenAfterLeftCurly = sourceCode.getTokenAfter(leftCurly);
      const tokenBeforeRightCurly = sourceCode.getTokenBefore(rightCurly);
      const hasLeftNewline = !isTokenOnSameLine(leftCurly, tokenAfterLeftCurly);
      const hasRightNewline = !isTokenOnSameLine(tokenBeforeRightCurly, rightCurly);
      const needsNewlines = shouldHaveNewlines(expression, hasLeftNewline);

      if (hasLeftNewline && !needsNewlines) {
        report(context, messages.unexpectedAfter, 'unexpectedAfter', {
          node: leftCurly,
          fix(fixer) {
            return getText(context)
              .slice(leftCurly.range[1], tokenAfterLeftCurly.range[0])
              .trim()
              ? null // If there is a comment between the { and the first element, don't do a fix.
              : fixer.removeRange([leftCurly.range[1], tokenAfterLeftCurly.range[0]]);
          },
        });
      } else if (!hasLeftNewline && needsNewlines) {
        report(context, messages.expectedAfter, 'expectedAfter', {
          node: leftCurly,
          fix: (fixer) => fixer.insertTextAfter(leftCurly, '\n'),
        });
      }

      if (hasRightNewline && !needsNewlines) {
        report(context, messages.unexpectedBefore, 'unexpectedBefore', {
          node: rightCurly,
          fix(fixer) {
            return getText(context)
              .slice(tokenBeforeRightCurly.range[1], rightCurly.range[0])
              .trim()
              ? null // If there is a comment between the last element and the }, don't do a fix.
              : fixer.removeRange([
                tokenBeforeRightCurly.range[1],
                rightCurly.range[0],
              ]);
          },
        });
      } else if (!hasRightNewline && needsNewlines) {
        report(context, messages.expectedBefore, 'expectedBefore', {
          node: rightCurly,
          fix: (fixer) => fixer.insertTextBefore(rightCurly, '\n'),
        });
      }
    }

    // ----------------------------------------------------------------------
    // Public
    // ----------------------------------------------------------------------

    return {
      JSXExpressionContainer(node) {
        const curlyTokens = {
          leftCurly: sourceCode.getFirstToken(node),
          rightCurly: sourceCode.getLastToken(node),
        };
        validateCurlys(curlyTokens, node.expression);
      },
    };
  },
};
