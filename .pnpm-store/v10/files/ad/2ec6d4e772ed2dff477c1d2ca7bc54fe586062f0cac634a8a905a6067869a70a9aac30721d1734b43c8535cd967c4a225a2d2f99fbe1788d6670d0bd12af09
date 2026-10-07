/**
 * @fileoverview Prevent usage of `javascript:` URLs
 * @author Sergei Startsev
 */

'use strict';

const includes = require('array-includes');
const docsUrl = require('../util/docsUrl');
const linkComponentsUtil = require('../util/linkComponents');
const report = require('../util/report');

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

// https://github.com/facebook/react/blob/d0ebde77f6d1232cefc0da184d731943d78e86f2/packages/react-dom/src/shared/sanitizeURL.js#L30
/* eslint-disable-next-line max-len, no-control-regex */
const isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

function hasJavaScriptProtocol(attr) {
  return attr.value && attr.value.type === 'Literal'
    && isJavaScriptProtocol.test(attr.value.value);
}

function shouldVerifyProp(node, config) {
  const name = node.name && node.name.name;
  const parentName = node.parent.name && node.parent.name.name;

  if (!name || !parentName || !config.has(parentName)) return false;

  const attributes = config.get(parentName);
  return includes(attributes, name);
}

function parseLegacyOption(config, option) {
  option.forEach((opt) => {
    config.set(opt.name, opt.props);
  });
}

const messages = {
  noScriptURL: 'A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML, try using dangerouslySetInnerHTML instead.',
};

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    docs: {
      description: 'Disallow usage of `javascript:` URLs',
      category: 'Best Practices',
      recommended: false,
      url: docsUrl('jsx-no-script-url'),
    },

    messages,

    schema: {
      anyOf: [
        {
          type: 'array',
          items: [
            {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'object',
                properties: {
                  name: {
                    type: 'string',
                  },
                  props: {
                    type: 'array',
                    items: {
                      type: 'string',
                      uniqueItems: true,
                    },
                  },
                },
                required: ['name', 'props'],
                additionalProperties: false,
              },
            },
            {
              type: 'object',
              properties: {
                includeFromSettings: {
                  type: 'boolean',
                },
              },
              additionalItems: false,
            },
          ],
          additionalItems: false,
        },
        {
          type: 'array',
          items: [
            {
              type: 'object',
              properties: {
                includeFromSettings: {
                  type: 'boolean',
                },
              },
              additionalItems: false,
            },
          ],
          additionalItems: false,
        },
      ],
    },
  },

  create(context) {
    const options = context.options;
    const hasLegacyOption = Array.isArray(options[0]);
    const legacyOptions = hasLegacyOption ? options[0] : [];
    // eslint-disable-next-line no-nested-ternary
    const objectOption = (hasLegacyOption && options.length > 1)
      ? options[1]
      : (options.length > 0
        ? options[0]
        : {
          includeFromSettings: false,
        }
      );
    const includeFromSettings = objectOption.includeFromSettings;

    const linkComponents = linkComponentsUtil.getLinkComponents(includeFromSettings ? context : {});
    parseLegacyOption(linkComponents, legacyOptions);

    return {
      JSXAttribute(node) {
        if (shouldVerifyProp(node, linkComponents) && hasJavaScriptProtocol(node)) {
          report(context, messages.noScriptURL, 'noScriptURL', {
            node,
          });
        }
      },
    };
  },
};
