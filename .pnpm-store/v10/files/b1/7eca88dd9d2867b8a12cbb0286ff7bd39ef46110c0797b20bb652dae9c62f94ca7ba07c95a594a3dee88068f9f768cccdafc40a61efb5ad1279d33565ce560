/**
 * @fileoverview Prevent JSX prop spreading
 * @author Ashish Gambhir
 */

'use strict';

const docsUrl = require('../util/docsUrl');
const report = require('../util/report');

// ------------------------------------------------------------------------------
// Constants
// ------------------------------------------------------------------------------

const OPTIONS = { ignore: 'ignore', enforce: 'enforce' };
const DEFAULTS = {
  html: OPTIONS.enforce,
  custom: OPTIONS.enforce,
  explicitSpread: OPTIONS.enforce,
  exceptions: [],
};

const isException = (tag, allExceptions) => allExceptions.indexOf(tag) !== -1;
const isProperty = (property) => property.type === 'Property';
const getTagNameFromMemberExpression = (node) => {
  if (node.property.parent) {
    return `${node.property.parent.object.name}.${node.property.name}`;
  }
  // for eslint 3
  return `${node.object.name}.${node.property.name}`;
};

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

const messages = {
  noSpreading: 'Prop spreading is forbidden',
};

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    docs: {
      description: 'Disallow JSX prop spreading',
      category: 'Best Practices',
      recommended: false,
      url: docsUrl('jsx-props-no-spreading'),
    },

    messages,

    schema: [{
      allOf: [{
        type: 'object',
        properties: {
          html: {
            enum: [OPTIONS.enforce, OPTIONS.ignore],
          },
          custom: {
            enum: [OPTIONS.enforce, OPTIONS.ignore],
          },
          explicitSpread: {
            enum: [OPTIONS.enforce, OPTIONS.ignore],
          },
          exceptions: {
            type: 'array',
            items: {
              type: 'string',
              uniqueItems: true,
            },
          },
        },
      }, {
        not: {
          type: 'object',
          required: ['html', 'custom'],
          properties: {
            html: {
              enum: [OPTIONS.ignore],
            },
            custom: {
              enum: [OPTIONS.ignore],
            },
            exceptions: {
              type: 'array',
              minItems: 0,
              maxItems: 0,
            },
          },
        },
      }],
    }],
  },

  create(context) {
    const configuration = context.options[0] || {};
    const ignoreHtmlTags = (configuration.html || DEFAULTS.html) === OPTIONS.ignore;
    const ignoreCustomTags = (configuration.custom || DEFAULTS.custom) === OPTIONS.ignore;
    const ignoreExplicitSpread = (configuration.explicitSpread || DEFAULTS.explicitSpread) === OPTIONS.ignore;
    const exceptions = configuration.exceptions || DEFAULTS.exceptions;
    return {
      JSXSpreadAttribute(node) {
        const jsxOpeningElement = node.parent.name;
        const type = jsxOpeningElement.type;

        let tagName;
        if (type === 'JSXIdentifier') {
          tagName = jsxOpeningElement.name;
        } else if (type === 'JSXMemberExpression') {
          tagName = getTagNameFromMemberExpression(jsxOpeningElement);
        } else {
          tagName = undefined;
        }

        const isHTMLTag = tagName && tagName[0] !== tagName[0].toUpperCase();
        const isCustomTag = tagName && (tagName[0] === tagName[0].toUpperCase() || tagName.includes('.'));
        if (
          isHTMLTag
          && ((ignoreHtmlTags && !isException(tagName, exceptions))
          || (!ignoreHtmlTags && isException(tagName, exceptions)))
        ) {
          return;
        }
        if (
          isCustomTag
          && ((ignoreCustomTags && !isException(tagName, exceptions))
          || (!ignoreCustomTags && isException(tagName, exceptions)))
        ) {
          return;
        }
        if (
          ignoreExplicitSpread
          && node.argument.type === 'ObjectExpression'
          && node.argument.properties.every(isProperty)
        ) {
          return;
        }
        report(context, messages.noSpreading, 'noSpreading', {
          node,
        });
      },
    };
  },
};
