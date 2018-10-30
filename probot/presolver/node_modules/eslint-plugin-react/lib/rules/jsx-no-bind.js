/**
 * @fileoverview Prevents usage of Function.prototype.bind and arrow functions
 *               in React component definition.
 * @author Daniel Lo Nigro <dan.cx>
 */
'use strict';

var Components = require('../util/Components');
var propName = require('jsx-ast-utils/propName');

// -----------------------------------------------------------------------------
// Rule Definition
// -----------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Prevents usage of Function.prototype.bind and arrow functions in React component definition',
      category: 'Best Practices',
      recommended: false
    },

    schema: [{
      type: 'object',
      properties: {
        allowArrowFunctions: {
          default: false,
          type: 'boolean'
        },
        allowBind: {
          default: false,
          type: 'boolean'
        },
        ignoreRefs: {
          default: false,
          type: 'boolean'
        }
      },
      additionalProperties: false
    }]
  },

  create: Components.detect(function(context, components, utils) {
    var configuration = context.options[0] || {};

    return {
      CallExpression: function(node) {
        var callee = node.callee;
        if (
          !configuration.allowBind &&
          (callee.type !== 'MemberExpression' || callee.property.name !== 'bind')
        ) {
          return;
        }
        var ancestors = context.getAncestors(callee).reverse();
        for (var i = 0, j = ancestors.length; i < j; i++) {
          if (
            !configuration.allowBind &&
            (ancestors[i].type === 'MethodDefinition' && ancestors[i].key.name === 'render') ||
            (ancestors[i].type === 'Property' && ancestors[i].key.name === 'render')
          ) {
            if (utils.isReturningJSX(ancestors[i])) {
              context.report({
                node: callee,
                message: 'JSX props should not use .bind()'
              });
            }
            break;
          }
        }
      },

      JSXAttribute: function(node) {
        var isRef = configuration.ignoreRefs && propName(node) === 'ref';
        if (isRef || !node.value || !node.value.expression) {
          return;
        }
        var valueNode = node.value.expression;
        if (
          !configuration.allowBind &&
          valueNode.type === 'CallExpression' &&
          valueNode.callee.type === 'MemberExpression' &&
          valueNode.callee.property.name === 'bind'
        ) {
          context.report({
            node: node,
            message: 'JSX props should not use .bind()'
          });
        } else if (
          !configuration.allowArrowFunctions &&
          valueNode.type === 'ArrowFunctionExpression'
        ) {
          context.report({
            node: node,
            message: 'JSX props should not use arrow functions'
          });
        } else if (
          !configuration.allowBind &&
          valueNode.type === 'BindExpression'
        ) {
          context.report({
            node: node,
            message: 'JSX props should not use ::'
          });
        }
      }
    };
  })
};
