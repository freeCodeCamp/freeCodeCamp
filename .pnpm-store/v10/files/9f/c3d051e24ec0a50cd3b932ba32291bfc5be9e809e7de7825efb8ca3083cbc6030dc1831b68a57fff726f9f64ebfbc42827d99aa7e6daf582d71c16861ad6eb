"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const looksLikeFlowFileAnnotation = comment => {
  return /@(?:no)?flo/i.test(comment);
};

const schema = [{
  enum: ['always', 'always-windows', 'never'],
  type: 'string'
}];

const create = context => {
  const mode = context.options[0];
  const never = mode === 'never';
  const newline = mode === 'always-windows' ? '\r\n' : '\n';
  return {
    Program(node) {
      const sourceCode = context.getSourceCode();

      const potentialFlowFileAnnotation = _lodash.default.find(context.getAllComments(), comment => {
        return looksLikeFlowFileAnnotation(comment.value);
      });

      if (potentialFlowFileAnnotation) {
        const line = potentialFlowFileAnnotation.loc.end.line;
        const nextLineIsEmpty = sourceCode.lines[line] === '';

        if (!never && !nextLineIsEmpty) {
          context.report({
            fix: fixer => {
              return fixer.insertTextAfter(potentialFlowFileAnnotation, newline);
            },
            message: 'Expected newline after flow annotation',
            node
          });
        }

        if (never && nextLineIsEmpty) {
          context.report({
            fix: fixer => {
              const lineBreak = sourceCode.text[potentialFlowFileAnnotation.range[1]];
              return fixer.replaceTextRange([potentialFlowFileAnnotation.range[1], potentialFlowFileAnnotation.range[1] + (lineBreak === '\r' ? 2 : 1)], '');
            },
            message: 'Expected no newline after flow annotation',
            node
          });
        }
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