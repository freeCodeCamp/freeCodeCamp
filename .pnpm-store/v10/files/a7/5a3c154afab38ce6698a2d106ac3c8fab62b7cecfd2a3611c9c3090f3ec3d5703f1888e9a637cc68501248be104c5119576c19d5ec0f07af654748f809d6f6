'use strict';

const docsUrl = require('../util/docsUrl');
const report = require('../util/report');

// This list is taken from https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements

// Note: 'br' is not included because whitespace around br tags is inconsequential to the rendered output
const INLINE_ELEMENTS = new Set([
  'a',
  'abbr',
  'acronym',
  'b',
  'bdo',
  'big',
  'button',
  'cite',
  'code',
  'dfn',
  'em',
  'i',
  'img',
  'input',
  'kbd',
  'label',
  'map',
  'object',
  'q',
  'samp',
  'script',
  'select',
  'small',
  'span',
  'strong',
  'sub',
  'sup',
  'textarea',
  'tt',
  'var',
]);

const messages = {
  spacingAfterPrev: 'Ambiguous spacing after previous element {{element}}',
  spacingBeforeNext: 'Ambiguous spacing before next element {{element}}',
};

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    docs: {
      description: 'Enforce or disallow spaces inside of curly braces in JSX attributes and expressions',
      category: 'Stylistic Issues',
      recommended: false,
      url: docsUrl('jsx-child-element-spacing'),
    },
    fixable: null,

    messages,

    schema: [],
  },
  create(context) {
    const TEXT_FOLLOWING_ELEMENT_PATTERN = /^\s*\n\s*\S/;
    const TEXT_PRECEDING_ELEMENT_PATTERN = /\S\s*\n\s*$/;

    const elementName = (node) => (
      node.openingElement
      && node.openingElement.name
      && node.openingElement.name.type === 'JSXIdentifier'
      && node.openingElement.name.name
    );

    const isInlineElement = (node) => (
      node.type === 'JSXElement'
      && INLINE_ELEMENTS.has(elementName(node))
    );

    const handleJSX = (node) => {
      let lastChild = null;
      let child = null;
      (node.children.concat([null])).forEach((nextChild) => {
        if (
          (lastChild || nextChild)
          && (!lastChild || isInlineElement(lastChild))
          && (child && (child.type === 'Literal' || child.type === 'JSXText'))
          && (!nextChild || isInlineElement(nextChild))
          && true
        ) {
          if (lastChild && child.value.match(TEXT_FOLLOWING_ELEMENT_PATTERN)) {
            report(context, messages.spacingAfterPrev, 'spacingAfterPrev', {
              node: lastChild,
              loc: lastChild.loc.end,
              data: {
                element: elementName(lastChild),
              },
            });
          } else if (nextChild && child.value.match(TEXT_PRECEDING_ELEMENT_PATTERN)) {
            report(context, messages.spacingBeforeNext, 'spacingBeforeNext', {
              node: nextChild,
              loc: nextChild.loc.start,
              data: {
                element: elementName(nextChild),
              },
            });
          }
        }
        lastChild = child;
        child = nextChild;
      });
    };

    return {
      JSXElement: handleJSX,
      JSXFragment: handleJSX,
    };
  },
};
