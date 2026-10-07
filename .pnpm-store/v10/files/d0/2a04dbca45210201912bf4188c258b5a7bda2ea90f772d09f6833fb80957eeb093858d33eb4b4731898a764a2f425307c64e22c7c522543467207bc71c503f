"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _iterateJsdoc = _interopRequireDefault(require("../iterateJsdoc.cjs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = exports.default = (0, _iterateJsdoc.default)(({
  sourceCode,
  utils,
  report,
  context,
  jsdoc,
  jsdocNode
}) => {
  const [mainCircumstance, {
    tags = null
  } = {}] = context.options;
  const tgs =
  /**
   * @type {null|"any"|{[key: string]: "always"|"never"}}
   */
  tags;

  /**
   * @param {import('@es-joy/jsdoccomment').JsdocTagWithInline} jsdocTag
   * @param {string} targetTagName
   * @param {"always"|"never"} [circumstance]
   * @returns {void}
   */
  const checkHyphens = (jsdocTag, targetTagName, circumstance = mainCircumstance) => {
    const always = !circumstance || circumstance === 'always';
    const desc = /** @type {string} */utils.getTagDescription(jsdocTag);
    if (!desc.trim()) {
      return;
    }
    const startsWithHyphen = /^\s*-/u.test(desc);
    if (always) {
      if (!startsWithHyphen) {
        report(`There must be a hyphen before @${targetTagName} description.`, fixer => {
          const lineIndex = /** @type {import('../iterateJsdoc.js').Integer} */
          jsdocTag.line;
          const sourceLines = sourceCode.getText(jsdocNode).split('\n');

          // Get start index of description, accounting for multi-line descriptions
          const description = desc.split('\n')[0];
          const descriptionIndex = sourceLines[lineIndex].lastIndexOf(description);
          const replacementLine = sourceLines[lineIndex].slice(0, descriptionIndex) + '- ' + description;
          sourceLines.splice(lineIndex, 1, replacementLine);
          const replacement = sourceLines.join('\n');
          return fixer.replaceText(jsdocNode, replacement);
        }, jsdocTag);
      }
    } else if (startsWithHyphen) {
      let lines = 0;
      for (const {
        tokens
      } of jsdocTag.source) {
        if (tokens.description) {
          break;
        }
        lines++;
      }
      utils.reportJSDoc(`There must be no hyphen before @${targetTagName} description.`, {
        line: jsdocTag.source[0].number + lines
      }, () => {
        for (const {
          tokens
        } of jsdocTag.source) {
          if (tokens.description) {
            tokens.description = tokens.description.replace(/^\s*-\s*/u, '');
            break;
          }
        }
      }, true);
    }
  };
  utils.forEachPreferredTag('param', checkHyphens);
  if (tgs) {
    const tagEntries = Object.entries(tgs);
    for (const [tagName, circumstance] of tagEntries) {
      if (tagName === '*') {
        const preferredParamTag = utils.getPreferredTagName({
          tagName: 'param'
        });
        for (const {
          tag
        } of jsdoc.tags) {
          if (tag === preferredParamTag || tagEntries.some(([tagNme]) => {
            return tagNme !== '*' && tagNme === tag;
          })) {
            continue;
          }
          utils.forEachPreferredTag(tag, (jsdocTag, targetTagName) => {
            checkHyphens(jsdocTag, targetTagName, /** @type {"always"|"never"} */circumstance);
          });
        }
        continue;
      }
      utils.forEachPreferredTag(tagName, (jsdocTag, targetTagName) => {
        checkHyphens(jsdocTag, targetTagName, /** @type {"always"|"never"} */circumstance);
      });
    }
  }
}, {
  iterateAllJsdocs: true,
  meta: {
    docs: {
      description: 'Requires a hyphen before the `@param` description.',
      url: 'https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-hyphen-before-param-description.md#repos-sticky-header'
    },
    fixable: 'code',
    schema: [{
      enum: ['always', 'never'],
      type: 'string'
    }, {
      additionalProperties: false,
      properties: {
        tags: {
          anyOf: [{
            patternProperties: {
              '.*': {
                enum: ['always', 'never'],
                type: 'string'
              }
            },
            type: 'object'
          }, {
            enum: ['any'],
            type: 'string'
          }]
        }
      },
      type: 'object'
    }],
    type: 'layout'
  }
});
module.exports = exports.default;
//# sourceMappingURL=requireHyphenBeforeParamDescription.cjs.map