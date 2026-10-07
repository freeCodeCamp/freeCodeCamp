/**
 * @fileoverview Forbid target='_blank' attribute
 * @author Kevin Miller
 */

'use strict';

const includes = require('array-includes');
const docsUrl = require('../util/docsUrl');
const linkComponentsUtil = require('../util/linkComponents');
const report = require('../util/report');

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

function findLastIndex(arr, condition) {
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    if (condition(arr[i])) {
      return i;
    }
  }

  return -1;
}

function attributeValuePossiblyBlank(attribute) {
  if (!attribute || !attribute.value) {
    return false;
  }
  const value = attribute.value;
  if (value.type === 'Literal') {
    return typeof value.value === 'string' && value.value.toLowerCase() === '_blank';
  }
  if (value.type === 'JSXExpressionContainer') {
    const expr = value.expression;
    if (expr.type === 'Literal') {
      return typeof expr.value === 'string' && expr.value.toLowerCase() === '_blank';
    }
    if (expr.type === 'ConditionalExpression') {
      if (expr.alternate.type === 'Literal' && expr.alternate.value && expr.alternate.value.toLowerCase() === '_blank') {
        return true;
      }
      if (expr.consequent.type === 'Literal' && expr.consequent.value && expr.consequent.value.toLowerCase() === '_blank') {
        return true;
      }
    }
  }
  return false;
}

function hasExternalLink(node, linkAttributes, warnOnSpreadAttributes, spreadAttributeIndex) {
  const linkIndex = findLastIndex(node.attributes, (attr) => attr.name && includes(linkAttributes, attr.name.name));
  const foundExternalLink = linkIndex !== -1 && ((attr) => attr.value && attr.value.type === 'Literal' && /^(?:\w+:|\/\/)/.test(attr.value.value))(
    node.attributes[linkIndex]);
  return foundExternalLink || (warnOnSpreadAttributes && linkIndex < spreadAttributeIndex);
}

function hasDynamicLink(node, linkAttributes) {
  const dynamicLinkIndex = findLastIndex(node.attributes, (attr) => attr.name
    && includes(linkAttributes, attr.name.name)
    && attr.value
    && attr.value.type === 'JSXExpressionContainer');
  if (dynamicLinkIndex !== -1) {
    return true;
  }
}

/**
 * Get the string(s) from a value
 * @param {ASTNode} value The AST node being checked.
 * @param {ASTNode} targetValue The AST node being checked.
 * @returns {string | string[] | null} The string value, or null if not a string.
 */
function getStringFromValue(value, targetValue) {
  if (value) {
    if (value.type === 'Literal') {
      return value.value;
    }
    if (value.type === 'JSXExpressionContainer') {
      if (value.expression.type === 'TemplateLiteral') {
        return value.expression.quasis[0].value.cooked;
      }
      const expr = value.expression;
      if (expr && expr.type === 'ConditionalExpression') {
        const relValues = [expr.consequent.value, expr.alternate.value];
        if (targetValue.type === 'JSXExpressionContainer' && targetValue.expression && targetValue.expression.type === 'ConditionalExpression') {
          const targetTestCond = targetValue.expression.test.name;
          const relTestCond = value.expression.test.name;
          if (targetTestCond === relTestCond) {
            const targetBlankIndex = [targetValue.expression.consequent.value, targetValue.expression.alternate.value].indexOf('_blank');
            return relValues[targetBlankIndex];
          }
        }
        return relValues;
      }
      return expr.value;
    }
  }
  return null;
}

function hasSecureRel(node, allowReferrer, warnOnSpreadAttributes, spreadAttributeIndex) {
  const relIndex = findLastIndex(node.attributes, (attr) => (attr.type === 'JSXAttribute' && attr.name.name === 'rel'));
  const targetIndex = findLastIndex(node.attributes, (attr) => (attr.type === 'JSXAttribute' && attr.name.name === 'target'));
  if (relIndex === -1 || (warnOnSpreadAttributes && relIndex < spreadAttributeIndex)) {
    return false;
  }

  const relAttribute = node.attributes[relIndex];
  const targetAttributeValue = node.attributes[targetIndex] && node.attributes[targetIndex].value;
  const value = getStringFromValue(relAttribute.value, targetAttributeValue);
  return [].concat(value).every((item) => {
    const tags = typeof item === 'string' ? item.toLowerCase().split(' ') : false;
    const noreferrer = tags && tags.indexOf('noreferrer') >= 0;
    if (noreferrer) {
      return true;
    }
    const noopener = tags && tags.indexOf('noopener') >= 0;
    return allowReferrer && noopener;
  });
}

const messages = {
  noTargetBlankWithoutNoreferrer: 'Using target="_blank" without rel="noreferrer" (which implies rel="noopener") is a security risk in older browsers: see https://mathiasbynens.github.io/rel-noopener/#recommendations',
  noTargetBlankWithoutNoopener: 'Using target="_blank" without rel="noreferrer" or rel="noopener" (the former implies the latter and is preferred due to wider support) is a security risk: see https://mathiasbynens.github.io/rel-noopener/#recommendations',
};

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    fixable: 'code',
    docs: {
      description: 'Disallow `target="_blank"` attribute without `rel="noreferrer"`',
      category: 'Best Practices',
      recommended: true,
      url: docsUrl('jsx-no-target-blank'),
    },

    messages,

    schema: [{
      type: 'object',
      properties: {
        allowReferrer: {
          type: 'boolean',
        },
        enforceDynamicLinks: {
          enum: ['always', 'never'],
        },
        warnOnSpreadAttributes: {
          type: 'boolean',
        },
        links: {
          type: 'boolean',
          default: true,
        },
        forms: {
          type: 'boolean',
          default: false,
        },
      },
      additionalProperties: false,
    }],
  },

  create(context) {
    const configuration = Object.assign(
      {
        allowReferrer: false,
        warnOnSpreadAttributes: false,
        links: true,
        forms: false,
      },
      context.options[0]
    );
    const allowReferrer = configuration.allowReferrer;
    const warnOnSpreadAttributes = configuration.warnOnSpreadAttributes;
    const enforceDynamicLinks = configuration.enforceDynamicLinks || 'always';
    const linkComponents = linkComponentsUtil.getLinkComponents(context);
    const formComponents = linkComponentsUtil.getFormComponents(context);

    return {
      JSXOpeningElement(node) {
        const targetIndex = findLastIndex(node.attributes, (attr) => attr.name && attr.name.name === 'target');
        const spreadAttributeIndex = findLastIndex(node.attributes, (attr) => (attr.type === 'JSXSpreadAttribute'));

        if (linkComponents.has(node.name.name)) {
          if (!attributeValuePossiblyBlank(node.attributes[targetIndex])) {
            const hasSpread = spreadAttributeIndex >= 0;

            if (warnOnSpreadAttributes && hasSpread) {
              // continue to check below
            } else if ((hasSpread && targetIndex < spreadAttributeIndex) || !hasSpread || !warnOnSpreadAttributes) {
              return;
            }
          }

          const linkAttributes = linkComponents.get(node.name.name);
          const hasDangerousLink = hasExternalLink(node, linkAttributes, warnOnSpreadAttributes, spreadAttributeIndex)
            || (enforceDynamicLinks === 'always' && hasDynamicLink(node, linkAttributes));
          if (hasDangerousLink && !hasSecureRel(node, allowReferrer, warnOnSpreadAttributes, spreadAttributeIndex)) {
            const messageId = allowReferrer ? 'noTargetBlankWithoutNoopener' : 'noTargetBlankWithoutNoreferrer';
            const relValue = allowReferrer ? 'noopener' : 'noreferrer';
            report(context, messages[messageId], messageId, {
              node,
              fix(fixer) {
                // eslint 5 uses `node.attributes`; eslint 6+ uses `node.parent.attributes`
                const nodeWithAttrs = node.parent.attributes ? node.parent : node;
                // eslint 5 does not provide a `name` property on JSXSpreadElements
                const relAttribute = nodeWithAttrs.attributes.find((attr) => attr.name && attr.name.name === 'rel');

                if (targetIndex < spreadAttributeIndex || (spreadAttributeIndex >= 0 && !relAttribute)) {
                  return null;
                }

                if (!relAttribute) {
                  return fixer.insertTextAfter(nodeWithAttrs.attributes.slice(-1)[0], ` rel="${relValue}"`);
                }

                if (!relAttribute.value) {
                  return fixer.insertTextAfter(relAttribute, `="${relValue}"`);
                }

                if (relAttribute.value.type === 'Literal') {
                  const parts = relAttribute.value.value
                    .split('noreferrer')
                    .filter(Boolean);
                  return fixer.replaceText(relAttribute.value, `"${parts.concat('noreferrer').join(' ')}"`);
                }

                if (relAttribute.value.type === 'JSXExpressionContainer') {
                  if (relAttribute.value.expression.type === 'Literal') {
                    if (typeof relAttribute.value.expression.value === 'string') {
                      const parts = relAttribute.value.expression.value
                        .split('noreferrer')
                        .filter(Boolean);
                      return fixer.replaceText(relAttribute.value.expression, `"${parts.concat('noreferrer').join(' ')}"`);
                    }

                    // for undefined, boolean, number, symbol, bigint, and null
                    return fixer.replaceText(relAttribute.value, '"noreferrer"');
                  }
                }

                return null;
              },
            });
          }
        }
        if (formComponents.has(node.name.name)) {
          if (!attributeValuePossiblyBlank(node.attributes[targetIndex])) {
            const hasSpread = spreadAttributeIndex >= 0;

            if (warnOnSpreadAttributes && hasSpread) {
              // continue to check below
            } else if (
              (hasSpread && targetIndex < spreadAttributeIndex)
              || !hasSpread
              || !warnOnSpreadAttributes
            ) {
              return;
            }
          }

          if (!configuration.forms || hasSecureRel(node)) {
            return;
          }

          const formAttributes = formComponents.get(node.name.name);

          if (
            hasExternalLink(node, formAttributes)
            || (enforceDynamicLinks === 'always' && hasDynamicLink(node, formAttributes))
          ) {
            const messageId = allowReferrer ? 'noTargetBlankWithoutNoopener' : 'noTargetBlankWithoutNoreferrer';
            report(context, messages[messageId], messageId, {
              node,
            });
          }
        }
      },
    };
  },
};
