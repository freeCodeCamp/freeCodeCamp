/**
 * Transform based on https://github.com/syavorsky/comment-parser/blob/master/src/transforms/align.ts
 *
 * It contains some customizations to align based on the tags, and some custom options.
 */

import {
  // `comment-parser/primitives` export
  util,
} from 'comment-parser';

/**
 * @typedef {{
 *   hasNoTypes: boolean,
 *   maxNamedTagLength: import('./iterateJsdoc.js').Integer,
 *   maxUnnamedTagLength: import('./iterateJsdoc.js').Integer
 * }} TypelessInfo
 */

const {
  rewireSource,
} = util;

/**
 * @typedef {{
 *   name: import('./iterateJsdoc.js').Integer,
 *   start: import('./iterateJsdoc.js').Integer,
 *   tag: import('./iterateJsdoc.js').Integer,
 *   type: import('./iterateJsdoc.js').Integer
 * }} Width
 */

/** @type {Width} */
const zeroWidth = {
  name: 0,
  start: 0,
  tag: 0,
  type: 0,
};

/**
 * @param {string[]} tags
 * @param {import('./iterateJsdoc.js').Integer} index
 * @param {import('comment-parser').Line[]} source
 * @returns {boolean}
 */
const shouldAlign = (tags, index, source) => {
  const tag = source[index].tokens.tag.replace('@', '');
  const includesTag = tags.includes(tag);

  if (includesTag) {
    return true;
  }

  if (tag !== '') {
    return false;
  }

  for (let iterator = index; iterator >= 0; iterator--) {
    const previousTag = source[iterator].tokens.tag.replace('@', '');

    if (previousTag !== '') {
      if (tags.includes(previousTag)) {
        return true;
      }

      return false;
    }
  }

  return true;
};

/**
 * @param {string[]} tags
 * @returns {(
 *   width: Width,
 *   line: {
 *     tokens: import('comment-parser').Tokens
 *   },
 *   index: import('./iterateJsdoc.js').Integer,
 *   source: import('comment-parser').Line[]
 * ) => Width}
 */
const getWidth = (tags) => {
  return (width, {
    tokens,
  }, index, source) => {
    if (!shouldAlign(tags, index, source)) {
      return width;
    }

    return {
      name: Math.max(width.name, tokens.name.length),
      start: tokens.delimiter === '/**' ? tokens.start.length : width.start,
      tag: Math.max(width.tag, tokens.tag.length),
      type: Math.max(width.type, tokens.type.length),
    };
  };
};

/**
 * @param {{
 *   description: string;
 *   tags: import('comment-parser').Spec[];
 *   problems: import('comment-parser').Problem[];
 * }} fields
 * @returns {TypelessInfo}
 */
const getTypelessInfo = (fields) => {
  const hasNoTypes = fields.tags.every(({
    type,
  }) => {
    return !type;
  });
  const maxNamedTagLength = Math.max(...fields.tags.map(({
    tag,
    name,
  }) => {
    return name.length === 0 ? -1 : tag.length;
  }).filter((length) => {
    return length !== -1;
  })) + 1;
  const maxUnnamedTagLength = Math.max(...fields.tags.map(({
    tag,
    name,
  }) => {
    return name.length === 0 ? tag.length : -1;
  }).filter((length) => {
    return length !== -1;
  })) + 1;
  return {
    hasNoTypes,
    maxNamedTagLength,
    maxUnnamedTagLength,
  };
};

/**
 * @param {import('./iterateJsdoc.js').Integer} len
 * @returns {string}
 */
const space = (len) => {
  return ''.padStart(len, ' ');
};

/**
 * @param {{
 *   customSpacings: import('../src/rules/checkLineAlignment.js').CustomSpacings,
 *   tags: string[],
 *   indent: string,
 *   preserveMainDescriptionPostDelimiter: boolean,
 *   wrapIndent: string,
 *   disableWrapIndent: boolean,
 * }} cfg
 * @returns {(
 *   block: import('comment-parser').Block
 * ) => import('comment-parser').Block}
 */
const alignTransform = ({
  customSpacings,
  tags,
  indent,
  preserveMainDescriptionPostDelimiter,
  wrapIndent,
  disableWrapIndent,
}) => {
  let intoTags = false;
  /** @type {Width} */
  let width;

  /**
   * @param {import('comment-parser').Tokens} tokens
   * @param {TypelessInfo} typelessInfo
   * @returns {import('comment-parser').Tokens}
   */
  const alignTokens = (tokens, typelessInfo) => {
    const nothingAfter = {
      delim: false,
      name: false,
      tag: false,
      type: false,
    };

    if (tokens.description === '') {
      nothingAfter.name = true;
      tokens.postName = '';

      if (tokens.name === '') {
        nothingAfter.type = true;
        tokens.postType = '';

        if (tokens.type === '') {
          nothingAfter.tag = true;
          tokens.postTag = '';

          /* c8 ignore next: Never happens because the !intoTags return. But it's here for consistency with the original align transform */
          if (tokens.tag === '') {
            nothingAfter.delim = true;
          }
        }
      }
    }

    let untypedNameAdjustment = 0;
    let untypedTypeAdjustment = 0;
    if (typelessInfo.hasNoTypes) {
      nothingAfter.tag = true;
      tokens.postTag = '';
      if (tokens.name === '') {
        untypedNameAdjustment = typelessInfo.maxNamedTagLength - tokens.tag.length;
      } else {
        untypedNameAdjustment = typelessInfo.maxNamedTagLength > typelessInfo.maxUnnamedTagLength ? 0 :
          Math.max(0, typelessInfo.maxUnnamedTagLength - (tokens.tag.length + tokens.name.length + 1));
        untypedTypeAdjustment = typelessInfo.maxNamedTagLength - tokens.tag.length;
      }
    }

    // Todo: Avoid fixing alignment of blocks with multiline wrapping of type
    if (tokens.tag === '' && tokens.type) {
      return tokens;
    }

    const spacings = {
      postDelimiter: customSpacings?.postDelimiter || 1,
      postName: customSpacings?.postName || 1,
      postTag: customSpacings?.postTag || 1,
      postType: customSpacings?.postType || 1,
    };

    tokens.postDelimiter = nothingAfter.delim ? '' : space(spacings.postDelimiter);

    if (!nothingAfter.tag) {
      tokens.postTag = space(width.tag - tokens.tag.length + spacings.postTag);
    }

    if (!nothingAfter.type) {
      tokens.postType = space(width.type - tokens.type.length + spacings.postType + untypedTypeAdjustment);
    }

    if (!nothingAfter.name) {
      // If post name is empty for all lines (name width 0), don't add post name spacing.
      tokens.postName = width.name === 0 ? '' : space(width.name - tokens.name.length + spacings.postName + untypedNameAdjustment);
    }

    return tokens;
  };

  /**
   * @param {import('comment-parser').Line} line
   * @param {import('./iterateJsdoc.js').Integer} index
   * @param {import('comment-parser').Line[]} source
   * @param {TypelessInfo} typelessInfo
   * @param {string|false} indentTag
   * @returns {import('comment-parser').Line}
   */
  const update = (line, index, source, typelessInfo, indentTag) => {
    /** @type {import('comment-parser').Tokens} */
    const tokens = {
      ...line.tokens,
    };

    if (tokens.tag !== '') {
      intoTags = true;
    }

    const isEmpty =
      tokens.tag === '' &&
      tokens.name === '' &&
      tokens.type === '' &&
      tokens.description === '';

    // dangling '*/'
    if (tokens.end === '*/' && isEmpty) {
      tokens.start = indent + ' ';

      return {
        ...line,
        tokens,
      };
    }

    switch (tokens.delimiter) {
    case '/**':
      tokens.start = indent;
      break;
    case '*':
      tokens.start = indent + ' ';
      break;
    default:
      tokens.delimiter = '';

      // compensate delimiter
      tokens.start = indent + '  ';
    }

    if (!intoTags) {
      if (tokens.description === '') {
        tokens.postDelimiter = '';
      } else if (!preserveMainDescriptionPostDelimiter) {
        tokens.postDelimiter = ' ';
      }

      return {
        ...line,
        tokens,
      };
    }

    const postHyphenSpacing = customSpacings?.postHyphen ?? 1;
    const hyphenSpacing = /^\s*-\s+/u;
    tokens.description = tokens.description.replace(
      hyphenSpacing, '-' + ''.padStart(postHyphenSpacing, ' '),
    );

    // Not align.
    if (shouldAlign(tags, index, source)) {
      alignTokens(tokens, typelessInfo);
      if (!disableWrapIndent && indentTag) {
        tokens.postDelimiter += wrapIndent;
      }
    }

    return {
      ...line,
      tokens,
    };
  };

  return ({
    source,
    ...fields
  }) => {
    width = source.reduce(getWidth(tags), {
      ...zeroWidth,
    });

    const typelessInfo = getTypelessInfo(fields);

    let tagIndentMode = false;

    return rewireSource({
      ...fields,
      source: source.map((line, index) => {
        const indentTag = !disableWrapIndent && tagIndentMode && !line.tokens.tag && line.tokens.description;
        const ret = update(line, index, source, typelessInfo, indentTag);

        if (!disableWrapIndent && line.tokens.tag) {
          tagIndentMode = true;
        }

        return ret;
      }),
    });
  };
};

export default alignTransform;
