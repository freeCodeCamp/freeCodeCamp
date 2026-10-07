/**
 * @fileoverview Validate closing bracket location in JSX
 * @author Yannick Croissant
 */

'use strict';

const has = require('hasown');
const repeat = require('string.prototype.repeat');

const docsUrl = require('../util/docsUrl');
const getSourceCode = require('../util/eslint').getSourceCode;
const report = require('../util/report');

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

const messages = {
  bracketLocation: 'The closing bracket must be {{location}}{{details}}',
};

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    docs: {
      description: 'Enforce closing bracket location in JSX',
      category: 'Stylistic Issues',
      recommended: false,
      url: docsUrl('jsx-closing-bracket-location'),
    },
    fixable: 'code',

    messages,

    schema: [{
      anyOf: [
        {
          enum: ['after-props', 'props-aligned', 'tag-aligned', 'line-aligned'],
        },
        {
          type: 'object',
          properties: {
            location: {
              enum: ['after-props', 'props-aligned', 'tag-aligned', 'line-aligned'],
            },
          },
          additionalProperties: false,
        }, {
          type: 'object',
          properties: {
            nonEmpty: {
              enum: ['after-props', 'props-aligned', 'tag-aligned', 'line-aligned', false],
            },
            selfClosing: {
              enum: ['after-props', 'props-aligned', 'tag-aligned', 'line-aligned', false],
            },
          },
          additionalProperties: false,
        },
      ],
    }],
  },

  create(context) {
    const MESSAGE_LOCATION = {
      'after-props': 'placed after the last prop',
      'after-tag': 'placed after the opening tag',
      'props-aligned': 'aligned with the last prop',
      'tag-aligned': 'aligned with the opening tag',
      'line-aligned': 'aligned with the line containing the opening tag',
    };
    const DEFAULT_LOCATION = 'tag-aligned';

    const config = context.options[0];
    const options = {
      nonEmpty: DEFAULT_LOCATION,
      selfClosing: DEFAULT_LOCATION,
    };

    if (typeof config === 'string') {
      // simple shorthand [1, 'something']
      options.nonEmpty = config;
      options.selfClosing = config;
    } else if (typeof config === 'object') {
      // [1, {location: 'something'}] (back-compat)
      if (has(config, 'location')) {
        options.nonEmpty = config.location;
        options.selfClosing = config.location;
      }
      // [1, {nonEmpty: 'something'}]
      if (has(config, 'nonEmpty')) {
        options.nonEmpty = config.nonEmpty;
      }
      // [1, {selfClosing: 'something'}]
      if (has(config, 'selfClosing')) {
        options.selfClosing = config.selfClosing;
      }
    }

    /**
     * Get expected location for the closing bracket
     * @param {Object} tokens Locations of the opening bracket, closing bracket and last prop
     * @return {string} Expected location for the closing bracket
     */
    function getExpectedLocation(tokens) {
      let location;
      // Is always after the opening tag if there is no props
      if (typeof tokens.lastProp === 'undefined') {
        location = 'after-tag';
      // Is always after the last prop if this one is on the same line as the opening bracket
      } else if (tokens.opening.line === tokens.lastProp.lastLine) {
        location = 'after-props';
      // Else use configuration dependent on selfClosing property
      } else {
        location = tokens.selfClosing ? options.selfClosing : options.nonEmpty;
      }
      return location;
    }

    /**
     * Get the correct 0-indexed column for the closing bracket, given the
     * expected location.
     * @param {Object} tokens Locations of the opening bracket, closing bracket and last prop
     * @param {string} expectedLocation Expected location for the closing bracket
     * @return {?Number} The correct column for the closing bracket, or null
     */
    function getCorrectColumn(tokens, expectedLocation) {
      switch (expectedLocation) {
        case 'props-aligned':
          return tokens.lastProp.column;
        case 'tag-aligned':
          return tokens.opening.column;
        case 'line-aligned':
          return tokens.openingStartOfLine.column;
        default:
          return null;
      }
    }

    /**
     * Check if the closing bracket is correctly located
     * @param {Object} tokens Locations of the opening bracket, closing bracket and last prop
     * @param {string} expectedLocation Expected location for the closing bracket
     * @return {boolean} True if the closing bracket is correctly located, false if not
     */
    function hasCorrectLocation(tokens, expectedLocation) {
      switch (expectedLocation) {
        case 'after-tag':
          return tokens.tag.line === tokens.closing.line;
        case 'after-props':
          return tokens.lastProp.lastLine === tokens.closing.line;
        case 'props-aligned':
        case 'tag-aligned':
        case 'line-aligned': {
          const correctColumn = getCorrectColumn(tokens, expectedLocation);
          return correctColumn === tokens.closing.column;
        }
        default:
          return true;
      }
    }

    /**
     * Get the characters used for indentation on the line to be matched
     * @param {Object} tokens Locations of the opening bracket, closing bracket and last prop
     * @param {string} expectedLocation Expected location for the closing bracket
     * @param {number} [correctColumn] Expected column for the closing bracket. Default to 0
     * @return {string} The characters used for indentation
     */
    function getIndentation(tokens, expectedLocation, correctColumn) {
      const newColumn = correctColumn || 0;
      let indentation;
      let spaces = '';
      switch (expectedLocation) {
        case 'props-aligned':
          indentation = /^\s*/.exec(getSourceCode(context).lines[tokens.lastProp.firstLine - 1])[0];
          break;
        case 'tag-aligned':
        case 'line-aligned':
          indentation = /^\s*/.exec(getSourceCode(context).lines[tokens.opening.line - 1])[0];
          break;
        default:
          indentation = '';
      }
      if (indentation.length + 1 < newColumn) {
        // Non-whitespace characters were included in the column offset
        spaces = repeat(' ', +correctColumn - indentation.length);
      }
      return indentation + spaces;
    }

    /**
     * Get the locations of the opening bracket, closing bracket, last prop, and
     * start of opening line.
     * @param {ASTNode} node The node to check
     * @return {Object} Locations of the opening bracket, closing bracket, last
     * prop and start of opening line.
     */
    function getTokensLocations(node) {
      const sourceCode = getSourceCode(context);
      const opening = sourceCode.getFirstToken(node).loc.start;
      const closing = sourceCode.getLastTokens(node, node.selfClosing ? 2 : 1)[0].loc.start;
      const tag = sourceCode.getFirstToken(node.name).loc.start;
      let lastProp;
      if (node.attributes.length) {
        lastProp = node.attributes[node.attributes.length - 1];
        lastProp = {
          column: sourceCode.getFirstToken(lastProp).loc.start.column,
          firstLine: sourceCode.getFirstToken(lastProp).loc.start.line,
          lastLine: sourceCode.getLastToken(lastProp).loc.end.line,
        };
      }
      const openingLine = sourceCode.lines[opening.line - 1];
      const closingLine = sourceCode.lines[closing.line - 1];
      const isTab = {
        openTab: /^\t/.test(openingLine),
        closeTab: /^\t/.test(closingLine),
      };
      const openingStartOfLine = {
        column: /^\s*/.exec(openingLine)[0].length,
        line: opening.line,
      };
      return {
        isTab,
        tag,
        opening,
        closing,
        lastProp,
        selfClosing: node.selfClosing,
        openingStartOfLine,
      };
    }

    /**
     * Get an unique ID for a given JSXOpeningElement
     *
     * @param {ASTNode} node The AST node being checked.
     * @returns {string} Unique ID (based on its range)
     */
    function getOpeningElementId(node) {
      return node.range.join(':');
    }

    const lastAttributeNode = {};

    return {
      JSXAttribute(node) {
        lastAttributeNode[getOpeningElementId(node.parent)] = node;
      },

      JSXSpreadAttribute(node) {
        lastAttributeNode[getOpeningElementId(node.parent)] = node;
      },

      'JSXOpeningElement:exit'(node) {
        const attributeNode = lastAttributeNode[getOpeningElementId(node)];
        const cachedLastAttributeEndPos = attributeNode ? attributeNode.range[1] : null;

        let expectedNextLine;
        const tokens = getTokensLocations(node);
        const expectedLocation = getExpectedLocation(tokens);
        let usingSameIndentation = true;

        if (expectedLocation === 'tag-aligned') {
          usingSameIndentation = tokens.isTab.openTab === tokens.isTab.closeTab;
        }

        if (hasCorrectLocation(tokens, expectedLocation) && usingSameIndentation) {
          return;
        }

        const data = {
          location: MESSAGE_LOCATION[expectedLocation],
          details: '',
        };
        const correctColumn = getCorrectColumn(tokens, expectedLocation);

        if (correctColumn !== null) {
          expectedNextLine = tokens.lastProp
            && (tokens.lastProp.lastLine === tokens.closing.line);
          data.details = ` (expected column ${correctColumn + 1}${expectedNextLine ? ' on the next line)' : ')'}`;
        }

        report(context, messages.bracketLocation, 'bracketLocation', {
          node,
          loc: tokens.closing,
          data,
          fix(fixer) {
            const closingTag = tokens.selfClosing ? '/>' : '>';
            switch (expectedLocation) {
              case 'after-tag':
                if (cachedLastAttributeEndPos) {
                  return fixer.replaceTextRange([cachedLastAttributeEndPos, node.range[1]],
                    (expectedNextLine ? '\n' : '') + closingTag);
                }
                return fixer.replaceTextRange([node.name.range[1], node.range[1]],
                  (expectedNextLine ? '\n' : ' ') + closingTag);
              case 'after-props':
                return fixer.replaceTextRange([cachedLastAttributeEndPos, node.range[1]],
                  (expectedNextLine ? '\n' : '') + closingTag);
              case 'props-aligned':
              case 'tag-aligned':
              case 'line-aligned':
                return fixer.replaceTextRange([cachedLastAttributeEndPos, node.range[1]],
                  `\n${getIndentation(tokens, expectedLocation, correctColumn)}${closingTag}`);
              default:
                return true;
            }
          },
        });
      },
    };
  },
};
