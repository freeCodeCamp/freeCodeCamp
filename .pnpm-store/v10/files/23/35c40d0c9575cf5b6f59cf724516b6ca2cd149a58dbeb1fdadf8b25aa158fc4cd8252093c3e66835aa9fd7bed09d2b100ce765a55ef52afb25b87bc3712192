/**
 * @fileoverview Require or prevent a new line after jsx elements and expressions.
 * @author Johnny Zabala
 * @author Joseph Stiles
 */

'use strict';

const docsUrl = require('../util/docsUrl');
const getText = require('../util/eslint').getText;
const report = require('../util/report');

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

const messages = {
  require: 'JSX element should start in a new line',
  prevent: 'JSX element should not start in a new line',
  allowMultilines: 'Multiline JSX elements should start in a new line',
};

function isMultilined(node) {
  return node && node.loc.start.line !== node.loc.end.line;
}

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    docs: {
      description: 'Require or prevent a new line after jsx elements and expressions.',
      category: 'Stylistic Issues',
      recommended: false,
      url: docsUrl('jsx-newline'),
    },
    fixable: 'code',

    messages,
    schema: [
      {
        type: 'object',
        properties: {
          prevent: {
            default: false,
            type: 'boolean',
          },
          allowMultilines: {
            default: false,
            type: 'boolean',
          },
        },
        additionalProperties: false,
        if: {
          properties: {
            allowMultilines: {
              const: true,
            },
          },
        },
        then: {
          properties: {
            prevent: {
              const: true,
            },
          },
          required: [
            'prevent',
          ],
        },
      },
    ],
  },
  create(context) {
    const jsxElementParents = new Set();

    function isBlockCommentInCurlyBraces(element) {
      const elementRawValue = getText(context, element);
      return /^\s*{\/\*/.test(elementRawValue);
    }

    function isNonBlockComment(element) {
      return !isBlockCommentInCurlyBraces(element) && (element.type === 'JSXElement' || element.type === 'JSXExpressionContainer');
    }

    return {
      'Program:exit'() {
        jsxElementParents.forEach((parent) => {
          parent.children.forEach((element, index, elements) => {
            if (element.type === 'JSXElement' || element.type === 'JSXExpressionContainer') {
              const configuration = context.options[0] || {};
              const prevent = configuration.prevent || false;
              const allowMultilines = configuration.allowMultilines || false;

              const firstAdjacentSibling = elements[index + 1];
              const secondAdjacentSibling = elements[index + 2];

              const hasSibling = firstAdjacentSibling
              && secondAdjacentSibling
              && (firstAdjacentSibling.type === 'Literal' || firstAdjacentSibling.type === 'JSXText');

              if (!hasSibling) return;

              // Check adjacent sibling has the proper amount of newlines
              const isWithoutNewLine = !/\n\s*\n/.test(firstAdjacentSibling.value);

              if (isBlockCommentInCurlyBraces(element)) return;
              if (
                allowMultilines
                && (
                  isMultilined(element)
                  || isMultilined(elements.slice(index + 2).find(isNonBlockComment))
                )
              ) {
                if (!isWithoutNewLine) return;

                const regex = /(\n)(?!.*\1)/g;
                const replacement = '\n\n';
                const messageId = 'allowMultilines';

                report(context, messages[messageId], messageId, {
                  node: secondAdjacentSibling,
                  fix(fixer) {
                    return fixer.replaceText(
                      firstAdjacentSibling,
                      getText(context, firstAdjacentSibling).replace(regex, replacement)
                    );
                  },
                });

                return;
              }

              if (isWithoutNewLine === prevent) return;

              const messageId = prevent
                ? 'prevent'
                : 'require';

              const regex = prevent
                ? /(\n\n)(?!.*\1)/g
                : /(\n)(?!.*\1)/g;

              const replacement = prevent
                ? '\n'
                : '\n\n';

              report(context, messages[messageId], messageId, {
                node: secondAdjacentSibling,
                fix(fixer) {
                  return fixer.replaceText(
                    firstAdjacentSibling,
                    // double or remove the last newline
                    getText(context, firstAdjacentSibling).replace(regex, replacement)
                  );
                },
              });
            }
          });
        });
      },
      ':matches(JSXElement, JSXFragment) > :matches(JSXElement, JSXExpressionContainer)': (node) => {
        jsxElementParents.add(node.parent);
      },
    };
  },
};
