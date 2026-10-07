"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _experimentalUtils = require("@typescript-eslint/experimental-utils");

var _utils = require("./utils");

var _default = (0, _utils.createRule)({
  name: __filename,
  meta: {
    docs: {
      category: 'Best Practices',
      description: 'Disallow string interpolation inside snapshots',
      recommended: 'error'
    },
    messages: {
      noInterpolation: 'Do not use string interpolation inside of snapshots'
    },
    schema: [],
    type: 'problem'
  },
  defaultOptions: [],

  create(context) {
    return {
      CallExpression(node) {
        if (!(0, _utils.isExpectCall)(node)) {
          return;
        }

        const {
          matcher
        } = (0, _utils.parseExpectCall)(node);

        if (!matcher) {
          return;
        }

        if (['toMatchInlineSnapshot', 'toThrowErrorMatchingInlineSnapshot'].includes(matcher.name)) {
          var _matcher$arguments;

          // Check all since the optional 'propertyMatchers' argument might be present
          (_matcher$arguments = matcher.arguments) === null || _matcher$arguments === void 0 ? void 0 : _matcher$arguments.forEach(argument => {
            if (argument.type === _experimentalUtils.AST_NODE_TYPES.TemplateLiteral && argument.expressions.length > 0) {
              context.report({
                messageId: 'noInterpolation',
                node: argument
              });
            }
          });
        }
      }

    };
  }

});

exports.default = _default;