/**
 * @fileoverview Prevent passing of children as props
 * @author Benjamin Stepp
 */

'use strict';

const docsUrl = require('../util/docsUrl');
const isCreateElement = require('../util/isCreateElement');
const report = require('../util/report');

// ------------------------------------------------------------------------------
// Helpers
// ------------------------------------------------------------------------------

/**
 * Checks if the node is a createElement call with a props literal.
 * @param {ASTNode} node - The AST node being checked.
 * @param {Context} context - The AST node being checked.
 * @returns {boolean} - True if node is a createElement call with a props
 * object literal, False if not.
*/
function isCreateElementWithProps(node, context) {
  return isCreateElement(context, node)
    && node.arguments.length > 1
    && node.arguments[1].type === 'ObjectExpression';
}

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

const messages = {
  nestChildren: 'Do not pass children as props. Instead, nest children between the opening and closing tags.',
  passChildrenAsArgs: 'Do not pass children as props. Instead, pass them as additional arguments to React.createElement.',
  nestFunction: 'Do not nest a function between the opening and closing tags. Instead, pass it as a prop.',
  passFunctionAsArgs: 'Do not pass a function as an additional argument to React.createElement. Instead, pass it as a prop.',
};

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    docs: {
      description: 'Disallow passing of children as props',
      category: 'Best Practices',
      recommended: true,
      url: docsUrl('no-children-prop'),
    },

    messages,

    schema: [{
      type: 'object',
      properties: {
        allowFunctions: {
          type: 'boolean',
          default: false,
        },
      },
      additionalProperties: false,
    }],
  },
  create(context) {
    const configuration = context.options[0] || {};

    function isFunction(node) {
      return configuration.allowFunctions && (node.type === 'ArrowFunctionExpression' || node.type === 'FunctionExpression');
    }

    return {
      JSXAttribute(node) {
        if (node.name.name !== 'children') {
          return;
        }

        const value = node.value;
        if (value && value.type === 'JSXExpressionContainer' && isFunction(value.expression)) {
          return;
        }

        report(context, messages.nestChildren, 'nestChildren', {
          node,
        });
      },
      CallExpression(node) {
        if (!isCreateElementWithProps(node, context)) {
          return;
        }

        const props = 'properties' in node.arguments[1] ? node.arguments[1].properties : undefined;
        const childrenProp = props.find((prop) => (
          'key' in prop
          && prop.key
          && 'name' in prop.key
          && prop.key.name === 'children'
        ));

        if (childrenProp) {
          if ('value' in childrenProp && childrenProp.value && !isFunction(childrenProp.value)) {
            report(context, messages.passChildrenAsArgs, 'passChildrenAsArgs', {
              node,
            });
          }
        } else if (node.arguments.length === 3) {
          const children = node.arguments[2];
          if (isFunction(children)) {
            report(context, messages.passFunctionAsArgs, 'passFunctionAsArgs', {
              node,
            });
          }
        }
      },
      JSXElement(node) {
        const children = node.children;
        if (children && children.length === 1 && children[0].type === 'JSXExpressionContainer') {
          if (isFunction(children[0].expression)) {
            report(context, messages.nestFunction, 'nestFunction', {
              node,
            });
          }
        }
      },
    };
  },
};
