/**
 * @fileoverview Prevent missing displayName in a React component definition
 * @author Yannick Croissant
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
      description: 'Prevent missing displayName in a React component definition',
      category: 'Best Practices',
      recommended: true
    },

    schema: [{
      type: 'object',
      properties: {
        ignoreTranspilerName: {
          type: 'boolean'
        }
      },
      additionalProperties: false
    }]
  },

  create: Components.detect(function(context, components, utils) {

    var sourceCode = context.getSourceCode();
    var config = context.options[0] || {};
    var ignoreTranspilerName = config.ignoreTranspilerName || false;

    var MISSING_MESSAGE = 'Component definition is missing display name';

    /**
     * Checks if we are declaring a display name
     * @param {ASTNode} node The AST node being checked.
     * @returns {Boolean} True if we are declaring a display name, false if not.
     */
    function isDisplayNameDeclaration(node) {
      switch (node.type) {
        // Special case for class properties
        // (babel-eslint does not expose property name so we have to rely on tokens)
        case 'ClassProperty':
          var tokens = sourceCode.getFirstTokens(node, 2);
          if (
            tokens[0].value === 'displayName' ||
            (tokens[1] && tokens[1].value === 'displayName')
          ) {
            return true;
          }
          return false;
        case 'Identifier':
          return node.name === 'displayName';
        case 'Literal':
          return node.value === 'displayName';
        default:
          return false;
      }
    }

    /**
     * Mark a prop type as declared
     * @param {ASTNode} node The AST node being checked.
     */
    function markDisplayNameAsDeclared(node) {
      components.set(node, {
        hasDisplayName: true
      });
    }

    /**
     * Reports missing display name for a given component
     * @param {Object} component The component to process
     */
    function reportMissingDisplayName(component) {
      context.report({
        node: component.node,
        message: MISSING_MESSAGE,
        data: {
          component: component.name
        }
      });
    }

    /**
     * Checks if the component have a name set by the transpiler
     * @param {ASTNode} node The AST node being checked.
     * @returns {Boolean} True if component has a name, false if not.
     */
    function hasTranspilerName(node) {
      var namedObjectAssignment = (
        node.type === 'ObjectExpression' &&
        node.parent &&
        node.parent.parent &&
        node.parent.parent.type === 'AssignmentExpression' && (
          !node.parent.parent.left.object ||
          node.parent.parent.left.object.name !== 'module' ||
          node.parent.parent.left.property.name !== 'exports'
        )
      );
      var namedObjectDeclaration = (
          node.type === 'ObjectExpression' &&
          node.parent &&
          node.parent.parent &&
          node.parent.parent.type === 'VariableDeclarator'
      );
      var namedClass = (
        (node.type === 'ClassDeclaration' || node.type === 'ClassExpression') &&
        node.id &&
        node.id.name
      );

      var namedFunctionDeclaration = (
        (node.type === 'FunctionDeclaration' || node.type === 'FunctionExpression') &&
        node.id &&
        node.id.name
      );

      var namedFunctionExpression = (
        (node.type === 'FunctionExpression' || node.type === 'ArrowFunctionExpression') &&
        node.parent &&
        (node.parent.type === 'VariableDeclarator' || node.parent.method === true) &&
        (!node.parent.parent || !utils.isES5Component(node.parent.parent))
      );

      if (
        namedObjectAssignment || namedObjectDeclaration ||
        namedClass ||
        namedFunctionDeclaration || namedFunctionExpression
      ) {
        return true;
      }
      return false;
    }

    // --------------------------------------------------------------------------
    // Public
    // --------------------------------------------------------------------------

    return {

      ClassProperty: function(node) {
        if (!isDisplayNameDeclaration(node)) {
          return;
        }
        markDisplayNameAsDeclared(node);
      },

      MemberExpression: function(node) {
        if (!isDisplayNameDeclaration(node.property)) {
          return;
        }
        var component = utils.getRelatedComponent(node);
        if (!component) {
          return;
        }
        markDisplayNameAsDeclared(component.node);
      },

      FunctionExpression: function(node) {
        if (ignoreTranspilerName || !hasTranspilerName(node)) {
          return;
        }
        markDisplayNameAsDeclared(node);
      },

      FunctionDeclaration: function(node) {
        if (ignoreTranspilerName || !hasTranspilerName(node)) {
          return;
        }
        markDisplayNameAsDeclared(node);
      },

      ArrowFunctionExpression: function(node) {
        if (ignoreTranspilerName || !hasTranspilerName(node)) {
          return;
        }
        markDisplayNameAsDeclared(node);
      },

      MethodDefinition: function(node) {
        if (!isDisplayNameDeclaration(node.key)) {
          return;
        }
        markDisplayNameAsDeclared(node);
      },

      ClassExpression: function(node) {
        if (ignoreTranspilerName || !hasTranspilerName(node)) {
          return;
        }
        markDisplayNameAsDeclared(node);
      },

      ClassDeclaration: function(node) {
        if (ignoreTranspilerName || !hasTranspilerName(node)) {
          return;
        }
        markDisplayNameAsDeclared(node);
      },

      ObjectExpression: function(node) {
        if (ignoreTranspilerName || !hasTranspilerName(node)) {
          // Search for the displayName declaration
          node.properties.forEach(function(property) {
            if (!property.key || !isDisplayNameDeclaration(property.key)) {
              return;
            }
            markDisplayNameAsDeclared(node);
          });
          return;
        }
        markDisplayNameAsDeclared(node);
      },

      'Program:exit': function() {
        var list = components.list();
        // Report missing display name for all components
        for (var component in list) {
          if (!has(list, component) || list[component].hasDisplayName) {
            continue;
          }
          reportMissingDisplayName(list[component]);
        }
      }
    };
  })
};
