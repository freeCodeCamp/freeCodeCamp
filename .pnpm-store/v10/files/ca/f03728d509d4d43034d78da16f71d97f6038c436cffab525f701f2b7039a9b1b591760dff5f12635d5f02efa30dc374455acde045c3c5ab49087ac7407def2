/**
 * @fileoverview Prevent usage of findDOMNode
 * @author Yannick Croissant
 */

'use strict';

const docsUrl = require('../util/docsUrl');
const report = require('../util/report');

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

const messages = {
  noFindDOMNode: 'Do not use findDOMNode. It doesn’t work with function components and is deprecated in StrictMode. See https://reactjs.org/docs/react-dom.html#finddomnode',
};

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    docs: {
      description: 'Disallow usage of findDOMNode',
      category: 'Best Practices',
      recommended: true,
      url: docsUrl('no-find-dom-node'),
    },

    messages,

    schema: [],
  },

  create(context) {
    return {
      CallExpression(node) {
        const callee = node.callee;

        const isFindDOMNode = ('name' in callee && callee.name === 'findDOMNode') || (
          'property' in callee
          && callee.property
          && 'name' in callee.property
          && callee.property.name === 'findDOMNode'
        );

        if (!isFindDOMNode) {
          return;
        }

        report(context, messages.noFindDOMNode, 'noFindDOMNode', {
          node: callee,
        });
      },
    };
  },
};
