/**
 * @fileoverview Validate closing bracket location in JSX
 * @author Yannick Croissant
 */
'use strict';

var has = require('has');

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------
module.exports = {
  meta: {
    docs: {
      description: 'Validate closing bracket location in JSX',
      category: 'Stylistic Issues',
      recommended: false
    },
    fixable: 'code',

    schema: [{
      oneOf: [
        {
          enum: ['after-props', 'props-aligned', 'tag-aligned', 'line-aligned']
        },
        {
          type: 'object',
          properties: {
            location: {
              enum: ['after-props', 'props-aligned', 'tag-aligned', 'line-aligned']
            }
          },
          additionalProperties: false
        }, {
          type: 'object',
          properties: {
            nonEmpty: {
              enum: ['after-props', 'props-aligned', 'tag-aligned', 'line-aligned', false]
            },
            selfClosing: {
              enum: ['after-props', 'props-aligned', 'tag-aligned', 'line-aligned', false]
            }
          },
          additionalProperties: false
        }
      ]
    }]
  },

  create: function(context) {

    var MESSAGE = 'The closing bracket must be {{location}}{{details}}';
    var MESSAGE_LOCATION = {
      'after-props': 'placed after the last prop',
      'after-tag': 'placed after the opening tag',
      'props-aligned': 'aligned with the last prop',
      'tag-aligned': 'aligned with the opening tag',
      'line-aligned': 'aligned with the line containing the opening tag'
    };
    var DEFAULT_LOCATION = 'tag-aligned';

    var sourceCode = context.getSourceCode();
    var config = context.options[0];
    var options = {
      nonEmpty: DEFAULT_LOCATION,
      selfClosing: DEFAULT_LOCATION
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
     * @return {String} Expected location for the closing bracket
     */
    function getExpectedLocation(tokens) {
      var location;
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
     * @param {String} expectedLocation Expected location for the closing bracket
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
     * @param {String} expectedLocation Expected location for the closing bracket
     * @return {Boolean} True if the closing bracket is correctly located, false if not
     */
    function hasCorrectLocation(tokens, expectedLocation) {
      switch (expectedLocation) {
        case 'after-tag':
          return tokens.tag.line === tokens.closing.line;
        case 'after-props':
          return tokens.lastProp.lastLine === tokens.closing.line;
        case 'props-aligned':
        case 'tag-aligned':
        case 'line-aligned':
          var correctColumn = getCorrectColumn(tokens, expectedLocation);
          return correctColumn === tokens.closing.column;
        default:
          return true;
      }
    }

    /**
     * Get the characters used for indentation on the line to be matched
     * @param {Object} tokens Locations of the opening bracket, closing bracket and last prop
     * @param {String} expectedLocation Expected location for the closing bracket
     * @param {Number} correctColumn Expected column for the closing bracket
     * @return {String} The characters used for indentation
     */
    function getIndentation(tokens, expectedLocation, correctColumn) {
      var indentation, spaces = [];
      switch (expectedLocation) {
        case 'props-aligned':
          indentation = /^\s*/.exec(sourceCode.lines[tokens.lastProp.firstLine - 1])[0];
          break;
        case 'tag-aligned':
        case 'line-aligned':
          indentation = /^\s*/.exec(sourceCode.lines[tokens.opening.line - 1])[0];
          break;
        default:
          indentation = '';
      }
      if (indentation.length + 1 < correctColumn) {
        // Non-whitespace characters were included in the column offset
        spaces = new Array(+correctColumn + 1 - indentation.length);
      }
      return indentation + spaces.join(' ');
    }

    /**
     * Get the locations of the opening bracket, closing bracket, last prop, and
     * start of opening line.
     * @param {ASTNode} node The node to check
     * @return {Object} Locations of the opening bracket, closing bracket, last
     * prop and start of opening line.
     */
    function getTokensLocations(node) {
      var opening = sourceCode.getFirstToken(node).loc.start;
      var closing = sourceCode.getLastTokens(node, node.selfClosing ? 2 : 1)[0].loc.start;
      var tag = sourceCode.getFirstToken(node.name).loc.start;
      var lastProp;
      if (node.attributes.length) {
        lastProp = node.attributes[node.attributes.length - 1];
        lastProp = {
          column: sourceCode.getFirstToken(lastProp).loc.start.column,
          firstLine: sourceCode.getFirstToken(lastProp).loc.start.line,
          lastLine: sourceCode.getLastToken(lastProp).loc.end.line
        };
      }
      var openingLine = sourceCode.lines[opening.line - 1];
      var openingStartOfLine = {
        column: /^\s*/.exec(openingLine)[0].length,
        line: opening.line
      };
      return {
        tag: tag,
        opening: opening,
        closing: closing,
        lastProp: lastProp,
        selfClosing: node.selfClosing,
        openingStartOfLine: openingStartOfLine
      };
    }

    /**
     * Get an unique ID for a given JSXOpeningElement
     *
     * @param {ASTNode} node The AST node being checked.
     * @returns {String} Unique ID (based on its range)
     */
    function getOpeningElementId(node) {
      return node.range.join(':');
    }

    var lastAttributeNode = {};

    return {
      JSXAttribute: function(node) {
        lastAttributeNode[getOpeningElementId(node.parent)] = node;
      },

      JSXSpreadAttribute: function(node) {
        lastAttributeNode[getOpeningElementId(node.parent)] = node;
      },

      'JSXOpeningElement:exit': function(node) {
        var attributeNode = lastAttributeNode[getOpeningElementId(node)];
        var cachedLastAttributeEndPos = attributeNode ? attributeNode.end : null;
        var expectedNextLine;
        var tokens = getTokensLocations(node);
        var expectedLocation = getExpectedLocation(tokens);

        if (hasCorrectLocation(tokens, expectedLocation)) {
          return;
        }

        var data = {location: MESSAGE_LOCATION[expectedLocation], details: ''};
        var correctColumn = getCorrectColumn(tokens, expectedLocation);

        if (correctColumn !== null) {
          expectedNextLine = tokens.lastProp &&
            (tokens.lastProp.lastLine === tokens.closing.line);
          data.details = ' (expected column ' + (correctColumn + 1) +
            (expectedNextLine ? ' on the next line)' : ')');
        }

        context.report({
          node: node,
          loc: tokens.closing,
          message: MESSAGE,
          data: data,
          fix: function(fixer) {
            var closingTag = tokens.selfClosing ? '/>' : '>';
            switch (expectedLocation) {
              case 'after-tag':
                if (cachedLastAttributeEndPos) {
                  return fixer.replaceTextRange([cachedLastAttributeEndPos, node.end],
                    (expectedNextLine ? '\n' : '') + closingTag);
                }
                return fixer.replaceTextRange([node.name.range[1], node.end],
                  (expectedNextLine ? '\n' : ' ') + closingTag);
              case 'after-props':
                return fixer.replaceTextRange([cachedLastAttributeEndPos, node.end],
                  (expectedNextLine ? '\n' : '') + closingTag);
              case 'props-aligned':
              case 'tag-aligned':
              case 'line-aligned':
                return fixer.replaceTextRange([cachedLastAttributeEndPos, node.end],
                  '\n' + getIndentation(tokens, expectedLocation, correctColumn) + closingTag);
              default:
                return true;
            }
          }
        });
      }
    };

  }
};
