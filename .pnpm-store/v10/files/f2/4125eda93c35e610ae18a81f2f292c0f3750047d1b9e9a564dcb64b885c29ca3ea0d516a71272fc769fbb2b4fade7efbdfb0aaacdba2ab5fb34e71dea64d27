/**
 * @typedef {import('./commentParserToESTree').JsdocInlineTagNoType & {
 *   start: number,
 *   end: number,
 * }} InlineTag
 */

/**
 * @typedef {import('comment-parser').Spec & {
 *   line?: import('./commentParserToESTree').Integer,
 *   inlineTags: (import('./commentParserToESTree').JsdocInlineTagNoType & {
 *     line?: import('./commentParserToESTree').Integer
 *   })[]
 * }} JsdocTagWithInline
 */

/**
 * Expands on comment-parser's `Block` interface.
 * @typedef {{
 *   description: string,
 *   source: import('comment-parser').Line[],
 *   problems: import('comment-parser').Problem[],
 *   tags: JsdocTagWithInline[],
 *   inlineTags: (import('./commentParserToESTree').JsdocInlineTagNoType & {
 *     line?: import('./commentParserToESTree').Integer
 *   })[]
 * }} JsdocBlockWithInline
 */

/**
 * @typedef {{preferRawType?: boolean}} ESTreeToStringOptions
 */

/**
 * @callback CommentHandler
 * @param {string} commentSelector
 * @param {import('.').JsdocBlockWithInline} jsdoc
 * @returns {boolean}
 */

export {visitorKeys as jsdocTypeVisitorKeys} from 'jsdoc-type-pratt-parser';

export * from 'jsdoc-type-pratt-parser';

export * from './commentHandler.js';
export * from './commentParserToESTree.js';
export * from './estreeToString.js';
export * from './jsdoccomment.js';
export * from './parseComment.js';
export * from './parseInlineTags.js';
