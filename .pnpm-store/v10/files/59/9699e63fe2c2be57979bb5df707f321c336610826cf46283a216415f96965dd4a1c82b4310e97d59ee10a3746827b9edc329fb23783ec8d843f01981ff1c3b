/**
 * @fileoverview Enforce no duplicate props
 * @author Markus Ånöstam
 */

'use strict';

const has = require('hasown');
const docsUrl = require('../util/docsUrl');
const report = require('../util/report');

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

const messages = {
  noDuplicateProps: 'No duplicate props allowed',
};

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    docs: {
      description: 'Disallow duplicate properties in JSX',
      category: 'Possible Errors',
      recommended: true,
      url: docsUrl('jsx-no-duplicate-props'),
    },

    messages,

    schema: [{
      type: 'object',
      properties: {
        ignoreCase: {
          type: 'boolean',
        },
      },
      additionalProperties: false,
    }],
  },

  create(context) {
    const configuration = context.options[0] || {};
    const ignoreCase = configuration.ignoreCase || false;

    return {
      JSXOpeningElement(node) {
        const props = {};

        node.attributes.forEach((decl) => {
          if (decl.type === 'JSXSpreadAttribute') {
            return;
          }

          let name = decl.name.name;

          if (typeof name !== 'string') {
            return;
          }

          if (ignoreCase) {
            name = name.toLowerCase();
          }

          if (has(props, name)) {
            report(context, messages.noDuplicateProps, 'noDuplicateProps', {
              node: decl,
            });
          } else {
            props[name] = 1;
          }
        });
      },
    };
  },
};
