/**
 * @fileoverview Enforce ES5 or ES6 class for returning value in render function.
 * @author Mark Orel
 */
'use strict';

var has = require('has');
var Components = require('../util/Components');

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Enforce ES5 or ES6 class for returning value in render function',
      category: 'Possible Errors',
      recommended: true
    },
    schema: [{}]
  },

  create: Components.detect(function(context, components, utils) {

    /**
     * Mark a return statement as present
     * @param {ASTNode} node The AST node being checked.
     */
    function markReturnStatementPresent(node) {
      components.set(node, {
        hasReturnStatement: true
      });
    }

    /**
     * Get properties for a given AST node
     * @param {ASTNode} node The AST node being checked.
     * @returns {Array} Properties array.
     */
    function getComponentProperties(node) {
      switch (node.type) {
        case 'ClassDeclaration':
          return node.body.body;
        case 'ObjectExpression':
          return node.properties;
        default:
          return [];
      }
    }

    /**
     * Get properties name
     * @param {Object} node - Property.
     * @returns {String} Property name.
     */
    function getPropertyName(node) {
      // Special case for class properties
      // (babel-eslint does not expose property name so we have to rely on tokens)
      if (node.type === 'ClassProperty') {
        var tokens = context.getFirstTokens(node, 2);
        return tokens[1] && tokens[1].type === 'Identifier' ? tokens[1].value : tokens[0].value;
      } else if (['MethodDefinition', 'Property'].indexOf(node.type) !== -1) {
        return node.key.name;
      }
      return '';
    }

    /**
     * Check if a given AST node has a render method
     * @param {ASTNode} node The AST node being checked.
     * @returns {Boolean} True if there is a render method, false if not
     */
    function hasRenderMethod(node) {
      var properties = getComponentProperties(node);
      for (var i = 0, j = properties.length; i < j; i++) {
        if (getPropertyName(properties[i]) !== 'render' || !properties[i].value) {
          continue;
        }
        return /FunctionExpression$/.test(properties[i].value.type);
      }
      return false;
    }

    return {
      ReturnStatement: function(node) {
        var ancestors = context.getAncestors(node).reverse();
        var depth = 0;
        for (var i = 0, j = ancestors.length; i < j; i++) {
          if (/Function(Expression|Declaration)$/.test(ancestors[i].type)) {
            depth++;
          }
          if (
            !/(MethodDefinition|(Class)?Property)$/.test(ancestors[i].type) ||
            getPropertyName(ancestors[i]) !== 'render' ||
            depth > 1
          ) {
            continue;
          }
          markReturnStatementPresent(node);
        }
      },

      ArrowFunctionExpression: function(node) {
        if (node.expression === false || getPropertyName(node.parent) !== 'render') {
          return;
        }
        markReturnStatementPresent(node);
      },

      'Program:exit': function() {
        var list = components.list();
        for (var component in list) {
          if (
            !has(list, component) ||
            !hasRenderMethod(list[component].node) ||
            list[component].hasReturnStatement ||
            (!utils.isES5Component(list[component].node) && !utils.isES6Component(list[component].node))
          ) {
            continue;
          }
          context.report({
            node: list[component].node,
            message: 'Your render method should have return statement'
          });
        }
      }
    };
  })
};
