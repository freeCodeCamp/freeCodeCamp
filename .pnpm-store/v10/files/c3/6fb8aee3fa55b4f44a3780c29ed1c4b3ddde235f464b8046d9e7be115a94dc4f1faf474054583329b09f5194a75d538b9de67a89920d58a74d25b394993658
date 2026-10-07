/**
 * @fileoverview Report "this" being used in stateless functional components.
 */

'use strict';

const Components = require('../util/Components');
const docsUrl = require('../util/docsUrl');
const report = require('../util/report');

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

const messages = {
  noThisInSFC: 'Stateless functional components should not use `this`',
};

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    docs: {
      description: 'Disallow `this` from being used in stateless functional components',
      category: 'Possible Errors',
      recommended: false,
      url: docsUrl('no-this-in-sfc'),
    },

    messages,

    schema: [],
  },

  create: Components.detect((context, components, utils) => ({
    MemberExpression(node) {
      if (node.object.type === 'ThisExpression') {
        const component = components.get(utils.getParentStatelessComponent(node));
        if (!component || (component.node && component.node.parent && component.node.parent.type === 'Property')) {
          return;
        }
        report(context, messages.noThisInSFC, 'noThisInSFC', {
          node,
        });
      }
    },
  })),
};
