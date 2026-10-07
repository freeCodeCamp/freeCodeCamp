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
      description: 'Disallow setup and teardown hooks',
      recommended: false
    },
    messages: {
      unexpectedHook: "Unexpected '{{ hookName }}' hook"
    },
    schema: [{
      type: 'object',
      properties: {
        allow: {
          type: 'array',
          contains: ['beforeAll', 'beforeEach', 'afterAll', 'afterEach']
        }
      },
      additionalProperties: false
    }],
    type: 'suggestion'
  },
  defaultOptions: [{
    allow: []
  }],

  create(context, [{
    allow = []
  }]) {
    return {
      CallExpression(node) {
        if ((0, _utils.isHook)(node) && !allow.includes(node.callee.name)) {
          context.report({
            node,
            messageId: 'unexpectedHook',
            data: {
              hookName: node.callee.name
            }
          });
        }
      }

    };
  }

});

exports.default = _default;