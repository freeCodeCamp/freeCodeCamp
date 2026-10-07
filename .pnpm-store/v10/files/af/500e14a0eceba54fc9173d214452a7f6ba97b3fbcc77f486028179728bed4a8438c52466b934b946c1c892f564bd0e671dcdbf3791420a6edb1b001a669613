/**
 * @fileoverview Enforce PascalCase for user-defined JSX components
 * @author Jake Marsh
 */

'use strict';

const elementType = require('jsx-ast-utils/elementType');
const minimatch = require('minimatch');
const docsUrl = require('../util/docsUrl');
const jsxUtil = require('../util/jsx');
const report = require('../util/report');

function testDigit(char) {
  const charCode = char.charCodeAt(0);
  return charCode >= 48 && charCode <= 57;
}

function testUpperCase(char) {
  const upperCase = char.toUpperCase();
  return char === upperCase && upperCase !== char.toLowerCase();
}

function testLowerCase(char) {
  const lowerCase = char.toLowerCase();
  return char === lowerCase && lowerCase !== char.toUpperCase();
}

function testPascalCase(name) {
  if (!testUpperCase(name.charAt(0))) {
    return false;
  }
  const anyNonAlphaNumeric = Array.prototype.some.call(
    name.slice(1),
    (char) => char.toLowerCase() === char.toUpperCase() && !testDigit(char)
  );
  if (anyNonAlphaNumeric) {
    return false;
  }
  return Array.prototype.some.call(
    name.slice(1),
    (char) => testLowerCase(char) || testDigit(char)
  );
}

function testAllCaps(name) {
  const firstChar = name.charAt(0);
  if (!(testUpperCase(firstChar) || testDigit(firstChar))) {
    return false;
  }
  for (let i = 1; i < name.length - 1; i += 1) {
    const char = name.charAt(i);
    if (!(testUpperCase(char) || testDigit(char) || char === '_')) {
      return false;
    }
  }
  const lastChar = name.charAt(name.length - 1);
  if (!(testUpperCase(lastChar) || testDigit(lastChar))) {
    return false;
  }
  return true;
}

function ignoreCheck(ignore, name) {
  return ignore.some(
    (entry) => name === entry || minimatch(name, entry, { noglobstar: true })
  );
}

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

const messages = {
  usePascalCase: 'Imported JSX component {{name}} must be in PascalCase',
  usePascalOrSnakeCase: 'Imported JSX component {{name}} must be in PascalCase or SCREAMING_SNAKE_CASE',
};

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    docs: {
      description: 'Enforce PascalCase for user-defined JSX components',
      category: 'Stylistic Issues',
      recommended: false,
      url: docsUrl('jsx-pascal-case'),
    },

    messages,

    schema: [{
      type: 'object',
      properties: {
        allowAllCaps: {
          type: 'boolean',
        },
        allowLeadingUnderscore: {
          type: 'boolean',
        },
        allowNamespace: {
          type: 'boolean',
        },
        ignore: {
          items: [
            {
              type: 'string',
            },
          ],
          minItems: 0,
          type: 'array',
          uniqueItems: true,
        },
      },
      additionalProperties: false,
    }],
  },

  create(context) {
    const configuration = context.options[0] || {};
    const allowAllCaps = configuration.allowAllCaps || false;
    const allowLeadingUnderscore = configuration.allowLeadingUnderscore || false;
    const allowNamespace = configuration.allowNamespace || false;
    const ignore = configuration.ignore || [];

    return {
      JSXOpeningElement(node) {
        const isCompatTag = jsxUtil.isDOMComponent(node);
        if (isCompatTag) return undefined;

        const name = elementType(node);
        let checkNames = [name];
        let index = 0;

        if (name.lastIndexOf(':') > -1) {
          checkNames = name.split(':');
        } else if (name.lastIndexOf('.') > -1) {
          checkNames = name.split('.');
        }

        do {
          const splitName = checkNames[index];
          if (splitName.length === 1) return undefined;
          const isIgnored = ignoreCheck(ignore, splitName);

          const checkName = allowLeadingUnderscore && splitName.startsWith('_') ? splitName.slice(1) : splitName;
          const isPascalCase = testPascalCase(checkName);
          const isAllowedAllCaps = allowAllCaps && testAllCaps(checkName);

          if (!isPascalCase && !isAllowedAllCaps && !isIgnored) {
            const messageId = allowAllCaps ? 'usePascalOrSnakeCase' : 'usePascalCase';
            report(context, messages[messageId], messageId, {
              node,
              data: {
                name: splitName,
              },
            });
            break;
          }
          index += 1;
        } while (index < checkNames.length && !allowNamespace);
      },
    };
  },
};
