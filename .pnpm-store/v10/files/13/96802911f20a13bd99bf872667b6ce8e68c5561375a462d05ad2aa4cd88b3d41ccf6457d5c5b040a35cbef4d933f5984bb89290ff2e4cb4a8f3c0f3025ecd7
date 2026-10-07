"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("./utils");

var _default = (0, _utils.createRule)({
  name: __filename,
  meta: {
    docs: {
      category: 'Best Practices',
      description: 'Require a message for `toThrow()`',
      recommended: false
    },
    messages: {
      addErrorMessage: 'Add an error message to {{ matcherName }}()'
    },
    type: 'suggestion',
    schema: []
  },
  defaultOptions: [],

  create(context) {
    return {
      CallExpression(node) {
        var _matcher$arguments;

        if (!(0, _utils.isExpectCall)(node)) {
          return;
        }

        const {
          matcher,
          modifier
        } = (0, _utils.parseExpectCall)(node);

        if ((matcher === null || matcher === void 0 ? void 0 : (_matcher$arguments = matcher.arguments) === null || _matcher$arguments === void 0 ? void 0 : _matcher$arguments.length) === 0 && ['toThrow', 'toThrowError'].includes(matcher.name) && (!modifier || !(modifier.name === _utils.ModifierName.not || modifier.negation))) {
          // Look for `toThrow` calls with no arguments.
          context.report({
            messageId: 'addErrorMessage',
            data: {
              matcherName: matcher.name
            },
            node: matcher.node.property
          });
        }
      }

    };
  }

});

exports.default = _default;