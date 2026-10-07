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
      description: 'Disallow using `exports` in files containing tests',
      recommended: 'error'
    },
    messages: {
      unexpectedExport: `Do not export from a test file.`
    },
    type: 'suggestion',
    schema: []
  },
  defaultOptions: [],

  create(context) {
    const exportNodes = [];
    let hasTestCase = false;
    return {
      'Program:exit'() {
        if (hasTestCase && exportNodes.length > 0) {
          for (const node of exportNodes) {
            context.report({
              node,
              messageId: 'unexpectedExport'
            });
          }
        }
      },

      CallExpression(node) {
        if ((0, _utils.isTestCaseCall)(node)) {
          hasTestCase = true;
        }
      },

      'ExportNamedDeclaration, ExportDefaultDeclaration'(node) {
        exportNodes.push(node);
      },

      'AssignmentExpression > MemberExpression'(node) {
        let {
          object,
          property
        } = node;

        if (object.type === _experimentalUtils.AST_NODE_TYPES.MemberExpression) {
          ({
            object,
            property
          } = object);
        }

        if ('name' in object && object.name === 'module' && property.type === _experimentalUtils.AST_NODE_TYPES.Identifier && /^exports?$/u.test(property.name)) {
          exportNodes.push(node);
        }
      }

    };
  }

});

exports.default = _default;