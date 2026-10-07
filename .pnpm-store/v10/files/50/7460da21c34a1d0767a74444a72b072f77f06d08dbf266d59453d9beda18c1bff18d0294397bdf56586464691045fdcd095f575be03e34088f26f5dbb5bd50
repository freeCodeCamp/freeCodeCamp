/**
 * @fileoverview Prevent adjacent inline elements not separated by whitespace.
 * @author Sean Hayes
 */

'use strict';

const docsUrl = require('../util/docsUrl');
const isCreateElement = require('../util/isCreateElement');
const report = require('../util/report');
const astUtil = require('../util/ast');

// ------------------------------------------------------------------------------
// Helpers
// ------------------------------------------------------------------------------

// https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements
const inlineNames = [
  'a',
  'b',
  'big',
  'i',
  'small',
  'tt',
  'abbr',
  'acronym',
  'cite',
  'code',
  'dfn',
  'em',
  'kbd',
  'strong',
  'samp',
  'time',
  'var',
  'bdo',
  'br',
  'img',
  'map',
  'object',
  'q',
  'script',
  'span',
  'sub',
  'sup',
  'button',
  'input',
  'label',
  'select',
  'textarea',
];
// Note: raw &nbsp; will be transformed into \u00a0.
const whitespaceRegex = /(?:^\s|\s$)/;

function isInline(node) {
  if (node.type === 'Literal') {
    // Regular whitespace will be removed.
    const value = node.value;
    // To properly separate inline elements, each end of the literal will need
    // whitespace.
    return !whitespaceRegex.test(value);
  }
  if (node.type === 'JSXElement' && inlineNames.indexOf(node.openingElement.name.name) > -1) {
    return true;
  }
  if (astUtil.isCallExpression(node) && inlineNames.indexOf(node.arguments[0].value) > -1) {
    return true;
  }
  return false;
}

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

const messages = {
  inlineElement: 'Child elements which render as inline HTML elements should be separated by a space or wrapped in block level elements.',
};

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    docs: {
      description: 'Disallow adjacent inline elements not separated by whitespace.',
      category: 'Best Practices',
      recommended: false,
      url: docsUrl('no-adjacent-inline-elements'),
    },
    schema: [],

    messages,
  },
  create(context) {
    function validate(node, children) {
      let currentIsInline = false;
      let previousIsInline = false;
      if (!children) {
        return;
      }
      for (let i = 0; i < children.length; i++) {
        currentIsInline = isInline(children[i]);
        if (previousIsInline && currentIsInline) {
          report(context, messages.inlineElement, 'inlineElement', {
            node,
          });
          return;
        }
        previousIsInline = currentIsInline;
      }
    }
    return {
      JSXElement(node) {
        validate(node, node.children);
      },
      CallExpression(node) {
        if (!isCreateElement(context, node)) {
          return;
        }
        if (node.arguments.length < 2 || !node.arguments[2]) {
          return;
        }
        const children = 'elements' in node.arguments[2] ? node.arguments[2].elements : undefined;
        validate(node, children);
      },
    };
  },
};
