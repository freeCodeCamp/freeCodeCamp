/**
 * @fileoverview Enforce or disallow spaces inside of curly braces in JSX attributes.
 * @author Jamund Ferguson
 * @author Brandyn Bennett
 * @author Michael Ficarra
 * @author Vignesh Anand
 * @author Jamund Ferguson
 * @author Yannick Croissant
 * @author Erik Wendel
 */
'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

var SPACING = {
  always: 'always',
  never: 'never'
};
var SPACING_VALUES = [SPACING.always, SPACING.never];

module.exports = {
  meta: {
    docs: {
      description: 'Enforce or disallow spaces inside of curly braces in JSX attributes',
      category: 'Stylistic Issues',
      recommended: false
    },
    fixable: 'code',

    schema: [{
      enum: SPACING_VALUES
    }, {
      type: 'object',
      properties: {
        allowMultiline: {
          type: 'boolean'
        },
        spacing: {
          type: 'object',
          properties: {
            objectLiterals: {
              enum: SPACING_VALUES
            }
          }
        }
      },
      additionalProperties: false
    }]
  },

  create: function(context) {

    var sourceCode = context.getSourceCode();
    var spaced = context.options[0] === SPACING.always;
    var multiline = context.options[1] ? context.options[1].allowMultiline : true;
    var spacing = context.options[1] ? context.options[1].spacing || {} : {};
    var defaultSpacing = spaced ? SPACING.always : SPACING.never;
    var objectLiteralSpacing = spacing.objectLiterals || (spaced ? SPACING.always : SPACING.never);

    // --------------------------------------------------------------------------
    // Helpers
    // --------------------------------------------------------------------------

    /**
     * Determines whether two adjacent tokens have a newline between them.
     * @param {Object} left - The left token object.
     * @param {Object} right - The right token object.
     * @returns {boolean} Whether or not there is a newline between the tokens.
     */
    function isMultiline(left, right) {
      return left.loc.start.line !== right.loc.start.line;
    }

    /**
    * Reports that there shouldn't be a newline after the first token
    * @param {ASTNode} node - The node to report in the event of an error.
    * @param {Token} token - The token to use for the report.
    * @returns {void}
    */
    function reportNoBeginningNewline(node, token) {
      context.report({
        node: node,
        loc: token.loc.start,
        message: 'There should be no newline after \'' + token.value + '\'',
        fix: function(fixer) {
          var nextToken = sourceCode.getTokenAfter(token);
          return fixer.replaceTextRange([token.range[1], nextToken.range[0]], spaced ? ' ' : '');
        }
      });
    }

    /**
    * Reports that there shouldn't be a newline before the last token
    * @param {ASTNode} node - The node to report in the event of an error.
    * @param {Token} token - The token to use for the report.
    * @returns {void}
    */
    function reportNoEndingNewline(node, token) {
      context.report({
        node: node,
        loc: token.loc.start,
        message: 'There should be no newline before \'' + token.value + '\'',
        fix: function(fixer) {
          var previousToken = sourceCode.getTokenBefore(token);
          return fixer.replaceTextRange([previousToken.range[1], token.range[0]], spaced ? ' ' : '');
        }
      });
    }

    /**
    * Reports that there shouldn't be a space after the first token
    * @param {ASTNode} node - The node to report in the event of an error.
    * @param {Token} token - The token to use for the report.
    * @returns {void}
    */
    function reportNoBeginningSpace(node, token) {
      context.report({
        node: node,
        loc: token.loc.start,
        message: 'There should be no space after \'' + token.value + '\'',
        fix: function(fixer) {
          var nextToken = sourceCode.getTokenAfter(token);
          var leadingComments = sourceCode.getNodeByRangeIndex(nextToken.range[0]).leadingComments;
          var rangeEndRef = leadingComments ? leadingComments[0] : nextToken;
          return fixer.removeRange([token.range[1], rangeEndRef.range[0]]);
        }
      });
    }

    /**
    * Reports that there shouldn't be a space before the last token
    * @param {ASTNode} node - The node to report in the event of an error.
    * @param {Token} token - The token to use for the report.
    * @returns {void}
    */
    function reportNoEndingSpace(node, token) {
      context.report({
        node: node,
        loc: token.loc.start,
        message: 'There should be no space before \'' + token.value + '\'',
        fix: function(fixer) {
          var previousToken = sourceCode.getTokenBefore(token);
          var trailingComments = sourceCode.getNodeByRangeIndex(previousToken.range[0]).trailingComments;
          var rangeStartRef = trailingComments ? trailingComments[trailingComments.length - 1] : previousToken;
          return fixer.removeRange([rangeStartRef.range[1], token.range[0]]);
        }
      });
    }

    /**
    * Reports that there should be a space after the first token
    * @param {ASTNode} node - The node to report in the event of an error.
    * @param {Token} token - The token to use for the report.
    * @returns {void}
    */
    function reportRequiredBeginningSpace(node, token) {
      context.report({
        node: node,
        loc: token.loc.start,
        message: 'A space is required after \'' + token.value + '\'',
        fix: function(fixer) {
          return fixer.insertTextAfter(token, ' ');
        }
      });
    }

    /**
    * Reports that there should be a space before the last token
    * @param {ASTNode} node - The node to report in the event of an error.
    * @param {Token} token - The token to use for the report.
    * @returns {void}
    */
    function reportRequiredEndingSpace(node, token) {
      context.report({
        node: node,
        loc: token.loc.start,
        message: 'A space is required before \'' + token.value + '\'',
        fix: function(fixer) {
          return fixer.insertTextBefore(token, ' ');
        }
      });
    }

    /**
     * Determines if spacing in curly braces is valid.
     * @param {ASTNode} node The AST node to check.
     * @returns {void}
     */
    function validateBraceSpacing(node) {
      // Only validate attributes
      if (node.parent.type === 'JSXElement') {
        return;
      }
      var first = context.getFirstToken(node);
      var last = sourceCode.getLastToken(node);
      var second = context.getTokenAfter(first);
      var penultimate = sourceCode.getTokenBefore(last);

      var leadingComments = sourceCode.getNodeByRangeIndex(second.range[0]).leadingComments;
      second = leadingComments ? leadingComments[0] : second;

      var trailingComments = sourceCode.getNodeByRangeIndex(penultimate.range[0]).trailingComments;
      penultimate = trailingComments ? trailingComments[trailingComments.length - 1] : penultimate;

      var isObjectLiteral = first.value === second.value;
      if (isObjectLiteral) {
        if (objectLiteralSpacing === SPACING.never) {
          if (sourceCode.isSpaceBetweenTokens(first, second)) {
            reportNoBeginningSpace(node, first);
          } else if (!multiline && isMultiline(first, second)) {
            reportNoBeginningNewline(node, first);
          }
          if (sourceCode.isSpaceBetweenTokens(penultimate, last)) {
            reportNoEndingSpace(node, last);
          } else if (!multiline && isMultiline(penultimate, last)) {
            reportNoEndingNewline(node, last);
          }
        } else if (objectLiteralSpacing === SPACING.always) {
          if (!sourceCode.isSpaceBetweenTokens(first, second)) {
            reportRequiredBeginningSpace(node, first);
          } else if (!multiline && isMultiline(first, second)) {
            reportNoBeginningNewline(node, first);
          }
          if (!sourceCode.isSpaceBetweenTokens(penultimate, last)) {
            reportRequiredEndingSpace(node, last);
          } else if (!multiline && isMultiline(penultimate, last)) {
            reportNoEndingNewline(node, last);
          }
        }
      } else if (defaultSpacing === SPACING.always) {
        if (!sourceCode.isSpaceBetweenTokens(first, second)) {
          reportRequiredBeginningSpace(node, first);
        } else if (!multiline && isMultiline(first, second)) {
          reportNoBeginningNewline(node, first);
        }

        if (!sourceCode.isSpaceBetweenTokens(penultimate, last)) {
          reportRequiredEndingSpace(node, last);
        } else if (!multiline && isMultiline(penultimate, last)) {
          reportNoEndingNewline(node, last);
        }
      } else if (defaultSpacing === SPACING.never) {
        if (isMultiline(first, second)) {
          if (!multiline) {
            reportNoBeginningNewline(node, first);
          }
        } else if (sourceCode.isSpaceBetweenTokens(first, second)) {
          reportNoBeginningSpace(node, first);
        }
        if (isMultiline(penultimate, last)) {
          if (!multiline) {
            reportNoEndingNewline(node, last);
          }
        } else if (sourceCode.isSpaceBetweenTokens(penultimate, last)) {
          reportNoEndingSpace(node, last);
        }
      }
    }

    // --------------------------------------------------------------------------
    // Public
    // --------------------------------------------------------------------------

    return {
      JSXExpressionContainer: validateBraceSpacing,
      JSXSpreadAttribute: validateBraceSpacing
    };
  }
};
