/**
 * @fileoverview Prevent usage of this.state within setState
 * @author Rolf Erik Lekang, Jørgen Aaberg
 */

'use strict';

const docsUrl = require('../util/docsUrl');
const astUtil = require('../util/ast');
const componentUtil = require('../util/componentUtil');
const report = require('../util/report');
const getScope = require('../util/eslint').getScope;

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

const messages = {
  useCallback: 'Use callback in setState when referencing the previous state.',
};

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    docs: {
      description: 'Disallow when this.state is accessed within setState',
      category: 'Possible Errors',
      recommended: false,
      url: docsUrl('no-access-state-in-setstate'),
    },

    messages,
  },

  create(context) {
    function isSetStateCall(node) {
      return astUtil.isCallExpression(node)
        && node.callee.property
        && node.callee.property.name === 'setState'
        && node.callee.object.type === 'ThisExpression';
    }

    function isFirstArgumentInSetStateCall(current, node) {
      if (!isSetStateCall(current)) {
        return false;
      }
      while (node && node.parent !== current) {
        node = node.parent;
      }
      return current.arguments[0] === node;
    }

    /**
     * @param {ASTNode} node
     * @returns {boolean}
     */
    function isClassComponent(node) {
      return !!(
        componentUtil.getParentES6Component(context, node)
        || componentUtil.getParentES5Component(context, node)
      );
    }

    // The methods array contains all methods or functions that are using this.state
    // or that are calling another method or function using this.state
    const methods = [];
    // The vars array contains all variables that contains this.state
    const vars = [];
    return {
      CallExpression(node) {
        if (!isClassComponent(node)) {
          return;
        }
        // Appends all the methods that are calling another
        // method containing this.state to the methods array
        methods.forEach((method) => {
          if ('name' in node.callee && node.callee.name === method.methodName) {
            let current = node.parent;
            while (current.type !== 'Program') {
              if (current.type === 'MethodDefinition') {
                methods.push({
                  methodName: 'name' in current.key ? current.key.name : undefined,
                  node: method.node,
                });
                break;
              }
              current = current.parent;
            }
          }
        });

        // Finding all CallExpressions that is inside a setState
        // to further check if they contains this.state
        let current = node.parent;
        while (current.type !== 'Program') {
          if (isFirstArgumentInSetStateCall(current, node)) {
            const methodName = 'name' in node.callee ? node.callee.name : undefined;
            methods.forEach((method) => {
              if (method.methodName === methodName) {
                report(context, messages.useCallback, 'useCallback', {
                  node: method.node,
                });
              }
            });

            break;
          }
          current = current.parent;
        }
      },

      MemberExpression(node) {
        if (
          'name' in node.property
          && node.property.name === 'state'
          && node.object.type === 'ThisExpression'
          && isClassComponent(node)
        ) {
          /** @type {import('eslint').Rule.Node} */
          let current = node;
          while (current.type !== 'Program') {
            // Reporting if this.state is directly within this.setState
            if (isFirstArgumentInSetStateCall(current, node)) {
              report(context, messages.useCallback, 'useCallback', {
                node,
              });
              break;
            }

            // Storing all functions and methods that contains this.state
            if (current.type === 'MethodDefinition') {
              methods.push({
                methodName: 'name' in current.key ? current.key.name : undefined,
                node,
              });
              break;
            } else if (
              current.type === 'FunctionExpression'
              && 'key' in current.parent
              && current.parent.key
            ) {
              methods.push({
                methodName: 'name' in current.parent.key ? current.parent.key.name : undefined,
                node,
              });
              break;
            }

            // Storing all variables containing this.state
            if (current.type === 'VariableDeclarator') {
              vars.push({
                node,
                scope: getScope(context, node),
                variableName: 'name' in current.id ? current.id.name : undefined,
              });
              break;
            }

            current = current.parent;
          }
        }
      },

      Identifier(node) {
        // Checks if the identifier is a variable within an object
        /** @type {import('eslint').Rule.Node} */
        let current = node;
        while (current.parent.type === 'BinaryExpression') {
          current = current.parent;
        }
        if (
          ('value' in current.parent && current.parent.value === current)
          || ('object' in current.parent && current.parent.object === current)
        ) {
          while (current.type !== 'Program') {
            if (isFirstArgumentInSetStateCall(current, node)) {
              vars
                .filter((v) => v.scope === getScope(context, node) && v.variableName === node.name)
                .forEach((v) => {
                  report(context, messages.useCallback, 'useCallback', {
                    node: v.node,
                  });
                });
            }
            current = current.parent;
          }
        }
      },

      ObjectPattern(node) {
        const isDerivedFromThis = 'init' in node.parent && node.parent.init && node.parent.init.type === 'ThisExpression';
        node.properties.forEach((property) => {
          if (
            property
            && 'key' in property
            && property.key
            && 'name' in property.key
            && property.key.name === 'state'
            && isDerivedFromThis
          ) {
            vars.push({
              node: property.key,
              scope: getScope(context, node),
              variableName: property.key.name,
            });
          }
        });
      },
    };
  },
};
