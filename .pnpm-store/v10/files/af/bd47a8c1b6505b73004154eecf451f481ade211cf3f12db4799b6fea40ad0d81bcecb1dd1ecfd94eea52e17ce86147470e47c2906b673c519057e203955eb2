"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const schema = []; // const x = [];

const isEmptyArrayLiteral = node => {
  return _lodash.default.get(node, 'init.type') === 'ArrayExpression' && _lodash.default.get(node, 'init.elements.length') === 0;
}; // const x = new Array(); const y = Array();


const isEmptyArrayInstance = node => {
  if (_lodash.default.get(node, 'init.type') === 'NewExpression' || _lodash.default.get(node, 'init.type') === 'CallExpression') {
    return _lodash.default.get(node, 'init.callee.name') === 'Array' && _lodash.default.get(node, 'init.arguments.length') === 0;
  }

  return false;
};

const isAnnotationOfEmptyArrayInit = node => {
  if (_lodash.default.has(node, 'parent.parent.parent')) {
    const parent = _lodash.default.get(node, 'parent.parent.parent');

    const isVariableDeclaration = _lodash.default.get(parent, 'type') === 'VariableDeclarator';
    return isVariableDeclaration && (isEmptyArrayLiteral(parent) || isEmptyArrayInstance(parent));
  }

  return false;
};

const create = context => {
  return {
    ArrayTypeAnnotation(node) {
      if (!isAnnotationOfEmptyArrayInit(node)) {
        context.report({
          fix(fixer) {
            const rawElementType = context.getSourceCode().getText(node.elementType);
            return fixer.replaceText(node, '$ReadOnlyArray<' + rawElementType + '>');
          },

          message: 'Use "$ReadOnlyArray" instead of array shorthand notation',
          node
        });
      }
    },

    GenericTypeAnnotation(node) {
      if (node.id.name === 'Array' && !isAnnotationOfEmptyArrayInit(node)) {
        context.report({
          fix(fixer) {
            return fixer.replaceText(node.id, '$ReadOnlyArray');
          },

          message: 'Use "$ReadOnlyArray" instead of "Array"',
          node
        });
      }
    }

  };
};

var _default = {
  create,
  meta: {
    fixable: 'code'
  },
  schema
};
exports.default = _default;
module.exports = exports.default;