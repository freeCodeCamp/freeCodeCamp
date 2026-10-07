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
      description: 'Suggest using `toBeCalledWith()` or `toHaveBeenCalledWith()`',
      recommended: false
    },
    messages: {
      preferCalledWith: 'Prefer {{name}}With(/* expected args */)'
    },
    type: 'suggestion',
    schema: []
  },
  defaultOptions: [],

  create(context) {
    return {
      CallExpression(node) {
        if (!(0, _utils.isExpectCall)(node)) {
          return;
        }

        const {
          modifier,
          matcher
        } = (0, _utils.parseExpectCall)(node); // Could check resolves/rejects here but not a likely idiom.

        if (matcher && !modifier) {
          if (['toBeCalled', 'toHaveBeenCalled'].includes(matcher.name)) {
            context.report({
              data: {
                name: matcher.name
              },
              // todo: rename to 'matcherName'
              messageId: 'preferCalledWith',
              node: matcher.node.property
            });
          }
        }
      }

    };
  }

});

exports.default = _default;