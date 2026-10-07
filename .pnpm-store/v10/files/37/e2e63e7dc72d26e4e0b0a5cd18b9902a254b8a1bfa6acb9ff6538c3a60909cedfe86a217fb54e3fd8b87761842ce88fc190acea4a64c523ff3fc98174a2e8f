/**
 * @fileoverview Enforce React components to have a shouldComponentUpdate method
 * @author Evgueni Naverniouk
 */

'use strict';

const values = require('object.values');

const Components = require('../util/Components');
const componentUtil = require('../util/componentUtil');
const docsUrl = require('../util/docsUrl');
const report = require('../util/report');
const getScope = require('../util/eslint').getScope;

const messages = {
  noShouldComponentUpdate: 'Component is not optimized. Please add a shouldComponentUpdate method.',
};

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    docs: {
      description: 'Enforce React components to have a shouldComponentUpdate method',
      category: 'Best Practices',
      recommended: false,
      url: docsUrl('require-optimization'),
    },

    messages,

    schema: [{
      type: 'object',
      properties: {
        allowDecorators: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
      },
      additionalProperties: false,
    }],
  },

  create: Components.detect((context, components) => {
    const configuration = context.options[0] || {};
    const allowDecorators = configuration.allowDecorators || [];

    /**
     * Checks to see if our component is decorated by PureRenderMixin via reactMixin
     * @param {ASTNode} node The AST node being checked.
     * @returns {boolean} True if node is decorated with a PureRenderMixin, false if not.
     */
    function hasPureRenderDecorator(node) {
      if (node.decorators && node.decorators.length) {
        for (let i = 0, l = node.decorators.length; i < l; i++) {
          if (
            node.decorators[i].expression
            && node.decorators[i].expression.callee
            && node.decorators[i].expression.callee.object
            && node.decorators[i].expression.callee.object.name === 'reactMixin'
            && node.decorators[i].expression.callee.property
            && node.decorators[i].expression.callee.property.name === 'decorate'
            && node.decorators[i].expression.arguments
            && node.decorators[i].expression.arguments.length
            && node.decorators[i].expression.arguments[0].name === 'PureRenderMixin'
          ) {
            return true;
          }
        }
      }

      return false;
    }

    /**
     * Checks to see if our component is custom decorated
     * @param {ASTNode} node The AST node being checked.
     * @returns {boolean} True if node is decorated name with a custom decorated, false if not.
     */
    function hasCustomDecorator(node) {
      const allowLength = allowDecorators.length;

      if (allowLength && node.decorators && node.decorators.length) {
        for (let i = 0; i < allowLength; i++) {
          for (let j = 0, l = node.decorators.length; j < l; j++) {
            const expression = node.decorators[j].expression;
            if (
              expression
              && expression.name === allowDecorators[i]
            ) {
              return true;
            }
          }
        }
      }

      return false;
    }

    /**
     * Checks if we are declaring a shouldComponentUpdate method
     * @param {ASTNode} node The AST node being checked.
     * @returns {boolean} True if we are declaring a shouldComponentUpdate method, false if not.
     */
    function isSCUDeclared(node) {
      return !!node && node.name === 'shouldComponentUpdate';
    }

    /**
     * Checks if we are declaring a PureRenderMixin mixin
     * @param {ASTNode} node The AST node being checked.
     * @returns {boolean} True if we are declaring a PureRenderMixin method, false if not.
     */
    function isPureRenderDeclared(node) {
      let hasPR = false;
      if (node.value && node.value.elements) {
        for (let i = 0, l = node.value.elements.length; i < l; i++) {
          if (node.value.elements[i] && node.value.elements[i].name === 'PureRenderMixin') {
            hasPR = true;
            break;
          }
        }
      }

      return (
        !!node
        && node.key.name === 'mixins'
        && hasPR
      );
    }

    /**
     * Mark shouldComponentUpdate as declared
     * @param {ASTNode} node The AST node being checked.
     */
    function markSCUAsDeclared(node) {
      components.set(node, {
        hasSCU: true,
      });
    }

    /**
     * Reports missing optimization for a given component
     * @param {Object} component The component to process
     */
    function reportMissingOptimization(component) {
      report(context, messages.noShouldComponentUpdate, 'noShouldComponentUpdate', {
        node: component.node,
      });
    }

    /**
     * Checks if we are declaring function in class
     * @param {ASTNode} node
     * @returns {boolean} True if we are declaring function in class, false if not.
     */
    function isFunctionInClass(node) {
      let blockNode;
      let scope = getScope(context, node);
      while (scope) {
        blockNode = scope.block;
        if (blockNode && blockNode.type === 'ClassDeclaration') {
          return true;
        }
        scope = scope.upper;
      }

      return false;
    }

    return {
      ArrowFunctionExpression(node) {
        // Skip if the function is declared in the class
        if (isFunctionInClass(node)) {
          return;
        }
        // Stateless Functional Components cannot be optimized (yet)
        markSCUAsDeclared(node);
      },

      ClassDeclaration(node) {
        if (!(
          hasPureRenderDecorator(node)
          || hasCustomDecorator(node)
          || componentUtil.isPureComponent(node, context)
        )) {
          return;
        }
        markSCUAsDeclared(node);
      },

      FunctionDeclaration(node) {
        // Skip if the function is declared in the class
        if (isFunctionInClass(node)) {
          return;
        }
        // Stateless Functional Components cannot be optimized (yet)
        markSCUAsDeclared(node);
      },

      FunctionExpression(node) {
        // Skip if the function is declared in the class
        if (isFunctionInClass(node)) {
          return;
        }
        // Stateless Functional Components cannot be optimized (yet)
        markSCUAsDeclared(node);
      },

      MethodDefinition(node) {
        if (!isSCUDeclared(node.key)) {
          return;
        }
        markSCUAsDeclared(node);
      },

      ObjectExpression(node) {
        // Search for the shouldComponentUpdate declaration
        const found = node.properties.some((property) => (
          property.key
          && (isSCUDeclared(property.key) || isPureRenderDeclared(property))
        ));
        if (found) {
          markSCUAsDeclared(node);
        }
      },

      'Program:exit'() {
        // Report missing shouldComponentUpdate for all components
        values(components.list())
          .filter((component) => !component.hasSCU)
          .forEach((component) => {
            reportMissingOptimization(component);
          });
      },
    };
  }),
};
