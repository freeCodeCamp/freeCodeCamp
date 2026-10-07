/**
 * @fileoverview Forbid certain elements
 * @author Kenneth Chung
 */

'use strict';

const has = require('hasown');
const docsUrl = require('../util/docsUrl');
const getText = require('../util/eslint').getText;
const isCreateElement = require('../util/isCreateElement');
const report = require('../util/report');

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

const messages = {
  forbiddenElement: '<{{element}}> is forbidden',
  forbiddenElement_message: '<{{element}}> is forbidden, {{message}}',
};

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    docs: {
      description: 'Disallow certain elements',
      category: 'Best Practices',
      recommended: false,
      url: docsUrl('forbid-elements'),
    },

    messages,

    schema: [{
      type: 'object',
      properties: {
        forbid: {
          type: 'array',
          items: {
            anyOf: [
              { type: 'string' },
              {
                type: 'object',
                properties: {
                  element: { type: 'string' },
                  message: { type: 'string' },
                },
                required: ['element'],
                additionalProperties: false,
              },
            ],
          },
        },
      },
      additionalProperties: false,
    }],
  },

  create(context) {
    const configuration = context.options[0] || {};
    const forbidConfiguration = configuration.forbid || [];

    /** @type {Record<string, { element: string, message?: string }>} */
    const indexedForbidConfigs = {};

    forbidConfiguration.forEach((item) => {
      if (typeof item === 'string') {
        indexedForbidConfigs[item] = { element: item };
      } else {
        indexedForbidConfigs[item.element] = item;
      }
    });

    function reportIfForbidden(element, node) {
      if (has(indexedForbidConfigs, element)) {
        const message = indexedForbidConfigs[element].message;

        report(
          context,
          message ? messages.forbiddenElement_message : messages.forbiddenElement,
          message ? 'forbiddenElement_message' : 'forbiddenElement',
          {
            node,
            data: {
              element,
              message,
            },
          }
        );
      }
    }

    return {
      JSXOpeningElement(node) {
        reportIfForbidden(getText(context, node.name), node.name);
      },

      CallExpression(node) {
        if (!isCreateElement(context, node)) {
          return;
        }

        const argument = node.arguments[0];
        if (!argument) {
          return;
        }

        if (argument.type === 'Identifier' && /^[A-Z_]/.test(argument.name)) {
          reportIfForbidden(argument.name, argument);
        } else if (argument.type === 'Literal' && /^[a-z][^.]*$/.test(String(argument.value))) {
          reportIfForbidden(argument.value, argument);
        } else if (argument.type === 'MemberExpression') {
          reportIfForbidden(getText(context, argument), argument);
        }
      },
    };
  },
};
