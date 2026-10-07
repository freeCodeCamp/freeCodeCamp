"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const schema = [];

const breakLineMessage = direction => {
  return `New line required ${direction} type declaration`;
};

const create = context => {
  return {
    TypeAlias(node) {
      const sourceCode = context.getSourceCode();

      if (sourceCode.lines.length === 1) {
        return;
      }

      const exportedType = node.parent.type === 'ExportNamedDeclaration';
      const leadingComments = sourceCode.getCommentsBefore(exportedType ? node.parent : node);
      const hasLeadingComments = leadingComments.length > 0;

      if (node.loc.start.line !== 1) {
        if (hasLeadingComments && leadingComments[0].loc.start.line !== 1) {
          const lineAboveComment = sourceCode.lines[leadingComments[0].loc.start.line - 2];

          if (lineAboveComment !== '') {
            context.report({
              fix(fixer) {
                return fixer.insertTextBeforeRange(leadingComments[0].range, '\n');
              },

              message: breakLineMessage('above'),
              node
            });
          }
        } else if (!hasLeadingComments) {
          const isLineAbove = sourceCode.lines[node.loc.start.line - 2];

          if (isLineAbove !== '') {
            context.report({
              fix(fixer) {
                return fixer.insertTextBefore(exportedType ? node.parent : node, '\n');
              },

              message: breakLineMessage('above'),
              node
            });
          }
        }
      }

      if (sourceCode.lines.length !== node.loc.end.line) {
        const isLineBelow = sourceCode.lines[node.loc.end.line];

        if (isLineBelow !== '') {
          context.report({
            fix(fixer) {
              return fixer.insertTextAfter(node, '\n');
            },

            message: breakLineMessage('below'),
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