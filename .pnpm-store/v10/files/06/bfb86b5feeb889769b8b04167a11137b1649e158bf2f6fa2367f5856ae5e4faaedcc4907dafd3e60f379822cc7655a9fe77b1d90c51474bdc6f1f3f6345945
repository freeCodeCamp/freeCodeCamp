'use strict';

var jsdocTypePrattParser = require('jsdoc-type-pratt-parser');
var esquery = require('esquery');
var commentParser = require('comment-parser');

/**
 * Removes initial and ending brackets from `rawType`
 * @param {JsdocTypeLine[]|JsdocTag} container
 * @param {boolean} [isArr]
 * @returns {void}
 */
const stripEncapsulatingBrackets = (container, isArr) => {
  if (isArr) {
    const firstItem = /** @type {JsdocTypeLine[]} */container[0];
    firstItem.rawType = firstItem.rawType.replace(/^\{/u, '');
    const lastItem = /** @type {JsdocTypeLine} */
    /** @type {JsdocTypeLine[]} */container.at(-1);
    lastItem.rawType = lastItem.rawType.replace(/\}$/u, '');
    return;
  }
  /** @type {JsdocTag} */
  container.rawType = /** @type {JsdocTag} */container.rawType.replace(/^\{/u, '').replace(/\}$/u, '');
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
const inlineTagToAST = ({
  text,
  tag,
  format,
  namepathOrURL
}) => ({
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
  const cleanUpLastTag = lastTag => {
    // Strip out `}` that encapsulates and is not part of
    //   the type
    stripEncapsulatingBrackets(lastTag);
    if (lastTag.typeLines.length) {
      stripEncapsulatingBrackets(lastTag.typeLines, true);
    }

    // Remove single empty line description.
    if (lastTag.descriptionLines.length === 1 && lastTag.descriptionLines[0].description === '') {
      lastTag.descriptionLines.length = 0;
    }

    // With even a multiline type now in full, add parsing
    let parsedType = null;
    try {
      parsedType = jsdocTypePrattParser.parse(lastTag.rawType, mode);
    } catch (err) {
      // Ignore
      if (lastTag.rawType && throwOnTypeParsingErrors) {
        /** @type {Error} */err.message = `Tag @${lastTag.tag} with raw type ` + `\`${lastTag.rawType}\` had parsing error: ${/** @type {Error} */err.message}`;
        throw err;
      }
    }
    lastTag.parsedType = parsedType;
  };
  const {
    source,
    inlineTags: blockInlineTags
  } = jsdoc;
  const {
    tokens: {
      delimiter: delimiterRoot,
      lineEnd: lineEndRoot,
      postDelimiter: postDelimiterRoot,
      start: startRoot,
      end: endRoot
    }
  } = source[0];
  const endLine = source.length - 1;

  /** @type {JsdocBlock} */
  const ast = {
    delimiter: delimiterRoot,
    delimiterLineBreak: '\n',
    description: '',
    descriptionLines: [],
    inlineTags: blockInlineTags.map(t => inlineTagToAST(t)),
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
    const {
      tokens
    } = info;
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
        const isDelimiterLine = ast.descriptionLines.length === 0 && delimiter === '/**';

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
          const {
            tokens: {
              name,
              postName,
              postType,
              tag: tg
            }
          } = source[idx + i];
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
         */
        jsdoc.tags[tags.length].inlineTags.map(t => inlineTagToAST(t));
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
      /** @type {JsdocTag} */
      lastTag.typeLines.push( /** @type {JsdocTag} */lastTag.typeLines.length ? {
        delimiter,
        postDelimiter,
        rawType,
        initial,
        type: 'JsdocTypeLine'
      } : {
        delimiter: '',
        postDelimiter: '',
        rawType,
        initial: '',
        type: 'JsdocTypeLine'
      });
      /** @type {JsdocTag} */
      lastTag.rawType += /** @type {JsdocTag} */lastTag.rawType ? '\n' + rawType : rawType;
    }

    // In `compact` mode skip processing if `description` is an empty string
    // unless lastTag is being processed.
    //
    // In `preserve` mode process when `description` is not the `empty string
    // or the `delimiter` is not `/**` ensuring empty lines are preserved.
    if (spacing === 'compact' && description || lastTag || spacing === 'preserve' && (description || delimiter !== '/**')) {
      const holder = lastTag || ast;

      // Check if there are any description lines and if not then this is a
      // multi-line comment block with description on 0th line. Treat
      // `delimiter` / `postDelimiter` / `initial` as being on a new line.
      const isDelimiterLine = holder.descriptionLines.length === 0 && delimiter === '/**';

      // Remove delimiter line break for one line comments blocks.
      if (isDelimiterLine) {
        ast.delimiterLineBreak = '';
      }

      // Track when the first description line is seen to avoid adding empty
      // description lines for tag type lines.
      tagDescriptionSeen || (tagDescriptionSeen = Boolean(lastTag && (rawType === '' || (rawType === null || rawType === void 0 ? void 0 : rawType.endsWith('}')))));
      if (lastTag) {
        if (tagDescriptionSeen) {
          // The first tag description line is a continuation after type /
          // name parsing.
          const isFirstDescriptionLine = holder.descriptionLines.length === 0;

          // For `compact` spacing must allow through first description line.
          if (spacing === 'compact' && (description || isFirstDescriptionLine) || spacing === 'preserve') {
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
          if (tagDescriptionSeen && !(spacing === 'compact' && holder.description && description === '')) {
            holder.description += !holder.description ? description : '\n' + description;
          }
        } else {
          holder.description += !holder.description ? description : '\n' + description;
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
      cleanUpLastTag( /** @type {JsdocTag} */lastTag);
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

/**
 * @param {{[name: string]: any}} settings
 * @returns {import('.').CommentHandler}
 */
const commentHandler = settings => {
  /**
   * @type {import('.').CommentHandler}
   */
  return (commentSelector, jsdoc) => {
    const {
      mode
    } = settings;
    const selector = esquery.parse(commentSelector);
    const ast = commentParserToESTree(jsdoc, mode);
    const _ast = /** @type {unknown} */ast;
    return esquery.matches( /** @type {import('estree').Node} */
    _ast, selector, undefined, {
      visitorKeys: {
        ...jsdocTypePrattParser.visitorKeys,
        ...jsdocVisitorKeys
      }
    });
  };
};

/** @type {Record<string, Function>} */
const stringifiers = {
  JsdocBlock,
  /**
   * @param {import('./commentParserToESTree').JsdocDescriptionLine} node
   * @returns {string}
   */
  JsdocDescriptionLine({
    initial,
    delimiter,
    postDelimiter,
    description
  }) {
    return `${initial}${delimiter}${postDelimiter}${description}`;
  },
  /**
   * @param {import('./commentParserToESTree').JsdocTypeLine} node
   * @returns {string}
   */
  JsdocTypeLine({
    initial,
    delimiter,
    postDelimiter,
    rawType
  }) {
    return `${initial}${delimiter}${postDelimiter}${rawType}`;
  },
  /**
   * @param {import('./commentParserToESTree').JsdocInlineTag} node
   */
  JsdocInlineTag({
    format,
    namepathOrURL,
    tag,
    text
  }) {
    return format === 'pipe' ? `{@${tag} ${namepathOrURL}|${text}}` : format === 'plain' ? `{@${tag} ${namepathOrURL}}` : format === 'prefix' ? `[${text}]{@${tag} ${namepathOrURL}}`
    // "space"
    : `{@${tag} ${namepathOrURL} ${text}}`;
  },
  JsdocTag
};

/**
 * @todo convert for use by escodegen (until may be patched to support
 *   custom entries?).
 * @param {import('./commentParserToESTree').JsdocBlock|
 *   import('./commentParserToESTree').JsdocDescriptionLine|
 *   import('./commentParserToESTree').JsdocTypeLine|
 *   import('./commentParserToESTree').JsdocTag|
 *   import('./commentParserToESTree').JsdocInlineTag|
 *   import('jsdoc-type-pratt-parser').RootResult
 * } node
 * @param {import('.').ESTreeToStringOptions} opts
 * @throws {Error}
 * @returns {string}
 */
function estreeToString(node, opts = {}) {
  if (Object.prototype.hasOwnProperty.call(stringifiers, node.type)) {
    return stringifiers[
    /**
     * @type {import('./commentParserToESTree').JsdocBlock|
     *   import('./commentParserToESTree').JsdocDescriptionLine|
     *   import('./commentParserToESTree').JsdocTypeLine|
     *   import('./commentParserToESTree').JsdocTag}
     */
    node.type](node, opts);
  }

  // We use raw type instead but it is a key as other apps may wish to traverse
  if (node.type.startsWith('JsdocType')) {
    return opts.preferRawType ? '' : `{${jsdocTypePrattParser.stringify( /** @type {import('jsdoc-type-pratt-parser').RootResult} */
    node)}}`;
  }
  throw new Error(`Unhandled node type: ${node.type}`);
}

/**
 * @param {import('./commentParserToESTree').JsdocBlock} node
 * @param {import('.').ESTreeToStringOptions} opts
 * @returns {string}
 */
function JsdocBlock(node, opts) {
  const {
    delimiter,
    delimiterLineBreak,
    descriptionLines,
    initial,
    postDelimiter,
    preterminalLineBreak,
    tags,
    terminal
  } = node;
  const terminalPrepend = preterminalLineBreak !== '' ? `${preterminalLineBreak}${initial} ` : '';
  let result = `${initial}${delimiter}${postDelimiter}${delimiterLineBreak}`;
  for (let i = 0; i < descriptionLines.length; i++) {
    result += estreeToString(descriptionLines[i]);
    if (i !== descriptionLines.length - 1 || tags.length) {
      result += '\n';
    }
  }
  for (let i = 0; i < tags.length; i++) {
    result += estreeToString(tags[i], opts);
    if (i !== tags.length - 1) {
      result += '\n';
    }
  }
  result += `${terminalPrepend}${terminal}`;
  return result;
}

/**
 * @param {import('./commentParserToESTree').JsdocTag} node
 * @param {import('.').ESTreeToStringOptions} opts
 * @returns {string}
 */
function JsdocTag(node, opts) {
  const {
    delimiter,
    descriptionLines,
    initial,
    name,
    parsedType,
    postDelimiter,
    postName,
    postTag,
    postType,
    tag,
    typeLines
  } = node;
  let result = `${initial}${delimiter}${postDelimiter}@${tag}${postTag}`;

  // Could do `rawType` but may have been changed; could also do
  //   `typeLines` but not as likely to be changed
  // parsedType
  // Comment this out later in favor of `parsedType`
  // We can't use raw `typeLines` as first argument has delimiter on it
  if (opts.preferRawType || !parsedType) {
    if (typeLines.length) {
      result += '{';
      for (let i = 0; i < typeLines.length; i++) {
        result += estreeToString(typeLines[i]);
        if (i !== typeLines.length - 1) {
          result += '\n';
        }
      }
      result += '}';
    }
  } else if (parsedType !== null && parsedType !== void 0 && parsedType.type.startsWith('JsdocType')) {
    result += `{${jsdocTypePrattParser.stringify( /** @type {import('jsdoc-type-pratt-parser').RootResult} */
    parsedType)}}`;
  }
  result += name ? `${postType}${name}${postName}` : postType;
  for (let i = 0; i < descriptionLines.length; i++) {
    const descriptionLine = descriptionLines[i];
    result += estreeToString(descriptionLine);
    if (i !== descriptionLines.length - 1) {
      result += '\n';
    }
  }
  return result;
}

/**
 * Obtained originally from {@link https://github.com/eslint/eslint/blob/master/lib/util/source-code.js#L313}.
 *
 * @license MIT
 */

/**
 * @typedef {import('eslint').AST.Token | import('estree').Comment | {
 *   type: import('eslint').AST.TokenType|"Line"|"Block"|"Shebang",
 *   range: [number, number],
 *   value: string
 * }} Token
 */

/**
 * @typedef {import('eslint').Rule.Node|
 *   import('@typescript-eslint/types').TSESTree.Node} ESLintOrTSNode
 */

/**
 * @typedef {number} int
 */

/**
 * Checks if the given token is a comment token or not.
 *
 * @param {Token} token - The token to check.
 * @returns {boolean} `true` if the token is a comment token.
 */
const isCommentToken = token => {
  return token.type === 'Line' || token.type === 'Block' || token.type === 'Shebang';
};

/**
 * @param {(ESLintOrTSNode|import('estree').Comment) & {
 *   declaration?: any,
 *   decorators?: any[],
 *   parent?: import('eslint').Rule.Node & {
 *     decorators?: any[]
 *   }
 * }} node
 * @returns {import('@typescript-eslint/types').TSESTree.Decorator|undefined}
 */
const getDecorator = node => {
  var _node$declaration, _node$decorators, _node$parent;
  return (node === null || node === void 0 || (_node$declaration = node.declaration) === null || _node$declaration === void 0 || (_node$declaration = _node$declaration.decorators) === null || _node$declaration === void 0 ? void 0 : _node$declaration[0]) || (node === null || node === void 0 || (_node$decorators = node.decorators) === null || _node$decorators === void 0 ? void 0 : _node$decorators[0]) || (node === null || node === void 0 || (_node$parent = node.parent) === null || _node$parent === void 0 || (_node$parent = _node$parent.decorators) === null || _node$parent === void 0 ? void 0 : _node$parent[0]);
};

/**
 * Check to see if it is a ES6 export declaration.
 *
 * @param {ESLintOrTSNode} astNode An AST node.
 * @returns {boolean} whether the given node represents an export declaration.
 * @private
 */
const looksLikeExport = function (astNode) {
  return astNode.type === 'ExportDefaultDeclaration' || astNode.type === 'ExportNamedDeclaration' || astNode.type === 'ExportAllDeclaration' || astNode.type === 'ExportSpecifier';
};

/**
 * @param {ESLintOrTSNode} astNode
 * @returns {ESLintOrTSNode}
 */
const getTSFunctionComment = function (astNode) {
  const {
    parent
  } = astNode;
  /* v8 ignore next 3 */
  if (!parent) {
    return astNode;
  }
  const grandparent = parent.parent;
  /* v8 ignore next 3 */
  if (!grandparent) {
    return astNode;
  }
  const greatGrandparent = grandparent.parent;
  const greatGreatGrandparent = greatGrandparent && greatGrandparent.parent;

  /* v8 ignore next 3 */
  if ( /** @type {ESLintOrTSNode} */parent.type !== 'TSTypeAnnotation') {
    return astNode;
  }
  switch ( /** @type {ESLintOrTSNode} */grandparent.type) {
    // @ts-expect-error -- For `ClassProperty`.
    case 'PropertyDefinition':
    case 'ClassProperty':
    case 'TSDeclareFunction':
    case 'TSMethodSignature':
    case 'TSPropertySignature':
      return grandparent;
    case 'ArrowFunctionExpression':
      /* v8 ignore next 3 */
      if (!greatGrandparent) {
        return astNode;
      }
      if (greatGrandparent.type === 'VariableDeclarator'

      // && greatGreatGrandparent.parent.type === 'VariableDeclaration'
      ) {
        /* v8 ignore next 3 */
        if (!greatGreatGrandparent || !greatGreatGrandparent.parent) {
          return astNode;
        }
        return greatGreatGrandparent.parent;
      }
      /* v8 ignore next */
      return astNode;
    case 'FunctionExpression':
      /* v8 ignore next 3 */
      if (!greatGreatGrandparent) {
        return astNode;
      }
      if (greatGrandparent.type === 'MethodDefinition') {
        return greatGrandparent;
      }

    // Fallthrough
    default:
      /* v8 ignore next 3 */
      if (grandparent.type !== 'Identifier') {
        return astNode;
      }
  }

  /* v8 ignore next 3 */
  if (!greatGreatGrandparent) {
    return astNode;
  }
  switch (greatGrandparent.type) {
    case 'ArrowFunctionExpression':
      if (greatGreatGrandparent.type === 'VariableDeclarator' && greatGreatGrandparent.parent.type === 'VariableDeclaration') {
        return greatGreatGrandparent.parent;
      }
      return astNode;
    case 'FunctionDeclaration':
      return greatGrandparent;
    case 'VariableDeclarator':
      if (greatGreatGrandparent.type === 'VariableDeclaration') {
        return greatGreatGrandparent;
      }
    /* v8 ignore next 2 */
    // Fallthrough
    default:
      /* v8 ignore next 3 */
      return astNode;
  }
};
const invokedExpression = new Set(['CallExpression', 'OptionalCallExpression', 'NewExpression']);
const allowableCommentNode = new Set(['AssignmentPattern', 'VariableDeclaration', 'ExpressionStatement', 'MethodDefinition', 'Property', 'ObjectProperty', 'ClassProperty', 'PropertyDefinition', 'ExportDefaultDeclaration', 'ReturnStatement']);

/**
 * Reduces the provided node to the appropriate node for evaluating
 * JSDoc comment status.
 *
 * @param {ESLintOrTSNode} node An AST node.
 * @param {import('eslint').SourceCode} sourceCode The ESLint SourceCode.
 * @returns {ESLintOrTSNode} The AST node that
 *   can be evaluated for appropriate JSDoc comments.
 */
const getReducedASTNode = function (node, sourceCode) {
  let {
    parent
  } = node;
  switch ( /** @type {ESLintOrTSNode} */node.type) {
    case 'TSFunctionType':
      return getTSFunctionComment(node);
    case 'TSInterfaceDeclaration':
    case 'TSTypeAliasDeclaration':
    case 'TSEnumDeclaration':
    case 'ClassDeclaration':
    case 'FunctionDeclaration':
      /* v8 ignore next 3 */
      if (!parent) {
        return node;
      }
      return looksLikeExport(parent) ? parent : node;
    case 'TSDeclareFunction':
    case 'ClassExpression':
    case 'ObjectExpression':
    case 'ArrowFunctionExpression':
    case 'TSEmptyBodyFunctionExpression':
    case 'FunctionExpression':
      /* v8 ignore next 3 */
      if (!parent) {
        return node;
      }
      if (!invokedExpression.has(parent.type)) {
        /**
         * @type {ESLintOrTSNode|Token|null}
         */
        let token = node;
        do {
          token = sourceCode.getTokenBefore( /** @type {import('eslint').Rule.Node|import('eslint').AST.Token} */
          token, {
            includeComments: true
          });
        } while (token && token.type === 'Punctuator' && token.value === '(');
        if (token && token.type === 'Block') {
          return node;
        }
        if (sourceCode.getCommentsBefore( /** @type {import('eslint').Rule.Node} */
        node).length) {
          return node;
        }
        while (!sourceCode.getCommentsBefore( /** @type {import('eslint').Rule.Node} */
        parent).length && !/Function/u.test(parent.type) && !allowableCommentNode.has(parent.type)) {
          ({
            parent
          } = parent);
          if (!parent) {
            break;
          }
        }
        if (parent && parent.type !== 'FunctionDeclaration' && parent.type !== 'Program') {
          if (parent.parent && parent.parent.type === 'ExportNamedDeclaration') {
            return parent.parent;
          }
          return parent;
        }
      }
      return node;
    default:
      return node;
  }
};

/**
 * Checks for the presence of a JSDoc comment for the given node and returns it.
 *
 * @param {ESLintOrTSNode} astNode The AST node to get
 *   the comment for.
 * @param {import('eslint').SourceCode} sourceCode
 * @param {{maxLines: int, minLines: int, [name: string]: any}} settings
 * @param {{nonJSDoc?: boolean}} [opts]
 * @returns {Token|null} The Block comment token containing the JSDoc comment
 *    for the given node or null if not found.
 */
const findJSDocComment = (astNode, sourceCode, settings, opts = {}) => {
  var _parenthesisToken, _parenthesisToken2;
  const {
    nonJSDoc
  } = opts;
  const {
    minLines,
    maxLines
  } = settings;

  /** @type {ESLintOrTSNode|import('estree').Comment} */
  let currentNode = astNode;
  let tokenBefore = null;
  let parenthesisToken = null;
  while (currentNode) {
    const decorator = getDecorator( /** @type {import('eslint').Rule.Node} */
    currentNode);
    if (decorator) {
      const dec = /** @type {unknown} */decorator;
      currentNode = /** @type {import('eslint').Rule.Node} */dec;
    }
    tokenBefore = sourceCode.getTokenBefore( /** @type {import('eslint').Rule.Node} */
    currentNode, {
      includeComments: true
    });
    if (tokenBefore && tokenBefore.type === 'Punctuator' && tokenBefore.value === '(') {
      parenthesisToken = tokenBefore;
      [tokenBefore] = sourceCode.getTokensBefore( /** @type {import('eslint').Rule.Node} */
      currentNode, {
        count: 2,
        includeComments: true
      });
    }
    if (!tokenBefore || !isCommentToken(tokenBefore)) {
      return null;
    }
    if (!nonJSDoc && tokenBefore.type === 'Line') {
      currentNode = tokenBefore;
      continue;
    }
    break;
  }

  /* v8 ignore next 3 */
  if (!tokenBefore || !currentNode.loc || !tokenBefore.loc) {
    return null;
  }
  if ((nonJSDoc && (tokenBefore.type !== 'Block' || !/^\*\s/u.test(tokenBefore.value)) || !nonJSDoc && tokenBefore.type === 'Block' && /^\*\s/u.test(tokenBefore.value)) && currentNode.loc.start.line - ( /** @type {import('eslint').AST.Token} */(_parenthesisToken = parenthesisToken) !== null && _parenthesisToken !== void 0 ? _parenthesisToken : tokenBefore).loc.end.line >= minLines && currentNode.loc.start.line - ( /** @type {import('eslint').AST.Token} */(_parenthesisToken2 = parenthesisToken) !== null && _parenthesisToken2 !== void 0 ? _parenthesisToken2 : tokenBefore).loc.end.line <= maxLines) {
    return tokenBefore;
  }
  return null;
};

/**
 * Retrieves the JSDoc comment for a given node.
 *
 * @param {import('eslint').SourceCode} sourceCode The ESLint SourceCode
 * @param {import('eslint').Rule.Node} node The AST node to get
 *   the comment for.
 * @param {{maxLines: int, minLines: int, [name: string]: any}} settings The
 *   settings in context
 * @returns {Token|null} The Block comment
 *   token containing the JSDoc comment for the given node or
 *   null if not found.
 * @public
 */
const getJSDocComment = function (sourceCode, node, settings) {
  const reducedNode = getReducedASTNode(node, sourceCode);
  return findJSDocComment(reducedNode, sourceCode, settings);
};

/**
 * Retrieves the comment preceding a given node.
 *
 * @param {import('eslint').SourceCode} sourceCode The ESLint SourceCode
 * @param {ESLintOrTSNode} node The AST node to get
 *   the comment for.
 * @param {{maxLines: int, minLines: int, [name: string]: any}} settings The
 *   settings in context
 * @returns {Token|null} The Block comment
 *   token containing the JSDoc comment for the given node or
 *   null if not found.
 * @public
 */
const getNonJsdocComment = function (sourceCode, node, settings) {
  const reducedNode = getReducedASTNode(node, sourceCode);
  return findJSDocComment(reducedNode, sourceCode, settings, {
    nonJSDoc: true
  });
};

/**
  * @param {ESLintOrTSNode|import('eslint').AST.Token|
  *   import('estree').Comment
  * } nodeA The AST node or token to compare
  * @param {ESLintOrTSNode|import('eslint').AST.Token|
  *   import('estree').Comment} nodeB The
  *   AST node or token to compare
  */
const compareLocEndToStart = (nodeA, nodeB) => {
  var _nodeA$loc$end$line, _nodeA$loc, _nodeB$loc$start$line, _nodeB$loc;
  /* v8 ignore next */
  return ((_nodeA$loc$end$line = (_nodeA$loc = nodeA.loc) === null || _nodeA$loc === void 0 ? void 0 : _nodeA$loc.end.line) !== null && _nodeA$loc$end$line !== void 0 ? _nodeA$loc$end$line : 0) === ((_nodeB$loc$start$line = (_nodeB$loc = nodeB.loc) === null || _nodeB$loc === void 0 ? void 0 : _nodeB$loc.start.line) !== null && _nodeB$loc$start$line !== void 0 ? _nodeB$loc$start$line : 0);
};

/**
 * Checks for the presence of a comment following the given node and
 * returns it.
 *
 * This method is experimental.
 *
 * @param {import('eslint').SourceCode} sourceCode
 * @param {ESLintOrTSNode} astNode The AST node to get
 *   the comment for.
 * @returns {Token|null} The comment token containing the comment
 *    for the given node or null if not found.
 */
const getFollowingComment = function (sourceCode, astNode) {
  /**
   * @param {ESLintOrTSNode} node The
   *   AST node to get the comment for.
   */
  const getTokensAfterIgnoringSemis = node => {
    let tokenAfter = sourceCode.getTokenAfter( /** @type {import('eslint').Rule.Node} */
    node, {
      includeComments: true
    });
    while (tokenAfter && tokenAfter.type === 'Punctuator' &&
    // tokenAfter.value === ')' // Don't apparently need to ignore
    tokenAfter.value === ';') {
      [tokenAfter] = sourceCode.getTokensAfter(tokenAfter, {
        includeComments: true
      });
    }
    return tokenAfter;
  };

  /**
   * @param {ESLintOrTSNode} node The
   *   AST node to get the comment for.
   */
  const tokenAfterIgnoringSemis = node => {
    const tokenAfter = getTokensAfterIgnoringSemis(node);
    return tokenAfter && isCommentToken(tokenAfter) && compareLocEndToStart(node, tokenAfter) ? tokenAfter : null;
  };
  let tokenAfter = tokenAfterIgnoringSemis(astNode);
  if (!tokenAfter) {
    switch (astNode.type) {
      case 'FunctionDeclaration':
        tokenAfter = tokenAfterIgnoringSemis( /** @type {ESLintOrTSNode} */
        astNode.body);
        break;
      case 'ExpressionStatement':
        tokenAfter = tokenAfterIgnoringSemis( /** @type {ESLintOrTSNode} */
        astNode.expression);
        break;
    }
  }
  return tokenAfter;
};

/**
 * @param {RegExpMatchArray & {
 *   indices: {
 *     groups: {
 *       [key: string]: [number, number]
 *     }
 *   }
 *   groups: {[key: string]: string}
 * }} match An inline tag regexp match.
 * @returns {'pipe' | 'plain' | 'prefix' | 'space'}
 */
function determineFormat(match) {
  const {
    separator,
    text
  } = match.groups;
  const [, textEnd] = match.indices.groups.text;
  const [tagStart] = match.indices.groups.tag;
  if (!text) {
    return 'plain';
  } else if (separator === '|') {
    return 'pipe';
  } else if (textEnd < tagStart) {
    return 'prefix';
  }
  return 'space';
}

/**
 * Extracts inline tags from a description.
 * @param {string} description
 * @returns {import('.').InlineTag[]} Array of inline tags from the description.
 */
function parseDescription(description) {
  /** @type {import('.').InlineTag[]} */
  const result = [];

  // This could have been expressed in a single pattern,
  // but having two avoids a potentially exponential time regex.

  const prefixedTextPattern = new RegExp(/(?:\[(?<text>[^\]]+)\])\{@(?<tag>[^}\s]+)\s?(?<namepathOrURL>[^}\s|]*)\}/gu, 'gud');
  // The pattern used to match for text after tag uses a negative lookbehind
  // on the ']' char to avoid matching the prefixed case too.
  const suffixedAfterPattern = new RegExp(/(?<!\])\{@(?<tag>[^}\s]+)\s?(?<namepathOrURL>[^}\s|]*)\s*(?<separator>[\s|])?\s*(?<text>[^}]*)\}/gu, 'gud');
  const matches = [...description.matchAll(prefixedTextPattern), ...description.matchAll(suffixedAfterPattern)];
  for (const mtch of matches) {
    const match =
    /**
    * @type {RegExpMatchArray & {
    *   indices: {
    *     groups: {
    *       [key: string]: [number, number]
    *     }
    *   }
    *   groups: {[key: string]: string}
    * }}
    */
    mtch;
    const {
      tag,
      namepathOrURL,
      text
    } = match.groups;
    const [start, end] = match.indices[0];
    const format = determineFormat(match);
    result.push({
      tag,
      namepathOrURL,
      text,
      format,
      start,
      end
    });
  }
  return result;
}

/**
 * Splits the `{@prefix}` from remaining `Spec.lines[].token.description`
 * into the `inlineTags` tokens, and populates `spec.inlineTags`
 * @param {import('comment-parser').Block} block
 * @returns {import('.').JsdocBlockWithInline}
 */
function parseInlineTags(block) {
  const inlineTags =
  /**
   * @type {(import('./commentParserToESTree').JsdocInlineTagNoType & {
   *   line?: import('./commentParserToESTree').Integer
   * })[]}
   */
  parseDescription(block.description);

  /** @type {import('.').JsdocBlockWithInline} */
  block.inlineTags = inlineTags;
  for (const tag of block.tags) {
    /**
     * @type {import('.').JsdocTagWithInline}
     */
    tag.inlineTags = parseDescription(tag.description);
  }
  return (
    /**
     * @type {import('.').JsdocBlockWithInline}
     */
    block
  );
}

/* eslint-disable prefer-named-capture-group -- Temporary */
const {
  name: nameTokenizer,
  tag: tagTokenizer,
  type: typeTokenizer,
  description: descriptionTokenizer
} = commentParser.tokenizers;

/**
 * @param {import('comment-parser').Spec} spec
 * @returns {boolean}
 */
const hasSeeWithLink = spec => {
  return spec.tag === 'see' && /\{@link.+?\}/u.test(spec.source[0].source);
};
const defaultNoTypes = ['default', 'defaultvalue', 'description', 'example', 'file', 'fileoverview', 'license', 'overview', 'see', 'summary'];
const defaultNoNames = ['access', 'author', 'default', 'defaultvalue', 'description', 'example', 'exception', 'file', 'fileoverview', 'kind', 'license', 'overview', 'return', 'returns', 'since', 'summary', 'throws', 'version', 'variation'];
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
  spec => {
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
  spec => {
    if (spec.tag === 'template') {
      // const preWS = spec.postTag;
      const remainder = spec.source[0].tokens.description;
      let pos;
      if (remainder.startsWith('[') && remainder.includes(']')) {
        const endingBracketPos = remainder.indexOf(']');
        pos = remainder.slice(endingBracketPos).search(/(?<![\s,])\s/u);
        if (pos > -1) {
          // Add offset to starting point if space found
          pos += endingBracketPos;
        }
      } else {
        pos = remainder.search(/(?<![\s,])\s/u);
      }
      let name = pos === -1 ? remainder : remainder.slice(0, pos);
      const extra = remainder.slice(pos);
      let postName = '',
        description = '',
        lineEnd = '';
      if (pos > -1) {
        [, postName, description, lineEnd] = /** @type {RegExpMatchArray} */
        extra.match(/(\s*)([^\r]*)(\r)?/u);
      }
      if (optionalBrackets.test(name)) {
        var _name$match;
        name =
        /** @type {string} */
        /** @type {RegExpMatchArray} */
        (_name$match = name.match(optionalBrackets)) === null || _name$match === void 0 || (_name$match = _name$match.groups) === null || _name$match === void 0 ? void 0 : _name$match.name;
        spec.optional = true;
      } else {
        spec.optional = false;
      }
      spec.name = name;
      const {
        tokens
      } = spec.source[0];
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
  spec => {
    return preserveDescriptionTokenizer(spec);
  }];
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
      [block] = commentParser.parse(`${indent}${commentOrNode}`, {
        // @see https://github.com/yavorskiy/comment-parser/issues/21
        tokenizers: getTokenizers()
      });
      break;
    case 'object':
      if (commentOrNode === null) {
        throw new TypeError(`'commentOrNode' is not a string or object.`);
      }

      // Preserve JSDoc block start/end indentation.
      [block] = commentParser.parse(`${indent}/*${commentOrNode.value}*/`, {
        // @see https://github.com/yavorskiy/comment-parser/issues/21
        tokenizers: getTokenizers()
      });
      break;
    default:
      throw new TypeError(`'commentOrNode' is not a string or object.`);
  }
  return parseInlineTags(block);
};

Object.defineProperty(exports, "jsdocTypeVisitorKeys", {
  enumerable: true,
  get: function () { return jsdocTypePrattParser.visitorKeys; }
});
exports.commentHandler = commentHandler;
exports.commentParserToESTree = commentParserToESTree;
exports.defaultNoNames = defaultNoNames;
exports.defaultNoTypes = defaultNoTypes;
exports.estreeToString = estreeToString;
exports.findJSDocComment = findJSDocComment;
exports.getDecorator = getDecorator;
exports.getFollowingComment = getFollowingComment;
exports.getJSDocComment = getJSDocComment;
exports.getNonJsdocComment = getNonJsdocComment;
exports.getReducedASTNode = getReducedASTNode;
exports.getTokenizers = getTokenizers;
exports.hasSeeWithLink = hasSeeWithLink;
exports.jsdocVisitorKeys = jsdocVisitorKeys;
exports.parseComment = parseComment;
exports.parseInlineTags = parseInlineTags;
Object.keys(jsdocTypePrattParser).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return jsdocTypePrattParser[k]; }
  });
});
