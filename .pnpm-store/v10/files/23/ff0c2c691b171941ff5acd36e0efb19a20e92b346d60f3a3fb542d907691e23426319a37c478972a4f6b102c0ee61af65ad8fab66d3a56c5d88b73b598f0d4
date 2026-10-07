/**
 * @fileoverview Enforce event handler naming conventions in JSX
 * @author Jake Marsh
 */

'use strict';

const minimatch = require('minimatch');
const docsUrl = require('../util/docsUrl');
const getText = require('../util/eslint').getText;
const report = require('../util/report');

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

const messages = {
  badHandlerName: 'Handler function for {{propKey}} prop key must be a camelCase name beginning with \'{{handlerPrefix}}\' only',
  badPropKey: 'Prop key for {{propValue}} must begin with \'{{handlerPropPrefix}}\'',
};

function isPrefixDisabled(prefix) {
  return prefix === false;
}

function isInlineHandler(node) {
  return node.value.expression.type === 'ArrowFunctionExpression';
}

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    docs: {
      description: 'Enforce event handler naming conventions in JSX',
      category: 'Stylistic Issues',
      recommended: false,
      url: docsUrl('jsx-handler-names'),
    },

    messages,

    schema: [{
      anyOf: [
        {
          type: 'object',
          properties: {
            eventHandlerPrefix: { type: 'string' },
            eventHandlerPropPrefix: { type: 'string' },
            checkLocalVariables: { type: 'boolean' },
            checkInlineFunction: { type: 'boolean' },
            ignoreComponentNames: {
              type: 'array',
              uniqueItems: true,
              items: { type: 'string' },
            },
          },
          additionalProperties: false,
        }, {
          type: 'object',
          properties: {
            eventHandlerPrefix: { type: 'string' },
            eventHandlerPropPrefix: {
              type: 'boolean',
              enum: [false],
            },
            checkLocalVariables: { type: 'boolean' },
            checkInlineFunction: { type: 'boolean' },
            ignoreComponentNames: {
              type: 'array',
              uniqueItems: true,
              items: { type: 'string' },
            },
          },
          additionalProperties: false,
        }, {
          type: 'object',
          properties: {
            eventHandlerPrefix: {
              type: 'boolean',
              enum: [false],
            },
            eventHandlerPropPrefix: { type: 'string' },
            checkLocalVariables: { type: 'boolean' },
            checkInlineFunction: { type: 'boolean' },
            ignoreComponentNames: {
              type: 'array',
              uniqueItems: true,
              items: { type: 'string' },
            },
          },
          additionalProperties: false,
        }, {
          type: 'object',
          properties: {
            checkLocalVariables: { type: 'boolean' },
          },
          additionalProperties: false,
        }, {
          type: 'object',
          properties: {
            checkInlineFunction: { type: 'boolean' },
          },
          additionalProperties: false,
        },
        {
          type: 'object',
          properties: {
            ignoreComponentNames: {
              type: 'array',
              uniqueItems: true,
              items: { type: 'string' },
            },
          },
        },
      ],
    }],
  },

  create(context) {
    const configuration = context.options[0] || {};

    const eventHandlerPrefix = isPrefixDisabled(configuration.eventHandlerPrefix)
      ? null
      : configuration.eventHandlerPrefix || 'handle';
    const eventHandlerPropPrefix = isPrefixDisabled(configuration.eventHandlerPropPrefix)
      ? null
      : configuration.eventHandlerPropPrefix || 'on';

    const EVENT_HANDLER_REGEX = !eventHandlerPrefix
      ? null
      : new RegExp(`^((props\\.${eventHandlerPropPrefix || ''})|((.*\\.)?${eventHandlerPrefix}))[0-9]*[A-Z].*$`);
    const PROP_EVENT_HANDLER_REGEX = !eventHandlerPropPrefix
      ? null
      : new RegExp(`^(${eventHandlerPropPrefix}[A-Z].*|ref)$`);

    const checkLocal = !!configuration.checkLocalVariables;

    const checkInlineFunction = !!configuration.checkInlineFunction;

    const ignoreComponentNames = configuration.ignoreComponentNames || [];

    return {
      JSXAttribute(node) {
        const componentName = node.parent.name.name;

        const isComponentNameIgnored = ignoreComponentNames.some((ignoredComponentNamePattern) => minimatch(
          componentName,
          ignoredComponentNamePattern
        ));

        if (
          !node.value
          || !node.value.expression
          || (!checkInlineFunction && isInlineHandler(node))
          || (
            !checkLocal
            && (isInlineHandler(node)
              ? !node.value.expression.body.callee || !node.value.expression.body.callee.object
              : !node.value.expression.object
            )
          )
          || isComponentNameIgnored
        ) {
          return;
        }

        const propKey = typeof node.name === 'object' ? node.name.name : node.name;
        const expression = node.value.expression;
        const propValue = getText(
          context,
          checkInlineFunction && isInlineHandler(node) ? expression.body.callee : expression
        ).replace(/\s*/g, '').replace(/^this\.|.*::/, '');

        if (propKey === 'ref') {
          return;
        }

        const propIsEventHandler = PROP_EVENT_HANDLER_REGEX && PROP_EVENT_HANDLER_REGEX.test(propKey);
        const propFnIsNamedCorrectly = EVENT_HANDLER_REGEX && EVENT_HANDLER_REGEX.test(propValue);

        if (
          propIsEventHandler
          && propFnIsNamedCorrectly !== null
          && !propFnIsNamedCorrectly
        ) {
          report(context, messages.badHandlerName, 'badHandlerName', {
            node,
            data: {
              propKey,
              handlerPrefix: eventHandlerPrefix,
            },
          });
        } else if (
          propFnIsNamedCorrectly
          && propIsEventHandler !== null
          && !propIsEventHandler
        ) {
          report(context, messages.badPropKey, 'badPropKey', {
            node,
            data: {
              propValue,
              handlerPropPrefix: eventHandlerPropPrefix,
            },
          });
        }
      },
    };
  },
};
