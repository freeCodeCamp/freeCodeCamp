"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _iterateJsdoc = _interopRequireDefault(require("../iterateJsdoc.cjs"));
var _commentParser = require("comment-parser");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// Neither a single nor 3+ asterisks are valid jsdoc per
//  https://jsdoc.app/about-getting-started.html#adding-documentation-comments-to-your-code
const commentRegexp = /^\/\*(?!\*)/u;
const extraAsteriskCommentRegexp = /^\/\*{3,}/u;
var _default = exports.default = (0, _iterateJsdoc.default)(({
  context,
  sourceCode,
  allComments,
  makeReport
}) => {
  const [{
    ignore = ['ts-check', 'ts-expect-error', 'ts-ignore', 'ts-nocheck'],
    preventAllMultiAsteriskBlocks = false
  } = {}] = context.options;
  let extraAsterisks = false;
  const nonJsdocNodes = /** @type {import('estree').Node[]} */allComments.filter(comment => {
    const commentText = sourceCode.getText(comment);
    let sliceIndex = 2;
    if (!commentRegexp.test(commentText)) {
      var _extraAsteriskComment;
      const multiline = (_extraAsteriskComment = extraAsteriskCommentRegexp.exec(commentText)) === null || _extraAsteriskComment === void 0 ? void 0 : _extraAsteriskComment[0];
      if (!multiline) {
        return false;
      }
      sliceIndex = multiline.length;
      extraAsterisks = true;
      if (preventAllMultiAsteriskBlocks) {
        return true;
      }
    }
    const tags = ((0, _commentParser.parse)(`${commentText.slice(0, 2)}*${commentText.slice(sliceIndex)}`)[0] || {}).tags ?? [];
    return tags.length && !tags.some(({
      tag
    }) => {
      return ignore.includes(tag);
    });
  });
  if (!nonJsdocNodes.length) {
    return;
  }
  for (const node of nonJsdocNodes) {
    const report = /** @type {import('../iterateJsdoc.js').MakeReport} */makeReport(context, node);

    // eslint-disable-next-line no-loop-func
    const fix = /** @type {import('eslint').Rule.ReportFixer} */fixer => {
      const text = sourceCode.getText(node);
      return fixer.replaceText(node, extraAsterisks ? text.replace(extraAsteriskCommentRegexp, '/**') : text.replace('/*', '/**'));
    };
    report('Expected JSDoc-like comment to begin with two asterisks.', fix);
  }
}, {
  checkFile: true,
  meta: {
    docs: {
      description: 'This rule checks for multi-line-style comments which fail to meet the criteria of a jsdoc block.',
      url: 'https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-bad-blocks.md#repos-sticky-header'
    },
    fixable: 'code',
    schema: [{
      additionalProperties: false,
      properties: {
        ignore: {
          items: {
            type: 'string'
          },
          type: 'array'
        },
        preventAllMultiAsteriskBlocks: {
          type: 'boolean'
        }
      },
      type: 'object'
    }],
    type: 'layout'
  }
});
module.exports = exports.default;
//# sourceMappingURL=noBadBlocks.cjs.map