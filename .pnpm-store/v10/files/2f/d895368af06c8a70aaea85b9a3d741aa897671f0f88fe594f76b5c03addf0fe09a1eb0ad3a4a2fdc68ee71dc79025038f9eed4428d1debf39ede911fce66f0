/**
 * @fileoverview Enforce that namespaces are not used in React elements
 * @author Yacine Hmito
 */

'use strict';

const elementType = require('jsx-ast-utils/elementType');
const docsUrl = require('../util/docsUrl');
const isCreateElement = require('../util/isCreateElement');
const report = require('../util/report');

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

const messages = {
  noNamespace: 'React component {{name}} must not be in a namespace, as React does not support them',
};

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    docs: {
      description: 'Enforce that namespaces are not used in React elements',
      category: 'Possible Errors',
      recommended: false,
      url: docsUrl('no-namespace'),
    },

    messages,

    schema: [],
  },

  create(context) {
    return {
      CallExpression(node) {
        if (isCreateElement(context, node) && node.arguments.length > 0 && node.arguments[0].type === 'Literal') {
          const name = node.arguments[0].value;
          if (typeof name !== 'string' || name.indexOf(':') === -1) return undefined;
          report(context, messages.noNamespace, 'noNamespace', {
            node,
            data: {
              name,
            },
          });
        }
      },
      JSXOpeningElement(node) {
        const name = elementType(node);
        if (typeof name !== 'string' || name.indexOf(':') === -1) return undefined;
        report(context, messages.noNamespace, 'noNamespace', {
          node,
          data: {
            name,
          },
        });
      },
    };
  },
};
