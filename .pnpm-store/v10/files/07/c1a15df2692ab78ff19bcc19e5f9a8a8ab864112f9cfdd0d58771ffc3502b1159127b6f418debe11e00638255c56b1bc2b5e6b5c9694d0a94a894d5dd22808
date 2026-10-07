import {parse as jsdocTypePrattParse} from 'jsdoc-type-pratt-parser';

/**
 * Removes initial and ending brackets from `rawType`
 * @param {JsdocTypeLine[]|JsdocTag} container
 * @param {boolean} [isArr]
 * @returns {void}
 */
const stripEncapsulatingBrackets = (container, isArr) => {
  if (isArr) {
    const firstItem = /** @type {JsdocTypeLine[]} */ (container)[0];
    firstItem.rawType = firstItem.rawType.replace(
      /^\{/u, ''
    );

    const lastItem = /** @type {JsdocTypeLine} */ (
      /** @type {JsdocTypeLine[]} */ (
        container
      ).at(-1)
    );
    lastItem.rawType = lastItem.rawType.replace(/\}$/u, '');

    return;
  }
  /** @type {JsdocTag} */ (container).rawType =
    /** @type {JsdocTag} */ (container).rawType.replace(
      /^\{/u, ''
    ).replace(/\}$/u, '');
};

/**
 * @typedef {{
 *   delimiter: string,
 *   postDelimiter: string,
 *   rawType: string,
 *   initial: string,
 *   type: "JsdocTypeLine"
 * }} JsdocTypeLine
 */

/**
 * @typedef {{
 *   delimiter: string,
 *   description: string,
 *   postDelimiter: string,
 *   initial: string,
 *   type: "JsdocDescriptionLine"
 * }} JsdocDescriptionLine
 */

/**
 * @typedef {{
 *   format: 'pipe' | 'plain' | 'prefix' | 'space',
 *   namepathOrURL: string,
 *   tag: string,
 *   text: string,
 * }} JsdocInlineTagNoType
 */
/**
 * @typedef {JsdocInlineTagNoType & {
 *   type: "JsdocInlineTag"
 * }} JsdocInlineTag
 */

/**
 * @typedef {{
 *   delimiter: string,
 *   description: string,
 *   descriptionLines: JsdocDescriptionLine[],
 *   initial: string,
 *   inlineTags: JsdocInlineTag[]
 *   name: string,
 *   postDelimiter: string,
 *   postName: string,
 *   postTag: string,
 *   postType: string,
 *   rawType: string,
 *   parsedType: import('jsdoc-type-pratt-parser').RootResult|null
 *   tag: string,
 *   type: "JsdocTag",
 *   typeLines: JsdocTypeLine[],
 * }} JsdocTag
 */

/**
 * @typedef {number} Integer
 */

/**
 * @typedef {{
 *   delimiter: string,
 *   delimiterLineBreak: string,
 *   description: string,
 *   descriptionEndLine?: Integer,
 *   descriptionLines: JsdocDescriptionLine[],
 *   descriptionStartLine?: Integer,
 *   hasPreterminalDescription: 0|1,
 *   hasPreterminalTagDescription?: 1,
 *   initial: string,
 *   inlineTags: JsdocInlineTag[]
 *   lastDescriptionLine?: Integer,
 *   endLine: Integer,
 *   lineEnd: string,
 *   postDelimiter: string,
 *   tags: JsdocTag[],
 *   terminal: string,
 *   preterminalLineBreak: string,
 *   type: "JsdocBlock",
 * }} JsdocBlock
 */

/**
 * @param {object} cfg
 * @param {string} cfg.text
 * @param {string} cfg.tag
 * @param {'pipe' | 'plain' | 'prefix' | 'space'} cfg.format
 * @param {string} cfg.namepathOrURL
 * @returns {JsdocInlineTag}
 */
const inlineTagToAST = ({text, tag, format, namepathOrURL}) => ({
  text,
  tag,
  format,
  namepathOrURL,
  type: 'JsdocInlineTag'
});

/**
 * Converts comment parser AST to ESTree format.
 * @param {import('.').JsdocBlockWithInline} jsdoc
 * @param {import('jsdoc-type-pratt-parser').ParseMode} mode
 * @param {object} opts
 * @param {'compact'|'preserve'} [opts.spacing] By default, empty lines are
 *        compacted; set to 'preserve' to preserve empty comment lines.
 * @param {boolean} [opts.throwOnTypeParsingErrors]
 * @returns {JsdocBlock}
 */
const commentParserToESTree = (jsdoc, mode, {
  spacing = 'compact',
  throwOnTypeParsingErrors = false
} = {}) => {
  /**
   * Strips brackets from a tag's `rawType` values and adds `parsedType`
   * @param {JsdocTag} lastTag
   * @returns {void}
   */
  const cleanUpLastTag = (lastTag) => {
    // Strip out `}` that encapsulates and is not part of
    //   the type
    stripEncapsulatingBrackets(lastTag);

    if (lastTag.typeLines.length) {
      stripEncapsulatingBrackets(lastTag.typeLines, true);
    }

    // Remove single empty line description.
    if (lastTag.descriptionLines.length === 1 &&
      lastTag.descriptionLines[0].description === '') {
      lastTag.descriptionLines.length = 0;
    }

    // With even a multiline type now in full, add parsing
    let parsedType = null;

    try {
      parsedType = jsdocTypePrattParse(lastTag.rawType, mode);
    } catch (err) {
      // Ignore
      if (lastTag.rawType && throwOnTypeParsingErrors) {
        /** @type {Error} */ (
          err
        ).message = `Tag @${lastTag.tag} with raw type ` +
          `\`${lastTag.rawType}\` had parsing error: ${
            /** @type {Error} */ (err).message}`;
        throw err;
      }
    }

    lastTag.parsedType = parsedType;
  };

  const {source, inlineTags: blockInlineTags} = jsdoc;

  const {tokens: {
    delimiter: delimiterRoot,
    lineEnd: lineEndRoot,
    postDelimiter: postDelimiterRoot,
    start: startRoot,
    end: endRoot
  }} = source[0];

  const endLine = source.length - 1;

  /** @type {JsdocBlock} */
  const ast = {
    delimiter: delimiterRoot,
    delimiterLineBreak: '\n',
    description: '',

    descriptionLines: [],
    inlineTags: blockInlineTags.map((t) => inlineTagToAST(t)),

    initial: startRoot,
    tags: [],
    // `terminal` will be overwritten if there are other entries
    terminal: endRoot,
    preterminalLineBreak: '\n',
    hasPreterminalDescription: 0,
    endLine,
    postDelimiter: postDelimiterRoot,
    lineEnd: lineEndRoot,

    type: 'JsdocBlock'
  };

  /**
   * @type {JsdocTag[]}
   */
  const tags = [];

  /** @type {Integer|undefined} */
  let lastDescriptionLine;

  /** @type {JsdocTag|null} */
  let lastTag = null;

  // Tracks when first valid tag description line is seen.
  let tagDescriptionSeen = false;

  let descLineStateOpen = true;

  source.forEach((info, idx) => {
    const {tokens} = info;
    const {
      delimiter,
      description,
      postDelimiter,
      start: initial,
      tag,
      end,
      type: rawType
    } = tokens;

    if (!tag && description && descLineStateOpen) {
      if (ast.descriptionStartLine === undefined) {
        ast.descriptionStartLine = idx;
      }
      ast.descriptionEndLine = idx;
    }

    if (tag || end) {
      descLineStateOpen = false;
      if (lastDescriptionLine === undefined) {
        lastDescriptionLine = idx;
      }

      // Clean-up with last tag before end or new tag
      if (lastTag) {
        cleanUpLastTag(lastTag);
      }

      // Stop the iteration when we reach the end
      // but only when there is no tag earlier in the line
      // to still process
      if (end && !tag) {
        ast.terminal = end;

        // Check if there are any description lines and if not then this is a
        // one line comment block.
        const isDelimiterLine = ast.descriptionLines.length === 0 &&
          delimiter === '/**';

        // Remove delimiter line break for one line comments blocks.
        if (isDelimiterLine) {
          ast.delimiterLineBreak = '';
        }

        if (description) {
          // Remove terminal line break at end when description is defined.
          if (ast.terminal === '*/') {
            ast.preterminalLineBreak = '';
          }

          if (lastTag) {
            ast.hasPreterminalTagDescription = 1;
          } else {
            ast.hasPreterminalDescription = 1;
          }

          const holder = lastTag || ast;
          holder.description += (holder.description ? '\n' : '') + description;

          // Do not include `delimiter` / `postDelimiter` for opening
          // delimiter line.

          holder.descriptionLines.push({
            delimiter: isDelimiterLine ? '' : delimiter,
            description,
            postDelimiter: isDelimiterLine ? '' : postDelimiter,
            initial,
            type: 'JsdocDescriptionLine'
          });
        }
        return;
      }

      const {
        // eslint-disable-next-line no-unused-vars -- Discarding
        end: ed,
        delimiter: de,
        postDelimiter: pd,
        start: init,
        ...tkns
      } = tokens;

      if (!tokens.name) {
        let i = 1;
        while (source[idx + i]) {
          const {tokens: {
            name,
            postName,
            postType,
            tag: tg
          }} = source[idx + i];
          if (tg) {
            break;
          }
          if (name) {
            tkns.postType = postType;
            tkns.name = name;
            tkns.postName = postName;
            break;
          }
          i++;
        }
      }

      /**
       * @type {JsdocInlineTag[]}
       */
      let tagInlineTags = [];
      if (tag) {
        // Assuming the tags from `source` are in the same order as `jsdoc.tags`
        // we can use the `tags` length as index into the parser result tags.
        tagInlineTags =
          /**
           * @type {import('comment-parser').Spec & {
           *   inlineTags: JsdocInlineTagNoType[]
           * }}
           */ (
            jsdoc.tags[tags.length]
          ).inlineTags.map(
            (t) => inlineTagToAST(t)
          );
      }

      /** @type {JsdocTag} */
      const tagObj = {
        ...tkns,
        initial: endLine ? init : '',
        postDelimiter: lastDescriptionLine ? pd : '',
        delimiter: lastDescriptionLine ? de : '',
        descriptionLines: [],
        inlineTags: tagInlineTags,
        parsedType: null,
        rawType: '',
        type: 'JsdocTag',
        typeLines: []
      };
      tagObj.tag = tagObj.tag.replace(/^@/u, '');

      lastTag = tagObj;
      tagDescriptionSeen = false;

      tags.push(tagObj);
    }

    if (rawType) {
      // Will strip rawType brackets after this tag
      /** @type {JsdocTag} */ (lastTag).typeLines.push(
        /** @type {JsdocTag} */ (lastTag).typeLines.length
          ? {
            delimiter,
            postDelimiter,
            rawType,
            initial,
            type: 'JsdocTypeLine'
          }
          : {
            delimiter: '',
            postDelimiter: '',
            rawType,
            initial: '',
            type: 'JsdocTypeLine'
          }
      );
      /** @type {JsdocTag} */ (lastTag).rawType += /** @type {JsdocTag} */ (
        lastTag
      ).rawType
        ? '\n' + rawType
        : rawType;
    }

    // In `compact` mode skip processing if `description` is an empty string
    // unless lastTag is being processed.
    //
    // In `preserve` mode process when `description` is not the `empty string
    // or the `delimiter` is not `/**` ensuring empty lines are preserved.
    if (((spacing === 'compact' && description) || lastTag) ||
        (spacing === 'preserve' && (description || delimiter !== '/**'))) {
      const holder = lastTag || ast;

      // Check if there are any description lines and if not then this is a
      // multi-line comment block with description on 0th line. Treat
      // `delimiter` / `postDelimiter` / `initial` as being on a new line.
      const isDelimiterLine = holder.descriptionLines.length === 0 &&
        delimiter === '/**';

      // Remove delimiter line break for one line comments blocks.
      if (isDelimiterLine) {
        ast.delimiterLineBreak = '';
      }

      // Track when the first description line is seen to avoid adding empty
      // description lines for tag type lines.
      tagDescriptionSeen ||= Boolean(lastTag &&
        (rawType === '' || rawType?.endsWith('}')));

      if (lastTag) {
        if (tagDescriptionSeen) {
          // The first tag description line is a continuation after type /
          // name parsing.
          const isFirstDescriptionLine = holder.descriptionLines.length === 0;

          // For `compact` spacing must allow through first description line.
          if ((spacing === 'compact' &&
              (description || isFirstDescriptionLine)) ||
              spacing === 'preserve') {
            holder.descriptionLines.push({
              delimiter: isFirstDescriptionLine ? '' : delimiter,
              description,
              postDelimiter: isFirstDescriptionLine ? '' : postDelimiter,
              initial: isFirstDescriptionLine ? '' : initial,
              type: 'JsdocDescriptionLine'
            });
          }
        }
      } else {
        holder.descriptionLines.push({
          delimiter: isDelimiterLine ? '' : delimiter,
          description,
          postDelimiter: isDelimiterLine ? '' : postDelimiter,
          initial: isDelimiterLine ? `` : initial,
          type: 'JsdocDescriptionLine'
        });
      }

      if (!tag) {
        if (lastTag) {
          // For `compact` spacing must filter out any empty description lines
          // after the initial `holder.description` has content.
          if (tagDescriptionSeen && !(spacing === 'compact' &&
            holder.description && description === '')) {
            holder.description += !holder.description
              ? description
              : '\n' + description;
          }
        } else {
          holder.description += !holder.description
            ? description
            : '\n' + description;
        }
      }
    }

    // Clean-up where last line itself has tag content
    if (end && tag) {
      ast.terminal = end;
      ast.hasPreterminalTagDescription = 1;

      // Remove terminal line break at end when tag is defined on last line.
      if (ast.terminal === '*/') {
        ast.preterminalLineBreak = '';
      }

      cleanUpLastTag(/** @type {JsdocTag} */ (lastTag));
    }
  });

  ast.lastDescriptionLine = lastDescriptionLine;
  ast.tags = tags;

  return ast;
};

const jsdocVisitorKeys = {
  JsdocBlock: ['descriptionLines', 'tags', 'inlineTags'],
  JsdocDescriptionLine: [],
  JsdocTypeLine: [],
  JsdocTag: ['parsedType', 'typeLines', 'descriptionLines', 'inlineTags'],
  JsdocInlineTag: []
};

export {commentParserToESTree, jsdocVisitorKeys};
