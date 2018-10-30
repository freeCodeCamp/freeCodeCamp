/**
 * @fileoverview Prevent string definitions for references and prevent referencing this.refs
 * @author Tom Hastjarjanto
 */
'use strict';

var Components = require('../util/Components');

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Prevent string definitions for references and prevent referencing this.refs',
      category: 'Best Practices',
      recommended: false
    },
    schema: []
  },

  create: Components.detect(function(context, components, utils) {
    /**
     * Checks if we are using refs
     * @param {ASTNode} node The AST node being checked.
     * @returns {Boolean} True if we are using refs, false if not.
     */
    function isRefsUsage(node) {
      return Boolean(
        (
          utils.getParentES6Component() ||
          utils.getParentES5Component()
        ) &&
        node.object.type === 'ThisExpression' &&
        node.property.name === 'refs'
      );
    }

    /**
     * Checks if we are using a ref attribute
     * @param {ASTNode} node The AST node being checked.
     * @returns {Boolean} True if we are using a ref attribute, false if not.
     */
    function isRefAttribute(node) {
      return Boolean(
        node.type === 'JSXAttribute' &&
        node.name &&
        node.name.name === 'ref'
      );
    }

    /**
     * Checks if a node contains a string value
     * @param {ASTNode} node The AST node being checked.
     * @returns {Boolean} True if the node contains a string value, false if not.
     */
    function containsStringLiteral(node) {
      return Boolean(
        node.value &&
        node.value.type === 'Literal' &&
        typeof node.value.value === 'string'
      );
    }

    /**
     * Checks if a node contains a string value within a jsx expression
     * @param {ASTNode} node The AST node being checked.
     * @returns {Boolean} True if the node contains a string value within a jsx expression, false if not.
     */
    function containsStringExpressionContainer(node) {
      return Boolean(
        node.value &&
        node.value.type === 'JSXExpressionContainer' &&
        node.value.expression &&
        node.value.expression.type === 'Literal' &&
        typeof node.value.expression.value === 'string'
      );
    }

    return {
      MemberExpression: function(node) {
        if (isRefsUsage(node)) {
          context.report({
            node: node,
            message: 'Using this.refs is deprecated.'
          });
        }
      },
      JSXAttribute: function(node) {
        if (
          isRefAttribute(node) &&
          (containsStringLiteral(node) || containsStringExpressionContainer(node))
        ) {
          context.report({
            node: node,
            message: 'Using string literals in ref attributes is deprecated.'
          });
        }
      }
    };
  })
};
