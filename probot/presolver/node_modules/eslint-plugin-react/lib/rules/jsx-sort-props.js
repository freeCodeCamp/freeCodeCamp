/**
 * @fileoverview Enforce props alphabetical sorting
 * @author Ilya Volodin, Yannick Croissant
 */
'use strict';

var propName = require('jsx-ast-utils/propName');

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

function isCallbackPropName(name) {
  return /^on[A-Z]/.test(name);
}

module.exports = {
  meta: {
    docs: {
      description: 'Enforce props alphabetical sorting',
      category: 'Stylistic Issues',
      recommended: false
    },

    schema: [{
      type: 'object',
      properties: {
        // Whether callbacks (prefixed with "on") should be listed at the very end,
        // after all other props. Supersedes shorthandLast.
        callbacksLast: {
          type: 'boolean'
        },
        // Whether shorthand properties (without a value) should be listed first
        shorthandFirst: {
          type: 'boolean'
        },
        // Whether shorthand properties (without a value) should be listed last
        shorthandLast: {
          type: 'boolean'
        },
        ignoreCase: {
          type: 'boolean'
        },
        // Whether alphabetical sorting should be enforced
        noSortAlphabetically: {
          type: 'boolean'
        }
      },
      additionalProperties: false
    }]
  },

  create: function(context) {

    var configuration = context.options[0] || {};
    var ignoreCase = configuration.ignoreCase || false;
    var callbacksLast = configuration.callbacksLast || false;
    var shorthandFirst = configuration.shorthandFirst || false;
    var shorthandLast = configuration.shorthandLast || false;
    var noSortAlphabetically = configuration.noSortAlphabetically || false;

    return {
      JSXOpeningElement: function(node) {
        node.attributes.reduce(function(memo, decl, idx, attrs) {
          if (decl.type === 'JSXSpreadAttribute') {
            return attrs[idx + 1];
          }

          var previousPropName = propName(memo);
          var currentPropName = propName(decl);
          var previousValue = memo.value;
          var currentValue = decl.value;
          var previousIsCallback = isCallbackPropName(previousPropName);
          var currentIsCallback = isCallbackPropName(currentPropName);

          if (ignoreCase) {
            previousPropName = previousPropName.toLowerCase();
            currentPropName = currentPropName.toLowerCase();
          }

          if (callbacksLast) {
            if (!previousIsCallback && currentIsCallback) {
              // Entering the callback prop section
              return decl;
            }
            if (previousIsCallback && !currentIsCallback) {
              // Encountered a non-callback prop after a callback prop
              context.report({
                node: memo,
                message: 'Callbacks must be listed after all other props'
              });
              return memo;
            }
          }

          if (shorthandFirst) {
            if (currentValue && !previousValue) {
              return decl;
            }
            if (!currentValue && previousValue) {
              context.report({
                node: memo,
                message: 'Shorthand props must be listed before all other props'
              });
              return memo;
            }
          }

          if (shorthandLast) {
            if (!currentValue && previousValue) {
              return decl;
            }
            if (currentValue && !previousValue) {
              context.report({
                node: memo,
                message: 'Shorthand props must be listed after all other props'
              });
              return memo;
            }
          }

          if (!noSortAlphabetically && currentPropName < previousPropName) {
            context.report({
              node: decl,
              message: 'Props should be sorted alphabetically'
            });
            return memo;
          }

          return decl;
        }, node.attributes[0]);
      }
    };
  }
};
