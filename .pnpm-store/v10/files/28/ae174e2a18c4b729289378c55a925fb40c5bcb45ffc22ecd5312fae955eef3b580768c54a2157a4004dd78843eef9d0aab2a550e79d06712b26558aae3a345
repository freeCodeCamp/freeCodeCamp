"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("./utils");

function hasTests(node) {
  return /^\s*[xf]?(test|it|describe)(\.\w+|\[['"]\w+['"]\])?\s*\(/mu.test(node.value);
}

var _default = (0, _utils.createRule)({
  name: __filename,
  meta: {
    docs: {
      category: 'Best Practices',
      description: 'Disallow commented out tests',
      recommended: 'warn'
    },
    messages: {
      commentedTests: 'Some tests seem to be commented'
    },
    schema: [],
    type: 'suggestion'
  },
  defaultOptions: [],

  create(context) {
    const sourceCode = context.getSourceCode();

    function checkNode(node) {
      if (!hasTests(node)) {
        return;
      }

      context.report({
        messageId: 'commentedTests',
        node
      });
    }

    return {
      Program() {
        const comments = sourceCode.getAllComments();
        comments.forEach(checkNode);
      }

    };
  }

});

exports.default = _default;