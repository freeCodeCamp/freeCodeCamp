/**
 * @fileoverview Prevent extra closing tags for components without children
 * @author Yannick Croissant
 */

'use strict';

const docsUrl = require('../util/docsUrl');
const jsxUtil = require('../util/jsx');
const report = require('../util/report');

const optionDefaults = { component: true, html: true };

function isComponent(node) {
  return (
    node.name
    && (node.name.type === 'JSXIdentifier' || node.name.type === 'JSXMemberExpression')
    && !jsxUtil.isDOMComponent(node)
  );
}

function childrenIsEmpty(node) {
  return node.parent.children.length === 0;
}

function childrenIsMultilineSpaces(node) {
  const childrens = node.parent.children;

  return (
    childrens.length === 1
    && (childrens[0].type === 'Literal' || childrens[0].type === 'JSXText')
    && childrens[0].value.indexOf('\n') !== -1
    && childrens[0].value.replace(/(?!\xA0)\s/g, '') === ''
  );
}

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

const messages = {
  notSelfClosing: 'Empty components are self-closing',
};

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    docs: {
      description: 'Disallow extra closing tags for components without children',
      category: 'Stylistic Issues',
      recommended: false,
      url: docsUrl('self-closing-comp'),
    },
    fixable: 'code',

    messages,

    schema: [{
      type: 'object',
      properties: {
        component: {
          default: optionDefaults.component,
          type: 'boolean',
        },
        html: {
          default: optionDefaults.html,
          type: 'boolean',
        },
      },
      additionalProperties: false,
    }],
  },

  create(context) {
    function isShouldBeSelfClosed(node) {
      const configuration = Object.assign({}, optionDefaults, context.options[0]);
      return (
        (configuration.component && isComponent(node))
        || (configuration.html && jsxUtil.isDOMComponent(node))
      ) && !node.selfClosing && (childrenIsEmpty(node) || childrenIsMultilineSpaces(node));
    }

    return {
      JSXOpeningElement(node) {
        if (!isShouldBeSelfClosed(node)) {
          return;
        }
        report(context, messages.notSelfClosing, 'notSelfClosing', {
          node,
          fix(fixer) {
            // Represents the last character of the JSXOpeningElement, the '>' character
            const openingElementEnding = node.range[1] - 1;
            // Represents the last character of the JSXClosingElement, the '>' character
            const closingElementEnding = node.parent.closingElement.range[1];

            // Replace />.*<\/.*>/ with '/>'
            const range = [openingElementEnding, closingElementEnding];
            return fixer.replaceTextRange(range, ' />');
          },
        });
      },
    };
  },
};
