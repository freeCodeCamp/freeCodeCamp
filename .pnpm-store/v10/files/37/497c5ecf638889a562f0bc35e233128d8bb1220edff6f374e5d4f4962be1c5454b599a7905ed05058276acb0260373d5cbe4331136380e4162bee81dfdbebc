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
      description: 'Suggest having hooks before any test cases',
      recommended: false
    },
    messages: {
      noHookOnTop: 'Hooks should come before test cases'
    },
    schema: [],
    type: 'suggestion'
  },
  defaultOptions: [],

  create(context) {
    const hooksContext = [false];
    return {
      CallExpression(node) {
        if (!(0, _utils.isHook)(node) && (0, _utils.isTestCaseCall)(node)) {
          hooksContext[hooksContext.length - 1] = true;
        }

        if (hooksContext[hooksContext.length - 1] && (0, _utils.isHook)(node)) {
          context.report({
            messageId: 'noHookOnTop',
            node
          });
        }

        hooksContext.push(false);
      },

      'CallExpression:exit'() {
        hooksContext.pop();
      }

    };
  }

});

exports.default = _default;