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
      description: 'Disallow alias methods',
      recommended: false
    },
    messages: {
      replaceAlias: `Replace {{ alias }}() with its canonical name of {{ canonical }}()`
    },
    fixable: 'code',
    type: 'suggestion',
    schema: []
  },
  defaultOptions: [],

  create(context) {
    // map of jest matcher aliases & their canonical names
    const methodNames = {
      toBeCalled: 'toHaveBeenCalled',
      toBeCalledTimes: 'toHaveBeenCalledTimes',
      toBeCalledWith: 'toHaveBeenCalledWith',
      lastCalledWith: 'toHaveBeenLastCalledWith',
      nthCalledWith: 'toHaveBeenNthCalledWith',
      toReturn: 'toHaveReturned',
      toReturnTimes: 'toHaveReturnedTimes',
      toReturnWith: 'toHaveReturnedWith',
      lastReturnedWith: 'toHaveLastReturnedWith',
      nthReturnedWith: 'toHaveNthReturnedWith',
      toThrowError: 'toThrow'
    };
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

        const alias = matcher.name;

        if (alias in methodNames) {
          const canonical = methodNames[alias];
          context.report({
            messageId: 'replaceAlias',
            data: {
              alias,
              canonical
            },
            node: matcher.node.property,
            fix: fixer => [fixer.replaceText(matcher.node.property, canonical)]
          });
        }
      }

    };
  }

});

exports.default = _default;