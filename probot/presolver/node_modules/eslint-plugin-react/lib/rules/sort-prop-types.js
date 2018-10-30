/**
 * @fileoverview Enforce propTypes declarations alphabetical sorting
 */
'use strict';

var find = require('array.prototype.find');

var variableUtil = require('../util/variable');

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Enforce propTypes declarations alphabetical sorting',
      category: 'Stylistic Issues',
      recommended: false
    },

    schema: [{
      type: 'object',
      properties: {
        requiredFirst: {
          type: 'boolean'
        },
        callbacksLast: {
          type: 'boolean'
        },
        ignoreCase: {
          type: 'boolean'
        }
      },
      additionalProperties: false
    }]
  },

  create: function(context) {

    var sourceCode = context.getSourceCode();
    var configuration = context.options[0] || {};
    var requiredFirst = configuration.requiredFirst || false;
    var callbacksLast = configuration.callbacksLast || false;
    var ignoreCase = configuration.ignoreCase || false;

    /**
     * Checks if node is `propTypes` declaration
     * @param {ASTNode} node The AST node being checked.
     * @returns {Boolean} True if node is `propTypes` declaration, false if not.
     */
    function isPropTypesDeclaration(node) {

      // Special case for class properties
      // (babel-eslint does not expose property name so we have to rely on tokens)
      if (node.type === 'ClassProperty') {
        var tokens = context.getFirstTokens(node, 2);
        return (tokens[0] && tokens[0].value === 'propTypes') ||
               (tokens[1] && tokens[1].value === 'propTypes');
      }

      return Boolean(
        node &&
        node.name === 'propTypes'
      );
    }

    function getKey(node) {
      return sourceCode.getText(node.key || node.argument);
    }

    function getValueName(node) {
      return node.type === 'Property' && node.value.property && node.value.property.name;
    }

    function isCallbackPropName(propName) {
      return /^on[A-Z]/.test(propName);
    }

    function isRequiredProp(node) {
      return getValueName(node) === 'isRequired';
    }

    /**
     * Checks if propTypes declarations are sorted
     * @param {Array} declarations The array of AST nodes being checked.
     * @returns {void}
     */
    function checkSorted(declarations) {
      declarations.reduce(function(prev, curr, idx, decls) {
        if (/SpreadProperty$/.test(curr.type)) {
          return decls[idx + 1];
        }

        var prevPropName = getKey(prev);
        var currentPropName = getKey(curr);
        var previousIsRequired = isRequiredProp(prev);
        var currentIsRequired = isRequiredProp(curr);
        var previousIsCallback = isCallbackPropName(prevPropName);
        var currentIsCallback = isCallbackPropName(currentPropName);

        if (ignoreCase) {
          prevPropName = prevPropName.toLowerCase();
          currentPropName = currentPropName.toLowerCase();
        }

        if (requiredFirst) {
          if (previousIsRequired && !currentIsRequired) {
            // Transition between required and non-required. Don't compare for alphabetical.
            return curr;
          }
          if (!previousIsRequired && currentIsRequired) {
            // Encountered a non-required prop after a required prop
            context.report({
              node: curr,
              message: 'Required prop types must be listed before all other prop types'
            });
            return curr;
          }
        }

        if (callbacksLast) {
          if (!previousIsCallback && currentIsCallback) {
            // Entering the callback prop section
            return curr;
          }
          if (previousIsCallback && !currentIsCallback) {
            // Encountered a non-callback prop after a callback prop
            context.report({
              node: prev,
              message: 'Callback prop types must be listed after all other prop types'
            });
            return prev;
          }
        }

        if (currentPropName < prevPropName) {
          context.report({
            node: curr,
            message: 'Prop types declarations should be sorted alphabetically'
          });
          return prev;
        }

        return curr;
      }, declarations[0]);
    }

    return {
      ClassProperty: function(node) {
        if (isPropTypesDeclaration(node) && node.value && node.value.type === 'ObjectExpression') {
          checkSorted(node.value.properties);
        }
      },

      MemberExpression: function(node) {
        if (!isPropTypesDeclaration(node.property)) {
          return;
        }
        var right = node.parent.right;
        var declarations;
        switch (right && right.type) {
          case 'ObjectExpression':
            declarations = right.properties;
            break;
          case 'Identifier':
            var variable = find(variableUtil.variablesInScope(context), function (item) {
              return item.name === right.name;
            });
            if (
              !variable || !variable.defs[0] ||
              !variable.defs[0].node.init || !variable.defs[0].node.init.properties
            ) {
              break;
            }
            declarations = variable.defs[0].node.init.properties;
            break;
          default:
            break;
        }
        if (declarations) {
          checkSorted(declarations);
        }
      },

      ObjectExpression: function(node) {
        node.properties.forEach(function(property) {
          if (!property.key) {
            return;
          }

          if (!isPropTypesDeclaration(property.key)) {
            return;
          }
          if (property.value.type === 'ObjectExpression') {
            checkSorted(property.value.properties);
          }
        });
      }

    };
  }
};
