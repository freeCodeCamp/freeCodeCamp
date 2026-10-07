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

const has = require('hasown');
const docsUrl = require('../util/docsUrl');
const getSourceCode = require('../util/eslint').getSourceCode;
const report = require('../util/report');

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

const SPACING = {
  always: 'always',
  never: 'never',
};
const SPACING_VALUES = [SPACING.always, SPACING.never];

const messages = {
  noNewlineAfter: 'There should be no newline after \'{{token}}\'',
  noNewlineBefore: 'There should be no newline before \'{{token}}\'',
  noSpaceAfter: 'There should be no space after \'{{token}}\'',
  noSpaceBefore: 'There should be no space before \'{{token}}\'',
  spaceNeededAfter: 'A space is required after \'{{token}}\'',
  spaceNeededBefore: 'A space is required before \'{{token}}\'',
};

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    docs: {
      description: 'Enforce or disallow spaces inside of curly braces in JSX attributes and expressions',
      category: 'Stylistic Issues',
      recommended: false,
      url: docsUrl('jsx-curly-spacing'),
    },
    fixable: 'code',

    messages,

    schema: {
      definitions: {
        basicConfig: {
          type: 'object',
          properties: {
            when: {
              enum: SPACING_VALUES,
            },
            allowMultiline: {
              type: 'boolean',
            },
            spacing: {
              type: 'object',
              properties: {
                objectLiterals: {
                  enum: SPACING_VALUES,
                },
              },
            },
          },
        },
        basicConfigOrBoolean: {
          anyOf: [{
            $ref: '#/definitions/basicConfig',
          }, {
            type: 'boolean',
          }],
        },
      },
      type: 'array',
      items: [{
        anyOf: [{
          allOf: [{
            $ref: '#/definitions/basicConfig',
          }, {
            type: 'object',
            properties: {
              attributes: {
                $ref: '#/definitions/basicConfigOrBoolean',
              },
              children: {
                $ref: '#/definitions/basicConfigOrBoolean',
              },
            },
          }],
        }, {
          enum: SPACING_VALUES,
        }],
      }, {
        type: 'object',
        properties: {
          allowMultiline: {
            type: 'boolean',
          },
          spacing: {
            type: 'object',
            properties: {
              objectLiterals: {
                enum: SPACING_VALUES,
              },
            },
          },
        },
        additionalProperties: false,
      }],
    },
  },

  create(context) {
    function normalizeConfig(configOrTrue, defaults, lastPass) {
      const config = configOrTrue === true ? {} : configOrTrue;
      const when = config.when || defaults.when;
      const allowMultiline = has(config, 'allowMultiline') ? config.allowMultiline : defaults.allowMultiline;
      const spacing = config.spacing || {};
      let objectLiteralSpaces = spacing.objectLiterals || defaults.objectLiteralSpaces;
      if (lastPass) {
        // On the final pass assign the values that should be derived from others if they are still undefined
        objectLiteralSpaces = objectLiteralSpaces || when;
      }

      return {
        when,
        allowMultiline,
        objectLiteralSpaces,
      };
    }

    const DEFAULT_WHEN = SPACING.never;
    const DEFAULT_ALLOW_MULTILINE = true;
    const DEFAULT_ATTRIBUTES = true;
    const DEFAULT_CHILDREN = false;

    let originalConfig = context.options[0] || {};
    if (SPACING_VALUES.indexOf(originalConfig) !== -1) {
      originalConfig = Object.assign({ when: context.options[0] }, context.options[1]);
    }
    const defaultConfig = normalizeConfig(originalConfig, {
      when: DEFAULT_WHEN,
      allowMultiline: DEFAULT_ALLOW_MULTILINE,
    });
    const attributes = has(originalConfig, 'attributes') ? originalConfig.attributes : DEFAULT_ATTRIBUTES;
    const attributesConfig = attributes ? normalizeConfig(attributes, defaultConfig, true) : null;
    const children = has(originalConfig, 'children') ? originalConfig.children : DEFAULT_CHILDREN;
    const childrenConfig = children ? normalizeConfig(children, defaultConfig, true) : null;

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
      return left.loc.end.line !== right.loc.start.line;
    }

    /**
     * Trims text of whitespace between two ranges
     * @param {Fixer} fixer - the eslint fixer object
     * @param {number} fromLoc - the start location
     * @param {number} toLoc - the end location
     * @param {string} mode - either 'start' or 'end'
     * @param {string=} spacing - a spacing value that will optionally add a space to the removed text
     * @returns {Object|*|{range, text}}
     */
    function fixByTrimmingWhitespace(fixer, fromLoc, toLoc, mode, spacing) {
      let replacementText = getSourceCode(context).text.slice(fromLoc, toLoc);
      if (mode === 'start') {
        replacementText = replacementText.replace(/^\s+/gm, '');
      } else {
        replacementText = replacementText.replace(/\s+$/gm, '');
      }
      if (spacing === SPACING.always) {
        if (mode === 'start') {
          replacementText += ' ';
        } else {
          replacementText = ` ${replacementText}`;
        }
      }
      return fixer.replaceTextRange([fromLoc, toLoc], replacementText);
    }

    /**
    * Reports that there shouldn't be a newline after the first token
    * @param {ASTNode} node - The node to report in the event of an error.
    * @param {Token} token - The token to use for the report.
    * @param {string} spacing
    * @returns {void}
    */
    function reportNoBeginningNewline(node, token, spacing) {
      report(context, messages.noNewlineAfter, 'noNewlineAfter', {
        node,
        loc: token.loc.start,
        data: {
          token: token.value,
        },
        fix(fixer) {
          const nextToken = getSourceCode(context).getTokenAfter(token);
          return fixByTrimmingWhitespace(fixer, token.range[1], nextToken.range[0], 'start', spacing);
        },
      });
    }

    /**
    * Reports that there shouldn't be a newline before the last token
    * @param {ASTNode} node - The node to report in the event of an error.
    * @param {Token} token - The token to use for the report.
    * @param {string} spacing
    * @returns {void}
    */
    function reportNoEndingNewline(node, token, spacing) {
      report(context, messages.noNewlineBefore, 'noNewlineBefore', {
        node,
        loc: token.loc.start,
        data: {
          token: token.value,
        },
        fix(fixer) {
          const previousToken = getSourceCode(context).getTokenBefore(token);
          return fixByTrimmingWhitespace(fixer, previousToken.range[1], token.range[0], 'end', spacing);
        },
      });
    }

    /**
    * Reports that there shouldn't be a space after the first token
    * @param {ASTNode} node - The node to report in the event of an error.
    * @param {Token} token - The token to use for the report.
    * @returns {void}
    */
    function reportNoBeginningSpace(node, token) {
      report(context, messages.noSpaceAfter, 'noSpaceAfter', {
        node,
        loc: token.loc.start,
        data: {
          token: token.value,
        },
        fix(fixer) {
          const sourceCode = getSourceCode(context);
          const nextToken = sourceCode.getTokenAfter(token);
          let nextComment;

          // eslint >=4.x
          if (sourceCode.getCommentsAfter) {
            nextComment = sourceCode.getCommentsAfter(token);
          // eslint 3.x
          } else {
            const potentialComment = sourceCode.getTokenAfter(token, { includeComments: true });
            nextComment = nextToken === potentialComment ? [] : [potentialComment];
          }

          // Take comments into consideration to narrow the fix range to what is actually affected. (See #1414)
          if (nextComment.length > 0) {
            return fixByTrimmingWhitespace(fixer, token.range[1], Math.min(nextToken.range[0], nextComment[0].range[0]), 'start');
          }

          return fixByTrimmingWhitespace(fixer, token.range[1], nextToken.range[0], 'start');
        },
      });
    }

    /**
    * Reports that there shouldn't be a space before the last token
    * @param {ASTNode} node - The node to report in the event of an error.
    * @param {Token} token - The token to use for the report.
    * @returns {void}
    */
    function reportNoEndingSpace(node, token) {
      report(context, messages.noSpaceBefore, 'noSpaceBefore', {
        node,
        loc: token.loc.start,
        data: {
          token: token.value,
        },
        fix(fixer) {
          const sourceCode = getSourceCode(context);
          const previousToken = sourceCode.getTokenBefore(token);
          let previousComment;

          // eslint >=4.x
          if (sourceCode.getCommentsBefore) {
            previousComment = sourceCode.getCommentsBefore(token);
          // eslint 3.x
          } else {
            const potentialComment = sourceCode.getTokenBefore(token, { includeComments: true });
            previousComment = previousToken === potentialComment ? [] : [potentialComment];
          }

          // Take comments into consideration to narrow the fix range to what is actually affected. (See #1414)
          if (previousComment.length > 0) {
            return fixByTrimmingWhitespace(fixer, Math.max(previousToken.range[1], previousComment[0].range[1]), token.range[0], 'end');
          }

          return fixByTrimmingWhitespace(fixer, previousToken.range[1], token.range[0], 'end');
        },
      });
    }

    /**
    * Reports that there should be a space after the first token
    * @param {ASTNode} node - The node to report in the event of an error.
    * @param {Token} token - The token to use for the report.
    * @returns {void}
    */
    function reportRequiredBeginningSpace(node, token) {
      report(context, messages.spaceNeededAfter, 'spaceNeededAfter', {
        node,
        loc: token.loc.start,
        data: {
          token: token.value,
        },
        fix(fixer) {
          return fixer.insertTextAfter(token, ' ');
        },
      });
    }

    /**
    * Reports that there should be a space before the last token
    * @param {ASTNode} node - The node to report in the event of an error.
    * @param {Token} token - The token to use for the report.
    * @returns {void}
    */
    function reportRequiredEndingSpace(node, token) {
      report(context, messages.spaceNeededBefore, 'spaceNeededBefore', {
        node,
        loc: token.loc.start,
        data: {
          token: token.value,
        },
        fix(fixer) {
          return fixer.insertTextBefore(token, ' ');
        },
      });
    }

    /**
     * Determines if spacing in curly braces is valid.
     * @param {ASTNode} node The AST node to check.
     * @returns {void}
     */
    function validateBraceSpacing(node) {
      let config;
      switch (node.parent.type) {
        case 'JSXAttribute':
        case 'JSXOpeningElement':
          config = attributesConfig;
          break;

        case 'JSXElement':
        case 'JSXFragment':
          config = childrenConfig;
          break;

        default:
          return;
      }
      if (config === null) {
        return;
      }

      const sourceCode = getSourceCode(context);
      const first = sourceCode.getFirstToken(node);
      const last = sourceCode.getLastToken(node);
      let second = sourceCode.getTokenAfter(first, { includeComments: true });
      let penultimate = sourceCode.getTokenBefore(last, { includeComments: true });

      if (!second) {
        second = sourceCode.getTokenAfter(first);
        const leadingComments = sourceCode.getNodeByRangeIndex(second.range[0]).leadingComments;
        second = leadingComments ? leadingComments[0] : second;
      }
      if (!penultimate) {
        penultimate = sourceCode.getTokenBefore(last);
        const trailingComments = sourceCode.getNodeByRangeIndex(penultimate.range[0]).trailingComments;
        penultimate = trailingComments ? trailingComments[trailingComments.length - 1] : penultimate;
      }

      const isObjectLiteral = first.value === second.value;
      const spacing = isObjectLiteral ? config.objectLiteralSpaces : config.when;
      if (spacing === SPACING.always) {
        if (!sourceCode.isSpaceBetweenTokens(first, second)) {
          reportRequiredBeginningSpace(node, first);
        } else if (!config.allowMultiline && isMultiline(first, second)) {
          reportNoBeginningNewline(node, first, spacing);
        }
        if (!sourceCode.isSpaceBetweenTokens(penultimate, last)) {
          reportRequiredEndingSpace(node, last);
        } else if (!config.allowMultiline && isMultiline(penultimate, last)) {
          reportNoEndingNewline(node, last, spacing);
        }
      } else if (spacing === SPACING.never) {
        if (isMultiline(first, second)) {
          if (!config.allowMultiline) {
            reportNoBeginningNewline(node, first, spacing);
          }
        } else if (sourceCode.isSpaceBetweenTokens(first, second)) {
          reportNoBeginningSpace(node, first);
        }
        if (isMultiline(penultimate, last)) {
          if (!config.allowMultiline) {
            reportNoEndingNewline(node, last, spacing);
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
      JSXSpreadAttribute: validateBraceSpacing,
    };
  },
};
