/**
 * @fileoverview Forbid certain elements
 * @author Kenneth Chung
 */
'use strict';

var has = require('has');

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Forbid certain elements',
      category: 'Best Practices',
      recommended: false
    },

    schema: [{
      type: 'object',
      properties: {
        forbid: {
          type: 'array',
          items: {
            anyOf: [
              {type: 'string'},
              {
                type: 'object',
                properties: {
                  element: {type: 'string'},
                  message: {type: 'string'}
                },
                required: ['element'],
                additionalProperties: false
              }
            ]
          }
        }
      },
      additionalProperties: false
    }]
  },

  create: function(context) {
    var sourceCode = context.getSourceCode();
    var configuration = context.options[0] || {};
    var forbidConfiguration = configuration.forbid || [];

    var indexedForbidConfigs = {};

    forbidConfiguration.forEach(function(item) {
      if (typeof item === 'string') {
        indexedForbidConfigs[item] = {element: item};
      } else {
        indexedForbidConfigs[item.element] = item;
      }
    });

    function errorMessageForElement(name) {
      var message = '<' + name + '> is forbidden';
      var additionalMessage = indexedForbidConfigs[name].message;

      if (additionalMessage) {
        message = message + ', ' + additionalMessage;
      }

      return message;
    }

    function isValidCreateElement(node) {
      return node.callee
        && node.callee.type === 'MemberExpression'
        && node.callee.object.name === 'React'
        && node.callee.property.name === 'createElement'
        && node.arguments.length > 0;
    }

    function reportIfForbidden(element, node) {
      if (has(indexedForbidConfigs, element)) {
        context.report({
          node: node,
          message: errorMessageForElement(element)
        });
      }
    }

    return {
      JSXOpeningElement: function(node) {
        reportIfForbidden(sourceCode.getText(node.name), node.name);
      },

      CallExpression: function(node) {
        if (!isValidCreateElement(node)) {
          return;
        }

        var argument = node.arguments[0];
        var argType = argument.type;

        if (argType === 'Identifier' && /^[A-Z_]/.test(argument.name)) {
          reportIfForbidden(argument.name, argument);
        } else if (argType === 'Literal' && /^[a-z][^\.]*$/.test(argument.value)) {
          reportIfForbidden(argument.value, argument);
        } else if (argType === 'MemberExpression') {
          reportIfForbidden(sourceCode.getText(argument), argument);
        }
      }
    };
  }
};
