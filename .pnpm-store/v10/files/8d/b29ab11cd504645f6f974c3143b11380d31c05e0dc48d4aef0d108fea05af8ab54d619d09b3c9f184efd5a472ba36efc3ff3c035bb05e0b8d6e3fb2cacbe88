import * as comment_parser from 'comment-parser';
import * as jsdoc_type_pratt_parser from 'jsdoc-type-pratt-parser';
export * from 'jsdoc-type-pratt-parser';
export { visitorKeys as jsdocTypeVisitorKeys } from 'jsdoc-type-pratt-parser';
import * as _typescript_eslint_types from '@typescript-eslint/types';
import * as estree from 'estree';
import * as eslint from 'eslint';

type JsdocTypeLine = {
  delimiter: string;
  postDelimiter: string;
  rawType: string;
  initial: string;
  type: 'JsdocTypeLine';
};
type JsdocDescriptionLine = {
  delimiter: string;
  description: string;
  postDelimiter: string;
  initial: string;
  type: 'JsdocDescriptionLine';
};
type JsdocInlineTagNoType = {
  format: 'pipe' | 'plain' | 'prefix' | 'space';
  namepathOrURL: string;
  tag: string;
  text: string;
};
type JsdocInlineTag = JsdocInlineTagNoType & {
  type: 'JsdocInlineTag';
};
type JsdocTag = {
  delimiter: string;
  description: string;
  descriptionLines: JsdocDescriptionLine[];
  initial: string;
  inlineTags: JsdocInlineTag[];
  name: string;
  postDelimiter: string;
  postName: string;
  postTag: string;
  postType: string;
  rawType: string;
  parsedType: jsdoc_type_pratt_parser.RootResult | null;
  tag: string;
  type: 'JsdocTag';
  typeLines: JsdocTypeLine[];
};
type Integer = number;
type JsdocBlock = {
  delimiter: string;
  delimiterLineBreak: string;
  description: string;
  descriptionEndLine?: Integer;
  descriptionLines: JsdocDescriptionLine[];
  descriptionStartLine?: Integer;
  hasPreterminalDescription: 0 | 1;
  hasPreterminalTagDescription?: 1;
  initial: string;
  inlineTags: JsdocInlineTag[];
  lastDescriptionLine?: Integer;
  endLine: Integer;
  lineEnd: string;
  postDelimiter: string;
  tags: JsdocTag[];
  terminal: string;
  preterminalLineBreak: string;
  type: 'JsdocBlock';
};
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
declare function commentParserToESTree(
  jsdoc: JsdocBlockWithInline,
  mode: jsdoc_type_pratt_parser.ParseMode,
  {
    spacing,
    throwOnTypeParsingErrors,
  }?: {
    spacing?: 'compact' | 'preserve';
    throwOnTypeParsingErrors?: boolean;
  },
): JsdocBlock;
declare namespace jsdocVisitorKeys {
  let JsdocBlock: string[];
  let JsdocDescriptionLine: any[];
  let JsdocTypeLine: any[];
  let JsdocTag: string[];
  let JsdocInlineTag: any[];
}

/**
 * @param {{[name: string]: any}} settings
 * @returns {import('.').CommentHandler}
 */
declare function commentHandler(settings: { [name: string]: any }): CommentHandler;

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
declare function estreeToString(
  node:
    | JsdocBlock
    | JsdocDescriptionLine
    | JsdocTypeLine
    | JsdocTag
    | JsdocInlineTag
    | jsdoc_type_pratt_parser.RootResult,
  opts?: ESTreeToStringOptions,
): string;

type Token =
  | eslint.AST.Token
  | estree.Comment
  | {
      type: eslint.AST.TokenType | 'Line' | 'Block' | 'Shebang';
      range: [number, number];
      value: string;
    };
type ESLintOrTSNode = eslint.Rule.Node | _typescript_eslint_types.TSESTree.Node;
type int = number;
/**
 * Reduces the provided node to the appropriate node for evaluating
 * JSDoc comment status.
 *
 * @param {ESLintOrTSNode} node An AST node.
 * @param {import('eslint').SourceCode} sourceCode The ESLint SourceCode.
 * @returns {ESLintOrTSNode} The AST node that
 *   can be evaluated for appropriate JSDoc comments.
 */
declare function getReducedASTNode(node: ESLintOrTSNode, sourceCode: eslint.SourceCode): ESLintOrTSNode;
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
declare function getJSDocComment(
  sourceCode: eslint.SourceCode,
  node: eslint.Rule.Node,
  settings: {
    maxLines: int;
    minLines: int;
    [name: string]: any;
  },
): Token | null;
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
declare function getNonJsdocComment(
  sourceCode: eslint.SourceCode,
  node: ESLintOrTSNode,
  settings: {
    maxLines: int;
    minLines: int;
    [name: string]: any;
  },
): Token | null;
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
declare function getDecorator(
  node: (ESLintOrTSNode | estree.Comment) & {
    declaration?: any;
    decorators?: any[];
    parent?: eslint.Rule.Node & {
      decorators?: any[];
    };
  },
): _typescript_eslint_types.TSESTree.Decorator | undefined;
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
declare function findJSDocComment(
  astNode: ESLintOrTSNode,
  sourceCode: eslint.SourceCode,
  settings: {
    maxLines: int;
    minLines: int;
    [name: string]: any;
  },
  opts?: {
    nonJSDoc?: boolean;
  },
): Token | null;
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
declare function getFollowingComment(sourceCode: eslint.SourceCode, astNode: ESLintOrTSNode): Token | null;

declare function hasSeeWithLink(spec: comment_parser.Spec): boolean;
declare const defaultNoTypes: string[];
declare const defaultNoNames: string[];
/**
 * Can't import `comment-parser/es6/parser/tokenizers/index.js`,
 *   so we redefine here.
 */
type CommentParserTokenizer = (spec: comment_parser.Spec) => comment_parser.Spec;
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
declare function getTokenizers({
  noTypes,
  noNames,
}?: {
  noTypes?: string[];
  noNames?: string[];
}): CommentParserTokenizer[];
/**
 * Accepts a comment token or complete comment string and converts it into
 * `comment-parser` AST.
 * @param {string | {value: string}} commentOrNode
 * @param {string} [indent] Whitespace
 * @returns {import('.').JsdocBlockWithInline}
 */
declare function parseComment(
  commentOrNode:
    | string
    | {
        value: string;
      },
  indent?: string,
): JsdocBlockWithInline;

/**
 * Splits the `{@prefix}` from remaining `Spec.lines[].token.description`
 * into the `inlineTags` tokens, and populates `spec.inlineTags`
 * @param {import('comment-parser').Block} block
 * @returns {import('.').JsdocBlockWithInline}
 */
declare function parseInlineTags(block: comment_parser.Block): JsdocBlockWithInline;

type InlineTag = JsdocInlineTagNoType & {
  start: number;
  end: number;
};
type JsdocTagWithInline = comment_parser.Spec & {
  line?: Integer;
  inlineTags: (JsdocInlineTagNoType & {
    line?: Integer;
  })[];
};
/**
 * Expands on comment-parser's `Block` interface.
 */
type JsdocBlockWithInline = {
  description: string;
  source: comment_parser.Line[];
  problems: comment_parser.Problem[];
  tags: JsdocTagWithInline[];
  inlineTags: (JsdocInlineTagNoType & {
    line?: Integer;
  })[];
};
type ESTreeToStringOptions = {
  preferRawType?: boolean;
};
type CommentHandler = (commentSelector: string, jsdoc: JsdocBlockWithInline) => boolean;

export {
  type CommentHandler,
  type CommentParserTokenizer,
  type ESLintOrTSNode,
  type ESTreeToStringOptions,
  type InlineTag,
  type Integer,
  JsdocBlock,
  type JsdocBlockWithInline,
  JsdocDescriptionLine,
  JsdocInlineTag,
  type JsdocInlineTagNoType,
  JsdocTag,
  type JsdocTagWithInline,
  JsdocTypeLine,
  type Token,
  commentHandler,
  commentParserToESTree,
  defaultNoNames,
  defaultNoTypes,
  estreeToString,
  findJSDocComment,
  getDecorator,
  getFollowingComment,
  getJSDocComment,
  getNonJsdocComment,
  getReducedASTNode,
  getTokenizers,
  hasSeeWithLink,
  type int,
  jsdocVisitorKeys,
  parseComment,
  parseInlineTags,
};
