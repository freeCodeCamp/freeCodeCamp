import { Parser } from './parser/index.js';
export { defaultTreeAdapter } from './tree-adapters/default.js';
export { /** @internal */ Parser } from './parser/index.js';
export { serialize, serializeOuter } from './serializer/index.js';
export { ERR as ErrorCodes } from './common/error-codes.js';
/** @internal */
export * as foreignContent from './common/foreign-content.js';
export * as html from './common/html.js';
export * as Token from './common/token.js';
/** @internal */
export { Tokenizer, TokenizerMode } from './tokenizer/index.js';
// Shorthands
/**
 * Parses an HTML string.
 *
 * @param html Input HTML string.
 * @param options Parsing options.
 * @returns Document
 *
 * @example
 *
 * ```js
 * const parse5 = require('parse5');
 *
 * const document = parse5.parse('<!DOCTYPE html><html><head></head><body>Hi there!</body></html>');
 *
 * console.log(document.childNodes[1].tagName); //> 'html'
 *```
 */
export function parse(html, options) {
    return Parser.parse(html, options);
}
export function parseFragment(fragmentContext, html, options) {
    if (typeof fragmentContext === 'string') {
        options = html;
        html = fragmentContext;
        fragmentContext = null;
    }
    const parser = Parser.getFragmentParser(fragmentContext, options);
    parser.tokenizer.write(html, true);
    return parser.getFragment();
}
