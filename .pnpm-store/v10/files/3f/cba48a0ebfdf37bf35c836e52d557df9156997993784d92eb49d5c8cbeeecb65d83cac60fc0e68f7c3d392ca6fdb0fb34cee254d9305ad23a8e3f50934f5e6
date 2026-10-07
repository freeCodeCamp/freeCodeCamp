/**
 * @fileoverview Enforce boolean attributes notation in JSX
 * @author Yannick Croissant
 */

'use strict';

const docsUrl = require('../util/docsUrl');
const report = require('../util/report');

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

const exceptionsSchema = {
  type: 'array',
  items: { type: 'string', minLength: 1 },
  uniqueItems: true,
};

const ALWAYS = 'always';
const NEVER = 'never';

/**
 * @param {string} configuration
 * @param {Set<string>} exceptions
 * @param {string} propName
 * @returns {boolean} propName
 */
function isAlways(configuration, exceptions, propName) {
  const isException = exceptions.has(propName);
  if (configuration === ALWAYS) {
    return !isException;
  }
  return isException;
}
/**
 * @param {string} configuration
 * @param {Set<string>} exceptions
 * @param {string} propName
 * @returns {boolean} propName
 */
function isNever(configuration, exceptions, propName) {
  const isException = exceptions.has(propName);
  if (configuration === NEVER) {
    return !isException;
  }
  return isException;
}

const messages = {
  omitBoolean: 'Value must be omitted for boolean attribute `{{propName}}`',
  setBoolean: 'Value must be set for boolean attribute `{{propName}}`',
  omitPropAndBoolean: 'Value must be omitted for `false` attribute: `{{propName}}`',
};

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    docs: {
      description: 'Enforce boolean attributes notation in JSX',
      category: 'Stylistic Issues',
      recommended: false,
      url: docsUrl('jsx-boolean-value'),
    },
    fixable: 'code',

    messages,

    schema: {
      anyOf: [{
        type: 'array',
        items: [{ enum: [ALWAYS, NEVER] }],
        additionalItems: false,
      }, {
        type: 'array',
        items: [{
          enum: [ALWAYS],
        }, {
          type: 'object',
          additionalProperties: false,
          properties: {
            [NEVER]: exceptionsSchema,
            assumeUndefinedIsFalse: {
              type: 'boolean',
            },
          },
        }],
        additionalItems: false,
      }, {
        type: 'array',
        items: [{
          enum: [NEVER],
        }, {
          type: 'object',
          additionalProperties: false,
          properties: {
            [ALWAYS]: exceptionsSchema,
            assumeUndefinedIsFalse: {
              type: 'boolean',
            },
          },
        }],
        additionalItems: false,
      }],
    },
  },

  create(context) {
    const configuration = context.options[0] || NEVER;
    const configObject = context.options[1] || {};
    const exceptions = new Set((configuration === ALWAYS ? configObject[NEVER] : configObject[ALWAYS]) || []);

    return {
      JSXAttribute(node) {
        const propName = node.name && node.name.name;
        const value = node.value;

        if (
          isAlways(configuration, exceptions, propName)
          && value === null
        ) {
          const messageId = 'setBoolean';
          const data = { propName };
          report(context, messages[messageId], messageId, {
            node,
            data,
            fix(fixer) {
              return fixer.insertTextAfter(node, '={true}');
            },
          });
        }
        if (
          isNever(configuration, exceptions, propName)
          && value
          && value.type === 'JSXExpressionContainer'
          && value.expression.value === true
        ) {
          const messageId = 'omitBoolean';
          const data = { propName };
          report(context, messages[messageId], messageId, {
            node,
            data,
            fix(fixer) {
              return fixer.removeRange([node.name.range[1], value.range[1]]);
            },
          });
        }
        if (
          isNever(configuration, exceptions, propName)
          && configObject.assumeUndefinedIsFalse
          && value
          && value.type === 'JSXExpressionContainer'
          && value.expression.value === false
        ) {
          const messageId = 'omitPropAndBoolean';
          const data = { propName };
          report(context, messages[messageId], messageId, {
            node,
            data,
            fix(fixer) {
              return fixer.removeRange([node.name.range[0], value.range[1]]);
            },
          });
        }
      },
    };
  },
};
