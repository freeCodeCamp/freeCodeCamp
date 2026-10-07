"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _iterateJsdoc = _interopRequireDefault(require("../iterateJsdoc.cjs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const anyWhitespaceLines = /^\s*$/u;
const atLeastTwoLinesWhitespace = /^[ \t]*\n[ \t]*\n\s*$/u;
var _default = exports.default = (0, _iterateJsdoc.default)(({
  jsdoc,
  utils
}) => {
  const {
    description,
    descriptions,
    lastDescriptionLine
  } = utils.getDescription();
  const regex = jsdoc.tags.length ? anyWhitespaceLines : atLeastTwoLinesWhitespace;
  if (descriptions.length && regex.test(description)) {
    if (jsdoc.tags.length) {
      utils.reportJSDoc('There should be no blank lines in block descriptions followed by tags.', {
        line: lastDescriptionLine
      }, () => {
        utils.setBlockDescription(() => {
          // Remove all lines
          return [];
        });
      });
    } else {
      utils.reportJSDoc('There should be no extra blank lines in block descriptions not followed by tags.', {
        line: lastDescriptionLine
      }, () => {
        utils.setBlockDescription((info, seedTokens) => {
          return [
          // Keep the starting line
          {
            number: 0,
            source: '',
            tokens: seedTokens({
              ...info,
              description: ''
            })
          }];
        });
      });
    }
  }
}, {
  iterateAllJsdocs: true,
  meta: {
    docs: {
      description: 'Detects and removes extra lines of a blank block description',
      url: 'https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-blank-block-descriptions.md#repos-sticky-header'
    },
    fixable: 'whitespace',
    schema: [],
    type: 'layout'
  }
});
module.exports = exports.default;
//# sourceMappingURL=noBlankBlockDescriptions.cjs.map