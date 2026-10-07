"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("./utils");

var _default = (0, _utils.createRule)({
  name: __filename,
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow importing Jest',
      category: 'Best Practices',
      recommended: 'error'
    },
    messages: {
      unexpectedImport: `Jest is automatically in scope. Do not import "jest", as Jest doesn't export anything.`
    },
    schema: []
  },
  defaultOptions: [],

  create(context) {
    return {
      'ImportDeclaration[source.value="jest"]'(node) {
        context.report({
          node,
          messageId: 'unexpectedImport'
        });
      },

      'CallExpression[callee.name="require"][arguments.0.value="jest"]'(node) {
        context.report({
          loc: node.arguments[0].loc,
          messageId: 'unexpectedImport',
          node
        });
      }

    };
  }

});

exports.default = _default;