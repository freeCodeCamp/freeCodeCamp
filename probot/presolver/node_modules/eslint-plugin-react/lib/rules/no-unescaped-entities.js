/**
 * @fileoverview HTML special characters should be escaped.
 * @author Patrick Hayes
 */
'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

// NOTE: '<' and '{' are also problematic characters, but they do not need
// to be included here because it is a syntax error when these characters are
// included accidentally.
var DEFAULTS = ['>', '"', '\'', '}'];

module.exports = {
  meta: {
    docs: {
      description: 'Detect unescaped HTML entities, which might represent malformed tags',
      category: 'Possible Errors',
      recommended: false
    },
    schema: [{
      type: 'object',
      properties: {
        forbid: {
          type: 'array',
          items: {
            type: 'string'
          }
        }
      },
      additionalProperties: false
    }]
  },

  create: function(context) {
    function isInvalidEntity(node) {
      var configuration = context.options[0] || {};
      var entities = configuration.forbid || DEFAULTS;

      // HTML entites are already escaped in node.value (as well as node.raw),
      // so pull the raw text from context.getSourceCode()
      for (var i = node.loc.start.line; i <= node.loc.end.line; i++) {
        var rawLine = context.getSourceCode().lines[i - 1];
        var start = 0;
        var end = rawLine.length;
        if (i === node.loc.start.line) {
          start = node.loc.start.column;
        }
        if (i === node.loc.end.line) {
          end = node.loc.end.column;
        }
        rawLine = rawLine.substring(start, end);
        for (var j = 0; j < entities.length; j++) {
          for (var index = 0; index < rawLine.length; index++) {
            var c = rawLine[index];
            if (c === entities[j]) {
              context.report({
                loc: {line: i, column: start + index},
                message: 'HTML entities must be escaped.',
                node: node
              });
            }
          }
        }
      }
    }

    return {
      Literal: function(node) {
        if (node.type === 'Literal' && node.parent.type === 'JSXElement') {
          if (isInvalidEntity(node)) {
            context.report(node, 'HTML entities must be escaped.');
          }
        }
      }
    };
  }
};
