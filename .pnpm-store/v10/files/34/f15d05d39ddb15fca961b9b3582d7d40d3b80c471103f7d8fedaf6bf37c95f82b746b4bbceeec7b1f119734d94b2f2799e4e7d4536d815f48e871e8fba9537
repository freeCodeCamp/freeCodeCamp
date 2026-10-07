"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = require("path");

var _utils = require("./utils");

const mocksDirName = '__mocks__';

const isMockPath = path => path.split(_path.posix.sep).includes(mocksDirName);

const isMockImportLiteral = expression => (0, _utils.isStringNode)(expression) && isMockPath((0, _utils.getStringValue)(expression));

var _default = (0, _utils.createRule)({
  name: __filename,
  meta: {
    type: 'problem',
    docs: {
      category: 'Best Practices',
      description: 'Disallow manually importing from `__mocks__`',
      recommended: 'error'
    },
    messages: {
      noManualImport: `Mocks should not be manually imported from a ${mocksDirName} directory. Instead use \`jest.mock\` and import from the original module path.`
    },
    schema: []
  },
  defaultOptions: [],

  create(context) {
    return {
      ImportDeclaration(node) {
        if (isMockImportLiteral(node.source)) {
          context.report({
            node,
            messageId: 'noManualImport'
          });
        }
      },

      'CallExpression[callee.name="require"]'(node) {
        const [arg] = node.arguments;

        if (arg && isMockImportLiteral(arg)) {
          context.report({
            node: arg,
            messageId: 'noManualImport'
          });
        }
      }

    };
  }

});

exports.default = _default;