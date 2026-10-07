"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _iterateJsdoc = _interopRequireDefault(require("../iterateJsdoc.cjs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = exports.default = (0, _iterateJsdoc.default)(({
  context,
  jsdoc,
  utils
}) => {
  const [alwaysNever = 'never', {
    count = 1,
    endLines = 0,
    startLines = 0,
    applyToEndTag = true,
    tags = {}
  } = {}] = context.options;

  // eslint-disable-next-line complexity -- Temporary
  jsdoc.tags.some((tg, tagIdx) => {
    let lastTag;

    /**
     * @type {null|import('../iterateJsdoc.js').Integer}
     */
    let lastEmpty = null;

    /**
     * @type {null|import('../iterateJsdoc.js').Integer}
     */
    let reportIndex = null;
    let emptyLinesCount = 0;
    for (const [idx, {
      tokens: {
        tag,
        name,
        type,
        description,
        end
      }
    }] of tg.source.entries()) {
      var _tags$lastTag$slice, _tags$lastTag$slice2;
      // May be text after a line break within a tag description
      if (description) {
        reportIndex = null;
      }
      if (lastTag && ['any', 'always'].includes((_tags$lastTag$slice = tags[lastTag.slice(1)]) === null || _tags$lastTag$slice === void 0 ? void 0 : _tags$lastTag$slice.lines)) {
        continue;
      }
      const empty = !tag && !name && !type && !description;
      if (empty && !end && (alwaysNever === 'never' || lastTag && ((_tags$lastTag$slice2 = tags[lastTag.slice(1)]) === null || _tags$lastTag$slice2 === void 0 ? void 0 : _tags$lastTag$slice2.lines) === 'never')) {
        reportIndex = idx;
        continue;
      }
      if (!end) {
        if (empty) {
          emptyLinesCount++;
        } else {
          emptyLinesCount = 0;
        }
        lastEmpty = empty ? idx : null;
      }
      lastTag = tag;
    }
    if (typeof endLines === 'number' && lastEmpty !== null && tagIdx === jsdoc.tags.length - 1) {
      const lineDiff = endLines - emptyLinesCount;
      if (lineDiff < 0) {
        const fixer = () => {
          utils.removeTag(tagIdx, {
            tagSourceOffset: /** @type {import('../iterateJsdoc.js').Integer} */lastEmpty + lineDiff + 1
          });
        };
        utils.reportJSDoc(`Expected ${endLines} trailing lines`, {
          line: tg.source[lastEmpty].number + lineDiff + 1
        }, fixer);
      } else if (lineDiff > 0) {
        const fixer = () => {
          utils.addLines(tagIdx, /** @type {import('../iterateJsdoc.js').Integer} */lastEmpty, endLines - emptyLinesCount);
        };
        utils.reportJSDoc(`Expected ${endLines} trailing lines`, {
          line: tg.source[lastEmpty].number
        }, fixer);
      }
      return true;
    }
    if (reportIndex !== null) {
      const fixer = () => {
        utils.removeTag(tagIdx, {
          tagSourceOffset: ( /** @type {import('../iterateJsdoc.js').Integer} */
          reportIndex)
        });
      };
      utils.reportJSDoc('Expected no lines between tags', {
        line: tg.source[0].number + 1
      }, fixer);
      return true;
    }
    return false;
  });
  (applyToEndTag ? jsdoc.tags : jsdoc.tags.slice(0, -1)).some((tg, tagIdx) => {
    /**
     * @type {{
     *   idx: import('../iterateJsdoc.js').Integer,
     *   number: import('../iterateJsdoc.js').Integer
     * }[]}
     */
    const lines = [];
    let currentTag;
    let tagSourceIdx = 0;
    for (const [idx, {
      number,
      tokens: {
        tag,
        name,
        type,
        description,
        end
      }
    }] of tg.source.entries()) {
      if (description) {
        lines.splice(0, lines.length);
        tagSourceIdx = idx;
      }
      if (tag) {
        currentTag = tag;
      }
      if (!tag && !name && !type && !description && !end) {
        lines.push({
          idx,
          number
        });
      }
    }
    const currentTg = currentTag && tags[currentTag.slice(1)];
    const tagCount = currentTg === null || currentTg === void 0 ? void 0 : currentTg.count;
    const defaultAlways = alwaysNever === 'always' && (currentTg === null || currentTg === void 0 ? void 0 : currentTg.lines) !== 'never' && (currentTg === null || currentTg === void 0 ? void 0 : currentTg.lines) !== 'any' && lines.length < count;
    let overrideAlways;
    let fixCount = count;
    if (!defaultAlways) {
      fixCount = typeof tagCount === 'number' ? tagCount : count;
      overrideAlways = (currentTg === null || currentTg === void 0 ? void 0 : currentTg.lines) === 'always' && lines.length < fixCount;
    }
    if (defaultAlways || overrideAlways) {
      var _lines2;
      const fixer = () => {
        var _lines;
        utils.addLines(tagIdx, ((_lines = lines[lines.length - 1]) === null || _lines === void 0 ? void 0 : _lines.idx) || tagSourceIdx + 1, fixCount - lines.length);
      };
      const line = ((_lines2 = lines[lines.length - 1]) === null || _lines2 === void 0 ? void 0 : _lines2.number) || tg.source[tagSourceIdx].number;
      utils.reportJSDoc(`Expected ${fixCount} line${fixCount === 1 ? '' : 's'} between tags but found ${lines.length}`, {
        line
      }, fixer);
      return true;
    }
    return false;
  });
  if (typeof startLines === 'number') {
    var _description$match;
    if (!jsdoc.tags.length) {
      return;
    }
    const {
      description,
      lastDescriptionLine
    } = utils.getDescription();
    if (!/\S/u.test(description)) {
      return;
    }
    const trailingLines = (_description$match = description.match(/\n+$/u)) === null || _description$match === void 0 || (_description$match = _description$match[0]) === null || _description$match === void 0 ? void 0 : _description$match.length;
    const trailingDiff = (trailingLines ?? 0) - startLines;
    if (trailingDiff > 0) {
      utils.reportJSDoc(`Expected only ${startLines} line after block description`, {
        line: lastDescriptionLine - trailingDiff
      }, () => {
        utils.setBlockDescription((info, seedTokens, descLines) => {
          return descLines.slice(0, -trailingDiff).map(desc => {
            return {
              number: 0,
              source: '',
              tokens: seedTokens({
                ...info,
                description: desc,
                postDelimiter: desc.trim() ? info.postDelimiter : ''
              })
            };
          });
        });
      });
    } else if (trailingDiff < 0) {
      utils.reportJSDoc(`Expected ${startLines} lines after block description`, {
        line: lastDescriptionLine
      }, () => {
        utils.setBlockDescription((info, seedTokens, descLines) => {
          return [...descLines, ...Array.from({
            length: -trailingDiff
          }, () => {
            return '';
          })].map(desc => {
            return {
              number: 0,
              source: '',
              tokens: seedTokens({
                ...info,
                description: desc,
                postDelimiter: desc.trim() ? info.postDelimiter : ''
              })
            };
          });
        });
      });
    }
  }
}, {
  iterateAllJsdocs: true,
  meta: {
    docs: {
      description: 'Enforces lines (or no lines) between tags.',
      url: 'https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/tag-lines.md#repos-sticky-header'
    },
    fixable: 'code',
    schema: [{
      enum: ['always', 'any', 'never'],
      type: 'string'
    }, {
      additionalProperties: false,
      properties: {
        applyToEndTag: {
          type: 'boolean'
        },
        count: {
          type: 'integer'
        },
        endLines: {
          anyOf: [{
            type: 'integer'
          }, {
            type: 'null'
          }]
        },
        startLines: {
          anyOf: [{
            type: 'integer'
          }, {
            type: 'null'
          }]
        },
        tags: {
          patternProperties: {
            '.*': {
              additionalProperties: false,
              properties: {
                count: {
                  type: 'integer'
                },
                lines: {
                  enum: ['always', 'never', 'any'],
                  type: 'string'
                }
              }
            }
          },
          type: 'object'
        }
      },
      type: 'object'
    }],
    type: 'suggestion'
  }
});
module.exports = exports.default;
//# sourceMappingURL=tagLines.cjs.map