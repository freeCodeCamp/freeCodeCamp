/**
 * @fileoverview Enforce event handler naming conventions in JSX
 * @author Jake Marsh
 */
'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Enforce event handler naming conventions in JSX',
      category: 'Stylistic Issues',
      recommended: false
    },

    schema: [{
      type: 'object',
      properties: {
        eventHandlerPrefix: {
          type: 'string'
        },
        eventHandlerPropPrefix: {
          type: 'string'
        }
      },
      additionalProperties: false
    }]
  },

  create: function(context) {

    var sourceCode = context.getSourceCode();
    var configuration = context.options[0] || {};
    var eventHandlerPrefix = configuration.eventHandlerPrefix || 'handle';
    var eventHandlerPropPrefix = configuration.eventHandlerPropPrefix || 'on';

    var EVENT_HANDLER_REGEX = new RegExp('^((props\\.' + eventHandlerPropPrefix + ')'
                                        + '|((.*\\.)?' + eventHandlerPrefix + '))[A-Z].*$');
    var PROP_EVENT_HANDLER_REGEX = new RegExp('^(' + eventHandlerPropPrefix + '[A-Z].*|ref)$');

    return {
      JSXAttribute: function(node) {
        if (!node.value || !node.value.expression || !node.value.expression.object) {
          return;
        }

        var propKey = typeof node.name === 'object' ? node.name.name : node.name;
        var propValue = sourceCode.getText(node.value.expression).replace(/^this\.|.*::/, '');

        if (propKey === 'ref') {
          return;
        }

        var propIsEventHandler = PROP_EVENT_HANDLER_REGEX.test(propKey);
        var propFnIsNamedCorrectly = EVENT_HANDLER_REGEX.test(propValue);

        if (propIsEventHandler && !propFnIsNamedCorrectly) {
          context.report({
            node: node,
            message: 'Handler function for ' + propKey + ' prop key must begin with \'' + eventHandlerPrefix + '\''
          });
        } else if (propFnIsNamedCorrectly && !propIsEventHandler) {
          context.report({
            node: node,
            message: 'Prop key for ' + propValue + ' must begin with \'' + eventHandlerPropPrefix + '\''
          });
        }
      }
    };

  }
};
