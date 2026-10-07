/* eslint-disable prefer-named-capture-group -- Temporary */
import {
  parse as commentParser,
  tokenizers
} from 'comment-parser';

import {parseInlineTags} from './parseInlineTags.js';

const {
  name: nameTokenizer,
  tag: tagTokenizer,
  type: typeTokenizer,
  description: descriptionTokenizer
} = tokenizers;

/**
 * @param {import('comment-parser').Spec} spec
 * @returns {boolean}
 */
export const hasSeeWithLink = (spec) => {
  return spec.tag === 'see' && (/\{@link.+?\}/u).test(spec.source[0].source);
};

export const defaultNoTypes = [
  'default', 'defaultvalue', 'description', 'example',
  'file', 'fileoverview', 'license',
  'overview', 'see', 'summary'
];

export const defaultNoNames = [
  'access', 'author',
  'default', 'defaultvalue',
  'description',
  'example', 'exception', 'file', 'fileoverview',
  'kind',
  'license', 'overview',
  'return', 'returns',
  'since', 'summary',
  'throws',
  'version', 'variation'
];

const optionalBrackets = /^\[(?<name>[^=]*)=[^\]]*\]/u;
const preserveTypeTokenizer = typeTokenizer('preserve');
const preserveDescriptionTokenizer = descriptionTokenizer('preserve');
const plainNameTokenizer = nameTokenizer();

/**
 * Can't import `comment-parser/es6/parser/tokenizers/index.js`,
 *   so we redefine here.
 * @typedef {(spec: import('comment-parser').Spec) =>
 *   import('comment-parser').Spec} CommentParserTokenizer
 */

/**
 * @param {object} [cfg]
 * @param {string[]} [cfg.noTypes]
 * @param {string[]} [cfg.noNames]
 * @returns {CommentParserTokenizer[]}
 */
const getTokenizers = ({
  noTypes = defaultNoTypes,
  noNames = defaultNoNames
} = {}) => {
  // trim
  return [
    // Tag
    tagTokenizer(),

    /**
     * Type tokenizer.
     * @param {import('comment-parser').Spec} spec
     * @returns {import('comment-parser').Spec}
     */
    (spec) => {
      if (noTypes.includes(spec.tag)) {
        return spec;
      }

      return preserveTypeTokenizer(spec);
    },

    /**
     * Name tokenizer.
     * @param {import('comment-parser').Spec} spec
     * @returns {import('comment-parser').Spec}
     */
    (spec) => {
      if (spec.tag === 'template') {
        // const preWS = spec.postTag;
        const remainder = spec.source[0].tokens.description;

        let pos;
        if (remainder.startsWith('[') && remainder.includes(']')) {
          const endingBracketPos = remainder.indexOf(']');
          pos = remainder.slice(endingBracketPos).search(/(?<![\s,])\s/u);
          if (pos > -1) { // Add offset to starting point if space found
            pos += endingBracketPos;
          }
        } else {
          pos = remainder.search(/(?<![\s,])\s/u);
        }

        let name = pos === -1 ? remainder : remainder.slice(0, pos);
        const extra = remainder.slice(pos);
        let postName = '', description = '', lineEnd = '';
        if (pos > -1) {
          [, postName, description, lineEnd] = /** @type {RegExpMatchArray} */ (
            extra.match(/(\s*)([^\r]*)(\r)?/u)
          );
        }

        if (optionalBrackets.test(name)) {
          name = /** @type {string} */ (
            /** @type {RegExpMatchArray} */ (
              name.match(optionalBrackets)
            )?.groups?.name
          );
          spec.optional = true;
        } else {
          spec.optional = false;
        }

        spec.name = name;
        const {tokens} = spec.source[0];
        tokens.name = name;
        tokens.postName = postName;
        tokens.description = description;
        tokens.lineEnd = lineEnd || '';

        return spec;
      }

      if (noNames.includes(spec.tag) || hasSeeWithLink(spec)) {
        return spec;
      }

      return plainNameTokenizer(spec);
    },

    /**
     * Description tokenizer.
     * @param {import('comment-parser').Spec} spec
     * @returns {import('comment-parser').Spec}
     */
    (spec) => {
      return preserveDescriptionTokenizer(spec);
    }
  ];
};

/**
 * Accepts a comment token or complete comment string and converts it into
 * `comment-parser` AST.
 * @param {string | {value: string}} commentOrNode
 * @param {string} [indent] Whitespace
 * @returns {import('.').JsdocBlockWithInline}
 */
const parseComment = (commentOrNode, indent = '') => {
  let block;

  switch (typeof commentOrNode) {
  case 'string':
    // Preserve JSDoc block start/end indentation.
    [block] = commentParser(`${indent}${commentOrNode}`, {
      // @see https://github.com/yavorskiy/comment-parser/issues/21
      tokenizers: getTokenizers()
    });
    break;

  case 'object':
    if (commentOrNode === null) {
      throw new TypeError(`'commentOrNode' is not a string or object.`);
    }

    // Preserve JSDoc block start/end indentation.
    [block] = commentParser(`${indent}/*${commentOrNode.value}*/`, {
      // @see https://github.com/yavorskiy/comment-parser/issues/21
      tokenizers: getTokenizers()
    });
    break;

  default:
    throw new TypeError(`'commentOrNode' is not a string or object.`);
  }

  return parseInlineTags(block);
};

export {getTokenizers, parseComment};
