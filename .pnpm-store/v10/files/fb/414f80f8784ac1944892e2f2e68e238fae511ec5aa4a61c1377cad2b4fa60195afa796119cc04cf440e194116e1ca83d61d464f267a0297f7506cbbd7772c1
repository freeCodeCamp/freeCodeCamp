/**
 * @fileoverview Disallow undeclared variables in JSX
 * @author Yannick Croissant
 */

'use strict';

const docsUrl = require('../util/docsUrl');
const eslintUtil = require('../util/eslint');
const jsxUtil = require('../util/jsx');
const report = require('../util/report');

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

const messages = {
  undefined: '\'{{identifier}}\' is not defined.',
};

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    docs: {
      description: 'Disallow undeclared variables in JSX',
      category: 'Possible Errors',
      recommended: true,
      url: docsUrl('jsx-no-undef'),
    },

    messages,

    schema: [{
      type: 'object',
      properties: {
        allowGlobals: {
          type: 'boolean',
        },
      },
      additionalProperties: false,
    }],
  },

  create(context) {
    const config = context.options[0] || {};
    const allowGlobals = config.allowGlobals || false;

    /**
     * Compare an identifier with the variables declared in the scope
     * @param {ASTNode} node - Identifier or JSXIdentifier node
     * @returns {void}
     */
    function checkIdentifierInJSX(node) {
      let scope = eslintUtil.getScope(context, node);
      const sourceCode = eslintUtil.getSourceCode(context);
      const sourceType = sourceCode.ast.sourceType;
      const scopeUpperBound = !allowGlobals && sourceType === 'module' ? 'module' : 'global';
      let variables = scope.variables;
      let i;
      let len;

      // Ignore 'this' keyword (also maked as JSXIdentifier when used in JSX)
      if (node.name === 'this') {
        return;
      }

      while (scope.type !== scopeUpperBound && scope.type !== 'global') {
        scope = scope.upper;
        variables = scope.variables.concat(variables);
      }
      if (scope.childScopes.length) {
        variables = scope.childScopes[0].variables.concat(variables);
        // Temporary fix for babel-eslint
        if (scope.childScopes[0].childScopes.length) {
          variables = scope.childScopes[0].childScopes[0].variables.concat(variables);
        }
      }

      for (i = 0, len = variables.length; i < len; i++) {
        if (variables[i].name === node.name) {
          return;
        }
      }

      report(context, messages.undefined, 'undefined', {
        node,
        data: {
          identifier: node.name,
        },
      });
    }

    return {
      JSXOpeningElement(node) {
        switch (node.name.type) {
          case 'JSXIdentifier':
            if (jsxUtil.isDOMComponent(node)) {
              return;
            }
            node = node.name;
            break;
          case 'JSXMemberExpression':
            node = node.name;
            do {
              node = node.object;
            } while (node && node.type !== 'JSXIdentifier');
            break;
          case 'JSXNamespacedName':
            return;
          default:
            break;
        }
        checkIdentifierInJSX(node);
      },
    };
  },
};
