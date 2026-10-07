/**
 * @fileoverview Enforce the use of the 'onChange' or 'readonly' attribute when 'checked' is used'
 * @author Jaesoekjjang
 */

'use strict';

const ASTUtils = require('jsx-ast-utils');
const flatMap = require('array.prototype.flatmap');
const isCreateElement = require('../util/isCreateElement');
const report = require('../util/report');
const docsUrl = require('../util/docsUrl');

const messages = {
  missingProperty: '`checked` should be used with either `onChange` or `readOnly`.',
  exclusiveCheckedAttribute: 'Use either `checked` or `defaultChecked`, but not both.',
};

const targetPropSet = new Set(['checked', 'onChange', 'readOnly', 'defaultChecked']);

const defaultOptions = {
  ignoreMissingProperties: false,
  ignoreExclusiveCheckedAttribute: false,
};

/**
 * @param {object[]} properties
 * @param {string} keyName
 * @returns {Set<string>}
 */
function extractTargetProps(properties, keyName) {
  return new Set(
    flatMap(
      properties,
      (prop) => (
        prop[keyName] && targetPropSet.has(prop[keyName].name)
          ? [prop[keyName].name]
          : []
      )
    )
  );
}

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    docs: {
      description: 'Enforce using `onChange` or `readonly` attribute when `checked` is used',
      category: 'Best Practices',
      recommended: false,
      url: docsUrl('checked-requires-onchange-or-readonly'),
    },
    messages,
    schema: [{
      additionalProperties: false,
      properties: {
        ignoreMissingProperties: {
          type: 'boolean',
        },
        ignoreExclusiveCheckedAttribute: {
          type: 'boolean',
        },
      },
    }],
  },
  create(context) {
    const options = Object.assign({}, defaultOptions, context.options[0]);

    function reportMissingProperty(node) {
      report(
        context,
        messages.missingProperty,
        'missingProperty',
        { node }
      );
    }

    function reportExclusiveCheckedAttribute(node) {
      report(
        context,
        messages.exclusiveCheckedAttribute,
        'exclusiveCheckedAttribute',
        { node }
      );
    }

    /**
     * @param {ASTNode} node
     * @param {Set<string>} propSet
     * @returns {void}
     */
    const checkAttributesAndReport = (node, propSet) => {
      if (!propSet.has('checked')) {
        return;
      }

      if (!options.ignoreExclusiveCheckedAttribute && propSet.has('defaultChecked')) {
        reportExclusiveCheckedAttribute(node);
      }

      if (
        !options.ignoreMissingProperties
        && !(propSet.has('onChange') || propSet.has('readOnly'))
      ) {
        reportMissingProperty(node);
      }
    };

    return {
      JSXOpeningElement(node) {
        if (ASTUtils.elementType(node) !== 'input') {
          return;
        }

        const propSet = extractTargetProps(node.attributes, 'name');
        checkAttributesAndReport(node, propSet);
      },
      CallExpression(node) {
        if (!isCreateElement(context, node)) {
          return;
        }

        const firstArg = node.arguments[0];
        const secondArg = node.arguments[1];
        if (
          !firstArg
          || firstArg.type !== 'Literal'
          || firstArg.value !== 'input'
        ) {
          return;
        }

        if (!secondArg || secondArg.type !== 'ObjectExpression') {
          return;
        }

        const propSet = extractTargetProps(secondArg.properties, 'key');
        checkAttributesAndReport(node, propSet);
      },
    };
  },
};
