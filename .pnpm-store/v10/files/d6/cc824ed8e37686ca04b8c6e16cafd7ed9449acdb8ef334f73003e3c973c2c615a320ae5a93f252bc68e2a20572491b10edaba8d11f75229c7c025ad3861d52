"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _iterateJsdoc = _interopRequireDefault(require("../iterateJsdoc.cjs"));
var _escapeStringRegexp = _interopRequireDefault(require("escape-string-regexp"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const otherDescriptiveTags = new Set([
// 'copyright' and 'see' might be good addition, but as the former may be
//   sensitive text, and the latter may have just a link, they are not
//   included by default
'summary', 'file', 'fileoverview', 'overview', 'classdesc', 'todo', 'deprecated', 'throws', 'exception', 'yields', 'yield']);

/**
 * @param {string} text
 * @returns {string[]}
 */
const extractParagraphs = text => {
  return text.split(/(?<![;:])\n\n+/u);
};

/**
 * @param {string} text
 * @param {string|RegExp} abbreviationsRegex
 * @returns {string[]}
 */
const extractSentences = (text, abbreviationsRegex) => {
  const txt = text
  // Remove all {} tags.
  .replaceAll(/(?<!^)\{[\s\S]*?\}\s*/gu, '')

  // Remove custom abbreviations
  .replace(abbreviationsRegex, '');
  const sentenceEndGrouping = /([.?!])(?:\s+|$)/ug;
  const puncts = [...txt.matchAll(sentenceEndGrouping)].map(sentEnd => {
    return sentEnd[0];
  });
  return txt.split(/[.?!](?:\s+|$)/u)

  // Re-add the dot.
  .map((sentence, idx) => {
    return !puncts[idx] && /^\s*$/u.test(sentence) ? sentence : `${sentence}${puncts[idx] || ''}`;
  });
};

/**
 * @param {string} text
 * @returns {boolean}
 */
const isNewLinePrecededByAPeriod = text => {
  /** @type {boolean} */
  let lastLineEndsSentence;
  const lines = text.split('\n');
  return !lines.some(line => {
    if (lastLineEndsSentence === false && /^[A-Z][a-z]/u.test(line)) {
      return true;
    }
    lastLineEndsSentence = /[.:?!|]$/u.test(line);
    return false;
  });
};

/**
 * @param {string} str
 * @returns {boolean}
 */
const isCapitalized = str => {
  return str[0] === str[0].toUpperCase();
};

/**
 * @param {string} str
 * @returns {boolean}
 */
const isTable = str => {
  return str.charAt(0) === '|';
};

/**
 * @param {string} str
 * @returns {string}
 */
const capitalize = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * @param {string} description
 * @param {import('../iterateJsdoc.js').Report} reportOrig
 * @param {import('eslint').Rule.Node} jsdocNode
 * @param {string|RegExp} abbreviationsRegex
 * @param {import('eslint').SourceCode} sourceCode
 * @param {import('comment-parser').Spec|{
 *   line: import('../iterateJsdoc.js').Integer
 * }} tag
 * @param {boolean} newlineBeforeCapsAssumesBadSentenceEnd
 * @returns {boolean}
 */
const validateDescription = (description, reportOrig, jsdocNode, abbreviationsRegex, sourceCode, tag, newlineBeforeCapsAssumesBadSentenceEnd) => {
  if (!description || /^\n+$/u.test(description)) {
    return false;
  }
  const descriptionNoHeadings = description.replaceAll(/^\s*#[^\n]*(\n|$)/gm, '');
  const paragraphs = extractParagraphs(descriptionNoHeadings).filter(Boolean);
  return paragraphs.some((paragraph, parIdx) => {
    const sentences = extractSentences(paragraph, abbreviationsRegex);
    const fix = /** @type {import('eslint').Rule.ReportFixer} */fixer => {
      let text = sourceCode.getText(jsdocNode);
      if (!/[.:?!]$/u.test(paragraph)) {
        const line = paragraph.split('\n').filter(Boolean).pop();
        text = text.replace(new RegExp(`${(0, _escapeStringRegexp.default)( /** @type {string} */
        line)}$`, 'mu'), `${line}.`);
      }
      for (const sentence of sentences.filter(sentence_ => {
        return !/^\s*$/u.test(sentence_) && !isCapitalized(sentence_) && !isTable(sentence_);
      })) {
        const beginning = sentence.split('\n')[0];
        if ('tag' in tag && tag.tag) {
          const reg = new RegExp(`(@${(0, _escapeStringRegexp.default)(tag.tag)}.*)${(0, _escapeStringRegexp.default)(beginning)}`, 'u');
          text = text.replace(reg, (_$0, $1) => {
            return $1 + capitalize(beginning);
          });
        } else {
          text = text.replace(new RegExp('((?:[.?!]|\\*|\\})\\s*)' + (0, _escapeStringRegexp.default)(beginning), 'u'), '$1' + capitalize(beginning));
        }
      }
      return fixer.replaceText(jsdocNode, text);
    };

    /**
     * @param {string} msg
     * @param {import('eslint').Rule.ReportFixer | null | undefined} fixer
     * @param {{
     *   line?: number | undefined;
     *   column?: number | undefined;
     * } | (import('comment-parser').Spec & {
     *   line?: number | undefined;
     *   column?: number | undefined;
     * })} tagObj
     * @returns {void}
     */
    const report = (msg, fixer, tagObj) => {
      if ('line' in tagObj) {
        /**
         * @type {{
         *   line: number;
         * }}
         */
        tagObj.line += parIdx * 2;
      } else {
        /** @type {import('comment-parser').Spec} */tagObj.source[0].number += parIdx * 2;
      }

      // Avoid errors if old column doesn't exist here
      tagObj.column = 0;
      reportOrig(msg, fixer, tagObj);
    };
    if (sentences.some(sentence => {
      return /^[.?!]$/u.test(sentence);
    })) {
      report('Sentences must be more than punctuation.', null, tag);
    }
    if (sentences.some(sentence => {
      return !/^\s*$/u.test(sentence) && !isCapitalized(sentence) && !isTable(sentence);
    })) {
      report('Sentences should start with an uppercase character.', fix, tag);
    }
    const paragraphNoAbbreviations = paragraph.replace(abbreviationsRegex, '');
    if (!/(?:[.?!|]|```)\s*$/u.test(paragraphNoAbbreviations)) {
      report('Sentences must end with a period.', fix, tag);
      return true;
    }
    if (newlineBeforeCapsAssumesBadSentenceEnd && !isNewLinePrecededByAPeriod(paragraphNoAbbreviations)) {
      report('A line of text is started with an uppercase character, but the preceding line does not end the sentence.', null, tag);
      return true;
    }
    return false;
  });
};
var _default = exports.default = (0, _iterateJsdoc.default)(({
  sourceCode,
  context,
  jsdoc,
  report,
  jsdocNode,
  utils
}) => {
  const /** @type {{abbreviations: string[], newlineBeforeCapsAssumesBadSentenceEnd: boolean}} */{
    abbreviations = [],
    newlineBeforeCapsAssumesBadSentenceEnd = false
  } = context.options[0] || {};
  const abbreviationsRegex = abbreviations.length ? new RegExp('\\b' + abbreviations.map(abbreviation => {
    return (0, _escapeStringRegexp.default)(abbreviation.replaceAll(/\.$/ug, '') + '.');
  }).join('|') + '(?:$|\\s)', 'gu') : '';
  let {
    description
  } = utils.getDescription();
  const indices = [...description.matchAll(/```[\s\S]*```/gu)].map(match => {
    const {
      index
    } = match;
    const [{
      length
    }] = match;
    return {
      index,
      length
    };
  }).reverse();
  for (const {
    index,
    length
  } of indices) {
    description = description.slice(0, index) + description.slice( /** @type {import('../iterateJsdoc.js').Integer} */index + length);
  }
  if (validateDescription(description, report, jsdocNode, abbreviationsRegex, sourceCode, {
    line: jsdoc.source[0].number + 1
  }, newlineBeforeCapsAssumesBadSentenceEnd)) {
    return;
  }
  utils.forEachPreferredTag('description', matchingJsdocTag => {
    const desc = `${matchingJsdocTag.name} ${utils.getTagDescription(matchingJsdocTag)}`.trim();
    validateDescription(desc, report, jsdocNode, abbreviationsRegex, sourceCode, matchingJsdocTag, newlineBeforeCapsAssumesBadSentenceEnd);
  }, true);
  const {
    tagsWithNames
  } = utils.getTagsByType(jsdoc.tags);
  const tagsWithoutNames = utils.filterTags(({
    tag: tagName
  }) => {
    return otherDescriptiveTags.has(tagName) || utils.hasOptionTag(tagName) && !tagsWithNames.some(({
      tag
    }) => {
      // If user accidentally adds tags with names (or like `returns`
      //  get parsed as having names), do not add to this list
      return tag === tagName;
    });
  });
  tagsWithNames.some(tag => {
    const desc = /** @type {string} */utils.getTagDescription(tag).replace(/^- /u, '').trimEnd();
    return validateDescription(desc, report, jsdocNode, abbreviationsRegex, sourceCode, tag, newlineBeforeCapsAssumesBadSentenceEnd);
  });
  tagsWithoutNames.some(tag => {
    const desc = `${tag.name} ${utils.getTagDescription(tag)}`.trim();
    return validateDescription(desc, report, jsdocNode, abbreviationsRegex, sourceCode, tag, newlineBeforeCapsAssumesBadSentenceEnd);
  });
}, {
  iterateAllJsdocs: true,
  meta: {
    docs: {
      description: 'Requires that block description, explicit `@description`, and `@param`/`@returns` tag descriptions are written in complete sentences.',
      url: 'https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-description-complete-sentence.md#repos-sticky-header'
    },
    fixable: 'code',
    schema: [{
      additionalProperties: false,
      properties: {
        abbreviations: {
          items: {
            type: 'string'
          },
          type: 'array'
        },
        newlineBeforeCapsAssumesBadSentenceEnd: {
          type: 'boolean'
        },
        tags: {
          items: {
            type: 'string'
          },
          type: 'array'
        }
      },
      type: 'object'
    }],
    type: 'suggestion'
  }
});
module.exports = exports.default;
//# sourceMappingURL=requireDescriptionCompleteSentence.cjs.map