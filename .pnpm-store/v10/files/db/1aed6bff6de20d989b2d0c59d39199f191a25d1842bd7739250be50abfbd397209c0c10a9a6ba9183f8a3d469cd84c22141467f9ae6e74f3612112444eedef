/**
 * @fileoverview Validate closing tag location in JSX
 * @author Ross Solomon
 */

'use strict';

const repeat = require('string.prototype.repeat');
const has = require('hasown');

const astUtil = require('../util/ast');
const docsUrl = require('../util/docsUrl');
const getSourceCode = require('../util/eslint').getSourceCode;
const report = require('../util/report');

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

const messages = {
  onOwnLine: 'Closing tag of a multiline JSX expression must be on its own line.',
  matchIndent: 'Expected closing tag to match indentation of opening.',
  alignWithOpening: 'Expected closing tag to be aligned with the line containing the opening tag',
};

const defaultOption = 'tag-aligned';

const optionMessageMap = {
  'tag-aligned': 'matchIndent',
  'line-aligned': 'alignWithOpening',
};

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    docs: {
      description: 'Enforce closing tag location for multiline JSX',
      category: 'Stylistic Issues',
      recommended: false,
      url: docsUrl('jsx-closing-tag-location'),
    },
    fixable: 'whitespace',
    messages,
    schema: [{
      anyOf: [
        {
          enum: ['tag-aligned', 'line-aligned'],
        },
        {
          type: 'object',
          properties: {
            location: {
              enum: ['tag-aligned', 'line-aligned'],
            },
          },
          additionalProperties: false,
        },
      ],
    }],
  },

  create(context) {
    const config = context.options[0];
    let option = defaultOption;

    if (typeof config === 'string') {
      option = config;
    } else if (typeof config === 'object') {
      if (has(config, 'location')) {
        option = config.location;
      }
    }

    function getIndentation(openingStartOfLine, opening) {
      if (option === 'line-aligned') return openingStartOfLine.column;
      if (option === 'tag-aligned') return opening.loc.start.column;
    }

    function handleClosingElement(node) {
      if (!node.parent) {
        return;
      }
      const sourceCode = getSourceCode(context);

      const opening = node.parent.openingElement || node.parent.openingFragment;
      const openingLoc = sourceCode.getFirstToken(opening).loc.start;
      const openingLine = sourceCode.lines[openingLoc.line - 1];

      const openingStartOfLine = {
        column: /^\s*/.exec(openingLine)[0].length,
        line: openingLoc.line,
      };

      if (opening.loc.start.line === node.loc.start.line) {
        return;
      }

      if (
        opening.loc.start.column === node.loc.start.column
        && option === 'tag-aligned'
      ) {
        return;
      }

      if (
        openingStartOfLine.column === node.loc.start.column
        && option === 'line-aligned'
      ) {
        return;
      }

      const messageId = astUtil.isNodeFirstInLine(context, node)
        ? optionMessageMap[option]
        : 'onOwnLine';

      report(context, messages[messageId], messageId, {
        node,
        loc: node.loc,
        fix(fixer) {
          const indent = repeat(
            ' ',
            getIndentation(openingStartOfLine, opening)
          );

          if (astUtil.isNodeFirstInLine(context, node)) {
            return fixer.replaceTextRange(
              [node.range[0] - node.loc.start.column, node.range[0]],
              indent
            );
          }

          return fixer.insertTextBefore(node, `\n${indent}`);
        },
      });
    }

    return {
      JSXClosingElement: handleClosingElement,
      JSXClosingFragment: handleClosingElement,
    };
  },
};
