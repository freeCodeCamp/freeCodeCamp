"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _experimentalUtils = require("@typescript-eslint/experimental-utils");

var _utils = require("./utils");

const paramsLocation = params => {
  const [first] = params;
  const last = params[params.length - 1];
  return {
    start: first.loc.start,
    end: last.loc.end
  };
};

var _default = (0, _utils.createRule)({
  name: __filename,
  meta: {
    type: 'problem',
    docs: {
      category: 'Possible Errors',
      description: 'Enforce valid `describe()` callback',
      recommended: 'error'
    },
    messages: {
      nameAndCallback: 'Describe requires name and callback arguments',
      secondArgumentMustBeFunction: 'Second argument must be function',
      noAsyncDescribeCallback: 'No async describe callback',
      unexpectedDescribeArgument: 'Unexpected argument(s) in describe callback',
      unexpectedReturnInDescribe: 'Unexpected return statement in describe callback'
    },
    schema: []
  },
  defaultOptions: [],

  create(context) {
    return {
      CallExpression(node) {
        if (!(0, _utils.isDescribeCall)(node)) {
          return;
        }

        if (node.arguments.length < 1) {
          return context.report({
            messageId: 'nameAndCallback',
            loc: node.loc
          });
        }

        const [, callback] = node.arguments;

        if (!callback) {
          context.report({
            messageId: 'nameAndCallback',
            loc: paramsLocation(node.arguments)
          });
          return;
        }

        if (!(0, _utils.isFunction)(callback)) {
          context.report({
            messageId: 'secondArgumentMustBeFunction',
            loc: paramsLocation(node.arguments)
          });
          return;
        }

        if (callback.async) {
          context.report({
            messageId: 'noAsyncDescribeCallback',
            node: callback
          });
        }

        if (!(0, _utils.getNodeName)(node).endsWith('each') && callback.params.length) {
          context.report({
            messageId: 'unexpectedDescribeArgument',
            loc: paramsLocation(callback.params)
          });
        }

        if (callback.body.type === _experimentalUtils.AST_NODE_TYPES.CallExpression) {
          context.report({
            messageId: 'unexpectedReturnInDescribe',
            node: callback
          });
        }

        if (callback.body.type === _experimentalUtils.AST_NODE_TYPES.BlockStatement) {
          callback.body.body.forEach(node => {
            if (node.type === _experimentalUtils.AST_NODE_TYPES.ReturnStatement) {
              context.report({
                messageId: 'unexpectedReturnInDescribe',
                node
              });
            }
          });
        }
      }

    };
  }

});

exports.default = _default;